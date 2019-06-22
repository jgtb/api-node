import { Router } from 'express'

import functions from '../../users/helpers/functions'
import { self } from '../pipeline'

const Routes = Router()

Routes
  .get(
    '/',
    self,
    functions.getById
  )

export default Routes
