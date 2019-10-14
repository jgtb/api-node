
export default (req, _, next) => {
  const pipeline = [
    { $project: {
      _id: 1,
      name: 1,
      vehicle: 1,
      status: 1
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
