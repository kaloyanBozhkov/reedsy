import express from 'express'

import ImportsController from '~/api/controlles/imports.controller'

const importRouter = express.Router()

importRouter.post('/request', ImportsController.requestImport)
importRouter.get('/list', ImportsController.listImports)

export default importRouter
