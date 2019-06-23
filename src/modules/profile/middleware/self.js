export default (req, _, next) => {
  const { id } = req.user

  req.params.id = id

  next()
}
