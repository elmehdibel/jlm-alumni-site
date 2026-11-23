// Les 12 régions du Maroc et leurs principales villes (formulaire Team Leader), en français et en arabe.
// Chaque ville : [nom français, nom arabe]. La valeur envoyée dans les candidatures reste en français.
// Une ville manquante ? L'ajouter dans la bonne région : la liste se met à jour toute seule.
import type { L } from '../i18n';

export const regions: { nom: L; villes: [string, string][] }[] = [
  {
    nom: { fr: "Tanger-Tétouan-Al Hoceïma", ar: "طنجة - تطوان - الحسيمة" },
    villes: [["Tanger", "طنجة"], ["Tétouan", "تطوان"], ["Al Hoceïma", "الحسيمة"], ["Larache", "العرائش"], ["Ksar El Kébir", "القصر الكبير"], ["Chefchaouen", "شفشاون"], ["Ouazzane", "وزان"], ["Asilah", "أصيلة"], ["Fnideq", "الفنيدق"], ["M'diq", "المضيق"], ["Martil", "مرتيل"], ["Imzouren", "إمزورن"], ["Targuist", "تارجيست"], ["Bni Bouayach", "بني بوعياش"], ["Oued Laou", "واد لاو"]],
  },
  {
    nom: { fr: "L'Oriental", ar: "الشرق" },
    villes: [["Oujda", "وجدة"], ["Nador", "الناظور"], ["Berkane", "بركان"], ["Taourirt", "تاوريرت"], ["Guercif", "جرسيف"], ["Jerada", "جرادة"], ["Driouch", "الدريوش"], ["Figuig", "فكيك"], ["Bouarfa", "بوعرفة"], ["Zaïo", "زايو"], ["Selouane", "سلوان"], ["Al Aroui", "العروي"], ["Saïdia", "السعيدية"], ["Ahfir", "أحفير"], ["El Aïoun Sidi Mellouk", "العيون سيدي ملوك"]],
  },
  {
    nom: { fr: "Fès-Meknès", ar: "فاس - مكناس" },
    villes: [["Fès", "فاس"], ["Meknès", "مكناس"], ["Taza", "تازة"], ["Ifrane", "إفران"], ["Sefrou", "صفرو"], ["Azrou", "أزرو"], ["El Hajeb", "الحاجب"], ["Taounate", "تاونات"], ["Moulay Yacoub", "مولاي يعقوب"], ["Boulemane", "بولمان"], ["Missour", "ميسور"], ["Imouzzer Kandar", "إيموزار كندر"], ["Tahla", "تاهلة"], ["Aïn Taoujdate", "عين تاوجطات"], ["Moulay Idriss Zerhoun", "مولاي إدريس زرهون"], ["Ribat El Kheir", "رباط الخير"], ["Karia Ba Mohamed", "قرية با محمد"]],
  },
  {
    nom: { fr: "Rabat-Salé-Kénitra", ar: "الرباط - سلا - القنيطرة" },
    villes: [["Rabat", "الرباط"], ["Salé", "سلا"], ["Kénitra", "القنيطرة"], ["Témara", "تمارة"], ["Skhirat", "الصخيرات"], ["Khémisset", "الخميسات"], ["Tiflet", "تيفلت"], ["Rommani", "الرماني"], ["Sidi Kacem", "سيدي قاسم"], ["Sidi Slimane", "سيدي سليمان"], ["Souk El Arbaa", "سوق الأربعاء"], ["Sidi Yahya El Gharb", "سيدي يحيى الغرب"], ["Mechra Bel Ksiri", "مشرع بلقصيري"], ["Mehdia", "المهدية"], ["Aïn El Aouda", "عين عودة"], ["Harhoura", "الهرهورة"]],
  },
  {
    nom: { fr: "Béni Mellal-Khénifra", ar: "بني ملال - خنيفرة" },
    villes: [["Béni Mellal", "بني ملال"], ["Khouribga", "خريبكة"], ["Khénifra", "خنيفرة"], ["Fkih Ben Salah", "الفقيه بن صالح"], ["Azilal", "أزيلال"], ["Kasba Tadla", "قصبة تادلة"], ["Oued Zem", "وادي زم"], ["Bejaâd", "أبي الجعد"], ["Souk Sebt Oulad Nemma", "سوق السبت أولاد النمة"], ["Demnate", "دمنات"], ["M'rirt", "مريرت"], ["Boujniba", "بوجنيبة"], ["Ouaouizeght", "واويزغت"], ["Zaouiat Cheikh", "زاوية الشيخ"]],
  },
  {
    nom: { fr: "Casablanca-Settat", ar: "الدار البيضاء - سطات" },
    villes: [["Casablanca", "الدار البيضاء"], ["Mohammedia", "المحمدية"], ["El Jadida", "الجديدة"], ["Settat", "سطات"], ["Berrechid", "برشيد"], ["Benslimane", "بنسليمان"], ["Bouskoura", "بوسكورة"], ["Dar Bouazza", "دار بوعزة"], ["Médiouna", "مديونة"], ["Nouaceur", "النواصر"], ["Tit Mellil", "تيط مليل"], ["Had Soualem", "حد السوالم"], ["Azemmour", "أزمور"], ["Sidi Bennour", "سيدي بنور"], ["Bir Jdid", "البئر الجديد"], ["Ben Ahmed", "ابن أحمد"], ["El Gara", "الكارة"], ["Sidi Rahal", "سيدي رحال"]],
  },
  {
    nom: { fr: "Marrakech-Safi", ar: "مراكش - آسفي" },
    villes: [["Marrakech", "مراكش"], ["Safi", "آسفي"], ["Essaouira", "الصويرة"], ["El Kelaâ des Sraghna", "قلعة السراغنة"], ["Ben Guerir", "ابن جرير"], ["Youssoufia", "اليوسفية"], ["Chichaoua", "شيشاوة"], ["Tamansourt", "تامنصورت"], ["Tahannaout", "تحناوت"], ["Aït Ourir", "أيت أورير"], ["Amizmiz", "أمزميز"], ["Chemaïa", "الشماعية"], ["Sidi Bou Othmane", "سيدي بوعثمان"], ["Jemâa Shaïm", "جمعة سحيم"]],
  },
  {
    nom: { fr: "Drâa-Tafilalet", ar: "درعة - تافيلالت" },
    villes: [["Errachidia", "الرشيدية"], ["Ouarzazate", "ورزازات"], ["Midelt", "ميدلت"], ["Tinghir", "تنغير"], ["Zagora", "زاكورة"], ["Erfoud", "أرفود"], ["Rissani", "الريصاني"], ["Goulmima", "كلميمة"], ["Tinejdad", "تنجداد"], ["Kelaat M'Gouna", "قلعة مكونة"], ["Boumalne Dadès", "بومالن دادس"], ["Agdz", "أكدز"], ["Rich", "الريش"]],
  },
  {
    nom: { fr: "Souss-Massa", ar: "سوس - ماسة" },
    villes: [["Agadir", "أكادير"], ["Inezgane", "إنزكان"], ["Aït Melloul", "أيت ملول"], ["Dcheira El Jihadia", "الدشيرة الجهادية"], ["Taroudant", "تارودانت"], ["Tiznit", "تيزنيت"], ["Tata", "طاطا"], ["Biougra", "بيوكرى"], ["Oulad Teïma", "أولاد تايمة"], ["Lqliâa", "القليعة"], ["Taliouine", "تالوين"], ["Tafraout", "تافراوت"]],
  },
  {
    nom: { fr: "Guelmim-Oued Noun", ar: "كلميم - واد نون" },
    villes: [["Guelmim", "كلميم"], ["Tan-Tan", "طانطان"], ["Sidi Ifni", "سيدي إفني"], ["Assa", "آسا"], ["Zag", "الزاك"], ["Bouizakarne", "بويزكارن"], ["El Ouatia", "الوطية"]],
  },
  {
    nom: { fr: "Laâyoune-Sakia El Hamra", ar: "العيون - الساقية الحمراء" },
    villes: [["Laâyoune", "العيون"], ["Boujdour", "بوجدور"], ["Es-Semara", "السمارة"], ["Tarfaya", "طرفاية"], ["El Marsa", "المرسى"]],
  },
  {
    nom: { fr: "Dakhla-Oued Ed-Dahab", ar: "الداخلة - وادي الذهب" },
    villes: [["Dakhla", "الداخلة"], ["Aousserd", "أوسرد"], ["Bir Gandouz", "بئر كندوز"]],
  },
];
