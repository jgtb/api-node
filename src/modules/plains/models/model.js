import { name, status } from '../../../models'

import { REQUIRED } from '../../../support/validations/messages'

export default {
  name,
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
  status
}
