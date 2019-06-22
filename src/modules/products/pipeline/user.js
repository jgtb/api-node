export default (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'users',
      let: { user: '$user' },
      pipeline: [
        { $match: {
          $expr: {
            $and: [
              { $eq: [ '$_id', '$$user' ] }
            ]
          }
        } },
        { $project: {
          name: 1
        } }
      ],
      as: 'user'
    } },
    { $unwind: '$user' }
  ]

  req.pipeline = [ ...req.pipeline, ...pipeline ]

  next()
}
