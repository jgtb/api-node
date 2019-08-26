import UsersSchema from '../src/modules/users/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 20 })
    .map(_ => ({
      roles: [ 'user' ],
      partner: null,
      name: Faker.name.findName(),
      phone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      email: Faker.internet.email().toLowerCase(),
      cards: [],
      password: '123456',
      isActive: true
    }))

  await UsersSchema.create(data)
}
