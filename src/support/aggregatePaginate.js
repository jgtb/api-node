import { count } from './aggregation'

export default async (Schema, pipeline, { page, limit }) => {
  try {
    const [ $match, ...pipe ] = pipeline

    const [ res = { count: 0 } ] = await Schema.aggregate([
      $match,
      { ...count }
    ])

    const total = res.count

    const pages = Math.ceil(total / limit)
    const skip = limit * (page - 1)

    const docs = await Schema.aggregate([
      $match,
      { $skip: skip },
      { $limit: limit },
      ...pipe
    ])

    if (!docs.length) {
      return null
    }

    return { docs, page, pages, limit, total }
  } catch (err) {
    throw err
  }
}
