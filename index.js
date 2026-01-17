import{a as p,S as y,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="54210933-10e757df1700daa886d01a2cd";async function b(s){return(await p.get(g,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a");function q(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
             <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");d.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){d.innerHTML=""}function w(){u.classList.remove("is-hidden")}function v(){u.classList.add("is-hidden")}const l=document.querySelector(".form"),P=document.querySelector("input"),n=document.querySelector("button");l.addEventListener("submit",async s=>{s.preventDefault(),S(),n.disabled=!1;const r=P.value.trim();if(r){w(),n.disabled=!0;try{const o=await b(r);o.hits.length===0?c.info({title:"No images found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(q(o.hits),n.disabled=!1)}catch(o){console.error("Error fetching images:",o),c.error({title:"Error searching images",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v(),l.reset(),n.disabled=!1}}else r||c.warning({title:"Empty search query",message:"Please enter a search query.",position:"topRight"})});
//# sourceMappingURL=index.js.map
