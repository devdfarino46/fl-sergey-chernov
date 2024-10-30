const header = document.querySelector('.header');
const menu = document.querySelector('.menu');

if (header && menu) {
  const menuBtn = document.querySelector('.header__menu-btn');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('--active');
    menuBtn.classList.toggle('--active');
  })
}