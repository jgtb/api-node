import { cellPhoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID, MINLENGTH, MAXLENGTH } from '../../../support/validations/messages'
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
    trim: true,
    minlength: [6, MINLENGTH(6)],
    maxlength: [12, MAXLENGTH(12)]
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
  isActive: {
    type: Boolean,
    default: true
  }
}
