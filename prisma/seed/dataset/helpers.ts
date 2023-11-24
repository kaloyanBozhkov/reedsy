import { getBaseUrl } from 'common/utils'

import { DataRow } from './types'

const getRandomDate = () => {
  const startDate = new Date(1970, 0, 1)
  const endDate = new Date()
  const randomTimestamp =
    startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
  const randomDate = new Date(randomTimestamp)

  return randomDate
}

export const formatRawData = (rows: DataRow[]) =>
  rows.map((b, idx) => {
    const search = encodeURIComponent(b.Book)
    return {
      title: b.Book.trim(),
      author: b.Author.trim(),
      rating: b.Avg_Rating,
      publishedOn: getRandomDate(),
      img: `${getBaseUrl(false)}/books/${idx % 10}.jpg`,
      // genres: b.Genres,
      summary: b.Description,
      links: {
        amazon: `https://www.amazon.com/s?k=${search}`,
        playStore: `https://play.google.com/store/search?q=${search}&c=books&hl=en&gl=US`,
        ...((idx % 3 || idx % 4) && { iBook: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }),
      },
    }
  })
