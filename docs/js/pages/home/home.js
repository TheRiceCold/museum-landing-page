let landingArc = `
<article id="landing">
  <div class="container-inner">
    <div class="main-content">
      <div class="main-headings" id="main-headings-js">
        <div>
          <h3>Decouvrez</h3>
          <h3>la Jeune</h3>
          <h1>Beaute</h1>
        </div>
        <button id="read-more">Read More</button>
      </div>
      <div class="more-info " id="more-info-js">
        <h4>Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse expedita impedit iste, quibusdam debitis fugit repudiandae voluptatum vero quod nulla!</p>
      </div>
    </div>
    <div class="image-wrapper">
      <img class="image" src="img/black-gold-mask.png" alt="image of a young woman." data="black-gold-mask"/>
    </div>
  </div>
  <div class="move-down">
    <a href="#arc2">
      <i class="fas fa-chevron-down"></i>
    </a>
  </div>
</article>`

let arcTwo = `
<article id="arc2">
  <div id="arc2__left">
    <img src="./img/sculp-face.png" alt="">
  </div>
  <div class="img-box">
    <img src="img/top.png" alt="">
    <img src="img/mid.png" alt="">
    <img src="img/bot.png" alt="">
  </div>
  <div id="arc2__right" >
    <h4 id="first">
      life is not about how fast you run <br />
      or how high you climb, but <br />
      how well you bounce <br /> <br />
      <span>- Vivian Komori </span>
    </h4>
    <h4 id="second">
      the tragedy of life is not that it ends <br />
      so soon, but that we wait <br />
      so long to begin it <br /> <br />
      <span>- W.M. Lewis </span>
    </h4>
  </div>
  <a href="#section2" id="scrolldown1">scroll down</a>
</article>`;

let homeArticles = `
<article class="section" id="section2">
  <img src="./img/black-gold-skull.png" alt="Black Gold Skull" style="height: 400px; width: 400px;" class="slide-section" data="black-gold-skull" />
  <p class="slide-section">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, rem molestias repudiandae culpa rerum sed facere itaque corrupti libero minima amet laborum quidem repellendus, ratione veniam recusandae ex iure ab?
    Omnis facilis ratione, facere. Ex dolorum unde voluptatum nesciunt odio perspiciatis dolore, quas fugiat facere quaerat debitis accusamus quis voluptatibus blanditiis reiciendis distinctio! Officiis vero itaque dolores sint. Consequuntur, nostrum?
  </p>
  </article>

  <article class="section" id="second">
  <p class="slide-section">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, rem molestias repudiandae culpa rerum sed facere itaque corrupti libero minima amet laborum quidem repellendus, ratione veniam recusandae ex iure ab?
    Omnis facilis ratione, facere. Ex dolorum unde voluptatum nesciunt odio perspiciatis dolore, quas fugiat facere quaerat debitis accusamus quis voluptatibus blanditiis reiciendis distinctio! Officiis vero itaque dolores sint. Consequuntur, nostrum?
  </p>
  <img src="./img/rose-gold.png" alt="Rose Gold" style="height: 400px; width: 400px;" class="slide-section" data="rose-gold" />
  </article>

  <article class="section">
  <img 
    src="./img/white-gold-face.png" 
    alt="White Gold Face" 
    style="height: 350px; width: 350px;" 
    class="slide-section"
    data="white-gold-face" />
  <p class="slide-section">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, rem molestias repudiandae culpa rerum sed facere itaque corrupti libero minima amet laborum quidem repellendus, ratione veniam recusandae ex iure ab?
    Omnis facilis ratione, facere. Ex dolorum unde voluptatum nesciunt odio perspiciatis dolore, quas fugiat facere quaerat debitis accusamus quis voluptatibus blanditiis reiciendis distinctio! Officiis vero itaque dolores sint. Consequuntur, nostrum?
  </p>
  </article>
  <article class="section">
  <img 
    src="./img/arrow-human-gold.png" 
    alt="Arrow Human Gold" 
    style="height: 400px; width: 400px;" 
    class="slide-section"
    data="arrow-human-gold" />
  <p class="slide-section">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, rem molestias repudiandae culpa rerum sed facere itaque corrupti libero minima amet laborum quidem repellendus, ratione veniam recusandae ex iure ab?
    Omnis facilis ratione, facere. Ex dolorum unde voluptatum nesciunt odio perspiciatis dolore, quas fugiat facere quaerat debitis accusamus quis voluptatibus blanditiis reiciendis distinctio! Officiis vero itaque dolores sint. Consequuntur, nostrum?
  </p>
</article>`;

document.body.innerHTML += landingArc + arcTwo + homeArticles;

