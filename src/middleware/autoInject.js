import { ObjectId } from 'mongoose'

export default (req, _, next) => {
  const { id } = req.user

  req.autoInject = {
    owner: ObjectId(id)
  }

  next()
}
