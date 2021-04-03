import jwt from 'jsonwebtoken'

import { User } from '../resources/user/user.model'

export const createToken = (user) =>
  jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRATION,
  })

export const verifyToken = async (token) =>
  await jwt.verify(token, process.env.JWT_SECRET_KEY)

export const signup = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send({ message: 'need username and password' })
  }

  try {
    const user = await User.create(req.body)
    const token = createToken(user)

    return res.status(201).send({ token })
  } catch (err) {
    return res.status(500).end()
  }
}

export const signin = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send({ message: 'need username and password' })
  }

  try {
    const user = await User.findOne({ email: req.body.email })
      .select('email password')
      .exec()

    if (!user)
      return res.status(401).send({ message: 'The user does not exist' })

    const match = await user.comparePassword(req.body.password)

    if (!match) return res.status(401).send({ message: 'Invalid login' })

    const token = createToken(user)

    return res.status(201).send({ token })
  } catch (err) {
    res.status(500).end()
  }
}

export const protect = async (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer || !bearer.startsWith('Bearer ')) return res.status(401).end()

  const token = bearer.split('Bearer ')[1].trim()
  let payload
  try {
    payload = await verifyToken(token)
  } catch (err) {
    return res.status(401).end()
  }

  const user = await User.findById(payload.id).select('-password').lean().exec()

  if (!user) return res.status(401).end()

  req.user = user
  next()
}
