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
    { $match: { 'cards.card': Types.ObjectId(card), 'cards.status': 'in progress' } },
    { $project: {
      _id: false,
      card: '$cards._id',
      markers: '$cards.markers'
    } }
  ])

  if (!userModel) {
    return res.status(401).json({})
  }

  const { markers } = userModel

  const marker = markers.find(({ marked }) => !marked)
  const index = markers.findIndex(({ marked }) => !marked)
  const marked = markers.filter(({ marked }) => marked).length + 1
  const unMarked = markers.filter(({ marked }) => !marked).length - 1

  req.params.id = client
  req.body = {
    _id: userModel.card,
    marked,
    unMarked,
    [`markers.${index}._id`]: marker._id,
    [`markers.${index}.marked`]: true,
    [`markers.${index}.markedAt`]: new Date()
  }

  next()
}
