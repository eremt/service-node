import express from 'express'
import ExampleController from '../controllers/example'
const router = express.Router()

router.get('/', ExampleController.get)
router.get('/:id', ExampleController.getById)

router.post('/', ExampleController.post)

router.put('/:id', ExampleController.put)

router.delete('/:id', ExampleController.delete)

export default router
