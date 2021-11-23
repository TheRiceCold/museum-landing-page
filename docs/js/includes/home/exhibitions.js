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
            <span class="day">12</span>
            <span class="month">Aug</span>
            <span class="year">2016</span>
          </div>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">Jane Doe</span>
            <h1 class="title"><a href="#">Example: The God of Power</a></h1>
            <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
            <a href="#" class="button">Read more</a>
          </div>
        </div>
      </div>
    </div>`
  for (let i = 0; i < (number - 2); i++) card += card
  return card
}