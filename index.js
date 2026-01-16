import{a as g,S as h,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b="https://pixabay.com/api/",L="54210933-10e757df1700daa886d01a2cd";async function q(s){return(await g.get(b,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),S=new h(".gallery a");function w(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:y})=>`
             <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${p}</p>
          <p><b>Downloads</b> ${y}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),S.refresh()}function c(){f.innerHTML=""}function l(){m.classList.remove("is-hidden")}function v(){m.classList.add("is-hidden")}const u=document.querySelector(".form"),P=document.querySelector("input"),d=document.querySelector("button");u.addEventListener("submit",async s=>{s.preventDefault(),c(),d.disabled=!0,l();const r=P.value.trim();if(r===""){a.warning({title:"Empty search query",message:"Please enter a search query.",position:"topRight"});return}c(),l();try{const o=await q(r);o.hits.length===0&&a.info({title:"No images found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),w(o.hits)}catch(o){console.error("Error fetching images:",o),a.error({title:"Error searching images",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{d.disabled=!1,v(),u.reset()}});
//# sourceMappingURL=index.js.map
