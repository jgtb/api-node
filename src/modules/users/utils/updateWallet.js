import Schema from '../models/schema'

export default async ({ user, value }) => {
  await Schema.findByIdAndUpdate(user, { $inc: { wallet: value } })
}
