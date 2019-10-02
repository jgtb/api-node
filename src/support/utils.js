import { reduce, concat, pipe, replace } from 'ramda'

const concatMany = (...strs) => reduce(concat, strs, '')

const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = pipe(removeAllSpecialCaracteres, removeAllSpaces)

const randomHash = ({ length = 10 }) => Math.random().toString(36).substr(2, length)

export {
  concatMany,
  unFormat,
  randomHash
}
