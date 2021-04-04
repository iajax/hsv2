import { crudControllers } from '../../utils'
import { Asteroid } from './asteroid.model'

export const findAll = async (req, res) => {
  try {
    const asteroids = await Asteroid.find().lean().exec()

    return res.status(200).send({ data: { asteroids } })
  } catch (err) {
    return res.status(500).end()
  }
}

export const addList = async (req, res) => {
  try {
    const { asteroids } = req.body
    let data = {}

    if (asteroids?.length) {
      data.users = await Asteroid.create(asteroids)
    }

    return res.status(200).send({ data })
  } catch (err) {
    return res.status(500).end()
  }
}

export default {
  ...crudControllers(Asteroid),
  findAll,
  addList,
}
