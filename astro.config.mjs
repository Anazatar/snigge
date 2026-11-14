import { defineConfig } from 'astro/config';
import remarkScreenshotMarkers from './src/plugins/remark-screenshot-markers.mjs';
import remarkBaseLinks from './src/plugins/remark-base-links.mjs';

// GitHub Pages serves this repository at https://anazatar.github.io/snigge/
// When the site moves to its own domain, change `site` and set `base` to '/'.
const site = 'https://anazatar.github.io';
const base = '/snigge';

export default defineConfig({
  site,
  base,
  markdown: {
    remarkPlugins: [remarkScreenshotMarkers, [remarkBaseLinks, { base }]],
  },
});
