import { BookInfoSchema, BooksSchema, PaginatableSchema } from 'common/schemas'
import { Request, Response } from 'express'
import { z } from 'zod'

import { prisma } from '~/prisma'
import { BOOK_INFO_SELECT, BOOK_SELECT } from '~/selectors'
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
          author: b.author?.name ?? '-',
          rating: `${b.rating}/5`,
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
      const resp = await prisma.book.findFirstOrThrow({
        where: {
          id,
        },
        select: BOOK_INFO_SELECT,
      })

      return BookInfoSchema.parse({
        ...resp,
        author: resp.author?.name ?? '-',
      })
    })
  }
}
