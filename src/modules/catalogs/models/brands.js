import { model, Schema, Types } from 'mongoose'

import { status } from '../../../models'

import { uniqueValidator, existsValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

const collection = 'brands'

const MODEL = {
  vehicle: {
    type: Types.ObjectId,
    ref: 'vehicles',
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

schema.index({ vehicle: 1, name: 1 }, { unique: true })

uniqueValidator(schema)
existsValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
