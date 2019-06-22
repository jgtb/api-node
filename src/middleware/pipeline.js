export default (req, _, next) => {
  req.pipeline = [
    { $project: {
      __v: false
    } }
  ]

  next()
}
