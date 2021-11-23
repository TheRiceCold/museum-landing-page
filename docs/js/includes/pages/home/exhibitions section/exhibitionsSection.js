import { card } from './exhibitionsCards.js'
import { cards } from './cards.js'

export const exhibitionsSection = `
<section id="exhibition-arc">
  <h1 id="heading">exhibitions</h1>
  <div class="row">
    ${allCards()}
  </div>
</section>
`

function allCards() {
return `
  ${card(
      cards[0].month,
      cards[0].day,
      cards[0].year,
      cards[0].author,
      cards[0].title, 
      cards[0].description, 
      cards[0].btnLabel)}
  ${card(
      cards[1].month,
      cards[1].day,
      cards[1].year,
      cards[1].author,
      cards[1].title, 
      cards[1].description, 
      cards[1].btnLabel,
    )}
  ${card(
      cards[2].month,
      cards[2].day,
      cards[2].year,
      cards[2].author,
      cards[2].title, 
      cards[2].description, 
      cards[2].btnLabel,
    )}
  ${card(
      cards[3].month,
      cards[3].day,
      cards[3].year,
      cards[3].author,
      cards[3].title, 
      cards[3].description, 
      cards[3].btnLabel,
    )}`
}

// cards.forEach(c => {
//   card(
//     c.month,
//     c.day,
//     c.year,
//     c.author,
//     c.title,
//     c.description, 
//     c.btnLabel,
//   )
// })