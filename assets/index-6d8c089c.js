(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m="modulepreload",h=function(u){return"/project1-html-css/"+u},a={},f=function(o,s,l){if(!s||s.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=h(e),e in a)return;a[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!l)for(let i=t.length-1;i>=0;i--){const c=t[i];if(c.href===e&&(!r||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":m,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((i,c)=>{n.addEventListener("load",i),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};f(()=>import("./modal-cc4f7f7c.js"),[]);f(()=>import("./mobile-menu-0180b2f9.js"),[]);f(()=>import("./btn-scroll-show-aa8dfe0c.js"),[]);
