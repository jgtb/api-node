import UsersSchema from '../../users/models/schema'

import { generateToken } from '../../../support/token'

const onError = { status: 401, message: 'Dados de acesso inválidos. Tente novamente.' }

export default async (req, res) => {
  const { email, password } = req.body
  try {
    const model = await UsersSchema
      .findOne({ email, status: 'active' })

    if (!model) {
      return res.status(401).json(onError)
    }

    const isValidPassword = await model.comparePassword(password)

    if (!isValidPassword) {
      return res.status(401).json(onError)
    }

    const data = {
      id: model._id
    }

    const token = await generateToken(data)

    res.status(200).json({ token })
  } catch (err) {
    res.status(401).json(onError)
  }
}
