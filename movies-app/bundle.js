/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e){return e=e||[],Array.isArray(e)?e:[e]}function t(e){return`[Vaadin.Router] ${e}`}const n="module",r="nomodule",o=[n,r];function i(e){if(!e.match(/.+\.[m]?js$/))throw new Error(t(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function s(e){if(!e||!u(e.path))throw new Error(t('Expected route config to be an object with a "path" string property, or an array of such objects'));const s=e.bundle,a=["component","redirect","bundle"];if(!(d(e.action)||Array.isArray(e.children)||d(e.children)||h(s)||a.some((t=>u(e[t])))))throw new Error(t(`Expected route config "${e.path}" to include either "${a.join('", "')}" or "action" function but none found.`));if(s)if(u(s))i(s);else{if(!o.some((e=>e in s)))throw new Error(t('Expected route bundle to include either "'+r+'" or "'+n+'" keys, or both'));o.forEach((e=>e in s&&i(s[e])))}e.redirect&&["bundle","component"].forEach((n=>{n in e&&console.warn(t(`Route config "${e.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))}))}function a(t){e(t).forEach((e=>s(e)))}function l(e,t){let o=document.head.querySelector('script[src="'+e+'"][async]');return o||(o=document.createElement("script"),o.setAttribute("src",e),t===n?o.setAttribute("type",n):t===r&&o.setAttribute(r,""),o.async=!0),new Promise(((e,t)=>{o.onreadystatechange=o.onload=t=>{o.__dynamicImportLoaded=!0,e(t)},o.onerror=e=>{o.parentNode&&o.parentNode.removeChild(o),t(e)},null===o.parentNode?document.head.appendChild(o):o.__dynamicImportLoaded&&e()}))}function c(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function h(e){return"object"==typeof e&&!!e}function d(e){return"function"==typeof e}function u(e){return"string"==typeof e}function p(e){const n=new Error(t(`Page not found (${e.pathname})`));return n.context=e,n.code=404,n}const m=new class{};function f(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const r=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(r!==window.location.origin)return;const{pathname:o,search:i,hash:s}=t;c("go",{pathname:o,search:i,hash:s})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const _={activate(){window.document.addEventListener("click",f)},inactivate(){window.document.removeEventListener("click",f)}};function v(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;c("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!d(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const g={activate(){window.addEventListener("popstate",v)},inactivate(){window.removeEventListener("popstate",v)}};var w=function e(t,n,r){return t instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,n):Array.isArray(t)?function(t,n,r){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],n,r).source);return new RegExp("(?:"+o.join("|")+")",L(r))}(t,n,r):function(e,t,n){return O(C(e,n),t,n)}(t,n,r)},y=C,b=R,$=O,A="/",x="./",E=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function C(e,t){for(var n,r=[],o=0,i=0,s="",a=t&&t.delimiter||A,l=t&&t.delimiters||x,c=!1;null!==(n=E.exec(e));){var h=n[0],d=n[1],u=n.index;if(s+=e.slice(i,u),i=u+h.length,d)s+=d[1],c=!0;else{var p="",m=e[i],f=n[2],_=n[3],v=n[4],g=n[5];if(!c&&s.length){var w=s.length-1;l.indexOf(s[w])>-1&&(p=s[w],s=s.slice(0,w))}s&&(r.push(s),s="",c=!1);var y=""!==p&&void 0!==m&&m!==p,b="+"===g||"*"===g,$="?"===g||"*"===g,C=p||a,R=_||v;r.push({name:f||o++,prefix:p,delimiter:C,optional:$,repeat:b,partial:y,pattern:R?I(R):"[^"+k(C)+"]+?"})}}return(s||i<e.length)&&r.push(s+e.substr(i)),r}function R(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(l=i(c[h],a),!t[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===h?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(l=i(String(c),a),!t[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');o+=a.prefix+l}}else o+=a}return o}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(e){return e.replace(/([=!:$/()])/g,"\\$1")}function L(e){return e&&e.sensitive?"":"i"}function O(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,s=k(n.delimiter||A),a=n.delimiters||x,l=[].concat(n.endsWith||[]).map(k).concat("$").join("|"),c=o?"^":"",h=0===e.length,d=0;d<e.length;d++){var u=e[d];if("string"==typeof u)c+=k(u),h=d===e.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+k(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?c+=k(u.prefix)+"("+p+")?":c+="(?:"+k(u.prefix)+"("+p+"))?":c+=k(u.prefix)+"("+p+")"}}return i?(r||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+s+"(?="+l+"))?"),h||(c+="(?="+s+"|"+l+")")),new RegExp(c,L(n))}w.parse=y,w.compile=function(e,t){return R(C(e,t))},w.tokensToFunction=b,w.tokensToRegExp=$;const{hasOwnProperty:T}=Object.prototype,S=new Map;function N(e){try{return decodeURIComponent(e)}catch(t){return e}}function P(e,t,n,r,o){let i,s,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let s=S.get(i);if(!s){const t=[];s={keys:t,pattern:w(e,t,{end:n,strict:""===e})},S.set(i,s)}const a=s.pattern.exec(t);if(!a)return null;const l=Object.assign({},o);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&T.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(N):[]:l[n]=r?N(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:l}}(l,t,!h,r,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;a<h.length;){if(!s){const r=h[a];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),s=P(r,t.substr(o),n,i.keys,i.params)}const r=s.next(c);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function H(e){if(d(e.route.action))return e.route.action(e)}S.set("|false",{keys:[],pattern:/(?:)/});class j{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||H,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){a(t);const n=[...e(t)];this.root.__children=n}addRoutes(t){return a(t),this.root.__children.push(...e(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,u(e)?{pathname:e}:e),n=P(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,s=t;function a(e,l=o.value.route,c){const h=null===c&&o.value.route;return o=i||n.next(h),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,o.value.route)?o.done?Promise.reject(p(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,o.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,o.value),Promise.resolve(r(s)).then((t=>null!=t&&t!==m?(s.result=t.result||t,s):a(e,l,t)))):(i=o,Promise.resolve(m))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}j.pathToRegexp=w;const{pathToRegexp:B}=j,M=new Map;function U(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];o.parent=t,U(e,o,o.__children||o.children)}}function D(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function V(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function F(e,t={}){if(!(e instanceof j))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=D(n,r);if(!i&&(n.clear(),U(n,e.root,e.root.__children),i=D(n,r),!i))throw new Error(`Route "${r}" not found`);let s=M.get(i.fullPath);if(!s){let e=V(i),t=i.parent;for(;t;){const n=V(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=B.parse(e),r=B.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)u(n[e])||(o[n[e].name]=!0);s={toPath:r,keys:o},M.set(e,s),i.fullPath=e}let a=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let W=[];function J(e){W.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),W=e}const z=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},K=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function q(e,t){return e.classList.add(t),new Promise((n=>{if(z(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),K(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function Z(e){return null!=e}function G({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:s},a){const l=r.map((e=>e.route));return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>te(re.pathToRegexp.compile(ne(l))(Object.assign({},o,e)),s)}}function Q(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function X(e,t,n){if(d(e))return e.apply(n,t)}function Y(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?X(n[e],t,n):void 0}function ee(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function te(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ne(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class re extends j{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&j.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const o=re.NavigationTrigger;re.setTriggers.apply(re,Object.keys(o).map((e=>o[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=G({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(n){const r=n.route;let i=Promise.resolve();d(r.children)&&(i=i.then((()=>r.children(function(e){const t=Object.assign({},e);return delete t.next,t}(n)))).then((n=>{Z(n)||d(r.children)||(n=r.children),function(n,r){if(!Array.isArray(n)&&!h(n))throw new Error(t(`Incorrect "children" value for the route ${r.path}: expected array or object, but got ${n}`));r.__children=[];const o=e(n);for(let e=0;e<o.length;e++)s(o[e]),r.__children.push(o[e])}(n,r)})));const a={redirect:e=>Q(n,e),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return i.then((()=>{if(this.__isLatestRender(n))return X(r.action,[n,a],r)})).then((e=>{return Z(e)&&(e instanceof HTMLElement||e.redirect||e===m)?e:u(r.redirect)?a.redirect(r.redirect):r.bundle?(n=r.bundle,u(n)?l(n):Promise.race(o.filter((e=>e in n)).map((e=>l(n[e],e))))).then((()=>{}),(()=>{throw new Error(t(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>Z(e)?e:u(r.component)?a.component(r.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},u(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=G(e),t&&this.__updateBrowserHistory(e,1===n),c("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ee(this.__outlet&&this.__outlet.children),this.location=G(Object.assign(r,{resolver:this})),c("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,o=te(ne(n.chain),n.resolver)===n.pathname,i=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===m?o?e:null!==t.parent?i(e,t.parent,n):n:n));return i(n).then((e=>{if(null===e||e===m)throw p(r);return e&&e!==m&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const n=e.result;return n instanceof HTMLElement?(function(e,t){t.location=G(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,n),Promise.resolve(e)):n.redirect?this.__redirect(n.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):n instanceof Error?Promise.reject(n):Promise.reject(new Error(t(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),s=t=>Q(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t]);for(let t=0;t<r.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[t]),n[t].element.location=G(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=G(e,n[t].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[t]),r[t].element&&(r[t].element.location=G(e,r[t].route)));return o.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=G(t);return e.then((e=>{if(this.__isLatestRender(t))return Y("onBeforeLeave",[o,n,this],r.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const o=G(t,r.route);return e.then((e=>{if(this.__isLatestRender(t))return Y("onBeforeEnter",[o,n,this],r.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,r){if(n>256)throw new Error(t(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(t(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ee(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ee(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=G(e);X(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ee(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=G(e,e.chain[t].route);X(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=h(i)&&i.leave||"leaving",o=h(i)&&i.enter||"entering";r.push(q(t,e)),r.push(q(n,o))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;u(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){J(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=F(this)),te(this.__urlForName(e,t),this)}urlForPath(e,t){return te(re.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=u(e)?this.__createUrl(e,"http://a"):e;return c("go",{pathname:t,search:n,hash:r})}}const oe=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ie=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function se(e,t){if("function"!=typeof e)return;const n=oe.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};var ae;void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ie?!(ie&&Object.keys(ie).map((e=>ie[e])).filter((e=>e.productionMode)).length>0):!se((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(e,t){if(window.Vaadin.developmentMode)se(e,t)}((function(){})),re.NavigationTrigger={POPSTATE:g,CLICK:_};const le=window,ce=le.trustedTypes,he=ce?ce.createPolicy("lit-html",{createHTML:e=>e}):void 0,de=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+de,pe=`<${ue}>`,me=document,fe=(e="")=>me.createComment(e),_e=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ve=Array.isArray,ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,ye=/>/g,be=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),$e=/'/g,Ae=/"/g,xe=/^(?:script|style|textarea|title)$/i,Ee=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Ce=Ee(1),Re=(Ee(2),Symbol.for("lit-noChange")),ke=Symbol.for("lit-nothing"),Ie=new WeakMap,Le=me.createTreeWalker(me,129,null,!1),Oe=(e,t)=>{const n=e.length-1,r=[];let o,i=2===t?"<svg>":"",s=ge;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,h=0;for(;h<n.length&&(s.lastIndex=h,l=s.exec(n),null!==l);)h=s.lastIndex,s===ge?"!--"===l[1]?s=we:void 0!==l[1]?s=ye:void 0!==l[2]?(xe.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=be):void 0!==l[3]&&(s=be):s===be?">"===l[0]?(s=null!=o?o:ge,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?be:'"'===l[3]?Ae:$e):s===Ae||s===$e?s=be:s===we||s===ye?s=ge:(s=be,o=void 0);const d=s===be&&e[t+1].startsWith("/>")?" ":"";i+=s===ge?n+pe:c>=0?(r.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+de+d):n+de+(-2===c?(r.push(void 0),t):d)}const a=i+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==he?he.createHTML(a):a,r]};class Te{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0;const s=e.length-1,a=this.parts,[l,c]=Oe(e,t);if(this.el=Te.createElement(l,n),Le.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=Le.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(de)){const n=c[i++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+"$lit$").split(de),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?je:"?"===t[1]?Me:"@"===t[1]?Ue:He})}else a.push({type:6,index:o})}for(const t of e)r.removeAttribute(t)}if(xe.test(r.tagName)){const e=r.textContent.split(de),t=e.length-1;if(t>0){r.textContent=ce?ce.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],fe()),Le.nextNode(),a.push({type:2,index:++o});r.append(e[t],fe())}}}else if(8===r.nodeType)if(r.data===ue)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(de,e+1));)a.push({type:7,index:o}),e+=de.length-1}o++}}static createElement(e,t){const n=me.createElement("template");return n.innerHTML=e,n}}function Se(e,t,n=e,r){var o,i,s,a;if(t===Re)return t;let l=void 0!==r?null===(o=n._$Co)||void 0===o?void 0:o[r]:n._$Cl;const c=_e(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,r)),void 0!==r?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[r]=l:n._$Cl=l),void 0!==l&&(t=Se(e,l._$AS(e,t.values),l,r)),t}class Ne{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:n},parts:r}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:me).importNode(n,!0);Le.currentNode=o;let i=Le.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new Pe(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new De(i,this,e)),this.u.push(t),l=r[++a]}s!==(null==l?void 0:l.index)&&(i=Le.nextNode(),s++)}return o}p(e){let t=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Pe{constructor(e,t,n,r){var o;this.type=2,this._$AH=ke,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cm=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Se(this,e,t),_e(e)?e===ke||null==e||""===e?(this._$AH!==ke&&this._$AR(),this._$AH=ke):e!==this._$AH&&e!==Re&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>ve(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==ke&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.T(me.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=Te.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(n);else{const e=new Ne(o,this),t=e.v(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return void 0===t&&Ie.set(e.strings,t=new Te(e)),t}k(e){ve(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new Pe(this.O(fe()),this.O(fe()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class He{constructor(e,t,n,r,o){this.type=1,this._$AH=ke,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ke}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const o=this.strings;let i=!1;if(void 0===o)e=Se(this,e,t,0),i=!_e(e)||e!==this._$AH&&e!==Re,i&&(this._$AH=e);else{const r=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=Se(this,r[n+s],t,s),a===Re&&(a=this._$AH[s]),i||(i=!_e(a)||a!==this._$AH[s]),a===ke?e=ke:e!==ke&&(e+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}i&&!r&&this.j(e)}j(e){e===ke?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class je extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ke?void 0:e}}const Be=ce?ce.emptyScript:"";class Me extends He{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ke?this.element.setAttribute(this.name,Be):this.element.removeAttribute(this.name)}}class Ue extends He{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Se(this,e,t,0))&&void 0!==n?n:ke)===Re)return;const r=this._$AH,o=e===ke&&r!==ke||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==ke&&(r===ke||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class De{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}}const Ve=le.litHtmlPolyfillSupport;null==Ve||Ve(Te,Pe),(null!==(ae=le.litHtmlVersions)&&void 0!==ae?ae:le.litHtmlVersions=[]).push("2.6.1");const Fe=(e,t,n)=>{var r,o;const i=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let s=i._$litPart$;if(void 0===s){const e=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;i._$litPart$=s=new Pe(t.insertBefore(fe(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s};class We extends HTMLElement{constructor(){super()}connectedCallback(){const e=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=e||{isLogged:!1,email:""},this.render()}render(){Fe(Ce`
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
    <img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
        class="img-fluid" alt="Responsive image">
    <h1 class="display-4">Movies</h1>
    <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
</div> 
${this.userInfo.isLogged?Ce`<movies-component></movies-component>`:ke}
`,this,{eventContext:this})}}function Je(e,t,n,r){return fetch(function(e,t){return"auth"===t?`${e}AIzaSyAClDSbq3bjaJZmbGgsk_Xmw-fu9cinEB8`:"data"===t?`https://movies-d7fb7-default-rtdb.europe-west1.firebasedatabase.app/${e}.json`:void 0}(t,e),{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((e=>e.json()))}function ze(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";switch(n){case"success":t=document.getElementById("successBox");break;case"error":t=document.getElementById("errorBox")}t.textContent=e,t.parentElement.style.display="block","success"===n?setTimeout((()=>{t.textContent="Message...",t.parentElement.style.display="none"}),3e3):t.parentElement.addEventListener("click",(()=>{t.textContent="Message...",t.parentElement.style.display="none"}))}class Ke extends HTMLElement{constructor(){super()}connectedCallback(){const e=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=e||{isLogged:!1,email:""},this.render()}onSubmit(e){!function(e){e.preventDefault();const{email:t,password:n}=e.target.elements;Je("auth","https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=","POST",{email:t.value,password:n.value}).then((e=>{e.idToken?(localStorage.setItem("userInfo",JSON.stringify({isLogged:!0,email:e.email,idToken:e.idToken,uid:e.localId})),ze("Login successful."),re.go("/wc/movies-app/home")):ze(e.error.message,"error")})).catch((e=>{console.error(e.message)}))}(e)}render(){Fe(Ce`
<form class="text-center border border-light p-5" @submit=${this.onSubmit}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
</form>`,this,{eventContext:this})}}class qe extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}onSubmit(e){e.preventDefault(),function(e){e.preventDefault();const{email:t,password:n,repeatPassword:r}=e.target.elements;n.value.length<6?ze("Password must length more 6 character","error"):n.value===r.value?Je("auth","https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=","POST",{email:t.value,password:n.value}).then((e=>{e.idToken?(ze("Successful registration!"),re.go("/wc/movies-app/login")):ze(e.error.message,"error")})).catch((e=>{console.log(e.message)})):ze("Password and repeat Password not match.","error")}(e)}render(){Fe(Ce`<form class="text-center border border-light p-5" @submit=${this.onSubmit}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
</form>`,this,{eventContext:this})}}class Ze extends HTMLElement{constructor(){super()}connectedCallback(){localStorage.removeItem("userInfo"),re.go("/wc/movies-app/"),ze("Successful logout")}}class Ge extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){var e;Fe(Ce`<div class="card mb-4">
    <img class="card-img-top" src="${(e=this).data[1].imageUrl}" alt='${e.data[1].title}' width="400">
    <div class="card-body">
        <h4 class="card-title">${e.data[1].title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${e.data[0]}"><button type="button" class="btn btn-info">Details</button></a>
    </div>

</div>`,this,{eventContext:this})}}class Qe extends HTMLElement{constructor(){super()}connectedCallback(){Je("data","","GET").then((e=>{const t=Object.entries(e);this.movies=t,this.render()})).catch((e=>{console.log(e.message)}))}render(){Fe(Ce`<h1 class="text-center">Movies</h1>
<section>
    <a href="/addMovie" class="btn btn-warning">Add Movie</a>
    <form class="search float-right" onSubmit='searchMovie(event)'>
        <label>Search: </label>
        <input type="text" name='searchName'>
        <input type="submit" class="btn btn-info" value="Search">
    </form>
</section>

<div class=" mt-3 ">
    <div class="row d-flex d-wrap">
        <div class="card-deck d-flex justify-content-center">
            ${this.movies?Ce`${this.movies.map((e=>Ce`<movie-card .data = ${e}></movie-card>`))}`:Ce`<h3>No movies...</h3>`}
        </div>
    </div>
</div>`,this,{eventContext:this})}}class Xe extends HTMLElement{constructor(){super(),this.isLogged=!1}connectedCallback(){const e=JSON.parse(localStorage.getItem("userInfo"));this.userInfo=e||{isLogged:!1,email:""},this.render()}render(){Fe(Ce`<nav class="navbar navbar-expand-lg navbar-dark bg-dark" class="container">
<a class="navbar-brand text-light" href="/wc/movies-app">Movies</a>
<ul class="navbar-nav ml-auto">
${this.userInfo.isLogged?Ce` <li class="nav-item">
        <a class="nav-link">Welcome, ${this.userInfo.email}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/wc/movies-app/logout">Logout</a>
    </li>`:Ce` <li class="nav-item">
        <a class="nav-link" href="/wc/movies-app/login">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/wc/movies-app/register">Register</a>
    </li>`}
</ul>
</nav>
`,this,{eventContext:this})}}const Ye=document.getElementById("header"),et=document.getElementById("container");customElements.define("nav-component",Xe),customElements.define("home-component",We),customElements.define("register-component",qe),customElements.define("login-component",Ke),customElements.define("logout-component",Ze),customElements.define("movie-card",Ge),customElements.define("movies-component",Qe),new re(Ye).setRoutes([{path:"/wc/movies-app/",component:"nav-component"},{path:"/wc/movies-app/index.html",component:"nav-component"},{path:"/wc/movies-app/home",component:"nav-component"},{path:"/wc/movies-app/register",component:"nav-component"},{path:"/wc/movies-app/login",component:"nav-component"},{path:"/wc/movies-app/logout",component:"nav-component"}]),new re(et).setRoutes([{path:"/wc/movies-app/index.html",component:"home-componnt"},{path:"/wc/movies-app/",component:"home-component"},{path:"/wc/movies-app/home",component:"home-component"},{path:"/wc/movies-app/register",component:"register-component"},{path:"/wc/movies-app/login",component:"login-component"},{path:"/wc/movies-app/logout",component:"logout-component"}])})();
//# sourceMappingURL=bundle.js.map