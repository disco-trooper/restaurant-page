!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){l();let e=document.createElement("p");e.textContent="The mission is simple: serve delicious, affordable food that guests will want to return to week after week.",content.appendChild(e),document.querySelectorAll("a").forEach(e=>e.backgroundColor="#FFFFFF"),document.querySelector("#Home").style.backgroundColor="#F6A000"}function l(){d("content");document.querySelector("#content");c()}function r(e,t,n){let o=document.createElement("p");o.textContent=`Pizza ${e} - `,content.appendChild(o);let l=document.createElement("i");l.textContent=`${t} - ${n} €`,o.appendChild(l)}function a(e){let t=document.querySelector(".navBar"),n=document.createElement("li");n.classList.add("item");let o=document.createElement("a");o.setAttribute("href","#"),o.setAttribute("id",e),o.textContent=e,t.appendChild(n),n.appendChild(o)}function c(){let e=document.createElement("nav");content.appendChild(e);let t=document.createElement("ul");t.classList.add("navBar"),e.appendChild(t),a("Home"),a("Menu"),a("Booking")}function d(e){const t=document.getElementById(e);for(;t.firstChild;)t.removeChild(t.firstChild)}n.r(t),n.d(t,"createNavBar",(function(){return c})),n.d(t,"removeAllChildren",(function(){return d})),o(),document.addEventListener("click",e=>{"Home"==e.target.getAttribute("id")&&o(),"Menu"==e.target.getAttribute("id")&&(l(),document.querySelector("#content"),r("Margherita","pomodoro, mozarella",6),r("al Funghi","pomodoro, mozarella, funghi",9),r("al Peperoni","pomodoro, mozarella, peperoni",8),r("alle Melanzane","pomodoro, mozarella, melanzane",8),r("con Cipolla","pomodoro, mozarella, cipolla",9),document.querySelectorAll("a").forEach(e=>e.backgroundColor="#FFFFFF"),document.querySelector("#Menu").style.backgroundColor="#F6A000"),"Booking"==e.target.getAttribute("id")&&function(){l();let e=document.querySelector("#content");document.querySelectorAll("a").forEach(e=>e.backgroundColor="#FFFFFF"),document.querySelector("#Booking").style.backgroundColor="#F6A000";let t=document.createElement("p");t.textContent="Book your table now!",e.appendChild(t);let n=document.createElement("div");n.className="box",e.appendChild(n);let o=document.createElement("div");o.className="field";let r=document.createElement("label");r.setAttribute("class","label"),r.textContent="Name",o.appendChild(r);let a=document.createElement("div");a.className="control";let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("class","input"),c.setAttribute("placeholder","Your name"),a.appendChild(c),o.appendChild(a),n.appendChild(o);let d=document.createElement("div");d.className="field";let u=document.createElement("label");u.setAttribute("class","label"),u.textContent="Date",d.appendChild(u);let i=document.createElement("div");i.className="control";let m=document.createElement("input");m.setAttribute("type","datetime-local"),m.setAttribute("class","input"),m.setAttribute("placeholder","Your name"),i.appendChild(m),d.appendChild(i),n.appendChild(d);let p=document.createElement("div");p.className="field";let s=document.createElement("div");s.className="control";let f=document.createElement("button");f.setAttribute("class","button is-link"),f.textContent="Submit",s.appendChild(f),p.appendChild(s),n.appendChild(p)}()})}]);
//# sourceMappingURL=bundle.js.map