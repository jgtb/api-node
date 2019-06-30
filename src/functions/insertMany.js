import { onSuccess, onError } from '../support/responses'
import { onPostSuccess, onPostError } from '../support/responses/messages'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { body, autoInject = {} } = req

    const payloads = body.map(payload => ({ ...payload, ...autoInject }))

    await Schema.create(payloads)

    const onSuccessMessage = onPostSuccess(messageConfig)
    const successResponse = onSuccess(200, onSuccessMessage)

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onPostError(messageConfig)
    const errorResponse = onError(409, onErrorMessage, err)

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
