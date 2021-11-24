const imgSrc = 'img/history-image.png'
const description = 'Lorem ipsum dolor consectetur adipisicing elit. Dolores odio voluptates quae veritatis a nihil molestiae quibusdam voluptatibus, eveniet recusandae mollitia maiores incidunt ipsum in aperiam. A cum fugiat corporis ratione dicta fugit, laborum harum, minima obcaecati quod facilis? Sint eius similique exercitationem tempora inventore libero possimus, veritatis reiciendis!'
const title = 'History'
const btnLabel = 'Show Me More'

export let historySection = `
<section id="history-arc">
  <div class="container">
    <img src="${imgSrc}" alt="" />
    <div class="headings">
      <h1>${title}</h1>
      <p>${description}</p>
      <a href="#exhibition-arc">${btnLabel}</a>
    </div>
  </div>
</section>`