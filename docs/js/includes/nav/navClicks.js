export function navClicks() {
  let navBtnOne = document.querySelector('#nav-menu .list-container-one .more-button')

  let clickCount = 0
  navBtnOne.addEventListener('click', () => {
    if (clickCount === 0) {
      document.querySelector('#nav-menu .list-container-one').classList.add('active')
      clickCount++
    }
    else if (clickCount === 1) {
      document.querySelector('#nav-menu .list-container-one').classList.remove('active')
      document.querySelector('#nav-menu .list-container-two').classList.add('active')
      clickCount++
    }
    else {
      document.querySelector('#nav-menu .list-container-two').classList.remove('active')
      clickCount = 0
    }
  })
}