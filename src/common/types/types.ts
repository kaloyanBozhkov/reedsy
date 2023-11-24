import { BookSchema, BuyOnSchema } from 'common/schemas'
import { z } from 'zod'

export type BuyOn = z.infer<typeof BuyOnSchema>
export type Book = z.infer<typeof BookSchema>
