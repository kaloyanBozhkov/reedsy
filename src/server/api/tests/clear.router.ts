import express from 'express'

import { processes } from '~/mem'

const testRouter = express.Router()

testRouter.get('/clear', (_, res) => {
  const keys = Object.keys(processes)
  keys.forEach((k) => delete processes[k])
  res.status(200).end()
})

export default testRouter
