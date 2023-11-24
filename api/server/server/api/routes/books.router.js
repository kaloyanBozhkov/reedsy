import express from 'express';
import BooksController from '../../api/controlles/books.controller';
const booksRouter = express.Router();
booksRouter.get('/get-all', BooksController.getAllBooks);
booksRouter.get('/info', BooksController.getBookInfo);
export default booksRouter;
