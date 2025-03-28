const header = document.querySelector('.header');
const faq = document.querySelector('.faq');
const itemFaqs = document.querySelectorAll('.item-faq');
const imgLoop = document.querySelector('.img-loop');
const imgLinks = document.querySelectorAll('.img-link');
const aboutVideo = document.querySelector('.about-video');
const reviewItems = document.querySelectorAll('.review');
const reviews = document.querySelector('.reviews');
const services = document.querySelector('.services');
const reviewPhotos = document.querySelectorAll('.review-photo');
const cases = document.querySelector('.cases');
const carouselServices = document.querySelector('.carousel-services');
const playerVideo = document.querySelector('.player-video');
const casesGrid = document.querySelector('.cases-grid');
const getCxMarket = document.querySelector('.get-cx-market');
const stepsVector = document.querySelector('.steps-vector');
const hYadirect = document.querySelector('.h-yadirect');
const aboutYadirect = document.querySelector('.about-yadirect');

const parallaxes = document.querySelectorAll('.parallax');
const fixRects = document.querySelectorAll('.fix-rect');
const textCcolorAnim = document.querySelectorAll('.text-color-anim');
const mouseMoveAnim = document.querySelectorAll('.mouse-move-anim');

const clamp = (x, min, max) => {
  if ((x < min)) {
    return min;
  } else if (x > max) {
    return max;
  } else {
    return x;
  }
}

parallaxes.forEach((parent) => {
  window.addEventListener('scroll', () => {
    const elems = parent.querySelectorAll('.parallax__elem');

    let rect = parent.getBoundingClientRect();
    let yCenter = rect.y + rect.height / 2;
    let yScroll = window.innerHeight / 2;

    elems.forEach((elem) => {
      const move = Number(elem.dataset.move) || 0.1;
  
      elem.style.transform = `translateY(${(yCenter - yScroll) * move}px) `;
    });
  })
})

fixRects.forEach((parent) => {
  const func = () => {
    const elems = parent.querySelectorAll('.fix-rect__elem');

    const media = Number(parent.dataset.media) || 0;

    if (window.innerWidth > media) {
      let rect = parent.getBoundingClientRect();

      elems.forEach((elem) => {
        const height = Number(parent.dataset.height);
        const top = Number(parent.dataset.top);

        let elemRect = elem.getBoundingClientRect();

        // Hide elements that are not in the viewport
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0
        ) {
          elem.style.display = 'block';
        } else {
          elem.style.display = 'none';
        }

        // Fix elements that are not in the viewport
        if (rect.top < window.innerHeight) {
          elem.style.top = `${rect.top + top}px`;
        }
        if (rect.top <= 0) {
          elem.style.top = `${top}px`;
        }
        if (rect.bottom <= top + height) {
          elem.style.top = `${rect.bottom - height}px`;
        }
      });
    }
  }

  func();
  window.addEventListener('scroll', func);
  window.addEventListener('resize', func);
})

if (header) {
  const menuBtn = header.querySelector('.header__menu-btn');

  menuBtn.addEventListener('click', () => {
    header.classList.toggle('--active');
    document.body.classList.toggle('no-scroll');
  });

  let oldScrollY = 0;

  const scrollEffect = () => {
    let newScrollY = window.scrollY;
    if (window.scrollY > 10) {
      header.classList.add('--scroll');

      if (newScrollY > oldScrollY) {
        header.classList.add('--scroll-down');
        oldScrollY = newScrollY;
      } else {
        header.classList.remove('--scroll-down');
        oldScrollY = newScrollY;
      }
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

if (carouselServices) {
  const list = carouselServices.querySelector('.carousel-services__list');

  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
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
    
    let num = index < 10 ? `0${index+1}`  : `${index+1}`;
    title.innerHTML = `<b>${num}</b>${title.innerHTML}`;
    
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
  const items = cases.querySelectorAll('.case-short');

  // Aim position
  cases.addEventListener('mousemove', ev => {
    aim.style.left = ev.clientX+ 'px';
    aim.style.top = ev.clientY+ 'px';
    aim.classList.add('--hover');
  });
  cases.addEventListener('mouseleave', () => {
    aim.classList.remove('--hover');
  });
  
  items.forEach((item, index) => {
    // Aim scale
    item.addEventListener('mouseenter', ev => {
      aim.classList.add('--in-item');
    });
    item.addEventListener('mouseleave', ev => {
      aim.classList.remove('--in-item');
    });

    // Open popup
    item.addEventListener('click', ev => {
      const href = item.getAttribute('href');

      const popup = document.querySelector(href);
      const closePopupBtn = popup.querySelector('.case-popup__close-btn');

      popup.classList.add('--active');
      document.body.classList.add('no-scroll');

      closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('--active');
        document.body.classList.remove('no-scroll');
      });
    })
  })
}

if (casesGrid) {
  const items = casesGrid.querySelectorAll('.cases-grid__item');

  items.forEach((item, index) => {
    item.addEventListener('click', (ev) => {
      const href = item.getAttribute('href');

      const popup = document.querySelector(href);
      const closePopupBtn = popup.querySelector('.case-popup__close-btn');

      popup.classList.add('--active');
      document.body.classList.add('no-scroll');

      closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('--active');
        document.body.classList.remove('no-scroll');
      });
    })
  })
}

