import { loader } from './functions/loader.js'
import { slideAnim } from './functions/slideAnim.js'
import { openImg } from './functions/openImg.js'
import { readMore } from './includes/pages/home/landing section/readMoreBtn.js'
import { navClicks } from './includes/navMenu/navClicks.js'
import { navKeys } from './includes/navMenu/navKeys.js'
import { navLinks } from './includes/navMenu/navLinks.js'
import { transitionCircle } from './functions/transitionCircle.js'
import { gallerySlide } from './includes/pages/gallery/gallerySlide.js'
import { countdown } from './includes/pages/events/countdown.js';

window.onload = () => {
  navKeys() // Allows to navigate pages through keyboard arrow keys(left and right)
  // setTimeout(readMore, 6000) // Delays the click so it doesn't conflict the animation
  readMore()
  gallerySlide()
  openImg()
  navClicks()
  navLinks()
  transitionCircle() // Toggles(open and close) the clipped pages inside a circle.
  countdown()
  setInterval(countdown, 1000)  // Countdown for the event page
}
// window.addEventListener('scroll', slideAnim)

