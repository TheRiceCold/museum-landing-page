import { card } from './exhibitionsCards.js'
// import cards from './cards.json' assert { type: 'json'}
import {cards} from './cards.js'

// function loadCards(data) {
//   return fetch(`./${data}.json`)
//     .then(r => r.json())
// } 

// console.log(loadCards('cards'))

let getCards = cards.map(c => card(c.month, c.day, c.year, c.artist, c.title, c.description, c.btnLabel)).join('')

export const exhibitionsSection = `
<section id="exhibition-arc">
  <h1 id="heading">exhibitions</h1>
  <div class="row">
    ${getCards}
  </div>
</section>
`