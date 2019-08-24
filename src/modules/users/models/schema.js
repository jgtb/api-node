import { model, Schema } from 'mongoose'
import { compareSync, genSalt, hash } from 'bcryptjs'

import { uniqueValidator } from '../../../support/validations'

import MODEL from './model'

const name = 'users'

const schema = new Schema(MODEL, {
  timestamps: true
})

uniqueValidator(schema)

schema.pre('save', function (next) {
  const passwordHasModified = this.isModified('password')
  if (!passwordHasModified) {
    next()
    return
  }
  const self = this
  genSalt(10, function (err, salt) {
    if (err) {
      next()
      return
    }
    hash(self.password, salt, (err, hash) => {
      if (err) {
        next(err)
        return
      }
      self.password = hash
      next()
    })
  })
})

schema.methods.comparePassword = function (candidatePassword) {
  return compareSync(candidatePassword, this.password)
}

const SCHEMA = model(name, schema, name)

export default SCHEMA
