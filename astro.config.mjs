import { defineConfig } from 'astro/config';
import remarkScreenshotMarkers from './src/plugins/remark-screenshot-markers.mjs';

export default defineConfig({
  site: 'https://anazatar.github.io',
  base: '/snigge',
  markdown: {
    remarkPlugins: [remarkScreenshotMarkers],
  },
});
