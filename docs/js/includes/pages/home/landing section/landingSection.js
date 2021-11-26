const heading1 = 'The Skull'
const heading2 = 'is Nature\'s'
const heading3 = 'Sculpture'
const readMoreBtn = 'tell me more'
const infoTitle = 'Magnifica Museum'
const landingImgSrc = 'black-gold-mask'
const info = 
  'One of the largest art museum in the world by gallery space. it was founded in 1764 when King Walter the Great acquired an impressive collection of paintings from the Berlin merchant Johann Liebert.'

const landingImg = () =>
`<div class="image-wrapper">
<img class="image" src="img/${landingImgSrc}.png" alt="${landingImgSrc}" data="${landingImgSrc}"/>
</div>`

export let landingSection = `
<section id="landing">
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
      <div class="more-info ">
        <h4>${infoTitle}</h4>
        <p>${info}</p>
      </div>
    </div>
    ${landingImg()}
  </div>
</section>`
