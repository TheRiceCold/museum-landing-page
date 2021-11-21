const navList = ['home', 'info','schedule','contact']

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
      <li><a href="#home">${navList[0]}</a></li>
      <li><a href="#info-arc">${navList[1]}</a></li>
      <li><a href="#visit-arc">${navList[2]}</a></li>
      <li><a href="#footer">${navList[3]}</a></li>
    </ul>
  </div>

  <div class="list-container-two">
    <button class="more-button">
    </button>
    <ul>
      <li>${navList[0]}</li>
      <li>${navList[1]}</li>
      <li>${navList[2]}</li>
      <li>${navList[3]}</li>
    </ul>
  </div>
</div>`