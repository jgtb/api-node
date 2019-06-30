import CategoriesSchema from '../src/modules/categories/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import Faker from './_faker'

export default async () => {
  await asyncForEach(Array.from({ length: 36 }), async () => {
    await CategoriesSchema({
      name: Faker.name()
    }).save()
  })
}
