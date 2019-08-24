import { Types } from 'mongoose'

import { cellPhoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  partner: {
    type: Types.ObjectId,
    ref: 'partners',
    index: true
  },
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
    index: true,
    validate: {
      validator: cellPhoneValidator,
      message: INVALID
    }
  },
  email: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true,
    validate: {
      validator: emailValidator,
      message: INVALID
    }
  },
  password: {
    type: String,
    required: [true, REQUIRED],
    trim: true
  },
  forgotPassword: {
    code: String,
    validUntil: Date
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
