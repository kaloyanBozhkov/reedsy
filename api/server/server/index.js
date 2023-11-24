import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import booksRouter from './api/routes/books.router';
dotenv.config();
const app = express();
const port = process.env.VITE_PORT || 3000;
app.use(cors());
// @TODO if app grows add other useful middleware
app.use('/api/books', booksRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});
// export for vercel api
export default app;
