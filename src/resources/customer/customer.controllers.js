import { crudControllers } from '../../utils'
import { Customer } from './customer.model'

export const findAll = async (req, res) => {
  try {
    const customers = await Customer.find().lean().exec()

    return res.status(200).send({ data: { customers } })
  } catch (err) {
    return res.status(500).end()
  }
}

export const addList = async (req, res) => {
  try {
    const { customers } = req.body
    let data = {}

    if (customers?.length) {
      data.users = await Customer.create(customers)
    }

    return res.status(200).send({ data })
  } catch (err) {
    return res.status(500).end()
  }
}

export default {
  ...crudControllers(Customer),
  findAll,
  addList,
}
