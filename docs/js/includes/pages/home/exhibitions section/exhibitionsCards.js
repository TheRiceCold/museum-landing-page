export const card = (month, day, year, artist, title, description, btnLabel) =>
`<div class="card">
  <div class="wrapper" >
    <div class="header">
      ${cardDate(month, day, year)}      
    </div>
    <div class="data">
      ${cardContent(artist, title, description, btnLabel)}
    </div>
  </div>
</div>`

const cardDate = (month, day, year) =>
`<div class="date">
  <span class="month">${month}</span>
  <span class="day">${day}</span>
  <span class="year">${year}</span>
</div>`

const cardContent = (artist, title, description, btnLabel) =>
`<div class="content">
  <span class="author">${artist}</span>
  <h1 class="title"><a href="#">${title}</a></h1>
  <p class="text">${description}</p>
  <a href="#" class="button">${btnLabel}</a>
</div>`