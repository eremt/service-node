import ExampleService from '../src/services/example'
import { randomUUID } from 'crypto'

// example that exists
let example: any
// example id that doesn't exist
const id_undefined = randomUUID()

test('ExampleService get', async () => {
  const result = await ExampleService.get()
  expect(result).toHaveLength(0) // empty
})

test('ExampleService create', async () => {
  const data = { value: 'example value' }
  const result = await ExampleService.create(data)
  expect(result).toHaveProperty('value', data.value)

  const resultGet = await ExampleService.get()
  expect(resultGet).toContain(result)

  example = result
})

test('ExampleService getById', async () => {
  const result = await ExampleService.getById(example.id)
  expect(result).toEqual(example)

  const resultUndefined = await ExampleService.getById(id_undefined)
  expect(resultUndefined).toBeNull()
})

test('ExampleService update', async () => {
  const updatedValue = 'updated value'
  const result = await ExampleService.update(example.id, { value: updatedValue })
  expect(result).toHaveProperty('value', updatedValue)

  const resultUndefined = await ExampleService.update(id_undefined, { value: updatedValue })
  expect(resultUndefined).toBeNull()
})

test('ExampleService delete', async () => {
  const result = await ExampleService.delete(example.id)
  expect(result).toBeTruthy()

  const resultGetById = await ExampleService.getById(example.id)
  expect(resultGetById).toBeNull()

  const resultUndefined = await ExampleService.delete(id_undefined)
  expect(resultUndefined).toBeNull()
})
