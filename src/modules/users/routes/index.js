import { Router } from 'express'

import functions from '../helpers/functions'
import { profile } from '../pipeline'
import { accept } from '../../../middleware'
import { autoInject, validateAddresses } from '../middleware'

const Routes = Router()

Routes
  .get(
    '/profile',
    autoInject,
    profile,
    functions.getById
  )
  .post(
    '/',
    accept({ instance: 'body', fields: [ 'name', 'phone', 'email', 'password' ] }),
    functions.post
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'phone', 'email' ] }),
    functions.patch
  )
  .put(
    '/addresses',
    autoInject,
    accept({ instance: 'body', fields: [ 'zipcode', 'state', 'city', 'neighborhood', 'street', 'number', 'complement' ] }),
    validateAddresses,
    functions.putArray('addresses')
  )

export default Routes
