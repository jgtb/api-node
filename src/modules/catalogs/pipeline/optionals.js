import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $lookup: {
      from: 'categories',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    }},
    { $unwind: '$category' },
    { $project: {
      _id: 1,
      name: 1,
      category: '$category.name',
      status: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
