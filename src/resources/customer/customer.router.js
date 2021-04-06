import { Router } from 'express'
import controllers from './customer.controllers'

const router = Router()

router.route('/').get(controllers.getMany).post(controllers.createOne)

router.route('/add-list').post(controllers.createMany)

router
  .route('/:id')
  .get(controllers.getOne)
  .delete(controllers.removeOne)
  .put(controllers.updateOne)

export default router
