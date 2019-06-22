import users from './users'
import categories from './categories'
import products from './products'
import transactions from './transactions'

import initDatabase from '../src/initDatabase'

const seeders = async () => {
  await initDatabase()

  await users()
  await categories()
  await products()
  await transactions()

  process.exit()
}

seeders()
