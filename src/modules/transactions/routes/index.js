import { Router } from 'express'

import functions from '../helpers/functions'

const Routes = Router()

Routes
  .get('/', functions.get)
  .get('/paginated', functions.getWithPaginate)
  .get('/:id', functions.getById)
  .post('/', functions.post)
  .patch('/:id', functions.patch)

export default Routes
