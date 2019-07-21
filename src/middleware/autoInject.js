export default ({ where, to }) => (req, _, next) => {
  const { instance, key } = where
  const { field, handler } = to

  const value = req[instance][key]

  req.autoInject = {
    [field]: handler(value)
  }

  next()
}
