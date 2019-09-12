import { model, Schema } from 'mongoose'

import { name, status } from '../../../models'

import { uniqueValidator } from '../../../support/validations'

const collection = 'vehicles'

const MODEL = {
  name,
  status
}

const schema = new Schema(MODEL, {
  timestamps: true
})

uniqueValidator(schema)

const SCHEMA = model(collection, schema, collection)

export default SCHEMA
