import { Types } from 'mongoose'

import { autoInject } from '../../../middleware'

export default (field) => autoInject({
  where: { instance: 'params', key: 'id' },
  to: { field, handler: (value) => Types.ObjectId(value) }
})
