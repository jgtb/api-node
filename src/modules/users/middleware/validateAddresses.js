import { zipcodeValidator } from '../../../support/validations'

export default async (req, res, next) => {
  const { zipcode, state, city } = req.body

  const response = await zipcodeValidator({ zipcode, state, city })

  if (!response) {
    return res.status(409).json({})
  }

  next()
}
