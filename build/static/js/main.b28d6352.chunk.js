(this["webpackJsonpfood-react"]=this["webpackJsonpfood-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(7),i=c.n(s),r=(c(13),c(2)),l=c(3),o=c(5),u=c(4),j=[{title:"Home",url:"#",cName:"nav-links"},{title:"All Trucks",url:"#",cName:"nav-links"},{title:"Add Truck",url:"#",cName:"nav-links"},{title:"Sign In",url:"#",cName:"nav-links-mobile"}],b=(c(14),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],m=function(e){var t=e.children,c=e.type,a=e.onClick,s=e.buttonStyle,i=e.buttonSize,r=b.includes(s)?s:b[0],l=d.includes(i)?i:d[0];return Object(n.jsx)("button",{className:"btn ".concat(r," ").concat(l),onClick:a,type:c,children:t})},h=(c(15),function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"NavbarItems",children:[Object(n.jsx)("h1",{className:"navbar-logo",children:"Food Truck Finder"}),Object(n.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(n.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(n.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:j.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(n.jsx)(m,{children:"Sign In"})]})}}]),c}(a.Component)),f=(c(16),a.Component,c(17),function(){return Object(n.jsx)("section",{id:"search",className:"search-wrap",children:Object(n.jsxs)("form",{action:"trucks/search",className:"search-form",children:[Object(n.jsx)("i",{className:"fas fa-search"}),Object(n.jsx)("input",{type:"search",name:"term",placeholder:"bbq, vegan, desserts, tacos etc..."}),Object(n.jsx)("input",{type:"submit",value:"Search"})]})})});var O=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsx)(f,{})]})};i.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b28d6352.chunk.js.map