/**
 * Service d'envoi des formulaires du site JLM Alumni.
 *
 * Reçoit les formulaires du site (POST /submit/<formulaire>), vérifie l'anti-spam Cloudflare Turnstile,
 * puis envoie la candidature par email depuis la boîte Microsoft 365 (Microsoft Graph), CV en pièce jointe.
 *
 * Secrets (à définir avec `npx wrangler secret put NOM`) :
 *   TENANT_ID, CLIENT_ID, CLIENT_SECRET  → application Microsoft Entra « JLM Site Formulaires »
 *   TURNSTILE_SECRET                     → clé secrète du widget Turnstile
 * Variables (wrangler.toml) : SENDER, RECIPIENT, ALLOWED_ORIGINS, DRY_RUN
 */

export interface Env {
  TENANT_ID: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  TURNSTILE_SECRET: string;
  SENDER: string;
  RECIPIENT: string;
  ALLOWED_ORIGINS: string;
  DRY_RUN?: string; // "1" = mode essai : ni anti-spam ni envoi, renvoie ce qui aurait été envoyé
}

type Champ = [nom: string, libelle: string, optionnel?: boolean];
type Formulaire = { sujet: string; cv: boolean; champs: Champ[] };

const IDENTITE: Champ[] = [
  ['prenom', 'Prénom'],
  ['nom', 'Nom'],
  ['email', 'Email'],
  ['telephone', 'Téléphone'],
];

const FORMULAIRES: Record<string, Formulaire> = {
  teamleader: {
    sujet: 'Candidature Team Leader JLM',
    cv: true,
    champs: [
      ...IDENTITE,
      ['region', 'Région'],
      ['ville', 'Ville'],
      ['ville_precision', 'Ville (précision)', true],
      ['ecole', 'École / université'],
      ['ancien_membre', 'Ancien membre JLM'],
      ['motivations', 'Motivations'],
    ],
  },
  dsff: {
    sujet: 'Inscription Digital Skills For Future',
    cv: false,
    champs: [...IDENTITE, ['adresse', 'Adresse'], ['raison', "Raison de l'inscription"]],
  },
  dsu: {
    sujet: 'Candidature Digital Startup Incubation',
    cv: true,
    champs: [
      ...IDENTITE,
      ['adresse', 'Adresse'],
      ['membre_jlm', 'Membre JLM'],
      ['equipe', 'Équipe JLM', true],
      ['raison', "Raison de l'inscription"],
    ],
  },
  alumni: {
    sujet: 'Candidature Référent JLM Alumni',
    cv: true,
    champs: [
      ...IDENTITE,
      ['ville', 'Ville'],
      ['anciennes_equipes', 'Ancienne(s) équipe(s) JLM'],
      ['poste', "Poste au sein de l'équipe"],
      ['motivation', 'Motivation'],
    ],
  },
};

const CV_MAX = 3 * 1024 * 1024; // limite Microsoft Graph pour une pièce jointe simple
const CV_TYPES: Record<string, string> = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
const TEXTE_MAX = 5000;

// ——— utilitaires ———
const json = (data: unknown, status: number, cors: Record<string, string>) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...cors } });

const echapper = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function enBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

function enTetesCors(origin: string | null, env: Env): Record<string, string> {
  const autorises = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
  const ok = origin && autorises.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin! : autorises[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

async function verifierTurnstile(token: string, ip: string | null, env: Env) {
  const corps = new FormData();
  corps.append('secret', env.TURNSTILE_SECRET);
  corps.append('response', token);
  if (ip) corps.append('remoteip', ip);
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: corps });
  const d = (await r.json()) as { success: boolean; 'error-codes'?: string[]; hostname?: string };
  if (!d.success) console.warn('Turnstile refusé', JSON.stringify({ codes: d['error-codes'], hostname: d.hostname }));
  return d.success === true;
}

