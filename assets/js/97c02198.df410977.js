(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var r=t(0),i=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,O=d["".concat(a,".").concat(u)]||d[u]||s[u]||c;return t?i.a.createElement(O,o(o({ref:n},l),{},{components:t})):i.a.createElement(O,o({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<c;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},635:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(8),c=(t(0),t(1052)),a={id:"knex.knex-1.oracledbconnectionconfig",title:"Interface: OracleDbConnectionConfig",sidebar_label:"OracleDbConnectionConfig",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.oracledbconnectionconfig",id:"api/interfaces/knex.knex-1.oracledbconnectionconfig",isDocsHomePage:!1,title:"Interface: OracleDbConnectionConfig",description:"Interface: OracleDbConnectionConfig",source:"@site/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.oracledbconnectionconfig",permalink:"/docs/next/api/interfaces/knex.knex-1.oracledbconnectionconfig",editUrl:null,version:"current",sidebar_label:"OracleDbConnectionConfig",sidebar:"API",previous:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.onconflictquerybuilder"},next:{title:"Interface: OrderBy<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.orderby"}},b=[{value:"Properties",id:"properties",children:[{value:"connectString",id:"connectstring",children:[]},{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"domain",id:"domain",children:[]},{value:"host",id:"host",children:[]},{value:"instanceName",id:"instancename",children:[]},{value:"password",id:"password",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],l={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-oracledbconnectionconfig"},"Interface: OracleDbConnectionConfig"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".OracleDbConnectionConfig"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"connectstring"},"connectString"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"connectString"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2039"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"database"},"database"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"database"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2034"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"debug"},"debug"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"debug"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2037"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"domain"},"domain"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"domain"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2035"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"host"},"host"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"host"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2031"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"instancename"},"instanceName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"instanceName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2036"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"password"},"password"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"password"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2033"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"requesttimeout"},"requestTimeout"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"requestTimeout"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2038"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"user"},"user"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"user"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2032"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional"),Object(c.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2040"))}p.isMDXComponent=!0}}]);