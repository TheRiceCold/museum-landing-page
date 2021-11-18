import {loader} from './loader.js'
import {slideAnim} from './slideAnim.js'
import {openImg} from './openImg.js'
import { readMore } from './readMore.js'

document.querySelector('.more-button')
  .addEventListener('click', () => 
    document.querySelector('.list-container').classList.toggle('active'))
    
readMore()
slideAnim()
openImg()
