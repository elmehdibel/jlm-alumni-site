import { u } from '../lib/url';

// Contenu central du site JLM Alumni.
// Modifier ici les textes, chiffres, partenaires et coordonnées : toutes les pages s'en servent.

export const contact = {
  adresse: ["Complexe Social INDH, Sidi Maarouf", "Préfecture d'arrondissement Aïn Chock", "Casablanca, Maroc"],
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
export const chiffres = {
  creationJlm: "2011",
  creationAlumni: "2018",
  etudiants: "+10 000",
  ecoles: "+50",
  laureats: "+100",
  beneficiaires: "+300k",
  projetsCompetition: "+130",
  participantsCompetition: "+1 200",
  visiteursCompetition: "3 000",
};

export const navigation = [
  { label: "À propos", href: u("/a-propos") },
  { label: "Programmes", href: u("/programmes") },
  { label: "Avec Stellantis", href: u("/stellantis") },
  { label: "Événements", href: u("/evenements") },
  { label: "Partenaires", href: u("/partenaires") },
];

export const programmes = [
  {
    id: "academy",
    nom: "Academy",
    titre: "JLM Academy",
    couleur: "green",
    image: u("/images/prog-academy.jpg"),
    resume: "Gestion de projets, soft skills et préparation aux compétitions.",
    description:
      "JLM Academy forme les étudiants porteurs de projets aux compétences clés de l'entrepreneur social : de l'idée au pitch, en passant par la gestion d'équipe et la recherche de partenaires.",
    points: ["Gestion de projets", "Soft skills et prise de parole", "Préparation aux compétitions", "Coaching par des lauréats"],
  },
  {
    id: "orientation",
    nom: "Orientation",
    titre: "JLM Orientation",
    couleur: "yellow",
    image: u("/images/prog-orientation.jpg"),
    resume: "Ateliers, sessions d'orientation et rencontres avec des professionnels.",
    description:
      "JLM Orientation accompagne les jeunes dans leurs choix d'études et de carrière, avec des sessions collectives, des ateliers pratiques et des échanges directs avec des professionnels.",
    points: ["Sessions d'orientation scolaire", "Ateliers soft skills", "Rencontres avec des professionnels", "Accompagnement personnalisé"],
  },
  {
    id: "sante",
    nom: "Santé",
    titre: "JLM Santé",
    couleur: "red",
    image: u("/images/prog-sante.jpg"),
    resume: "Caravanes médicales gratuites, secourisme et sensibilisation.",
    description:
      "Créé en 2018, JLM Santé mobilise lauréats et professionnels de santé au service des populations : caravanes médicales gratuites, formations aux premiers secours et campagnes de sensibilisation.",
    points: ["Caravanes médicales gratuites", "Centre éducatif et thérapeutique", "Formation au secourisme", "Campagnes de sensibilisation"],
  },
];

export const saison = [
  {
    nom: "Kick-off",
    quand: "Rentrée",
    couleur: "green",
    image: u("/images/kickoff.jpg"),
    texte: "L'ouverture officielle de la saison et le lancement des équipes dans les écoles et universités.",
  },
  {
    nom: "Bootcamps régionaux",
    quand: "Toute l'année",
    couleur: "yellow",
    image: u("/images/bootcamp.jpg"),
    texte: "Des sessions intensives dans toutes les régions du Royaume pour faire grandir les projets.",
  },
  {
    nom: "Compétition nationale",
    quand: "Fin d'année",
    couleur: "red",
    image: u("/images/competition-salle.jpg"),
    texte: "La grande finale : +130 projets, +1 200 participants, 3 000 visiteurs et un jury réunissant gouvernement, entreprises et médias.",
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

export const partenaires = [
  { nom: "INDH", logo: u("/images/partenaires/indh.png"), type: "institution" },
  { nom: "Entraide Nationale", logo: u("/images/partenaires/entraide-nationale.png"), type: "institution" },
  { nom: "ANAPEC", logo: u("/images/partenaires/anapec.jpg"), type: "institution" },
  { nom: "Dar Al Moukawil", logo: u("/images/partenaires/dar-al-moukawil.jpg"), type: "institution" },
  { nom: "Stellantis", logo: u("/images/partenaires/stellantis.png"), type: "entreprise" },
  { nom: "ManpowerGroup", logo: u("/images/partenaires/manpowergroup.png"), type: "entreprise" },
  { nom: "LabelVie", logo: u("/images/partenaires/labelvie.png"), type: "entreprise" },
  { nom: "Artus Maroc", logo: u("/images/partenaires/artus-maroc.png"), type: "entreprise" },
  { nom: "Heliolys", logo: u("/images/partenaires/heliolys.png"), type: "entreprise" },
  { nom: "IMVL", logo: u("/images/partenaires/imvl.png"), type: "entreprise" },
  { nom: "Soudal", logo: u("/images/partenaires/soudal.png"), type: "entreprise" },
  { nom: "Mikafric", logo: u("/images/partenaires/mikafric.jpg"), type: "entreprise" },
];

// Équipes JLM actives, par ville (liste à jour fournie par le bureau, novembre 2026).
export const reseau = [
  { ville: "Casablanca", lat: 33.5731, lon: -7.5898, ecoles: ["ISCAE", "FSJES Aïn Chock", "EST Casa", "ENSAM Casa", "ESITH", "ESCA"] },
  { ville: "Rabat", lat: 34.0209, lon: -6.8416, ecoles: ["FMP Rabat", "ESI", "FSR", "EMSI Rabat"] },
  { ville: "Mohammedia", lat: 33.6866, lon: -7.383, ecoles: ["ENSET Mohammedia"] },
  { ville: "Kénitra", lat: 34.261, lon: -6.5802, ecoles: ["ENSA Kénitra"] },
  { ville: "Tanger", lat: 35.7595, lon: -5.834, ecoles: ["EMSI Tanger", "ENCG Tanger"] },
  { ville: "Fès", lat: 34.0181, lon: -5.0078, ecoles: ["FMP Fès", "Euromed"] },
  { ville: "Meknès", lat: 33.8935, lon: -5.5473, ecoles: ["EST Meknès", "ENCG Meknès"] },
  { ville: "Béni Mellal", lat: 32.3373, lon: -6.3498, ecoles: ["ENCG Béni Mellal", "ENSA Béni Mellal"] },
  { ville: "Khouribga", lat: 32.8811, lon: -6.9063, ecoles: ["FP Khouribga", "ENSA Khouribga"] },
  { ville: "Marrakech", lat: 31.6295, lon: -7.9811, ecoles: ["ENCG Marrakech", "ENSA Marrakech"] },
  { ville: "Agadir", lat: 30.4278, lon: -9.5981, ecoles: ["ENCG Agadir", "Universiapolis"] },
  { ville: "Dakhla", lat: 23.6848, lon: -15.958, ecoles: ["ENCG Dakhla"] },
];

// Formulaires : identifiants Formspree (https://formspree.io), à renseigner après création du formulaire.
export const formulaires = {
  teamLeader: "xdegpaap", // https://formspree.io/f/xdegpaap → contact@jlmalumni.com
  dsff: "xppdoqda", // Inscription Digital Skills For Future
  dsu: "xwlowvov", // Candidature Digital Startup Incubation
};
