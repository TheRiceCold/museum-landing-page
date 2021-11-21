export function readMore() {
  const expandInfo = document.getElementById('more-info-js')
  const mainHeadings = document.getElementById('main-headings-js')
  let open = false;
  document.getElementById('read-more')
    .addEventListener('click', () => {
      open = !open
      mainHeadings.style.transform = open ? 'scale(0.7)' : 'scale(1)'
      expandInfo.style.height = open ? '150px' : '0'
  })
}