import AdvertsSchema from '../src/modules/adverts/models/schema'

export default async (Faker) => {
  const inputs = [ 'text', 'select' ]
  const data = Array
    .from({ length: 20 })
    .map(_ => {
      const input = inputs[ Faker.random.number({ min: 0, max: 1 }) ]
      const options = input === 'select' ? Faker.name.findName().toLowerCase() : null
      return {
        name: Faker.name.findName(),
        label: Faker.name.findName(),
        placeholder: Faker.name.findName(),
        input,
        options,
        formatter: Faker.name.findName().toLowerCase()
      }
    })

  await AdvertsSchema.create(data)
}
