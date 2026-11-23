// Les 12 régions du Maroc et leurs principales villes (utilisé par le formulaire Team Leader).
// Une ville manquante ? L'ajouter dans la bonne région : la liste se met à jour toute seule.
export const regions: { nom: string; villes: string[] }[] = [
  {
    nom: "Tanger-Tétouan-Al Hoceïma",
    villes: ["Tanger", "Tétouan", "Al Hoceïma", "Larache", "Ksar El Kébir", "Chefchaouen", "Ouazzane", "Asilah", "Fnideq", "M'diq", "Martil", "Imzouren", "Targuist", "Bni Bouayach", "Oued Laou"],
  },
  {
    nom: "L'Oriental",
    villes: ["Oujda", "Nador", "Berkane", "Taourirt", "Guercif", "Jerada", "Driouch", "Figuig", "Bouarfa", "Zaïo", "Selouane", "Al Aroui", "Saïdia", "Ahfir", "El Aïoun Sidi Mellouk"],
  },
  {
    nom: "Fès-Meknès",
    villes: ["Fès", "Meknès", "Taza", "Ifrane", "Sefrou", "Azrou", "El Hajeb", "Taounate", "Moulay Yacoub", "Boulemane", "Missour", "Imouzzer Kandar", "Tahla", "Aïn Taoujdate", "Moulay Idriss Zerhoun", "Ribat El Kheir", "Karia Ba Mohamed"],
  },
  {
    nom: "Rabat-Salé-Kénitra",
    villes: ["Rabat", "Salé", "Kénitra", "Témara", "Skhirat", "Khémisset", "Tiflet", "Rommani", "Sidi Kacem", "Sidi Slimane", "Souk El Arbaa", "Sidi Yahya El Gharb", "Mechra Bel Ksiri", "Mehdia", "Aïn El Aouda", "Harhoura"],
  },
  {
    nom: "Béni Mellal-Khénifra",
    villes: ["Béni Mellal", "Khouribga", "Khénifra", "Fkih Ben Salah", "Azilal", "Kasba Tadla", "Oued Zem", "Bejaâd", "Souk Sebt Oulad Nemma", "Demnate", "M'rirt", "Boujniba", "Ouaouizeght", "Zaouiat Cheikh"],
  },
  {
    nom: "Casablanca-Settat",
    villes: ["Casablanca", "Mohammedia", "El Jadida", "Settat", "Berrechid", "Benslimane", "Bouskoura", "Dar Bouazza", "Médiouna", "Nouaceur", "Tit Mellil", "Had Soualem", "Azemmour", "Sidi Bennour", "Bir Jdid", "Ben Ahmed", "El Gara", "Sidi Rahal"],
  },
  {
    nom: "Marrakech-Safi",
    villes: ["Marrakech", "Safi", "Essaouira", "El Kelaâ des Sraghna", "Ben Guerir", "Youssoufia", "Chichaoua", "Tamansourt", "Tahannaout", "Aït Ourir", "Amizmiz", "Chemaïa", "Sidi Bou Othmane", "Jemâa Shaïm"],
  },
  {
    nom: "Drâa-Tafilalet",
    villes: ["Errachidia", "Ouarzazate", "Midelt", "Tinghir", "Zagora", "Erfoud", "Rissani", "Goulmima", "Tinejdad", "Kelaat M'Gouna", "Boumalne Dadès", "Agdz", "Rich"],
  },
  {
    nom: "Souss-Massa",
    villes: ["Agadir", "Inezgane", "Aït Melloul", "Dcheira El Jihadia", "Taroudant", "Tiznit", "Tata", "Biougra", "Oulad Teïma", "Lqliâa", "Taliouine", "Tafraout"],
  },
  {
    nom: "Guelmim-Oued Noun",
    villes: ["Guelmim", "Tan-Tan", "Sidi Ifni", "Assa", "Zag", "Bouizakarne", "El Ouatia"],
  },
  {
    nom: "Laâyoune-Sakia El Hamra",
    villes: ["Laâyoune", "Boujdour", "Es-Semara", "Tarfaya", "El Marsa"],
  },
  {
    nom: "Dakhla-Oued Ed-Dahab",
    villes: ["Dakhla", "Aousserd", "Bir Gandouz"],
  },
];
