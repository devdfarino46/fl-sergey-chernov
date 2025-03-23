"use strict";

var header = document.querySelector('.header');
var faq = document.querySelector('.faq');
var itemFaqs = document.querySelectorAll('.item-faq');
var imgLoop = document.querySelector('.img-loop');
var imgLinks = document.querySelectorAll('.img-link');
var aboutVideo = document.querySelector('.about-video');
var reviewItems = document.querySelectorAll('.review');
var reviews = document.querySelector('.reviews');
var services = document.querySelector('.services');
var reviewPhotos = document.querySelectorAll('.review-photo');
var cases = document.querySelector('.cases');
var carouselServices = document.querySelector('.carousel-services');
var playerVideo = document.querySelector('.player-video');
var casesGrid = document.querySelector('.cases-grid');
var getCxMarket = document.querySelector('.get-cx-market');
var stepsVector = document.querySelector('.steps-vector');
var hYadirect = document.querySelector('.h-yadirect');
var aboutYadirect = document.querySelector('.about-yadirect');
var parallaxes = document.querySelectorAll('.parallax');
var fixRects = document.querySelectorAll('.fix-rect');
var textCcolorAnim = document.querySelectorAll('.text-color-anim');
var mouseMoveAnim = document.querySelectorAll('.mouse-move-anim');
var clamp = function clamp(x, min, max) {
  if (x < min) {
    return min;
  } else if (x > max) {
    return max;
  } else {
    return x;
  }
};
parallaxes.forEach(function (parent) {
  window.addEventListener('scroll', function () {
    var elems = parent.querySelectorAll('.parallax__elem');
    var rect = parent.getBoundingClientRect();
    var yCenter = rect.y + rect.height / 2;
    var yScroll = window.innerHeight / 2;
    elems.forEach(function (elem) {
      var move = Number(elem.dataset.move) || 0.1;
      elem.style.transform = "translateY(".concat((yCenter - yScroll) * move, "px) ");
    });
  });
});
fixRects.forEach(function (parent) {
  var func = function func() {
    var elems = parent.querySelectorAll('.fix-rect__elem');
    var media = Number(parent.dataset.media) || 0;
    if (window.innerWidth > media) {
      var rect = parent.getBoundingClientRect();
      elems.forEach(function (elem) {
        var height = Number(parent.dataset.height);
        var top = Number(parent.dataset.top);
        var elemRect = elem.getBoundingClientRect();

        // Hide elements that are not in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          elem.style.display = 'block';
        } else {
          elem.style.display = 'none';
        }

        // Fix elements that are not in the viewport
        if (rect.top < window.innerHeight) {
          elem.style.top = "".concat(rect.top + top, "px");
        }
        if (rect.top <= 0) {
          elem.style.top = "".concat(top, "px");
        }
        if (rect.bottom <= top + height) {
          elem.style.top = "".concat(rect.bottom - height, "px");
        }
      });
    }
  };
  func();
  window.addEventListener('scroll', func);
  window.addEventListener('resize', func);
});
if (header) {
  var menuBtn = header.querySelector('.header__menu-btn');
  menuBtn.addEventListener('click', function () {
    header.classList.toggle('--active');
    document.body.classList.toggle('no-scroll');
  });
  var oldScrollY = 0;
  var scrollEffect = function scrollEffect() {
    var newScrollY = window.scrollY;
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
  };
  scrollEffect();
  window.addEventListener('scroll', scrollEffect);
  var navItemsRel = header.querySelectorAll('.header .nav__item.rel');
  navItemsRel.forEach(function (item) {
    item.addEventListener('click', function (ev) {
      item.classList.toggle('--active');
    });
  });
}
if (carouselServices) {
  var list = carouselServices.querySelector('.carousel-services__list');
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  carouselServices.appendChild(list.cloneNode(true));
  setInterval(function () {
    carouselServices.scrollBy({
      left: 1
    });
    if (carouselServices.children[1].getBoundingClientRect().left <= 0) {
      carouselServices.scroll({
        left: 0
      });
    }
  }, 8);
}
if (faq) {
  itemFaqs.forEach(function (itemFaq, index) {
    var btn = itemFaq.querySelector('.item-faq__button');
    btn.addEventListener('click', function () {
      itemFaqs.forEach(function (itemFaq1, index1) {
        if (index !== index1) {
          itemFaq1.classList.remove('--active');
        }
      });
      itemFaq.classList.toggle('--active');
    });
  });
}
if (aboutVideo) {
  var btn = aboutVideo.querySelector('.about-video>button');
  btn.addEventListener('click', function () {
    aboutVideo.classList.add('--active');
  });
}
imgLinks.forEach(function (imgLink) {
  var img = imgLoop.querySelector('.img-loop img');
  var imgSmall = imgLink.querySelector('.img-link img');
  imgLink.addEventListener('click', function () {
    img.setAttribute('src', imgSmall.getAttribute('data-src'));
    imgLoop.classList.add('--active');
    document.body.classList.add('no-scroll');
  });
  imgLoop.addEventListener('click', function (ev) {
    imgLoop.classList.remove('--active');
    document.body.classList.remove('no-scroll');
  });
});
if (reviews) {
  var slider = reviews.querySelector('.reviews__slider .swiper');
  var fiers = reviews.querySelector('.swiper-slide.rel .fiers');
  var swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
      nextEl: '.reviews__slider .swiper-button-next',
      prevEl: '.reviews__slider .swiper-button-prev'
    }
  });
}
reviewItems.forEach(function (review) {
  var text = review.querySelector('.review__text');
  var fullBtn = review.querySelector('.review__full-btn');
  if (text.scrollHeight <= text.clientHeight) {
    fullBtn.setAttribute('disabled', '');
  }
  fullBtn.addEventListener('click', function () {
    text.classList.add('--full');
    fullBtn.setAttribute('disabled', '');
    review.style.maxHeight = 'none';
  });
});
reviewPhotos.forEach(function (review) {
  /**
   * @type {HTMLVideoElement}
   */
  var video = review.querySelector('video');
  var btn = review.querySelector('button');
  var playerVideoElem = playerVideo.querySelector('video');
  reviews.addEventListener('mousemove', function (ev) {
    if (ev.composedPath().includes(review)) {
      video.play();
    } else {
      video.pause();
    }
  });
  reviews.addEventListener('touchmove', function (ev) {
    if (ev.composedPath().includes(review)) {
      review.classList.add('--hover');
    } else {
      review.classList.remove('--hover');
    }
  });
  btn.addEventListener('click', function () {
    playerVideo.classList.add('--opened');
    document.body.classList.add('no-scroll');
    playerVideoElem.play();
  });
  playerVideo.addEventListener('click', function (ev) {
    var videoJs = playerVideo.querySelector('.video-js');
    if (!ev.composedPath().includes(videoJs)) {
      playerVideo.classList.remove('--opened');
      document.body.classList.remove('no-scroll');
      playerVideoElem.pause();
    }
  });
});
if (services) {
  var items = services.querySelectorAll('.services__item');
  items.forEach(function (item, index) {
    var title = item.querySelector('.services__item-title');
    var num = index < 10 ? "0".concat(index + 1) : "".concat(index + 1);
    title.innerHTML = "<b>".concat(num, "</b>").concat(title.innerHTML);
    services.addEventListener('touchmove', function (ev) {
      if (ev.composedPath().includes(item)) {
        item.classList.add('--hover');
      } else {
        item.classList.remove('--hover');
      }
    });
  });
}
if (cases) {
  var aim = cases.querySelector('.aim-icon');
  var _items = cases.querySelectorAll('.case-short');

  // Aim position
  cases.addEventListener('mousemove', function (ev) {
    aim.style.left = ev.clientX + 'px';
    aim.style.top = ev.clientY + 'px';
    aim.classList.add('--hover');
  });
  cases.addEventListener('mouseleave', function () {
    aim.classList.remove('--hover');
  });
  _items.forEach(function (item, index) {
    // Aim scale
    item.addEventListener('mouseenter', function (ev) {
      aim.classList.add('--in-item');
    });
    item.addEventListener('mouseleave', function (ev) {
      aim.classList.remove('--in-item');
    });

    // Open popup
    item.addEventListener('click', function (ev) {
      var href = item.getAttribute('href');
      var popup = document.querySelector(href);
      var closePopupBtn = popup.querySelector('.case-popup__close-btn');
      popup.classList.add('--active');
      document.body.classList.add('no-scroll');
      closePopupBtn.addEventListener('click', function () {
        popup.classList.remove('--active');
        document.body.classList.remove('no-scroll');
      });
    });
  });
}
if (casesGrid) {
  var _items2 = casesGrid.querySelectorAll('.cases-grid__item');
  _items2.forEach(function (item, index) {
    item.addEventListener('click', function (ev) {
      var href = item.getAttribute('href');
      var popup = document.querySelector(href);
      var closePopupBtn = popup.querySelector('.case-popup__close-btn');
      popup.classList.add('--active');
      document.body.classList.add('no-scroll');
      closePopupBtn.addEventListener('click', function () {
        popup.classList.remove('--active');
        document.body.classList.remove('no-scroll');
      });
    });
  });
}
if (getCxMarket) {
  var fixWrap = getCxMarket.querySelector('.get-cx-market__fix-wrap');
  var _items3 = getCxMarket.querySelectorAll('.get-cx-market__item');
  var SCROLL_SH = 250; // scroll step height
  var MOBILE = 980; // mobile breakpoint
  var ITEMS_COUNT = _items3.length; // items count (3)

  var scrollAnim = function scrollAnim() {
    if (window.innerWidth > MOBILE) {
      var rect = getCxMarket.getBoundingClientRect(); // backdrop rect
      var fRect = fixWrap.getBoundingClientRect(); // fix wrap rect
      var height = fRect.height + SCROLL_SH * ITEMS_COUNT; // height of backdrop

      getCxMarket.style.height = height + 'px';
      if (rect.top <= 0 && rect.bottom >= fRect.height) {
        header.classList.add('--scroll-look');
        fixWrap.classList.add('--fixed');
        fixWrap.classList.remove('--bottom');
        _items3.forEach(function (item, i) {
          if (i !== 0) {
            item.style.marginTop = "".concat(clamp(rect.top + SCROLL_SH * (_items3.length - 1) - i * SCROLL_SH, i * SCROLL_SH - (i + 1) * SCROLL_SH, 0), "px");
          }
        });
      } else if (rect.bottom < fRect.height) {
        header.classList.remove('--scroll-look');
        fixWrap.classList.remove('--fixed');
        fixWrap.classList.add('--bottom');
      } else {
        header.classList.remove('--scroll-look');
        fixWrap.classList.remove('--fixed');
        fixWrap.classList.remove('--bottom');
      }
    }
  };
  scrollAnim();
  window.addEventListener('scroll', scrollAnim);
}
if (stepsVector) {
  var listBackdrop = stepsVector.querySelector('.steps-vector__list-backdrop');
  var _list = stepsVector.querySelector('.steps-vector__list');
  if (_list && listBackdrop && window.innerWidth > 1362) {
    var rows = _list.querySelectorAll('.steps-vector__l-row');
    var _SCROLL_SH = 800;
    var _scrollAnim = function _scrollAnim() {
      var rect = _list.getBoundingClientRect();
      var bRect = listBackdrop.getBoundingClientRect();
      var lrRect = rows[rows.length - 1].getBoundingClientRect();
      listBackdrop.style.height = "".concat(_SCROLL_SH * rows.length + lrRect.height, "px"); // Init backdrop height

      // If list is in viewport
      if (bRect.top <= 0 && bRect.bottom >= lrRect.height) {
        header.classList.add('--scroll-look');
        _list.dataset.pos = "fixed";
        _list.style.top = null;
        // If scroll down
      } else if (bRect.bottom < lrRect.height) {
        header.classList.remove('--scroll-look');
        _list.dataset.pos = null;
        _list.style.transform = "translateY(".concat(rect.y - lrRect.y, "px)");
        _list.style.top = "".concat(bRect.height - rect.height - (rect.y - lrRect.y), "px");
        // If scroll up
      } else {
        header.classList.remove('--scroll-look');
        _list.dataset.pos = null;
        _list.style.transform = "translateY(0px)";
        _list.style.top = null;
      }

      // If scroll rows
      rows.forEach(function (row, rIndex) {
        var vector = row.querySelector('._vector');
        var arrow = row.querySelector('._arrow');
        var items = row.querySelectorAll('.steps-vector__item');
        var rowRect = row.getBoundingClientRect();
        var vectorRect = vector.getBoundingClientRect();

        // Vector scroll animation
        vector.style.width = "".concat(clamp(-bRect.top / _SCROLL_SH - rIndex, -items.length + 1, 2) * 100, "%");

        // Arrow scroll animation
        if (arrow) {
          arrow.style.transform = "translateX(".concat(clamp(-bRect.top / _SCROLL_SH - rIndex, 0, 1) * 80, "px)");
        }

        // Arrow rotate animation on hover
        items.forEach(function (item, i) {
          item.addEventListener('mouseenter', function (ev) {
            arrow.style.rotate = "20deg";
          });
          item.addEventListener('mouseleave', function (ev) {
            arrow.style.rotate = "0deg";
          });
        });

        // If scroll in row
        if (bRect.top <= rIndex * -_SCROLL_SH && bRect.top > (rIndex + 1) * -_SCROLL_SH) {
          // Move top position row
          _list.style.transform = "translateY(".concat(rect.y - rowRect.y, "px)");
          items.forEach(function (item, iIndex) {
            var icon = item.querySelector('img');
            var text = item.querySelector('.steps-vector__item-text');
            var itemRect = item.getBoundingClientRect();
            var iconRect = icon.getBoundingClientRect();

            // Pulse animation vector
            if (vectorRect.right >= iconRect.left && vectorRect.right <= iconRect.right) {
              vector.classList.add('--pulse');
              vector.addEventListener('transitionend', function () {
                vector.classList.remove('--pulse');
              });
            }

            // If vector > item left dot
            if (vectorRect.right > itemRect.left && vectorRect.width > 100) {
              var progress = clamp((vectorRect.right - itemRect.left) / itemRect.width, 0, 1);
              icon.style.transform = "rotate(".concat(Math.abs(Math.sin(progress * Math.PI) * 30), "deg)");
              icon.style.opacity = 80 + progress * 20 + '%';
              icon.style.filter = "blur(".concat((1 - progress) * 3, "px)");

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
          });
        }
      });
    };
    window.addEventListener('load', _scrollAnim);
    window.addEventListener('scroll', _scrollAnim);
  }
}
mouseMoveAnim.forEach(function (el) {
  var move = Number(el.dataset.move) || 30;
  var startX = 0;
  var startY = 0;
  el.addEventListener('mouseenter', function (ev) {
    el.setAttribute('mouseevent', 'enter');
    startX = ev.clientX;
    startY = ev.clientY;
  });
  el.addEventListener('mousemove', function (ev) {
    el.setAttribute('mouseevent', 'move');
    var rect = el.getBoundingClientRect();
    var x = (ev.clientX - startX) / rect.width * move;
    var y = (ev.clientY - startY) / rect.height * move;
    el.style.translate = "\n      ".concat(x, "px\n      ").concat(y, "px\n    ");
  });
  el.addEventListener('mouseleave', function (ev) {
    el.setAttribute('mouseevent', 'leave');
    el.style.translate = '0 0';
  });
});
textCcolorAnim.forEach(function (el) {
  var SCROLL_H = Number(el.dataset.scrollh) || 500;
  var words = el.textContent.split('\n').join(' ').split(' ');
  var spans = '';
  words.forEach(function (word, i) {
    if (word.length > 0) {
      spans += "<span class=\"_word\">".concat(word, "</span> ");
    }
  });
  el.innerHTML = spans;
  var spansArr = el.querySelectorAll('span._word');
  var textAnimation = function textAnimation() {
    var spanH = SCROLL_H / spansArr.length; // (35.71)
    var rect = aboutYadirect.getBoundingClientRect();
    var top = clamp(-rect.top + SCROLL_H, 0, SCROLL_H);
    spansArr.forEach(function (span, i) {
      span.style.transition = null;
      span.style.opacity = "".concat(clamp((top - spanH * i) / spanH, 0, 1) * 0.7 + 0.3);
    });
  };
  window.addEventListener('load', textAnimation);
  window.addEventListener('scroll', textAnimation);
});
//# sourceMappingURL=main.js.map
