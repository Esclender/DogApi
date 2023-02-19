import { breedsList, ShowImages, changeFavImages, saveBreed } from './project.service'
import { drop, favBtn, loading, lovedIcon, favImg } from './project.module'

breedsList()
  .then(res => {
    if (drop !== null) {
      ShowImages(drop.innerHTML)
    }

    changeFavImages()

    favBtn.forEach(item => {
      item.addEventListener('click', (e) => {
        if (item.classList.contains('love-btn')) {
          saveBreed(favImg?.attributes[3].nodeValue)
            .then(res => {
              lovedIcon?.classList.toggle('offcanvas')
              lovedIcon?.classList.toggle('vanishOut')
            })
        } else {
          changeFavImages()
            .then(res => { loading?.classList.toggle('offcanvas') })
        }
      })
    })
  })
