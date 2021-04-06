import { Router } from 'express'
import controllers from './user.controllers'

const router = Router()

router.route('/').get(controllers.getMany)

router.route('/me').get(controllers.me).put(controllers.updateMe)
router.route('/add-list').post(controllers.createMany)

router.route('/:id').get(controllers.getOne).delete(controllers.removeOne)

export default router
