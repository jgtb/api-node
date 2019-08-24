import { Types } from 'mongoose'

import { autoInject } from '../../../middleware'

export default autoInject({
  where: { instance: 'user', key: 'partner' },
  to: { field: 'partner', handler: (value) => Types.ObjectId(value) }
})
