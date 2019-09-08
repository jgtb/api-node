import CatalogsSchema from '../src/modules/catalogs/models/schema'

export default async (Faker) => {
  const statues = [ 'active', 'inactive' ]
  const data = Array
    .from({ length: 20 })
    .map(_ => ({
      name: Faker.name.findName(),
      catalog: Faker.name.findName().toLowerCase().join(' '),
      items: Array.from({ length: 4 }).map(_ => ({
        name: Faker.name.findName()
      })),
      status: statues[ Faker.random.number({ min: 0, max: 1 }) ]
    }))

  await CatalogsSchema.create(data)
}
