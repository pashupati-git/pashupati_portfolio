import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pashupatichaudhary.com.np',
  integrations: [sitemap()],
  compressHTML: true,
});
