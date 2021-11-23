export function navLinks() {
  linkSection('home')
  linkSection('history')
  linkSection('visit')
  linkSection('footer')
}

function linkSection(section) {
  document.getElementById(section+'-link')
    .addEventListener('click', () => window.location='#'+section+'-arc')
}