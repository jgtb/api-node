import { Router } from 'express'

import functions from '../helpers/functions'

const Routes = Router()

Routes
  .get('/paginated', functions.getWithPaginate)
  .get('/', functions.get)
  .get('/:id', functions.getById)
  .post('/', functions.post)
  .post('/many', functions.insertMany)
  .patch('/:id', functions.patch)
  .patch('/activateDeactivate/:id', functions.activateDeactivate)
  .delete('/:id', functions.delete)

export default Routes
