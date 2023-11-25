import cors from 'cors'
import dotenv from 'dotenv'
import express, { json } from 'express'

import exportRouter from './api/routes/export.router'
import importRouter from './api/routes/import.router'
import booksRouter from '~/api/routes/books.router'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(json())

// @TODO if app grows add things like useful middleware
app.use('/api/books', booksRouter)

// below 2 are for test, dont poke the SPA

/** assumptions:
 * import and export of same bookId is not simultaneously possible
 * using url can differentiate from Import and Request processes
 * response shapes are casually assumed
 */
app.use('/api/export', exportRouter)
app.use('/api/import', importRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

// export for deployment
export default app
