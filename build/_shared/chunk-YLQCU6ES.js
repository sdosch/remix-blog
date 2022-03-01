import{c as e2}from"/build/_shared/chunk-5NKBV7YK.js";import{b as V2,c as Q2,e as z3,f as S,g as x}from"/build/_shared/chunk-TOAMQMCD.js";var Z1=V2((u6,J1)=>{"use strict";x();var $4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";J1.exports=$4});var e3=V2((d6,c3)=>{"use strict";x();var K4=Z1();function a3(){}function C3(){}C3.resetWarningCache=a3;c3.exports=function(){function a(e,r,f,i,n,o){if(o!==K4){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}a.isRequired=a;function C(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:C,element:a,elementType:a,instanceOf:C,node:a,objectOf:C,oneOf:C,oneOfType:C,shape:C,exact:C,checkPropTypes:C3,resetWarningCache:a3};return c.PropTypes=c,c}});var i3=V2((x6,r3)=>{x();r3.exports=e3()();var g6,S6});x();x();x();function J2(a,C){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);C&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),c.push.apply(c,e)}return c}function l(a){for(var C=1;C<arguments.length;C++){var c=arguments[C]!=null?arguments[C]:{};C%2?J2(Object(c),!0).forEach(function(e){H3(a,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):J2(Object(c)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(c,e))})}return a}function o2(a){return o2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},o2(a)}function L3(a,C){if(!(a instanceof C))throw new TypeError("Cannot call a class as a function")}function Z2(a,C){for(var c=0;c<C.length;c++){var e=C[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function h3(a,C,c){return C&&Z2(a.prototype,C),c&&Z2(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function H3(a,C,c){return C in a?Object.defineProperty(a,C,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[C]=c,a}function F2(a,C){return V3(a)||u3(a,C)||g1(a,C)||g3()}function v2(a){return m3(a)||p3(a)||g1(a)||d3()}function m3(a){if(Array.isArray(a))return S2(a)}function V3(a){if(Array.isArray(a))return a}function p3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function u3(a,C){var c=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(c!=null){var e=[],r=!0,f=!1,i,n;try{for(c=c.call(a);!(r=(i=c.next()).done)&&(e.push(i.value),!(C&&e.length===C));r=!0);}catch(o){f=!0,n=o}finally{try{!r&&c.return!=null&&c.return()}finally{if(f)throw n}}return e}}function g1(a,C){if(!!a){if(typeof a=="string")return S2(a,C);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return S2(a,C)}}function S2(a,C){(C==null||C>a.length)&&(C=a.length);for(var c=0,e=new Array(C);c<C;c++)e[c]=a[c];return e}function d3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a1=function(){},D2={},S1={},x1=null,b1={mark:a1,measure:a1};try{typeof window<"u"&&(D2=window),typeof document<"u"&&(S1=document),typeof MutationObserver<"u"&&(x1=MutationObserver),typeof performance<"u"&&(b1=performance)}catch{}var S3=D2.navigator||{},C1=S3.userAgent,c1=C1===void 0?"":C1,R=D2,H=S1,e1=x1,r2=b1,t6=!!R.document,P=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",N1=~c1.indexOf("MSIE")||~c1.indexOf("Trident/"),k="___FONT_AWESOME___",x2=16,w1="fa",y1="svg-inline--fa",q="data-fa-i2svg",b2="data-fa-pseudo-element",x3="data-fa-pseudo-element-pending",R2="data-prefix",E2="data-icon",r1="fontawesome-i2svg",b3="async",N3=["HTML","HEAD","STYLE","SCRIPT"],k1=function(){try{return!0}catch{return!1}}(),U2={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},l2={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},A1={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},w3={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},y3=/fa[srltdbk\-\ ]/,T1="fa-layers-text",k3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,A3={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},P1=[1,2,3,4,5,6,7,8,9,10],T3=P1.concat([11,12,13,14,15,16,17,18,19,20]),P3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],O={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B3=[].concat(v2(Object.keys(l2)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",O.GROUP,O.SWAP_OPACITY,O.PRIMARY,O.SECONDARY]).concat(P1.map(function(a){return"".concat(a,"x")})).concat(T3.map(function(a){return"w-".concat(a)})),B1=R.FontAwesomeConfig||{};function F3(a){var C=H.querySelector("script["+a+"]");if(C)return C.getAttribute(a)}function D3(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}H&&typeof H.querySelector=="function"&&(i1=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],i1.forEach(function(a){var C=F2(a,2),c=C[0],e=C[1],r=D3(F3(c));r!=null&&(B1[e]=r)}));var i1,R3={familyPrefix:w1,styleDefault:"solid",replacementClass:y1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Z=l(l({},R3),B1);Z.autoReplaceSvg||(Z.observeMutations=!1);var M={};Object.keys(Z).forEach(function(a){Object.defineProperty(M,a,{enumerable:!0,set:function(c){Z[a]=c,i2.forEach(function(e){return e(M)})},get:function(){return Z[a]}})});R.FontAwesomeConfig=M;var i2=[];function E3(a){return i2.push(a),function(){i2.splice(i2.indexOf(a),1)}}var D=x2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function U3(a){if(!(!a||!P)){var C=H.createElement("style");C.setAttribute("type","text/css"),C.innerHTML=a;for(var c=H.head.childNodes,e=null,r=c.length-1;r>-1;r--){var f=c[r],i=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=f)}return H.head.insertBefore(C,e),a}}var O3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C2(){for(var a=12,C="";a-- >0;)C+=O3[Math.random()*62|0];return C}function Y(a){for(var C=[],c=(a||[]).length>>>0;c--;)C[c]=a[c];return C}function O2(a){return a.classList?Y(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(C){return C})}function F1(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function q3(a){return Object.keys(a||{}).reduce(function(C,c){return C+"".concat(c,'="').concat(F1(a[c]),'" ')},"").trim()}function M2(a){return Object.keys(a||{}).reduce(function(C,c){return C+"".concat(c,": ").concat(a[c].trim(),";")},"")}function q2(a){return a.size!==y.size||a.x!==y.x||a.y!==y.y||a.rotate!==y.rotate||a.flipX||a.flipY}function I3(a){var C=a.transform,c=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(c/2," 256)")},f="translate(".concat(C.x*32,", ").concat(C.y*32,") "),i="scale(".concat(C.size/16*(C.flipX?-1:1),", ").concat(C.size/16*(C.flipY?-1:1),") "),n="rotate(".concat(C.rotate," 0 0)"),o={transform:"".concat(f," ").concat(i," ").concat(n)},s={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:s}}function G3(a){var C=a.transform,c=a.width,e=c===void 0?x2:c,r=a.height,f=r===void 0?x2:r,i=a.startCentered,n=i===void 0?!1:i,o="";return n&&N1?o+="translate(".concat(C.x/D-e/2,"em, ").concat(C.y/D-f/2,"em) "):n?o+="translate(calc(-50% + ".concat(C.x/D,"em), calc(-50% + ").concat(C.y/D,"em)) "):o+="translate(".concat(C.x/D,"em, ").concat(C.y/D,"em) "),o+="scale(".concat(C.size/D*(C.flipX?-1:1),", ").concat(C.size/D*(C.flipY?-1:1),") "),o+="rotate(".concat(C.rotate,"deg) "),o}var W3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function D1(){var a=w1,C=y1,c=M.familyPrefix,e=M.replacementClass,r=W3;if(c!==a||e!==C){var f=new RegExp("\\.".concat(a,"\\-"),"g"),i=new RegExp("\\--".concat(a,"\\-"),"g"),n=new RegExp("\\.".concat(C),"g");r=r.replace(f,".".concat(c,"-")).replace(i,"--".concat(c,"-")).replace(n,".".concat(e))}return r}var f1=!1;function p2(){M.autoAddCss&&!f1&&(U3(D1()),f1=!0)}var _3={mixout:function(){return{dom:{css:D1,insertCss:p2}}},hooks:function(){return{beforeDOMElementCreation:function(){p2()},beforeI2svg:function(){p2()}}}},A=R||{};A[k]||(A[k]={});A[k].styles||(A[k].styles={});A[k].hooks||(A[k].hooks={});A[k].shims||(A[k].shims=[]);var w=A[k],R1=[],j3=function a(){H.removeEventListener("DOMContentLoaded",a),t2=1,R1.map(function(C){return C()})},t2=!1;P&&(t2=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),t2||H.addEventListener("DOMContentLoaded",j3));function Y3(a){!P||(t2?setTimeout(a,0):R1.push(a))}function c2(a){var C=a.tag,c=a.attributes,e=c===void 0?{}:c,r=a.children,f=r===void 0?[]:r;return typeof a=="string"?F1(a):"<".concat(C," ").concat(q3(e),">").concat(f.map(c2).join(""),"</").concat(C,">")}function n1(a,C,c){if(a&&a[C]&&a[C][c])return{prefix:C,iconName:c,icon:a[C][c]}}var $3=function(C,c){return function(e,r,f,i){return C.call(c,e,r,f,i)}},u2=function(C,c,e,r){var f=Object.keys(C),i=f.length,n=r!==void 0?$3(c,r):c,o,s,t;for(e===void 0?(o=1,t=C[f[0]]):(o=0,t=e);o<i;o++)s=f[o],t=n(t,C[s],s,C);return t};function K3(a){for(var C=[],c=0,e=a.length;c<e;){var r=a.charCodeAt(c++);if(r>=55296&&r<=56319&&c<e){var f=a.charCodeAt(c++);(f&64512)==56320?C.push(((r&1023)<<10)+(f&1023)+65536):(C.push(r),c--)}else C.push(r)}return C}function N2(a){var C=K3(a);return C.length===1?C[0].toString(16):null}function X3(a,C){var c=a.length,e=a.charCodeAt(C),r;return e>=55296&&e<=56319&&c>C+1&&(r=a.charCodeAt(C+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function o1(a){return Object.keys(a).reduce(function(C,c){var e=a[c],r=!!e.icon;return r?C[e.iconName]=e.icon:C[c]=e,C},{})}function w2(a,C){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=c.skipHooks,r=e===void 0?!1:e,f=o1(C);typeof w.hooks.addPack=="function"&&!r?w.hooks.addPack(a,o1(C)):w.styles[a]=l(l({},w.styles[a]||{}),f),a==="fas"&&w2("fa",C)}var a2=w.styles,Q3=w.shims,J3=Object.values(A1),I2=null,E1={},U1={},O1={},q1={},I1={},Z3=Object.keys(U2);function a4(a){return~B3.indexOf(a)}function C4(a,C){var c=C.split("-"),e=c[0],r=c.slice(1).join("-");return e===a&&r!==""&&!a4(r)?r:null}var G1=function(){var C=function(f){return u2(a2,function(i,n,o){return i[o]=u2(n,f,{}),i},{})};E1=C(function(r,f,i){if(f[3]&&(r[f[3]]=i),f[2]){var n=f[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=i})}return r}),U1=C(function(r,f,i){if(r[i]=i,f[2]){var n=f[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=i})}return r}),I1=C(function(r,f,i){var n=f[2];return r[i]=i,n.forEach(function(o){r[o]=i}),r});var c="far"in a2||M.autoFetchSvg,e=u2(Q3,function(r,f){var i=f[0],n=f[1],o=f[2];return n==="far"&&!c&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});O1=e.names,q1=e.unicodes,I2=z2(M.styleDefault)};E3(function(a){I2=z2(a.styleDefault)});G1();function G2(a,C){return(E1[a]||{})[C]}function c4(a,C){return(U1[a]||{})[C]}function W(a,C){return(I1[a]||{})[C]}function W1(a){return O1[a]||{prefix:null,iconName:null}}function e4(a){var C=q1[a],c=G2("fas",a);return C||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function E(){return I2}var W2=function(){return{prefix:null,iconName:null,rest:[]}};function z2(a){var C=U2[a],c=l2[a]||l2[C],e=a in w.styles?a:null;return c||e||null}function L2(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=C.skipLookups,e=c===void 0?!1:c,r=null,f=a.reduce(function(i,n){var o=C4(M.familyPrefix,n);if(a2[n]?(n=J3.includes(n)?w3[n]:n,r=n,i.prefix=n):Z3.indexOf(n)>-1?(r=n,i.prefix=z2(n)):o?i.iconName=o:n!==M.replacementClass&&i.rest.push(n),!e&&i.prefix&&i.iconName){var s=r==="fa"?W1(i.iconName):{},t=W(i.prefix,i.iconName);s.prefix&&(r=null),i.iconName=s.iconName||t||i.iconName,i.prefix=s.prefix||i.prefix,i.prefix==="far"&&!a2.far&&a2.fas&&!M.autoFetchSvg&&(i.prefix="fas")}return i},W2());return(f.prefix==="fa"||r==="fa")&&(f.prefix=E()||"fas"),f}var r4=function(){function a(){L3(this,a),this.definitions={}}return h3(a,[{key:"add",value:function(){for(var c=this,e=arguments.length,r=new Array(e),f=0;f<e;f++)r[f]=arguments[f];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){c.definitions[n]=l(l({},c.definitions[n]||{}),i[n]),w2(n,i[n]);var o=A1[n];o&&w2(o,i[n]),G1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(f){var i=r[f],n=i.prefix,o=i.iconName,s=i.icon,t=s[2];c[n]||(c[n]={}),t.length>0&&t.forEach(function(v){typeof v=="string"&&(c[n][v]=s)}),c[n][o]=s}),c}}]),a}(),l1=[],_={},j={},i4=Object.keys(j);function f4(a,C){var c=C.mixoutsTo;return l1=a,_={},Object.keys(j).forEach(function(e){i4.indexOf(e)===-1&&delete j[e]}),l1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(c[i]=r[i]),o2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){c[i]||(c[i]={}),c[i][n]=r[i][n]})}),e.hooks){var f=e.hooks();Object.keys(f).forEach(function(i){_[i]||(_[i]=[]),_[i].push(f[i])})}e.provides&&e.provides(j)}),c}function y2(a,C){for(var c=arguments.length,e=new Array(c>2?c-2:0),r=2;r<c;r++)e[r-2]=arguments[r];var f=_[a]||[];return f.forEach(function(i){C=i.apply(null,[C].concat(e))}),C}function I(a){for(var C=arguments.length,c=new Array(C>1?C-1:0),e=1;e<C;e++)c[e-1]=arguments[e];var r=_[a]||[];r.forEach(function(f){f.apply(null,c)})}function T(){var a=arguments[0],C=Array.prototype.slice.call(arguments,1);return j[a]?j[a].apply(null,C):void 0}function k2(a){a.prefix==="fa"&&(a.prefix="fas");var C=a.iconName,c=a.prefix||E();if(!!C)return C=W(c,C)||C,n1(_1.definitions,c,C)||n1(w.styles,c,C)}var _1=new r4,n4=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,I("noAuto")},o4={i2svg:function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(I("beforeI2svg",C),T("pseudoElements2svg",C),T("i2svg",C)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=C.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Y3(function(){t4({autoReplaceSvgRoot:c}),I("watch",C)})}},l4={icon:function(C){if(C===null)return null;if(o2(C)==="object"&&C.prefix&&C.iconName)return{prefix:C.prefix,iconName:W(C.prefix,C.iconName)||C.iconName};if(Array.isArray(C)&&C.length===2){var c=C[1].indexOf("fa-")===0?C[1].slice(3):C[1],e=z2(C[0]);return{prefix:e,iconName:W(e,c)||c}}if(typeof C=="string"&&(C.indexOf("".concat(M.familyPrefix,"-"))>-1||C.match(y3))){var r=L2(C.split(" "),{skipLookups:!0});return{prefix:r.prefix||E(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof C=="string"){var f=E();return{prefix:f,iconName:W(f,C)||C}}}},N={noAuto:n4,config:M,dom:o4,parse:l4,library:_1,findIconDefinition:k2,toHtml:c2},t4=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=C.autoReplaceSvgRoot,e=c===void 0?H:c;(Object.keys(w.styles).length>0||M.autoFetchSvg)&&P&&M.autoReplaceSvg&&N.dom.i2svg({node:e})};function h2(a,C){return Object.defineProperty(a,"abstract",{get:C}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return c2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(!!P){var e=H.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function s4(a){var C=a.children,c=a.main,e=a.mask,r=a.attributes,f=a.styles,i=a.transform;if(q2(i)&&c.found&&!e.found){var n=c.width,o=c.height,s={x:n/o/2,y:.5};r.style=M2(l(l({},f),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:C}]}function v4(a){var C=a.prefix,c=a.iconName,e=a.children,r=a.attributes,f=a.symbol,i=f===!0?"".concat(C,"-").concat(M.familyPrefix,"-").concat(c):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:e}]}]}function _2(a){var C=a.icons,c=C.main,e=C.mask,r=a.prefix,f=a.iconName,i=a.transform,n=a.symbol,o=a.title,s=a.maskId,t=a.titleId,v=a.extra,z=a.watchable,h=z===void 0?!1:z,m=e.found?e:c,p=m.width,u=m.height,d=r==="fak",V=[M.replacementClass,f?"".concat(M.familyPrefix,"-").concat(f):""].filter(function(G){return v.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(v.classes).join(" "),g={children:[],attributes:l(l({},v.attributes),{},{"data-prefix":r,"data-icon":f,class:V,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(u)})},B=d&&!~v.classes.indexOf("fa-fw")?{width:"".concat(p/u*16*.0625,"em")}:{};h&&(g.attributes[q]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(t||C2())},children:[o]}),delete g.attributes.title);var b=l(l({},g),{},{prefix:r,iconName:f,main:c,mask:e,maskId:s,transform:i,symbol:n,styles:l(l({},B),v.styles)}),F=e.found&&c.found?T("generateAbstractMask",b)||{children:[],attributes:{}}:T("generateAbstractIcon",b)||{children:[],attributes:{}},X=F.children,Q=F.attributes;return b.children=X,b.attributes=Q,n?v4(b):s4(b)}function t1(a){var C=a.content,c=a.width,e=a.height,r=a.transform,f=a.title,i=a.extra,n=a.watchable,o=n===void 0?!1:n,s=l(l(l({},i.attributes),f?{title:f}:{}),{},{class:i.classes.join(" ")});o&&(s[q]="");var t=l({},i.styles);q2(r)&&(t.transform=G3({transform:r,startCentered:!0,width:c,height:e}),t["-webkit-transform"]=t.transform);var v=M2(t);v.length>0&&(s.style=v);var z=[];return z.push({tag:"span",attributes:s,children:[C]}),f&&z.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),z}function M4(a){var C=a.content,c=a.title,e=a.extra,r=l(l(l({},e.attributes),c?{title:c}:{}),{},{class:e.classes.join(" ")}),f=M2(e.styles);f.length>0&&(r.style=f);var i=[];return i.push({tag:"span",attributes:r,children:[C]}),c&&i.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),i}var d2=w.styles;function A2(a){var C=a[0],c=a[1],e=a.slice(4),r=F2(e,1),f=r[0],i=null;return Array.isArray(f)?i={tag:"g",attributes:{class:"".concat(M.familyPrefix,"-").concat(O.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.familyPrefix,"-").concat(O.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(M.familyPrefix,"-").concat(O.PRIMARY),fill:"currentColor",d:f[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:C,height:c,icon:i}}var z4={found:!1,width:512,height:512};function L4(a,C){!k1&&!M.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(C,'" is missing.'))}function T2(a,C){var c=C;return C==="fa"&&M.styleDefault!==null&&(C=E()),new Promise(function(e,r){var f={found:!1,width:512,height:512,icon:T("missingIconAbstract")||{}};if(c==="fa"){var i=W1(a)||{};a=i.iconName||a,C=i.prefix||C}if(a&&C&&d2[C]&&d2[C][a]){var n=d2[C][a];return e(A2(n))}L4(a,C),e(l(l({},z4),{},{icon:M.showMissingIcons&&a?T("missingIconAbstract")||{}:{}}))})}var s1=function(){},P2=M.measurePerformance&&r2&&r2.mark&&r2.measure?r2:{mark:s1,measure:s1},J='FA "6.0.0"',h4=function(C){return P2.mark("".concat(J," ").concat(C," begins")),function(){return j1(C)}},j1=function(C){P2.mark("".concat(J," ").concat(C," ends")),P2.measure("".concat(J," ").concat(C),"".concat(J," ").concat(C," begins"),"".concat(J," ").concat(C," ends"))},j2={begin:h4,end:j1},f2=function(){};function v1(a){var C=a.getAttribute?a.getAttribute(q):null;return typeof C=="string"}function H4(a){var C=a.getAttribute?a.getAttribute(R2):null,c=a.getAttribute?a.getAttribute(E2):null;return C&&c}function m4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(M.replacementClass)}function V4(){if(M.autoReplaceSvg===!0)return n2.replace;var a=n2[M.autoReplaceSvg];return a||n2.replace}function p4(a){return H.createElementNS("http://www.w3.org/2000/svg",a)}function u4(a){return H.createElement(a)}function Y1(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=C.ceFn,e=c===void 0?a.tag==="svg"?p4:u4:c;if(typeof a=="string")return H.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(i){r.setAttribute(i,a.attributes[i])});var f=a.children||[];return f.forEach(function(i){r.appendChild(Y1(i,{ceFn:e}))}),r}function d4(a){var C=" ".concat(a.outerHTML," ");return C="".concat(C,"Font Awesome fontawesome.com "),C}var n2={replace:function(C){var c=C[0];if(c.parentNode)if(C[1].forEach(function(r){c.parentNode.insertBefore(Y1(r),c)}),c.getAttribute(q)===null&&M.keepOriginalSource){var e=H.createComment(d4(c));c.parentNode.replaceChild(e,c)}else c.remove()},nest:function(C){var c=C[0],e=C[1];if(~O2(c).indexOf(M.replacementClass))return n2.replace(C);var r=new RegExp("".concat(M.familyPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var f=e[0].attributes.class.split(" ").reduce(function(n,o){return o===M.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});e[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",f.toNode.join(" "))}var i=e.map(function(n){return c2(n)}).join(`
`);c.setAttribute(q,""),c.innerHTML=i}};function M1(a){a()}function $1(a,C){var c=typeof C=="function"?C:f2;if(a.length===0)c();else{var e=M1;M.mutateApproach===b3&&(e=R.requestAnimationFrame||M1),e(function(){var r=V4(),f=j2.begin("mutate");a.map(r),f(),c()})}}var Y2=!1;function K1(){Y2=!0}function B2(){Y2=!1}var s2=null;function z1(a){if(!!e1&&!!M.observeMutations){var C=a.treeCallback,c=C===void 0?f2:C,e=a.nodeCallback,r=e===void 0?f2:e,f=a.pseudoElementsCallback,i=f===void 0?f2:f,n=a.observeMutationsRoot,o=n===void 0?H:n;s2=new e1(function(s){if(!Y2){var t=E();Y(s).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!v1(v.addedNodes[0])&&(M.searchPseudoElements&&i(v.target),c(v.target)),v.type==="attributes"&&v.target.parentNode&&M.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&v1(v.target)&&~P3.indexOf(v.attributeName))if(v.attributeName==="class"&&H4(v.target)){var z=L2(O2(v.target)),h=z.prefix,m=z.iconName;v.target.setAttribute(R2,h||t),m&&v.target.setAttribute(E2,m)}else m4(v.target)&&r(v.target)})}}),!!P&&s2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function g4(){!s2||s2.disconnect()}function S4(a){var C=a.getAttribute("style"),c=[];return C&&(c=C.split(";").reduce(function(e,r){var f=r.split(":"),i=f[0],n=f.slice(1);return i&&n.length>0&&(e[i]=n.join(":").trim()),e},{})),c}function x4(a){var C=a.getAttribute("data-prefix"),c=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=L2(O2(a));return r.prefix||(r.prefix=E()),C&&c&&(r.prefix=C,r.iconName=c),r.iconName&&r.prefix||r.prefix&&e.length>0&&(r.iconName=c4(r.prefix,a.innerText)||G2(r.prefix,N2(a.innerText))),r}function b4(a){var C=Y(a.attributes).reduce(function(r,f){return r.name!=="class"&&r.name!=="style"&&(r[f.name]=f.value),r},{}),c=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return M.autoA11y&&(c?C["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(e||C2()):(C["aria-hidden"]="true",C.focusable="false")),C}function N4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L1(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=x4(a),e=c.iconName,r=c.prefix,f=c.rest,i=b4(a),n=y2("parseNodeAttributes",{},a),o=C.styleParser?S4(a):[];return l({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:o,attributes:i}},n)}var w4=w.styles;function X1(a){var C=M.autoReplaceSvg==="nest"?L1(a,{styleParser:!1}):L1(a);return~C.extra.classes.indexOf(T1)?T("generateLayersText",a,C):T("generateSvgReplacementMutation",a,C)}function h1(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();var c=H.documentElement.classList,e=function(v){return c.add("".concat(r1,"-").concat(v))},r=function(v){return c.remove("".concat(r1,"-").concat(v))},f=M.autoFetchSvg?Object.keys(U2):Object.keys(w4),i=[".".concat(T1,":not([").concat(q,"])")].concat(f.map(function(t){return".".concat(t,":not([").concat(q,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=Y(a.querySelectorAll(i))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var o=j2.begin("onTree"),s=n.reduce(function(t,v){try{var z=X1(v);z&&t.push(z)}catch(h){k1||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,v){Promise.all(s).then(function(z){$1(z,function(){e("active"),e("complete"),r("pending"),typeof C=="function"&&C(),o(),t()})}).catch(function(z){o(),v(z)})})}function y4(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X1(a).then(function(c){c&&$1([c],C)})}function k4(a){return function(C){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(C||{}).icon?C:k2(C||{}),r=c.mask;return r&&(r=(r||{}).icon?r:k2(r||{})),a(e,l(l({},c),{},{mask:r}))}}var A4=function(C){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.transform,r=e===void 0?y:e,f=c.symbol,i=f===void 0?!1:f,n=c.mask,o=n===void 0?null:n,s=c.maskId,t=s===void 0?null:s,v=c.title,z=v===void 0?null:v,h=c.titleId,m=h===void 0?null:h,p=c.classes,u=p===void 0?[]:p,d=c.attributes,V=d===void 0?{}:d,g=c.styles,B=g===void 0?{}:g;if(!!C){var b=C.prefix,F=C.iconName,X=C.icon;return h2(l({type:"icon"},C),function(){return I("beforeDOMElementCreation",{iconDefinition:C,params:c}),M.autoA11y&&(z?V["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(m||C2()):(V["aria-hidden"]="true",V.focusable="false")),_2({icons:{main:A2(X),mask:o?A2(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:F,transform:l(l({},y),r),symbol:i,title:z,maskId:t,titleId:m,extra:{attributes:V,styles:B,classes:u}})})}},T4={mixout:function(){return{icon:k4(A4)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=h1,c.nodeCallback=y4,c}}},provides:function(C){C.i2svg=function(c){var e=c.node,r=e===void 0?H:e,f=c.callback,i=f===void 0?function(){}:f;return h1(r,i)},C.generateSvgReplacementMutation=function(c,e){var r=e.iconName,f=e.title,i=e.titleId,n=e.prefix,o=e.transform,s=e.symbol,t=e.mask,v=e.maskId,z=e.extra;return new Promise(function(h,m){Promise.all([T2(r,n),t.iconName?T2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var u=F2(p,2),d=u[0],V=u[1];h([c,_2({icons:{main:d,mask:V},prefix:n,iconName:r,transform:o,symbol:s,maskId:v,title:f,titleId:i,extra:z,watchable:!0})])}).catch(m)})},C.generateAbstractIcon=function(c){var e=c.children,r=c.attributes,f=c.main,i=c.transform,n=c.styles,o=M2(n);o.length>0&&(r.style=o);var s;return q2(i)&&(s=T("generateAbstractTransformGrouping",{main:f,transform:i,containerWidth:f.width,iconWidth:f.width})),e.push(s||f.icon),{children:e,attributes:r}}}},P4={mixout:function(){return{layer:function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,f=r===void 0?[]:r;return h2({type:"layer"},function(){I("beforeDOMElementCreation",{assembler:c,params:e});var i=[];return c(function(n){Array.isArray(n)?n.map(function(o){i=i.concat(o.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(M.familyPrefix,"-layers")].concat(v2(f)).join(" ")},children:i}]})}}}},B4={mixout:function(){return{counter:function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,f=r===void 0?null:r,i=e.classes,n=i===void 0?[]:i,o=e.attributes,s=o===void 0?{}:o,t=e.styles,v=t===void 0?{}:t;return h2({type:"counter",content:c},function(){return I("beforeDOMElementCreation",{content:c,params:e}),M4({content:c.toString(),title:f,extra:{attributes:s,styles:v,classes:["".concat(M.familyPrefix,"-layers-counter")].concat(v2(n))}})})}}}},F4={mixout:function(){return{text:function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,f=r===void 0?y:r,i=e.title,n=i===void 0?null:i,o=e.classes,s=o===void 0?[]:o,t=e.attributes,v=t===void 0?{}:t,z=e.styles,h=z===void 0?{}:z;return h2({type:"text",content:c},function(){return I("beforeDOMElementCreation",{content:c,params:e}),t1({content:c,transform:l(l({},y),f),title:n,extra:{attributes:v,styles:h,classes:["".concat(M.familyPrefix,"-layers-text")].concat(v2(s))}})})}}},provides:function(C){C.generateLayersText=function(c,e){var r=e.title,f=e.transform,i=e.extra,n=null,o=null;if(N1){var s=parseInt(getComputedStyle(c).fontSize,10),t=c.getBoundingClientRect();n=t.width/s,o=t.height/s}return M.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([c,t1({content:c.innerHTML,width:n,height:o,transform:f,title:r,extra:i,watchable:!0})])}}},D4=new RegExp('"',"ug"),H1=[1105920,1112319];function R4(a){var C=a.replace(D4,""),c=X3(C,0),e=c>=H1[0]&&c<=H1[1],r=C.length===2?C[0]===C[1]:!1;return{value:N2(r?C[0]:C),isSecondary:e||r}}function m1(a,C){var c="".concat(x3).concat(C.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(c)!==null)return e();var f=Y(a.children),i=f.filter(function(F){return F.getAttribute(b2)===C})[0],n=R.getComputedStyle(a,C),o=n.getPropertyValue("font-family").match(k3),s=n.getPropertyValue("font-weight"),t=n.getPropertyValue("content");if(i&&!o)return a.removeChild(i),e();if(o&&t!=="none"&&t!==""){var v=n.getPropertyValue("content"),z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?l2[o[2].toLowerCase()]:A3[s],h=R4(v),m=h.value,p=h.isSecondary,u=o[0].startsWith("FontAwesome"),d=G2(z,m),V=d;if(u){var g=e4(m);g.iconName&&g.prefix&&(d=g.iconName,z=g.prefix)}if(d&&!p&&(!i||i.getAttribute(R2)!==z||i.getAttribute(E2)!==V)){a.setAttribute(c,V),i&&a.removeChild(i);var B=N4(),b=B.extra;b.attributes[b2]=C,T2(d,z).then(function(F){var X=_2(l(l({},B),{},{icons:{main:F,mask:W2()},prefix:z,iconName:V,extra:b,watchable:!0})),Q=H.createElement("svg");C==="::before"?a.insertBefore(Q,a.firstChild):a.appendChild(Q),Q.outerHTML=X.map(function(G){return c2(G)}).join(`
`),a.removeAttribute(c),e()}).catch(r)}else e()}else e()})}function E4(a){return Promise.all([m1(a,"::before"),m1(a,"::after")])}function U4(a){return a.parentNode!==document.head&&!~N3.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(b2)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function V1(a){if(!!P)return new Promise(function(C,c){var e=Y(a.querySelectorAll("*")).filter(U4).map(E4),r=j2.begin("searchPseudoElements");K1(),Promise.all(e).then(function(){r(),B2(),C()}).catch(function(){r(),B2(),c()})})}var O4={hooks:function(){return{mutationObserverCallbacks:function(c){return c.pseudoElementsCallback=V1,c}}},provides:function(C){C.pseudoElements2svg=function(c){var e=c.node,r=e===void 0?H:e;M.searchPseudoElements&&V1(r)}}},p1=!1,q4={mixout:function(){return{dom:{unwatch:function(){K1(),p1=!0}}}},hooks:function(){return{bootstrap:function(){z1(y2("mutationObserverCallbacks",{}))},noAuto:function(){g4()},watch:function(c){var e=c.observeMutationsRoot;p1?B2():z1(y2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},u1=function(C){var c={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return C.toLowerCase().split(" ").reduce(function(e,r){var f=r.toLowerCase().split("-"),i=f[0],n=f.slice(1).join("-");if(i&&n==="h")return e.flipX=!0,e;if(i&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(i){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},c)},I4={mixout:function(){return{parse:{transform:function(c){return u1(c)}}}},hooks:function(){return{parseNodeAttributes:function(c,e){var r=e.getAttribute("data-fa-transform");return r&&(c.transform=u1(r)),c}}},provides:function(C){C.generateAbstractTransformGrouping=function(c){var e=c.main,r=c.transform,f=c.containerWidth,i=c.iconWidth,n={transform:"translate(".concat(f/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),t="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(o," ").concat(s," ").concat(t)},z={transform:"translate(".concat(i/2*-1," -256)")},h={outer:n,inner:v,path:z};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),h.path)}]}]}}}},g2={x:0,y:0,width:"100%",height:"100%"};function d1(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||C)&&(a.attributes.fill="black"),a}function G4(a){return a.tag==="g"?a.children:[a]}var W4={hooks:function(){return{parseNodeAttributes:function(c,e){var r=e.getAttribute("data-fa-mask"),f=r?L2(r.split(" ").map(function(i){return i.trim()})):W2();return f.prefix||(f.prefix=E()),c.mask=f,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides:function(C){C.generateAbstractMask=function(c){var e=c.children,r=c.attributes,f=c.main,i=c.mask,n=c.maskId,o=c.transform,s=f.width,t=f.icon,v=i.width,z=i.icon,h=I3({transform:o,containerWidth:v,iconWidth:s}),m={tag:"rect",attributes:l(l({},g2),{},{fill:"white"})},p=t.children?{children:t.children.map(d1)}:{},u={tag:"g",attributes:l({},h.inner),children:[d1(l({tag:t.tag,attributes:l(l({},t.attributes),h.path)},p))]},d={tag:"g",attributes:l({},h.outer),children:[u]},V="mask-".concat(n||C2()),g="clip-".concat(n||C2()),B={tag:"mask",attributes:l(l({},g2),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,d]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:G4(z)},B]};return e.push(b,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(V,")")},g2)}),{children:e,attributes:r}}}},_4={provides:function(C){var c=!1;R.matchMedia&&(c=R.matchMedia("(prefers-reduced-motion: reduce)").matches),C.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},f),{},{attributeName:"opacity"}),n={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return c||n.children.push({tag:"animate",attributes:l(l({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:c?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),c||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},j4={hooks:function(){return{parseNodeAttributes:function(c,e){var r=e.getAttribute("data-fa-symbol"),f=r===null?!1:r===""?!0:r;return c.symbol=f,c}}}},Y4=[_3,T4,P4,B4,F4,O4,q4,I4,W4,_4,j4];f4(Y4,{mixoutsTo:N});var s6=N.noAuto,v6=N.config,M6=N.library,z6=N.dom,H2=N.parse,L6=N.findIconDefinition,h6=N.toHtml,Q1=N.icon,H6=N.layer,m6=N.text,V6=N.counter;var L=Q2(i3()),o3=Q2(z3());function f3(a,C){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);C&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),c.push.apply(c,e)}return c}function U(a){for(var C=1;C<arguments.length;C++){var c=arguments[C]!=null?arguments[C]:{};C%2?f3(Object(c),!0).forEach(function(e){$(a,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):f3(Object(c)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(c,e))})}return a}function m2(a){return m2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},m2(a)}function $(a,C,c){return C in a?Object.defineProperty(a,C,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[C]=c,a}function X4(a,C){if(a==null)return{};var c={},e=Object.keys(a),r,f;for(f=0;f<e.length;f++)r=e[f],!(C.indexOf(r)>=0)&&(c[r]=a[r]);return c}function l3(a,C){if(a==null)return{};var c=X4(a,C),e,r;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(r=0;r<f.length;r++)e=f[r],!(C.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(c[e]=a[e]))}return c}function K2(a){return Q4(a)||J4(a)||Z4(a)||a6()}function Q4(a){if(Array.isArray(a))return X2(a)}function J4(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Z4(a,C){if(!!a){if(typeof a=="string")return X2(a,C);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return X2(a,C)}}function X2(a,C){(C==null||C>a.length)&&(C=a.length);for(var c=0,e=new Array(C);c<C;c++)e[c]=a[c];return e}function a6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C6(a){var C,c=a.beat,e=a.fade,r=a.flash,f=a.spin,i=a.spinPulse,n=a.spinReverse,o=a.pulse,s=a.fixedWidth,t=a.inverse,v=a.border,z=a.listItem,h=a.flip,m=a.size,p=a.rotation,u=a.pull,d=(C={"fa-beat":c,"fa-fade":e,"fa-flash":r,"fa-spin":f,"fa-spin-reverse":n,"fa-spin-pulse":i,"fa-pulse":o,"fa-fw":s,"fa-inverse":t,"fa-border":v,"fa-li":z,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},$(C,"fa-".concat(m),typeof m<"u"&&m!==null),$(C,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),$(C,"fa-pull-".concat(u),typeof u<"u"&&u!==null),$(C,"fa-swap-opacity",a.swapOpacity),C);return Object.keys(d).map(function(V){return d[V]?V:null}).filter(function(V){return V})}function c6(a){return a=a-0,a===a}function t3(a){return c6(a)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(C,c){return c?c.toUpperCase():""}),a.substr(0,1).toLowerCase()+a.substr(1))}var e6=["style"];function r6(a){return a.charAt(0).toUpperCase()+a.slice(1)}function i6(a){return a.split(";").map(function(C){return C.trim()}).filter(function(C){return C}).reduce(function(C,c){var e=c.indexOf(":"),r=t3(c.slice(0,e)),f=c.slice(e+1).trim();return r.startsWith("webkit")?C[r6(r)]=f:C[r]=f,C},{})}function s3(a,C){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof C=="string")return C;var e=(C.children||[]).map(function(o){return s3(a,o)}),r=Object.keys(C.attributes||{}).reduce(function(o,s){var t=C.attributes[s];switch(s){case"class":o.attrs.className=t,delete C.attributes.class;break;case"style":o.attrs.style=i6(t);break;default:s.indexOf("aria-")===0||s.indexOf("data-")===0?o.attrs[s.toLowerCase()]=t:o.attrs[t3(s)]=t}return o},{attrs:{}}),f=c.style,i=f===void 0?{}:f,n=l3(c,e6);return r.attrs.style=U(U({},r.attrs.style),i),a.apply(void 0,[C.tag,U(U({},r.attrs),n)].concat(K2(e)))}var v3=!1;try{v3=!0}catch{}function f6(){if(!v3&&console&&typeof console.error=="function"){var a;(a=console).error.apply(a,arguments)}}function n3(a){if(a&&m2(a)==="object"&&a.prefix&&a.iconName&&a.icon)return a;if(H2.icon)return H2.icon(a);if(a===null)return null;if(a&&m2(a)==="object"&&a.prefix&&a.iconName)return a;if(Array.isArray(a)&&a.length===2)return{prefix:a[0],iconName:a[1]};if(typeof a=="string")return{prefix:"fas",iconName:a}}function $2(a,C){return Array.isArray(C)&&C.length>0||!Array.isArray(C)&&C?$({},a,C):{}}var n6=["forwardedRef"];function K(a){var C=a.forwardedRef,c=l3(a,n6),e=c.icon,r=c.mask,f=c.symbol,i=c.className,n=c.title,o=c.titleId,s=n3(e),t=$2("classes",[].concat(K2(C6(c)),K2(i.split(" ")))),v=$2("transform",typeof c.transform=="string"?H2.transform(c.transform):c.transform),z=$2("mask",n3(r)),h=Q1(s,U(U(U(U({},t),v),z),{},{symbol:f,title:n,titleId:o}));if(!h)return f6("Could not find icon",s),null;var m=h.abstract,p={ref:C};return Object.keys(c).forEach(function(u){K.defaultProps.hasOwnProperty(u)||(p[u]=c[u])}),o6(m[0],p)}K.displayName="FontAwesomeIcon";K.propTypes={beat:L.default.bool,border:L.default.bool,className:L.default.string,fade:L.default.bool,flash:L.default.bool,mask:L.default.oneOfType([L.default.object,L.default.array,L.default.string]),fixedWidth:L.default.bool,inverse:L.default.bool,flip:L.default.oneOf(["horizontal","vertical","both"]),icon:L.default.oneOfType([L.default.object,L.default.array,L.default.string]),listItem:L.default.bool,pull:L.default.oneOf(["right","left"]),pulse:L.default.bool,rotation:L.default.oneOf([0,90,180,270]),size:L.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.default.bool,spinPulse:L.default.bool,spinReverse:L.default.bool,symbol:L.default.oneOfType([L.default.bool,L.default.string]),title:L.default.string,transform:L.default.oneOfType([L.default.string,L.default.object]),swapOpacity:L.default.bool};K.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var o6=s3.bind(null,o3.default.createElement);x();var l6={prefix:"fas",iconName:"house",icon:[576,512,[63498,63500,127968,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"]},M3=l6;var P6=()=>S.createElement("nav",{className:"bg-sky-600"},S.createElement("ul",{className:"flex px-3"},S.createElement("li",null,S.createElement(e2,{to:"/",className:"block p-3 font-bold text-white no-underline"},S.createElement(K,{icon:M3}))),S.createElement("li",null,S.createElement(e2,{to:"/posts",className:"block p-3 font-bold text-white no-underline"},"Blog")),S.createElement("li",null,S.createElement(e2,{to:"/admin",className:"block p-3 font-bold text-white no-underline"},"Admin"))));export{P6 as a};
/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
