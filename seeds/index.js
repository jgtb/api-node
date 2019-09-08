import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import users from './users'
import catalogs from './catalogs'
import adverts from './adverts'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await users(Faker)
  await catalogs(Faker)
  await adverts(Faker)

  process.exit()
}

seeds()
