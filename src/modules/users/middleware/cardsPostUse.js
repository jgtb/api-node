import { Types } from 'mongoose'

import Schema from '../models/schema'
import PartnersSchema from '../../partners/models/schema'

export default async (req, res, next) => {
  const { user, body } = req
  const { partner } = user
  const { user: client, card } = body

  const cardModel = await PartnersSchema
    .findOne({ _id: Types.ObjectId(partner), 'cards._id': Types.ObjectId(card) })
    .select('_id')
    .lean()

  if (!cardModel) {
    return res.status(401).json({})
  }

  const [ userModel ] = await Schema.aggregate([
    { $match: { _id: Types.ObjectId(client) } },
    { $unwind: '$cards' },
    { $match: { 'cards.card': Types.ObjectId(card), 'cards.status': 'done' } },
    { $project: {
      _id: false,
      card: '$cards._id'
    } }
  ])

  if (!userModel) {
    return res.status(401).json({})
  }

  req.params.id = client
  req.body = {
    _id: userModel.card,
    status: 'used'
  }

  next()
}
