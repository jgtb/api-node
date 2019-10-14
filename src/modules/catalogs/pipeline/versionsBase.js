export default (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'modes',
      let: { mode: '$mode' },
      pipeline: [
        { $match: {
          $expr: {
            $eq: [ '$_id', '$$mode' ]
          }
        }},
        { $lookup: {
          from: 'brands',
          let: { brand: '$brand' },
          pipeline: [
            { $match: {
              $expr: {
                $eq: [ '$_id', '$$brand' ]
              }
            }},
            { $project: {
              _id: 1,
              vehicle: 1
            }}
          ],
          as: 'brand'
        }},
        { $unwind: '$brand' },
        { $project: {
          _id: 1,
          brand: 1
        }}
      ],
      as: 'mode'
    }},
    { $unwind: '$mode' },
    { $project: {
      _id: 1,
      name: 1,
      mode: '$mode._id',
      brand: '$mode.brand._id',
      vehicle: '$mode.brand.vehicle'
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
