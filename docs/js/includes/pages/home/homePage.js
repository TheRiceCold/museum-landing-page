import { landingSection } from './landing section/landingSection.js'
import { historySection } from './history section/historySection.js'
import { exhibitionsSection } from './exhibitions section/exhibitionsSection.js'
import { visitSection } from './schedule section/scheduleSection.js'
import { footerSection } from './footer section/footerSection.js'

export let homePage = 
  ''.concat(
  '<main class="transition-circle active" id="home-page" >',
    landingSection,
    historySection,
    exhibitionsSection,
    visitSection,
    footerSection,
  '</main>'
    )