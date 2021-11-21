export function navKeys() {
  window.addEventListener('keydown', e => {
    switch(e.key) {
      case 'ArrowLeft': 
        console.log('Left')
        break
      case 'ArrowRight': 
        console.log('Right')
        break
      case 'ArrowUp':
        console.log('Up')
        break
      case 'ArrowDown':
        console.log('Down')
        break
    }
  })
}