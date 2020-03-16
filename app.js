const mouseCoursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCoursor.style.top = e.pageY + 'px';
  mouseCoursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCoursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCoursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});
