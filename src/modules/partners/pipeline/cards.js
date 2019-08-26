export default async (req, _, next) => {
  const pipeline = [
    { $match: { isActive: true } },
    { $match: { 'cards.status': 'active' } },
    { $project: {
      _id: '$_id',
      name: '$name',
      'cards._id': 1,
      'cards.name': 1,
      'cards.description': 1,
      'cards.thumbnail': 1,
      'cards.features': 1
    } }
  ]

  req.setPipeline(pipeline)

  next()
}
