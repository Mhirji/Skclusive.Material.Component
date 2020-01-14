!function(){"use strict";function e(e,...t){const{DomHelpers:n}=window.Skclusive.Script;return n[e].apply(null,t)}function t(...t){return e("generateId",...t)}function n(...t){return e("ownerDocument",...t)}const i={};function r(e,t){if(!t)return;const n=t.getBoundingClientRect();let i;if(t.fakeTransform)i=t.fakeTransform;else{const e=window.getComputedStyle(t);i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let r=0,s=0;if(i&&"none"!==i&&"string"==typeof i){const e=i.split("(")[1].split(")")[0].split(",");r=parseInt(e[4],10),s=parseInt(e[5],10)}return"left"===e||"start"===e?`translateX(${window.innerWidth}px) translateX(-${n.left-r}px)`:"right"===e||"end"===e?`translateX(-${n.left+n.width-r}px)`:"up"===e||"top"===e?`translateY(${window.innerHeight}px) translateY(-${n.top-s}px)`:`translateY(-${n.top+n.height-s}px)`}const s={};const o={};const c={};const u={};function a(e,t,n){return e===t?e.firstElementChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstElementChild}function l(e,t,n){return e===t?n?e.firstElementChild:e.lastElementChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastElementChild}function d(e,t){if(void 0===t)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),void 0!==n&&(n=n.trim().toLowerCase(),0!==n.length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join(""))))}function f(t,n){const i=u[t],{list:r,lastFocused:s=r.querySelector(".ListItem-FocusVisible")}=i;n.focus(),function(...t){e("addClasses",...t)}(n,["ListItem-FocusVisible"]),s&&function(...t){e("removeClasses",...t)}(s,["ListItem-FocusVisible"]),i.lastFocused=n}function p(e,t,n,i,r,s){let o=!1,c=r(t,n,!!n&&i);for(;c;){if(c===t.firstElementChild){if(o)return!1;o=!0}if(c.hasAttribute("tabindex")&&!c.disabled&&"true"!==c.getAttribute("aria-disabled")&&d(c,s))return f(e,c),!0;c=r(t,c,i)}return!1}const g={},m={Dark:"(prefers-color-scheme: dark)",Light:"(prefers-color-scheme: light)",None:"(prefers-color-scheme: no-preference)"};window.Skclusive={...window.Skclusive,Material:{...(window.Skclusive||{}).Material,Script:{goBack:function(...t){return e("goBack",...t)},getSlideTranslateValue:r,setSlideTranslateValue:function(t,n){if(!n)return;const i=r(t,n);i&&(n.style.webkitTransform=i,n.style.transform=i),function(...t){e("repaint",...t)}(n)},registerEvent:function(n,i,r,o){const c=t(),u=n instanceof Element?n:window;let a=function(e){return t=>{const n=s[e];n&&n.target&&n.target.invokeMethodAsync("OnEventAsync",JSON.stringify(t))}}(c);return o&&(a=function(...t){return e("debounce",...t)}(a,o)),u.addEventListener(i,a),s[c]={id:c,source:u,target:r,dispose:()=>u.removeEventListener(i,a)},c},unRegisterEvent:function(e){const t=s[e];t&&t.dispose&&t.dispose(),delete s[e]},initTrapFocus:function(e,i,r,s,c){const u=t(),a=document.activeElement,l=n(e);let d=!1;i||!e||e.contains(l.activeElement)||(e.hasAttribute("tabIndex")||e.setAttribute("tabIndex",-1),e.focus());const f=()=>{s||!c||d?d=!1:e&&!e.contains(l.activeElement)&&e.focus()},p=e=>{!s&&c&&9===e.keyCode&&l.activeElement===rootRef.current&&(d=!0,e.shiftKey?sentinelEnd.current.focus():sentinelStart.current.focus())};l.addEventListener("focus",f,!0),l.addEventListener("keydown",p,!0);const g=setInterval(()=>{f()},50);return o[u]={id:u,dispose:()=>{clearInterval(g),l.removeEventListener("focus",f,!0),l.removeEventListener("keydown",p,!0),!r&&a&&a.focus()}},u},disposeTrapFocus:function(e){const t=o[e];t&&t.dispose&&t.dispose(),delete o[e]},registerMediaQuery:function(e,n){const i=t();e=e.replace(/^@media( ?)/m,"");const r=window.matchMedia(e),s=function(e){return t=>{const n=c[e];n&&n.target&&n.target.invokeMethodAsync("OnChangeAsync",!!n.queryList.matches)}}(i);return r.addListener(s),c[i]={id:i,queryList:r,target:n,dispose:()=>r.removeListener(s)},setTimeout(s),i},unRegisterMediaQuery:function(e){const t=c[e];t&&t.dispose&&t.dispose(),delete c[e]},registerHistoryBack:function(e,n,r){const s=t();let o=function(e){return t=>{t.preventDefault(),t.stopPropagation(),t.currentTarget.blur();const n=i[e];n&&(n.delay?setTimeout(()=>history.back(),n.delay):history.back())}}(s);return e.addEventListener(n,o),i[s]={id:s,delay:r,dispose:()=>e.removeEventListener(n,o)},s},unRegisterHistoryBack:function(e){const t=i[e];t&&t.dispose&&t.dispose(),delete i[e]},getAnchorBoundry:function(t,i){return(t instanceof function(...t){return e("ownerWindow",...t)}(t).Element?t:n(i).body).getBoundingClientRect()},getContentAnchorOffset:function(t,n){let i=0;if(t&&n.contains(t)){const r=function(...t){return e("getScrollParent",...t)}(n,t);i=t.offsetTop+t.clientHeight/2-r||0}return i},registerMenuList:function(e,i){const r=t(),s=function(e){return function(t){const i=u[e],{list:r,disableListWrap:s,textCriteria:o}=i,c=t.key,f=n(r).activeElement;if("ArrowDown"===c)t.preventDefault(),p(e,r,f,s,a);else if("ArrowUp"===c)t.preventDefault(),p(e,r,f,s,l);else if("Home"===c)t.preventDefault(),p(e,r,null,s,a);else if("End"===c)t.preventDefault(),p(e,r,null,s,l);else if(1===c.length){const n=o,i=c.toLowerCase(),s=performance.now();n.keys.length>0&&(s-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&i!==n.keys[0]&&(n.repeating=!1)),n.lastTime=s,n.keys.push(i);const u=f&&!n.repeating&&d(f,n);n.previousKeyMatched&&(u||p(e,r,f,!1,a,n))?t.preventDefault():n.previousKeyMatched=!1}}}(r);return e.addEventListener("keydown",s),u[r]={id:r,list:e,disableListWrap:i,textCriteria:{keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null},dispose:()=>e.addEventListener("keydown",s)},r},unRegisterMenuList:function(e){const t=u[e];t&&t.dispose&&t.dispose(),delete u[e]},registerDetectTheme:function(e){const n=t(),i=function(e){return t=>{if(!t||!t.matches)return;const n=g[e];if(n&&n.target){const e=Object.keys(m);for(let i=0;i<e.length;i++){const r=e[i];if(t.media===m[r]){n.target.invokeMethodAsync("OnChangeAsync",r);break}}}}}(n),r=[];return Object.keys(m).forEach(e=>{const t=window.matchMedia(m[e]);t.addListener(i),r.push(t),setTimeout(()=>i(t))}),g[n]={id:n,target:e,dispose:()=>{r.forEach(e=>e.removeListener(i)),r.length=0}},n},unRegisterDetectTheme:function(e){const t=g[e];t&&t.dispose&&t.dispose(),delete g[e]}}}}}();
