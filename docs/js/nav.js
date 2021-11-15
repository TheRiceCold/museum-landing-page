export function nav() {
  const home = document.getElementById('home');
  const nav = document.getElementById('nav');
  document.addEventListener('scroll', 
    () => nav.style.background = (window.scrollY >= (home.offsetHeight + 100)) ? 'transparent' : 'transparent'); 
  }