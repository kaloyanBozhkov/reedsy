import { BookInfoSchema, BooksSchema, PaginatableSchema } from 'common/schemas'
import { Request, Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError, z } from 'zod'

import { prisma } from '~/prisma'
import { BOOK_SELECT } from '~/selectors'
import { geenricHandler } from '~/utils'

export default class BooksController {
  static async getAllBooks(req: Request, res: Response) {
    geenricHandler(res, async () => {
      const { skip, take } = PaginatableSchema.parse(req.query)
      const [total, books] = await prisma.$transaction([
        prisma.book.count(),
        prisma.book.findMany({
          skip: +skip,
          take: +take,
          select: BOOK_SELECT,
        }),
      ])
      const data = books.map((b) => ({
          ...b,
          author: b.author.name,
        })),
        resp = {
          data: BooksSchema.parse(data),
          total,
        }
      return resp
    })
  }
  static async getBookInfo(req: Request, res: Response) {
    geenricHandler(res, async () => {
      const QuerySchema = z.object({ id: z.string().uuid() })
      const { id } = QuerySchema.parse(req.query)
      const { summary } = await prisma.book.findFirstOrThrow({
        where: {
          id,
        },
        select: {
          summary: true,
        },
      })

      return { summary }
    })
  }
}
