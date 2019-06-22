import Schema from '../models/schema'

import functions from '../../../functions'

const FUNCTIONS = functions(Schema, { single: 'Usuário', plural: 'Usuários', type: 'o' })

export default FUNCTIONS
