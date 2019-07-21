import UsersSchema from '../src/modules/users/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 50 })
    .map(_ => ({
      name: Faker.name(),
      phone: Faker.phone(),
      email: Faker.email(),
      password: '123456',
      addresses: Array
        .from({ length: Faker.bool() ? 2 : 3 })
        .map(_ => ({
          zipcode: Faker.zip(),
          state: Faker.state(),
          city: Faker.city(),
          neighborhood: Faker.province({ full: true }),
          street: Faker.street(),
          number: Faker.integer({ min: 10, max: 300 }),
          complement: Faker.paragraph({ sentences: 1 })
        }))
    }))

  await UsersSchema.create(data)
}