let jeton: { valeur: string; expire: number } | null = null;
async function jetonGraph(env: Env) {
  if (jeton && jeton.expire > Date.now() + 60_000) return jeton.valeur;
  const r = await fetch(`https://login.microsoftonline.com/${env.TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.CLIENT_ID,
      client_secret: env.CLIENT_SECRET,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });
  if (!r.ok) throw new Error(`Jeton Microsoft refusé (${r.status}) : ${await r.text()}`);
  const d = (await r.json()) as { access_token: string; expires_in: number };
  jeton = { valeur: d.access_token, expire: Date.now() + d.expires_in * 1000 };
  return jeton.valeur;
}

// ——— traitement ———
export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const cors = enTetesCors(req.headers.get('Origin'), env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    const url = new URL(req.url);
    if (req.method === 'GET' && url.pathname === '/') return json({ ok: true, service: 'jlm-formulaires' }, 200, cors);

    const m = url.pathname.match(/^\/submit\/([a-z]+)$/);
    const def = m ? FORMULAIRES[m[1]] : undefined;
    if (req.method !== 'POST' || !def) return json({ ok: false, erreur: 'introuvable' }, 404, cors);

    let donnees: FormData;
    try {
      donnees = await req.formData();
    } catch {
      return json({ ok: false, erreur: 'formulaire illisible' }, 400, cors);
    }

    // Piège à robots : champ invisible rempli → on fait semblant d'accepter.
    if (String(donnees.get('_gotcha') ?? '').trim()) return json({ ok: true }, 200, cors);

    const essai = env.DRY_RUN === '1';
    if (!essai) {
      const token = String(donnees.get('cf-turnstile-response') ?? '');
      if (!token) console.warn('Turnstile : jeton absent');
      if (!token || !(await verifierTurnstile(token, req.headers.get('CF-Connecting-IP'), env)))
        return json({ ok: false, erreur: 'anti-spam' }, 403, cors);
    }

    // Champs
    const valeurs: [string, string][] = [];
    for (const [nom, libelle, optionnel] of def.champs) {
      const v = String(donnees.get(nom) ?? '').trim().slice(0, TEXTE_MAX);
      if (!v && !optionnel) return json({ ok: false, erreur: `champ manquant : ${nom}` }, 400, cors);
      if (v) valeurs.push([libelle, v]);
    }
    const email = String(donnees.get('email') ?? '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, erreur: 'email invalide' }, 400, cors);
    const langue = String(donnees.get('langue') ?? '').trim();
    if (langue) valeurs.push(['Langue du formulaire', langue]);

    // CV (facultatif)
    let pieceJointe: { name: string; contentType: string; contentBytes: string } | null = null;
    const cv = donnees.get('cv');
    if (def.cv && cv && typeof cv !== 'string' && cv.size > 0) {
      const ext = (cv.name.split('.').pop() ?? '').toLowerCase();
      if (!CV_TYPES[ext]) return json({ ok: false, erreur: 'format de CV' }, 400, cors);
      if (cv.size > CV_MAX) return json({ ok: false, erreur: 'CV trop lourd' }, 400, cors);
      const nomFichier = `CV - ${donnees.get('prenom')} ${donnees.get('nom')}.${ext}`.replace(/[\\/:*?"<>|]/g, '');
      pieceJointe = { name: nomFichier, contentType: CV_TYPES[ext], contentBytes: enBase64(await cv.arrayBuffer()) };
    }

    const nomComplet = `${donnees.get('prenom')} ${donnees.get('nom')}`.trim();
    const sujet = `${def.sujet} — ${nomComplet}`;
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#0c0d0c">
<h2 style="margin:0 0 12px">${echapper(def.sujet)}</h2>
<table cellpadding="8" style="border-collapse:collapse;border:1px solid #e6e6e1">
${valeurs.map(([l, v]) => `<tr><td style="background:#f4f4f1;font-weight:bold;vertical-align:top;border:1px solid #e6e6e1">${echapper(l)}</td><td style="border:1px solid #e6e6e1;white-space:pre-wrap">${echapper(v)}</td></tr>`).join('\n')}
</table>
<p style="color:#5f625f;font-size:12px">${pieceJointe ? `CV joint : ${echapper(pieceJointe.name)}` : 'Pas de CV joint.'} · Envoyé depuis le site jlmalumni.com · Répondre à cet email écrit directement au candidat.</p>
</div>`;

    if (essai) {
      return json({ ok: true, essai: true, sujet, champs: valeurs, cv: pieceJointe && { nom: pieceJointe.name, type: pieceJointe.contentType, octets: (cv as File).size } }, 200, cors);
    }

    try {
      const token = await jetonGraph(env);
      const r = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(env.SENDER)}/sendMail`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: {
            subject: sujet,
            body: { contentType: 'HTML', content: html },
            toRecipients: [{ emailAddress: { address: env.RECIPIENT } }],
            replyTo: [{ emailAddress: { address: email, name: nomComplet } }],
            attachments: pieceJointe ? [{ '@odata.type': '#microsoft.graph.fileAttachment', ...pieceJointe }] : [],
          },
          saveToSentItems: false,
        }),
      });
      if (r.status !== 202) throw new Error(`Envoi refusé (${r.status}) : ${await r.text()}`);
      console.log(`Envoyé : formulaire ${m![1]}`);
      return json({ ok: true }, 200, cors);
    } catch (e) {
      console.error(e);
      return json({ ok: false, erreur: 'envoi' }, 502, cors);
    }
  },
};
