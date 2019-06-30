import mongoose from 'mongoose'

import { autoInject } from '../../../middleware'

export default autoInject({
  where: {
    instance: 'user',
    param: 'id'
  },
  to: {
    key: 'user',
    handler: (value) => mongoose.Types.ObjectId(value)
  }
})
