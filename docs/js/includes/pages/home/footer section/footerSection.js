import { signinForm } from './signinForm.js'
import { footerBottom } from './footerBottom.js'
import { locations } from './locations.js'

export const footerSection = `
<footer id="footer-arc">
  <div class="container">
    <div id="one">
      ${signinForm()}
    </div>
    <hr />
    <div id="two">
      ${locations()}
    </div>
  </div>
  ${footerBottom()}
</footer>
`