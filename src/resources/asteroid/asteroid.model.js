import mongoose from 'mongoose'

const asteroidSchema = new mongoose.Schema(
  {
    name: {
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
  },
  { timestamps: true }
)

export const Asteroid = mongoose.model('asteroid', asteroidSchema)
