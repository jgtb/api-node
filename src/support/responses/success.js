export default ({ status, message, data = undefined, req = {}, res = {} }) => {
  const response = {
    status,
    message: req.customMessage || message,
    data
  }

  res.response = response

  return response
}
