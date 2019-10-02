import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const { role } = req.params

  const pipeline = [
    { $match: { role } },
    { ...statusVirtual },
    { $project: {
      role: 1,
      name: 1,
      ein: 1,
      email: 1,
      cellPhone: 1,
      commercialPhone: 1,
      status: 1
    } }
  ]
  
  req.setPipeline(pipeline)

  next()
}
