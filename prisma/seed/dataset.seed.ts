import { PrismaClient } from '@prisma/client'

export const datasetSeed = async (prisma: PrismaClient) => {}

const tsv2JSON = <T extends object>(tsv: string) => {
  const rows = tsv.split('\n')

  const headers = rows[0].split('\t')

  const jsonArray: T[] = []

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split('\t')
    const jsonObject = {}

    for (let j = 0; j < headers.length; j++) jsonObject[headers[j]] = values[j]

    jsonArray.push(jsonObject as T)
  }

  return jsonArray
}
