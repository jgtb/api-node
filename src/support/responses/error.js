const format = ([ key, { message } ]) => ({ [key]: message })

export default (status, message, err) => {
  console.log(err)

  const validators = err.errors || err

  const errors = Object
    .entries(validators)
    .map(format)

  return {
    status,
    message,
    errors
  }
}
