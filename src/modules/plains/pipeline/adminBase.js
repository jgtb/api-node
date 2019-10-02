export default (req, _, next) => {
  const pipeline = [
    { $project: {
      _id: 1,
      name: 1,
      price: 1,
      advertsLimit: 1,
      advertsPhotosLimit: 1,
      site: 1,
      advertsHighlights: 1,
      advertsPriority: 1,
      advertsVideo: 1,
      status: 1,
      users: 1
    }}
  ]

  req.setPipeline(pipeline)

  next()
}
