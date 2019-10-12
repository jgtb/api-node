import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $lookup: {
      from: 'modes',
      localField: 'mode',
      foreignField: '_id',
      as: 'mode'
    }},
    { $unwind: '$mode' },
    { $project: {
      _id: 1,
      name: 1,
      mode: '$mode.name',
      status: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
