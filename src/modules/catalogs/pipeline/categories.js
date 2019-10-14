import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $lookup: {
      from: 'vehicles',
      localField: 'vehicle',
      foreignField: '_id',
      as: 'vehicle'
    }},
    { $unwind: '$vehicle' },
    { $project: {
      _id: 1,
      name: 1,
      vehicle: '$vehicle.name',
      status: 1
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
