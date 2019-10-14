import { model, Schema } from 'mongoose'

import { uniqueValidator } from '../../../support/validations'
import { REQUIRED } from '../../../support/validations/messages'

const collection = 'colors'

const MODEL = {
  name: {
    type: String,
    unique: true,
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

uniqueValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
