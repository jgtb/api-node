import { Types } from 'mongoose'

import { cellPhoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  roles: {
    type: [String],
    enum: [ 'master', 'manager', 'seller' ],
    default: [ 'seller' ]
  },
  owner: {
    type: Types.ObjectId,
    ref: 'users',
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
  bets: [
    {
      round: {
        type: Types.ObjectId
      },
      games: [
        {
          game: {
            type: Types.ObjectId
          },
          winner: {
            type: Types.ObjectId
          },
          status: {
            type: String,
            enum: [ 'pending', 'hit', 'mistake' ],
            default: 'pending'
          }
        }
      ],
      mistakes: Number,
      hits: Number,
      total: Number,
      date: Date,
      paymentStatus: {
        type: String,
        enum: [ 'pending', 'paid', 'not paid' ],
        default: 'pending'
      },
      status: {
        type: String,
        enum: [ 'pending', 'started', 'finished' ],
        default: 'pending'
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
