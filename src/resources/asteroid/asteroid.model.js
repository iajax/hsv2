import mongoose from 'mongoose'
import { body2latlong } from 'keplerjs'

const asteroidSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    a: {
      type: Number,
      required: true,
    },
    e: {
      type: Number,
      required: true,
    },
    i: {
      type: Number,
      required: true,
    },
    om: {
      type: Number,
      required: true,
    },
    w: {
      type: Number,
      required: true,
    },
    ma: {
      type: Number,
      required: true,
    },
    loc: [Number],
  },
  { timestamps: true }
)

asteroidSchema.index({ loc: '2d' }, { min: -360, max: 360 })

asteroidSchema.pre('save', async function (next) {
  try {
    const { lat, long } = body2latlong(this)
    this.loc = [long, lat]
  } catch (err) {
    next(err)
  }
})

export const Asteroid = mongoose.model('asteroid', asteroidSchema)
