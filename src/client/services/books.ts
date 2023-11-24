import { ApiResponse, Book } from 'common/types'
import { getBaseUrl } from 'common/utils'

export const getBooksFetcher = (skip: number, take = 5): Promise<ApiResponse<Book[]>> =>
  fetch(`${getBaseUrl()}/api/books?skip=${skip}&take=${take}`).then((response) => response.json())
