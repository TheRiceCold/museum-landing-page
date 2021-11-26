export function navButton() {
  const query = '#nav-menu .list-container-one .more-button'
  document.querySelector(query).addEventListener('click', openList)
}

let clickCount = 0
function openList() {
  if (clickCount === 0) {
    setListActive('one')
    clickCount++
  }
  else if (clickCount === 1) {
    setListActive('one', false)
    setListActive('two')
    clickCount++
  }
  else {
    setListActive('two', false)
    clickCount = 0 // resets value
  }
}

function setListActive(list, active = true) {
  if (active)
    document.querySelector(`#nav-menu .list-container-${list}`).classList.add('active')
  else
    document.querySelector(`#nav-menu .list-container-${list}`).classList.remove('active')
}