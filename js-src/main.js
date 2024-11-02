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
const services = document.querySelector('.services');
const about = document.querySelector('.about');
const reviewPhotos = document.querySelectorAll('.review-photo');

if (header && menu) {
  const menuBtn = header.querySelector('.header__menu-btn');
  const nav = menu.querySelector('.nav');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('--active');
    menuBtn.classList.toggle('--active');
    header.classList.toggle('--active');
  });

  const itemRel = nav.querySelectorAll('.nav__item.rel');
  
  itemRel.forEach(item => {
    const link = item.querySelector('.nav__item.rel>a');
    link.addEventListener('click', (e) => {
      item.classList.toggle('--active');
    });
  });
}

if (hero) {
  const servicesWrap = hero.querySelector('.hero__services-wrap');
  const services = hero.querySelector('.hero__services');
  const circles = hero.querySelector('.hero__circles');
  

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

  const top = hero.getBoundingClientRect().top;

  window.addEventListener('scroll', ev => {
    if (
      hero.getBoundingClientRect().bottom > 0 &&
      hero.getBoundingClientRect().top < window.innerHeight
    ) {
      const move = hero.getBoundingClientRect().top - top;
      circles.style.transform = `translateY(${move * -0.1}px)`;
    }
  });
}

if (about) {
  // const bg = 
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

reviewPhotos.forEach((reviewPhoto, index) => {
  /**
   * @type {HTMLVideoElement}
   */
  const video = reviewPhoto.querySelector('.review-photo>video');

  reviewPhoto.addEventListener('mousemove', () => {
    video.play();
  });

  reviewPhoto.addEventListener('mouseleave', () => {
    video.currentTime = 0;
    video.pause();
  });
  
  document.addEventListener('touchmove', (ev) => {
    if (ev.composedPath().includes(reviewPhoto)) {
      video.play();
    } else {
      video.currentTime = 0;
      video.pause();
    }
  })
});

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
    imgLoop.classList.remove('--active');
    document.body.classList.remove('no-scroll');
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
  });
  const slideRel = reviews.querySelector('.swiper-slide.rel');
  const fiers = slideRel.querySelector('.fiers');
  const slideRelLeft = slideRel.getBoundingClientRect().left;
  let slideRelTranslate = 0;
  const moveFiers = () => {
    const slideRelMove = slideRel.getBoundingClientRect().left - slideRelLeft;
    slideRelTranslate = slideRelMove * 0.1;

    if (Math.abs(slideRelTranslate) <= 70) {
      fiers.style.transform = `translateX(${slideRelTranslate}px)`;
    }
  }
  slider.on('sliderMove', () => {moveFiers(); fiers.style.transition = 'none'});
  slider.on('setTransition', () => {moveFiers(); fiers.style.transition = '.5s linear'});
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

if (services) {
  const items = services.querySelectorAll('.services__item');
  items.forEach((item, index) => {
    const title = item.querySelector('.services__item-title');
    const btn = item.querySelector('.services__item-btn');
    if (index < 10) {
      title.innerHTML = `<b>0${index + 1}</b> ${title.innerHTML}`;
    } else {
      title.innerHTML = `<b>${index + 1}</b> ${title.innerHTML}`;
    }

    item.addEventListener('touchmove', () => {
      btn.style.display = 'flex';
    });
    document.addEventListener('touchstart', (ev) => {
      if (!ev.composedPath().includes(item)) {
        btn.style.display = 'none';
      }
    })
  });

  services.addEventListener('mousemove', ev => {
    if (window.innerWidth > 640) {
      items.forEach(item => {
        const icon = item.querySelector('._icon');
        icon.style.left = ev.clientX+ 'px';
        icon.style.top = ev.clientY+ 'px';
      })
    }
  })
}