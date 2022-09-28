import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://han-tara.github.io',
  base: '/compound-interest-calculator',
  integrations: [tailwind()]
});