if (getCxMarket) {
  const fixWrap = getCxMarket.querySelector('.get-cx-market__fix-wrap');
  const items = getCxMarket.querySelectorAll('.get-cx-market__item');

  const SCROLL_SH = 250; // scroll step height
  const MOBILE = 980; // mobile breakpoint
  const ITEMS_COUNT = items.length; // items count (3)

  const scrollAnim = () => {
    if (window.innerWidth > MOBILE) {
      const rect = getCxMarket.getBoundingClientRect(); // backdrop rect
      const fRect = fixWrap.getBoundingClientRect(); // fix wrap rect
      const height = fRect.height + SCROLL_SH * ITEMS_COUNT; // height of backdrop

      getCxMarket.style.height = height + 'px';
      
      if (rect.top <= 0 && rect.bottom >= fRect.height) {
        header.classList.add('--scroll-look');
        fixWrap.classList.add('--fixed');
        fixWrap.classList.remove('--bottom');
        
        items.forEach((item, i) => {
          if (i !== 0) {
            item.style.marginTop = `${
              clamp(
                rect.top + SCROLL_SH * (items.length - 1) - i * SCROLL_SH, 
                i* SCROLL_SH - (i+1) * SCROLL_SH, 
                0)
            }px`;
          }
        });
      } else if (rect.bottom < fRect.height)  {
        header.classList.remove('--scroll-look');
        fixWrap.classList.remove('--fixed');
        fixWrap.classList.add('--bottom');
      } else {
        header.classList.remove('--scroll-look');
        fixWrap.classList.remove('--fixed');
        fixWrap.classList.remove('--bottom');
      }
    }
  }
  scrollAnim();
  window.addEventListener('scroll', scrollAnim);
}

