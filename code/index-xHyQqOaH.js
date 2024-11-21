const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["code/app-email-D83FnHBG.js","code/db-lsGyomYS.js","code/app-customer-CdE_bx00.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var ht="";function ut(r){ht=r}function ue(r=""){if(!ht){const t=[...document.getElementsByTagName("script")],e=t.find(o=>o.hasAttribute("data-shoelace"));if(e)ut(e.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";o&&(s=o.getAttribute("src")),ut(s.split("/").slice(0,-1).join("/"))}}return ht.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var Kt=Object.defineProperty,pe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,fe=Object.getOwnPropertyDescriptors,Pt=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,Lt=(r,t,e)=>t in r?Kt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,q=(r,t)=>{for(var e in t||(t={}))ge.call(t,e)&&Lt(r,e,t[e]);if(Pt)for(var e of Pt(t))me.call(t,e)&&Lt(r,e,t[e]);return r},Zt=(r,t)=>pe(r,fe(t)),h=(r,t,e,o)=>{for(var s=o>1?void 0:o?be(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Kt(t,e,s),s},Gt=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},ve=(r,t,e)=>(Gt(r,t,"read from private field"),t.get(r)),ye=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},_e=(r,t,e,o)=>(Gt(r,t,"write to private field"),t.set(r,e),e);ut("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,gt=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),Ot=new WeakMap;let Yt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(gt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ot.set(e,t))}return t}toString(){return this.cssText}};const we=r=>new Yt(typeof r=="string"?r:r+"",void 0,mt),_=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new Yt(e,r,mt)},$e=(r,t)=>{if(gt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=Y.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,r.appendChild(o)}},Ut=gt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return we(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xe,defineProperty:Ae,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Ce,getOwnPropertySymbols:Se,getPrototypeOf:ke}=Object,rt=globalThis,Rt=rt.trustedTypes,Pe=Rt?Rt.emptyScript:"",Le=rt.reactiveElementPolyfillSupport,I=(r,t)=>r,Q={toAttribute(r,t){switch(t){case Boolean:r=r?Pe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},vt=(r,t)=>!xe(r,t),Tt={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:vt};Symbol.metadata??=Symbol("metadata"),rt.litPropertyMetadata??=new WeakMap;class U extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Ae(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=Ee(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){const l=s?.call(this);i.call(this,n),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tt}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=ke(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,o=[...Ce(e),...Se(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(Ut(s))}else t!==void 0&&e.push(Ut(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $e(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Q).toAttribute(e,o.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=o.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Q;this._$Em=s,this[s]=n.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??vt)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[I("elementProperties")]=new Map,U[I("finalized")]=new Map,Le?.({ReactiveElement:U}),(rt.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=globalThis,tt=yt.trustedTypes,Mt=tt?tt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Jt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Xt="?"+x,Oe=`<${Xt}>`,L=document,D=()=>L.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",_t=Array.isArray,Ue=r=>_t(r)||typeof r?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Nt=/>/g,S=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,Vt=/"/g,Qt=/^(?:script|style|textarea|title)$/i,Re=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),g=Re(1),O=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),It=new WeakMap,P=L.createTreeWalker(L,129);function te(r,t){if(!_t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}const Te=(r,t)=>{const e=r.length-1,o=[];let s,i=t===2?"<svg>":t===3?"<math>":"",n=M;for(let l=0;l<e;l++){const a=r[l];let d,b,c=-1,m=0;for(;m<a.length&&(n.lastIndex=m,b=n.exec(a),b!==null);)m=n.lastIndex,n===M?b[1]==="!--"?n=zt:b[1]!==void 0?n=Nt:b[2]!==void 0?(Qt.test(b[2])&&(s=RegExp("</"+b[2],"g")),n=S):b[3]!==void 0&&(n=S):n===S?b[0]===">"?(n=s??M,c=-1):b[1]===void 0?c=-2:(c=n.lastIndex-b[2].length,d=b[1],n=b[3]===void 0?S:b[3]==='"'?Vt:Bt):n===Vt||n===Bt?n=S:n===zt||n===Nt?n=M:(n=S,s=void 0);const v=n===S&&r[l+1].startsWith("/>")?" ":"";i+=n===M?a+Oe:c>=0?(o.push(d),a.slice(0,c)+Jt+a.slice(c)+x+v):a+x+(c===-2?l:v)}return[te(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class j{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const l=t.length-1,a=this.parts,[d,b]=Te(t,e);if(this.el=j.createElement(d,o),P.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=P.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Jt)){const m=b[n++],v=s.getAttribute(c).split(x),K=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:K[2],strings:v,ctor:K[1]==="."?ze:K[1]==="?"?Ne:K[1]==="@"?Be:ot}),s.removeAttribute(c)}else c.startsWith(x)&&(a.push({type:6,index:i}),s.removeAttribute(c));if(Qt.test(s.tagName)){const c=s.textContent.split(x),m=c.length-1;if(m>0){s.textContent=tt?tt.emptyScript:"";for(let v=0;v<m;v++)s.append(c[v],D()),P.nextNode(),a.push({type:2,index:++i});s.append(c[m],D())}}}else if(s.nodeType===8)if(s.data===Xt)a.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(x,c+1))!==-1;)a.push({type:7,index:i}),c+=x.length-1}i++}}static createElement(t,e){const o=L.createElement("template");return o.innerHTML=t,o}}function T(r,t,e=r,o){if(t===O)return t;let s=o!==void 0?e._$Co?.[o]:e._$Cl;const i=H(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=s:e._$Cl=s),s!==void 0&&(t=T(r,s._$AS(r,t.values),s,o)),t}class Me{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=(t?.creationScope??L).importNode(e,!0);P.currentNode=s;let i=P.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new W(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new Ve(i,this,t)),this._$AV.push(d),a=o[++l]}n!==a?.index&&(i=P.nextNode(),n++)}return P.currentNode=L,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class W{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),H(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ue(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=j.createElement(te(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(e);else{const i=new Me(s,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new j(t)),e}k(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new W(this.O(D()),this.O(D()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=f}_$AI(t,e=this,o,s){const i=this.strings;let n=!1;if(i===void 0)t=T(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const l=t;let a,d;for(t=i[0],a=0;a<i.length-1;a++)d=T(this,l[o+a],e,a),d===O&&(d=this._$AH[a]),n||=!H(d)||d!==this._$AH[a],d===f?t=f:t!==f&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ze extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Ne extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Be extends ot{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??f)===O)return;const o=this._$AH,s=t===f&&o!==f||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==f&&(o===f||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ve{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const Ie=yt.litHtmlPolyfillSupport;Ie?.(j,W),(yt.litHtmlVersions??=[]).push("3.2.1");const De=(r,t,e)=>{const o=e?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const i=e?.renderBefore??null;o._$litPart$=s=new W(t.insertBefore(D(),i),i,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=De(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};E._$litElement$=!0,E.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:E});const He=globalThis.litElementPolyfillSupport;He?.({LitElement:E});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:vt},Fe=(r=je,t,e)=>{const{kind:o,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,r),o==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(o==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+o)};function u(r){return(t,e)=>typeof e=="object"?Fe(r,t,e):((o,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,i):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(r){return u({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(r,t){return(e,o,s)=>{const i=n=>n.renderRoot?.querySelector(r)??null;return qe(e,o,{get(){return i(this)}})}}const Ke="modulepreload",Ze=function(r){return"/mbb/"+r},Dt={},J=function(t,e,o){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(e.map(a=>{if(a=Ze(a),a in Dt)return;Dt[a]=!0;const d=a.endsWith(".css"),b=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${b}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":Ke,d||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),d)return new Promise((m,v)=>{c.addEventListener("load",m),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return s.then(n=>{for(const l of n||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},xt=Symbol.for("app-tools::log::1.x");globalThis[xt]={setDebug:Ge,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Ge(r){globalThis[xt].debug=!!r}function Ye(r,t){globalThis[xt].debug&&(console.groupCollapsed(`[app-tools] ${r}`),t&&console.log(t),console.groupEnd())}function Je(r){return(t,e)=>{Ye(`${r}: ${t}`,e)}}const $=Je("router");class Xe extends Event{constructor(t){super("route-changed"),this.context=t}}class Qe extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(e=>({...e,urlPattern:new URLPattern({pathname:e.path,baseURL:window.location.href,search:"*",hash:"*"})})),$("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return $(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const e of this.routes){const o=e.urlPattern.exec(t);if(o){const{title:s}=e,i=Object.fromEntries(new URLSearchParams(t.search)),n=o?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:n,query:i,url:t}):s,params:n,query:i},e}}return $(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Xe(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(i=>i.tagName==="A");if(!e||!e.href)return;const o=new URL(e.href);if(this.url.href===o.href||o.host!==window.location.host||e.hasAttribute("download")||e.href.includes("mailto:"))return;const s=e.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,e={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);$(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(o);for(const i of s)try{const n=await i?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(o),$("Redirecting",{context:this.context,route:this.route})))}catch(n){throw $(`Plugin "${i.name}" error on shouldNavigate hook`,n),n}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of s)try{await i?.beforeNavigation?.(this.context)}catch(n){throw $(`Plugin "${i.name}" error on beforeNavigation hook`,n),n}e?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):e.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of s)try{await i?.afterNavigation?.(this.context)}catch(n){throw $(`Plugin "${i.name}" error on afterNavigation hook`,n),n}}}function nt(r){return{name:"lazy",beforeNavigation:()=>{r()}}}globalThis.URLPattern||await J(()=>import("./index-CBloBB_n.js"),[]);const tr="/mbb/",Ht=new Qe({routes:[{path:A(),title:"Home",render:()=>g`<app-home></app-home>`},{path:A("about"),title:"About",plugins:[nt(()=>J(()=>import("./app-about-BywXtgJa.js"),[]))],render:()=>g`<app-about></app-about>`},{path:A("email"),title:"Email",plugins:[nt(()=>J(()=>import("./app-email-D83FnHBG.js"),__vite__mapDeps([0,1])))],render:()=>g`<app-email></app-email>`},{path:A("customer"),title:"Customer",plugins:[nt(()=>J(()=>import("./app-customer-CdE_bx00.js"),__vite__mapDeps([2,1])))],render:()=>g`<app-customer></app-customer>`}]});function A(r){var t=tr;return r&&(t=t+r),t}var er=_`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,ee=class{constructor(r,...t){this.slotNames=[],this.handleSlotChange=e=>{const o=e.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const t=r;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},st=_`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,X,C=class extends E{constructor(){super(),ye(this,X,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([r,t])=>{this.constructor.define(r,t)})}emit(r,t){const e=new CustomEvent(r,q({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(r,t=this,e={}){const o=customElements.get(r);if(!o){try{customElements.define(r,t,e)}catch{customElements.define(r,class extends t{},e)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${r}>${s}, but <${r}>${i} has already been registered.`)}attributeChangedCallback(r,t,e){ve(this,X)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),_e(this,X,!0)),super.attributeChangedCallback(r,t,e)}willUpdate(r){super.willUpdate(r),this.initialReflectedProperties.forEach((t,e)=>{r.has(e)&&this[e]==null&&(this[e]=t)})}};X=new WeakMap;C.version="2.18.0";C.dependencies={};h([u()],C.prototype,"dir",2);h([u()],C.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},or=r=>(...t)=>({_$litDirective$:r,values:t});let sr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=or(class extends sr{constructor(r){if(super(r),r.type!==rr.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const e=r.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||this.nt?.has(o)||(s?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return O}});var oe=class extends C{constructor(){super(...arguments),this.hasSlotController=new ee(this,"footer","header","image")}render(){return g`
      <div
        part="base"
        class=${re({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};oe.styles=[st,er];oe.define("sl-card");var ir=_`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const pt=new Set,R=new Map;let k,At="ltr",Et="en";const se=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(se){const r=new MutationObserver(ne);At=document.documentElement.dir||"ltr",Et=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ie(...r){r.map(t=>{const e=t.$code.toLowerCase();R.has(e)?R.set(e,Object.assign(Object.assign({},R.get(e)),t)):R.set(e,t),k||(k=t)}),ne()}function ne(){se&&(At=document.documentElement.dir||"ltr",Et=document.documentElement.lang||navigator.language),[...pt.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}let nr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){pt.add(this.host)}hostDisconnected(){pt.delete(this.host)}dir(){return`${this.host.dir||At}`.toLowerCase()}lang(){return`${this.host.lang||Et}`.toLowerCase()}getTranslationData(t){var e,o;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),n=(o=(e=s?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",l=R.get(`${i}-${n}`),a=R.get(i);return{locale:s,language:i,region:n,primary:l,secondary:a}}exists(t,e){var o;const{primary:s,secondary:i}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&k&&k[t])}term(t,...e){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(s&&s[t])i=s[t];else if(k&&k[t])i=k[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var ae={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,t)=>`Go to slide ${r} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};ie(ae);var ar=ae,le=class extends nr{};ie(ar);var ce=class extends C{constructor(){super(...arguments),this.localize=new le(this)}render(){return g`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ce.styles=[st,ir];var z=new WeakMap,N=new WeakMap,B=new WeakMap,at=new WeakSet,Z=new WeakMap,lr=class{constructor(r,t){this.handleFormData=e=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(l=>{e.formData.append(s,l.toString())}):e.formData.append(s,i.toString()))},this.handleFormSubmit=e=>{var o;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=z.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Z.set(this.host,[])},this.handleInteraction=e=>{const o=Z.get(this.host);o.includes(e.type)||o.push(e.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=r).addController(this),this.options=q({form:e=>{const o=e.form;if(o){const i=e.getRootNode().querySelector(`#${o}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,o)=>e.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const r=this.options.form(this.host);r&&this.attachForm(r),Z.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Z.delete(this.host),this.options.assumeInteractionOn.forEach(r=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){const r=this.options.form(this.host);r||this.detachForm(),r&&this.form!==r&&(this.detachForm(),this.attachForm(r)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,z.has(this.form)?z.get(this.form).add(this.host):z.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),N.has(this.form)||(N.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),B.has(this.form)||(B.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const r=z.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),N.has(this.form)&&(this.form.reportValidity=N.get(this.form),N.delete(this.form)),B.has(this.form)&&(this.form.checkValidity=B.get(this.form),B.delete(this.form)),this.form=void 0))}setUserInteracted(r,t){t?at.add(r):at.delete(r),r.requestUpdate()}doAction(r,t){if(this.form){const e=document.createElement("button");e.type=r,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){const t=this.host,e=!!at.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!r),t.toggleAttribute("data-valid",r),t.toggleAttribute("data-user-invalid",!r&&e),t.toggleAttribute("data-user-valid",r&&e)}updateValidity(){const r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});r||t.preventDefault(),this.host.dispatchEvent(t)||r?.preventDefault()}},Ct=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Zt(q({},Ct),{valid:!1,valueMissing:!0}));Object.freeze(Zt(q({},Ct),{valid:!1,customError:!0}));var cr=_`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,dr={name:"default",resolver:r=>ue(`assets/icons/${r}.svg`)},hr=dr,jt={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ur={name:"system",resolver:r=>r in jt?`data:image/svg+xml,${encodeURIComponent(jt[r])}`:""},pr=ur,br=[hr,pr],bt=[];function fr(r){bt.push(r)}function gr(r){bt=bt.filter(t=>t!==r)}function Ft(r){return br.find(t=>t.name===r)}var mr=_`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function St(r,t){const e=q({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o,n=Array.isArray(r)?r:[r];o.update=function(l){n.forEach(a=>{const d=a;if(l.has(d)){const b=l.get(d),c=this[d];b!==c&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](b,c)}}),i.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=(r,t)=>r?._$litType$!==void 0;var V=Symbol(),G=Symbol(),lt,ct=new Map,w=class extends C{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,t){var e;let o;if(t?.spriteSheet)return this.svg=g`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(o=await fetch(r,{mode:"cors"}),!o.ok)return o.status===410?V:G}catch{return G}try{const s=document.createElement("div");s.innerHTML=await o.text();const i=s.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return V;lt||(lt=new DOMParser);const l=lt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):V}catch{return V}}connectedCallback(){super.connectedCallback(),fr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gr(this)}getIconSource(){const r=Ft(this.library);return this.name&&r?{url:r.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const{url:t,fromLibrary:e}=this.getIconSource(),o=e?Ft(this.library):void 0;if(!t){this.svg=null;return}let s=ct.get(t);if(s||(s=this.resolveIcon(t,o),ct.set(t,s)),!this.initialRender)return;const i=await s;if(i===G&&ct.delete(t),t===this.getIconSource().url){if(vr(i)){if(this.svg=i,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(i){case G:case V:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(r=o?.mutator)==null||r.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};w.styles=[st,mr];h([$t()],w.prototype,"svg",2);h([u({reflect:!0})],w.prototype,"name",2);h([u()],w.prototype,"src",2);h([u()],w.prototype,"label",2);h([u({reflect:!0})],w.prototype,"library",2);h([St("label")],w.prototype,"handleLabelChange",1);h([St(["name","src","library"])],w.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=Symbol.for(""),yr=r=>{if(r?.r===de)return r?._$litStatic$},qt=(r,...t)=>({_$litStatic$:t.reduce((e,o,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+r[s+1],r[0]),r:de}),Wt=new Map,_r=r=>(t,...e)=>{const o=e.length;let s,i;const n=[],l=[];let a,d=0,b=!1;for(;d<o;){for(a=t[d];d<o&&(i=e[d],(s=yr(i))!==void 0);)a+=s+t[++d],b=!0;d!==o&&l.push(i),n.push(a),d++}if(d===o&&n.push(t[o]),b){const c=n.join("$$lit$$");(t=Wt.get(c))===void 0&&(n.raw=n,Wt.set(c,t=n)),e=l}return r(t,...e)},dt=_r(g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>r??f;var p=class extends C{constructor(){super(...arguments),this.formControlController=new lr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ee(this,"[default]","prefix","suffix"),this.localize=new le(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ct}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),t=r?qt`a`:qt`button`;return dt`
      <${t}
        part="base"
        class=${re({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(r?void 0:this.disabled)}
        type=${y(r?void 0:this.type)}
        title=${this.title}
        name=${y(r?void 0:this.name)}
        value=${y(r?void 0:this.value)}
        href=${y(r&&!this.disabled?this.href:void 0)}
        target=${y(r?this.target:void 0)}
        download=${y(r?this.download:void 0)}
        rel=${y(r?this.rel:void 0)}
        role=${y(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?dt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?dt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};p.styles=[st,cr];p.dependencies={"sl-icon":w,"sl-spinner":ce};h([We(".button")],p.prototype,"button",2);h([$t()],p.prototype,"hasFocus",2);h([$t()],p.prototype,"invalid",2);h([u()],p.prototype,"title",2);h([u({reflect:!0})],p.prototype,"variant",2);h([u({reflect:!0})],p.prototype,"size",2);h([u({type:Boolean,reflect:!0})],p.prototype,"caret",2);h([u({type:Boolean,reflect:!0})],p.prototype,"disabled",2);h([u({type:Boolean,reflect:!0})],p.prototype,"loading",2);h([u({type:Boolean,reflect:!0})],p.prototype,"outline",2);h([u({type:Boolean,reflect:!0})],p.prototype,"pill",2);h([u({type:Boolean,reflect:!0})],p.prototype,"circle",2);h([u()],p.prototype,"type",2);h([u()],p.prototype,"name",2);h([u()],p.prototype,"value",2);h([u()],p.prototype,"href",2);h([u()],p.prototype,"target",2);h([u()],p.prototype,"rel",2);h([u()],p.prototype,"download",2);h([u()],p.prototype,"form",2);h([u({attribute:"formaction"})],p.prototype,"formAction",2);h([u({attribute:"formenctype"})],p.prototype,"formEnctype",2);h([u({attribute:"formmethod"})],p.prototype,"formMethod",2);h([u({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);h([u({attribute:"formtarget"})],p.prototype,"formTarget",2);h([St("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p.define("sl-button");const wr=_`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var $r=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,he=(r,t,e,o)=>{for(var s=o>1?void 0:o?xr(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&$r(t,e,s),s};let et=class extends E{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return g`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?g`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        Share this Starter!
                      </sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${A("about")}" variant="primary">Navigate to About</sl-button>
            <sl-button href="${A("email")}" variant="primary">Navigate to Email</sl-button>
          <sl-button href="${A("customer")}" variant="primary">Navigate to Custumer</sl-b
        </div>
      </main>
    `}};et.styles=[wr,_`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];he([u()],et.prototype,"message",2);et=he([wt("app-home")],et);var Ar=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,kt=(r,t,e,o)=>{for(var s=o>1?void 0:o?Er(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Ar(t,e,s),s};let F=class extends E{constructor(){super(...arguments),this.title="mbb",this.enableBack=!1}render(){return g`
      <header>

        <div id="back-button-block">
          ${this.enableBack?g`<sl-button size="small" href="${A()}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};F.styles=_`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;kt([u({type:String})],F.prototype,"title",2);kt([u({type:Boolean})],F.prototype,"enableBack",2);F=kt([wt("app-header")],F);var Cr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,kr=(r,t,e,o)=>{for(var s=o>1?void 0:o?Sr(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Cr(t,e,s),s};let ft=class extends E{firstUpdated(){Ht.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return Ht.render()}};ft.styles=_`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;ft=kr([wt("app-index")],ft);export{$t as a,_ as i,E as r,wr as s,wt as t,g as x};
//# sourceMappingURL=index-xHyQqOaH.js.map
