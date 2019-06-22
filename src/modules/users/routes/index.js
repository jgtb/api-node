import { Router } from 'express'

import functions from '../helpers/functions'
import { ignore } from '../../../middleware/reqHandlers'

import patch from './patch'

const Routes = Router()

Routes
  .post(
    '/',
    ignore({ instance: 'body', fields: [ 'isActive' ] }),
    functions.post
  )
  .patch(
    '/',
    ignore({ instance: 'body', fields: [ 'login', 'isActive' ] }),
    patch,
    functions.patch
  )

export default Routes
