import Schema from '../models/schema'

import functions from '../../../functions'

const messageConfig = { single: 'Time', plural: 'Times', type: 'o' }

const FUNCTIONS = functions(Schema, messageConfig)

export { messageConfig }

export default FUNCTIONS
