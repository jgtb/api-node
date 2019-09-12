import { Router } from 'express'

import {
  VehiclesFunctions,
  BrandsFunctions,
  ModelsFunctions,
  VersionsFunctions
} from '../helpers'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/vehicles/paginated', VehiclesFunctions.getWithPaginate)
  .get('/vehicles/details/:id', VehiclesFunctions.getById)
  .get('/brands/paginated/:id', BrandsFunctions.getWithPaginate)
  .get('/brands/details/:id', BrandsFunctions.getById)
  .get('/models/paginated/:id', ModelsFunctions.getWithPaginate)
  .get('/models/details/:id', ModelsFunctions.getById)
  .get('/versions/paginated/:id', VersionsFunctions.getWithPaginate)
  .get('/versions/details/:id', VersionsFunctions.getById)
  .post('/vehicles', ACL('admin'), VehiclesFunctions.post)
  .post('/brands', ACL('admin'), BrandsFunctions.post)
  .post('/models', ACL('admin'), ModelsFunctions.post)
  .post('/versions', ACL('admin'), VersionsFunctions.post)
  .patch('/vehicles/:id', ACL('admin'), VehiclesFunctions.patch)
  .patch('/brands/:id', ACL('admin'), BrandsFunctions.patch)
  .patch('/models/:id', ACL('admin'), ModelsFunctions.patch)
  .patch('/versions/:id', ACL('admin'), VersionsFunctions.patch)
  .delete('/vehicles/:id', ACL('admin'), VehiclesFunctions.softDelete)
  .delete('/brands/:id', ACL('admin'), BrandsFunctions.softDelete)
  .delete('/models/:id', ACL('admin'), ModelsFunctions.softDelete)
  .delete('/versions/:id', ACL('admin'), VersionsFunctions.softDelete)

export default Routes
