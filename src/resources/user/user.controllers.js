import { crudControllers } from '../../utils'
import { User } from './user.model'

export const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: req.body },
      {
        new: true,
      }
    )
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const findAll = async (req, res) => {
  try {
    const users = await User.find().lean().exec()

    return res.status(200).send({ data: { users } })
  } catch (err) {
    return res.status(500).end()
  }
}

export const addList = async (req, res) => {
  try {
    const { users } = req.body
    let data = {}

    if (users?.length) {
      data.users = await User.create(users)
    }

    return res.status(200).send({ data })
  } catch (err) {
    return res.status(500).end()
  }
}

export default {
  ...crudControllers(User),
  findAll,
  addList,
  me,
  updateMe,
}
