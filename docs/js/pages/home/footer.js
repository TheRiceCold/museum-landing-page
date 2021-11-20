const footerNav = [
  'Terms',
  'Abous Us',
  'FAQ',
  'Contact',
  'Colophon',
  'Curators'
]

export const footerSection = `
  <footer id="footer">
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
        <a href="">${footerNav[0]}</a>
        <a href="">${footerNav[1]}</a>
        <a href="">${footerNav[2]}</a>
        <a href="">${footerNav[3]}</a>
        <a href="">${footerNav[4]}</a>
        <a href="">${footerNav[5]}</a>
      </div>
      <div>
        <img src="img/bankgiroloterij.png" alt="" style="position: relative; height: 90px"/>
      </div>
    </div>
  </footer>
</section>
`