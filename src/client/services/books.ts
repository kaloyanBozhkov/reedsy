import { BookSchema, BooksSchema, PaginatedResponseSchema } from 'common/schemas'
import { getBaseUrl } from 'common/utils'
import SuperJSON from 'superjson'

export const getBooksFetcher = (skip: number, take = 5) =>
  fetch(`${getBaseUrl(false)}/api/books/get-all?skip=${skip * take}&take=${take}`)
    .then((response) => response.json())
    .then(SuperJSON.deserialize)
    .then(PaginatedResponseSchema(BooksSchema).parse)

export const getBookDetails = (id: string) =>
  fetch(`${getBaseUrl(false)}/api/books/info?id=${id}}`)
    .then((response) => response.json())
    .then(SuperJSON.deserialize)
    .then(PaginatedResponseSchema(BookSchema).parse)
