(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),i=n.n(a),o=(n(12),n(7)),r=n(5),l=n.p+"static/media/trash.435750a2.svg",d=n(0);function j(e){return Object(d.jsxs)("div",{className:"list-item row jc-space-between",children:[Object(d.jsxs)("span",{className:e.itemData.isComplete?"task-complete":"",onClick:function(){return e.mark(e.index)},children:[" ",e.itemData.description]}),Object(d.jsx)("img",{src:l,className:"delete-icon",onClick:function(){return e.deleteTask(e.index)}})]})}var u=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(r.a)(a,2),l=i[0],u=i[1],m=function(){l.push({description:n,isComplete:!1}),u(l),s("")},b=function(e){var t=l.filter((function(t,n){return n!==e}));u(t)},p=function(e){var t=Object(o.a)(l);t[e].isComplete=!t[e].isComplete,u(t)};return Object(d.jsxs)("div",{className:"app-background",children:[Object(d.jsx)("p",{className:" heading-text",children:" To do List"}),Object(d.jsxs)("div",{className:"task-container",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"text-input",value:n,onKeyDown:function(e){13===e.keyCode&&m()},onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{className:"add-button",onClick:m,children:" ADD "})]}),(null===l||void 0===l?void 0:l.length)?l.map((function(e,t){return Object(d.jsx)(j,{index:t,itemData:e,deleteTask:b,mark:p})})):Object(d.jsx)("p",{className:"no-item-text",children:"\ud83d\udccc No Task added"})]}),Object(d.jsx)("p",{className:"footer-text",children:"Sabar_I \u2764\ufe0f"})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.420c4e36.chunk.js.map