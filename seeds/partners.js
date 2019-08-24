import PartnersSchema from '../src/modules/partners/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 80 })
    .map(_ => ({
      name: Faker.name.findName(),
      phone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      email: Faker.internet.email().toLowerCase(),
      description: Faker.lorem.sentence(),
      logo: Faker.image.food(),
      cards: Array
        .from({ length: 3 })
        .map(_ => ({
          name: Faker.name.findName(),
          description: Faker.lorem.sentence(),
          thumbnail: Faker.image.food(),
          features: Array
            .from({ length: 3 })
            .map(_ => Faker.name.findName()),
          status: 'active'
        })),
      addresses: Array
        .from({ length: 2 })
        .map(_ => ({
          thumbnail: Faker.image.food(),
          zipcode: Faker.address.zipCode(),
          state: Faker.address.stateAbbr(),
          city: Faker.address.city(),
          neighborhood: Faker.address.country(),
          street: Faker.address.streetName(),
          number: Faker.random.number(),
          complement: Faker.lorem.sentences()
        }))
    }))

  await PartnersSchema.create(data)
}
