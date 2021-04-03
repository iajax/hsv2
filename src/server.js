import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import './config'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/test', (req, res) => {
  res.status(200).send({ message: 'test' })
})

export const start = async () => {
  const port = process.env.PORT || 3000;

  try {
    app.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
