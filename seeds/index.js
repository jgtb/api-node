import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

const seeds = async () => {
  await initDatabase()

  await dropDatabase()

  process.exit()
}

seeds()
