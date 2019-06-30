import aggregatePaginate from '../support/aggregatePaginate'

import { onSuccessWithData, onError } from '../support/responses'
import { onGetSuccess, onGetError } from '../support/responses/messages'

import { notFound } from './_utils'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { filters, autoInject = {}, pipeline = [], sort, paginate } = req

    const pipes = [
      { $match: { ...filters, ...autoInject } },
      ...pipeline,
      { $sort: { ...sort } }
    ]

    const data = await aggregatePaginate(Schema, pipes, paginate)

    if (!data) {
      return res.status(404).send(notFound)
    }

    const onSuccessMessage = onGetSuccess(messageConfig)
    const successResponse = onSuccessWithData(200, onSuccessMessage, data)

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onGetError(messageConfig)
    const errorResponse = onError(409, onErrorMessage, err)

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
