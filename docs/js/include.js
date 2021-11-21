import {landingSection} from './pages/home/landing.js'
import {infoSection} from './pages/home/info.js'
import {aboutSection} from './pages/home/about.js'
import {visitSection} from './pages/home/visit.js'
import { footerSection } from './pages/home/footer.js'
import { navButton } from './components/nav/nav.js'

const includeHTML = (...args) => document.body.innerHTML += args
includeHTML(
  landingSection,
  infoSection,
  aboutSection,
  visitSection,
  footerSection,
  navButton
)