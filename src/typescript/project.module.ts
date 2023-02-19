export interface Image {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
}

export interface Breed {
  weight: Eight
  height: Eight
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  reference_image_id: string
}

export interface Eight {
  imperial: string
  metric: string
}

export interface POSTDATA {
  'id': string
}

export const drop = document.querySelector('.dropdown-toggle')
export const droper = document.querySelectorAll('.dropdown-item')
export const dropMenu = document.querySelector('.dropdown-menu')
export const CrImages = document.querySelectorAll('.cr-image')
export const breedsIds = [{
  name: '',
  id: 0
}]

export const breedName = document.querySelector('#animal-title')
export const breedCharacter = document.querySelector('#animal-title + .card-text')

export const favBtn = document.querySelectorAll('.btn-fav')
export const favImg = document.querySelector('.fav-img')
export const loading = document.querySelector('.spinner-border')
export const lovedIcon = document.querySelector('.loved-icon')
