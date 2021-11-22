export function transitionCircle() {
  const homeLink = document.getElementById('home-arc-link')
  const eventLink = document.getElementById('events-page-link')
  const galleryLink = document.getElementById('gallery-page-link')
  const placesLink = document.getElementById('places-page-link')
  galleryLink.addEventListener('click', () => clickedLink('gallery-page'))
  eventLink.addEventListener('click', () => clickedLink('event-page'))
  
  homeLink.addEventListener('click', () => {
    document.querySelector('.transition-circle#home-arc').classList.add('active')
    document.querySelector('.transition-circle#event-page').classList.remove('active')
    document.querySelector('.transition-circle#gallery-page').classList.remove('active')
    setTimeout(() => document.body.style.overflow = '', 450)
  })
}

function clickedLink(id) {
  let homeLink = document.querySelector('.transition-circle#home-arc')
  document.querySelector('.transition-circle#'+id).classList.add('active')
  homeLink.classList.remove('active')
  setTimeout(() => document.body.style.overflow = 'hidden', 100)
}