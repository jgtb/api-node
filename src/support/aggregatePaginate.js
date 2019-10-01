import { count } from './aggregation'

const getUnitlLookup = (pipeline) => pipeline.filter(({ $lookup }) => !$lookup)

export default async (Schema, pipeline, { page, limit }) => {
  try {
    const $matches = getUnitlLookup(pipeline)

    const [ res = { count: 0 } ] = await Schema.aggregate([
      ...$matches,
      { ...count }
    ])

    const total = res.count

    const pages = Math.ceil(total / limit)
    const skip = limit * (page - 1)

    const docs = await Schema.aggregate([
      ...$matches,
      { $skip: skip },
      { $limit: limit },
      ...pipeline
    ])

    if (!docs.length) {
      return null
    }

    return { docs, page, pages, limit, total }
  } catch (err) {
    throw err
  }
}
