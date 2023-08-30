import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  experimental: {
    viewTransitions: true
  },
  adapter: cloudflare()
});