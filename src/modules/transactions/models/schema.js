import { model, Schema } from 'mongoose'

import { existsValidator } from '../../../support/validations'

import MODEL from './model'

import { updateWallet } from '../../users/utils'

const name = 'transactions'

const schema = new Schema(MODEL, {
  timestamps: true
})

schema.pre('save', function (next) {
  const { user, total, status } = this

  if (status === 'concluded') {
    updateWallet({ user, value: total })
  }

  next()
})

existsValidator(schema)

const SCHEMA = model(name, schema, name)

export default SCHEMA
