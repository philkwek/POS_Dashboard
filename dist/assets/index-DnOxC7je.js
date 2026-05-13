(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Zd={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function iw(){if(gv)return Il;gv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Il.Fragment=t,Il.jsx=n,Il.jsxs=n,Il}var yv;function rw(){return yv||(yv=1,Zd.exports=iw()),Zd.exports}var tt=rw(),Jd={exports:{}},Tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function sw(){if(_v)return Tt;_v=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),D=Symbol.iterator;function B(M){return M===null||typeof M!="object"?null:(M=D&&M[D]||M["@@iterator"],typeof M=="function"?M:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,F={};function W(M,X,rt){this.props=M,this.context=X,this.refs=F,this.updater=rt||$}W.prototype.isReactComponent={},W.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},W.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function at(){}at.prototype=W.prototype;function st(M,X,rt){this.props=M,this.context=X,this.refs=F,this.updater=rt||$}var dt=st.prototype=new at;dt.constructor=st,Z(dt,W.prototype),dt.isPureReactComponent=!0;var gt=Array.isArray;function vt(){}var R={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(M,X,rt){var ot=rt.ref;return{$$typeof:r,type:M,key:X,ref:ot!==void 0?ot:null,props:rt}}function V(M,X){return C(M.type,X,M.props)}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function k(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(rt){return X[rt]})}var w=/\/+/g;function Wt(M,X){return typeof M=="object"&&M!==null&&M.key!=null?k(""+M.key):X.toString(36)}function $t(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(vt,vt):(M.status="pending",M.then(function(X){M.status==="pending"&&(M.status="fulfilled",M.value=X)},function(X){M.status==="pending"&&(M.status="rejected",M.reason=X)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function K(M,X,rt,ot,Et){var Rt=typeof M;(Rt==="undefined"||Rt==="boolean")&&(M=null);var kt=!1;if(M===null)kt=!0;else switch(Rt){case"bigint":case"string":case"number":kt=!0;break;case"object":switch(M.$$typeof){case r:case t:kt=!0;break;case E:return kt=M._init,K(kt(M._payload),X,rt,ot,Et)}}if(kt)return Et=Et(M),kt=ot===""?"."+Wt(M,0):ot,gt(Et)?(rt="",kt!=null&&(rt=kt.replace(w,"$&/")+"/"),K(Et,X,rt,"",function(ds){return ds})):Et!=null&&(O(Et)&&(Et=V(Et,rt+(Et.key==null||M&&M.key===Et.key?"":(""+Et.key).replace(w,"$&/")+"/")+kt)),X.push(Et)),1;kt=0;var De=ot===""?".":ot+":";if(gt(M))for(var re=0;re<M.length;re++)ot=M[re],Rt=De+Wt(ot,re),kt+=K(ot,X,rt,Rt,Et);else if(re=B(M),typeof re=="function")for(M=re.call(M),re=0;!(ot=M.next()).done;)ot=ot.value,Rt=De+Wt(ot,re++),kt+=K(ot,X,rt,Rt,Et);else if(Rt==="object"){if(typeof M.then=="function")return K($t(M),X,rt,ot,Et);throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return kt}function it(M,X,rt){if(M==null)return M;var ot=[],Et=0;return K(M,ot,"","",function(Rt){return X.call(rt,Rt,Et++)}),ot}function mt(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(rt){(M._status===0||M._status===-1)&&(M._status=1,M._result=rt)},function(rt){(M._status===0||M._status===-1)&&(M._status=2,M._result=rt)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var Ut=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Ft={map:it,forEach:function(M,X,rt){it(M,function(){X.apply(this,arguments)},rt)},count:function(M){var X=0;return it(M,function(){X++}),X},toArray:function(M){return it(M,function(X){return X})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Tt.Activity=S,Tt.Children=Ft,Tt.Component=W,Tt.Fragment=n,Tt.Profiler=o,Tt.PureComponent=st,Tt.StrictMode=s,Tt.Suspense=p,Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Tt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return R.H.useMemoCache(M)}},Tt.cache=function(M){return function(){return M.apply(null,arguments)}},Tt.cacheSignal=function(){return null},Tt.cloneElement=function(M,X,rt){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ot=Z({},M.props),Et=M.key;if(X!=null)for(Rt in X.key!==void 0&&(Et=""+X.key),X)!b.call(X,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&X.ref===void 0||(ot[Rt]=X[Rt]);var Rt=arguments.length-2;if(Rt===1)ot.children=rt;else if(1<Rt){for(var kt=Array(Rt),De=0;De<Rt;De++)kt[De]=arguments[De+2];ot.children=kt}return C(M.type,Et,ot)},Tt.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Tt.createElement=function(M,X,rt){var ot,Et={},Rt=null;if(X!=null)for(ot in X.key!==void 0&&(Rt=""+X.key),X)b.call(X,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(Et[ot]=X[ot]);var kt=arguments.length-2;if(kt===1)Et.children=rt;else if(1<kt){for(var De=Array(kt),re=0;re<kt;re++)De[re]=arguments[re+2];Et.children=De}if(M&&M.defaultProps)for(ot in kt=M.defaultProps,kt)Et[ot]===void 0&&(Et[ot]=kt[ot]);return C(M,Rt,Et)},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(M){return{$$typeof:m,render:M}},Tt.isValidElement=O,Tt.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:mt}},Tt.memo=function(M,X){return{$$typeof:y,type:M,compare:X===void 0?null:X}},Tt.startTransition=function(M){var X=R.T,rt={};R.T=rt;try{var ot=M(),Et=R.S;Et!==null&&Et(rt,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(vt,Ut)}catch(Rt){Ut(Rt)}finally{X!==null&&rt.types!==null&&(X.types=rt.types),R.T=X}},Tt.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Tt.use=function(M){return R.H.use(M)},Tt.useActionState=function(M,X,rt){return R.H.useActionState(M,X,rt)},Tt.useCallback=function(M,X){return R.H.useCallback(M,X)},Tt.useContext=function(M){return R.H.useContext(M)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(M,X){return R.H.useDeferredValue(M,X)},Tt.useEffect=function(M,X){return R.H.useEffect(M,X)},Tt.useEffectEvent=function(M){return R.H.useEffectEvent(M)},Tt.useId=function(){return R.H.useId()},Tt.useImperativeHandle=function(M,X,rt){return R.H.useImperativeHandle(M,X,rt)},Tt.useInsertionEffect=function(M,X){return R.H.useInsertionEffect(M,X)},Tt.useLayoutEffect=function(M,X){return R.H.useLayoutEffect(M,X)},Tt.useMemo=function(M,X){return R.H.useMemo(M,X)},Tt.useOptimistic=function(M,X){return R.H.useOptimistic(M,X)},Tt.useReducer=function(M,X,rt){return R.H.useReducer(M,X,rt)},Tt.useRef=function(M){return R.H.useRef(M)},Tt.useState=function(M){return R.H.useState(M)},Tt.useSyncExternalStore=function(M,X,rt){return R.H.useSyncExternalStore(M,X,rt)},Tt.useTransition=function(){return R.H.useTransition()},Tt.version="19.2.5",Tt}var vv;function np(){return vv||(vv=1,Jd.exports=sw()),Jd.exports}var q=np(),Wd={exports:{}},Cl={},tm={exports:{}},em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function aw(){return Ev||(Ev=1,(function(r){function t(K,it){var mt=K.length;K.push(it);t:for(;0<mt;){var Ut=mt-1>>>1,Ft=K[Ut];if(0<o(Ft,it))K[Ut]=it,K[mt]=Ft,mt=Ut;else break t}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var it=K[0],mt=K.pop();if(mt!==it){K[0]=mt;t:for(var Ut=0,Ft=K.length,M=Ft>>>1;Ut<M;){var X=2*(Ut+1)-1,rt=K[X],ot=X+1,Et=K[ot];if(0>o(rt,mt))ot<Ft&&0>o(Et,rt)?(K[Ut]=Et,K[ot]=mt,Ut=ot):(K[Ut]=rt,K[X]=mt,Ut=X);else if(ot<Ft&&0>o(Et,mt))K[Ut]=Et,K[ot]=mt,Ut=ot;else break t}}return it}function o(K,it){var mt=K.sortIndex-it.sortIndex;return mt!==0?mt:K.id-it.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,S=null,D=3,B=!1,$=!1,Z=!1,F=!1,W=typeof setTimeout=="function"?setTimeout:null,at=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;function dt(K){for(var it=n(y);it!==null;){if(it.callback===null)s(y);else if(it.startTime<=K)s(y),it.sortIndex=it.expirationTime,t(p,it);else break;it=n(y)}}function gt(K){if(Z=!1,dt(K),!$)if(n(p)!==null)$=!0,vt||(vt=!0,k());else{var it=n(y);it!==null&&$t(gt,it.startTime-K)}}var vt=!1,R=-1,b=5,C=-1;function V(){return F?!0:!(r.unstable_now()-C<b)}function O(){if(F=!1,vt){var K=r.unstable_now();C=K;var it=!0;try{t:{$=!1,Z&&(Z=!1,at(R),R=-1),B=!0;var mt=D;try{e:{for(dt(K),S=n(p);S!==null&&!(S.expirationTime>K&&V());){var Ut=S.callback;if(typeof Ut=="function"){S.callback=null,D=S.priorityLevel;var Ft=Ut(S.expirationTime<=K);if(K=r.unstable_now(),typeof Ft=="function"){S.callback=Ft,dt(K),it=!0;break e}S===n(p)&&s(p),dt(K)}else s(p);S=n(p)}if(S!==null)it=!0;else{var M=n(y);M!==null&&$t(gt,M.startTime-K),it=!1}}break t}finally{S=null,D=mt,B=!1}it=void 0}}finally{it?k():vt=!1}}}var k;if(typeof st=="function")k=function(){st(O)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,Wt=w.port2;w.port1.onmessage=O,k=function(){Wt.postMessage(null)}}else k=function(){W(O,0)};function $t(K,it){R=W(function(){K(r.unstable_now())},it)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(K){switch(D){case 1:case 2:case 3:var it=3;break;default:it=D}var mt=D;D=it;try{return K()}finally{D=mt}},r.unstable_requestPaint=function(){F=!0},r.unstable_runWithPriority=function(K,it){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var mt=D;D=K;try{return it()}finally{D=mt}},r.unstable_scheduleCallback=function(K,it,mt){var Ut=r.unstable_now();switch(typeof mt=="object"&&mt!==null?(mt=mt.delay,mt=typeof mt=="number"&&0<mt?Ut+mt:Ut):mt=Ut,K){case 1:var Ft=-1;break;case 2:Ft=250;break;case 5:Ft=1073741823;break;case 4:Ft=1e4;break;default:Ft=5e3}return Ft=mt+Ft,K={id:E++,callback:it,priorityLevel:K,startTime:mt,expirationTime:Ft,sortIndex:-1},mt>Ut?(K.sortIndex=mt,t(y,K),n(p)===null&&K===n(y)&&(Z?(at(R),R=-1):Z=!0,$t(gt,mt-Ut))):(K.sortIndex=Ft,t(p,K),$||B||($=!0,vt||(vt=!0,k()))),K},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(K){var it=D;return function(){var mt=D;D=it;try{return K.apply(this,arguments)}finally{D=mt}}}})(em)),em}var Tv;function ow(){return Tv||(Tv=1,tm.exports=aw()),tm.exports}var nm={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function lw(){if(Sv)return Ye;Sv=1;var r=np();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ye.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,E)},Ye.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Ye.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ye.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ye.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:D,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:D,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ye.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ye.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ye.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ye.requestFormReset=function(p){s.d.r(p)},Ye.unstable_batchedUpdates=function(p,y){return p(y)},Ye.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Ye.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ye.version="19.2.5",Ye}var Av;function uw(){if(Av)return nm.exports;Av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),nm.exports=lw(),nm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function cw(){if(bv)return Cl;bv=1;var r=ow(),t=np(),n=uw();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),e;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===a){_=!0,a=h,l=d;break}if(T===l){_=!0,l=h,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=h;break}if(T===l){_=!0,l=d,a=h;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function E(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=E(e),i!==null)return i;e=e.sibling}return null}var S=Object.assign,D=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),at=Symbol.for("react.consumer"),st=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),gt=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function Wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case W:return"Profiler";case F:return"StrictMode";case gt:return"Suspense";case vt:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case st:return e.displayName||"Context";case at:return(e._context.displayName||"Context")+".Consumer";case dt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return i=e.displayName||null,i!==null?i:Wt(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Wt(e(i))}catch{}}return null}var $t=Array.isArray,K=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt={pending:!1,data:null,method:null,action:null},Ut=[],Ft=-1;function M(e){return{current:e}}function X(e){0>Ft||(e.current=Ut[Ft],Ut[Ft]=null,Ft--)}function rt(e,i){Ft++,Ut[Ft]=e.current,e.current=i}var ot=M(null),Et=M(null),Rt=M(null),kt=M(null);function De(e,i){switch(rt(Rt,i),rt(Et,e),rt(ot,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?z_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=z_(i),e=B_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(ot),rt(ot,e)}function re(){X(ot),X(Et),X(Rt)}function ds(e){e.memoizedState!==null&&rt(kt,e);var i=ot.current,a=B_(i,e.type);i!==a&&(rt(Et,e),rt(ot,a))}function aa(e){Et.current===e&&(X(ot),X(Et)),kt.current===e&&(X(kt),Al._currentValue=mt)}var oa,la;function si(e){if(oa===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);oa=i&&i[1]||"",la=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+e+la}var Ao=!1;function ms(e,i){if(!e||Ao)return"";Ao=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var z=H}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(H){z=H}e.call(Q.prototype)}}else{try{throw Error()}catch(H){z=H}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&z&&typeof H.stack=="string")return[H.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var I=_.split(`
`),U=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===U.length)for(l=I.length-1,h=U.length-1;1<=l&&0<=h&&I[l]!==U[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==U[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==U[h]){var G=`
`+I[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{Ao=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?si(a):""}function bo(e,i){switch(e.tag){case 26:case 27:case 5:return si(e.type);case 16:return si("Lazy");case 13:return e.child!==i&&i!==null?si("Suspense Fallback"):si("Suspense");case 19:return si("SuspenseList");case 0:case 15:return ms(e.type,!1);case 11:return ms(e.type.render,!1);case 1:return ms(e.type,!0);case 31:return si("Activity");default:return""}}function wo(e){try{var i="",a=null;do i+=bo(e,a),a=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ye=Object.prototype.hasOwnProperty,Ne=r.unstable_scheduleCallback,hr=r.unstable_cancelCallback,Jh=r.unstable_shouldYield,hu=r.unstable_requestPaint,tn=r.unstable_now,ps=r.unstable_getCurrentPriorityLevel,Ro=r.unstable_ImmediatePriority,Io=r.unstable_UserBlockingPriority,fr=r.unstable_NormalPriority,Wh=r.unstable_LowPriority,fu=r.unstable_IdlePriority,du=r.log,mu=r.unstable_setDisableYieldValue,Hn=null,ze=null;function Rn(e){if(typeof du=="function"&&mu(e),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(Hn,e)}catch{}}var he=Math.clz32?Math.clz32:gu,pu=Math.log,ua=Math.LN2;function gu(e){return e>>>=0,e===0?32:31-(pu(e)/ua|0)|0}var ai=256,gs=262144,_e=4194304;function oi(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=oi(l):(_&=T,_!==0?h=oi(_):a||(a=T&~e,a!==0&&(h=oi(a))))):(T=l&~d,T!==0?h=oi(T):_!==0?h=oi(_):a||(a=l&~e,a!==0&&(h=oi(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function qn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function tf(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yu(){var e=_e;return _e<<=1,(_e&62914560)===0&&(_e=4194304),e}function ui(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ys(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ef(e,i,a,l,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,U=e.hiddenUpdates;for(a=_&~a;0<a;){var G=31-he(a),Q=1<<G;T[G]=0,I[G]=-1;var z=U[G];if(z!==null)for(U[G]=null,G=0;G<z.length;G++){var H=z[G];H!==null&&(H.lane&=-536870913)}a&=~Q}l!==0&&_s(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~i))}function _s(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-he(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Co(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-he(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Do(e,i){var a=i&-i;return a=(a&42)!==0?1:vs(a),(a&(e.suspendedLanes|i))!==0?0:a}function vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _u(){var e=it.p;return e!==0?e:(e=window.event,e===void 0?32:uv(e.type))}function Fn(e,i){var a=it.p;try{return it.p=e,i()}finally{it.p=a}}var Gn=Math.random().toString(36).slice(2),ve="__reactFiber$"+Gn,xe="__reactProps$"+Gn,ci="__reactContainer$"+Gn,ca="__reactEvents$"+Gn,nf="__reactListeners$"+Gn,vu="__reactHandles$"+Gn,Eu="__reactResources$"+Gn,hi="__reactMarker$"+Gn;function ha(e){delete e[ve],delete e[xe],delete e[ca],delete e[nf],delete e[vu]}function fi(e){var i=e[ve];if(i)return i;for(var a=e.parentNode;a;){if(i=a[ci]||a[ve]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Y_(e);e!==null;){if(a=e[ve])return a;e=Y_(e)}return i}e=a,a=e.parentNode}return null}function In(e){if(e=e[ve]||e[ci]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function mn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function di(e){var i=e[Eu];return i||(i=e[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ee(e){e[hi]=!0}var No=new Set,Oo={};function mi(e,i){pi(e,i),pi(e+"Capture",i)}function pi(e,i){for(Oo[e]=i,e=0;e<i.length;e++)No.add(i[e])}var Mo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},xo={};function Tu(e){return ye.call(xo,e)?!0:ye.call(Vo,e)?!1:Mo.test(e)?xo[e]=!0:(Vo[e]=!0,!1)}function fa(e,i,a){if(Tu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function pn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Te(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ko(e,i,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Gt(e){if(!e._valueTracker){var i=dr(e)?"checked":"value";e._valueTracker=ko(e,i,""+e[i])}}function Es(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=dr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ts=/[\n"\\]/g;function an(e){return e.replace(Ts,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function da(e,i,a,l,h,d,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ke(i)):e.value!==""+ke(i)&&(e.value=""+ke(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?Lo(e,_,ke(i)):a!=null?Lo(e,_,ke(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ke(T):e.removeAttribute("name")}function Su(e,i,a,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Gt(e);return}a=a!=null?""+ke(a):"",i=i!=null?""+ke(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Gt(e)}function Lo(e,i,a){i==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mr(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ke(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Au(e,i,a){if(i!=null&&(i=""+ke(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+ke(a):""}function pr(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if($t(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=ke(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Gt(e)}function on(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var bu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||bu.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Uo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Po(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Po(e,d,i[d])}function ma(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(e){return gr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kn(){}var zo=null;function Cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,yi=null;function Ss(e){var i=In(e);if(i&&(e=i.stateNode)){var a=e[xe]||null;t:switch(e=i.stateNode,i.type){case"input":if(da(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+an(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[xe]||null;if(!h)throw Error(s(90));da(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Es(l)}break t;case"textarea":Au(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&mr(e,!!a.multiple,i,!1)}}}var ga=!1;function _r(e,i,a){if(ga)return e(i,a);ga=!0;try{var l=e(i);return l}finally{if(ga=!1,(yr!==null||yi!==null)&&(_c(),yr&&(i=yr,e=yi,yi=yr=null,Ss(i),e)))for(i=0;i<e.length;i++)Ss(e[i])}}function Yn(e,i){var a=e.stateNode;if(a===null)return null;var l=a[xe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=!1;if(Dn)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){As=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{As=!1}var _i=null,Bo=null,bs=null;function jo(){if(bs)return bs;var e,i=Bo,a=i.length,l,h="value"in _i?_i.value:_i.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var _=a-e;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return bs=h.slice(e,1<l?1-l:void 0)}function ws(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function $n(){return!1}function Be(e){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Bi:$n,this.isPropagationStopped=$n,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),i}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=Be(ji),vr=S({},ji,{view:0,detail:0}),Ho=Be(vr),Er,ya,Ei,_a=S({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Er=e.screenX-Ei.screenX,ya=e.screenY-Ei.screenY):ya=Er=0,Ei=e),Er)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),qo=Be(_a),Rs=S({},_a,{dataTransfer:0}),Ru=Be(Rs),Iu=S({},vr,{relatedTarget:0}),Is=Be(Iu),Fo=S({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),Cu=Be(Fo),va=S({},ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Du=Be(va),Nu=S({},ji,{data:0}),Ti=Be(Nu),Ou={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Vu[e])?!!i[e]:!1}function Tr(){return xu}var en=S({},vr,{key:function(e){if(e.key){var i=Ou[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ku=Be(en),Lu=S({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hi=Be(Lu),c=S({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),g=Be(c),v=S({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Be(v),L=S({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j=Be(L),nt=S({},ji,{newState:0,oldState:0}),bt=Be(nt),fe=[9,13,27,32],Ht=Dn&&"CompositionEvent"in window,se=null;Dn&&"documentMode"in document&&(se=document.documentMode);var Nn=Dn&&"TextEvent"in window&&!se,Si=Dn&&(!Ht||se&&8<se&&11>=se),Qn=" ",Xn=!1;function Cs(e,i){switch(e){case"keyup":return fe.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ea(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ta=!1;function IA(e,i){switch(e){case"compositionend":return Ea(i);case"keypress":return i.which!==32?null:(Xn=!0,Qn);case"textInput":return e=i.data,e===Qn&&Xn?null:e;default:return null}}function CA(e,i){if(Ta)return e==="compositionend"||!Ht&&Cs(e,i)?(e=jo(),bs=Bo=_i=null,Ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Si&&i.locale!=="ko"?null:i.data;default:return null}}var DA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!DA[e.type]:i==="textarea"}function Zp(e,i,a,l){yr?yi?yi.push(l):yi=[l]:yr=l,i=wc(i,"onChange"),0<i.length&&(a=new vi("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Go=null,Ko=null;function NA(e){V_(e,0)}function Pu(e){var i=mn(e);if(Es(i))return e}function Jp(e,i){if(e==="change")return i}var Wp=!1;if(Dn){var rf;if(Dn){var sf="oninput"in document;if(!sf){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),sf=typeof tg.oninput=="function"}rf=sf}else rf=!1;Wp=rf&&(!document.documentMode||9<document.documentMode)}function eg(){Go&&(Go.detachEvent("onpropertychange",ng),Ko=Go=null)}function ng(e){if(e.propertyName==="value"&&Pu(Ko)){var i=[];Zp(i,Ko,e,Cn(e)),_r(NA,i)}}function OA(e,i,a){e==="focusin"?(eg(),Go=i,Ko=a,Go.attachEvent("onpropertychange",ng)):e==="focusout"&&eg()}function MA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pu(Ko)}function VA(e,i){if(e==="click")return Pu(i)}function xA(e,i){if(e==="input"||e==="change")return Pu(i)}function kA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var gn=typeof Object.is=="function"?Object.is:kA;function Yo(e,i){if(gn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ye.call(i,h)||!gn(e[h],i[h]))return!1}return!0}function ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rg(e,i){var a=ig(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ig(a)}}function sg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?sg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function ag(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=gi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=gi(e.document)}return i}function af(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var LA=Dn&&"documentMode"in document&&11>=document.documentMode,Sa=null,of=null,$o=null,lf=!1;function og(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lf||Sa==null||Sa!==gi(l)||(l=Sa,"selectionStart"in l&&af(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$o&&Yo($o,l)||($o=l,l=wc(of,"onSelect"),0<l.length&&(i=new vi("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=Sa)))}function Ds(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Aa={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},uf={},lg={};Dn&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Ns(e){if(uf[e])return uf[e];if(!Aa[e])return e;var i=Aa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in lg)return uf[e]=i[a];return e}var ug=Ns("animationend"),cg=Ns("animationiteration"),hg=Ns("animationstart"),PA=Ns("transitionrun"),UA=Ns("transitionstart"),zA=Ns("transitioncancel"),fg=Ns("transitionend"),dg=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function Zn(e,i){dg.set(e,i),mi(i,[e])}var Uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},On=[],ba=0,hf=0;function zu(){for(var e=ba,i=hf=ba=0;i<e;){var a=On[i];On[i++]=null;var l=On[i];On[i++]=null;var h=On[i];On[i++]=null;var d=On[i];if(On[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&mg(a,h,d)}}function Bu(e,i,a,l){On[ba++]=e,On[ba++]=i,On[ba++]=a,On[ba++]=l,hf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ff(e,i,a,l){return Bu(e,i,a,l),ju(e)}function Os(e,i){return Bu(e,null,null,i),ju(e)}function mg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-he(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function ju(e){if(50<gl)throw gl=0,Td=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var wa={};function BA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,i,a,l){return new BA(e,i,a,l)}function df(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var a=e.alternate;return a===null?(a=yn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Hu(e,i,a,l,h,d){var _=0;if(l=e,typeof e=="function")df(e)&&(_=1);else if(typeof e=="string")_=Gb(e,a,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=yn(31,a,i,h),e.elementType=C,e.lanes=d,e;case Z:return Ms(a.children,h,d,i);case F:_=8,h|=24;break;case W:return e=yn(12,a,i,h|2),e.elementType=W,e.lanes=d,e;case gt:return e=yn(13,a,i,h),e.elementType=gt,e.lanes=d,e;case vt:return e=yn(19,a,i,h),e.elementType=vt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case st:_=10;break t;case at:_=9;break t;case dt:_=11;break t;case R:_=14;break t;case b:_=16,l=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=yn(_,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Ms(e,i,a,l){return e=yn(7,e,l,i),e.lanes=a,e}function mf(e,i,a){return e=yn(6,e,null,i),e.lanes=a,e}function gg(e){var i=yn(18,null,null,0);return i.stateNode=e,i}function pf(e,i,a){return i=yn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var yg=new WeakMap;function Mn(e,i){if(typeof e=="object"&&e!==null){var a=yg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:wo(i)},yg.set(e,i),i)}return{value:e,source:i,stack:wo(i)}}var Ra=[],Ia=0,qu=null,Qo=0,Vn=[],xn=0,Sr=null,Ai=1,bi="";function Fi(e,i){Ra[Ia++]=Qo,Ra[Ia++]=qu,qu=e,Qo=i}function _g(e,i,a){Vn[xn++]=Ai,Vn[xn++]=bi,Vn[xn++]=Sr,Sr=e;var l=Ai;e=bi;var h=32-he(l)-1;l&=~(1<<h),a+=1;var d=32-he(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Ai=1<<32-he(i)+h|a<<h|l,bi=d+e}else Ai=1<<d|a<<h|l,bi=e}function gf(e){e.return!==null&&(Fi(e,1),_g(e,1,0))}function yf(e){for(;e===qu;)qu=Ra[--Ia],Ra[Ia]=null,Qo=Ra[--Ia],Ra[Ia]=null;for(;e===Sr;)Sr=Vn[--xn],Vn[xn]=null,bi=Vn[--xn],Vn[xn]=null,Ai=Vn[--xn],Vn[xn]=null}function vg(e,i){Vn[xn++]=Ai,Vn[xn++]=bi,Vn[xn++]=Sr,Ai=i.id,bi=i.overflow,Sr=e}var je=null,ee=null,Vt=!1,Ar=null,kn=!1,_f=Error(s(519));function br(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Mn(i,e)),_f}function Eg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[ve]=e,i[xe]=l,a){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(a=0;a<_l.length;a++)Dt(_l[a],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Dt("invalid",i),Su(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Dt("invalid",i);break;case"textarea":Dt("invalid",i),pr(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||P_(i.textContent,a)?(l.popover!=null&&(Dt("beforetoggle",i),Dt("toggle",i)),l.onScroll!=null&&Dt("scroll",i),l.onScrollEnd!=null&&Dt("scrollend",i),l.onClick!=null&&(i.onclick=Kn),i=!0):i=!1,i||br(e,!0)}function Tg(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:je=je.return}}function Ca(e){if(e!==je)return!1;if(!Vt)return Tg(e),Vt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ld(e.type,e.memoizedProps)),a=!a),a&&ee&&br(e),Tg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ee=K_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ee=K_(e)}else i===27?(i=ee,Ur(e.type)?(e=jd,jd=null,ee=e):ee=i):ee=je?Pn(e.stateNode.nextSibling):null;return!0}function Vs(){ee=je=null,Vt=!1}function vf(){var e=Ar;return e!==null&&(hn===null?hn=e:hn.push.apply(hn,e),Ar=null),e}function Xo(e){Ar===null?Ar=[e]:Ar.push(e)}var Ef=M(null),xs=null,Gi=null;function wr(e,i,a){rt(Ef,i._currentValue),i._currentValue=a}function Ki(e){e._currentValue=Ef.current,X(Ef)}function Tf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Sf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Tf(d.return,a,e),l||(_=null);break t}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Tf(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Da(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=h.type;gn(h.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(h===kt.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}h=h.return}e!==null&&Sf(i,e,a,l),i.flags|=262144}function Fu(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ks(e){xs=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return Sg(xs,e)}function Gu(e,i){return xs===null&&ks(e),Sg(e,i)}function Sg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Gi=Gi.next=i;return a}var jA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},HA=r.unstable_scheduleCallback,qA=r.unstable_NormalPriority,Se={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new jA,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&HA(qA,function(){e.controller.abort()})}var Jo=null,bf=0,Na=0,Oa=null;function FA(e,i){if(Jo===null){var a=Jo=[];bf=0,Na=Id(),Oa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return bf++,i.then(Ag,Ag),i}function Ag(){if(--bf===0&&Jo!==null){Oa!==null&&(Oa.status="fulfilled");var e=Jo;Jo=null,Na=0,Oa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function GA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var bg=K.S;K.S=function(e,i){o_=tn(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&FA(e,i),bg!==null&&bg(e,i)};var Ls=M(null);function wf(){var e=Ls.current;return e!==null?e:te.pooledCache}function Ku(e,i){i===null?rt(Ls,Ls.current):rt(Ls,i.pool)}function wg(){var e=wf();return e===null?null:{parent:Se._currentValue,pool:e}}var Ma=Error(s(460)),Rf=Error(s(474)),Yu=Error(s(542)),$u={then:function(){}};function Rg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ig(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Kn,Kn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Dg(e),e;default:if(typeof i.status=="string")i.then(Kn,Kn);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Dg(e),e}throw Us=i,Ma}}function Ps(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,Ma):a}}var Us=null;function Cg(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function Dg(e){if(e===Ma||e===Yu)throw Error(s(483))}var Va=null,Wo=0;function Qu(e){var i=Wo;return Wo+=1,Va===null&&(Va=[]),Ig(Va,e,i)}function tl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Xu(e,i){throw i.$$typeof===D?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Ng(e){function i(x,N){if(e){var P=x.deletions;P===null?(x.deletions=[N],x.flags|=16):P.push(N)}}function a(x,N){if(!e)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=qi(x,N),x.index=0,x.sibling=null,x}function d(x,N,P){return x.index=P,e?(P=x.alternate,P!==null?(P=P.index,P<N?(x.flags|=67108866,N):P):(x.flags|=67108866,N)):(x.flags|=1048576,N)}function _(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function T(x,N,P,Y){return N===null||N.tag!==6?(N=mf(P,x.mode,Y),N.return=x,N):(N=h(N,P),N.return=x,N)}function I(x,N,P,Y){var ft=P.type;return ft===Z?G(x,N,P.props.children,Y,P.key):N!==null&&(N.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===b&&Ps(ft)===N.type)?(N=h(N,P.props),tl(N,P),N.return=x,N):(N=Hu(P.type,P.key,P.props,null,x.mode,Y),tl(N,P),N.return=x,N)}function U(x,N,P,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==P.containerInfo||N.stateNode.implementation!==P.implementation?(N=pf(P,x.mode,Y),N.return=x,N):(N=h(N,P.children||[]),N.return=x,N)}function G(x,N,P,Y,ft){return N===null||N.tag!==7?(N=Ms(P,x.mode,Y,ft),N.return=x,N):(N=h(N,P),N.return=x,N)}function Q(x,N,P){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=mf(""+N,x.mode,P),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case B:return P=Hu(N.type,N.key,N.props,null,x.mode,P),tl(P,N),P.return=x,P;case $:return N=pf(N,x.mode,P),N.return=x,N;case b:return N=Ps(N),Q(x,N,P)}if($t(N)||k(N))return N=Ms(N,x.mode,P,null),N.return=x,N;if(typeof N.then=="function")return Q(x,Qu(N),P);if(N.$$typeof===st)return Q(x,Gu(x,N),P);Xu(x,N)}return null}function z(x,N,P,Y){var ft=N!==null?N.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ft!==null?null:T(x,N,""+P,Y);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case B:return P.key===ft?I(x,N,P,Y):null;case $:return P.key===ft?U(x,N,P,Y):null;case b:return P=Ps(P),z(x,N,P,Y)}if($t(P)||k(P))return ft!==null?null:G(x,N,P,Y,null);if(typeof P.then=="function")return z(x,N,Qu(P),Y);if(P.$$typeof===st)return z(x,N,Gu(x,P),Y);Xu(x,P)}return null}function H(x,N,P,Y,ft){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return x=x.get(P)||null,T(N,x,""+Y,ft);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case B:return x=x.get(Y.key===null?P:Y.key)||null,I(N,x,Y,ft);case $:return x=x.get(Y.key===null?P:Y.key)||null,U(N,x,Y,ft);case b:return Y=Ps(Y),H(x,N,P,Y,ft)}if($t(Y)||k(Y))return x=x.get(P)||null,G(N,x,Y,ft,null);if(typeof Y.then=="function")return H(x,N,P,Qu(Y),ft);if(Y.$$typeof===st)return H(x,N,P,Gu(N,Y),ft);Xu(N,Y)}return null}function ut(x,N,P,Y){for(var ft=null,Bt=null,ct=N,It=N=0,Ot=null;ct!==null&&It<P.length;It++){ct.index>It?(Ot=ct,ct=null):Ot=ct.sibling;var jt=z(x,ct,P[It],Y);if(jt===null){ct===null&&(ct=Ot);break}e&&ct&&jt.alternate===null&&i(x,ct),N=d(jt,N,It),Bt===null?ft=jt:Bt.sibling=jt,Bt=jt,ct=Ot}if(It===P.length)return a(x,ct),Vt&&Fi(x,It),ft;if(ct===null){for(;It<P.length;It++)ct=Q(x,P[It],Y),ct!==null&&(N=d(ct,N,It),Bt===null?ft=ct:Bt.sibling=ct,Bt=ct);return Vt&&Fi(x,It),ft}for(ct=l(ct);It<P.length;It++)Ot=H(ct,x,It,P[It],Y),Ot!==null&&(e&&Ot.alternate!==null&&ct.delete(Ot.key===null?It:Ot.key),N=d(Ot,N,It),Bt===null?ft=Ot:Bt.sibling=Ot,Bt=Ot);return e&&ct.forEach(function(qr){return i(x,qr)}),Vt&&Fi(x,It),ft}function yt(x,N,P,Y){if(P==null)throw Error(s(151));for(var ft=null,Bt=null,ct=N,It=N=0,Ot=null,jt=P.next();ct!==null&&!jt.done;It++,jt=P.next()){ct.index>It?(Ot=ct,ct=null):Ot=ct.sibling;var qr=z(x,ct,jt.value,Y);if(qr===null){ct===null&&(ct=Ot);break}e&&ct&&qr.alternate===null&&i(x,ct),N=d(qr,N,It),Bt===null?ft=qr:Bt.sibling=qr,Bt=qr,ct=Ot}if(jt.done)return a(x,ct),Vt&&Fi(x,It),ft;if(ct===null){for(;!jt.done;It++,jt=P.next())jt=Q(x,jt.value,Y),jt!==null&&(N=d(jt,N,It),Bt===null?ft=jt:Bt.sibling=jt,Bt=jt);return Vt&&Fi(x,It),ft}for(ct=l(ct);!jt.done;It++,jt=P.next())jt=H(ct,x,It,jt.value,Y),jt!==null&&(e&&jt.alternate!==null&&ct.delete(jt.key===null?It:jt.key),N=d(jt,N,It),Bt===null?ft=jt:Bt.sibling=jt,Bt=jt);return e&&ct.forEach(function(nw){return i(x,nw)}),Vt&&Fi(x,It),ft}function Jt(x,N,P,Y){if(typeof P=="object"&&P!==null&&P.type===Z&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case B:t:{for(var ft=P.key;N!==null;){if(N.key===ft){if(ft=P.type,ft===Z){if(N.tag===7){a(x,N.sibling),Y=h(N,P.props.children),Y.return=x,x=Y;break t}}else if(N.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===b&&Ps(ft)===N.type){a(x,N.sibling),Y=h(N,P.props),tl(Y,P),Y.return=x,x=Y;break t}a(x,N);break}else i(x,N);N=N.sibling}P.type===Z?(Y=Ms(P.props.children,x.mode,Y,P.key),Y.return=x,x=Y):(Y=Hu(P.type,P.key,P.props,null,x.mode,Y),tl(Y,P),Y.return=x,x=Y)}return _(x);case $:t:{for(ft=P.key;N!==null;){if(N.key===ft)if(N.tag===4&&N.stateNode.containerInfo===P.containerInfo&&N.stateNode.implementation===P.implementation){a(x,N.sibling),Y=h(N,P.children||[]),Y.return=x,x=Y;break t}else{a(x,N);break}else i(x,N);N=N.sibling}Y=pf(P,x.mode,Y),Y.return=x,x=Y}return _(x);case b:return P=Ps(P),Jt(x,N,P,Y)}if($t(P))return ut(x,N,P,Y);if(k(P)){if(ft=k(P),typeof ft!="function")throw Error(s(150));return P=ft.call(P),yt(x,N,P,Y)}if(typeof P.then=="function")return Jt(x,N,Qu(P),Y);if(P.$$typeof===st)return Jt(x,N,Gu(x,P),Y);Xu(x,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,N!==null&&N.tag===6?(a(x,N.sibling),Y=h(N,P),Y.return=x,x=Y):(a(x,N),Y=mf(P,x.mode,Y),Y.return=x,x=Y),_(x)):a(x,N)}return function(x,N,P,Y){try{Wo=0;var ft=Jt(x,N,P,Y);return Va=null,ft}catch(ct){if(ct===Ma||ct===Yu)throw ct;var Bt=yn(29,ct,null,x.mode);return Bt.lanes=Y,Bt.return=x,Bt}finally{}}}var zs=Ng(!0),Og=Ng(!1),Rr=!1;function If(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ir(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=ju(e),mg(e,null,a),i}return Bu(e,l,i,a),ju(e)}function el(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Co(e,a)}}function Df(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Nf=!1;function nl(){if(Nf){var e=Oa;if(e!==null)throw e}}function il(e,i,a,l){Nf=!1;var h=e.updateQueue;Rr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,U=I.next;I.next=null,_===null?d=U:_.next=U,_=I;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==_&&(T===null?G.firstBaseUpdate=U:T.next=U,G.lastBaseUpdate=I))}if(d!==null){var Q=h.baseState;_=0,G=U=I=null,T=d;do{var z=T.lane&-536870913,H=z!==T.lane;if(H?(Nt&z)===z:(l&z)===z){z!==0&&z===Na&&(Nf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ut=e,yt=T;z=i;var Jt=a;switch(yt.tag){case 1:if(ut=yt.payload,typeof ut=="function"){Q=ut.call(Jt,Q,z);break t}Q=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=yt.payload,z=typeof ut=="function"?ut.call(Jt,Q,z):ut,z==null)break t;Q=S({},Q,z);break t;case 2:Rr=!0}}z=T.callback,z!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[z]:H.push(z))}else H={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(U=G=H,I=Q):G=G.next=H,_|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);G===null&&(I=Q),h.baseState=I,h.firstBaseUpdate=U,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Vr|=_,e.lanes=_,e.memoizedState=Q}}function Mg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Vg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mg(a[e],i)}var xa=M(null),Zu=M(0);function xg(e,i){e=er,rt(Zu,e),rt(xa,i),er=e|i.baseLanes}function Of(){rt(Zu,er),rt(xa,xa.current)}function Mf(){er=Zu.current,X(xa),X(Zu)}var _n=M(null),Ln=null;function Dr(e){var i=e.alternate;rt(de,de.current&1),rt(_n,e),Ln===null&&(i===null||xa.current!==null||i.memoizedState!==null)&&(Ln=e)}function Vf(e){rt(de,de.current),rt(_n,e),Ln===null&&(Ln=e)}function kg(e){e.tag===22?(rt(de,de.current),rt(_n,e),Ln===null&&(Ln=e)):Nr()}function Nr(){rt(de,de.current),rt(_n,_n.current)}function vn(e){X(_n),Ln===e&&(Ln=null),X(de)}var de=M(0);function Ju(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zd(a)||Bd(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,wt=null,Xt=null,Ae=null,Wu=!1,ka=!1,Bs=!1,tc=0,rl=0,La=null,KA=0;function ue(){throw Error(s(321))}function xf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!gn(e[a],i[a]))return!1;return!0}function kf(e,i,a,l,h,d){return Yi=d,wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=e===null||e.memoizedState===null?_y:Xf,Bs=!1,d=a(l,h),Bs=!1,ka&&(d=Pg(i,a,l,h)),Lg(e),d}function Lg(e){K.H=ol;var i=Xt!==null&&Xt.next!==null;if(Yi=0,Ae=Xt=wt=null,Wu=!1,rl=0,La=null,i)throw Error(s(300));e===null||be||(e=e.dependencies,e!==null&&Fu(e)&&(be=!0))}function Pg(e,i,a,l){wt=e;var h=0;do{if(ka&&(La=null),rl=0,ka=!1,25<=h)throw Error(s(301));if(h+=1,Ae=Xt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=vy,d=i(a,l)}while(ka);return d}function YA(){var e=K.H,i=e.useState()[0];return i=typeof i.then=="function"?sl(i):i,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(wt.flags|=1024),i}function Lf(){var e=tc!==0;return tc=0,e}function Pf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Uf(e){if(Wu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Wu=!1}Yi=0,Ae=Xt=wt=null,ka=!1,rl=tc=0,La=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?wt.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function me(){if(Xt===null){var e=wt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var i=Ae===null?wt.memoizedState:Ae.next;if(i!==null)Ae=i,Xt=e;else{if(e===null)throw wt.alternate===null?Error(s(467)):Error(s(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Ae===null?wt.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var i=rl;return rl+=1,La===null&&(La=[]),e=Ig(La,e,i),i=wt,(Ae===null?i.memoizedState:Ae.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?_y:Xf),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===st)return He(e)}throw Error(s(438,String(e)))}function zf(e){var i=null,a=wt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=wt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ec(),wt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function $i(e,i){return typeof i=="function"?i(e):i}function ic(e){var i=me();return Bf(i,Xt,e)}function Bf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=_=null,I=null,U=i,G=!1;do{var Q=U.lane&-536870913;if(Q!==U.lane?(Nt&Q)===Q:(Yi&Q)===Q){var z=U.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),Q===Na&&(G=!0);else if((Yi&z)===z){U=U.next,z===Na&&(G=!0);continue}else Q={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(T=I=Q,_=d):I=I.next=Q,wt.lanes|=z,Vr|=z;Q=U.action,Bs&&a(d,Q),d=U.hasEagerState?U.eagerState:a(d,Q)}else z={lane:Q,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(T=I=z,_=d):I=I.next=z,wt.lanes|=Q,Vr|=Q;U=U.next}while(U!==null&&U!==i);if(I===null?_=d:I.next=T,!gn(d,e.memoizedState)&&(be=!0,G&&(a=Oa,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function jf(e){var i=me(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);gn(d,i.memoizedState)||(be=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Ug(e,i,a){var l=wt,h=me(),d=Vt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!gn((Xt||h).memoizedState,a);if(_&&(h.memoizedState=a,be=!0),h=h.queue,Ff(jg.bind(null,l,h,e),[e]),h.getSnapshot!==i||_||Ae!==null&&Ae.memoizedState.tag&1){if(l.flags|=2048,Pa(9,{destroy:void 0},Bg.bind(null,l,h,a,i),null),te===null)throw Error(s(349));d||(Yi&127)!==0||zg(l,i,a)}return a}function zg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=wt.updateQueue,i===null?(i=ec(),wt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Bg(e,i,a,l){i.value=a,i.getSnapshot=l,Hg(i)&&qg(e)}function jg(e,i,a){return a(function(){Hg(i)&&qg(e)})}function Hg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!gn(e,a)}catch{return!0}}function qg(e){var i=Os(e,2);i!==null&&fn(i,e,2)}function Hf(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),Bs){Rn(!0);try{a()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},i}function Fg(e,i,a,l){return e.baseState=a,Bf(e,Xt,typeof l=="function"?l:$i)}function $A(e,i,a,l,h){if(ac(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Gg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Gg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=K.T,_={};K.T=_;try{var T=a(h,l),I=K.S;I!==null&&I(_,T),Kg(e,i,T)}catch(U){qf(e,i,U)}finally{d!==null&&_.types!==null&&(d.types=_.types),K.T=d}}else try{d=a(h,l),Kg(e,i,d)}catch(U){qf(e,i,U)}}function Kg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Yg(e,i,l)},function(l){return qf(e,i,l)}):Yg(e,i,a)}function Yg(e,i,a){i.status="fulfilled",i.value=a,$g(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Gg(e,a)))}function qf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,$g(i),i=i.next;while(i!==l)}e.action=null}function $g(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Qg(e,i){return i}function Xg(e,i){if(Vt){var a=te.formState;if(a!==null){t:{var l=wt;if(Vt){if(ee){e:{for(var h=ee,d=kn;h.nodeType!==8;){if(!d){h=null;break e}if(h=Pn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ee=Pn(h.nextSibling),l=h.data==="F!";break t}}br(l)}l=!1}l&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qg,lastRenderedState:i},a.queue=l,a=py.bind(null,wt,l),l.dispatch=a,l=Hf(!1),d=Qf.bind(null,wt,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=$A.bind(null,wt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Zg(e){var i=me();return Jg(i,Xt,e)}function Jg(e,i,a){if(i=Bf(e,i,Qg)[0],e=ic($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=sl(i)}catch(_){throw _===Ma?Yu:_}else l=i;i=me();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(wt.flags|=2048,Pa(9,{destroy:void 0},QA.bind(null,h,a),null)),[l,d,e]}function QA(e,i){e.action=i}function Wg(e){var i=me(),a=Xt;if(a!==null)return Jg(i,a,e);me(),i=i.memoizedState,a=me();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Pa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=wt.updateQueue,i===null&&(i=ec(),wt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function ty(){return me().memoizedState}function rc(e,i,a,l){var h=nn();wt.flags|=e,h.memoizedState=Pa(1|i,{destroy:void 0},a,l===void 0?null:l)}function sc(e,i,a,l){var h=me();l=l===void 0?null:l;var d=h.memoizedState.inst;Xt!==null&&l!==null&&xf(l,Xt.memoizedState.deps)?h.memoizedState=Pa(i,d,a,l):(wt.flags|=e,h.memoizedState=Pa(1|i,d,a,l))}function ey(e,i){rc(8390656,8,e,i)}function Ff(e,i){sc(2048,8,e,i)}function XA(e){wt.flags|=4;var i=wt.updateQueue;if(i===null)i=ec(),wt.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function ny(e){var i=me().memoizedState;return XA({ref:i,nextImpl:e}),function(){if((qt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function iy(e,i){return sc(4,2,e,i)}function ry(e,i){return sc(4,4,e,i)}function sy(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ay(e,i,a){a=a!=null?a.concat([e]):null,sc(4,4,sy.bind(null,i,e),a)}function Gf(){}function oy(e,i){var a=me();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&xf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function ly(e,i){var a=me();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&xf(i,l[1]))return l[0];if(l=e(),Bs){Rn(!0);try{e()}finally{Rn(!1)}}return a.memoizedState=[l,i],l}function Kf(e,i,a){return a===void 0||(Yi&1073741824)!==0&&(Nt&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=u_(),wt.lanes|=e,Vr|=e,a)}function uy(e,i,a,l){return gn(a,i)?a:xa.current!==null?(e=Kf(e,a,l),gn(e,i)||(be=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Nt&261930)===0?(be=!0,e.memoizedState=a):(e=u_(),wt.lanes|=e,Vr|=e,i)}function cy(e,i,a,l,h){var d=it.p;it.p=d!==0&&8>d?d:8;var _=K.T,T={};K.T=T,Qf(e,!1,i,a);try{var I=h(),U=K.S;if(U!==null&&U(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var G=GA(I,l);al(e,i,G,Sn(e))}else al(e,i,l,Sn(e))}catch(Q){al(e,i,{then:function(){},status:"rejected",reason:Q},Sn())}finally{it.p=d,_!==null&&T.types!==null&&(_.types=T.types),K.T=_}}function ZA(){}function Yf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=hy(e).queue;cy(e,h,i,mt,a===null?ZA:function(){return fy(e),a(l)})}function hy(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:mt,baseState:mt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:mt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function fy(e){var i=hy(e);i.next===null&&(i=e.alternate.memoizedState),al(e,i.next.queue,{},Sn())}function $f(){return He(Al)}function dy(){return me().memoizedState}function my(){return me().memoizedState}function JA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();e=Ir(a);var l=Cr(i,e,a);l!==null&&(fn(l,i,a),el(l,i,a)),i={cache:Af()},e.payload=i;return}i=i.return}}function WA(e,i,a){var l=Sn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ac(e)?gy(i,a):(a=ff(e,i,a,l),a!==null&&(fn(a,e,l),yy(a,i,l)))}function py(e,i,a){var l=Sn();al(e,i,a,l)}function al(e,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ac(e))gy(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,a);if(h.hasEagerState=!0,h.eagerState=T,gn(T,_))return Bu(e,i,h,0),te===null&&zu(),!1}catch{}finally{}if(a=ff(e,i,h,l),a!==null)return fn(a,e,l),yy(a,i,l),!0}return!1}function Qf(e,i,a,l){if(l={lane:2,revertLane:Id(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ac(e)){if(i)throw Error(s(479))}else i=ff(e,a,l,2),i!==null&&fn(i,e,2)}function ac(e){var i=e.alternate;return e===wt||i!==null&&i===wt}function gy(e,i){ka=Wu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function yy(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Co(e,a)}}var ol={readContext:He,use:nc,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue};ol.useEffectEvent=ue;var _y={readContext:He,use:nc,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:He,useEffect:ey,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,rc(4194308,4,sy.bind(null,i,e),a)},useLayoutEffect:function(e,i){return rc(4194308,4,e,i)},useInsertionEffect:function(e,i){rc(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var l=e();if(Bs){Rn(!0);try{e()}finally{Rn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=nn();if(a!==void 0){var h=a(i);if(Bs){Rn(!0);try{a(i)}finally{Rn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=WA.bind(null,wt,e),[l.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Hf(e);var i=e.queue,a=py.bind(null,wt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(e,i){var a=nn();return Kf(a,e,i)},useTransition:function(){var e=Hf(!1);return e=cy.bind(null,wt,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=wt,h=nn();if(Vt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),te===null)throw Error(s(349));(Nt&127)!==0||zg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ey(jg.bind(null,l,d,e),[e]),l.flags|=2048,Pa(9,{destroy:void 0},Bg.bind(null,l,d,a,i),null),a},useId:function(){var e=nn(),i=te.identifierPrefix;if(Vt){var a=bi,l=Ai;a=(l&~(1<<32-he(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=tc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=KA++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:$f,useFormState:Xg,useActionState:Xg,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Qf.bind(null,wt,!0,a),a.dispatch=i,[e,i]},useMemoCache:zf,useCacheRefresh:function(){return nn().memoizedState=JA.bind(null,wt)},useEffectEvent:function(e){var i=nn(),a={impl:e};return i.memoizedState=a,function(){if((qt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xf={readContext:He,use:nc,useCallback:oy,useContext:He,useEffect:Ff,useImperativeHandle:ay,useInsertionEffect:iy,useLayoutEffect:ry,useMemo:ly,useReducer:ic,useRef:ty,useState:function(){return ic($i)},useDebugValue:Gf,useDeferredValue:function(e,i){var a=me();return uy(a,Xt.memoizedState,e,i)},useTransition:function(){var e=ic($i)[0],i=me().memoizedState;return[typeof e=="boolean"?e:sl(e),i]},useSyncExternalStore:Ug,useId:dy,useHostTransitionStatus:$f,useFormState:Zg,useActionState:Zg,useOptimistic:function(e,i){var a=me();return Fg(a,Xt,e,i)},useMemoCache:zf,useCacheRefresh:my};Xf.useEffectEvent=ny;var vy={readContext:He,use:nc,useCallback:oy,useContext:He,useEffect:Ff,useImperativeHandle:ay,useInsertionEffect:iy,useLayoutEffect:ry,useMemo:ly,useReducer:jf,useRef:ty,useState:function(){return jf($i)},useDebugValue:Gf,useDeferredValue:function(e,i){var a=me();return Xt===null?Kf(a,e,i):uy(a,Xt.memoizedState,e,i)},useTransition:function(){var e=jf($i)[0],i=me().memoizedState;return[typeof e=="boolean"?e:sl(e),i]},useSyncExternalStore:Ug,useId:dy,useHostTransitionStatus:$f,useFormState:Wg,useActionState:Wg,useOptimistic:function(e,i){var a=me();return Xt!==null?Fg(a,Xt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zf,useCacheRefresh:my};vy.useEffectEvent=ny;function Zf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:S({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=Sn(),h=Ir(l);h.payload=i,a!=null&&(h.callback=a),i=Cr(e,h,l),i!==null&&(fn(i,e,l),el(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=Sn(),h=Ir(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Cr(e,h,l),i!==null&&(fn(i,e,l),el(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Sn(),l=Ir(a);l.tag=2,i!=null&&(l.callback=i),i=Cr(e,l,a),i!==null&&(fn(i,e,a),el(i,e,a))}};function Ey(e,i,a,l,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!Yo(a,l)||!Yo(h,d):!0}function Ty(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Jf.enqueueReplaceState(i,i.state,null)}function js(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=S({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}function Sy(e){Uu(e)}function Ay(e){console.error(e)}function by(e){Uu(e)}function oc(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function wy(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Wf(e,i,a){return a=Ir(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(e,i)},a}function Ry(e){return e=Ir(e),e.tag=3,e}function Iy(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){wy(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){wy(i,a,l),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function tb(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Da(i,a,h,!0),a=_n.current,a!==null){switch(a.tag){case 31:case 13:return Ln===null?vc():a.alternate===null&&ce===0&&(ce=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$u?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),bd(e,l,h)),!1;case 22:return a.flags|=65536,l===$u?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),bd(e,l,h)),!1}throw Error(s(435,a.tag))}return bd(e,l,h),vc(),!1}if(Vt)return i=_n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==_f&&(e=Error(s(422),{cause:l}),Xo(Mn(e,a)))):(l!==_f&&(i=Error(s(423),{cause:l}),Xo(Mn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Mn(l,a),h=Wf(e.stateNode,l,h),Df(e,h),ce!==4&&(ce=2)),!1;var d=Error(s(520),{cause:l});if(d=Mn(d,a),pl===null?pl=[d]:pl.push(d),ce!==4&&(ce=2),i===null)return!0;l=Mn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Wf(a.stateNode,l,e),Df(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Ry(h),Iy(h,e,a,l),Df(a,h),!1}a=a.return}while(a!==null);return!1}var td=Error(s(461)),be=!1;function qe(e,i,a,l){i.child=e===null?Og(i,null,a,l):zs(i,e.child,a,l)}function Cy(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return ks(i),l=kf(e,i,a,_,d,h),T=Lf(),e!==null&&!be?(Pf(e,i,h),Qi(e,i,h)):(Vt&&T&&gf(i),i.flags|=1,qe(e,i,l,h),i.child)}function Dy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!df(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Ny(e,i,d,l,h)):(e=Hu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!ld(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(_,l)&&e.ref===i.ref)return Qi(e,i,h)}return i.flags|=1,e=qi(d,l),e.ref=i.ref,e.return=i,i.child=e}function Ny(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Yo(d,l)&&e.ref===i.ref)if(be=!1,i.pendingProps=l=d,ld(e,h))(e.flags&131072)!==0&&(be=!0);else return i.lanes=e.lanes,Qi(e,i,h)}return ed(e,i,a,l,h)}function Oy(e,i,a,l){var h=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return My(e,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ku(i,d!==null?d.cachePool:null),d!==null?xg(i,d):Of(),kg(i);else return l=i.lanes=536870912,My(e,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(Ku(i,d.cachePool),xg(i,d),Nr(),i.memoizedState=null):(e!==null&&Ku(i,null),Of(),Nr());return qe(e,i,h,a),i.child}function ll(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function My(e,i,a,l,h){var d=wf();return d=d===null?null:{parent:Se._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ku(i,null),Of(),kg(i),e!==null&&Da(e,i,l,!0),i.childLanes=h,null}function lc(e,i){return i=cc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Vy(e,i,a){return zs(i,e.child,null,a),e=lc(i,i.pendingProps),e.flags|=2,vn(i),i.memoizedState=null,e}function eb(e,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Vt){if(l.mode==="hidden")return e=lc(i,l),i.lanes=536870912,ll(null,e);if(Vf(i),(e=ee)?(e=G_(e,kn),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ai,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=gg(e),a.return=i,i.child=a,je=i,ee=null)):e=null,e===null)throw br(i);return i.lanes=536870912,null}return lc(i,l)}var d=e.memoizedState;if(d!==null){var _=d.dehydrated;if(Vf(i),h)if(i.flags&256)i.flags&=-257,i=Vy(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(be||Da(e,i,a,!1),h=(a&e.childLanes)!==0,be||h){if(l=te,l!==null&&(_=Do(l,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Os(e,_),fn(l,e,_),td;vc(),i=Vy(e,i,a)}else e=d.treeContext,ee=Pn(_.nextSibling),je=i,Vt=!0,Ar=null,kn=!1,e!==null&&vg(i,e),i=lc(i,l),i.flags|=4096;return i}return e=qi(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function uc(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function ed(e,i,a,l,h){return ks(i),a=kf(e,i,a,l,void 0,h),l=Lf(),e!==null&&!be?(Pf(e,i,h),Qi(e,i,h)):(Vt&&l&&gf(i),i.flags|=1,qe(e,i,a,h),i.child)}function xy(e,i,a,l,h,d){return ks(i),i.updateQueue=null,a=Pg(i,l,a,h),Lg(e),l=Lf(),e!==null&&!be?(Pf(e,i,d),Qi(e,i,d)):(Vt&&l&&gf(i),i.flags|=1,qe(e,i,a,d),i.child)}function ky(e,i,a,l,h){if(ks(i),i.stateNode===null){var d=wa,_=a.contextType;typeof _=="object"&&_!==null&&(d=He(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},If(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?He(_):wa,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Zf(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Jf.enqueueReplaceState(d,d.state,null),il(i,l,d,h),nl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,I=js(a,T);d.props=I;var U=d.context,G=a.contextType;_=wa,typeof G=="object"&&G!==null&&(_=He(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||U!==_)&&Ty(i,d,l,_),Rr=!1;var z=i.memoizedState;d.state=z,il(i,l,d,h),nl(),U=i.memoizedState,T||z!==U||Rr?(typeof Q=="function"&&(Zf(i,a,Q,l),U=i.memoizedState),(I=Rr||Ey(i,a,I,l,z,U,_))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=U),d.props=l,d.state=U,d.context=_,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Cf(e,i),_=i.memoizedProps,G=js(a,_),d.props=G,Q=i.pendingProps,z=d.context,U=a.contextType,I=wa,typeof U=="object"&&U!==null&&(I=He(U)),T=a.getDerivedStateFromProps,(U=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||z!==I)&&Ty(i,d,l,I),Rr=!1,z=i.memoizedState,d.state=z,il(i,l,d,h),nl();var H=i.memoizedState;_!==Q||z!==H||Rr||e!==null&&e.dependencies!==null&&Fu(e.dependencies)?(typeof T=="function"&&(Zf(i,a,T,l),H=i.memoizedState),(G=Rr||Ey(i,a,G,l,z,H,I)||e!==null&&e.dependencies!==null&&Fu(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=I,l=G):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,uc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=zs(i,e.child,null,h),i.child=zs(i,null,a,h)):qe(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Qi(e,i,h),e}function Ly(e,i,a,l){return Vs(),i.flags|=256,qe(e,i,a,l),i.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(e){return{baseLanes:e,cachePool:wg()}}function rd(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Tn),e}function Py(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(de.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Vt){if(h?Dr(i):Nr(),(e=ee)?(e=G_(e,kn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ai,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=gg(e),a.return=i,i.child=a,je=i,ee=null)):e=null,e===null)throw br(i);return Bd(e)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,h?(Nr(),h=i.mode,T=cc({mode:"hidden",children:T},h),l=Ms(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=id(a),l.childLanes=rd(e,_,a),i.memoizedState=nd,ll(null,l)):(Dr(i),sd(i,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(d)i.flags&256?(Dr(i),i.flags&=-257,i=ad(e,i,a)):i.memoizedState!==null?(Nr(),i.child=e.child,i.flags|=128,i=null):(Nr(),T=l.fallback,h=i.mode,l=cc({mode:"visible",children:l.children},h),T=Ms(T,h,a,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,zs(i,e.child,null,a),l=i.child,l.memoizedState=id(a),l.childLanes=rd(e,_,a),i.memoizedState=nd,i=ll(null,l));else if(Dr(i),Bd(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var U=_.dgst;_=U,l=Error(s(419)),l.stack="",l.digest=_,Xo({value:l,source:null,stack:null}),i=ad(e,i,a)}else if(be||Da(e,i,a,!1),_=(a&e.childLanes)!==0,be||_){if(_=te,_!==null&&(l=Do(_,a),l!==0&&l!==I.retryLane))throw I.retryLane=l,Os(e,l),fn(_,e,l),td;zd(T)||vc(),i=ad(e,i,a)}else zd(T)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,ee=Pn(T.nextSibling),je=i,Vt=!0,Ar=null,kn=!1,e!==null&&vg(i,e),i=sd(i,l.children),i.flags|=4096);return i}return h?(Nr(),T=l.fallback,h=i.mode,I=e.child,U=I.sibling,l=qi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,U!==null?T=qi(U,T):(T=Ms(T,h,a,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,ll(null,l),l=i.child,T=e.child.memoizedState,T===null?T=id(a):(h=T.cachePool,h!==null?(I=Se._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=wg(),T={baseLanes:T.baseLanes|a,cachePool:h}),l.memoizedState=T,l.childLanes=rd(e,_,a),i.memoizedState=nd,ll(e.child,l)):(Dr(i),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=a,i.memoizedState=null,a)}function sd(e,i){return i=cc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function cc(e,i){return e=yn(22,e,null,i),e.lanes=0,e}function ad(e,i,a){return zs(i,e.child,null,a),e=sd(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Uy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Tf(e.return,i,a)}function od(e,i,a,l,h,d){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function zy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var _=de.current,T=(_&2)!==0;if(T?(_=_&1|2,i.flags|=128):_&=1,rt(de,_),qe(e,i,l,a),l=Vt?Qo:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uy(e,a,i);else if(e.tag===19)Uy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Ju(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),od(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ju(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}od(i,!0,a,null,d,l);break;case"together":od(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Qi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Da(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=qi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function ld(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Fu(e)))}function nb(e,i,a){switch(i.tag){case 3:De(i,i.stateNode.containerInfo),wr(i,Se,e.memoizedState.cache),Vs();break;case 27:case 5:ds(i);break;case 4:De(i,i.stateNode.containerInfo);break;case 10:wr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Vf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Py(e,i,a):(Dr(i),e=Qi(e,i,a),e!==null?e.sibling:null);Dr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Da(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return zy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(de,de.current),l)break;return null;case 22:return i.lanes=0,Oy(e,i,a,i.pendingProps);case 24:wr(i,Se,e.memoizedState.cache)}return Qi(e,i,a)}function By(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)be=!0;else{if(!ld(e,a)&&(i.flags&128)===0)return be=!1,nb(e,i,a);be=(e.flags&131072)!==0}else be=!1,Vt&&(i.flags&1048576)!==0&&_g(i,Qo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Ps(i.elementType),i.type=e,typeof e=="function")df(e)?(l=js(e,l),i.tag=1,i=ky(null,i,e,l,a)):(i.tag=0,i=ed(null,i,e,l,a));else{if(e!=null){var h=e.$$typeof;if(h===dt){i.tag=11,i=Cy(null,i,e,l,a);break t}else if(h===R){i.tag=14,i=Dy(null,i,e,l,a);break t}}throw i=Wt(e)||e,Error(s(306,i,""))}}return i;case 0:return ed(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=js(l,i.pendingProps),ky(e,i,l,h,a);case 3:t:{if(De(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Cf(e,i),il(i,l,null,a);var _=i.memoizedState;if(l=_.cache,wr(i,Se,l),l!==d.cache&&Sf(i,[Se],a,!0),nl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Ly(e,i,l,a);break t}else if(l!==h){h=Mn(Error(s(424)),i),Xo(h),i=Ly(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ee=Pn(e.firstChild),je=i,Vt=!0,Ar=null,kn=!0,a=Og(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),l===h){i=Qi(e,i,a);break t}qe(e,i,l,a)}i=i.child}return i;case 26:return uc(e,i),e===null?(a=Z_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Vt||(a=i.type,e=i.pendingProps,l=Rc(Rt.current).createElement(a),l[ve]=i,l[xe]=e,Fe(l,a,e),Ee(l),i.stateNode=l):i.memoizedState=Z_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ds(i),e===null&&Vt&&(l=i.stateNode=$_(i.type,i.pendingProps,Rt.current),je=i,kn=!0,h=ee,Ur(i.type)?(jd=h,ee=Pn(l.firstChild)):ee=h),qe(e,i,i.pendingProps.children,a),uc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Vt&&((h=l=ee)&&(l=Mb(l,i.type,i.pendingProps,kn),l!==null?(i.stateNode=l,je=i,ee=Pn(l.firstChild),kn=!1,h=!0):h=!1),h||br(i)),ds(i),h=i.type,d=i.pendingProps,_=e!==null?e.memoizedProps:null,l=d.children,Ld(h,d)?l=null:_!==null&&Ld(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=kf(e,i,YA,null,null,a),Al._currentValue=h),uc(e,i),qe(e,i,l,a),i.child;case 6:return e===null&&Vt&&((e=a=ee)&&(a=Vb(a,i.pendingProps,kn),a!==null?(i.stateNode=a,je=i,ee=null,e=!0):e=!1),e||br(i)),null;case 13:return Py(e,i,a);case 4:return De(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=zs(i,null,l,a):qe(e,i,l,a),i.child;case 11:return Cy(e,i,i.type,i.pendingProps,a);case 7:return qe(e,i,i.pendingProps,a),i.child;case 8:return qe(e,i,i.pendingProps.children,a),i.child;case 12:return qe(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,wr(i,i.type,l.value),qe(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ks(i),h=He(h),l=l(h),i.flags|=1,qe(e,i,l,a),i.child;case 14:return Dy(e,i,i.type,i.pendingProps,a);case 15:return Ny(e,i,i.type,i.pendingProps,a);case 19:return zy(e,i,a);case 31:return eb(e,i,a);case 22:return Oy(e,i,a,i.pendingProps);case 24:return ks(i),l=He(Se),e===null?(h=wf(),h===null&&(h=te,d=Af(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},If(i),wr(i,Se,h)):((e.lanes&a)!==0&&(Cf(e,i),il(i,null,null,a),nl()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),wr(i,Se,l)):(l=d.cache,wr(i,Se,l),l!==h.cache&&Sf(i,[Se],a,!0))),qe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Xi(e){e.flags|=4}function ud(e,i,a,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(d_())e.flags|=8192;else throw Us=$u,Rf}else e.flags&=-16777217}function jy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nv(i))if(d_())e.flags|=8192;else throw Us=$u,Rf}function hc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?yu():536870912,e.lanes|=i,ja|=i)}function ul(e,i){if(!Vt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function ib(e,i,a){var l=i.pendingProps;switch(yf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(i),null;case 1:return ne(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(Se),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ca(i)?Xi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vf())),ne(i),null;case 26:var h=i.type,d=i.memoizedState;return e===null?(Xi(i),d!==null?(ne(i),jy(i,d)):(ne(i),ud(i,h,null,l,a))):d?d!==e.memoizedState?(Xi(i),ne(i),jy(i,d)):(ne(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xi(i),ne(i),ud(i,h,e,l,a)),null;case 27:if(aa(i),a=Rt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}e=ot.current,Ca(i)?Eg(i):(e=$_(h,l,a),i.stateNode=e,Xi(i))}return ne(i),null;case 5:if(aa(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}if(d=ot.current,Ca(i))Eg(i);else{var _=Rc(Rt.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}d[ve]=i,d[xe]=l;t:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break t;for(;_.sibling===null;){if(_.return===null||_.return===i)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;t:switch(Fe(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Xi(i)}}return ne(i),ud(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Xi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Rt.current,Ca(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[ve]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||P_(e.nodeValue,a)),e||br(i,!0)}else e=Rc(e).createTextNode(l),e[ve]=i,i.stateNode=e}return ne(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(l=Ca(i),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ve]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),e=!1}else a=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(vn(i),i):(vn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return ne(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ca(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ve]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),h=!1}else h=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(vn(i),i):(vn(i),null)}return vn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),hc(i,i.updateQueue),ne(i),null);case 4:return re(),e===null&&Od(i.stateNode.containerInfo),ne(i),null;case 10:return Ki(i.type),ne(i),null;case 19:if(X(de),l=i.memoizedState,l===null)return ne(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)ul(l,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ju(e),d!==null){for(i.flags|=128,ul(l,!1),e=d.updateQueue,i.updateQueue=e,hc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)pg(a,e),a=a.sibling;return rt(de,de.current&1|2),Vt&&Fi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&tn()>gc&&(i.flags|=128,h=!0,ul(l,!1),i.lanes=4194304)}else{if(!h)if(e=Ju(d),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,hc(i,e),ul(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Vt)return ne(i),null}else 2*tn()-l.renderingStartTime>gc&&a!==536870912&&(i.flags|=128,h=!0,ul(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=tn(),e.sibling=null,a=de.current,rt(de,h?a&1|2:a&1),Vt&&Fi(i,l.treeForkCount),e):(ne(i),null);case 22:case 23:return vn(i),Mf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ne(i),i.subtreeFlags&6&&(i.flags|=8192)):ne(i),a=i.updateQueue,a!==null&&hc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&X(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(Se),ne(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function rb(e,i){switch(yf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ki(Se),re(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return aa(i),null;case 31:if(i.memoizedState!==null){if(vn(i),i.alternate===null)throw Error(s(340));Vs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(vn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return X(de),null;case 4:return re(),null;case 10:return Ki(i.type),null;case 22:case 23:return vn(i),Mf(),e!==null&&X(Ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ki(Se),null;case 25:return null;default:return null}}function Hy(e,i){switch(yf(i),i.tag){case 3:Ki(Se),re();break;case 26:case 27:case 5:aa(i);break;case 4:re();break;case 31:i.memoizedState!==null&&vn(i);break;case 13:vn(i);break;case 19:X(de);break;case 10:Ki(i.type);break;case 22:case 23:vn(i),Mf(),e!==null&&X(Ls);break;case 24:Ki(Se)}}function cl(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(T){Yt(i,i.return,T)}}function Or(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=i;var I=a,U=T;try{U()}catch(G){Yt(h,I,G)}}}l=l.next}while(l!==d)}}catch(G){Yt(i,i.return,G)}}function qy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Vg(i,a)}catch(l){Yt(e,e.return,l)}}}function Fy(e,i,a){a.props=js(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Yt(e,i,l)}}function hl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Yt(e,i,h)}}function wi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Yt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Yt(e,i,h)}else a.current=null}function Gy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Yt(e,e.return,h)}}function cd(e,i,a){try{var l=e.stateNode;Rb(l,e.type,a,i),l[xe]=i}catch(h){Yt(e,e.return,h)}}function Ky(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ur(e.type)||e.tag===4}function hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ky(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Kn));else if(l!==4&&(l===27&&Ur(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(fd(e,i,a),e=e.sibling;e!==null;)fd(e,i,a),e=e.sibling}function fc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ur(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fc(e,i,a),e=e.sibling;e!==null;)fc(e,i,a),e=e.sibling}function Yy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Fe(i,l,a),i[ve]=e,i[xe]=a}catch(d){Yt(e,e.return,d)}}var Zi=!1,we=!1,dd=!1,$y=typeof WeakSet=="function"?WeakSet:Set,Le=null;function sb(e,i){if(e=e.containerInfo,xd=Vc,e=ag(e),af(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,T=-1,I=-1,U=0,G=0,Q=e,z=null;e:for(;;){for(var H;Q!==a||h!==0&&Q.nodeType!==3||(T=_+h),Q!==d||l!==0&&Q.nodeType!==3||(I=_+l),Q.nodeType===3&&(_+=Q.nodeValue.length),(H=Q.firstChild)!==null;)z=Q,Q=H;for(;;){if(Q===e)break e;if(z===a&&++U===h&&(T=_),z===d&&++G===l&&(I=_),(H=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(kd={focusedElem:e,selectionRange:a},Vc=!1,Le=i;Le!==null;)if(i=Le,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Le=e;else for(;Le!==null;){switch(i=Le,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)h=e[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ut=js(a.type,h);e=l.getSnapshotBeforeUpdate(ut,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(yt){Yt(a,a.return,yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Ud(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Le=e;break}Le=i.return}}function Qy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),l&4&&cl(5,a);break;case 1:if(Wi(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(_){Yt(a,a.return,_)}else{var h=js(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Yt(a,a.return,_)}}l&64&&qy(a),l&512&&hl(a,a.return);break;case 3:if(Wi(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Vg(e,i)}catch(_){Yt(a,a.return,_)}}break;case 27:i===null&&l&4&&Yy(a);case 26:case 5:Wi(e,a),i===null&&l&4&&Gy(a),l&512&&hl(a,a.return);break;case 12:Wi(e,a);break;case 31:Wi(e,a),l&4&&Jy(e,a);break;case 13:Wi(e,a),l&4&&Wy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mb.bind(null,a),xb(e,a))));break;case 22:if(l=a.memoizedState!==null||Zi,!l){i=i!==null&&i.memoizedState!==null||we,h=Zi;var d=we;Zi=l,(we=i)&&!d?tr(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),Zi=h,we=d}break;case 30:break;default:Wi(e,a)}}function Xy(e){var i=e.alternate;i!==null&&(e.alternate=null,Xy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ha(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ae=null,ln=!1;function Ji(e,i,a){for(a=a.child;a!==null;)Zy(e,i,a),a=a.sibling}function Zy(e,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Hn,a)}catch{}switch(a.tag){case 26:we||wi(a,i),Ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:we||wi(a,i);var l=ae,h=ln;Ur(a.type)&&(ae=a.stateNode,ln=!1),Ji(e,i,a),El(a.stateNode),ae=l,ln=h;break;case 5:we||wi(a,i);case 6:if(l=ae,h=ln,ae=null,Ji(e,i,a),ae=l,ln=h,ae!==null)if(ln)try{(ae.nodeType===9?ae.body:ae.nodeName==="HTML"?ae.ownerDocument.body:ae).removeChild(a.stateNode)}catch(d){Yt(a,i,d)}else try{ae.removeChild(a.stateNode)}catch(d){Yt(a,i,d)}break;case 18:ae!==null&&(ln?(e=ae,q_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qa(e)):q_(ae,a.stateNode));break;case 4:l=ae,h=ln,ae=a.stateNode.containerInfo,ln=!0,Ji(e,i,a),ae=l,ln=h;break;case 0:case 11:case 14:case 15:Or(2,a,i),we||Or(4,a,i),Ji(e,i,a);break;case 1:we||(wi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Fy(a,i,l)),Ji(e,i,a);break;case 21:Ji(e,i,a);break;case 22:we=(l=we)||a.memoizedState!==null,Ji(e,i,a),we=l;break;default:Ji(e,i,a)}}function Jy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qa(e)}catch(a){Yt(i,i.return,a)}}}function Wy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qa(e)}catch(a){Yt(i,i.return,a)}}function ab(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new $y),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new $y),i;default:throw Error(s(435,e.tag))}}function dc(e,i){var a=ab(e);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=pb.bind(null,e,l);l.then(h,h)}})}function un(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,_=i,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Ur(T.type)){ae=T.stateNode,ln=!1;break t}break;case 5:ae=T.stateNode,ln=!1;break t;case 3:case 4:ae=T.stateNode.containerInfo,ln=!0;break t}T=T.return}if(ae===null)throw Error(s(160));Zy(d,_,h),ae=null,ln=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)t_(i,e),i=i.sibling}var Jn=null;function t_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:un(i,e),cn(e),l&4&&(Or(3,e,e.return),cl(3,e),Or(5,e,e.return));break;case 1:un(i,e),cn(e),l&512&&(we||a===null||wi(a,a.return)),l&64&&Zi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Jn;if(un(i,e),cn(e),l&512&&(we||a===null||wi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hi]||d[ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Fe(d,l,a),d[ve]=e,Ee(d),l=d;break t;case"link":var _=tv("link","href",h).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}d=h.createElement(l),Fe(d,l,a),h.head.appendChild(d);break;case"meta":if(_=tv("meta","content",h).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}d=h.createElement(l),Fe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[ve]=e,Ee(d),l=d}e.stateNode=l}else ev(h,e.type,e.stateNode);else e.stateNode=W_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?ev(h,e.type,e.stateNode):W_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&cd(e,e.memoizedProps,a.memoizedProps)}break;case 27:un(i,e),cn(e),l&512&&(we||a===null||wi(a,a.return)),a!==null&&l&4&&cd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(un(i,e),cn(e),l&512&&(we||a===null||wi(a,a.return)),e.flags&32){h=e.stateNode;try{on(h,"")}catch(ut){Yt(e,e.return,ut)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,cd(e,h,a!==null?a.memoizedProps:h)),l&1024&&(dd=!0);break;case 6:if(un(i,e),cn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ut){Yt(e,e.return,ut)}}break;case 3:if(Dc=null,h=Jn,Jn=Ic(i.containerInfo),un(i,e),Jn=h,cn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qa(i.containerInfo)}catch(ut){Yt(e,e.return,ut)}dd&&(dd=!1,e_(e));break;case 4:l=Jn,Jn=Ic(e.stateNode.containerInfo),un(i,e),cn(e),Jn=l;break;case 12:un(i,e),cn(e);break;case 31:un(i,e),cn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,dc(e,l)));break;case 13:un(i,e),cn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pc=tn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,dc(e,l)));break;case 22:h=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,U=Zi,G=we;if(Zi=U||h,we=G||I,un(i,e),we=G,Zi=U,cn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||Zi||we||Hs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var Q=I.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ut){Yt(I,I.return,ut)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(ut){Yt(I,I.return,ut)}}}else if(i.tag===18){if(a===null){I=i;try{var H=I.stateNode;h?F_(H,!0):F_(I.stateNode,!1)}catch(ut){Yt(I,I.return,ut)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,dc(e,a))));break;case 19:un(i,e),cn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,dc(e,l)));break;case 30:break;case 21:break;default:un(i,e),cn(e)}}function cn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Ky(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=hd(e);fc(e,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(on(_,""),a.flags&=-33);var T=hd(e);fc(e,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,U=hd(e);fd(e,U,I);break;default:throw Error(s(161))}}catch(G){Yt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function e_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;e_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Wi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Qy(e,i.alternate,i),i=i.sibling}function Hs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Or(4,i,i.return),Hs(i);break;case 1:wi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Fy(i,i.return,a),Hs(i);break;case 27:El(i.stateNode);case 26:case 5:wi(i,i.return),Hs(i);break;case 22:i.memoizedState===null&&Hs(i);break;case 30:Hs(i);break;default:Hs(i)}e=e.sibling}}function tr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:tr(h,d,a),cl(4,d);break;case 1:if(tr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Yt(l,l.return,U)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Mg(I[h],T)}catch(U){Yt(l,l.return,U)}}a&&_&64&&qy(d),hl(d,d.return);break;case 27:Yy(d);case 26:case 5:tr(h,d,a),a&&l===null&&_&4&&Gy(d),hl(d,d.return);break;case 12:tr(h,d,a);break;case 31:tr(h,d,a),a&&_&4&&Jy(h,d);break;case 13:tr(h,d,a),a&&_&4&&Wy(h,d);break;case 22:d.memoizedState===null&&tr(h,d,a),hl(d,d.return);break;case 30:break;default:tr(h,d,a)}i=i.sibling}}function md(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zo(a))}function pd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e))}function Wn(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)n_(e,i,a,l),i=i.sibling}function n_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Wn(e,i,a,l),h&2048&&cl(9,i);break;case 1:Wn(e,i,a,l);break;case 3:Wn(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e)));break;case 12:if(h&2048){Wn(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Yt(i,i.return,I)}}else Wn(e,i,a,l);break;case 31:Wn(e,i,a,l);break;case 13:Wn(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?Wn(e,i,a,l):fl(e,i):d._visibility&2?Wn(e,i,a,l):(d._visibility|=2,Ua(e,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&md(_,i);break;case 24:Wn(e,i,a,l),h&2048&&pd(i.alternate,i);break;default:Wn(e,i,a,l)}}function Ua(e,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,_=i,T=a,I=l,U=_.flags;switch(_.tag){case 0:case 11:case 15:Ua(d,_,T,I,h),cl(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?Ua(d,_,T,I,h):fl(d,_):(G._visibility|=2,Ua(d,_,T,I,h)),h&&U&2048&&md(_.alternate,_);break;case 24:Ua(d,_,T,I,h),h&&U&2048&&pd(_.alternate,_);break;default:Ua(d,_,T,I,h)}i=i.sibling}}function fl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:fl(a,l),h&2048&&md(l.alternate,l);break;case 24:fl(a,l),h&2048&&pd(l.alternate,l);break;default:fl(a,l)}i=i.sibling}}var dl=8192;function za(e,i,a){if(e.subtreeFlags&dl)for(e=e.child;e!==null;)i_(e,i,a),e=e.sibling}function i_(e,i,a){switch(e.tag){case 26:za(e,i,a),e.flags&dl&&e.memoizedState!==null&&Kb(a,Jn,e.memoizedState,e.memoizedProps);break;case 5:za(e,i,a);break;case 3:case 4:var l=Jn;Jn=Ic(e.stateNode.containerInfo),za(e,i,a),Jn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=dl,dl=16777216,za(e,i,a),dl=l):za(e,i,a));break;default:za(e,i,a)}}function r_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ml(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Le=l,a_(l,e)}r_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)s_(e),e=e.sibling}function s_(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&Or(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,mc(e)):ml(e);break;default:ml(e)}}function mc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Le=l,a_(l,e)}r_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Or(8,i,i.return),mc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,mc(i));break;default:mc(i)}e=e.sibling}}function a_(e,i){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:Or(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Le=l;else t:for(a=e;Le!==null;){l=Le;var h=l.sibling,d=l.return;if(Xy(l),l===a){Le=null;break t}if(h!==null){h.return=d,Le=h;break t}Le=d}}}var ob={getCacheForType:function(e){var i=He(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return He(Se).controller.signal}},lb=typeof WeakMap=="function"?WeakMap:Map,qt=0,te=null,Ct=null,Nt=0,Kt=0,En=null,Mr=!1,Ba=!1,gd=!1,er=0,ce=0,Vr=0,qs=0,yd=0,Tn=0,ja=0,pl=null,hn=null,_d=!1,pc=0,o_=0,gc=1/0,yc=null,xr=null,Oe=0,kr=null,Ha=null,nr=0,vd=0,Ed=null,l_=null,gl=0,Td=null;function Sn(){return(qt&2)!==0&&Nt!==0?Nt&-Nt:K.T!==null?Id():_u()}function u_(){if(Tn===0)if((Nt&536870912)===0||Vt){var e=gs;gs<<=1,(gs&3932160)===0&&(gs=262144),Tn=e}else Tn=536870912;return e=_n.current,e!==null&&(e.flags|=32),Tn}function fn(e,i,a){(e===te&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(qa(e,0),Lr(e,Nt,Tn,!1)),ys(e,a),((qt&2)===0||e!==te)&&(e===te&&((qt&2)===0&&(qs|=a),ce===4&&Lr(e,Nt,Tn,!1)),Ri(e))}function c_(e,i,a){if((qt&6)!==0)throw Error(s(327));var l=!a&&(i&127)===0&&(i&e.expiredLanes)===0||qn(e,i),h=l?hb(e,i):Ad(e,i,!0),d=l;do{if(h===0){Ba&&!l&&Lr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!ub(a)){h=Ad(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var T=e;h=pl;var I=T.current.memoizedState.isDehydrated;if(I&&(qa(T,_).flags|=256),_=Ad(T,_,!1),_!==2){if(gd&&!I){T.errorRecoveryDisabledLanes|=d,qs|=d,h=4;break t}d=hn,hn=h,d!==null&&(hn===null?hn=d:hn.push.apply(hn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){qa(e,0),Lr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Lr(l,i,Tn,!Mr);break t;case 2:hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=pc+300-tn(),10<h)){if(Lr(l,i,Tn,!Mr),li(l,0,!0)!==0)break t;nr=i,l.timeoutHandle=j_(h_.bind(null,l,a,hn,yc,_d,i,Tn,qs,ja,Mr,d,"Throttled",-0,0),h);break t}h_(l,a,hn,yc,_d,i,Tn,qs,ja,Mr,d,null,-0,0)}}break}while(!0);Ri(e)}function h_(e,i,a,l,h,d,_,T,I,U,G,Q,z,H){if(e.timeoutHandle=-1,Q=i.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},i_(i,d,Q);var ut=(d&62914560)===d?pc-tn():(d&4194048)===d?o_-tn():0;if(ut=Yb(Q,ut),ut!==null){nr=d,e.cancelPendingCommit=ut(v_.bind(null,e,i,d,a,l,h,_,T,I,G,Q,null,z,H)),Lr(e,d,_,!U);return}}v_(e,i,d,a,l,h,_,T,I)}function ub(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!gn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(e,i,a,l){i&=~yd,i&=~qs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-he(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&_s(e,a,i)}function _c(){return(qt&6)===0?(yl(0),!1):!0}function Sd(){if(Ct!==null){if(Kt===0)var e=Ct.return;else e=Ct,Gi=xs=null,Uf(e),Va=null,Wo=0,e=Ct;for(;e!==null;)Hy(e.alternate,e),e=e.return;Ct=null}}function qa(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Db(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nr=0,Sd(),te=e,Ct=a=qi(e.current,null),Nt=i,Kt=0,En=null,Mr=!1,Ba=qn(e,i),gd=!1,ja=Tn=yd=qs=Vr=ce=0,hn=pl=null,_d=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-he(l),d=1<<h;i|=e[h],l&=~d}return er=i,zu(),a}function f_(e,i){wt=null,K.H=ol,i===Ma||i===Yu?(i=Cg(),Kt=3):i===Rf?(i=Cg(),Kt=4):Kt=i===td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,En=i,Ct===null&&(ce=1,oc(e,Mn(i,e.current)))}function d_(){var e=_n.current;return e===null?!0:(Nt&4194048)===Nt?Ln===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?e===Ln:!1}function m_(){var e=K.H;return K.H=ol,e===null?ol:e}function p_(){var e=K.A;return K.A=ob,e}function vc(){ce=4,Mr||(Nt&4194048)!==Nt&&_n.current!==null||(Ba=!0),(Vr&134217727)===0&&(qs&134217727)===0||te===null||Lr(te,Nt,Tn,!1)}function Ad(e,i,a){var l=qt;qt|=2;var h=m_(),d=p_();(te!==e||Nt!==i)&&(yc=null,qa(e,i)),i=!1;var _=ce;t:do try{if(Kt!==0&&Ct!==null){var T=Ct,I=En;switch(Kt){case 8:Sd(),_=6;break t;case 3:case 2:case 9:case 6:_n.current===null&&(i=!0);var U=Kt;if(Kt=0,En=null,Fa(e,T,I,U),a&&Ba){_=0;break t}break;default:U=Kt,Kt=0,En=null,Fa(e,T,I,U)}}cb(),_=ce;break}catch(G){f_(e,G)}while(!0);return i&&e.shellSuspendCounter++,Gi=xs=null,qt=l,K.H=h,K.A=d,Ct===null&&(te=null,Nt=0,zu()),_}function cb(){for(;Ct!==null;)g_(Ct)}function hb(e,i){var a=qt;qt|=2;var l=m_(),h=p_();te!==e||Nt!==i?(yc=null,gc=tn()+500,qa(e,i)):Ba=qn(e,i);t:do try{if(Kt!==0&&Ct!==null){i=Ct;var d=En;e:switch(Kt){case 1:Kt=0,En=null,Fa(e,i,d,1);break;case 2:case 9:if(Rg(d)){Kt=0,En=null,y_(i);break}i=function(){Kt!==2&&Kt!==9||te!==e||(Kt=7),Ri(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:Rg(d)?(Kt=0,En=null,y_(i)):(Kt=0,En=null,Fa(e,i,d,7));break;case 5:var _=null;switch(Ct.tag){case 26:_=Ct.memoizedState;case 5:case 27:var T=Ct;if(_?nv(_):T.stateNode.complete){Kt=0,En=null;var I=T.sibling;if(I!==null)Ct=I;else{var U=T.return;U!==null?(Ct=U,Ec(U)):Ct=null}break e}}Kt=0,En=null,Fa(e,i,d,5);break;case 6:Kt=0,En=null,Fa(e,i,d,6);break;case 8:Sd(),ce=6;break t;default:throw Error(s(462))}}fb();break}catch(G){f_(e,G)}while(!0);return Gi=xs=null,K.H=l,K.A=h,qt=a,Ct!==null?0:(te=null,Nt=0,zu(),ce)}function fb(){for(;Ct!==null&&!Jh();)g_(Ct)}function g_(e){var i=By(e.alternate,e,er);e.memoizedProps=e.pendingProps,i===null?Ec(e):Ct=i}function y_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=xy(a,i,i.pendingProps,i.type,void 0,Nt);break;case 11:i=xy(a,i,i.pendingProps,i.type.render,i.ref,Nt);break;case 5:Uf(i);default:Hy(a,i),i=Ct=pg(i,er),i=By(a,i,er)}e.memoizedProps=e.pendingProps,i===null?Ec(e):Ct=i}function Fa(e,i,a,l){Gi=xs=null,Uf(i),Va=null,Wo=0;var h=i.return;try{if(tb(e,h,i,a,Nt)){ce=1,oc(e,Mn(a,e.current)),Ct=null;return}}catch(d){if(h!==null)throw Ct=h,d;ce=1,oc(e,Mn(a,e.current)),Ct=null;return}i.flags&32768?(Vt||l===1?e=!0:Ba||(Nt&536870912)!==0?e=!1:(Mr=e=!0,(l===2||l===9||l===3||l===6)&&(l=_n.current,l!==null&&l.tag===13&&(l.flags|=16384))),__(i,e)):Ec(i)}function Ec(e){var i=e;do{if((i.flags&32768)!==0){__(i,Mr);return}e=i.return;var a=ib(i.alternate,i,er);if(a!==null){Ct=a;return}if(i=i.sibling,i!==null){Ct=i;return}Ct=i=e}while(i!==null);ce===0&&(ce=5)}function __(e,i){do{var a=rb(e.alternate,e);if(a!==null){a.flags&=32767,Ct=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ct=e;return}Ct=e=a}while(e!==null);ce=6,Ct=null}function v_(e,i,a,l,h,d,_,T,I){e.cancelPendingCommit=null;do Tc();while(Oe!==0);if((qt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=hf,ef(e,a,d,_,T,I),e===te&&(Ct=te=null,Nt=0),Ha=i,kr=e,nr=a,vd=d,Ed=h,l_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gb(fr,function(){return b_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,h=it.p,it.p=2,_=qt,qt|=4;try{sb(e,i,a)}finally{qt=_,it.p=h,K.T=l}}Oe=1,E_(),T_(),S_()}}function E_(){if(Oe===1){Oe=0;var e=kr,i=Ha,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=it.p;it.p=2;var h=qt;qt|=4;try{t_(i,e);var d=kd,_=ag(e.containerInfo),T=d.focusedElem,I=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&sg(T.ownerDocument.documentElement,T)){if(I!==null&&af(T)){var U=I.start,G=I.end;if(G===void 0&&(G=U),"selectionStart"in T)T.selectionStart=U,T.selectionEnd=Math.min(G,T.value.length);else{var Q=T.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var H=z.getSelection(),ut=T.textContent.length,yt=Math.min(I.start,ut),Jt=I.end===void 0?yt:Math.min(I.end,ut);!H.extend&&yt>Jt&&(_=Jt,Jt=yt,yt=_);var x=rg(T,yt),N=rg(T,Jt);if(x&&N&&(H.rangeCount!==1||H.anchorNode!==x.node||H.anchorOffset!==x.offset||H.focusNode!==N.node||H.focusOffset!==N.offset)){var P=Q.createRange();P.setStart(x.node,x.offset),H.removeAllRanges(),yt>Jt?(H.addRange(P),H.extend(N.node,N.offset)):(P.setEnd(N.node,N.offset),H.addRange(P))}}}}for(Q=[],H=T;H=H.parentNode;)H.nodeType===1&&Q.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Q.length;T++){var Y=Q[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Vc=!!xd,kd=xd=null}finally{qt=h,it.p=l,K.T=a}}e.current=i,Oe=2}}function T_(){if(Oe===2){Oe=0;var e=kr,i=Ha,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=it.p;it.p=2;var h=qt;qt|=4;try{Qy(e,i.alternate,i)}finally{qt=h,it.p=l,K.T=a}}Oe=3}}function S_(){if(Oe===4||Oe===3){Oe=0,hu();var e=kr,i=Ha,a=nr,l=l_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Oe=5:(Oe=0,Ha=kr=null,A_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(xr=null),zi(a),i=i.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Hn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,h=it.p,it.p=2,K.T=null;try{for(var d=e.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{K.T=i,it.p=h}}(nr&3)!==0&&Tc(),Ri(e),h=e.pendingLanes,(a&261930)!==0&&(h&42)!==0?e===Td?gl++:(gl=0,Td=e):gl=0,yl(0)}}function A_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zo(i)))}function Tc(){return E_(),T_(),S_(),b_()}function b_(){if(Oe!==5)return!1;var e=kr,i=vd;vd=0;var a=zi(nr),l=K.T,h=it.p;try{it.p=32>a?32:a,K.T=null,a=Ed,Ed=null;var d=kr,_=nr;if(Oe=0,Ha=kr=null,nr=0,(qt&6)!==0)throw Error(s(331));var T=qt;if(qt|=4,s_(d.current),n_(d,d.current,_,a),qt=T,yl(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Hn,d)}catch{}return!0}finally{it.p=h,K.T=l,A_(e,i)}}function w_(e,i,a){i=Mn(a,i),i=Wf(e.stateNode,i,2),e=Cr(e,i,2),e!==null&&(ys(e,2),Ri(e))}function Yt(e,i,a){if(e.tag===3)w_(e,e,a);else for(;i!==null;){if(i.tag===3){w_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){e=Mn(a,e),a=Ry(2),l=Cr(i,a,2),l!==null&&(Iy(a,l,i,e),ys(l,2),Ri(l));break}}i=i.return}}function bd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new lb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(gd=!0,h.add(a),e=db.bind(null,e,i,a),i.then(e,e))}function db(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(Nt&a)===a&&(ce===4||ce===3&&(Nt&62914560)===Nt&&300>tn()-pc?(qt&2)===0&&qa(e,0):yd|=a,ja===Nt&&(ja=0)),Ri(e)}function R_(e,i){i===0&&(i=yu()),e=Os(e,i),e!==null&&(ys(e,i),Ri(e))}function mb(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),R_(e,a)}function pb(e,i){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),R_(e,a)}function gb(e,i){return Ne(e,i)}var Sc=null,Ga=null,wd=!1,Ac=!1,Rd=!1,Pr=0;function Ri(e){e!==Ga&&e.next===null&&(Ga===null?Sc=Ga=e:Ga=Ga.next=e),Ac=!0,wd||(wd=!0,_b())}function yl(e,i){if(!Rd&&Ac){Rd=!0;do for(var a=!1,l=Sc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-he(42|e)+1)-1,d&=h&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,N_(l,d))}else d=Nt,d=li(l,l===te?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||qn(l,d)||(a=!0,N_(l,d));l=l.next}while(a);Rd=!1}}function yb(){I_()}function I_(){Ac=wd=!1;var e=0;Pr!==0&&Cb()&&(e=Pr);for(var i=tn(),a=null,l=Sc;l!==null;){var h=l.next,d=C_(l,i);d===0?(l.next=null,a===null?Sc=h:a.next=h,h===null&&(Ga=a)):(a=l,(e!==0||(d&3)!==0)&&(Ac=!0)),l=h}Oe!==0&&Oe!==5||yl(e),Pr!==0&&(Pr=0)}function C_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-he(d),T=1<<_,I=h[_];I===-1?((T&a)===0||(T&l)!==0)&&(h[_]=tf(T,i)):I<=i&&(e.expiredLanes|=T),d&=~T}if(i=te,a=Nt,a=li(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qn(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&hr(l),zi(a)){case 2:case 8:a=Io;break;case 32:a=fr;break;case 268435456:a=fu;break;default:a=fr}return l=D_.bind(null,e),a=Ne(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&hr(l),e.callbackPriority=2,e.callbackNode=null,2}function D_(e,i){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Tc()&&e.callbackNode!==a)return null;var l=Nt;return l=li(e,e===te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(c_(e,l,i),C_(e,tn()),e.callbackNode!=null&&e.callbackNode===a?D_.bind(null,e):null)}function N_(e,i){if(Tc())return null;c_(e,i,!0)}function _b(){Nb(function(){(qt&6)!==0?Ne(Ro,yb):I_()})}function Id(){if(Pr===0){var e=Na;e===0&&(e=ai,ai<<=1,(ai&261888)===0&&(ai=256)),Pr=e}return Pr}function O_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pa(""+e)}function M_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function vb(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=O_((h[xe]||null).action),_=l.submitter;_&&(i=(i=_[xe]||null)?O_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new vi("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pr!==0){var I=_?M_(h,_):new FormData(h);Yf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=_?M_(h,_):new FormData(h),Yf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Cd=0;Cd<cf.length;Cd++){var Dd=cf[Cd],Eb=Dd.toLowerCase(),Tb=Dd[0].toUpperCase()+Dd.slice(1);Zn(Eb,"on"+Tb)}Zn(ug,"onAnimationEnd"),Zn(cg,"onAnimationIteration"),Zn(hg,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(PA,"onTransitionRun"),Zn(UA,"onTransitionStart"),Zn(zA,"onTransitionCancel"),Zn(fg,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function V_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],I=T.instance,U=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=U;try{d(h)}catch(G){Uu(G)}h.currentTarget=null,d=I}else for(_=0;_<l.length;_++){if(T=l[_],I=T.instance,U=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=U;try{d(h)}catch(G){Uu(G)}h.currentTarget=null,d=I}}}}function Dt(e,i){var a=i[ca];a===void 0&&(a=i[ca]=new Set);var l=e+"__bubble";a.has(l)||(x_(i,e,2,!1),a.add(l))}function Nd(e,i,a){var l=0;i&&(l|=4),x_(a,e,l,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Od(e){if(!e[bc]){e[bc]=!0,No.forEach(function(a){a!=="selectionchange"&&(Sb.has(a)||Nd(a,!1,e),Nd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[bc]||(i[bc]=!0,Nd("selectionchange",!1,i))}}function x_(e,i,a,l){switch(uv(i)){case 2:var h=Xb;break;case 8:h=Zb;break;default:h=Kd}a=h.bind(null,i,a,e),h=void 0,!As||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Md(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h)break;if(_===4)for(_=l.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;T!==null;){if(_=fi(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){l=d=_;continue t}T=T.parentNode}}l=l.return}_r(function(){var U=d,G=Cn(a),Q=[];t:{var z=dg.get(e);if(z!==void 0){var H=vi,ut=e;switch(e){case"keypress":if(ws(a)===0)break t;case"keydown":case"keyup":H=ku;break;case"focusin":ut="focus",H=Is;break;case"focusout":ut="blur",H=Is;break;case"beforeblur":case"afterblur":H=Is;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=g;break;case ug:case cg:case hg:H=Cu;break;case fg:H=A;break;case"scroll":case"scrollend":H=Ho;break;case"wheel":H=j;break;case"copy":case"cut":case"paste":H=Du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Hi;break;case"toggle":case"beforetoggle":H=bt}var yt=(i&4)!==0,Jt=!yt&&(e==="scroll"||e==="scrollend"),x=yt?z!==null?z+"Capture":null:z;yt=[];for(var N=U,P;N!==null;){var Y=N;if(P=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||P===null||x===null||(Y=Yn(N,x),Y!=null&&yt.push(vl(N,Y,P))),Jt)break;N=N.return}0<yt.length&&(z=new H(z,ut,null,a,G),Q.push({event:z,listeners:yt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",z&&a!==zo&&(ut=a.relatedTarget||a.fromElement)&&(fi(ut)||ut[ci]))break t;if((H||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,H?(ut=a.relatedTarget||a.toElement,H=U,ut=ut?fi(ut):null,ut!==null&&(Jt=u(ut),yt=ut.tag,ut!==Jt||yt!==5&&yt!==27&&yt!==6)&&(ut=null)):(H=null,ut=U),H!==ut)){if(yt=qo,Y="onMouseLeave",x="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(yt=Hi,Y="onPointerLeave",x="onPointerEnter",N="pointer"),Jt=H==null?z:mn(H),P=ut==null?z:mn(ut),z=new yt(Y,N+"leave",H,a,G),z.target=Jt,z.relatedTarget=P,Y=null,fi(G)===U&&(yt=new yt(x,N+"enter",ut,a,G),yt.target=P,yt.relatedTarget=Jt,Y=yt),Jt=Y,H&&ut)e:{for(yt=Ab,x=H,N=ut,P=0,Y=x;Y;Y=yt(Y))P++;Y=0;for(var ft=N;ft;ft=yt(ft))Y++;for(;0<P-Y;)x=yt(x),P--;for(;0<Y-P;)N=yt(N),Y--;for(;P--;){if(x===N||N!==null&&x===N.alternate){yt=x;break e}x=yt(x),N=yt(N)}yt=null}else yt=null;H!==null&&k_(Q,z,H,yt,!1),ut!==null&&Jt!==null&&k_(Q,Jt,ut,yt,!0)}}t:{if(z=U?mn(U):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var Bt=Jp;else if(Xp(z))if(Wp)Bt=xA;else{Bt=MA;var ct=OA}else H=z.nodeName,!H||H.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?U&&ma(U.elementType)&&(Bt=Jp):Bt=VA;if(Bt&&(Bt=Bt(e,U))){Zp(Q,Bt,a,G);break t}ct&&ct(e,z,U),e==="focusout"&&U&&z.type==="number"&&U.memoizedProps.value!=null&&Lo(z,"number",z.value)}switch(ct=U?mn(U):window,e){case"focusin":(Xp(ct)||ct.contentEditable==="true")&&(Sa=ct,of=U,$o=null);break;case"focusout":$o=of=Sa=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,og(Q,a,G);break;case"selectionchange":if(LA)break;case"keydown":case"keyup":og(Q,a,G)}var It;if(Ht)t:{switch(e){case"compositionstart":var Ot="onCompositionStart";break t;case"compositionend":Ot="onCompositionEnd";break t;case"compositionupdate":Ot="onCompositionUpdate";break t}Ot=void 0}else Ta?Cs(e,a)&&(Ot="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ot="onCompositionStart");Ot&&(Si&&a.locale!=="ko"&&(Ta||Ot!=="onCompositionStart"?Ot==="onCompositionEnd"&&Ta&&(It=jo()):(_i=G,Bo="value"in _i?_i.value:_i.textContent,Ta=!0)),ct=wc(U,Ot),0<ct.length&&(Ot=new Ti(Ot,e,null,a,G),Q.push({event:Ot,listeners:ct}),It?Ot.data=It:(It=Ea(a),It!==null&&(Ot.data=It)))),(It=Nn?IA(e,a):CA(e,a))&&(Ot=wc(U,"onBeforeInput"),0<Ot.length&&(ct=new Ti("onBeforeInput","beforeinput",null,a,G),Q.push({event:ct,listeners:Ot}),ct.data=It)),vb(Q,e,U,a,G)}V_(Q,i)})}function vl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function wc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Yn(e,a),h!=null&&l.unshift(vl(e,h,d)),h=Yn(e,i),h!=null&&l.push(vl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ab(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k_(e,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var T=a,I=T.alternate,U=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||U===null||(I=U,h?(U=Yn(a,d),U!=null&&_.unshift(vl(a,U,I))):h||(U=Yn(a,d),U!=null&&_.push(vl(a,U,I)))),a=a.return}_.length!==0&&e.push({event:i,listeners:_})}var bb=/\r\n?/g,wb=/\u0000|\uFFFD/g;function L_(e){return(typeof e=="string"?e:""+e).replace(bb,`
`).replace(wb,"")}function P_(e,i){return i=L_(i),L_(e)===i}function Zt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||on(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&on(e,""+l);break;case"className":pn(e,"class",l);break;case"tabIndex":pn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pn(e,a,l);break;case"style":Uo(e,l,d);break;case"data":if(i!=="object"){pn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=pa(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Zt(e,i,"name",h.name,h,null),Zt(e,i,"formEncType",h.formEncType,h,null),Zt(e,i,"formMethod",h.formMethod,h,null),Zt(e,i,"formTarget",h.formTarget,h,null)):(Zt(e,i,"encType",h.encType,h,null),Zt(e,i,"method",h.method,h,null),Zt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=pa(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Kn);break;case"onScroll":l!=null&&Dt("scroll",e);break;case"onScrollEnd":l!=null&&Dt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=pa(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Dt("beforetoggle",e),Dt("toggle",e),fa(e,"popover",l);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wu.get(a)||a,fa(e,a,l))}}function Vd(e,i,a,l,h,d){switch(a){case"style":Uo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?on(e,l):(typeof l=="number"||typeof l=="bigint")&&on(e,""+l);break;case"onScroll":l!=null&&Dt("scroll",e);break;case"onScrollEnd":l!=null&&Dt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[xe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):fa(e,a,l)}}}function Fe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",e),Dt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,d,_,a,null)}}h&&Zt(e,i,"srcSet",a.srcSet,a,null),l&&Zt(e,i,"src",a.src,a,null);return;case"input":Dt("invalid",e);var T=d=_=h=null,I=null,U=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":I=G;break;case"defaultChecked":U=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Zt(e,i,l,G,a,null)}}Su(e,d,T,I,U,_,h,!1);return;case"select":Dt("invalid",e),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Zt(e,i,h,T,a,null)}i=d,a=_,e.multiple=!!l,i!=null?mr(e,!!l,i,!1):a!=null&&mr(e,!!l,a,!0);return;case"textarea":Dt("invalid",e),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Zt(e,i,_,T,a,null)}pr(e,l,h,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(e,i,I,l,a,null)}return;case"dialog":Dt("beforetoggle",e),Dt("toggle",e),Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":Dt("load",e);break;case"video":case"audio":for(l=0;l<_l.length;l++)Dt(_l[l],e);break;case"image":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"embed":case"source":case"link":Dt("error",e),Dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(l=a[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,U,l,a,null)}return;default:if(ma(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Vd(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Zt(e,i,T,l,a,null))}function Rb(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,I=null,U=null,G=null;for(H in a){var Q=a[H];if(a.hasOwnProperty(H)&&Q!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=Q;default:l.hasOwnProperty(H)||Zt(e,i,H,null,l,Q)}}for(var z in l){var H=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(H!=null||Q!=null))switch(z){case"type":d=H;break;case"name":h=H;break;case"checked":U=H;break;case"defaultChecked":G=H;break;case"value":_=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==Q&&Zt(e,i,z,H,l,Q)}}da(e,_,T,I,U,G,d,h);return;case"select":H=_=T=z=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:l.hasOwnProperty(d)||Zt(e,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==I&&Zt(e,i,h,d,l,I)}i=T,a=_,l=H,z!=null?mr(e,!!a,z,!1):!!l!=!!a&&(i!=null?mr(e,!!a,i,!0):mr(e,!!a,a?[]:"",!1));return;case"textarea":H=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Zt(e,i,T,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":z=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Zt(e,i,_,h,l,d)}Au(e,z,H);return;case"option":for(var ut in a)if(z=a[ut],a.hasOwnProperty(ut)&&z!=null&&!l.hasOwnProperty(ut))switch(ut){case"selected":e.selected=!1;break;default:Zt(e,i,ut,null,l,z)}for(I in l)if(z=l[I],H=a[I],l.hasOwnProperty(I)&&z!==H&&(z!=null||H!=null))switch(I){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Zt(e,i,I,z,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in a)z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!l.hasOwnProperty(yt)&&Zt(e,i,yt,null,l,z);for(U in l)if(z=l[U],H=a[U],l.hasOwnProperty(U)&&z!==H&&(z!=null||H!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Zt(e,i,U,z,l,H)}return;default:if(ma(i)){for(var Jt in a)z=a[Jt],a.hasOwnProperty(Jt)&&z!==void 0&&!l.hasOwnProperty(Jt)&&Vd(e,i,Jt,void 0,l,z);for(G in l)z=l[G],H=a[G],!l.hasOwnProperty(G)||z===H||z===void 0&&H===void 0||Vd(e,i,G,z,l,H);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Zt(e,i,x,null,l,z);for(Q in l)z=l[Q],H=a[Q],!l.hasOwnProperty(Q)||z===H||z==null&&H==null||Zt(e,i,Q,z,l,H)}function U_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ib(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,_=h.initiatorType,T=h.duration;if(d&&T&&U_(_)){for(_=0,T=h.responseEnd,l+=1;l<a.length;l++){var I=a[l],U=I.startTime;if(U>T)break;var G=I.transferSize,Q=I.initiatorType;G&&U_(Q)&&(I=I.responseEnd,_+=G*(I<T?1:(T-U)/(I-U)))}if(--l,i+=8*(d+_)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xd=null,kd=null;function Rc(e){return e.nodeType===9?e:e.ownerDocument}function z_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ld(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pd=null;function Cb(){var e=window.event;return e&&e.type==="popstate"?e===Pd?!1:(Pd=e,!0):(Pd=null,!1)}var j_=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(e){return H_.resolve(null).then(e).catch(Ob)}:j_;function Ob(e){setTimeout(function(){throw e})}function Ur(e){return e==="head"}function q_(e,i){var a=i,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(h),Qa(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,El(a);for(var d=a.firstChild;d;){var _=d.nextSibling,T=d.nodeName;d[hi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&El(e.ownerDocument.body);a=h}while(a);Qa(i)}function F_(e,i){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ud(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ud(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mb(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[hi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Pn(e.nextSibling),e===null)break}return null}function Vb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pn(e.nextSibling),e===null))return null;return e}function G_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Pn(e.nextSibling),e===null))return null;return e}function zd(e){return e.data==="$?"||e.data==="$~"}function Bd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xb(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var jd=null;function K_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return Pn(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function Y_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function $_(e,i,a){switch(i=Rc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function El(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ha(e)}var Un=new Map,Q_=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ir=it.d;it.d={f:kb,r:Lb,D:Pb,C:Ub,L:zb,m:Bb,X:Hb,S:jb,M:qb};function kb(){var e=ir.f(),i=_c();return e||i}function Lb(e){var i=In(e);i!==null&&i.tag===5&&i.type==="form"?fy(i):ir.r(e)}var Ka=typeof document>"u"?null:document;function X_(e,i,a){var l=Ka;if(l&&typeof i=="string"&&i){var h=an(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Q_.has(h)||(Q_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Fe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function Pb(e){ir.D(e),X_("dns-prefetch",e,null)}function Ub(e,i){ir.C(e,i),X_("preconnect",e,i)}function zb(e,i,a){ir.L(e,i,a);var l=Ka;if(l&&e&&i){var h='link[rel="preload"][as="'+an(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+an(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+an(a.imageSizes)+'"]')):h+='[href="'+an(e)+'"]';var d=h;switch(i){case"style":d=Ya(e);break;case"script":d=$a(e)}Un.has(d)||(e=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Un.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Tl(d))||i==="script"&&l.querySelector(Sl(d))||(i=l.createElement("link"),Fe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function Bb(e,i){ir.m(e,i);var a=Ka;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+an(l)+'"][href="'+an(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$a(e)}if(!Un.has(d)&&(e=S({rel:"modulepreload",href:e},i),Un.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(d)))return}l=a.createElement("link"),Fe(l,"link",e),Ee(l),a.head.appendChild(l)}}}function jb(e,i,a){ir.S(e,i,a);var l=Ka;if(l&&e){var h=di(l).hoistableStyles,d=Ya(e);i=i||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(Tl(d)))T.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Un.get(d))&&Hd(e,a);var I=_=l.createElement("link");Ee(I),Fe(I,"link",e),I._p=new Promise(function(U,G){I.onload=U,I.onerror=G}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Cc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function Hb(e,i){ir.X(e,i);var a=Ka;if(a&&e){var l=di(a).hoistableScripts,h=$a(e),d=l.get(h);d||(d=a.querySelector(Sl(h)),d||(e=S({src:e,async:!0},i),(i=Un.get(h))&&qd(e,i),d=a.createElement("script"),Ee(d),Fe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function qb(e,i){ir.M(e,i);var a=Ka;if(a&&e){var l=di(a).hoistableScripts,h=$a(e),d=l.get(h);d||(d=a.querySelector(Sl(h)),d||(e=S({src:e,async:!0,type:"module"},i),(i=Un.get(h))&&qd(e,i),d=a.createElement("script"),Ee(d),Fe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Z_(e,i,a,l){var h=(h=Rt.current)?Ic(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ya(a.href),a=di(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ya(a.href);var d=di(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(Tl(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Un.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(e,a),d||Fb(h,e,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$a(a),a=di(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ya(e){return'href="'+an(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function J_(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Fb(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Fe(i,"link",a),Ee(i),e.head.appendChild(i))}function $a(e){return'[src="'+an(e)+'"]'}function Sl(e){return"script[async]"+e}function W_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+an(a.href)+'"]');if(l)return i.instance=l,Ee(l),l;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Fe(l,"style",h),Cc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ya(a.href);var d=e.querySelector(Tl(h));if(d)return i.state.loading|=4,i.instance=d,Ee(d),d;l=J_(a),(h=Un.get(h))&&Hd(l,h),d=(e.ownerDocument||e).createElement("link"),Ee(d);var _=d;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Fe(d,"link",l),i.state.loading|=4,Cc(d,a.precedence,e),i.instance=d;case"script":return d=$a(a.src),(h=e.querySelector(Sl(d)))?(i.instance=h,Ee(h),h):(l=a,(h=Un.get(d))&&(l=S({},a),qd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Fe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Cc(l,a.precedence,e));return i.instance}function Cc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function qd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Dc=null;function tv(e,i,a){if(Dc===null){var l=new Map,h=Dc=new Map;h.set(a,l)}else h=Dc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[hi]||d[ve]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=e+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function ev(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Gb(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function nv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kb(e,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ya(l.href),d=i.querySelector(Tl(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Nc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,Ee(d);return}d=i.ownerDocument||i,l=J_(l),(h=Un.get(h))&&Hd(l,h),d=d.createElement("link"),Ee(d);var _=d;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Fe(d,"link",l),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Nc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var Fd=0;function Yb(e,i){return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Fd===0&&(Fd=62500*Ib());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Fd?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oc=null;function Mc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oc=new Map,i.forEach($b,e),Oc=null,Nc.call(e))}function $b(e,i){if(!(i.state.loading&4)){var a=Oc.get(e);if(a)var l=a.get(null);else{a=new Map,Oc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Nc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Al={$$typeof:st,Provider:null,Consumer:null,_currentValue:mt,_currentValue2:mt,_threadCount:0};function Qb(e,i,a,l,h,d,_,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.hiddenUpdates=ui(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function iv(e,i,a,l,h,d,_,T,I,U,G,Q){return e=new Qb(e,i,a,_,I,U,G,Q,T),i=1,d===!0&&(i|=24),d=yn(3,null,null,i),e.current=d,d.stateNode=e,i=Af(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},If(d),e}function rv(e){return e?(e=wa,e):wa}function sv(e,i,a,l,h,d){h=rv(h),l.context===null?l.context=h:l.pendingContext=h,l=Ir(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Cr(e,l,i),a!==null&&(fn(a,e,i),el(a,e,i))}function av(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Gd(e,i){av(e,i),(e=e.alternate)&&av(e,i)}function ov(e){if(e.tag===13||e.tag===31){var i=Os(e,67108864);i!==null&&fn(i,e,67108864),Gd(e,67108864)}}function lv(e){if(e.tag===13||e.tag===31){var i=Sn();i=vs(i);var a=Os(e,i);a!==null&&fn(a,e,i),Gd(e,i)}}var Vc=!0;function Xb(e,i,a,l){var h=K.T;K.T=null;var d=it.p;try{it.p=2,Kd(e,i,a,l)}finally{it.p=d,K.T=h}}function Zb(e,i,a,l){var h=K.T;K.T=null;var d=it.p;try{it.p=8,Kd(e,i,a,l)}finally{it.p=d,K.T=h}}function Kd(e,i,a,l){if(Vc){var h=Yd(l);if(h===null)Md(e,i,l,xc,a),cv(e,l);else if(Wb(h,e,i,a,l))l.stopPropagation();else if(cv(e,l),i&4&&-1<Jb.indexOf(e)){for(;h!==null;){var d=In(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=oi(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-he(_);T.entanglements[1]|=I,_&=~I}Ri(d),(qt&6)===0&&(gc=tn()+500,yl(0))}}break;case 31:case 13:T=Os(d,2),T!==null&&fn(T,d,2),_c(),Gd(d,2)}if(d=Yd(l),d===null&&Md(e,i,l,xc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Md(e,i,l,null,a)}}function Yd(e){return e=Cn(e),$d(e)}var xc=null;function $d(e){if(xc=null,e=fi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=m(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return xc=e,null}function uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ps()){case Ro:return 2;case Io:return 8;case fr:case Wh:return 32;case fu:return 268435456;default:return 32}default:return 32}}var Qd=!1,zr=null,Br=null,jr=null,bl=new Map,wl=new Map,Hr=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(e,i){switch(e){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(i.pointerId)}}function Rl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=In(i),i!==null&&ov(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Wb(e,i,a,l,h){switch(i){case"focusin":return zr=Rl(zr,e,i,a,l,h),!0;case"dragenter":return Br=Rl(Br,e,i,a,l,h),!0;case"mouseover":return jr=Rl(jr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return bl.set(d,Rl(bl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,wl.set(d,Rl(wl.get(d)||null,e,i,a,l,h)),!0}return!1}function hv(e){var i=fi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Fn(e.priority,function(){lv(a)});return}}else if(i===31){if(i=m(a),i!==null){e.blockedOn=i,Fn(e.priority,function(){lv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Yd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);zo=l,a.target.dispatchEvent(l),zo=null}else return i=In(a),i!==null&&ov(i),e.blockedOn=a,!1;i.shift()}return!0}function fv(e,i,a){kc(e)&&a.delete(i)}function tw(){Qd=!1,zr!==null&&kc(zr)&&(zr=null),Br!==null&&kc(Br)&&(Br=null),jr!==null&&kc(jr)&&(jr=null),bl.forEach(fv),wl.forEach(fv)}function Lc(e,i){e.blockedOn===i&&(e.blockedOn=null,Qd||(Qd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tw)))}var Pc=null;function dv(e){Pc!==e&&(Pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pc===e&&(Pc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if($d(l||a)===null)continue;break}var d=In(a);d!==null&&(e.splice(i,3),i-=3,Yf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Qa(e){function i(I){return Lc(I,e)}zr!==null&&Lc(zr,e),Br!==null&&Lc(Br,e),jr!==null&&Lc(jr,e),bl.forEach(i),wl.forEach(i);for(var a=0;a<Hr.length;a++){var l=Hr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Hr.length&&(a=Hr[0],a.blockedOn===null);)hv(a),a.blockedOn===null&&Hr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[xe]||null;if(typeof d=="function")_||dv(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[xe]||null)T=_.formAction;else if($d(h)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),dv(a)}}}function mv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Xd(e){this._internalRoot=e}Uc.prototype.render=Xd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Sn();sv(a,l,e,i,null,null)},Uc.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;sv(e.current,2,null,e,null,null),_c(),i[ci]=null}};function Uc(e){this._internalRoot=e}Uc.prototype.unstable_scheduleHydration=function(e){if(e){var i=_u();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Hr.length&&i!==0&&i<Hr[a].priority;a++);Hr.splice(a,0,e),a===0&&hv(e)}};var pv=t.version;if(pv!=="19.2.5")throw Error(s(527,pv,"19.2.5"));it.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var ew={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{Hn=zc.inject(ew),ze=zc}catch{}}return Cl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Sy,d=Ay,_=by;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=iv(e,1,!1,null,null,a,l,null,h,d,_,mv),e[ci]=i.current,Od(e),new Xd(i)},Cl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Sy,_=Ay,T=by,I=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=iv(e,1,!0,i,a??null,l,h,I,d,_,T,mv),i.context=rv(null),a=i.current,l=Sn(),l=vs(l),h=Ir(l),h.callback=null,Cr(a,h,l),a=l,i.current.lanes=a,ys(i,a),Ri(i),e[ci]=i.current,Od(e),new Uc(i)},Cl.version="19.2.5",Cl}var wv;function hw(){if(wv)return Wd.exports;wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wd.exports=cw(),Wd.exports}var fw=hw();/**
 * react-router v7.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Rv="popstate";function Iv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function dw(r={}){function t(o,u){let{pathname:f="/",search:m="",hash:p=""}=ta(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),bm("",{pathname:f,search:m,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(o,u){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");m=y===-1?p:p.slice(0,y)}return m+"#"+(typeof u=="string"?u:Hl(u))}function s(o,u){ii(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return pw(t,n,s,r)}function oe(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function ii(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mw(){return Math.random().toString(36).substring(2,10)}function Cv(r,t){return{usr:r.state,key:r.key,idx:t,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function bm(r,t,n=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?ta(t):t,state:n,key:t&&t.key||s||mw(),mask:o}}function Hl({pathname:r="/",search:t="",hash:n=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function ta(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function pw(r,t,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function S(){m="POP";let F=E(),W=F==null?null:F-y;y=F,p&&p({action:m,location:Z.location,delta:W})}function D(F,W){m="PUSH";let at=Iv(F)?F:bm(Z.location,F,W);n&&n(at,F),y=E()+1;let st=Cv(at,y),dt=Z.createHref(at.mask||at);try{f.pushState(st,"",dt)}catch(gt){if(gt instanceof DOMException&&gt.name==="DataCloneError")throw gt;o.location.assign(dt)}u&&p&&p({action:m,location:Z.location,delta:1})}function B(F,W){m="REPLACE";let at=Iv(F)?F:bm(Z.location,F,W);n&&n(at,F),y=E();let st=Cv(at,y),dt=Z.createHref(at.mask||at);f.replaceState(st,"",dt),u&&p&&p({action:m,location:Z.location,delta:0})}function $(F){return gw(F)}let Z={get action(){return m},get location(){return r(o,f)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Rv,S),p=F,()=>{o.removeEventListener(Rv,S),p=null}},createHref(F){return t(o,F)},createURL:$,encodeLocation(F){let W=$(F);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:D,replace:B,go(F){return f.go(F)}};return Z}function gw(r,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),oe(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Hl(r);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function SE(r,t,n="/"){return yw(r,t,n,!1)}function yw(r,t,n,s,o){let u=typeof t=="string"?ta(t):t,f=ar(u.pathname||"/",n);if(f==null)return null;let m=_w(r),p=null,y=Nw(f);for(let E=0;p==null&&E<m.length;++E)p=Cw(m[E],y,s);return p}function _w(r){let t=AE(r);return vw(t),t}function AE(r,t=[],n=[],s="",o=!1){let u=(f,m,p=o,y)=>{let E={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(s)&&p)return;oe(E.relativePath.startsWith(s),`Absolute route path "${E.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(s.length)}let S=ni([s,E.relativePath]),D=n.concat(E);f.children&&f.children.length>0&&(oe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),AE(f.children,t,D,S,p)),!(f.path==null&&!f.index)&&t.push({path:S,score:Rw(S,f.index),routesMeta:D})};return r.forEach((f,m)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,m);else for(let y of bE(f.path))u(f,m,!0,y)}),t}function bE(r){let t=r.split("/");if(t.length===0)return[];let[n,...s]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=bE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function vw(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:Iw(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Ew=/^:[\w-]+$/,Tw=3,Sw=2,Aw=1,bw=10,ww=-2,Dv=r=>r==="*";function Rw(r,t){let n=r.split("/"),s=n.length;return n.some(Dv)&&(s+=ww),t&&(s+=Sw),n.filter(o=>!Dv(o)).reduce((o,u)=>o+(Ew.test(u)?Tw:u===""?Aw:bw),s)}function Iw(r,t){return r.length===t.length&&r.slice(0,-1).every((s,o)=>s===t[o])?r[r.length-1]-t[t.length-1]:0}function Cw(r,t,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?t:t.slice(u.length)||"/",S=sh({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),D=p.route;if(!S&&y&&n&&!s[s.length-1].route.index&&(S=sh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:ni([u,S.pathname]),pathnameBase:xw(ni([u,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(u=ni([u,S.pathnameBase]))}return f}function sh(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Dw(r.path,r.caseSensitive,r.end),o=t.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:S},D)=>{if(E==="*"){let $=m[D]||"";f=u.slice(0,u.length-$.length).replace(/(.)\/+$/,"$1")}const B=m[D];return S&&!B?y[E]=void 0:y[E]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function Dw(r,t=!1,n=!0){ii(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p,y,E)=>{if(s.push({paramName:m,isOptional:p!=null}),p){let S=E.charAt(y+f.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),s]}function Nw(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function ar(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}var Ow=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Mw(r,t="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?ta(r):r,u;return n?(n=RE(n),n.startsWith("/")?u=Nv(n.substring(1),"/"):u=Nv(n,t)):u=t,{pathname:u,search:kw(s),hash:Lw(o)}}function Nv(r,t){let n=ah(t).split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function im(r,t,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vw(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wE(r){let t=Vw(r);return t.map((n,s)=>s===t.length-1?n.pathname:n.pathnameBase)}function ip(r,t,n,s=!1){let o;typeof r=="string"?o=ta(r):(o={...r},oe(!o.pathname||!o.pathname.includes("?"),im("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),im("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),im("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let S=t.length-1;if(!s&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),S-=1;o.pathname=D.join("/")}m=S>=0?t[S]:"/"}let p=Mw(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var RE=r=>r.replace(/\/\/+/g,"/"),ni=r=>RE(r.join("/")),ah=r=>r.replace(/\/+$/,""),xw=r=>ah(r).replace(/^\/*/,"/"),kw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Lw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Pw=class{constructor(r,t,n,s=!1){this.status=r,this.statusText=t||"",this.internal=s,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Uw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function zw(r){let t=r.map(n=>n.route.path).filter(Boolean);return ni(t)||"/"}var IE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function CE(r,t){let n=r;if(typeof n!="string"||!Ow.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let s=n,o=!1;if(IE)try{let u=new URL(window.location.href),f=n.startsWith("//")?new URL(u.protocol+n):new URL(n),m=ar(f.pathname,t);f.origin===u.origin&&m!=null?n=m+f.search+f.hash:o=!0}catch{ii(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var DE=["POST","PUT","PATCH","DELETE"];new Set(DE);var Bw=["GET",...DE];new Set(Bw);var yo=q.createContext(null);yo.displayName="DataRouter";var Rh=q.createContext(null);Rh.displayName="DataRouterState";var NE=q.createContext(!1);function jw(){return q.useContext(NE)}var OE=q.createContext({isTransitioning:!1});OE.displayName="ViewTransition";var Hw=q.createContext(new Map);Hw.displayName="Fetchers";var qw=q.createContext(null);qw.displayName="Await";var Bn=q.createContext(null);Bn.displayName="Navigation";var Zl=q.createContext(null);Zl.displayName="Location";var Li=q.createContext({outlet:null,matches:[],isDataRoute:!1});Li.displayName="Route";var rp=q.createContext(null);rp.displayName="RouteError";var ME="REACT_ROUTER_ERROR",Fw="REDIRECT",Gw="ROUTE_ERROR_RESPONSE";function Kw(r){if(r.startsWith(`${ME}:${Fw}:{`))try{let t=JSON.parse(r.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Yw(r){if(r.startsWith(`${ME}:${Gw}:{`))try{let t=JSON.parse(r.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Pw(t.status,t.statusText,t.data)}catch{}}function $w(r,{relative:t}={}){oe(Jl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=q.useContext(Bn),{hash:o,pathname:u,search:f}=Wl(r,{relative:t}),m=u;return n!=="/"&&(m=u==="/"?n:ni([n,u])),s.createHref({pathname:m,search:f,hash:o})}function Jl(){return q.useContext(Zl)!=null}function Pi(){return oe(Jl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Zl).location}var VE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xE(r){q.useContext(Bn).static||q.useLayoutEffect(r)}function Ih(){let{isDataRoute:r}=q.useContext(Li);return r?lR():Qw()}function Qw(){oe(Jl(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(yo),{basename:t,navigator:n}=q.useContext(Bn),{matches:s}=q.useContext(Li),{pathname:o}=Pi(),u=JSON.stringify(wE(s)),f=q.useRef(!1);return xE(()=>{f.current=!0}),q.useCallback((p,y={})=>{if(ii(f.current,VE),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=ip(p,JSON.parse(u),o,y.relative==="path");r==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:ni([t,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[t,n,u,o,r])}q.createContext(null);function Xw(){let{matches:r}=q.useContext(Li),t=r[r.length-1];return(t==null?void 0:t.params)??{}}function Wl(r,{relative:t}={}){let{matches:n}=q.useContext(Li),{pathname:s}=Pi(),o=JSON.stringify(wE(n));return q.useMemo(()=>ip(r,JSON.parse(o),s,t==="path"),[r,o,s,t])}function Zw(r,t){return kE(r,t)}function kE(r,t,n){var F;oe(Jl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=q.useContext(Bn),{matches:o}=q.useContext(Li),u=o[o.length-1],f=u?u.params:{},m=u?u.pathname:"/",p=u?u.pathnameBase:"/",y=u&&u.route;{let W=y&&y.path||"";PE(m,!y||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let E=Pi(),S;if(t){let W=typeof t=="string"?ta(t):t;oe(p==="/"||((F=W.pathname)==null?void 0:F.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=E;let D=S.pathname||"/",B=D;if(p!=="/"){let W=p.replace(/^\//,"").split("/");B="/"+D.replace(/^\//,"").split("/").slice(W.length).join("/")}let $=n&&n.state.matches.length?n.state.matches.map(W=>Object.assign(W,{route:n.manifest[W.route.id]||W.route})):SE(r,{pathname:B});ii(y||$!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ii($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=nR($&&$.map(W=>Object.assign({},W,{params:Object.assign({},f,W.params),pathname:ni([p,s.encodeLocation?s.encodeLocation(W.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?p:ni([p,s.encodeLocation?s.encodeLocation(W.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathnameBase])})),o,n);return t&&Z?q.createElement(Zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...S},navigationType:"POP"}},Z):Z}function Jw(){let r=oR(),t=Uw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:u},"ErrorBoundary")," or"," ",q.createElement("code",{style:u},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),n?q.createElement("pre",{style:o},n):null,f)}var Ww=q.createElement(Jw,null),LE=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=Yw(r.digest);n&&(r=n)}let t=r!==void 0?q.createElement(Li.Provider,{value:this.props.routeContext},q.createElement(rp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?q.createElement(tR,{error:r},t):t}};LE.contextType=NE;var rm=new WeakMap;function tR({children:r,error:t}){let{basename:n}=q.useContext(Bn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let s=Kw(t.digest);if(s){let o=rm.get(t);if(o)throw o;let u=CE(s.location,n);if(IE&&!rm.get(t))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw rm.set(t,f),f}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return r}function eR({routeContext:r,match:t,children:n}){let s=q.useContext(yo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(Li.Provider,{value:r},n)}function nR(r,t=[],n){let s=n==null?void 0:n.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(t.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,u=s==null?void 0:s.errors;if(u!=null){let E=o.findIndex(S=>S.route.id&&(u==null?void 0:u[S.route.id])!==void 0);oe(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,E+1))}let f=!1,m=-1;if(n&&s){f=s.renderFallback;for(let E=0;E<o.length;E++){let S=o[E];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(m=E),S.route.id){let{loaderData:D,errors:B}=s,$=S.route.loader&&!D.hasOwnProperty(S.route.id)&&(!B||B[S.route.id]===void 0);if(S.route.lazy||$){n.isStatic&&(f=!0),m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}}let p=n==null?void 0:n.onError,y=s&&p?(E,S)=>{var D,B;p(E,{location:s.location,params:((B=(D=s.matches)==null?void 0:D[0])==null?void 0:B.params)??{},pattern:zw(s.matches),errorInfo:S})}:void 0;return o.reduceRight((E,S,D)=>{let B,$=!1,Z=null,F=null;s&&(B=u&&S.route.id?u[S.route.id]:void 0,Z=S.route.errorElement||Ww,f&&(m<0&&D===0?(PE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),$=!0,F=null):m===D&&($=!0,F=S.route.hydrateFallbackElement||null)));let W=t.concat(o.slice(0,D+1)),at=()=>{let st;return B?st=Z:$?st=F:S.route.Component?st=q.createElement(S.route.Component,null):S.route.element?st=S.route.element:st=E,q.createElement(eR,{match:S,routeContext:{outlet:E,matches:W,isDataRoute:s!=null},children:st})};return s&&(S.route.ErrorBoundary||S.route.errorElement||D===0)?q.createElement(LE,{location:s.location,revalidation:s.revalidation,component:Z,error:B,children:at(),routeContext:{outlet:null,matches:W,isDataRoute:!0},onError:y}):at()},null)}function sp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iR(r){let t=q.useContext(yo);return oe(t,sp(r)),t}function rR(r){let t=q.useContext(Rh);return oe(t,sp(r)),t}function sR(r){let t=q.useContext(Li);return oe(t,sp(r)),t}function ap(r){let t=sR(r),n=t.matches[t.matches.length-1];return oe(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function aR(){return ap("useRouteId")}function oR(){var s;let r=q.useContext(rp),t=rR("useRouteError"),n=ap("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[n]}function lR(){let{router:r}=iR("useNavigate"),t=ap("useNavigate"),n=q.useRef(!1);return xE(()=>{n.current=!0}),q.useCallback(async(o,u={})=>{ii(n.current,VE),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:t,...u}))},[r,t])}var Ov={};function PE(r,t,n){!t&&!Ov[r]&&(Ov[r]=!0,ii(!1,n))}q.memo(uR);function uR({routes:r,manifest:t,future:n,state:s,isStatic:o,onError:u}){return kE(r,void 0,{manifest:t,state:s,isStatic:o,onError:u})}function wm(r){oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cR({basename:r="/",children:t=null,location:n,navigationType:s="POP",navigator:o,static:u=!1,useTransitions:f}){oe(!Jl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),p=q.useMemo(()=>({basename:m,navigator:o,static:u,useTransitions:f,future:{}}),[m,o,u,f]);typeof n=="string"&&(n=ta(n));let{pathname:y="/",search:E="",hash:S="",state:D=null,key:B="default",mask:$}=n,Z=q.useMemo(()=>{let F=ar(y,m);return F==null?null:{location:{pathname:F,search:E,hash:S,state:D,key:B,mask:$},navigationType:s}},[m,y,E,S,D,B,s,$]);return ii(Z!=null,`<Router basename="${m}"> is not able to match the URL "${y}${E}${S}" because it does not start with the basename, so the <Router> won't render anything.`),Z==null?null:q.createElement(Bn.Provider,{value:p},q.createElement(Zl.Provider,{children:t,value:Z}))}function hR({children:r,location:t}){return Zw(Rm(r),t)}function Rm(r,t=[]){let n=[];return q.Children.forEach(r,(s,o)=>{if(!q.isValidElement(s))return;let u=[...t,o];if(s.type===q.Fragment){n.push.apply(n,Rm(s.props.children,u));return}oe(s.type===wm,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),oe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Rm(s.props.children,u)),n.push(f)}),n}var $c="get",Qc="application/x-www-form-urlencoded";function Ch(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function fR(r){return Ch(r)&&r.tagName.toLowerCase()==="button"}function dR(r){return Ch(r)&&r.tagName.toLowerCase()==="form"}function mR(r){return Ch(r)&&r.tagName.toLowerCase()==="input"}function pR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function gR(r,t){return r.button===0&&(!t||t==="_self")&&!pR(r)}var Bc=null;function yR(){if(Bc===null)try{new FormData(document.createElement("form"),0),Bc=!1}catch{Bc=!0}return Bc}var _R=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sm(r){return r!=null&&!_R.has(r)?(ii(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):r}function vR(r,t){let n,s,o,u,f;if(dR(r)){let m=r.getAttribute("action");s=m?ar(m,t):null,n=r.getAttribute("method")||$c,o=sm(r.getAttribute("enctype"))||Qc,u=new FormData(r)}else if(fR(r)||mR(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?ar(p,t):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||$c,o=sm(r.getAttribute("formenctype"))||sm(m.getAttribute("enctype"))||Qc,u=new FormData(m,r),!yR()){let{name:y,type:E,value:S}=r;if(E==="image"){let D=y?`${y}.`:"";u.append(`${D}x`,"0"),u.append(`${D}y`,"0")}else y&&u.append(y,S)}}else{if(Ch(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$c,s=null,o=Qc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function UE(r,t,n,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:t&&ar(o.pathname,t)==="/"?o.pathname=`${ah(t)}/_root.${s}`:o.pathname=`${ah(o.pathname)}.${s}`,o}async function ER(r,t){if(r.id in t)return t[r.id];try{let n=await import(r.module);return t[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function TR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function SR(r,t,n){let s=await Promise.all(r.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await ER(u,n);return f.links?f.links():[]}return[]}));return RR(s.flat(1).filter(TR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Mv(r,t,n,s,o,u){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,y)=>f(p,y)||m(p,y)):u==="data"?t.filter((p,y)=>{var S;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let D=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=n[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function AR(r,t,{includeHydrateFallback:n}={}){return bR(r.map(s=>{let o=t.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function bR(r){return[...new Set(r)]}function wR(r){let t={},n=Object.keys(r).sort();for(let s of n)t[s]=r[s];return t}function RR(r,t){let n=new Set;return new Set(t),r.reduce((s,o)=>{let u=JSON.stringify(wR(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function lp(){let r=q.useContext(yo);return op(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function IR(){let r=q.useContext(Rh);return op(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var up=q.createContext(void 0);up.displayName="FrameworkContext";function cp(){let r=q.useContext(up);return op(r,"You must render this element inside a <HydratedRouter> element"),r}function CR(r,t){let n=q.useContext(up),[s,o]=q.useState(!1),[u,f]=q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:S}=t,D=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let Z=W=>{W.forEach(at=>{f(at.isIntersecting)})},F=new IntersectionObserver(Z,{threshold:.5});return D.current&&F.observe(D.current),()=>{F.disconnect()}}},[r]),q.useEffect(()=>{if(s){let Z=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(Z)}}},[s]);let B=()=>{o(!0)},$=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,D,{}]:[u,D,{onFocus:Dl(m,B),onBlur:Dl(p,$),onMouseEnter:Dl(y,B),onMouseLeave:Dl(E,$),onTouchStart:Dl(S,B)}]:[!1,D,{}]}function Dl(r,t){return n=>{r&&r(n),n.defaultPrevented||t(n)}}function DR({page:r,...t}){let n=jw(),{router:s}=lp(),o=q.useMemo(()=>SE(s.routes,r,s.basename),[s.routes,r,s.basename]);return o?n?q.createElement(OR,{page:r,matches:o,...t}):q.createElement(MR,{page:r,matches:o,...t}):null}function NR(r){let{manifest:t,routeModules:n}=cp(),[s,o]=q.useState([]);return q.useEffect(()=>{let u=!1;return SR(r,t,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,t,n]),s}function OR({page:r,matches:t,...n}){let s=Pi(),{future:o}=cp(),{basename:u}=lp(),f=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let m=UE(r,u,o.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,y=[];for(let E of t)typeof E.route.shouldRevalidate=="function"?p=!0:y.push(E.route.id);return p&&y.length>0&&m.searchParams.set("_routes",y.join(",")),[m.pathname+m.search]},[u,o.unstable_trailingSlashAwareDataRequests,r,s,t]);return q.createElement(q.Fragment,null,f.map(m=>q.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})))}function MR({page:r,matches:t,...n}){let s=Pi(),{future:o,manifest:u,routeModules:f}=cp(),{basename:m}=lp(),{loaderData:p,matches:y}=IR(),E=q.useMemo(()=>Mv(r,t,y,u,s,"data"),[r,t,y,u,s]),S=q.useMemo(()=>Mv(r,t,y,u,s,"assets"),[r,t,y,u,s]),D=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let Z=new Set,F=!1;if(t.forEach(at=>{var dt;let st=u.routes[at.route.id];!st||!st.hasLoader||(!E.some(gt=>gt.route.id===at.route.id)&&at.route.id in p&&((dt=f[at.route.id])!=null&&dt.shouldRevalidate)||st.hasClientLoader?F=!0:Z.add(at.route.id))}),Z.size===0)return[];let W=UE(r,m,o.unstable_trailingSlashAwareDataRequests,"data");return F&&Z.size>0&&W.searchParams.set("_routes",t.filter(at=>Z.has(at.route.id)).map(at=>at.route.id).join(",")),[W.pathname+W.search]},[m,o.unstable_trailingSlashAwareDataRequests,p,s,u,E,t,r,f]),B=q.useMemo(()=>AR(S,u),[S,u]),$=NR(S);return q.createElement(q.Fragment,null,D.map(Z=>q.createElement("link",{key:Z,rel:"prefetch",as:"fetch",href:Z,...n})),B.map(Z=>q.createElement("link",{key:Z,rel:"modulepreload",href:Z,...n})),$.map(({key:Z,link:F})=>q.createElement("link",{key:Z,nonce:n.nonce,...F,crossOrigin:F.crossOrigin??n.crossOrigin})))}function VR(...r){return t=>{r.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var xR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xR&&(window.__reactRouterVersion="7.15.0")}catch{}function kR({basename:r,children:t,useTransitions:n,window:s}){let o=q.useRef();o.current==null&&(o.current=dw({window:s,v5Compat:!0}));let u=o.current,[f,m]=q.useState({action:u.action,location:u.location}),p=q.useCallback(y=>{n===!1?m(y):q.startTransition(()=>m(y))},[n]);return q.useLayoutEffect(()=>u.listen(p),[u,p]),q.createElement(cR,{basename:r,children:t,location:f.location,navigationType:f.action,navigator:u,useTransitions:n})}var zE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BE=q.forwardRef(function({onClick:t,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,mask:m,state:p,target:y,to:E,preventScrollReset:S,viewTransition:D,defaultShouldRevalidate:B,...$},Z){let{basename:F,navigator:W,useTransitions:at}=q.useContext(Bn),st=typeof E=="string"&&zE.test(E),dt=CE(E,F);E=dt.to;let gt=$w(E,{relative:o}),vt=Pi(),R=null;if(m){let $t=ip(m,[],vt.mask?vt.mask.pathname:"/",!0);F!=="/"&&($t.pathname=$t.pathname==="/"?F:ni([F,$t.pathname])),R=W.createHref($t)}let[b,C,V]=CR(s,$),O=zR(E,{replace:f,mask:m,state:p,target:y,preventScrollReset:S,relative:o,viewTransition:D,defaultShouldRevalidate:B,useTransitions:at});function k($t){t&&t($t),$t.defaultPrevented||O($t)}let w=!(dt.isExternal||u),Wt=q.createElement("a",{...$,...V,href:(w?R:void 0)||dt.absoluteURL||gt,onClick:w?k:t,ref:VR(Z,C),target:y,"data-discover":!st&&n==="render"?"true":void 0});return b&&!st?q.createElement(q.Fragment,null,Wt,q.createElement(DR,{page:gt})):Wt});BE.displayName="Link";var LR=q.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...y},E){let S=Wl(f,{relative:y.relative}),D=Pi(),B=q.useContext(Rh),{navigator:$,basename:Z}=q.useContext(Bn),F=B!=null&&FR(S)&&m===!0,W=$.encodeLocation?$.encodeLocation(S).pathname:S.pathname,at=D.pathname,st=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;n||(at=at.toLowerCase(),st=st?st.toLowerCase():null,W=W.toLowerCase()),st&&Z&&(st=ar(st,Z)||st);const dt=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let gt=at===W||!o&&at.startsWith(W)&&at.charAt(dt)==="/",vt=st!=null&&(st===W||!o&&st.startsWith(W)&&st.charAt(W.length)==="/"),R={isActive:gt,isPending:vt,isTransitioning:F},b=gt?t:void 0,C;typeof s=="function"?C=s(R):C=[s,gt?"active":null,vt?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let V=typeof u=="function"?u(R):u;return q.createElement(BE,{...y,"aria-current":b,className:C,ref:E,style:V,to:f,viewTransition:m},typeof p=="function"?p(R):p)});LR.displayName="NavLink";var PR=q.forwardRef(({discover:r="render",fetcherKey:t,navigate:n,reloadDocument:s,replace:o,state:u,method:f=$c,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:D,...B},$)=>{let{useTransitions:Z}=q.useContext(Bn),F=HR(),W=qR(m,{relative:y}),at=f.toLowerCase()==="get"?"get":"post",st=typeof m=="string"&&zE.test(m),dt=gt=>{if(p&&p(gt),gt.defaultPrevented)return;gt.preventDefault();let vt=gt.nativeEvent.submitter,R=(vt==null?void 0:vt.getAttribute("formmethod"))||f,b=()=>F(vt||gt.currentTarget,{fetcherKey:t,method:R,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:D});Z&&n!==!1?q.startTransition(()=>b()):b()};return q.createElement("form",{ref:$,method:at,action:W,onSubmit:s?p:dt,...B,"data-discover":!st&&r==="render"?"true":void 0})});PR.displayName="Form";function UR(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jE(r){let t=q.useContext(yo);return oe(t,UR(r)),t}function zR(r,{target:t,replace:n,mask:s,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p,useTransitions:y}={}){let E=Ih(),S=Pi(),D=Wl(r,{relative:f});return q.useCallback(B=>{if(gR(B,t)){B.preventDefault();let $=n!==void 0?n:Hl(S)===Hl(D),Z=()=>E(r,{replace:$,mask:s,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p});y?q.startTransition(()=>Z()):Z()}},[S,E,D,n,s,o,t,r,u,f,m,p,y])}var BR=0,jR=()=>`__${String(++BR)}__`;function HR(){let{router:r}=jE("useSubmit"),{basename:t}=q.useContext(Bn),n=aR(),s=r.fetch,o=r.navigate;return q.useCallback(async(u,f={})=>{let{action:m,method:p,encType:y,formData:E,body:S}=vR(u,t);if(f.navigate===!1){let D=f.fetcherKey||jR();await s(D,n,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:S,formMethod:f.method||p,formEncType:f.encType||y,flushSync:f.flushSync})}else await o(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:S,formMethod:f.method||p,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:n,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,o,t,n])}function qR(r,{relative:t}={}){let{basename:n}=q.useContext(Bn),s=q.useContext(Li);oe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Wl(r||".",{relative:t})},f=Pi();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(S=>S).forEach(S=>m.append("index",S));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ni([n,u.pathname])),Hl(u)}function FR(r,{relative:t}={}){let n=q.useContext(OE);oe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=jE("useViewTransitionState"),o=Wl(r,{relative:t});if(!n.isTransitioning)return!1;let u=ar(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=ar(n.nextLocation.pathname,s)||n.nextLocation.pathname;return sh(o.pathname,f)!=null||sh(o.pathname,u)!=null}const GR=()=>{};var Vv={};/**
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
 */const HE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},KR=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},qE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(D=64)),s.push(n[E],n[S],n[D],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(HE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):KR(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new YR;const D=u<<2|m>>4;if(s.push(D),y!==64){const B=m<<4&240|y>>2;if(s.push(B),S!==64){const $=y<<6&192|S;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class YR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $R=function(r){const t=HE(r);return qE.encodeByteArray(t,!0)},oh=function(r){return $R(r).replace(/\./g,"")},FE=function(r){try{return qE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function QR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XR=()=>QR().__FIREBASE_DEFAULTS__,ZR=()=>{if(typeof process>"u"||typeof Vv>"u")return;const r=Vv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},JR=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&FE(r[1]);return t&&JSON.parse(t)},Dh=()=>{try{return GR()||XR()||ZR()||JR()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},GE=r=>{var t,n;return(n=(t=Dh())==null?void 0:t.emulatorHosts)==null?void 0:n[r]},hp=r=>{const t=GE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},KE=()=>{var r;return(r=Dh())==null?void 0:r.config},YE=r=>{var t;return(t=Dh())==null?void 0:t[`_${r}`]};/**
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
 */class WR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function $E(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[oh(JSON.stringify(n)),oh(JSON.stringify(f)),""].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function e1(){var t;const r=(t=Dh())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function i1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r1(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function s1(){return!e1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)==null?void 0:u.message)||"")}}catch(n){t(n)}})}function a1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const o1="FirebaseError";class jn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=o1,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?l1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new jn(o,m,s)}}function l1(r,t){return r.replace(u1,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const u1=/\{\$([^}]+)}/g;function c1(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function ss(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(xv(u)&&xv(f)){if(!ss(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function xv(r){return r!==null&&typeof r=="object"}/**
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
 */function tu(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ol(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Ml(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function h1(r,t){const n=new f1(r,t);return n.subscribe.bind(n)}class f1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");d1(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=am),o.error===void 0&&(o.error=am),o.complete===void 0&&(o.complete=am);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d1(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function am(){}/**
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
 */const m1=1e3,p1=2,g1=14400*1e3,y1=.5;function kv(r,t=m1,n=p1){const s=t*Math.pow(n,r),o=Math.round(y1*s*(Math.random()-.5)*2);return Math.min(g1,s+o)}/**
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
 */function Ue(r){return r&&r._delegate?r._delegate:r}/**
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
 */function na(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nh(r){return(await fetch(r,{credentials:"include"})).ok}class wn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Fs="[DEFAULT]";/**
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
 */class _1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new WR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(E1(t))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Fs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fs){return this.instances.has(t)}getOptions(t=Fs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:v1(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Fs){return this.component?this.component.multipleInstances?t:Fs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v1(r){return r===Fs?void 0:r}function E1(r){return r.instantiationMode==="EAGER"}/**
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
 */class T1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new _1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const S1={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},A1=Mt.INFO,b1={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},w1=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=b1[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oh{constructor(t){this.name=t,this._logLevel=A1,this._logHandler=w1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?S1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const R1=(r,t)=>t.some(n=>r instanceof n);let Lv,Pv;function I1(){return Lv||(Lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C1(){return Pv||(Pv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JE=new WeakMap,Im=new WeakMap,WE=new WeakMap,om=new WeakMap,fp=new WeakMap;function D1(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Zr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&JE.set(n,r)}).catch(()=>{}),fp.set(t,r),t}function N1(r){if(Im.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Im.set(r,t)}let Cm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Im.get(r);if(t==="objectStoreNames")return r.objectStoreNames||WE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function O1(r){Cm=r(Cm)}function M1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(lm(this),t,...n);return WE.set(s,t.sort?t.sort():[t]),Zr(s)}:C1().includes(r)?function(...t){return r.apply(lm(this),t),Zr(JE.get(this))}:function(...t){return Zr(r.apply(lm(this),t))}}function V1(r){return typeof r=="function"?M1(r):(r instanceof IDBTransaction&&N1(r),R1(r,I1())?new Proxy(r,Cm):r)}function Zr(r){if(r instanceof IDBRequest)return D1(r);if(om.has(r))return om.get(r);const t=V1(r);return t!==r&&(om.set(r,t),fp.set(t,r)),t}const lm=r=>fp.get(r);function tT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Zr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Zr(f.result),p.oldVersion,p.newVersion,Zr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const x1=["get","getKey","getAll","getAllKeys","count"],k1=["put","add","delete","clear"],um=new Map;function Uv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(um.get(t))return um.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=k1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||x1.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return um.set(t,u),u}O1(r=>({...r,get:(t,n,s)=>Uv(t,n)||r.get(t,n,s),has:(t,n)=>!!Uv(t,n)||r.has(t,n)}));/**
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
 */class L1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(P1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function P1(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Dm="@firebase/app",zv="0.14.11";/**
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
 */const or=new Oh("@firebase/app"),U1="@firebase/app-compat",z1="@firebase/analytics-compat",B1="@firebase/analytics",j1="@firebase/app-check-compat",H1="@firebase/app-check",q1="@firebase/auth",F1="@firebase/auth-compat",G1="@firebase/database",K1="@firebase/data-connect",Y1="@firebase/database-compat",$1="@firebase/functions",Q1="@firebase/functions-compat",X1="@firebase/installations",Z1="@firebase/installations-compat",J1="@firebase/messaging",W1="@firebase/messaging-compat",tI="@firebase/performance",eI="@firebase/performance-compat",nI="@firebase/remote-config",iI="@firebase/remote-config-compat",rI="@firebase/storage",sI="@firebase/storage-compat",aI="@firebase/firestore",oI="@firebase/ai",lI="@firebase/firestore-compat",uI="firebase",cI="12.12.0";/**
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
 */const Nm="[DEFAULT]",hI={[Dm]:"fire-core",[U1]:"fire-core-compat",[B1]:"fire-analytics",[z1]:"fire-analytics-compat",[H1]:"fire-app-check",[j1]:"fire-app-check-compat",[q1]:"fire-auth",[F1]:"fire-auth-compat",[G1]:"fire-rtdb",[K1]:"fire-data-connect",[Y1]:"fire-rtdb-compat",[$1]:"fire-fn",[Q1]:"fire-fn-compat",[X1]:"fire-iid",[Z1]:"fire-iid-compat",[J1]:"fire-fcm",[W1]:"fire-fcm-compat",[tI]:"fire-perf",[eI]:"fire-perf-compat",[nI]:"fire-rc",[iI]:"fire-rc-compat",[rI]:"fire-gcs",[sI]:"fire-gcs-compat",[aI]:"fire-fst",[lI]:"fire-fst-compat",[oI]:"fire-vertex","fire-js":"fire-js",[uI]:"fire-js-all"};/**
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
 */const lh=new Map,fI=new Map,Om=new Map;function Bv(r,t){try{r.container.addComponent(t)}catch(n){or.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function zn(r){const t=r.name;if(Om.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;Om.set(t,r);for(const n of lh.values())Bv(n,r);for(const n of fI.values())Bv(n,r);return!0}function cr(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function An(r){return r==null?!1:r.settings!==void 0}/**
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
 */const dI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new ea("app","Firebase",dI);/**
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
 */class mI{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const ia=cI;function eT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:Nm,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Jr.create("bad-app-name",{appName:String(o)});if(n||(n=KE()),!n)throw Jr.create("no-options");const u=lh.get(o);if(u){if(ss(n,u.options)&&ss(s,u.config))return u;throw Jr.create("duplicate-app",{appName:o})}const f=new T1(o);for(const p of Om.values())f.addComponent(p);const m=new mI(n,s,f);return lh.set(o,m),m}function eu(r=Nm){const t=lh.get(r);if(!t&&r===Nm&&KE())return eT();if(!t)throw Jr.create("no-app",{appName:r});return t}function Je(r,t,n){let s=hI[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(f.join(" "));return}zn(new wn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const pI="firebase-heartbeat-database",gI=1,ql="firebase-heartbeat-store";let cm=null;function nT(){return cm||(cm=tT(pI,gI,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jr.create("idb-open",{originalErrorMessage:r.message})})),cm}async function yI(r){try{const n=(await nT()).transaction(ql),s=await n.objectStore(ql).get(iT(r));return await n.done,s}catch(t){if(t instanceof jn)or.warn(t.message);else{const n=Jr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});or.warn(n.message)}}}async function jv(r,t){try{const s=(await nT()).transaction(ql,"readwrite");await s.objectStore(ql).put(t,iT(r)),await s.done}catch(n){if(n instanceof jn)or.warn(n.message);else{const s=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(s.message)}}}function iT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const _I=1024,vI=30;class EI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Hv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>vI){const f=AI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){or.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hv(),{heartbeatsToSend:s,unsentEntries:o}=TI(this._heartbeatsCache.heartbeats),u=oh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return or.warn(n),""}}}function Hv(){return new Date().toISOString().substring(0,10)}function TI(r,t=_I){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),qv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),qv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class SI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return jv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return jv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qv(r){return oh(JSON.stringify({version:2,heartbeats:r})).length}function AI(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function bI(r){zn(new wn("platform-logger",t=>new L1(t),"PRIVATE")),zn(new wn("heartbeat",t=>new EI(t),"PRIVATE")),Je(Dm,zv,r),Je(Dm,zv,"esm2020"),Je("fire-js","")}bI("");function rT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wI=rT,sT=new ea("auth","Firebase",rT());/**
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
 */const uh=new Oh("@firebase/auth");function RI(r,...t){uh.logLevel<=Mt.WARN&&uh.warn(`Auth (${ia}): ${r}`,...t)}function Xc(r,...t){uh.logLevel<=Mt.ERROR&&uh.error(`Auth (${ia}): ${r}`,...t)}/**
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
 */function ri(r,...t){throw dp(r,...t)}function Ni(r,...t){return dp(r,...t)}function aT(r,t,n){const s={...wI(),[t]:n};return new ea("auth","Firebase",s).create(t,{appName:r.name})}function Wr(r){return aT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return sT.create(r,...t)}function _t(r,t,...n){if(!r)throw dp(t,...n)}function rr(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Xc(t),new Error(t)}function lr(r,t){r||rr(t)}/**
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
 */function Mm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function II(){return Fv()==="http:"||Fv()==="https:"}function Fv(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function CI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(II()||QE()||"connection"in navigator)?navigator.onLine:!0}function DI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class nu{constructor(t,n){this.shortDelay=t,this.longDelay=n,lr(n>t,"Short delay should be less than long delay!"),this.isMobile=t1()||i1()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mp(r,t){lr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class oT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MI=new nu(3e4,6e4);function ra(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function fs(r,t,n,s,o={}){return lT(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=tu({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:p,...u};return n1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&na(r.emulatorConfig.host)&&(y.credentials="include"),oT.fetch()(await uT(r,r.config.apiHost,n,m),y)})}async function lT(r,t,n){r._canInitEmulator=!1;const s={...NI,...t};try{const o=new xI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw jc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw jc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw jc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw aT(r,E,y);ri(r,E)}}catch(o){if(o instanceof jn)throw o;ri(r,"network-request-failed",{message:String(o)})}}async function Mh(r,t,n,s,o={}){const u=await fs(r,t,n,s,o);return"mfaPendingCredential"in u&&ri(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function uT(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?mp(r.config,o):`${r.config.apiScheme}://${o}`;return OI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function VI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ni(this.auth,"network-request-failed")),MI.get())})}}function jc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ni(r,t,s);return o.customData._tokenResponse=n,o}function Gv(r){return r!==void 0&&r.enterprise!==void 0}class kI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return VI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LI(r,t){return fs(r,"GET","/v2/recaptchaConfig",ra(r,t))}/**
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
 */async function PI(r,t){return fs(r,"POST","/v1/accounts:delete",t)}async function ch(r,t){return fs(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Pl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function UI(r,t=!1){const n=Ue(r),s=await n.getIdToken(t),o=pp(s);_t(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Pl(hm(o.auth_time)),issuedAtTime:Pl(hm(o.iat)),expirationTime:Pl(hm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function hm(r){return Number(r)*1e3}function pp(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const o=FE(n);return o?JSON.parse(o):(Xc("Failed to decode base64 JWT payload"),null)}catch(o){return Xc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Kv(r){const t=pp(r);return _t(t,"internal-error"),_t(typeof t.exp<"u","internal-error"),_t(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Fl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof jn&&zI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function zI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class BI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pl(this.lastLoginAt),this.creationTime=Pl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hh(r){var S;const t=r.auth,n=await r.getIdToken(),s=await Fl(r,ch(t,{idToken:n}));_t(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?cT(o.providerUserInfo):[],f=HI(r.providerData,u),m=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Vm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function jI(r){const t=Ue(r);await hh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function HI(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function cT(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function qI(r,t){const n=await lT(r,{},async()=>{const s=tu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await uT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&na(r.emulatorConfig.host)&&(p.credentials="include"),oT.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FI(r,t){return fs(r,"POST","/v2/accounts:revokeToken",ra(r,t))}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_t(t.idToken,"internal-error"),_t(typeof t.idToken<"u","internal-error"),_t(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Kv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){_t(t.length!==0,"internal-error");const n=Kv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_t(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await qI(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new eo;return s&&(_t(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(_t(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(_t(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
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
 */function Fr(r,t){_t(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class ti{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,t));return _t(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return UI(this,t)}reload(){return jI(this)}_assign(t){this!==t&&(_t(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ti({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await hh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Wr(this.auth));const t=await this.getIdToken();return await Fl(this,PI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:D,isAnonymous:B,providerData:$,stsTokenManager:Z}=n;_t(S&&Z,t,"internal-error");const F=eo.fromJSON(this.name,Z);_t(typeof S=="string",t,"internal-error"),Fr(s,t.name),Fr(o,t.name),_t(typeof D=="boolean",t,"internal-error"),_t(typeof B=="boolean",t,"internal-error"),Fr(u,t.name),Fr(f,t.name),Fr(m,t.name),Fr(p,t.name),Fr(y,t.name),Fr(E,t.name);const W=new ti({uid:S,auth:t,email:o,emailVerified:D,displayName:s,isAnonymous:B,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:F,createdAt:y,lastLoginAt:E});return $&&Array.isArray($)&&(W.providerData=$.map(at=>({...at}))),p&&(W._redirectEventId=p),W}static async _fromIdTokenResponse(t,n,s=!1){const o=new eo;o.updateFromServerResponse(n);const u=new ti({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await hh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];_t(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?cT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new eo;m.updateFromIdToken(s);const p=new ti({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Vm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const Yv=new Map;function sr(r){lr(r instanceof Function,"Expected a class definition");let t=Yv.get(r);return t?(lr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Yv.set(r,t),t)}/**
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
 */class hT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}hT.type="NONE";const $v=hT;/**
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
 */function Zc(r,t,n){return`firebase:${r}:${t}:${n}`}class no{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Zc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Zc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ch(this.auth,{idToken:t}).catch(()=>{});return n?ti._fromGetAccountInfoResponse(this.auth,n,t):null}return ti._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new no(sr($v),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||sr($v);const f=Zc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let S;if(typeof E=="string"){const D=await ch(t,{idToken:E}).catch(()=>{});if(!D)break;S=await ti._fromGetAccountInfoResponse(t,D,E)}else S=ti._fromJSON(t,E);y!==u&&(m=S),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new no(u,t,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new no(u,t,s))}}/**
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
 */function Qv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yT(t))return"Blackberry";if(_T(t))return"Webos";if(dT(t))return"Safari";if((t.includes("chrome/")||mT(t))&&!t.includes("edge/"))return"Chrome";if(gT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fT(r=We()){return/firefox\//i.test(r)}function dT(r=We()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mT(r=We()){return/crios\//i.test(r)}function pT(r=We()){return/iemobile/i.test(r)}function gT(r=We()){return/android/i.test(r)}function yT(r=We()){return/blackberry/i.test(r)}function _T(r=We()){return/webos/i.test(r)}function gp(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function GI(r=We()){var t;return gp(r)&&!!((t=window.navigator)!=null&&t.standalone)}function KI(){return r1()&&document.documentMode===10}function vT(r=We()){return gp(r)||gT(r)||_T(r)||yT(r)||/windows phone/i.test(r)||pT(r)}/**
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
 */function ET(r,t=[]){let n;switch(r){case"Browser":n=Qv(We());break;case"Worker":n=`${Qv(We())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ia}/${s}`}/**
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
 */class YI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const p=t(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function $I(r,t={}){return fs(r,"GET","/v2/passwordPolicy",ra(r,t))}/**
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
 */const QI=6;class XI{constructor(t){var s;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??QI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=t.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class ZI{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xv(this),this.idTokenSubscription=new Xv(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await no.create(this,t),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ch(this,{idToken:t}),s=await ti._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(An(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===m)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=DI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(An(this.app))return Promise.reject(Wr(this));const n=t?Ue(t):null;return n&&_t(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&_t(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return An(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $I(this),n=new XI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ea("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await FI(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&sr(t)||this._popupRedirectResolver;_t(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_t(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ET(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var n;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&RI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _o(r){return Ue(r)}class Xv{constructor(t){this.auth=t,this.observer=null,this.addObserver=h1(n=>this.observer=n)}get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JI(r){Vh=r}function TT(r){return Vh.loadJS(r)}function WI(){return Vh.recaptchaEnterpriseScript}function tC(){return Vh.gapiScript}function eC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class nC{constructor(){this.enterprise=new iC}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class iC{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const rC="recaptcha-enterprise",ST="NO_RECAPTCHA";class sC{constructor(t){this.type=rC,this.auth=_o(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{LI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new kI(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Gv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(ST)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Gv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=WI();p.length!==0&&(p+=m),TT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Zv(r,t,n,s=!1,o=!1){const u=new sC(r);let f;if(o)f=ST;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Jv(r,t,n,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Zv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Zv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function aC(r,t){const n=cr(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ss(u,t??{}))return o;ri(o,"already-initialized")}return n.initialize({options:t})}function oC(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sr);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function lC(r,t,n){const s=_o(r);_t(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=AT(t),{host:f,port:m}=uC(t),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_t(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_t(ss(y,s.config.emulator)&&ss(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,na(f)?Nh(`${u}//${f}${p}`):cC()}function AT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function uC(r){const t=AT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Wv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Wv(f)}}}function Wv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function cC(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class yp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(t){return rr("not implemented")}_linkToIdToken(t,n){return rr("not implemented")}_getReauthenticationResolver(t){return rr("not implemented")}}async function hC(r,t){return fs(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function fC(r,t){return Mh(r,"POST","/v1/accounts:signInWithPassword",ra(r,t))}/**
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
 */async function dC(r,t){return Mh(r,"POST","/v1/accounts:signInWithEmailLink",ra(r,t))}async function mC(r,t){return Mh(r,"POST","/v1/accounts:signInWithEmailLink",ra(r,t))}/**
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
 */class Gl extends yp{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Gl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Gl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jv(t,n,"signInWithPassword",fC);case"emailLink":return dC(t,{email:this._email,oobCode:this._password});default:ri(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jv(t,s,"signUpPassword",hC);case"emailLink":return mC(t,{idToken:n,email:this._email,oobCode:this._password});default:ri(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function io(r,t){return Mh(r,"POST","/v1/accounts:signInWithIdp",ra(r,t))}/**
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
 */const pC="http://localhost";class Qs extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Qs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ri("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Qs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return io(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,io(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,io(t,n)}buildRequest(){const t={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=tu(n)}return t}}/**
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
 */function gC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yC(r){const t=Ol(Ml(r)).link,n=t?Ol(Ml(t)).deep_link_id:null,s=Ol(Ml(r)).deep_link_id;return(s?Ol(Ml(s)).link:null)||s||n||t||r}class _p{constructor(t){const n=Ol(Ml(t)),s=n.apiKey??null,o=n.oobCode??null,u=gC(n.mode??null);_t(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=yC(t);try{return new _p(n)}catch{return null}}}/**
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
 */class vo{constructor(){this.providerId=vo.PROVIDER_ID}static credential(t,n){return Gl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=_p.parseLink(n);return _t(s,"argument-error"),Gl._fromEmailAndCode(t,s.code,s.tenantId)}}vo.PROVIDER_ID="password";vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class iu extends bT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends iu{constructor(){super("facebook.com")}static credential(t){return Qs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gr.credentialFromTaggedObject(t)}static credentialFromError(t){return Gr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gr.credential(t.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends iu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Qs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Kr.credentialFromTaggedObject(t)}static credentialFromError(t){return Kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Kr.credential(n,s)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Yr extends iu{constructor(){super("github.com")}static credential(t){return Qs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yr.credentialFromTaggedObject(t)}static credentialFromError(t){return Yr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yr.credential(t.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class $r extends iu{constructor(){super("twitter.com")}static credential(t,n){return Qs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $r.credentialFromTaggedObject(t)}static credentialFromError(t){return $r.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return $r.credential(n,s)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */class uo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await ti._fromIdTokenResponse(t,s,o),f=t0(s);return new uo({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=t0(s);return new uo({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function t0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class fh extends jn{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,fh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new fh(t,n,s,o)}}function wT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?fh._fromErrorAndOperation(r,u,t,s):u})}async function _C(r,t,n=!1){const s=await Fl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return uo._forOperation(r,"link",s)}/**
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
 */async function vC(r,t,n=!1){const{auth:s}=r;if(An(s.app))return Promise.reject(Wr(s));const o="reauthenticate";try{const u=await Fl(r,wT(s,o,t,r),n);_t(u.idToken,s,"internal-error");const f=pp(u.idToken);_t(f,s,"internal-error");const{sub:m}=f;return _t(r.uid===m,s,"user-mismatch"),uo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ri(s,"user-mismatch"),u}}/**
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
 */async function RT(r,t,n=!1){if(An(r.app))return Promise.reject(Wr(r));const s="signIn",o=await wT(r,s,t),u=await uo._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function EC(r,t){return RT(_o(r),t)}/**
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
 */async function TC(r){const t=_o(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function SC(r,t,n){return An(r.app)?Promise.reject(Wr(r)):EC(Ue(r),vo.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&TC(r),s})}function AC(r,t,n,s){return Ue(r).onIdTokenChanged(t,n,s)}function bC(r,t,n){return Ue(r).beforeAuthStateChanged(t,n)}function wC(r,t,n,s){return Ue(r).onAuthStateChanged(t,n,s)}function RC(r){return Ue(r).signOut()}const dh="__sak";/**
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
 */class IT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dh,"1"),this.storage.removeItem(dh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IC=1e3,CC=10;class CT extends IT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);KI()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,CC):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}CT.type="LOCAL";const DC=CT;/**
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
 */class DT extends IT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}DT.type="SESSION";const NT=DT;/**
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
 */function NC(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new xh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await NC(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xh.receivers=[];/**
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
 */function vp(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class OC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=vp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const D=S;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Oi(){return window}function MC(r){Oi().location.href=r}/**
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
 */function OT(){return typeof Oi().WorkerGlobalScope<"u"&&typeof Oi().importScripts=="function"}async function VC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function kC(){return OT()?self:null}/**
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
 */const MT="firebaseLocalStorageDb",LC=1,mh="firebaseLocalStorage",VT="fbase_key";class ru{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kh(r,t){return r.transaction([mh],t?"readwrite":"readonly").objectStore(mh)}function PC(){const r=indexedDB.deleteDatabase(MT);return new ru(r).toPromise()}function xm(){const r=indexedDB.open(MT,LC);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(mh,{keyPath:VT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(mh)?t(s):(s.close(),await PC(),t(await xm()))})})}async function e0(r,t,n){const s=kh(r,!0).put({[VT]:t,value:n});return new ru(s).toPromise()}async function UC(r,t){const n=kh(r,!1).get(t),s=await new ru(n).toPromise();return s===void 0?null:s.value}function n0(r,t){const n=kh(r,!0).delete(t);return new ru(n).toPromise()}const zC=800,BC=3;class xT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>BC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return OT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xh._getInstance(kC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await VC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(s=t[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||xC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xm();return await e0(t,dh,"1"),await n0(t,dh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>e0(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>UC(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>n0(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=kh(o,!1).getAll();return new ru(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xT.type="LOCAL";const jC=xT;new nu(3e4,6e4);/**
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
 */function HC(r,t){return t?sr(t):(_t(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ep extends yp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return io(t,this._buildIdpRequest())}_linkToIdToken(t,n){return io(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return io(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function qC(r){return RT(r.auth,new Ep(r),r.bypassAuthState)}function FC(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),vC(n,new Ep(r),r.bypassAuthState)}async function GC(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),_C(n,new Ep(r),r.bypassAuthState)}/**
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
 */class kT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qC;case"linkViaPopup":case"linkViaRedirect":return GC;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:ri(this.auth,"internal-error")}}resolve(t){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KC=new nu(2e3,1e4);class to extends kT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _t(t,this.auth,"internal-error"),t}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const t=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,KC.get())};t()}}to.currentPopupAction=null;/**
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
 */const YC="pendingRedirect",Jc=new Map;class $C extends kT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Jc.get(this.auth._key());if(!t){try{const s=await QC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Jc.set(this.auth._key(),t)}return this.bypassAuthState||Jc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(r,t){const n=JC(t),s=ZC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function XC(r,t){Jc.set(r._key(),t)}function ZC(r){return sr(r._redirectPersistence)}function JC(r){return Zc(YC,r.config.apiKey,r.name)}async function WC(r,t,n=!1){if(An(r.app))return Promise.reject(Wr(r));const s=_o(r),o=HC(s,t),f=await new $C(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const t2=600*1e3;class e2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!n2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!LT(t)){const o=((s=t.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ni(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=t2&&this.cachedEventUids.clear(),this.cachedEventUids.has(i0(t))}saveEventToCache(t){this.cachedEventUids.add(i0(t)),this.lastProcessedEventTime=Date.now()}}function i0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function LT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function n2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(r);default:return!1}}/**
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
 */async function i2(r,t={}){return fs(r,"GET","/v1/projects",t)}/**
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
 */const r2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s2=/^https?/;async function a2(r){if(r.config.emulator)return;const{authorizedDomains:t}=await i2(r);for(const n of t)try{if(o2(n))return}catch{}ri(r,"unauthorized-domain")}function o2(r){const t=Mm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!s2.test(n))return!1;if(r2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const l2=new nu(3e4,6e4);function r0(){const r=Oi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function u2(r){return new Promise((t,n)=>{var o,u,f;function s(){r0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{r0(),n(Ni(r,"network-request-failed"))},timeout:l2.get()})}if((u=(o=Oi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((f=Oi().gapi)!=null&&f.load)s();else{const m=eC("iframefcb");return Oi()[m]=()=>{gapi.load?s():n(Ni(r,"network-request-failed"))},TT(`${tC()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw Wc=null,t})}let Wc=null;function c2(r){return Wc=Wc||u2(r),Wc}/**
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
 */const h2=new nu(5e3,15e3),f2="__/auth/iframe",d2="emulator/auth/iframe",m2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g2(r){const t=r.config;_t(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?mp(t,d2):`https://${r.config.authDomain}/${f2}`,s={apiKey:t.apiKey,appName:r.name,v:ia},o=p2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${tu(s).slice(1)}`}async function y2(r){const t=await c2(r),n=Oi().gapi;return _t(n,r,"internal-error"),t.open({where:document.body,url:g2(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ni(r,"network-request-failed"),m=Oi().setTimeout(()=>{u(f)},h2.get());function p(){Oi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const _2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v2=500,E2=600,T2="_blank",S2="http://localhost";class s0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A2(r,t,n,s=v2,o=E2){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={..._2,width:s.toString(),height:o.toString(),top:u,left:f},y=We().toLowerCase();n&&(m=mT(y)?T2:n),fT(y)&&(t=t||S2,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[B,$])=>`${D}${B}=${$},`,"");if(GI(y)&&m!=="_self")return b2(t||"",m),new s0(null);const S=window.open(t||"",m,E);_t(S,r,"popup-blocked");try{S.focus()}catch{}return new s0(S)}function b2(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const w2="__/auth/handler",R2="emulator/auth/handler",I2=encodeURIComponent("fac");async function a0(r,t,n,s,o,u){_t(r.config.authDomain,r,"auth-domain-config-required"),_t(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ia,eventId:o};if(t instanceof bT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",c1(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(t instanceof iu){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${I2}=${encodeURIComponent(p)}`:"";return`${C2(r)}?${tu(m).slice(1)}${y}`}function C2({config:r}){return r.emulator?mp(r,R2):`https://${r.authDomain}/${w2}`}/**
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
 */const fm="webStorageSupport";class D2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NT,this._completeRedirectFn=WC,this._overrideRedirectResult=XC}async _openPopup(t,n,s,o){var f;lr((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await a0(t,n,s,Mm(),o);return A2(t,u,vp())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await a0(t,n,s,Mm(),o);return MC(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(lr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await y2(t),s=new e2(t);return n.register("authEvent",o=>(_t(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(fm,{type:fm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[fm];u!==void 0&&n(!!u),ri(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return vT()||dT()||gp()}}const N2=D2;var o0="@firebase/auth",l0="1.13.0";/**
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
 */class O2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function M2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V2(r){zn(new wn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_t(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ET(r)},y=new ZI(s,o,u,p);return oC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),zn(new wn("auth-internal",t=>{const n=_o(t.getProvider("auth").getImmediate());return(s=>new O2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(o0,l0,M2(r)),Je(o0,l0,"esm2020")}/**
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
 */const x2=300,k2=YE("authIdTokenMaxAge")||x2;let u0=null;const L2=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>k2)return;const o=n==null?void 0:n.token;u0!==o&&(u0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function P2(r=eu()){const t=cr(r,"auth");if(t.isInitialized())return t.getImmediate();const n=aC(r,{popupRedirectResolver:N2,persistence:[jC,DC,NT]}),s=YE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=L2(u.toString());bC(n,f,()=>f(n.currentUser)),AC(n,m=>f(m))}}const o=GE("auth");return o&&lC(n,`http://${o}`),n}function U2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}JI({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Ni("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",U2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V2("Browser");var z2="firebase",B2="12.12.1";/**
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
 */Je(z2,B2,"app");const PT="@firebase/installations",Tp="0.6.21";/**
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
 */const UT=1e4,zT=`w:${Tp}`,BT="FIS_v2",j2="https://firebaseinstallations.googleapis.com/v1",H2=3600*1e3,q2="installations",F2="Installations";/**
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
 */const G2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xs=new ea(q2,F2,G2);function jT(r){return r instanceof jn&&r.code.includes("request-failed")}/**
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
 */function HT({projectId:r}){return`${j2}/projects/${r}/installations`}function qT(r){return{token:r.token,requestStatus:2,expiresIn:Y2(r.expiresIn),creationTime:Date.now()}}async function FT(r,t){const s=(await t.json()).error;return Xs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function GT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function K2(r,{refreshToken:t}){const n=GT(r);return n.append("Authorization",$2(t)),n}async function KT(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Y2(r){return Number(r.replace("s","000"))}function $2(r){return`${BT} ${r}`}/**
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
 */async function Q2({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=HT(r),o=GT(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:BT,appId:r.appId,sdkVersion:zT},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await KT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:qT(y.authToken)}}else throw await FT("Create Installation",p)}/**
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
 */function YT(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function X2(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Z2=/^[cdef][\w-]{21}$/,km="";function J2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=W2(r);return Z2.test(n)?n:km}catch{return km}}function W2(r){return X2(r).substr(0,22)}/**
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
 */function Lh(r){return`${r.appName}!${r.appId}`}/**
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
 */const $T=new Map;function QT(r,t){const n=Lh(r);XT(n,t),tD(n,t)}function XT(r,t){const n=$T.get(r);if(n)for(const s of n)s(t)}function tD(r,t){const n=eD();n&&n.postMessage({key:r,fid:t}),nD()}let Gs=null;function eD(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=r=>{XT(r.data.key,r.data.fid)}),Gs}function nD(){$T.size===0&&Gs&&(Gs.close(),Gs=null)}/**
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
 */const iD="firebase-installations-database",rD=1,Zs="firebase-installations-store";let dm=null;function Sp(){return dm||(dm=tT(iD,rD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Zs)}}})),dm}async function ph(r,t){const n=Lh(r),o=(await Sp()).transaction(Zs,"readwrite"),u=o.objectStore(Zs),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&QT(r,t.fid),t}async function ZT(r){const t=Lh(r),s=(await Sp()).transaction(Zs,"readwrite");await s.objectStore(Zs).delete(t),await s.done}async function Ph(r,t){const n=Lh(r),o=(await Sp()).transaction(Zs,"readwrite"),u=o.objectStore(Zs),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&QT(r,m.fid),m}/**
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
 */async function Ap(r){let t;const n=await Ph(r.appConfig,s=>{const o=sD(s),u=aD(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===km?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function sD(r){const t=r||{fid:J2(),registrationStatus:0};return JT(t)}function aD(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Xs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=oD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:lD(r)}:{installationEntry:t}}async function oD(r,t){try{const n=await Q2(r,t);return ph(r.appConfig,n)}catch(n){throw jT(n)&&n.customData.serverCode===409?await ZT(r.appConfig):await ph(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function lD(r){let t=await c0(r.appConfig);for(;t.registrationStatus===1;)await YT(100),t=await c0(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ap(r);return s||n}return t}function c0(r){return Ph(r,t=>{if(!t)throw Xs.create("installation-not-found");return JT(t)})}function JT(r){return uD(r)?{fid:r.fid,registrationStatus:0}:r}function uD(r){return r.registrationStatus===1&&r.registrationTime+UT<Date.now()}/**
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
 */async function cD({appConfig:r,heartbeatServiceProvider:t},n){const s=hD(r,n),o=K2(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:zT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await KT(()=>fetch(s,m));if(p.ok){const y=await p.json();return qT(y)}else throw await FT("Generate Auth Token",p)}function hD(r,{fid:t}){return`${HT(r)}/${t}/authTokens:generate`}/**
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
 */async function bp(r,t=!1){let n;const s=await Ph(r.appConfig,u=>{if(!WT(u))throw Xs.create("not-registered");const f=u.authToken;if(!t&&mD(f))return u;if(f.requestStatus===1)return n=fD(r,t),u;{if(!navigator.onLine)throw Xs.create("app-offline");const m=gD(u);return n=dD(r,m),m}});return n?await n:s.authToken}async function fD(r,t){let n=await h0(r.appConfig);for(;n.authToken.requestStatus===1;)await YT(100),n=await h0(r.appConfig);const s=n.authToken;return s.requestStatus===0?bp(r,t):s}function h0(r){return Ph(r,t=>{if(!WT(t))throw Xs.create("not-registered");const n=t.authToken;return yD(n)?{...t,authToken:{requestStatus:0}}:t})}async function dD(r,t){try{const n=await cD(r,t),s={...t,authToken:n};return await ph(r.appConfig,s),n}catch(n){if(jT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZT(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await ph(r.appConfig,s)}throw n}}function WT(r){return r!==void 0&&r.registrationStatus===2}function mD(r){return r.requestStatus===2&&!pD(r)}function pD(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+H2}function gD(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function yD(r){return r.requestStatus===1&&r.requestTime+UT<Date.now()}/**
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
 */async function _D(r){const t=r,{installationEntry:n,registrationPromise:s}=await Ap(t);return s?s.catch(console.error):bp(t).catch(console.error),n.fid}/**
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
 */async function vD(r,t=!1){const n=r;return await ED(n),(await bp(n,t)).token}async function ED(r){const{registrationPromise:t}=await Ap(r);t&&await t}/**
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
 */function TD(r){if(!r||!r.options)throw mm("App Configuration");if(!r.name)throw mm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw mm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function mm(r){return Xs.create("missing-app-config-values",{valueName:r})}/**
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
 */const tS="installations",SD="installations-internal",AD=r=>{const t=r.getProvider("app").getImmediate(),n=TD(t),s=cr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},bD=r=>{const t=r.getProvider("app").getImmediate(),n=cr(t,tS).getImmediate();return{getId:()=>_D(n),getToken:o=>vD(n,o)}};function wD(){zn(new wn(tS,AD,"PUBLIC")),zn(new wn(SD,bD,"PRIVATE"))}wD();Je(PT,Tp);Je(PT,Tp,"esm2020");/**
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
 */const gh="analytics",RD="firebase_id",ID="origin",CD=60*1e3,DD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
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
 */const sn=new Oh("@firebase/analytics");/**
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
 */const ND={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new ea("analytics","Analytics",ND);/**
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
 */function OD(r){if(!r.startsWith(wp)){const t=bn.create("invalid-gtag-resource",{gtagURL:r});return sn.warn(t.message),""}return r}function eS(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function MD(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function VD(r,t){const n=MD("firebase-js-sdk-policy",{createScriptURL:OD}),s=document.createElement("script"),o=`${wp}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function xD(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function kD(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await eS(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){sn.error(m)}r("config",o,u)}async function LD(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await eS(n);for(const p of f){const y=m.find(S=>S.measurementId===p),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){sn.error(u)}}function PD(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await LD(r,t,n,m,p)}else if(u==="config"){const[m,p]=f;await kD(r,t,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){sn.error(m)}}return o}function UD(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=PD(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function zD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(wp)&&n.src.includes(r))return n;return null}/**
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
 */const BD=30,jD=1e3;class HD{constructor(t={},n=jD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const nS=new HD;function qD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function FD(r){var f;const{appId:t,apiKey:n}=r,s={method:"GET",headers:qD(n)},o=DD.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let m="";try{const p=await u.json();(f=p.error)!=null&&f.message&&(m=p.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:m})}return u.json()}async function GD(r,t=nS,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw bn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw bn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new $D;return setTimeout(async()=>{m.abort()},CD),iS({appId:s,apiKey:o,measurementId:u},f,m,t)}async function iS(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=nS){var m;const{appId:u,measurementId:f}=r;try{await KD(s,t)}catch(p){if(f)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw p}try{const p=await FD(r);return o.deleteThrottleMetadata(u),p}catch(p){const y=p;if(!YD(y)){if(o.deleteThrottleMetadata(u),f)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:f};throw p}const E=Number((m=y==null?void 0:y.customData)==null?void 0:m.httpStatus)===503?kv(n,o.intervalMillis,BD):kv(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(u,S),sn.debug(`Calling attemptFetch again in ${E} millis`),iS(r,S,s,o)}}function KD(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(bn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function YD(r){if(!(r instanceof jn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class $D{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function QD(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}async function XD(r,t,n,s){if(s&&s.global){const o={};for(const u of Object.keys(n))o[`user_properties.${u}`]=n[u];return r("set",o),Promise.resolve()}else{const o=await t;r("config",o,{update:!0,user_properties:n})}}/**
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
 */async function ZD(){if(XE())try{await ZE()}catch(r){return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JD(r,t,n,s,o,u,f){const m=GD(r);m.then(D=>{n[D.measurementId]=D.appId,r.options.measurementId&&D.measurementId!==r.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>sn.error(D)),t.push(m);const p=ZD().then(D=>{if(D)return s.getId()}),[y,E]=await Promise.all([m,p]);zD(u)||VD(u,y.measurementId),o("js",new Date);const S=(f==null?void 0:f.config)??{};return S[ID]="firebase",S.update=!0,E!=null&&(S[RD]=E),o("config",y.measurementId,S),y.measurementId}/**
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
 */class WD{constructor(t){this.app=t}_delete(){return delete ro[this.app.options.appId],Promise.resolve()}}let ro={},f0=[];const d0={};let pm="dataLayer",tN="gtag",m0,Rp,p0=!1;function eN(){const r=[];if(QE()&&r.push("This is a browser extension environment."),a1()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:t});sn.warn(n.message)}}function nN(r,t,n){eN();const s=r.options.appId;if(!s)throw bn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(ro[s]!=null)throw bn.create("already-exists",{id:s});if(!p0){xD(pm);const{wrappedGtag:u,gtagCore:f}=UD(ro,f0,d0,pm,tN);Rp=u,m0=f,p0=!0}return ro[s]=JD(r,f0,d0,t,m0,pm,n),new WD(r)}function iN(r=eu()){r=Ue(r);const t=cr(r,gh);return t.isInitialized()?t.getImmediate():rN(r)}function rN(r,t={}){const n=cr(r,gh);if(n.isInitialized()){const o=n.getImmediate();if(ss(t,n.getOptions()))return o;throw bn.create("already-initialized")}return n.initialize({options:t})}function sN(r,t,n){r=Ue(r),XD(Rp,ro[r.app.options.appId],t,n).catch(s=>sn.error(s))}function aN(r,t,n,s){r=Ue(r),QD(Rp,ro[r.app.options.appId],t,n,s).catch(o=>sn.error(o))}const g0="@firebase/analytics",y0="0.10.21";function oN(){zn(new wn(gh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return nN(s,o,n)},"PUBLIC")),zn(new wn("analytics-internal",r,"PRIVATE")),Je(g0,y0),Je(g0,y0,"esm2020");function r(t){try{const n=t.getProvider(gh).getImmediate();return{logEvent:(s,o,u)=>aN(n,s,o,u),setUserProperties:(s,o)=>sN(n,s,o)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}oN();/**
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
 */const rS="functions";/**
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
 */class lN{constructor(t,n,s,o){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,An(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o==null||o.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(t);return{authToken:n,messagingToken:s,appCheckToken:o}}}/**
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
 */const Lm="us-central1";class uN{constructor(t,n,s,o,u=Lm,f=(...m)=>fetch(...m)){this.app=t,this.fetchImpl=f,this.emulatorOrigin=null,this.contextProvider=new lN(t,n,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=Lm}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function cN(r,t,n){const s=na(t);r.emulatorOrigin=`http${s?"s":""}://${t}:${n}`,s&&Nh(r.emulatorOrigin+"/backends")}const _0="@firebase/functions",v0="0.13.3";/**
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
 */const hN="auth-internal",fN="app-check-internal",dN="messaging-internal";function mN(r){const t=(n,{instanceIdentifier:s})=>{const o=n.getProvider("app").getImmediate(),u=n.getProvider(hN),f=n.getProvider(dN),m=n.getProvider(fN);return new uN(o,u,f,m,s)};zn(new wn(rS,t,"PUBLIC").setMultipleInstances(!0)),Je(_0,v0,r),Je(_0,v0,"esm2020")}/**
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
 */function pN(r=eu(),t=Lm){const s=cr(Ue(r),rS).getImmediate({identifier:t}),o=hp("functions");return o&&gN(s,...o),s}function gN(r,t,n){cN(Ue(r),t,n)}mN();var E0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,sS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,b){function C(){}C.prototype=b.prototype,R.F=b.prototype,R.prototype=new C,R.prototype.constructor=R,R.D=function(V,O,k){for(var w=Array(arguments.length-2),Wt=2;Wt<arguments.length;Wt++)w[Wt-2]=arguments[Wt];return b.prototype[O].apply(V,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,b,C){C||(C=0);const V=Array(16);if(typeof b=="string")for(var O=0;O<16;++O)V[O]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(O=0;O<16;++O)V[O]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=R.g[0],C=R.g[1],O=R.g[2];let k=R.g[3],w;w=b+(k^C&(O^k))+V[0]+3614090360&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[1]+3905402710&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[2]+606105819&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[3]+3250441966&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+V[4]+4118548399&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[5]+1200080426&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[6]+2821735955&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[7]+4249261313&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+V[8]+1770035416&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[9]+2336552879&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[10]+4294925233&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[11]+2304563134&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+V[12]+1804603682&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[13]+4254626195&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[14]+2792965006&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[15]+1236535329&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(O^k&(C^O))+V[1]+4129170786&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[6]+3225465664&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[11]+643717713&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[0]+3921069994&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+V[5]+3593408605&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[10]+38016083&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[15]+3634488961&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[4]+3889429448&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+V[9]+568446438&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[14]+3275163606&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[3]+4107603335&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[8]+1163531501&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+V[13]+2850285829&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[2]+4243563512&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[7]+1735328473&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[12]+2368359562&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(C^O^k)+V[5]+4294588738&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[8]+2272392833&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[11]+1839030562&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[14]+4259657740&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+V[1]+2763975236&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[4]+1272893353&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[7]+4139469664&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[10]+3200236656&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+V[13]+681279174&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[0]+3936430074&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[3]+3572445317&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[6]+76029189&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+V[9]+3654602809&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[12]+3873151461&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[15]+530742520&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[2]+3299628645&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(O^(C|~k))+V[0]+4096336452&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[7]+1126891415&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[14]+2878612391&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[5]+4237533241&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+V[12]+1700485571&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[3]+2399980690&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[10]+4293915773&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[1]+2240044497&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+V[8]+1873313359&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[15]+4264355552&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[6]+2734768916&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[13]+1309151649&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+V[4]+4149444226&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[11]+3174756917&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[2]+718787259&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(O+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+k&4294967295}s.prototype.v=function(R,b){b===void 0&&(b=R.length);const C=b-this.blockSize,V=this.C;let O=this.h,k=0;for(;k<b;){if(O==0)for(;k<=C;)o(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<b;)if(V[O++]=R.charCodeAt(k++),O==this.blockSize){o(this,V),O=0;break}}else for(;k<b;)if(V[O++]=R[k++],O==this.blockSize){o(this,V),O=0;break}}this.h=O,this.o+=b},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;b=this.o*8;for(var C=R.length-8;C<R.length;++C)R[C]=b&255,b/=256;for(this.v(R),R=Array(16),b=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)R[b++]=this.g[C]>>>V&255;return R};function u(R,b){var C=m;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=b(R)}function f(R,b){this.h=b;const C=[];let V=!0;for(let O=R.length-1;O>=0;O--){const k=R[O]|0;V&&k==b||(C[O]=k,V=!1)}this.g=C}var m={};function p(R){return-128<=R&&R<128?u(R,function(b){return new f([b|0],b<0?-1:0)}):new f([R|0],R<0?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return S;if(R<0)return F(y(-R));const b=[];let C=1;for(let V=0;R>=C;V++)b[V]=R/C|0,C*=4294967296;return new f(b,0)}function E(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return F(E(R.substring(1),b));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(b,8));let V=S;for(let k=0;k<R.length;k+=8){var O=Math.min(8,R.length-k);const w=parseInt(R.substring(k,k+O),b);O<8?(O=y(Math.pow(b,O)),V=V.j(O).add(y(w))):(V=V.j(C),V=V.add(y(w)))}return V}var S=p(0),D=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(Z(this))return-F(this).m();let R=0,b=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);R+=(V>=0?V:4294967296+V)*b,b*=4294967296}return R},r.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if($(this))return"0";if(Z(this))return"-"+F(this).toString(R);const b=y(Math.pow(R,6));var C=this;let V="";for(;;){const O=dt(C,b).g;C=W(C,O.j(b));let k=((C.g.length>0?C.g[0]:C.h)>>>0).toString(R);if(C=O,$(C))return k+V;for(;k.length<6;)k="0"+k;V=k+V}},r.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function $(R){if(R.h!=0)return!1;for(let b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function Z(R){return R.h==-1}r.l=function(R){return R=W(this,R),Z(R)?-1:$(R)?0:1};function F(R){const b=R.g.length,C=[];for(let V=0;V<b;V++)C[V]=~R.g[V];return new f(C,~R.h).add(D)}r.abs=function(){return Z(this)?F(this):this},r.add=function(R){const b=Math.max(this.g.length,R.g.length),C=[];let V=0;for(let O=0;O<=b;O++){let k=V+(this.i(O)&65535)+(R.i(O)&65535),w=(k>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);V=w>>>16,k&=65535,w&=65535,C[O]=w<<16|k}return new f(C,C[C.length-1]&-2147483648?-1:0)};function W(R,b){return R.add(F(b))}r.j=function(R){if($(this)||$(R))return S;if(Z(this))return Z(R)?F(this).j(F(R)):F(F(this).j(R));if(Z(R))return F(this.j(F(R)));if(this.l(B)<0&&R.l(B)<0)return y(this.m()*R.m());const b=this.g.length+R.g.length,C=[];for(var V=0;V<2*b;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let O=0;O<R.g.length;O++){const k=this.i(V)>>>16,w=this.i(V)&65535,Wt=R.i(O)>>>16,$t=R.i(O)&65535;C[2*V+2*O]+=w*$t,at(C,2*V+2*O),C[2*V+2*O+1]+=k*$t,at(C,2*V+2*O+1),C[2*V+2*O+1]+=w*Wt,at(C,2*V+2*O+1),C[2*V+2*O+2]+=k*Wt,at(C,2*V+2*O+2)}for(R=0;R<b;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=b;R<2*b;R++)C[R]=0;return new f(C,0)};function at(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function st(R,b){this.g=R,this.h=b}function dt(R,b){if($(b))throw Error("division by zero");if($(R))return new st(S,S);if(Z(R))return b=dt(F(R),b),new st(F(b.g),F(b.h));if(Z(b))return b=dt(R,F(b)),new st(F(b.g),b.h);if(R.g.length>30){if(Z(R)||Z(b))throw Error("slowDivide_ only works with positive integers.");for(var C=D,V=b;V.l(R)<=0;)C=gt(C),V=gt(V);var O=vt(C,1),k=vt(V,1);for(V=vt(V,2),C=vt(C,2);!$(V);){var w=k.add(V);w.l(R)<=0&&(O=O.add(C),k=w),V=vt(V,1),C=vt(C,1)}return b=W(R,O.j(b)),new st(O,b)}for(O=S;R.l(b)>=0;){for(C=Math.max(1,Math.floor(R.m()/b.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),k=y(C),w=k.j(b);Z(w)||w.l(R)>0;)C-=V,k=y(C),w=k.j(b);$(k)&&(k=D),O=O.add(k),R=W(R,w)}return new st(O,R)}r.B=function(R){return dt(this,R).h},r.and=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)&R.i(V);return new f(C,this.h&R.h)},r.or=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)|R.i(V);return new f(C,this.h|R.h)},r.xor=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)^R.i(V);return new f(C,this.h^R.h)};function gt(R){const b=R.g.length+1,C=[];for(let V=0;V<b;V++)C[V]=R.i(V)<<1|R.i(V-1)>>>31;return new f(C,R.h)}function vt(R,b){const C=b>>5;b%=32;const V=R.g.length-C,O=[];for(let k=0;k<V;k++)O[k]=b>0?R.i(k+C)>>>b|R.i(k+C+1)<<32-b:R.i(k+C);return new f(O,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,sS=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,ts=f}).apply(typeof E0<"u"?E0:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aS,Vl,oS,th,Pm,lS,uS,cS;(function(){var r,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in v))break t;v=v[L]}c=c[c.length-1],A=v[c],g=g(A),g!=A&&g!=null&&t(v,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var v=[],A;for(A in g)Object.prototype.hasOwnProperty.call(g,A)&&v.push([A,g[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,v){return c.call.apply(c.bind,arguments)}function y(c,g,v){return y=p,y.apply(null,arguments)}function E(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,g){function v(){}v.prototype=g.prototype,c.Z=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,L,j){for(var nt=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)nt[bt-2]=arguments[bt];return g.prototype[L].apply(A,nt)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function B(c){const g=c.length;if(g>0){const v=Array(g);for(let A=0;A<g;A++)v[A]=c[A];return v}return[]}function $(c,g){for(let A=1;A<arguments.length;A++){const L=arguments[A];var v=typeof L;if(v=v!="object"?v:L?Array.isArray(L)?"array":v:"null",v=="array"||v=="object"&&typeof L.length=="number"){v=c.length||0;const j=L.length||0;c.length=v+j;for(let nt=0;nt<j;nt++)c[v+nt]=L[nt]}else c.push(L)}}class Z{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function F(c){f.setTimeout(()=>{throw c},0)}function W(){var c=R;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class at{constructor(){this.h=this.g=null}add(g,v){const A=st.get();A.set(g,v),this.h?this.h.next=A:this.g=A,this.h=A}}var st=new Z(()=>new dt,c=>c.reset());class dt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,vt=!1,R=new at,b=()=>{const c=Promise.resolve(void 0);gt=()=>{c.then(C)}};function C(){for(var c;c=W();){try{c.h.call(c.g)}catch(v){F(v)}var g=st;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}vt=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,g),f.removeEventListener("test",v,g)}catch{}return c})();function w(c){return/^[\s\xa0]*$/.test(c)}function Wt(c,g){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}S(Wt,O),Wt.prototype.init=function(c,g){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Wt.Z.h.call(this)},Wt.prototype.h=function(){Wt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),K=0;function it(c,g,v,A,L){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!A,this.ha=L,this.key=++K,this.da=this.fa=!1}function mt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ut(c,g,v){for(const A in c)g.call(v,c[A],A,c)}function Ft(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function M(c){const g={};for(const v in c)g[v]=c[v];return g}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(c,g){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)c[v]=A[v];for(let j=0;j<X.length;j++)v=X[j],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function ot(c){this.src=c,this.g={},this.h=0}ot.prototype.add=function(c,g,v,A,L){const j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);const nt=Rt(c,g,A,L);return nt>-1?(g=c[nt],v||(g.fa=!1)):(g=new it(g,this.src,j,!!A,L),g.fa=v,c.push(g)),g};function Et(c,g){const v=g.type;if(v in c.g){var A=c.g[v],L=Array.prototype.indexOf.call(A,g,void 0),j;(j=L>=0)&&Array.prototype.splice.call(A,L,1),j&&(mt(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Rt(c,g,v,A){for(let L=0;L<c.length;++L){const j=c[L];if(!j.da&&j.listener==g&&j.capture==!!v&&j.ha==A)return L}return-1}var kt="closure_lm_"+(Math.random()*1e6|0),De={};function re(c,g,v,A,L){if(Array.isArray(g)){for(let j=0;j<g.length;j++)re(c,g[j],v,A,L);return null}return v=wo(v),c&&c[$t]?c.J(g,v,m(A)?!!A.capture:!1,L):ds(c,g,v,!1,A,L)}function ds(c,g,v,A,L,j){if(!g)throw Error("Invalid event type");const nt=m(L)?!!L.capture:!!L;let bt=ms(c);if(bt||(c[kt]=bt=new ot(c)),v=bt.add(g,v,A,nt,j),v.proxy)return v;if(A=aa(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)k||(L=nt),L===void 0&&(L=!1),c.addEventListener(g.toString(),A,L);else if(c.attachEvent)c.attachEvent(si(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function aa(){function c(v){return g.call(c.src,c.listener,v)}const g=Ao;return c}function oa(c,g,v,A,L){if(Array.isArray(g))for(var j=0;j<g.length;j++)oa(c,g[j],v,A,L);else A=m(A)?!!A.capture:!!A,v=wo(v),c&&c[$t]?(c=c.i,j=String(g).toString(),j in c.g&&(g=c.g[j],v=Rt(g,v,A,L),v>-1&&(mt(g[v]),Array.prototype.splice.call(g,v,1),g.length==0&&(delete c.g[j],c.h--)))):c&&(c=ms(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Rt(g,v,A,L)),(v=c>-1?g[c]:null)&&la(v))}function la(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[$t])Et(g.i,c);else{var v=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(v,A,c.capture):g.detachEvent?g.detachEvent(si(v),A):g.addListener&&g.removeListener&&g.removeListener(A),(v=ms(g))?(Et(v,c),v.h==0&&(v.src=null,g[kt]=null)):mt(c)}}}function si(c){return c in De?De[c]:De[c]="on"+c}function Ao(c,g){if(c.da)c=!0;else{g=new Wt(g,this);const v=c.listener,A=c.ha||c.src;c.fa&&la(c),c=v.call(A,g)}return c}function ms(c){return c=c[kt],c instanceof ot?c:null}var bo="__closure_events_fn_"+(Math.random()*1e9>>>0);function wo(c){return typeof c=="function"?c:(c[bo]||(c[bo]=function(g){return c.handleEvent(g)}),c[bo])}function ye(){V.call(this),this.i=new ot(this),this.M=this,this.G=null}S(ye,V),ye.prototype[$t]=!0,ye.prototype.removeEventListener=function(c,g,v,A){oa(this,c,g,v,A)};function Ne(c,g){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new O(g,c);else if(g instanceof O)g.target=g.target||c;else{var L=g;g=new O(A,c),rt(g,L)}L=!0;let j,nt;if(v)for(nt=v.length-1;nt>=0;nt--)j=g.g=v[nt],L=hr(j,A,!0,g)&&L;if(j=g.g=c,L=hr(j,A,!0,g)&&L,L=hr(j,A,!1,g)&&L,v)for(nt=0;nt<v.length;nt++)j=g.g=v[nt],L=hr(j,A,!1,g)&&L}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const v=c.g[g];for(let A=0;A<v.length;A++)mt(v[A]);delete c.g[g],c.h--}}this.G=null},ye.prototype.J=function(c,g,v,A){return this.i.add(String(c),g,!1,v,A)},ye.prototype.K=function(c,g,v,A){return this.i.add(String(c),g,!0,v,A)};function hr(c,g,v,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let L=!0;for(let j=0;j<g.length;++j){const nt=g[j];if(nt&&!nt.da&&nt.capture==v){const bt=nt.listener,fe=nt.ha||nt.src;nt.fa&&Et(c.i,nt),L=bt.call(fe,A)!==!1&&L}}return L&&!A.defaultPrevented}function Jh(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:f.setTimeout(c,g||0)}function hu(c){c.g=Jh(()=>{c.g=null,c.i&&(c.i=!1,hu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class tn extends V{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:hu(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(c){V.call(this),this.h=c,this.g={}}S(ps,V);var Ro=[];function Io(c){Ut(c.g,function(g,v){this.g.hasOwnProperty(v)&&la(g)},c),c.g={}}ps.prototype.N=function(){ps.Z.N.call(this),Io(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=f.JSON.stringify,Wh=f.JSON.parse,fu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function du(){}function mu(){}var Hn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ze(){O.call(this,"d")}S(ze,O);function Rn(){O.call(this,"c")}S(Rn,O);var he={},pu=null;function ua(){return pu=pu||new ye}he.Ia="serverreachability";function gu(c){O.call(this,he.Ia,c)}S(gu,O);function ai(c){const g=ua();Ne(g,new gu(g))}he.STAT_EVENT="statevent";function gs(c,g){O.call(this,he.STAT_EVENT,c),this.stat=g}S(gs,O);function _e(c){const g=ua();Ne(g,new gs(g,c))}he.Ja="timingevent";function oi(c,g){O.call(this,he.Ja,c),this.size=g}S(oi,O);function li(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},g)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function tf(c,g,v,A,L,j){c.info(function(){if(c.g)if(j){var nt="",bt=j.split("&");for(let Ht=0;Ht<bt.length;Ht++){var fe=bt[Ht].split("=");if(fe.length>1){const se=fe[0];fe=fe[1];const Nn=se.split("_");nt=Nn.length>=2&&Nn[1]=="type"?nt+(se+"="+fe+"&"):nt+(se+"=redacted&")}}}else nt=null;else nt=j;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+g+`
`+v+`
`+nt})}function yu(c,g,v,A,L,j,nt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+g+`
`+v+`
`+j+" "+nt})}function ui(c,g,v,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ef(c,v)+(A?" "+A:"")})}function ys(c,g){c.info(function(){return"TIMEOUT: "+g})}qn.prototype.info=function(){};function ef(c,g){if(!c.g)return g;if(!g)return null;try{const j=JSON.parse(g);if(j){for(c=0;c<j.length;c++)if(Array.isArray(j[c])){var v=j[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var L=A[0];if(L!="noop"&&L!="stop"&&L!="close")for(let nt=1;nt<A.length;nt++)A[nt]=""}}}}return fr(j)}catch{return g}}var _s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Co={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function vs(){}S(vs,du),vs.prototype.g=function(){return new XMLHttpRequest},Do=new vs;function zi(c){return encodeURIComponent(String(c))}function _u(c){var g=1;c=c.split(":");const v=[];for(;g>0&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function Fn(c,g,v,A){this.j=c,this.i=g,this.l=v,this.S=A||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gn}function Gn(){this.i=null,this.g="",this.h=!1}var ve={},xe={};function ci(c,g,v){c.M=1,c.A=Es(Te(g)),c.u=v,c.R=!0,ca(c,null)}function ca(c,g){c.F=Date.now(),hi(c),c.B=Te(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ma(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Gn,c.g=Vu(c.j,v?g:null,!c.u),c.P>0&&(c.O=new tn(y(c.Y,c,c.g),c.P)),g=c.V,v=c.g,A=c.ba;var L="readystatechange";Array.isArray(L)||(L&&(Ro[0]=L.toString()),L=Ro);for(let j=0;j<L.length;j++){const nt=re(v,L[j],A||g.handleEvent,!1,g.h||g);if(!nt)break;g.g[nt.key]=nt}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),ai(),tf(c.i,c.v,c.B,c.l,c.S,c.u)}Fn.prototype.ba=function(c){c=c.target;const g=this.O;g&&$n(c)==3?g.j():this.Y(c)},Fn.prototype.Y=function(c){try{if(c==this.g)t:{const bt=$n(this.g),fe=this.g.ya(),Ht=this.g.ca();if(!(bt<3)&&(bt!=3||this.g&&(this.h.h||this.g.la()||Be(this.g)))){this.K||bt!=4||fe==7||(fe==8||Ht<=0?ai(3):ai(2)),fi(this);var g=this.g.ca();this.X=g;var v=nf(this);if(this.o=g==200,yu(this.i,this.v,this.B,this.l,this.S,bt,g),this.o){if(this.U&&!this.L){e:{if(this.g){var A,L=this.g;if((A=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(A)){var j=A;break e}}j=null}if(c=j)ui(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,di(this,c);else{this.o=!1,this.m=3,_e(12),mn(this),In(this);break t}}if(this.R){c=!0;let se;for(;!this.K&&this.C<v.length;)if(se=Eu(this,v),se==xe){bt==4&&(this.m=4,_e(14),c=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(se==ve){this.m=4,_e(15),ui(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else ui(this.i,this.l,se,null),di(this,se);if(vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||v.length!=0||this.h.h||(this.m=1,_e(16),c=!1),this.o=this.o&&c,!c)ui(this.i,this.l,v,"[Invalid Chunked Response]"),mn(this),In(this);else if(v.length>0&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.aa&&!nt.P&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Fo(nt),nt.P=!0,_e(11))}}else ui(this.i,this.l,v,null),di(this,v);bt==4&&mn(this),this.o&&!this.K&&(bt==4?Du(this.j,this):(this.o=!1,hi(this)))}else ji(this.g),g==400&&v.indexOf("Unknown SID")>0?(this.m=3,_e(12)):(this.m=0,_e(13)),mn(this),In(this)}}}catch{}finally{}};function nf(c){if(!vu(c))return c.g.la();const g=Be(c.g);if(g==="")return"";let v="";const A=g.length,L=$n(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return mn(c),In(c),"";c.h.i=new f.TextDecoder}for(let j=0;j<A;j++)c.h.h=!0,v+=c.h.i.decode(g[j],{stream:!(L&&j==A-1)});return g.length=0,c.h.g+=v,c.C=0,c.h.g}function vu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Eu(c,g){var v=c.C,A=g.indexOf(`
`,v);return A==-1?xe:(v=Number(g.substring(v,A)),isNaN(v)?ve:(A+=1,A+v>g.length?xe:(g=g.slice(A,A+v),c.C=A+v,g)))}Fn.prototype.cancel=function(){this.K=!0,mn(this)};function hi(c){c.T=Date.now()+c.H,ha(c,c.H)}function ha(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=li(y(c.aa,c),g)}function fi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Fn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ys(this.i,this.B),this.M!=2&&(ai(),_e(17)),mn(this),this.m=2,In(this)):ha(this,this.T-c)};function In(c){c.j.I==0||c.K||Du(c.j,c)}function mn(c){fi(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,Io(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function di(c,g){try{var v=c.j;if(v.I!=0&&(v.g==c||pi(v.h,c))){if(!c.L&&pi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)va(v),Er(v);else break t;Is(v),_e(18)}}else v.xa=L[1],0<v.xa-v.K&&L[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=li(y(v.Va,v),6e3));mi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ti(v,11)}else if((c.L||v.g==c)&&va(v),!w(g))for(L=v.Ba.g.parse(g),g=0;g<L.length;g++){let Ht=L[g];const se=Ht[0];if(!(se<=v.K))if(v.K=se,Ht=Ht[1],v.I==2)if(Ht[0]=="c"){v.M=Ht[1],v.ba=Ht[2];const Nn=Ht[3];Nn!=null&&(v.ka=Nn,v.j.info("VER="+v.ka));const Si=Ht[4];Si!=null&&(v.za=Si,v.j.info("SVER="+v.za));const Qn=Ht[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(A=1.5*Qn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Xn=c.g;if(Xn){const Cs=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cs){var j=A.h;j.g||Cs.indexOf("spdy")==-1&&Cs.indexOf("quic")==-1&&Cs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Mo(j,j.h),j.h=null))}if(A.G){const Ea=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(A.wa=Ea,Gt(A.J,A.G,Ea))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var nt=c;if(A.na=Mu(A,A.L?A.ba:null,A.W),nt.L){Vo(A.h,nt);var bt=nt,fe=A.O;fe&&(bt.H=fe),bt.D&&(fi(bt),hi(bt)),A.g=nt}else Iu(A);v.i.length>0&&Ei(v)}else Ht[0]!="stop"&&Ht[0]!="close"||Ti(v,7);else v.I==3&&(Ht[0]=="stop"||Ht[0]=="close"?Ht[0]=="stop"?Ti(v,7):Ho(v):Ht[0]!="noop"&&v.l&&v.l.qa(Ht),v.A=0)}}ai(4)}catch{}}var Ee=class{constructor(c,g){this.g=c,this.map=g}};function No(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function mi(c){return c.h?1:c.g?c.g.size:0}function pi(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Mo(c,g){c.g?c.g.add(g):c.h=g}function Vo(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}No.prototype.cancel=function(){if(this.i=xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function xo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.G);return g}return B(c.i)}var Tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(c,g){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let L,j=null;A>=0?(L=c[v].substring(0,A),j=c[v].substring(A+1)):L=c[v],g(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function pn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof pn?(this.l=c.l,ke(this,c.j),this.o=c.o,this.g=c.g,dr(this,c.u),this.h=c.h,ko(this,wu(c.i)),this.m=c.m):c&&(g=String(c).match(Tu))?(this.l=!1,ke(this,g[1]||"",!0),this.o=gi(g[2]||""),this.g=gi(g[3]||"",!0),dr(this,g[4]),this.h=gi(g[5]||"",!0),ko(this,g[6]||"",!0),this.m=gi(g[7]||"")):(this.l=!1,this.i=new pr(null,this.l))}pn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Ts(g,da,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ts(g,da,!0),"@"),c.push(zi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ts(v,v.charAt(0)=="/"?Lo:Su,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ts(v,Au)),c.join("")},pn.prototype.resolve=function(c){const g=Te(this);let v=!!c.j;v?ke(g,c.j):v=!!c.o,v?g.o=c.o:v=!!c.g,v?g.g=c.g:v=c.u!=null;var A=c.h;if(v)dr(g,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var L=g.h.lastIndexOf("/");L!=-1&&(A=g.h.slice(0,L+1)+A)}if(L=A,L==".."||L==".")A="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){A=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let nt=0;nt<L.length;){const bt=L[nt++];bt=="."?A&&nt==L.length&&j.push(""):bt==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),A&&nt==L.length&&j.push("")):(j.push(bt),A=!0)}A=j.join("/")}else A=L}return v?g.h=A:v=c.i.toString()!=="",v?ko(g,wu(c.i)):v=!!c.m,v&&(g.m=c.m),g};function Te(c){return new pn(c)}function ke(c,g,v){c.j=v?gi(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function dr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function ko(c,g,v){g instanceof pr?(c.i=g,pa(c.i,c.l)):(v||(g=Ts(g,mr)),c.i=new pr(g,c.l))}function Gt(c,g,v){c.i.set(g,v)}function Es(c){return Gt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function gi(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ts(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,an),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function an(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var da=/[#\/\?@]/g,Su=/[#\?:]/g,Lo=/[#\?]/g,mr=/[#\?@]/g,Au=/#/g;function pr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function on(c){c.g||(c.g=new Map,c.h=0,c.i&&fa(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=pr.prototype,r.add=function(c,g){on(this),this.i=null,c=gr(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function bu(c,g){on(c),g=gr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Po(c,g){return on(c),g=gr(c,g),c.g.has(g)}r.forEach=function(c,g){on(this),this.g.forEach(function(v,A){v.forEach(function(L){c.call(g,L,A,this)},this)},this)};function Uo(c,g){on(c);let v=[];if(typeof g=="string")Po(c,g)&&(v=v.concat(c.g.get(gr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)v=v.concat(c[g]);return v}r.set=function(c,g){return on(this),this.i=null,c=gr(this,c),Po(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=Uo(this,c),c.length>0?String(c[0]):g):g};function ma(c,g,v){bu(c,g),v.length>0&&(c.i=null,c.g.set(gr(c,g),B(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let A=0;A<g.length;A++){var v=g[A];const L=zi(v);v=Uo(this,v);for(let j=0;j<v.length;j++){let nt=L;v[j]!==""&&(nt+="="+zi(v[j])),c.push(nt)}}return this.i=c.join("&")};function wu(c){const g=new pr;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function gr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function pa(c,g){g&&!c.j&&(on(c),c.i=null,c.g.forEach(function(v,A){const L=A.toLowerCase();A!=L&&(bu(this,A),ma(this,L,v))},c)),c.j=g}function Kn(c,g){const v=new qn;if(f.Image){const A=new Image;A.onload=E(Cn,v,"TestLoadImage: loaded",!0,g,A),A.onerror=E(Cn,v,"TestLoadImage: error",!1,g,A),A.onabort=E(Cn,v,"TestLoadImage: abort",!1,g,A),A.ontimeout=E(Cn,v,"TestLoadImage: timeout",!1,g,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function zo(c,g){const v=new qn,A=new AbortController,L=setTimeout(()=>{A.abort(),Cn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(L),j.ok?Cn(v,"TestPingServer: ok",!0,g):Cn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Cn(v,"TestPingServer: error",!1,g)})}function Cn(c,g,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function yr(){this.g=new fu}function yi(c){this.i=c.Sb||null,this.h=c.ab||!1}S(yi,du),yi.prototype.g=function(){return new Ss(this.i,this.h)};function Ss(c,g){ye.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ss,ye),r=Ss.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,Yn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||f).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ga(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function ga(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?_r(this):Yn(this),this.readyState==3&&ga(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,_r(this))},r.Na=function(c){this.g&&(this.response=c,_r(this))},r.ga=function(){this.g&&_r(this)};function _r(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Yn(c)}r.setRequestHeader=function(c,g){this.A.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function Yn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dn(c){let g="";return Ut(c,function(v,A){g+=A,g+=":",g+=v,g+=`\r
`}),g}function As(c,g,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=Dn(v),typeof c=="string"?v!=null&&zi(v):Gt(c,g,v))}function Qt(c){ye.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Qt,ye);var _i=/^https?$/i,Bo=["POST","PUT"];r=Qt.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,g,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=D(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){bs(this,j);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())v.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(j=>j.toLowerCase()=="content-type"),L=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Bo,g,void 0)>=0)||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,nt]of v)this.g.setRequestHeader(j,nt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(j){bs(this,j)}};function bs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,jo(c),Bi(c)}function jo(c){c.A||(c.A=!0,Ne(c,"complete"),Ne(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ne(this,"complete"),Ne(this,"abort"),Bi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),Qt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ws(this):this.Xa())},r.Xa=function(){ws(this)};function ws(c){if(c.h&&typeof u<"u"){if(c.v&&$n(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ne(c,"readystatechange"),$n(c)==4){c.h=!1;try{const j=c.ca();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var A;if(A=j===0){let nt=String(c.D).match(Tu)[1]||null;!nt&&f.self&&f.self.location&&(nt=f.self.location.protocol.slice(0,-1)),A=!_i.test(nt?nt.toLowerCase():"")}v=A}if(v)Ne(c,"complete"),Ne(c,"success");else{c.o=6;try{var L=$n(c)>2?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.ca()+"]",jo(c)}}finally{Bi(c)}}}}function Bi(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,g||Ne(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(c){return c.g?c.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Wh(g)}};function Be(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ji(c){const g={};c=(c.g&&$n(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(w(c[A]))continue;var v=_u(c[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const j=g[L]||[];g[L]=j,j.push(v)}Ft(g,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function vr(c){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vi("baseRetryDelayMs",5e3,c),this.Za=vi("retryDelaySeedMs",1e4,c),this.Ta=vi("forwardChannelMaxRetries",2,c),this.va=vi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new No(c&&c.concurrentRequestLimit),this.Ba=new yr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=vr.prototype,r.ka=8,r.I=1,r.connect=function(c,g,v,A){_e(0),this.W=c,this.H=g||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=Mu(this,null,this.W),Ei(this)};function Ho(c){if(ya(c),c.I==3){var g=c.V++,v=Te(c.J);if(Gt(v,"SID",c.M),Gt(v,"RID",g),Gt(v,"TYPE","terminate"),Rs(c,v),g=new Fn(c,c.j,g),g.M=2,g.A=Es(Te(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(g.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=g.A,v=!0),v||(g.g=Vu(g.j,null),g.g.ea(g.A)),g.F=Date.now(),hi(g)}Ou(c)}function Er(c){c.g&&(Fo(c),c.g.cancel(),c.g=null)}function ya(c){Er(c),c.v&&(f.clearTimeout(c.v),c.v=null),va(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ei(c){if(!Oo(c.h)&&!c.m){c.m=!0;var g=c.Ea;gt||b(),vt||(gt(),vt=!0),R.add(g,c),c.D=0}}function _a(c,g){return mi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=li(y(c.Ea,c,g),Nu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const L=new Fn(this,this.j,c);let j=this.o;if(this.U&&(j?(j=M(j),rt(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,g>4096){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=Ru(this,L,g),v=Te(this.J),Gt(v,"RID",c),Gt(v,"CVER",22),this.G&&Gt(v,"X-HTTP-Session-Id",this.G),Rs(this,v),j&&(this.R?g="headers="+zi(Dn(j))+"&"+g:this.u&&As(v,this.u,j)),Mo(this.h,L),this.Ra&&Gt(v,"TYPE","init"),this.S?(Gt(v,"$req",g),Gt(v,"SID","null"),L.U=!0,ci(L,v,null)):ci(L,v,g),this.I=2}}else this.I==3&&(c?qo(this,c):this.i.length==0||Oo(this.h)||qo(this))};function qo(c,g){var v;g?v=g.l:v=c.V++;const A=Te(c.J);Gt(A,"SID",c.M),Gt(A,"RID",v),Gt(A,"AID",c.K),Rs(c,A),c.u&&c.o&&As(A,c.u,c.o),v=new Fn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Ru(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Mo(c.h,v),ci(v,A,g)}function Rs(c,g){c.H&&Ut(c.H,function(v,A){Gt(g,A,v)}),c.l&&Ut({},function(v,A){Gt(g,A,v)})}function Ru(c,g,v){v=Math.min(c.i.length,v);const A=c.l?y(c.l.Ka,c.l,c):null;t:{var L=c.i;let bt=-1;for(;;){const fe=["count="+v];bt==-1?v>0?(bt=L[0].g,fe.push("ofs="+bt)):bt=0:fe.push("ofs="+bt);let Ht=!0;for(let se=0;se<v;se++){var j=L[se].g;const Nn=L[se].map;if(j-=bt,j<0)bt=Math.max(0,L[se].g-100),Ht=!1;else try{j="req"+j+"_"||"";try{var nt=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Si,Qn]of nt){let Xn=Qn;m(Qn)&&(Xn=fr(Qn)),fe.push(j+Si+"="+encodeURIComponent(Xn))}}catch(Si){throw fe.push(j+"type="+encodeURIComponent("_badmap")),Si}}catch{A&&A(Nn)}}if(Ht){nt=fe.join("&");break t}}nt=void 0}return c=c.i.splice(0,v),g.G=c,nt}function Iu(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;gt||b(),vt||(gt(),vt=!0),R.add(g,c),c.A=0}}function Is(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=li(y(c.Da,c),Nu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=li(y(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_e(10),Er(this),Cu(this))};function Fo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Cu(c){c.g=new Fn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=Te(c.na);Gt(g,"RID","rpc"),Gt(g,"SID",c.M),Gt(g,"AID",c.K),Gt(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Gt(g,"TO",c.ia),Gt(g,"TYPE","xmlhttp"),Rs(c,g),c.u&&c.o&&As(g,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Es(Te(g)),v.u=null,v.R=!0,ca(v,c)}r.Va=function(){this.C!=null&&(this.C=null,Er(this),Is(this),_e(19))};function va(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Du(c,g){var v=null;if(c.g==g){va(c),Fo(c),c.g=null;var A=2}else if(pi(c.h,g))v=g.G,Vo(c.h,g),A=1;else return;if(c.I!=0){if(g.o)if(A==1){v=g.u?g.u.length:0,g=Date.now()-g.F;var L=c.D;A=ua(),Ne(A,new oi(A,v)),Ei(c)}else Iu(c);else if(L=g.m,L==3||L==0&&g.X>0||!(A==1&&_a(c,g)||A==2&&Is(c)))switch(v&&v.length>0&&(g=c.h,g.i=g.i.concat(v)),L){case 1:Ti(c,5);break;case 4:Ti(c,10);break;case 3:Ti(c,6);break;default:Ti(c,2)}}}function Nu(c,g){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*g}function Ti(c,g){if(c.j.info("Error code "+g),g==2){var v=y(c.bb,c),A=c.Ua;const L=!A;A=new pn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ke(A,"https"),Es(A),L?Kn(A.toString(),v):zo(A.toString(),v)}else _e(2);c.I=0,c.l&&c.l.pa(g),Ou(c),ya(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function Ou(c){if(c.I=0,c.ja=[],c.l){const g=xo(c.h);(g.length!=0||c.i.length!=0)&&($(c.ja,g),$(c.ja,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.oa()}}function Mu(c,g,v){var A=v instanceof pn?Te(v):new pn(v);if(A.g!="")g&&(A.g=g+"."+A.g),dr(A,A.u);else{var L=f.location;A=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;const j=new pn(null);A&&ke(j,A),g&&(j.g=g),L&&dr(j,L),v&&(j.h=v),A=j}return v=c.G,g=c.wa,v&&g&&Gt(A,v,g),Gt(A,"VER",c.ka),Rs(c,A),A}function Vu(c,g,v){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new Qt(new yi({ab:v})):new Qt(c.ma),g.Fa(c.L),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}r=xu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Tr(){}Tr.prototype.g=function(c,g){return new en(c,g)};function en(c,g){ye.call(this),this.g=new vr(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!w(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!w(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Hi(this)}S(en,ye),en.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Ho(this.g)},en.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=fr(c),c=v);g.i.push(new Ee(g.Ya++,c)),g.I==3&&Ei(g)},en.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,en.Z.N.call(this)};function ku(c){ze.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const v in g){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}S(ku,ze);function Lu(){Rn.call(this),this.status=1}S(Lu,Rn);function Hi(c){this.g=c}S(Hi,xu),Hi.prototype.ra=function(){Ne(this.g,"a")},Hi.prototype.qa=function(c){Ne(this.g,new ku(c))},Hi.prototype.pa=function(c){Ne(this.g,new Lu)},Hi.prototype.oa=function(){Ne(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,cS=function(){return new Tr},uS=function(){return ua()},lS=he,Pm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,th=_s,Co.COMPLETE="complete",oS=Co,mu.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",ye.prototype.listen=ye.prototype.J,Vl=mu,Qt.prototype.listenOnce=Qt.prototype.K,Qt.prototype.getLastError=Qt.prototype.Ha,Qt.prototype.getLastErrorCode=Qt.prototype.ya,Qt.prototype.getStatus=Qt.prototype.ca,Qt.prototype.getResponseJson=Qt.prototype.La,Qt.prototype.getResponseText=Qt.prototype.la,Qt.prototype.send=Qt.prototype.ea,Qt.prototype.setWithCredentials=Qt.prototype.Fa,aS=Qt}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Eo="12.12.0";function yN(r){Eo=r}/**
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
 */const Js=new Oh("@firebase/firestore");function Xa(){return Js.logLevel}function lt(r,...t){if(Js.logLevel<=Mt.DEBUG){const n=t.map(Ip);Js.debug(`Firestore (${Eo}): ${r}`,...n)}}function ur(r,...t){if(Js.logLevel<=Mt.ERROR){const n=t.map(Ip);Js.error(`Firestore (${Eo}): ${r}`,...n)}}function Ws(r,...t){if(Js.logLevel<=Mt.WARN){const n=t.map(Ip);Js.warn(`Firestore (${Eo}): ${r}`,...n)}}function Ip(r){if(typeof r=="string")return r;try{return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function At(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,hS(r,s,n)}function hS(r,t,n){let s=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ur(s),new Error(s)}function le(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||hS(t,o,s)}function Pt(r,t){return r}/**
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
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends jn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class es{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class fS{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Qe.UNAUTHENTICATED)))}shutdown(){}}class vN{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class EN{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){le(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new es;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new es,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;t.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new es)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string",31837,{l:s}),new fS(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return le(t===null||typeof t=="string",2055,{h:t}),new Qe(t)}}class TN{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class SN{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new TN(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Qe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class T0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AN{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){le(this.o===void 0,3512);const s=u=>{u.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,lt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new T0(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new T0(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bN(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Cp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=bN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function xt(r,t){return r<t?-1:r>t?1:0}function Um(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=t.charAt(s);if(o!==u)return gm(o)===gm(u)?xt(o,u):gm(o)?1:-1}return xt(r.length,t.length)}const wN=55296,RN=57343;function gm(r){const t=r.charCodeAt(0);return t>=wN&&t<=RN}function co(r,t,n){return r.length===t.length&&r.every(((s,o)=>n(s,t[o])))}/**
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
 */const S0="__name__";class Ii{constructor(t,n,s){n===void 0?n=0:n>t.length&&At(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&At(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ii.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=Ii.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return xt(t.length,n.length)}static compareSegments(t,n){const s=Ii.isNumericId(t),o=Ii.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ii.extractNumericId(t).compare(Ii.extractNumericId(n)):Um(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ts.fromString(t.substring(4,t.length-2))}}class ie extends Ii{construct(t,n,s){return new ie(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ht(et.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new ie(n)}static emptyPath(){return new ie([])}}const IN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Ii{construct(t,n,s){return new rn(t,n,s)}static isValidIdentifier(t){return IN.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===S0}static keyField(){return new rn([S0])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ht(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new ht(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ht(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ht(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rn(n)}static emptyPath(){return new rn([])}}/**
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
 */class pt{constructor(t){this.path=t}static fromPath(t){return new pt(ie.fromString(t))}static fromName(t){return new pt(ie.fromString(t).popFirst(5))}static empty(){return new pt(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pt(new ie(t.slice()))}}/**
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
 */function dS(r,t,n){if(!n)throw new ht(et.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function CN(r,t,n,s){if(t===!0&&s===!0)throw new ht(et.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function A0(r){if(!pt.isDocumentKey(r))throw new ht(et.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function b0(r){if(pt.isDocumentKey(r))throw new ht(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function DN(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function NN(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":At(12329,{type:typeof r})}function Kl(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ht(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=NN(r);throw new ht(et.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */function Ce(r,t){const n={typeString:r};return t&&(n.value=t),n}function su(r,t){if(!DN(r))throw new ht(et.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ht(et.INVALID_ARGUMENT,n);return!0}/**
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
 */const w0=-62135596800,R0=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(t){return Ie.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*R0);return new Ie(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ht(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ht(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<w0)throw new ht(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ht(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/R0}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(su(t,Ie._jsonSchema))return new Ie(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-w0;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Ce("string",Ie._jsonSchemaVersion),seconds:Ce("number"),nanoseconds:Ce("number")};/**
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
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new Ie(0,0))}static max(){return new St(new Ie(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yl=-1;function ON(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=St.fromTimestamp(s===1e9?new Ie(n+1,0):new Ie(n,s));return new as(o,pt.empty(),t)}function MN(r){return new as(r.readTime,r.key,Yl)}class as{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new as(St.min(),pt.empty(),Yl)}static max(){return new as(St.max(),pt.empty(),Yl)}}function VN(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=pt.comparator(r.documentKey,t.documentKey),n!==0?n:xt(r.largestBatchId,t.largestBatchId))}/**
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
 */const xN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Uh(r){if(r.code!==et.FAILED_PRECONDITION||r.message!==xN)throw r;lt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&At(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new J(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):J.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):J.reject(n)}static resolve(t){return new J(((n,s)=>{n(t)}))}static reject(t){return new J(((n,s)=>{s(t)}))}static waitFor(t){return new J(((n,s)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(p=>s(p)))})),f=!0,u===o&&n()}))}static or(t){let n=J.resolve(!1);for(const s of t)n=n.next((o=>o?J.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new J(((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next((E=>{f[y]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(t,n){return new J(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function LN(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class zh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}zh.ce=-1;/**
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
 */const PN=-1;function Bh(r){return r==null}function zm(r){return r===0&&1/r==-1/0}/**
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
 */const mS="";function UN(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=I0(t)),t=zN(r.get(n),t);return I0(t)}function zN(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case mS:n+="";break;default:n+=u}}return n}function I0(r){return r+mS+""}/**
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
 */function C0(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function au(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function BN(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ge{constructor(t,n){this.comparator=t,this.root=n||Ge.EMPTY}insert(t,n){return new ge(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new ge(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qc(this.root,t,this.comparator,!1)}getReverseIterator(){return new qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qc(this.root,t,this.comparator,!0)}}class qc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Ge.RED,this.left=o??Ge.EMPTY,this.right=u??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Ge(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Ge.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw At(43730,{key:this.key,value:this.value});if(this.right.isRed())throw At(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw At(27949);return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw At(57766)}get value(){throw At(16141)}get color(){throw At(16727)}get left(){throw At(29726)}get right(){throw At(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Ge(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(t){this.comparator=t,this.data=new ge(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new D0(this.data.getIterator())}getIteratorFrom(t){return new D0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Ve(this.comparator);return n.data=t,n}}class D0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qr{constructor(t){this.fields=t,t.sort(rn.comparator)}static empty(){return new Qr([])}unionWith(t){let n=new Ve(rn.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Qr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return co(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class pS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new pS("Invalid base64 string: "+u):u}})(t);return new Ke(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Ke(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const jN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(r){if(le(!!r,39018),typeof r=="string"){let t=0;const n=jN.exec(r);if(le(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ls(r){return typeof r=="string"?Ke.fromBase64String(r):Ke.fromUint8Array(r)}/**
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
 */const gS="server_timestamp",yS="__type__",_S="__previous_value__",vS="__local_write_time__";function Dp(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[yS])==null?void 0:s.stringValue)===gS}function jh(r){const t=r.mapValue.fields[_S];return Dp(t)?jh(t):t}function $l(r){const t=os(r.mapValue.fields[vS].timestampValue);return new Ie(t.seconds,t.nanos)}/**
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
 */class HN{constructor(t,n,s,o,u,f,m,p,y,E,S){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E,this.apiKey=S}}const yh="(default)";class Ql{constructor(t,n){this.projectId=t,this.database=n||yh}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database===yh}isEqual(t){return t instanceof Ql&&t.projectId===this.projectId&&t.database===this.database}}function qN(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ht(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(r.options.projectId,t)}/**
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
 */const FN="__type__",GN="__max__",Fc={mapValue:{}},KN="__vector__",Bm="value";function us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Dp(r)?4:$N(r)?9007199254740991:YN(r)?10:11:At(28295,{value:r})}function Vi(r,t){if(r===t)return!0;const n=us(r);if(n!==us(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return $l(r).isEqual($l(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=os(o.timestampValue),m=os(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(o,u){return ls(o.bytesValue).isEqual(ls(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)})(r,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pe(o.doubleValue),m=pe(u.doubleValue);return f===m?zm(f)===zm(m):isNaN(f)&&isNaN(m)}return!1})(r,t);case 9:return co(r.arrayValue.values||[],t.arrayValue.values||[],Vi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(C0(f)!==C0(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Vi(f[p],m[p])))return!1;return!0})(r,t);default:return At(52216,{left:r})}}function Xl(r,t){return(r.values||[]).find((n=>Vi(n,t)))!==void 0}function ho(r,t){if(r===t)return 0;const n=us(r),s=us(t);if(n!==s)return xt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=pe(u.integerValue||u.doubleValue),p=pe(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(r,t);case 3:return N0(r.timestampValue,t.timestampValue);case 4:return N0($l(r),$l(t));case 5:return Um(r.stringValue,t.stringValue);case 6:return(function(u,f){const m=ls(u),p=ls(f);return m.compareTo(p)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=xt(m[y],p[y]);if(E!==0)return E}return xt(m.length,p.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=xt(pe(u.latitude),pe(f.latitude));return m!==0?m:xt(pe(u.longitude),pe(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return O0(r.arrayValue,t.arrayValue);case 10:return(function(u,f){var D,B,$,Z;const m=u.fields||{},p=f.fields||{},y=(D=m[Bm])==null?void 0:D.arrayValue,E=(B=p[Bm])==null?void 0:B.arrayValue,S=xt((($=y==null?void 0:y.values)==null?void 0:$.length)||0,((Z=E==null?void 0:E.values)==null?void 0:Z.length)||0);return S!==0?S:O0(y,E)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Fc.mapValue&&f===Fc.mapValue)return 0;if(u===Fc.mapValue)return 1;if(f===Fc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const D=Um(p[S],E[S]);if(D!==0)return D;const B=ho(m[p[S]],y[E[S]]);if(B!==0)return B}return xt(p.length,E.length)})(r.mapValue,t.mapValue);default:throw At(23264,{he:n})}}function N0(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return xt(r,t);const n=os(r),s=os(t),o=xt(n.seconds,s.seconds);return o!==0?o:xt(n.nanos,s.nanos)}function O0(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ho(n[o],s[o]);if(u)return u}return xt(n.length,s.length)}function fo(r){return jm(r)}function jm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=os(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return ls(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return pt.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=jm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${jm(n.fields[f])}`;return o+"}"})(r.mapValue):At(61005,{value:r})}function eh(r){switch(us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=jh(r);return t?16+eh(t):16;case 5:return 2*r.stringValue.length;case 6:return ls(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+eh(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return au(s.fields,((u,f)=>{o+=u.length+eh(f)})),o})(r.mapValue);default:throw At(13486,{value:r})}}function Hm(r){return!!r&&"integerValue"in r}function Np(r){return!!r&&"arrayValue"in r}function M0(r){return!!r&&"nullValue"in r}function V0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ym(r){return!!r&&"mapValue"in r}function YN(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[FN])==null?void 0:s.stringValue)===KN}function Ul(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return au(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Ul(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ul(r.arrayValue.values[n]);return t}return{...r}}function $N(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===GN}/**
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
 */class Ci{constructor(t){this.value=t}static empty(){return new Ci({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!ym(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ul(n)}setAll(t){let n=rn.emptyPath(),s={},o=[];t.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ul(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());ym(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Vi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];ym(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){au(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new Ci(Ul(this.value))}}/**
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
 */class Xe{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Xe(t,0,St.min(),St.min(),St.min(),Ci.empty(),0)}static newFoundDocument(t,n,s,o){return new Xe(t,1,n,St.min(),s,o,0)}static newNoDocument(t,n){return new Xe(t,2,n,St.min(),St.min(),Ci.empty(),0)}static newUnknownDocument(t,n){return new Xe(t,3,n,St.min(),St.min(),Ci.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ci.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _h{constructor(t,n){this.position=t,this.inclusive=n}}function x0(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=pt.comparator(pt.fromName(f.referenceValue),n.key):s=ho(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function k0(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Vi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class vh{constructor(t,n="asc"){this.field=t,this.dir=n}}function QN(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ES{}class Me extends ES{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new ZN(t,n,s):n==="array-contains"?new tO(t,s):n==="in"?new eO(t,s):n==="not-in"?new nO(t,s):n==="array-contains-any"?new iO(t,s):new Me(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new JN(t,s):new WN(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return At(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xi extends ES{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new xi(t,n)}matches(t){return TS(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function TS(r){return r.op==="and"}function SS(r){return XN(r)&&TS(r)}function XN(r){for(const t of r.filters)if(t instanceof xi)return!1;return!0}function qm(r){if(r instanceof Me)return r.field.canonicalString()+r.op.toString()+fo(r.value);if(SS(r))return r.filters.map((t=>qm(t))).join(",");{const t=r.filters.map((n=>qm(n))).join(",");return`${r.op}(${t})`}}function AS(r,t){return r instanceof Me?(function(s,o){return o instanceof Me&&s.op===o.op&&s.field.isEqual(o.field)&&Vi(s.value,o.value)})(r,t):r instanceof xi?(function(s,o){return o instanceof xi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&AS(f,o.filters[m])),!0):!1})(r,t):void At(19439)}function bS(r){return r instanceof Me?(function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`})(r):r instanceof xi?(function(n){return n.op.toString()+" {"+n.getFilters().map(bS).join(" ,")+"}"})(r):"Filter"}class ZN extends Me{constructor(t,n,s){super(t,n,s),this.key=pt.fromName(s.referenceValue)}matches(t){const n=pt.comparator(t.key,this.key);return this.matchesComparison(n)}}class JN extends Me{constructor(t,n){super(t,"in",n),this.keys=wS("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class WN extends Me{constructor(t,n){super(t,"not-in",n),this.keys=wS("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function wS(r,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map((s=>pt.fromName(s.referenceValue)))}class tO extends Me{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Np(n)&&Xl(n.arrayValue,this.value)}}class eO extends Me{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class nO extends Me{constructor(t,n){super(t,"not-in",n)}matches(t){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xl(this.value.arrayValue,n)}}class iO extends Me{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Np(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Xl(this.value.arrayValue,s)))}}/**
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
 */class rO{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function L0(r,t=null,n=[],s=[],o=null,u=null,f=null){return new rO(r,t,n,s,o,u,f)}function Op(r){const t=Pt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>qm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Bh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>fo(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>fo(s))).join(",")),t.Te=n}return t.Te}function Mp(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!QN(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!AS(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!k0(r.startAt,t.startAt)&&k0(r.endAt,t.endAt)}function Fm(r){return pt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Hh{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function sO(r,t,n,s,o,u,f,m){return new Hh(r,t,n,s,o,u,f,m)}function Vp(r){return new Hh(r)}function P0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function aO(r){return pt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function oO(r){return r.collectionGroup!==null}function zl(r){const t=Pt(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ve(rn.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new vh(u,s))})),n.has(rn.keyField().canonicalString())||t.Ee.push(new vh(rn.keyField(),s))}return t.Ee}function Mi(r){const t=Pt(r);return t.Ie||(t.Ie=lO(t,zl(r))),t.Ie}function lO(r,t){if(r.limitType==="F")return L0(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new vh(o.field,u)}));const n=r.endAt?new _h(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new _h(r.startAt.position,r.startAt.inclusive):null;return L0(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function Gm(r,t,n){return new Hh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function qh(r,t){return Mp(Mi(r),Mi(t))&&r.limitType===t.limitType}function RS(r){return`${Op(Mi(r))}|lt:${r.limitType}`}function Za(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>bS(o))).join(", ")}]`),Bh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>fo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>fo(o))).join(",")),`Target(${s})`})(Mi(r))}; limitType=${r.limitType})`}function Fh(r,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,o){for(const u of zl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,t)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=x0(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,zl(s),o)||s.endAt&&!(function(f,m,p){const y=x0(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,zl(s),o))})(r,t)}function uO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function IS(r){return(t,n)=>{let s=!1;for(const o of zl(r)){const u=cO(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function cO(r,t,n){const s=r.field.isKeyField()?pt.comparator(t.key,n.key):(function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?ho(p,y):At(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return At(19790,{direction:r.dir})}}/**
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
 */class sa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){au(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return BN(this.inner)}size(){return this.innerSize}}/**
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
 */const hO=new ge(pt.comparator);function cs(){return hO}const CS=new ge(pt.comparator);function xl(...r){let t=CS;for(const n of r)t=t.insert(n.key,n);return t}function fO(r){let t=CS;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Ks(){return Bl()}function DS(){return Bl()}function Bl(){return new sa((r=>r.toString()),((r,t)=>r.isEqual(t)))}const dO=new Ve(pt.comparator);function zt(...r){let t=dO;for(const n of r)t=t.add(n);return t}const mO=new Ve(xt);function pO(){return mO}/**
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
 */function gO(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zm(t)?"-0":t}}function yO(r){return{integerValue:""+r}}/**
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
 */class Gh{constructor(){this._=void 0}}function _O(r,t,n){return r instanceof Km?(function(o,u){const f={fields:{[yS]:{stringValue:gS},[vS]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Dp(u)&&(u=jh(u)),u&&(f.fields[_S]=u),{mapValue:f}})(n,t):r instanceof Eh?NS(r,t):r instanceof Th?OS(r,t):(function(o,u){const f=EO(o,u),m=U0(f)+U0(o.Ae);return Hm(f)&&Hm(o.Ae)?yO(m):gO(o.serializer,m)})(r,t)}function vO(r,t,n){return r instanceof Eh?NS(r,t):r instanceof Th?OS(r,t):n}function EO(r,t){return r instanceof Ym?(function(s){return Hm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class Km extends Gh{}class Eh extends Gh{constructor(t){super(),this.elements=t}}function NS(r,t){const n=MS(t);for(const s of r.elements)n.some((o=>Vi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Th extends Gh{constructor(t){super(),this.elements=t}}function OS(r,t){let n=MS(t);for(const s of r.elements)n=n.filter((o=>!Vi(o,s)));return{arrayValue:{values:n}}}class Ym extends Gh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function U0(r){return pe(r.integerValue||r.doubleValue)}function MS(r){return Np(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function TO(r,t){return r.field.isEqual(t.field)&&(function(s,o){return s instanceof Eh&&o instanceof Eh||s instanceof Th&&o instanceof Th?co(s.elements,o.elements,Vi):s instanceof Ym&&o instanceof Ym?Vi(s.Ae,o.Ae):s instanceof Km&&o instanceof Km})(r.transform,t.transform)}class Ys{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ys}static exists(t){return new Ys(void 0,t)}static updateTime(t){return new Ys(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nh(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class xp{}function VS(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new AO(r.key,Ys.none()):new kp(r.key,r.data,Ys.none());{const n=r.data,s=Ci.empty();let o=new Ve(rn.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Kh(r.key,s,new Qr(o.toArray()),Ys.none())}}function SO(r,t,n){r instanceof kp?(function(o,u,f){const m=o.value.clone(),p=B0(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,t,n):r instanceof Kh?(function(o,u,f){if(!nh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=B0(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(xS(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function jl(r,t,n,s){return r instanceof kp?(function(u,f,m,p){if(!nh(u.precondition,f))return m;const y=u.value.clone(),E=j0(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,t,n,s):r instanceof Kh?(function(u,f,m,p){if(!nh(u.precondition,f))return m;const y=j0(u.fieldTransforms,p,f),E=f.data;return E.setAll(xS(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,t,n,s):(function(u,f,m){return nh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,t,n)}function z0(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,((u,f)=>TO(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class kp extends xp{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Kh extends xp{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function xS(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function B0(r,t,n){const s=new Map;le(r.length===n.length,32656,{Ve:n.length,de:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,vO(f,m,n[o]))}return s}function j0(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,_O(u,f,t))}return s}class AO extends xp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bO{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&SO(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=jl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=jl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=DS();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=VS(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(St.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),zt())}isEqual(t){return this.batchId===t.batchId&&co(this.mutations,t.mutations,((n,s)=>z0(n,s)))&&co(this.baseMutations,t.baseMutations,((n,s)=>z0(n,s)))}}/**
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
 */class wO{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class RO{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Re,Lt;function kS(r){if(r===void 0)return ur("GRPC error has no .code"),et.UNKNOWN;switch(r){case Re.OK:return et.OK;case Re.CANCELLED:return et.CANCELLED;case Re.UNKNOWN:return et.UNKNOWN;case Re.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case Re.INTERNAL:return et.INTERNAL;case Re.UNAVAILABLE:return et.UNAVAILABLE;case Re.UNAUTHENTICATED:return et.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case Re.NOT_FOUND:return et.NOT_FOUND;case Re.ALREADY_EXISTS:return et.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return et.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case Re.ABORTED:return et.ABORTED;case Re.OUT_OF_RANGE:return et.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return et.UNIMPLEMENTED;case Re.DATA_LOSS:return et.DATA_LOSS;default:return At(39323,{code:r})}}(Lt=Re||(Re={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IO(){return new TextEncoder}/**
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
 */const CO=new ts([4294967295,4294967295],0);function H0(r){const t=IO().encode(r),n=new sS;return n.update(t),new Uint8Array(n.digest())}function q0(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new ts([n,s],0),new ts([o,u],0)]}class Lp{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new kl(`Invalid padding: ${n}`);if(s<0)throw new kl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new kl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new kl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=ts.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(ts.fromNumber(s)));return o.compare(CO)===1&&(o=new ts([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=H0(t),[s,o]=q0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Lp(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const n=H0(t),[s,o]=q0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class kl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,ou.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Yh(St.min(),o,new ge(xt),cs(),zt())}}class ou{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new ou(s,n,zt(),zt(),zt())}}/**
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
 */class ih{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class LS{constructor(t,n){this.targetId=t,this.Ce=n}}class PS{constructor(t,n,s=Ke.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class F0{constructor(){this.ve=0,this.Fe=G0(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=zt(),n=zt(),s=zt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:At(38017,{changeType:u})}})),new ou(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=G0()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class DO{constructor(t){this.Ge=t,this.ze=new Map,this.je=cs(),this.Je=Gc(),this.He=Gc(),this.Ze=new ge(xt)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:At(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Fm(u))if(s===0){const f=new pt(u.path);this.et(n,f,Xe.newNoDocument(f,St.min()))}else le(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(t),p=m?this.ct(m,t,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ls(s).toUint8Array()}catch(p){if(p instanceof pS)return Ws("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Lp(f,o,u)}catch(p){return Ws(p instanceof kl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Fm(m.target)){const p=new pt(m.target.path);this.Et(p).has(f)||this.It(f,p)||this.et(f,p,Xe.newNoDocument(p,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=zt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Yh(t,n,this.Ze,this.je,s);return this.je=cs(),this.Je=Gc(),this.He=Gc(),this.Ze=new ge(xt),o}Ye(t,n){if(!this.rt(t))return;const s=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.It(t,n)?o.Ke(n,1):o.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new F0,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new Ve(xt),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Ve(xt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||lt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new F0),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Gc(){return new ge(pt.comparator)}function G0(){return new ge(pt.comparator)}const NO={asc:"ASCENDING",desc:"DESCENDING"},OO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MO={and:"AND",or:"OR"};class VO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function $m(r,t){return r.useProto3Json||Bh(t)?t:{value:t}}function xO(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kO(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function so(r){return le(!!r,49232),St.fromTimestamp((function(n){const s=os(n);return new Ie(s.seconds,s.nanos)})(r))}function LO(r,t){return Qm(r,t).canonicalString()}function Qm(r,t){const n=(function(o){return new ie(["projects",o.projectId,"databases",o.database])})(r).child("documents");return t===void 0?n:n.child(t)}function US(r){const t=ie.fromString(r);return le(qS(t),10190,{key:t.toString()}),t}function _m(r,t){const n=US(t);if(n.get(1)!==r.databaseId.projectId)throw new ht(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ht(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pt(BS(n))}function zS(r,t){return LO(r.databaseId,t)}function PO(r){const t=US(r);return t.length===4?ie.emptyPath():BS(t)}function K0(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function BS(r){return le(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function UO(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:At(39313,{state:y})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(le(E===void 0||typeof E=="string",58123),Ke.fromBase64String(E||"")):(le(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ke.fromUint8Array(E||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(y){const E=y.code===void 0?et.UNKNOWN:kS(y.code);return new ht(E,y.message||"")})(f);n=new PS(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=_m(r,s.document.name),u=so(s.document.updateTime),f=s.document.createTime?so(s.document.createTime):St.min(),m=new Ci({mapValue:{fields:s.document.fields}}),p=Xe.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new ih(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=_m(r,s.document),u=s.readTime?so(s.readTime):St.min(),f=Xe.newNoDocument(o,u),m=s.removedTargetIds||[];n=new ih([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=_m(r,s.document),u=s.removedTargetIds||[];n=new ih([],u,o,null)}else{if(!("filter"in t))return At(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new RO(o,u),m=s.targetId;n=new LS(m,f)}}return n}function zO(r,t){return{documents:[zS(r,t.path)]}}function BO(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=zS(r,o);const u=(function(y){if(y.length!==0)return HS(xi.create(y,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((E=>(function(D){return{field:Ja(D.field),direction:qO(D.dir)}})(E)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=$m(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(t.endAt)),{ft:n,parent:o}}function jO(r){let t=PO(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){le(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(S){const D=jS(S);return D instanceof xi&&SS(D)?D.getFilters():[D]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((D=>(function($){return new vh(Wa($.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(D)))})(n.orderBy));let m=null;n.limit&&(m=(function(S){let D;return D=typeof S=="object"?S.value:S,Bh(D)?null:D})(n.limit));let p=null;n.startAt&&(p=(function(S){const D=!!S.before,B=S.values||[];return new _h(B,D)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const D=!S.before,B=S.values||[];return new _h(B,D)})(n.endAt)),sO(t,o,f,u,m,"F",p,y)}function HO(r,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return At(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function jS(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Wa(n.unaryFilter.field);return Me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Wa(n.unaryFilter.field);return Me.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Wa(n.unaryFilter.field);return Me.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Wa(n.unaryFilter.field);return Me.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return At(61313);default:return At(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Me.create(Wa(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return At(58110);default:return At(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return xi.create(n.compositeFilter.filters.map((s=>jS(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return At(1026)}})(n.compositeFilter.op))})(r):At(30097,{filter:r})}function qO(r){return NO[r]}function FO(r){return OO[r]}function GO(r){return MO[r]}function Ja(r){return{fieldPath:r.canonicalString()}}function Wa(r){return rn.fromServerFormat(r.fieldPath)}function HS(r){return r instanceof Me?(function(n){if(n.op==="=="){if(V0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NAN"}};if(M0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(V0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NAN"}};if(M0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ja(n.field),op:FO(n.op),value:n.value}}})(r):r instanceof xi?(function(n){const s=n.getFilters().map((o=>HS(o)));return s.length===1?s[0]:{compositeFilter:{op:GO(n.op),filters:s}}})(r):At(54877,{filter:r})}function qS(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Xr{constructor(t,n,s,o,u=St.min(),f=St.min(),m=Ke.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Xr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class KO{constructor(t){this.yt=t}}function YO(r){const t=jO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Gm(t,t.limit,"L"):t}/**
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
 */class $O{constructor(){this.bn=new QO}addToCollectionParentIndex(t,n){return this.bn.add(n),J.resolve()}getCollectionParents(t,n){return J.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return J.resolve()}deleteFieldIndex(t,n){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,n){return J.resolve()}getDocumentsMatchingTarget(t,n){return J.resolve(null)}getIndexType(t,n){return J.resolve(0)}getFieldIndexes(t,n){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,n){return J.resolve(as.min())}getMinOffsetFromCollectionGroup(t,n){return J.resolve(as.min())}updateCollectionGroup(t,n,s){return J.resolve()}updateIndexEntries(t,n){return J.resolve()}}class QO{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ve(ie.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ve(ie.comparator)).toArray()}}/**
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
 */const Y0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},FS=41943040;class dn{static withCacheSize(t){return new dn(t,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(FS,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class mo{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new mo(0)}static ar(){return new mo(-1)}}/**
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
 */const $0="LruGarbageCollector",XO=1048576;function Q0([r,t],[n,s]){const o=xt(r,n);return o===0?xt(t,s):o}class ZO{constructor(t){this.Pr=t,this.buffer=new Ve(Q0),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Q0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JO{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){lt($0,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){To(n)?lt($0,"Ignoring IndexedDB error during garbage collection: ",n):await Uh(n)}await this.Ar(3e5)}))}}class WO{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return J.resolve(zh.ce);const s=new ZO(n);return this.Vr.forEachTarget(t,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(t,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.Vr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(lt("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Y0)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Y0):this.gr(t,n)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(t,s,n)))).next((S=>(u=S,p=Date.now(),this.removeOrphanedDocuments(t,s)))).next((S=>(y=Date.now(),Xa()<=Mt.DEBUG&&lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function t5(r,t){return new WO(r,t)}/**
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
 */class e5{constructor(){this.changes=new sa((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class n5{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class i5{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&jl(s.mutation,o,Qr.empty(),Ie.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,zt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=zt()){const o=Ks();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=xl();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Ks();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,zt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(t,n,s,o){let u=cs();const f=Bl(),m=(function(){return Bl()})();return n.forEach(((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Kh)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),jl(E.mutation,y,E.mutation.getFieldMask(),Ie.now())):f.set(y.key,Qr.empty())})),this.recalculateAndSaveOverlays(t,u).next((p=>(p.forEach(((y,E)=>f.set(y,E))),n.forEach(((y,E)=>m.set(y,new n5(E,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(t,n){const s=Bl();let o=new ge(((f,m)=>f-m)),u=zt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Qr.empty();E=m.applyToLocalView(y,E),s.set(p,E);const S=(o.get(m.batchId)||zt()).add(p);o=o.insert(m.batchId,S)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,S=DS();E.forEach((D=>{if(!u.has(D)){const B=VS(n.get(D),s.get(D));B!==null&&S.set(D,B),u=u.add(D)}})),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return J.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return aO(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):oO(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):J.resolve(Ks());let m=Yl,p=u;return f.next((y=>J.forEach(y,((E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?J.resolve():this.remoteDocumentCache.getEntry(t,E).next((D=>{p=p.insert(E,D)}))))).next((()=>this.populateOverlays(t,y,u))).next((()=>this.computeViews(t,p,y,zt()))).next((E=>({batchId:m,changes:fO(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pt(n)).next((s=>{let o=xl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=xl();return this.indexManager.getCollectionParents(t,u).next((m=>J.forEach(m,(p=>{const y=(function(S,D){return new Hh(D,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next((E=>{E.forEach(((S,D)=>{f=f.insert(S,D)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Xe.newInvalidDocument(E)))}));let m=xl();return f.forEach(((p,y)=>{const E=u.get(p);E!==void 0&&jl(E.mutation,y,Qr.empty(),Ie.now()),Fh(n,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class r5{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return J.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:so(o.createTime)}})(n)),J.resolve()}getNamedQuery(t,n){return J.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,(function(o){return{name:o.name,query:YO(o.bundledQuery),readTime:so(o.readTime)}})(n)),J.resolve()}}/**
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
 */class s5{constructor(){this.overlays=new ge(pt.comparator),this.Lr=new Map}getOverlay(t,n){return J.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ks();return J.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),J.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),J.resolve()}getOverlaysForCollection(t,n,s){const o=Ks(),u=n.length+1,f=new pt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return J.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ge(((y,E)=>y-E));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Ks(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Ks(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,E)=>m.set(y,E))),!(m.size()>=o)););return J.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new wO(n,s));let u=this.Lr.get(n);u===void 0&&(u=zt(),this.Lr.set(n,u)),this.Lr.set(n,u.add(s.key))}}/**
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
 */class a5{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,J.resolve()}}/**
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
 */class Pp{constructor(){this.kr=new Ve(Pe.qr),this.Kr=new Ve(Pe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const s=new Pe(t,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Wr(new Pe(t,n))}Qr(t,n){t.forEach((s=>this.removeReference(s,n)))}Gr(t){const n=new pt(new ie([])),s=new Pe(n,t),o=new Pe(n,t+1),u=[];return this.Kr.forEachInRange([s,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new pt(new ie([])),s=new Pe(n,t),o=new Pe(n,t+1);let u=zt();return this.Kr.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Pe(t,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Pe{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return pt.comparator(t.key,n.key)||xt(t.Jr,n.Jr)}static Ur(t,n){return xt(t.Jr,n.Jr)||pt.comparator(t.key,n.key)}}/**
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
 */class o5{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ve(Pe.qr)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new bO(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Hr=this.Hr.add(new Pe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return J.resolve(f)}lookupMutationBatch(t,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?PN:this.Yn-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Pe(n,0),o=new Pe(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(f=>{const m=this.Zr(f.Jr);u.push(m)})),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ve(xt);return n.forEach((o=>{const u=new Pe(o,0),f=new Pe(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,f],(m=>{s=s.add(m.Jr)}))})),J.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;pt.isDocumentKey(u)||(u=u.child(""));const f=new Pe(new pt(u),0);let m=new Ve(xt);return this.Hr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Jr)),!0)}),f),J.resolve(this.Yr(m))}Yr(t){const n=[];return t.forEach((s=>{const o=this.Zr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return J.forEach(n.mutations,(o=>{const u=new Pe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Hr=s}))}nr(t){}containsKey(t,n){const s=new Pe(n,0),o=this.Hr.firstAfterOrEqual(s);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class l5{constructor(t){this.ti=t,this.docs=(function(){return new ge(pt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(t,n){let s=cs();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xe.newInvalidDocument(o))})),J.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=cs();const f=n.path,m=new pt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||VN(MN(E),s)<=0||(o.has(E.key)||Fh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(t,n,s,o){At(9500)}ni(t,n){return J.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new u5(this)}getSize(t){return J.resolve(this.size)}}class u5 extends e5{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Mr.addEntry(t,o)):this.Mr.removeEntry(s)})),J.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
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
 */class c5{constructor(t){this.persistence=t,this.ri=new sa((n=>Op(n)),Mp),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.ii=0,this.si=new Pp,this.targetCount=0,this.oi=mo._r()}forEachTarget(t,n){return this.ri.forEach(((s,o)=>n(o))),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),J.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new mo(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,J.resolve()}updateTargetData(t,n){return this.lr(n),J.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ri.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),J.waitFor(u).next((()=>o))}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,n){const s=this.ri.get(n)||null;return J.resolve(s)}addMatchingKeys(t,n,s){return this.si.$r(n,s),J.resolve()}removeMatchingKeys(t,n,s){this.si.Qr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),J.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),J.resolve()}getMatchingKeysForTargetId(t,n){const s=this.si.jr(n);return J.resolve(s)}containsKey(t,n){return J.resolve(this.si.containsKey(n))}}/**
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
 */class GS{constructor(t,n){this._i={},this.overlays={},this.ai=new zh(0),this.ui=!1,this.ui=!0,this.ci=new a5,this.referenceDelegate=t(this),this.li=new c5(this),this.indexManager=new $O,this.remoteDocumentCache=(function(o){return new l5(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new KO(n),this.Pi=new r5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new s5,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this._i[t.toKey()];return s||(s=new o5(n,this.referenceDelegate),this._i[t.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,s){lt("MemoryPersistence","Starting transaction:",t);const o=new h5(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(t,n){return J.or(Object.values(this._i).map((s=>()=>s.containsKey(t,n))))}}class h5 extends kN{constructor(t){super(),this.currentSequenceNumber=t}}class Up{constructor(t){this.persistence=t,this.Ri=new Pp,this.Ai=null}static Vi(t){return new Up(t)}get di(){if(this.Ai)return this.Ai;throw At(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),J.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),J.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),J.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,(s=>{const o=pt.fromPath(s);return this.mi(t,o).next((u=>{u||n.removeEntry(o,St.min())}))})).next((()=>(this.Ai=null,n.apply(t))))}updateLimboDocument(t,n){return this.mi(t,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(t){return 0}mi(t,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class Sh{constructor(t,n){this.persistence=t,this.fi=new sa((s=>UN(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=t5(this,n)}static Vi(t,n){return new Sh(t,n)}Ti(){}Ei(t){return J.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}pr(t){let n=0;return this.mr(t,(s=>{n++})).next((()=>n))}mr(t,n){return J.forEach(this.fi,((s,o)=>this.wr(t,s,o).next((u=>u?J.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(t,(f=>this.wr(t,f,n).next((m=>{m||(s++,u.removeEntry(f,St.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),J.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.fi.set(s,t.currentSequenceNumber),J.resolve()}removeReference(t,n,s){return this.fi.set(s,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),J.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=eh(t.data.value)),n}wr(t,n,s){return J.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.fi.get(n);return J.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class zp{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Ts=s,this.Es=o}static Is(t,n){let s=zt(),o=zt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new zp(t,n.fromCache,s,o)}}/**
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
 */class f5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class d5{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return s1()?8:LN(We())>0?6:4})()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.gs(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new f5;return this.ys(t,n,f).next((m=>{if(u.result=m,this.As)return this.ws(t,n,f,m.size)}))})).next((()=>u.result))}ws(t,n,s,o){return s.documentReadCount<this.Vs?(Xa()<=Mt.DEBUG&&lt("QueryEngine","SDK will not create cache indexes for query:",Za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(Xa()<=Mt.DEBUG&&lt("QueryEngine","Query:",Za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Xa()<=Mt.DEBUG&&lt("QueryEngine","The SDK decides to create cache indexes for query:",Za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mi(n))):J.resolve())}gs(t,n){if(P0(n))return J.resolve(null);let s=Mi(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Gm(n,null,"F"),s=Mi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=zt(...u);return this.fs.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,s).next((p=>{const y=this.Ss(n,m);return this.bs(n,y,f,p.readTime)?this.gs(t,Gm(n,null,"F")):this.Ds(t,y,n,p)}))))})))))}ps(t,n,s,o){return P0(n)||o.isEqual(St.min())?J.resolve(null):this.fs.getDocuments(t,s).next((u=>{const f=this.Ss(n,u);return this.bs(n,f,s,o)?J.resolve(null):(Xa()<=Mt.DEBUG&&lt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Za(n)),this.Ds(t,f,n,ON(o,Yl)).next((m=>m)))}))}Ss(t,n){let s=new Ve(IS(t));return n.forEach(((o,u)=>{Fh(t,u)&&(s=s.add(u))})),s}bs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(t,n,s){return Xa()<=Mt.DEBUG&&lt("QueryEngine","Using full collection scan to execute query:",Za(n)),this.fs.getDocumentsMatchingQuery(t,n,as.min(),s)}Ds(t,n,s,o){return this.fs.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Bp="LocalStore",m5=3e8;class p5{constructor(t,n,s,o){this.persistence=t,this.Cs=n,this.serializer=o,this.vs=new ge(xt),this.Fs=new sa((u=>Op(u)),Mp),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(s)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new i5(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.vs)))}}function g5(r,t,n,s){return new p5(r,t,n,s)}async function KS(r,t){const n=Pt(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Os(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=zt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ns:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function YS(r){const t=Pt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.li.getLastRemoteSnapshotVersion(n)))}function y5(r,t){const n=Pt(r),s=t.snapshotVersion;let o=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});o=n.vs;const m=[];t.targetChanges.forEach(((E,S)=>{const D=o.get(S);if(!D)return;m.push(n.li.removeMatchingKeys(u,E.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,E.addedDocuments,S))));let B=D.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?B=B.withResumeToken(Ke.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(S,B),(function(Z,F,W){return Z.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=m5?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(D,B,E)&&m.push(n.li.updateTargetData(u,B))}));let p=cs(),y=zt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(_5(u,f,t.documentUpdates).next((E=>{p=E.Bs,y=E.Ls}))),!s.isEqual(St.min())){const E=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return J.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(n.vs=o,u)))}function _5(r,t,n){let s=zt(),o=zt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=cs();return n.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(St.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):lt(Bp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{Bs:f,Ls:o}}))}function v5(r,t){const n=Pt(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.li.getTargetData(s,t).next((u=>u?(o=u,J.resolve(o)):n.li.allocateTargetId(s).next((f=>(o=new Xr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(t,s.targetId)),s}))}async function Xm(r,t,n){const s=Pt(r),o=s.vs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!To(f))throw f;lt(Bp,`Failed to update sequence numbers for target ${t}: ${f}`)}s.vs=s.vs.remove(t),s.Fs.delete(o.target)}function X0(r,t,n){const s=Pt(r);let o=St.min(),u=zt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,E){const S=Pt(p),D=S.Fs.get(E);return D!==void 0?J.resolve(S.vs.get(D)):S.li.getTargetData(y,E)})(s,f,Mi(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,t,n?o:St.min(),n?u:zt()))).next((m=>(E5(s,uO(t),m),{documents:m,ks:u})))))}function E5(r,t,n){let s=r.Ms.get(t)||St.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(t,s)}class Z0{constructor(){this.activeTargetIds=pO()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class T5{constructor(){this.vo=new Z0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,s){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Z0,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class S5{Mo(t){}shutdown(){}}/**
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
 */const J0="ConnectivityMonitor";class W0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){lt(J0,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){lt(J0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function Zm(){return Kc===null?Kc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Kc++,"0x"+Kc.toString(16)}/**
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
 */const vm="RestConnection",A5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class b5{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===yh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(t,n,s,o,u){const f=Zm(),m=this.Qo(t,n.toUriEncodedString());lt(vm,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,u);const{host:y}=new URL(m),E=na(y);return this.zo(t,m,p,s,E).then((S=>(lt(vm,`Received RPC '${t}' ${f}: `,S),S)),(S=>{throw Ws(vm,`RPC '${t}' ${f} failed with error: `,S,"url: ",m,"request:",s),S}))}jo(t,n,s,o,u,f){return this.Wo(t,n,s,o,u)}Go(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Eo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}Qo(t,n){const s=A5[t];let o=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class w5{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const $e="WebChannelConnection",Nl=(r,t,n)=>{r.listen(t,(s=>{try{n(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class ao extends b5{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ao.c_){const t=uS();Nl(t,lS.STAT_EVENT,(n=>{n.stat===Pm.PROXY?lt($e,"STAT_EVENT: detected buffering proxy"):n.stat===Pm.NOPROXY&&lt($e,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(t,n,s,o,u){const f=Zm();return new Promise(((m,p)=>{const y=new aS;y.setWithCredentials(!0),y.listenOnce(oS.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case th.NO_ERROR:const S=y.getResponseJson();lt($e,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),m(S);break;case th.TIMEOUT:lt($e,`RPC '${t}' ${f} timed out`),p(new ht(et.DEADLINE_EXCEEDED,"Request time out"));break;case th.HTTP_ERROR:const D=y.getStatus();if(lt($e,`RPC '${t}' ${f} failed with status:`,D,"response text:",y.getResponseText()),D>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const $=B==null?void 0:B.error;if($&&$.status&&$.message){const Z=(function(W){const at=W.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf(at)>=0?at:et.UNKNOWN})($.status);p(new ht(Z,$.message))}else p(new ht(et.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ht(et.UNAVAILABLE,"Connection failed."));break;default:At(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{lt($e,`RPC '${t}' ${f} completed.`)}}));const E=JSON.stringify(o);lt($e,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)}))}T_(t,n,s){const o=Zm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,n,s),m.encodeInitMessageHeaders=!0;const y=u.join("");lt($e,`Creating RPC '${t}' stream ${o}: ${y}`,m);const E=f.createWebChannel(y,m);this.E_(E);let S=!1,D=!1;const B=new w5({Jo:$=>{D?lt($e,`Not sending because RPC '${t}' stream ${o} is closed:`,$):(S||(lt($e,`Opening RPC '${t}' stream ${o} transport.`),E.open(),S=!0),lt($e,`RPC '${t}' stream ${o} sending:`,$),E.send($))},Ho:()=>E.close()});return Nl(E,Vl.EventType.OPEN,(()=>{D||(lt($e,`RPC '${t}' stream ${o} transport opened.`),B.i_())})),Nl(E,Vl.EventType.CLOSE,(()=>{D||(D=!0,lt($e,`RPC '${t}' stream ${o} transport closed`),B.o_(),this.I_(E))})),Nl(E,Vl.EventType.ERROR,($=>{D||(D=!0,Ws($e,`RPC '${t}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),B.o_(new ht(et.UNAVAILABLE,"The operation could not be completed")))})),Nl(E,Vl.EventType.MESSAGE,($=>{var Z;if(!D){const F=$.data[0];le(!!F,16349);const W=F,at=(W==null?void 0:W.error)||((Z=W[0])==null?void 0:Z.error);if(at){lt($e,`RPC '${t}' stream ${o} received error:`,at);const st=at.status;let dt=(function(R){const b=Re[R];if(b!==void 0)return kS(b)})(st),gt=at.message;st==="NOT_FOUND"&&gt.includes("database")&&gt.includes("does not exist")&&gt.includes(this.databaseId.database)&&Ws(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),dt===void 0&&(dt=et.INTERNAL,gt="Unknown error status: "+st+" with message "+at.message),D=!0,B.o_(new ht(dt,gt)),E.close()}else lt($e,`RPC '${t}' stream ${o} received:`,F),B.__(F)}})),ao.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter((n=>n===t))}Go(t,n,s){super.Go(t,n,s),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cS()}}/**
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
 */function R5(r){return new ao(r)}function Em(){return typeof document<"u"?document:null}/**
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
 */function $S(r){return new VO(r,!0)}/**
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
 */ao.c_=!1;class QS{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Ci=t,this.timerId=n,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&lt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const tE="PersistentStream";class I5{constructor(t,n,s,o,u,f,m,p){this.Ci=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new QS(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===et.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===et.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new ht(et.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return lt(tE,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget((()=>this.D_===t?n():(lt(tE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class C5 extends I5{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=UO(this.serializer,t),s=(function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?so(f.readTime):St.min()})(t);return this.listener.H_(n,s)}Z_(t){const n={};n.database=K0(this.serializer),n.addTarget=(function(u,f){let m;const p=f.target;if(m=Fm(p)?{documents:zO(u,p)}:{query:BO(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=kO(u,f.resumeToken);const y=$m(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(St.min())>0){m.readTime=xO(u,f.snapshotVersion.toTimestamp());const y=$m(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,t);const s=HO(this.serializer,t);s&&(n.labels=s),this.q_(n)}X_(t){const n={};n.database=K0(this.serializer),n.removeTarget=t,this.q_(n)}}/**
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
 */class D5{}class N5 extends D5{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ht(et.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(t,Qm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ht(et.UNKNOWN,u.toString())}))}jo(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.jo(t,Qm(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ht(et.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function O5(r,t,n,s){return new N5(r,t,n,s)}class M5{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):lt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const po="RemoteStore";class V5{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{uu(this)&&(lt(po,"Restarting streams for network reachability change."),await(async function(p){const y=Pt(p);y.Ia.add(4),await lu(y),y.Va.set("Unknown"),y.Ia.delete(4),await $h(y)})(this))}))})),this.Va=new M5(s,o)}}async function $h(r){if(uu(r))for(const t of r.Ra)await t(!0)}async function lu(r){for(const t of r.Ra)await t(!1)}function XS(r,t){const n=Pt(r);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Fp(n)?qp(n):So(n).O_()&&Hp(n,t))}function jp(r,t){const n=Pt(r),s=So(n);n.Ea.delete(t),s.O_()&&ZS(n,t),n.Ea.size===0&&(s.O_()?s.L_():uu(n)&&n.Va.set("Unknown"))}function Hp(r,t){if(r.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}So(r).Z_(t)}function ZS(r,t){r.da.$e(t),So(r).X_(t)}function qp(r){r.da=new DO({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ea.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),So(r).start(),r.Va.ua()}function Fp(r){return uu(r)&&!So(r).x_()&&r.Ea.size>0}function uu(r){return Pt(r).Ia.size===0}function JS(r){r.da=void 0}async function x5(r){r.Va.set("Online")}async function k5(r){r.Ea.forEach(((t,n)=>{Hp(r,t)}))}async function L5(r,t){JS(r),Fp(r)?(r.Va.ha(t),qp(r)):r.Va.set("Unknown")}async function P5(r,t,n){if(r.Va.set("Online"),t instanceof PS&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ea.delete(m),o.da.removeTarget(m))})(r,t)}catch(s){lt(po,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await eE(r,s)}else if(t instanceof ih?r.da.Xe(t):t instanceof LS?r.da.st(t):r.da.tt(t),!n.isEqual(St.min()))try{const s=await YS(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.da.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ea.get(y);E&&u.Ea.set(y,E.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const E=u.Ea.get(p);if(!E)return;u.Ea.set(p,E.withResumeToken(Ke.EMPTY_BYTE_STRING,E.snapshotVersion)),ZS(u,p);const S=new Xr(E.target,p,y,E.sequenceNumber);Hp(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){lt(po,"Failed to raise snapshot:",s),await eE(r,s)}}async function eE(r,t,n){if(!To(t))throw t;r.Ia.add(1),await lu(r),r.Va.set("Offline"),n||(n=()=>YS(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{lt(po,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await $h(r)}))}async function nE(r,t){const n=Pt(r);n.asyncQueue.verifyOperationInProgress(),lt(po,"RemoteStore received new credentials");const s=uu(n);n.Ia.add(3),await lu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await $h(n)}async function U5(r,t){const n=Pt(r);t?(n.Ia.delete(2),await $h(n)):t||(n.Ia.add(2),await lu(n),n.Va.set("Unknown"))}function So(r){return r.ma||(r.ma=(function(n,s,o){const u=Pt(n);return u.sa(),new C5(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:x5.bind(null,r),Yo:k5.bind(null,r),t_:L5.bind(null,r),H_:P5.bind(null,r)}),r.Ra.push((async t=>{t?(r.ma.B_(),Fp(r)?qp(r):r.Va.set("Unknown")):(await r.ma.stop(),JS(r))}))),r.ma}/**
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
 */class Gp{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new Gp(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function WS(r,t){if(ur("AsyncQueue",`${t}: ${r}`),To(r))return new ht(et.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class oo{static emptySet(t){return new oo(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||pt.comparator(n.key,s.key):(n,s)=>pt.comparator(n.key,s.key),this.keyedMap=xl(),this.sortedSet=new ge(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof oo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new oo;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class iE{constructor(){this.ga=new ge(pt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):At(63341,{Vt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class go{constructor(t,n,s,o,u,f,m,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new go(t,n,oo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class z5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class B5{constructor(){this.queries=rE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Pt(n),u=o.queries;o.queries=rE(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new ht(et.ABORTED,"Firestore shutting down"))}}function rE(){return new sa((r=>RS(r)),qh)}async function tA(r,t){const n=Pt(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new z5,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=WS(f,`Initialization of query '${Za(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&Kp(n)}async function eA(r,t){const n=Pt(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function j5(r,t){const n=Pt(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Kp(n)}function H5(r,t,n){const s=Pt(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function Kp(r){r.Ca.forEach((t=>{t.next()}))}var Jm,sE;(sE=Jm||(Jm={})).Ma="default",sE.Cache="cache";class nA{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new go(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Jm.Cache}}/**
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
 */class iA{constructor(t){this.key=t}}class rA{constructor(t){this.key=t}}class q5{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=zt(),this.mutatedKeys=zt(),this.eu=IS(t),this.tu=new oo(this.eu)}get nu(){return this.Za}ru(t,n){const s=n?n.iu:new iE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((E,S)=>{const D=o.get(E),B=Fh(this.query,S)?S:null,$=!!D&&this.mutatedKeys.has(D.key),Z=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let F=!1;D&&B?D.data.isEqual(B.data)?$!==Z&&(s.track({type:3,doc:B}),F=!0):this.su(D,B)||(s.track({type:2,doc:B}),F=!0,(p&&this.eu(B,p)>0||y&&this.eu(B,y)<0)&&(m=!0)):!D&&B?(s.track({type:0,doc:B}),F=!0):D&&!B&&(s.track({type:1,doc:D}),F=!0,(p||y)&&(m=!0)),F&&(B?(f=f.add(B),u=Z?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,bs:m,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((E,S)=>(function(B,$){const Z=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return At(20277,{Vt:F})}};return Z(B)-Z($)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,f.length!==0||y?{snapshot:new go(this.query,t.tu,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=zt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const n=[];return t.forEach((s=>{this.Ya.has(s)||n.push(new rA(s))})),this.Ya.forEach((s=>{t.has(s)||n.push(new iA(s))})),n}cu(t){this.Za=t.ks,this.Ya=zt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yp="SyncEngine";class F5{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class G5{constructor(t){this.key=t,this.hu=!1}}class K5{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new sa((m=>RS(m)),qh),this.Eu=new Map,this.Iu=new Set,this.Ru=new ge(pt.comparator),this.Au=new Map,this.Vu=new Pp,this.du={},this.mu=new Map,this.fu=mo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Y5(r,t,n=!0){const s=uA(r);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await sA(s,t,n,!0),o}async function $5(r,t){const n=uA(r);await sA(n,t,!0,!1)}async function sA(r,t,n,s){const o=await v5(r.localStore,Mi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await Q5(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&XS(r.remoteStore,o),m}async function Q5(r,t,n,s,o){r.pu=(S,D,B)=>(async function(Z,F,W,at){let st=F.view.ru(W);st.bs&&(st=await X0(Z.localStore,F.query,!1).then((({documents:R})=>F.view.ru(R,st))));const dt=at&&at.targetChanges.get(F.targetId),gt=at&&at.targetMismatches.get(F.targetId)!=null,vt=F.view.applyChanges(st,Z.isPrimaryClient,dt,gt);return oE(Z,F.targetId,vt.au),vt.snapshot})(r,S,D,B);const u=await X0(r.localStore,t,!0),f=new q5(t,u.ks),m=f.ru(u.documents),p=ou.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);oE(r,n,y.au);const E=new F5(t,n,f);return r.Tu.set(t,E),r.Eu.has(n)?r.Eu.get(n).push(t):r.Eu.set(n,[t]),y.snapshot}async function X5(r,t,n){const s=Pt(r),o=s.Tu.get(t),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((f=>!qh(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Xm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&jp(s.remoteStore,o.targetId),Wm(s,o.targetId)})).catch(Uh)):(Wm(s,o.targetId),await Xm(s.localStore,o.targetId,!0))}async function Z5(r,t){const n=Pt(r),s=n.Tu.get(t),o=n.Eu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),jp(n.remoteStore,s.targetId))}async function aA(r,t){const n=Pt(r);try{const s=await y5(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(le(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?le(f.hu,14607):o.removedDocuments.size>0&&(le(f.hu,42227),f.hu=!1))})),await lA(n,s,t)}catch(s){await Uh(s)}}function aE(r,t,n){const s=Pt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Pt(f);p.onlineState=m;let y=!1;p.queries.forEach(((E,S)=>{for(const D of S.Sa)D.va(m)&&(y=!0)})),y&&Kp(p)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function J5(r,t,n){const s=Pt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new ge(pt.comparator);f=f.insert(u,Xe.newNoDocument(u,St.min()));const m=zt().add(u),p=new Yh(St.min(),new Map,new ge(xt),f,m);await aA(s,p),s.Ru=s.Ru.remove(u),s.Au.delete(t),$p(s)}else await Xm(s.localStore,t,!1).then((()=>Wm(s,t,n))).catch(Uh)}function Wm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Eu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Eu.delete(t),r.isPrimaryClient&&r.Vu.Gr(t).forEach((s=>{r.Vu.containsKey(s)||oA(r,s)}))}function oA(r,t){r.Iu.delete(t.path.canonicalString());const n=r.Ru.get(t);n!==null&&(jp(r.remoteStore,n),r.Ru=r.Ru.remove(t),r.Au.delete(n),$p(r))}function oE(r,t,n){for(const s of n)s instanceof iA?(r.Vu.addReference(s.key,t),W5(r,s)):s instanceof rA?(lt(Yp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,t),r.Vu.containsKey(s.key)||oA(r,s.key)):At(19791,{wu:s})}function W5(r,t){const n=t.key,s=n.path.canonicalString();r.Ru.get(n)||r.Iu.has(s)||(lt(Yp,"New document in limbo: "+n),r.Iu.add(s),$p(r))}function $p(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const n=new pt(ie.fromString(t)),s=r.fu.next();r.Au.set(s,new G5(n)),r.Ru=r.Ru.insert(n,s),XS(r.remoteStore,new Xr(Mi(Vp(n.path)),s,"TargetPurposeLimboResolution",zh.ce))}}async function lA(r,t,n){const s=Pt(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,t,n).then((y=>{var E;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(y){o.push(y);const S=zp.Is(p.targetId,y);u.push(S)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,y){const E=Pt(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>J.forEach(y,(D=>J.forEach(D.Ts,(B=>E.persistence.referenceDelegate.addReference(S,D.targetId,B))).next((()=>J.forEach(D.Es,(B=>E.persistence.referenceDelegate.removeReference(S,D.targetId,B)))))))))}catch(S){if(!To(S))throw S;lt(Bp,"Failed to update sequence numbers: "+S)}for(const S of y){const D=S.targetId;if(!S.fromCache){const B=E.vs.get(D),$=B.snapshotVersion,Z=B.withLastLimboFreeSnapshotVersion($);E.vs=E.vs.insert(D,Z)}}})(s.localStore,u))}async function tM(r,t){const n=Pt(r);if(!n.currentUser.isEqual(t)){lt(Yp,"User change. New user:",t.toKey());const s=await KS(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new ht(et.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await lA(n,s.Ns)}}function eM(r,t){const n=Pt(r),s=n.Au.get(t);if(s&&s.hu)return zt().add(s.key);{let o=zt();const u=n.Eu.get(t);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function uA(r){const t=Pt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=aA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eM.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=J5.bind(null,t),t.Pu.H_=j5.bind(null,t.eventManager),t.Pu.yu=H5.bind(null,t.eventManager),t}class Ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$S(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return g5(this.persistence,new d5,t.initialUser,this.serializer)}Cu(t){return new GS(Up.Vi,this.serializer)}Du(t){return new T5}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ah.provider={build:()=>new Ah};class nM extends Ah{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){le(this.persistence.referenceDelegate instanceof Sh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new JO(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new GS((s=>Sh.Vi(s,n)),this.serializer)}}class tp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>aE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tM.bind(null,this.syncEngine),await U5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new B5})()}createDatastore(t){const n=$S(t.databaseInfo.databaseId),s=R5(t.databaseInfo);return O5(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,m){return new V5(s,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(n=>aE(this.syncEngine,n,0)),(function(){return W0.v()?new W0:new S5})())}createSyncEngine(t,n){return(function(o,u,f,m,p,y,E){const S=new K5(o,u,f,m,p,y);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await(async function(o){const u=Pt(o);lt(po,"RemoteStore shutting down."),u.Ia.add(5),await lu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}tp.provider={build:()=>new tp};/**
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
 */class cA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ur("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */const hs="FirestoreClient";class iM{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=Cp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{lt(hs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(lt(hs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=WS(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function Tm(r,t){r.asyncQueue.verifyOperationInProgress(),lt(hs,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await KS(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function lE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await rM(r);lt(hs,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>nE(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>nE(t.remoteStore,o))),r._onlineComponents=t}async function rM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){lt(hs,"Using user provided OfflineComponentProvider");try{await Tm(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===et.FAILED_PRECONDITION||o.code===et.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Tm(r,new Ah)}}else lt(hs,"Using default OfflineComponentProvider"),await Tm(r,new nM(void 0));return r._offlineComponents}async function sM(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(lt(hs,"Using user provided OnlineComponentProvider"),await lE(r,r._uninitializedComponentsProvider._online)):(lt(hs,"Using default OnlineComponentProvider"),await lE(r,new tp))),r._onlineComponents}async function hA(r){const t=await sM(r),n=t.eventManager;return n.onListen=Y5.bind(null,t.syncEngine),n.onUnlisten=X5.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=$5.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Z5.bind(null,t.syncEngine),n}function aM(r,t,n={}){const s=new es;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new cA({next:D=>{E.Nu(),f.enqueueAndForget((()=>eA(u,S)));const B=D.docs.has(m);!B&&D.fromCache?y.reject(new ht(et.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&D.fromCache&&p&&p.source==="server"?y.reject(new ht(et.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(D)},error:D=>y.reject(D)}),S=new nA(Vp(m.path),E,{includeMetadataChanges:!0,qa:!0});return tA(u,S)})(await hA(r),r.asyncQueue,t,n,s))),s.promise}function oM(r,t,n={}){const s=new es;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new cA({next:D=>{E.Nu(),f.enqueueAndForget((()=>eA(u,S))),D.fromCache&&p.source==="server"?y.reject(new ht(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(D)},error:D=>y.reject(D)}),S=new nA(m,E,{includeMetadataChanges:!0,qa:!0});return tA(u,S)})(await hA(r),r.asyncQueue,t,n,s))),s.promise}/**
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
 */function fA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const lM="ComponentProvider",uE=new Map;function uM(r,t,n,s,o){return new HN(r,t,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,fA(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const dA="firestore.googleapis.com",cE=!0;class hE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ht(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dA,this.ssl=cE}else this.host=t.host,this.ssl=t.ssl??cE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=FS;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<XO)throw new ht(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}CN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fA(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ht(et.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ht(et.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ht(et.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ht(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _N;switch(s.type){case"firstParty":return new SN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ht(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=uE.get(n);s&&(lt(lM,"Removing Datastore"),uE.delete(n),s.terminate())})(this),Promise.resolve()}}function cM(r,t,n,s={}){var y;r=Kl(r,Qh);const o=na(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${t}:${n}`;o&&Nh(`https://${m}`),u.host!==dA&&u.host!==m&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!ss(p,f)&&(r._setSettings(p),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Qe.MOCK_USER;else{E=$E(s.mockUserToken,(y=r._app)==null?void 0:y.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new ht(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Qe(D)}r._authCredentials=new vN(new fS(E,S))}}/**
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
 */class Xh{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Xh(this.firestore,t,this._query)}}class Ze{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ze(this.firestore,t,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(su(n,Ze._jsonSchema))return new Ze(t,s||null,new pt(ie.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Ce("string",Ze._jsonSchemaVersion),referencePath:Ce("string")};class ns extends Xh{constructor(t,n,s){super(t,n,Vp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ze(this.firestore,null,new pt(t))}withConverter(t){return new ns(this.firestore,t,this._path)}}function hM(r,t,...n){if(r=Ue(r),dS("collection","path",t),r instanceof Qh){const s=ie.fromString(t,...n);return b0(s),new ns(r,null,s)}{if(!(r instanceof Ze||r instanceof ns))throw new ht(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return b0(s),new ns(r.firestore,null,s)}}function fM(r,t,...n){if(r=Ue(r),arguments.length===1&&(t=Cp.newId()),dS("doc","path",t),r instanceof Qh){const s=ie.fromString(t,...n);return A0(s),new Ze(r,null,new pt(s))}{if(!(r instanceof Ze||r instanceof ns))throw new ht(et.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return A0(s),new Ze(r.firestore,r instanceof ns?r.converter:null,new pt(s))}}/**
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
 */const fE="AsyncQueue";class dE{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new QS(this,"async_queue_retry"),this._c=()=>{const s=Em();s&&lt(fE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Em();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Em();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new es;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!To(t))throw t;lt(fE,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",mE(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=Gp.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&At(47125,{Pc:mE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function mE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Qp extends Qh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new dE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dE(t),this._firestoreClient=void 0,await t}}}function dM(r,t){const n=typeof r=="object"?r:eu(),s=typeof r=="string"?r:yh,o=cr(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=hp("firestore");u&&cM(o,...u)}return o}function mA(r){if(r._terminated)throw new ht(et.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||mM(r),r._firestoreClient}function mM(r){var s,o,u,f;const t=r._freezeSettings(),n=uM(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,t);r._componentsProvider||(u=t.localCache)!=null&&u._offlineComponentProvider&&((f=t.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new iM(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(r._componentsProvider))}/**
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
 */class Di{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Di(Ke.fromBase64String(t))}catch(n){throw new ht(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Di(Ke.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Di._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(su(t,Di._jsonSchema))return Di.fromBase64String(t.bytes)}}Di._jsonSchemaVersion="firestore/bytes/1.0",Di._jsonSchema={type:Ce("string",Di._jsonSchemaVersion),bytes:Ce("string")};/**
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
 */class pA{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ht(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class is{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ht(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ht(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:is._jsonSchemaVersion}}static fromJSON(t){if(su(t,is._jsonSchema))return new is(t.latitude,t.longitude)}}is._jsonSchemaVersion="firestore/geoPoint/1.0",is._jsonSchema={type:Ce("string",is._jsonSchemaVersion),latitude:Ce("number"),longitude:Ce("number")};/**
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
 */class rs{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:rs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(su(t,rs._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new rs(t.vectorValues);throw new ht(et.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rs._jsonSchemaVersion="firestore/vectorValue/1.0",rs._jsonSchema={type:Ce("string",rs._jsonSchemaVersion),vectorValues:Ce("object")};function gA(r,t,n){if((t=Ue(t))instanceof pA)return t._internalPath;if(typeof t=="string")return gM(r,t);throw ep("Field path arguments must be of type string or ",r)}const pM=new RegExp("[~\\*/\\[\\]]");function gM(r,t,n){if(t.search(pM)>=0)throw ep(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new pA(...t.split("."))._internalPath}catch{throw ep(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function ep(r,t,n,s,o){let u=`Function ${t}() called with invalid data`;u+=". ";let f="";return new ht(et.INVALID_ARGUMENT,u+r+f)}/**
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
 */class yM{convertValue(t,n="none"){switch(us(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ls(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw At(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return au(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){var s,o,u;const n=(u=(o=(s=t.fields)==null?void 0:s[Bm].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>pe(f.doubleValue)));return new rs(n)}convertGeoPoint(t){return new is(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=jh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($l(t));default:return null}}convertTimestamp(t){const n=os(t);return new Ie(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ie.fromString(t);le(qS(s),9688,{name:t});const o=new Ql(s.get(1),s.get(3)),u=new pt(s.popFirst(5));return o.isEqual(n)||ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class yA extends yM{constructor(t){super(),this.firestore=t}convertBytes(t){return new Di(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}const pE="@firebase/firestore",gE="4.14.0";/**
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
 */class _A{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _M(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(gA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _M extends _A{data(){return super.data()}}/**
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
 */function vM(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ht(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ll{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $s extends _A{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(gA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ht(et.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=$s._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$s._jsonSchemaVersion="firestore/documentSnapshot/1.0",$s._jsonSchema={type:Ce("string",$s._jsonSchemaVersion),bundleSource:Ce("string","DocumentSnapshot"),bundleName:Ce("string"),bundle:Ce("string")};class rh extends $s{data(t={}){return super.data(t)}}class lo{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ll(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new rh(this._firestore,this._userDataWriter,s.key,s,new Ll(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ht(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new rh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ll(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new rh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ll(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:EM(m.type),doc:p,oldIndex:y,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ht(et.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=lo._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Cp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function EM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return At(61501,{type:r})}}/**
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
 */lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:Ce("string",lo._jsonSchemaVersion),bundleSource:Ce("string","QuerySnapshot"),bundleName:Ce("string"),bundle:Ce("string")};/**
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
 */function TM(r){r=Kl(r,Ze);const t=Kl(r.firestore,Qp),n=mA(t);return aM(n,r._key).then((s=>AM(t,r,s)))}function SM(r){r=Kl(r,Xh);const t=Kl(r.firestore,Qp),n=mA(t),s=new yA(t);return vM(r._query),oM(n,r._query).then((o=>new lo(t,s,r,o)))}function AM(r,t,n){const s=n.docs.get(t._key),o=new yA(r);return new $s(r,o,t._key,s,new Ll(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){yN(ia),zn(new wn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Qp(new EN(s.getProvider("auth-internal")),new AN(f,s.getProvider("app-check-internal")),qN(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Je(pE,gE,t),Je(pE,gE,"esm2020")})();/**
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
 */const vA="firebasestorage.googleapis.com",bM="storageBucket",wM=120*1e3,RM=600*1e3;/**
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
 */class Ui extends jn{constructor(t,n,s=0){super(Sm(t),`Firebase Storage: ${n} (${Sm(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ui.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Sm(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ki;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ki||(ki={}));function Sm(r){return"storage/"+r}function IM(){const r="An unknown error occurred, please check the error payload for server response.";return new Ui(ki.UNKNOWN,r)}function CM(){return new Ui(ki.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DM(){return new Ui(ki.CANCELED,"User canceled the upload/download.")}function NM(r){return new Ui(ki.INVALID_URL,"Invalid URL '"+r+"'.")}function OM(r){return new Ui(ki.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function yE(r){return new Ui(ki.INVALID_ARGUMENT,r)}function EA(){return new Ui(ki.APP_DELETED,"The Firebase app was deleted.")}function MM(r){return new Ui(ki.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ei{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=ei.makeFromUrl(t,n)}catch{return new ei(t,"")}if(s.path==="")return s;throw OM(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(dt){dt.path.charAt(dt.path.length-1)==="/"&&(dt.path_=dt.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function y(dt){dt.path_=decodeURIComponent(dt.path)}const E="v[A-Za-z0-9_]+",S=n.replace(/[.]/g,"\\."),D="(/([^?#]*).*)?$",B=new RegExp(`^https?://${S}/${E}/b/${o}/o${D}`,"i"),$={bucket:1,path:3},Z=n===vA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",W=new RegExp(`^https?://${Z}/${o}/${F}`,"i"),st=[{regex:m,indices:p,postModify:u},{regex:B,indices:$,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let dt=0;dt<st.length;dt++){const gt=st[dt],vt=gt.regex.exec(t);if(vt){const R=vt[gt.indices.bucket];let b=vt[gt.indices.path];b||(b=""),s=new ei(R,b),gt.postModify(s);break}}if(s==null)throw NM(t);return s}}class VM{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function xM(r,t,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let y=!1;function E(...F){y||(y=!0,t.apply(null,F))}function S(F){o=setTimeout(()=>{o=null,r(B,p())},F)}function D(){u&&clearTimeout(u)}function B(F,...W){if(y){D();return}if(F){D(),E.call(null,F,...W);return}if(p()||f){D(),E.call(null,F,...W);return}s<64&&(s*=2);let st;m===1?(m=2,st=0):st=(s+Math.random())*1e3,S(st)}let $=!1;function Z(F){$||($=!0,D(),!y&&(o!==null?(F||(m=2),clearTimeout(o),S(0)):F||(m=1)))}return S(0),u=setTimeout(()=>{f=!0,Z(!0)},n),Z}function kM(r){r(!1)}/**
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
 */function LM(r){return r!==void 0}function _E(r,t,n,s){if(s<t)throw yE(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw yE(`Invalid value for '${r}'. Expected ${n} or less.`)}function PM(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=t(s)+"="+t(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var bh;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(bh||(bh={}));/**
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
 */function UM(r,t){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=t.indexOf(r)!==-1;return n||o||u}/**
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
 */class zM{constructor(t,n,s,o,u,f,m,p,y,E,S,D=!0,B=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=S,this.retry=D,this.isUsingEmulator=B,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,Z)=>{this.resolve_=$,this.reject_=Z,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Yc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===bh.NO_ERROR,p=u.getStatus();if(!m||UM(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===bh.ABORT;s(!1,new Yc(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Yc(y,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());LM(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=IM();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?EA():DM();f(p)}else{const p=CM();f(p)}};this.canceled_?n(!1,new Yc(!1,null,!0)):this.backoffId_=xM(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&kM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function BM(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function jM(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function HM(r,t){t&&(r["X-Firebase-GMPID"]=t)}function qM(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function FM(r,t,n,s,o,u,f=!0,m=!1){const p=PM(r.urlParams),y=r.url+p,E=Object.assign({},r.headers);return HM(E,t),BM(E,n),jM(E,u),qM(E,s),new zM(y,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f,m)}/**
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
 */function GM(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function KM(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
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
 */class wh{constructor(t,n){this._service=t,n instanceof ei?this._location=n:this._location=ei.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new wh(t,n)}get root(){const t=new ei(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KM(this._location.path)}get storage(){return this._service}get parent(){const t=GM(this._location.path);if(t===null)return null;const n=new ei(this._location.bucket,t);return new wh(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw MM(t)}}function vE(r,t){const n=t==null?void 0:t[bM];return n==null?null:ei.makeFromBucketSpec(n,r)}function YM(r,t,n,s={}){r.host=`${t}:${n}`;const o=na(t);o&&Nh(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:$E(u,r.app.options.projectId))}class $M{constructor(t,n,s,o,u,f=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=vA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wM,this._maxUploadRetryTime=RM,this._requests=new Set,o!=null?this._bucket=ei.makeFromBucketSpec(o,this._host):this._bucket=vE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ei.makeFromBucketSpec(this._url,t):this._bucket=vE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){_E("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){_E("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new wh(this,t)}_makeRequest(t,n,s,o,u=!0){if(this._deleted)return new VM(EA());{const f=FM(t,this._appId,s,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const EE="@firebase/storage",TE="0.14.2";/**
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
 */const TA="storage";function QM(r=eu(),t){r=Ue(r);const s=cr(r,TA).getImmediate({identifier:t}),o=hp("storage");return o&&XM(s,...o),s}function XM(r,t,n,s={}){YM(r,t,n,s)}function ZM(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new $M(n,s,o,t,ia)}function JM(){zn(new wn(TA,ZM,"PUBLIC").setMultipleInstances(!0)),Je(EE,TE,""),Je(EE,TE,"esm2020")}JM();const WM={apiKey:"AIzaSyAZ7JwOAcf5fGou0ZbuB58zofnVhfyfeMQ",authDomain:"pos-dashboard-zion.firebaseapp.com",databaseURL:"https://pos-dashboard-zion-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"pos-dashboard-zion",storageBucket:"pos-dashboard-zion.firebasestorage.app",messagingSenderId:"950406773706",appId:"1:950406773706:web:22a6da027804b518412d33",measurementId:"G-L9KH9QXNQK"},cu=eT(WM);typeof window<"u"&&iN(cu);const Am=P2(cu),SA=dM(cu);pN(cu);QM(cu);const AA=q.createContext(void 0),tV=({children:r})=>{const[t,n]=q.useState(null),[s,o]=q.useState(!0);q.useEffect(()=>wC(Am,p=>{n(p),o(!1)}),[]);const u=async(m,p)=>{await SC(Am,m,p)},f=async()=>{await RC(Am)};return tt.jsx(AA.Provider,{value:{user:t,loading:s,signIn:u,logout:f},children:!s&&r})},Zh=()=>{const r=q.useContext(AA);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r};function eV({item:r,storeItemOnClick:t}){return tt.jsx(tt.Fragment,{children:tt.jsxs("div",{className:"card bg-base-100 shadow-sm cursor-pointer",onClick:t,children:[tt.jsx("figure",{children:tt.jsx("img",{src:r.imageURL})}),tt.jsxs("div",{className:"card-body",children:[tt.jsx("h2",{className:"card-title",children:r.name}),tt.jsx("p",{children:r.description})]})]})})}function bA({adminLoginOnClick:r}){const[t,n]=q.useState(""),[s,o]=q.useState(""),{signIn:u}=Zh(),f=async()=>{try{await u(t,s),r()}catch(m){console.error("Login failed:",m),alert("Invalid credentials")}};return tt.jsx("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50",children:tt.jsxs("fieldset",{className:"fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4",children:[tt.jsxs("div",{className:"flex flex-row justify-between",children:[tt.jsx("h1",{className:"text-xl font-bold",children:"Login"}),tt.jsx("button",{className:"btn btn-square",onClick:r,children:"X"})]}),tt.jsx("p",{children:"For admins only"}),tt.jsx("label",{className:"label",children:"Email"}),tt.jsx("input",{type:"email",className:"input",placeholder:"Email",value:t,onChange:m=>n(m.target.value)}),tt.jsx("label",{className:"label",children:"Password"}),tt.jsx("input",{type:"password",className:"input",placeholder:"Password",value:s,onChange:m=>o(m.target.value)}),tt.jsx("button",{className:"btn btn-neutral mt-4",onClick:f,children:"Login"})]})})}const wA=({onAdminLoginClick:r})=>{const{user:t,logout:n}=Zh(),[s,o]=q.useState(!1),u=()=>{o(!s)},f=async()=>{try{await n(),o(!1)}catch(m){console.error("Logout failed:",m)}};return tt.jsxs("div",{className:"navbar justify-between flex flex-col gap-2 sm:flex-row",children:[tt.jsx("div",{className:"btn btn-ghost text-xl",children:"🚀 Detonate Fundraising 🚀"}),t==null?tt.jsx("button",{className:"btn",onClick:r,children:"Admin"}):tt.jsxs("button",{className:"btn",onClick:u,children:["Admin: ",t.displayName||t.email]}),s&&tt.jsx("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50",children:tt.jsxs("div",{className:"card bg-base-100 p-7 flex flex-col gap-5 border border-base-300 shadow-xl",children:[tt.jsx("h1",{className:"text-center",children:"Confirm Logout?"}),tt.jsxs("div",{className:"flex flex-row gap-4",children:[tt.jsx("button",{className:"btn btn-error",onClick:f,children:"Logout"}),tt.jsx("button",{className:"btn btn-outline",onClick:u,children:"Cancel"})]})]})})]})},RA=()=>{const r=Ih(),t=()=>{r("/")};return tt.jsxs("div",{className:"dock dock-sm",children:[tt.jsxs("button",{onClick:t,children:[tt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:tt.jsx("path",{d:"M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"})}),tt.jsx("span",{className:"dock-label",children:"Store"})]}),tt.jsxs("button",{className:"",children:[tt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[tt.jsx("path",{fillRule:"evenodd",d:"M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z",clipRule:"evenodd"}),tt.jsx("path",{d:"M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"})]}),tt.jsx("span",{className:"dock-label",children:"Finance"})]}),tt.jsxs("button",{children:[tt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[tt.jsx("path",{d:"M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z"}),tt.jsx("path",{d:"M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z"}),tt.jsx("path",{d:"M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z"}),tt.jsx("path",{d:"M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z"})]}),tt.jsx("span",{className:"dock-label",children:"Inventory"})]}),tt.jsxs("button",{children:[tt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:tt.jsx("path",{fillRule:"evenodd",d:"M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z",clipRule:"evenodd"})}),tt.jsx("span",{className:"dock-label",children:"POS"})]}),tt.jsxs("button",{children:[tt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[tt.jsx("path",{fillRule:"evenodd",d:"M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",clipRule:"evenodd"}),tt.jsx("path",{d:"m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z"}),tt.jsx("path",{fillRule:"evenodd",d:"m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})]}),tt.jsx("span",{className:"dock-label",children:"Admin"})]})]})};function nV(){const[r,t]=q.useState([]),[n,s]=q.useState(!0),[o,u]=q.useState(!1),{user:f}=Zh(),m=Ih(),p=()=>{u(!o)},y=E=>{m(`/${E.id}`,{state:{product:E}})};return q.useEffect(()=>{(async()=>{try{const D=(await SM(hM(SA,"products"))).docs.map(B=>({id:B.id,...B.data()}));t(D)}catch(S){console.error("Error fetching products: ",S)}finally{s(!1)}})()},[]),tt.jsxs("div",{className:"flex flex-col m-4 relative",children:[tt.jsx(wA,{onAdminLoginClick:p}),n?tt.jsx("div",{className:"p-10 text-center",children:"Loading products..."}):tt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4",children:r.map(E=>tt.jsx(eV,{item:E,storeItemOnClick:()=>y(E)},E.id))}),o&&tt.jsx(bA,{adminLoginOnClick:p}),f!==null&&tt.jsx(RA,{})]})}function iV(){var S;const{productId:r}=Xw(),t=Pi(),n=Ih(),{user:s}=Zh(),[o,u]=q.useState(((S=t.state)==null?void 0:S.product)||null),[f,m]=q.useState(!o),[p,y]=q.useState(!1),E=()=>{y(!p)};return q.useEffect(()=>{(async()=>{if(!o&&r)try{const B=fM(SA,"products",r),$=await TM(B);$.exists()?u({id:$.id,...$.data()}):console.error("No such product!")}catch(B){console.error("Error fetching product: ",B)}finally{m(!1)}})()},[r,o]),tt.jsxs("div",{className:"flex flex-col m-4 relative",children:[tt.jsx(wA,{onAdminLoginClick:E}),tt.jsxs("div",{className:"m-4",children:[tt.jsx("button",{className:"btn btn-outline mb-4",onClick:()=>n("/"),children:"← Back to Store"}),f?tt.jsx("div",{className:"p-10 text-center",children:"Loading product..."}):o?tt.jsx("div",{className:"max-w-2xl mx-auto",children:tt.jsxs("div",{className:"card bg-base-100 shadow-sm",children:[tt.jsx("figure",{children:tt.jsx("img",{src:o.imageURL})}),tt.jsxs("div",{className:"card-body",children:[tt.jsx("h2",{className:"card-title",children:o.name}),tt.jsx("p",{children:o.description})]})]})}):tt.jsx("div",{className:"p-10 text-center text-error",children:"Product not found."})]}),p&&tt.jsx(bA,{adminLoginOnClick:E}),s!==null&&tt.jsx(RA,{})]})}function rV(){return tt.jsx(tV,{children:tt.jsx("div",{className:"text-sm sm:text-base md:text-lg",children:tt.jsx(kR,{children:tt.jsxs(hR,{children:[tt.jsx(wm,{path:"/",element:tt.jsx(nV,{})}),tt.jsx(wm,{path:"/:productId",element:tt.jsx(iV,{})})]})})})})}fw.createRoot(document.getElementById("root")).render(tt.jsx(q.StrictMode,{children:tt.jsx(rV,{})}));
