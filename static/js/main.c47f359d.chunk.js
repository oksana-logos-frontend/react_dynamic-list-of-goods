(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(5),s=e(6),i=e(3),a=e.n(i),u=e(1),d=(e(12),e(13),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},j=function(){return b().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=function(){var t=Object(u.useState)([]),n=Object(s.a)(t,2),e=n[0],o=n[1],c=function(){var t=Object(r.a)(a.a.mark((function t(n){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App box",children:[Object(d.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-success is-inverted","data-cy":"all-button",onClick:function(){return c(b)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",className:"button is-link  is-inverted",onClick:function(){return c(f)},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",className:"button is-danger is-inverted",onClick:function(){return c(j)},children:"Load red goods"})]}),Object(d.jsx)(l,{goods:e})]})};c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c47f359d.chunk.js.map