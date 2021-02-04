(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),o=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=o(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=o(a),j=b,s=i["".concat(c,".").concat(j)]||i[j]||O[j]||r;return a?n.a.createElement(s,p(p({ref:t},m),{},{components:a})):n.a.createElement(s,p({ref:t},m))}));function s(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=j;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:b,c[1]=p;for(var m=2;m<r;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},628:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var b=a(3),n=a(7),r=(a(0),a(1256)),c={id:"core.biginttype",title:"Class: BigIntType",sidebar_label:"BigIntType",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.biginttype",id:"api/classes/core.biginttype",isDocsHomePage:!1,title:"Class: BigIntType",description:"Class: BigIntType",source:"@site/docs/api/classes/core.biginttype.md",slug:"/api/classes/core.biginttype",permalink:"/docs/next/api/classes/core.biginttype",editUrl:null,version:"current",sidebar_label:"BigIntType",sidebar:"API",previous:{title:"Class: BaseEntity<T, PK, P>",permalink:"/docs/next/api/classes/core.baseentity"},next:{title:"Class: BlobType",permalink:"/docs/next/api/classes/core.blobtype"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToDatabaseValueSQL",id:"converttodatabasevaluesql",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"convertToJSValueSQL",id:"converttojsvaluesql",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],m={toc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-biginttype"},"Class: BigIntType"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".BigIntType"),Object(r.b)("p",null,"This type will automatically convert string values returned from the database to native JS bigints."),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(r.b)("em",{parentName:"a"},"Type")),"<",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"bigint")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"undefined"),", ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"undefined"),">"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"BigIntType")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new BigIntType"),"(): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.biginttype"}),Object(r.b)("em",{parentName:"a"},"BigIntType"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.biginttype"}),Object(r.b)("em",{parentName:"a"},"BigIntType"))),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"compareastype"},"compareAsType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"How should the raw database values be compared? Used in ",Object(r.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/Type.ts#L36"}),"packages/core/src/types/Type.ts:36")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"bigint"),"): ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"td"},"null")," ","|"," ",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"bigint"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/BigIntType.ts#L10"}),"packages/core/src/types/BigIntType.ts:10")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"converttodatabasevaluesql"},"convertToDatabaseValueSQL"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional"),Object(r.b)("strong",{parentName:"p"},"convertToDatabaseValueSQL"),"(",Object(r.b)("inlineCode",{parentName:"p"},"key"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"key")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"platform")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/Type.ts#L25"}),"packages/core/src/types/Type.ts:25")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"bigint"),"): ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"td"},"null")," ","|"," ",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"bigint"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/BigIntType.ts#L18"}),"packages/core/src/types/BigIntType.ts:18")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"converttojsvaluesql"},"convertToJSValueSQL"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional"),Object(r.b)("strong",{parentName:"p"},"convertToJSValueSQL"),"(",Object(r.b)("inlineCode",{parentName:"p"},"key"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Modifies the SQL expression (identifier, parameter) to convert to a JS value."),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"key")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"platform")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/Type.ts#L30"}),"packages/core/src/types/Type.ts:30")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"platform")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/BigIntType.ts#L26"}),"packages/core/src/types/BigIntType.ts:26")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tojson"},"toJSON"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toJSON"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"bigint"),", ",Object(r.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")),"): ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"bigint")),Object(r.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"td"},"null")," ","|"," ",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"bigint"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"platform")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"bigint")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/Type.ts#L44"}),"packages/core/src/types/Type.ts:44")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettype"},"getType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(r.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/core#constructor"}),Object(r.b)("em",{parentName:"a"},"Constructor")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(r.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(r.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"JSType"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cls")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/modules/core#constructor"}),Object(r.b)("em",{parentName:"a"},"Constructor")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/core.type"}),Object(r.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(r.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c87d800/packages/core/src/types/Type.ts#L56"}),"packages/core/src/types/Type.ts:56")))}o.isMDXComponent=!0}}]);