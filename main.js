!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i={};function s(e,t,n){for(var o=0;o<t.length;o++){var r={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};i[e][o]?i[e][o](r):i[e].push(b(r,n))}}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var a=m++;n=f||(f=c(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=c(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],i[e]||(i[e]=[]),s(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){i[e]||(i[e]=[]),s(e,t,n);for(var o=t.length;o<i[e].length;o++)i[e][o]();i[e].length=t.length,0===i[e].length&&delete i[e]}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r)}},t}},function(e,t,n){var o=n(0),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){(t=n(1)(!1)).push([e.i,'.container {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  grid-template-areas: \n  "header header header"\n  "new-task details details"\n  "list details details"\n  ;\n}\n\n.header {\n  grid-area: header;\n}\n\n.new-task {\n  grid-area: new-task;\n}\n\n.task-list {\n  grid-area: list;\n}\n\n.task-details {\n  grid-area: details;\n}\n\n.form {\n  display: none;\n}',""]),e.exports=t},function(e,t,n){var o=n(0),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){(t=n(1)(!1)).push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(2),n(4);const o=window.localStorage,r={createDetails:e=>{const t=document.querySelector(".task-details");t.innerHTML="";const n=document.createElement("div");n.className="task-detail",t.appendChild(n);const o=document.createElement("p");o.innerText=`${e.name}`,n.appendChild(o);const r=document.createElement("p");r.innerText=`${e.description}`,n.appendChild(r)}},a=document.querySelector(".task-list"),i=(()=>{const e=document.querySelector(".form"),t=()=>{document.querySelector("#cancel").addEventListener("click",()=>{taskName.value="",description.value="",e.style.display="none"})};return{reset:()=>{document.querySelector("#reset").addEventListener("click",e=>{console.log(e.target),taskName.value="",description.value=""})},cancel:t,toggleFormView:()=>{document.querySelector(".task-details").innerHTML="","block"===e.style.display?e.style.display="none":(e.style.display="block",t())}}})(),s=(()=>{const e=[],t=()=>e,n=t=>{e.push(t)},s=()=>{let t=0;a.innerHTML="",e.forEach((n,r)=>{const i=document.createElement("div");i.className="task",i.id=`${t}`,a.appendChild(i);const c=document.createElement("p");c.innerText=JSON.parse(o.getItem("newTask")).name,c.id=`${t}`,i.appendChild(c);const l=document.createElement("button");l.type="button",l.innerText="Delete",l.addEventListener("click",()=>(e.splice(r,1),s())),i.appendChild(l),t+=1})};return{getTasks:t,addTask:n,submitNewTask:()=>{document.querySelector("#submit-task").addEventListener("click",e=>{e.preventDefault();const t={name:taskName.value,description:description.value};o.setItem("newTask",JSON.stringify(t)),console.log(o.getItem("newTask")),n(o.getItem("newTask")),s(),taskName.value="",description.value="",i.toggleFormView()})},updateListView:s,displayTaskDetails:()=>{a.addEventListener("click",e=>{r.createDetails(t()[e.target.id])})}}})();document.querySelector(".new-task").addEventListener("click",()=>{i.toggleFormView(),i.reset(),s.updateListView()}),s.submitNewTask(),s.displayTaskDetails()}]);