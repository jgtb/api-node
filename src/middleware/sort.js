export default (req, _, next) => {
  const { sortBy = 'createdAt', sortOrder = -1 } = req.query

  req.sort = {
    [sortBy]: Number(sortOrder)
  }

  next()
}
