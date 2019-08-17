var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,s)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="img-comparison-slider";var a=window;var i=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var s=!!i.documentElement.attachShadow;var l=function(){var e=false;try{i.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(e){}return e}();var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var c=new WeakMap;var u=function(e){return c.get(e)};var $=e("r",function(e,t){return c.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return c.set(e,t)}};var d=function(e,t){return t in e};var h=function(e){return console.error(e)};var p=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var m=new Map;var g=a.__stencil_cssshim;var y=0;var w=false;var b=[];var _=[];var R=[];var S=function(e){return function(t){e.push(t);if(!w){w=true;o.raf(T)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var N=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var T=function(){y++;x(b);var e=(o.$flags$&6)===2?performance.now()+7*Math.ceil(y*(1/22)):Infinity;N(_,e);N(R,e);if(_.length>0){R.push.apply(R,_);_.length=0}if(w=b.length+_.length+R.length>0){o.raf(T)}else{y=0}};var L=S(_);var E={};var k=function(e){return e!=null};var C=function(e){return e.toLowerCase()};var j=function(e){return["object","function"].includes(typeof e)};function A(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-39f11146.system.js")}return Promise.resolve()});var z=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,o;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});o=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));I(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:s.sent();s.label=3;case 3:return[2,o.href]}})})});var I=function(e){var t=A(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var o=new URL(n,e).href;var s=r.get(o);if(!s){var l=i.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise(function(e){l.onload=function(){e(a[t].m);l.remove()}});r.set(o,s);i.head.appendChild(l)}return s}}};var O="hydrated";var U=new WeakMap;var B=function(e,t,r){var n=m.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}m.set(e,n)};var M=function(e,t,r,n){var a=q(t);var o=m.get(a);e=e.nodeType===11?e:i;if(o){if(typeof o==="string"){e=e.head||e;var s=U.get(e);var l=void 0;if(!s){U.set(e,s=new Set)}if(!s.has(a)){{if(g){l=g.createHostStyle(n,a,o);var f=l["s-sc"];if(f){a=f;s=null}}else{l=i.createElement("style");l.innerHTML=o}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([o])}}return a};var H=function(e,t,r){var n=M(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t.$tagName$,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var q=function(e,t){return"sc-"+e};var W=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var l;var f=[];var c=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){c(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!j(a)){a=String(a)}if(i&&o){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}o=i}}};c(r);if(t){{s=t.key||undefined}{l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,D)}var $={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{$.$key$=s}{$.$name$=l}return $});var F={};var D={forEach:function(e,t){return e.map(G).forEach(t)},map:function(e,t){return e.map(G).map(t).map(Q)}};var G=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Q=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var V=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{e.className=n}}else if(t==="style"){for(var s in n){if(!r||n[s]!==r[s]){if(s.includes("-")){e.style.setProperty(s,n[s])}else{e.style[s]=n[s]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!d(e,t)){if(d(e,C(t))){t=C(t.substring(2))}else{t=C(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var l=d(e,t);var f=j(n);if((l||f&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!l||i&4||a)&&!f){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var J=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||E;var o=t.$attrs$||E;for(n in o){V(a,n,i[n],o[n],r,t.$flags$)}};var K;var X;var Y;var Z=false;var ee=false;var te=false;var re=false;var ne=function(e,t,r,n){var a=t.$children$[r];var o=0;var s;var l;var f;if(!Z){te=true;if(a.$tag$==="slot"){if(K){n.classList.add(K+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(k(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=i.createTextNode("")}else{s=a.$elm$=i.createElement(a.$flags$&2?"slot-fb":a.$tag$);{J(null,a,re)}if(k(K)&&s["s-si"]!==K){s.classList.add(s["s-si"]=K)}if(a.$children$){for(o=0;o<a.$children$.length;++o){l=ne(e,a,o,s);if(l){s.appendChild(l)}}}}{a.$elm$["s-hn"]=Y;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=X;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){ae(e.$elm$,false)}}}return a.$elm$};var ae=function(e,t){o.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==Y&&a["s-ol"]){se(a).insertBefore(a,oe(a));a["s-ol"].remove();a["s-ol"]=undefined;te=true}if(t){ae(a,t)}}o.$flags$&=~1};var ie=function(e,t,r,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if(o.shadowRoot&&C(o.tagName)===Y){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=ne(null,r,a,e);if(s){n[a].$elm$=s;o.insertBefore(s,oe(t))}}}};var oe=function(e){return e&&e["s-ol"]||e};var se=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var le=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(!k(t.$text$)){{if(t.$tag$==="slot");else{J(e,t,re)}}if(k(a)){ie(r,null,t,a,0,a.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var fe=function(e,t,r,n,a,i,o,s){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){o=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(o!==""){if(s===1&&o===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}fe(t)}}};var ce=[];var ue=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var o;var s;var l;var f;for(r=t.length;n<r;n++){o=t[n];if(o["s-sr"]&&(s=o["s-cr"])){l=s.parentNode.childNodes;f=o["s-sn"];for(a=l.length-1;a>=0;a--){s=l[a];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==o["s-hn"]){i=s.nodeType;if((i===3||i===8)&&f===""||i===1&&s.getAttribute("slot")===null&&f===""||i===1&&s.getAttribute("slot")===f){if(!ce.some(function(e){return e.nodeToRelocate===s})){ee=true;s["s-sn"]=f;ce.push({slotRefNode:o,nodeToRelocate:s})}}}}}if(o.nodeType===1){ue(o)}}};var $e=function(e){return e&&e.$tag$===F};var ve=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};Y=C(e.tagName);if($e(n)){n.$tag$=null}else{n=W(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{K=e["s-sc"]}{X=e["s-cr"];Z=s&&(r.$flags$&1)!==0;te=ee=false}le(a,n);{if(te){ue(n.$elm$);for(var l=0;l<ce.length;l++){var f=ce[l];if(!f.nodeToRelocate["s-ol"]){var c=i.createTextNode("");c["s-nr"]=f.nodeToRelocate;f.nodeToRelocate.parentNode.insertBefore(f.nodeToRelocate["s-ol"]=c,f.nodeToRelocate)}}o.$flags$|=1;for(var l=0;l<ce.length;l++){var f=ce[l];var u=f.slotRefNode.parentNode;var $=f.slotRefNode.nextSibling;var c=f.nodeToRelocate["s-ol"];while(c=c.previousSibling){var v=c["s-nr"];if(v&&v){if(v["s-sn"]===f.nodeToRelocate["s-sn"]){if(u===v.parentNode){if((v=v.nextSibling)&&v&&!v["s-nr"]){$=v;break}}}}}if(!$&&u!==f.nodeToRelocate.parentNode||f.nodeToRelocate.nextSibling!==$){if(f.nodeToRelocate!==$){u.insertBefore(f.nodeToRelocate,$)}}}o.$flags$&=~1}if(ee){fe(n.$elm$)}ce.length=0}};var de=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();h(r);return[3,4];case 4:return[2]}})})};var he=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:r=t.$lazyInstance$;if(!a)return[3,2];return[4,de(r,"componentWillLoad")];case 1:i.sent();i.label=2;case 2:{L(function(){return pe(e,t,n,r,a)})}return[2]}})})};var pe=function(e,t,r,n,a){{e["s-lr"]=false}if(a){H(e,r,t.$modeName$)}{{t.$flags$|=4;try{ve(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(g){g.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}me(e,t)};var me=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;{de(n,"componentDidRender")}if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(O)}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(O);{setTimeout(function(){return o.$flags$|=2},999)}}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var ge=function(e){if((o.$flags$&1)===0){var t=u(e);{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(g){g.removeHost(e)}var r=t.$lazyInstance$}};var ye=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var t=e[0],r=e[1][0]})}return e};var we=function(e,t,r){var n=r.map(function(r){var n=r[0],a=r[1],i=r[2];var s=_e(e,n);var l=be(t,i);var f=Re(n);o.ael(s,a,l,f);return function(){return o.rel(s,a,l,f)}});return function(){return n.forEach(function(e){return e()})}};var be=function(e,t){return function(r){{if(e.$lazyInstance$){return e.$lazyInstance$[t](r)}else{return e.$onReadyPromise$.then(function(){return e.$lazyInstance$[t](r)}).catch(h)}}}};var _e=function(e,t){if(t&8)return a;return e};var Re=function(e){return l?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Se=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,function(){var r,i,s;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;return[4,p(a)];case 1:o=l.sent();if(!o.isProxied){ye(o,a);o.isProxied=true}{n.$flags$|=8}try{new o(n)}catch(e){h(e)}{n.$flags$&=~8}xe(n.$lazyInstance$);if(!(!o.isStyleRegistered&&o.style))return[3,4];r=o.style;i=q(a.$tagName$,n.$modeName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 2:r=l.sent();l.label=3;case 3:B(i,r,!!(a.$flags$&1));o.isStyleRegistered=true;l.label=4;case 4:s=n.$ancestorComponent$;if(s&&!s["s-lr"]&&s["s-rc"]){s["s-rc"].push(function(){return Se(e,n,a)})}else{he(e,n,a,true)}return[2]}})})};var xe=function(e){};var Ne=function(e,t){if((o.$flags$&1)===0){var r=u(e);if(t.$listeners$){r.$rmListeners$=we(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Te(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&!a["s-lr"]){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}{Se(e,r,t)}}xe(r.$lazyInstance$)}};var Te=function(e,t){var r;{r=""}t=e["s-cr"]=i.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Le=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var l=i.head;var f=a.customElements;var c=l.querySelector("meta[charset]");var $=i.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",a.location.href).href;if(t.syncQueue){o.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!s&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);if(a.$flags$&1){if(s){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){Ne(this,a)};t.prototype.disconnectedCallback=function(){ge(this)};t.prototype["s-init"]=function(){var e=u(this);if(e.$lazyInstance$){me(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){};t.prototype.componentOnReady=function(){return u(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,ye(o,a))}})});$.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");l.insertBefore($,c?c.nextSibling:l.firstChild)});var Ee=e("g",function(e){return u(e).$hostElement$})}}});