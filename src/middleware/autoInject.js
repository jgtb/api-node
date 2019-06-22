export default ({ where, to }) => (req, _, next) => {
  const { instance, param } = where
  const { key, handler = (item) => item } = to

  const value = req[instance][param]

  req.autoInject = { [key]: handler(value) }

  next()
}
