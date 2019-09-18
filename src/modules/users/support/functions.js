import Schema from '../models/schema'

import functions from '../../../functions'

const messageConfig = { single: 'Cliente', plural: 'Clientes', type: 'o' }
const advertsMessageConfig = { single: 'Anúncio', plural: 'Anúncios', type: 'o' }

const FUNCTIONS = functions(Schema, messageConfig)

export { messageConfig, advertsMessageConfig }

export default FUNCTIONS
