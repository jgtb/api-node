import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED]
  },
  label: {
    type: String,
    unique: true,
    required: [true, REQUIRED]
  },
  placeholder: {
    type: String,
    unique: true,
    required: [true, REQUIRED]
  },
  input: {
    type: String,
    required: [true, REQUIRED],
    enum: [ 'text', 'select' ],
    default: 'text'
  },
  options: {
    type: String
  },
  formatter: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
