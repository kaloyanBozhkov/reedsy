import { ZodTypeAny, z } from 'zod'

export * from './book.schema'

export const PaginatableSchema = z.object({
  skip: z.union([z.number(), z.string()]),
  take: z.union([z.number(), z.string()]),
})

export const PaginatedResponseSchema = <T extends ZodTypeAny>(zod: T) =>
  z.object({
    total: z.number(),
    data: zod,
  })
