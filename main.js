!function (e) {
  function t(t) {
    for (var n, c, i = t[0], o = t[1], s = t[2], u = 0, d = []; u < i.length; u++) c = i[u], Object.prototype.hasOwnProperty.call(l, c) && l[c] && d.push(l[c][0]), l[c] = 0;
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    for (m && m(t); d.length;) d.shift()();
    return r.push.apply(r, s || []), a();
  }

  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
        var o = a[i];
        0 !== l[o] && (n = !1);
      }
      n && (r.splice(t--, 1), e = c(c.s = a[0]));
    }
    return e;
  }

  var n = {}, l = {0: 0}, r = [];

  function c(t) {
    if (n[t]) return n[t].exports;
    var a = n[t] = {i: t, l: !1, exports: {}};
    return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports;
  }

  c.m = e, c.c = n, c.d = function (e, t, a) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    });
  }, c.r = function (e) {`undefined` != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: `Module`}), Object.defineProperty(e, `__esModule`, {value: !0});}, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && `object` == typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (c.r(a), Object.defineProperty(a, `default`, {
      enumerable: !0,
      value: e
    }), 2 & t && `string` != typeof e) for (var n in e) c.d(a, n, function (t) {return e[t];}.bind(null, n));
    return a;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {return e.default;} : function () {return e;};
    return c.d(t, `a`, t), t;
  }, c.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}, c.p = ``;
  var i = window.webpackJsonp = window.webpackJsonp || [], o = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var s = 0; s < i.length; s++) t(i[s]);
  var m = o;
  r.push([147, 1]), a();
}({
  147: function (e, t, a) {a(148), e.exports = a(346);}, 345: function (e, t, a) {}, 346: function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0), l = a.n(n), r = a(140), c = a.p + `images/profile.jpg`, i = a(34), o = a(54), s = {
      title: `Arapov Frontend CV`,
      name: `Дмитрий Сергеевич Арапов`,
      job: `Frontend разработчик`,
      position: `Middle`,
      experience: {title: `Опыт работы`, value: 2},
      place: `Россия, г. Воронеж`,
      work: `DSR`,
      status: `Не ищу работу`,
      aboutMe: [`Заинтересован в разработке веб-приложений с использованием современного Angular`, `Работал в международных командах`, `Имел опыт руководства, как Tech Lead и Team Lead`],
      contacts: {
        title: `Контакты`,
        info: {
          vk: `https://vk.com/klonwar`,
          telegram: `https://t.me/klonwar`,
          github: `https://github.com/klonwar`,
          mail: `dima.arapov@gmail.com`,
          stackoverflow: `https://ru.stackoverflow.com/users/182390/mr-klonwar`,
          phone: `+79081356016`,
          linkedin: `https://ru.linkedin.com/in/dmitry-arapov-a4171225b`
        }
      },
      languages: {title: `Языки`, info: [{name: `Английский`, level: 3, max: 6, note: `Intermediate`}]},
      skills: {
        title: `Навыки`,
        main: {fe: [`Angular`, `React`], be: [`NestJS`]},
        secondary: [`JS, TS`, `Node.JS, Express`, `HTML, CSS, LESS, SASS`, `Angular Material, RxJS`, `Jest, Jasmine, Storybooks`, `Gatsby, Netlify`],
        other: [`Linux`, `Git`, `Docker`, `Docker Compose`, `Gitlab CI/CD`, `SQL`, `Jira`, `Confluence`, `PHP`, `JQuery`, `AngularJS`, `Yarn`, `Yarn Workspaces`, `Shaka Player`, `MPEG DASH`, `Single SPA`, `Microfrontends`, `Husky`, `Commitlint`, `Stylelint`, `ESlint`, `Prettier`, `Rancher`]
      },
      infoBlocks: [{
        title: `Опыт`,
        blocks: [{
          name: `Сайты компании DSR`,
          time: `c 2023`,
          company: `DSR`,
          description: `Множество сайтов различной сложности с CMS`,
          skills: [`React`, `Gatsby`, `Netlify`, `Gitlab CI/CD`, `NestJS`, `Express`],
          team: `3 Fullstack Engineers, 2 QA, 1 PM`,
          tasks: [`Руководил командой разработчиков`, `Писал новые сайты с нуля и улучшал существующие`, `Внедрял CI/CD для автоматического развертывания на тестовом и релизном стендах`]
        }, {
          name: `NDA`,
          time: `2023 - 2023`,
          company: `DSR`,
          description: `Социальная сеть с возможностью таргетированного распределения контента. Несколько ролей пользователей, панель администрирования, различные типы постов`,
          skills: [`Angular`, `NestJS`, `Shaka Player`, `MPEG DASH`, `Yarn Workspaces`, `Single SPA`, `Microfrontends`, `SASS`],
          team: `1 FE, 1 BE, 2 QA, 1 PM`,
          tasks: [`Был единственным фронтенд разработчиком в команде`, `Интегрировал платежную систему Stripe`, `Добавил множество новых функций в существующую систему по запросу заказчика`]
        }, {
          name: `NDA`,
          time: `2021 - 2023`,
          company: `DSR`,
          description: `Крупное веб-приложение для журналистов, сервис управления новостями с богатым функционалом`,
          skills: [`Angular`, `NestJS`, `Shaka Player`, `MPEG DASH`, `Yarn Workspaces`, `Single SPA`, `Microfrontends`, `SASS`],
          team: `4 FE, 2 BE, 3 QA, 1 PM`,
          tasks: [`Участвовал в разбиении монолитного приложения на микрофронтенды`, `Поддерживал и улучшал плеер, позволяющий проигрывать в том числе потоковые и растущие медиафайлы при помощи MPEG DASH`, `Разработал систему оповещения пользователей`]
        }, {
          name: `Личные проекты`,
          time: `2017 - 2021`,
          description: `Телеграм-боты, парсеры сайтов, веб-приложения. Различные инструменты для решения персональных задач`,
          skills: [`React`, `NestJS`, `Node.JS`]
        }]
      }, {
        title: `Образование`,
        blocks: [{
          name: `ВГЛТУ`,
          time: `с 2023`,
          subtitle: `Магистратура`,
          description: `ФКНиТ, Информационные Системы и Технологии`
        }, {
          name: `Воронежский Государственный Университет`,
          time: 2023,
          subtitle: `Бакалавриат`,
          description: `ФКН, Программная Инженерия`
        }]
      }]
    }, m = a(24), u = a(141);

    function d(e, t) {
      return function (e) {if (Array.isArray(e)) return e;}(e) || function (e, t) {
        if (`undefined` == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var a = [], n = !0, l = !1, r = void 0;
        try {for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (a.push(c.value), !t || a.length !== t); n = !0) ;} catch (e) {l = !0, r = e;} finally {try {n || null == i.return || i.return();} finally {if (l) throw r;}}
        return a;
      }(e, t) || function (e, t) {
        if (!e) return;
        if (`string` == typeof e) return k(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        `Object` === a && e.constructor && (a = e.constructor.name);
        if (`Map` === a || `Set` === a) return Array.from(e);
        if (`Arguments` === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return k(e, t);
      }(e, t) || function () {throw new TypeError(`Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);}();
    }

    function k(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
      return n;
    }

    function p(e) {return [`год`, `года`, `лет`][e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]];}

    var f = function () {
      return l.a.createElement(l.a.Fragment, null, l.a.createElement(u.a, null, l.a.createElement(`title`, null, s.title)), l.a.createElement(`div`, {
        className: `uk-height-1-1 resume`,
        "uk-grid": ``
      }, l.a.createElement(`div`, {className: `uk-width-1-3@s uk-flex uk-flex-column resume-left uk-position-relative`}, l.a.createElement(`div`, {className: `uk-padding-small uk-flex uk-flex-center`}, l.a.createElement(`div`, {className: `uk-width-1-2 resume-photo-container`}, l.a.createElement(`img`, {
        className: `resume-photo`,
        src: `./`.concat(c),
        alt: `Dmitry Arapov`,
        "uk-img": ``
      }))), l.a.createElement(`label`, {className: `uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold`}, s.contacts.title), l.a.createElement(`div`, {className: `uk-padding-small`}, [[`linkedin`, s.contacts.info.linkedin, `Dmitry Arapov`, o.b], [`github`, s.contacts.info.github, `klonwar`, o.a], [`telegram`, s.contacts.info.telegram, `@klonwar`, o.d], [`vk`, s.contacts.info.vk, `@klonwar`, o.e], [`stackoverflow`, s.contacts.info.stackoverflow, `mr-klonwar`, o.c], [`mail`, s.contacts.info.mail, s.contacts.info.mail, m.b], [`phone`, s.contacts.info.phone, s.contacts.info.phone, m.d]].map((function (e) {
        return l.a.createElement(`a`, {
          key: e[0],
          className: `uk-link-text uk-flex uk-flex-middle uk-text-truncate`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          href: `mail` === e[0] ? `mailto:`.concat(e[1]) : `phone` === e[0] ? `tel:`.concat(e[1]) : e[1]
        }, l.a.createElement(`span`, {className: `resume-contacts__icon`}, l.a.createElement(i.a, {
          className: `uk-text-large`,
          icon: e[e.length - 1]
        })), l.a.createElement(`span`, {className: `uk-margin-small-left uk-text-small`}, e[2]));
      }))), l.a.createElement(`label`, {className: `uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold`}, s.languages.title), l.a.createElement(`div`, {className: `uk-padding-small`}, s.languages.info.map((function (e, t) {
        return l.a.createElement(`div`, {
          key: ``.concat(e.name, `_`).concat(t),
          "uk-grid": ``
        }, l.a.createElement(`span`, {className: `uk-width-1-2 uk-text-truncate`}, e.name), l.a.createElement(`div`, {className: `uk-width-1-2 uk-flex uk-flex-column`}, l.a.createElement(`span`, null, l.a.createElement(`progress`, {
          className: `uk-progress resume-progress uk-margin-small-bottom`,
          value: e.level,
          max: e.max
        })), l.a.createElement(`span`, {className: `uk-text-small uk-text-truncate uk-text-center uk-flex-1`}, e.note)));
      }))), l.a.createElement(`label`, {className: `uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold`}, s.skills.title), l.a.createElement(`div`, {className: `uk-padding-small uk-text-wrap`}, l.a.createElement(`div`, {className: `uk-padding-remove-horizontal`}, l.a.createElement(`ul`, {className: `uk-margin-remove-horizontal uk-padding-small uk-padding-remove-vertical uk-padding-remove-right`}, Object.entries(s.skills.main).map((function (e) {
        var t = d(e, 2), a = t[0], n = t[1];
        return l.a.createElement(`li`, {className: `uk-text-bold`, key: a}, n.join(`, `));
      })))), l.a.createElement(`ul`, {className: `uk-margin-remove uk-padding-small uk-padding-remove-vertical uk-padding-remove-right`}, s.skills.secondary.map((function (e, t) {return l.a.createElement(`li`, {key: ``.concat(e.name, `_`).concat(t)}, l.a.createElement(`div`, {className: `uk-flex uk-flex-column`}, l.a.createElement(`span`, null, e)));}))), l.a.createElement(`div`, {className: `uk-padding-small uk-padding-remove-horizontal`}, l.a.createElement(`span`, {className: `uk-text-small`}, s.skills.other.join(`, `))))), l.a.createElement(`div`, {className: `uk-width-2-3@s resume-right`}, l.a.createElement(`div`, null, l.a.createElement(`h1`, null, s.name), l.a.createElement(`h2`, {className: `uk-margin-remove`}, s.job, `, `, s.position), l.a.createElement(`h5`, {className: `uk-margin-remove`}, s.experience.title, `: `, s.experience.value, ` `, p(s.experience.value)), l.a.createElement(`div`, {
        className: `uk-grid-small uk-flex-between uk-margin-top`,
        "uk-grid": ``
      }, l.a.createElement(`div`, null, l.a.createElement(i.a, {icon: m.c}), ` `, s.place), l.a.createElement(`div`, null, l.a.createElement(i.a, {icon: m.h}), ` `, (e = new Date(`2001-12-07`), t = new Date, a = t.getFullYear() - e.getFullYear(), a = t.setFullYear(1970) < e.setFullYear(1970) ? a - 1 : a, ``.concat(a, ` `).concat(p(a)))), l.a.createElement(`div`, null, l.a.createElement(i.a, {icon: m.a}), ` `, s.work), l.a.createElement(`div`, null, l.a.createElement(i.a, {icon: m.f}), ` `, s.status))), l.a.createElement(`ul`, {className: `uk-padding-small uk-padding-remove-vertical uk-padding-remove-right`}, s.aboutMe.map((function (e, t) {return l.a.createElement(`li`, {key: ``.concat(e.name, `_`).concat(t)}, l.a.createElement(`div`, {className: `uk-flex uk-flex-column`}, l.a.createElement(`span`, null, e)));}))), [[s.infoBlocks[0], m.g], [s.infoBlocks[1], m.i]].map((function (e) {
        return l.a.createElement(`div`, {key: e[0].title}, l.a.createElement(`div`, {className: `uk-flex resume-edge`}, l.a.createElement(`span`, {className: `resume-title uk-text-bold`}, e[0].title), l.a.createElement(`hr`, {className: `uk-width-expand resume-edge__line`}), l.a.createElement(`span`, {className: `resume-edge__icon`}, l.a.createElement(i.a, {icon: e[1]}))), l.a.createElement(`div`, null, e[0].blocks.map((function (e, t) {
          return l.a.createElement(`div`, {
            className: `pagebreak resume-info-block uk-grid-small`,
            key: ``.concat(e.name, `-`).concat(t),
            "uk-grid": ``
          }, l.a.createElement(`div`, {className: `uk-width-1-5 time-block`}, l.a.createElement(`div`, {className: `uk-flex uk-flex-column uk-text-right`}, e.time && l.a.createElement(`span`, {className: `uk-text-small`}, e.time), e.company && l.a.createElement(`span`, {className: `uk-text-small`}, e.company))), l.a.createElement(`div`, {className: `uk-width-4-5`}, l.a.createElement(`div`, {className: `resume-info-block__title uk-text-bold`}, e.name), l.a.createElement(`span`, null, e.subtitle), Array.isArray(e.link) ? l.a.createElement(`p`, null, e.link.map((function (e, t) {return l.a.createElement(`div`, {key: ``.concat(e, `_`).concat(t)}, l.a.createElement(`a`, {href: e}, e));}))) : l.a.createElement(`a`, {href: e.link}, e.link), e.description.split(`\n`).map((function (e) {return l.a.createElement(`div`, {key: e}, e);})), l.a.createElement(`div`, {className: `icon-blocks`}, e.skills && l.a.createElement(l.a.Fragment, null, l.a.createElement(i.a, {icon: m.e}), l.a.createElement(`span`, null, e.skills.join(`, `))), e.team && l.a.createElement(l.a.Fragment, null, l.a.createElement(i.a, {icon: m.j}), l.a.createElement(`span`, null, e.team))), e.tasks && l.a.createElement(`ul`, {className: `uk-padding-small uk-padding-remove-vertical uk-padding-remove-right`}, e.tasks.map((function (e, t) {return l.a.createElement(`li`, {key: t}, e);})))));
        }))));
      })))));
      var e, t, a;
    }, v = function () {return l.a.createElement(f, null);}, g = a(9), E = function () {
      var e = Object(g.h)(), t = (e.pathname + e.search + e.hash).substring(1);
      try {new URL(t);} catch (e) {return l.a.createElement(`div`, {className: `uk-position-center`}, `URL is invalid`);}
      return t && location.assign(t), l.a.createElement(`div`, {
        className: `uk-position-center`,
        "uk-spinner": `ratio: 5`
      });
    }, h = function () {
      var e = Object(g.h)(), t = Object(g.g)();
      Object(n.useEffect)((function () {
        if (e.search) {
          var a = {};
          if (e.search.slice(1).split(`&`).forEach((function (e) {
            var t = e.split(`=`);
            a[t[0]] = t.slice(1).join(`=`).replace(/~and~/g, `&`);
          })), void 0 !== a.p) {
            var n = e.pathname.slice(0, -1) + (a.p || ``) + (a.q ? `?` + a.q : ``) + e.hash;
            t.replace(n);
          }
        }
      }), []);
    }, b = function () {
      return h(), l.a.createElement(g.d, null, l.a.createElement(g.b, {
        path: `/:link`,
        component: E
      }), l.a.createElement(g.b, {
        exact: !0,
        path: `/`
      }, l.a.createElement(v, null)), l.a.createElement(g.b, null, l.a.createElement(g.a, {to: `/`})));
    }, y = a(145), S = a.n(y), N = a(146), x = a.n(N), w = a(60);
    a(345);
    S.a.use(x.a), r.render(l.a.createElement(w.a, null, l.a.createElement(b, null)), document.querySelector(`#root`));
  }
});
