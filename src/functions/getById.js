import mongoose from 'mongoose'

import { onSuccess, onError } from '../support/responses'
import { onGetByIdSuccess, onGetByIdError } from '../support/responses/messages'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { autoInject = {}, params, pipeline = [] } = req
    const { id } = params

    const [ model ] = await Schema.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(id), ...autoInject } },
      ...pipeline
    ])

    if (!model) {
      return res.status(404).send({ message: 'Define' })
    }

    const onSuccessMessage = onGetByIdSuccess(messageConfig)
    const successResponse = onSuccess(200, onSuccessMessage, model)
    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onGetByIdError(messageConfig)
    const errorResponse = onError(409, onErrorMessage, err)
    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
