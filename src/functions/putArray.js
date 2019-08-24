import { onSuccess, onError } from '../support/responses'
import { onPatchSuccess, onPatchError } from '../support/responses/messages'

import { updateOptions, unauthorizedModel } from './_utils'

const mountUpdateKey = (field, key) => [`${field}.$.${key}`]

const mountUpdate = (payload, field) => Object
  .entries(payload)
  .reduce((acc, [ key, value ]) => ({ ...acc, [ mountUpdateKey(field, key) ]: value }), {})

const onInsert = ({ id, autoInject, field, body }) => {
  const finder = {
    _id: id,
    ...autoInject
  }

  const update = {
    $addToSet: { [field]: body }
  }

  return { finder, update }
}

const onUpdate = ({ id, autoInject, field, body }) => {
  const finder = {
    _id: id,
    [ `${field}._id` ]: body._id,
    ...autoInject
  }

  const update = {
    $set: mountUpdate(body, field)
  }

  return { finder, update }
}

const getHandler = ({ _id }) => !_id ? onInsert : onUpdate

export default (Schema, messageConfig) => (field) => async (req, res, next) => {
  try {
    const { params, autoInject = {}, body } = req
    const { id } = params

    const handler = getHandler(body)

    const { finder, update } = handler({ id, autoInject, field, body })

    const model = await Schema.update(finder, update, updateOptions)

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
