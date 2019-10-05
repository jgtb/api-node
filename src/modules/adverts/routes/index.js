import { Router } from 'express'

import Functions from '../support/functions'
import { adminBase, adminVirtual } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/admin', ACL('master'), adminVirtual, Functions.get())
  .get('/admin/paginate', ACL('master'), adminVirtual, Functions.getWithPaginate())
  .get('/admin/details/:id', ACL('master'), adminBase, Functions.getById())
  .post('/admin', ACL('master'), Functions.post())
  .patch('/admin/:id', ACL('master'), Functions.patch())
  .patch('/admin/activateDeactivate/:id', ACL('master'), Functions.activateDeactivate())
  .delete('/admin/:id', ACL('master'), Functions.softDelete())

export default Routes
