import { homePage } from './includes/pages/home/homePage.js'
import { eventPage } from './includes/pages/events/eventsPage.js'
import { galleryPage } from './includes/pages/gallery/galleryPage.js'
import { navButton } from './includes/navMenu/nav.js'

// function that accepts array of arguments(parameters), parse it to string and remove separators(,) 
const includeHTML = (...args) => document.body.innerHTML += args.join('') 

// include html string here!
includeHTML(
  homePage,
  galleryPage,
  eventPage,
  navButton
)
