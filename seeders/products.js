import mongoose from 'mongoose'

import ProductsSchema from '../src/modules/products/models/schema'
import UsersSchema from '../src/modules/users/models/schema'
import CategoriesSchema from '../src/modules/categories/models/schema'

import _getRandom from './_getRandom'

import asyncForEach from '../src/support/asyncForEach'

import chance from 'chance'

const Chance = chance()

export default async () => {
  await asyncForEach(Array.from({ length: 60 }), async () => {
    const [ userModel ] = await _getRandom({ Schema: UsersSchema, size: 1 })
    const user = userModel._id
    const categoriesModels = await _getRandom({ Schema: CategoriesSchema, size: 3 })
    const categories = categoriesModels.map(({ _id }) => mongoose.Types.ObjectId(_id))
    await ProductsSchema({
      user,
      categories,
      name: Chance.name(),
      price: Chance.floating({ min: 10, max: 1000 })
    }).save()
  })
}
