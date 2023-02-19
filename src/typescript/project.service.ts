import axios from 'axios'
import { optStr } from './card.structure'
import { drop, CrImages, breedsIds, breedName, breedCharacter, favImg, loading, lovedIcon } from './project.module'
import { type Image, type Breed } from './project.module'

export const checker = async (metodo: string,
  limit: number = 5): Promise<Image[]> => {
  const options = {
    method: metodo,
    url: `https://api.thedogapi.com/v1/images/search?limit=${limit}`,
    headers: {
      'x-api-key': 'live_TQeoy21FvSumJjTOdv2bmtclmmksykBiclzF60Mrt9KSetGL7yW69tsIvvB9Xewe'
    }
  }

  const rta = await axios.request(options)
  const datos = rta.data
  return datos
}

export const breedChecker = async (id: number): Promise<Image[]> => {
  const options = {
    method: 'GET',
    url: `https://api.thedogapi.com/v1/images/search?breed_ids=${id}`,
    headers: {
      'x-api-key': 'live_TQeoy21FvSumJjTOdv2bmtclmmksykBiclzF60Mrt9KSetGL7yW69tsIvvB9Xewe'
    }
  }

  const rta = await axios.request(options)
  const datos = rta.data
  return datos
}

export const postFavorite = async (datos?: string | null): Promise<void> => {
  try {
    const options = {
      method: 'POST',
      url: 'https://api.thedogapi.com/v1/favourites',
      ContentType: 'application/json',
      headers: {
        'x-api-key': 'live_TQeoy21FvSumJjTOdv2bmtclmmksykBiclzF60Mrt9KSetGL7yW69tsIvvB9Xewe'
      },
      data: {
        image_id: datos
      }
    }

    const rta = await axios.request(options)
    console.log(rta.status)
  } catch (error) {
    console.log(error)
  }
}

export async function breedsList (): Promise<void> {
  const datos = await checker('GET')
  datos.forEach((element: Image) => {
    if (element.breeds.length !== 0) {
      drop != null ? drop.innerHTML = element.breeds[0].name : console.log('Error')
      const elementPush = {
        id: element.breeds[0].id,
        name: element.breeds[0].name
      }
      breedsIds.push(elementPush)// WE SAVED THE ID'S IN THIS ARRAY
      optStr(element.breeds[0].name)
    }
  })

  const droper = document.querySelectorAll('.dropdown-item')
  droper.forEach((item) => {
    item.addEventListener('click', () => {
      if (drop !== null) {
        drop.innerHTML = item.innerHTML
        ShowImages(item.innerHTML)
      }
    })
  })
}

export async function ShowImages (name: string): Promise<void> {
  const dato = breedsIds.find(item => item.name === name)
  if (dato !== undefined) {
    const search = await breedChecker(dato.id)
    CrImages.forEach((item) => {
      item.setAttribute('src', search[0].url)
    })
    breedInfo(search[0].breeds[0])
  }
}

export function breedInfo (info: Breed): void {
  if (breedName !== null && breedCharacter !== null) {
    breedName.innerHTML = info.name
    breedCharacter.innerHTML = info.temperament
  }
}

/* FAVORITES BREEDS */

export async function saveBreed (id?: string | null): Promise<void> {
  lovedIcon?.classList.toggle('offcanvas')
  lovedIcon?.classList.toggle('vanishOut')
  postFavorite(id)

  if (favImg !== null) {
    const data = await checker('GET', 1)
    favImg.setAttribute('src', data[0].url)
  }
}

export async function changeFavImages (): Promise<void> {
  loading?.classList.toggle('offcanvas')
  if (favImg !== null) {
    const data = await checker('GET', 1)
    favImg.setAttribute('src', data[0].url)
    favImg.setAttribute('value', data[0].id)
  }
}

/* UPLOAD BREED */
