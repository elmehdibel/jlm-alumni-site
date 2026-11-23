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
  { label: "À propos", href: "/a-propos" },
  { label: "Programmes", href: "/programmes" },
  { label: "Événements", href: "/evenements" },
  { label: "Partenaires", href: "/partenaires" },
];

export const programmes = [
  {
    id: "academy",
    nom: "Academy",
    titre: "JLM Academy",
    couleur: "green",
    image: "/images/prog-academy.jpg",
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
    image: "/images/prog-orientation.jpg",
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
    image: "/images/prog-sante.jpg",
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
    image: "/images/kickoff.jpg",
    texte: "L'ouverture officielle de la saison et le lancement des équipes dans les écoles et universités.",
  },
  {
    nom: "Bootcamps régionaux",
    quand: "Toute l'année",
    couleur: "yellow",
    image: "/images/bootcamp.jpg",
    texte: "Des sessions intensives dans toutes les régions du Royaume pour faire grandir les projets.",
  },
  {
    nom: "Compétition nationale",
    quand: "Fin d'année",
    couleur: "red",
    image: "/images/competition-salle.jpg",
    texte: "La grande finale : +130 projets, +1 200 participants, 3 000 visiteurs et un jury réunissant gouvernement, entreprises et médias.",
  },
];

export const galerie = [
  "/images/competition-foule.jpg",
  "/images/remise-prix.jpg",
  "/images/groupe-scene.jpg",
  "/images/trophee.jpg",
  "/images/celebration.jpg",
  "/images/grand-groupe.jpg",
  "/images/groupe-blanc-1.jpg",
  "/images/soiree.jpg",
  "/images/competition-scene.jpg",
];

export const partenaires = [
  { nom: "INDH", logo: "/images/partenaires/indh.png", type: "institution" },
  { nom: "Entraide Nationale", logo: "/images/partenaires/entraide-nationale.png", type: "institution" },
  { nom: "ANAPEC", logo: "/images/partenaires/anapec.jpg", type: "institution" },
  { nom: "Dar Al Moukawil", logo: "/images/partenaires/dar-al-moukawil.jpg", type: "institution" },
  { nom: "Stellantis", logo: "/images/partenaires/stellantis.png", type: "entreprise" },
  { nom: "ManpowerGroup", logo: "/images/partenaires/manpowergroup.png", type: "entreprise" },
  { nom: "LabelVie", logo: "/images/partenaires/labelvie.png", type: "entreprise" },
  { nom: "Artus Maroc", logo: "/images/partenaires/artus-maroc.png", type: "entreprise" },
  { nom: "Heliolys", logo: "/images/partenaires/heliolys.png", type: "entreprise" },
  { nom: "IMVL", logo: "/images/partenaires/imvl.png", type: "entreprise" },
  { nom: "Soudal", logo: "/images/partenaires/soudal.png", type: "entreprise" },
  { nom: "Mikafric", logo: "/images/partenaires/mikafric.jpg", type: "entreprise" },
];
