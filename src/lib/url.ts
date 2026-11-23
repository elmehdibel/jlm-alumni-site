// Préfixe les liens internes avec le chemin de base du site
// ("/" sur jlmalumni.com, "/jlm-alumni-site" sur l'adresse provisoire GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;
