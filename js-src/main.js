const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');

if (header && menu) {
  const menuBtn = header.querySelector('.header__menu-btn');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('--active');
    menuBtn.classList.toggle('--active');
    header.classList.toggle('--active');
  })
}

if (hero) {
  const servicesWrap = hero.querySelector('.hero__services-wrap');
  const services = hero.querySelector('.hero__services');
  console.log(servicesWrap.clientWidth, services.clientWidth);


  document.addEventListener('DOMContentLoaded', () => {
    if (services.children[0].getBoundingClientRect().left <= 100) {
      servicesWrap.appendChild(services.cloneNode(true));
      setInterval(() => {
        servicesWrap.scrollBy({ left: 1 });
        if (servicesWrap.children[1].getBoundingClientRect().left <= 0) {
          servicesWrap.scroll({ left: 0 });
        }
      }, 8);
    }
  });


}