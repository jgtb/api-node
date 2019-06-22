import { textSeparateByCommas } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'categories',
      let: { categories: '$categories' },
      pipeline: [
        { $match: {
          $expr: {
            $and: [
              { $in: [ '$_id', '$$categories' ] }
            ]
          }
        } },
        { $project: {
          name: 1
        } }
      ],
      as: 'categories'
    } },
    { $addFields: {
      'virtual.categories': textSeparateByCommas({ input: 'categories', key: 'name' })
    } }
  ]

  req.pipeline = [ ...req.pipeline, ...pipeline ]

  next()
}
