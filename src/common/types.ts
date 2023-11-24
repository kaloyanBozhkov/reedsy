import { z } from 'zod'

import { BookSchema, BuyOnSchema } from './schemas'

export type BuyOn = z.infer<typeof BuyOnSchema>
export type Book = z.infer<typeof BookSchema>

export type ApiResponse<T> = {
  total: number
  data: T
}
