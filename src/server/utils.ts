import { Response } from 'express'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'

import { RequestProcess } from './classes/FileProcess'

export const geenricHandler = async <T>(
  res: Response,
  promise: () => Promise<T>,
  superJSON = true
) => {
  try {
    const data = await promise()
    res.json(superJSON ? SuperJSON.serialize(data) : data)
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

export const groupByKey = (key: keyof RequestProcess, ps: RequestProcess[]) =>
  // or use lodash :)
  //_.groupBy(ps, key)
  ps.reduce(
    (acc, p) => ({
      ...acc,
      [p[key]]: [...(acc[p[key]] ?? []), p],
    }),
    {}
  )
