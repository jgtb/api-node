import functions from '../../../functions'

import {
  VehiclesSchema,
  BrandsSchema,
  ModesSchema,
  VersionsSchema,
  CategoriesSchema,
  OptionaisSchema,
  FuelsSchema,
  ColorSchema
} from '../models'

const VehiclesFunctions = functions(VehiclesSchema, { single: 'Veículo', plural: 'Veículos', type: 'o' })
const BrandsFunctions = functions(BrandsSchema, { single: 'Marca', plural: 'Marcas', type: 'a' })
const ModesFunctions = functions(ModesSchema, { single: 'Modelo', plural: 'Modelos', type: 'o' })
const VersionsFunctions = functions(VersionsSchema, { single: 'Versão', plural: 'Versões', type: 'o' })
const CategoriesFunctions = functions(CategoriesSchema, { single: 'Categoria', plural: 'Categorias', type: 'a' })
const OptionaisFunctions = functions(OptionaisSchema, { single: 'Opcional', plural: 'Opcionais', type: 'o' })
const FuelsFunctions = functions(FuelsSchema, { single: 'Combustível', plural: 'Combustíveis', type: 'o' })
const ColorsFunctions = functions(ColorSchema, { single: 'Cor', plural: 'Cores', type: 'a' })

export {
  VehiclesFunctions,
  BrandsFunctions,
  ModesFunctions,
  VersionsFunctions,
  CategoriesFunctions,
  OptionaisFunctions,
  FuelsFunctions,
  ColorsFunctions
}
