import z from 'zod'

import { DISTRIBUTOR } from '@prisma/client'

export const BuyOnSchema = z.object({
  distributor: z.nativeEnum(DISTRIBUTOR),
  href: z.string(),
})

export const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  publishedOn: z.date(),
  id: z.string().uuid(),
  rating: z.number(),
  links: z.array(BuyOnSchema),
})

export const BooksSchema = z.array(BookSchema)
export const BookInfoSchema = z.object({
  summary: z.string(),
  title: z.string(),
  author: z.string(),
})
