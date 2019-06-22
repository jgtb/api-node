import { period, string, boolean } from '../support/filters'

const props = {
  name: string('name'),
  date: period('date'),
  isActive: boolean('isActive')
}

const removeUnfoundKey = (props) => ([ key ]) => Object.keys(props).includes(key)
const removeEmpty = ([ _, value ]) => typeof value !== 'undefined'

const transform = (props) => ([ key, value ]) => props[key](value)

const concat = (acc, { key, value }) => ({ ...acc, [key]: value })

export default (req, _, next) => {
  const { query } = req

  const filterRemoveUnfoundKey = removeUnfoundKey(props)
  const mapTransform = transform(props)

  const filters = Object
    .entries(query)
    .filter(filterRemoveUnfoundKey)
    .filter(removeEmpty)
    .map(mapTransform)
    .reduce(concat, {})

  req.filters = filters

  next()
}
