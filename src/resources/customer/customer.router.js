import { Router } from 'express'
import controllers from './customer.controllers'

const router = Router()

router.route('/').post(controllers.createOne)

router.route('/find-all').get(controllers.findAll)
router.route('/add-list').post(controllers.addList)

router
  .route('/:id')
  .get(controllers.getOne)
  .delete(controllers.removeOne)
  .put(controllers.updateOne)

export default router
