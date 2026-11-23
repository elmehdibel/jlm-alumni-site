import { u } from '../lib/url';
import type { L } from '../i18n';

// Contenu central du site JLM Alumni, en français (fr) et en arabe (ar).
// Modifier ici les textes, chiffres, partenaires et coordonnées : toutes les pages s'en servent.

export const contact = {
  adresse: [
    { fr: "Complexe Social INDH, Sidi Maarouf", ar: "المركب الاجتماعي للمبادرة الوطنية للتنمية البشرية، سيدي معروف" },
    { fr: "Préfecture d'arrondissement Aïn Chock", ar: "عمالة مقاطعات عين الشق" },
    { fr: "Casablanca, Maroc", ar: "الدار البيضاء، المغرب" },
  ] as L[],
  email: "contact@jlmalumni.com",
  telephone: "+212 6 47 00 80 00",
  telephoneLien: "+212647008000",
  reseaux: [
    { nom: "LinkedIn", url: "https://www.linkedin.com/company/jeunes-leaders-marocains-alumni-jlm-alumni" },
    { nom: "Instagram", url: "https://www.instagram.com/jlm.alumni" },
    { nom: "Facebook", url: "https://www.facebook.com/profile.php?id=100069950896657" },
  ],
};

// ⚠️ Chiffres repris de l'ancien site : à faire valider par le bureau.
// Les nombres sont isolés (⁨…⁩) pour s'afficher correctement dans le texte arabe (droite à gauche).
const iso = (v: string) => `\u2068${v}\u2069`;
export const chiffres = {
  creationJlm: "2011",
  creationAlumni: "2018",
  etudiants: iso("+10 000"),
  ecoles: iso("+50"),
  laureats: iso("+100"),
  beneficiaires: { fr: "+300k", ar: iso("+300 000") } as L,
  projetsCompetition: iso("+130"),
  participantsCompetition: iso("+1 200"),
  visiteursCompetition: iso("3 000"),
};

// Menu principal (les liens sont mis dans la bonne langue par l'en-tête).
export const navigation: { label: L; path: string }[] = [
  { label: { fr: "À propos", ar: "من نحن" }, path: "/a-propos" },
  { label: { fr: "Programmes", ar: "برامجنا" }, path: "/programmes" },
  { label: { fr: "Avec Stellantis", ar: "مع ستيلانتيس" }, path: "/stellantis" },
  { label: { fr: "Événements", ar: "الفعاليات" }, path: "/evenements" },
  { label: { fr: "Partenaires", ar: "شركاؤنا" }, path: "/partenaires" },
];

export const programmes = [
  {
    id: "academy",
    nom: { fr: "Academy", ar: "الأكاديمية" },
    titre: { fr: "JLM Academy", ar: "أكاديمية JLM" },
    couleur: "green",
    image: u("/images/prog-academy.jpg"),
    resume: {
      fr: "Gestion de projets, soft skills et préparation aux compétitions.",
      ar: "تدبير المشاريع، المهارات الناعمة والتحضير للمسابقات.",
    },
    description: {
      fr: "JLM Academy forme les étudiants porteurs de projets aux compétences clés de l'entrepreneur social : de l'idée au pitch, en passant par la gestion d'équipe et la recherche de partenaires.",
      ar: "تُكوّن أكاديمية JLM الطلبة حاملي المشاريع على المهارات الأساسية لريادة الأعمال الاجتماعية: من الفكرة إلى العرض، مرورًا بتدبير الفريق والبحث عن الشركاء.",
    },
    points: [
      { fr: "Gestion de projets", ar: "تدبير المشاريع" },
      { fr: "Soft skills et prise de parole", ar: "المهارات الناعمة وفن الإلقاء" },
      { fr: "Préparation aux compétitions", ar: "التحضير للمسابقات" },
      { fr: "Coaching par des lauréats", ar: "مواكبة من طرف الخريجين" },
    ],
  },
  {
    id: "orientation",
    nom: { fr: "Orientation", ar: "التوجيه" },
    titre: { fr: "JLM Orientation", ar: "توجيه JLM" },
    couleur: "yellow",
    image: u("/images/prog-orientation.jpg"),
    resume: {
      fr: "Ateliers, sessions d'orientation et rencontres avec des professionnels.",
      ar: "ورشات، حصص توجيهية ولقاءات مع مهنيين.",
    },
    description: {
      fr: "JLM Orientation accompagne les jeunes dans leurs choix d'études et de carrière, avec des sessions collectives, des ateliers pratiques et des échanges directs avec des professionnels.",
      ar: "يواكب برنامج توجيه JLM الشباب في اختياراتهم الدراسية والمهنية، من خلال حصص جماعية وورشات تطبيقية ولقاءات مباشرة مع مهنيين.",
    },
    points: [
      { fr: "Sessions d'orientation scolaire", ar: "حصص التوجيه المدرسي" },
      { fr: "Ateliers soft skills", ar: "ورشات المهارات الناعمة" },
      { fr: "Rencontres avec des professionnels", ar: "لقاءات مع مهنيين" },
      { fr: "Accompagnement personnalisé", ar: "مواكبة شخصية" },
    ],
  },
  {
    id: "sante",
    nom: { fr: "Santé", ar: "الصحة" },
    titre: { fr: "JLM Santé", ar: "صحة JLM" },
    couleur: "red",
    image: u("/images/prog-sante.jpg"),
    resume: {
      fr: "Caravanes médicales gratuites, secourisme et sensibilisation.",
      ar: "قوافل طبية مجانية، إسعافات أولية وتحسيس.",
    },
    description: {
      fr: "Créé en 2018, JLM Santé mobilise lauréats et professionnels de santé au service des populations : caravanes médicales gratuites, formations aux premiers secours et campagnes de sensibilisation.",
      ar: "أُطلق برنامج صحة JLM سنة 2018، ويُعبّئ الخريجين ومهنيي الصحة لخدمة الساكنة: قوافل طبية مجانية، وتكوينات في الإسعافات الأولية، وحملات تحسيسية.",
    },
    points: [
      { fr: "Caravanes médicales gratuites", ar: "قوافل طبية مجانية" },
      { fr: "Centre éducatif et thérapeutique", ar: "مركز تربوي وعلاجي" },
      { fr: "Formation au secourisme", ar: "التكوين في الإسعافات الأولية" },
      { fr: "Campagnes de sensibilisation", ar: "حملات تحسيسية" },
    ],
  },
];

