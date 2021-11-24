import { contentRight } from "./contentRight.js"
import { contentLeft } from "./contentLeft.js"

export const visitSection = `
<section id="visit-arc">
  <h1>Visiting the Museum</h1>
  <div class="content">
    ${contentRight()}
    <h3>How do I reserve timed-entry passes?
      ${contentLeft()}
    </h3>
  </div>
</section>`

