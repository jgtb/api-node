export default async (req, _, next) => {
  const { plain } = req.body

  if (plain) {
    req.body.role = 'dealer'
    req.body.status = 'inactive'
  }

  next()
}
