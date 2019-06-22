import { unFormat } from '../../utils'

const codes = [
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28, 31, 32, 33, 34,
  35, 37, 38, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 51, 53, 54, 55, 61, 62,
  64, 63, 65, 66, 67, 68, 69, 71, 73,
  74, 75, 77, 79, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 91, 92, 93, 94, 95,
  96, 97, 98, 99
]

const ddd = phone => parseInt(phone.substring(0, 2))

const isNine = phone => parseInt(phone.substring(2, 3)) === 9

const cellPhoneValidators = {
  hasValidLength: phone => phone.length === 11,
  hasDigitNine: phone => isNine(phone),
  hasValidCode: phone => codes.some(code => ddd(phone) === code)
}

const commercialPhoneValidators = {
  hasValidLength: phone => phone.length === 10,
  hasValidCode: phone => codes.some(code => ddd(phone) === code)
}

const cellPhoneValidator = phone => Object
  .keys(cellPhoneValidators)
  .every(fn => cellPhoneValidators[fn](unFormat(phone)))

const commercialPhoneValidator = phone => Object
  .keys(commercialPhoneValidators)
  .every(fn => commercialPhoneValidators[fn](unFormat(phone)))

export {
  cellPhoneValidator,
  commercialPhoneValidator
}
