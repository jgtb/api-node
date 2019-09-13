import { Router } from 'express'

import {
  VehiclesFunctions,
  BrandsFunctions,
  ModesFunctions,
  VersionsFunctions
} from '../helpers'
import { catalogs } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', catalogs, VehiclesFunctions.getWithPaginate)
  .get('/vehicles/paginated', VehiclesFunctions.getWithPaginate)
  .get('/vehicles/details/:id', VehiclesFunctions.getById)
  .get('/brands/paginated/:id', BrandsFunctions.getWithPaginate)
  .get('/brands/details/:id', BrandsFunctions.getById)
  .get('/modes/paginated/:id', ModesFunctions.getWithPaginate)
  .get('/modes/details/:id', ModesFunctions.getById)
  .get('/versions/paginated/:id', VersionsFunctions.getWithPaginate)
  .get('/versions/details/:id', VersionsFunctions.getById)
  .post('/vehicles', ACL('admin'), VehiclesFunctions.post)
  .post('/brands', ACL('admin'), BrandsFunctions.post)
  .post('/modes', ACL('admin'), ModesFunctions.post)
  .post('/versions', ACL('admin'), VersionsFunctions.post)
  .patch('/vehicles/:id', ACL('admin'), VehiclesFunctions.patch)
  .patch('/brands/:id', ACL('admin'), BrandsFunctions.patch)
  .patch('/modes/:id', ACL('admin'), ModesFunctions.patch)
  .patch('/versions/:id', ACL('admin'), VersionsFunctions.patch)
  .delete('/vehicles/:id', ACL('admin'), VehiclesFunctions.softDelete)
  .delete('/brands/:id', ACL('admin'), BrandsFunctions.softDelete)
  .delete('/modes/:id', ACL('admin'), ModesFunctions.softDelete)
  .delete('/versions/:id', ACL('admin'), VersionsFunctions.softDelete)

export default Routes
