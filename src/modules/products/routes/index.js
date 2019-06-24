import { Router } from 'express'

import functions from '../helpers/functions'
import { self, user, categories } from '../pipeline'

import autoInject from '../middleware/autoInject'

const Routes = Router()

Routes
  .get('/', self, user, categories, functions.get)
  .get('/paginated', self, user, categories, functions.getWithPaginate)
  .get('/me', autoInject, self, user, categories, functions.get)
  .get('/me/paginated', autoInject, self, user, categories, functions.getWithPaginate)
  .get('/details/:id', self, user, categories, functions.getById)
  .post('/', autoInject, functions.post)
  .patch('/:id', autoInject, functions.patch)
  .patch('/status/:id', autoInject, functions.activateDeactivate)
  .delete('/:id', autoInject, functions.delete)

export default Routes
