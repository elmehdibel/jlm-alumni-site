# Site JLM Alumni

Site vitrine de l'association JLM Alumni, construit avec [Astro](https://astro.build).

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:4321

## Modifier le contenu

Presque tout le contenu se trouve dans **`src/data/site.ts`** :
- `contact` : adresse, email, téléphone, réseaux sociaux
- `chiffres` : chiffres clés (⚠️ à valider par le bureau)
- `programmes`, `saison`, `galerie`, `partenaires`

Images : `public/images/` (photos) et `public/images/partenaires/` (logos).
Logos JLM : `public/logos/`.

## Pages

| Page | Fichier |
|---|---|
| Accueil | `src/pages/index.astro` |
| À propos | `src/pages/a-propos.astro` |
| Programmes | `src/pages/programmes.astro` |
| Événements | `src/pages/evenements.astro` |
| Partenaires | `src/pages/partenaires.astro` |
| Contact | `src/pages/contact.astro` |

## Mise en ligne

`npm run build` génère le site dans `dist/`, déployable tel quel sur Vercel, Netlify ou tout hébergeur statique.
