/**
 * Generates cover images (1200x630) and Pinterest pins (1000x1500) at build time.
 * Uses satori (layout -> SVG) and resvg (SVG -> PNG). No AI, no external services.
 */
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { icons } from "../data/topics";

const fontDir = (pkg: string) => path.resolve("node_modules/@fontsource", pkg, "files");
const fonts = [
  { name: "Atkinson", weight: 400 as const, data: fs.readFileSync(path.join(fontDir("atkinson-hyperlegible"), "atkinson-hyperlegible-latin-400-normal.woff")) },
  { name: "Atkinson", weight: 700 as const, data: fs.readFileSync(path.join(fontDir("atkinson-hyperlegible"), "atkinson-hyperlegible-latin-700-normal.woff")) },
  { name: "Fraunces", weight: 600 as const, data: fs.readFileSync(path.join(fontDir("fraunces"), "fraunces-latin-600-normal.woff")) },
].map((f) => ({ ...f, style: "normal" as const }));

const TONES: Record<string, string> = {
  "var(--sky)": "#e0eafc",
  "var(--mint)": "#dcf3e8",
  "var(--sun)": "#fff2cc",
  "var(--lilac)": "#ece6fc",
  "var(--accent-soft)": "#fde6de",
};
const INK = "#2b3040";
const SOFT = "#5f6678";
const NAVY = "#5466c8";
const CORAL = "#f2a08d";
const CREAM = "#fdfbf8";

export interface ImageInput {
  title: string;
  topicName: string;
  tone: string; // CSS var from topics.ts, e.g. "var(--sky)"
  icon: string; // key from icons
  readTime?: string;
}

// Tiny hyperscript helper so we don't need React/JSX for satori.
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]): Node => ({
  type,
  props: { style: { display: "flex", ...style }, children: children.length === 1 ? children[0] : children },
});
const img = (src: string, size: number): Node => ({ type: "img", props: { src, width: size, height: size } });

const svgUri = (inner: string, color: string, strokeWidth = 1.8) =>
  "data:image/svg+xml;base64," +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`,
  ).toString("base64");

const logoUri = svgUri(
  `<rect x="3" y="2" width="18" height="20" rx="4.5" fill="${NAVY}" stroke="none"/><circle cx="12" cy="18" r="1.3" fill="${CREAM}" stroke="none"/><path d="M8.3 10.2l2.6 2.6L16 7.8" stroke="${CREAM}" stroke-width="2"/>`,
  NAVY,
);
const checkUri = svgUri(`<circle cx="12" cy="12" r="11" fill="${CORAL}" stroke="none"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6"/>`, CORAL);

const titleSize = (title: string, base: number) => {
  const n = title.length;
  if (n > 70) return base * 0.72;
  if (n > 55) return base * 0.82;
  if (n > 40) return base * 0.92;
  return base;
};

const brand = (size: number) =>
  h(
    "div",
    { alignItems: "center", gap: size * 0.4 },
    img(logoUri, size * 1.4),
    h("div", { fontFamily: "Fraunces", fontSize: size, color: INK }, "Tech for Grownups"),
  );

async function toPng(node: Node, width: number, height: number) {
  const svg = await satori(node as never, { width, height, fonts });
  return new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng();
}

