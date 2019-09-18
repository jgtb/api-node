import functions from '../../../functions'

import {
  VehiclesSchema,
  BrandsSchema,
  ModesSchema,
  VersionsSchema
} from '../models'

const VehiclesFunctions = functions(VehiclesSchema, { single: 'Veículo', plural: 'Veículos', type: 'o' })
const BrandsFunctions = functions(BrandsSchema, { single: 'Marca', plural: 'Marcas', type: 'a' })
const ModesFunctions = functions(ModesSchema, { single: 'Modelo', plural: 'Modelos', type: 'o' })
const VersionsFunctions = functions(VersionsSchema, { single: 'Versão', plural: 'Versões', type: 'o' })

export {
  VehiclesFunctions,
  BrandsFunctions,
  ModesFunctions,
  VersionsFunctions
}
