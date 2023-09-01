import express from 'express'
import ExampleController from '../controllers/example'
const router = express.Router()

router.get('/', ExampleController.get)
router.post('/', ExampleController.post)
router.put('/', ExampleController.put)
router.delete('/', ExampleController.delete)

export default router
