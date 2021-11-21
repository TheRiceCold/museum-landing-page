import { loader } from './functions/loader.js'
import { slideAnim } from './functions/slideAnim.js'
import { openImg } from './functions/openImg.js'
import { readMore } from './functions/readMoreBtn.js'
import { navClicks } from './functions/navClicks.js'
import { navKeys } from './functions/navKeys.js'
import { navLinks } from './functions/navLinks.js'

window.onload = () => {
  navKeys()
  setTimeout(() => readMore(), 6000)
  openImg()
  navClicks()
  navLinks()
}
window.addEventListener('scroll', slideAnim)

