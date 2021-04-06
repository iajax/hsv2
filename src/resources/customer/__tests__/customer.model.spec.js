import { Customer } from '../customer.model'

describe('Customer model', () => {
  describe('schema', () => {
    test('Name', () => {
      const first_name = Customer.schema.obj.first_name
      expect(first_name).toEqual({
        type: String,
        required: [true, 'Please add a first_name'],
        trim: true,
      })
    })

    test('last_name', () => {
      const last_name = Customer.schema.obj.last_name
      expect(last_name).toEqual({
        type: String,
        required: [true, 'Please add a last_name'],
      })
    })

    test('age', () => {
      const age = Customer.schema.obj.age
      expect(age).toEqual({
        type: Number,
        required: [true, 'Please add an age'],
      })
    })

    test('hotspot_asteroids', () => {
      const hotspot_asteroids = Customer.schema.obj.hotspot_asteroids
      expect(hotspot_asteroids).toEqual({
        type: Number,
        required: [true, 'Please provide a hotspot asteroids number'],
        default: 0,
      })
    })

    test('price', () => {
      const price = Customer.schema.obj.price
      expect(price).toEqual({
        type: Number,
        required: [true, 'Please provide a price'],
        default: 0,
      })
    })

    test('loc', () => {
      const loc = Customer.schema.obj.loc
      expect(loc).toEqual([Number])
    })
  })
})
