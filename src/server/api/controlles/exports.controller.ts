import { FileExportSchema } from 'common/schemas'
import { Request, Response } from 'express'

import Process from '~/classes/FileProcess'
import { processes } from '~/mem'
import { geenricHandler, groupByKey } from '~/utils'

export default class ExportsController {
  static requestExport(req: Request, res: Response) {
    geenricHandler(
      res,
      async () => {
        const { bookId, type } = FileExportSchema.parse(req.body)

        if (bookId in processes) return { status: 'duplicate' }

        processes[bookId] = new Process({
          bookId,
          type,
        })

        return { status: 'started' }
      },
      false
    )
  }
  static listExports(_: Request, res: Response) {
    geenricHandler(
      res,
      async () => {
        const ps = Object.values(processes).filter(({ operation }) => operation === 'export'),
          groupedByState = groupByKey('state', ps)

        return {
          data: groupedByState,
        }
      },
      false
    )
  }
}
