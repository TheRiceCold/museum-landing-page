import { landingSection } from './includes/home/landing.js'
import { infoSection } from './includes/home/info.js'
import { aboutSection } from './includes/home/about.js'
import { visitSection } from './includes/home/visit.js'
import { footerSection } from './includes/home/footer.js'
import { navButton } from './components/nav/nav.js'
import { eventPage } from './includes/events/eventsPage.js'

const includeHTML = (...args) => document.body.innerHTML += args.join('')

includeHTML(
  eventPage,
  landingSection,
  aboutSection,
  visitSection,
  footerSection,
  navButton
)