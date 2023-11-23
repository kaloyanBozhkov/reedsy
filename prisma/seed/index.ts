import { PrismaClient } from '@prisma/client'

import { datasetSeed } from './dataset.seed'

const prisma = new PrismaClient(),
  main = async () => {
    await datasetSeed(prisma)
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
