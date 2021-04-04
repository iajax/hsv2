import mongoose from 'mongoose'

import { Asteroid } from '../asteroid/asteroid.model'

const customerSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    Lastname: {
      type: String,
      required: [true, 'Please add a lastname'],
    },
    Age: {
      type: Number,
      required: [true, 'Please add an age'],
    },
    Latitude: {
      type: Number,
      required: [true, 'Please provide a latitude coord'],
    },
    Longitude: {
      type: Number,
      required: [true, 'Please provide a longitude coord'],
    },
    Hotspot_asteroids: {
      type: Number,
      required: [true, 'Please provide a hotspot asteroids number'],
      default: 0,
    },
    Price: {
      type: Number,
      required: [true, 'Please provide a price'],
      default: 0,
    },
    loc: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: [Number],
    },
  },
  {
    timestamps: true,
  }
)

customerSchema.index({ loc: '2dsphere' })

customerSchema.methods.getHotspotAsteroids = async function () {
  return Asteroid.count({
    loc: {
      $near: this.loc.coordinates,
      $maxDistance: 15,
    },
  })
}

customerSchema.pre('save', async function (next) {
  try {
    const hotspotAsteroids = await this.getHotspotAsteroids()
    this.Hotspot_asteroids = hotspotAsteroids
    this.Price = 170 + ((100 * this.Age) / 35 + 10 * hotspotAsteroids)
  } catch (err) {
    next(err)
  }
})

export const Customer = mongoose.model('Customer', customerSchema)
