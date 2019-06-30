import { Router } from 'express'

import functions from '../helpers/functions'
import { self } from '../middleware'
import { ignore } from '../../../middleware'

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
    self,
    functions.patch
  )

export default Routes
