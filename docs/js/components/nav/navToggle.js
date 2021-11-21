export function navToggle() {
  let navBtnOne = document.querySelector('#nav-menu .list-container-one .more-button')
  let navBtnTwo = document.querySelector('#nav-menu .list-container-two .more-button')
  let navToggle = false
  let navToggleTwo = false

  navBtnOne.addEventListener('click', () => {
    navToggle = !navToggle
    if (navToggle) {
      navToggleTwo = true
      document.querySelector('#nav-menu .list-container-one').classList.add('active')
    }
    else if (navToggleTwo) {
      document.querySelector('#nav-menu .list-container-one').classList.remove('active')
      document.querySelector('#nav-menu .list-container-two').classList.add('active')
    }
  })
}