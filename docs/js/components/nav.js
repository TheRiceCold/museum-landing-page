const navList = [
  'home', 
  'info',
  'schedule',
  'contact'
]

const navbar = `
<nav>
  <img src="img/logo.svg" style="height: 75px; cursor: pointer"/>
  <ul>
    <li><a href="">home</a></li>
    <li><a href="">about</a></li>
    <li><a href="">events</a></li>
    <li><a href="">more</a></li>
  </ul>
</nav>`;

const navMenu = `
<span class="dot"></span>
<img src="img/logo.png" alt="" id="web-logo">
<div id="navmenu">
  <div class="list-container">
    <button class="more-button" onclick="navOpen()">
      <div class="menu-icon-wrapper">
        <span></span><span></span><span></span>
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

document.body.innerHTML += navMenu

function navOpen() {
  document.querySelector('.list-container').classList.toggle('active')
}
    