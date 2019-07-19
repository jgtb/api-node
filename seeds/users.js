import UsersSchema from '../src/modules/users/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 50 })
    .map(_ => ({
      name: Faker.name(),
      login: Faker.radio().toLowerCase(),
      password: '123456'
    }))

  await UsersSchema.create(data)
}
