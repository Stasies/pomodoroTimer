const qs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};qs();function aa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gs=aa(Xs);function no(e){return!!e||e===""}function Me(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=me(r)?Zs(r):Me(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(me(e))return e;if(de(e))return e}}const Qs=/;(?![^(]*\))/g,Js=/:(.+)/;function Zs(e){const t={};return e.split(Qs).forEach(n=>{if(n){const r=n.split(Js);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ia(e){let t="";if(me(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=ia(e[n]);r&&(t+=r+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const jt=e=>me(e)?e:e==null?"":H(e)||de(e)&&(e.toString===oo||!B(e.toString))?JSON.stringify(e,ro,2):String(e),ro=(e,t)=>t&&t.__v_isRef?ro(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ao(t)?{[`Set(${t.size})`]:[...t.values()]}:de(t)&&!H(t)&&!so(t)?String(t):t,ee={},Dt=[],Fe=()=>{},el=()=>!1,tl=/^on[^a-z]/,Qn=e=>tl.test(e),oa=e=>e.startsWith("onUpdate:"),we=Object.assign,sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},nl=Object.prototype.hasOwnProperty,V=(e,t)=>nl.call(e,t),H=Array.isArray,Ht=e=>Jn(e)==="[object Map]",ao=e=>Jn(e)==="[object Set]",B=e=>typeof e=="function",me=e=>typeof e=="string",la=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",io=e=>de(e)&&B(e.then)&&B(e.catch),oo=Object.prototype.toString,Jn=e=>oo.call(e),rl=e=>Jn(e).slice(8,-1),so=e=>Jn(e)==="[object Object]",ca=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,In=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},al=/-(\w)/g,Ye=Zn(e=>e.replace(al,(t,n)=>n?n.toUpperCase():"")),il=/\B([A-Z])/g,Vt=Zn(e=>e.replace(il,"-$1").toLowerCase()),er=Zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),pr=Zn(e=>e?`on${er(e)}`:""),pn=(e,t)=>!Object.is(e,t),Mn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},jn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Or=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ba;const ol=()=>Ba||(Ba=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let He;class sl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&He&&(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1)}run(t){if(this.active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ll(e,t=He){t&&t.active&&t.effects.push(e)}const fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lo=e=>(e.w&dt)>0,co=e=>(e.n&dt)>0,cl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},fl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];lo(a)&&!co(a)?a.delete(e):t[n++]=a,a.w&=~dt,a.n&=~dt}t.length=n}},Pr=new WeakMap;let tn=0,dt=1;const Sr=30;let Ie;const xt=Symbol(""),Tr=Symbol("");class ua{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ll(this,r)}run(){if(!this.active)return this.fn();let t=Ie,n=ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,ct=!0,dt=1<<++tn,tn<=Sr?cl(this):Wa(this),this.fn()}finally{tn<=Sr&&fl(this),dt=1<<--tn,Ie=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(Wa(this),this.onStop&&this.onStop(),this.active=!1)}}function Wa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ct=!0;const fo=[];function qt(){fo.push(ct),ct=!1}function Xt(){const e=fo.pop();ct=e===void 0?!0:e}function Ee(e,t,n){if(ct&&Ie){let r=Pr.get(e);r||Pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=fa()),uo(a)}}function uo(e,t){let n=!1;tn<=Sr?co(e)||(e.n|=dt,n=!lo(e)):n=!e.has(Ie),n&&(e.add(Ie),Ie.deps.push(e))}function Xe(e,t,n,r,a,i){const o=Pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ca(n)&&s.push(o.get("length")):(s.push(o.get(xt)),Ht(e)&&s.push(o.get(Tr)));break;case"delete":H(e)||(s.push(o.get(xt)),Ht(e)&&s.push(o.get(Tr)));break;case"set":Ht(e)&&s.push(o.get(xt));break}if(s.length===1)s[0]&&Rr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Rr(fa(l))}}function Rr(e,t){for(const n of H(e)?e:[...e])(n!==Ie||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ul=aa("__proto__,__v_isRef,__isVue"),mo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(la)),dl=da(),ml=da(!1,!0),hl=da(!0),Ya=pl();function pl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){qt();const r=X(this)[t].apply(this,n);return Xt(),r}}),e}function da(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Rl:bo:t?vo:go).get(r))return r;const o=H(r);if(!e&&o&&V(Ya,a))return Reflect.get(Ya,a,i);const s=Reflect.get(r,a,i);return(la(a)?mo.has(a):ul(a))||(e||Ee(r,"get",a),t)?s:ge(s)?!o||!ca(a)?s.value:s:de(s)?e?yo(s):Cn(s):s}}const gl=ho(),vl=ho(!0);function ho(e=!1){return function(n,r,a,i){let o=n[r];if(gn(o)&&ge(o)&&!ge(a))return!1;if(!e&&!gn(a)&&(wo(a)||(a=X(a),o=X(o)),!H(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=H(n)&&ca(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?pn(a,o)&&Xe(n,"set",r,a):Xe(n,"add",r,a)),l}}function bl(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function yl(e,t){const n=Reflect.has(e,t);return(!la(t)||!mo.has(t))&&Ee(e,"has",t),n}function wl(e){return Ee(e,"iterate",H(e)?"length":xt),Reflect.ownKeys(e)}const po={get:dl,set:gl,deleteProperty:bl,has:yl,ownKeys:wl},xl={get:hl,set(e,t){return!0},deleteProperty(e,t){return!0}},_l=we({},po,{get:ml,set:vl}),ma=e=>e,tr=e=>Reflect.getPrototypeOf(e);function En(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);t!==i&&!n&&Ee(a,"get",t),!n&&Ee(a,"get",i);const{has:o}=tr(a),s=r?ma:n?ga:vn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function On(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return e!==a&&!t&&Ee(r,"has",e),!t&&Ee(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&Ee(X(e),"iterate",xt),Reflect.get(e,"size",e)}function Ka(e){e=X(e);const t=X(this);return tr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function Va(e,t){t=X(t);const n=X(this),{has:r,get:a}=tr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?pn(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function qa(e){const t=X(this),{has:n,get:r}=tr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function Xa(){const e=X(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?ma:e?ga:vn;return!e&&Ee(s,"iterate",xt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Tn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Ht(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?ma:t?ga:vn;return!t&&Ee(i,"iterate",l?Tr:xt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:this}}function Cl(){const e={get(i){return En(this,i)},get size(){return Pn(this)},has:On,add:Ka,set:Va,delete:qa,clear:Xa,forEach:Sn(!1,!1)},t={get(i){return En(this,i,!1,!0)},get size(){return Pn(this)},has:On,add:Ka,set:Va,delete:qa,clear:Xa,forEach:Sn(!1,!0)},n={get(i){return En(this,i,!0)},get size(){return Pn(this,!0)},has(i){return On.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Sn(!0,!1)},r={get(i){return En(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return On.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tn(i,!1,!1),n[i]=Tn(i,!0,!1),t[i]=Tn(i,!1,!0),r[i]=Tn(i,!0,!0)}),[e,n,t,r]}const[kl,Al,El,Ol]=Cl();function ha(e,t){const n=t?e?Ol:El:e?Al:kl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Pl={get:ha(!1,!1)},Sl={get:ha(!1,!0)},Tl={get:ha(!0,!1)},go=new WeakMap,vo=new WeakMap,bo=new WeakMap,Rl=new WeakMap;function Il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ml(e){return e.__v_skip||!Object.isExtensible(e)?0:Il(rl(e))}function Cn(e){return gn(e)?e:pa(e,!1,po,Pl,go)}function Nl(e){return pa(e,!1,_l,Sl,vo)}function yo(e){return pa(e,!0,xl,Tl,bo)}function pa(e,t,n,r,a){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return gn(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function gn(e){return!!(e&&e.__v_isReadonly)}function wo(e){return!!(e&&e.__v_isShallow)}function xo(e){return Ut(e)||gn(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function _o(e){return jn(e,"__v_skip",!0),e}const vn=e=>de(e)?Cn(e):e,ga=e=>de(e)?yo(e):e;function Co(e){ct&&Ie&&(e=X(e),uo(e.dep||(e.dep=fa())))}function ko(e,t){e=X(e),e.dep&&Rr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function ye(e){return Ao(e,!1)}function Ll(e){return Ao(e,!0)}function Ao(e,t){return ge(e)?e:new Fl(e,t)}class Fl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:vn(t)}get value(){return Co(this),this._value}set value(t){t=this.__v_isShallow?t:X(t),pn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:vn(t),ko(this))}}function ue(e){return ge(e)?e.value:e}const zl={get:(e,t,n)=>ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Eo(e){return Ut(e)?e:new Proxy(e,zl)}class $l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ua(t,()=>{this._dirty||(this._dirty=!0,ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return Co(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function jl(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new $l(r,a,i||!a,n)}function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){nr(i,t,n)}return a}function ze(e,t,n,r){if(B(e)){const i=ft(e,t,n,r);return i&&io(i)&&i.catch(o=>{nr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function nr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}Dl(e,n,a,r)}function Dl(e,t,n,r=!0){console.error(e)}let Dn=!1,Ir=!1;const Ae=[];let qe=0;const on=[];let nn=null,Mt=0;const sn=[];let ot=null,Nt=0;const Oo=Promise.resolve();let va=null,Mr=null;function Po(e){const t=va||Oo;return e?t.then(this?e.bind(this):e):t}function Hl(e){let t=qe+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;bn(Ae[r])<e?t=r+1:n=r}return t}function So(e){(!Ae.length||!Ae.includes(e,Dn&&e.allowRecurse?qe+1:qe))&&e!==Mr&&(e.id==null?Ae.push(e):Ae.splice(Hl(e.id),0,e),To())}function To(){!Dn&&!Ir&&(Ir=!0,va=Oo.then(Mo))}function Ul(e){const t=Ae.indexOf(e);t>qe&&Ae.splice(t,1)}function Ro(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),To()}function Bl(e){Ro(e,nn,on,Mt)}function Wl(e){Ro(e,ot,sn,Nt)}function ba(e,t=null){if(on.length){for(Mr=t,nn=[...new Set(on)],on.length=0,Mt=0;Mt<nn.length;Mt++)nn[Mt]();nn=null,Mt=0,Mr=null,ba(e,t)}}function Io(e){if(sn.length){const t=[...new Set(sn)];if(sn.length=0,ot){ot.push(...t);return}for(ot=t,ot.sort((n,r)=>bn(n)-bn(r)),Nt=0;Nt<ot.length;Nt++)ot[Nt]();ot=null,Nt=0}}const bn=e=>e.id==null?1/0:e.id;function Mo(e){Ir=!1,Dn=!0,ba(e),Ae.sort((n,r)=>bn(n)-bn(r));const t=Fe;try{for(qe=0;qe<Ae.length;qe++){const n=Ae[qe];n&&n.active!==!1&&ft(n,null,14)}}finally{qe=0,Ae.length=0,Io(),Dn=!1,va=null,(Ae.length||on.length||sn.length)&&Mo(e)}}function Yl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||ee;h?a=n.map(g=>g.trim()):d&&(a=n.map(Or))}let s,l=r[s=pr(t)]||r[s=pr(Ye(t))];!l&&i&&(l=r[s=pr(Vt(t))]),l&&ze(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(c,e,6,a)}}function No(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=No(c,t,!0);f&&(s=!0,we(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):we(o,i),r.set(e,o),o)}function rr(e,t){return!e||!Qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Vt(t))||V(e,t))}let Ne=null,Lo=null;function Hn(e){const t=Ne;return Ne=e,Lo=e&&e.type.__scopeId||null,t}function Kl(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ii(-1);const i=Hn(t),o=e(...a);return Hn(i),r._d&&ii(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function gr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:g,ctx:C,inheritAttrs:R}=e;let P,v;const _=Hn(e);try{if(n.shapeFlag&4){const j=a||r;P=Be(f.call(j,j,d,i,g,h,C)),v=l}else{const j=t;P=Be(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),v=t.props?l:Vl(l)}}catch(j){cn.length=0,nr(j,e,1),P=re(kt)}let N=P;if(v&&R!==!1){const j=Object.keys(v),{shapeFlag:K}=N;j.length&&K&7&&(o&&j.some(oa)&&(v=ql(v,o)),N=yn(N,v))}return n.dirs&&(N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),P=N,Hn(_),P}const Vl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qn(n))&&((t||(t={}))[n]=e[n]);return t},ql=(e,t)=>{const n={};for(const r in e)(!oa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ga(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!rr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ga(r,o,c):!0:!!o;return!1}function Ga(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!rr(n,i))return!0}return!1}function Gl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ql=e=>e.__isSuspense;function Jl(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Wl(e)}function Nn(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function ut(e,t,n=!1){const r=pe||Ne;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Qa={};function ln(e,t,n){return Fo(e,t,n)}function Fo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){const s=pe;let l,c=!1,f=!1;if(ge(e)?(l=()=>e.value,c=wo(e)):Ut(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(Ut),l=()=>e.map(v=>{if(ge(v))return v.value;if(Ut(v))return yt(v);if(B(v))return ft(v,s,2)})):B(e)?t?l=()=>ft(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[h])}:l=Fe,t&&r){const v=l;l=()=>yt(v())}let d,h=v=>{d=P.onStop=()=>{ft(v,s,4)}};if(wn)return h=Fe,t?n&&ze(t,s,3,[l(),f?[]:void 0,h]):l(),Fe;let g=f?[]:Qa;const C=()=>{if(!!P.active)if(t){const v=P.run();(r||c||(f?v.some((_,N)=>pn(_,g[N])):pn(v,g)))&&(d&&d(),ze(t,s,3,[v,g===Qa?void 0:g,h]),g=v)}else P.run()};C.allowRecurse=!!t;let R;a==="sync"?R=C:a==="post"?R=()=>xe(C,s&&s.suspense):R=()=>{!s||s.isMounted?Bl(C):C()};const P=new ua(l,R);return t?n?C():g=P.run():a==="post"?xe(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&sa(s.scope.effects,P)}}function Zl(e,t,n){const r=this.proxy,a=me(e)?e.includes(".")?zo(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=pe;Wt(this);const s=Fo(a,i.bind(r),n);return o?Wt(o):Ct(),s}function zo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!de(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))yt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(ao(e)||Ht(e))e.forEach(n=>{yt(n,t)});else if(so(e))for(const n in e)yt(e[n],t);return e}function kn(e){return B(e)?{setup:e,name:e.name}:e}const Nr=e=>!!e.type.__asyncLoader,$o=e=>e.type.__isKeepAlive;function ec(e,t){jo(e,"a",t)}function tc(e,t){jo(e,"da",t)}function jo(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)$o(a.parent.vnode)&&nc(r,t,n,a),a=a.parent}}function nc(e,t,n,r){const a=ar(t,e,r,!0);Do(()=>{sa(r[t],a)},n)}function ar(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;qt(),Wt(n);const s=ze(t,n,e,o);return Ct(),Xt(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=pe)=>(!wn||e==="sp")&&ar(e,t,n),rc=Ze("bm"),ac=Ze("m"),ic=Ze("bu"),oc=Ze("u"),sc=Ze("bum"),Do=Ze("um"),lc=Ze("sp"),cc=Ze("rtg"),fc=Ze("rtc");function uc(e,t=pe){ar("ec",e,t)}let Lr=!0;function dc(e){const t=Uo(e),n=e.proxy,r=e.ctx;Lr=!1,t.beforeCreate&&Ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:g,updated:C,activated:R,deactivated:P,beforeDestroy:v,beforeUnmount:_,destroyed:N,unmounted:j,render:K,renderTracked:ae,renderTriggered:ce,errorCaptured:Pe,serverPrefetch:he,expose:tt,inheritAttrs:Ke,components:Te,directives:Ot,filters:Pt}=t;if(c&&mc(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const G=o[te];B(G)&&(r[te]=G.bind(n))}if(a){const te=a.call(n,n);de(te)&&(e.data=Cn(te))}if(Lr=!0,i)for(const te in i){const G=i[te],_e=B(G)?G.bind(n,n):B(G.get)?G.get.bind(n,n):Fe,Tt=!B(G)&&B(G.set)?G.set.bind(n):Fe,Ve=le({get:_e,set:Tt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:$e=>Ve.value=$e})}if(s)for(const te in s)Ho(s[te],r,n,te);if(l){const te=B(l)?l.call(n):l;Reflect.ownKeys(te).forEach(G=>{Nn(G,te[G])})}f&&Ja(f,e,"c");function fe(te,G){H(G)?G.forEach(_e=>te(_e.bind(n))):G&&te(G.bind(n))}if(fe(rc,d),fe(ac,h),fe(ic,g),fe(oc,C),fe(ec,R),fe(tc,P),fe(uc,Pe),fe(fc,ae),fe(cc,ce),fe(sc,_),fe(Do,j),fe(lc,he),H(tt))if(tt.length){const te=e.exposed||(e.exposed={});tt.forEach(G=>{Object.defineProperty(te,G,{get:()=>n[G],set:_e=>n[G]=_e})})}else e.exposed||(e.exposed={});K&&e.render===Fe&&(e.render=K),Ke!=null&&(e.inheritAttrs=Ke),Te&&(e.components=Te),Ot&&(e.directives=Ot)}function mc(e,t,n=Fe,r=!1){H(e)&&(e=Fr(e));for(const a in e){const i=e[a];let o;de(i)?"default"in i?o=ut(i.from||a,i.default,!0):o=ut(i.from||a):o=ut(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ja(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ho(e,t,n,r){const a=r.includes(".")?zo(n,r):()=>n[r];if(me(e)){const i=t[e];B(i)&&ln(a,i)}else if(B(e))ln(a,e.bind(n));else if(de(e))if(H(e))e.forEach(i=>Ho(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&ln(a,i,e)}}function Uo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,t,o)),i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=hc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const hc={data:Za,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:vt,directives:vt,watch:gc,provide:Za,inject:pc};function Za(e,t){return t?e?function(){return we(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function pc(e,t){return vt(Fr(e),Fr(t))}function Fr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function vt(e,t){return e?we(we(Object.create(null),e),t):t}function gc(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function vc(e,t,n,r=!1){const a={},i={};jn(i,ir,1),e.propsDefaults=Object.create(null),Bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Nl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function bc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(rr(e.emitsOptions,h))continue;const g=t[h];if(l)if(V(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const C=Ye(h);a[C]=zr(l,s,C,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{Bo(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!V(t,d)&&((f=Vt(d))===d||!V(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d)&&!0)&&(delete i[d],c=!0)}c&&Xe(e,"set","$attrs")}function Bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(In(l))continue;const c=t[l];let f;a&&V(a,f=Ye(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:rr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=X(n),c=s||ee;for(let f=0;f<i.length;f++){const d=i[f];n[d]=zr(a,l,d,c[d],e,!V(c,d))}}return o}function zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Wt(a),r=c[n]=l.call(null,t),Ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function Wo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[h,g]=Wo(d,t,!0);we(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Dt),Dt;if(H(i))for(let f=0;f<i.length;f++){const d=Ye(i[f]);ei(d)&&(o[d]=ee)}else if(i)for(const f in i){const d=Ye(f);if(ei(d)){const h=i[f],g=o[d]=H(h)||B(h)?{type:h}:h;if(g){const C=ri(Boolean,g.type),R=ri(String,g.type);g[0]=C>-1,g[1]=R<0||C<R,(C>-1||V(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function ei(e){return e[0]!=="$"}function ti(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ni(e,t){return ti(e)===ti(t)}function ri(e,t){return H(t)?t.findIndex(n=>ni(n,e)):B(t)&&ni(t,e)?0:-1}const Yo=e=>e[0]==="_"||e==="$stable",ya=e=>H(e)?e.map(Be):[Be(e)],yc=(e,t,n)=>{const r=Kl((...a)=>ya(t(...a)),n);return r._c=!1,r},Ko=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Yo(a))continue;const i=e[a];if(B(i))t[a]=yc(a,i,r);else if(i!=null){const o=ya(i);t[a]=()=>o}}},Vo=(e,t)=>{const n=ya(t);e.slots.default=()=>n},wc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),jn(t,"_",n)):Ko(t,e.slots={})}else e.slots={},t&&Vo(e,t);jn(e.slots,ir,1)},xc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ko(t,a)),o=t}else t&&(Vo(e,t),o={default:1});if(i)for(const s in a)!Yo(s)&&!(s in o)&&delete a[s]};function _c(e,t){const n=Ne;if(n===null)return e;const r=or(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=ee]=t[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&yt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function pt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(qt(),ze(l,n,8,[e.el,s,e,t]),Xt())}}function qo(){return{app:null,config:{isNativeTag:el,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cc=0;function kc(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!de(a)&&(a=null);const i=qo(),o=new Set;let s=!1;const l=i.app={_uid:Cc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Kc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=re(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,or(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function $r(e,t,n,r,a=!1){if(H(e)){e.forEach((h,g)=>$r(h,t&&(H(t)?t[g]:t),n,r,a));return}if(Nr(r)&&!a)return;const i=r.shapeFlag&4?or(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(me(c)?(f[c]=null,V(d,c)&&(d[c]=null)):ge(c)&&(c.value=null)),B(l))ft(l,s,12,[o,f]);else{const h=me(l),g=ge(l);if(h||g){const C=()=>{if(e.f){const R=h?f[l]:l.value;a?H(R)&&sa(R,i):H(R)?R.includes(i)||R.push(i):h?(f[l]=[i],V(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,V(d,l)&&(d[l]=o)):ge(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(C.id=-1,xe(C,n)):C()}}}const xe=Jl;function Ac(e){return Ec(e)}function Ec(e,t){const n=ol();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:g=Fe,cloneNode:C,insertStaticContent:R}=e,P=(u,m,p,w=null,y=null,A=null,S=!1,k=null,E=!!m.dynamicChildren)=>{if(u===m)return;u&&!Zt(u,m)&&(w=L(u),Se(u,y,A,!0),u=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:x,ref:F,shapeFlag:I}=m;switch(x){case xa:v(u,m,p,w);break;case kt:_(u,m,p,w);break;case vr:u==null&&N(m,p,w,S);break;case Ue:Ot(u,m,p,w,y,A,S,k,E);break;default:I&1?ae(u,m,p,w,y,A,S,k,E):I&6?Pt(u,m,p,w,y,A,S,k,E):(I&64||I&128)&&x.process(u,m,p,w,y,A,S,k,E,ne)}F!=null&&y&&$r(F,u&&u.ref,A,m||u,!m)},v=(u,m,p,w)=>{if(u==null)r(m.el=s(m.children),p,w);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,w)=>{u==null?r(m.el=l(m.children||""),p,w):m.el=u.el},N=(u,m,p,w)=>{[u.el,u.anchor]=R(u.children,m,p,w,u.el,u.anchor)},j=({el:u,anchor:m},p,w)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,w),u=y;r(m,p,w)},K=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},ae=(u,m,p,w,y,A,S,k,E)=>{S=S||m.type==="svg",u==null?ce(m,p,w,y,A,S,k,E):tt(u,m,y,A,S,k,E)},ce=(u,m,p,w,y,A,S,k)=>{let E,x;const{type:F,props:I,shapeFlag:z,transition:D,patchFlag:q,dirs:se}=u;if(u.el&&C!==void 0&&q===-1)E=u.el=C(u.el);else{if(E=u.el=o(u.type,A,I&&I.is,I),z&8?f(E,u.children):z&16&&he(u.children,E,null,w,y,A&&F!=="foreignObject",S,k),se&&pt(u,null,w,"created"),I){for(const ie in I)ie!=="value"&&!In(ie)&&i(E,ie,null,I[ie],A,u.children,w,y,O);"value"in I&&i(E,"value",null,I.value),(x=I.onVnodeBeforeMount)&&De(x,w,u)}Pe(E,u,u.scopeId,S,w)}se&&pt(u,null,w,"beforeMount");const J=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;J&&D.beforeEnter(E),r(E,m,p),((x=I&&I.onVnodeMounted)||J||se)&&xe(()=>{x&&De(x,w,u),J&&D.enter(E),se&&pt(u,null,w,"mounted")},y)},Pe=(u,m,p,w,y)=>{if(p&&g(u,p),w)for(let A=0;A<w.length;A++)g(u,w[A]);if(y){let A=y.subTree;if(m===A){const S=y.vnode;Pe(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},he=(u,m,p,w,y,A,S,k,E=0)=>{for(let x=E;x<u.length;x++){const F=u[x]=k?st(u[x]):Be(u[x]);P(null,F,m,p,w,y,A,S,k)}},tt=(u,m,p,w,y,A,S)=>{const k=m.el=u.el;let{patchFlag:E,dynamicChildren:x,dirs:F}=m;E|=u.patchFlag&16;const I=u.props||ee,z=m.props||ee;let D;p&&gt(p,!1),(D=z.onVnodeBeforeUpdate)&&De(D,p,m,u),F&&pt(m,u,p,"beforeUpdate"),p&&gt(p,!0);const q=y&&m.type!=="foreignObject";if(x?Ke(u.dynamicChildren,x,k,p,w,q,A):S||_e(u,m,k,null,p,w,q,A,!1),E>0){if(E&16)Te(k,m,I,z,p,w,y);else if(E&2&&I.class!==z.class&&i(k,"class",null,z.class,y),E&4&&i(k,"style",I.style,z.style,y),E&8){const se=m.dynamicProps;for(let J=0;J<se.length;J++){const ie=se[J],Re=I[ie],Rt=z[ie];(Rt!==Re||ie==="value")&&i(k,ie,Re,Rt,y,u.children,p,w,O)}}E&1&&u.children!==m.children&&f(k,m.children)}else!S&&x==null&&Te(k,m,I,z,p,w,y);((D=z.onVnodeUpdated)||F)&&xe(()=>{D&&De(D,p,m,u),F&&pt(m,u,p,"updated")},w)},Ke=(u,m,p,w,y,A,S)=>{for(let k=0;k<m.length;k++){const E=u[k],x=m[k],F=E.el&&(E.type===Ue||!Zt(E,x)||E.shapeFlag&70)?d(E.el):p;P(E,x,F,null,w,y,A,S,!0)}},Te=(u,m,p,w,y,A,S)=>{if(p!==w){for(const k in w){if(In(k))continue;const E=w[k],x=p[k];E!==x&&k!=="value"&&i(u,k,x,E,S,m.children,y,A,O)}if(p!==ee)for(const k in p)!In(k)&&!(k in w)&&i(u,k,p[k],null,S,m.children,y,A,O);"value"in w&&i(u,"value",p.value,w.value)}},Ot=(u,m,p,w,y,A,S,k,E)=>{const x=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:z,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(x,p,w),r(F,p,w),he(m.children,p,F,y,A,S,k,E)):I>0&&I&64&&z&&u.dynamicChildren?(Ke(u.dynamicChildren,z,p,y,A,S,k),(m.key!=null||y&&m===y.subTree)&&Xo(u,m,!0)):_e(u,m,p,F,y,A,S,k,E)},Pt=(u,m,p,w,y,A,S,k,E)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,p,w,S,E):St(m,p,w,y,A,S,E):fe(u,m,E)},St=(u,m,p,w,y,A,S)=>{const k=u.component=jc(u,w,y);if($o(u)&&(k.ctx.renderer=ne),Dc(k),k.asyncDep){if(y&&y.registerDep(k,te),!u.el){const E=k.subTree=re(kt);_(null,E,m,p)}return}te(k,u,m,p,y,A,S)},fe=(u,m,p)=>{const w=m.component=u.component;if(Xl(u,m,p))if(w.asyncDep&&!w.asyncResolved){G(w,m,p);return}else w.next=m,Ul(w.update),w.update();else m.component=u.component,m.el=u.el,w.vnode=m},te=(u,m,p,w,y,A,S)=>{const k=()=>{if(u.isMounted){let{next:F,bu:I,u:z,parent:D,vnode:q}=u,se=F,J;gt(u,!1),F?(F.el=q.el,G(u,F,S)):F=q,I&&Mn(I),(J=F.props&&F.props.onVnodeBeforeUpdate)&&De(J,D,F,q),gt(u,!0);const ie=gr(u),Re=u.subTree;u.subTree=ie,P(Re,ie,d(Re.el),L(Re),u,y,A),F.el=ie.el,se===null&&Gl(u,ie.el),z&&xe(z,y),(J=F.props&&F.props.onVnodeUpdated)&&xe(()=>De(J,D,F,q),y)}else{let F;const{el:I,props:z}=m,{bm:D,m:q,parent:se}=u,J=Nr(m);if(gt(u,!1),D&&Mn(D),!J&&(F=z&&z.onVnodeBeforeMount)&&De(F,se,m),gt(u,!0),I&&W){const ie=()=>{u.subTree=gr(u),W(I,u.subTree,u,y,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=gr(u);P(null,ie,p,w,u,y,A),m.el=ie.el}if(q&&xe(q,y),!J&&(F=z&&z.onVnodeMounted)){const ie=m;xe(()=>De(F,se,ie),y)}m.shapeFlag&256&&u.a&&xe(u.a,y),u.isMounted=!0,m=p=w=null}},E=u.effect=new ua(k,()=>So(u.update),u.scope),x=u.update=E.run.bind(E);x.id=u.uid,gt(u,!0),x()},G=(u,m,p)=>{m.component=u;const w=u.vnode.props;u.vnode=m,u.next=null,bc(u,m.props,w,p),xc(u,m.children,p),qt(),ba(void 0,u.update),Xt()},_e=(u,m,p,w,y,A,S,k,E=!1)=>{const x=u&&u.children,F=u?u.shapeFlag:0,I=m.children,{patchFlag:z,shapeFlag:D}=m;if(z>0){if(z&128){Ve(x,I,p,w,y,A,S,k,E);return}else if(z&256){Tt(x,I,p,w,y,A,S,k,E);return}}D&8?(F&16&&O(x,y,A),I!==x&&f(p,I)):F&16?D&16?Ve(x,I,p,w,y,A,S,k,E):O(x,y,A,!0):(F&8&&f(p,""),D&16&&he(I,p,w,y,A,S,k,E))},Tt=(u,m,p,w,y,A,S,k,E)=>{u=u||Dt,m=m||Dt;const x=u.length,F=m.length,I=Math.min(x,F);let z;for(z=0;z<I;z++){const D=m[z]=E?st(m[z]):Be(m[z]);P(u[z],D,p,null,y,A,S,k,E)}x>F?O(u,y,A,!0,!1,I):he(m,p,w,y,A,S,k,E,I)},Ve=(u,m,p,w,y,A,S,k,E)=>{let x=0;const F=m.length;let I=u.length-1,z=F-1;for(;x<=I&&x<=z;){const D=u[x],q=m[x]=E?st(m[x]):Be(m[x]);if(Zt(D,q))P(D,q,p,null,y,A,S,k,E);else break;x++}for(;x<=I&&x<=z;){const D=u[I],q=m[z]=E?st(m[z]):Be(m[z]);if(Zt(D,q))P(D,q,p,null,y,A,S,k,E);else break;I--,z--}if(x>I){if(x<=z){const D=z+1,q=D<F?m[D].el:w;for(;x<=z;)P(null,m[x]=E?st(m[x]):Be(m[x]),p,q,y,A,S,k,E),x++}}else if(x>z)for(;x<=I;)Se(u[x],y,A,!0),x++;else{const D=x,q=x,se=new Map;for(x=q;x<=z;x++){const Ce=m[x]=E?st(m[x]):Be(m[x]);Ce.key!=null&&se.set(Ce.key,x)}let J,ie=0;const Re=z-q+1;let Rt=!1,Da=0;const Jt=new Array(Re);for(x=0;x<Re;x++)Jt[x]=0;for(x=D;x<=I;x++){const Ce=u[x];if(ie>=Re){Se(Ce,y,A,!0);continue}let je;if(Ce.key!=null)je=se.get(Ce.key);else for(J=q;J<=z;J++)if(Jt[J-q]===0&&Zt(Ce,m[J])){je=J;break}je===void 0?Se(Ce,y,A,!0):(Jt[je-q]=x+1,je>=Da?Da=je:Rt=!0,P(Ce,m[je],p,null,y,A,S,k,E),ie++)}const Ha=Rt?Oc(Jt):Dt;for(J=Ha.length-1,x=Re-1;x>=0;x--){const Ce=q+x,je=m[Ce],Ua=Ce+1<F?m[Ce+1].el:w;Jt[x]===0?P(null,je,p,Ua,y,A,S,k,E):Rt&&(J<0||x!==Ha[J]?$e(je,p,Ua,2):J--)}}},$e=(u,m,p,w,y=null)=>{const{el:A,type:S,transition:k,children:E,shapeFlag:x}=u;if(x&6){$e(u.component.subTree,m,p,w);return}if(x&128){u.suspense.move(m,p,w);return}if(x&64){S.move(u,m,p,ne);return}if(S===Ue){r(A,m,p);for(let I=0;I<E.length;I++)$e(E[I],m,p,w);r(u.anchor,m,p);return}if(S===vr){j(u,m,p);return}if(w!==2&&x&1&&k)if(w===0)k.beforeEnter(A),r(A,m,p),xe(()=>k.enter(A),y);else{const{leave:I,delayLeave:z,afterLeave:D}=k,q=()=>r(A,m,p),se=()=>{I(A,()=>{q(),D&&D()})};z?z(A,q,se):se()}else r(A,m,p)},Se=(u,m,p,w=!1,y=!1)=>{const{type:A,props:S,ref:k,children:E,dynamicChildren:x,shapeFlag:F,patchFlag:I,dirs:z}=u;if(k!=null&&$r(k,null,p,u,!0),F&256){m.ctx.deactivate(u);return}const D=F&1&&z,q=!Nr(u);let se;if(q&&(se=S&&S.onVnodeBeforeUnmount)&&De(se,m,u),F&6)M(u.component,p,w);else{if(F&128){u.suspense.unmount(p,w);return}D&&pt(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,p,y,ne,w):x&&(A!==Ue||I>0&&I&64)?O(x,m,p,!1,!0):(A===Ue&&I&384||!y&&F&16)&&O(E,m,p),w&&hr(u)}(q&&(se=S&&S.onVnodeUnmounted)||D)&&xe(()=>{se&&De(se,m,u),D&&pt(u,null,m,"unmounted")},p)},hr=u=>{const{type:m,el:p,anchor:w,transition:y}=u;if(m===Ue){b(p,w);return}if(m===vr){K(u);return}const A=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,E=()=>S(p,A);k?k(u.el,A,E):E()}else A()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},M=(u,m,p)=>{const{bum:w,scope:y,update:A,subTree:S,um:k}=u;w&&Mn(w),y.stop(),A&&(A.active=!1,Se(S,u,m,p)),k&&xe(k,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(u,m,p,w=!1,y=!1,A=0)=>{for(let S=A;S<u.length;S++)Se(u[S],m,p,w,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Q=(u,m,p)=>{u==null?m._vnode&&Se(m._vnode,null,null,!0):P(m._vnode||null,u,m,null,null,null,p),Io(),m._vnode=u},ne={p:P,um:Se,m:$e,r:hr,mt:St,mc:he,pc:_e,pbc:Ke,n:L,o:e};let Y,W;return t&&([Y,W]=t(ne)),{render:Q,hydrate:Y,createApp:kc(Q,Y)}}function gt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xo(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||Xo(o,s))}}function Oc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Pc=e=>e.__isTeleport,Go="components";function wa(e,t){return Tc(Go,e,!0,t)||e}const Sc=Symbol();function Tc(e,t,n=!0,r=!1){const a=Ne||pe;if(a){const i=a.type;if(e===Go){const s=Wc(i);if(s&&(s===t||s===Ye(t)||s===er(Ye(t))))return i}const o=ai(a[e]||i[e],t)||ai(a.appContext[e],t);return!o&&r?i:o}}function ai(e,t){return e&&(e[t]||e[Ye(t)]||e[er(Ye(t))])}const Ue=Symbol(void 0),xa=Symbol(void 0),kt=Symbol(void 0),vr=Symbol(void 0),cn=[];let _t=null;function be(e=!1){cn.push(_t=e?null:[])}function Rc(){cn.pop(),_t=cn[cn.length-1]||null}let Bn=1;function ii(e){Bn+=e}function Qo(e){return e.dynamicChildren=Bn>0?_t||Dt:null,Rc(),Bn>0&&_t&&_t.push(e),e}function ke(e,t,n,r,a,i){return Qo(U(e,t,n,r,a,i,!0))}function Jo(e,t,n,r,a){return Qo(re(e,t,n,r,a,!0))}function jr(e){return e?e.__v_isVNode===!0:!1}function Zt(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",Zo=({key:e})=>e!=null?e:null,Ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||ge(e)||B(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function U(e,t=null,n=null,r=0,a=null,i=e===Ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zo(t),ref:t&&Ln(t),scopeId:Lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Bn>0&&!o&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const re=Ic;function Ic(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Sc)&&(e=kt),jr(e)){const s=yn(e,t,!0);return n&&Ca(s,n),s}if(Yc(e)&&(e=e.__vccOpts),t){t=Mc(t);let{class:s,style:l}=t;s&&!me(s)&&(t.class=ia(s)),de(l)&&(xo(l)&&!H(l)&&(l=we({},l)),t.style=Me(l))}const o=me(e)?1:Ql(e)?128:Pc(e)?64:de(e)?4:B(e)?2:0;return U(e,t,n,r,a,o,i,!0)}function Mc(e){return e?xo(e)||ir in e?we({},e):e:null}function yn(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Nc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Zo(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Ln(t)):[a,Ln(t)]:Ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yn(e.ssContent),ssFallback:e.ssFallback&&yn(e.ssFallback),el:e.el,anchor:e.anchor}}function _a(e=" ",t=0){return re(xa,null,e,t)}function br(e="",t=!1){return t?(be(),Jo(kt,null,e)):re(kt,null,e)}function Be(e){return e==null||typeof e=="boolean"?re(kt):H(e)?re(Ue,null,e.slice()):typeof e=="object"?st(e):re(xa,null,String(e))}function st(e){return e.el===null||e.memo?e:yn(e)}function Ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[_a(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ia([t.class,r.class]));else if(a==="style")t.style=Me([t.style,r.style]);else if(Qn(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function De(e,t,n,r=null){ze(e,t,7,[n,r])}function Lc(e,t,n,r){let a;const i=n&&n[r];if(H(e)||me(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(de(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Dr=e=>e?es(e)?or(e)||e.proxy:Dr(e.parent):null,Wn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>Uo(e),$forceUpdate:e=>()=>So(e.update),$nextTick:e=>Po.bind(e.proxy),$watch:e=>Zl.bind(e)}),Fc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ee&&V(r,t))return o[t]=1,r[t];if(a!==ee&&V(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&V(c,t))return o[t]=3,i[t];if(n!==ee&&V(n,t))return o[t]=4,n[t];Lr&&(o[t]=0)}}const f=Wn[t];let d,h;if(f)return t==="$attrs"&&Ee(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&V(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ee&&V(a,t)?(a[t]=n,!0):r!==ee&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&V(e,o)||t!==ee&&V(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(Wn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},zc=qo();let $c=0;function jc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||zc,i={uid:$c++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wo(r,a),emitsOptions:No(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yl.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Wt=e=>{pe=e,e.scope.on()},Ct=()=>{pe&&pe.scope.off(),pe=null};function es(e){return e.vnode.shapeFlag&4}let wn=!1;function Dc(e,t=!1){wn=t;const{props:n,children:r}=e.vnode,a=es(e);vc(e,n,a,t),wc(e,r);const i=a?Hc(e,t):void 0;return wn=!1,i}function Hc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_o(new Proxy(e.ctx,Fc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Bc(e):null;Wt(e),qt();const i=ft(r,e,0,[e.props,a]);if(Xt(),Ct(),io(i)){if(i.then(Ct,Ct),t)return i.then(o=>{oi(e,o,t)}).catch(o=>{nr(o,e,0)});e.asyncDep=i}else oi(e,i,t)}else ts(e,t)}function oi(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=Eo(t)),ts(e,n)}let si;function ts(e,t,n){const r=e.type;if(!e.render){if(!t&&si&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=we(we({isCustomElement:i,delimiters:s},o),l);r.render=si(a,c)}}e.render=r.render||Fe}Wt(e),qt(),dc(e),Xt(),Ct()}function Uc(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function Bc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Uc(e))},slots:e.slots,emit:e.emit,expose:t}}function or(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Eo(_o(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)}}))}function Wc(e){return B(e)&&e.displayName||e.name}function Yc(e){return B(e)&&"__vccOpts"in e}const le=(e,t)=>jl(e,t,wn);function sr(e,t,n){const r=arguments.length;return r===2?de(t)&&!H(t)?jr(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),re(e,t,n))}const Kc="3.2.33",Vc="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,li=bt&&bt.createElement("template"),qc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?bt.createElementNS(Vc,e):bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{li.innerHTML=r?`<svg>${e}</svg>`:e;const s=li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Xc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Gc(e,t,n){const r=e.style,a=me(n);if(n&&!a){for(const i in n)Hr(r,i,n[i]);if(t&&!me(t))for(const i in t)n[i]==null&&Hr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ci=/\s*!important$/;function Hr(e,t,n){if(H(n))n.forEach(r=>Hr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qc(e,t);ci.test(n)?e.setProperty(Vt(r),n.replace(ci,""),"important"):e[r]=n}}const fi=["Webkit","Moz","ms"],yr={};function Qc(e,t){const n=yr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return yr[t]=r;r=er(r);for(let a=0;a<fi.length;a++){const i=fi[a]+r;if(i in e)return yr[t]=i}return t}const ui="http://www.w3.org/1999/xlink";function Jc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ui,t.slice(6,t.length)):e.setAttributeNS(ui,t,n);else{const i=Gs(t);n==null||i&&!no(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Zc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=no(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ns,ef]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ur=0;const tf=Promise.resolve(),nf=()=>{Ur=0},rf=()=>Ur||(tf.then(nf),Ur=ns());function Lt(e,t,n,r){e.addEventListener(t,n,r)}function af(e,t,n,r){e.removeEventListener(t,n,r)}function of(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=sf(t);if(r){const c=i[t]=lf(r,a);Lt(e,s,c,l)}else o&&(af(e,s,o,l),i[t]=void 0)}}const di=/(?:Once|Passive|Capture)$/;function sf(e){let t;if(di.test(e)){t={};let n;for(;n=e.match(di);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Vt(e.slice(2)),t]}function lf(e,t){const n=r=>{const a=r.timeStamp||ns();(ef||a>=n.attached-1)&&ze(cf(r,n.value),t,5,[r])};return n.value=e,n.attached=rf(),n}function cf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const mi=/^on[a-z]/,ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Xc(e,r,a):t==="style"?Gc(e,n,r):Qn(t)?oa(t)||of(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uf(e,t,r,a))?Zc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jc(e,t,r,a))};function uf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&mi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||mi.test(t)&&me(n)?!1:t in e}const hi=e=>{const t=e.props["onUpdate:modelValue"];return H(t)?n=>Mn(t,n):t};function df(e){e.target.composing=!0}function pi(e){const t=e.target;t.composing&&(t.composing=!1,mf(t,"input"))}function mf(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const hf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=hi(a);const i=r||a.props&&a.props.type==="number";Lt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n?s=s.trim():i&&(s=Or(s)),e._assign(s)}),n&&Lt(e,"change",()=>{e.value=e.value.trim()}),t||(Lt(e,"compositionstart",df),Lt(e,"compositionend",pi),Lt(e,"change",pi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=hi(i),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Or(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},pf=we({patchProp:ff},qc);let gi;function gf(){return gi||(gi=Ac(pf))}const vf=(...e)=>{const t=gf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=bf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function bf(e){return me(e)?document.querySelector(e):e}const yf={class:"navbar-container"},wf={class:"logo"},xf=_a(" Pomodoro "),_f={class:"navbar-buttons"},Cf={class:"navbar-button"},kf={key:0},Af={class:"navbar-button"},Ef={key:0},Of={class:"navbar-button"},Pf={key:0},Sf={setup(e){let t=ye(window.innerWidth);return window.onresize=function(n){t.value=window.innerWidth},(n,r)=>{const a=wa("font-awesome-icon");return be(),ke("div",yf,[U("div",wf,[re(a,{class:"icon",icon:"circle-check"}),xf]),U("div",_f,[U("button",Cf,[re(a,{class:"icon",icon:"chart-column"}),ue(t)>425?(be(),ke("span",kf,"Report")):br("",!0)]),U("button",Af,[re(a,{class:"icon",icon:"gear"}),ue(t)>425?(be(),ke("span",Ef,"Setting")):br("",!0)]),U("button",Of,[re(a,{class:"icon",icon:"circle-user"}),ue(t)>425?(be(),ke("span",Pf,"Login")):br("",!0)])])])}}};const Tf={class:"addTask-container"},Rf={class:"addTask-wrapper"},If={class:"addTask-estimates"},Mf=U("p",null,"Est Pomodoros",-1),Nf={class:"addTask-buttons"},Lf=["value"],Ff=["disabled"],zf={class:"addTask-save"},$f={class:"addTask-save-buttons"},jf=["disabled"],Df={emits:["actionCaptured"],setup(e,{emit:t}){const n=ye(1),r=ye(""),a=i=>{i=="send"?t("actionCaptured",r.value,n.value):t("actionCaptured")};return(i,o)=>{const s=wa("font-awesome-icon");return be(),ke("div",Tf,[U("div",Rf,[_c(U("input",{type:"text",class:"addTask-input","onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),placeholder:"What are you working on?"},null,512),[[hf,r.value]]),U("div",If,[Mf,U("div",Nf,[U("input",{type:"number",class:"number",value:n.value},null,8,Lf),U("button",{class:"addTask-button",onClick:o[1]||(o[1]=l=>n.value+=1)},[re(s,{class:"sort-icon",icon:"caret-up"})]),U("button",{class:"addTask-button",onClick:o[2]||(o[2]=l=>n.value-=1),disabled:n.value<1},[re(s,{class:"sort-icon",icon:"caret-down"})],8,Ff)])])]),U("div",zf,[U("div",$f,[U("button",{class:"cancel",onClick:o[3]||(o[3]=()=>a("close"))}," Cancel "),U("button",{class:"save",disabled:r.value.length<1,onClick:o[4]||(o[4]=()=>a("send"))}," Save ",8,jf)])])])}}},Hf={class:"tasks-container"},Uf={class:"task-container-text"},Bf=U("p",null,"#1",-1),Wf={key:0},Yf={key:1},Kf={class:"edit-task"},Vf=U("p",null,"Tasks",-1),qf={class:"edit-task-button"},Xf={class:"tasks-container-list"},Gf=["onClick"],Qf={class:"task-left"},Jf={class:"task-right"},Zf=["onClick"],eu=_a(" Add Task "),tu={setup(e){const t=ye(!1),n=ye([]);let r=ye(!1);ye([]);const a=ye(""),i=(o,s)=>{t.value=!t,(o||s)&&(n.value.push({task:o,number:s,finished:r.value}),console.log(n),a.value=o)};return(o,s)=>{const l=wa("font-awesome-icon");return be(),ke("div",Hf,[U("div",Uf,[Bf,a.value?(be(),ke("p",Wf,jt(a.value),1)):(be(),ke("p",Yf,"Time to focus"))]),U("div",Kf,[Vf,U("button",qf,[re(l,{class:"ellipsis",icon:"ellipsis-vertical"})])]),(be(!0),ke(Ue,null,Lc(n.value,(c,f)=>(be(),ke("div",Xf,[U("div",{class:"task",onClick:d=>a.value=c.task,style:Me(a.value===c.task?{borderLeft:"5px solid black"}:{borderLeft:"5px solid white"})},[U("div",Qf,[re(l,{class:"icon",icon:"circle-check",style:Me(c.finished?{color:"#d95550"}:{color:"lightgrey"}),onClick:d=>c.finished=!c.finished},null,8,["style","onClick"]),U("p",{style:Me(c.finished?{textDecoration:"line-through",color:"lightgrey"}:{textDecoration:"none"})},jt(c.task),5)]),U("div",Jf,[U("p",null,"0/"+jt(c.number),1),U("button",{class:"task-right-button",onClick:()=>{n.value.splice(f,1),a.value=!1}},[re(l,{class:"ellipsis",icon:"trash-can"})],8,Zf)])],12,Gf)]))),256)),t.value?(be(),Jo(Df,{key:1,username:o.matt,onActionCaptured:i},null,8,["username"])):(be(),ke("button",{key:0,class:"task-container-button",onClick:s[0]||(s[0]=c=>t.value=!t.value)},[re(l,{class:"icon",icon:"circle-plus"}),eu]))])}}};var nu="/pomodoroTimer/assets/alarm.c672840d.mp3";const ru={class:"timer-container"},au={class:"timer-container-switch"},iu={class:"time"},ou=U("span",{class:"button-shadow"},null,-1),su=U("span",{class:"button-edge"},null,-1),lu={emits:["changeTimer"],setup(e,{emit:t}){let n=ye("pomodoro"),r=ye(25),a=ye(60),i=ye(!0),o=ye(!0),s=new Audio(nu),l,c;const f=()=>{i.value?(o.value&&(r.value--,o.value=!1),d(),i.value=!i.value):(h(),i.value=!i.value)},d=()=>{l=setInterval(()=>{r.value!==0||a.value!==0?(a.value=60,r.value--):(h(),s.play(),o.value=!0,setTimeout(()=>{i.value=!i.value,g(n.value)},5e3))},6e4),c=setInterval(()=>{a.value--},1e3)},h=()=>{clearInterval(l),clearInterval(c)},g=C=>{i.value?(n.value=C,C==="long"?r.value=15:C==="short"?r.value=5:r.value=25,a.value=60,t("changeTimer",C),h(),i.value=!0):window.confirm("The timer is still running, are you sure you want to switch?")&&(n.value=C,console.log(n),C==="long"?r.value=15:C==="short"?r.value=5:r.value=25,a.value=60,t("changeTimer",C),h(),i.value=!0)};return(C,R)=>(be(),ke("div",ru,[U("div",au,[U("button",{class:"timer-container-switch-item",onClick:R[0]||(R[0]=()=>g("pomodoro")),style:Me(ue(n)=="pomodoro"&&{backgroundColor:"rgb(0,0,0,0.2)"})}," Pomodoro ",4),U("button",{class:"timer-container-switch-item",style:Me(ue(n)=="short"&&{backgroundColor:"rgb(0,0,0,0.2)"}),onClick:R[1]||(R[1]=()=>g("short"))}," Short Break ",4),U("button",{class:"timer-container-switch-item",style:Me(ue(n)=="long"&&{backgroundColor:"rgb(0,0,0,0.2)"}),onClick:R[2]||(R[2]=()=>g("long"))}," Long Break ",4)]),U("div",iu,[U("span",null,jt(ue(r))+":"+jt(ue(a)==60?"00":ue(a)<10?"0".concat(ue(a)):ue(a)),1)]),U("button",{class:"timer-container-button",onClick:f},[ou,su,U("span",{class:"button-front text",style:Me(ue(n)=="short"?{color:"rgb(76, 145, 149)"}:ue(n)=="long"?{color:"rgb(69, 124, 163)"}:{color:"rgb(217, 85, 80)"})},jt(ue(i)?"START":"STOP"),5)])]))}};const cu={class:"wrapper"},rs={setup(e){const t=ye(),n=r=>{t.value=r,console.log(t.value)};return(r,a)=>(be(),ke("main",null,[U("div",{class:"container",style:Me(t.value==="short"?{backgroundColor:"rgb(76, 145, 149)"}:t.value==="long"?{backgroundColor:"rgb(69, 124, 163)"}:{backroundColor:"rgb(217, 85, 80)"})},[U("div",cu,[re(Sf),re(lu,{onChangeTimer:n}),re(tu)])],4)]))}};/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Gt=e=>as?Symbol(e):"_vr_"+e,fu=Gt("rvlm"),vi=Gt("rvd"),ka=Gt("r"),is=Gt("rl"),Br=Gt("rvl"),Ft=typeof window!="undefined";function uu(e){return e.__esModule||as&&e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function wr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const fn=()=>{},du=/\/$/,mu=e=>e.replace(du,"");function xr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=vu(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function hu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Yt(t.matched[r],n.matched[a])&&os(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function os(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gu(e[n],t[n]))return!1;return!0}function gu(e,t){return Array.isArray(e)?yi(e,t):Array.isArray(t)?yi(t,e):e===t}function yi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function vu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var xn;(function(e){e.pop="pop",e.push="push"})(xn||(xn={}));var un;(function(e){e.back="back",e.forward="forward",e.unknown=""})(un||(un={}));function bu(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mu(e)}const yu=/^[^#]+#/;function wu(e,t){return e.replace(yu,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const lr=()=>({left:window.pageXOffset,top:window.pageYOffset});function _u(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=xu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function wi(e,t){return(history.state?history.state.position-t:-1)+e}const Wr=new Map;function Cu(e,t){Wr.set(e,t)}function ku(e){const t=Wr.get(e);return Wr.delete(e),t}let Au=()=>location.protocol+"//"+location.host;function ss(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),bi(l,"")}return bi(n,e)+r+a}function Eu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=ss(e,location),C=n.value,R=t.value;let P=0;if(h){if(n.value=g,t.value=h,o&&o===C){o=null;return}P=R?h.position-R.position:0}else r(g);a.forEach(v=>{v(n.value,C,{delta:P,type:xn.pop,direction:P?P>0?un.forward:un.back:un.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const C=a.indexOf(h);C>-1&&a.splice(C,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(Z({},h.state,{scroll:lr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function xi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?lr():null}}function Ou(e){const{history:t,location:n}=window,r={value:ss(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Au()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=Z({},t.state,xi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=Z({},a.value,t.state,{forward:l,scroll:lr()});i(f.current,f,!0);const d=Z({},xi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Pu(e){e=bu(e);const t=Ou(e),n=Eu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Z({location:"",base:e,go:r,createHref:wu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Su(e){return typeof e=="string"||e&&typeof e=="object"}function ls(e){return typeof e=="string"||typeof e=="symbol"}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cs=Gt("nf");var _i;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_i||(_i={}));function Kt(e,t){return Z(new Error,{type:e,[cs]:!0},t)}function at(e,t){return e instanceof Error&&cs in e&&(t==null||!!(e.type&t))}const Ci="[^/]+?",Tu={sensitive:!1,strict:!1,start:!0,end:!0},Ru=/[.+*?^${}()[\]/\\]/g;function Iu(e,t){const n=Z({},Tu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Ru,"\\$&"),g+=40;else if(h.type===1){const{value:C,repeatable:R,optional:P,regexp:v}=h;i.push({name:C,repeatable:R,optional:P});const _=v||Ci;if(_!==Ci){g+=10;try{new RegExp(`(${_})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${C}" (${_}): `+j.message)}}let N=R?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(N=P&&c.length<2?`(?:/${N})`:"/"+N),P&&(N+="?"),a+=N,g+=20,P&&(g+=-8),R&&(g+=-20),_===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",C=i[h-1];d[C.name]=g&&C.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:C,repeatable:R,optional:P}=g,v=C in c?c[C]:"";if(Array.isArray(v)&&!R)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(v)?v.join("/"):v;if(!_)if(P)h.length<2&&e.length>1&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=_}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Mu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Nu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Mu(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Lu={type:0,value:""},Fu=/[a-zA-Z0-9_]/;function zu(e){if(!e)return[[]];if(e==="/")return[[Lu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Fu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function $u(e,t,n){const r=Iu(zu(e.path),n),a=Z(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function ju(e,t){const n=[],r=new Map;t=Ai({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const g=!h,C=Hu(f);C.aliasOf=h&&h.record;const R=Ai(t,f),P=[C];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of N)P.push(Z({},C,{components:h?h.record.components:C.components,path:j,aliasOf:h?h.record:C}))}let v,_;for(const N of P){const{path:j}=N;if(d&&j[0]!=="/"){const K=d.record.path,ae=K[K.length-1]==="/"?"":"/";N.path=d.record.path+(j&&ae+j)}if(v=$u(N,d,R),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),g&&f.name&&!ki(v)&&o(f.name)),"children"in C){const K=C.children;for(let ae=0;ae<K.length;ae++)i(K[ae],v,h&&h.children[ae])}h=h||v,l(v)}return _?()=>{o(_)}:fn}function o(f){if(ls(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Nu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!fs(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!ki(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},C,R;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Kt(1,{location:f});R=h.record.name,g=Z(Du(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),C=h.stringify(g)}else if("path"in f)C=f.path,h=n.find(_=>_.re.test(C)),h&&(g=h.parse(C),R=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw Kt(1,{location:f,currentLocation:d});R=h.record.name,g=Z({},d.params,f.params),C=h.stringify(g)}const P=[];let v=h;for(;v;)P.unshift(v.record),v=v.parent;return{name:R,path:C,params:g,matched:P,meta:Bu(P)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Du(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Hu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Uu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Uu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Bu(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function Ai(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fs(e,t){return t.children.some(n=>n===e||fs(e,n))}const us=/#/g,Wu=/&/g,Yu=/\//g,Ku=/=/g,Vu=/\?/g,ds=/\+/g,qu=/%5B/g,Xu=/%5D/g,ms=/%5E/g,Gu=/%60/g,hs=/%7B/g,Qu=/%7C/g,ps=/%7D/g,Ju=/%20/g;function Aa(e){return encodeURI(""+e).replace(Qu,"|").replace(qu,"[").replace(Xu,"]")}function Zu(e){return Aa(e).replace(hs,"{").replace(ps,"}").replace(ms,"^")}function Yr(e){return Aa(e).replace(ds,"%2B").replace(Ju,"+").replace(us,"%23").replace(Wu,"%26").replace(Gu,"`").replace(hs,"{").replace(ps,"}").replace(ms,"^")}function ed(e){return Yr(e).replace(Ku,"%3D")}function td(e){return Aa(e).replace(us,"%23").replace(Vu,"%3F")}function nd(e){return e==null?"":td(e).replace(Yu,"%2F")}function Yn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function rd(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(ds," "),o=i.indexOf("="),s=Yn(o<0?i:i.slice(0,o)),l=o<0?null:Yn(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Ei(e){let t="";for(let n in e){const r=e[n];if(n=ed(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Yr(i)):[r&&Yr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ad(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function en(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Kt(4,{from:n,to:t})):d instanceof Error?s(d):Su(d)?s(Kt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function _r(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(id(s)){const c=(s.__vccOpts||s)[t];c&&a.push(lt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=uu(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&lt(h,n,r,i,o)()}))}}return a}function id(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Oi(e){const t=ut(ka),n=ut(is),r=le(()=>t.resolve(ue(e.to))),a=le(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Yt.bind(null,f));if(h>-1)return h;const g=Pi(l[c-2]);return c>1&&Pi(f)===g&&d[d.length-1].path!==g?d.findIndex(Yt.bind(null,l[c-2])):h}),i=le(()=>a.value>-1&&cd(n.params,r.value.params)),o=le(()=>a.value>-1&&a.value===n.matched.length-1&&os(n.params,r.value.params));function s(l={}){return ld(l)?t[ue(e.replace)?"replace":"push"](ue(e.to)).catch(fn):Promise.resolve()}return{route:r,href:le(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const od=kn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oi,setup(e,{slots:t}){const n=Cn(Oi(e)),{options:r}=ut(ka),a=le(()=>({[Si(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Si(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:sr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),sd=od;function ld(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cd(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Pi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Si=(e,t,n)=>e!=null?e:t!=null?t:n,fd=kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ut(Br),a=le(()=>e.route||r.value),i=ut(vi,0),o=le(()=>a.value.matched[i]);Nn(vi,i+1),Nn(fu,o),Nn(Br,a);const s=ye();return ln(()=>[s.value,o.value,e.name],([l,c,f],[d,h,g])=>{c&&(c.instances[f]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Yt(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return Ti(n.default,{Component:f,route:l});const h=c.props[e.name],g=h?h===!0?l.params:typeof h=="function"?h(l):h:null,R=sr(f,Z({},g,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return Ti(n.default,{Component:R,route:l})||R}}});function Ti(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ud=fd;function dd(e){const t=ju(e.routes,e),n=e.parseQuery||rd,r=e.stringifyQuery||Ei,a=e.history,i=en(),o=en(),s=en(),l=Ll(rt);let c=rt;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wr.bind(null,b=>""+b),d=wr.bind(null,nd),h=wr.bind(null,Yn);function g(b,M){let O,L;return ls(b)?(O=t.getRecordMatcher(b),L=M):L=b,t.addRoute(L,O)}function C(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function R(){return t.getRoutes().map(b=>b.record)}function P(b){return!!t.getRecordMatcher(b)}function v(b,M){if(M=Z({},M||l.value),typeof b=="string"){const W=xr(n,b,M.path),u=t.resolve({path:W.path},M),m=a.createHref(W.fullPath);return Z(W,u,{params:h(u.params),hash:Yn(W.hash),redirectedFrom:void 0,href:m})}let O;if("path"in b)O=Z({},b,{path:xr(n,b.path,M.path).path});else{const W=Z({},b.params);for(const u in W)W[u]==null&&delete W[u];O=Z({},b,{params:d(b.params)}),M.params=d(M.params)}const L=t.resolve(O,M),Q=b.hash||"";L.params=f(h(L.params));const ne=hu(r,Z({},b,{hash:Zu(Q),path:L.path})),Y=a.createHref(ne);return Z({fullPath:ne,hash:Q,query:r===Ei?ad(b.query):b.query||{}},L,{redirectedFrom:void 0,href:Y})}function _(b){return typeof b=="string"?xr(n,b,l.value.path):Z({},b)}function N(b,M){if(c!==b)return Kt(8,{from:M,to:b})}function j(b){return ce(b)}function K(b){return j(Z(_(b),{replace:!0}))}function ae(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),Z({query:b.query,hash:b.hash,params:b.params},L)}}function ce(b,M){const O=c=v(b),L=l.value,Q=b.state,ne=b.force,Y=b.replace===!0,W=ae(O);if(W)return ce(Z(_(W),{state:Q,force:ne,replace:Y}),M||O);const u=O;u.redirectedFrom=M;let m;return!ne&&pu(r,L,O)&&(m=Kt(16,{to:u,from:L}),Tt(L,L,!0,!1)),(m?Promise.resolve(m):he(u,L)).catch(p=>at(p)?at(p,2)?p:_e(p):te(p,u,L)).then(p=>{if(p){if(at(p,2))return ce(Z(_(p.to),{state:Q,force:ne,replace:Y}),M||u)}else p=Ke(u,L,!0,Y,Q);return tt(u,L,p),p})}function Pe(b,M){const O=N(b,M);return O?Promise.reject(O):Promise.resolve()}function he(b,M){let O;const[L,Q,ne]=md(b,M);O=_r(L.reverse(),"beforeRouteLeave",b,M);for(const W of L)W.leaveGuards.forEach(u=>{O.push(lt(u,b,M))});const Y=Pe.bind(null,b,M);return O.push(Y),It(O).then(()=>{O=[];for(const W of i.list())O.push(lt(W,b,M));return O.push(Y),It(O)}).then(()=>{O=_r(Q,"beforeRouteUpdate",b,M);for(const W of Q)W.updateGuards.forEach(u=>{O.push(lt(u,b,M))});return O.push(Y),It(O)}).then(()=>{O=[];for(const W of b.matched)if(W.beforeEnter&&!M.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const u of W.beforeEnter)O.push(lt(u,b,M));else O.push(lt(W.beforeEnter,b,M));return O.push(Y),It(O)}).then(()=>(b.matched.forEach(W=>W.enterCallbacks={}),O=_r(ne,"beforeRouteEnter",b,M),O.push(Y),It(O))).then(()=>{O=[];for(const W of o.list())O.push(lt(W,b,M));return O.push(Y),It(O)}).catch(W=>at(W,8)?W:Promise.reject(W))}function tt(b,M,O){for(const L of s.list())L(b,M,O)}function Ke(b,M,O,L,Q){const ne=N(b,M);if(ne)return ne;const Y=M===rt,W=Ft?history.state:{};O&&(L||Y?a.replace(b.fullPath,Z({scroll:Y&&W&&W.scroll},Q)):a.push(b.fullPath,Q)),l.value=b,Tt(b,M,O,Y),_e()}let Te;function Ot(){Te||(Te=a.listen((b,M,O)=>{const L=v(b),Q=ae(L);if(Q){ce(Z(Q,{replace:!0}),L).catch(fn);return}c=L;const ne=l.value;Ft&&Cu(wi(ne.fullPath,O.delta),lr()),he(L,ne).catch(Y=>at(Y,12)?Y:at(Y,2)?(ce(Y.to,L).then(W=>{at(W,20)&&!O.delta&&O.type===xn.pop&&a.go(-1,!1)}).catch(fn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),te(Y,L,ne))).then(Y=>{Y=Y||Ke(L,ne,!1),Y&&(O.delta?a.go(-O.delta,!1):O.type===xn.pop&&at(Y,20)&&a.go(-1,!1)),tt(L,ne,Y)}).catch(fn)}))}let Pt=en(),St=en(),fe;function te(b,M,O){_e(b);const L=St.list();return L.length?L.forEach(Q=>Q(b,M,O)):console.error(b),Promise.reject(b)}function G(){return fe&&l.value!==rt?Promise.resolve():new Promise((b,M)=>{Pt.add([b,M])})}function _e(b){return fe||(fe=!b,Ot(),Pt.list().forEach(([M,O])=>b?O(b):M()),Pt.reset()),b}function Tt(b,M,O,L){const{scrollBehavior:Q}=e;if(!Ft||!Q)return Promise.resolve();const ne=!O&&ku(wi(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return Po().then(()=>Q(b,M,ne)).then(Y=>Y&&_u(Y)).catch(Y=>te(Y,b,M))}const Ve=b=>a.go(b);let $e;const Se=new Set;return{currentRoute:l,addRoute:g,removeRoute:C,hasRoute:P,getRoutes:R,resolve:v,options:e,push:j,replace:K,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:St.add,isReady:G,install(b){const M=this;b.component("RouterLink",sd),b.component("RouterView",ud),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(l)}),Ft&&!$e&&l.value===rt&&($e=!0,j(a.location).catch(Q=>{}));const O={};for(const Q in rt)O[Q]=le(()=>l.value[Q]);b.provide(ka,M),b.provide(is,Cn(O)),b.provide(Br,l);const L=b.unmount;Se.add(b),b.unmount=function(){Se.delete(b),Se.size<1&&(c=rt,Te&&Te(),Te=null,l.value=rt,$e=!1,fe=!1),L()}}}}function It(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function md(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Yt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Yt(c,l))||a.push(l))}return[n,r,a]}const hd=dd({history:Pu("/pomodoroTimer/"),routes:[{path:"/",name:"home",component:rs}]});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ri(Object(n),!0).forEach(function(r){vd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function pd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gd(e,t,n){return t&&Ii(e.prototype,t),n&&Ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ea(e,t){return yd(e)||xd(e,t)||gs(e,t)||Cd()}function cr(e){return bd(e)||wd(e)||gs(e)||_d()}function bd(e){if(Array.isArray(e))return Kr(e)}function yd(e){if(Array.isArray(e))return e}function wd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function gs(e,t){if(!!e){if(typeof e=="string")return Kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(e,t)}}function Kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mi=function(){},Oa={},vs={},bs=null,ys={mark:Mi,measure:Mi};try{typeof window!="undefined"&&(Oa=window),typeof document!="undefined"&&(vs=document),typeof MutationObserver!="undefined"&&(bs=MutationObserver),typeof performance!="undefined"&&(ys=performance)}catch{}var kd=Oa.navigator||{},Ni=kd.userAgent,Li=Ni===void 0?"":Ni,mt=Oa,oe=vs,Fi=bs,Rn=ys;mt.document;var et=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",ws=~Li.indexOf("MSIE")||~Li.indexOf("Trident/"),Ge="___FONT_AWESOME___",Vr=16,xs="fa",_s="svg-inline--fa",At="data-fa-i2svg",qr="data-fa-pseudo-element",Ad="data-fa-pseudo-element-pending",Pa="data-prefix",Sa="data-icon",zi="fontawesome-i2svg",Ed="async",Od=["HTML","HEAD","STYLE","SCRIPT"],Cs=function(){try{return!0}catch{return!1}}(),Ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Vn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ks={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Pd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Sd=/fa[srltdbk\-\ ]/,As="fa-layers-text",Td=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Rd={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Es=[1,2,3,4,5,6,7,8,9,10],Id=Es.concat([11,12,13,14,15,16,17,18,19,20]),Md=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nd=[].concat(cr(Object.keys(Vn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Es.map(function(e){return"".concat(e,"x")})).concat(Id.map(function(e){return"w-".concat(e)})),Os=mt.FontAwesomeConfig||{};function Ld(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var zd=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zd.forEach(function(e){var t=Ea(e,2),n=t[0],r=t[1],a=Fd(Ld(n));a!=null&&(Os[r]=a)})}var $d={familyPrefix:xs,styleDefault:"solid",replacementClass:_s,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},dn=T(T({},$d),Os);dn.autoReplaceSvg||(dn.observeMutations=!1);var $={};Object.keys(dn).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){dn[e]=n,Fn.forEach(function(r){return r($)})},get:function(){return dn[e]}})});mt.FontAwesomeConfig=$;var Fn=[];function jd(e){return Fn.push(e),function(){Fn.splice(Fn.indexOf(e),1)}}var it=Vr,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dd(e){if(!(!e||!et)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return oe.head.insertBefore(t,r),e}}var Hd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _n(){for(var e=12,t="";e-- >0;)t+=Hd[Math.random()*62|0];return t}function Qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ud(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ps(e[n]),'" ')},"").trim()}function fr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ia(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function Bd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Wd(e){var t=e.transform,n=e.width,r=n===void 0?Vr:n,a=e.height,i=a===void 0?Vr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ws?l+="translate(".concat(t.x/it-r/2,"em, ").concat(t.y/it-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/it,"em), calc(-50% + ").concat(t.y/it,"em)) "):l+="translate(".concat(t.x/it,"em, ").concat(t.y/it,"em) "),l+="scale(".concat(t.size/it*(t.flipX?-1:1),", ").concat(t.size/it*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Yd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ss(){var e=xs,t=_s,n=$.familyPrefix,r=$.replacementClass,a=Yd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var $i=!1;function Cr(){$.autoAddCss&&!$i&&(Dd(Ss()),$i=!0)}var Kd={mixout:function(){return{dom:{css:Ss,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Qe=mt||{};Qe[Ge]||(Qe[Ge]={});Qe[Ge].styles||(Qe[Ge].styles={});Qe[Ge].hooks||(Qe[Ge].hooks={});Qe[Ge].shims||(Qe[Ge].shims=[]);var Le=Qe[Ge],Ts=[],Vd=function e(){oe.removeEventListener("DOMContentLoaded",e),qn=1,Ts.map(function(t){return t()})},qn=!1;et&&(qn=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),qn||oe.addEventListener("DOMContentLoaded",Vd));function qd(e){!et||(qn?setTimeout(e,0):Ts.push(e))}function An(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ps(e):"<".concat(t," ").concat(Ud(r),">").concat(i.map(An).join(""),"</").concat(t,">")}function ji(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Xd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Gd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Xr(e){var t=Gd(e);return t.length===1?t[0].toString(16):null}function Qd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Di(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Gr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Di(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,Di(t)):Le.styles[e]=T(T({},Le.styles[e]||{}),i),e==="fas"&&Gr("fa",t)}var mn=Le.styles,Jd=Le.shims,Zd=Object.values(ks),Ma=null,Rs={},Is={},Ms={},Ns={},Ls={},em=Object.keys(Ta);function tm(e){return~Nd.indexOf(e)}function nm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!tm(a)?a:null}var Fs=function(){var t=function(i){return kr(mn,function(o,s,l){return o[l]=kr(s,i,{}),o},{})};Rs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Is=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ls=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in mn||$.autoFetchSvg,r=kr(Jd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ms=r.names,Ns=r.unicodes,Ma=ur($.styleDefault)};jd(function(e){Ma=ur(e.styleDefault)});Fs();function Na(e,t){return(Rs[e]||{})[t]}function rm(e,t){return(Is[e]||{})[t]}function zt(e,t){return(Ls[e]||{})[t]}function zs(e){return Ms[e]||{prefix:null,iconName:null}}function am(e){var t=Ns[e],n=Na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return Ma}var La=function(){return{prefix:null,iconName:null,rest:[]}};function ur(e){var t=Ta[e],n=Vn[e]||Vn[t],r=e in Le.styles?e:null;return n||r||null}function dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=nm($.familyPrefix,s);if(mn[s]?(s=Zd.includes(s)?Pd[s]:s,a=s,o.prefix=s):em.indexOf(s)>-1?(a=s,o.prefix=ur(s)):l?o.iconName=l:s!==$.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?zs(o.iconName):{},f=zt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!mn.far&&mn.fas&&!$.autoFetchSvg&&(o.prefix="fas")}return o},La());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ht()||"fas"),i}var im=function(){function e(){pd(this,e),this.definitions={}}return gd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),Gr(s,o[s]);var l=ks[s];l&&Gr(l,o[s]),Fs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Hi=[],$t={},Bt={},om=Object.keys(Bt);function sm(e,t){var n=t.mixoutsTo;return Hi=e,$t={},Object.keys(Bt).forEach(function(r){om.indexOf(r)===-1&&delete Bt[r]}),Hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Kn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){$t[o]||($t[o]=[]),$t[o].push(i[o])})}r.provides&&r.provides(Bt)}),n}function Qr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=$t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Et(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=$t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function Jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ht();if(!!t)return t=zt(n,t)||t,ji($s.definitions,n,t)||ji(Le.styles,n,t)}var $s=new im,lm=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Et("noAuto")},cm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(Et("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,qd(function(){um({autoReplaceSvgRoot:n}),Et("watch",t)})}},fm={icon:function(t){if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:zt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ur(t[0]);return{prefix:r,iconName:zt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.familyPrefix,"-"))>-1||t.match(Sd))){var a=dr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ht(),iconName:zt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ht();return{prefix:i,iconName:zt(i,t)||t}}}},Oe={noAuto:lm,config:$,dom:cm,parse:fm,library:$s,findIconDefinition:Jr,toHtml:An},um=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(Le.styles).length>0||$.autoFetchSvg)&&et&&$.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return An(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!et){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function dm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ia(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=fr(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function mm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat($.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Fa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,C=r.found?r:n,R=C.width,P=C.height,v=a==="fak",_=[$.replacementClass,i?"".concat($.familyPrefix,"-").concat(i):""].filter(function(he){return d.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(d.classes).join(" "),N={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(P)})},j=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(R/P*16*.0625,"em")}:{};g&&(N.attributes[At]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(f||_n())},children:[l]}),delete N.attributes.title);var K=T(T({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},j),d.styles)}),ae=r.found&&n.found?Je("generateAbstractMask",K)||{children:[],attributes:{}}:Je("generateAbstractIcon",K)||{children:[],attributes:{}},ce=ae.children,Pe=ae.attributes;return K.children=ce,K.attributes=Pe,s?mm(K):dm(K)}function Ui(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[At]="");var f=T({},o.styles);Ia(a)&&(f.transform=Wd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=fr(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function hm(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=fr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ar=Le.styles;function Zr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ea(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var pm={found:!1,width:512,height:512};function gm(e,t){!Cs&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ea(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=ht()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=zs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ar[t]&&Ar[t][e]){var o=Ar[t][e];return r(Zr(o))}gm(e,t),r(T(T({},pm),{},{icon:$.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Bi=function(){},ta=$.measurePerformance&&Rn&&Rn.mark&&Rn.measure?Rn:{mark:Bi,measure:Bi},rn='FA "6.1.1"',vm=function(t){return ta.mark("".concat(rn," ").concat(t," begins")),function(){return js(t)}},js=function(t){ta.mark("".concat(rn," ").concat(t," ends")),ta.measure("".concat(rn," ").concat(t),"".concat(rn," ").concat(t," begins"),"".concat(rn," ").concat(t," ends"))},za={begin:vm,end:js},zn=function(){};function Wi(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function bm(e){var t=e.getAttribute?e.getAttribute(Pa):null,n=e.getAttribute?e.getAttribute(Sa):null;return t&&n}function ym(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function wm(){if($.autoReplaceSvg===!0)return $n.replace;var e=$n[$.autoReplaceSvg];return e||$n.replace}function xm(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function _m(e){return oe.createElement(e)}function Ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?xm:_m:n;if(typeof e=="string")return oe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ds(o,{ceFn:r}))}),a}function Cm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ds(a),n)}),n.getAttribute(At)===null&&$.keepOriginalSource){var r=oe.createComment(Cm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf($.replacementClass))return $n.replace(t);var a=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return An(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function Yi(e){e()}function Hs(e,t){var n=typeof t=="function"?t:zn;if(e.length===0)n();else{var r=Yi;$.mutateApproach===Ed&&(r=mt.requestAnimationFrame||Yi),r(function(){var a=wm(),i=za.begin("mutate");e.map(a),i(),n()})}}var $a=!1;function Us(){$a=!0}function na(){$a=!1}var Xn=null;function Ki(e){if(!!Fi&&!!$.observeMutations){var t=e.treeCallback,n=t===void 0?zn:t,r=e.nodeCallback,a=r===void 0?zn:r,i=e.pseudoElementsCallback,o=i===void 0?zn:i,s=e.observeMutationsRoot,l=s===void 0?oe:s;Xn=new Fi(function(c){if(!$a){var f=ht();Qt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Wi(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Wi(d.target)&&~Md.indexOf(d.attributeName))if(d.attributeName==="class"&&bm(d.target)){var h=dr(Ra(d.target)),g=h.prefix,C=h.iconName;d.target.setAttribute(Pa,g||f),C&&d.target.setAttribute(Sa,C)}else ym(d.target)&&a(d.target)})}}),et&&Xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function km(){!Xn||Xn.disconnect()}function Am(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Em(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=dr(Ra(e));return a.prefix||(a.prefix=ht()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=rm(a.prefix,e.innerText)||Na(a.prefix,Xr(e.innerText))),a}function Om(e){var t=Qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||_n()):(t["aria-hidden"]="true",t.focusable="false")),t}function Pm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Em(e),r=n.iconName,a=n.prefix,i=n.rest,o=Om(e),s=Qr("parseNodeAttributes",{},e),l=t.styleParser?Am(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Sm=Le.styles;function Bs(e){var t=$.autoReplaceSvg==="nest"?Vi(e,{styleParser:!1}):Vi(e);return~t.extra.classes.indexOf(As)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();var n=oe.documentElement.classList,r=function(d){return n.add("".concat(zi,"-").concat(d))},a=function(d){return n.remove("".concat(zi,"-").concat(d))},i=$.autoFetchSvg?Object.keys(Ta):Object.keys(Sm),o=[".".concat(As,":not([").concat(At,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=za.begin("onTree"),c=s.reduce(function(f,d){try{var h=Bs(d);h&&f.push(h)}catch(g){Cs||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){Hs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Tm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bs(e).then(function(n){n&&Hs([n],t)})}function Rm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Jr(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Im=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,C=g===void 0?null:g,R=n.classes,P=R===void 0?[]:R,v=n.attributes,_=v===void 0?{}:v,N=n.styles,j=N===void 0?{}:N;if(!!t){var K=t.prefix,ae=t.iconName,ce=t.icon;return mr(T({type:"icon"},t),function(){return Et("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(h?_["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(C||_n()):(_["aria-hidden"]="true",_.focusable="false")),Fa({icons:{main:Zr(ce),mask:l?Zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ae,transform:T(T({},We),a),symbol:o,title:h,maskId:f,titleId:C,extra:{attributes:_,styles:j,classes:P}})})}},Mm={mixout:function(){return{icon:Rm(Im)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qi,n.nodeCallback=Tm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?oe:r,i=n.callback,o=i===void 0?function(){}:i;return qi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,C){Promise.all([ea(a,s),f.iconName?ea(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var P=Ea(R,2),v=P[0],_=P[1];g([n,Fa({icons:{main:v,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=fr(s);l.length>0&&(a.style=l);var c;return Ia(o)&&(c=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Nm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mr({type:"layer"},function(){Et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(cr(i)).join(" ")},children:o}]})}}}},Lm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return mr({type:"counter",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),hm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat($.familyPrefix,"-layers-counter")].concat(cr(s))}})})}}}},Fm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return mr({type:"text",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),Ui({content:n,transform:T(T({},We),i),title:s,extra:{attributes:d,styles:g,classes:["".concat($.familyPrefix,"-layers-text")].concat(cr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ws){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return $.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ui({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},zm=new RegExp('"',"ug"),Xi=[1105920,1112319];function $m(e){var t=e.replace(zm,""),n=Qd(t,0),r=n>=Xi[0]&&n<=Xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Xr(a?t[0]:t),isSecondary:r||a}}function Gi(e,t){var n="".concat(Ad).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Qt(e.children),o=i.filter(function(ae){return ae.getAttribute(qr)===t})[0],s=mt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Td),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Vn[l[2].toLowerCase()]:Rd[c],g=$m(d),C=g.value,R=g.isSecondary,P=l[0].startsWith("FontAwesome"),v=Na(h,C),_=v;if(P){var N=am(C);N.iconName&&N.prefix&&(v=N.iconName,h=N.prefix)}if(v&&!R&&(!o||o.getAttribute(Pa)!==h||o.getAttribute(Sa)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var j=Pm(),K=j.extra;K.attributes[qr]=t,ea(v,h).then(function(ae){var ce=Fa(T(T({},j),{},{icons:{main:ae,mask:La()},prefix:h,iconName:_,extra:K,watchable:!0})),Pe=oe.createElement("svg");t==="::before"?e.insertBefore(Pe,e.firstChild):e.appendChild(Pe),Pe.outerHTML=ce.map(function(he){return An(he)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function jm(e){return Promise.all([Gi(e,"::before"),Gi(e,"::after")])}function Dm(e){return e.parentNode!==document.head&&!~Od.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qi(e){if(!!et)return new Promise(function(t,n){var r=Qt(e.querySelectorAll("*")).filter(Dm).map(jm),a=za.begin("searchPseudoElements");Us(),Promise.all(r).then(function(){a(),na(),t()}).catch(function(){a(),na(),n()})})}var Hm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?oe:r;$.searchPseudoElements&&Qi(a)}}},Ji=!1,Um={mixout:function(){return{dom:{unwatch:function(){Us(),Ji=!0}}}},hooks:function(){return{bootstrap:function(){Ki(Qr("mutationObserverCallbacks",{}))},noAuto:function(){km()},watch:function(n){var r=n.observeMutationsRoot;Ji?na():Ki(Qr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Zi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Bm={mixout:function(){return{parse:{transform:function(n){return Zi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Zi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Er={x:0,y:0,width:"100%",height:"100%"};function eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wm(e){return e.tag==="g"?e.children:[e]}var Ym={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?dr(a.split(" ").map(function(o){return o.trim()})):La();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,g=Bd({transform:l,containerWidth:d,iconWidth:c}),C={tag:"rect",attributes:T(T({},Er),{},{fill:"white"})},R=f.children?{children:f.children.map(eo)}:{},P={tag:"g",attributes:T({},g.inner),children:[eo(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},R))]},v={tag:"g",attributes:T({},g.outer),children:[P]},_="mask-".concat(s||_n()),N="clip-".concat(s||_n()),j={tag:"mask",attributes:T(T({},Er),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,v]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Wm(h)},j]};return r.push(K,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(_,")")},Er)}),{children:r,attributes:a}}}},Km={provides:function(t){var n=!1;mt.matchMedia&&(n=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},qm=[Kd,Mm,Nm,Lm,Fm,Hm,Um,Bm,Ym,Km,Vm];sm(qm,{mixoutsTo:Oe});Oe.noAuto;var Ws=Oe.config,Xm=Oe.library;Oe.dom;var Ys=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Gm=Oe.icon;Oe.layer;var Qm=Oe.text;Oe.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Jm={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"]},Zm={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"]},eh={prefix:"fas",iconName:"chart-column",icon:[512,512,[],"e0e3","M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"]},th={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},nh={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"]},rh={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"]},ah={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"]},ih={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},oh={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"]},sh=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function lh(e,t){return t={exports:{}},e(t,t.exports),t.exports}var ch=lh(function(e){(function(t){var n=function(v,_,N){if(!c(_)||d(_)||h(_)||g(_)||l(_))return _;var j,K=0,ae=0;if(f(_))for(j=[],ae=_.length;K<ae;K++)j.push(n(v,_[K],N));else{j={};for(var ce in _)Object.prototype.hasOwnProperty.call(_,ce)&&(j[v(ce,N)]=n(v,_[ce],N))}return j},r=function(v,_){_=_||{};var N=_.separator||"_",j=_.split||/(?=[A-Z])/;return v.split(j).join(N)},a=function(v){return C(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,N){return N?N.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var _=a(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},C=function(v){return v=v-0,v===v},R=function(v,_){var N=_&&"process"in _?_.process:_;return typeof N!="function"?v:function(j,K){return N(j,v,K)}},P={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,_){return n(R(a,_),v)},decamelizeKeys:function(v,_){return n(R(o,_),v,_)},pascalizeKeys:function(v,_){return n(R(i,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(sh)}),fh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},an=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uh=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},ra=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function dh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ch.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function mh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ja(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=mh(f);break;case"style":l.style=dh(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=uh(n,["class","style"]);return sr(e.tag,Gn({},t,{class:a.class,style:Gn({},a.style,o)},a.attrs,s),r)}var Ks=!1;try{Ks=!0}catch{}function hh(){if(!Ks&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?an({},e,t):{}}function ph(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},an(t,"fa-"+e.size,e.size!==null),an(t,"fa-rotate-"+e.rotation,e.rotation!==null),an(t,"fa-pull-"+e.pull,e.pull!==null),an(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function to(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":fh(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var gh=kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=le(function(){return to(t.icon)}),i=le(function(){return hn("classes",ph(t))}),o=le(function(){return hn("transform",typeof t.transform=="string"?Ys.transform(t.transform):t.transform)}),s=le(function(){return hn("mask",to(t.mask))}),l=le(function(){return Gm(a.value,Gn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});ln(l,function(f){if(!f)return hh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=le(function(){return l.value?ja(l.value.abstract[0],{},r):null});return function(){return c.value}}});kn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ws.familyPrefix,i=le(function(){return[a+"-layers"].concat(ra(t.fixedWidth?[a+"-fw"]:[]))});return function(){return sr("div",{class:i.value},r.default?r.default():[])}}});kn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ws.familyPrefix,i=le(function(){return hn("classes",[].concat(ra(t.counter?[a+"-layers-counter"]:[]),ra(t.position?[a+"-layers-"+t.position]:[])))}),o=le(function(){return hn("transform",typeof t.transform=="string"?Ys.transform(t.transform):t.transform)}),s=le(function(){var c=Qm(t.value.toString(),Gn({},o.value,i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=le(function(){return ja(s.value,{},r)});return function(){return l.value}}});Xm.add(ah,ih,rh,eh,th,nh,Zm,Jm,oh);const Vs=vf(rs);Vs.use(hd);Vs.component("font-awesome-icon",gh).mount("#app");
