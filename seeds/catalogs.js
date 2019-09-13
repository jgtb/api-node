import {
  VehiclesSchema,
  BrandsSchema,
  ModesSchema,
  VersionsSchema
} from '../src/modules/catalogs/models'

import asyncForEach from '../src/support/asyncForEach'

export default async (Faker) => {
  await asyncForEach(Array.from({ length: 6 }), async () => {
    const vehicleModel = await new VehiclesSchema({
      name: Faker.name.findName(),
      status: 'active'
    }).save()
    await asyncForEach(Array.from({ length: 6 }), async () => {
      const brandModel = await new BrandsSchema({
        vehicle: vehicleModel._id,
        name: Faker.name.findName(),
        status: 'active'
      }).save()
      await asyncForEach(Array.from({ length: 6 }), async () => {
        const modeModel = await new ModesSchema({
          brand: brandModel._id,
          name: Faker.name.findName(),
          status: 'active'
        }).save()
        await asyncForEach(Array.from({ length: 6 }), async () => {
          await new VersionsSchema({
            mode: modeModel._id,
            name: Faker.name.findName(),
            status: 'active'
          }).save()
        })
      })
    })
  })
}
