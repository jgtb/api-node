import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $lookup: {
      from: 'brands',
      let: { brand: '$brand' },
      pipeline: [
        { $match: {
          $expr: {
            $eq: [ '$_id', '$$brand' ]
          }
        }},
        { $lookup: {
          from: 'vehicles',
          localField: 'vehicle',
          foreignField: '_id',
          as: 'vehicle'
        }},
        { $unwind: '$vehicle' },
        { $project: {
          _id: false,
          name: 1,
          vehicle: '$vehicle.name'
        }}
      ],
      as: 'brand'
    }},
    { $unwind: '$brand' },
    { $project: {
      _id: 1,
      name: 1,
      brand: '$brand.name',
      vehicle: '$brand.vehicle',
      status: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}