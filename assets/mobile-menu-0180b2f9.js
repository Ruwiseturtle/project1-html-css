(()=>{const n=document.querySelector("#mobile-menu"),t=document.querySelector("#open-menu"),e=document.querySelector("#close-menu"),i=document.querySelector("#change-header-nav");t.addEventListener("click",c),e.addEventListener("click",c);function c(){document.body.classList.toggle("modal-open"),n.classList.toggle("is-open"),t.classList.toggle("is-open"),i.classList.toggle("is-open"),e.classList.toggle("is-open")}window.matchMedia("(max-width: 767px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.classList.remove("is-open"))}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(n.classList.remove("is-open"),document.body.classList.remove("modal-open"),e.classList.remove("is-open"))});const l=document.querySelector(".link-howitworks"),a=document.querySelector(".link-fruits"),r=document.querySelector(".link-contacts"),d=document.querySelector(".link-basket");l.addEventListener("click",s),a.addEventListener("click",s),r.addEventListener("click",s),d.addEventListener("click",s);function s(){document.body.classList.remove("modal-open"),n.classList.remove("is-open"),t.classList.remove("is-open"),e.classList.remove("is-open")}})();