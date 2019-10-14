
export default (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'brands',
      let: { brand: '$brand' },
      pipeline: [
        { $match: {
          $expr: {
            $eq: [ '$_id', '$$brand' ]
          }
        }},
        { $project: {
          _id: 1,
          vehicle: 1
        }}
      ],
      as: 'brand'
    }},
    { $unwind: '$brand' },
    { $project: {
      _id: 1,
      name: 1,
      brand: '$brand._id',
      vehicle: '$brand.vehicle'
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
