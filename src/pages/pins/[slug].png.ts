import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getTopic } from "../../data/topics";
import { renderPin } from "../../lib/social-images";

export const getStaticPaths: GetStaticPaths = async () => {
  const guides = await getCollection("guides");
  return guides.map((g) => {
    const t = getTopic(g.data.topic);
    return {
      params: { slug: g.id },
      props: { title: g.data.title, topicName: t.name, tone: t.color, icon: t.icon },
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderPin(props as Parameters<typeof renderPin>[0]);
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
