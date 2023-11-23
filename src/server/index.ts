import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

const port = process.env.PORT || 3000

dotenv.config()

const app = express()

app.use(cors())

app.listen(port, () => {
 console.log(`Server is running on port ${port}`)
})
