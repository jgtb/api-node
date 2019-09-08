import Schema from '../models/schema'

import { genSalt, hash } from 'bcryptjs'

export default async (req, res, next) => {
  const { code, email, password } = req.body

  const model = await Schema.findOne({ email, 'forgotPassword.code': code })

  if (!model) {
    return res.status(404).json({})
  }

  const salt = await genSalt(10)
  const hashPassword = await hash(password, salt)

  req.params.id = model._id
  req.body = { password: hashPassword }

  next()
}
