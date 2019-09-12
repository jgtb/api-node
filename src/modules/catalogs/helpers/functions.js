import functions from '../../../functions'

import VehiclesSchema from '../models/vehicles'
import BrandsSchema from '../models/brands'
import ModelsSchema from '../models/models'
import VersionsSchema from '../models/versions'

const VehiclesFunctions = functions(VehiclesSchema, { single: 'Veículo', plural: 'Veículos', type: 'o' })
const BrandsFunctions = functions(BrandsSchema, { single: 'Marca', plural: 'Marcas', type: 'a' })
const ModelsFunctions = functions(ModelsSchema, { single: 'Modelo', plural: 'Modelos', type: 'o' })
const VersionsFunctions = functions(VersionsSchema, { single: 'Versão', plural: 'Versões', type: 'o' })

export {
  VehiclesFunctions,
  BrandsFunctions,
  ModelsFunctions,
  VersionsFunctions
}
