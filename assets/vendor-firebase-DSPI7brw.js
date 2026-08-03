const Zm=()=>{};var tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},eg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,S=h&63;u||(S=64,o||(_=64)),n.push(t[f],t[m],t[_],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Zh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):eg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new tg;const _=s<<2|c>>4;if(n.push(_),h!==64){const S=c<<4&240|h>>2;if(n.push(S),m!==64){const C=h<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(r){const e=Zh(r);return ed.encodeByteArray(e,!0)},td=function(r){return ng(r).replace(/\./g,"")},nd=function(r){try{return ed.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=()=>rd().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof tl>"u")return;const r=tl.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},sg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&nd(r[1]);return e&&JSON.parse(e)},Ws=()=>{try{return Zm()||rg()||ig()||sg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},og=r=>{var e,t;return(t=(e=Ws())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},id=()=>{var r;return(r=Ws())===null||r===void 0?void 0:r.config},sd=r=>{var e;return(e=Ws())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function od(r){return(await fetch(r,{credentials:"include"})).ok}const Wr={};function cg(){const r={prod:[],emulator:[]};for(const e of Object.keys(Wr))Wr[e]?r.emulator.push(e):r.prod.push(e);return r}function ug(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let nl=!1;function lg(r,e){if(typeof window>"u"||typeof document>"u"||!hr(window.location.host)||Wr[r]===e||Wr[r]||nl)return;Wr[r]=e;function t(_){return`__firebase__banner__${_}`}const n="__firebase__banner",s=cg().prod.length>0;function o(){const _=document.getElementById(n);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{nl=!0,o()},_}function f(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=ug(n),S=t("text"),C=document.getElementById(S)||document.createElement("span"),k=t("learnmore"),D=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const F=_.element;c(F),f(D,k);const W=h();u(B,$),F.append(B,C,D,W),document.body.appendChild(F)}s?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function ad(){var r;const e=(r=Ws())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mg(){const r=me();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function cd(){return!ad()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ud(){return!ad()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function ld(){try{return typeof indexedDB=="object"}catch{return!1}}function gg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="FirebaseError";class pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=_g,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yg(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new pt(i,c,n)}}function yg(r,e){return r.replace(Ig,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Ig=/\{\$([^}]+)}/g;function vg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function pn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(rl(s)&&rl(o)){if(!pn(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function rl(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Tg(r,e){const t=new Eg(r,e);return t.subscribe.bind(t)}class Eg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ko),i.error===void 0&&(i.error=Ko),i.complete===void 0&&(i.complete=Ko);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ko(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r){return r&&r._delegate?r._delegate:r}class mn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ag;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sg(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:bg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bg(r){return r===Zt?void 0:r}function Sg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ag(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const Pg={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Cg=H.INFO,Vg={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Dg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Vg[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=Cg,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const kg=(r,e)=>e.some(t=>r instanceof t);let il,sl;function Ng(){return il||(il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hd=new WeakMap,oa=new WeakMap,dd=new WeakMap,Go=new WeakMap,$a=new WeakMap;function Og(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Dt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hd.set(t,r)}).catch(()=>{}),$a.set(e,r),e}function Mg(r){if(oa.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});oa.set(r,e)}let aa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return oa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||dd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Lg(r){aa=r(aa)}function Fg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Wo(this),e,...t);return dd.set(n,e.sort?e.sort():[e]),Dt(n)}:xg().includes(r)?function(...e){return r.apply(Wo(this),e),Dt(hd.get(this))}:function(...e){return Dt(r.apply(Wo(this),e))}}function Ug(r){return typeof r=="function"?Fg(r):(r instanceof IDBTransaction&&Mg(r),kg(r,Ng())?new Proxy(r,aa):r)}function Dt(r){if(r instanceof IDBRequest)return Og(r);if(Go.has(r))return Go.get(r);const e=Ug(r);return e!==r&&(Go.set(r,e),$a.set(e,r)),e}const Wo=r=>$a.get(r);function Bg(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=Dt(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Dt(o.result),u.oldVersion,u.newVersion,Dt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const jg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],Ho=new Map;function ol(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=qg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||jg.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Ho.set(e,s),s}Lg(r=>({...r,get:(e,t,n)=>ol(e,t)||r.get(e,t,n),has:(e,t)=>!!ol(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($g(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function $g(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ca="@firebase/app",al="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new za("@firebase/app"),Kg="@firebase/app-compat",Gg="@firebase/analytics-compat",Wg="@firebase/analytics",Hg="@firebase/app-check-compat",Qg="@firebase/app-check",Xg="@firebase/auth",Jg="@firebase/auth-compat",Yg="@firebase/database",Zg="@firebase/data-connect",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",i_="@firebase/installations-compat",s_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",u_="@firebase/remote-config",l_="@firebase/remote-config-compat",h_="@firebase/storage",d_="@firebase/storage-compat",f_="@firebase/firestore",p_="@firebase/ai",m_="@firebase/firestore-compat",g_="firebase",__="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="[DEFAULT]",y_={[ca]:"fire-core",[Kg]:"fire-core-compat",[Wg]:"fire-analytics",[Gg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Hg]:"fire-app-check-compat",[Xg]:"fire-auth",[Jg]:"fire-auth-compat",[Yg]:"fire-rtdb",[Zg]:"fire-data-connect",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[i_]:"fire-iid-compat",[s_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[u_]:"fire-rc",[l_]:"fire-rc-compat",[h_]:"fire-gcs",[d_]:"fire-gcs-compat",[f_]:"fire-fst",[m_]:"fire-fst-compat",[p_]:"fire-vertex","fire-js":"fire-js",[g_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map,I_=new Map,la=new Map;function cl(r,e){try{r.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Kn(r){const e=r.name;if(la.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,r);for(const t of Es.values())cl(t,r);for(const t of I_.values())cl(t,r);return!0}function Ka(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function je(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new Ii("app","Firebase",v_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=__;function E_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ua,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=id()),!t)throw kt.create("no-options");const s=Es.get(i);if(s){if(pn(t,s.options)&&pn(n,s.config))return s;throw kt.create("duplicate-app",{appName:i})}const o=new Rg(i);for(const u of la.values())o.addComponent(u);const c=new T_(t,n,o);return Es.set(i,c),c}function w_(r=ua){const e=Es.get(r);if(!e&&r===ua&&id())return E_();if(!e)throw kt.create("no-app",{appName:r});return e}function Nt(r,e,t){var n;let i=(n=y_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(c.join(" "));return}Kn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="firebase-heartbeat-database",b_=1,ii="firebase-heartbeat-store";let Qo=null;function fd(){return Qo||(Qo=Bg(A_,b_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ii)}catch(t){console.warn(t)}}}}).catch(r=>{throw kt.create("idb-open",{originalErrorMessage:r.message})})),Qo}async function S_(r){try{const t=(await fd()).transaction(ii),n=await t.objectStore(ii).get(pd(r));return await t.done,n}catch(e){if(e instanceof pt)lt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}}async function ul(r,e){try{const n=(await fd()).transaction(ii,"readwrite");await n.objectStore(ii).put(e,pd(r)),await n.done}catch(t){if(t instanceof pt)lt.warn(t.message);else{const n=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(n.message)}}}function pd(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=1024,P_=30;class C_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new D_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ll();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>P_){const o=k_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){lt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ll(),{heartbeatsToSend:n,unsentEntries:i}=V_(this._heartbeatsCache.heartbeats),s=td(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return lt.warn(t),""}}}function ll(){return new Date().toISOString().substring(0,10)}function V_(r,e=R_){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class D_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await S_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hl(r){return td(JSON.stringify({version:2,heartbeats:r})).length}function k_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(r){Kn(new mn("platform-logger",e=>new zg(e),"PRIVATE")),Kn(new mn("heartbeat",e=>new C_(e),"PRIVATE")),Nt(ca,al,r),Nt(ca,al,"esm2017"),Nt("fire-js","")}N_("");var x_="firebase",O_="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(x_,O_,"app");function Ga(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function md(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M_=md,gd=new Ii("auth","Firebase",md());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new za("@firebase/auth");function L_(r,...e){ws.logLevel<=H.WARN&&ws.warn(`Auth (${dr}): ${r}`,...e)}function os(r,...e){ws.logLevel<=H.ERROR&&ws.error(`Auth (${dr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(r,...e){throw Ha(r,...e)}function Ge(r,...e){return Ha(r,...e)}function Wa(r,e,t){const n=Object.assign(Object.assign({},M_()),{[e]:t});return new Ii("auth","Firebase",n).create(e,{appName:r.name})}function xt(r){return Wa(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _d(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&et(r,"argument-error"),Wa(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ha(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return gd.create(r,...e)}function z(r,e,...t){if(!r)throw Ha(e,...t)}function st(r){const e="INTERNAL ASSERTION FAILED: "+r;throw os(e),new Error(e)}function ht(r,e){r||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function F_(){return dl()==="http:"||dl()==="https:"}function dl(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F_()||fg()||"connection"in navigator)?navigator.onLine:!0}function B_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,ht(t>e,"Short delay should be less than long delay!"),this.isMobile=hg()||pg()}get(){return U_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r,e){ht(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z_=new Ti(3e4,6e4);function Xa(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function fr(r,e,t,n,i={}){return Id(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=vi(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:u},s);return dg()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&hr(r.emulatorConfig.host)&&(h.credentials="include"),yd.fetch()(await vd(r,r.config.apiHost,t,c),h)})}async function Id(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},j_),e);try{const i=new K_(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yi(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Yi(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Yi(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wa(r,f,h);et(r,f)}}catch(i){if(i instanceof pt)throw i;et(r,"network-request-failed",{message:String(i)})}}async function $_(r,e,t,n,i={}){const s=await fr(r,e,t,n,i);return"mfaPendingCredential"in s&&et(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function vd(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?Qa(r.config,i):`${r.config.apiScheme}://${i}`;return q_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class K_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ge(this.auth,"network-request-failed")),z_.get())})}}function Yi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ge(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(r,e){return fr(r,"POST","/v1/accounts:delete",e)}async function As(r,e){return fr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W_(r,e=!1){const t=ye(r),n=await t.getIdToken(e),i=Ja(n);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Hr(Xo(i.auth_time)),issuedAtTime:Hr(Xo(i.iat)),expirationTime:Hr(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xo(r){return Number(r)*1e3}function Ja(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const i=nd(t);return i?JSON.parse(i):(os("Failed to decode base64 JWT payload"),null)}catch(i){return os("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fl(r){const e=Ja(r);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof pt&&H_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function H_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(r){var e;const t=r.auth,n=await r.getIdToken(),i=await si(r,As(t,{idToken:n}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Td(s.providerUserInfo):[],c=J_(r.providerData,o),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new da(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function X_(r){const e=ye(r);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J_(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Td(r){return r.map(e=>{var{providerId:t}=e,n=Ga(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(r,e){const t=await Id(r,{},async()=>{const n=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await vd(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:n};return r.emulatorConfig&&hr(r.emulatorConfig.host)&&(u.credentials="include"),yd.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Z_(r,e){return fr(r,"POST","/v2/accounts:revokeToken",Xa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=fl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Y_(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new jn;return n&&(z(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(r,e){z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Ga(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new da(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await si(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W_(this,e)}reload(){return X_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await bs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await si(this,G_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,h,f;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:W,isAnonymous:Z,providerData:G,stsTokenManager:v}=t;z(F&&v,e,"internal-error");const g=jn.fromJSON(this.name,v);z(typeof F=="string",e,"internal-error"),Tt(m,e.name),Tt(_,e.name),z(typeof W=="boolean",e,"internal-error"),z(typeof Z=="boolean",e,"internal-error"),Tt(S,e.name),Tt(C,e.name),Tt(k,e.name),Tt(D,e.name),Tt($,e.name),Tt(B,e.name);const I=new Ke({uid:F,auth:e,email:_,emailVerified:W,displayName:m,isAnonymous:Z,photoURL:C,phoneNumber:S,tenantId:k,stsTokenManager:g,createdAt:$,lastLoginAt:B});return G&&Array.isArray(G)&&(I.providerData=G.map(T=>Object.assign({},T))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new jn;i.updateFromServerResponse(t);const s=new Ke({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await bs(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Td(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new jn;c.updateFromIdToken(n);const u=new Ke({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new da(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map;function ot(r){ht(r instanceof Function,"Expected a class definition");let e=pl.get(r);return e?(ht(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,pl.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ed.type="NONE";const ml=Ed;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(r,e,t){return`firebase:${r}:${e}:${t}`}class qn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,s),this.fullPersistenceKey=as("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await As(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new qn(ot(ml),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ot(ml);const o=as(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const _=await As(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Ke._fromGetAccountInfoResponse(e,_,f)}else m=Ke._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qn(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new qn(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(Cd(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||bd(e))&&!e.includes("edge/"))return"Chrome";if(Rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function wd(r=me()){return/firefox\//i.test(r)}function Ad(r=me()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bd(r=me()){return/crios\//i.test(r)}function Sd(r=me()){return/iemobile/i.test(r)}function Rd(r=me()){return/android/i.test(r)}function Pd(r=me()){return/blackberry/i.test(r)}function Cd(r=me()){return/webos/i.test(r)}function Ya(r=me()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ey(r=me()){var e;return Ya(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ty(){return mg()&&document.documentMode===10}function Vd(r=me()){return Ya(r)||Rd(r)||Cd(r)||Pd(r)||/windows phone/i.test(r)||Sd(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(r,e=[]){let t;switch(r){case"Browser":t=gl(me());break;case"Worker":t=`${gl(me())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(r,e={}){return fr(r,"GET","/v2/passwordPolicy",Xa(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=6;class sy{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:iy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _l(this),this.idTokenSubscription=new _l(this),this.beforeStateQueue=new ny(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await As(this,{idToken:e}),n=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(xt(this));const t=e?ye(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ry(this),t=new sy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Z_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&L_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ei(r){return ye(r)}class _l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tg(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ay(r){Za=r}function cy(r){return Za.loadJS(r)}function uy(){return Za.gapiScript}function ly(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(r,e){const t=Ka(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(pn(s,e??{}))return i;et(i,"already-initialized")}return t.initialize({options:e})}function dy(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function fy(r,e,t){const n=Ei(r);z(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=kd(e),{host:o,port:c}=py(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(pn(h,n.config.emulator)&&pn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,hr(o)?(od(`${s}//${o}${u}`),lg("Auth",!0)):my()}function kd(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function py(r){const e=kd(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:yl(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:yl(o)}}}function yl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function my(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(r,e){return $_(r,"POST","/v1/accounts:signInWithIdp",Xa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="http://localhost";class gn extends Nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Ga(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new gn(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:gy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Hs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends wi{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return St.credential(t,n)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends wi{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends wi{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Ke._fromIdTokenResponse(e,n,i),o=Il(n);return new Gn({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Il(n);return new Gn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Il(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends pt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ss.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ss(e,t,n,i)}}function xd(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ss._fromErrorAndOperation(r,s,e,n):s})}async function _y(r,e,t=!1){const n=await si(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Gn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(r,e,t=!1){const{auth:n}=r;if(je(n.app))return Promise.reject(xt(n));const i="reauthenticate";try{const s=await si(r,xd(n,i,e,r),t);z(s.idToken,n,"internal-error");const o=Ja(s.idToken);z(o,n,"internal-error");const{sub:c}=o;return z(r.uid===c,n,"user-mismatch"),Gn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(r,e,t=!1){if(je(r.app))return Promise.reject(xt(r));const n="signIn",i=await xd(r,n,e),s=await Gn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function vy(r,e,t,n){return ye(r).onIdTokenChanged(e,t,n)}function Ty(r,e,t){return ye(r).beforeAuthStateChanged(e,t)}function sw(r,e,t,n){return ye(r).onAuthStateChanged(e,t,n)}function ow(r){return ye(r).signOut()}const Rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=1e3,wy=10;class Md extends Od{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);ty()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wy):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ey)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const Ay=Md;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends Od{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ld.type="SESSION";const Fd=Ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Qs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await by(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=ec("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Ry(r){Je().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Py(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cy(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Vy(){return Ud()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="firebaseLocalStorageDb",Dy=1,Ps="firebaseLocalStorage",jd="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xs(r,e){return r.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function ky(){const r=indexedDB.deleteDatabase(Bd);return new Ai(r).toPromise()}function fa(){const r=indexedDB.open(Bd,Dy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ps,{keyPath:jd})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ps)?e(n):(n.close(),await ky(),e(await fa()))})})}async function vl(r,e,t){const n=Xs(r,!0).put({[jd]:e,value:t});return new Ai(n).toPromise()}async function Ny(r,e){const t=Xs(r,!1).get(e),n=await new Ai(t).toPromise();return n===void 0?null:n.value}function Tl(r,e){const t=Xs(r,!0).delete(e);return new Ai(t).toPromise()}const xy=800,Oy=3;class qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Oy)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(Vy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Py(),!this.activeServiceWorker)return;this.sender=new Sy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fa();return await vl(e,Rs,"1"),await Tl(e,Rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ny(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xs(i,!1).getAll();return new Ai(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qd.type="LOCAL";const My=qd;new Ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(r,e){return e?ot(e):(z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends Nd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ly(r){return Iy(r.auth,new nc(r),r.bypassAuthState)}function Fy(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),yy(t,new nc(r),r.bypassAuthState)}async function Uy(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),_y(t,new nc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ly;case"linkViaPopup":case"linkViaRedirect":return Uy;case"reauthViaPopup":case"reauthViaRedirect":return Fy;default:et(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Ti(2e3,1e4);async function aw(r,e,t){if(je(r.app))return Promise.reject(Ge(r,"operation-not-supported-in-this-environment"));const n=Ei(r);_d(r,e,Hs);const i=tc(n,t);return new an(n,"signInViaPopup",e,i).executeNotNull()}class an extends zd{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,By.get())};e()}}an.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="pendingRedirect",cs=new Map;class qy extends zd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const n=await zy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zy(r,e){const t=Kd(e),n=$d(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function $y(r,e){return $d(r)._set(Kd(e),"true")}function Ky(r,e){cs.set(r._key(),e)}function $d(r){return ot(r._redirectPersistence)}function Kd(r){return as(jy,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(r,e,t){return Gy(r,e,t)}async function Gy(r,e,t){if(je(r.app))return Promise.reject(xt(r));const n=Ei(r);_d(r,e,Hs),await n._initializationPromise;const i=tc(n,t);return await $y(i,n),i._openRedirect(n,e,"signInViaRedirect")}async function Wy(r,e,t=!1){if(je(r.app))return Promise.reject(xt(r));const n=Ei(r),i=tc(n,e),o=await new qy(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=10*60*1e3;class Qy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gd(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Gd({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gd(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(r,e={}){return fr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zy=/^https?/;async function eI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Jy(r);for(const t of e)try{if(tI(t))return}catch{}et(r,"unauthorized-domain")}function tI(r){const e=ha(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Zy.test(t))return!1;if(Yy.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new Ti(3e4,6e4);function wl(){const r=Je().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function rI(r){return new Promise((e,t)=>{var n,i,s;function o(){wl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wl(),t(Ge(r,"network-request-failed"))},timeout:nI.get()})}if(!((i=(n=Je().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const c=ly("iframefcb");return Je()[c]=()=>{gapi.load?o():t(Ge(r,"network-request-failed"))},cy(`${uy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw us=null,e})}let us=null;function iI(r){return us=us||rI(r),us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Ti(5e3,15e3),oI="__/auth/iframe",aI="emulator/auth/iframe",cI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lI(r){const e=r.config;z(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Qa(e,aI):`https://${r.config.authDomain}/${oI}`,n={apiKey:e.apiKey,appName:r.name,v:dr},i=uI.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${vi(n).slice(1)}`}async function hI(r){const e=await iI(r),t=Je().gapi;return z(t,r,"internal-error"),e.open({where:document.body,url:lI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cI,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Ge(r,"network-request-failed"),c=Je().setTimeout(()=>{s(o)},sI.get());function u(){Je().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fI=500,pI=600,mI="_blank",gI="http://localhost";class Al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _I(r,e,t,n=fI,i=pI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},dI),{width:n.toString(),height:i.toString(),top:s,left:o}),h=me().toLowerCase();t&&(c=bd(h)?mI:t),wd(h)&&(e=e||gI,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[S,C])=>`${_}${S}=${C},`,"");if(ey(h)&&c!=="_self")return yI(e||"",c),new Al(null);const m=window.open(e||"",c,f);z(m,r,"popup-blocked");try{m.focus()}catch{}return new Al(m)}function yI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="__/auth/handler",vI="emulator/auth/handler",TI=encodeURIComponent("fac");async function bl(r,e,t,n,i,s){z(r.config.authDomain,r,"auth-domain-config-required"),z(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:dr,eventId:i};if(e instanceof Hs){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",vg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof wi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${TI}=${encodeURIComponent(u)}`:"";return`${EI(r)}?${vi(c).slice(1)}${h}`}function EI({config:r}){return r.emulator?Qa(r,vI):`https://${r.authDomain}/${II}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="webStorageSupport";class wI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fd,this._completeRedirectFn=Wy,this._overrideRedirectResult=Ky}async _openPopup(e,t,n,i){var s;ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bl(e,t,n,ha(),i);return _I(e,o,ec())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await bl(e,t,n,ha(),i);return Ry(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ht(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await hI(e),n=new Qy(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jo,{type:Jo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jo];o!==void 0&&t(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vd()||Ad()||Ya()}}const AI=wI;var Sl="@firebase/auth",Rl="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RI(r){Kn(new mn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(r)},h=new oy(n,i,s,u);return dy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Kn(new mn("auth-internal",e=>{const t=Ei(e.getProvider("auth").getImmediate());return(n=>new bI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Sl,Rl,SI(r)),Nt(Sl,Rl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=5*60,CI=sd("authIdTokenMaxAge")||PI;let Pl=null;const VI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>CI)return;const i=t==null?void 0:t.token;Pl!==i&&(Pl=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uw(r=w_()){const e=Ka(r,"auth");if(e.isInitialized())return e.getImmediate();const t=hy(r,{popupRedirectResolver:AI,persistence:[My,Ay,Fd]}),n=sd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=VI(s.toString());Ty(t,o,()=>o(t.currentUser)),vy(t,c=>o(c))}}const i=og("auth");return i&&fy(t,`http://${i}`),t}function DI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ay({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ge("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",DI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RI("Browser");var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ot,Wd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function I(){}I.prototype=g.prototype,v.D=g.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(T,E,b){for(var y=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)y[nt-2]=arguments[nt];return g.prototype[E].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,I){I||(I=0);var T=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)T[E]=g.charCodeAt(I++)|g.charCodeAt(I++)<<8|g.charCodeAt(I++)<<16|g.charCodeAt(I++)<<24;else for(E=0;16>E;++E)T[E]=g[I++]|g[I++]<<8|g[I++]<<16|g[I++]<<24;g=v.g[0],I=v.g[1],E=v.g[2];var b=v.g[3],y=g+(b^I&(E^b))+T[0]+3614090360&4294967295;g=I+(y<<7&4294967295|y>>>25),y=b+(E^g&(I^E))+T[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(I^b&(g^I))+T[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(g^E&(b^g))+T[3]+3250441966&4294967295,I=E+(y<<22&4294967295|y>>>10),y=g+(b^I&(E^b))+T[4]+4118548399&4294967295,g=I+(y<<7&4294967295|y>>>25),y=b+(E^g&(I^E))+T[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(I^b&(g^I))+T[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(g^E&(b^g))+T[7]+4249261313&4294967295,I=E+(y<<22&4294967295|y>>>10),y=g+(b^I&(E^b))+T[8]+1770035416&4294967295,g=I+(y<<7&4294967295|y>>>25),y=b+(E^g&(I^E))+T[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(I^b&(g^I))+T[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(g^E&(b^g))+T[11]+2304563134&4294967295,I=E+(y<<22&4294967295|y>>>10),y=g+(b^I&(E^b))+T[12]+1804603682&4294967295,g=I+(y<<7&4294967295|y>>>25),y=b+(E^g&(I^E))+T[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(I^b&(g^I))+T[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(g^E&(b^g))+T[15]+1236535329&4294967295,I=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(I^E))+T[1]+4129170786&4294967295,g=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(g^I))+T[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^I&(b^g))+T[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^g&(E^b))+T[0]+3921069994&4294967295,I=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(I^E))+T[5]+3593408605&4294967295,g=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(g^I))+T[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^I&(b^g))+T[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^g&(E^b))+T[4]+3889429448&4294967295,I=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(I^E))+T[9]+568446438&4294967295,g=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(g^I))+T[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^I&(b^g))+T[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^g&(E^b))+T[8]+1163531501&4294967295,I=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(I^E))+T[13]+2850285829&4294967295,g=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(g^I))+T[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^I&(b^g))+T[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^g&(E^b))+T[12]+2368359562&4294967295,I=E+(y<<20&4294967295|y>>>12),y=g+(I^E^b)+T[5]+4294588738&4294967295,g=I+(y<<4&4294967295|y>>>28),y=b+(g^I^E)+T[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^I)+T[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^g)+T[14]+4259657740&4294967295,I=E+(y<<23&4294967295|y>>>9),y=g+(I^E^b)+T[1]+2763975236&4294967295,g=I+(y<<4&4294967295|y>>>28),y=b+(g^I^E)+T[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^I)+T[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^g)+T[10]+3200236656&4294967295,I=E+(y<<23&4294967295|y>>>9),y=g+(I^E^b)+T[13]+681279174&4294967295,g=I+(y<<4&4294967295|y>>>28),y=b+(g^I^E)+T[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^I)+T[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^g)+T[6]+76029189&4294967295,I=E+(y<<23&4294967295|y>>>9),y=g+(I^E^b)+T[9]+3654602809&4294967295,g=I+(y<<4&4294967295|y>>>28),y=b+(g^I^E)+T[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^I)+T[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^g)+T[2]+3299628645&4294967295,I=E+(y<<23&4294967295|y>>>9),y=g+(E^(I|~b))+T[0]+4096336452&4294967295,g=I+(y<<6&4294967295|y>>>26),y=b+(I^(g|~E))+T[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~I))+T[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~g))+T[5]+4237533241&4294967295,I=E+(y<<21&4294967295|y>>>11),y=g+(E^(I|~b))+T[12]+1700485571&4294967295,g=I+(y<<6&4294967295|y>>>26),y=b+(I^(g|~E))+T[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~I))+T[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~g))+T[1]+2240044497&4294967295,I=E+(y<<21&4294967295|y>>>11),y=g+(E^(I|~b))+T[8]+1873313359&4294967295,g=I+(y<<6&4294967295|y>>>26),y=b+(I^(g|~E))+T[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~I))+T[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~g))+T[13]+1309151649&4294967295,I=E+(y<<21&4294967295|y>>>11),y=g+(E^(I|~b))+T[4]+4149444226&4294967295,g=I+(y<<6&4294967295|y>>>26),y=b+(I^(g|~E))+T[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~I))+T[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+b&4294967295}n.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var I=g-this.blockSize,T=this.B,E=this.h,b=0;b<g;){if(E==0)for(;b<=I;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<g;)if(T[E++]=v.charCodeAt(b++),E==this.blockSize){i(this,T),E=0;break}}else for(;b<g;)if(T[E++]=v[b++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var I=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=I&255,I/=256;for(this.u(v),v=Array(16),g=I=0;4>g;++g)for(var T=0;32>T;T+=8)v[I++]=this.g[g]>>>T&255;return v};function s(v,g){var I=c;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=g(v)}function o(v,g){this.h=g;for(var I=[],T=!0,E=v.length-1;0<=E;E--){var b=v[E]|0;T&&b==g||(I[E]=b,T=!1)}this.g=I}var c={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return D(h(-v));for(var g=[],I=1,T=0;v>=I;T++)g[T]=v/I|0,I*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return D(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(g,8)),T=m,E=0;E<v.length;E+=8){var b=Math.min(8,v.length-E),y=parseInt(v.substring(E,E+b),g);8>b?(b=h(Math.pow(g,b)),T=T.j(b).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var m=u(0),_=u(1),S=u(16777216);r=o.prototype,r.m=function(){if(k(this))return-D(this).m();for(var v=0,g=1,I=0;I<this.g.length;I++){var T=this.i(I);v+=(0<=T?T:4294967296+T)*g,g*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(k(this))return"-"+D(this).toString(v);for(var g=h(Math.pow(v,6)),I=this,T="";;){var E=W(I,g).g;I=$(I,E.j(g));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=E,C(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}r.l=function(v){return v=$(this,v),k(v)?-1:C(v)?0:1};function D(v){for(var g=v.g.length,I=[],T=0;T<g;T++)I[T]=~v.g[T];return new o(I,~v.h).add(_)}r.abs=function(){return k(this)?D(this):this},r.add=function(v){for(var g=Math.max(this.g.length,v.g.length),I=[],T=0,E=0;E<=g;E++){var b=T+(this.i(E)&65535)+(v.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=y>>>16,b&=65535,y&=65535,I[E]=y<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(v,g){return v.add(D(g))}r.j=function(v){if(C(this)||C(v))return m;if(k(this))return k(v)?D(this).j(D(v)):D(D(this).j(v));if(k(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,I=[],T=0;T<2*g;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<v.g.length;E++){var b=this.i(T)>>>16,y=this.i(T)&65535,nt=v.i(E)>>>16,vr=v.i(E)&65535;I[2*T+2*E]+=y*vr,B(I,2*T+2*E),I[2*T+2*E+1]+=b*vr,B(I,2*T+2*E+1),I[2*T+2*E+1]+=y*nt,B(I,2*T+2*E+1),I[2*T+2*E+2]+=b*nt,B(I,2*T+2*E+2)}for(T=0;T<g;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=g;T<2*g;T++)I[T]=0;return new o(I,0)};function B(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function F(v,g){this.g=v,this.h=g}function W(v,g){if(C(g))throw Error("division by zero");if(C(v))return new F(m,m);if(k(v))return g=W(D(v),g),new F(D(g.g),D(g.h));if(k(g))return g=W(v,D(g)),new F(D(g.g),g.h);if(30<v.g.length){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=g;0>=T.l(v);)I=Z(I),T=Z(T);var E=G(I,1),b=G(T,1);for(T=G(T,2),I=G(I,2);!C(T);){var y=b.add(T);0>=y.l(v)&&(E=E.add(I),b=y),T=G(T,1),I=G(I,1)}return g=$(v,E.j(g)),new F(E,g)}for(E=m;0<=v.l(g);){for(I=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(I),y=b.j(g);k(y)||0<y.l(v);)I-=T,b=h(I),y=b.j(g);C(b)&&(b=_),E=E.add(b),v=$(v,y)}return new F(E,v)}r.A=function(v){return W(this,v).h},r.and=function(v){for(var g=Math.max(this.g.length,v.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)&v.i(T);return new o(I,this.h&v.h)},r.or=function(v){for(var g=Math.max(this.g.length,v.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)|v.i(T);return new o(I,this.h|v.h)},r.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),I=[],T=0;T<g;T++)I[T]=this.i(T)^v.i(T);return new o(I,this.h^v.h)};function Z(v){for(var g=v.g.length+1,I=[],T=0;T<g;T++)I[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(I,v.h)}function G(v,g){var I=g>>5;g%=32;for(var T=v.g.length-I,E=[],b=0;b<T;b++)E[b]=0<g?v.i(b+I)>>>g|v.i(b+I+1)<<32-g:v.i(b+I);return new o(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Wd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ot=o}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hd,qr,Qd,ls,pa,Xd,Jd,Yd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var A=a[p];if(!(A in d))break e;d=d[A]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,A={next:function(){if(!p&&d<a.length){var R=d++;return{value:l(R,a[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),a.apply(l,A)}}return function(){return a.apply(l,arguments)}}function _(a,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function S(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,A,R){for(var x=Array(arguments.length-2),re=2;re<arguments.length;re++)x[re-2]=arguments[re];return l.prototype[A].apply(p,x)}}function k(a){const l=a.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function D(a,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const A=a.length||0,R=p.length||0;a.length=A+R;for(let x=0;x<R;x++)a[A+x]=p[x]}else a.push(p)}}class ${constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var Z=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function G(a,l,d){for(const p in a)l.call(d,a[p],p,a)}function v(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function g(a){const l={};for(const d in a)l[d]=a[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)a[d]=p[d];for(let R=0;R<I.length;R++)d=I[R],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function y(){var a=To;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class nt{constructor(){this.h=this.g=null}add(l,d){const p=vr.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var vr=new $(()=>new ym,a=>a.reset());class ym{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Tr,Er=!1,To=new nt,tu=()=>{const a=c.Promise.resolve(void 0);Tr=()=>{a.then(Im)}};var Im=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){b(d)}var l=vr;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Er=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var vm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function wr(a,l){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(Z){e:{try{W(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tm[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wr.aa.h.call(this)}}C(wr,Te);var Tm={2:"touch",3:"pen",4:"mouse"};wr.prototype.h=function(){wr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ni="closure_listenable_"+(1e6*Math.random()|0),Em=0;function wm(a,l,d,p,A){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++Em,this.da=this.fa=!1}function xi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Oi(a){this.src=a,this.g={},this.h=0}Oi.prototype.add=function(a,l,d,p,A){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var x=wo(a,l,p,A);return-1<x?(l=a[x],d||(l.fa=!1)):(l=new wm(l,this.src,R,!!p,A),l.fa=d,a.push(l)),l};function Eo(a,l){var d=l.type;if(d in a.g){var p=a.g[d],A=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(p,A,1),R&&(xi(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wo(a,l,d,p){for(var A=0;A<a.length;++A){var R=a[A];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return A}return-1}var Ao="closure_lm_"+(1e6*Math.random()|0),bo={};function nu(a,l,d,p,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)nu(a,l[R],d,p,A);return null}return d=su(d),a&&a[Ni]?a.K(l,d,h(p)?!!p.capture:!1,A):Am(a,l,d,!1,p,A)}function Am(a,l,d,p,A,R){if(!l)throw Error("Invalid event type");var x=h(A)?!!A.capture:!!A,re=Ro(a);if(re||(a[Ao]=re=new Oi(a)),d=re.add(l,d,p,x,R),d.proxy)return d;if(p=bm(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)vm||(A=x),A===void 0&&(A=!1),a.addEventListener(l.toString(),p,A);else if(a.attachEvent)a.attachEvent(iu(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bm(){function a(d){return l.call(a.src,a.listener,d)}const l=Sm;return a}function ru(a,l,d,p,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)ru(a,l[R],d,p,A);else p=h(p)?!!p.capture:!!p,d=su(d),a&&a[Ni]?(a=a.i,l=String(l).toString(),l in a.g&&(R=a.g[l],d=wo(R,d,p,A),-1<d&&(xi(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[l],a.h--)))):a&&(a=Ro(a))&&(l=a.g[l.toString()],a=-1,l&&(a=wo(l,d,p,A)),(d=-1<a?l[a]:null)&&So(d))}function So(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Ni])Eo(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(iu(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Ro(l))?(Eo(d,a),d.h==0&&(d.src=null,l[Ao]=null)):xi(a)}}}function iu(a){return a in bo?bo[a]:bo[a]="on"+a}function Sm(a,l){if(a.da)a=!0;else{l=new wr(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&So(a),a=d.call(p,l)}return a}function Ro(a){return a=a[Ao],a instanceof Oi?a:null}var Po="__closure_events_fn_"+(1e9*Math.random()>>>0);function su(a){return typeof a=="function"?a:(a[Po]||(a[Po]=function(l){return a.handleEvent(l)}),a[Po])}function Ee(){_t.call(this),this.i=new Oi(this),this.M=this,this.F=null}C(Ee,_t),Ee.prototype[Ni]=!0,Ee.prototype.removeEventListener=function(a,l,d,p){ru(this,a,l,d,p)};function Ve(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Te(l,a);else if(l instanceof Te)l.target=l.target||a;else{var A=l;l=new Te(p,a),T(l,A)}if(A=!0,d)for(var R=d.length-1;0<=R;R--){var x=l.g=d[R];A=Mi(x,p,!0,l)&&A}if(x=l.g=a,A=Mi(x,p,!0,l)&&A,A=Mi(x,p,!1,l)&&A,d)for(R=0;R<d.length;R++)x=l.g=d[R],A=Mi(x,p,!1,l)&&A}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)xi(d[p]);delete a.g[l],a.h--}}this.F=null},Ee.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Ee.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function Mi(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var x=l[R];if(x&&!x.da&&x.capture==d){var re=x.listener,Ie=x.ha||x.src;x.fa&&Eo(a.i,x),A=re.call(Ie,p)!==!1&&A}}return A&&!p.defaultPrevented}function ou(a,l,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function au(a){a.g=ou(()=>{a.g=null,a.i&&(a.i=!1,au(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Rm extends _t{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(a){_t.call(this),this.h=a,this.g={}}C(Ar,_t);var cu=[];function uu(a){G(a.g,function(l,d){this.g.hasOwnProperty(d)&&So(l)},a),a.g={}}Ar.prototype.N=function(){Ar.aa.N.call(this),uu(this)},Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Co=c.JSON.stringify,Pm=c.JSON.parse,Cm=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Vo(){}Vo.prototype.h=null;function lu(a){return a.h||(a.h=a.i())}function hu(){}var br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Do(){Te.call(this,"d")}C(Do,Te);function ko(){Te.call(this,"c")}C(ko,Te);var Ht={},du=null;function Li(){return du=du||new Ee}Ht.La="serverreachability";function fu(a){Te.call(this,Ht.La,a)}C(fu,Te);function Sr(a){const l=Li();Ve(l,new fu(l))}Ht.STAT_EVENT="statevent";function pu(a,l){Te.call(this,Ht.STAT_EVENT,a),this.stat=l}C(pu,Te);function De(a){const l=Li();Ve(l,new pu(l,a))}Ht.Ma="timingevent";function mu(a,l){Te.call(this,Ht.Ma,a),this.size=l}C(mu,Te);function Rr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function Pr(){this.g=!0}Pr.prototype.xa=function(){this.g=!1};function Vm(a,l,d,p,A,R){a.info(function(){if(a.g)if(R)for(var x="",re=R.split("&"),Ie=0;Ie<re.length;Ie++){var J=re[Ie].split("=");if(1<J.length){var we=J[0];J=J[1];var Ae=we.split("_");x=2<=Ae.length&&Ae[1]=="type"?x+(we+"="+J+"&"):x+(we+"=redacted&")}}else x=null;else x=R;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+x})}function Dm(a,l,d,p,A,R,x){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+R+" "+x})}function Sn(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Nm(a,d)+(p?" "+p:"")})}function km(a,l){a.info(function(){return"TIMEOUT: "+l})}Pr.prototype.info=function(){};function Nm(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return Co(d)}catch{return l}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},No;function Ui(){}C(Ui,Vo),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},No=new Ui;function yt(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new Ar(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var yu={},xo={};function Oo(a,l,d){a.L=1,a.v=zi(rt(l)),a.m=d,a.P=!0,Iu(a,null)}function Iu(a,l){a.F=Date.now(),Bi(a),a.A=rt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Nu(d.i,"t",p),a.C=0,d=a.j.J,a.h=new _u,a.g=Ju(a.j,d?l:null,!a.m),0<a.O&&(a.M=new Rm(_(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(cu[0]=A.toString()),A=cu);for(var R=0;R<A.length;R++){var x=nu(d,A[R],p||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Sr(),Vm(a.i,a.u,a.A,a.l,a.R,a.m)}yt.prototype.ca=function(a){a=a.target;const l=this.M;l&&it(a)==3?l.j():this.Y(a)},yt.prototype.Y=function(a){try{if(a==this.g)e:{const Ae=it(this.g);var l=this.g.Ba();const Cn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Bu(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=Cn?Sr(3):Sr(2)),Mo(this);var d=this.g.Z();this.X=d;t:if(vu(this)){var p=Bu(this.g);a="";var A=p.length,R=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Cr(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(R&&l==A-1)});p.length=0,this.h.g+=a,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=d==200,Dm(this.i,this.u,this.A,this.l,this.R,Ae,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,Ie=this.g;if((re=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(re)){var J=re;break t}}J=null}if(d=J)Sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lo(this,d);else{this.o=!1,this.s=3,De(12),Qt(this),Cr(this);break e}}if(this.P){d=!0;let ze;for(;!this.J&&this.C<x.length;)if(ze=xm(this,x),ze==xo){Ae==4&&(this.s=4,De(14),d=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==yu){this.s=4,De(15),Sn(this.i,this.l,x,"[Invalid Chunk]"),d=!1;break}else Sn(this.i,this.l,ze,null),Lo(this,ze);if(vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||x.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)Sn(this.i,this.l,x,"[Invalid Chunked Response]"),Qt(this),Cr(this);else if(0<x.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),zo(we),we.M=!0,De(11))}}else Sn(this.i,this.l,x,null),Lo(this,x);Ae==4&&Qt(this),this.o&&!this.J&&(Ae==4?Wu(this.j,this):(this.o=!1,Bi(this)))}else Jm(this.g),d==400&&0<x.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Qt(this),Cr(this)}}}catch{}finally{}};function vu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xm(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?xo:(d=Number(l.substring(d,p)),isNaN(d)?yu:(p+=1,p+d>l.length?xo:(l=l.slice(p,p+d),a.C=p+d,l)))}yt.prototype.cancel=function(){this.J=!0,Qt(this)};function Bi(a){a.S=Date.now()+a.I,Tu(a,a.I)}function Tu(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rr(_(a.ba,a),l)}function Mo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}yt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(km(this.i,this.A),this.L!=2&&(Sr(),De(17)),Qt(this),this.s=2,Cr(this)):Tu(this,this.S-a)};function Cr(a){a.j.G==0||a.J||Wu(a.j,a)}function Qt(a){Mo(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,uu(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function Lo(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Fo(d.h,a))){if(!a.K&&Fo(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Qi(d),Wi(d);else break e;qo(d),De(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Rr(_(d.Za,d),6e3));if(1>=Au(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((a.K||d.g==a)&&Qi(d),!B(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let J=A[l];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const we=J[3];we!=null&&(d.la=we,d.j.info("VER="+d.la));const Ae=J[4];Ae!=null&&(d.Aa=Ae,d.j.info("SVER="+d.Aa));const Cn=J[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(p=1.5*Cn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const ze=a.g;if(ze){const Ji=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var R=p.h;R.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Uo(R,R.h),R.h=null))}if(p.D){const $o=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(p.ya=$o,se(p.I,p.D,$o))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var x=a;if(p.qa=Xu(p,p.J?p.ia:null,p.W),x.K){bu(p.h,x);var re=x,Ie=p.L;Ie&&(re.I=Ie),re.B&&(Mo(re),Bi(re)),p.g=x}else Ku(p);0<d.i.length&&Hi(d)}else J[0]!="stop"&&J[0]!="close"||Jt(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Jt(d,7):jo(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Sr(4)}catch{}}var Om=class{constructor(a,l){this.g=a,this.map=l}};function Eu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Au(a){return a.h?1:a.g?a.g.size:0}function Fo(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Uo(a,l){a.g?a.g.add(l):a.h=l}function bu(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Eu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Su(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return k(a.i)}function Mm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function Lm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const p in a)l[d++]=p;return l}}}function Ru(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Lm(a),p=Mm(a),A=p.length,R=0;R<A;R++)l.call(void 0,p[R],d&&d[R],a)}var Pu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fm(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),A=null;if(0<=p){var R=a[d].substring(0,p);A=a[d].substring(p+1)}else R=a[d];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Xt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xt){this.h=a.h,ji(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.s),this.l=a.l;var l=a.i,d=new kr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Cu(this,d),this.m=a.m}else a&&(l=String(a).match(Pu))?(this.h=!1,ji(this,l[1]||"",!0),this.o=Vr(l[2]||""),this.g=Vr(l[3]||"",!0),qi(this,l[4]),this.l=Vr(l[5]||"",!0),Cu(this,l[6]||"",!0),this.m=Vr(l[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}Xt.prototype.toString=function(){var a=[],l=this.j;l&&a.push(Dr(l,Vu,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Dr(l,Vu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Dr(d,d.charAt(0)=="/"?jm:Bm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Dr(d,zm)),a.join("")};function rt(a){return new Xt(a)}function ji(a,l,d){a.j=d?Vr(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Cu(a,l,d){l instanceof kr?(a.i=l,$m(a.i,a.h)):(d||(l=Dr(l,qm)),a.i=new kr(l,a.h))}function se(a,l,d){a.i.set(l,d)}function zi(a){return se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vr(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Dr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,Um),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Um(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vu=/[#\/\?@]/g,Bm=/[#\?:]/g,jm=/[#\?]/g,qm=/[#\?@]/g,zm=/#/g;function kr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function It(a){a.g||(a.g=new Map,a.h=0,a.i&&Fm(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=kr.prototype,r.add=function(a,l){It(this),this.i=null,a=Rn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Du(a,l){It(a),l=Rn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function ku(a,l){return It(a),l=Rn(a,l),a.g.has(l)}r.forEach=function(a,l){It(this),this.g.forEach(function(d,p){d.forEach(function(A){a.call(l,A,p,this)},this)},this)},r.na=function(){It(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const A=a[p];for(let R=0;R<A.length;R++)d.push(l[p])}return d},r.V=function(a){It(this);let l=[];if(typeof a=="string")ku(this,a)&&(l=l.concat(this.g.get(Rn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},r.set=function(a,l){return It(this),this.i=null,a=Rn(this,a),ku(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function Nu(a,l,d){Du(a,l),0<d.length&&(a.i=null,a.g.set(Rn(a,l),k(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const R=encodeURIComponent(String(p)),x=this.V(p);for(p=0;p<x.length;p++){var A=R;x[p]!==""&&(A+="="+encodeURIComponent(String(x[p]))),a.push(A)}}return this.i=a.join("&")};function Rn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function $m(a,l){l&&!a.j&&(It(a),a.i=null,a.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(Du(this,p),Nu(this,A,d))},a)),a.j=l}function Km(a,l){const d=new Pr;if(c.Image){const p=new Image;p.onload=S(vt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=S(vt,d,"TestLoadImage: error",!1,l,p),p.onabort=S(vt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(vt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function Gm(a,l){const d=new Pr,p=new AbortController,A=setTimeout(()=>{p.abort(),vt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(A),R.ok?vt(d,"TestPingServer: ok",!0,l):vt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),vt(d,"TestPingServer: error",!1,l)})}function vt(a,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Wm(){this.g=new Cm}function Hm(a,l,d){const p=d||"";try{Ru(a,function(A,R){let x=A;h(A)&&(x=Co(A)),l.push(p+R+"="+encodeURIComponent(x))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function $i(a){this.l=a.Ub||null,this.j=a.eb||!1}C($i,Vo),$i.prototype.g=function(){return new Ki(this.l,this.j)},$i.prototype.i=function(a){return function(){return a}}({});function Ki(a,l){Ee.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ki,Ee),r=Ki.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,xr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Nr(this):xr(this),this.readyState==3&&xu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Nr(this))},r.Qa=function(a){this.g&&(this.response=a,Nr(this))},r.ga=function(){this.g&&Nr(this)};function Nr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xr(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function xr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ou(a){let l="";return G(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Bo(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ou(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):se(a,l,d))}function ce(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ce,Ee);var Qm=/^https?$/i,Xm=["POST","PUT"];r=ce.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():No.g(),this.v=this.o?lu(this.o):lu(No),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(R){Mu(this,R);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xm,l,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,x]of d)this.g.setRequestHeader(R,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uu(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){Mu(this,R)}};function Mu(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,Lu(a),Gi(a)}function Lu(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ve(this,"complete"),Ve(this,"abort"),Gi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),ce.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Fu(this):this.bb())},r.bb=function(){Fu(this)};function Fu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||it(a)!=4||a.Z()!=2)){if(a.u&&it(a)==4)ou(a.Ea,0,a);else if(Ve(a,"readystatechange"),it(a)==4){a.h=!1;try{const x=a.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=x===0){var A=String(a.D).match(Pu)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!Qm.test(A?A.toLowerCase():"")}d=p}if(d)Ve(a,"complete"),Ve(a,"success");else{a.m=6;try{var R=2<it(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",Lu(a)}}finally{Gi(a)}}}}function Gi(a,l){if(a.g){Uu(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Ve(a,"ready");try{d.onreadystatechange=p}catch{}}}function Uu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function it(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Pm(l)}};function Bu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Jm(a){const l={};a=(a.g&&2<=it(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(B(a[p]))continue;var d=E(a[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=l[A]||[];l[A]=R,R.push(d)}v(l,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function ju(a){this.Aa=0,this.i=[],this.j=new Pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Or("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Or("baseRetryDelayMs",5e3,a),this.cb=Or("retryDelaySeedMs",1e4,a),this.Wa=Or("forwardChannelMaxRetries",2,a),this.wa=Or("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Eu(a&&a.concurrentRequestLimit),this.Da=new Wm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ju.prototype,r.la=8,r.G=1,r.connect=function(a,l,d,p){De(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Xu(this,null,this.W),Hi(this)};function jo(a){if(qu(a),a.G==3){var l=a.U++,d=rt(a.I);if(se(d,"SID",a.K),se(d,"RID",l),se(d,"TYPE","terminate"),Mr(a,d),l=new yt(a,a.j,l),l.L=2,l.v=zi(rt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ju(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Bi(l)}Qu(a)}function Wi(a){a.g&&(zo(a),a.g.cancel(),a.g=null)}function qu(a){Wi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Qi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Hi(a){if(!wu(a.h)&&!a.s){a.s=!0;var l=a.Ga;Tr||tu(),Er||(Tr(),Er=!0),To.add(l,a),a.B=0}}function Ym(a,l){return Au(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rr(_(a.Ga,a,l),Hu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new yt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=g(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=$u(this,A,l),d=rt(this.I),se(d,"RID",a),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Mr(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(Ou(R)))+"&"+l:this.m&&Bo(d,this.m,R)),Uo(this.h,A),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",l),se(d,"SID","null"),A.T=!0,Oo(A,d,null)):Oo(A,d,l),this.G=2}}else this.G==3&&(a?zu(this,a):this.i.length==0||wu(this.h)||zu(this))};function zu(a,l){var d;l?d=l.l:d=a.U++;const p=rt(a.I);se(p,"SID",a.K),se(p,"RID",d),se(p,"AID",a.T),Mr(a,p),a.m&&a.o&&Bo(p,a.m,a.o),d=new yt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=$u(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Uo(a.h,d),Oo(d,p,l)}function Mr(a,l){a.H&&G(a.H,function(d,p){se(l,p,d)}),a.l&&Ru({},function(d,p){se(l,p,d)})}function $u(a,l,d){d=Math.min(a.i.length,d);var p=a.l?_(a.l.Na,a.l,a):null;e:{var A=a.i;let R=-1;for(;;){const x=["count="+d];R==-1?0<d?(R=A[0].g,x.push("ofs="+R)):R=0:x.push("ofs="+R);let re=!0;for(let Ie=0;Ie<d;Ie++){let J=A[Ie].g;const we=A[Ie].map;if(J-=R,0>J)R=Math.max(0,A[Ie].g-100),re=!1;else try{Hm(we,x,"req"+J+"_")}catch{p&&p(we)}}if(re){p=x.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function Ku(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;Tr||tu(),Er||(Tr(),Er=!0),To.add(l,a),a.v=0}}function qo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rr(_(a.Fa,a),Hu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rr(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Wi(this),Gu(this))};function zo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Gu(a){a.g=new yt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=rt(a.qa);se(l,"RID","rpc"),se(l,"SID",a.K),se(l,"AID",a.T),se(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&se(l,"TO",a.ja),se(l,"TYPE","xmlhttp"),Mr(a,l),a.m&&a.o&&Bo(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=zi(rt(l)),d.m=null,d.P=!0,Iu(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Wi(this),qo(this),De(19))};function Qi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Wu(a,l){var d=null;if(a.g==l){Qi(a),zo(a),a.g=null;var p=2}else if(Fo(a.h,l))d=l.D,bu(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=a.B;p=Li(),Ve(p,new mu(p,d)),Hi(a)}else Ku(a);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&Ym(a,l)||p==2&&qo(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),A){case 1:Jt(a,5);break;case 4:Jt(a,10);break;case 3:Jt(a,6);break;default:Jt(a,2)}}}function Hu(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function Jt(a,l){if(a.j.info("Error code "+l),l==2){var d=_(a.fb,a),p=a.Xa;const A=!p;p=new Xt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ji(p,"https"),zi(p),A?Km(p.toString(),d):Gm(p.toString(),d)}else De(2);a.G=0,a.l&&a.l.sa(l),Qu(a),qu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Qu(a){if(a.G=0,a.ka=[],a.l){const l=Su(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ka,l),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Xu(a,l,d){var p=d instanceof Xt?rt(d):new Xt(d);if(p.g!="")l&&(p.g=l+"."+p.g),qi(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new Xt(null);p&&ji(R,p),l&&(R.g=l),A&&qi(R,A),d&&(R.l=d),p=R}return d=a.D,l=a.ya,d&&l&&se(p,d,l),se(p,"VER",a.la),Mr(a,p),p}function Ju(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ce(new $i({eb:d})):new ce(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yu(){}r=Yu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Xi(){}Xi.prototype.g=function(a,l){return new Me(a,l)};function Me(a,l){Ee.call(this),this.g=new ju(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!B(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Pn(this)}C(Me,Ee),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){jo(this.g)},Me.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Co(a),a=d);l.i.push(new Om(l.Ya++,a)),l.G==3&&Hi(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,Me.aa.N.call(this)};function Zu(a){Do.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(Zu,Do);function el(){ko.call(this),this.status=1}C(el,ko);function Pn(a){this.g=a}C(Pn,Yu),Pn.prototype.ua=function(){Ve(this.g,"a")},Pn.prototype.ta=function(a){Ve(this.g,new Zu(a))},Pn.prototype.sa=function(a){Ve(this.g,new el)},Pn.prototype.ra=function(){Ve(this.g,"b")},Xi.prototype.createWebChannel=Xi.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Yd=function(){return new Xi},Jd=function(){return Li()},Xd=Ht,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,ls=Fi,gu.COMPLETE="complete",Qd=gu,hu.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,qr=hu,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,Hd=ce}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const Vl="@firebase/firestore",Dl="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new za("@firebase/firestore");function Mn(){return _n.logLevel}function V(r,...e){if(_n.logLevel<=H.DEBUG){const t=e.map(rc);_n.debug(`Firestore (${pr}): ${r}`,...t)}}function le(r,...e){if(_n.logLevel<=H.ERROR){const t=e.map(rc);_n.error(`Firestore (${pr}): ${r}`,...t)}}function Ft(r,...e){if(_n.logLevel<=H.WARN){const t=e.map(rc);_n.warn(`Firestore (${pr}): ${r}`,...t)}}function rc(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Zd(r,n,t)}function Zd(r,e,t){let n=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw le(n),new Error(n)}function U(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||Zd(e,i,n)}function L(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class xI{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.o===void 0,42304);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{l:n}),new kI(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class OI{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class MI{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new OI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){U(this.o===void 0,3512);const n=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=FI(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function ma(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return q(n,i);{const s=ef(),o=UI(s.encode(Nl(r,t)),s.encode(Nl(e,t)));return o!==0?o:q(n,i)}}t+=n>65535?2:1}return q(r.length,e.length)}function Nl(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function UI(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return q(r[t],e[t]);return q(r.length,e.length)}function Wn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function tf(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="__name__";class We{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=We.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return q(e.length,t.length)}static compareSegments(e,t){const n=We.isNumericId(e),i=We.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?We.extractNumericId(e).compare(We.extractNumericId(t)):ma(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ot.fromString(e.substring(4,e.length-2))}}class Y extends We{construct(e,t,n){return new Y(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const BI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends We{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return BI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xl}static keyField(){return new ae([xl])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Y.fromString(e))}static fromName(e){return new O(Y.fromString(e).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(r,e,t){if(!t)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function jI(r,e,t,n){if(e===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ol(r){if(!O.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ml(r){if(O.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function rf(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Js(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function ut(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Js(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(r,e){const t={typeString:r};return e&&(t.value=e),t}function bi(r,e){if(!rf(r))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new N(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=-62135596800,Fl=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Fl);return new ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ll)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fl}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bi(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ll;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:fe("string",ee._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ee(0,0))}static max(){return new j(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=-1;class Cs{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function ga(r){return r.fields.find(e=>e.kind===2)}function en(r){return r.fields.filter(e=>e.kind!==2)}Cs.UNKNOWN_ID=-1;class hs{constructor(e,t){this.fieldPath=e,this.kind=t}}class oi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new oi(0,Be.min())}}function sf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=j.fromTimestamp(n===1e9?new ee(t+1,0):new ee(t,n));return new Be(i,O.empty(),e)}function of(r){return new Be(r.readTime,r.key,Hn)}class Be{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Be(j.min(),O.empty(),Hn)}static max(){return new Be(j.max(),O.empty(),Hn)}}function sc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==af)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>n(u))}),o=!0,s===i&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(i=>i?w.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new w((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new w((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="SimpleDb";class Ys{static open(e,t,n,i){try{return new Ys(t,e.transaction(i,n))}catch(s){throw new Qr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ct,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Qr(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=oc(n.target.error);this.S.reject(new Qr(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(Le,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new zI(t)}}class Mt{static delete(e){return V(Le,"Removing database:",e),nn(rd().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ld())return!1;if(Mt.F())return!0;const e=me(),t=Mt.M(e),n=0<t&&t<10,i=uf(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,Mt.M(me())===12.2&&le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(V(Le,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new N(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new N(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Qr(e,o))},i.onupgradeneeded=s=>{V(Le,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{V(Le,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var n;t.newVersion===null&&(Ft('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=Ys.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),w.reject(h))).toPromise();return u.catch(()=>{}),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(V(Le,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function uf(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class qI{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return nn(this.$.delete())}}class Qr extends N{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $t(r){return r.name==="IndexedDbTransactionError"}class zI{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V(Le,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(V(Le,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return V(Le,"ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V(Le,"GET",this.store.name,e,t),t))}delete(e){return V(Le,"DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return V(Le,"COUNT",this.store.name),nn(this.store.count())}j(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new w((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(n),o=[];return this.J(s,(c,u)=>{o.push(u)}).next(()=>o)}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}Y(e,t){V(Le,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const i=this.cursor(n);return this.J(i,(s,o,c)=>c.delete())}X(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.J(i,t)}ee(e){const t=this.cursor({});return new w((n,i)=>{t.onerror=s=>{const o=oc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}J(e,t){const n=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new qI(c),h=t(c.primaryKey,c.value,u);if(h instanceof w){const f=h.catch(m=>(u.done(),w.reject(m)));n.push(f)}u.isDone?i():u.W===null?c.continue():c.continue(u.W)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(r){return new w((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=oc(n.target.error);t(i)}})}let Ul=!1;function oc(r){const e=Mt.M(me());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ul||(Ul=!0,setTimeout(()=>{throw n},0)),n}}return r}const Xr="IndexBackfiller";class $I{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){V(Xr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.te.re();V(Xr,`Documents written: ${t}`)}catch(t){$t(t)?V(Xr,"Ignoring IndexedDB error during index backfill: ",t):await zt(t)}await this.ne(6e4)})}}class KI{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const n=new Set;let i=t,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V(Xr,`Processing collection: ${o}`),this.se(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(c=>(V(Xr,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}oe(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=of(s);sc(o,n)>0&&(n=o)}),new Be(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}xe.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=-1;function Zs(r){return r==null}function ai(r){return r===0&&1/r==-1/0}function lf(r){return typeof r=="number"&&Number.isInteger(r)&&!ai(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="";function Ce(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Bl(e)),e=GI(r.get(t),e);return Bl(e)}function GI(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case Vs:t+="";break;default:t+=s}}return t}function Bl(r){return r+Vs+""}function Qe(r){const e=r.length;if(U(e>=2,64408,{path:r}),e===2)return U(r.charAt(0)===Vs&&r.charAt(1)==="",56145,{path:r}),Y.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf(Vs,s);switch((o<0||o>t)&&M(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:M(61167,{path:r})}s=o+2}return new Y(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="remoteDocuments",Si="owner",Vn="owner",ci="mutationQueues",WI="userId",$e="mutations",jl="batchId",cn="userMutationsIndex",ql=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(r,e){return[r,Ce(e)]}function hf(r,e,t){return[r,Ce(e),t]}const HI={},Qn="documentMutations",Ds="remoteDocumentsV14",QI=["prefixPath","collectionGroup","readTime","documentId"],fs="documentKeyIndex",XI=["prefixPath","collectionGroup","documentId"],df="collectionGroupIndex",JI=["collectionGroup","readTime","prefixPath","documentId"],ui="remoteDocumentGlobal",_a="remoteDocumentGlobalKey",Xn="targets",ff="queryTargetsIndex",YI=["canonicalId","targetId"],Jn="targetDocuments",ZI=["targetId","path"],ac="documentTargetsIndex",ev=["path","targetId"],ks="targetGlobalKey",ln="targetGlobal",li="collectionParents",tv=["collectionId","parent"],Yn="clientMetadata",nv="clientId",eo="bundles",rv="bundleId",to="namedQueries",iv="name",cc="indexConfiguration",sv="indexId",ya="collectionGroupIndex",ov="collectionGroup",Jr="indexState",av=["indexId","uid"],pf="sequenceNumberIndex",cv=["uid","sequenceNumber"],Yr="indexEntries",uv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],mf="documentKeyIndex",lv=["indexId","uid","orderedDocumentKey"],no="documentOverlays",hv=["userId","collectionPath","documentId"],Ia="collectionPathOverlayIndex",dv=["userId","collectionPath","largestBatchId"],gf="collectionGroupOverlayIndex",fv=["userId","collectionGroup","largestBatchId"],uc="globals",pv="name",_f=[ci,$e,Qn,tn,Xn,Si,ln,Jn,Yn,ui,li,eo,to],mv=[..._f,no],yf=[ci,$e,Qn,Ds,Xn,Si,ln,Jn,Yn,ui,li,eo,to,no],If=yf,lc=[...If,cc,Jr,Yr],gv=lc,vf=[...lc,uc],_v=vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends cf{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function ge(r,e){const t=L(r);return Mt.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Kt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Tf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new ve(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(e){return new $l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ne(this.comparator);return t.data=e,t}}class $l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Dn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new ne(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ef("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const yv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(r){if(U(!!r,39018),typeof r=="string"){let e=0;const t=yv.exec(r);if(U(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ft(r){return typeof r=="string"?he.fromBase64String(r):he.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="server_timestamp",Af="__type__",bf="__previous_value__",Sf="__local_write_time__";function hc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Af])===null||t===void 0?void 0:t.stringValue)===wf}function ro(r){const e=r.mapValue.fields[bf];return hc(e)?ro(e):e}function hi(r){const e=dt(r.mapValue.fields[Sf].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t,n,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Ns="(default)";class yn{constructor(e,t){this.projectId=e,this.database=t||Ns}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===Ns}isEqual(e){return e instanceof yn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="__type__",Rf="__max__",Vt={mapValue:{fields:{__type__:{stringValue:Rf}}}},fc="__vector__",Zn="value",ps={nullValue:"NULL_VALUE"};function Ut(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hc(r)?4:Pf(r)?9007199254740991:io(r)?10:11:M(28295,{value:r})}function tt(r,e){if(r===e)return!0;const t=Ut(r);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return hi(r).isEqual(hi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dt(i.timestampValue),c=dt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return ft(i.bytesValue).isEqual(ft(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=oe(i.doubleValue),c=oe(s.doubleValue);return o===c?ai(o)===ai(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(zl(o)!==zl(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!tt(o[u],c[u])))return!1;return!0}(r,e);default:return M(52216,{left:r})}}function di(r,e){return(r.values||[]).find(t=>tt(t,e))!==void 0}function Bt(r,e){if(r===e)return 0;const t=Ut(r),n=Ut(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return function(s,o){const c=oe(s.integerValue||s.doubleValue),u=oe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return Kl(r.timestampValue,e.timestampValue);case 4:return Kl(hi(r),hi(e));case 5:return ma(r.stringValue,e.stringValue);case 6:return function(s,o){const c=ft(s),u=ft(o);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=q(c[h],u[h]);if(f!==0)return f}return q(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const c=q(oe(s.latitude),oe(o.latitude));return c!==0?c:q(oe(s.longitude),oe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Gl(r.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,h,f;const m=s.fields||{},_=o.fields||{},S=(c=m[Zn])===null||c===void 0?void 0:c.arrayValue,C=(u=_[Zn])===null||u===void 0?void 0:u.arrayValue,k=q(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Gl(S,C)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===Vt.mapValue&&o===Vt.mapValue)return 0;if(s===Vt.mapValue)return 1;if(o===Vt.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=ma(u[m],f[m]);if(_!==0)return _;const S=Bt(c[u[m]],h[f[m]]);if(S!==0)return S}return q(u.length,f.length)}(r.mapValue,e.mapValue);default:throw M(23264,{le:t})}}function Kl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=dt(r),n=dt(e),i=q(t.seconds,n.seconds);return i!==0?i:q(t.nanos,n.nanos)}function Gl(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Bt(t[i],n[i]);if(s)return s}return q(t.length,n.length)}function er(r){return Ta(r)}function Ta(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=dt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return ft(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Ta(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Ta(t.fields[o])}`;return i+"}"}(r.mapValue):M(61005,{value:r})}function ms(r){switch(Ut(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ro(r);return e?16+ms(e):16;case 5:return 2*r.stringValue.length;case 6:return ft(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+ms(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Kt(n.fields,(s,o)=>{i+=s.length+ms(o)}),i}(r.mapValue);default:throw M(13486,{value:r})}}function fi(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ea(r){return!!r&&"integerValue"in r}function pi(r){return!!r&&"arrayValue"in r}function Wl(r){return!!r&&"nullValue"in r}function Hl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function gs(r){return!!r&&"mapValue"in r}function io(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[dc])===null||t===void 0?void 0:t.stringValue)===fc}function Zr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Kt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Zr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Pf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Rf}const Cf={mapValue:{fields:{[dc]:{stringValue:fc},[Zn]:{arrayValue:{}}}}};function vv(r){return"nullValue"in r?ps:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?fi(yn.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?io(r)?Cf:{mapValue:{}}:M(35942,{value:r})}function Tv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?fi(yn.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Cf:"mapValue"in r?io(r)?{mapValue:{}}:Vt:M(61959,{value:r})}function Ql(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Xl(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zr(t)}setAll(e){let t=ae.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Zr(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];gs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Kt(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Pe(Zr(this.value))}}function Vf(r){const e=[];return Kt(r.fields,(t,n)=>{const i=new ae([t]);if(gs(n)){const s=Vf(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ue(e,0,j.min(),j.min(),j.min(),Pe.empty(),0)}static newFoundDocument(e,t,n,i){return new ue(e,1,t,j.min(),n,i,0)}static newNoDocument(e,t){return new ue(e,2,t,j.min(),j.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,j.min(),j.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.position=e,this.inclusive=t}}function Jl(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=O.comparator(O.fromName(o.referenceValue),t.key):n=Bt(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Yl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!tt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ev(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{}class Q extends Df{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new wv(e,t,n):t==="array-contains"?new Sv(e,n):t==="in"?new Lf(e,n):t==="not-in"?new Rv(e,n):t==="array-contains-any"?new Pv(e,n):new Q(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Av(e,n):new bv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bt(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends Df{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new te(e,t)}matches(e){return nr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function nr(r){return r.op==="and"}function wa(r){return r.op==="or"}function pc(r){return kf(r)&&nr(r)}function kf(r){for(const e of r.filters)if(e instanceof te)return!1;return!0}function Aa(r){if(r instanceof Q)return r.field.canonicalString()+r.op.toString()+er(r.value);if(pc(r))return r.filters.map(e=>Aa(e)).join(",");{const e=r.filters.map(t=>Aa(t)).join(",");return`${r.op}(${e})`}}function Nf(r,e){return r instanceof Q?function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&tt(n.value,i.value)}(r,e):r instanceof te?function(n,i){return i instanceof te&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&Nf(o,i.filters[c]),!0):!1}(r,e):void M(19439)}function xf(r,e){const t=r.filters.concat(e);return te.create(t,r.op)}function Of(r){return r instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${er(t.value)}`}(r):r instanceof te?function(t){return t.op.toString()+" {"+t.getFilters().map(Of).join(" ,")+"}"}(r):"Filter"}class wv extends Q{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Av extends Q{constructor(e,t){super(e,"in",t),this.keys=Mf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bv extends Q{constructor(e,t){super(e,"not-in",t),this.keys=Mf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class Sv extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pi(t)&&di(t.arrayValue,this.value)}}class Lf extends Q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class Rv extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!di(this.value.arrayValue,t)}}class Pv extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>di(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}}function ba(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Cv(r,e,t,n,i,s,o)}function In(r){const e=L(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Aa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>er(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>er(n)).join(",")),e.Pe=t}return e.Pe}function Ri(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Ev(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Nf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Yl(r.startAt,e.startAt)&&Yl(r.endAt,e.endAt)}function xs(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Os(r,e){return r.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function Zl(r,e,t){let n=ps,i=!0;for(const s of Os(r,e)){let o=ps,c=!0;switch(s.op){case"<":case"<=":o=vv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=ps}Ql({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Ql({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function eh(r,e,t){let n=Vt,i=!0;for(const s of Os(r,e)){let o=Vt,c=!0;switch(s.op){case">=":case">":o=Tv(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=Vt}Xl({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Xl({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Ff(r,e,t,n,i,s,o,c){return new mr(r,e,t,n,i,s,o,c)}function so(r){return new mr(r)}function th(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Uf(r){return r.collectionGroup!==null}function ei(r){const e=L(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ne(ae.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new mi(s,n))}),t.has(ae.keyField().canonicalString())||e.Te.push(new mi(ae.keyField(),n))}return e.Te}function Ue(r){const e=L(r);return e.Ie||(e.Ie=Vv(e,ei(r))),e.Ie}function Vv(r,e){if(r.limitType==="F")return ba(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new mi(i.field,s)});const t=r.endAt?new tr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new tr(r.startAt.position,r.startAt.inclusive):null;return ba(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Sa(r,e){const t=r.filters.concat([e]);return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ra(r,e,t){return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function oo(r,e){return Ri(Ue(r),Ue(e))&&r.limitType===e.limitType}function Bf(r){return`${In(Ue(r))}|lt:${r.limitType}`}function Ln(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Of(i)).join(", ")}]`),Zs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>er(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>er(i)).join(",")),`Target(${n})`}(Ue(r))}; limitType=${r.limitType})`}function Pi(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):O.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of ei(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,u){const h=Jl(o,c,u);return o.inclusive?h<=0:h<0}(n.startAt,ei(n),i)||n.endAt&&!function(o,c,u){const h=Jl(o,c,u);return o.inclusive?h>=0:h>0}(n.endAt,ei(n),i))}(r,e)}function jf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qf(r){return(e,t)=>{let n=!1;for(const i of ei(r)){const s=Dv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Dv(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?Bt(u,h):M(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Tf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new ie(O.comparator);function Fe(){return kv}const zf=new ie(O.comparator);function zr(...r){let e=zf;for(const t of r)e=e.insert(t.key,t);return e}function $f(r){let e=zf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Xe(){return ti()}function Kf(){return ti()}function ti(){return new mt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Nv=new ie(O.comparator),xv=new ne(O.comparator);function K(...r){let e=xv;for(const t of r)e=e.add(t);return e}const Ov=new ne(q);function mc(){return Ov}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function Gf(r){return{integerValue:""+r}}function Mv(r,e){return lf(e)?Gf(e):gc(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this._=void 0}}function Lv(r,e,t){return r instanceof rr?function(i,s){const o={fields:{[Af]:{stringValue:wf},[Sf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hc(s)&&(s=ro(s)),s&&(o.fields[bf]=s),{mapValue:o}}(t,e):r instanceof ir?Hf(r,e):r instanceof sr?Qf(r,e):function(i,s){const o=Wf(i,s),c=nh(o)+nh(i.Ee);return Ea(o)&&Ea(i.Ee)?Gf(c):gc(i.serializer,c)}(r,e)}function Fv(r,e,t){return r instanceof ir?Hf(r,e):r instanceof sr?Qf(r,e):t}function Wf(r,e){return r instanceof gi?function(n){return Ea(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class rr extends ao{}class ir extends ao{constructor(e){super(),this.elements=e}}function Hf(r,e){const t=Xf(e);for(const n of r.elements)t.some(i=>tt(i,n))||t.push(n);return{arrayValue:{values:t}}}class sr extends ao{constructor(e){super(),this.elements=e}}function Qf(r,e){let t=Xf(e);for(const n of r.elements)t=t.filter(i=>!tt(i,n));return{arrayValue:{values:t}}}class gi extends ao{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function nh(r){return oe(r.integerValue||r.doubleValue)}function Xf(r){return pi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.field=e,this.transform=t}}function Uv(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof ir&&i instanceof ir||n instanceof sr&&i instanceof sr?Wn(n.elements,i.elements,tt):n instanceof gi&&i instanceof gi?tt(n.Ee,i.Ee):n instanceof rr&&i instanceof rr}(r.transform,e.transform)}class Bv{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _s(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class co{}function Yf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new uo(r.key,ke.none()):new gr(r.key,r.data,ke.none());{const t=r.data,n=Pe.empty();let i=new ne(ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new gt(r.key,n,new Oe(i.toArray()),ke.none())}}function jv(r,e,t){r instanceof gr?function(i,s,o){const c=i.value.clone(),u=ih(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof gt?function(i,s,o){if(!_s(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=ih(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Zf(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ni(r,e,t,n){return r instanceof gr?function(s,o,c,u){if(!_s(s.precondition,o))return c;const h=s.value.clone(),f=sh(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof gt?function(s,o,c,u){if(!_s(s.precondition,o))return c;const h=sh(s.fieldTransforms,u,o),f=o.data;return f.setAll(Zf(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,o,c){return _s(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function qv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Wf(n.transform,i||null);s!=null&&(t===null&&(t=Pe.empty()),t.set(n.field,s))}return t||null}function rh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Wn(n,i,(s,o)=>Uv(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class gr extends co{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gt extends co{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function ih(r,e,t){const n=new Map;U(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,Fv(o,c,t[i]))}return n}function sh(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Lv(s,o,e))}return n}class uo extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ep extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ni(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ni(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Kf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=Yf(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>rh(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>rh(t,n))}}class yc{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){U(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=function(){return Nv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new yc(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,X;function $v(r){switch(r){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function tp(r){if(r===void 0)return le("GRPC error has no .code"),P.UNKNOWN;switch(r){case de.OK:return P.OK;case de.CANCELLED:return P.CANCELLED;case de.UNKNOWN:return P.UNKNOWN;case de.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case de.INTERNAL:return P.INTERNAL;case de.UNAVAILABLE:return P.UNAVAILABLE;case de.UNAUTHENTICATED:return P.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case de.NOT_FOUND:return P.NOT_FOUND;case de.ALREADY_EXISTS:return P.ALREADY_EXISTS;case de.PERMISSION_DENIED:return P.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case de.ABORTED:return P.ABORTED;case de.OUT_OF_RANGE:return P.OUT_OF_RANGE;case de.UNIMPLEMENTED:return P.UNIMPLEMENTED;case de.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:r})}}(X=de||(de={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new Ot([4294967295,4294967295],0);function oh(r){const e=ef().encode(r),t=new Wd;return t.update(e),new Uint8Array(t.digest())}function ah(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ot([t,n],0),new Ot([i,s],0)]}class vc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $r(`Invalid padding: ${t}`);if(n<0)throw new $r(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new $r(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ot.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(Ot.fromNumber(n)));return i.compare(Kv)===1&&(i=new Ot([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=oh(e),[n,i]=ah(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vc(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;const t=oh(e),[n,i]=ah(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ci(j.min(),i,new ie(q),Fe(),K())}}class Vi{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Vi(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class np{constructor(e,t){this.targetId=e,this.De=t}}class rp{constructor(e,t,n=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ch{constructor(){this.ve=0,this.Ce=uh(),this.Fe=he.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),n=K();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:s})}}),new Vi(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=uh()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Gv{constructor(e){this.We=e,this.Ge=new Map,this.ze=Fe(),this.je=ts(),this.Je=ts(),this.He=new ie(q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((n,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(xs(s))if(n===0){const o=new O(s.path);this.Xe(t,o,ue.newNoDocument(o,j.min()))}else U(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const c=this._t(e),u=c?this.ut(c,e,o):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=ft(n).toUint8Array()}catch(u){if(u instanceof Ef)return Ft("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new vc(o,i,s)}catch(u){return Ft(u instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const c=this.st(o);if(c){if(s.current&&xs(c.target)){const u=new O(c.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,ue.newNoDocument(u,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let n=K();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Ci(e,t,this.He,this.ze,n);return this.ze=Fe(),this.je=ts(),this.Je=ts(),this.He=new ie(q),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ch,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ne(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ne(q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ch),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ts(){return new ie(O.comparator)}function uh(){return new ie(O.comparator)}const Wv={asc:"ASCENDING",desc:"DESCENDING"},Hv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qv={and:"AND",or:"OR"};class Xv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pa(r,e){return r.useProto3Json||Zs(e)?e:{value:e}}function or(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ip(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Jv(r,e){return or(r,e.toTimestamp())}function Ne(r){return U(!!r,49232),j.fromTimestamp(function(t){const n=dt(t);return new ee(n.seconds,n.nanos)}(r))}function Tc(r,e){return Ca(r,e).canonicalString()}function Ca(r,e){const t=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function sp(r){const e=Y.fromString(r);return U(pp(e),10190,{key:e.toString()}),e}function Ms(r,e){return Tc(r.databaseId,e.path)}function hn(r,e){const t=sp(e);if(t.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(cp(t))}function op(r,e){return Tc(r.databaseId,e)}function ap(r){const e=sp(r);return e.length===4?Y.emptyPath():cp(e)}function Va(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cp(r){return U(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function lh(r,e,t){return{name:Ms(r,e),fields:t.value.mapValue.fields}}function Yv(r,e,t){const n=hn(r,e.name),i=Ne(e.updateTime),s=e.createTime?Ne(e.createTime):j.min(),o=new Pe({mapValue:{fields:e.fields}}),c=ue.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Zv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),he.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),he.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?P.UNKNOWN:tp(h.code);return new N(f,h.message||"")}(o);t=new rp(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=hn(r,n.document.name),s=Ne(n.document.updateTime),o=n.document.createTime?Ne(n.document.createTime):j.min(),c=new Pe({mapValue:{fields:n.document.fields}}),u=ue.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ys(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=hn(r,n.document),s=n.readTime?Ne(n.readTime):j.min(),o=ue.newNoDocument(i,s),c=n.removedTargetIds||[];t=new ys([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=hn(r,n.document),s=n.removedTargetIds||[];t=new ys([],s,i,null)}else{if(!("filter"in e))return M(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new zv(i,s),c=n.targetId;t=new np(c,o)}}return t}function Ls(r,e){let t;if(e instanceof gr)t={update:lh(r,e.key,e.value)};else if(e instanceof uo)t={delete:Ms(r,e.key)};else if(e instanceof gt)t={update:lh(r,e.key,e.data),updateMask:sT(e.fieldMask)};else{if(!(e instanceof ep))return M(16599,{Rt:e.type});t={verify:Ms(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const c=o.transform;if(c instanceof rr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ir)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gi)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Jv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)}(r,e.precondition)),t}function Da(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ke.updateTime(Ne(s.updateTime)):s.exists!==void 0?ke.exists(s.exists):ke.none()}(e.currentDocument):ke.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new rr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new ir(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new sr(f)}else"increment"in c?u=new gi(o,c.increment):M(16584,{proto:c});const h=ae.fromServerFormat(c.fieldPath);return new Jf(h,u)}(r,i)):[];if(e.update){e.update.name;const i=hn(r,e.update.name),s=new Pe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Oe(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new gt(i,s,o,t,n)}return new gr(i,s,t,n)}if(e.delete){const i=hn(r,e.delete);return new uo(i,t)}if(e.verify){const i=hn(r,e.verify);return new ep(i,t)}return M(1463,{proto:e})}function eT(r,e){return r&&r.length>0?(U(e!==void 0,14353),r.map(t=>function(i,s){let o=i.updateTime?Ne(i.updateTime):Ne(s);return o.isEqual(j.min())&&(o=Ne(s)),new Bv(o,i.transformResults||[])}(t,e))):[]}function up(r,e){return{documents:[op(r,e.path)]}}function lp(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=op(r,i);const s=function(h){if(h.length!==0)return fp(te.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Fn(_.field),direction:nT(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Pa(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:i}}function hp(r){let e=ap(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){U(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const _=dp(m);return _ instanceof te&&pc(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(C){return new mi(Un(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,Zs(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(m){const _=!!m.before,S=m.values||[];return new tr(S,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,S=m.values||[];return new tr(S,_)}(t.endAt)),Ff(e,i,o,s,c,"F",u,h)}function tT(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Un(t.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Un(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Un(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Un(t.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(t){return Q.create(Un(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return te.create(t.compositeFilter.filters.map(n=>dp(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(r):M(30097,{filter:r})}function nT(r){return Wv[r]}function rT(r){return Hv[r]}function iT(r){return Qv[r]}function Fn(r){return{fieldPath:r.canonicalString()}}function Un(r){return ae.fromServerFormat(r.fieldPath)}function fp(r){return r instanceof Q?function(t){if(t.op==="=="){if(Hl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:rT(t.op),value:t.value}}}(r):r instanceof te?function(t){const n=t.getFilters().map(i=>fp(i));return n.length===1?n[0]:{compositeFilter:{op:iT(t.op),filters:n}}}(r):M(54877,{filter:r})}function sT(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,n,i,s=j.min(),o=j.min(),c=he.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new at(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.gt=e}}function oT(r,e){let t;if(e.document)t=Yv(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),i=Tn(e.noDocument.readTime);t=ue.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M(56709);{const n=O.fromSegments(e.unknownDocument.path),i=Tn(e.unknownDocument.version);t=ue.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ee(i[0],i[1]);return j.fromTimestamp(s)}(e.readTime)),t}function hh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:Ms(s,o.key),fields:o.data.value.mapValue.fields,updateTime:or(s,o.version.toTimestamp()),createTime:or(s,o.createTime.toTimestamp())}}(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:vn(e.version)};else{if(!e.isUnknownDocument())return M(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:vn(e.version)}}return n}function Fs(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function vn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Tn(r){const e=new ee(r.seconds,r.nanoseconds);return j.fromTimestamp(e)}function rn(r,e){const t=(e.baseMutations||[]).map(s=>Da(r.gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Da(r.gt,s)),i=ee.fromMillis(e.localWriteTimeMs);return new _c(e.batchId,i,t,n)}function Kr(r){const e=Tn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Tn(r.lastLimboFreeSnapshotVersion):j.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){const o=s.documents.length;return U(o===1,1966,{count:o}),Ue(so(ap(s.documents[0])))}(r.query):function(s){return Ue(hp(s))}(r.query),new at(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,he.fromBase64String(r.resumeToken))}function gp(r,e){const t=vn(e.snapshotVersion),n=vn(e.lastLimboFreeSnapshotVersion);let i;i=xs(e.target)?up(r.gt,e.target):lp(r.gt,e.target).Vt;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:In(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function _p(r){const e=hp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ra(e,e.limit,"L"):e}function Yo(r,e){return new Ic(e.largestBatchId,Da(r.gt,e.overlayMutation))}function dh(r,e){const t=e.path.lastSegment();return[r,Ce(e.path.popLast()),t]}function fh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:vn(n.readTime),documentKey:Ce(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{getBundleMetadata(e,t){return ph(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:Tn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return ph(e).put(function(i){return{bundleId:i.id,createTime:vn(Ne(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return mh(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:_p(s.bundledQuery),readTime:Tn(s.readTime)}}(n)})}saveNamedQuery(e,t){return mh(e).put(function(i){return{name:i.name,readTime:vn(Ne(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function ph(r){return ge(r,eo)}function mh(r){return ge(r,to)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new lo(e,n)}getOverlay(e,t){return Lr(e).get(dh(this.userId,t)).next(n=>n?Yo(this.serializer,n):null)}getOverlays(e,t){const n=Xe();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const c=new Ic(t,o);i.push(this.wt(e,c))}),w.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(Ce(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Lr(e).Y(Ia,c))}),w.waitFor(s)}getOverlaysForCollection(e,t,n){const i=Xe(),s=Ce(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Lr(e).j(Ia,o).next(c=>{for(const u of c){const h=Yo(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=Xe();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Lr(e).X({index:gf,range:c},(u,h,f)=>{const m=Yo(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return Lr(e).put(function(i,s,o){const[c,u,h]=dh(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ls(i.gt,o.mutation)}}(this.serializer,this.userId,t))}}function Lr(r){return ge(r,no)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{St(e){return ge(e,uc)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?he.fromUint8Array(n):he.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),ai(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=dt(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(ft(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Pf(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):io(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):M(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const i of Object.keys(n))this.xt(i,t),this.Dt(n[i],t)}Lt(e,t){var n,i;const s=e.fields||{};this.Ct(t,53);const o=Zn,c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(oe(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const i of n)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),O.fromName(e).path.forEach(n=>{this.Ct(t,60),this.$t(n,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}sn.Ut=new sn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=255;function uT(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function gh(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=uT(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class lT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){const t=this.Xt(e),n=gh(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){const t=this.Xt(e),n=gh(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(kn),this.rn(255)}sn(){this._n(kn),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===kn?(this.rn(kn),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===kn?(this._n(kn),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class hT{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class dT{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Fr{constructor(){this.un=new lT,this.cn=new hT(this.un),this.ln=new dT(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,n,i){this.Pn=e,this.Tn=t,this.In=n,this.dn=i}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new on(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Is(this.In),directionalValue:Is(this.dn),orderedDocumentKey:Is(t),documentKey:n.path.toArray()}}Rn(e,t,n){const i=this.An(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Et(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=_h(r.In,e.In),t!==0?t:(t=_h(r.dn,e.dn),t!==0?t:O.comparator(r.Tn,e.Tn)))}function _h(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Is(r){return ud()?function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n}(r):r}function yh(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(r)}class Ih{constructor(e){this.Vn=new ne((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(U(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=ga(e);if(t!==void 0&&!this.yn(t))return!1;const n=en(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.yn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.wn(c,u)||!this.Sn(this.mn[o++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new ne(ae.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new hs(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new hs(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new hs(n.field,n.dir==="asc"?0:1)));return new Cs(Cs.UNKNOWN_ID,this.collectionId,t,oi.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(r){var e,t;if(U(r instanceof Q||r instanceof te,20012),r instanceof Q){if(r instanceof Lf){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(r.field,"==",s)))||[];return te.create(i,"or")}return r}const n=r.filters.map(i=>yp(i));return te.create(n,r.op)}function fT(r){if(r.getFilters().length===0)return[];const e=xa(yp(r));return U(Ip(e),7391),ka(e)||Na(e)?[e]:e.getFilters()}function ka(r){return r instanceof Q}function Na(r){return r instanceof te&&pc(r)}function Ip(r){return ka(r)||Na(r)||function(t){if(t instanceof te&&wa(t)){for(const n of t.getFilters())if(!ka(n)&&!Na(n))return!1;return!0}return!1}(r)}function xa(r){if(U(r instanceof Q||r instanceof te,34018),r instanceof Q)return r;if(r.filters.length===1)return xa(r.filters[0]);const e=r.filters.map(n=>xa(n));let t=te.create(e,r.op);return t=Us(t),Ip(t)?t:(U(t instanceof te,64498),U(nr(t),40251),U(t.filters.length>1,57927),t.filters.reduce((n,i)=>Ec(n,i)))}function Ec(r,e){let t;return U(r instanceof Q||r instanceof te,38388),U(e instanceof Q||e instanceof te,25473),t=r instanceof Q?e instanceof Q?function(i,s){return te.create([i,s],"and")}(r,e):vh(r,e):e instanceof Q?vh(e,r):function(i,s){if(U(i.filters.length>0&&s.filters.length>0,48005),nr(i)&&nr(s))return xf(i,s.getFilters());const o=wa(i)?i:s,c=wa(i)?s:i,u=o.filters.map(h=>Ec(h,c));return te.create(u,"or")}(r,e),Us(t)}function vh(r,e){if(nr(e))return xf(e,r.getFilters());{const t=e.filters.map(n=>Ec(r,n));return te.create(t,"or")}}function Us(r){if(U(r instanceof Q||r instanceof te,11850),r instanceof Q)return r;const e=r.getFilters();if(e.length===1)return Us(e[0]);if(kf(r))return r;const t=e.map(i=>Us(i)),n=[];return t.forEach(i=>{i instanceof Q?n.push(i):i instanceof te&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:te.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.Dn=new wc}addToCollectionParentIndex(e,t){return this.Dn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(Be.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(Be.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class wc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ne(Y.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ne(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="IndexedDbIndexManager",ns=new Uint8Array(0);class mT{constructor(e,t){this.databaseId=t,this.vn=new wc,this.Cn=new mt(n=>In(n),(n,i)=>Ri(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:n,parent:Ce(i)};return Eh(e).put(s)}return w.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[tf(t),""],!1,!0);return Eh(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(Qe(o.parent))}return n})}addFieldIndex(e,t){const n=Ur(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=xn(e);return s.next(c=>{o.put(fh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Ur(e),i=xn(e),s=Nn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ur(e),n=Nn(e),i=xn(e);return t.Y().next(()=>n.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return w.forEach(this.Fn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Ih(n).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Nn(e);let i=!0;const s=new Map;return w.forEach(this.Fn(t),o=>this.Mn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=K();const c=[];return w.forEach(s,(u,h)=>{V(Th,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(u)} to execute ${In(t)}`);const f=function(F,W){const Z=ga(W);if(Z===void 0)return null;for(const G of Os(F,Z.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(h,u),m=function(F,W){const Z=new Map;for(const G of en(W))for(const v of Os(F,G.fieldPath))switch(v.op){case"==":case"in":Z.set(G.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return Z.set(G.fieldPath.canonicalString(),v.value),Array.from(Z.values())}return null}(h,u),_=function(F,W){const Z=[];let G=!0;for(const v of en(W)){const g=v.kind===0?Zl(F,v.fieldPath,F.startAt):eh(F,v.fieldPath,F.startAt);Z.push(g.value),G&&(G=g.inclusive)}return new tr(Z,G)}(h,u),S=function(F,W){const Z=[];let G=!0;for(const v of en(W)){const g=v.kind===0?eh(F,v.fieldPath,F.endAt):Zl(F,v.fieldPath,F.endAt);Z.push(g.value),G&&(G=g.inclusive)}return new tr(Z,G)}(h,u),C=this.xn(u,h,_),k=this.xn(u,h,S),D=this.On(u,h,m),$=this.Nn(u.indexId,f,C,_.inclusive,k,S.inclusive,D);return w.forEach($,B=>n.H(B,t.limit).next(F=>{F.forEach(W=>{const Z=O.fromSegments(W.documentKey);o.has(Z)||(o=o.add(Z),c.push(Z))})}))}).next(()=>c)}return w.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=fT(te.create(e.filters,"and")).map(n=>ba(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,n,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const _=t?this.Bn(t[m/h]):ns,S=this.Ln(e,_,n[m%h],i),C=this.kn(e,_,s[m%h],o),k=c.map(D=>this.Ln(e,_,D,!0));f.push(...this.createRange(S,C,k))}return f}Ln(e,t,n,i){const s=new on(e,O.empty(),t,n);return i?s:s.En()}kn(e,t,n,i){const s=new on(e,O.empty(),t,n);return i?s.En():s}Mn(e,t){const n=new Ih(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)n.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const i=this.Fn(t);return w.forEach(i,s=>this.Mn(e,s).next(o=>{o?n!==0&&o.fields.length<function(u){let h=new ne(ae.comparator),f=!1;for(const m of u.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}qn(e,t){const n=new Fr;for(const i of en(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.hn(i.kind);sn.Ut.bt(s,o)}return n.an()}Bn(e){const t=new Fr;return sn.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Fr;return sn.Ut.bt(fi(this.databaseId,t),n.hn(function(s){const o=en(s);return o.length===0?0:o[o.length-1].kind}(e))),n.an()}On(e,t,n){if(n===null)return[];let i=[];i.push(new Fr);let s=0;for(const o of en(e)){const c=n[s++];for(const u of i)if(this.$n(t,o.fieldPath)&&pi(c))i=this.Un(i,o,c);else{const h=u.hn(o.kind);sn.Ut.bt(c,h)}}return this.Kn(i)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const u=new Fr;u.seed(c.an()),sn.Ut.bt(o,u.hn(t.kind)),s.push(u)}return s}$n(e,t){return!!e.filters.find(n=>n instanceof Q&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ur(e),i=xn(e);return(t?n.j(ya,IDBKeyRange.bound(t,t)):n.j()).next(s=>{const o=[];return w.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const _=m?new oi(m.sequenceNumber,new Be(Tn(m.readTime),new O(Qe(m.documentKey)),m.largestBatchId)):oi.empty(),S=f.fields.map(([C,k])=>new hs(ae.fromServerFormat(C),k));return new Cs(f.indexId,f.collectionGroup,S,_)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:q(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Ur(e),s=xn(e);return this.Wn(e).next(o=>i.j(ya,IDBKeyRange.bound(t,t)).next(c=>w.forEach(c,u=>s.put(fh(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),w.forEach(c,u=>this.Gn(e,i,u).next(h=>{const f=this.zn(s,u);return h.isEqual(f)?w.resolve():this.jn(e,s,u,h,f)}))))})}Jn(e,t,n,i){return Nn(e).put(i.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,i){return Nn(e).delete(i.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const i=Nn(e);let s=new ne(Et);return i.X({index:mf,range:IDBKeyRange.only([n.indexId,this.uid,Is(this.Qn(n,t))])},(o,c)=>{s=s.add(new on(n.indexId,t,yh(c.arrayValue),yh(c.directionalValue)))}).next(()=>s)}zn(e,t){let n=new ne(Et);const i=this.qn(t,e);if(i==null)return n;const s=ga(t);if(s!=null){const o=e.data.field(s.fieldPath);if(pi(o))for(const c of o.arrayValue.values||[])n=n.add(new on(t.indexId,e.key,this.Bn(c),i))}else n=n.add(new on(t.indexId,e.key,ns,i));return n}jn(e,t,n,i,s){V(Th,"Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,m,_){const S=u.getIterator(),C=h.getIterator();let k=Dn(S),D=Dn(C);for(;k||D;){let $=!1,B=!1;if(k&&D){const F=f(k,D);F<0?B=!0:F>0&&($=!0)}else k!=null?B=!0:$=!0;$?(m(D),D=Dn(C)):B?(_(k),k=Dn(S)):(k=Dn(S),D=Dn(C))}}(i,s,Et,c=>{o.push(this.Jn(e,t,n,c))},c=>{o.push(this.Hn(e,t,n,c))}),w.waitFor(o)}Wn(e){let t=1;return xn(e).X({index:pf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Et(o,c)).filter((o,c,u)=>!c||Et(o,u[c-1])!==0);const i=[];i.push(e);for(const o of n){const c=Et(o,e),u=Et(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];const c=i[o].Rn(this.uid,ns,O.empty()),u=i[o+1].Rn(this.uid,ns,O.empty());s.push(IDBKeyRange.bound(c,u))}return s}Yn(e,t){return Et(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(wh)}getMinOffset(e,t){return w.mapArray(this.Fn(t),n=>this.Mn(e,n).next(i=>i||M(44426))).next(wh)}}function Eh(r){return ge(r,li)}function Nn(r){return ge(r,Yr)}function Ur(r){return ge(r,cc)}function xn(r){return ge(r,Jr)}function wh(r){U(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;sc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Be(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vp=41943040;class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(r,e,t){const n=r.store($e),i=r.store(Qn),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n.X({range:o},(f,m,_)=>(c++,_.delete()));s.push(u.next(()=>{U(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const m=hf(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return w.waitFor(s).next(()=>h)}function Bs(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(vp,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);class ho{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Zn={}}static yt(e,t,n,i){U(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new ho(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return wt(e).X({index:cn,range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Bn(e),o=wt(e);return o.add({}).next(c=>{U(typeof c=="number",49019);const u=new _c(c,t,n,i),h=function(S,C,k){const D=k.baseMutations.map(B=>Ls(S.gt,B)),$=k.mutations.map(B=>Ls(S.gt,B));return{userId:C,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:$}}(this.serializer,this.userId,u),f=[];let m=new ne((_,S)=>q(_.canonicalString(),S.canonicalString()));for(const _ of i){const S=hf(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(S,HI))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),w.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return wt(e).get(t).next(n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),rn(this.serializer,n)):null)}Xn(e,t){return this.Zn[t]?w.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return wt(e).X({index:cn,range:i},(o,c,u)=>{c.userId===this.userId&&(U(c.batchId>=n,47524,{er:n}),s=rn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=un;return wt(e).X({index:cn,range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,un],[this.userId,Number.POSITIVE_INFINITY]);return wt(e).j(cn,t).next(n=>n.map(i=>rn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ds(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Bn(e).X({range:i},(o,c,u)=>{const[h,f,m]=o,_=Qe(f);if(h===this.userId&&t.path.isEqual(_))return wt(e).get(m).next(S=>{if(!S)throw M(61480,{tr:o,batchId:m});U(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:m}),s.push(rn(this.serializer,S))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne(q);const i=[];return t.forEach(s=>{const o=ds(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=Bn(e).X({range:c},(h,f,m)=>{const[_,S,C]=h,k=Qe(S);_===this.userId&&s.path.isEqual(k)?n=n.add(C):m.done()});i.push(u)}),w.waitFor(i).next(()=>this.nr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=ds(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new ne(q);return Bn(e).X({range:o},(u,h,f)=>{const[m,_,S]=u,C=Qe(_);m===this.userId&&n.isPrefixOf(C)?C.length===i&&(c=c.add(S)):f.done()}).next(()=>this.nr(e,c))}nr(e,t){const n=[],i=[];return t.forEach(s=>{i.push(wt(e).get(s).next(o=>{if(o===null)throw M(35274,{batchId:s});U(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),n.push(rn(this.serializer,o))}))}),w.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Tp(e.ce,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),w.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Bn(e).X({range:n},(s,o,c)=>{if(s[0]===this.userId){const u=Qe(s[1]);i.push(u)}else c.done()}).next(()=>{U(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return Ep(e,this.userId,t)}sr(e){return wp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:un,lastStreamToken:""})}}function Ep(r,e,t){const n=ds(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return Bn(r).X({range:s,Z:!0},(c,u,h)=>{const[f,m,_]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function wt(r){return ge(r,$e)}function Bn(r){return ge(r,Qn)}function wp(r){return ge(r,ci)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new En(0)}static ur(){return new En(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const n=new En(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>j.fromTimestamp(new ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>On(e).delete(t.targetId)).next(()=>this.cr(e)).next(n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return On(e).X((o,c)=>{const u=Kr(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,t){return On(e).X((n,i)=>{const s=Kr(i);t(s)})}cr(e){return bh(e).get(ks).next(t=>(U(t!==null,2888),t))}lr(e,t){return bh(e).put(ks,t)}hr(e,t){return On(e).put(gp(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=In(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return On(e).X({range:i,index:ff},(o,c,u)=>{const h=Kr(c);Ri(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=Ct(e);return t.forEach(o=>{const c=Ce(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),w.waitFor(i)}removeMatchingKeys(e,t,n){const i=Ct(e);return w.forEach(t,s=>{const o=Ce(s.path);return w.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=Ct(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ct(e);let s=K();return i.X({range:n,Z:!0},(o,c,u)=>{const h=Qe(o[1]),f=new O(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Ce(t.path),i=IDBKeyRange.bound([n],[tf(n)],!1,!0);let s=0;return Ct(e).X({index:ac,Z:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}Et(e,t){return On(e).get(t).next(n=>n?Kr(n):null)}}function On(r){return ge(r,Xn)}function bh(r){return ge(r,ln)}function Ct(r){return ge(r,Jn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="LruGarbageCollector",Ap=1048576;function Rh([r,e],[t,n]){const i=q(r,t);return i===0?q(e,n):i}class _T{constructor(e){this.Tr=e,this.buffer=new ne(Rh),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Rh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bp{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(Sh,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$t(t)?V(Sh,"Ignoring IndexedDB error during garbage collection: ",t):await zt(t)}await this.Rr(3e5)})}}class yT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(xe.ue);const n=new _T(t);return this.Vr.forEachTarget(e,i=>n.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>n.Er(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Ah)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ah):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Mn()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Sp(r,e){return new yT(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,t){this.db=e,this.garbageCollector=Sp(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}yr(e){let t=0;return this.gr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(n,i)=>t(i))}addReference(e,t,n){return rs(e,n)}removeReference(e,t,n){return rs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return rs(e,t)}Sr(e,t){return function(i,s){let o=!1;return wp(i).ee(c=>Ep(i,c,s).next(u=>(u&&(o=!0),w.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(e,(o,c)=>{if(c<=t){const u=this.Sr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,j.min()),Ct(e).delete(function(m){return[0,Ce(m.path)]}(o))))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return rs(e,t)}wr(e,t){const n=Ct(e);let i,s=xe.ue;return n.X({index:ac},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==xe.ue&&t(new O(Qe(i)),s),s=h,i=u):s=xe.ue}).next(()=>{s!==xe.ue&&t(new O(Qe(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function rs(r,e){return Ct(r).put(function(n,i){return{targetId:0,path:Ce(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.changes=new mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Yt(e).put(n)}removeEntry(e,t,n){return Yt(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Fs(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=ue.newInvalidDocument(t);return Yt(e).X({index:fs,range:IDBKeyRange.only(Br(t))},(i,s)=>{n=this.Dr(t,s)}).next(()=>n)}vr(e,t){let n={size:0,document:ue.newInvalidDocument(t)};return Yt(e).X({index:fs,range:IDBKeyRange.only(Br(t))},(i,s)=>{n={document:this.Dr(t,s),size:Bs(s)}}).next(()=>n)}getEntries(e,t){let n=Fe();return this.Cr(e,t,(i,s)=>{const o=this.Dr(i,s);n=n.insert(i,o)}).next(()=>n)}Fr(e,t){let n=Fe(),i=new ie(O.comparator);return this.Cr(e,t,(s,o)=>{const c=this.Dr(s,o);n=n.insert(s,c),i=i.insert(s,Bs(o))}).next(()=>({documents:n,Mr:i}))}Cr(e,t,n){if(t.isEmpty())return w.resolve();let i=new ne(Vh);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Br(i.first()),Br(i.last())),o=i.getIterator();let c=o.getNext();return Yt(e).X({index:fs,range:s},(u,h,f)=>{const m=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Vh(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.G(Br(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Fs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yt(e).j(IDBKeyRange.bound(c,u,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Fe();for(const m of h){const _=this.Dr(O.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(Pi(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Fe();const o=Ch(t,n),c=Ch(t,Be.max());return Yt(e).X({index:df,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const m=this.Dr(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new TT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ph(e).get(_a).next(t=>(U(!!t,20021),t))}br(e,t){return Ph(e).put(_a,t)}Dr(e,t){if(t){const n=oT(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(j.min())))return n}return ue.newInvalidDocument(e)}}function Pp(r){return new vT(r)}class TT extends Rp{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new mt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ne((s,o)=>q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=hh(this.Or.serializer,o);i=i.add(s.path.popLast());const h=Bs(u);n+=h-c.size,t.push(this.Or.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=hh(this.Or.serializer,o.convertToNoDocument(j.min()));t.push(this.Or.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:n,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function Ph(r){return ge(r,ui)}function Yt(r){return ge(r,Ds)}function Br(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ch(r,e){const t=e.documentKey.path.toArray();return[r,Fs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Vh(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=q(t[s],n[s]),i)return i;return i=q(t.length,n.length),i||(i=q(t[t.length-2],n[n.length-2]),i||q(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&ni(n.mutation,i,Oe.empty(),ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,K()).next(()=>n))}getLocalViewOfDocuments(e,t,n=K()){const i=Xe();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=zr();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Xe();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,K()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=Fe();const o=ti(),c=function(){return ti()}();return t.forEach((u,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof gt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ni(f.mutation,h,f.mutation.getFieldMask(),ee.now())):o.set(h.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new ET(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const n=ti();let i=new ie((o,c)=>o-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||Oe.empty();f=c.applyToLocalView(h,f),n.set(u,f);const m=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Kf();f.forEach(_=>{if(!s.has(_)){const S=Yf(t.get(_),n.get(_));S!==null&&m.set(_,S),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return w.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Uf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):w.resolve(Xe());let c=Hn,u=s;return o.next(h=>w.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:c,changes:$f(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let i=zr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=zr();return this.indexManager.getCollectionParents(e,s).next(c=>w.forEach(c,u=>{const h=function(m,_){return new mr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ue.newInvalidDocument(f)))});let c=zr();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ni(f.mutation,h,Oe.empty(),ee.now()),Pi(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return w.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ne(i.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:_p(i.bundledQuery),readTime:Ne(i.readTime)}}(t)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.overlays=new ie(O.comparator),this.kr=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Xe();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.wt(e,t,s)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const i=Xe(),s=t.length+1,o=new O(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ie((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=Xe(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Xe(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return w.resolve(c)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ic(t,n));let s=this.kr.get(t);s===void 0&&(s=K(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.qr=new ne(_e.Qr),this.$r=new ne(_e.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new _e(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new _e(e,t))}Gr(e,t){e.forEach(n=>this.removeReference(n,t))}zr(e){const t=new O(new Y([])),n=new _e(t,e),i=new _e(t,e+1),s=[];return this.$r.forEachInRange([n,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new O(new Y([])),n=new _e(t,e),i=new _e(t,e+1);let s=K();return this.$r.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new _e(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class _e{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return O.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ne(_e.Qr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _c(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.Yr=this.Yr.add(new _e(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,t){return w.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?un:this.er-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],o=>{const c=this.Zr(o.Hr);s.push(c)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne(q);return t.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{n=n.add(c.Hr)})}),w.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;O.isDocumentKey(s)||(s=s.child(""));const o=new _e(new O(s),0);let c=new ne(q);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)},o),w.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(n=>{const i=this.Zr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){U(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return w.forEach(t.mutations,i=>{const s=new _e(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new _e(t,0),i=this.Yr.firstAfterOrEqual(n);return w.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.ni=e,this.docs=function(){return new ie(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(t))}getEntries(e,t){let n=Fe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ue.newInvalidDocument(i))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Fe();const o=t.path,c=new O(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||sc(of(f),n)<=0||(i.has(f.key)||Pi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M(9500)}ri(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new PT(this)}getSize(e){return w.resolve(this.size)}}class PT extends Rp{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.persistence=e,this.ii=new mt(t=>In(t),Ri),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new Ac,this.targetCount=0,this._i=En.ar()}forEachTarget(e,t){return this.ii.forEach((n,i)=>t(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),w.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new En(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.hr(t),w.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.ai={},this.overlays={},this.ui=new xe(0),this.ci=!1,this.ci=!0,this.li=new bT,this.referenceDelegate=e(this),this.hi=new CT(this),this.indexManager=new pT,this.remoteDocumentCache=function(i){return new RT(i)}(n=>this.referenceDelegate.Pi(n)),this.serializer=new mp(t),this.Ti=new wT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new AT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new ST(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new VT(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return w.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class VT extends cf{constructor(e){super(),this.currentSequenceNumber=e}}class fo{constructor(e){this.persistence=e,this.Ai=new Ac,this.Ri=null}static Vi(e){return new fo(e)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),w.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.mi,n=>{const i=O.fromPath(n);return this.fi(e,i).next(s=>{s||t.removeEntry(i,j.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return w.or([()=>w.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class js{constructor(e,t){this.persistence=e,this.gi=new mt(n=>Ce(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Sp(this,t)}static Vi(e,t){return new js(e,t)}Ii(){}di(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}yr(e){let t=0;return this.gr(e,n=>{t++}).next(()=>t)}gr(e,t){return w.forEach(this.gi,(n,i)=>this.Sr(e,n,i).next(s=>s?w.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(n++,s.removeEntry(o,j.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ms(e.data.value)),t}Sr(e,t,n){return w.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return w.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.serializer=e}q(e,t,n,i){const s=new Ys("createOrUpgrade",t);n<1&&i>=1&&(function(u){u.createObjectStore(Si)}(e),function(u){u.createObjectStore(ci,{keyPath:WI}),u.createObjectStore($e,{keyPath:jl,autoIncrement:!0}).createIndex(cn,ql,{unique:!0}),u.createObjectStore(Qn)}(e),Dh(e),function(u){u.createObjectStore(tn)}(e));let o=w.resolve();return n<3&&i>=3&&(n!==0&&(function(u){u.deleteObjectStore(Jn),u.deleteObjectStore(Xn),u.deleteObjectStore(ln)}(e),Dh(e)),o=o.next(()=>function(u){const h=u.store(ln),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(ks,f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(u,h){return h.store($e).j().next(m=>{u.deleteObjectStore($e),u.createObjectStore($e,{keyPath:jl,autoIncrement:!0}).createIndex(cn,ql,{unique:!0});const _=h.store($e),S=m.map(C=>_.put(C));return w.waitFor(S)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Yn,{keyPath:nv})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.pi(s))),n<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(ui)}(e),this.yi(s)))),n<7&&i>=7&&(o=o.next(()=>this.wi(s))),n<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.bi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(eo,{keyPath:rv})})(e),function(u){u.createObjectStore(to,{keyPath:iv})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore(no,{keyPath:hv});h.createIndex(Ia,dv,{unique:!1}),h.createIndex(gf,fv,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore(Ds,{keyPath:QI});h.createIndex(fs,XI),h.createIndex(df,JI)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(tn))),n<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),n<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(cc,{keyPath:sv,autoIncrement:!0}).createIndex(ya,ov,{unique:!1}),u.createObjectStore(Jr,{keyPath:av}).createIndex(pf,cv,{unique:!1}),u.createObjectStore(Yr,{keyPath:uv}).createIndex(mf,lv,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore(Jr).clear()}).next(()=>{t.objectStore(Yr).clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(uc,{keyPath:pv})})(e)})),n<18&&i>=18&&ud()&&(o=o.next(()=>{t.objectStore(Jr).clear()}).next(()=>{t.objectStore(Yr).clear()})),o}yi(e){let t=0;return e.store(tn).X((n,i)=>{t+=Bs(i)}).next(()=>{const n={byteSize:t};return e.store(ui).put(_a,n)})}pi(e){const t=e.store(ci),n=e.store($e);return t.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,un],[s.userId,s.lastAcknowledgedBatchId]);return n.j(cn,o).next(c=>w.forEach(c,u=>{U(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=rn(this.serializer,u);return Tp(e,s.userId,h).next(()=>{})}))}))}wi(e){const t=e.store(Jn),n=e.store(tn);return e.store(ln).get(ks).next(i=>{const s=[];return n.X((o,c)=>{const u=new Y(o),h=function(m){return[0,Ce(m)]}(u);s.push(t.get(h).next(f=>f?w.resolve():(m=>t.put({targetId:0,path:Ce(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Si(e,t){e.createObjectStore(li,{keyPath:tv});const n=t.store(li),i=new wc,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:Ce(u)})}};return t.store(tn).X({Z:!0},(o,c)=>{const u=new Y(o);return s(u.popLast())}).next(()=>t.store(Qn).X({Z:!0},([o,c,u],h)=>{const f=Qe(c);return s(f.popLast())}))}bi(e){const t=e.store(Xn);return t.X((n,i)=>{const s=Kr(i),o=gp(this.serializer,s);return t.put(o)})}Di(e,t){const n=t.store(tn),i=[];return n.X((s,o)=>{const c=t.store(Ds),u=function(m){return m.document?new O(Y.fromString(m.document.name).popFirst(5)):m.noDocument?O.fromSegments(m.noDocument.path):m.unknownDocument?O.fromSegments(m.unknownDocument.path):M(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>w.waitFor(i))}Ci(e,t){const n=t.store($e),i=Pp(this.serializer),s=new bc(fo.Vi,this.serializer.gt);return n.j().next(o=>{const c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:K();rn(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),w.forEach(c,(u,h)=>{const f=new Se(h),m=lo.yt(this.serializer,f),_=s.getIndexManager(f),S=ho.yt(f,this.serializer,_,s.referenceDelegate);return new Cp(i,S,m,_).recalculateAndSaveOverlaysForDocumentKeys(new va(t,xe.ue),u).next()})})}}function Dh(r){r.createObjectStore(Jn,{keyPath:ZI}).createIndex(ac,ev,{unique:!0}),r.createObjectStore(Xn,{keyPath:"targetId"}).createIndex(ff,YI,{unique:!0}),r.createObjectStore(ln)}const At="IndexedDbPersistence",Zo=18e5,ea=5e3,ta="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",kT="main";class Sc{constructor(e,t,n,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=o,this.document=c,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=_=>Promise.resolve(),!Sc.C())throw new N(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new IT(this,i),this.Qi=t+kT,this.serializer=new mp(u),this.$i=new Mt(this.Qi,this.Oi,new DT(this.serializer)),this.li=new cT,this.hi=new gT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Pp(this.serializer),this.Ti=new aT,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&le(At,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(P.FAILED_PRECONDITION,ta);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new xe(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>is(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if($t(e))return V(At,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(At,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return jr(e).get(Vn).next(t=>w.resolve(this.Xi(t)))}es(e){return is(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Zo)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ge(t,Yn);return n.j().next(i=>{const s=this.rs(i,Zo),o=i.filter(c=>s.indexOf(c)===-1);return w.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?w.resolve(!0):jr(e).get(Vn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,ea)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new N(P.FAILED_PRECONDITION,ta);return!1}}return!(!this.networkEnabled||!this.inForeground)||is(e).j().next(n=>this.rs(n,ea).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V(At,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Si,Yn],e=>{const t=new va(e,xe.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>is(e).j().next(t=>this.rs(t,Zo).map(n=>n.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return ho.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mT(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return lo.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){V(At,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?_v:u===17?vf:u===16?gv:u===15?lc:u===14?If:u===13?yf:u===12?mv:u===11?_f:void M(60245)}(this.Oi);let o;return this.$i.runTransaction(e,i,s,c=>(o=new va(c,this.ui?this.ui.next():xe.ue),t==="readwrite-primary"?this.Ji(o).next(u=>!!u||this.Hi(o)).next(u=>{if(!u)throw le(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new N(P.FAILED_PRECONDITION,af);return n(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ts(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ts(e){return jr(e).get(Vn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,ea)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(P.FAILED_PRECONDITION,ta)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return jr(e).put(Vn,t)}static C(){return Mt.C()}Yi(e){const t=jr(e);return t.get(Vn).next(n=>this.Xi(n)?(V(At,"Releasing primary lease."),t.delete(Vn)):w.resolve())}ns(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(le(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;cd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return V(At,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return le(At,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){le("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function jr(r){return ge(r,Si)}function is(r){return ge(r,Yn)}function Vp(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rc(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return cd()?8:uf(me())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new NT;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(Mn()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),w.resolve()):(Mn()<=H.DEBUG&&V("QueryEngine","Query:",Ln(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(Mn()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ue(t))):w.resolve())}ps(e,t){if(th(t))return w.resolve(null);let n=Ue(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ra(t,null,"F"),n=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=K(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{const h=this.bs(t,c);return this.Ds(t,h,o,u.readTime)?this.ps(e,Ra(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,n,i){return th(t)||i.isEqual(j.min())?w.resolve(null):this.gs.getDocuments(e,n).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,n,i)?w.resolve(null):(Mn()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ln(t)),this.vs(e,o,t,sf(i,Hn)).next(c=>c))})}bs(e,t){let n=new ne(qf(e));return t.forEach((i,s)=>{Pi(e,s)&&(n=n.add(s))}),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return Mn()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.gs.getDocumentsMatchingQuery(e,t,Be.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="LocalStore",xT=3e8;class OT{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ie(q),this.Ms=new mt(s=>In(s),Ri),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cp(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function kp(r,e,t,n){return new OT(r,e,t,n)}async function Np(r,e){const t=L(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],c=[];let u=K();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:c}))})})}function MT(r,e){const t=L(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,_=m.keys();let S=w.resolve();return _.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(k=>{const D=h.docVersions.get(C);U(D!==null,48541),k.version.compareTo(D)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function xp(r){const e=L(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function LT(r,e){const t=L(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const c=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,m)));let S=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(he.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),i=i.insert(m,S),function(k,D,$){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=xT?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,S,f)&&c.push(t.hi.updateTargetData(s,S))});let u=Fe(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(FT(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!n.isEqual(j.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next(m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return w.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.Fs=i,s))}function FT(r,e,t){let n=K(),i=K();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Fe();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):V(Pc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function UT(r,e){const t=L(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=un),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function qs(r,e){const t=L(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.hi.getTargetData(n,e).next(s=>s?(i=s,w.resolve(i)):t.hi.allocateTargetId(n).next(o=>(i=new at(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n})}async function ar(r,e,t){const n=L(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$t(o))throw o;V(Pc,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function Oa(r,e,t){const n=L(r);let i=j.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=L(u),_=m.Ms.get(f);return _!==void 0?w.resolve(m.Fs.get(_)):m.hi.getTargetData(h,f)}(n,o,Ue(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>n.Cs.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:K())).next(c=>(Lp(n,jf(e),c),{documents:c,qs:s})))}function Op(r,e){const t=L(r),n=L(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.Et(s,e).next(o=>o?o.target:null))}function Mp(r,e){const t=L(r),n=t.xs.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,sf(n,Hn),Number.MAX_SAFE_INTEGER)).then(i=>(Lp(t,e,i),i))}function Lp(r,e,t){let n=r.xs.get(e)||j.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.xs.set(e,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="firestore_clients";function kh(r,e){return`${Fp}_${r}_${e}`}const Up="firestore_mutations";function Nh(r,e,t){let n=`${Up}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Bp="firestore_targets";function na(r,e){return`${Bp}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="SharedClientState";class zs{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Ks(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new N(i.error.code,i.error.message))),o?new zs(e,t,i.state,s):(le(He,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ri{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new N(n.error.code,n.error.message))),s?new ri(e,n.state,i):(le(He,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $s{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=mc();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=lf(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new $s(e,s):(le(He,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Cc{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Cc(t.clientId,t.onlineState):(le(He,`Failed to parse online state: ${e}`),null)}}class Ma{constructor(){this.activeTargetIds=mc()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ra{constructor(e,t,n,i,s){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new ie(q),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=kh(this.persistenceKey,this.js),this.eo=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Ma),this.no=new RegExp(`^${Fp}_${o}_([^_]*)$`),this.ro=new RegExp(`^${Up}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Bp}_${o}_(\\d+)$`),this.so=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.oo=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const n of e){if(n===this.js)continue;const i=this.getItem(kh(this.persistenceKey,n));if(i){const s=$s.Ks(n,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();const t=this.storage.getItem(this.so);if(t){const n=this.ao(t);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(na(this.persistenceKey,e));if(i){const s=ri.Ks(e,i);s&&(n=s.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(na(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.ho(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V(He,"READ",e,t),t}setItem(e,t){V(He,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){V(He,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(V(He,"EVENT",t.key,t.newValue),t.key===this.Xs)return void le("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const n=this.Ao(t.key);return this.Ro(n,null)}{const n=this.Vo(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(t.key===this.so){if(t.newValue!==null){const n=this.ao(t.newValue);if(n)return this.uo(n)}}else if(t.key===this.eo){const n=function(s){let o=xe.ue;if(s!=null)try{const c=JSON.parse(s);U(typeof c=="number",30636,{wo:s}),o=c}catch(c){le(He,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==xe.ue&&this.sequenceNumberHandler(n)}else if(t.key===this.oo){const n=this.So(t.newValue);await Promise.all(n.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){const i=new zs(this.currentUser,e,t,n),s=Nh(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){const t=Nh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){const i=na(this.persistenceKey,e),s=new ri(e,t,n);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const n=this.Ao(e);return $s.Ks(n,t)}mo(e,t){const n=this.ro.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return zs.Ks(new Se(s),i,t)}po(e,t){const n=this.io.exec(e),i=Number(n[1]);return ri.Ks(i,t)}ao(e){return Cc.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);V(He,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(n),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Ys=n})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=mc();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class jp{constructor(){this.Fo=new Ma,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ma,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="ConnectivityMonitor";class Oh{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(xh,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(xh,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss=null;function La(){return ss===null?ss=function(){return 268435456+Math.round(2147483648*Math.random())}():ss++,"0x"+ss.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="RestConnection",jT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qT{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Ns?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const o=La(),c=this.Go(e,t.toUriEncodedString());V(ia,`Sending RPC '${e}' ${o}:`,c,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(c),f=hr(h);return this.jo(e,c,u,n,f).then(m=>(V(ia,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ft(ia,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",n),m})}Jo(e,t,n,i,s,o){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const n=jT[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class $T extends qT{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const o=La();return new Promise((c,u)=>{const h=new Hd;h.setWithCredentials(!0),h.listenOnce(Qd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ls.NO_ERROR:const m=h.getResponseJson();V(be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case ls.TIMEOUT:V(be,`RPC '${e}' ${o} timed out`),u(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const _=h.getStatus();if(V(be,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(C.status);u(new N(k,C.message))}else u(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new N(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{V(be,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);V(be,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,n,15)})}P_(e,t,n){const i=La(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yd(),c=Jd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");V(be,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let _=!1,S=!1;const C=new zT({Ho:D=>{S?V(be,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(_||(V(be,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),V(be,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Yo:()=>m.close()}),k=(D,$,B)=>{D.listen($,F=>{try{B(F)}catch(W){setTimeout(()=>{throw W},0)}})};return k(m,qr.EventType.OPEN,()=>{S||(V(be,`RPC '${e}' stream ${i} transport opened.`),C.s_())}),k(m,qr.EventType.CLOSE,()=>{S||(S=!0,V(be,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(m))}),k(m,qr.EventType.ERROR,D=>{S||(S=!0,Ft(be,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.__(new N(P.UNAVAILABLE,"The operation could not be completed")))}),k(m,qr.EventType.MESSAGE,D=>{var $;if(!S){const B=D.data[0];U(!!B,16349);const F=B,W=(F==null?void 0:F.error)||(($=F[0])===null||$===void 0?void 0:$.error);if(W){V(be,`RPC '${e}' stream ${i} received error:`,W);const Z=W.status;let G=function(I){const T=de[I];if(T!==void 0)return tp(T)}(Z),v=W.message;G===void 0&&(G=P.INTERNAL,v="Unknown error status: "+Z+" with message "+W.message),S=!0,C.__(new N(G,v)),m.close()}else V(be,`RPC '${e}' stream ${i} received:`,B),C.a_(B)}}),k(c,Xd.STAT_EVENT,D=>{D.stat===pa.PROXY?V(be,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===pa.NOPROXY&&V(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){return typeof window<"u"?window:null}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(r){return new Xv(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="PersistentStream";class $p{constructor(e,t,n,i,s,o,c,u){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zp(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(le(t.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.b_===t&&this.W_(n,i)},n=>{e(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)})})}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{n(()=>this.G_(i))}),this.stream.onMessage(i=>{n(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(Mh,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(V(Mh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KT extends $p{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Zv(this.serializer,e),n=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ne(o.readTime):j.min()}(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Va(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=xs(u)?{documents:up(s,u)}:{query:lp(s,u).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ip(s,o.resumeToken);const h=Pa(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=or(s,o.snapshotVersion.toTimestamp());const h=Pa(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=tT(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Va(this.serializer),t.removeTarget=e,this.k_(t)}}class GT extends $p{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=eT(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Va(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ls(this.serializer,n))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{}class HT extends WT{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ca(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(P.UNKNOWN,s.toString())})}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,Ca(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class QT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(le(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="RemoteStore";class XT{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{n.enqueueAndForget(async()=>{bn(this)&&(V(wn,"Restarting streams for network reachability change."),await async function(u){const h=L(u);h.Ia.add(4),await Di(h),h.Aa.set("Unknown"),h.Ia.delete(4),await mo(h)}(this))})}),this.Aa=new QT(n,i)}}async function mo(r){if(bn(r))for(const e of r.da)await e(!0)}async function Di(r){for(const e of r.da)await e(!1)}function go(r,e){const t=L(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),kc(t)?Dc(t):yr(t).x_()&&Vc(t,e))}function cr(r,e){const t=L(r),n=yr(t);t.Ta.delete(e),n.x_()&&Kp(t,e),t.Ta.size===0&&(n.x_()?n.B_():bn(t)&&t.Aa.set("Unknown"))}function Vc(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yr(r).H_(e)}function Kp(r,e){r.Ra.$e(e),yr(r).Y_(e)}function Dc(r){r.Ra=new Gv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),yr(r).start(),r.Aa.aa()}function kc(r){return bn(r)&&!yr(r).M_()&&r.Ta.size>0}function bn(r){return L(r).Ia.size===0}function Gp(r){r.Ra=void 0}async function JT(r){r.Aa.set("Online")}async function YT(r){r.Ta.forEach((e,t)=>{Vc(r,e)})}async function ZT(r,e){Gp(r),kc(r)?(r.Aa.la(e),Dc(r)):r.Aa.set("Unknown")}async function eE(r,e,t){if(r.Aa.set("Online"),e instanceof rp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))}(r,e)}catch(n){V(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ks(r,n)}else if(e instanceof ys?r.Ra.Ye(e):e instanceof np?r.Ra.it(e):r.Ra.et(e),!t.isEqual(j.min()))try{const n=await xp(r.localStore);t.compareTo(n)>=0&&await function(s,o){const c=s.Ra.Pt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(he.EMPTY_BYTE_STRING,f.snapshotVersion)),Kp(s,u);const m=new at(f.target,u,h,f.sequenceNumber);Vc(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V(wn,"Failed to raise snapshot:",n),await Ks(r,n)}}async function Ks(r,e,t){if(!$t(e))throw e;r.Ia.add(1),await Di(r),r.Aa.set("Offline"),t||(t=()=>xp(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(wn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await mo(r)})}function Wp(r,e){return e().catch(t=>Ks(r,t,e))}async function _r(r){const e=L(r),t=jt(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:un;for(;tE(e);)try{const i=await UT(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,nE(e,i)}catch(i){await Ks(e,i)}Hp(e)&&Qp(e)}function tE(r){return bn(r)&&r.Pa.length<10}function nE(r,e){r.Pa.push(e);const t=jt(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Hp(r){return bn(r)&&!jt(r).M_()&&r.Pa.length>0}function Qp(r){jt(r).start()}async function rE(r){jt(r).na()}async function iE(r){const e=jt(r);for(const t of r.Pa)e.X_(t.mutations)}async function sE(r,e,t){const n=r.Pa.shift(),i=yc.from(n,e,t);await Wp(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await _r(r)}async function oE(r,e){e&&jt(r).Z_&&await async function(n,i){if(function(o){return $v(o)&&o!==P.ABORTED}(i.code)){const s=n.Pa.shift();jt(n).N_(),await Wp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _r(n)}}(r,e),Hp(r)&&Qp(r)}async function Lh(r,e){const t=L(r);t.asyncQueue.verifyOperationInProgress(),V(wn,"RemoteStore received new credentials");const n=bn(t);t.Ia.add(3),await Di(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await mo(t)}async function Fa(r,e){const t=L(r);e?(t.Ia.delete(2),await mo(t)):e||(t.Ia.add(2),await Di(t),t.Aa.set("Unknown"))}function yr(r){return r.Va||(r.Va=function(t,n,i){const s=L(t);return s.ia(),new KT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:JT.bind(null,r),e_:YT.bind(null,r),n_:ZT.bind(null,r),J_:eE.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),kc(r)?Dc(r):r.Aa.set("Unknown")):(await r.Va.stop(),Gp(r))})),r.Va}function jt(r){return r.ma||(r.ma=function(t,n,i){const s=L(t);return s.ia(),new GT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:rE.bind(null,r),n_:oE.bind(null,r),ea:iE.bind(null,r),ta:sE.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await _r(r)):(await r.ma.stop(),r.Pa.length>0&&(V(wn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new Nc(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xc(r,e){if(le("AsyncQueue",`${e}: ${r}`),$t(r))return new N(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{static emptySet(e){return new $n(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=zr(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new $n;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.fa=new ie(O.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):M(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class ur{constructor(e,t,n,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new ur(e,t,$n.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class cE{constructor(){this.queries=Uh(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=L(t),s=i.queries;i.queries=Uh(),s.forEach((o,c)=>{for(const u of c.wa)u.onError(n)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Uh(){return new mt(r=>Bf(r),oo)}async function Xp(r,e){const t=L(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new aE,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=xc(o,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Oc(t)}async function Jp(r,e){const t=L(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function uE(r,e){const t=L(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.wa)c.Ca(i)&&(n=!0);o.ya=i}}n&&Oc(t)}function lE(r,e,t){const n=L(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function Oc(r){r.Da.forEach(e=>{e.next()})}var Ua,Bh;(Bh=Ua||(Ua={})).Fa="default",Bh.Cache="cache";class Yp{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new ur(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ua.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class hE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=qf(e),this.eu=new $n(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Fh,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),S=Pi(this.query,m)?m:null,C=!!_&&this.mutatedKeys.has(_.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;_&&S?_.data.isEqual(S.data)?C!==k&&(n.track({type:3,doc:S}),D=!0):this.iu(_,S)||(n.track({type:2,doc:S}),D=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(c=!0)):!_&&S?(n.track({type:0,doc:S}),D=!0):_&&!S&&(n.track({type:1,doc:_}),D=!0,(u||h)&&(c=!0)),D&&(S?(o=o.add(S),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:o,ru:n,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(S,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return k(S)-k(C)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(n),i=i!=null&&i;const c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new ur(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Fh,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=K(),this.eu.forEach(n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))});const t=[];return e.forEach(n=>{this.Za.has(n)||t.push(new em(n))}),this.Za.forEach(n=>{e.has(n)||t.push(new Zp(n))}),t}uu(e){this.Ha=e.qs,this.Za=K();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ur.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ir="SyncEngine";class dE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fE{constructor(e){this.key=e,this.lu=!1}}class pE{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new mt(c=>Bf(c),oo),this.Tu=new Map,this.Iu=new Set,this.du=new ie(O.comparator),this.Eu=new Map,this.Au=new Ac,this.Ru={},this.Vu=new Map,this.mu=En.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function mE(r,e,t=!0){const n=_o(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await tm(n,e,t,!0),i}async function gE(r,e){const t=_o(r);await tm(t,e,!0,!1)}async function tm(r,e,t,n){const i=await qs(r.localStore,Ue(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await Mc(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&go(r.remoteStore,i),c}async function Mc(r,e,t,n,i){r.gu=(m,_,S)=>async function(k,D,$,B){let F=D.view.nu($);F.Ds&&(F=await Oa(k.localStore,D.query,!1).then(({documents:v})=>D.view.nu(v,F)));const W=B&&B.targetChanges.get(D.targetId),Z=B&&B.targetMismatches.get(D.targetId)!=null,G=D.view.applyChanges(F,k.isPrimaryClient,W,Z);return Ba(k,D.targetId,G._u),G.snapshot}(r,m,_,S);const s=await Oa(r.localStore,e,!0),o=new hE(e,s.qs),c=o.nu(s.documents),u=Vi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,u);Ba(r,t,h._u);const f=new dE(e,t,o);return r.Pu.set(e,f),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),h.snapshot}async function _E(r,e,t){const n=L(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter(o=>!oo(o,e))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ar(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&cr(n.remoteStore,i.targetId),lr(n,i.targetId)}).catch(zt)):(lr(n,i.targetId),await ar(n.localStore,i.targetId,!0))}async function yE(r,e){const t=L(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),cr(t.remoteStore,n.targetId))}async function IE(r,e,t){const n=Bc(r);try{const i=await function(o,c){const u=L(o),h=ee.now(),f=c.reduce((S,C)=>S.add(C.key),K());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=Fe(),k=K();return u.Os.getEntries(S,f).next(D=>{C=D,C.forEach(($,B)=>{B.isValidDocument()||(k=k.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(D=>{m=D;const $=[];for(const B of c){const F=qv(B,m.get(B.key).overlayedDocument);F!=null&&$.push(new gt(B.key,F,Vf(F.value.mapValue),ke.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,$,c)}).next(D=>{_=D;const $=D.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(S,D.batchId,$)})}).then(()=>({batchId:_.batchId,changes:$f(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new ie(q)),h=h.insert(c,u),o.Ru[o.currentUser.toKey()]=h}(n,i.batchId,t),await Gt(n,i.changes),await _r(n.remoteStore)}catch(i){const s=xc(i,"Failed to persist write");t.reject(s)}}async function nm(r,e){const t=L(r);try{const n=await LT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Eu.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?U(o.lu,14607):i.removedDocuments.size>0&&(U(o.lu,42227),o.lu=!1))}),await Gt(t,n,e)}catch(n){await zt(n)}}function jh(r,e,t){const n=L(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=L(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.wa)_.va(c)&&(h=!0)}),h&&Oc(u)}(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function vE(r,e,t){const n=L(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let o=new ie(O.comparator);o=o.insert(s,ue.newNoDocument(s,j.min()));const c=K().add(s),u=new Ci(j.min(),new Map,new ie(q),o,c);await nm(n,u),n.du=n.du.remove(s),n.Eu.delete(e),Uc(n)}else await ar(n.localStore,e,!1).then(()=>lr(n,e,t)).catch(zt)}async function TE(r,e){const t=L(r),n=e.batch.batchId;try{const i=await MT(t.localStore,e);Fc(t,n,null),Lc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Gt(t,i)}catch(i){await zt(i)}}async function EE(r,e,t){const n=L(r);try{const i=await function(o,c){const u=L(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(U(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(n.localStore,e);Fc(n,e,t),Lc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Gt(n,i)}catch(i){await zt(i)}}function Lc(r,e){(r.Vu.get(e)||[]).forEach(t=>{t.resolve()}),r.Vu.delete(e)}function Fc(r,e,t){const n=L(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function lr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(n=>{r.Au.containsKey(n)||rm(r,n)})}function rm(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(cr(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Uc(r))}function Ba(r,e,t){for(const n of t)n instanceof Zp?(r.Au.addReference(n.key,e),wE(r,n)):n instanceof em?(V(Ir,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||rm(r,n.key)):M(19791,{yu:n})}function wE(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(V(Ir,"New document in limbo: "+t),r.Iu.add(n),Uc(r))}function Uc(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new O(Y.fromString(e)),n=r.mu.next();r.Eu.set(n,new fE(t)),r.du=r.du.insert(t,n),go(r.remoteStore,new at(Ue(so(t.path)),n,"TargetPurposeLimboResolution",xe.ue))}}async function Gt(r,e,t){const n=L(r),i=[],s=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach((c,u)=>{o.push(n.gu(u,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Rc.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),n.hu.J_(i),await async function(u,h){const f=L(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>w.forEach(h,_=>w.forEach(_.Is,S=>f.persistence.referenceDelegate.addReference(m,_.targetId,S)).next(()=>w.forEach(_.ds,S=>f.persistence.referenceDelegate.removeReference(m,_.targetId,S)))))}catch(m){if(!$t(m))throw m;V(Pc,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const S=f.Fs.get(_),C=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(_,k)}}}(n.localStore,s))}async function AE(r,e){const t=L(r);if(!t.currentUser.isEqual(e)){V(Ir,"User change. New user:",e.toKey());const n=await Np(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(u=>{u.reject(new N(P.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Gt(t,n.Bs)}}function bE(r,e){const t=L(r),n=t.Eu.get(e);if(n&&n.lu)return K().add(n.key);{let i=K();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function SE(r,e){const t=L(r),n=await Oa(t.localStore,e.query,!0),i=e.view.uu(n);return t.isPrimaryClient&&Ba(t,e.targetId,i._u),i}async function RE(r,e){const t=L(r);return Mp(t.localStore,e).then(n=>Gt(t,n))}async function PE(r,e,t,n){const i=L(r),s=await function(c,u){const h=L(c),f=L(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,u).next(_=>_?h.localDocuments.getDocuments(m,_):w.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await _r(i.remoteStore):t==="acknowledged"||t==="rejected"?(Fc(i,e,n||null),Lc(i,e),function(c,u){L(L(c).mutationQueue).rr(u)}(i.localStore,e)):M(6720,"Unknown batchState",{wu:t}),await Gt(i,s)):V(Ir,"Cannot apply mutation batch with id: "+e)}async function CE(r,e){const t=L(r);if(_o(t),Bc(t),e===!0&&t.fu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await qh(t,n.toArray());t.fu=!0,await Fa(t.remoteStore,!0);for(const s of i)go(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){const n=[];let i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(lr(t,o),ar(t.localStore,o,!0))),cr(t.remoteStore,o)}),await i,await qh(t,n),function(o){const c=L(o);c.Eu.forEach((u,h)=>{cr(c.remoteStore,h)}),c.Au.jr(),c.Eu=new Map,c.du=new ie(O.comparator)}(t),t.fu=!1,await Fa(t.remoteStore,!1)}}async function qh(r,e,t){const n=L(r),i=[],s=[];for(const o of e){let c;const u=n.Tu.get(o);if(u&&u.length!==0){c=await qs(n.localStore,Ue(u[0]));for(const h of u){const f=n.Pu.get(h),m=await SE(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await Op(n.localStore,o);c=await qs(n.localStore,h),await Mc(n,im(h),o,!1,c.resumeToken)}i.push(c)}return n.hu.J_(s),i}function im(r){return Ff(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function VE(r){return function(t){return L(L(t).persistence).Ps()}(L(r).localStore)}async function DE(r,e,t,n){const i=L(r);if(i.fu)return void V(Ir,"Ignoring unexpected query state notification.");const s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Mp(i.localStore,jf(s[0])),c=Ci.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await Gt(i,o,c);break}case"rejected":await ar(i.localStore,e,!0),lr(i,e,n);break;default:M(64155,t)}}async function kE(r,e,t){const n=_o(r);if(n.fu){for(const i of e){if(n.Tu.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){V(Ir,"Adding an already active target "+i);continue}const s=await Op(n.localStore,i),o=await qs(n.localStore,s);await Mc(n,im(s),o.targetId,!1,o.resumeToken),go(n.remoteStore,o)}for(const i of t)n.Tu.has(i)&&await ar(n.localStore,i,!1).then(()=>{cr(n.remoteStore,i),lr(n,i)}).catch(zt)}}function _o(r){const e=L(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vE.bind(null,e),e.hu.J_=uE.bind(null,e.eventManager),e.hu.pu=lE.bind(null,e.eventManager),e}function Bc(r){const e=L(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EE.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=po(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return kp(this.persistence,new Dp,e.initialUser,this.serializer)}Du(e){return new bc(fo.Vi,this.serializer)}bu(e){return new jp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class NE extends _i{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){U(this.persistence.referenceDelegate instanceof js,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new bp(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new bc(n=>js.Vi(n,t),this.serializer)}}class sm extends _i{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await Bc(this.Mu.syncEngine),await _r(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return kp(this.persistence,new Dp,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new bp(n,e.asyncQueue,t)}Fu(e,t){const n=new KI(t,this.persistence);return new $I(e.asyncQueue,n)}Du(e){const t=Vp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new Sc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,qp(),vs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new jp}}class xE extends sm{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof ra&&(this.sharedClientState.syncEngine={Do:PE.bind(null,t),vo:DE.bind(null,t),Co:kE.bind(null,t),Ps:VE.bind(null,t),bo:RE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async n=>{await CE(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}bu(e){const t=qp();if(!ra.C(t))throw new N(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Vp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ra(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class yi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>jh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=AE.bind(null,this.syncEngine),await Fa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cE}()}createDatastore(e){const t=po(e.databaseInfo.databaseId),n=function(s){return new $T(s)}(e.databaseInfo);return function(s,o,c,u){return new HT(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new XT(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>jh(this.syncEngine,t,0),function(){return Oh.C()?new Oh:new BT}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const m=new pE(i,s,o,c,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=L(i);V(wn,"RemoteStore shutting down."),s.Ia.add(5),await Di(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}yi.provider={build:()=>new yi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):le("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="FirestoreClient";class OE{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=ic.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{V(qt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V(qt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=xc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function sa(r,e){r.asyncQueue.verifyOperationInProgress(),V(qt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Np(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>{Ft("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Ft("Terminating Firestore due to IndexedDb database deletion failed",i)})}),r._offlineComponents=e}async function zh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await ME(r);V(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Lh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Lh(e.remoteStore,i)),r._onlineComponents=e}async function ME(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(qt,"Using user provided OfflineComponentProvider");try{await sa(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ft("Error using user provided cache. Falling back to memory cache: "+t),await sa(r,new _i)}}else V(qt,"Using default OfflineComponentProvider"),await sa(r,new NE(void 0));return r._offlineComponents}async function am(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(qt,"Using user provided OnlineComponentProvider"),await zh(r,r._uninitializedComponentsProvider._online)):(V(qt,"Using default OnlineComponentProvider"),await zh(r,new yi))),r._onlineComponents}function LE(r){return am(r).then(e=>e.syncEngine)}async function ja(r){const e=await am(r),t=e.eventManager;return t.onListen=mE.bind(null,e.syncEngine),t.onUnlisten=_E.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yE.bind(null,e.syncEngine),t}function FE(r,e,t={}){const n=new ct;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){const f=new om({next:_=>{f.Ou(),o.enqueueAndForget(()=>Jp(s,m)),_.fromCache&&u.source==="server"?h.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Yp(c,f,{includeMetadataChanges:!0,ka:!0});return Xp(s,m)}(await ja(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="firestore.googleapis.com",Kh=!0;class Gh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=UE,this.ssl=Kh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Kh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ap)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new NI;switch(n.type){case"firstParty":return new MI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=$h.get(t);n&&(V("ComponentProvider","Removing Datastore"),$h.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wt(this.firestore,e,this._query)}}class pe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(bi(t,pe._jsonSchema))return new pe(e,n||null,new O(Y.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:fe("string",pe._jsonSchemaVersion),referencePath:fe("string")};class Lt extends Wt{constructor(e,t,n){super(e,t,so(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new O(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function hw(r,e,...t){if(r=ye(r),nf("collection","path",e),r instanceof jc){const n=Y.fromString(e,...t);return Ml(n),new Lt(r,null,n)}{if(!(r instanceof pe||r instanceof Lt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return Ml(n),new Lt(r.firestore,null,n)}}function BE(r,e,...t){if(r=ye(r),arguments.length===1&&(e=ic.newId()),nf("doc","path",e),r instanceof jc){const n=Y.fromString(e,...t);return Ol(n),new pe(r,null,new O(n))}{if(!(r instanceof pe||r instanceof Lt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return Ol(n),new pe(r.firestore,r instanceof Lt?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="AsyncQueue";class Hh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zp(this,"async_queue_retry"),this.oc=()=>{const n=vs();n&&V(Wh,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=vs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ct;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$t(e))throw e;V(Wh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(n=>{throw this.tc=n,this.nc=!1,le("INTERNAL UNHANDLED ERROR: ",Qh(n)),n}).then(n=>(this.nc=!1,n))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Nc.createAndSchedule(this,e,t,n,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:Qh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Qh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class An extends jc{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Hh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hh(e),this._firestoreClient=void 0,await e}}}function dw(r,e,t){t||(t=Ns);const n=Ka(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(pn(s,e))return i;throw new N(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new N(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ap)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&hr(e.host)&&od(e.host),n.initialize({options:e,instanceIdentifier:t})}function qc(r){if(r._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||jE(r),r._firestoreClient}function jE(r){var e,t,n;const i=r._freezeSettings(),s=function(c,u,h,f){return new Iv(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new OE(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(he.fromBase64String(e))}catch(t){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bi(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:fe("string",qe._jsonSchemaVersion),bytes:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(bi(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:fe("string",Ye._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bi(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ze(e.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:fe("string",Ze._jsonSchemaVersion),vectorValues:fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=/^__.*__$/;class zE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new gr(e,this.data,t,this.fieldTransforms)}}class um{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new gt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class zc{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new zc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(lm(this.Ec)&&qE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $E{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||po(e)}Dc(e,t,n,i=!1){return new zc({Ec:e,methodName:t,bc:n,path:ae.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $c(r){const e=r._freezeSettings(),t=po(r._databaseId);return new $E(r._databaseId,!!e.ignoreUndefinedProperties,t)}function KE(r,e,t,n,i,s={}){const o=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);Gc("Data must be an object, but it was:",o,n);const c=hm(n,o);let u,h;if(s.merge)u=new Oe(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=qa(e,m,t);if(!o.contains(_))throw new N(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);fm(f,_)||f.push(_)}u=new Oe(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new zE(new Pe(c),u,h)}class vo extends Io{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vo}}class Kc extends Io{_toFieldTransform(e){return new Jf(e.path,new rr)}isEqual(e){return e instanceof Kc}}function GE(r,e,t,n){const i=r.Dc(1,e,t);Gc("Data must be an object, but it was:",i,n);const s=[],o=Pe.empty();Kt(n,(u,h)=>{const f=Wc(e,u,t);h=ye(h);const m=i.gc(f);if(h instanceof vo)s.push(f);else{const _=ki(h,m);_!=null&&(s.push(f),o.set(f,_))}});const c=new Oe(s);return new um(o,c,i.fieldTransforms)}function WE(r,e,t,n,i,s){const o=r.Dc(1,e,t),c=[qa(e,n,t)],u=[i];if(s.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(qa(e,s[_])),u.push(s[_+1]);const h=[],f=Pe.empty();for(let _=c.length-1;_>=0;--_)if(!fm(h,c[_])){const S=c[_];let C=u[_];C=ye(C);const k=o.gc(S);if(C instanceof vo)h.push(S);else{const D=ki(C,k);D!=null&&(h.push(S),f.set(S,D))}}const m=new Oe(h);return new um(f,m,o.fieldTransforms)}function HE(r,e,t,n=!1){return ki(t,r.Dc(n?4:3,e))}function ki(r,e){if(dm(r=ye(r)))return Gc("Unsupported field value:",e,r),hm(r,e);if(r instanceof Io)return function(n,i){if(!lm(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const c of n){let u=ki(c,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Mv(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ee.fromDate(n);return{timestampValue:or(i.serializer,s)}}if(n instanceof ee){const s=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:or(i.serializer,s)}}if(n instanceof Ye)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qe)return{bytesValue:ip(i.serializer,n._byteString)};if(n instanceof pe){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ze)return function(o,c){return{mapValue:{fields:{[dc]:{stringValue:fc},[Zn]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return gc(c.serializer,h)})}}}}}}(n,i);throw i.wc(`Unsupported field value: ${Js(n)}`)}(r,e)}function hm(r,e){const t={};return Tf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(r,(n,i)=>{const s=ki(i,e.Vc(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function dm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof Ye||r instanceof qe||r instanceof pe||r instanceof Io||r instanceof Ze)}function Gc(r,e,t){if(!dm(t)||!rf(t)){const n=Js(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function qa(r,e,t){if((e=ye(e))instanceof yo)return e._internalPath;if(typeof e=="string")return Wc(r,e);throw Gs("Field path arguments must be of type string or ",r,!1,void 0,t)}const QE=new RegExp("[~\\*/\\[\\]]");function Wc(r,e,t){if(e.search(QE)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new yo(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Gs(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new N(P.INVALID_ARGUMENT,c+r+u)}function fm(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XE extends pm{data(){return super.data()}}function Hc(r,e){return typeof e=="string"?Wc(r,e):e instanceof yo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qc{}class gm extends Qc{}function fw(r,e,...t){let n=[];e instanceof Qc&&n.push(e),n=n.concat(t),function(s){const o=s.filter(u=>u instanceof Jc).length,c=s.filter(u=>u instanceof Xc).length;if(o>1||o>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Xc extends gm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Xc(e,t,n)}_apply(e){const t=this._parse(e);return _m(e._query,t),new Wt(e.firestore,e.converter,Sa(e._query,t))}_parse(e){const t=$c(e.firestore);return function(s,o,c,u,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Yh(m,f);const C=[];for(const k of m)C.push(Jh(u,s,k));_={arrayValue:{values:C}}}else _=Jh(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Yh(m,f),_=HE(c,o,m,f==="in"||f==="not-in");return Q.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Jc extends Qc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)_m(o,u),o=Sa(o,u)}(e._query,t),new Wt(e.firestore,e.converter,Sa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yc extends gm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yc(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mi(s,o)}(e._query,this._field,this._direction);return new Wt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new mr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function pw(r,e="asc"){const t=e,n=Hc("orderBy",r);return Yc._create(n,t)}function Jh(r,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uf(e)&&t.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Y.fromString(t));if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fi(r,new O(n))}if(t instanceof pe)return fi(r,t._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Js(t)}.`)}function Yh(r,e){if(!Array.isArray(r)||r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _m(r,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class JE{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Kt(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[Zn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>oe(o.doubleValue));return new Ze(s)}convertGeoPoint(e){return new Ye(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ro(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const t=dt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Y.fromString(e);U(pp(n),9688,{name:e});const i=new yn(n.get(1),n.get(3)),s=new O(n.popFirst(5));return i.isEqual(t)||le(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class Gr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dn extends pm{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",dn._jsonSchema={type:fe("string",dn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ts extends dn{data(e={}){return super.data(e)}}class fn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ts(this._firestore,this._userDataWriter,n.key,n,new Gr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Ts(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Gr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Ts(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Gr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:ZE(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ic.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}fn._jsonSchemaVersion="firestore/querySnapshot/1.0",fn._jsonSchema={type:fe("string",fn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class Zc extends JE{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function mw(r){r=ut(r,Wt);const e=ut(r.firestore,An),t=qc(e),n=new Zc(e);return mm(r._query),FE(t,r._query).then(i=>new fn(e,n,r,i))}function gw(r,e,t,...n){r=ut(r,pe);const i=ut(r.firestore,An),s=$c(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof yo?WE(s,"updateDoc",r._key,e,t,n):GE(s,"updateDoc",r._key,e),eu(i,[o.toMutation(r._key,ke.exists(!0))])}function _w(r){return eu(ut(r.firestore,An),[new uo(r._key,ke.none())])}function yw(r,e){const t=ut(r.firestore,An),n=BE(r),i=YE(r.converter,e);return eu(t,[KE($c(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,ke.exists(!1))]).then(()=>n)}function Iw(r,...e){var t,n,i;r=ye(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Xh(e[o])||(s=e[o++]);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xh(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(r instanceof pe)h=ut(r.firestore,An),f=so(r._key.path),u={next:m=>{e[o]&&e[o](ew(h,r,m))},error:e[o+1],complete:e[o+2]};else{const m=ut(r,Wt);h=ut(m.firestore,An),f=m._query;const _=new Zc(h);u={next:S=>{e[o]&&e[o](new fn(h,_,m,S))},error:e[o+1],complete:e[o+2]},mm(r._query)}return function(_,S,C,k){const D=new om(k),$=new Yp(S,D,C);return _.asyncQueue.enqueueAndForget(async()=>Xp(await ja(_),$)),()=>{D.Ou(),_.asyncQueue.enqueueAndForget(async()=>Jp(await ja(_),$))}}(qc(h),f,c,u)}function eu(r,e){return function(n,i){const s=new ct;return n.asyncQueue.enqueueAndForget(async()=>IE(await LE(n),i,s)),s.promise}(qc(r),e)}function ew(r,e,t){const n=t.docs.get(e._key),i=new Zc(r);return new dn(r,i,e._key,n,new Gr(t.hasPendingWrites,t.fromCache),e.converter)}class tw{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=iw(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function vw(r){return new tw(r)}class nw{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=yi.provider,this._offlineComponentProvider={build:t=>new sm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class rw{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=yi.provider,this._offlineComponentProvider={build:t=>new xE(t,e==null?void 0:e.cacheSizeBytes)}}}function iw(r){return new nw(void 0)}function Tw(){return new rw}function Ew(){return new Kc("serverTimestamp")}(function(e,t=!0){(function(i){pr=i})(dr),Kn(new mn("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new An(new xI(n.getProvider("auth-internal")),new LI(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Nt(Vl,Dl,e),Nt(Vl,Dl,"esm2017")})();export{St as G,ee as T,dw as a,Tw as b,aw as c,ow as d,pw as e,Iw as f,uw as g,hw as h,E_ as i,mw as j,yw as k,BE as l,_w as m,Ew as n,sw as o,vw as p,fw as q,cw as s,gw as u};
