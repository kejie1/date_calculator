import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    relatedToolLink: z.string().optional(),
    relatedToolName: z.string().optional(),
  }),
});

export const collections = { blog };