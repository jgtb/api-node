import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $project: {
      _id: 1,
      name: 1,
      status: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
