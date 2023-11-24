import { z } from 'zod'

export const BuyOnSchema = z.object({
  label: z.string(),
  url: z.string(),
})

export const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  createdAt: z.date(),
  id: z.string().uuid(),
  rating: z.number(),
  links: z.array(BuyOnSchema),
})
