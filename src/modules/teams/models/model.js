import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  initials: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  logo: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
