import TeamsSchema from '../src/modules/teams/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 20 })
    .map(_ => ({}))

  await TeamsSchema.create(data)
}
