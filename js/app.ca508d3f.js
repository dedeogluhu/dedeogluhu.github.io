(function(t){function e(e){for(var a,r,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"13cf":function(t,e,s){},"274a":function(t,e,s){},"38be":function(t,e,s){"use strict";var a=s("13cf"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"background"}}),s("div",{staticClass:"container"},[s("mainInfo"),s("tabsSection")],1)])},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-4"},[s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"card-body bg-light pb-1"},[s("h5",{staticClass:"row"},[t._m(1),s("div",{staticClass:"col text-right"},[s("a",{staticClass:"btn btn-primary m-2",attrs:{href:"mailto:dedeogluhu@gmail.com"}},[s("font-awesome-icon",{staticClass:"icon-size",attrs:{icon:["fas","envelope"],size:"lg"}})],1),s("a",{staticClass:"btn btn-dark m-2",attrs:{href:"https://github.com/dedeogluhu"}},[s("font-awesome-icon",{staticClass:"icon-size",attrs:{icon:["fab","github"],size:"lg"}})],1),s("a",{staticClass:"btn btn-primary m-2",attrs:{href:"https://linkedin.com/in/dedeogluhu"}},[s("font-awesome-icon",{staticClass:"icon-size",attrs:{icon:["fab","linkedin"],size:"lg"}})],1)])])])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"card-header"},[t._v("Hi There "),s("a",{staticClass:"cursor",attrs:{href:"#"}},[t._v("👋")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-7"},[t._v(" I'm Hüseyin Dedeoğlu, "),s("h5",{staticClass:"card-text mt-3"},[t._v(" a passionate developer who loves to learn and build stuff. ")])])}],o={name:"main-info"},c=o,u=(s("38be"),s("2877")),d=Object(u["a"])(c,r,l,!1,null,"6a731738",null),f=d.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 pb-4"},[s("b-card",{attrs:{"no-body":"",footer:"Copyright © 2020 Hüseyin Dedeoğlu. All rights reserved.","footer-class":"text-center"}},[s("b-tabs",{staticClass:"bg-light text-dark",attrs:{card:"",pills:"",lazy:"",align:"center"}},[s("b-tab",{attrs:{title:"Skills",active:""}},[s("b-card-text",[s("skillsTab")],1)],1),s("b-tab",{attrs:{title:"Projects"}},[s("b-card-text",[s("projectsTab")],1)],1),s("b-tab",{attrs:{title:"Resume"}},[s("b-card-text",[s("resumeTab")],1)],1)],1)],1)],1)},p=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item font-weight-bold bg-light"},[t._v("Frontend")]),t._l(t.frontend,(function(e){return s("li",{key:e,staticClass:"list-group-item bg-light"},[t._v(" "+t._s(e)+" ")])}))],2)]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item font-weight-bold bg-light"},[t._v("Backend")]),t._l(t.backend,(function(e){return s("li",{key:e,staticClass:"list-group-item bg-light"},[t._v(" "+t._s(e)+" ")])}))],2)]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item font-weight-bold bg-light"},[t._v("Other")]),t._l(t.other,(function(e){return s("li",{key:e,staticClass:"list-group-item bg-light"},[t._v(" "+t._s(e)+" ")])}))],2)]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-group list-group-flush bg-light"},[s("li",{staticClass:"list-group-item font-weight-bold bg-light"},[t._v("Languages")]),t._l(t.languages,(function(e){return s("li",{key:e,staticClass:"list-group-item bg-light"},[t._v(" "+t._s(e)+" ")])}))],2)])])])},h=[],v={name:"skills-tab",data:function(){return{frontend:["Javascript","Vuejs","Html","Css"],backend:["Javascript","Python","C#"],other:["Desktop apps with C#","Version Control","MSSQL","Linux"],languages:["Turkish(Native)","English(Advanced)","Chinese(Beginner)","German(Beginner)"]}}},m=v,_=Object(u["a"])(m,g,h,!1,null,null,null),C=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._l(t.projects,(function(e){return s("b-card",{key:e.title,staticClass:"mb-2",attrs:{title:e.title,tag:"article"}},[s("div",{class:"project-card-image "+e.imageClass}),s("b-card-text",[s("br"),t._l(e.tools,(function(e){return s("b-badge",{key:e,staticClass:"badge",attrs:{variant:"success"}},[t._v(" "+t._s(e)+" ")])})),s("br"),t._v(" "+t._s(e.text)+" ")],2),s("b-button-group",[s("b-button",{attrs:{href:e.live,target:"_blank",variant:"outline-primary"}},[t._v(" See Live ")]),s("b-button",{attrs:{href:e.source,target:"_blank",variant:"outline-secondary"}},[t._v(" Source ")])],1)],1)})),t._m(0)],2)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row justify-content-md-center"},[s("a",{staticClass:"btn btn-primary text-center",attrs:{target:"_blank",href:"https://github.com/dedeogluhu?tab=repositories"}},[t._v("You can find more of my projects here")])])])}],k={name:"projects-tab",data:function(){return{projects:[{title:"My Portfolio",text:"A portfolio website made using vue and bootstrap",imageClass:"project-image-dedeogluhu",live:"https://dedeogluhu.github.io",source:"https://github.com/dedeogluhu",tools:["vue","bootstrap"]}]}}},w=k,x=(s("be1a"),Object(u["a"])(w,y,j,!1,null,"13954880",null)),O=x.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("b-alert",{attrs:{show:"",dismissible:"",fade:"",variant:"danger"}},[t._v("This is just a test resume. I am going to add the real one soon. ")]),a("img",{attrs:{src:s("d49e"),alt:"Resume"}})],1)},T=[],E={name:"resume-tab"},P=E,$=(s("652c"),Object(u["a"])(P,S,T,!1,null,"4800c1da",null)),z=$.exports,M={name:"tabs-section",components:{skillsTab:C,projectsTab:O,resumeTab:z}},A=M,H=Object(u["a"])(A,b,p,!1,null,"4df3cb41",null),I=H.exports,J={name:"App",components:{mainInfo:f,tabsSection:I}},L=J,B=(s("034f"),Object(u["a"])(L,i,n,!1,null,null,null)),D=B.exports,R=s("5f5b"),V=s("b1e0"),F=(s("f9e3"),s("2dd8"),s("ecee")),G=s("f2d1"),N=s("ad3d"),Q=s("c074");a["default"].use(R["a"]),a["default"].use(V["a"]),F["c"].add(G["a"],G["b"],Q["a"]),a["default"].component("font-awesome-icon",N["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(D)}}).$mount("#app")},"652c":function(t,e,s){"use strict";var a=s("274a"),i=s.n(a);i.a},"74fe":function(t,e,s){},"85ec":function(t,e,s){},be1a:function(t,e,s){"use strict";var a=s("74fe"),i=s.n(a);i.a},d49e:function(t,e,s){t.exports=s.p+"img/dummy-resume.7997af53.jpg"}});
//# sourceMappingURL=app.ca508d3f.js.map