import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import users from './users'
import plains from './plains'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await users(Faker)
  await plains(Faker)

  process.exit()
}

seeds()
