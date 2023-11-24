import { PrismaClient } from '@prisma/client'

import { FormattedRow } from './dataset/types'

export const booksSeed = async (prisma: PrismaClient, books: FormattedRow[]) => {
  const authors = await prisma.author.findMany({
      select: {
        id: true,
        name: true,
      },
    }),
    authorsHash = authors.reduce((acc, a) => ({ ...acc, [a.name]: a.id }), {})

  await prisma.book.createMany({
    data: books.map(({ author, links, ...b }) => ({
      ...b,
      rating: +b.rating,
      authorId: authorsHash[author],
    })),
  })
}
