import { Router } from 'express'

import Functions from '../support/functions'
import {
  autoInject,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword,
  updatePassword
} from '../middleware'

const Routes = Router()

Routes
  .get(
    '/',
    Functions.get()
  )
  .get(
    '/paginate',
    Functions.getWithPaginate()
  )
  .get(
    '/details/:id',
    Functions.getById()
  )
  .get(
    '/profile',
    autoInject,
    profile,
    Functions.getById()
  )
  .post(
    '/',
    accept({
      instance: 'body',
      fields: [ 'name', 'email', 'password' ]
    }),
    Functions.post()
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'email' ] }),
    Functions.patch()
  )
  .patch(
    '/forgot-password/send-pin',
    accept({ instance: 'body', fields: [ 'email' ] }),
    forgotPasswordSendPin,
    Functions.patch()
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
    Functions.patch()
  )
  .patch(
    '/password',
    autoInject,
    accept({ instance: 'body', fields: [ 'currentPassword', 'confirmPassword', 'password' ] }),
    updatePassword,
    Functions.patch()
  )
  .delete(
    '/:id',
    Functions.softDelete()
  )

export default Routes
