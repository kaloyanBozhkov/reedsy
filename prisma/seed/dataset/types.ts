import { formatRawData } from './helpers'

export interface DataRow {
  id: string
  age: number
  Book: string
  Author: string
  Description: string
  Genres: string
  Avg_Rating: string
  Num_Ratings: string
  URL: string
}

export type FormattedRow = ReturnType<typeof formatRawData>[number]
