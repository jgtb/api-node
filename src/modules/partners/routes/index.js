import { Router } from 'express'

import { functions } from '../helpers'
import { partners } from '../pipeline'
import { accept } from '../../../middleware'
import { autoInject, validateAddresses } from '../middleware'

const Routes = Router()

Routes
  .get(
    '/',
    partners,
    functions.get
  )
  .get(
    '/paginated',
    partners,
    functions.getWithPaginate
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'description', 'phone', 'email', 'logo' ] }),
    functions.patch
  )
  .put(
    '/cards',
    autoInject,
    accept({
      instance: 'body',
      fields: [ '_id', 'name', 'description', 'thumbnail', 'features', 'status' ]
    }),
    functions.putArray('cards')
  )
  .put(
    '/addresses',
    autoInject,
    accept({
      instance: 'body',
      fields: [ '_id', 'thumbnail', 'zipcode', 'state', 'city', 'neighborhood', 'street', 'number', 'complement' ]
    }),
    validateAddresses,
    functions.putArray('addresses')
  )

export default Routes
