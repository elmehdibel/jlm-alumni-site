# Service d'envoi des formulaires — configuration

Ce service (Cloudflare Worker) reçoit les formulaires du site et envoie chaque candidature par email
**depuis contact@jlmalumni.com vers contact@jlmalumni.com** (Microsoft 365), CV en pièce jointe.
Répondre à l'email écrit directement au candidat.

Quatre étapes, à faire une seule fois. Les étapes A et B demandent un compte **administrateur Microsoft 365**.

---

## A. Microsoft Entra — créer l'application (≈ 5 min)

Sur https://entra.microsoft.com (connecté en administrateur) :

1. **Applications → Inscriptions d'applications → Nouvelle inscription**
   - Nom : `JLM Site Formulaires`
   - Types de comptes : *Comptes dans cet annuaire d'organisation uniquement*
   - URI de redirection : laisser vide → **S'inscrire**
2. Sur la page de l'application, noter :
   - **ID d'application (client)** → `CLIENT_ID`
   - **ID de l'annuaire (locataire)** → `TENANT_ID`
3. **Autorisations de l'API → Ajouter une autorisation → Microsoft Graph → Autorisations d'application**
   → cocher **Mail.Send** → Ajouter.
   Puis cliquer **Accorder un consentement d'administrateur pour …** (la colonne État doit passer au vert).
