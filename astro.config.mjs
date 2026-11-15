
import { defineConfig } from 'astro/config';
import remarkScreenshotMarkers from './src/plugins/remark-screenshot-markers.mjs';

export default defineConfig({
  site: 'https://snigge.pages.dev',
  markdown: {
    remarkPlugins: [remarkScreenshotMarkers],
  },
});
