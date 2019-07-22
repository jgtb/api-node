import { cellPhoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'
import { unFormat } from '../../../support/utils'

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
  addresses: [
    {
      zipcode: {
        type: String,
        required: [true, REQUIRED],
        trim: true,
        set: unFormat
      },
      state: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      city: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      neighborhood: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      street: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      number: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      complement: {
        type: String,
        trim: true
      }
    }
  ],
  forgotPassword: {
    code: String,
    validUntil: Date
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
