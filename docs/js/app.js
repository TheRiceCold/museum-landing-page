import {loader} from './components/loader.js'
import {slideAnim} from './components/slideAnim.js'
import {openImg} from './components/openImg.js'
import { readMore } from './components/readMoreBtn.js'

window.onload = () => {
  setTimeout(() => readMore(), 6000)
  slideAnim()
  openImg()

  window.addEventListener('keydown', e => {
    switch(e.key) {
      case 'ArrowLeft': 
        console.log('Left')
        break
      case 'ArrowRight': 
        console.log('Right')
        break
      case 'ArrowUp':
        console.log('Up')
        break
      case 'ArrowDown':
        console.log('Down')
        break
    }
  })

  const navDots = document.querySelectorAll('.wrapper .nav-dots div')
  navDots.forEach(i => {
    i.addEventListener('click', () => {
      i.style.background = '#fff'
      // window.scrollBy(0, 200)
    })
  })
}