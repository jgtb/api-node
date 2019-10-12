import { Router } from 'express'

import Functions from '../support/functions'
import { adminBase, adminVirtual, client, options } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', client, Functions.get())
  .get('/options', options, Functions.get())
  .get('/paginate', client, Functions.getWithPaginate())
  .get('/details/:id', client, Functions.getById())
  .get('/admin', ACL('master'), adminVirtual, Functions.get())
  .get('/admin/paginate', ACL('master'), adminVirtual, Functions.getWithPaginate())
  .get('/admin/details/:id', ACL('master'), adminBase, Functions.getById())
  .post('/', ACL('master'), Functions.post())
  .patch('/:id', ACL('master'), Functions.patch())
  .patch('/activateDeactivate/:id', ACL('master'), Functions.activateDeactivate())
  .delete('/:id', ACL('master'), Functions.softDelete())

export default Routes
