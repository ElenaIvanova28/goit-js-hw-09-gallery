parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.df3f18fc.svg","cAq2"],"cAq2"]}],"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"L4bL":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}const n=document.querySelector(".js-gallery"),r=document.querySelector(".js-lightbox"),a=document.querySelector(".lightbox__image"),i=document.querySelector('button[data-action="close-lightbox"]'),l=document.querySelector(".lightbox__content"),c=e=>{const t=document.createElement("li");t.classList.add("gallery__item");const n=document.createElement("a");n.classList.add("gallery__link"),n.setAttribute("href",e.original);const r=document.createElement("img");return r.classList.add("gallery__image"),r.setAttribute("src",e.preview),r.setAttribute("data-source",e.original),r.setAttribute("alt",e.description),n.appendChild(r),t.appendChild(n),t},d=e.default.map(e=>c(e));function o(e){"ArrowRight"===e.code&&f()}function s(e){"ArrowLeft"===e.code&&m()}function u(e){e.target===e.currentTarget&&p()}function g(e){"Escape"===e.code&&p()}function f(){const t=e.default.findIndex(e=>e.original===a.src);let n=t||0;n<e.default.length-1?n+=1:n=0,a.src=e.default[n].original,a.alt=e.default[n].alt}function m(){const t=e.default.findIndex(e=>e.original===a.src);let n=t||e.default.length-1;n>0?n-=1:n=e.default.length-1,a.src=e.default[n].original,a.alt=e.default[n].alt}function y(e){e.preventDefault(),e.target!==e.currentTarget&&(window.addEventListener("keydown",g),r.classList.add("is-open"),a.src=e.target.getAttribute("data-source"),a.alt=e.target.alt)}function p(){window.removeEventListener("keydown",g),r.classList.remove("is-open"),a.src="",a.alt=""}n.append(...d),n.addEventListener("click",y),i.addEventListener("click",p),l.addEventListener("click",u),n.addEventListener("keydown",o),n.addEventListener("keydown",s);
},{"./gallery-items.js":"q5Rn"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/gallery-items"),require("./js/script");
},{"./sass/main.scss":"clu1","./js/gallery-items":"q5Rn","./js/script":"L4bL"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.35d3305f.js.map