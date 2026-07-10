// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // canonical・sitemap・RSS が全てここに追従する
  site: 'https://shigotomo.com',
  integrations: [react(), sitemap()]
});
