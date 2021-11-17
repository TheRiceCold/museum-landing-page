export function smallMenu() {
  const body = document.querySelector('body');
  const menu = document.getElementById('smallmenu');
  document.addEventListener('scroll', () =>
    menu.style.opacity = (window.scrollY > (body.offsetHeight)) ? 0 : 1); 
}