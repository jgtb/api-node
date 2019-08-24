import UsersSchema from '../src/modules/users/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 20 })
    .map(_ => ({
      name: Faker.name.findName(),
      phone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      email: Faker.internet.email().toLowerCase(),
      password: '123456'
    }))

  await UsersSchema.create(data)
}
