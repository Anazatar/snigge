/**
 * Google AdSense configuration.
 *
 * Everything stays OFF until you set PUBLIC_ADSENSE_CLIENT in the .env file.
 * After approval, fill in the ad unit IDs ("slots") you create in AdSense
 * under Ads → By ad unit.
 */
const env = import.meta.env;

export const ADSENSE_CLIENT: string = env.PUBLIC_ADSENSE_CLIENT ?? ""; // e.g. "ca-pub-1234567890123456"

export const AD_SLOTS = {
  inArticle: env.PUBLIC_AD_SLOT_IN_ARTICLE ?? "", // between article sections
  articleEnd: env.PUBLIC_AD_SLOT_ARTICLE_END ?? "", // after the article, before "Keep learning"
  sidebar: env.PUBLIC_AD_SLOT_SIDEBAR ?? "", // sticky sidebar on large screens
  section: env.PUBLIC_AD_SLOT_SECTION ?? "", // between sections on home and topic pages
  rail: env.PUBLIC_AD_SLOT_RAIL ?? "", // fixed side rails on very wide screens
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;

export const ADS_ENABLED = ADSENSE_CLIENT.startsWith("ca-pub-");

/** Show dashed placeholders in `npm run dev` so you can see where ads will go. */
export const SHOW_AD_PREVIEW = env.DEV && !ADS_ENABLED;

/**
 * In-article ads:
 * - afterIntro: one ad right after the first paragraph
 * - then one before every Nth section heading (starting at the 2nd heading)
 * - never more than MAX in-article ads in total
 */
export const IN_ARTICLE = {
  afterIntro: true,
  everyNthHeading: 1,
  max: 5,
};

/** Side rails (left/right of the page) only appear on screens at least this wide. */
export const RAIL_MIN_WIDTH = 1560;
