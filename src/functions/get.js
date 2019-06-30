import { onSuccess, onError } from '../support/responses'
import { onGetSuccess, onGetError } from '../support/responses/messages'

import { notFound } from './_utils'

export default (Schema, messageConfig) => async (req, res, next) => {
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

    const onSuccessMessage = onGetSuccess(messageConfig)
    const successResponse = onSuccess(200, onSuccessMessage, data)

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onGetError(messageConfig)
    const errorResponse = onError(409, onErrorMessage, err)

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
