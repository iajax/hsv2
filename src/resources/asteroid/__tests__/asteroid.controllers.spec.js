import controllers from '../asteroid.controllers'
import { isFunction } from '../../../libs'

describe('Asteroid controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'updateOne',
    ]

    crudMethods.forEach((name) =>
      expect(isFunction(controllers[name])).toBe(true)
    )
  })
})
