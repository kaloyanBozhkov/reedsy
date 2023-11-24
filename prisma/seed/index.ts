import path from 'path'

import { PrismaClient } from '@prisma/client'

import { authorSeed } from './auhtors.seed'
import { booksSeed } from './books.seed'
import { deleteSeed } from './clean.seed'
import { formatRawData } from './dataset/helpers'
import parseCsv from './dataset/parse'
import { DataRow } from './dataset/types'
import { linkSeed } from './link.seed'

const prisma = new PrismaClient(),
  main = async () => {
    const books = await parseCsv<DataRow>(
      path.join(process.cwd(), 'prisma/seed/dataset/goodreads_data.csv')
    ).then(formatRawData)

    await deleteSeed(prisma)
    await authorSeed(prisma, books)
    await booksSeed(prisma, books)
    await linkSeed(prisma, books)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
