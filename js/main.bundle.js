(()=>{const e=document.querySelector(".header"),t=document.querySelector(".menu"),c=document.querySelector(".hero"),o=document.querySelector(".faq"),l=document.querySelectorAll(".item-faq"),r=document.querySelector(".img-loop"),i=document.querySelectorAll(".img-link"),s=document.querySelector(".about-video");if(e&&t){const c=e.querySelector(".header__menu-btn");c.addEventListener("click",(()=>{t.classList.toggle("--active"),c.classList.toggle("--active"),e.classList.toggle("--active")}))}if(c){const e=c.querySelector(".hero__services-wrap"),t=c.querySelector(".hero__services");console.log(e.clientWidth,t.clientWidth),document.addEventListener("DOMContentLoaded",(()=>{t.children[0].getBoundingClientRect().left<=100&&(e.appendChild(t.cloneNode(!0)),setInterval((()=>{e.scrollBy({left:1}),e.children[1].getBoundingClientRect().left<=0&&e.scroll({left:0})}),8))}))}o&&l.forEach(((e,t)=>{e.querySelector(".item-faq__button").addEventListener("click",(()=>{l.forEach(((e,c)=>{t!==c&&e.classList.remove("--active")})),e.classList.toggle("--active")}))})),s&&s.querySelector(".about-video>button").addEventListener("click",(()=>{s.classList.add("--active")})),i.forEach((e=>{const t=r.querySelector(".img-loop img"),c=e.querySelector(".img-link img");e.addEventListener("click",(()=>{t.setAttribute("src",c.getAttribute("data-src")),r.classList.add("--active"),document.body.classList.add("no-scroll")})),r.addEventListener("click",(e=>{e.target!==t&&(r.classList.remove("--active"),document.body.classList.remove("no-scroll"))}))}))})();