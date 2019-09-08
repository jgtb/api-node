import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED]
  },
  catalog: {
    type: String,
    default: null
  },
  items: [
    {
      name: String,
      required: [true, REQUIRED]
    }
  ],
  isActive: {
    type: Boolean,
    default: true
  }
}
