import { Router } from 'express'

import controllers from './asteroid.controllers'

const router = Router()

router.route('/').get(controllers.getMany).post(controllers.createOne)

router.route('/add-list').post(controllers.createMany)

router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
