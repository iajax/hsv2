export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.findOne({ _id: req.params.id }).lean().exec()

    if (!doc) return res.status(400).end()

    res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find().lean().exec()

    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const createOne = (model) => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body })

    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const updateOne = (model) => async (req, res) => {
  try {
    const updated = await model
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .lean()
      .exec()

    if (!updated) return res.status(400).end()

    res.status(200).json({ data: updated })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const removeOne = (model) => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      _id: req.params.id,
    })

    if (!removed) return res.status(400).end()

    return res.status(204).json({ data: null })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const crudControllers = (model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
})
