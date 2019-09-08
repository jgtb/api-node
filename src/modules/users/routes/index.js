import { Router } from 'express'

import { functions } from '../helpers'
import { profile } from '../pipeline'
import { ACL, accept } from '../../../middleware'
import {
  autoInject,
  roles,
  forgotPasswordSendPin,
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
    '/manager',
    ACL('master'),
    roles('manager'),
    accept({ instance: 'body', fields: [ 'name', 'phone', 'email', 'password' ] }),
    functions.post
  )
  .post(
    '/seller',
    ACL('master', 'manager'),
    roles('seller'),
    accept({ instance: 'body', fields: [ 'name', 'phone', 'email', 'password' ] }),
    functions.post
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'phone', 'email' ] }),
    functions.patch
  )
  .patch(
    '/forgot-password/send-pin',
    accept({ instance: 'body', fields: [ 'email' ] }),
    forgotPasswordSendPin,
    functions.patch
  )
  .patch(
    '/forgot-password',
    accept({ instance: 'body', fields: [ 'code', 'email', 'password' ] }),
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
