import express from 'express'

import ExportsController from '~/api/controlles/exports.controller'

const exportRouter = express.Router()

exportRouter.post('/request', ExportsController.requestExport)
exportRouter.get('/list', ExportsController.listExports)

export default exportRouter
