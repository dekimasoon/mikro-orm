(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(290)),i={title:"Debugging"},c=[{value:"Custom Logger",id:"custom-logger",children:[]},{value:"Logger Namespaces",id:"logger-namespaces",children:[]}],s={rightToc:c},l="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: true,\n});\n")),Object(a.b)("p",null,"By doing this ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",Object(a.b)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),Object(a.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),Object(a.b)("h2",{id:"custom-logger"},"Custom Logger"),Object(a.b)("p",null,"You can also provide your own logger via ",Object(a.b)("inlineCode",{parentName:"p"},"logger")," option. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),Object(a.b)("h2",{id:"logger-namespaces"},"Logger Namespaces"),Object(a.b)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",Object(a.b)("inlineCode",{parentName:"p"},"debug")," option:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),Object(a.b)("p",null,"Currently there are 3 namespaces \u2013 ",Object(a.b)("inlineCode",{parentName:"p"},"query"),", ",Object(a.b)("inlineCode",{parentName:"p"},"discovery")," and ",Object(a.b)("inlineCode",{parentName:"p"},"info"),"."))}p.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,b=p[c+"."+u]||p[u]||l[u]||a;return n?o.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);