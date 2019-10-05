import { Router } from 'express'

import {
  VehiclesFunctions,
  BrandsFunctions,
  ModesFunctions,
  VersionsFunctions,
  CategoriesFunctions,
  OptionalsFunctions,
  FuelsFunctions,
  ColorsFunctions
} from '../support/functions'
import { autoInject } from '../middleware'
import { catalogs, options } from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', catalogs, VehiclesFunctions.getWithPaginate())
  .get('/vehicles', options, VehiclesFunctions.get())
  .get('/vehicles/details/:id', options, VehiclesFunctions.getById())
  .get('/brands/:id', options, autoInject('vehicle'), BrandsFunctions.get())
  .get('/brands/details/:id', options, BrandsFunctions.getById())
  .get('/modes/:id', options, autoInject('brand'), ModesFunctions.get())
  .get('/modes/details/:id', options, ModesFunctions.getById())
  .get('/versions/:id', options, autoInject('mode'), VersionsFunctions.get())
  .get('/versions/details/:id', options, VersionsFunctions.getById())
  .get('/categories/:id', options, autoInject('vehicle'), CategoriesFunctions.get())
  .get('/categories/details/:id', options, CategoriesFunctions.getById())
  .get('/optionals/:id', options, autoInject('category'), OptionalsFunctions.get())
  .get('/optionals/details/:id', options, OptionalsFunctions.getById())
  .get('/fuels', options, FuelsFunctions.get())
  .get('/fuels/details/:id', options, FuelsFunctions.getById())
  .get('/colors', options, ColorsFunctions.get())
  .get('/colors/details/:id', options, ColorsFunctions.getById())
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
