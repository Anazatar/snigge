import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { topicSlugs } from "./data/topics";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.enum(topicSlugs),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    level: z.enum(["Beginner", "Intermediate"]).default("Beginner"),
  }),
});

export const collections = { guides };
