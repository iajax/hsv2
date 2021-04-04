import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import './config'
import { connect, protect, signin, signup } from './utils'
import asteroidRouter from './resources/asteroid/asteroid.router'
import userRouter from './resources/user/user.router'
import customerRouter from './resources/customer/customer.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.post('/signin', signin)
app.post('/signup', signup)
app.use('/api', protect)
app.use('/api/asteroid', asteroidRouter)
app.use('/api/user', userRouter)
app.use('/api/customer', customerRouter)

export const start = async () => {
  const port = process.env.PORT || 3000
  try {
    await connect()
    app.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
