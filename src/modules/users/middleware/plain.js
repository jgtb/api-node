import PlainSchema from '../../plains/models/schema'

export default async (req, _, next) => {
  const { plain } = req.body

  if (!plain) {
    const defaultPlain = await PlainSchema
      .findOne({ default: true })
      .select('_id')
      .lean()

    req.body.plain = defaultPlain && defaultPlain._id
  }

  next()
}
