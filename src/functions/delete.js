import { onSuccess, onError } from '../support/responses'
import { onDeleteSuccess, onDeleteError } from '../support/responses/messages'

import { unauthorizedModel } from './_utils'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { params, autoInject = {} } = req
    const { id } = params

    const finder = {
      _id: id,
      ...autoInject
    }

    const model = await Schema.findOneAndDelete(finder)

    if (!model) {
      return res.status(401).send(unauthorizedModel)
    }

    const onSuccessMessage = onDeleteSuccess(messageConfig)
    const successResponse = onSuccess(200, onSuccessMessage)

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onDeleteError(messageConfig)
    const errorResponse = onError(409, onErrorMessage, err)

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
