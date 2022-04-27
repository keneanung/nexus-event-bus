"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[367],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Using the event bus in external TypeScript projects",c={unversionedId:"Advanced Usage/external_ts",id:"Advanced Usage/external_ts",title:"Using the event bus in external TypeScript projects",description:"Using the event bus in external TypeScript projects is slightly difficult as TypeScript does not know of the type for the global variable eventBus. Additionally, using the interface functions will make the tests fail as the global is not defined.",source:"@site/docs/Advanced Usage/external_ts.md",sourceDirName:"Advanced Usage",slug:"/Advanced Usage/external_ts",permalink:"/nexus-event-bus/docs/Advanced Usage/external_ts",editUrl:"https://github.com/keneanung/nexus-event-bus/edit/development/website/docs/Advanced Usage/external_ts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/nexus-event-bus/docs/basic_usage"},next:{title:"Using the event bus as an internal dependency for events",permalink:"/nexus-event-bus/docs/Advanced Usage/internal_events"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-event-bus-in-external-typescript-projects"},"Using the event bus in external TypeScript projects"),(0,i.kt)("p",null,"Using the event bus in external TypeScript projects is slightly difficult as TypeScript does not know of the type for the global variable ",(0,i.kt)("inlineCode",{parentName:"p"},"eventBus"),". Additionally, using the interface functions will make the tests fail as the global is not defined."),(0,i.kt)("p",null,"Solving the first issue is relatively straight forward as we need to ",(0,i.kt)("inlineCode",{parentName:"p"},"declare")," the variable so TypeScript knows of it. First install the package ",(0,i.kt)("inlineCode",{parentName:"p"},"@keneanung/nexus-event-bus")," (i.e. through a terminal):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @keneanung/nexus-event-bus\n")),(0,i.kt)("p",null,"Then add the following to the top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { IEventBus } from "@keneanung/nexus-event-bus";\n\ndeclare global {\n  // eslint-disable-next-line no-var\n  var eventBus: IEventBus\n};\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-disable-next-line")," is there to prevent the ESLint rule ",(0,i.kt)("inlineCode",{parentName:"p"},"no-var")," from complaining about the global variable. But we need to declare it as ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," to be able to assign it in tests."),(0,i.kt)("p",null,"To make the tests work, the easiest way would be to install the npm package ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-mock-extended")," as a development dependency and use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mock } from 'jest-mock-extended';\nimport { IEventBus } from '@keneanung/nexus-event-bus';\n\nglobalThis.eventBus = mock<IEventBus>();\n\ntest('My Greeter', () => {\n  expect(Greeter('Carl')).toBe('');\n});\n")))}f.isMDXComponent=!0}}]);