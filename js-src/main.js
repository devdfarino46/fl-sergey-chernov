const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');
const faq = document.querySelector('.faq');
const itemFaqs = document.querySelectorAll('.item-faq');
const imgLoop = document.querySelector('.img-loop');
const imgLinks = document.querySelectorAll('.img-link');
const aboutVideo = document.querySelector('.about-video');
const reviewItems = document.querySelectorAll('.review');
const reviews = document.querySelector('.reviews');

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

if (faq) {
  itemFaqs.forEach((itemFaq, index) => {
    const btn = itemFaq.querySelector('.item-faq__button');
    
    btn.addEventListener('click', () => {
      itemFaqs.forEach((itemFaq1, index1) => {
        if (index !== index1) {
          itemFaq1.classList.remove('--active');
        }
      });

      itemFaq.classList.toggle('--active');
    });
  });
}

if (aboutVideo) {
  const btn = aboutVideo.querySelector('.about-video>button');
  btn.addEventListener('click', () => {
    aboutVideo.classList.add('--active');
  });
}

imgLinks.forEach( imgLink => {
  const img = imgLoop.querySelector('.img-loop img');
  const imgSmall = imgLink.querySelector('.img-link img');
  imgLink.addEventListener('click', () => {
    img.setAttribute('src', imgSmall.getAttribute('data-src'));
    imgLoop.classList.add('--active');
    document.body.classList.add('no-scroll');
  });

  imgLoop.addEventListener('click', (ev) => {
    if (ev.target !== img) {
      imgLoop.classList.remove('--active');
      document.body.classList.remove('no-scroll');
    }
  })
});

if (reviews) {
  const slider = new Swiper('.reviews__slider .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,

    navigation: {
      nextEl: '.reviews__slider .swiper-button-next',
      prevEl: '.reviews__slider .swiper-button-prev',
    }
  })
}

reviewItems.forEach(review => {
  const text = review.querySelector('.review__text');
  const fullBtn = review.querySelector('.review__full-btn');

  if (text.scrollHeight <= text.clientHeight) {
    fullBtn.setAttribute('disabled', '');
  }
  
  fullBtn.addEventListener('click', () => {
    text.classList.add('--full');
    fullBtn.setAttribute('disabled', '');
    review.style.maxHeight = 'none';
  })
});