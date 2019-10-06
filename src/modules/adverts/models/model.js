import { Types } from 'mongoose'

import { name } from '../../../models'

import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  user: {
    type: Types.ObjectId,
    ref: 'users',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  name,
  description: String,
  doors: {
    type: Number,
    required: [true, REQUIRED]
  },
  board: {
    type: String,
    required: [true, REQUIRED]
  },
  price: {
    type: Number,
    required: [true, REQUIRED]
  },
  km: String,
  specification: String,
  vehicle: {
    type: Types.ObjectId,
    ref: 'vehicles',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  brand: {
    type: Types.ObjectId,
    ref: 'brands',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  mode: {
    type: Types.ObjectId,
    ref: 'modes',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  version: {
    type: Types.ObjectId,
    ref: 'versions',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  category: {
    type: Types.ObjectId,
    ref: 'categories',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  optionals: [
    {
      type: Types.ObjectId,
      ref: 'optionals',
      required: [true, REQUIRED],
      exists: [true, INVALID]
    }
  ],
  fuel: {
    type: Types.ObjectId,
    ref: 'fuels',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  color: {
    type: Types.ObjectId,
    ref: 'colors',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  tags: [String],
  thumbnail: String,
  photos: [String],
  video: String,
  financed: {
    type: Boolean,
    default: false
  },
  negotiablePrice: {
    type: Boolean,
    default: false
  },
  acceptExchange: {
    type: Boolean,
    default: false
  },
  owner: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: [ 'avaliable', 'sold', 'inactive', 'deleted' ],
    default: 'avaliable'
  }
}
