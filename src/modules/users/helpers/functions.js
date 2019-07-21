import Schema from '../models/schema'

import functions from '../../../functions'

const FUNCTIONS = functions(Schema, { single: 'Cliente', plural: 'Clientes', type: 'o' })

export default FUNCTIONS
