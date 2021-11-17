import {loader} from './loader.js'
import {readMore} from './readMore.js'
import {smallMenu} from './smallMenu.js'

document.querySelector('.more-button')
      .addEventListener('click', () => 
        document.querySelector('.list-container').classList.toggle('active'));

smallMenu();
readMore();
