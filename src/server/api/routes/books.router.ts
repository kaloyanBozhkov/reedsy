import express from 'express'

import BooksController from '~/api/controlles/books.controller'

const booksRouter = express.Router()

booksRouter.get('/get-all', BooksController.getAllBooks)

export default booksRouter
