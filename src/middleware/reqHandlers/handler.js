const matchFields = (fields, condition) => ([ key ]) => fields.includes(key) === condition

const concat = (acc, [ key, value ]) => ({ ...acc, [key]: value })

export default ({ condition }) => ({ instance, fields }) => (req, _, next) => {
  const reqInstance = req[instance]

  const matcher = matchFields(fields, condition)

  const newInstance = Object
    .entries(reqInstance)
    .filter(matcher)
    .reduce(concat, {})

  req[instance] = newInstance

  next()
}
