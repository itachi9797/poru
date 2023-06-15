"use strict";(self.webpackChunkporu_docs=self.webpackChunkporu_docs||[]).push([[5154],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,c=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return a?n.createElement(c,i(i({ref:t},k),{},{components:a})):n.createElement(c,i({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,d={unversionedId:"interfaces/PoruEvents",id:"interfaces/PoruEvents",title:"PoruEvents",description:"Poru / Exports / PoruEvents",source:"@site/docs/interfaces/PoruEvents.md",sourceDirName:"interfaces",slug:"/interfaces/PoruEvents",permalink:"/docs/interfaces/PoruEvents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interfaces/PoruEvents.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NodeStats",permalink:"/docs/interfaces/NodeStats"},next:{title:"PoruOptions",permalink:"/docs/interfaces/PoruOptions"}},p={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Events",id:"events",level:3},{value:"Events",id:"events-1",level:2},{value:"debug",id:"debug",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"nodeConnect",id:"nodeconnect",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"nodeDisconnect",id:"nodedisconnect",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"nodeError",id:"nodeerror",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"nodeReconnect",id:"nodereconnect",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"playerDestroy",id:"playerdestroy",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"playerUpdate",id:"playerupdate",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"queueEnd",id:"queueend",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-7",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"raw",id:"raw",level:3},{value:"Type declaration",id:"type-declaration-8",level:4},{value:"Parameters",id:"parameters-8",level:5},{value:"Returns",id:"returns-8",level:5},{value:"Defined in",id:"defined-in-8",level:4},{value:"socketClose",id:"socketclose",level:3},{value:"Type declaration",id:"type-declaration-9",level:4},{value:"Parameters",id:"parameters-9",level:5},{value:"Returns",id:"returns-9",level:5},{value:"Defined in",id:"defined-in-9",level:4},{value:"trackEnd",id:"trackend",level:3},{value:"Type declaration",id:"type-declaration-10",level:4},{value:"Parameters",id:"parameters-10",level:5},{value:"Returns",id:"returns-10",level:5},{value:"Defined in",id:"defined-in-10",level:4},{value:"trackError",id:"trackerror",level:3},{value:"Type declaration",id:"type-declaration-11",level:4},{value:"Parameters",id:"parameters-11",level:5},{value:"Returns",id:"returns-11",level:5},{value:"Defined in",id:"defined-in-11",level:4},{value:"trackStart",id:"trackstart",level:3},{value:"Type declaration",id:"type-declaration-12",level:4},{value:"Parameters",id:"parameters-12",level:5},{value:"Returns",id:"returns-12",level:5},{value:"Defined in",id:"defined-in-12",level:4}],k={toc:o},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/introduction"},"Poru")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules"},"Exports")," / PoruEvents"),(0,r.kt)("h1",{id:"interface-poruevents"},"Interface: PoruEvents"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#debug"},"debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#nodeconnect"},"nodeConnect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#nodedisconnect"},"nodeDisconnect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#nodeerror"},"nodeError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#nodereconnect"},"nodeReconnect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#playerdestroy"},"playerDestroy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#playerupdate"},"playerUpdate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#queueend"},"queueEnd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#raw"},"raw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#socketclose"},"socketClose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#trackend"},"trackEnd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#trackerror"},"trackError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/interfaces/PoruEvents#trackstart"},"trackStart"))),(0,r.kt)("h2",{id:"events-1"},"Events"),(0,r.kt)("h3",{id:"debug"},"debug"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"debug"),": (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when data useful for debugging is produced"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L65"},"src/Poru.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nodeconnect"},"nodeConnect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nodeConnect"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when lavalink node is connected with poru"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L83"},"src/Poru.ts:83")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nodedisconnect"},"nodeDisconnect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nodeDisconnect"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"event?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"event?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when data useful for debugging is produced"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L92"},"src/Poru.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nodeerror"},"nodeError"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nodeError"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when lavalink nodes get an error"),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L109"},"src/Poru.ts:109")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nodereconnect"},"nodeReconnect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nodeReconnect"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when poru try to reconnect with lavalink node while disconnected"),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")))))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L100"},"src/Poru.ts:100")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playerdestroy"},"playerDestroy"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"playerDestroy"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when a player destroy"),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L164"},"src/Poru.ts:164")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playerupdate"},"playerUpdate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"playerUpdate"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when a player got updates"),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L156"},"src/Poru.ts:156")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queueend"},"queueEnd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"queueEnd"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when player's queue  is completed and going to disconnect"),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))))),(0,r.kt)("h5",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L138"},"src/Poru.ts:138")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"raw"},"raw"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"raw"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"topic"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-8"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"from what section the event come")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emitted when a Response is come")))),(0,r.kt)("h5",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L74"},"src/Poru.ts:74")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"socketclose"},"socketClose"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"socketClose"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-9"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when the websocket connection to Discord voice servers is closed"),(0,r.kt)("h5",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"track")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L174"},"src/Poru.ts:174")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackend"},"trackEnd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"trackEnd"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LavalinkData?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-10"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LavalinkData?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted whenever track ends"),(0,r.kt)("h5",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"track")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LavalinkData?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h5",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L129"},"src/Poru.ts:129")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackerror"},"trackError"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"trackError"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-11"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted when a track gets stuck while playing"),(0,r.kt)("h5",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"track")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L148"},"src/Poru.ts:148")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackstart"},"trackStart"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"trackStart"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-12"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"player"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Emitted whenever player start playing new track"),(0,r.kt)("h5",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"track")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/classes/Track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")))))),(0,r.kt)("h5",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"void"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/brblacky/poru/blob/7ba24d3/src/Poru.ts#L119"},"src/Poru.ts:119")))}s.isMDXComponent=!0}}]);