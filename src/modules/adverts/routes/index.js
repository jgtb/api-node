import { Router } from 'express'

import Functions from '../support/functions'
import { admin } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/admin', ACL('master'), admin, Functions.get())
  .get('/admin/paginate', ACL('master'), admin, Functions.getWithPaginate())
  .get('/admin/details/:id', ACL('master'), admin, Functions.getById())
  .post('/', ACL('master'), Functions.post())
  .patch('/:id', ACL('master'), Functions.patch())
  .patch('/activateDeactivate/:id', ACL('master'), Functions.activateDeactivate())
  .delete('/:id', ACL('master'), Functions.softDelete())

export default Routes
