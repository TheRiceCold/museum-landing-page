const navDots = document.querySelectorAll('.wrapper .nav-dots div')
  navDots.forEach(i => {
    i.addEventListener('click', () => {
      i.style.background = '#fff'
      // window.scrollBy(0, 200)
    })
  })