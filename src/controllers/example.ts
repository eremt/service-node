import { Request, Response } from 'express'
import ExampleService from '../services/example'

/**
 * @openapi
 * components:
 *   id:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *   created:
 *     type: object
 *     properties:
 *       created:
 *         type: number
 *         example: 1693562777819
 *   value:
 *     type: object
 *     properties:
 *       value:
 *         type: string
 *         example: example value
 *
 *   exampleRequest:
 *     allOf:
 *       - $ref: '#/components/value'
 *   exampleResponse:
 *     allOf:
 *       - $ref: '#/components/id'
 *       - $ref: '#/components/created'
 *       - $ref: '#/components/value'
 *   examplesResponse:
 *     type: array
 *     items:
 *       $ref: '#/components/exampleResponse'
 */

export default class ExampleController {
  /**
   * @openapi
   * /examples:
   *   get:
   *     tags: [/examples]
   *     summary: Get examples
   *     description: Get examples
   *
   *     responses:
   *       200:
   *         description: Successful request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/examplesResponse'
   */
  static async get (_: Request, res: Response) {
    const result = await ExampleService.get()
    res.json(result)
  }

  /**
   * @openapi
   * /examples/{id}:
   *   get:
   *     tags: [/examples]
   *     summary: Get example by id
   *     description: Get example by id
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           id:
   *             type: string
   *             format: uuid
   *
   *     responses:
   *       200:
   *         description: Successful request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/exampleResponse'
   */
  static async getById (_: Request, res: Response) {
    const result = await ExampleService.getById()
    res.json(result)
  }

  /**
   * @openapi
   * /examples:
   *   post:
   *     tags: [/examples]
   *     summary: Create example
   *     description: Create example
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/exampleRequest'
   *
   *     responses:
   *       200:
   *         description: Successful request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/exampleResponse'
   */
  static async post (_: Request, res: Response) {
    const result = await ExampleService.create()
    res.json(result)
  }

  /**
   * @openapi
   * /examples/{id}:
   *   put:
   *     tags: [/examples]
   *     summary: Update example
   *     description: Update example
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           id:
   *             type: string
   *             format: uuid
   *
   *     responses:
   *       200:
   *         description: Successful request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/exampleResponse'
   */
  static async put (_: Request, res: Response) {
    const result = await ExampleService.update()
    res.json(result)
  }

  /**
   * @openapi
   * /examples/{id}:
   *   delete:
   *     tags: [/examples]
   *     summary: Delete example
   *     description: Delete example
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           id:
   *             type: string
   *             format: uuid
   *
   *     responses:
   *       204:
   *         description: Successful request
   */
  static async delete (_: Request, res: Response) {
    const result = await ExampleService.delete()
    res.json(result)
  }
}
