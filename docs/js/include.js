import { landingSection } from './includes/home/landing.js'
import { infoSection } from './includes/home/info.js'
import { aboutSection } from './includes/home/about.js'
import { visitSection } from './includes/home/visit.js'
import { footerSection } from './includes/home/footer.js'
import { navButton } from './includes/nav/nav.js'
import { eventPage } from './includes/events/eventsPage.js'
import { galleryPage } from './includes/gallery/galleryPage.js'

const includeHTML = (...args) => document.body.innerHTML += args.join('')

includeHTML(
  landingSection,
  visitSection,
  footerSection,
  galleryPage,
  eventPage,
  navButton
)