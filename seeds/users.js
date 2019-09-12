import UsersSchema from '../src/modules/users/models/schema'

export default async (Faker) => {
  const roles = [ 'master', 'dealer', 'private' ]
  const data = Array
    .from({ length: 20 })
    .map(_ => ({
      role: roles[ Faker.random.number({ min: 0, max: 2 }) ],
      owner: null,
      name: Faker.name.findName(),
      ein: Faker.random.number({ min: 100000000, max: 200000000 }),
      cellPhone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      commercialPhone: '319' + Math.floor(10000000 + Math.random() * 90000000),
      email: Faker.internet.email().toLowerCase(),
      fields: [],
      password: '123456',
      status: 'active'
    }))

  await UsersSchema.create(data)
}
