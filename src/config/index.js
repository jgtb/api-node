import local from './local'
import server from './server'

import unlessPath from './unlessPath'

const configs = {
  local,
  development: server,
  staging: server,
  production: server
}

const config = configs[process.env.NODE_ENV]

export {
  unlessPath
}

export default config
