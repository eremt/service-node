import express, { Request, Response } from 'express'
const router = express.Router()

const HOST: string = process.env.HOST!
const PORT: number = +process.env.PORT!

const appInfo = {
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
}
router.get('/', (_: Request, res: Response) => res.json(appInfo))

import example from './example'
router.use('/example', example)

// mount documentation if development
import swaggerUi from 'swagger-ui-express'
import swagger from '../../swagger'
if (process.env.NODE_ENV === 'development') {
  router.get('/openapi.json', (_: Request, res: Response) => res.json(swagger))
  router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swagger))
  console.log(`OpenAPI spec: http://${HOST}:${PORT}/openapi.json`)
  console.log(`Documentation: http://${HOST}:${PORT}/documentation`)
}

// 404 fallback
router.use((_: Request, res: Response) => res.status(404).json({ code: 404, message: "Not found." }))

export default router
