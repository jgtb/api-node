export default (role) => (req, _, next) => {
  req.body.role = role
  next()
}
