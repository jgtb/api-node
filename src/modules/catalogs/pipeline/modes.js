import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $lookup: {
      from: 'brands',
      localField: 'brand',
      foreignField: '_id',
      as: 'brand'
    }},
    { $unwind: '$brand' },
    { $project: {
      _id: 1,
      name: 1,
      brand: '$brand.name',
      status: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
