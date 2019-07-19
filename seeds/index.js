import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import users from './users'

import Chance from 'chance'

const seeds = async () => {
  const Faker = Chance()
  await initDatabase()

  await dropDatabase()

  await users(Faker)

  process.exit()
}

seeds()
