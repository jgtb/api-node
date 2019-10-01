import { Router } from 'express'

import Functions, { advertsMessageConfig } from '../support/functions'
import { admin, profile } from '../pipeline'
import { ACL, accept } from '../../../middleware'
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
    '/admin/:role',
    ACL('master'),
    admin,
    Functions.get()
  )
  .get(
    '/admin/paginate/:role',
    ACL('master'),
    admin,
    Functions.getWithPaginate()
  )
  .get(
    '/admin/details/:id',
    admin,
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
    autoInject,
    accept({
      instance: 'body',
      fields: [ 'plain', 'name', 'ein', 'email', 'cellPhone', 'commercialPhone', 'password' ]
    }),
    post,
    plain,
    Functions.post()
  )
  .post(
    '/admin',
    ACL('master'),
    Functions.post()
  )
  .post(
    '/adverts',
    autoInject,
    Functions.postArray('adverts', advertsMessageConfig)
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'ein', 'email', 'cellPhone', 'commercialPhone' ] }),
    Functions.patch()
  )
  .patch(
    '/admin/:id',
    ACL('master'),
    Functions.patch()
  )
  .patch(
    '/adverts/:id',
    autoInject,
    Functions.patchArray('adverts', advertsMessageConfig)
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
  .patch(
    '/admin/activateDeactivate/:id',
    ACL('master'),
    Functions.activateDeactivate()
  )
  .delete(
    '/admin/:id',
    ACL('master'),
    Functions.softDelete()
  )

export default Routes
