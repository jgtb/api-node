import { Router } from 'express'

import { functions } from '../helpers'
import { admin, client } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', client, functions.get)
  .get('/details/:id', client, functions.getById)
  .get('/admin', admin, functions.get)
  .get('/admin/details/:id', admin, functions.getById)
  .post('/', ACL('master'), functions.post)
  .patch('/:id', ACL('master'), functions.patch)
  .patch('/activateDeactivate/:id', ACL('master'), functions.activateDeactivate)
  .delete('/:id', ACL('master'), functions.softDelete)

export default Routes
