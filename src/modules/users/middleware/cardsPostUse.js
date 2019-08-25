import { Types } from 'mongoose'

import Schema from '../models/schema'
import PartnersSchema from '../../partners/models/schema'

export default async (req, res, next) => {
  const { user, body } = req
  const { id } = user
  const { card } = body

  const [ cardModel ] = await PartnersSchema.aggregate([
    { $unwind: '$cards' },
    { $match: { 'cards._id': Types.ObjectId(card), 'cards.status': 'active' } },
    { $project: {
      _id: false,
      card: '$cards._id',
      markers: '$cards.markers'
    } }
  ])

  if (!cardModel) {
    return res.status(401).json({})
  }

  const userModel = await Schema
    .findOne({ _id: Types.ObjectId(id), 'cards.card': Types.ObjectId(cardModel.card), 'cards.status': 'in progress' })
    .select('_id')
    .lean()

  if (userModel) {
    return res.status(401).json({})
  }

  const markers = Array
    .from({ length: cardModel.markers })
    .fill({ marked: false, marketAt: null })

  req.params.id = id
  req.body = {
    card,
    markers,
    marked: 0,
    unMarked: markers.length
  }

  next()
}
