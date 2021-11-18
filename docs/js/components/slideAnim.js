export function slideAnim(name, animation) {
  document.querySelectorAll(name)
    .forEach(e => {
      if (e.getBoundingClientRect().top < window.innerHeight / 1.3) 
        e.classList.add(animation)  
    }
  )
}

function scrollAnim() {
  slideAnim('.slide-section', 'faded-in')
}

document.addEventListener("DOMContentLoaded", scrollAnim)
window.addEventListener('scroll', scrollAnim)