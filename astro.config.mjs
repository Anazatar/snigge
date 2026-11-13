import { defineConfig } from 'astro/config';
import remarkScreenshotMarkers from './src/plugins/remark-screenshot-markers.mjs';

export default defineConfig({
  site: 'https://techforgrownups.com',
  markdown: {
    remarkPlugins: [remarkScreenshotMarkers],
  },
});
