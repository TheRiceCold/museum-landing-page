import {loader} from './loader.js'
import {smallMenu} from './smallMenu.js'
import {slideAnim} from './slideAnim.js'
import {openImg} from './openImg.js'

document.querySelector('.more-button')
  .addEventListener('click', () => 
    document.querySelector('.list-container').classList.toggle('active'))
    
smallMenu()
slideAnim()
openImg()
