import { pipe, replace } from 'ramda'

const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = (value) => pipe(removeAllSpecialCaracteres, removeAllSpaces)(value)

const randomHash = ({ length = 10 }) => 'x59d0ge1'

export {
  unFormat,
  randomHash
}
