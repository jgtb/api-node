export default (req, _, next) => {
  const basePipeline = [
    { $project: {
      __v: false
    } }
  ]

  req.pipeline = basePipeline

  req.setPipeline = (pipeline) => {
    req.pipeline = [ ...req.pipeline, ...pipeline ]
  }

  next()
}
