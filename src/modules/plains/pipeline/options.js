export default (req, _, next) => {
  const pipeline = [
    { $match: { status: 'active' } },
    { $project: {
      _id: 1,
      name: 1
    }}
  ]

  req.setPipeline(pipeline)

  next()
}
