(()=>{const e=document.querySelector(".header"),t=document.querySelector(".menu"),o=document.querySelector(".hero"),r=document.querySelector(".faq"),n=document.querySelectorAll(".item-faq"),i=document.querySelector(".img-loop"),s=document.querySelectorAll(".img-link"),l=document.querySelector(".about-video"),c=document.querySelectorAll(".review"),d=document.querySelector(".reviews"),a=document.querySelector(".services"),u=document.querySelector(".about"),v=document.querySelectorAll(".review-photo"),m=document.querySelector(".cases");if(e&&t){const o=e.querySelector(".header__menu-btn"),r=t.querySelector(".nav");o.addEventListener("click",(()=>{t.classList.toggle("--active"),o.classList.toggle("--active"),e.classList.toggle("--active")})),r.querySelectorAll(".nav__item.rel").forEach((e=>{e.querySelector(".nav__item.rel>a").addEventListener("click",(t=>{e.classList.toggle("--active")}))}))}if(o){const e=o.querySelector(".hero__services-wrap"),t=o.querySelector(".hero__services"),r=o.querySelector(".hero__circles");document.addEventListener("DOMContentLoaded",(()=>{t.children[0].getBoundingClientRect().left<=100&&(e.appendChild(t.cloneNode(!0)),setInterval((()=>{e.scrollBy({left:1}),e.children[1].getBoundingClientRect().left<=0&&e.scroll({left:0})}),8))})),window.addEventListener("scroll",(e=>{o.getBoundingClientRect().bottom>0&&o.getBoundingClientRect().top<window.innerHeight&&(r.style.transform=`translateY(${100*Math.sin(window.scrollY/window.innerHeight)}px)`)}))}if(u){const e=u.querySelector(".about__bg");window.addEventListener("scroll",(()=>{u.getBoundingClientRect().bottom>0&&u.getBoundingClientRect().top<window.innerHeight&&(e.style.transform=`translateY(${250*Math.sin(window.scrollY/window.innerHeight)}px)`)}))}if(r){const e=r.querySelector(".faq__before-icon");n.forEach(((e,t)=>{e.querySelector(".item-faq__button").addEventListener("click",(()=>{n.forEach(((e,o)=>{t!==o&&e.classList.remove("--active")})),e.classList.toggle("--active")}))})),window.addEventListener("scroll",(t=>{r.getBoundingClientRect().top<window.innerHeight&&(e.style.transform=`translateX(${110*Math.cos(window.scrollY/window.innerHeight)}px)`)}))}if(v.forEach(((e,t)=>{const o=e.querySelector(".review-photo>video");e.addEventListener("mousemove",(()=>{o.play()})),e.addEventListener("mouseleave",(()=>{o.currentTime=0,o.pause()})),document.addEventListener("touchmove",(t=>{t.composedPath().includes(e)?o.play():(o.currentTime=0,o.pause())}))})),l&&l.querySelector(".about-video>button").addEventListener("click",(()=>{l.classList.add("--active")})),s.forEach((e=>{const t=i.querySelector(".img-loop img"),o=e.querySelector(".img-link img");e.addEventListener("click",(()=>{t.setAttribute("src",o.getAttribute("data-src")),i.classList.add("--active"),document.body.classList.add("no-scroll")})),i.addEventListener("click",(e=>{i.classList.remove("--active"),document.body.classList.remove("no-scroll")}))})),d){const e=d.querySelector(".reviews__slider .swiper"),t=new Swiper(e,{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".reviews__slider .swiper-button-next",prevEl:".reviews__slider .swiper-button-prev"}}),o=d.querySelector(".swiper-slide.rel").querySelector(".fiers");let r=0;const n=()=>{r=-70*Math.sin(t.progress),console.log(t.progress),o.style.transform=`translateX(${r}px)`};t.on("sliderMove",(()=>{n(),o.style.transition="none"})),t.on("setTransition",(()=>{n(),o.style.transition=".5s linear"}))}if(c.forEach((e=>{const t=e.querySelector(".review__text"),o=e.querySelector(".review__full-btn");t.scrollHeight<=t.clientHeight&&o.setAttribute("disabled",""),o.addEventListener("click",(()=>{t.classList.add("--full"),o.setAttribute("disabled",""),e.style.maxHeight="none"}))})),a){const e=a.querySelectorAll(".services__item");e.forEach(((e,t)=>{const o=e.querySelector(".services__item-title"),r=e.querySelector(".services__item-btn");o.innerHTML=t<10?`<b>0${t+1}</b> ${o.innerHTML}`:`<b>${t+1}</b> ${o.innerHTML}`,e.addEventListener("touchmove",(()=>{r.style.display="flex"})),document.addEventListener("touchstart",(t=>{t.composedPath().includes(e)||(r.style.display="none")}))})),a.addEventListener("mousemove",(t=>{window.innerWidth>640&&e.forEach((e=>{const o=e.querySelector("._icon");o.style.left=t.clientX+"px",o.style.top=t.clientY+"px"}))}))}if(m){const e=m.querySelector(".aim-icon"),t=m.querySelector(".cases__bg-text"),o=m.querySelectorAll(".case-short");document.addEventListener("scroll",(()=>{m.getBoundingClientRect().bottom>=0&&m.getBoundingClientRect().top<=window.innerHeight?(t.style.transform=`translateY(${100*Math.sin(window.scrollY/window.innerHeight)}px)`,t.style.display="block"):t.style.display="none"})),m.addEventListener("mousemove",(t=>{e.style.left=t.clientX+"px",e.style.top=t.clientY+"px",e.classList.add("--hover")})),m.addEventListener("mouseleave",(()=>{e.classList.remove("--hover")})),o.forEach(((t,o)=>{t.addEventListener("mouseenter",(t=>{e.classList.add("--in-item")})),t.addEventListener("mouseleave",(t=>{e.classList.remove("--in-item")})),t.addEventListener("click",(e=>{const o=t.getAttribute("href"),r=document.querySelector(o),n=r.querySelector(".case-popup__close-btn");r.classList.add("--active"),document.body.classList.add("no-scroll"),n.addEventListener("click",(()=>{r.classList.remove("--active"),document.body.classList.remove("no-scroll")}))}))}))}})();