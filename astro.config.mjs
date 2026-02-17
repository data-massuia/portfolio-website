// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual deployed URL
  site: 'https://douglas.dev',

  server: {
    host: '0.0.0.0',  // Bind to all interfaces so localhost works on both IPv4 and IPv6
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
