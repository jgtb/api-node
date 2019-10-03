import { Types } from 'mongoose'

import { name, status } from '../../../models'

import { emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'
import validateNotRequired from '../../../support/validations/_validateNotRequired'

import { isPhone } from 'brazilian-values'

export default {
  plain: {
    type: Types.ObjectId,
    ref: 'plains',
    exists: [true, INVALID]
  },
  role: {
    type: String,
    enum: [ 'master', 'company', 'client' ],
    default: 'client'
  },
  name,
  ein: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true,
    validate: {
      validator: emailValidator,
      message: INVALID
    }
  },
  cellPhone: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true,
    validate: {
      validator: isPhone,
      message: INVALID
    }
  },
  commercialPhone: {
    type: String,
    unique: true,
    sparse: true,
    trim: true,
    default: null,
    validate: {
      validator: validateNotRequired(isPhone),
      message: INVALID
    }
  },
  forgotPassword: {
    code: String,
    expiresIn: Date
  },
  password: {
    type: String,
    required: [true, REQUIRED],
    trim: true
  },
  status
}
