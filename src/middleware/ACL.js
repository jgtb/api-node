// export default (...permissions) => async (req, res, next) => {
//   const { id } = req.user

//   const user = await UsersSchema
//     .findById(id)
//     .lean()

//   if (!user || !user.isActive) {
//     return res.status(401).json({})
//   }

//   next()
// }
