import UsersSchema from '../src/modules/users/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import chance from 'chance'

const Chance = chance()

export default async () => {
  await asyncForEach(Array.from({ length: 6 }), async () => {
    await UsersSchema({
      name: Chance.name(),
      email: Chance.email(),
      phone: Chance.phone(),
      wallet: 0,
      login: Chance.email().split('@')[0],
      password: '123456'
    }).save()
  })
}
