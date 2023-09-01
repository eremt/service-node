import express, { Request, Response } from 'express'
const router = express.Router()

const appInfo = {
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
}
router.get('/', (_: Request, res: Response) => res.json(appInfo))

import example from './example'
router.use('/example', example)

router.use('*', (_: Request, res: Response) => {
  res.json({ code: 404, message: "Not found." })
})

export default router
