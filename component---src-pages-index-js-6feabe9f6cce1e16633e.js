(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{8938:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(){var e={7403:function(e,t,n){"use strict";n.d(t,{default:function(){return T}});var r=n(4087),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},c="TYPE_CHARACTER",u="REMOVE_CHARACTER",p="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",v="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",m="CHANGE_CURSOR",b="PASTE_STRING",_="HTML_TAG";function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(){function e(t,n){var g=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),O(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),O(this,"setupWrapperElement",(function(){g.state.elements.container&&(g.state.elements.wrapper.className=g.options.wrapperClassName,g.state.elements.cursor.className=g.options.cursorClassName,g.state.elements.cursor.innerHTML=g.options.cursor,g.state.elements.container.innerHTML="",g.state.elements.container.appendChild(g.state.elements.wrapper),g.state.elements.container.appendChild(g.state.elements.cursor))})),O(this,"start",(function(){return g.state.eventLoopPaused=!1,g.runEventLoop(),g})),O(this,"pause",(function(){return g.state.eventLoopPaused=!0,g})),O(this,"stop",(function(){return g.state.eventLoop&&((0,r.cancel)(g.state.eventLoop),g.state.eventLoop=null),g})),O(this,"pauseFor",(function(e){return g.addEventToQueue(f,{ms:e}),g})),O(this,"typeOutAllStrings",(function(){return"string"==typeof g.options.strings?(g.typeString(g.options.strings).pauseFor(g.options.pauseFor),g):(g.options.strings.forEach((function(e){g.typeString(e).pauseFor(g.options.pauseFor).deleteAll(g.options.deleteSpeed)})),g)})),O(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return g.typeOutHTMLString(e,t);if(e){var n=(g.options||{}).stringSplitter,r="function"==typeof n?n(e):e.split("");g.typeCharacters(r,t)}return g})),O(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?g.typeOutHTMLString(e,t,!0):(e&&g.addEventToQueue(b,{character:e,node:t}),g)})),O(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",g.addEventToQueue(d,{node:a,parentNode:t}),n?g.pasteString(s,a):g.typeString(s,a)):a.textContent&&(n?g.pasteString(a.textContent,t):g.typeString(a.textContent,t))}return g})),O(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return g.addEventToQueue(p,{speed:e}),g})),O(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return g.addEventToQueue(h,{speed:e}),g})),O(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return g.addEventToQueue(y,{delay:e}),g})),O(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return g.addEventToQueue(m,{cursor:e}),g})),O(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)g.addEventToQueue(u);return g})),O(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return g.addEventToQueue(v,{cb:e,thisArg:t}),g})),O(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){g.addEventToQueue(c,{character:e,node:t})})),g})),O(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){g.addEventToQueue(u)})),g})),O(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.addEventToStateProperty(e,t,n,"eventQueue")})),O(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.options.loop?g.addEventToStateProperty(e,t,n,"reverseCalledEvents"):g})),O(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return g.state[r]=n?[o].concat(E(g.state[r])):[].concat(E(g.state[r]),[o]),g})),O(this,"runEventLoop",(function(){g.state.lastFrameTime||(g.state.lastFrameTime=Date.now());var e=Date.now(),t=e-g.state.lastFrameTime;if(!g.state.eventQueue.length){if(!g.options.loop)return;g.state.eventQueue=E(g.state.calledEvents),g.state.calledEvents=[],g.options=w({},g.state.initialOptions)}if(g.state.eventLoop=o()(g.runEventLoop),!g.state.eventLoopPaused){if(g.state.pauseUntil){if(e<g.state.pauseUntil)return;g.state.pauseUntil=null}var n,r=E(g.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===l||a.eventName===u?"natural"===g.options.deleteSpeed?s(40,80):g.options.deleteSpeed:"natural"===g.options.delay?s(120,160):g.options.delay))){var i=a.eventName,x=a.eventArgs;switch(g.logInDevMode({currentEvent:a,state:g.state,delay:n}),i){case b:case c:var j=x.character,O=x.node,T=document.createTextNode(j),A=T;g.options.onCreateTextNode&&"function"==typeof g.options.onCreateTextNode&&(A=g.options.onCreateTextNode(j,T)),A&&(O?O.appendChild(A):g.state.elements.wrapper.appendChild(A)),g.state.visibleNodes=[].concat(E(g.state.visibleNodes),[{type:"TEXT_NODE",character:j,node:A}]);break;case u:r.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case f:var S=a.eventArgs.ms;g.state.pauseUntil=Date.now()+parseInt(S);break;case v:var N=a.eventArgs,C=N.cb,P=N.thisArg;C.call(P,{elements:g.state.elements});break;case d:var k=a.eventArgs,D=k.node,L=k.parentNode;L?L.appendChild(D):g.state.elements.wrapper.appendChild(D),g.state.visibleNodes=[].concat(E(g.state.visibleNodes),[{type:_,node:D,parentNode:L||g.state.elements.wrapper}]);break;case p:var R=g.state.visibleNodes,M=x.speed,F=[];M&&F.push({eventName:h,eventArgs:{speed:M,temp:!0}});for(var I=0,z=R.length;I<z;I++)F.push({eventName:l,eventArgs:{removingCharacterNode:!1}});M&&F.push({eventName:h,eventArgs:{speed:g.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case l:var Q=a.eventArgs.removingCharacterNode;if(g.state.visibleNodes.length){var U=g.state.visibleNodes.pop(),H=U.type,W=U.node,B=U.character;g.options.onRemoveNode&&"function"==typeof g.options.onRemoveNode&&g.options.onRemoveNode({node:W,character:B}),W&&W.parentNode.removeChild(W),H===_&&Q&&r.unshift({eventName:l,eventArgs:{}})}break;case h:g.options.deleteSpeed=a.eventArgs.speed;break;case y:g.options.delay=a.eventArgs.delay;break;case m:g.options.cursor=a.eventArgs.cursor,g.state.elements.cursor.innerHTML=a.eventArgs.cursor}g.options.loop&&(a.eventName===l||a.eventArgs&&a.eventArgs.temp||(g.state.calledEvents=[].concat(E(g.state.calledEvents),[a]))),g.state.eventQueue=r,g.state.lastFrameTime=e}}})),t)if("string"==typeof t){var x=document.querySelector(t);if(!x)throw new Error("Could not find container element");this.state.elements.container=x}else this.state.elements.container=t;n&&(this.options=w(w({},this.options),n)),this.state.initialOptions=w({},this.options),this.init()}var t;return(t=[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&j(e.prototype,t),e}()},8552:function(e,t,n){var r=n(852)(n(5639),"DataView");e.exports=r},1989:function(e,t,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),s=n(1866);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},8407:function(e,t,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),s=n(4705);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),s=n(5265);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},3818:function(e,t,n){var r=n(852)(n(5639),"Promise");e.exports=r},8525:function(e,t,n){var r=n(852)(n(5639),"Set");e.exports=r},8668:function(e,t,n){var r=n(3369),o=n(619),a=n(2385);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},6384:function(e,t,n){var r=n(8407),o=n(7465),a=n(3779),i=n(7599),s=n(4758),c=n(4309);function u(e){var t=this.__data__=new r(e);this.size=t.size}u.prototype.clear=o,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=s,u.prototype.set=c,e.exports=u},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},1149:function(e,t,n){var r=n(5639).Uint8Array;e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},4963:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},4636:function(e,t,n){var r=n(2545),o=n(5694),a=n(1469),i=n(4144),s=n(5776),c=n(6719),u=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),p=!n&&o(e),l=!n&&!p&&i(e),f=!n&&!p&&!l&&c(e),v=n||p||l||f,d=v?r(e.length,String):[],h=d.length;for(var y in e)!t&&!u.call(e,y)||v&&("length"==y||l&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,h))||d.push(y);return d}},2488:function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},2908:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},8866:function(e,t,n){var r=n(2488),o=n(1469);e.exports=function(e,t,n){var a=t(e);return o(e)?a:r(a,n(e))}},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},9454:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},939:function(e,t,n){var r=n(2492),o=n(7005);e.exports=function e(t,n,a,i,s){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,i,e,s))}},2492:function(e,t,n){var r=n(6384),o=n(7114),a=n(8351),i=n(6096),s=n(4160),c=n(1469),u=n(4144),p=n(6719),l="[object Arguments]",f="[object Array]",v="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,h,y,m){var b=c(e),_=c(t),g=b?f:s(e),w=_?f:s(t),E=(g=g==l?v:g)==v,x=(w=w==l?v:w)==v,j=g==w;if(j&&u(e)){if(!u(t))return!1;b=!0,E=!1}if(j&&!E)return m||(m=new r),b||p(e)?o(e,t,n,h,y,m):a(e,t,g,n,h,y,m);if(!(1&n)){var O=E&&d.call(e,"__wrapped__"),T=x&&d.call(t,"__wrapped__");if(O||T){var A=O?e.value():e,S=T?t.value():t;return m||(m=new r),y(A,S,n,h,m)}}return!!j&&(m||(m=new r),i(e,t,n,h,y,m))}},8458:function(e,t,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,l=u.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:s).test(i(e))}},8749:function(e,t,n){var r=n(4239),o=n(1780),a=n(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},280:function(e,t,n){var r=n(5726),o=n(6916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},2545:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},1717:function(e){e.exports=function(e){return function(t){return e(t)}}},4757:function(e){e.exports=function(e,t){return e.has(t)}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},7114:function(e,t,n){var r=n(8668),o=n(2908),a=n(4757);e.exports=function(e,t,n,i,s,c){var u=1&n,p=e.length,l=t.length;if(p!=l&&!(u&&l>p))return!1;var f=c.get(e),v=c.get(t);if(f&&v)return f==t&&v==e;var d=-1,h=!0,y=2&n?new r:void 0;for(c.set(e,t),c.set(t,e);++d<p;){var m=e[d],b=t[d];if(i)var _=u?i(b,m,d,t,e,c):i(m,b,d,e,t,c);if(void 0!==_){if(_)continue;h=!1;break}if(y){if(!o(t,(function(e,t){if(!a(y,t)&&(m===e||s(m,e,n,i,c)))return y.push(t)}))){h=!1;break}}else if(m!==b&&!s(m,b,n,i,c)){h=!1;break}}return c.delete(e),c.delete(t),h}},8351:function(e,t,n){var r=n(2705),o=n(1149),a=n(7813),i=n(7114),s=n(8776),c=n(1814),u=r?r.prototype:void 0,p=u?u.valueOf:void 0;e.exports=function(e,t,n,r,u,l,f){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!l(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var v=s;case"[object Set]":var d=1&r;if(v||(v=c),e.size!=t.size&&!d)return!1;var h=f.get(e);if(h)return h==t;r|=2,f.set(e,t);var y=i(v(e),v(t),r,u,l,f);return f.delete(e),y;case"[object Symbol]":if(p)return p.call(e)==p.call(t)}return!1}},6096:function(e,t,n){var r=n(8234),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,a,i,s){var c=1&n,u=r(e),p=u.length;if(p!=r(t).length&&!c)return!1;for(var l=p;l--;){var f=u[l];if(!(c?f in t:o.call(t,f)))return!1}var v=s.get(e),d=s.get(t);if(v&&d)return v==t&&d==e;var h=!0;s.set(e,t),s.set(t,e);for(var y=c;++l<p;){var m=e[f=u[l]],b=t[f];if(a)var _=c?a(b,m,f,t,e,s):a(m,b,f,e,t,s);if(!(void 0===_?m===b||i(m,b,n,a,s):_)){h=!1;break}y||(y="constructor"==f)}if(h&&!y){var g=e.constructor,w=t.constructor;g==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof g&&g instanceof g&&"function"==typeof w&&w instanceof w||(h=!1)}return s.delete(e),s.delete(t),h}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},8234:function(e,t,n){var r=n(8866),o=n(9551),a=n(3674);e.exports=function(e){return r(e,a,o)}},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},9551:function(e,t,n){var r=n(4963),o=n(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(e){return null==e?[]:(e=Object(e),r(i(e),(function(t){return a.call(e,t)})))}:o;e.exports=s},4160:function(e,t,n){var r=n(8552),o=n(7071),a=n(3818),i=n(8525),s=n(577),c=n(4239),u=n(346),p="[object Map]",l="[object Promise]",f="[object Set]",v="[object WeakMap]",d="[object DataView]",h=u(r),y=u(o),m=u(a),b=u(i),_=u(s),g=c;(r&&g(new r(new ArrayBuffer(1)))!=d||o&&g(new o)!=p||a&&g(a.resolve())!=l||i&&g(new i)!=f||s&&g(new s)!=v)&&(g=function(e){var t=c(e),n="[object Object]"==t?e.constructor:void 0,r=n?u(n):"";if(r)switch(r){case h:return d;case y:return p;case m:return l;case b:return f;case _:return v}return t}),e.exports=g},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7518:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},4705:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},4785:function(e,t,n){var r=n(1989),o=n(8407),a=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},8776:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1167:function(e,t,n){e=n.nmd(e);var r=n(1957),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},619:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:function(e){e.exports=function(e){return this.__data__.has(e)}},1814:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},7465:function(e,t,n){var r=n(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:function(e){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},7599:function(e){e.exports=function(e){return this.__data__.get(e)}},4758:function(e){e.exports=function(e){return this.__data__.has(e)}},4309:function(e,t,n){var r=n(8407),o=n(7071),a=n(3369);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(e,t),this.size=n.size,this}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},5694:function(e,t,n){var r=n(9454),o=n(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,n){var r=n(3560),o=n(1780);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},4144:function(e,t,n){e=n.nmd(e);var r=n(5639),o=n(5062),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?r.Buffer:void 0,c=(s?s.isBuffer:void 0)||o;e.exports=c},8446:function(e,t,n){var r=n(939);e.exports=function(e,t){return r(e,t)}},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6719:function(e,t,n){var r=n(8749),o=n(1717),a=n(1167),i=a&&a.isTypedArray,s=i?o(i):r;e.exports=s},3674:function(e,t,n){var r=n(4636),o=n(280),a=n(8612);e.exports=function(e){return a(e)?r(e):o(e)}},479:function(e){e.exports=function(){return[]}},5062:function(e){e.exports=function(){return!1}},75:function(e){(function(){var t,n,r,o,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4087:function(e,t,n){for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],c=o["cancel"+i]||o["cancelRequest"+i],u=0;!s&&u<a.length;u++)s=o[a[u]+"Request"+i],c=o[a[u]+"Cancel"+i]||o[a[u]+"CancelRequest"+i];if(!s||!c){var p=0,l=0,f=[];s=function(e){if(0===f.length){var t=r(),n=Math.max(0,16.666666666666668-(t-p));p=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(p)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++l,callback:e,cancelled:!1}),l},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}},9297:function(e){"use strict";e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var o={};return function(){"use strict";n.d(o,{default:function(){return y}});var e=n(9297),t=n.n(e),r=(n(5697),n(7403)),a=n(8446),i=n.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(h,e);var n,o,a,s=(o=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(a){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function h(){var e;c(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(f(e=s.call.apply(s,[this].concat(n))),"state",{instance:null}),e}return(n=[{key:"componentDidMount",value:function(){var e=this,t=new r.default(this.typewriter,this.props.options);this.setState({instance:t},(function(){var n=e.props.onInit;n&&n(t)}))}},{key:"componentDidUpdate",value:function(e){i()(this.props.options,e.options)||this.setState({instance:new r.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var e=this,n=this.props.component;return t().createElement(n,{ref:function(t){return e.typewriter=t},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&u(h.prototype,n),h}(e.Component);h.defaultProps={component:"div"};var y=h}(),o.default}())},7704:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),o=n(9138),a=n(8938),i=n.n(a),s=n(5754),c=n(1496);function u(e){var t=e.data;return r.createElement(o.Z,null,r.createElement(s.Z,null),r.createElement("section",{className:"home section active",id:"home"},r.createElement("div",{style:{paddingBottom:"0"},className:"container"},r.createElement("div",{className:"intro"},r.createElement("div",{className:"intro-box"},r.createElement("h2",null,"Discover My Amazing ",r.createElement("br",null)," Art Space!"),r.createElement("h1",null,r.createElement("span",null," ",r.createElement(i(),{onInit:function(e){e.typeString("<span style='color: yellow;'>I am Rahul T</span>").pauseFor(1e3).deleteAll().typeString("<span style='color: green;'>I am a Web Developer</span>").pauseFor(1e3).deleteAll().typeString("<span style='color: yellow;'>I am a Python Developer</span>").pauseFor(1e3).deleteAll().typeString("<span style='color: green;'>I am a Full Stack Developer</span>").pauseFor(1e3).deleteAll().typeString("<span style='color: red;'>Welcome</span>").start()}}))),r.createElement(c.Z,{fluid:t.file.childImageSharp.fluid,className:"dp",alt:"rahulmanojcet"})),r.createElement("div",{className:"social-container"},r.createElement("ul",{className:"social-icons"},r.createElement("li",null,r.createElement("a",{href:"https://instagram.com/_rawho"},r.createElement("i",{className:"fa fa-instagram"}))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/rawho"},r.createElement("i",{className:"fa fa-github"}))),r.createElement("li",null,r.createElement("a",{href:"https://linkedin.com/in/rahulmanojcet"},r.createElement("i",{className:"fa fa-linkedin"}))),r.createElement("li",null,r.createElement("a",{href:"https://wa.me/+919747406685"},r.createElement("i",{className:"fa fa-whatsapp"})))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6feabe9f6cce1e16633e.js.map