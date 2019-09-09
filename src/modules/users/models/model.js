import { Types } from 'mongoose'

import { phoneValidator, emailValidator } from '../../../support/validations'
import { REQUIRED, INVALID } from '../../../support/validations/messages'

export default {
  plain: {
    type: Types.ObjectId,
    ref: 'plains',
    required: [true, REQUIRED],
    exists: [true, INVALID]
  },
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
    trim: true,
    validate: {
      validator: phoneValidator,
      message: INVALID
    }
  },
  adverts: [
    {
      name: String,
      km: Number,
      board: String,
      doors: Number,
      year: Number,
      price: Number,
      motor: String,
      valves: String,
      photos: [String],
      soldOn: Date,
      vehicle: {
        type: Types.ObjectId,
        ref: 'vehicles'
      },
      brand: {
        type: Types.ObjectId,
        ref: 'brands'
      },
      model: {
        type: Types.ObjectId,
        ref: 'models'
      },
      version: {
        type: Types.ObjectId,
        ref: 'versions'
      },
      fuel: {
        type: Types.ObjectId,
        ref: 'fuels'
      },
      color: {
        type: Types.ObjectId,
        ref: 'colors'
      },
      financed: {
        type: Boolean,
        default: false
      },
      status: String
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
