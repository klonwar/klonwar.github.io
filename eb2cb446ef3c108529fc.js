!function(e){function a(a){for(var n,c,s=a[0],m=a[1],o=a[2],u=0,p=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&p.push(l[c][0]),l[c]=0;for(n in m)Object.prototype.hasOwnProperty.call(m,n)&&(e[n]=m[n]);for(i&&i(a);p.length;)p.shift()();return r.push.apply(r,o||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,s=1;s<t.length;s++){var m=t[s];0!==l[m]&&(n=!1)}n&&(r.splice(a--,1),e=c(c.s=t[0]))}return e}var n={},l={0:0},r=[];function c(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(t,n,function(a){return e[a]}.bind(null,n));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],m=s.push.bind(s);s.push=a,s=s.slice();for(var o=0;o<s.length;o++)a(s[o]);var i=m;r.push([145,1]),t()}({10:function(e){e.exports=JSON.parse('{"place":"Воронеж","work":"DSR","status":"Не ищу работу","contacts":{"title":"Контакты","info":{"vk":"https://vk.com/klonwar","telegram":"https://t.me/klonwar","github":"https://github.com/klonwar","mail":"dima.arapov@gmail.com","stackoverflow":"https://ru.stackoverflow.com/users/182390/mr-klonwar","phone":"+79081356016"}},"languages":{"title":"Языки","info":[{"name":"Английский","level":3,"max":6,"note":"B1 - Средний"}]},"skills":{"title":"Навыки","info":[{"name":"HTML, CSS, LESS, SASS","level":3,"max":5,"note":"Средний"},{"name":"JS, TS, React + Redux","level":4,"max":5,"note":"Опытный"},{"name":"Node.JS, Express, Nest.JS","level":3,"max":5,"note":"Средний"},{"name":"Angular","level":2,"max":5,"note":"Базовый"},{"name":"Jest, Karma, Jasmine","level":2,"max":5,"note":"Базовый"},{"name":"Linux, SQL, Git","level":2,"max":5,"note":"Базовый"}]},"infoBlocks":[{"title":"Проекты","blocks":[{"name":"Личные проекты","time":"2017 - 2021","description":"Парсеры на NodeJS, которые оповещают в Discord или Telegram о появлении новых товаров и изменении их цены.\\nСайт, позволяющий протестировать API. Используются JS, TS, React и Redux."},{"name":"Работа в DSR","time":"c 2021","description":"Angular, NodeJS, NestJS. Работаю над крупным проектом, информацию о котором разглашать не могу."}]},{"title":"Образование","blocks":[{"name":"Воронежский Государственный Университет","time":"2023","subtitle":"Неполное высшее","description":"ФКН, Программная Инженерия, 3 курс"}]},{"title":"Курсы / практики","blocks":[{"name":"DSR, DataArt","time":"2020 - 2021","description":"JS Bootcamp 2020: Deep Dive Into React\\nDataArt JavaScript Academy 2021\\nПрактика по направлению Web от DSR"}]}],"aboutMe":"Умею самостоятельно обучаться. Люблю CTF (соревнования по комп. безопасности). Был и участником, и организатором. Состою в команде ONO."}')},145:function(e,a,t){t(146),e.exports=t(344)},343:function(e,a,t){},344:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(141),c=t.p+"adc8f635b3f26f6268b76cba03e05199.jpg",s=t(37),m=t(60),o=t(10),i=t(25);var u=function(){return l.a.createElement("div",{className:"uk-height-1-1 resume","uk-grid":""},l.a.createElement("div",{className:"uk-width-1-3@s uk-flex uk-flex-column resume-left uk-position-relative"},l.a.createElement("div",{className:"uk-padding-small uk-flex uk-flex-center"},l.a.createElement("div",{className:"uk-width-1-2 resume-photo-container"},l.a.createElement("img",{className:"resume-photo",src:"./".concat(c),alt:"Это я","uk-img":""}))),l.a.createElement("label",{className:"uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold"},o.contacts.title),l.a.createElement("div",{className:"uk-padding-small"},[["vk",o.contacts.info.vk,"@klonwar",m.d],["telegram",o.contacts.info.telegram,"@klonwar",m.c],["github",o.contacts.info.github,"klonwar",m.a],["stackoverflow",o.contacts.info.stackoverflow,"mr-klonwar",m.b],["mail",o.contacts.info.mail,o.contacts.info.mail,i.b],["phone",o.contacts.info.phone,o.contacts.info.phone,i.f]].map((function(e){return l.a.createElement("a",{key:e[0],className:"uk-link-text uk-flex uk-flex-middle uk-text-truncate",href:"mail"===e[0]?"mailto:".concat(e[1]):"phone"===e[0]?"tel:".concat(e[1]):e[1]},l.a.createElement("span",{className:"resume-contacts__icon"},l.a.createElement(s.a,{className:"uk-text-large",icon:e[e.length-1]})),l.a.createElement("span",{className:"uk-margin-small-left uk-text-small"},e[2]))}))),l.a.createElement("label",{className:"uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold"},o.languages.title),l.a.createElement("div",{className:"uk-padding-small"},o.languages.info.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"_").concat(a),"uk-grid":""},l.a.createElement("span",{className:"uk-width-1-2 uk-text-truncate"},e.name),l.a.createElement("div",{className:"uk-width-1-2 uk-flex uk-flex-column"},l.a.createElement("span",null,l.a.createElement("progress",{className:"uk-progress resume-progress uk-margin-small-bottom",value:e.level,max:e.max})),l.a.createElement("span",{className:"uk-text-small uk-text-truncate uk-text-right"},e.note)))}))),l.a.createElement("label",{className:"uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold"},o.skills.title),l.a.createElement("div",{className:"uk-padding-small uk-text-wrap"},l.a.createElement("ul",{className:"uk-padding-small uk-padding-remove-vertical uk-padding-remove-right"},o.skills.info.map((function(e,a){return l.a.createElement("li",{key:"".concat(e.name,"_").concat(a)},l.a.createElement("div",{className:"uk-flex uk-flex-column"},l.a.createElement("span",null,e.name),l.a.createElement("div",{className:"uk-flex uk-flex-column uk-margin-small-top"},l.a.createElement("span",null,l.a.createElement("progress",{className:"uk-progress resume-progress uk-margin-small-bottom",value:e.level,max:e.max})),l.a.createElement("span",{className:"uk-text-small uk-text-truncate uk-text-right"},e.note))))}))))),l.a.createElement("div",{className:"uk-width-2-3@s resume-right"},l.a.createElement("div",null,l.a.createElement("h1",null,"Дмитрий Сергеевич Арапов"),l.a.createElement("h2",{className:"uk-margin-remove"},"Веб-разработчик, Junior"),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(s.a,{icon:i.e})," ",o.place)," ",l.a.createElement("span",null,l.a.createElement(s.a,{icon:i.j})," ",(a=new Date("2001-12-07"),t=new Date,n=t.getFullYear()-a.getFullYear(),n=t.setFullYear(1970)<a.setFullYear(1970)?n-1:n,"".concat(n," ").concat(["год","года","лет"][(e=n)%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]])))),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(s.a,{icon:i.a})," ","Работаю в ",o.work)),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(s.a,{icon:i.g})," ",o.status))),[[o.infoBlocks[0],i.h],[o.infoBlocks[1],i.d],[o.infoBlocks[2],i.c]].map((function(e){return l.a.createElement("div",{key:e[0].title},l.a.createElement("div",{className:"uk-flex resume-edge"},l.a.createElement("span",{className:"resume-title uk-text-bold"},e[0].title),l.a.createElement("hr",{className:"uk-width-expand resume-edge__line"}),l.a.createElement("span",{className:"resume-edge__icon"},l.a.createElement(s.a,{icon:e[1]}))),l.a.createElement("div",null,e[0].blocks.map((function(e,a){return l.a.createElement("div",{className:"resume-info-block uk-grid-small",key:"".concat(e.name,"-").concat(a),"uk-grid":""},l.a.createElement("span",{className:"uk-width-1-5"},e.time),l.a.createElement("div",{className:"uk-width-4-5"},l.a.createElement("div",{className:"resume-info-block__title uk-text-bold"},e.name),l.a.createElement("span",null,e.subtitle),Array.isArray(e.link)?l.a.createElement("p",null,e.link.map((function(e,a){return l.a.createElement("div",{key:"".concat(e,"_").concat(a)},l.a.createElement("a",{href:e},e))}))):l.a.createElement("a",{href:e.link},e.link),e.description.split("\n").map((function(e){return l.a.createElement("p",{key:e},e)}))))}))))})),l.a.createElement("div",{className:"uk-flex resume-edge"},l.a.createElement("span",{className:"resume-title uk-text-bold"},"О себе"),l.a.createElement("hr",{className:"uk-width-expand resume-edge__line"}),l.a.createElement("span",{className:"resume-edge__icon"},l.a.createElement(s.a,{icon:i.i}))),l.a.createElement("div",null,l.a.createElement("div",{className:"resume-info-block"},l.a.createElement("p",null,o.aboutMe)))));var e,a,t,n},p=function(){return l.a.createElement(u,null)},d=t(9),k=function(){var e=Object(d.h)(),a=(e.pathname+e.search+e.hash).substring(1);try{new URL(a)}catch(e){return l.a.createElement("div",{className:"uk-position-center"},"URL is invalid")}return a&&location.assign(a),l.a.createElement("div",{className:"uk-position-center","uk-spinner":"ratio: 5"})},f=function(){var e=Object(d.h)(),a=Object(d.g)();Object(n.useEffect)((function(){if(e.search){var t={};if(e.search.slice(1).split("&").forEach((function(e){var a=e.split("=");t[a[0]]=a.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==t.p){var n=e.pathname.slice(0,-1)+(t.p||"")+(t.q?"?"+t.q:"")+e.hash;a.replace(n)}}}),[])},E=function(){return f(),l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/:link",component:k}),l.a.createElement(d.b,{exact:!0,path:"/"},l.a.createElement(p,null)),l.a.createElement(d.b,null,l.a.createElement(d.a,{to:"/"})))},v=t(143),g=t.n(v),h=t(144),b=t.n(h),x=t(59);t(343);g.a.use(b.a),r.render(l.a.createElement(x.a,null,l.a.createElement(E,null)),document.querySelector("#root"))}});