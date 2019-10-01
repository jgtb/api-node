import PlainsSchema from '../src/modules/plains/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 12 })
    .map(_ => ({
      name: Faker.name.findName(),
      price: Faker.random.number({ min: 100, max: 1000 }),
      site: Faker.random.boolean(),
      advertsHighlights: Faker.random.boolean(),
      advertsPriority: Faker.random.boolean(),
      advertsLimit: Faker.random.number({ min: 5, max: 20 }),
      advertsPhotosLimit: Faker.random.number({ min: 5, max: 20 }),
      advertsVideo: Faker.random.boolean(),
      status: 'active'
    }))

  await PlainsSchema.create(data)
}
