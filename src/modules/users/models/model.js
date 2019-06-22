import { cellPhoneValidator, emailValidator } from '../../../support/validations'

import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  phone: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    // validate: {
    //   validator: cellPhoneValidator,
    //   message: INVALID
    // },
    index: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    // validate: {
    //   validator: emailValidator,
    //   message: INVALID
    // },
    index: true
  },
  wallet: {
    type: Number,
    default: 0
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
