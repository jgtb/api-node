import Schema from '../models/schema'

import functions from '../../../functions'

const FUNCTIONS = functions(Schema, { single: 'Produto', plural: 'Produtos', type: 'o' })

export default FUNCTIONS
