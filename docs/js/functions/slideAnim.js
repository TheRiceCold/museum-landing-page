export function slideAnim() {
  document.querySelectorAll('.slide-section')
    .forEach(e => {
      if (e.getBoundingClientRect().top < window.innerHeight / 1.3) 
        e.classList.add('faded-in')  
    }
  )
}
