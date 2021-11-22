import { landingSection } from './includes/home/landing.js'
import { aboutSection } from './includes/home/about.js'
import { visitSection } from './includes/home/visit.js'
import { footerSection } from './includes/home/footer.js'
import { navButton } from './includes/nav/nav.js'
import { eventPage } from './includes/events/eventsPage.js'
import { galleryPage } from './includes/gallery/galleryPage.js'
import { historySection } from './includes/home/history.js'

const includeHTML = (...args) => document.body.innerHTML += args.join('')

includeHTML(
  landingSection,
  historySection,
  visitSection,
  footerSection,
  galleryPage,
  eventPage,
  navButton
)