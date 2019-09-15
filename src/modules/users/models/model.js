import { Types } from 'mongoose'

import { name, status } from '../../../models'

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
    enum: [ 'admin', 'dealer', 'private' ],
    default: 'private'
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
      title: {
        type: String,
        required: [true, REQUIRED]
      },
      price: {
        type: Number,
        required: [true, REQUIRED]
      },
      year: {
        type: String,
        required: [true, REQUIRED]
      },
      modelYear: {
        type: String,
        required: [true, REQUIRED]
      },
      vehicle: {
        type: Types.ObjectId,
        ref: 'vehicles',
        required: [true, REQUIRED],
        exists: [true, INVALID]
      },
      brand: {
        type: Types.ObjectId,
        ref: 'brands',
        required: [true, REQUIRED],
        exists: [true, INVALID]
      },
      model: {
        type: Types.ObjectId,
        ref: 'models',
        required: [true, REQUIRED],
        exists: [true, INVALID]
      },
      version: {
        type: Types.ObjectId,
        ref: 'versions',
        required: [true, REQUIRED],
        exists: [true, INVALID]
      },
      fuel: {
        type: Types.ObjectId,
        ref: 'fuels',
        required: [true, REQUIRED],
        exists: [true, INVALID]
      },
      color: {
        type: Types.ObjectId,
        ref: 'colors',
        required: [true, REQUIRED],
        exists: [true, INVALID]
      },
      km: Number,
      board: String,
      doors: Number,
      motor: String,
      valves: String,
      photos: [String],
      soldOn: Date,
      financed: {
        type: Boolean,
        default: false
      },
      acceptExchange: {
        type: Boolean,
        default: false
      },
      owner: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        enum: [ 'avaliable', 'sold', 'inactive' ],
        default: 'avaliable'
      }
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
  status
}
