import { ZodTypeAny, z } from 'zod'

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

export const PaginatableSchema = z.object({
  skip: z.union([z.number(), z.string()]),
  take: z.union([z.number(), z.string()]),
})

export const PaginatedResponseSchema = <T extends ZodTypeAny>(zod: T) =>
  z.object({
    total: z.number(),
    data: zod,
  })
