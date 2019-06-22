const $group = {
  $group: {
    _id: null,
    total: { $sum: 1 }
  }
}

export default async (Schema, pipeline, { page, limit }) => {
  try {
    const [ $match, ...pipe ] = pipeline

    const [ res = { total: 0 } ] = await Schema.aggregate([
      $match,
      $group
    ])

    const total = res.total

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

    return { docs, pages, total }
  } catch (err) {
    throw err
  }
}
