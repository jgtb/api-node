import { Types } from 'mongoose'

import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  user: {
    type: Types.ObjectId,
    ref: 'users',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  title: {
    type: String,
    required: [true, REQUIRED]
  },
  price: {
    type: Number,
    required: [true, REQUIRED]
  },
  year: {
    type: String,
    required: [true, REQUIRED]
  },
  modelYear: {
    type: String,
    required: [true, REQUIRED]
  },
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
  km: Number,
  board: String,
  doors: Number,
  motor: String,
  valves: String,
  photos: [String],
  soldOn: Date,
  financed: {
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
    enum: [ 'avaliable', 'sold', 'inactive' ],
    default: 'avaliable'
  }
}
