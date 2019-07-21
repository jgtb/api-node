import axios from 'axios'

const url = (zipcode) => `https://viacep.com.br/ws/${zipcode}/json/`

export default async ({ zipcode, state, city }) => {
  const baseUrl = url(zipcode)
  try {
    const { data } = await axios.get(baseUrl)
    console.log(data)
  } catch (err) {
    return false
  }
}
