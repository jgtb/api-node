import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  price: {
    type: Number,
    set: Number,
    required: [true, REQUIRED]
  },
  advertsLimit: {
    type: Number,
    set: Number,
    default: 0
  },
  advertsPhotosLimit: {
    type: Number,
    set: Number,
    default: 0
  },
  site: {
    type: Boolean,
    default: false
  },
  advertsHighlights: {
    type: Boolean,
    default: false
  },
  advertsPriority: {
    type: Boolean,
    default: false
  },
  advertsVideo: {
    type: Boolean,
    default: false
  },
  default: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  }
}
