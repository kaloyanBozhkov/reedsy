import { EXPORT_FILE_TYPES, FILE_TYPES } from 'common/types/types'
import { z } from 'zod'

export const FileExportSchema = z.object({
  bookId: z.string().uuid(),
  type: z.enum(EXPORT_FILE_TYPES),
})

export const FileImportSchema = z.object({
  bookId: z.string().uuid(),
  type: z.enum(FILE_TYPES),
  url: z.string(),
})
