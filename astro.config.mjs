import { defineConfig } from 'astro/config';

// BASE_PATH est défini par le déploiement GitHub Pages tant que le domaine n'est pas branché.
export default defineConfig({
  site: process.env.SITE_URL || 'https://jlmalumni.com',
  base: process.env.BASE_PATH || '/',
  server: { port: 4321 },
});
