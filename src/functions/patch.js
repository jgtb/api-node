import { onSuccess, onError } from '../support/responses'
import { onPatchSuccess, onPatchError } from '../support/responses/messages'

import { updateOptions, unauthorizedModel } from './_utils'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { params, autoInject = {}, body } = req
    const { id } = params

    const finder = {
      _id: id,
      ...autoInject
    }

    console.log('update call')
    const model = await Schema.findOneAndUpdate(finder, body, updateOptions)

    if (!model) {
      return res.status(401).send(unauthorizedModel)
    }

    const onSuccessMessage = onPatchSuccess(messageConfig)
    const successResponse = onSuccess({ status: 200, message: onSuccessMessage, res })

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onPatchError(messageConfig)
    const errorResponse = onError({ status: 409, message: onErrorMessage, err, res })

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
