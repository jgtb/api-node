export default (req, _, next) => {
  const pipeline = [
    { $project: {
      name: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
