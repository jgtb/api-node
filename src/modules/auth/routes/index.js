import { Router } from 'express'

import login from './login'

const Routes = Router()

Routes
  .post(
    '/login',
    login
  )

export default Routes
