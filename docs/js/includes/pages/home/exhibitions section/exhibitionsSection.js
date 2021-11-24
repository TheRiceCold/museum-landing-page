import { card } from './exhibitionsCards.js'
import { cards } from './cards.js'

let getCards = cards.map(c => card(c.month, c.day, c.year, c.author, c.title, c.description, c.btnLabel)).join('')

export const exhibitionsSection = `
<section id="exhibition-arc">
  <h1 id="heading">exhibitions</h1>
  <div class="row">
  ${getCards}
  </div>
</section>
`