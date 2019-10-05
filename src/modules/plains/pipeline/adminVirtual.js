import { booleanVirtual, statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'users',
      let: { plain: '$_id' },
      pipeline: [
        { $match: { status: { $ne: 'deleted' } } },
        { $match: {
          $expr: {
            $eq: [ '$plain', '$$plain' ]
          }
        }},
        { $group: {
          _id: '$role',
          k: { $first: '$role' },
          v: { $sum: 1 }
        }},
        { $project: {
          _id: false,
          k: 1,
          v: 1
        }}
      ],
      as: 'users'
    }},
    { $addFields: {
      users: { $arrayToObject: '$users' }
    }},
    { ...booleanVirtual({ prop: 'site' }) },
    { ...booleanVirtual({ prop: 'advertsHighlights' }) },
    { ...booleanVirtual({ prop: 'advertsPriority' }) },
    { ...booleanVirtual({ prop: 'advertsVideo' }) },
    { ...statusVirtual },
    { $project: {
      _id: 1,
      name: 1,
      price: 1,
      advertsLimit: 1,
      advertsPhotosLimit: 1,
      site: 1,
      advertsHighlights: 1,
      advertsPriority: 1,
      advertsVideo: 1,
      status: 1,
      clientsQuantity: { $ifNull: [ '$users.client', 0 ] },
      companiesQuantity: { $ifNull: [ '$users.company', 0 ] }
    }}
  ]

  req.setPipeline(pipeline)

  next()
}
