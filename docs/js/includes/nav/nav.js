const navList = [
  ['home', 'history','schedule','contact'],
  ['home', 'gallery','events','locations']
]

export const navButton = `
<div id="nav-menu">
  <div class="list-container-one">
    <button class="more-button">
      <div class="menu-icon-wrapper">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <ul>
      <li id="home-link">${navList[0][0]}</=></li>
      <li id="history-link">${navList[0][1]}</=></li>
      <li id="visit-link">${navList[0][2]}</a></li>
      <li id="footer-link">${navList[0][3]}</li>
    </ul>
  </div>

  <div class="list-container-two">
    <ul>
      <li id="home-arc-link">${navList[1][0]}</li>
      <li id="gallery-page-link">${navList[1][1]}</li>
      <li id="events-page-link">${navList[1][2]}</li>
      <li id="places-page-link">${navList[1][3]}</li>
    </ul>
  </div>
</div>`
