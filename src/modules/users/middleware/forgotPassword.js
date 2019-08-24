import Schema from '../models/schema'

import { genSalt, hash } from 'bcryptjs'

import { randomHash } from '../../../support/utils'

export default async (req, res, next) => {
  const { email } = req.body

  const model = await Schema.findOne({ email })

  if (!model) {
    return res.status(404).json({})
  }

  const password = randomHash({ length: 8 })

  const salt = await genSalt(10)
  const hashPassword = await hash(password, salt)

  req.params.id = model._id
  req.body = { password: hashPassword }

  next()
}
