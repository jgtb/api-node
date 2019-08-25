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
  cards: [
    {
      card: {
        type: Types.ObjectId
      },
      markers: [
        {
          marked: {
            type: Boolean
          },
          markedAt: {
            type: Date
          }
        }
      ],
      marked: {
        type: Number
      },
      unMarked: {
        type: Number
      },
      status: {
        type: String,
        enum: [ 'done', 'in progress' ],
        default: 'in progress'
      }
    }
  ],
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
