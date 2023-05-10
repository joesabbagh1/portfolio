import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    link: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
}
