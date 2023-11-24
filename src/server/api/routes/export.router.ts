import express from 'express'

import BooksController from '~/api/controlles/books.controller'

const exportRouter = express.Router()

exportRouter.post('/request', BooksController.getAllBooks)
exportRouter.get('/list', BooksController.getAllBooks)

export default exportRouter
