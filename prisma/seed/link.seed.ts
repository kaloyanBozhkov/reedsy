import { DISTRIBUTOR, PrismaClient } from '@prisma/client'

import { FormattedRow } from './dataset/types'

export const linkSeed = async (prisma: PrismaClient, books: FormattedRow[]) => {
  const booksCreated = await prisma.book.findMany({
      select: {
        id: true,
        title: true,
      },
    }),
    booksCreatedHash = booksCreated.reduce((acc, b) => ({ ...acc, [b.title]: b.id }), {})

  await prisma.link.createMany({
    data: books
      .reduce(
        (acc, b) => [
          ...acc,
          { title: b.title, url: b.links.amazon, distributor: DISTRIBUTOR.AMAZON },
          { title: b.title, url: b.links.playStore, distributor: DISTRIBUTOR.PLAY_STORE },
          ...(b.links.iBook
            ? [{ title: b.title, url: b.links.iBook, distributor: DISTRIBUTOR.I_BOOKS }]
            : []),
        ],
        [] as { title: string; url: string; distributor: DISTRIBUTOR }[]
      )
      .map((b) => ({
        bookId: booksCreatedHash[b.title],
        href: b.url,
        distributor: b.distributor,
      })),
  })
}
