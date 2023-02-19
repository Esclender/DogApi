import { dropMenu } from '../typescript/project.module'

export const optStr = (data: string | null): void => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.innerHTML = data ?? ''
  a.classList.add('dropdown-item')
  li.append(a)
  dropMenu?.append(li)
}
