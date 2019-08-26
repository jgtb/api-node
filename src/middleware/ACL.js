import UsersSchema from '../modules/users/models/schema'

const atLeastOne = (roles) => (role) => roles.includes(role)

export default (...roles) => async (req, res, next) => {
  const { id } = req.user

  const user = await UsersSchema
    .findById(id)
    .select('roles isActive')
    .lean()

  if (!user || !user.isActive) {
    return res.status(401).json({})
  }

  const atLeastOneRole = atLeastOne(user.roles)

  const hasPermission = roles.some(atLeastOneRole)

  if (!hasPermission) {
    return res.status(401).json({})
  }

  next()
}
