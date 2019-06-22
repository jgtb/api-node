import mongoose from 'mongoose'

import { atLeastValidator } from '../../../support/validations'

import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    exists: [true, INVALID],
    required: [true, REQUIRED],
    index: true
  },
  categories: {
    type: [mongoose.Types.ObjectId],
    ref: 'categories',
    exists: [true, INVALID],
    validate: {
      validator: atLeastValidator(1),
      message: REQUIRED
    },
    index: true
  },
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  price: {
    type: Number,
    required: [true, REQUIRED]
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
