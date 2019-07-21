import { Router } from 'express'

import functions from '../helpers/functions'
import { autoInject } from '../middleware'

const Routes = Router()

Routes
  .get('/profile', autoInject, functions.getById)
  .post('/', functions.post)
  .patch('/', autoInject, functions.patch)
  .put('/addresses', autoInject, functions.putArray('addresses'))

export default Routes
