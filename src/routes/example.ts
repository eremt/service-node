import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  const { method } = req
  res.json({ code: '200', method })
})
router.post('/', (req: Request, res: Response) => {
  const { method } = req
  res.json({ code: '200', method })
})
router.put('/', (req: Request, res: Response) => {
  const { method } = req
  res.json({ code: '200', method })
})
router.delete('/', (req: Request, res: Response) => {
  const { method } = req
  res.json({ code: '200', method })
})

export default router
