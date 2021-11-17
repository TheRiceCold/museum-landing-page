let section2 = `
<section id="home">
  <div id="home__left">
    <img src="./img/sculp-face.png" alt="">
  </div>
  <div class="img-box">
    <img src="img/top.png" alt="">
    <img src="img/mid.png" alt="">
    <img src="img/bot.png" alt="">
  </div>
  <div id="home__right" >
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
  <div id="smallmenu">
    <div class="list-container">
      <button class="more-button">
        <div class="menu-icon-wrapper">
          <div class="menu-icon-line half first"></div>
          <div class="menu-icon-line"></div>
          <div class="menu-icon-line half last"></div>
        </div>
      </button>
      <ul class="more-button-list">
        <li class="more-button-list-item"><span>Says</span></li>
        <li class="more-button-list-item"><span>About</span></li>
        <li class="more-button-list-item"><span>Proverbs</span></li>
        <li class="more-button-list-item"><span>Poem</span></li>
      </d>
    </div>
  </div>
</section>`;
document.querySelector('body').innerHTML += section2;