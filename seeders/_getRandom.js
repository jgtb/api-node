export default async ({ Schema, size = 1, $match = {} }) => {
  const res = await Schema.aggregate([
    { $match },
    { $sample: { size } }
  ])

  return res
}
