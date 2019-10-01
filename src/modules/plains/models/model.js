import { name, status } from '../../../models'

import { REQUIRED } from '../../../support/validations/messages'

export default {
  name,
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
  status
}
