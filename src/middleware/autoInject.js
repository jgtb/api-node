const handler = (fields) => Array.isArray(fields)
  ? fields
  : [ fields ]

const format = (req) => (acc, { where, to }) => {
  const { instance, key } = where
  const { field, handler = (value) => value } = to

  const value = req[instance][key]

  return {
    ...acc,
    [field]: handler(value)
  }
}

export default (fields) => (req, _, next) => {
  const props = handler(fields)

  const makeFormat = format(req)

  const autoInject = props.reduce(makeFormat, {})

  req.autoInject = autoInject

  next()
}