export const saison = [
  {
    nom: { fr: "Kick-off", ar: "الانطلاقة" },
    quand: { fr: "Rentrée", ar: "الدخول الجامعي" },
    couleur: "green",
    image: u("/images/kickoff.jpg"),
    texte: {
      fr: "L'ouverture officielle de la saison et le lancement des équipes dans les écoles et universités.",
      ar: "الافتتاح الرسمي للموسم وإطلاق الفرق داخل المدارس والجامعات.",
    },
  },
  {
    nom: { fr: "Bootcamps régionaux", ar: "المعسكرات الجهوية" },
    quand: { fr: "Toute l'année", ar: "طوال السنة" },
    couleur: "yellow",
    image: u("/images/bootcamp.jpg"),
    texte: {
      fr: "Des sessions intensives dans toutes les régions du Royaume pour faire grandir les projets.",
      ar: "دورات مكثفة في جميع جهات المملكة لتطوير المشاريع.",
    },
  },
  {
    nom: { fr: "Compétition nationale", ar: "المسابقة الوطنية" },
    quand: { fr: "Fin d'année", ar: "نهاية السنة" },
    couleur: "red",
    image: u("/images/competition-salle.jpg"),
    texte: {
      fr: "La grande finale : +130 projets, +1 200 participants, 3 000 visiteurs et un jury réunissant gouvernement, entreprises et médias.",
      ar: "النهائي الكبير: أكثر من 130 مشروعًا و1200 مشارك و3000 زائر، ولجنة تحكيم تضم ممثلين عن الحكومة والمقاولات ووسائل الإعلام.",
    },
  },
];

export const galerie = [
  u("/images/competition-foule.jpg"),
  u("/images/remise-prix.jpg"),
  u("/images/groupe-scene.jpg"),
  u("/images/trophee.jpg"),
  u("/images/celebration.jpg"),
  u("/images/grand-groupe.jpg"),
  u("/images/groupe-blanc-1.jpg"),
  u("/images/soiree.jpg"),
  u("/images/competition-scene.jpg"),
];

export const partenaires: { nom: L; logo: string; type: string }[] = [
  { nom: { fr: "INDH", ar: "المبادرة الوطنية للتنمية البشرية" }, logo: u("/images/partenaires/indh.png"), type: "institution" },
  { nom: { fr: "Entraide Nationale", ar: "التعاون الوطني" }, logo: u("/images/partenaires/entraide-nationale.png"), type: "institution" },
  { nom: { fr: "ANAPEC", ar: "أنابيك" }, logo: u("/images/partenaires/anapec.jpg"), type: "institution" },
  { nom: { fr: "Dar Al Moukawil", ar: "دار المقاول" }, logo: u("/images/partenaires/dar-al-moukawil.jpg"), type: "institution" },
  { nom: { fr: "Stellantis", ar: "Stellantis" }, logo: u("/images/partenaires/stellantis.png"), type: "entreprise" },
  { nom: { fr: "ManpowerGroup", ar: "ManpowerGroup" }, logo: u("/images/partenaires/manpowergroup.png"), type: "entreprise" },
  { nom: { fr: "LabelVie", ar: "LabelVie" }, logo: u("/images/partenaires/labelvie.png"), type: "entreprise" },
  { nom: { fr: "Artus Maroc", ar: "Artus Maroc" }, logo: u("/images/partenaires/artus-maroc.png"), type: "entreprise" },
  { nom: { fr: "Heliolys", ar: "Heliolys" }, logo: u("/images/partenaires/heliolys.png"), type: "entreprise" },
  { nom: { fr: "IMVL", ar: "IMVL" }, logo: u("/images/partenaires/imvl.png"), type: "entreprise" },
  { nom: { fr: "Soudal", ar: "Soudal" }, logo: u("/images/partenaires/soudal.png"), type: "entreprise" },
  { nom: { fr: "Mikafric", ar: "Mikafric" }, logo: u("/images/partenaires/mikafric.jpg"), type: "entreprise" },
];

