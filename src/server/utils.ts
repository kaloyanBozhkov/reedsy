import { Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'

export const geenricHandler = async <T>(res: Response, promise: () => Promise<T>) => {
  try {
    // this line is for vercel serverless functionality
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    const data = await promise()
    res.json(SuperJSON.serialize(data))
  } catch (err: any) {
    if (err instanceof ZodError) {
      console.warn(err.message)
    } else {
      console.error(err)
    }
    res
      .status(400)
      .json({ message: err?.message })
      .end()
  }
}
