"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[559],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,h=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6216:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={authors:"keneanung"},l="Initial Release v0.0.3",u={permalink:"/nexus-event-bus/blog/2021/04/11/_Initial_Release",editUrl:"https://github.com/keneanung/nexus-event-bus/edit/development/website/blog/blog/2021-04-11_Initial_Release.md",source:"@site/blog/2021-04-11_Initial_Release.md",title:"Initial Release v0.0.3",description:"Hello World!",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[],readingTime:.99,truncated:!1,authors:[{name:"keneanung",url:"https://github.com/keneanung",email:"keneanung@gmail.com",key:"keneanung"}],frontMatter:{authors:"keneanung"},prevItem:{title:"Khasseems Wishlist: v0.1.1",permalink:"/nexus-event-bus/blog/2021/04/27/_Khassems_Wishlist"}},c={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")),(0,o.kt)("p",null,"And with that out of the way, I present the first release on my event bus package for the Nexus MUD client."),(0,o.kt)("p",null,"While there are already implementations of the event bus for the Nexus MUD client (ie as part of the NexSys and NexGUI projects), I wanted to make a package that is not part of a larger project. Instead this project can be installed individually and be used as a dependency for other projects. This should make it easier for the community to adapt a set of lightweight standard packages that still allow the users a large amount of flexibility to use the packages they like."),(0,o.kt)("p",null,"This release is the minimal viable product and contains the most basic functionality: Registering event handlers, raising events and unregistering event handlers. The ",(0,o.kt)("a",{parentName:"p",href:"https://keneanung.github.io/nexus-event-bus/docs/api"},"API documentation")," has all the gritty details."),(0,o.kt)("p",null,"More features may be added in the future. Feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keneanung/nexus-event-bus/issues/new"},"create a new issue")," to discuss further extnsions."),(0,o.kt)("p",null,"If you like my work and want to support me, please consider ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/keneanung"},"sponsoring me"),"."),(0,o.kt)("p",null,"Oh, and why is the initial release version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.3"),"? Well, I messed up the packaging, so I had to redo it a few times. I'm sorry."))}m.isMDXComponent=!0}}]);