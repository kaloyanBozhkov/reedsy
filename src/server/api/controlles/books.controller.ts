import { BooksSchema, PaginatableSchema } from 'common/schemas'
import { Request, Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'

import { prisma } from '~/prisma'
import { BOOK_SELECT } from '~/selectors'

export default class BooksController {
  static async getAllBooks(req: Request, res: Response) {
    try {
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

      res.json(SuperJSON.serialize(resp))
    } catch (err) {
      if (err instanceof ZodError) {
        console.warn(err.message)
      } else {
        console.error(err)
      }

      res.status(400).end()
    }
  }
}