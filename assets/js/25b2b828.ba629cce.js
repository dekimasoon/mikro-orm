(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},212:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(1052)),c={id:"core.node",title:"Interface: Node",sidebar_label:"Node",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.node",id:"api/interfaces/core.node",isDocsHomePage:!1,title:"Interface: Node",description:"Interface: Node",source:"@site/docs/api/interfaces/core.node.md",slug:"/api/interfaces/core.node",permalink:"/docs/next/api/interfaces/core.node",editUrl:null,version:"current",sidebar_label:"Node",sidebar:"API",previous:{title:"Interface: NamingStrategy",permalink:"/docs/next/api/interfaces/core.namingstrategy"},next:{title:"Interface: OneToOneOptions<T, O>",permalink:"/docs/next/api/interfaces/core.onetooneoptions"}},p=[{value:"Properties",id:"properties",children:[{value:"dependencies",id:"dependencies",children:[]},{value:"hash",id:"hash",children:[]},{value:"state",id:"state",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-node"},"Interface: Node"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".Node"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"dependencies"},"dependencies"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"dependencies"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(a.b)("em",{parentName:"a"},"Dictionary")),"<",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.edge"},Object(a.b)("em",{parentName:"a"},"Edge")),">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8071fd0/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L13"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:13")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"hash"},"hash"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"hash"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8071fd0/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L11"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:11")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"state"},"state"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"state"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.nodestate"},Object(a.b)("em",{parentName:"a"},"NodeState"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8071fd0/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L12"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:12")))}l.isMDXComponent=!0}}]);