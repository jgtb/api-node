import { REQUIRED } from '../support/validations/messages'

export default {
  type: String,
  unique: true,
  required: [true, REQUIRED],
  trim: true,
  index: true
}
