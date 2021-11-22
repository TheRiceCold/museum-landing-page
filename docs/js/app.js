import { loader } from './functions/loader.js'
import { slideAnim } from './functions/slideAnim.js'
import { openImg } from './functions/openImg.js'
import { readMore } from './includes/home/readMoreBtn.js'
import { navClicks } from './includes/nav/navClicks.js'
import { navKeys } from './includes/nav/navKeys.js'
import { navLinks } from './includes/nav/navLinks.js'
import { transitionCircle } from './functions/transitionCircle.js'
import { gallerySlide } from './includes/gallery/gallerySlide.js'

window.onload = () => {
  navKeys()
  setTimeout(() => readMore(), 
  // 6000
  )
  gallerySlide()
  openImg()
  navClicks()
  navLinks()
  transitionCircle()
}
window.addEventListener('scroll', slideAnim)

