import { Types } from 'mongoose'

import Schema from '../models/schema'

export default async (req, res, next) => {
  const { id } = req.params

  const partner = await Schema
    .findOne({ 'cards._id': id })
    .select('_id')
    .lean()

  if (!partner) {
    return res.status(404).json({})
  }

  const pipeline = [
    { $match: { isActive: true } },
    { $unwind: '$cards' },
    { $match: { 'cards._id': Types.ObjectId(id), 'cards.status': 'active' } },
    { $project: {
      _id: '$cards._id',
      name: '$cards.name',
      description: '$cards.description',
      thumbnail: '$cards.thumbnail',
      features: '$cards.features',
      'partner._id': '$_id',
      'partner.name': '$name'
    } }
  ]

  req.params.id = partner._id
  req.setPipeline(pipeline)

  next()
}
