import { Router } from 'express'

import functions from '../helpers/functions'

const Routes = Router()

Routes
  .post('/', functions.post)
  .patch('/', functions.patch)

export default Routes
