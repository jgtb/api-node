import { formatToDate } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    formatToDate({ key: 'createdAt' }),
    formatToDate({ key: 'updatedAt' })
  ]

  req.pipeline = [ ...req.pipeline, ...pipeline ]

  next()
}
