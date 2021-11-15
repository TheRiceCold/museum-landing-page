let html = '<div class="hexagon">';
let body = document.querySelector('body');
for (let i = 0; i < 6; i++) {
  html += '<div class="hexagon__group">';
  for (let i = 0; i < 6; i++) 
    html+= '<div class="hexagon__sector"></div>';
  html += '</div>'
}
body.innerHTML = html + '</div>';