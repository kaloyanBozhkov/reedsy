import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
const port = process.env.PORT ?? process.env.VITE_PORT ?? 3000

console.log(port)

app.use(cors())

const router = express.Router()

router.get('/test', (_, res) => res.json({ success: true }))

// @TODO if app grows add other useful middleware
app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

// export for vercel api
export default app
