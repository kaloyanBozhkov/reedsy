import express from 'express'

import BooksController from '~/api/controlles/books.controller'

const importRouter = express.Router()

importRouter.post('/request', BooksController.getAllBooks)
importRouter.get('/list', BooksController.getAllBooks)

export default importRouter
