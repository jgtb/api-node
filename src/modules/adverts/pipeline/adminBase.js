export default (req, _, next) => {
  const pipeline = [
    { $project: {
      _id: 1,
      user: 1,
      title: 1,
      price: 1,
      year: 1,
      modelYear: 1,
      vehicle: 1,
      brand: 1,
      mode: 1,
      version: 1,
      fuel: 1,
      color: 1,
      financed: 1,
      acceptExchange: 1,
      owner: 1,
      status: 1
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
