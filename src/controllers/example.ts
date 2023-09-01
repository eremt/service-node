import { Request, Response } from 'express'
import ExampleService from '../services/example'

export default class ExampleController {
  static async get (_: Request, res: Response) {
    const result = await ExampleService.get()
    res.json(result)
  }
  static async post (_: Request, res: Response) {
    const result = await ExampleService.create()
    res.json(result)
  }
  static async put (_: Request, res: Response) {
    const result = await ExampleService.update()
    res.json(result)
  }
  static async delete (_: Request, res: Response) {
    const result = await ExampleService.delete()
    res.json(result)
  }
}
