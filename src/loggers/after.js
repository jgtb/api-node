import Schema from './models/schema'

export default async (req, res) => {
  const { logger } = req
  const { statusCode } = res

  await Schema.findByIdAndUpdate(logger, { status: statusCode })

  res.end()
}
