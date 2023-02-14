import { type Image } from '../typescript/project.module'

export const cardStr = (data: Image): void => {
  const CONTAINER = document.querySelector('#cards')

  // CONTAINER?.append()
}

export const optStr = (data: string | null): void => {
  const BTNGROUP = document.querySelector('.dropdown-menu')
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.innerHTML = data ?? ''
  a.classList.add('dropdown-item')
  a.classList.add('text-primary')
  li.append(a)
  BTNGROUP?.append(li)
}
