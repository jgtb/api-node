import { Types } from 'mongoose'

import { cellPhoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  role: {
    type: String,
    enum: [ 'master', 'manager', 'seller' ],
    default: 'seller'
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
        type: Types.ObjectId,
        index: true
      },
      games: [
        {
          game: {
            type: Types.ObjectId,
            index: true
          },
          winner: {
            type: Types.ObjectId,
            ref: 'teams',
            index: true
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
      status: {
        type: String,
        enum: [ 'not paid', 'paid' ],
        default: 'not paid'
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
