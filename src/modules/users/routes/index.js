import { Router } from 'express'

import { functions } from '../helpers'
import { profile } from '../pipeline'
import { accept } from '../../../middleware'
import {
  autoInject,
  plain,
  post,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword,
  updatePassword
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
    autoInject,
    accept({
      instance: 'body',
      fields: [ 'plain', 'name', 'ein', 'email', 'cellPhone', 'commercialPhone', 'password' ]
    }),
    post,
    plain,
    functions.post
  )
  .post(
    '/adverts',
    autoInject,
    functions.putArray('adverts')
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'ein', 'email', 'cellPhone', 'commercialPhone' ] }),
    functions.patch
  )
  .patch(
    '/adverts/:id',
    autoInject,
    functions.putArray('adverts')
  )
  .patch(
    '/forgot-password/send-pin',
    accept({ instance: 'body', fields: [ 'email' ] }),
    forgotPasswordSendPin,
    functions.patch
  )
  .patch(
    '/forgot-password/validate-pin',
    accept({ instance: 'body', fields: [ 'email', 'code' ] }),
    forgotPasswordValidatePin
  )
  .patch(
    '/forgot-password',
    accept({ instance: 'body', fields: [ 'email', 'code', 'password' ] }),
    forgotPassword,
    functions.patch
  )
  .patch(
    '/password',
    autoInject,
    accept({ instance: 'body', fields: [ 'currentPassword', 'confirmPassword', 'password' ] }),
    updatePassword,
    functions.patch
  )

export default Routes
