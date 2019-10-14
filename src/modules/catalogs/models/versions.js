import { model, Schema, Types } from 'mongoose'

import { uniqueValidator, existsValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

const collection = 'versions'

const MODEL = {
  mode: {
    type: Types.ObjectId,
    ref: 'modes',
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

schema.index({ mode: 1, name: 1 }, { unique: true })

uniqueValidator(schema)
existsValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
