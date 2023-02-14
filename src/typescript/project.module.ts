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
