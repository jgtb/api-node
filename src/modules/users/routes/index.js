import { Router } from 'express'

import { functions } from '../helpers'
import { profile } from '../pipeline'
import { accept } from '../../../middleware'
import {
  autoInject,
  plain,
  post,
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
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'plain', 'name', 'ein', 'email', 'cellPhone', 'commercialPhone', 'password' ] }),
    post,
    plain,
    functions.post
  )
  .post(
    '/adverts',
    accept({ instance: 'body', fields: [ ] }),
    post,
    plain,
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
    accept({ instance: 'body', fields: [ ] }),
    functions.putArray('adverts')
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
