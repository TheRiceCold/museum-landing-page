let landingPage = `
<div id="landing">
  <div class="container-inner">
    <div class="main-content">
      <div class="main-headings" id="main-headings-js">
        <div>
          <h3>Decouvrez</h3>
          <h3>la Jeune,</h3>
          <h1>Beaute</h1>
        </div>
        <input type="checkbox" id="read-more" onclick="change()"/>
        <label for="read-more">Read More</label>
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
</div>`;

document.querySelector('body').innerHTML += landingPage;