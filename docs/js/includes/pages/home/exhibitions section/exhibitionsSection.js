import { card } from './exhibitionsCards.js'
// import cards from './cards.json' assert { type: 'json'}
import {cards} from './cards.js'

// function loadCards(data) {
//   return fetch(`./${data}.json`)
//     .then(r => r.json())
// } 

// console.log(loadCards('cards'))

let request = new XMLHttpRequest()
const url = 'https://raw.githubusercontent.com/Dalewaltergh/Activity5-product-landing-page/main/docs/json/cards.json'
request.open('GET', url) 
request.onload = () => {
  let data = JSON.parse(request.responseText)
  console.log(data)
}
request.send()

let getCards = cards.map(c => card(c.month, c.day, c.year, c.artist, c.title, c.description, c.btnLabel)).join('')

export const exhibitionsSection = `
<section id="exhibition-arc">
  <h1 id="heading">exhibitions</h1>
  <div class="row">
    ${getCards}
  </div>
</section>
`