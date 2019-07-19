import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  login: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true
  },
  password: {
    type: String,
    required: [true, REQUIRED],
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
