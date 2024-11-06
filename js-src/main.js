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
const playerVideo = document.querySelector('.player-video');

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

if (about) {
  const cnt = about.querySelector('.about__container');

  window.addEventListener('scroll', ev => {
      
    cnt.style.transform = `translateY(${parallax(about, 0.06)}px)`;
  })
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
    imgLoop.classList.remove('--active');
    document.body.classList.remove('no-scroll');
  })
});

if (reviews) {
  const slider = reviews.querySelector('.reviews__slider .swiper');
  const fiers = reviews.querySelector('.swiper-slide.rel .fiers');  

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 15,

    navigation: {
      nextEl: '.reviews__slider .swiper-button-next',
      prevEl: '.reviews__slider .swiper-button-prev',
    }
  });

  window.addEventListener('scroll', () => {
    fiers.style.translate = `0 ${parallax(reviews)}px`;
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

reviewPhotos.forEach(review => {
  /**
   * @type {HTMLVideoElement}
   */
  const video = review.querySelector('video');
  const btn = review.querySelector('button');
  const playerVideoElem = playerVideo.querySelector('video');
  

  reviews.addEventListener('mousemove', (ev) => {
    if (ev.composedPath().includes(review)) {
      video.play();
    } else {
      video.pause();
    }
  });

  reviews.addEventListener('touchmove', (ev) => {
    if (ev.composedPath().includes(review)) {
      review.classList.add('--hover');
    } else {
      review.classList.remove('--hover');
    }
  });

  btn.addEventListener('click', () => {
    playerVideo.classList.add('--opened');
    document.body.classList.add('no-scroll');
    playerVideoElem.play();
  });

  playerVideo.addEventListener('click', (ev) => {
    const videoJs = playerVideo.querySelector('.video-js');
    if (!ev.composedPath().includes(videoJs)) {
      playerVideo.classList.remove('--opened');
      document.body.classList.remove('no-scroll');
      playerVideoElem.pause();
    }
  })
})

if (services) {
  const items = services.querySelectorAll('.services__item');
  
  items.forEach((item, index) => {
    const title = item.querySelector('.services__item-title');
    const icon = item.querySelector('.services__item-icon');
    
    let num = index < 10 ? `0${index+1}`  : `${index+1}`;
    title.innerHTML = `<b>${num}</b>${title.innerHTML}`;

    const iconPos = () => {
      if (icon && window.innerWidth > 640) {
        const ICON_HEIGHT = 500;
        let viewRect = services.getBoundingClientRect();
        let iconRect = icon.getBoundingClientRect();
        
        if (viewRect.top <= window.innerHeight) {
          icon.style.top = `${viewRect.top + 150}px`;
        }
        if (viewRect.top <= 0) {
          icon.style.top = `${150}px`;
        }
        if (viewRect.bottom <= 800) {
          icon.style.top = `${viewRect.bottom - 650}px`;
        }
      }
    }
    iconPos();
    window.addEventListener('scroll', iconPos);
    window.addEventListener('resize', iconPos);
    
    services.addEventListener('touchmove', ev => {
      if (ev.composedPath().includes(item)) {
        item.classList.add('--hover');
      } else {
        item.classList.remove('--hover');
      }
    })
  });
}

if (cases) {
  const aim = cases.querySelector('.aim-icon');
  const bgText = cases.querySelector('.cases__bg-text');
  const items = cases.querySelectorAll('.case-short');

  const bgTextPos = () => {
    let viewRect = cases.getBoundingClientRect();
    let elem = bgText.getBoundingClientRect();

    if (
      viewRect.top >= window.innerHeight ||
      viewRect.bottom <= 0
    ) {
      bgText.style.display = `none`;
    } else {
      bgText.style.display = `block`;
    }
    
    if (viewRect.top <= window.innerHeight) {
      bgText.style.top = `${viewRect.top + 150}px`;
    }
    if (viewRect.top <= 0) {
      bgText.style.top = `${150}px`;
    }
    if (viewRect.bottom <= 800) {
      bgText.style.top = `${viewRect.bottom - 650}px`;
    }
  }
  bgTextPos();
  window.addEventListener('scroll', bgTextPos);

  cases.addEventListener('mousemove', ev => {
    aim.style.left = ev.clientX+ 'px';
    aim.style.top = ev.clientY+ 'px';
    aim.classList.add('--hover');
  });
  cases.addEventListener('mouseleave', () => {
    aim.classList.remove('--hover');
  });
  
  items.forEach((item, index) => {

    window.addEventListener('scroll', ev => {
      if (window.innerWidth > 1200) {
        item.style.transform = `translateY(${parallax(cases)}px)`;
      }
    });

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