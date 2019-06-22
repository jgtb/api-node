export default (req, _, next) => {
  const { id } = req.user

  const pipeline = [
    { $project: {
      _id: false,
      name: 1,
      phone: 1,
      email: 1
    } }
  ]

  req.params.id = id
  req.pipeline = pipeline

  next()
}
