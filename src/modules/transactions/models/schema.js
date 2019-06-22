import { model, Schema } from 'mongoose'

import { existsValidator } from '../../../support/validations'

import MODEL from './model'

const name = 'transactions'

const schema = new Schema(MODEL, {
  timestamps: true
})

existsValidator(schema)

const SCHEMA = model(name, schema, name)

export default SCHEMA
