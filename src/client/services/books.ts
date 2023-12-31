import { BookInfoSchema, BooksSchema, PaginatedResponseSchema } from 'common/schemas'
import { getBaseUrl } from 'common/utils'
import SuperJSON from 'superjson'

export const getBooks = (skip: number, take = 5) =>
  fetch(`${getBaseUrl(false)}/api/books/get-all?skip=${(skip - 1) * take}&take=${take}`)
    .then((response) => response.json())
    .then(SuperJSON.deserialize)
    .then(PaginatedResponseSchema(BooksSchema).parse)

export const getBookDetails = (id: string) =>
  fetch(`${getBaseUrl(false)}/api/books/info?id=${id}`)
    .then((response) => response.json())
    .then(SuperJSON.deserialize)
    .then(BookInfoSchema.parse)
