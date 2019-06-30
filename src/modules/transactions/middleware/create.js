import ProductsSchema from '../../products/models/schema'

import uuid from 'uuid'

export default async (req, _, next) => {
  const { user, body } = req
  const { product, ...rest } = body
  const { id } = user

  const productModel = await ProductsSchema
    .findById(product)
    .select('user price')
    .lean()

  const { quantity } = rest
  const total = productModel.price * quantity

  const hash = uuid()

  const base = {
    ...rest,
    product,
    uuid: hash
  }

  const to = {
    ...base,
    total,
    user: id,
    to: productModel.user
  }

  const from = {
    ...base,
    total: -total,
    user: productModel.user,
    to: id
  }

  req.body = [ to, from ]

  next()
}
