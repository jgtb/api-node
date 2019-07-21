import { onError } from '../../../support/responses'

import { addressesValidator } from '../../../support/validations'
import { INVALID } from '../../../support/validations/messages'

export default async (req, res, next) => {
  const { zipcode, state, city } = req.body

  const response = await addressesValidator({ zipcode, state, city })

  if (!response) {
    const errorResponse = onError(409, '', { addresses: { message: INVALID } })
    return res.status(409).json(errorResponse)
  }

  next()
}
