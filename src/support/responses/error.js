import propsDescriptions from '../../support/propsDescriptions' 
import { concatMany } from '../../support/utils'

const buildDescription = (key, message) => propsDescriptions[key] && concatMany(propsDescriptions[key], ': ', message)

const format = ([ key, { message } ]) => ({ name: key, error: message, description: buildDescription(key, message) })

export default ({ status, message, err = {}, req = {}, res = {} }) => {
  console.log(err)

  const validators = err.errors || err

  const errors = Object
    .entries(validators)
    .map(format)

  const errorsDescription = errors
    .filter(({ description }) => !!description)
    .map(({ description }) => concatMany('<br>', description, '</br>'))
    .join('')

  const response = {
    status,
    message: req.customMessage ||  message,
    errors,
    errorsDescription
  }

  res.response = response

  return response
}
