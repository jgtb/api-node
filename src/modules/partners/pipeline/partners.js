export default (req, _, next) => {
  const pipeline = [
    { $match: { isActive: true } },
    { $project: {
      name: 1,
      phone: 1,
      email: 1,
      description: 1,
      logo: 1,
      'cards._id': 1,
      'cards.name': 1,
      'cards.description': 1,
      'cards.thumbnail': 1,
      'cards.features': 1,
      'addresses.thumbnail': 1,
      'addresses.zipcode': 1,
      'addresses.state': 1,
      'addresses.city': 1,
      'addresses.neighborhood': 1,
      'addresses.street': 1,
      'addresses.number': 1,
      'addresses.complement': 1
    } }
  ]

  req.setPipeline(pipeline)

  next()
}
