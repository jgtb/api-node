import { pipe, replace } from 'ramda'

const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = pipe(removeAllSpecialCaracteres, removeAllSpaces)

const randomHash = ({ length = 10 }) => Math.random().toString(36).substr(2, length)

const first = (arr) => arr[0]

export {
  unFormat,
  randomHash,
  first
}
