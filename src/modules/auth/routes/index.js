import { Router } from 'express'

import { accept } from '../../../middleware'

import login from './login'

const Routes = Router()

Routes
  .post(
    '/login',
    accept({ instance: 'body', fields: [ 'email', 'password' ] }),
    login('admin', 'dealer', 'private')
  )
  .post(
    '/login/admin',
    accept({ instance: 'body', fields: [ 'email', 'password' ] }),
    login('admin')
  )

export default Routes
