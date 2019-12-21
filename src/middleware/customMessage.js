export default (message) => (req, _, next) => {
  req.customMessage = message

  next()
}
