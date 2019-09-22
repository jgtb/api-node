import { Router } from 'express'

import Functions from '../support/functions'
import { admin, client } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', client, Functions.get())
  .get('/paginate', client, Functions.getWithPaginate())
  .get('/details/:id', client, Functions.getById())
  .get('/admin', admin, Functions.get())
  .get('/admin/details/:id', admin, Functions.getById())
  .post('/', ACL('admin'), Functions.post())
  .patch('/:id', ACL('admin'), Functions.patch())
  .patch('/activateDeactivate/:id', ACL('admin'), Functions.activateDeactivate())
  .delete('/:id', ACL('admin'), Functions.softDelete())

export default Routes
