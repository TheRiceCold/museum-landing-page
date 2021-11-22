
export function transitionCircle() {
  const eventLink = document.getElementById('events-page-link')
  const eventLink = document.getElementById('gallery-page-link')
  const eventLink = document.getElementById('places-page-link')

  eventLink.addEventListener('click', () => clickedLink('event-page'))
  
  document.getElementById('home-arc-link')
    .addEventListener('click', () => {
      document.querySelector('.transition-circle#home-arc').classList.add('active')
      document.querySelector('.transition-circle#event-page').classList.remove('active')
      setTimeout(() => document.body.style.overflow = '', 450)
    })
}

function clickedLink(id) {
  let homeLink = document.querySelector('.transition-circle#home-arc')
  document.querySelector('.transition-circle#'+id).classList.add('active')
  homeLink.classList.remove('active')
  document.body.style.overflow = 'hidden'
}