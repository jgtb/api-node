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
    { ...booleanVirtual({ key: 'site', field: 'siteDescription' }) },
    { ...booleanVirtual({ key: 'advertsHighlights', field: 'advertsHighlightsDescription' }) },
    { ...booleanVirtual({ key: 'advertsPriority', field: 'advertsPriorityDescription' }) },
    { ...booleanVirtual({ key: 'advertsVideo', field: 'advertsVideoDescription' }) },
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
      users: 1,
      siteDescription: 1,
      advertsHighlightsDescription: 1,
      advertsPriorityDescription: 1,
      advertsVideoDescription: 1,
      statusDescription: 1
    }}
  ]

  req.setPipeline(pipeline)

  next()
}
