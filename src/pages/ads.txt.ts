import type { APIRoute } from "astro";
import { ADSENSE_CLIENT, ADS_ENABLED } from "../config/ads";

// Generates /ads.txt automatically from your AdSense ID.
export const GET: APIRoute = () => {
  const body = ADS_ENABLED
    ? `google.com, ${ADSENSE_CLIENT.replace("ca-", "")}, DIRECT, f08c47fec0942fa0\n`
    : "# AdSense not configured yet\n";
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
};
