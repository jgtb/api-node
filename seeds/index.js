import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import users from './users'
import championships from './championships'
import teams from './teams'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await users(Faker)
  await championships(Faker)
  await teams(Faker)

  process.exit()
}

seeds()
