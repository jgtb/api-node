import UsersSchema from '../src/modules/users/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import Faker from './_faker'

export default async () => {
  await asyncForEach(Array.from({ length: 20 }), async () => {
    await UsersSchema({
      name: Faker.name(),
      email: Faker.email(),
      phone: Faker.phone(),
      wallet: 0,
      login: Faker.email().split('@')[0],
      password: '123456'
    }).save()
  })
}
