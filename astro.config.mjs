import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yoranrd.github.io',
  base: '/lesursulines',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
