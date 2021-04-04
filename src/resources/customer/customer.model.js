import mongoose from 'mongoose'

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
  },
  { timestamps: true }
)

export const Customer = mongoose.model('Customer', customerSchema)
