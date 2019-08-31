import TeamsSchema from '../src/modules/teams/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 20 })
    .map(_ => ({
      name: Faker.name.findName(),
      initials: Faker.name.findName().substring(0, 3).toUpperCase(),
      logo: Faker.image.abstract()
    }))

  await TeamsSchema.create(data)
}
