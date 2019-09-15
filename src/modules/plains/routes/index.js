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
  .post('/', ACL('admin'), functions.post)
  .patch('/:id', ACL('admin'), functions.patch)
  .patch('/activateDeactivate/:id', ACL('admin'), functions.activateDeactivate)
  .delete('/:id', ACL('admin'), functions.softDelete)

export default Routes
