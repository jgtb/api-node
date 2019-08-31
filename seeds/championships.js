import ChampionshipsSchema from '../src/modules/championships/models/schema'

export default async (Faker) => {
  const data = Array
    .from({ length: 20 })
    .map(_ => ({}))

  await ChampionshipsSchema.create(data)
}
