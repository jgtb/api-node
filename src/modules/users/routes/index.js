import { Router } from 'express'

import Functions from '../support/functions'
import { accept } from '../../../middleware'
import {
  autoInject,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword,
  updatePassword
} from '../middleware'
import { profile } from '../pipeline'

const Routes = Router()

Routes
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
    Functions.post({ customSuccessMessage: 'Cadastro realizado com sucesso' })
  )
  .patch(
    '/',
    autoInject,
    accept({ instance: 'body', fields: [ 'name', 'email' ] }),
    Functions.patch({ customSuccessMessage: 'Dados atualizados com sucesso' })
  )
  .patch(
    '/forgot-password/send-pin',
    accept({ instance: 'body', fields: [ 'email' ] }),
    forgotPasswordSendPin,
    Functions.patch({ customSuccessMessage: 'Enviamos um código para o seu email' })
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
    Functions.patch({ customSuccessMessage: 'Senha alterada com sucesso' })
  )
  .patch(
    '/password',
    autoInject,
    accept({ instance: 'body', fields: [ 'currentPassword', 'confirmPassword', 'password' ] }),
    updatePassword,
    Functions.patch()
  )

export default Routes
