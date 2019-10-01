import UsersSchema from '../src/modules/users/models/schema'
import PlainsSchema from '../src/modules/plains/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import getRandom from './_getRandom'

export default async (Faker) => {
  const roles = [ 'dealer', 'private' ]

  const data = []

  await asyncForEach(Array.from({ length: 500 }), async () => {
    const plainModel = await getRandom({ Schema: PlainsSchema })

    data.push({
      plain: plainModel._id,
      role: roles[ Faker.random.number({ min: 0, max: 1 }) ],
      name: Faker.name.findName(),
      ein: Faker.random.number({ min: 100000000, max: 200000000 }),
      cellPhone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      commercialPhone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      email: Faker.internet.email().toLowerCase(),
      adverts: [],
      password: '123456',
      status: 'active'
    })
  })

  await UsersSchema.create(data)
}
