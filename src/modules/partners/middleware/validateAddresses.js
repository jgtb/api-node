import { messageConfig } from '../helpers/functions'

import { validateAddresses } from '../../../middleware'
import { onPatchError } from '../../../support/responses/messages'

export default validateAddresses({ messageConfig, messageCallback: onPatchError })
