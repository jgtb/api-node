export default async (req, _, next) => {
  const { plain } = req.body

  if (plain) {
    req.body.role = 'company'
    req.body.status = 'inactive'
  }

  next()
}