if (stepsVector) {
  const listBackdrop = stepsVector.querySelector('.steps-vector__list-backdrop');
  const list = stepsVector.querySelector('.steps-vector__list');

  if (list && listBackdrop && window.innerWidth > 1362) {
    const rows = list.querySelectorAll('.steps-vector__l-row');

    const SCROLL_SH = 800;
        
    const scrollAnim = () => {
      const rect = list.getBoundingClientRect();
      const bRect = listBackdrop.getBoundingClientRect();
      const lrRect = rows[rows.length - 1].getBoundingClientRect();
      
      listBackdrop.style.height = `${
        SCROLL_SH * rows.length + lrRect.height
      }px`; // Init backdrop height

       // If list is in viewport
      if (bRect.top <= 0 && bRect.bottom >= lrRect.height) {
        header.classList.add('--scroll-look');
        list.dataset.pos = "fixed";
        list.style.top = null;
      // If scroll down
      } else if (bRect.bottom < lrRect.height) {
        header.classList.remove('--scroll-look');
        list.dataset.pos = null;
        list.style.transform  = `translateY(${rect.y - lrRect.y}px)`;
        list.style.top = `${
          bRect.height - rect.height - 
          (rect.y - lrRect.y)
        }px`;
      // If scroll up
      } else {
        header.classList.remove('--scroll-look');
        list.dataset.pos = null;
        list.style.transform  = `translateY(0px)`;
        list.style.top = null;
      }

      // If scroll rows
      rows.forEach((row, rIndex) => {
        const vector = row.querySelector('._vector');
        const arrow = row.querySelector('._arrow');
        const items = row.querySelectorAll('.steps-vector__item');
        
        const rowRect = row.getBoundingClientRect();
        const vectorRect = vector.getBoundingClientRect();

        // Vector scroll animation
        vector.style.width = `${
          clamp(
            (-bRect.top / SCROLL_SH) - rIndex,
            -items.length + 1,
            2
          ) * 100
        }%`;

        // Arrow scroll animation
        if (arrow) {
          arrow.style.transform = `translateX(${
            clamp(
              -bRect.top / SCROLL_SH - rIndex,
              0,
              1
            ) * 80
          }px)`;
        }
        
        // Arrow rotate animation on hover
        items.forEach((item, i) => {
          item.addEventListener('mouseenter', ev => {
            arrow.style.rotate = `20deg`;
          });
          item.addEventListener('mouseleave', ev => {
            arrow.style.rotate = `0deg`;
          })
        })
          
        // If scroll in row
        if (bRect.top <= rIndex * -SCROLL_SH &&
          bRect.top > (rIndex + 1) * -SCROLL_SH
        ) {
          // Move top position row
          list.style.transform  = `translateY(${rect.y - rowRect.y}px)`;

          items.forEach((item, iIndex) => {
            const icon = item.querySelector('img');
            const text = item.querySelector('.steps-vector__item-text');
            const itemRect = item.getBoundingClientRect();
            const iconRect = icon.getBoundingClientRect();

            // Pulse animation vector
            if (vectorRect.right >= iconRect.left && vectorRect.right <= iconRect.right) {
              vector.classList.add('--pulse');
              vector.addEventListener('transitionend', () => {
                vector.classList.remove('--pulse');
              });
            }

            // If vector > item left dot
            if (vectorRect.right > itemRect.left && vectorRect.width > 100) {
              let progress = clamp((vectorRect.right - itemRect.left) / itemRect.width , 0, 1);
              
              icon.style.transform = `rotate(${
                Math.abs(Math.sin(progress * Math.PI) * 30)
              }deg)`;

              icon.style.opacity = (80 + progress * 20) + '%';
              icon.style.filter = `blur(${(1 - progress) * 3}px)`;

              // And < right dot
              if (vectorRect.right < itemRect.right) {
                item.classList.add('--active');
              } else {
                item.classList.remove('--active');
              }
            } else {
              icon.style.transform = null;
              icon.style.opacity = null;
              icon.style.filter = null;
              item.classList.remove('--active');
            }
          })
        }
      })
    }

    window.addEventListener('load', scrollAnim);
    window.addEventListener('scroll', scrollAnim);
  }
}

mouseMoveAnim.forEach(el => {
  const move = Number(el.dataset.move) || 30;
  let startX = 0;
  let startY = 0;

  el.addEventListener('mouseenter', (ev) => {
    el.setAttribute('mouseevent', 'enter');
    startX = ev.clientX;
    startY = ev.clientY;
  })
  el.addEventListener('mousemove', (ev) => {
    el.setAttribute('mouseevent', 'move');

    const rect = el.getBoundingClientRect();
    const x = (ev.clientX - startX) / rect.width * move;
    const y = (ev.clientY - startY) / rect.height * move;

    el.style.translate = `
      ${x}px
      ${y}px
    `;
  });
  el.addEventListener('mouseleave', (ev) => {
    el.setAttribute('mouseevent','leave');
    el.style.translate = '0 0';
  });
});

textCcolorAnim.forEach(el => {
  const SCROLL_H = Number(el.dataset.scrollh) || 500;

  let words = el.textContent.split('\n').join(' ').split(' ');
  let spans = '';
  words.forEach((word, i) => {
    if (word.length > 0) {
      spans += `<span class="_word">${word}</span> `;
    }
  });
  
  el.innerHTML = spans;
  let spansArr = el.querySelectorAll('span._word');

  const textAnimation = () => {
    let spanH = SCROLL_H / spansArr.length; // (35.71)
    let rect = aboutYadirect.getBoundingClientRect();
    let top = clamp(-rect.top + SCROLL_H, 0, SCROLL_H);
    
    spansArr.forEach((span, i) => {
      span.style.transition = null;
      span.style.opacity = `${
        clamp((top - spanH * i) / spanH, 0, 1) * 0.7 + 0.3
      }`;
    });
  }
  
  window.addEventListener('load', textAnimation);
  window.addEventListener('scroll', textAnimation);
});