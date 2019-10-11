import { model, Schema, Types } from 'mongoose'

import { status } from '../../../models'

import { uniqueValidator, existsValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

const collection = 'optionals'

const MODEL = {
  category: {
    type: Types.ObjectId,
    ref: 'categories',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  name: {
    type: String,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  status
}

const schema = new Schema(MODEL, {
  timestamps: true
})

schema.index({ category: 1, name: 1 }, { unique: true })

uniqueValidator(schema)
existsValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
