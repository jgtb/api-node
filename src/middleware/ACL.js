import UsersSchema from '../modules/users/models/schema'

export default (...roles) => async (req, res, next) => {
  const { id } = req.user

  const user = await UsersSchema
    .findById(id)
    .select('role isActive')
    .lean()

  if (!user || !user.isActive) {
    return res.status(401).json({})
  }

  const hasPermission = roles.includes(user.role)

  if (!hasPermission) {
    return res.status(401).json({})
  }

  next()
}
