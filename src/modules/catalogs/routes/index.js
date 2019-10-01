import { Router } from 'express'

import {
  VehiclesFunctions,
  BrandsFunctions,
  ModesFunctions,
  VersionsFunctions
} from '../support/functions'
import { catalogs } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', catalogs, VehiclesFunctions.getWithPaginate())
  .get('/vehicles/paginated', VehiclesFunctions.getWithPaginate())
  .get('/vehicles/details/:id', VehiclesFunctions.getById())
  .get('/brands/paginated/:id', BrandsFunctions.getWithPaginate())
  .get('/brands/details/:id', BrandsFunctions.getById())
  .get('/modes/paginated/:id', ModesFunctions.getWithPaginate())
  .get('/modes/details/:id', ModesFunctions.getById())
  .get('/versions/paginated/:id', VersionsFunctions.getWithPaginate())
  .get('/versions/details/:id', VersionsFunctions.getById())
  .post('/vehicles', ACL('master'), VehiclesFunctions.post())
  .post('/brands', ACL('master'), BrandsFunctions.post())
  .post('/modes', ACL('master'), ModesFunctions.post())
  .post('/versions', ACL('master'), VersionsFunctions.post())
  .patch('/vehicles/:id', ACL('master'), VehiclesFunctions.patch())
  .patch('/brands/:id', ACL('master'), BrandsFunctions.patch())
  .patch('/modes/:id', ACL('master'), ModesFunctions.patch())
  .patch('/versions/:id', ACL('master'), VersionsFunctions.patch())
  .delete('/vehicles/:id', ACL('master'), VehiclesFunctions.softDelete())
  .delete('/brands/:id', ACL('master'), BrandsFunctions.softDelete())
  .delete('/modes/:id', ACL('master'), ModesFunctions.softDelete())
  .delete('/versions/:id', ACL('master'), VersionsFunctions.softDelete())

export default Routes
