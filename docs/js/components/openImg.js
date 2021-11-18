export function openImg() {
  const landingImg = document.querySelector('#landing .image-wrapper img')
  const sectionImg = document.querySelectorAll('.section img')

  sectionImg.forEach(img => img.addEventListener('click', () => open(img)))
  landingImg.addEventListener('click', () => open(landingImg))
}

function open(img) {
  const modal = document.querySelector('.modal')
  const original = document.querySelector('.full-img')
  modal.classList.add('open')
  original.classList.add('open')
  const originalSrc = img.getAttribute('data')
  original.src = `img/${originalSrc}.png`
  
  modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal'))
    modal.classList.remove('open')
    original.classList.remove('open')
  })
}

