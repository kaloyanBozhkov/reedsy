import { FileImportSchema } from 'common/schemas'
import { Request, Response } from 'express'

import Process from '~/classes/FileProcess'
import { processes } from '~/mem'
import { geenricHandler, groupByKey } from '~/utils'

export default class ImportsController {
  static listImports(_: Request, res: Response) {
    geenricHandler(
      res,
      async () => {
        const ps = Object.values(processes).filter(({ operation }) => operation === 'import'),
          groupedByState = groupByKey('state', ps)

        return {
          data: groupedByState,
        }
      },
      false
    )
  }

  static requestImport(req: Request, res: Response) {
    geenricHandler(
      res,
      async () => {
        const { bookId, type, url } = FileImportSchema.parse(req.body)

        if (bookId in processes) return { status: 'duplicate' }

        processes[bookId] = new Process({
          bookId,
          type,
          url,
        })

        return { status: 'started' }
      },
      false
    )
  }
}
