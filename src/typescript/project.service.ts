import axios from 'axios'
import { cardStr, optStr } from './card.structure'
import { type Image } from './project.module'

export const checker = async (filter: string | null = ''): Promise<Image[]> => {
  const options = {
    method: 'GET',
    url: 'https://api.thedogapi.com/v1/images/search?limit=5',
    headers: {
      'x-api-key': 'live_TQeoy21FvSumJjTOdv2bmtclmmksykBiclzF60Mrt9KSetGL7yW69tsIvvB9Xewe'
    }
  }

  const rta = await axios.request(options)
  const datos = rta.data
  return datos
}

// export async function breedsList (): Promise<void> {
//   const datos = await checker()
//   datos.forEach((element: Image) => {
//     optStr(element.breed)
//   })
// }

export async function ShowImages (amount: number, value: string | null = ''): Promise<void> {
  const data = await checker(value)
  for (let i = 0; i < amount; i++) {
    const value = Math.floor(Math.random() * data.length)
    cardStr(data[value])
  }
}
