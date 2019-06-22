import mongoose from 'mongoose'

import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    exists: [true, INVALID],
    required: [true, REQUIRED],
    index: true
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'products',
    exists: [true, INVALID],
    required: [true, REQUIRED],
    index: true
  },
  total: {
    type: Number,
    required: [true, REQUIRED]
  },
  quantity: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    enum: [ 'pending', 'concluded', 'canceled' ],
    default: 'pending'
  }
}
