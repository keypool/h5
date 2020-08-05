try{self["workbox:core:5.1.3"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=" :: "+JSON.stringify(e)),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}}class i extends n{constructor(t,e,s){super(({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)},e,s)}}const a=t=>new URL(String(t),location.href).href.replace(new RegExp("^"+location.origin),"");class r{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)})}addCacheListener(){self.addEventListener("message",t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const e=new Request(...t);return this.handleRequest({request:e})}));t.waitUntil(s),t.ports&&t.ports[0]&&s.then(()=>t.ports[0].postMessage(!0))}})}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:t,event:e});let a,r=i&&i.handler;if(!r&&this.s&&(r=this.s),r){try{a=r.handle({url:s,request:t,event:e,params:n})}catch(t){a=Promise.reject(t)}return a instanceof Promise&&this.i&&(a=a.catch(n=>this.i.handle({url:s,request:t,event:e}))),a}}findMatchingRoute({url:t,request:e,event:s}){const n=this.t.get(e.method)||[];for(const i of n){let n;const a=i.match({url:t,request:e,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(t){this.s=s(t)}setCatchHandler(t){this.i=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let c;const o=()=>(c||(c=new r,c.addFetchListener(),c.addCacheListener()),c);function h(t,s,a){let r;if("string"==typeof t){const e=new URL(t,location.href);r=new n(({url:t})=>t.href===e.href,s,a)}else if(t instanceof RegExp)r=new i(t,s,a);else if("function"==typeof t)r=new n(t,s,a);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=t}return o().registerRoute(r),r}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=t=>[u.prefix,t,u.suffix].filter(t=>t&&t.length>0).join("-"),f=t=>t||l(u.precache),w=t=>t||l(u.runtime);function d(t){t.then(()=>{})}const p=new Set;class y{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=t,this.u=e,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((t,e)=>{let s=!1;setTimeout(()=>{s=!0,e(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.p.bind(this),t(e))}}),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map(t=>t.key)}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:a=!1}={}){return await this.transaction([t],"readonly",(r,c)=>{const o=r.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(a?t:t.value),i&&u.length>=i?c(u):t.continue()):c(u)}})}async transaction(t,e,s){return await this.open(),await new Promise((n,i)=>{const a=this.o.transaction(t,e);a.onabort=()=>i(a.error),a.oncomplete=()=>n(),s(a,t=>n(t))})}async m(t,e,s,...n){return await this.transaction([e],s,(s,i)=>{const a=s.objectStore(e),r=a[t].apply(a,n);r.onsuccess=()=>i(r.result)})}close(){this.o&&(this.o.close(),this.o=null)}}y.prototype.OPEN_TIMEOUT=2e3;const m={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(m))for(const s of e)s in IDBObjectStore.prototype&&(y.prototype[s]=async function(e,...n){return await this.m(s,e,t,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(t){}const g=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class q{constructor(t){this.g=t,this.o=new y("workbox-expiration",1,{onupgradeneeded:t=>this.q(t)})}q(t){const e=t.target.result.createObjectStore("cache-entries",{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}})})(this.g)}async setTimestamp(t,e){const s={url:t=g(t),timestamp:e,cacheName:this.g,id:this.v(t)};await this.o.put("cache-entries",s)}async getTimestamp(t){return(await this.o.get("cache-entries",this.v(t))).timestamp}async expireEntries(t,e){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let r=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.g&&(t&&n.timestamp<t||e&&r>=e?a.push(s.value):r++),s.continue()}else n(a)}}),n=[];for(const t of s)await this.o.delete("cache-entries",t.id),n.push(t.url);return n}v(t){return this.g+"|"+g(t)}}class v{constructor(t,e={}){this.R=!1,this._=!1,this.L=e.maxEntries,this.N=e.maxAgeSeconds,this.g=t,this.U=new q(t)}async expireEntries(){if(this.R)return void(this._=!0);this.R=!0;const t=this.N?Date.now()-1e3*this.N:0,e=await this.U.expireEntries(t,this.L),s=await self.caches.open(this.g);for(const t of e)await s.delete(t);this.R=!1,this._&&(this._=!1,d(this.expireEntries()))}async updateTimestamp(t){await this.U.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.N){return await this.U.getTimestamp(t)<Date.now()-1e3*this.N}return!1}async delete(){this._=!1,await this.U.expireEntries(1/0)}}class R{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.k(n),a=this.O(s);d(a.expireEntries());const r=a.updateTimestamp(e.url);if(t)try{t.waitUntil(r)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.O(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.T=t,this.N=t.maxAgeSeconds,this.j=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),p.add(e))}O(t){if(t===w())throw new e("expire-custom-caches-only");let s=this.j.get(t);return s||(s=new v(t,this.T),this.j.set(t,s)),s}k(t){if(!this.N)return!0;const e=this.D(t);return null===e||e>=Date.now()-1e3*this.N}D(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.j)await self.caches.delete(t),await e.delete();this.j=new Map}}const b=(t,e)=>t.filter(t=>e in t),x=async({request:t,mode:e,plugins:s=[]})=>{const n=b(s,"cacheKeyWillBeUsed");let i=t;for(const t of n)i=await t.cacheKeyWillBeUsed.call(t,{mode:e,request:i}),"string"==typeof i&&(i=new Request(i));return i},L=async({cacheName:t,request:e,event:s,matchOptions:n,plugins:i=[]})=>{const a=await self.caches.open(t),r=await x({plugins:i,request:e,mode:"read"});let c=await a.match(r,n);for(const e of i)if("cachedResponseWillBeUsed"in e){const i=e.cachedResponseWillBeUsed;c=await i.call(e,{cacheName:t,event:s,matchOptions:n,cachedResponse:c,request:r})}return c},E=async({cacheName:t,request:s,response:n,event:i,plugins:r=[],matchOptions:c})=>{const o=await x({plugins:r,request:s,mode:"write"});if(!n)throw new e("cache-put-with-no-response",{url:a(o.url)});const h=await(async({request:t,response:e,event:s,plugins:n=[]})=>{let i=e,a=!1;for(const e of n)if("cacheWillUpdate"in e){a=!0;const n=e.cacheWillUpdate;if(i=await n.call(e,{request:t,response:i,event:s}),!i)break}return a||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:r,response:n,request:o});if(!h)return;const u=await self.caches.open(t),l=b(r,"cacheDidUpdate"),f=l.length>0?await L({cacheName:t,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of p)await t()}(),t}for(const e of l)await e.cacheDidUpdate.call(e,{cacheName:t,event:i,oldResponse:f,newResponse:h,request:o})},N=L,U=async({request:t,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){const t=await n.preloadResponse;if(t)return t}const a=b(i,"fetchDidFail"),r=a.length>0?t.clone():null;try{for(const e of i)if("requestWillFetch"in e){const s=e.requestWillFetch,i=t.clone();t=await s.call(e,{request:i,event:n})}}catch(t){throw new e("plugin-error-request-will-fetch",{thrownError:t})}const c=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,s);for(const t of i)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:n,request:c,response:e}));return e}catch(t){for(const e of a)await e.fetchDidFail.call(e,{error:t,event:n,originalRequest:r.clone(),request:c.clone()});throw t}};try{self["workbox:strategies:5.1.3"]&&_()}catch(t){}const k={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};class O{constructor(t={}){if(this.g=w(t.cacheName),t.plugins){const e=t.plugins.some(t=>!!t.cacheWillUpdate);this.C=e?t.plugins:[k,...t.plugins]}else this.C=[k];this.P=t.networkTimeoutSeconds||0,this.S=t.fetchOptions,this.K=t.matchOptions}async handle({event:t,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let a;if(this.P){const{id:e,promise:r}=this.M({request:s,event:t,logs:n});a=e,i.push(r)}const r=this.A({timeoutId:a,request:s,event:t,logs:n});i.push(r);let c=await Promise.race(i);if(c||(c=await r),!c)throw new e("no-response",{url:s.url});return c}M({request:t,logs:e,event:s}){let n;return{promise:new Promise(e=>{n=setTimeout(async()=>{e(await this.B({request:t,event:s}))},1e3*this.P)}),id:n}}async A({timeoutId:t,request:e,logs:s,event:n}){let i,a;try{a=await U({request:e,event:n,fetchOptions:this.S,plugins:this.C})}catch(t){i=t}if(t&&clearTimeout(t),i||!a)a=await this.B({request:e,event:n});else{const t=a.clone(),s=E({cacheName:this.g,request:e,response:t,event:n,plugins:this.C});if(n)try{n.waitUntil(s)}catch(t){}}return a}B({event:t,request:e}){return N({cacheName:this.g,request:e,event:t,matchOptions:this.K,plugins:this.C})}}try{self["workbox:background-sync:5.1.3"]&&_()}catch(t){}class T{constructor(t){this.I=t,this.o=new y("workbox-background-sync",3,{onupgradeneeded:this.W})}async pushEntry(t){delete t.id,t.queueName=this.I,await this.o.add("requests",t)}async unshiftEntry(t){const[e]=await this.o.getAllMatching("requests",{count:1});e?t.id=e.id-1:delete t.id,t.queueName=this.I,await this.o.add("requests",t)}async popEntry(){return this.F({direction:"prev"})}async shiftEntry(){return this.F({direction:"next"})}async getAll(){return await this.o.getAllMatching("requests",{index:"queueName",query:IDBKeyRange.only(this.I)})}async deleteEntry(t){await this.o.delete("requests",t)}async F({direction:t}){const[e]=await this.o.getAllMatching("requests",{direction:t,index:"queueName",query:IDBKeyRange.only(this.I),count:1});if(e)return await this.deleteEntry(e.id),e}W(t){const e=t.target.result;t.oldVersion>0&&t.oldVersion<3&&e.objectStoreNames.contains("requests")&&e.deleteObjectStore("requests"),e.createObjectStore("requests",{autoIncrement:!0,keyPath:"id"}).createIndex("queueName","queueName",{unique:!1})}}const j=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class D{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.H=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of j)void 0!==t[s]&&(e[s]=t[s]);return new D(e)}toObject(){const t=Object.assign({},this.H);return t.headers=Object.assign({},this.H.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.H.url,this.H)}clone(){return new D(this.toObject())}}const C=new Set,P=t=>{const e={request:new D(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class S{constructor(t,{onSync:s,maxRetentionTime:n}={}){if(this.G=!1,this.V=!1,C.has(t))throw new e("duplicate-queue-name",{name:t});C.add(t),this.h=t,this.$=s||this.replayRequests,this.J=n||10080,this.X=new T(this.h),this.Y()}get name(){return this.h}async pushRequest(t){await this.Z(t,"push")}async unshiftRequest(t){await this.Z(t,"unshift")}async popRequest(){return this.tt("pop")}async shiftRequest(){return this.tt("shift")}async getAll(){const t=await this.X.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.J*1e3;e-n.timestamp>t?await this.X.deleteEntry(n.id):s.push(P(n))}return s}async Z({request:t,metadata:e,timestamp:s=Date.now()},n){const i={requestData:(await D.fromRequest(t.clone())).toObject(),timestamp:s};e&&(i.metadata=e),await this.X[n+"Entry"](i),this.G?this.V=!0:await this.registerSync()}async tt(t){const e=Date.now(),s=await this.X[t+"Entry"]();if(s){const n=60*this.J*1e3;return e-s.timestamp>n?this.tt(t):P(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(s){throw await this.unshiftRequest(t),new e("queue-replay-failed",{name:this.h})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register("workbox-background-sync:"+this.h)}catch(t){}}Y(){"sync"in self.registration?self.addEventListener("sync",t=>{if(t.tag==="workbox-background-sync:"+this.h){const e=async()=>{let e;this.G=!0;try{await this.$({queue:this})}catch(t){throw e=t,e}finally{!this.V||e&&!t.lastChance||await this.registerSync(),this.G=!1,this.V=!1}};t.waitUntil(e())}}):this.$({queue:this})}static get et(){return C}}class K{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.st.pushRequest({request:t})},this.st=new S(t,e)}}try{self["workbox:cacheable-response:5.1.3"]&&_()}catch(t){}class M{constructor(t={}){this.nt=t.statuses,this.it=t.headers}isResponseCacheable(t){let e=!0;return this.nt&&(e=this.nt.includes(t.status)),this.it&&e&&(e=Object.keys(this.it).some(e=>t.headers.get(e)===this.it[e])),e}}class A{constructor(t){this.cacheWillUpdate=async({response:t})=>this.at.isResponseCacheable(t)?t:null,this.at=new M(t)}}function B(t){return new Promise(e=>setTimeout(e,t))}try{self["workbox:broadcast-update:5.1.3"]&&_()}catch(t){}const I=["content-length","etag","last-modified"],W=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function F(t){return{cacheName:t.cacheName,updatedURL:t.request.url}}class H{constructor({headersToCheck:t,generatePayload:e}={}){this.rt=t||I,this.ct=e||F}async notifyIfUpdated(t){var e,s,n;if(t.oldResponse&&(e=t.oldResponse,s=t.newResponse,(n=this.rt).some(t=>e.headers.has(t)&&s.headers.has(t))&&!n.every(t=>{const n=e.headers.has(t)===s.headers.has(t),i=e.headers.get(t)===s.headers.get(t);return n&&i}))){const e={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this.ct(t)};if("navigate"===t.request.mode){let e;t.event instanceof FetchEvent&&(e=t.event.resultingClientId),await async function(t){if(!t)return;let e=await self.clients.matchAll({type:"window"});const s=new Set(e.map(t=>t.id));let n;const i=performance.now();for(;performance.now()-i<2e3&&(e=await self.clients.matchAll({type:"window"}),n=e.find(e=>t?e.id===t:!s.has(e.id)),!n);)await B(100);return n}(e)&&!W||await B(3500)}const s=await self.clients.matchAll({type:"window"});for(const t of s)t.postMessage(e)}}}class G{constructor(t){this.cacheDidUpdate=async t=>{d(this.ot.notifyIfUpdated(t))},this.ot=new H(t)}}let V;async function Q(t,e){const s=t.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=e?e(n):n,a=function(){if(void 0===V){const t=new Response("");if("body"in t)try{new Response(t.body),V=!0}catch(t){V=!1}V=!1}return V}()?s.body:await s.blob();return new Response(a,i)}try{self["workbox:precaching:5.1.3"]&&_()}catch(t){}function $(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),a=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:a.href}}class J{constructor(t){this.g=f(t),this.ht=new Map,this.ut=new Map,this.lt=new Map}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:i}=$(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.ht.has(i)&&this.ht.get(i)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this.ht.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.lt.has(t)&&this.lt.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:i});this.lt.set(t,n.integrity)}if(this.ht.set(i,t),this.ut.set(i,a),s.length>0){const t=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}async install({event:t,plugins:e}={}){const s=[],n=[],i=await self.caches.open(this.g),a=await i.keys(),r=new Set(a.map(t=>t.url));for(const[t,e]of this.ht)r.has(e)?n.push(t):s.push({cacheKey:e,url:t});const c=s.map(({cacheKey:s,url:n})=>{const i=this.lt.get(s),a=this.ut.get(n);return this.ft({cacheKey:s,cacheMode:a,event:t,integrity:i,plugins:e,url:n})});return await Promise.all(c),{updatedURLs:s.map(t=>t.url),notUpdatedURLs:n}}async activate(){const t=await self.caches.open(this.g),e=await t.keys(),s=new Set(this.ht.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}async ft({cacheKey:t,url:s,cacheMode:n,event:i,plugins:a,integrity:r}){const c=new Request(s,{integrity:r,cache:n,credentials:"same-origin"});let o,h=await U({event:i,plugins:a,request:c});for(const t of a||[])"cacheWillUpdate"in t&&(o=t);if(!(o?await o.cacheWillUpdate({event:i,request:c,response:h}):h.status<400))throw new e("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await Q(h)),await E({event:i,plugins:a,response:h,request:t===s?c:new Request(t),cacheName:this.g,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.ht}getCachedURLs(){return[...this.ht.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.ht.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.g)).match(s)}}createHandler(t=!0){return async({request:s})=>{try{const t=await this.matchPrecache(s);if(t)return t;throw new e("missing-precache-entry",{cacheName:this.g,url:s instanceof Request?s.url:s})}catch(e){if(t)return fetch(s);throw e}}}createHandlerBoundToURL(t,s=!0){if(!this.getCacheKeyForURL(t))throw new e("non-precached-url",{url:t});const n=this.createHandler(s),i=new Request(t);return()=>n({request:i})}}let z;const X=()=>(z||(z=new J),z);const Y=(t,e)=>{const s=X().getURLsToCacheKeys();for(const n of function*(t,{ignoreURLParametersMatching:e,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const a=new URL(t,location.href);a.hash="",yield a.href;const r=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some(t=>t.test(s))&&t.searchParams.delete(s);return t}(a,e);if(yield r.href,s&&r.pathname.endsWith("/")){const t=new URL(r.href);t.pathname+=s,yield t.href}if(n){const t=new URL(r.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:a});for(const e of t)yield e.href}}(t,e)){const t=s.get(n);if(t)return t}};let Z=!1;function tt(t){Z||((({ignoreURLParametersMatching:t=[/^utm_/],directoryIndex:e="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=f();self.addEventListener("fetch",a=>{const r=Y(a.request.url,{cleanURLs:s,directoryIndex:e,ignoreURLParametersMatching:t,urlManipulation:n});if(!r)return;let c=self.caches.open(i).then(t=>t.match(r)).then(t=>t||fetch(r));a.respondWith(c)})})(t),Z=!0)}const et=[],st={get:()=>et,add(t){et.push(...t)}},nt=t=>{const e=X(),s=st.get();t.waitUntil(e.install({event:t,plugins:s}).catch(t=>{throw t}))},it=t=>{const e=X();t.waitUntil(e.activate())};var at;self.addEventListener("install",()=>self.skipWaiting()),self.addEventListener("activate",()=>self.clients.claim()),at={},function(t){X().addToCacheList(t),t.length>0&&(self.addEventListener("install",nt),self.addEventListener("activate",it))}([{url:"_next/static/B6cjLR_fh6qgVtWcbCmLk/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"_next/static/B6cjLR_fh6qgVtWcbCmLk/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/B6cjLR_fh6qgVtWcbCmLk/pages/_app.js",revision:"aa97c8e0e16cea866cbba25c90595003"},{url:"_next/static/B6cjLR_fh6qgVtWcbCmLk/pages/_error.js",revision:"062308238cf36243eeb5546054811ed4"},{url:"_next/static/B6cjLR_fh6qgVtWcbCmLk/pages/kps1m.js",revision:"4a4729e4c0d2940dde2d83ee6f1b8491"},{url:"_next/static/chunks/2c38d154ba198c8591164fb21f24419e48216a04.df72b071744038ffd1c7.js",revision:"b11afd1137788dac5393fc5e714faa24"},{url:"_next/static/chunks/c873fc507287796742dbf042b91f7825a7982e00.c032c94ab59c65e9904e.js",revision:"645b8be04c2b0bdf34f200d984978271"},{url:"_next/static/chunks/framework.c8d289f8b96717e32d7a.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"_next/static/css/18898513395f943f0e94.css",revision:"60c4f4aad2d17c8e0206ebae024ef6ee"},{url:"_next/static/runtime/main-cd88301bb59b43ce3c07.js",revision:"4d56dbd663bce34a9c110a9ffd7213a4"},{url:"_next/static/runtime/polyfills-f1a72475392243fcf9b5.js",revision:"e472d47f8ab63cc45bae6a9ea4eec0c5"},{url:"_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"}]),tt(at),h(/^https?.*/,new O({cacheName:"offlineCache",plugins:[new R({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),h(/\.(?:js|css)$/,new class{constructor(t={}){if(this.g=w(t.cacheName),this.C=t.plugins||[],t.plugins){const e=t.plugins.some(t=>!!t.cacheWillUpdate);this.C=e?t.plugins:[k,...t.plugins]}else this.C=[k];this.S=t.fetchOptions,this.K=t.matchOptions}async handle({event:t,request:s}){"string"==typeof s&&(s=new Request(s));const n=this.wt({request:s,event:t});let i,a=await N({cacheName:this.g,request:s,event:t,matchOptions:this.K,plugins:this.C});if(a){if(t)try{t.waitUntil(n)}catch(i){}}else try{a=await n}catch(t){i=t}if(!a)throw new e("no-response",{url:s.url,error:i});return a}async wt({request:t,event:e}){const s=await U({request:t,event:e,fetchOptions:this.S,plugins:this.C}),n=E({cacheName:this.g,request:t,response:s.clone(),event:e,plugins:this.C});if(e)try{e.waitUntil(n)}catch(t){}return s}}({cacheName:"fay-resource-cache",fetchOptions:{mode:"no-cors"},matchOptions:{ignoreSearch:!0},plugins:[new R({maxEntries:500,maxAgeSeconds:604800,purgeOnQuotaError:!0}),new K("fay-resource-queue",{maxRetentionTime:3600}),new A({statuses:[0,200],headers:{"x-test":"true"}}),new G({channelName:"fay-resource-update"})]}),"GET"),h(/api/,new O({cacheName:"fay-api-cache",networkTimeoutSeconds:10,fetchOptions:{mode:"no-cors"},matchOptions:{ignoreSearch:!0},plugins:[new R({maxEntries:5,maxAgeSeconds:60,purgeOnQuotaError:!0}),new K("fay-api-queue",{maxRetentionTime:3600}),new A({statuses:[0,200],headers:{"x-test":"true"}}),new G({channelName:"fay-api-update"})]}),"GET"),h(/.png$/,new class{constructor(t={}){this.g=w(t.cacheName),this.C=t.plugins||[],this.S=t.fetchOptions,this.K=t.matchOptions}async handle({event:t,request:s}){"string"==typeof s&&(s=new Request(s));let n,i=await N({cacheName:this.g,request:s,event:t,matchOptions:this.K,plugins:this.C});if(!i)try{i=await this.wt(s,t)}catch(t){n=t}if(!i)throw new e("no-response",{url:s.url,error:n});return i}async wt(t,e){const s=await U({request:t,event:e,fetchOptions:this.S,plugins:this.C}),n=s.clone(),i=E({cacheName:this.g,request:t,response:n,event:e,plugins:this.C});if(e)try{e.waitUntil(i)}catch(t){}return s}},"GET"),h(/.html$/,new O({plugins:[new A({statuses:[0,200]})]}),"GET");
