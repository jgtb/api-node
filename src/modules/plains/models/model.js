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
    required: [true, REQUIRED]
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
  advertsLimit: {
    type: Number,
    default: 0
  },
  advertsPhotosLimit: {
    type: Number,
    default: 0
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
    enum: [ 'active', 'inactive', 'deleted' ],
    default: 'active'
  }
}
