import { Router } from 'express'
import controllers from './user.controllers'

const router = Router()

router
  .route('/')
  .get(controllers.getMany)
  // .post(controllers.createOne)
  .put(controllers.updateMe)

router.get('/profile', controllers.me)

router
  .route('/:id')
  .get(controllers.getOne)
  // .put(controllers.updateOne)
  .delete(controllers.removeOne)

// router.get('/')
// router.get('/profile', controllers.me)
// router.put('/', controllers.updateMe)

export default router
