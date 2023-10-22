import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://klaudiarutkowska.github.io',
  base: '/project_portfolio',
  integrations: [tailwind()]
});