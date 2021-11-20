const navList = [
  'home', 
  'info',
  'schedule',
  'contact'
]

const navButton = `
<div id="nav-menu">
  <div class="list-container">
    <button class="more-button" onclick="toggle('#nav-menu .list-container')">
      <div class="menu-icon-wrapper">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <ul>
      <li><a href="#home">${navList[0]}</a></li>
      <li id="news-link"><a href="#info-arc">${navList[1]}</a></li>
      <li id="gallery-link"><a href="#visit-arc">${navList[2]}</a></li>
      <li id="places-link"><a href="#footer">${navList[3]}</li>
    </ul>
  </div>
</div>`

document.body.innerHTML += navButton
const navOpen = document.querySelector('#nav-menu .list-container .more-button')
navOpen.addEventListener('click', () => toggle())

const toggle = (query) => document.querySelector(query).classList.toggle('active')
