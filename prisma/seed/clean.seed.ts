import { PrismaClient } from '@prisma/client'

export const deleteSeed = async (prisma: PrismaClient) => {
  await prisma.book.deleteMany()
  await prisma.author.deleteMany()
  await prisma.link.deleteMany()
}
