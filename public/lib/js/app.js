!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){t(1),e.exports=t(4)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),o=t(3);r.a(),o.a()},function(e,n,t){"use strict";function r(){m=document.querySelector(".js-header__open-nav"),g=document.querySelector(".js-header__close-nav"),f=document.querySelector(".js-header__nav-wrap"),m&&g&&f&&(v=f.getElementsByTagName("*"),o(),i())}function o(){m.addEventListener("click",d,!1),g.addEventListener("click",d,!1),document.addEventListener("touchend",c,!1),document.addEventListener("click",c,!1),document.addEventListener("keyup",a,!1),window.addEventListener("resizeViaRAF",u,!1)}function i(){function e(){n||(n=!0,requestAnimationFrame(function(){window.dispatchEvent(new CustomEvent("resizeViaRAF")),n=!1}))}var n=!1;window.addEventListener("resize",e)}function u(){(p=window.innerWidth)>=s&&l&&d(event)}function c(e){if(l&&e.target!==f){for(var n=0;n<v.length;n++)if(e.target===v[n])return;d(e)}}function a(e){l&&27===e.keyCode&&d(e)}function d(e){f.classList.toggle("is-visible"),l=!l,e.stopPropagation()}n.a=r;var s=600,l=!1,f=null,v=null,m=null,g=null,p=null},function(e,n,t){"use strict";function r(){a=document.querySelector(".js-demos-nav"),s=document.querySelector(".js-demos-nav-toggle"),a&&s&&(d=a.getElementsByTagName("*"),o())}function o(){s.addEventListener("click",c,!1),document.addEventListener("touchend",i,!1),document.addEventListener("click",i,!1),document.addEventListener("keyup",u,!1)}function i(e){if(l&&e.target!==a){for(var n=0;n<d.length;n++)if(e.target===d[n])return;c(e)}}function u(e){l&&27===e.keyCode&&c(e)}function c(e){a.classList.toggle("is-visible"),l=!l}n.a=r;var a=null,d=null,s=null,l=!1},function(e,n){}]);
//# sourceMappingURL=app.js.map