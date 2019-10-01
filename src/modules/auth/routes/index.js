import { Router } from 'express'

import { accept } from '../../../middleware'

import login from './login'

const Routes = Router()

Routes
  .post(
    '/login',
    accept({ instance: 'body', fields: [ 'email', 'password' ] }),
    login('master', 'dealer', 'private')
  )
  .post(
    '/login/admin',
    accept({ instance: 'body', fields: [ 'email', 'password' ] }),
    login('master')
  )

export default Routes
