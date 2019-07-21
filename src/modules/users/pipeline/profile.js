export default (req, _, next) => {
  const pipeline = [
    { $project: {
      name: 1,
      phone: 1,
      email: 1,
      addresses: 1
    } }
  ]

  req.setPipeline(pipeline)

  next()
}
