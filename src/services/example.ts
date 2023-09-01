import { randomUUID } from 'crypto'

type Example = {
  id: string,
  created: number,
  value: string,
}
const examples: { [key: string]: Example } = {}

export default class ExampleService {
  static async get () {
    return Object.values(examples)
  }

  static async getById (id: string) {
    if (!examples[id]) return null

    const result = examples[id]
    return result
  }

  static async create (data: any) {
    const { value } = data
    const id = randomUUID()
    const created = Date.now()
    const example = { id, created, value }
    examples[id] = example
    return example
  }

  static async update (id: string, data: any) {
    if (!examples[id]) return null

    const { value } = data
    let example = { ...examples[id] }
    example = { ...example, value }
    examples[id] = example
    return example
  }

  static async delete (id: string) {
    if (!examples[id]) return null

    delete examples[id]
    return true
  }
}
