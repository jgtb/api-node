import { Router } from 'express'

import functions from '../../users/helpers/functions'
import { self as selfMiddleware } from '../middleware'
import { self as selfPipeline } from '../pipeline'

const Routes = Router()

Routes
  .get(
    '/',
    selfMiddleware,
    selfPipeline,
    functions.getById
  )

export default Routes
