import mongoose from 'mongoose'

import { Asteroid } from '../asteroid/asteroid.model'

const customerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please add a first_name'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'Please add a last_name'],
    },
    age: {
      type: Number,
      required: [true, 'Please add an age'],
    },
    hotspot_asteroids: {
      type: Number,
      required: [true, 'Please provide a hotspot asteroids number'],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      default: 0,
    },
    loc: [Number],
  },
  {
    timestamps: true,
  }
)

customerSchema.index({ loc: '2d' })

customerSchema.methods.getHotspotAsteroids = async function () {
  return Asteroid.count({
    loc: {
      $near: this.loc,
      $maxDistance: 15,
    },
  })
}

customerSchema.pre('save', async function (next) {
  try {
    const hotspotAsteroids = await this.getHotspotAsteroids()
    this.hotspot_asteroids = hotspotAsteroids
    this.price = 170 + ((100 * this.age) / 35 + 10 * hotspotAsteroids)
  } catch (err) {
    next(err)
  }
})

export const Customer = mongoose.model('customer', customerSchema)
