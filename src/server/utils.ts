import { Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'

export const geenricHandler = async <T>(res: Response, promise: () => Promise<T>) => {
  try {
    const data = await promise()
    res.json(SuperJSON.serialize(data))
  } catch (err) {
    if (err instanceof ZodError) {
      console.warn(err.message)
    } else {
      console.error(err)
    }
    res.status(400).end()
  }
}
