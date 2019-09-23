import { booleanVirtual, statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { $match: { status: { $ne: 'deleted' } } },
    { ...booleanVirtual({ key: 'site' }) },
    { ...booleanVirtual({ key: 'advertsHighlights' }) },
    { ...booleanVirtual({ key: 'advertsPriority' }) },
    { ...booleanVirtual({ key: 'advertsPriority' }) },
    { ...booleanVirtual({ key: 'advertsVideo' }) },
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
      status: 1
    } }
  ]

  req.setPipeline(pipeline)

  next()
}
