import { Asteroid } from '../resources/asteroid/asteroid.model'
import { User } from '../resources/user/user.model'

export const findAll = async (req, res) => {
  try {
    const asteroids = await Asteroid.find().lean().exec()
    const users = await User.find().lean().exec()

    return res.status(200).send({ data: { asteroids, users } })
  } catch (err) {
    return res.status(500).end()
  }
}

export const addList = async (req, res) => {
  try {
    const { asteroids, users } = req.body
    let data = {}

    if (asteroids?.length) {
      data.asteroids = await Asteroid.create(asteroids)
    }
    if (users?.length) {
      data.users = await User.create(users)
    }

    return res.status(200).send({ data })
  } catch (err) {
    return res.status(500).end()
  }
}
