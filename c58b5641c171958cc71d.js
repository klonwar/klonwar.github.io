!function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],p=0,f=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;o.push([139,1]),n()}({139:function(e,t,n){n(140),e.exports=n(336)},335:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(135),c=n(44),l=function(){return a.a.createElement("div",{className:" uk-padding"},a.a.createElement("h1",{className:"uk-margin-remove"},"Привет!"),a.a.createElement("h2",null,"Предлагаю взглянуть на мои проекты:"),a.a.createElement("h4",{className:""},a.a.createElement(c.b,{to:"/https://mathgym.ru/"},"MathGym")," - сайт помощи школьникам"),a.a.createElement("h4",{className:"uk-margin-remove-top"},a.a.createElement(c.b,{to:"/http://get2p.herokuapp.com/"},"Get2p")," - конструктор запросов"))},u=n(8),i=function(e){var t=Object(u.h)(),n=(t.pathname+t.search+t.hash).substring(1);try{new URL(n)}catch(e){return a.a.createElement("div",{className:"uk-position-center"},"URL is invalid")}return n&&location.assign(n),a.a.createElement("div",{className:"uk-position-center","uk-spinner":"ratio: 5"})},s=function(e){var t=Object(u.h)(),n=Object(u.g)();if(t.search){var r={};if(t.search.slice(1).split("&").forEach((function(e){var t=e.split("=");r[t[0]]=t.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==r.p){var o=t.pathname.slice(0,-1)+(r.p||"")+(r.q?"?"+r.q:"")+t.hash;n.replace(o)}}return a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/:link",component:i}),a.a.createElement(u.b,{exact:!0,path:"/"},a.a.createElement(l,null)),a.a.createElement(u.b,null,a.a.createElement(u.a,{to:"/"})))},p=n(137),f=n.n(p),m=n(138),h=n.n(m);n(335);f.a.use(h.a),o.render(a.a.createElement(c.a,null,a.a.createElement(s,null)),document.querySelector("#root"))}});