(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),a=n(9),u=n.n(a),o=(n(16),n(10)),s=n(3),b=n(4),l=(n(17),n(7)),j=n.n(l);function d(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})}function O(e){var t=e.contacts,n=e.filter,r=e.deleteContact;return Object(c.jsx)(d,{title:"Contacts",children:t.filter((function(e){return e.name.toLowerCase().includes(n)})).map((function(e){return Object(c.jsxs)("div",{children:[e.name," ",e.number,Object(c.jsx)("button",{onClick:function(){return r(e.id)},children:"delete"})]},j.a.generate())}))})}function m(e){var t=e.addContact;return Object(c.jsx)(d,{title:"Phonebook",children:Object(c.jsxs)("form",{action:"",onSubmit:t,children:[Object(c.jsxs)("label",{htmlFor:"name",children:["Name ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",id:"name"})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{htmlFor:"number",children:["Number ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",id:"number"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})})}function f(e){var t=e.setFilter;return Object(c.jsx)("label",{htmlFor:"filter",children:Object(c.jsx)("input",{type:"text",id:"filter",onChange:function(e){var n=e.target.value;t(n.toLowerCase())}})})}function x(){var e=JSON.parse(localStorage.getItem("contacts"));return e&&Object(s.a)(e).length>0&&Object(s.a)(e)||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]}function h(){var e=Object(r.useState)(x),t=Object(b.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),u=Object(b.a)(a,2),l=u[0],d=u[1],h=Object(r.useState)(""),v=Object(b.a)(h,2),g=(v[0],v[1]),p=Object(r.useState)(""),C=Object(b.a)(p,2),S=(C[0],C[1]);Object(r.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var F={contacts:n,filter:l,deleteContact:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}};return Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{addContact:function(e){e.preventDefault();var t=e.target,c=t.name,r=t.number;if(g(c),S(r),n.filter((function(e){return e.name===c.value})).length>0)alert("user already exists");else{var a={name:c.value,number:r.value,id:j.a.generate()};i((function(e){return[].concat(Object(s.a)(e),[a])}))}}}),Object(c.jsx)(f,{setFilter:d}),Object(c.jsx)(O,Object(o.a)({},F))]})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};u.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.f609beb1.chunk.js.map