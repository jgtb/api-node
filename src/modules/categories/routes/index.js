import { Router } from 'express'

import functions from '../helpers/functions'

const Routes = Router()

Routes
  .get('/', functions.get)
  .get('/paginated', functions.getWithPaginate)
  .get('/details/:id', functions.getById)

export default Routes
