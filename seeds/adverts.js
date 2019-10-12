import { Types } from 'mongoose'

import AdvertsSchema from '../src/modules/adverts/models/schema'
import UsersSchema from '../src/modules/users/models/schema'
import {
  VehiclesSchema,
  BrandsSchema,
  ModesSchema,
  VersionsSchema,
  CategoriesSchema,
  OptionalsSchema,
  FuelsSchema,
  ColorsSchema
} from '../src/modules/catalogs/models'
  
import asyncForEach from '../src/support/asyncForEach'

import getRandom from './_getRandom'
  
export default async (Faker) => {
  const statues = [ 'avaliable', 'sold', 'inactive' ]
  
  await asyncForEach(Array.from({ length: 6 }), async () => {
    const userModel = await getRandom({ Schema: UsersSchema })
    const vehicleModel = await getRandom({ Schema: VehiclesSchema })
    const brandModel = await getRandom({ Schema: BrandsSchema, $match: { vehicle: Types.ObjectId(vehicleModel._id) } })
    const modeModel = await getRandom({ Schema: ModesSchema, $match: { brand: Types.ObjectId(brandModel._id) } })
    const versionModel = await getRandom({ Schema: VersionsSchema, $match: { mode: Types.ObjectId(modeModel._id) } })
    const categoryModel = await getRandom({ Schema: CategoriesSchema, $match: { vehicle: Types.ObjectId(vehicleModel._id) } })
    const optionalsModels = await getRandom({ Schema: OptionalsSchema, size: 5, $match: { category: Types.ObjectId(categoryModel._id) } })
    const fuelModel = await getRandom({ Schema: FuelsSchema })
    const colorModel = await getRandom({ Schema: ColorsSchema })

    const optionals = optionalsModels.map(({ _id }) => _id)

    await new AdvertsSchema({
      user: userModel._id,
      name: Faker.name.findName(),
      description: Faker.lorem.sentence(),
      doors: Faker.random.number({ min: 1, max: 4 }),
      board: Faker.internet.mac(),
      price: Faker.random.number({ min: 100, max: 500 }),
      km: Faker.random.number({ min: 300, max: 4000 }),
      specification: 'auction',
      vehicle: vehicleModel._id,
      brand: brandModel._id,
      mode: modeModel._id,
      version: versionModel._id,
      category: categoryModel._id,
      optionals,
      fuel: fuelModel._id,
      color: colorModel._id,
      tags: Array.from({ length: 4 }).map(_ => Faker.name.prefix()),
      thumbnail: Faker.image.transport(),
      photos: Array.from({ length: 4 }).map(_ => Faker.image.transport()),
      video: '',
      financed: Faker.random.boolean(),
      acceptExchange: Faker.random.boolean(),
      negotiablePrice: Faker.random.boolean(),
      owner: Faker.random.boolean(),
      status: statues[ Faker.random.number({ min: 0, max: 2 }) ]
    }).save()
  })
}
