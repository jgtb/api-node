export default (req, _, next) => {
  const pipeline = [
    { $match: { status: 'active' } }
  ]

  req.setPipeline(pipeline)

  next()
}
