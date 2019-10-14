export default (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'categories',
      let: { category: '$category' },
      pipeline: [
        { $match: {
          $expr: {
            $eq: [ '$_id', '$$category' ]
          }
        }},
        { $project: {
          _id: 1,
          vehicle: 1
        }}
      ],
      as: 'category'
    }},
    { $unwind: '$category' },
    { $project: {
      _id: 1,
      name: 1,
      category: '$category._id',
      vehicle: '$category.vehicle'
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
