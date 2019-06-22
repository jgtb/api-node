import get from './get'
import getWithPaginate from './getWithPaginate'
import getById from './getById'
import post from './post'
import patch from './patch'
import _delete from './delete'
import activateDeactivate from './activateDeactivate'

export default (Schema, messageConfig) => ({
  get: get(Schema, messageConfig),
  getWithPaginate: getWithPaginate(Schema, messageConfig),
  getById: getById(Schema, messageConfig),
  post: post(Schema, messageConfig),
  patch: patch(Schema, messageConfig),
  delete: _delete(Schema, messageConfig),
  activateDeactivate: activateDeactivate(Schema, messageConfig)
})
