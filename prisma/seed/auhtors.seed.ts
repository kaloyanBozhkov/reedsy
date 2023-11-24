import _ from 'lodash'

import { PrismaClient } from '@prisma/client'

import { FormattedRow } from './dataset/types'

export const authorSeed = async (prisma: PrismaClient, books: FormattedRow[]) => {
  await prisma.author.createMany({
    data: _.uniqBy(books, (e) => e.author).map((b) => ({
      name: b.author,
    })),
  })
}
