/**
 * Prefixes an internal path with the site's base path (set in astro.config.mjs).
 * On GitHub Pages the site lives at /snigge/, so "/about" must become "/snigge/about".
 * If the site later moves to its own domain, remove `base` from the config and
 * every link keeps working without further changes.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return BASE + path;
}
