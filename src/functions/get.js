import { onSuccess, onError } from '../support/responses'
import { onGetSuccess, onGetError } from '../support/responses/messages'

import { notFound } from './_utils'

export default (Schema, messageConfig) => ({ successMessage, errorMessage }) => async (req, res, next) => {
  try {
    const { filters, autoInject = {}, pipeline = [], sort } = req

    const data = await Schema.aggregate([
      { $match: { ...filters, ...autoInject } },
      ...pipeline,
      { $sort: { ...sort } }
    ])

    if (!data.length) {
      return res.status(404).send(notFound)
    }

    const onSuccessMessage = successMessage || onGetSuccess(messageConfig)
    const successResponse = onSuccess({ status: 200, message: onSuccessMessage, data })

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = errorMessage || onGetError(messageConfig)
    const errorResponse = onError({ status: 409, message: onErrorMessage, err, res })

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
