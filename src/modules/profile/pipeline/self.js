export default (req, _, next) => {
  const pipeline = [
    { $project: {
      _id: false,
      name: 1,
      phone: 1,
      email: 1
    } }
  ]

  req.pipeline = pipeline

  next()
}
