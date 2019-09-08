import { Types } from 'mongoose'

import { phoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  role: {
    type: String,
    enum: [ 'master', 'dealer', 'private' ],
    default: 'private'
  },
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
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
      validator: phoneValidator,
      message: INVALID
    }
  },
  commercialPhone: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true,
    validate: {
      validator: phoneValidator,
      message: INVALID
    }
  },
  adverts: [
    {
      name: String,
      photos: [String],
      details: [
        {
          field: {
            type: Types.ObjectId,
            ref: 'adverts'
          },
          value: Types.mixed
        }
      ],
      status: String,
      isActive: Boolean
    }
  ],
  forgotPassword: {
    code: String,
    expiresIn: Date
  },
  password: {
    type: String,
    required: [true, REQUIRED],
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}
