import { pipe, replace } from 'ramda'

const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = (value) => pipe(removeAllSpecialCaracteres, removeAllSpaces)(value)

export {
  unFormat
}
