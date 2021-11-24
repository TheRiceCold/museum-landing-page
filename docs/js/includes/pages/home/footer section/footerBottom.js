import { footerNav } from "./footerNav.js"

export const footerBottom = () =>
`<div class="footer-bottom">
  <div class="social-links">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
  </div>
  ${footerNav()}
  <div>
    <img src="img/bankgiroloterij.png" alt=""/>
  </div>
</div>`