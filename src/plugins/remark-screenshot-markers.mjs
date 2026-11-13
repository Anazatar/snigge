/**
 * Removes "[SCREENSHOT: ...]" lines from articles when rendering,
 * so readers never see them. The markers stay in the .md files as
 * notes of where screenshots should go.
 */
const textOf = (node) =>
  node.type === "text" || node.type === "inlineCode"
    ? node.value
    : (node.children || []).map(textOf).join("");

export default function remarkScreenshotMarkers() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.filter((child) => {
      if (child.type === "paragraph") {
        const text = textOf(child).replace(/\s+/g, " ").trim();
        if (/^\[SCREENSHOT:.*\]$/i.test(text)) return false;
      }
      walk(child);
      return true;
    });
  };
  return (tree) => walk(tree);
}
