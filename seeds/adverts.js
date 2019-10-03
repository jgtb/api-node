import { Types } from 'mongoose'

import AdvertsSchema from '../src/modules/adverts/models/schema'
import UsersSchema from '../src/modules/users/models/schema'
import {
  VehiclesSchema,
  BrandsSchema,
  ModesSchema,
  VersionsSchema,
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
    const fuelModel = await getRandom({ Schema: FuelsSchema })
    const colorModel = await getRandom({ Schema: ColorsSchema })
    await new AdvertsSchema({
      user: userModel._id,
      name: Faker.name.findName(),
      price: Faker.random.number({ min: 100, max: 500 }),
      year: '2019',
      modelYear: '2017',
      vehicle: vehicleModel._id,
      brand: brandModel._id,
      mode: modeModel._id,
      version: versionModel._id,
      fuel: fuelModel._id,
      color: colorModel._id,
      km: Faker.random.number({ min: 100, max: 500 }),
      board: Faker.name.findName(),
      doors: Faker.random.number({ min: 1, max: 4 }),
      motor: Faker.name.findName(),
      valves: Faker.name.findName(),
      photos: [],
      soldOn: Faker.random.boolean() ? new Date() : null,
      financed: Faker.random.boolean(),
      acceptExchange: Faker.random.boolean(),
      owner: Faker.random.boolean(),
      status: statues[ Faker.random.number({ min: 0, max: 2 }) ]
    }).save()
  })
}
