let landingArc = `
<section id="home">
  <article id="landing">
    <div class="container-inner">
      <div class="main-content">
        <div class="main-headings" id="main-headings-js">
          <div>
            <h3>Discover</h3>
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
</article>`

let homeArcs = `
  <article class="section" id="section2">
    <img src="./img/black-gold-skull.png" alt="Black Gold Skull" style="height: 400px; width: 400px;" class="slide-section" data="black-gold-skull" />
    <p class="slide-section">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, rem molestias repudiandae culpa rerum sed facere itaque corrupti libero minima amet laborum quidem repellendus, ratione veniam recusandae ex iure ab?
      Omnis facilis ratione, facere. Ex dolorum unde voluptatum nesciunt odio perspiciatis dolore, quas fugiat facere quaerat debitis accusamus quis voluptatibus blanditiis reiciendis distinctio! Officiis vero itaque dolores sint. Consequuntur, nostrum?
    </p>
    </article>
</section>`

let pricingCards = `
<div class="background">
  <div class="container">
    <div class="panel pricing-table">
      <div class="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
        <h2 class="pricing-header">admit one</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Custom domains</li>
          <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span class="pricing-price">$200</span>
        <a href="#/" class="pricing-button">Buy</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img">
        <h2 class="pricing-header">vip/luxury</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Never sleeps</li>
          <li class="pricing-features-item">Multiple workers for more</li>
        </ul>
        <span class="pricing-price">$800</span>
        <a href="#/" class="pricing-button is-featured">Buy</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
        <h2 class="pricing-header">reserved</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Dedicated</li>
          <li class="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span class="pricing-price">$500</span>
        <a href="#/" class="pricing-button">Buy</a>
      </div>
    </div>
  </div>
</div>`

const footer = `
<footer>
  <div class="container">
    <div class="row">
      <h4>newsletter</h4>
      <h1>Dale likes to send you emails</h1><form>
      <form>
        <div class="group">      
          <input type="text" required>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
          
        <div class="group">      
          <input type="text" required>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
      </form>
      <button>signin</button>
    </div>
    <hr />
    <div class="row">
      <h4>One Museum two locations</h4>
      <div class="location">
        <div class="col">
          <img src="img/museum-icon.svg" alt="" />
          <h2 style="text-align: center;">HOF</h2>
          <h4 style="text-align: center;">Groot Heiligland 62 2011 ES Haarlem</h4>
          <a href="">Open Hours</a>
        </div>
        <div class="col">
          <img src="img/museum-icon.svg" alt="">
          <h2>HAL</h2>
          <h4>Groot Heiligland 62 2011 ES Haarlem</h4>
          <a href="">Open Hours</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="social-links">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>
    <div class="footer-nav">
      <a href="">Terms</a>
      <a href="">About us</a>
      <a href="">FAQ</a>
      <a href="">Contact</a>
      <a href="">Colophon</a>
      <a href="">Curators</a>
    </div>
    <div>
      <img src="img/bankgiroloterij.png" alt="" style="position: relative; height: 90px"/>
    </div>
  </div>
</footer>
`

document.body.innerHTML += landingArc + arcTwo + homeArcs + pricingCards + footer

