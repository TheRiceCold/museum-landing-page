export let exhibitionsSection = `
<section id="exhibition-arc">
  <h1 id="heading">exhibitions</h1>
  <div class="row">
    ${cards(4)}
  </div>
</section>
`

function cards(number) {
  let card = `
  <div class="card">
      <div class="wrapper" >
        <div class="header">
          <div class="date">
          <span class="month">Nov</span>
            <span class="day">12</span>
            <span class="year">2021</span>
          </div>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">Dale Walter</span>
            <h1 class="title"><a href="#">Example: The God of Power</a></h1>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed blanditiis ratione minus dolorum nam eos </p>
            <a href="#" class="button">Read more</a>
          </div>
        </div>
      </div>
    </div>`
  for (let i = 0; i < (number - 2); i++) card += card
  return card
}