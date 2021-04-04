import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connect = (url = process.env.MONGO_URI, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
}
