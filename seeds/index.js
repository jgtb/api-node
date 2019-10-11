import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import plains from './plains'
import catalogs from './catalogs'
import users from './users'
import adverts from './adverts'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await plains(Faker)
  // await catalogs(Faker)
  await users(Faker)
  // await adverts(Faker)

  process.exit()
}

seeds()
