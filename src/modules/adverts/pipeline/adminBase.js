export default (req, _, next) => {
  const pipeline = [
    // { $project: {
    //   _id: 1,
    //   user: 1,
    //   name: 1,
    //   description: 1,
    //   doors: 1,
    //   board: 1,
    //   price: 1,
    //   km: 1,
    //   specification: 1,
    //   vehicle: 1,
    //   brand: 1,
    //   mode: 1,
    //   version: 1,
    //   fuel: 1,
    //   color: 1,
    //   category: 1,
    //   optionals: 1,
    //   tags: 1,
    //   thumbnail: 1,
    //   photos: 1,
    //   video: 1,
    //   financed: 1,
    //   negotiablePrice: 1,
    //   acceptExchange: 1,
    //   owner: 1,
    //   status: 1
    // }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
