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
  .get('/admin/paginate', admin, Functions.getWithPaginate())
  .get('/admin/details/:id', admin, Functions.getById())
  .post('/', ACL('master'), Functions.post())
  .patch('/:id', ACL('master'), Functions.patch())
  .patch('/activateDeactivate/:id', ACL('master'), Functions.activateDeactivate())
  .delete('/:id', ACL('master'), Functions.softDelete())

export default Routes
