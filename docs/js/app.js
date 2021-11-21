import {loader} from './components/loader.js'
import {slideAnim} from './components/slideAnim.js'
import {openImg} from './components/openImg.js'
import { readMore } from './components/readMoreBtn.js'
import { navToggle } from './components/nav/navToggle.js'
import { keyboard } from './components/keyboard.js'

window.onload = () => {
  setTimeout(() => readMore(), 6000)
  slideAnim()
  openImg()
  navToggle()
  keyboard()
}