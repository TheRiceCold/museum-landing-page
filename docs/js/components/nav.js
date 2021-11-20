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
<div id="navmenu">
  <div class="list-container">
    <button class="more-button" onclick="navOpen()">
      <div class="menu-icon-wrapper">
        <span></span><span></span><span></span>
      </div>
    </button>
    <ul>
      <li><a href="#home">home</a></li>
      <li id="news-link"><a href="#info-arc">info</a></li>
      <li id="gallery-link"><a href="#visit-arc">schedule</a></li>
      <li id="places-link"><a href="#footer">contact</li>
    </ul>
  </div>
</div>`

document.body.innerHTML += navMenu

function navOpen() {
  document.querySelector('.list-container').classList.toggle('active')
}
    