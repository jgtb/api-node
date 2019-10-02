import { Router } from 'express'

import Functions from '../support/functions'
import { adminBase, adminVirtual, profile } from '../pipeline'
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
    adminVirtual,
    Functions.get()
  )
  .get(
    '/admin/paginate/:role',
    ACL('master'),
    adminVirtual,
    Functions.getWithPaginate()
  )
  .get(
    '/admin/details/:id',
    adminBase,
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
