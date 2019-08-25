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
  description: {
    type: String,
    trim: true
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
  logo: {
    type: String,
    required: [true, REQUIRED]
  },
  cards: [
    {
      name: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      description: {
        type: String,
        required: [true, REQUIRED]
      },
      markers: {
        type: Number,
        default: 1
      },
      thumbnail: {
        type: String,
        required: [true, REQUIRED],
        trim: true
      },
      features: {
        type: [String],
        required: true
      },
      status: {
        type: String,
        enum: [ 'active', 'inactive', 'deleted' ],
        default: 'active'
      }
    }
  ],
  addresses: [
    {
      thumbnail: {
        type: String
      },
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
