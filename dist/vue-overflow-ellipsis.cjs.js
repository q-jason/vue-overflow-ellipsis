"use strict";var e={exports:{}};(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}};var t={exports:{}},n=t.exports={};n.isIE=function(e){return(-1!==(t=navigator.userAgent.toLowerCase()).indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/"))&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:undefined}());var t},n.isLegacyOpera=function(){return!!window.opera};var i={exports:{}};(i.exports={}).getOption=function(e,t,n){var i=e[t];if(null==i&&void 0!==n)return n;return i};var o=i.exports;function r(){var e={},t=0,n=0,i=0;return{add:function(o,r){r||(r=o,o=0),o>n?n=o:o<i&&(i=o),e[o]||(e[o]=[]),e[o].push(r),t++},process:function(){for(var t=i;t<=n;t++)for(var o=e[t],r=0;r<o.length;r++){(0,o[r])()}},size:function(){return t}}}function s(e){return e._erd}var a={initState:function(e){return e._erd={},s(e)},getState:s,cleanState:function(e){delete e._erd}},l=t.exports,d=e.exports.forEach,c=e.exports.forEach,u=function(e){var t=e.stateHandler.getState;return{isDetectable:function(e){var n=t(e);return n&&!!n.isDetectable},markAsDetectable:function(e){t(e).isDetectable=!0},isBusy:function(e){return!!t(e).busy},markBusy:function(e,n){t(e).busy=!!n}}},h=function(e){var t={};function n(n){var i=e.get(n);return void 0===i?[]:t[i]||[]}return{get:n,add:function(n,i){var o=e.get(n);t[o]||(t[o]=[]),t[o].push(i)},removeListener:function(e,t){for(var i=n(e),o=0,r=i.length;o<r;++o)if(i[o]===t){i.splice(o,1);break}},removeAllListeners:function(e){var t=n(e);t&&(t.length=0)}}},f=function(){var e=1;return{generate:function(){return e++}}},p=function(e){var t=e.idGenerator,n=e.stateHandler.getState;return{get:function(e){var t=n(e);return t&&void 0!==t.id?t.id:null},set:function(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var o=t.generate();return i.id=o,o}}},v=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n},m=t.exports,g=function(e){var t=(e=e||{}).reporter,n=o.getOption(e,"async",!0),i=o.getOption(e,"auto",!0);i&&!n&&(t&&t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var s,a=r(),l=!1;function d(){for(l=!0;a.size();){var e=a;a=r(),e.process()}l=!1}function c(){var e;e=d,s=setTimeout(e,0)}return{add:function(e,t){!l&&i&&n&&0===a.size()&&c(),a.add(e,t)},force:function(e){l||(void 0===e&&(e=n),s&&(clearTimeout(s),s=null),e?c():d())}}},b=a,w=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,i=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function o(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function r(e){return i(e).object}return{makeDetectable:function(e,r,s){s||(s=r,r=e,e=null),(e=e||{}).debug,l.isIE(8)?s(r):function(r,s){var a=o(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),d=!1,c=window.getComputedStyle(r),u=r.offsetWidth,h=r.offsetHeight;function f(){function n(){if("static"===c.position){r.style.setProperty("position","relative",e.important?"important":"");var n=function(t,n,i,o){var r=i[o];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(t.warn("An element that is positioned static has style."+o+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+o+" will be set to 0. Element: ",n),n.style.setProperty(o,"0",e.important?"important":""))};n(t,r,c,"top"),n(t,r,c,"right"),n(t,r,c,"bottom"),n(t,r,c,"left")}}""!==c.position&&(n(),d=!0);var o=document.createElement("object");o.style.cssText=a,o.tabIndex=-1,o.type="text/html",o.setAttribute("aria-hidden","true"),o.onload=function(){d||n(),function e(t,n){if(!t.contentDocument){var o=i(t);return o.checkForObjectDocumentTimeoutId&&window.clearTimeout(o.checkForObjectDocumentTimeoutId),void(o.checkForObjectDocumentTimeoutId=setTimeout((function(){o.checkForObjectDocumentTimeoutId=0,e(t,n)}),100))}n(t.contentDocument)}(this,(function(e){s(r)}))},l.isIE()||(o.data="about:blank"),i(r)&&(r.appendChild(o),i(r).object=o,l.isIE()&&(o.data="about:blank"))}i(r).startSize={width:u,height:h},n?n.add(f):f()}(r,s)},addListener:function(e,t){function n(){t(e)}if(l.isIE(8))i(e).object={proxy:n},e.attachEvent("onresize",n);else{var o=r(e);if(!o)throw new Error("Element is not detectable by this strategy.");o.contentDocument.defaultView.addEventListener("resize",n)}},uninstall:function(e){if(i(e)){var t=r(e);t&&(l.isIE(8)?e.detachEvent("onresize",t.proxy):e.removeChild(t),i(e).checkForObjectDocumentTimeoutId&&window.clearTimeout(i(e).checkForObjectDocumentTimeoutId),delete i(e).object)}}}},y=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,i=e.stateHandler.getState;e.stateHandler.hasState;var o=e.idHandler;if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var r=function(){var e=500,t=500,n=document.createElement("div");n.style.cssText=l(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var i=document.createElement("div");i.style.cssText=l(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),i.appendChild(n),document.body.insertBefore(i,document.body.firstChild);var o=e-i.clientWidth,r=t-i.clientHeight;return document.body.removeChild(i),{width:o,height:r}}(),s="erd_scroll_detection_container";function a(e){!function(e,t,n){function i(n,i){i=i||function(t){e.head.appendChild(t)};var o=e.createElement("style");return o.innerHTML=n,o.id=t,i(o),o}if(!e.getElementById(t)){var o=n+"_animation",r=n+"_animation_active",s="/* Created by the element-resize-detector library. */\n";s+="."+n+" > div::-webkit-scrollbar { "+l(["display: none"])+" }\n\n",s+="."+r+" { "+l(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+o,"animation-name: "+o])+" }\n",s+="@-webkit-keyframes "+o+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",i(s+="@keyframes "+o+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}(e,"erd_scroll_detection_scrollbar_style",s)}function l(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function c(e,n,i){if(e.addEventListener)e.addEventListener(n,i);else{if(!e.attachEvent)return t.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+n,i)}}function u(e,n,i){if(e.removeEventListener)e.removeEventListener(n,i);else{if(!e.detachEvent)return t.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+n,i)}}function h(e){return i(e).container.childNodes[0].childNodes[0].childNodes[0]}function f(e){return i(e).container.childNodes[0].childNodes[0].childNodes[1]}return a(window.document),{makeDetectable:function(e,a,u){function p(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(o.get(a),"Scroll: "),t.log.apply)t.log.apply(null,n);else for(var i=0;i<n.length;i++)t.log(n[i])}}function v(e){var t=i(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function m(){var e=window.getComputedStyle(a),t={};return t.position=e.position,t.width=a.offsetWidth,t.height=a.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function g(){if(p("storeStyle invoked."),i(a)){var e=m();i(a).style=e}else p("Aborting because element has been uninstalled")}function b(e,t,n){i(e).lastWidth=t,i(e).lastHeight=n}function w(){return 2*r.width+1}function y(){return 2*r.height+1}function x(e){return e+10+w()}function E(e){return e+10+y()}function S(e,t,n){var i=h(e),o=f(e),r=x(t),s=E(n),a=function(e){return 2*e+w()}(t),l=function(e){return 2*e+y()}(n);i.scrollLeft=r,i.scrollTop=s,o.scrollLeft=a,o.scrollTop=l}function _(){var e=i(a).container;if(!e){(e=document.createElement("div")).className=s,e.style.cssText=l(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),i(a).container=e,function(e){e.className+=" "+s+"_animation_active"}(e),a.appendChild(e);var t=function(){i(a).onRendered&&i(a).onRendered()};c(e,"animationstart",t),i(a).onAnimationStart=t}return e}function T(){if(p("Injecting elements"),i(a)){!function(){var n=i(a).style;if("static"===n.position){a.style.setProperty("position","relative",e.important?"important":"");var o=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};o(t,a,n,"top"),o(t,a,n,"right"),o(t,a,n,"bottom"),o(t,a,n,"left")}}();var n=i(a).container;n||(n=_());var o,d,u,h,f=r.width,v=r.height,m=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),g=l(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(["left: "+(o=(o=-(1+f))?o+"px":"0"),"top: "+(d=(d=-(1+v))?d+"px":"0"),"right: "+(h=(h=-f)?h+"px":"0"),"bottom: "+(u=(u=-v)?u+"px":"0")])),b=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),w=l(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),y=l(["position: absolute","left: 0","top: 0"]),x=l(["position: absolute","width: 200%","height: 200%"]),E=document.createElement("div"),S=document.createElement("div"),T=document.createElement("div"),C=document.createElement("div"),k=document.createElement("div"),A=document.createElement("div");E.dir="ltr",E.style.cssText=m,E.className=s,S.className=s,S.style.cssText=g,T.style.cssText=b,C.style.cssText=y,k.style.cssText=w,A.style.cssText=x,T.appendChild(C),k.appendChild(A),S.appendChild(T),S.appendChild(k),E.appendChild(S),n.appendChild(E),c(T,"scroll",L),c(k,"scroll",H),i(a).onExpandScroll=L,i(a).onShrinkScroll=H}else p("Aborting because element has been uninstalled");function L(){var e=i(a);e&&e.onExpand?e.onExpand():p("Aborting expand scroll handler: element has been uninstalled")}function H(){var e=i(a);e&&e.onShrink?e.onShrink():p("Aborting shrink scroll handler: element has been uninstalled")}}function C(){function r(t,n,i){var o=function(e){return h(e).childNodes[0]}(t),r=x(n),s=E(i);o.style.setProperty("width",r+"px",e.important?"important":""),o.style.setProperty("height",s+"px",e.important?"important":"")}function s(s){var d=a.offsetWidth,c=a.offsetHeight,u=d!==i(a).lastWidth||c!==i(a).lastHeight;p("Storing current size",d,c),b(a,d,c),n.add(0,(function(){if(u)if(i(a))if(l()){if(e.debug){var n=a.offsetWidth,s=a.offsetHeight;n===d&&s===c||t.warn(o.get(a),"Scroll: Size changed before updating detector elements.")}r(a,d,c)}else p("Aborting because element container has not been initialized");else p("Aborting because element has been uninstalled")})),n.add(1,(function(){i(a)?l()?S(a,d,c):p("Aborting because element container has not been initialized"):p("Aborting because element has been uninstalled")})),u&&s&&n.add(2,(function(){i(a)?l()?s():p("Aborting because element container has not been initialized"):p("Aborting because element has been uninstalled")}))}function l(){return!!i(a).container}function c(){p("notifyListenersIfNeeded invoked");var e=i(a);return void 0===i(a).lastNotifiedWidth&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?p("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?p("Not notifying: Size already notified"):(p("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void d(i(a).listeners,(function(e){e(a)})))}function u(){p("Scroll detected."),v(a)?p("Scroll event fired while unrendered. Ignoring..."):s(c)}if(p("registerListenersAndPositionElements invoked."),i(a)){i(a).onRendered=function(){if(p("startanimation triggered."),v(a))p("Ignoring since element is still unrendered...");else{p("Element rendered.");var e=h(a),t=f(a);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(p("Scrollbars out of sync. Updating detector elements..."),s(c))}},i(a).onExpand=u,i(a).onShrink=u;var m=i(a).style;r(a,m.width,m.height)}else p("Aborting because element has been uninstalled")}function k(){if(p("finalizeDomMutation invoked."),i(a)){var e=i(a).style;b(a,e.width,e.height),S(a,e.width,e.height)}else p("Aborting because element has been uninstalled")}function A(){u(a)}function L(){var e;p("Installing..."),i(a).listeners=[],e=m(),i(a).startSize={width:e.width,height:e.height},p("Element start size",i(a).startSize),n.add(0,g),n.add(1,T),n.add(2,C),n.add(3,k),n.add(4,A)}u||(u=a,a=e,e=null),e=e||{},p("Making detectable..."),!function(e){return!function(e){var t=e.getRootNode&&e.getRootNode().contains(e);return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)||t}(e)||null===window.getComputedStyle(e)}(a)?L():(p("Element is detached"),_(),p("Waiting until element is attached..."),i(a).onRendered=function(){p("Element is now attached"),L()})},addListener:function(e,t){if(!i(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");i(e).listeners.push(t)},uninstall:function(e){var t=i(e);t&&(t.onExpandScroll&&u(h(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&u(f(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&u(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))},initDocument:a}};function x(e){return Array.isArray(e)||void 0!==e.length}function E(e){if(Array.isArray(e))return e;var t=[];return c(e,(function(e){t.push(e)})),t}function S(e){return e&&1===e.nodeType}function _(e,t,n){var i=e[t];return null==i&&void 0!==n?n:i}var T=function(e){var t;if((e=e||{}).idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=f(),i=p({idGenerator:n,stateHandler:b});t=i}var o=e.reporter;o||(o=v(!1===o));var r=_(e,"batchProcessor",g({reporter:o})),s={};s.callOnAdd=!!_(e,"callOnAdd",!0),s.debug=!!_(e,"debug",!1);var a,l=h(t),d=u({stateHandler:b}),T=_(e,"strategy","object"),C=_(e,"important",!1),k={reporter:o,batchProcessor:r,stateHandler:b,idHandler:t,important:C};if("scroll"===T&&(m.isLegacyOpera()?(o.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),T="object"):m.isIE(9)&&(o.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),T="object")),"scroll"===T)a=y(k);else{if("object"!==T)throw new Error("Invalid strategy name: "+T);a=w(k)}var A={};return{listenTo:function(e,n,i){function r(e){var t=l.get(e);c(t,(function(t){t(e)}))}function u(e,t,n){l.add(t,n),e&&n(t)}if(i||(i=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!i)throw new Error("Listener required.");if(S(n))n=[n];else{if(!x(n))return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=E(n)}var h=0,f=_(e,"callOnAdd",s.callOnAdd),p=_(e,"onReady",(function(){})),v=_(e,"debug",s.debug);c(n,(function(e){b.getState(e)||(b.initState(e),t.set(e));var s=t.get(e);if(v&&o.log("Attaching listener to element",s,e),!d.isDetectable(e))return v&&o.log(s,"Not detectable."),d.isBusy(e)?(v&&o.log(s,"System busy making it detectable"),u(f,e,i),A[s]=A[s]||[],void A[s].push((function(){++h===n.length&&p()}))):(v&&o.log(s,"Making detectable..."),d.markBusy(e,!0),a.makeDetectable({debug:v,important:C},e,(function(e){if(v&&o.log(s,"onElementDetectable"),b.getState(e)){d.markAsDetectable(e),d.markBusy(e,!1),a.addListener(e,r),u(f,e,i);var t=b.getState(e);if(t&&t.startSize){var l=e.offsetWidth,m=e.offsetHeight;t.startSize.width===l&&t.startSize.height===m||r(e)}A[s]&&c(A[s],(function(e){e()}))}else v&&o.log(s,"Element uninstalled before being detectable.");delete A[s],++h===n.length&&p()})));v&&o.log(s,"Already detecable, adding listener."),u(f,e,i),h++})),h===n.length&&p()},removeListener:l.removeListener,removeAllListeners:l.removeAllListeners,uninstall:function(e){if(!e)return o.error("At least one element is required.");if(S(e))e=[e];else{if(!x(e))return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=E(e)}c(e,(function(e){l.removeAllListeners(e),a.uninstall(e),b.cleanState(e)}))},initDocument:function(e){a.initDocument&&a.initDocument(e)}}}();var C=function(e,t,n,i,o,r,s,a,l,d){"boolean"!=typeof s&&(l=a,a=s,s=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):t&&(c=s?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(u.functional){var h=u.render;u.render=function(e,t){return c.call(t),h(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return n},k=C({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mm-ellipsis-container"},[n("div",{staticClass:"after",class:{hidden:!1===e.innerEllipsis}},[n("div",{staticClass:"shadow"},[n("textarea",{attrs:{rows:e.rows,readonly:""}}),e._v(" "),n("div",{ref:"box",staticClass:"shadow-box"},[n("span",{domProps:{innerHTML:e._s(e.showContent)}}),e._v(" "),n("span",[e._v("\n          "+e._s(e.ellipsisText)+"\n          "),n("span",{staticClass:"ellipsis-btn"},[e._v(e._s(e.showMoreText))])]),e._v(" "),n("span",{ref:"tail"})])]),e._v(" "),n("div",{staticClass:"real-box"},[n("span",{domProps:{innerHTML:e._s(e.showContent)}}),e._v(" "),e.textLength<e.content.length||e.btnShow?n("span",[e._v("\n        "+e._s(e.ellipsisText)+"\n        "),n("span",{staticClass:"ellipsis-btn",on:{click:e.showMore}},[e._v(e._s(e.showMoreText))])]):e._e()])]),e._v(" "),n("div",{staticClass:"before",class:{hidden:!0===e.innerEllipsis}},[n("span",{domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e.showContent!==e.content||e.btnShow?n("span",{staticClass:"ellipsis-btn",on:{click:e.hideMore}},[e._v(e._s(e.hideMoreText))]):e._e()])])},staticRenderFns:[]},undefined,{props:{content:{type:String,default:""},rows:{type:Number,default:3},ellipsisText:{type:String,default:"..."},showMoreText:{type:String,default:"展开"},hideMoreText:{type:String,default:"折叠"},btnShow:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!0}},data:function(){return{textLength:0,beforeRefresh:null,boxWidth:0,boxHeight:0,innerEllipsis:this.ellipsis}},computed:{showContent:function(){return this.content.substr(0,this.textLength)},watchData:function(){return[this.content,this.showMoreText,this.hideMoreText,this.innerEllipsis,this.ellipsisText,this.rows,this.btnShow]}},watch:{watchData:{immediate:!0,handler:function(){this.refresh()}}},mounted:function(){var e=this;T.listenTo(this.$refs.box,(function(t){t.offsetWidth==e.boxWidth&&t.offsetHeight==e.boxHeight||(e.boxWidth=t.offsetWidth,e.boxHeight=t.offsetHeight,e.refresh())}))},beforeDestroy:function(){T.uninstall(this.$refs.box)},methods:{refresh:function(){var e=this;this.beforeRefresh&&this.beforeRefresh();var t=!1;this.beforeRefresh=function(){return t=!0},this.textLength=this.content.length;var n=function n(i,o){if(t||i+1>=o)e.beforeRefresh=null;else{var r=e.$refs.box.getBoundingClientRect();e.$refs.tail.getBoundingClientRect().bottom>r.bottom?o=e.textLength:i=e.textLength,e.textLength=Math.floor((i+o)/2),e.$nextTick((function(){return n(i,o)}))}};this.$nextTick((function(){return n(0,e.textLength)}))},showMore:function(e){this.innerEllipsis=!1,this.$emit("update:ellipsis",!1),this.$emit("show-more")},hideMore:function(){this.innerEllipsis=!0,this.$emit("update:ellipsis",!0),this.$emit("hide-more")}}},"data-v-fe4fc566",false,undefined,!1,void 0,void 0,void 0),A={install:function(e){e.component("vue-overflow-ellipsis",k)}};window.Vue&&A.install(window.Vue),module.exports=A;