/** 1200x630 cover: article cards, Facebook, X, WhatsApp link previews. */
export async function renderCover(input: ImageInput) {
  const bg = TONES[input.tone] ?? "#e0eafc";
  const node = h(
    "div",
    { width: 1200, height: 630, background: bg, padding: 64, fontFamily: "Atkinson", color: INK, position: "relative" },
    // decorative circle
    h("div", { position: "absolute", right: -120, top: -120, width: 520, height: 520, borderRadius: 520, background: "rgba(255,255,255,0.45)" }),
    h(
      "div",
      { flexDirection: "column", justifyContent: "space-between", width: 820, height: "100%" },
      h(
        "div",
        { flexDirection: "column", gap: 28 },
        h(
          "div",
          { alignSelf: "flex-start", background: "#fff", borderRadius: 999, padding: "10px 24px", fontSize: 26, fontWeight: 700 },
          input.topicName,
        ),
        h("div", { fontFamily: "Fraunces", fontSize: titleSize(input.title, 68), lineHeight: 1.12, letterSpacing: -1 }, input.title),
      ),
      h(
        "div",
        { alignItems: "center", gap: 28 },
        brand(30),
        input.readTime ? h("div", { fontSize: 24, color: SOFT }, `· ${input.readTime} read`) : h("div", {}, ""),
      ),
    ),
    h(
      "div",
      {
        position: "absolute", right: 72, bottom: 72, width: 230, height: 230, borderRadius: 48,
        background: "#fff", alignItems: "center", justifyContent: "center",
        boxShadow: "0 20px 40px rgba(28,36,51,0.15)", transform: "rotate(-6deg)",
      },
      img(svgUri(icons[input.icon] ?? icons.phone, NAVY, 1.6), 140),
    ),
  );
  return toPng(node, 1200, 630);
}

/** 1000x1500 vertical pin for Pinterest. */
export async function renderPin(input: ImageInput) {
  const bg = TONES[input.tone] ?? "#e0eafc";
  const perks = ["Plain English, no jargon", "A picture for every step", "Free and easy to follow"];
  const node = h(
    "div",
    { width: 1000, height: 1500, background: bg, flexDirection: "column", fontFamily: "Atkinson", color: INK, position: "relative" },
    h("div", { position: "absolute", left: -160, top: 420, width: 640, height: 640, borderRadius: 640, background: "rgba(255,255,255,0.4)" }),
    h(
      "div",
      { position: "absolute", right: -60, bottom: 150, opacity: 0.12, transform: "rotate(-10deg)" },
      img(svgUri(icons[input.icon] ?? icons.phone, NAVY, 1.4), 460),
    ),
    h(
      "div",
      { flexDirection: "column", justifyContent: "space-between", padding: "80px 72px 64px", flexGrow: 1 },
      h(
        "div",
        { flexDirection: "column", gap: 40 },
        h(
          "div",
          { alignItems: "center", gap: 20 },
          h(
            "div",
            { width: 96, height: 96, borderRadius: 26, background: "#fff", alignItems: "center", justifyContent: "center" },
            img(svgUri(icons[input.icon] ?? icons.phone, NAVY, 1.7), 60),
          ),
          h("div", { fontSize: 34, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }, `${input.topicName} guide`),
        ),
        h("div", { width: "100%", fontFamily: "Fraunces", fontSize: titleSize(input.title, 118), lineHeight: 1.06, letterSpacing: -1.5 }, input.title),
      ),
      h(
        "div",
        { flexDirection: "column", gap: 36 },
        h(
          "div",
          { flexDirection: "column", gap: 22, background: "#fff", borderRadius: 32, padding: "40px 44px", boxShadow: "0 20px 40px rgba(28,36,51,0.12)" },
          ...perks.map((p) => h("div", { alignItems: "center", gap: 20, fontSize: 38, fontWeight: 700 }, img(checkUri, 46), p)),
        ),
        h(
          "div",
          { alignSelf: "flex-start", alignItems: "center", gap: 16, background: NAVY, color: "#fff", borderRadius: 999, padding: "22px 40px", fontSize: 36, fontWeight: 700 },
          "Read the free guide",
          img(svgUri('<path d="M5 12h14M13 6l6 6-6 6"/>', "#fff", 2.6), 40),
        ),
      ),
    ),
    h(
      "div",
      { background: NAVY, color: "#fff", padding: "40px 72px", justifyContent: "space-between", alignItems: "center" },
      h("div", { fontFamily: "Fraunces", fontSize: 44 }, "Tech for Grownups"),
      h("div", { fontSize: 32, fontWeight: 700, color: "#fbecc4" }, "techforgrownups.com"),
    ),
  );
  return toPng(node, 1000, 1500);
}
