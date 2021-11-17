export function smallMenu() {
  const heading3 = document.getElementById('read-more');
  const menu = document.getElementById('smallmenu')
  document.addEventListener('scroll', () =>
    menu.style.opacity = (heading3.getBoundingClientRect().top < window.innerHeight / 1.3) ? 1 : 0)
    // e.getBoundingClientRect().top < window.innerHeight / 1.3
}
