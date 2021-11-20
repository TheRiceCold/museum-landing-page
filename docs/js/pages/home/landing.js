const heading1 = 'The Skull'
const heading2 = 'is Nature\'s'
const heading3 = 'Sculpture'
const readMoreBtn = 'tell me more'
const infoTitle = 'Magnifica Museum'
const landingImg = 'black-gold-mask'
const info = 'One of the largest art museum in the world by gallery space. it was founded in 1764 when King Walter the Great acquired an impressive collection of paintings from the Berlin merchant Johann Liebert.'

export let landingSection = `
<section id="home">
  <article id="landing">
    <div class="container-inner">
      <div class="main-content">
        <div class="main-headings" id="main-headings-js">
          <div>
            <h3>${heading1}</h3>
            <h3>${heading2}</h3>
            <h1>${heading3}</h1>
          </div>
          <button id="read-more">${readMoreBtn}</button>
        </div>
        <div class="more-info " id="more-info-js">
          <h4>${infoTitle}</h4>
          <p>${info}</p>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="image" src="img/${landingImg}.png" alt="${landingImg}" data="${landingImg}"/>
      </div>
    </div>
    <div class="move-down">
      <a href="#info-arc">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </article>`
