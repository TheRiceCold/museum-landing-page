export function readMore() {
  document.getElementById('read-more')
  .addEventListener('click', () => {
    const moreInfo = document.querySelector('#landing .main-content .more-info')
    const mainHeadings = document.querySelector('#landing .main-content .main-headings')
    moreInfo.classList.toggle('active')
    mainHeadings.classList.toggle('active')
  })
}