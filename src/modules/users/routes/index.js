import { Router } from 'express'

import { functions } from '../helpers'
import { profile } from '../pipeline'
import { accept } from '../../../middleware'
import { autoInject, forgotPassword, validatePassword } from '../middleware'

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
