import csvParser from 'csv-parser'
import * as fs from 'fs'

export default function parseCsv<T>(filePath: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = []

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data: T) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error))
  })
}
