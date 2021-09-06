"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6202],{56937:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(67294),o=n(73727),a=n(87462),c=n(63366),s=n(45697),i=n.n(s),l=n(94184),u=n.n(l),f=n(23663),d={tag:f.iC,active:i().bool,className:i().string,cssModule:i().object},p=function(e){var t=e.className,n=e.cssModule,o=e.active,s=e.tag,i=(0,c.Z)(e,["className","cssModule","active","tag"]),l=(0,f.mx)(u()(t,!!o&&"active","breadcrumb-item"),n);return r.createElement(s,(0,a.Z)({},i,{className:l,"aria-current":o?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"};const m=p;var b={tag:f.iC,listTag:f.iC,className:i().string,listClassName:i().string,cssModule:i().object,children:i().node,"aria-label":i().string},h=function(e){var t=e.className,n=e.listClassName,o=e.cssModule,s=e.children,i=e.tag,l=e.listTag,d=e["aria-label"],p=(0,c.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=(0,f.mx)(u()(t),o),b=(0,f.mx)(u()("breadcrumb",n),o);return r.createElement(i,(0,a.Z)({},p,{className:m,"aria-label":d}),r.createElement(l,{className:b},s))};h.propTypes=b,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};const v=h;var y=n(28216),g=n(85893);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(c,e);var t,n,r,a=k(c);function c(){return w(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.items,n=e.main,r=e.icon,a=e.content.cms.pages.general.home,c=e.dark,s=void 0!==c&&c,i=null;return t&&(i=t.map((function(e,t){return(0,g.jsx)(m,{children:(0,g.jsx)(o.OL,{className:"text-".concat(s?"light":"secondary"),to:e.to,children:e.content})},t)}))),(0,g.jsxs)(v,{className:"d-none d-sm-flex align-items-center",color:s?"light":"secondary",listClassName:"bg-transparent rounded-0 justify-content-end text-large",style:{top:"50%",right:0,transform:"translateY(-10px)",position:"absolute",zIndex:1e3},children:[(0,g.jsx)(m,{children:(0,g.jsxs)(o.OL,{className:"text-".concat(s?"light":"secondary"),to:"/",children:[(0,g.jsx)("i",{className:"fas fa-"+r+" mr-1"})," ",(0,g.jsx)("strong",{children:a})]})}),i,(0,g.jsx)(m,{className:"text-".concat(s?"light":"secondary"," text-decoration-none"),active:!0,children:n})]})}}])&&N(t.prototype,n),r&&N(t,r),c}(r.Component);const S=(0,y.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}))(C)},14098:(e,t,n)=>{n.d(t,{Z:()=>u});n(67294);var r=n(73727),o=n(51252),a=n(97975),c=n(15538),s=n(17625),i=n(51436),l=n(85893);const u=function(e){var t=e.onSubmit,n=e.xs,u=void 0===n?12:n,f=e.sm,d=void 0===f?12:f,p=e.md,m=void 0===p?12:p,b=e.lg,h=void 0===b?12:b,v=e.xl,y=void 0===v?12:v,g=e.icon,x=e.title,j=e.subtitle,O=e.className,w=void 0===O?"":O,N=e.dark,Z=void 0!==N&&N,k=e.innerClassName,P=void 0===k?"":k,T=e.outerClassName,C=void 0===T?"":T,S=e.children,E=e.style,M=e.id,_=e.list,D=e.link,R=e.disabled;return(0,l.jsxs)(o.Z,{xs:u,sm:d,md:m,lg:h,xl:y,className:C,children:[(0,l.jsxs)("div",{className:"rounded-4 d-flex align-items-center mb-4 mb-sm-5 py-3 py-sm-4 px-4 px-sm-5 bg-".concat(Z?"greenblue":"greenblue-10"," ").concat(w),children:[(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[g&&(0,l.jsx)("i",{className:"fas fa-"+g+" mr-3 mr-sm-4 text-30 text-greenblue fa-fw"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-".concat(Z?"light":"darkgreenblue"," text-700 text-20 mb-1"),children:x}),(0,l.jsx)("div",{className:"text-secondary text-10",children:j})]})]}),_&&(0,l.jsx)(r.rU,{to:D,className:"ml-auto d-none d-md-inline",children:(0,l.jsxs)(a.Z,{color:"greenblue",className:"rounded-2 py-2 text-16 text-500 px-3 px-sm-4",children:[(0,l.jsx)(s.G,{icon:i.A8,fixedWidth:!0,className:"mr-3"}),_]})})]}),(0,l.jsx)("div",{className:"d-flex flex-column ".concat(Z?"text-light bg-greenblue":""," ").concat(w),style:E,children:(0,l.jsx)("div",{className:"flex-fill d-flex flex-column",children:(0,l.jsx)("div",{className:"flex-fill",children:R?(0,l.jsx)("div",{id:M,className:P,encType:"multipart/form-data",children:S}):(0,l.jsx)(c.Z,{onSubmit:t,id:M,className:P,encType:"multipart/form-data",children:S})})})})]})}},56719:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(93379),o=n.n(r),a=n(92178),c={insert:"head",singleton:!1};o()(a.Z,c);a.Z.locals;var s=n(85893);const i=function(e){var t=e.children;e.dark;return(0,s.jsx)("div",{className:"UI TitleWrapper py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 bg-green-15 position-relative",children:t})}},99412:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(85893);const o=function(e){var t=e.err;return t?(0,r.jsx)("div",{className:"alert alert-danger",children:t.message?t.message:t}):null}},92740:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(67294),o=n(87462),a=n(63366),c=n(4942),s=n(45697),i=n.n(s),l=n(94184),u=n.n(l),f=n(23663),d=n(69638);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={children:i().node,className:i().string,closeClassName:i().string,closeAriaLabel:i().string,cssModule:i().object,color:i().string,fade:i().bool,isOpen:i().bool,toggle:i().func,tag:f.iC,transition:i().shape(d.Z.propTypes),innerRef:i().oneOfType([i().object,i().string,i().func])},h={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},d.Z.defaultProps),{},{unmountOnExit:!0})};function v(e){var t=e.className,n=e.closeClassName,c=e.closeAriaLabel,s=e.cssModule,i=e.tag,l=e.color,p=e.isOpen,b=e.toggle,h=e.children,v=e.transition,y=e.fade,g=e.innerRef,x=(0,a.Z)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=(0,f.mx)(u()(t,"alert","alert-"+l,{"alert-dismissible":b}),s),O=(0,f.mx)(u()("close",n),s),w=m(m(m({},d.Z.defaultProps),v),{},{baseClass:y?v.baseClass:"",timeout:y?v.timeout:0});return r.createElement(d.Z,(0,o.Z)({},x,w,{tag:i,className:j,in:p,role:"alert",innerRef:g}),b?r.createElement("button",{type:"button",className:O,"aria-label":c,onClick:b},r.createElement("span",{"aria-hidden":"true"},"×")):null,h)}v.propTypes=b,v.defaultProps=h;const y=v;var g=n(85893);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const O=function(e){var t=e.message,n=e.time,o=x((0,r.useState)(!0),2),a=o[0],c=o[1];return n&&setTimeout((function(){c(!1)}),n),t?(0,g.jsx)(y,{color:t.type,isOpen:a,children:t.content}):null}},71795:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(97975),o=n(17625),a=n(85893);const c=function(e){var t=e.children,n=e.color,c=e.icon,s=e.iconColor,i=void 0===s?"reset":s,l=e.className,u=void 0===l?"":l,f=e.size,d=e.pill,p=void 0!==d&&d,m=e.block;return(0,a.jsxs)(r.Z,{block:m,color:n,size:f,className:"d-inline-flex justify-content-center align-items-center ".concat(p?" rounded-pill ":"rounded-2"," ").concat(u),children:[t,(0,a.jsx)(o.G,{size:"lg",icon:c,className:"ml-3 text-".concat(i)})]})}},91658:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(85893);const o=function(e){var t=e.children,n=e.className,o=e.dark,a=void 0!==o&&o;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-30 d-none d-sm-block mb-1 text-".concat(a?"light":"secondary"," ").concat(n),children:t}),(0,r.jsx)("div",{className:"text-24 d-sm-none mb-1 text-".concat(a?"light":"secondary"," ").concat(n),children:t})]})}},31132:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(85893);const o=function(e){var t=e.children,n=e.className,o=e.dark,a=void 0!==o&&o;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-".concat(a?"light":"secondary"," text-18 d-none d-sm-block text-300 ").concat(n),children:t}),(0,r.jsx)("div",{className:"text-".concat(a?"light":"secondary"," text-14 d-sm-none text-300 ").concat(n),children:t})]})}},96202:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var r=n(87757),o=n.n(r),a=n(67294),c=n(28216),s=n(5977),i=n(82669),l=n(67954),u=n(609),f=n(53999),d=n(98008),p=n(18829),m=n(10267),b=n(77243),h=n(9393),v=n(51252),y=n(56024),g=n(56937),x=n(91658),j=n(31132),O=n(99412),w=n(73950),N=n(14098),Z=n(71795),k=n(56719),P=n(92740),T=n(1495),C=n(92903);const S={restaurants:{home:{you_are_on_category:"You are on category",select_category:"Select category",search:"Search"},meals:{price:"Price",compose:"Compose your meal to know the cost",addons:{title:"Food Addons",dear_customers:"Dear customers, this item comes with an addon of your choice. If you would like extra addon, please select below",your_cart_cost_is:"Your cart cost is"},description:"Description",must_read:"Must Read",dear_customers:"Dear customers, we would love to make available more food items but unfortunately kindly note that some of the addons mentioned below might not be available. For special request, please contact us. Thanks for understanding.",comments:{title:"Comments",post_comment:"Post comment",name:"Full name",body:"Type something here"}}}};var E=n(85893);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){_(a,r,o,c,s,"next",e)}function s(e){_(a,r,o,c,s,"throw",e)}c(void 0)}))}}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return a}(e,t)||Y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K="wrench",J=function(e){var t=e.frontend,n=e.language,r=H((0,a.useState)("".concat(n.abbr,"-restaurants")),2),o=r[0],c=r[1],s=H((0,a.useState)(t),2),v=s[0],y=s[1],g=function(e){for(var t=B({},v),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(1===r.length)return t[r[0]]=e.target.value,y(t);for(var a=[],c=B({},v),s=0;s<r.length-1;s++){var i=r[s];c=c[i],a.push(c)}a[a.length-1][r[r.length-1]]=e.target.value;for(var l=1;l<r.length-1;l++){var u=r[r.length-1-l],f=a.length-1-l;a[f][u]=a[f+1]}t[r[0]]=a[0],y(t)},x=function e(t,n,r,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];return Object.keys(t).map((function(s){var f,d,p=t[s],m="".concat(n,"[").concat(s,"]"),b="".concat(n,"-").concat(s),h=r[s],v=o.concat(s),y=a.find((function(e){return new RegExp(e.regex.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(m)}));f=y?y.action(p):null;var x=c.find((function(e){return new RegExp(e.regex.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(m)}));return d=x?x.action(p):null,"string"==typeof p?(0,E.jsxs)(E.Fragment,{children:[f,(0,E.jsxs)(i.Z,{className:"col-md-6 col-lg-4 align-self-end",children:[(0,E.jsx)(l.Z,{className:"text-small text-500",children:p}),(0,E.jsx)(u.Z,{type:"text",name:m,id:b,placeholder:p,onChange:function(e){return g.apply(void 0,[e].concat(W(v)))},value:h})]}),d]}):e(p,m,h,v,a,c)}))},j=Object.keys(t).map((function(e){var t="".concat(n.abbr,"-").concat(e);return(0,E.jsx)(f.Z,{children:(0,E.jsx)(d.Z,{className:o===t?"active":"",onClick:function(){var e;o!==(e=t)&&c(e)},children:(0,E.jsx)("span",{className:"text-capitalize",children:e.split("_").join(" ")})})},t)})),O="".concat(n.abbr,"[frontend]"),w=Object.keys(S).map((function(e){var t=S[e],r="".concat(O,"[").concat(e,"]"),o=v[e],a=x(t,r,o,[e]);return(0,E.jsx)(p.Z,{tabId:"".concat(n.abbr,"-").concat(e),className:"pt-4",children:(0,E.jsx)(m.Z,{children:a})},Math.random()+r)}));return(0,E.jsxs)("div",{children:[(0,E.jsx)(b.Z,{tabs:!0,pills:!0,children:j}),(0,E.jsx)(h.Z,{activeTab:o,children:w})]},Math.random()*Math.random())},V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,e);var t,n,r,a,c=z(i);function i(){var e;R(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return q(U(e=c.call.apply(c,[this].concat(n))),"state",{activeTab:"en"}),q(U(e),"submitHandler",function(){var t=D(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.patch(n.target);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),q(U(e),"inputChangeHandler",(function(t){var n=t.target,r=n.name,o=n.value,a=n.files;e.setState(q({},r,a?a[0]:o))})),q(U(e),"fileUpload",(function(){return document.getElementById("logo").click()})),q(U(e),"toggle",(function(t){e.state.activeTab!==t&&e.setState({activeTab:t})})),e}return t=i,n=[{key:"componentDidMount",value:(a=D(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.reset(),this.props.get();case 2:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this,t=this.props,n=t.content.cms.pages,r=n.components.form.save,o=n.backend.pages.cms,a=o.title,c=o.frontend,i=t.backend.cms,l=i.loading,u=i.error,T=i.message,C=i.cms,S=i.languages,M=t.auth.data.role.features,_=this.state.activeTab,D=null,R=null,A=M.find((function(e){return"cms"===e.prefix})),I=!(A&&JSON.parse(A.permissions).includes("u"))&&(0,E.jsx)(s.l_,{to:"/user/dashboard"});if(l)D=(0,E.jsx)(v.Z,{xs:12,children:(0,E.jsx)(w.Z,{})});else{R=(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(O.Z,{err:u})}),S||(S=[]);var z=S.map((function(t){return(0,E.jsx)(f.Z,{children:(0,E.jsx)(d.Z,{className:_===t.abbr?"active":"",onClick:function(){return e.toggle(t.abbr)},children:t.name})},Math.random())})),F=S.map((function(e){return(0,E.jsx)(p.Z,{tabId:e.abbr,children:(0,E.jsx)(J,{frontend:C.pages[e.abbr].frontend,language:e})},Math.random())}));D=(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(m.Z,{children:(0,E.jsx)(N.Z,{onSubmit:this.submitHandler,icon:K,title:c,link:"/admin/cms",innerClassName:"row",className:"shadow-sm",children:(0,E.jsxs)(v.Z,{lg:12,children:[(0,E.jsx)(P.Z,{message:T}),(0,E.jsxs)(m.Z,{children:[(0,E.jsx)("input",{type:"hidden",name:"_method",defaultValue:"PATCH"}),(0,E.jsx)(v.Z,{lg:2,children:(0,E.jsx)(b.Z,{tabs:!0,vertical:!0,pills:!0,children:z})}),(0,E.jsx)(v.Z,{lg:10,children:(0,E.jsx)(h.Z,{activeTab:_,children:F})}),(0,E.jsx)("div",{className:"col-12",children:(0,E.jsx)(Z.Z,{color:"green",icon:y.r6,children:r})})]})]})})})})}return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(k.Z,{children:[(0,E.jsx)(g.Z,{main:c,icon:K}),(0,E.jsx)(x.Z,{children:a}),(0,E.jsx)(j.Z,{children:c})]}),(0,E.jsxs)("div",{className:"p-4 pb-0",children:[I,R,D]})]})}}],r=[{key:"getDerivedStateFromProps",value:function(e,t){if(e.backend.cms.cms&&""===t.app_name){var n=e.backend.cms.cms.frontend;return(0,C.v4)(t,B({},n))}return t}}],n&&A(t.prototype,n),r&&A(t,r),i}(a.Component);const Q=(0,s.EN)((0,c.$j)((function(e){return B({},e)}),(function(e){return{get:function(){return e((0,T.TD)())},patch:function(t){return e((0,T.eS)("frontend",t))},reset:function(){return e((0,T.x$)())}}}))(V))},1495:(e,t,n)=>{n.d(t,{x$:()=>f,TD:()=>b,eS:()=>h});var r=n(87757),o=n.n(r),a=n(73501);function c(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){c(a,r,o,s,i,"next",e)}function i(e){c(a,r,o,s,i,"throw",e)}s(void 0)}))}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u="/api/",f=function(){return{type:a.vk}},d=function(){return{type:a.Kf}},p=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:a.Zf},e)},m=function(e){return{type:a.yl,error:e}},b=function(){return function(){var e=s(o().mark((function e(t,n){var r,a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),r=n().auth.role,e.prev=2,a=localStorage.getItem("token"),e.next=6,fetch("".concat(u+r,"/cms"),{headers:{Authorization:a}});case 6:return c=e.sent,e.next=9,c.json();case 9:s=e.sent,t(p(s)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),t(m(e.t0));case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}()},h=function(e,t){return function(){var n=s(o().mark((function n(r,a){var c,s,i,l,f;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(d()),c=a().auth.role,n.prev=2,s=localStorage.getItem("token"),i=new FormData(t),n.next=7,fetch("".concat(u+c,"/cms/").concat(e),{method:"POST",body:i,headers:{Authorization:s}});case 7:return l=n.sent,n.next=10,l.json();case 10:if(f=n.sent,422!==l.status){n.next=13;break}throw new Error(Object.values(f.errors).join("\n"));case 13:r(p(f)),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(2),console.log(n.t0),r(m(n.t0));case 20:case"end":return n.stop()}}),n,null,[[2,16]])})));return function(e,t){return n.apply(this,arguments)}}()}},92178:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".UI.TitleWrapper+div{padding:1rem}@media (min-width:800px){.UI.TitleWrapper+div{padding:1.5rem}}@media (min-width:1900px){.UI.TitleWrapper+div{padding:3rem}}",""]);const a=o},15538:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(87462),o=n(63366),a=n(97326),c=n(51721),s=n(67294),i=n(45697),l=n.n(i),u=n(94184),f=n.n(u),d=n(23663),p={children:l().node,inline:l().bool,tag:d.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),className:l().string,cssModule:l().object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,a.Z)(n)),n.submit=n.submit.bind((0,a.Z)(n)),n}(0,c.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.inline,c=e.tag,i=e.innerRef,l=(0,o.Z)(e,["className","cssModule","inline","tag","innerRef"]),u=(0,d.mx)(f()(t,!!a&&"form-inline"),n);return s.createElement(c,(0,r.Z)({},l,{ref:i,className:u}))},t}(s.Component);m.propTypes=p,m.defaultProps={tag:"form"};const b=m},82669:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),o=n(63366),a=n(67294),c=n(45697),s=n.n(c),i=n(94184),l=n.n(i),u=n(23663),f={children:s().node,row:s().bool,check:s().bool,inline:s().bool,disabled:s().bool,tag:u.iC,className:s().string,cssModule:s().object},d=function(e){var t=e.className,n=e.cssModule,c=e.row,s=e.disabled,i=e.check,f=e.inline,d=e.tag,p=(0,o.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=(0,u.mx)(l()(t,!!c&&"row",i?"form-check":"form-group",!(!i||!f)&&"form-check-inline",!(!i||!s)&&"disabled"),n);return"fieldset"===d&&(p.disabled=s),a.createElement(d,(0,r.Z)({},p,{className:m}))};d.propTypes=f,d.defaultProps={tag:"div"};const p=d},67954:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),o=n(63366),a=n(67294),c=n(45697),s=n.n(c),i=n(94184),l=n.n(i),u=n(23663),f=s().oneOfType([s().number,s().string]),d=s().oneOfType([s().bool,s().string,s().number,s().shape({size:f,order:f,offset:f})]),p={children:s().node,hidden:s().bool,check:s().bool,size:s().string,for:s().string,tag:u.iC,className:s().string,cssModule:s().object,xs:d,sm:d,md:d,lg:d,xl:d,widths:s().array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,c=e.hidden,s=e.widths,i=e.tag,f=e.check,d=e.size,p=e.for,m=(0,o.Z)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(t,r){var o=e[t];if(delete m[t],o||""===o){var a,c=!r;if((0,u.Kn)(o)){var s,i=c?"-":"-"+t+"-";a=b(c,t,o.size),h.push((0,u.mx)(l()(((s={})[a]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s))),n)}else a=b(c,t,o),h.push(a)}}));var v=(0,u.mx)(l()(t,!!c&&"sr-only",!!f&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),n);return a.createElement(i,(0,r.Z)({htmlFor:p},m,{className:v}))};h.propTypes=p,h.defaultProps=m;const v=h},98008:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(87462),o=n(63366),a=n(97326),c=n(51721),s=n(67294),i=n(45697),l=n.n(i),u=n(94184),f=n.n(u),d=n(23663),p={tag:d.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),disabled:l().bool,active:l().bool,className:l().string,cssModule:l().object,onClick:l().func,href:l().any},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,a.Z)(n)),n}(0,c.Z)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.active,c=e.tag,i=e.innerRef,l=(0,o.Z)(e,["className","cssModule","active","tag","innerRef"]),u=(0,d.mx)(f()(t,"nav-link",{disabled:l.disabled,active:a}),n);return s.createElement(c,(0,r.Z)({},l,{ref:i,onClick:this.onClick,className:u}))},t}(s.Component);m.propTypes=p,m.defaultProps={tag:"a"};const b=m},9393:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(51721),a=n(67294),c=n(45697),s=n.n(c),i=n(94184),l=n.n(i),u=n(70635),f=n(23663),d={tag:f.iC,activeTab:s().any,className:s().string,cssModule:s().object},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeTab:n.props.activeTab},n}return(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.tag,c=(0,f.CE)(this.props,Object.keys(d)),s=(0,f.mx)(l()("tab-content",t),n);return a.createElement(u.q.Provider,{value:{activeTabId:this.state.activeTab}},a.createElement(o,(0,r.Z)({},c,{className:s})))},t}(a.Component);const m=p;p.propTypes=d,p.defaultProps={tag:"div"}},70635:(e,t,n)=>{n.d(t,{q:()=>r});var r=n(67294).createContext({})},18829:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),o=n(63366),a=n(67294),c=n(45697),s=n.n(c),i=n(94184),l=n.n(i),u=n(70635),f=n(23663),d={tag:f.iC,className:s().string,cssModule:s().object,tabId:s().any};function p(e){var t=e.className,n=e.cssModule,c=e.tabId,s=e.tag,i=(0,o.Z)(e,["className","cssModule","tabId","tag"]),d=function(e){return(0,f.mx)(l()("tab-pane",t,{active:c===e}),n)};return a.createElement(u.q.Consumer,null,(function(e){var t=e.activeTabId;return a.createElement(s,(0,r.Z)({},i,{className:d(t)}))}))}p.propTypes=d,p.defaultProps={tag:"div"}}}]);