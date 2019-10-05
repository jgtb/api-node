import { model, Schema, Types } from 'mongoose'

import { name, status } from '../../../models'

import { uniqueValidator, existsValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

const collection = 'optionais'

const MODEL = {
  category: {
    type: Types.ObjectId,
    ref: 'categories',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
  name,
  status
}

const schema = new Schema(MODEL, {
  timestamps: true
})

uniqueValidator(schema)
existsValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
