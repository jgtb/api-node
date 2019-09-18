import Schema from '../models/schema'

import functions from '../../../functions'

const messageConfig = { single: 'Plano', plural: 'Planos', type: 'o' }

const FUNCTIONS = functions(Schema, messageConfig)

export { messageConfig }

export default FUNCTIONS