4. **Certificats & secrets → Nouveau secret client** (expiration : 24 mois)
   → copier tout de suite la **Valeur** (pas l'ID) → `CLIENT_SECRET`.
   ⚠️ Elle ne sera plus affichée ensuite. Ne l'envoie à personne, pas même par chat.

> 📅 Le secret expire au bout de 24 mois : noter la date pour le renouveler (refaire l'étape A.4 puis D.3).

## B. Exchange — limiter l'application à la boîte contact@ (≈ 5 min, fortement recommandé)

Sans cette étape, l'application pourrait envoyer des emails depuis **n'importe quelle** boîte de l'association.

⚠️ Ces commandes sont du **PowerShell** : elles ne marchent pas dans le terminal Mac normal (zsh).
Installer PowerShell une fois, puis l'ouvrir — l'invite devient `PS …>` :

```bash
brew install --cask powershell
pwsh
```

Puis, **dans PowerShell**, coller les commandes une par une (remplacer la valeur de `$AppId` par
l'ID d'application (client) de l'étape A) :

```powershell
$AppId = "COLLE-ICI-L-ID-D-APPLICATION-CLIENT"
Install-Module ExchangeOnlineManagement -Scope CurrentUser
Connect-ExchangeOnline -UserPrincipalName admin@JLMAlumniMA.onmicrosoft.com
New-DistributionGroup -Name "Site JLM - envoi formulaires" -Alias site-formulaires -Type Security -Members contact@jlmalumni.com
New-ApplicationAccessPolicy -AppId $AppId -PolicyScopeGroupId site-formulaires -AccessRight RestrictAccess -Description "Envoi uniquement depuis contact"
Test-ApplicationAccessPolicy -Identity contact@jlmalumni.com -AppId $AppId
```

La dernière commande doit afficher **AccessCheckResult : Granted** (jusqu'à 1 h d'attente possible).
Pour quitter PowerShell : `exit`.

## C. Cloudflare — compte et anti-spam (≈ 5 min)

1. Créer un compte gratuit sur https://dash.cloudflare.com (idéalement avec une adresse de l'association).
2. **Workers & Pages** : choisir un sous-domaine `workers.dev` si Cloudflare le demande (ex. `jlmalumni`).
3. **Turnstile → Ajouter un widget**
   - Nom : `Site JLM`
   - Domaines : `jlmalumni.com`, `www.jlmalumni.com`, `localhost`
   - Mode : *Managed* → Créer
   - Noter la **Site Key** (publique, à transmettre) et la **Secret Key** (à garder pour l'étape D) → `TURNSTILE_SECRET`.

## D. Connexion et secrets (terminal)

```bash
cd ~/Documents/Claude/jlm-alumni-site/worker
npx wrangler login                    # ouvre le navigateur : autoriser Wrangler
```

Une fois le service déployé (étape faite par Claude après ta connexion), enregistrer les 4 secrets
— chaque commande demande de coller la valeur, qui n'apparaît pas à l'écran :

```bash
npx wrangler secret put TENANT_ID
npx wrangler secret put CLIENT_ID
npx wrangler secret put CLIENT_SECRET
npx wrangler secret put TURNSTILE_SECRET
```

## E. Activation sur le site

Dans `src/data/site.ts`, renseigner `service.url` (adresse du Worker) et `service.turnstile` (Site Key),
puis publier. Pour revenir à Formspree à tout moment : remettre `service.url` à `""` et publier.

## F. Tableaux SharePoint des candidatures (une liste par formulaire)

Chaque candidature est aussi enregistrée dans une liste SharePoint (Team Leader, DSFF, DSU, Lauréats),
avec une colonne **Statut** (Nouveau, À vérifier, En cours, Retenu, Non retenu) et le CV rangé dans
**Documents › CV**. Bouton **Exporter › Exporter vers Excel** dans chaque liste.

1. **Entra** : application *JLM Site Formulaires* → Autorisations de l'API → Ajouter → Microsoft Graph →
   Autorisations d'application → **Sites.Selected** → Ajouter, puis **Accorder un consentement d'administrateur**.
2. **SharePoint** : créer un site d'équipe privé *Candidatures JLM* (membres : les personnes qui traitent les candidatures).
3. **PowerShell** (`pwsh`) : `~/Documents/Claude/jlm-alumni-site/worker/sharepoint-acces.ps1`
   → demande l'adresse du site et l'ID d'application, donne à l'application l'accès à **ce site uniquement**
   et écrit son identifiant dans `worker/sharepoint-site.txt`.
4. Renseigner `SP_SITE_ID` dans `wrangler.toml`, déployer, puis appeler `POST /admin/setup`
   (en-tête `Authorization: Bearer <SETUP_TOKEN>`) : les listes sont créées et leurs identifiants
   sont à copier dans `SP_LISTES`, puis redéployer.

Si l'enregistrement SharePoint échoue, l'email part quand même avec un avertissement rouge en bas.

---

### En cas de souci

- Lancer `npx wrangler tail` puis refaire un envoi : le journal affiche le code d'erreur.
- `AADSTS7000215` → le secret client enregistré est l'**ID secret** au lieu de la **Valeur** : créer un nouveau secret (A.4) et refaire `wrangler secret put CLIENT_SECRET`.
- `AADSTS900023` → `TENANT_ID` incorrect (doit être l'ID de l'annuaire, au format `xxxxxxxx-xxxx-…`).
- `Turnstile refusé` → refaire `wrangler secret put TURNSTILE_SECRET` avec la Secret Key du widget.
- Sujet « [à vérifier] » : l'anti-spam est passé mais le champ piège a été rempli (souvent le remplissage automatique du navigateur).
- La case anti-spam échoue dans le navigateur intégré des outils d'automatisation : tester dans un navigateur normal. Le code Cloudflare s'affiche sous la case.

### Détails techniques

- Code : `worker/src/index.ts` · réglages : `worker/wrangler.toml` (expéditeur, destinataire, sites autorisés).
- CV : PDF, DOC ou DOCX, 3 Mo maximum, facultatif (formulaires Team Leader, DSU et Lauréats).
- Mode essai local : `npx wrangler dev --var DRY_RUN:1` (aucun email envoyé, aucun anti-spam).
- Journal des erreurs : `npx wrangler tail`.
- Coût : 0 € (Cloudflare Workers gratuit jusqu'à 100 000 requêtes/jour ; envoi via la licence Microsoft 365 existante).
