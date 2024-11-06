const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const heroMain = document.querySelector('.hero.hero-main');
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
const cases = document.querySelector('.cases');
const carouselServices = document.querySelector('.carousel-services');

const parallax = (view, move = 0.1) => {
  let rect = view.getBoundingClientRect();
  let yCenter = rect.y + rect.height / 2;
  let yScroll = window.innerHeight / 2;
  
  return (yCenter - yScroll) * move;
}

if (header) {
  const menuBtn = header.querySelector('.header__menu-btn');

  menuBtn.addEventListener('click', () => {
    header.classList.toggle('--active');
    document.body.classList.toggle('no-scroll');
  });

  const scrollEffect = () => {
    if (window.scrollY > 10) {
      header.classList.add('--scroll');
    } else {
      header.classList.remove('--scroll');
    }
  }

  scrollEffect();
  window.addEventListener('scroll', scrollEffect);

  const navItemsRel = header.querySelectorAll('.header .nav__item.rel');

  navItemsRel.forEach((item) => {
    item.addEventListener('click', ev => {
      item.classList.toggle('--active');
    });
  })
}

if (heroMain) {
  const circles = heroMain.querySelector('.hero__image>img');

  window.addEventListener('scroll', ev => {
    if (circles) {
      circles.style.transform = `translateY(${parallax(circles)}px)`;
    }
  });
}

if (carouselServices) {
  const list = heroMain.querySelector('.carousel-services__list');

  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  setInterval(() => {
    carouselServices.scrollBy({ left: 1 });
    if (carouselServices.children[1].getBoundingClientRect().left <= 0) {
      carouselServices.scroll({ left: 0 });
    }
  }, 8);
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
  const slider = reviews.querySelector('.reviews__slider .swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 15,

    navigation: {
      nextEl: '.reviews__slider .swiper-button-next',
      prevEl: '.reviews__slider .swiper-button-prev',
    }
  });
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
}

if (cases) {
  const aim = cases.querySelector('.aim-icon');
  const bgText = cases.querySelector('.cases__bg-text');
  const items = cases.querySelectorAll('.case-short');

  cases.addEventListener('mousemove', ev => {
    aim.style.left = ev.clientX+ 'px';
    aim.style.top = ev.clientY+ 'px';
    aim.classList.add('--hover');
  });
  cases.addEventListener('mouseleave', () => {
    aim.classList.remove('--hover');
  });
  
  items.forEach((item, index) => {
    item.addEventListener('mouseenter', ev => {
      aim.classList.add('--in-item');
    });
    item.addEventListener('mouseleave', ev => {
      aim.classList.remove('--in-item');
    });

    item.addEventListener('click', ev => {
      const href = item.getAttribute('href');

      const popup = document.querySelector(href);
      const closePopupBtn = popup.querySelector('.case-popup__close-btn');

      popup.classList.add('--active');
      document.body.classList.add('no-scroll');

      closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('--active');
        document.body.classList.remove('no-scroll');
      })
    })
  })
}