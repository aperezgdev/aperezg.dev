import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    estimatedTimeToRead: z.string(),
  }),
});

export const collections = { blog: posts };
