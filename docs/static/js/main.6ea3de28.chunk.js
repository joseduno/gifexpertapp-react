(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),o=function(t){var e=t.setCategory,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e(c),o(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){return o(t.target.value)},placeholder:"Buscar"})})},u=n(7),d=function(t){var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__flipInX",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},j=n(4),l=n.n(j),p=n(6),f=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"2dHBJ2S3iltXsrTR2ofwoAohnhOpCNW7",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("2dHBJ2S3iltXsrTR2ofwoAohnhOpCNW7","&q=").concat(encodeURI(e),"&limit=",10),t.next=5,fetch(n);case 5:return a=t.sent,t.next=8,a.json();case 8:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){c({data:[],loading:!0}),f(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(t.category),n=e.data,r=e.loading;return Object(s.jsxs)("div",{className:"card-grid",children:[r&&Object(s.jsx)("p",{className:"animate__animated animate__heartBeat",children:"Cargando..."}),n.map((function(t){return Object(s.jsx)(d,Object(u.a)({},t),t.id)}))]})},h=function(){var t=Object(a.useState)("King Kong"),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"animate__animated animate__fadeInDownBig",children:"GifExpertApp"}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)(o,{setCategory:r}),Object(s.jsx)(b,{category:n})]})};n(14);c.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6ea3de28.chunk.js.map