import { card } from './exhibitionsCards.js'
// import cards from './cards.json' assert { type: 'json'}

function loadData(data) {
  return fetch(`./${data}.json`)
    .then(r => r.json())
      .then(d => console.log(d))
} 

loadData(cards)
// loadData('cards').then(d => console.log(d))

let getCards = cards.map(c => card(c.month, c.day, c.year, c.artist, c.title, c.description, c.btnLabel)).join('')

export const exhibitionsSection = `
<section id="exhibition-arc">
  <h1 id="heading">exhibitions</h1>
  <div class="row">
  ${getCards}
  </div>
</section>
`