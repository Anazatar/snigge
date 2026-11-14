/**
 * Adds the site's base path (e.g. "/snigge") to internal links and images
 * written in articles as "/guides/...", so they work on GitHub Pages.
 */
export default function remarkBaseLinks({ base = "/" } = {}) {
  const prefix = base.replace(/\/$/, "");
  const walk = (node) => {
    if (
      (node.type === "link" || node.type === "image") &&
      typeof node.url === "string" &&
      node.url.startsWith("/") &&
      !node.url.startsWith("//")
    ) {
      node.url = prefix + node.url;
    }
    (node.children || []).forEach(walk);
  };
  return (tree) => {
    if (prefix) walk(tree);
  };
}
