(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[893],{1455:function(e,t,o){"use strict";var n=o(8072),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,l,c,i,u,p=!1;t||(t={}),o=t.debug||!1;try{if(l=n(),c=document.createRange(),i=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),c.selectNodeContents(u),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(s){o&&console.error("unable to copy using clipboardData: ",s),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),u&&document.body.removeChild(u),l()}return p}},191:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(7294)),r=a(o(1455));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?y(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(e){function t(){var e,o;u(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return b(y(o=s(this,(e=f(t)).call.apply(e,[this].concat(l)))),"onClick",(function(e){var t=o.props,a=t.text,l=t.onCopy,c=t.children,i=t.options,u=n.default.Children.only(c),p=(0,r.default)(a,i);l&&l(a,p),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e)})),o}var o,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),o=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=i(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}])&&p(o.prototype,a),l&&p(o,l),t}(n.default.PureComponent);t.CopyToClipboard=m,b(m,"defaultProps",{onCopy:void 0,options:void 0})},8552:function(e,t,o){"use strict";var n=o(191).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},8072:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1595:function(e,t,o){"use strict";o.r(t);var n=o(7294),r=o(8552);t.default=function(){var e=(0,n.useState)(""),t=(e[0],e[1],(0,n.useState)("this is exp1")),o=t[0],a=(t[1],(0,n.useState)("this is exp2")),l=a[0],c=(a[1],(0,n.useState)("this is exp3")),i=c[0],u=(c[1],(0,n.useState)(!1)),p=u[0],s=u[1];return n.createElement("div",{style:{margin:20}},n.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:20},className:"expContainer"},n.createElement("div",{className:"exp"},n.createElement(r.CopyToClipboard,{text:o,onCopy:function(){return s(!0)}},n.createElement("button",null,"exp1"))),n.createElement("div",{className:"exp"},n.createElement(r.CopyToClipboard,{text:l,onCopy:function(){return s(!0)}},n.createElement("button",null,"exp2"))),n.createElement("div",{className:"exp"},n.createElement(r.CopyToClipboard,{text:i,onCopy:function(){return s(!0)}},n.createElement("button",null,"exp3")))),p?n.createElement("span",{style:{color:"red"}},"Copied."):null)}}}]);
//# sourceMappingURL=component---src-pages-ds-js-271255942984cc519db8.js.map