// Équipes JLM actives, par ville (liste à jour fournie par le bureau, novembre 2026).
// Les noms d'équipes (sigles d'écoles) restent en lettres latines dans les deux langues.
export const reseau: { ville: L; lat: number; lon: number; ecoles: string[] }[] = [
  { ville: { fr: "Casablanca", ar: "الدار البيضاء" }, lat: 33.5731, lon: -7.5898, ecoles: ["ISCAE", "FSJES Aïn Chock", "EST Casa", "ENSAM Casa", "ESITH", "ESCA"] },
  { ville: { fr: "Rabat", ar: "الرباط" }, lat: 34.0209, lon: -6.8416, ecoles: ["FMP Rabat", "ESI", "FSR", "EMSI Rabat"] },
  { ville: { fr: "Mohammedia", ar: "المحمدية" }, lat: 33.6866, lon: -7.383, ecoles: ["ENSET Mohammedia"] },
  { ville: { fr: "Kénitra", ar: "القنيطرة" }, lat: 34.261, lon: -6.5802, ecoles: ["ENSA Kénitra"] },
  { ville: { fr: "Tanger", ar: "طنجة" }, lat: 35.7595, lon: -5.834, ecoles: ["EMSI Tanger", "ENCG Tanger"] },
  { ville: { fr: "Fès", ar: "فاس" }, lat: 34.0181, lon: -5.0078, ecoles: ["FMP Fès", "Euromed"] },
  { ville: { fr: "Meknès", ar: "مكناس" }, lat: 33.8935, lon: -5.5473, ecoles: ["EST Meknès", "ENCG Meknès"] },
  { ville: { fr: "Béni Mellal", ar: "بني ملال" }, lat: 32.3373, lon: -6.3498, ecoles: ["ENCG Béni Mellal", "ENSA Béni Mellal"] },
  { ville: { fr: "Khouribga", ar: "خريبكة" }, lat: 32.8811, lon: -6.9063, ecoles: ["FP Khouribga", "ENSA Khouribga"] },
  { ville: { fr: "Marrakech", ar: "مراكش" }, lat: 31.6295, lon: -7.9811, ecoles: ["ENCG Marrakech", "ENSA Marrakech"] },
  { ville: { fr: "Agadir", ar: "أكادير" }, lat: 30.4278, lon: -9.5981, ecoles: ["ENCG Agadir", "Universiapolis"] },
  { ville: { fr: "Dakhla", ar: "الداخلة" }, lat: 23.6848, lon: -15.958, ecoles: ["ENCG Dakhla"] },
];

// Service d'envoi maison (dossier /worker) : quand `url` est renseignée, les formulaires passent par lui
// (envoi depuis contact@ via Microsoft 365, CV en pièce jointe, anti-spam Turnstile) au lieu de Formspree.
export const service = {
  url: "", // ex. "https://jlm-formulaires.xxxx.workers.dev"
  turnstile: "", // clé publique (site key) du widget Cloudflare Turnstile
};

export type CleFormulaire = 'teamLeader' | 'dsff' | 'dsu' | 'alumni';
/** Adresse d'envoi d'un formulaire : service maison si configuré, sinon Formspree. */
export const adresseEnvoi = (cle: CleFormulaire) =>
  service.url
    ? `${service.url.replace(/\/$/, '')}/submit/${cle === 'teamLeader' ? 'teamleader' : cle}`
    : formulaires[cle] ? `https://formspree.io/f/${formulaires[cle]}` : '';
/** Le champ CV n'existe qu'avec le service maison (Formspree gratuit ne prend pas les fichiers). */
export const cvActif = () => !!service.url;

// Formulaires : identifiants Formspree (https://formspree.io), utilisés tant que le service maison n'est pas en place.
export const formulaires = {
  teamLeader: "xdegpaap", // https://formspree.io/f/xdegpaap → contact@jlmalumni.com
  dsff: "xppdoqda", // Inscription Digital Skills For Future
  dsu: "xwlowvov", // Candidature Digital Startup Incubation
  alumni: "xkjrpozn", // Candidature lauréats JLM (référents / accompagnateurs)
};
