import { Router } from 'express'

import { functions } from '../helpers'
import { partners, cards, cardsDetailed } from '../pipeline'
import { ACL, accept } from '../../../middleware'
import { autoInject, validateAddresses } from '../middleware'

const Routes = Router()

Routes
  .get(
    '/',
    accept({ instance: 'body', fields: [ 'name' ] }),
    partners,
    functions.get
  )
  .get(
    '/paginated',
    accept({ instance: 'body', fields: [ 'name' ] }),
    partners,
    functions.getWithPaginate
  )
  .get(
    '/:id',
    partners,
    functions.getById
  )
  .get(
    '/cards/:id',
    cards,
    functions.getById
  )
  .get(
    '/cards/card/:id',
    cardsDetailed,
    functions.getById
  )
  .patch(
    '/',
    ACL('partner'),
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'description', 'phone', 'email', 'logo' ] }),
    functions.patch
  )
  .put(
    '/cards',
    ACL('partner'),
    autoInject,
    accept({
      instance: 'body',
      fields: [ '_id', 'name', 'description', 'thumbnail', 'features', 'status' ]
    }),
    functions.putArray('cards')
  )
  .put(
    '/addresses',
    ACL('partner'),
    autoInject,
    accept({
      instance: 'body',
      fields: [ '_id', 'thumbnail', 'zipcode', 'state', 'city', 'neighborhood', 'street', 'number', 'complement' ]
    }),
    validateAddresses,
    functions.putArray('addresses')
  )

export default Routes
