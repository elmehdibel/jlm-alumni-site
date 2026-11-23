// Outils bilingues français / arabe.
// Le français est servi à la racine (/a-propos), l'arabe sous /ar (/ar/a-propos).
import { u } from '../lib/url';

export type Lang = 'fr' | 'ar';
export type L = { fr: string; ar: string };

/** Les deux versions de chaque page (à utiliser dans getStaticPaths). */
export const langPaths = () => [{ params: { lang: undefined } }, { params: { lang: 'ar' } }];

/** Langue de la page à partir du paramètre de route. */
export const getLang = (param?: string): Lang => (param === 'ar' ? 'ar' : 'fr');

/** Texte dans la bonne langue. */
export const tr = (v: L | string, lang: Lang) => (typeof v === 'string' ? v : v[lang]);

/** Lien interne dans la bonne langue : lp('/contact', 'ar') → /ar/contact */
export const lp = (path: string, lang: Lang) => {
  if (lang === 'fr') return u(path);
  return u(path === '/' ? '/ar/' : `/ar${path}`);
};

/** Chemin équivalent dans l'autre langue, à partir du chemin courant. */
export const autreLangue = (pathname: string, lang: Lang) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (p.startsWith('/ar')) p = p.slice(3) || '/';
  if (!p.startsWith('/')) p = `/${p}`;
  return lp(p, lang === 'fr' ? 'ar' : 'fr');
};
