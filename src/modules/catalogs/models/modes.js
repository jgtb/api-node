import { model, Schema, Types } from 'mongoose'

import { uniqueValidator, existsValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

const collection = 'modes'

const MODEL = {
  brand: {
    type: Types.ObjectId,
    ref: 'brands',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  name: {
    type: String,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  }
}

const schema = new Schema(MODEL, {
  timestamps: true
})

schema.index({ brand: 1, name: 1 }, { unique: true })

uniqueValidator(schema)
existsValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
