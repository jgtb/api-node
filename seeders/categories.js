import CategoriesSchema from '../src/modules/categories/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import chance from 'chance'

const Chance = chance()

export default async () => {
  await asyncForEach(Array.from({ length: 12 }), async () => {
    await CategoriesSchema({
      name: Chance.name()
    }).save()
  })
}
