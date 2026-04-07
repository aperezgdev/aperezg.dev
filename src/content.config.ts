import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    language: z.enum(["es", "en"]),
    description: z.string(),
    publishedDate: z.string(),
    estimatedTimeToRead: z.string(),
  }),
});

export const collections = { blog: posts };
