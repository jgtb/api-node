import users from './users'
import categories from './categories'
import products from './products'
import transactions from './transactions'

import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

const seeds = async () => {
  await initDatabase()

  await dropDatabase()

  await users()
  await categories()
  await products()
  await transactions()

  process.exit()
}

seeds()
