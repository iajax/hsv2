import { Asteroid } from '../asteroid.model'

describe('Asteroid model', () => {
  describe('schema', () => {
    test('full_name', () => {
      const full_name = Asteroid.schema.obj.full_name
      expect(full_name).toEqual({
        type: String,
        required: true,
        trim: true,
      })
    })

    test('a', () => {
      const a = Asteroid.schema.obj.a
      expect(a).toEqual({
        type: Number,
        required: true,
      })
    })

    test('e', () => {
      const e = Asteroid.schema.obj.e
      expect(e).toEqual({
        type: Number,
        required: true,
      })
    })

    test('i', () => {
      const i = Asteroid.schema.obj.i
      expect(i).toEqual({
        type: Number,
        required: true,
      })
    })

    test('om', () => {
      const om = Asteroid.schema.obj.om
      expect(om).toEqual({
        type: Number,
        required: true,
      })
    })

    test('w', () => {
      const w = Asteroid.schema.obj.w
      expect(w).toEqual({
        type: Number,
        required: true,
      })
    })

    test('ma', () => {
      const ma = Asteroid.schema.obj.ma
      expect(ma).toEqual({
        type: Number,
        required: true,
      })
    })
  })
})
