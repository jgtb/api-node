export default (req, _, next) => {
  const pipeline = [
    { $match: { status: { $ne: 'deleted' } } }
  ]

  req.setPipeline(pipeline)

  next()
}
