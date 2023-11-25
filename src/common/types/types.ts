import { BookSchema, BuyOnSchema } from 'common/schemas'
import { z } from 'zod'

export type BuyOn = z.infer<typeof BuyOnSchema>
export type Book = z.infer<typeof BookSchema>

// move to prisma if doing more than keeping stuff in memory for exercise
export const EXPORT_FILE_TYPES = ['pdf', 'epub'] as const
export const FILE_TYPES = [...EXPORT_FILE_TYPES, 'word', 'wattpad', 'evernote'] as const
export type FileType = (typeof FILE_TYPES)[number]
