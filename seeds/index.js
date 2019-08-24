import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import users from './users'
import partners from './partners'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await users(Faker)
  await partners(Faker)

  process.exit()
}

seeds()
