import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import plains from './plains'
import users from './users'
import catalogs from './catalogs'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await plains(Faker)
  await users(Faker)
  await catalogs(Faker)

  process.exit()
}

seeds()
