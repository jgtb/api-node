export default (req, _, next) => {
  const pipeline = [
    { $match: { status: 'active' } },
    { $lookup: {
      from: 'brands',
      let: { vehicle: '$_id' },
      pipeline: [
        { $match: {
          $expr: {
            $and: [
              { $eq: [ '$vehicle', '$$vehicle' ] },
              { $eq: [ '$status', 'active' ] }
            ]
          }
        } },
        { $lookup: {
          from: 'modes',
          let: { brand: '$_id' },
          pipeline: [
            { $match: {
              $expr: {
                $and: [
                  { $eq: [ '$brand', '$$brand' ] },
                  { $eq: [ '$status', 'active' ] }
                ]
              }
            } },
            { $lookup: {
              from: 'versions',
              let: { mode: '$_id' },
              pipeline: [
                { $match: {
                  $expr: {
                    $and: [
                      { $eq: [ '$mode', '$$mode' ] },
                      { $eq: [ '$status', 'active' ] }
                    ]
                  }
                } },
                { $project: {
                  _id: 1,
                  name: 1
                } }
              ],
              as: 'versions'
            } },
            { $project: {
              _id: 1,
              name: 1,
              versions: 1
            } }
          ],
          as: 'modes'
        } },
        { $project: {
          _id: 1,
          name: 1,
          modes: 1
        } }
      ],
      as: 'brands'
    } },
    { $project: {
      _id: 1,
      name: 1,
      brands: 1
    } }
  ]

  req.setPipeline(pipeline)

  next()
}
