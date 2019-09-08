export default (req, _, next) => {
  const pipeline = [
    { $match: { isActive: true } },
    { $project: {
      role: 1,
      name: 1,
      phone: 1,
      email: 1
    } }
  ]

  req.setPipeline(pipeline)

  next()
}
