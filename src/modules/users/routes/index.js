import { Router } from 'express'

import { functions } from '../helpers'
import { profile } from '../pipeline'
import { accept } from '../../../middleware'
import {
  autoInject,
  forgotPassword,
  validatePassword,
  cardsPost,
  cardsPostUse,
  cardsPatch
} from '../middleware'

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
  .post(
    '/cards',
    autoInject,
    accept({ instance: 'body', fields: [ 'card' ] }),
    cardsPost,
    functions.putArray('cards')
  )
  .post(
    '/cards/use',
    autoInject,
    accept({ instance: 'body', fields: [ 'card' ] }),
    cardsPostUse,
    functions.putArray('cards')
  )
  .patch(
    '/cards',
    accept({ instance: 'body', fields: [ 'user', 'card' ] }),
    cardsPatch,
    functions.putArray('cards')
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'phone', 'email' ] }),
    functions.patch
  )
  .patch(
    '/forgot-password',
    accept({ instance: 'body', fields: [ 'email' ] }),
    forgotPassword,
    functions.patch
  )
  .patch(
    '/password',
    autoInject,
    accept({ instance: 'body', fields: [ 'currentPassword', 'confirmPassword', 'password' ] }),
    validatePassword,
    functions.patch
  )

export default Routes
