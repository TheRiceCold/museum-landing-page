export function transitionCircle(id) {
  document.getElementById('events-page-link').addEventListener('click', () => {
    let homeLink = document.querySelector('.transition-circle#home-arc')
    homeLink.classList.remove('active')
    document.querySelector('.transition-circle#event-page').classList.add('active')
  })
  document.getElementById('home-arc-link').addEventListener('click', () => {
    document.querySelector('.transition-circle#event-page').classList.remove('active')
    document.querySelector('.transition-circle#home-arc').classList.add('active')
  })
}
