import { Router } from 'express'

import { functions } from '../helpers'
import { partners, cards, cardsDetailed } from '../pipeline'
import { accept } from '../../../middleware'
import { autoInject, validateAddresses } from '../middleware'

const Routes = Router()

Routes
  .get( //  Public Route
    '/',
    accept({ instance: 'body', fields: [ 'name' ] }),
    partners,
    functions.get
  )
  .get( //  Public Route
    '/paginated',
    accept({ instance: 'body', fields: [ 'name' ] }),
    partners,
    functions.getWithPaginate
  )
  .get( //  Public Route
    '/:id',
    partners,
    functions.getById
  )
  .get( //  Public Route
    '/cards/:id',
    cards,
    functions.getById
  )
  .get( //  Public Route
    '/cards/card/:id',
    cardsDetailed,
    functions.getById
  )
  .patch( //  Secure Route (Only for who is a partner)
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'description', 'phone', 'email', 'logo' ] }),
    functions.patch
  )
  .put( //  Secure Route (Only for who is a partner)
    '/cards',
    autoInject,
    accept({
      instance: 'body',
      fields: [ '_id', 'name', 'description', 'thumbnail', 'features', 'status' ]
    }),
    functions.putArray('cards')
  )
  .put( //  Secure Route (Only for who is a partner)
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
