import { Router } from 'express'

import functions from '../helpers/functions'
import { create } from '../middleware'

const Routes = Router()

Routes
  .get('/', functions.get)
  .get('/paginated', functions.getWithPaginate)
  .get('/details/:id', functions.getById)
  .post('/', create, functions.insertMany)
  .patch('/:id', functions.patch)

export default Routes
