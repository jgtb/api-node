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
import {
  catalogs,
  vehicles,
  vehiclesBase,
  brands,
  brandsBase,
  modes,
  modesBase,
  versions,
  versionsBase,
  categories,
  categoriesBase,
  optionals,
  optionalsBase,
  fuels,
  fuelsBase,
  colors,
  colorsBase,
  options
} from '../pipeline'
import { ACL } from '../../../middleware'

const Routes = Router()

Routes
  .get('/', catalogs, VehiclesFunctions.getWithPaginate())
  .get('/vehicles/paginate', vehicles, VehiclesFunctions.getWithPaginate())
  .get('/vehicles/options', options, VehiclesFunctions.get())
  .get('/vehicles/details/:id', vehiclesBase, VehiclesFunctions.getById())
  .get('/brands/paginate', brands, BrandsFunctions.getWithPaginate())
  .get('/brands/options/:id', options, autoInject('vehicle'), BrandsFunctions.get())
  .get('/brands/details/:id', brandsBase, BrandsFunctions.getById())
  .get('/modes/paginate', modes, ModesFunctions.getWithPaginate())
  .get('/modes/options/:id', options, autoInject('brand'), ModesFunctions.get())
  .get('/modes/details/:id', modesBase, ModesFunctions.getById())
  .get('/versions/paginate', versions, VersionsFunctions.getWithPaginate())
  .get('/versions/options/:id', options, autoInject('mode'), VersionsFunctions.get())
  .get('/versions/details/:id', versionsBase, VersionsFunctions.getById())
  .get('/categories/paginate', categories, CategoriesFunctions.getWithPaginate())
  .get('/categories/options/:id', options, autoInject('vehicle'), CategoriesFunctions.get())
  .get('/categories/details/:id', categoriesBase, CategoriesFunctions.getById())
  .get('/optionals/paginate', optionals, OptionalsFunctions.getWithPaginate())
  .get('/optionals/options/:id', options, autoInject('category'), OptionalsFunctions.get())
  .get('/optionals/details/:id', optionalsBase, OptionalsFunctions.getById())
  .get('/fuels/paginate', fuels, FuelsFunctions.getWithPaginate())
  .get('/fuels/options', options, FuelsFunctions.get())
  .get('/fuels/details/:id', fuelsBase, FuelsFunctions.getById())
  .get('/colors/paginate', colors, ColorsFunctions.getWithPaginate())
  .get('/colors/options', options, ColorsFunctions.get())
  .get('/colors/details/:id', colorsBase, ColorsFunctions.getById())
  .post('/vehicles', ACL('master'), VehiclesFunctions.post())
  .post('/brands', ACL('master'), BrandsFunctions.post())
  .post('/modes', ACL('master'), ModesFunctions.post())
  .post('/versions', ACL('master'), VersionsFunctions.post())
  .post('/categories', ACL('master'), CategoriesFunctions.post())
  .post('/optionals', ACL('master'), OptionalsFunctions.post())
  .post('/fuels', ACL('master'), FuelsFunctions.post())
  .post('/colors', ACL('master'), ColorsFunctions.post())
  .patch('/vehicles/:id', ACL('master'), VehiclesFunctions.patch())
  .patch('/brands/:id', ACL('master'), BrandsFunctions.patch())
  .patch('/modes/:id', ACL('master'), ModesFunctions.patch())
  .patch('/versions/:id', ACL('master'), VersionsFunctions.patch())
  .patch('/categories/:id', ACL('master'), CategoriesFunctions.patch())
  .patch('/optionals/:id', ACL('master'), OptionalsFunctions.patch())
  .patch('/fuels/:id', ACL('master'), FuelsFunctions.patch())
  .patch('/colors/:id', ACL('master'), ColorsFunctions.patch())
  .delete('/vehicles/:id', ACL('master'), VehiclesFunctions.softDelete())
  .delete('/brands/:id', ACL('master'), BrandsFunctions.softDelete())
  .delete('/modes/:id', ACL('master'), ModesFunctions.softDelete())
  .delete('/versions/:id', ACL('master'), VersionsFunctions.softDelete())
  .delete('/categories/:id', ACL('master'), CategoriesFunctions.softDelete())
  .delete('/optionals/:id', ACL('master'), OptionalsFunctions.softDelete())
  .delete('/fuels/:id', ACL('master'), FuelsFunctions.softDelete())
  .delete('/colors/:id', ACL('master'), ColorsFunctions.softDelete())

export default Routes
