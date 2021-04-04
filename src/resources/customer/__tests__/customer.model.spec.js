import { Customer } from '../customer.model'

describe('Customer model', () => {
  describe('schema', () => {
    test('Name', () => {
      const Name = Customer.schema.obj.Name
      expect(Name).toEqual({
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
      })
    })

    test('Lastname', () => {
      const Lastname = Customer.schema.obj.Lastname
      expect(Lastname).toEqual({
        type: String,
        required: [true, 'Please add a lastname'],
      })
    })

    test('Age', () => {
      const Age = Customer.schema.obj.Age
      expect(Age).toEqual({
        type: Number,
        required: [true, 'Please add an age'],
      })
    })

    test('Latitude', () => {
      const Latitude = Customer.schema.obj.Latitude
      expect(Latitude).toEqual({
        type: Number,
        required: [true, 'Please provide a latitude coord'],
      })
    })

    test('Longitude', () => {
      const Longitude = Customer.schema.obj.Longitude
      expect(Longitude).toEqual({
        type: Number,
        required: [true, 'Please provide a longitude coord'],
      })
    })

    test('Hotspot_asteroids', () => {
      const Hotspot_asteroids = Customer.schema.obj.Hotspot_asteroids
      expect(Hotspot_asteroids).toEqual({
        type: Number,
        required: [true, 'Please provide a hotspot asteroids number'],
        default: 0,
      })
    })

    test('Price', () => {
      const Price = Customer.schema.obj.Price
      expect(Price).toEqual({
        type: Number,
        required: [true, 'Please provide a price'],
        default: 0,
      })
    })
  })
})
