(()=>{const e=document.querySelector(".header"),t=document.querySelector(".menu"),r=document.querySelector(".hero"),o=document.querySelector(".faq"),n=document.querySelectorAll(".item-faq"),i=document.querySelector(".img-loop"),c=document.querySelectorAll(".img-link"),l=document.querySelector(".about-video"),s=document.querySelectorAll(".review"),d=document.querySelector(".reviews"),a=document.querySelector(".services"),u=(document.querySelector(".about"),document.querySelectorAll(".review-photo"));if(e&&t){const r=e.querySelector(".header__menu-btn"),o=t.querySelector(".nav");r.addEventListener("click",(()=>{t.classList.toggle("--active"),r.classList.toggle("--active"),e.classList.toggle("--active")})),o.querySelectorAll(".nav__item.rel").forEach((e=>{e.querySelector(".nav__item.rel>a").addEventListener("click",(t=>{e.classList.toggle("--active")}))}))}if(r){const e=r.querySelector(".hero__services-wrap"),t=r.querySelector(".hero__services"),o=r.querySelector(".hero__circles");document.addEventListener("DOMContentLoaded",(()=>{t.children[0].getBoundingClientRect().left<=100&&(e.appendChild(t.cloneNode(!0)),setInterval((()=>{e.scrollBy({left:1}),e.children[1].getBoundingClientRect().left<=0&&e.scroll({left:0})}),8))}));const n=r.getBoundingClientRect().top;window.addEventListener("scroll",(e=>{if(r.getBoundingClientRect().bottom>0&&r.getBoundingClientRect().top<window.innerHeight){const e=r.getBoundingClientRect().top-n;o.style.transform=`translateY(${-.1*e}px)`}}))}if(o&&n.forEach(((e,t)=>{e.querySelector(".item-faq__button").addEventListener("click",(()=>{n.forEach(((e,r)=>{t!==r&&e.classList.remove("--active")})),e.classList.toggle("--active")}))})),u.forEach(((e,t)=>{const r=e.querySelector(".review-photo>video");e.addEventListener("mousemove",(()=>{r.play()})),e.addEventListener("mouseleave",(()=>{r.currentTime=0,r.pause()})),document.addEventListener("touchmove",(t=>{t.composedPath().includes(e)?r.play():(r.currentTime=0,r.pause())}))})),l&&l.querySelector(".about-video>button").addEventListener("click",(()=>{l.classList.add("--active")})),c.forEach((e=>{const t=i.querySelector(".img-loop img"),r=e.querySelector(".img-link img");e.addEventListener("click",(()=>{t.setAttribute("src",r.getAttribute("data-src")),i.classList.add("--active"),document.body.classList.add("no-scroll")})),i.addEventListener("click",(e=>{i.classList.remove("--active"),document.body.classList.remove("no-scroll")}))})),d){const e=new Swiper(".reviews__slider .swiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".reviews__slider .swiper-button-next",prevEl:".reviews__slider .swiper-button-prev"}}),t=d.querySelector(".swiper-slide.rel"),r=t.querySelector(".fiers"),o=t.getBoundingClientRect().left;let n=0;const i=()=>{const e=t.getBoundingClientRect().left-o;n=.1*e,Math.abs(n)<=70&&(r.style.transform=`translateX(${n}px)`)};e.on("sliderMove",(()=>{i(),r.style.transition="none"})),e.on("setTransition",(()=>{i(),r.style.transition=".5s linear"}))}if(s.forEach((e=>{const t=e.querySelector(".review__text"),r=e.querySelector(".review__full-btn");t.scrollHeight<=t.clientHeight&&r.setAttribute("disabled",""),r.addEventListener("click",(()=>{t.classList.add("--full"),r.setAttribute("disabled",""),e.style.maxHeight="none"}))})),a){const e=a.querySelectorAll(".services__item");e.forEach(((e,t)=>{const r=e.querySelector(".services__item-title"),o=e.querySelector(".services__item-btn");r.innerHTML=t<10?`<b>0${t+1}</b> ${r.innerHTML}`:`<b>${t+1}</b> ${r.innerHTML}`,e.addEventListener("touchmove",(()=>{o.style.display="flex"})),document.addEventListener("touchstart",(t=>{t.composedPath().includes(e)||(o.style.display="none")}))})),a.addEventListener("mousemove",(t=>{window.innerWidth<=640&&e.forEach((e=>{const r=e.querySelector("._icon");r.style.left=t.clientX+"px",r.style.top=t.clientY+"px"}))}))}})();