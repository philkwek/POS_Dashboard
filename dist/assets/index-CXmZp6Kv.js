(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Xd={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function tw(){if(pv)return Il;pv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Il.Fragment=e,Il.jsx=n,Il.jsxs=n,Il}var gv;function nw(){return gv||(gv=1,Xd.exports=tw()),Xd.exports}var ee=nw(),Zd={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function iw(){if(yv)return Te;yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),D=Symbol.iterator;function B(M){return M===null||typeof M!="object"?null:(M=D&&M[D]||M["@@iterator"],typeof M=="function"?M:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,F={};function W(M,Q,re){this.props=M,this.context=Q,this.refs=F,this.updater=re||Z}W.prototype.isReactComponent={},W.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},W.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ae(){}ae.prototype=W.prototype;function se(M,Q,re){this.props=M,this.context=Q,this.refs=F,this.updater=re||Z}var de=se.prototype=new ae;de.constructor=se,X(de,W.prototype),de.isPureReactComponent=!0;var ge=Array.isArray;function ve(){}var R={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(M,Q,re){var oe=re.ref;return{$$typeof:r,type:M,key:Q,ref:oe!==void 0?oe:null,props:re}}function V(M,Q){return C(M.type,Q,M.props)}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function k(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return Q[re]})}var w=/\/+/g;function We(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?k(""+M.key):Q.toString(36)}function $e(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(ve,ve):(M.status="pending",M.then(function(Q){M.status==="pending"&&(M.status="fulfilled",M.value=Q)},function(Q){M.status==="pending"&&(M.status="rejected",M.reason=Q)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function K(M,Q,re,oe,Ee){var Re=typeof M;(Re==="undefined"||Re==="boolean")&&(M=null);var ke=!1;if(M===null)ke=!0;else switch(Re){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(M.$$typeof){case r:case e:ke=!0;break;case E:return ke=M._init,K(ke(M._payload),Q,re,oe,Ee)}}if(ke)return Ee=Ee(M),ke=oe===""?"."+We(M,0):oe,ge(Ee)?(re="",ke!=null&&(re=ke.replace(w,"$&/")+"/"),K(Ee,Q,re,"",function(ds){return ds})):Ee!=null&&(O(Ee)&&(Ee=V(Ee,re+(Ee.key==null||M&&M.key===Ee.key?"":(""+Ee.key).replace(w,"$&/")+"/")+ke)),Q.push(Ee)),1;ke=0;var Dt=oe===""?".":oe+":";if(ge(M))for(var rt=0;rt<M.length;rt++)oe=M[rt],Re=Dt+We(oe,rt),ke+=K(oe,Q,re,Re,Ee);else if(rt=B(M),typeof rt=="function")for(M=rt.call(M),rt=0;!(oe=M.next()).done;)oe=oe.value,Re=Dt+We(oe,rt++),ke+=K(oe,Q,re,Re,Ee);else if(Re==="object"){if(typeof M.then=="function")return K($e(M),Q,re,oe,Ee);throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ke}function ie(M,Q,re){if(M==null)return M;var oe=[],Ee=0;return K(M,oe,"","",function(Re){return Q.call(re,Re,Ee++)}),oe}function me(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Ue=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Fe={map:ie,forEach:function(M,Q,re){ie(M,function(){Q.apply(this,arguments)},re)},count:function(M){var Q=0;return ie(M,function(){Q++}),Q},toArray:function(M){return ie(M,function(Q){return Q})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Te.Activity=S,Te.Children=Fe,Te.Component=W,Te.Fragment=n,Te.Profiler=o,Te.PureComponent=se,Te.StrictMode=s,Te.Suspense=p,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Te.__COMPILER_RUNTIME={__proto__:null,c:function(M){return R.H.useMemoCache(M)}},Te.cache=function(M){return function(){return M.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(M,Q,re){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=X({},M.props),Ee=M.key;if(Q!=null)for(Re in Q.key!==void 0&&(Ee=""+Q.key),Q)!b.call(Q,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&Q.ref===void 0||(oe[Re]=Q[Re]);var Re=arguments.length-2;if(Re===1)oe.children=re;else if(1<Re){for(var ke=Array(Re),Dt=0;Dt<Re;Dt++)ke[Dt]=arguments[Dt+2];oe.children=ke}return C(M.type,Ee,oe)},Te.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Te.createElement=function(M,Q,re){var oe,Ee={},Re=null;if(Q!=null)for(oe in Q.key!==void 0&&(Re=""+Q.key),Q)b.call(Q,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(Ee[oe]=Q[oe]);var ke=arguments.length-2;if(ke===1)Ee.children=re;else if(1<ke){for(var Dt=Array(ke),rt=0;rt<ke;rt++)Dt[rt]=arguments[rt+2];Ee.children=Dt}if(M&&M.defaultProps)for(oe in ke=M.defaultProps,ke)Ee[oe]===void 0&&(Ee[oe]=ke[oe]);return C(M,Re,Ee)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(M){return{$$typeof:m,render:M}},Te.isValidElement=O,Te.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:me}},Te.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Te.startTransition=function(M){var Q=R.T,re={};R.T=re;try{var oe=M(),Ee=R.S;Ee!==null&&Ee(re,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(ve,Ue)}catch(Re){Ue(Re)}finally{Q!==null&&re.types!==null&&(Q.types=re.types),R.T=Q}},Te.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Te.use=function(M){return R.H.use(M)},Te.useActionState=function(M,Q,re){return R.H.useActionState(M,Q,re)},Te.useCallback=function(M,Q){return R.H.useCallback(M,Q)},Te.useContext=function(M){return R.H.useContext(M)},Te.useDebugValue=function(){},Te.useDeferredValue=function(M,Q){return R.H.useDeferredValue(M,Q)},Te.useEffect=function(M,Q){return R.H.useEffect(M,Q)},Te.useEffectEvent=function(M){return R.H.useEffectEvent(M)},Te.useId=function(){return R.H.useId()},Te.useImperativeHandle=function(M,Q,re){return R.H.useImperativeHandle(M,Q,re)},Te.useInsertionEffect=function(M,Q){return R.H.useInsertionEffect(M,Q)},Te.useLayoutEffect=function(M,Q){return R.H.useLayoutEffect(M,Q)},Te.useMemo=function(M,Q){return R.H.useMemo(M,Q)},Te.useOptimistic=function(M,Q){return R.H.useOptimistic(M,Q)},Te.useReducer=function(M,Q,re){return R.H.useReducer(M,Q,re)},Te.useRef=function(M){return R.H.useRef(M)},Te.useState=function(M){return R.H.useState(M)},Te.useSyncExternalStore=function(M,Q,re){return R.H.useSyncExternalStore(M,Q,re)},Te.useTransition=function(){return R.H.useTransition()},Te.version="19.2.5",Te}var _v;function tp(){return _v||(_v=1,Zd.exports=iw()),Zd.exports}var q=tp(),Jd={exports:{}},Cl={},Wd={exports:{}},em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function rw(){return vv||(vv=1,(function(r){function e(K,ie){var me=K.length;K.push(ie);e:for(;0<me;){var Ue=me-1>>>1,Fe=K[Ue];if(0<o(Fe,ie))K[Ue]=ie,K[me]=Fe,me=Ue;else break e}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var ie=K[0],me=K.pop();if(me!==ie){K[0]=me;e:for(var Ue=0,Fe=K.length,M=Fe>>>1;Ue<M;){var Q=2*(Ue+1)-1,re=K[Q],oe=Q+1,Ee=K[oe];if(0>o(re,me))oe<Fe&&0>o(Ee,re)?(K[Ue]=Ee,K[oe]=me,Ue=oe):(K[Ue]=re,K[Q]=me,Ue=Q);else if(oe<Fe&&0>o(Ee,me))K[Ue]=Ee,K[oe]=me,Ue=oe;else break e}}return ie}function o(K,ie){var me=K.sortIndex-ie.sortIndex;return me!==0?me:K.id-ie.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,S=null,D=3,B=!1,Z=!1,X=!1,F=!1,W=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;function de(K){for(var ie=n(y);ie!==null;){if(ie.callback===null)s(y);else if(ie.startTime<=K)s(y),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=n(y)}}function ge(K){if(X=!1,de(K),!Z)if(n(p)!==null)Z=!0,ve||(ve=!0,k());else{var ie=n(y);ie!==null&&$e(ge,ie.startTime-K)}}var ve=!1,R=-1,b=5,C=-1;function V(){return F?!0:!(r.unstable_now()-C<b)}function O(){if(F=!1,ve){var K=r.unstable_now();C=K;var ie=!0;try{e:{Z=!1,X&&(X=!1,ae(R),R=-1),B=!0;var me=D;try{t:{for(de(K),S=n(p);S!==null&&!(S.expirationTime>K&&V());){var Ue=S.callback;if(typeof Ue=="function"){S.callback=null,D=S.priorityLevel;var Fe=Ue(S.expirationTime<=K);if(K=r.unstable_now(),typeof Fe=="function"){S.callback=Fe,de(K),ie=!0;break t}S===n(p)&&s(p),de(K)}else s(p);S=n(p)}if(S!==null)ie=!0;else{var M=n(y);M!==null&&$e(ge,M.startTime-K),ie=!1}}break e}finally{S=null,D=me,B=!1}ie=void 0}}finally{ie?k():ve=!1}}}var k;if(typeof se=="function")k=function(){se(O)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,We=w.port2;w.port1.onmessage=O,k=function(){We.postMessage(null)}}else k=function(){W(O,0)};function $e(K,ie){R=W(function(){K(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(K){switch(D){case 1:case 2:case 3:var ie=3;break;default:ie=D}var me=D;D=ie;try{return K()}finally{D=me}},r.unstable_requestPaint=function(){F=!0},r.unstable_runWithPriority=function(K,ie){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var me=D;D=K;try{return ie()}finally{D=me}},r.unstable_scheduleCallback=function(K,ie,me){var Ue=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ue+me:Ue):me=Ue,K){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=me+Fe,K={id:E++,callback:ie,priorityLevel:K,startTime:me,expirationTime:Fe,sortIndex:-1},me>Ue?(K.sortIndex=me,e(y,K),n(p)===null&&K===n(y)&&(X?(ae(R),R=-1):X=!0,$e(ge,me-Ue))):(K.sortIndex=Fe,e(p,K),Z||B||(Z=!0,ve||(ve=!0,k()))),K},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(K){var ie=D;return function(){var me=D;D=ie;try{return K.apply(this,arguments)}finally{D=me}}}})(em)),em}var Ev;function sw(){return Ev||(Ev=1,Wd.exports=rw()),Wd.exports}var tm={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function aw(){if(Tv)return Yt;Tv=1;var r=tp();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Yt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Yt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Yt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:D,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:D,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Yt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Yt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Yt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Yt.requestFormReset=function(p){s.d.r(p)},Yt.unstable_batchedUpdates=function(p,y){return p(y)},Yt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Yt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Yt.version="19.2.5",Yt}var Sv;function ow(){if(Sv)return tm.exports;Sv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tm.exports=aw(),tm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function lw(){if(Av)return Cl;Av=1;var r=sw(),e=tp(),n=ow();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function y(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),t;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===a){_=!0,a=h,l=d;break}if(T===l){_=!0,l=h,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=h;break}if(T===l){_=!0,l=d,a=h;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function E(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=E(t),i!==null)return i;t=t.sibling}return null}var S=Object.assign,D=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ae=Symbol.for("react.consumer"),se=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var w=Symbol.for("react.client.reference");function We(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===w?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case W:return"Profiler";case F:return"StrictMode";case ge:return"Suspense";case ve:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case se:return t.displayName||"Context";case ae:return(t._context.displayName||"Context")+".Consumer";case de:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return i=t.displayName||null,i!==null?i:We(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return We(t(i))}catch{}}return null}var $e=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ue=[],Fe=-1;function M(t){return{current:t}}function Q(t){0>Fe||(t.current=Ue[Fe],Ue[Fe]=null,Fe--)}function re(t,i){Fe++,Ue[Fe]=t.current,t.current=i}var oe=M(null),Ee=M(null),Re=M(null),ke=M(null);function Dt(t,i){switch(re(Re,i),re(Ee,t),re(oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?U_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=U_(i),t=z_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(oe),re(oe,t)}function rt(){Q(oe),Q(Ee),Q(Re)}function ds(t){t.memoizedState!==null&&re(ke,t);var i=oe.current,a=z_(i,t.type);i!==a&&(re(Ee,t),re(oe,a))}function aa(t){Ee.current===t&&(Q(oe),Q(Ee)),ke.current===t&&(Q(ke),Al._currentValue=me)}var oa,la;function si(t){if(oa===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);oa=i&&i[1]||"",la=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+t+la}var Ao=!1;function ms(t,i){if(!t||Ao)return"";Ao=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(H){var z=H}Reflect.construct(t,[],$)}else{try{$.call()}catch(H){z=H}t.call($.prototype)}}else{try{throw Error()}catch(H){z=H}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(H){if(H&&z&&typeof H.stack=="string")return[H.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var I=_.split(`
`),U=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===U.length)for(l=I.length-1,h=U.length-1;1<=l&&0<=h&&I[l]!==U[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==U[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==U[h]){var G=`
`+I[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=h);break}}}finally{Ao=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?si(a):""}function bo(t,i){switch(t.tag){case 26:case 27:case 5:return si(t.type);case 16:return si("Lazy");case 13:return t.child!==i&&i!==null?si("Suspense Fallback"):si("Suspense");case 19:return si("SuspenseList");case 0:case 15:return ms(t.type,!1);case 11:return ms(t.type.render,!1);case 1:return ms(t.type,!0);case 31:return si("Activity");default:return""}}function wo(t){try{var i="",a=null;do i+=bo(t,a),a=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yt=Object.prototype.hasOwnProperty,Nt=r.unstable_scheduleCallback,hr=r.unstable_cancelCallback,Zh=r.unstable_shouldYield,hu=r.unstable_requestPaint,en=r.unstable_now,ps=r.unstable_getCurrentPriorityLevel,Ro=r.unstable_ImmediatePriority,Io=r.unstable_UserBlockingPriority,fr=r.unstable_NormalPriority,Jh=r.unstable_LowPriority,fu=r.unstable_IdlePriority,du=r.log,mu=r.unstable_setDisableYieldValue,Hn=null,zt=null;function Rn(t){if(typeof du=="function"&&mu(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Hn,t)}catch{}}var ht=Math.clz32?Math.clz32:gu,pu=Math.log,ua=Math.LN2;function gu(t){return t>>>=0,t===0?32:31-(pu(t)/ua|0)|0}var ai=256,gs=262144,_t=4194304;function oi(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function li(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=oi(l):(_&=T,_!==0?h=oi(_):a||(a=T&~t,a!==0&&(h=oi(a))))):(T=l&~d,T!==0?h=oi(T):_!==0?h=oi(_):a||(a=l&~t,a!==0&&(h=oi(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function qn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Wh(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yu(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function ui(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ys(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ef(t,i,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,U=t.hiddenUpdates;for(a=_&~a;0<a;){var G=31-ht(a),$=1<<G;T[G]=0,I[G]=-1;var z=U[G];if(z!==null)for(U[G]=null,G=0;G<z.length;G++){var H=z[G];H!==null&&(H.lane&=-536870913)}a&=~$}l!==0&&_s(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~i))}function _s(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ht(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Co(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-ht(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function Do(t,i){var a=i&-i;return a=(a&42)!==0?1:vs(a),(a&(t.suspendedLanes|i))!==0?0:a}function vs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _u(){var t=ie.p;return t!==0?t:(t=window.event,t===void 0?32:lv(t.type))}function Fn(t,i){var a=ie.p;try{return ie.p=t,i()}finally{ie.p=a}}var Gn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Gn,xt="__reactProps$"+Gn,ci="__reactContainer$"+Gn,ca="__reactEvents$"+Gn,tf="__reactListeners$"+Gn,vu="__reactHandles$"+Gn,Eu="__reactResources$"+Gn,hi="__reactMarker$"+Gn;function ha(t){delete t[vt],delete t[xt],delete t[ca],delete t[tf],delete t[vu]}function fi(t){var i=t[vt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ci]||a[vt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=K_(t);t!==null;){if(a=t[vt])return a;t=K_(t)}return i}t=a,a=t.parentNode}return null}function In(t){if(t=t[vt]||t[ci]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function mn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function di(t){var i=t[Eu];return i||(i=t[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Et(t){t[hi]=!0}var No=new Set,Oo={};function mi(t,i){pi(t,i),pi(t+"Capture",i)}function pi(t,i){for(Oo[t]=i,t=0;t<i.length;t++)No.add(i[t])}var Mo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},xo={};function Tu(t){return yt.call(xo,t)?!0:yt.call(Vo,t)?!1:Mo.test(t)?xo[t]=!0:(Vo[t]=!0,!1)}function fa(t,i,a){if(Tu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function pn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Tt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dr(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ko(t,i,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ge(t){if(!t._valueTracker){var i=dr(t)?"checked":"value";t._valueTracker=ko(t,i,""+t[i])}}function Es(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=dr(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ts=/[\n"\\]/g;function an(t){return t.replace(Ts,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function da(t,i,a,l,h,d,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+kt(i)):t.value!==""+kt(i)&&(t.value=""+kt(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?Lo(t,_,kt(i)):a!=null?Lo(t,_,kt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+kt(T):t.removeAttribute("name")}function Su(t,i,a,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ge(t);return}a=a!=null?""+kt(a):"",i=i!=null?""+kt(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ge(t)}function Lo(t,i,a){i==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mr(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Au(t,i,a){if(i!=null&&(i=""+kt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+kt(a):""}function pr(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if($e(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=kt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Ge(t)}function on(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var bu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||bu.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Uo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Po(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Po(t,d,i[d])}function ma(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(t){return gr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Kn(){}var zo=null;function Cn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,yi=null;function Ss(t){var i=In(t);if(i&&(t=i.stateNode)){var a=t[xt]||null;e:switch(t=i.stateNode,i.type){case"input":if(da(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+an(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[xt]||null;if(!h)throw Error(s(90));da(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Es(l)}break e;case"textarea":Au(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&mr(t,!!a.multiple,i,!1)}}}var ga=!1;function _r(t,i,a){if(ga)return t(i,a);ga=!0;try{var l=t(i);return l}finally{if(ga=!1,(yr!==null||yi!==null)&&(_c(),yr&&(i=yr,t=yi,yi=yr=null,Ss(i),t)))for(i=0;i<t.length;i++)Ss(t[i])}}function Yn(t,i){var a=t.stateNode;if(a===null)return null;var l=a[xt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=!1;if(Dn)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){As=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch{As=!1}var _i=null,Bo=null,bs=null;function jo(){if(bs)return bs;var t,i=Bo,a=i.length,l,h="value"in _i?_i.value:_i.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return bs=h.slice(t,1<l?1-l:void 0)}function ws(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Bi(){return!0}function $n(){return!1}function Bt(t){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Bi:$n,this.isPropagationStopped=$n,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),i}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=Bt(ji),vr=S({},ji,{view:0,detail:0}),Ho=Bt(vr),Er,ya,Ei,_a=S({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Er=t.screenX-Ei.screenX,ya=t.screenY-Ei.screenY):ya=Er=0,Ei=t),Er)},movementY:function(t){return"movementY"in t?t.movementY:ya}}),qo=Bt(_a),Rs=S({},_a,{dataTransfer:0}),Ru=Bt(Rs),Iu=S({},vr,{relatedTarget:0}),Is=Bt(Iu),Fo=S({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),Cu=Bt(Fo),va=S({},ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Du=Bt(va),Nu=S({},ji,{data:0}),Ti=Bt(Nu),Ou={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xu(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vu[t])?!!i[t]:!1}function Tr(){return xu}var tn=S({},vr,{key:function(t){if(t.key){var i=Ou[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(t){return t.type==="keypress"?ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ku=Bt(tn),Lu=S({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hi=Bt(Lu),c=S({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),g=Bt(c),v=S({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Bt(v),L=S({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j=Bt(L),ne=S({},ji,{newState:0,oldState:0}),be=Bt(ne),ft=[9,13,27,32],He=Dn&&"CompositionEvent"in window,st=null;Dn&&"documentMode"in document&&(st=document.documentMode);var Nn=Dn&&"TextEvent"in window&&!st,Si=Dn&&(!He||st&&8<st&&11>=st),Qn=" ",Xn=!1;function Cs(t,i){switch(t){case"keyup":return ft.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ea(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function wA(t,i){switch(t){case"compositionend":return Ea(i);case"keypress":return i.which!==32?null:(Xn=!0,Qn);case"textInput":return t=i.data,t===Qn&&Xn?null:t;default:return null}}function RA(t,i){if(Ta)return t==="compositionend"||!He&&Cs(t,i)?(t=jo(),bs=Bo=_i=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Si&&i.locale!=="ko"?null:i.data;default:return null}}var IA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!IA[t.type]:i==="textarea"}function Xp(t,i,a,l){yr?yi?yi.push(l):yi=[l]:yr=l,i=wc(i,"onChange"),0<i.length&&(a=new vi("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Go=null,Ko=null;function CA(t){M_(t,0)}function Pu(t){var i=mn(t);if(Es(i))return t}function Zp(t,i){if(t==="change")return i}var Jp=!1;if(Dn){var nf;if(Dn){var rf="oninput"in document;if(!rf){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),rf=typeof Wp.oninput=="function"}nf=rf}else nf=!1;Jp=nf&&(!document.documentMode||9<document.documentMode)}function eg(){Go&&(Go.detachEvent("onpropertychange",tg),Ko=Go=null)}function tg(t){if(t.propertyName==="value"&&Pu(Ko)){var i=[];Xp(i,Ko,t,Cn(t)),_r(CA,i)}}function DA(t,i,a){t==="focusin"?(eg(),Go=i,Ko=a,Go.attachEvent("onpropertychange",tg)):t==="focusout"&&eg()}function NA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(Ko)}function OA(t,i){if(t==="click")return Pu(i)}function MA(t,i){if(t==="input"||t==="change")return Pu(i)}function VA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var gn=typeof Object.is=="function"?Object.is:VA;function Yo(t,i){if(gn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!yt.call(i,h)||!gn(t[h],i[h]))return!1}return!0}function ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,i){var a=ng(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ng(a)}}function rg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=gi(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=gi(t.document)}return i}function sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var xA=Dn&&"documentMode"in document&&11>=document.documentMode,Sa=null,af=null,$o=null,of=!1;function ag(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||Sa==null||Sa!==gi(l)||(l=Sa,"selectionStart"in l&&sf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$o&&Yo($o,l)||($o=l,l=wc(af,"onSelect"),0<l.length&&(i=new vi("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Sa)))}function Ds(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Aa={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},lf={},og={};Dn&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Ns(t){if(lf[t])return lf[t];if(!Aa[t])return t;var i=Aa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in og)return lf[t]=i[a];return t}var lg=Ns("animationend"),ug=Ns("animationiteration"),cg=Ns("animationstart"),kA=Ns("transitionrun"),LA=Ns("transitionstart"),PA=Ns("transitioncancel"),hg=Ns("transitionend"),fg=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function Zn(t,i){fg.set(t,i),mi(i,[t])}var Uu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},On=[],ba=0,cf=0;function zu(){for(var t=ba,i=cf=ba=0;i<t;){var a=On[i];On[i++]=null;var l=On[i];On[i++]=null;var h=On[i];On[i++]=null;var d=On[i];if(On[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&dg(a,h,d)}}function Bu(t,i,a,l){On[ba++]=t,On[ba++]=i,On[ba++]=a,On[ba++]=l,cf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function hf(t,i,a,l){return Bu(t,i,a,l),ju(t)}function Os(t,i){return Bu(t,null,null,i),ju(t)}function dg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-ht(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function ju(t){if(50<gl)throw gl=0,Ed=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var wa={};function UA(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,i,a,l){return new UA(t,i,a,l)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,i){var a=t.alternate;return a===null?(a=yn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Hu(t,i,a,l,h,d){var _=0;if(l=t,typeof t=="function")ff(t)&&(_=1);else if(typeof t=="string")_=qb(t,a,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=yn(31,a,i,h),t.elementType=C,t.lanes=d,t;case X:return Ms(a.children,h,d,i);case F:_=8,h|=24;break;case W:return t=yn(12,a,i,h|2),t.elementType=W,t.lanes=d,t;case ge:return t=yn(13,a,i,h),t.elementType=ge,t.lanes=d,t;case ve:return t=yn(19,a,i,h),t.elementType=ve,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case se:_=10;break e;case ae:_=9;break e;case de:_=11;break e;case R:_=14;break e;case b:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=yn(_,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ms(t,i,a,l){return t=yn(7,t,l,i),t.lanes=a,t}function df(t,i,a){return t=yn(6,t,null,i),t.lanes=a,t}function pg(t){var i=yn(18,null,null,0);return i.stateNode=t,i}function mf(t,i,a){return i=yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var gg=new WeakMap;function Mn(t,i){if(typeof t=="object"&&t!==null){var a=gg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:wo(i)},gg.set(t,i),i)}return{value:t,source:i,stack:wo(i)}}var Ra=[],Ia=0,qu=null,Qo=0,Vn=[],xn=0,Sr=null,Ai=1,bi="";function Fi(t,i){Ra[Ia++]=Qo,Ra[Ia++]=qu,qu=t,Qo=i}function yg(t,i,a){Vn[xn++]=Ai,Vn[xn++]=bi,Vn[xn++]=Sr,Sr=t;var l=Ai;t=bi;var h=32-ht(l)-1;l&=~(1<<h),a+=1;var d=32-ht(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Ai=1<<32-ht(i)+h|a<<h|l,bi=d+t}else Ai=1<<d|a<<h|l,bi=t}function pf(t){t.return!==null&&(Fi(t,1),yg(t,1,0))}function gf(t){for(;t===qu;)qu=Ra[--Ia],Ra[Ia]=null,Qo=Ra[--Ia],Ra[Ia]=null;for(;t===Sr;)Sr=Vn[--xn],Vn[xn]=null,bi=Vn[--xn],Vn[xn]=null,Ai=Vn[--xn],Vn[xn]=null}function _g(t,i){Vn[xn++]=Ai,Vn[xn++]=bi,Vn[xn++]=Sr,Ai=i.id,bi=i.overflow,Sr=t}var jt=null,tt=null,Ve=!1,Ar=null,kn=!1,yf=Error(s(519));function br(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Mn(i,t)),yf}function vg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[vt]=t,i[xt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<_l.length;a++)De(_l[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),Su(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),pr(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||L_(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=Kn),i=!0):i=!1,i||br(t,!0)}function Eg(t){for(jt=t.return;jt;)switch(jt.tag){case 5:case 31:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:jt=jt.return}}function Ca(t){if(t!==jt)return!1;if(!Ve)return Eg(t),Ve=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kd(t.type,t.memoizedProps)),a=!a),a&&tt&&br(t),Eg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=G_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=G_(t)}else i===27?(i=tt,Ur(t.type)?(t=Bd,Bd=null,tt=t):tt=i):tt=jt?Pn(t.stateNode.nextSibling):null;return!0}function Vs(){tt=jt=null,Ve=!1}function _f(){var t=Ar;return t!==null&&(hn===null?hn=t:hn.push.apply(hn,t),Ar=null),t}function Xo(t){Ar===null?Ar=[t]:Ar.push(t)}var vf=M(null),xs=null,Gi=null;function wr(t,i,a){re(vf,i._currentValue),i._currentValue=a}function Ki(t){t._currentValue=vf.current,Q(vf)}function Ef(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Tf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Ef(d.return,a,t),l||(_=null);break e}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Ef(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Da(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=h.type;gn(h.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(h===ke.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Al):t=[Al])}h=h.return}t!==null&&Tf(i,t,a,l),i.flags|=262144}function Fu(t){for(t=t.firstContext;t!==null;){if(!gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ks(t){xs=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Tg(xs,t)}function Gu(t,i){return xs===null&&ks(t),Tg(t,i)}function Tg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Gi=Gi.next=i;return a}var zA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},BA=r.unstable_scheduleCallback,jA=r.unstable_NormalPriority,St={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new zA,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&BA(jA,function(){t.controller.abort()})}var Jo=null,Af=0,Na=0,Oa=null;function HA(t,i){if(Jo===null){var a=Jo=[];Af=0,Na=Rd(),Oa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Af++,i.then(Sg,Sg),i}function Sg(){if(--Af===0&&Jo!==null){Oa!==null&&(Oa.status="fulfilled");var t=Jo;Jo=null,Na=0,Oa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function qA(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Ag=K.S;K.S=function(t,i){a_=en(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&HA(t,i),Ag!==null&&Ag(t,i)};var Ls=M(null);function bf(){var t=Ls.current;return t!==null?t:et.pooledCache}function Ku(t,i){i===null?re(Ls,Ls.current):re(Ls,i.pool)}function bg(){var t=bf();return t===null?null:{parent:St._currentValue,pool:t}}var Ma=Error(s(460)),wf=Error(s(474)),Yu=Error(s(542)),$u={then:function(){}};function wg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Kn,Kn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Cg(t),t;default:if(typeof i.status=="string")i.then(Kn,Kn);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Cg(t),t}throw Us=i,Ma}}function Ps(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,Ma):a}}var Us=null;function Ig(){if(Us===null)throw Error(s(459));var t=Us;return Us=null,t}function Cg(t){if(t===Ma||t===Yu)throw Error(s(483))}var Va=null,Wo=0;function Qu(t){var i=Wo;return Wo+=1,Va===null&&(Va=[]),Rg(Va,t,i)}function el(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Xu(t,i){throw i.$$typeof===D?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Dg(t){function i(x,N){if(t){var P=x.deletions;P===null?(x.deletions=[N],x.flags|=16):P.push(N)}}function a(x,N){if(!t)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=qi(x,N),x.index=0,x.sibling=null,x}function d(x,N,P){return x.index=P,t?(P=x.alternate,P!==null?(P=P.index,P<N?(x.flags|=67108866,N):P):(x.flags|=67108866,N)):(x.flags|=1048576,N)}function _(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function T(x,N,P,Y){return N===null||N.tag!==6?(N=df(P,x.mode,Y),N.return=x,N):(N=h(N,P),N.return=x,N)}function I(x,N,P,Y){var fe=P.type;return fe===X?G(x,N,P.props.children,Y,P.key):N!==null&&(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&Ps(fe)===N.type)?(N=h(N,P.props),el(N,P),N.return=x,N):(N=Hu(P.type,P.key,P.props,null,x.mode,Y),el(N,P),N.return=x,N)}function U(x,N,P,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==P.containerInfo||N.stateNode.implementation!==P.implementation?(N=mf(P,x.mode,Y),N.return=x,N):(N=h(N,P.children||[]),N.return=x,N)}function G(x,N,P,Y,fe){return N===null||N.tag!==7?(N=Ms(P,x.mode,Y,fe),N.return=x,N):(N=h(N,P),N.return=x,N)}function $(x,N,P){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=df(""+N,x.mode,P),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case B:return P=Hu(N.type,N.key,N.props,null,x.mode,P),el(P,N),P.return=x,P;case Z:return N=mf(N,x.mode,P),N.return=x,N;case b:return N=Ps(N),$(x,N,P)}if($e(N)||k(N))return N=Ms(N,x.mode,P,null),N.return=x,N;if(typeof N.then=="function")return $(x,Qu(N),P);if(N.$$typeof===se)return $(x,Gu(x,N),P);Xu(x,N)}return null}function z(x,N,P,Y){var fe=N!==null?N.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return fe!==null?null:T(x,N,""+P,Y);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case B:return P.key===fe?I(x,N,P,Y):null;case Z:return P.key===fe?U(x,N,P,Y):null;case b:return P=Ps(P),z(x,N,P,Y)}if($e(P)||k(P))return fe!==null?null:G(x,N,P,Y,null);if(typeof P.then=="function")return z(x,N,Qu(P),Y);if(P.$$typeof===se)return z(x,N,Gu(x,P),Y);Xu(x,P)}return null}function H(x,N,P,Y,fe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return x=x.get(P)||null,T(N,x,""+Y,fe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case B:return x=x.get(Y.key===null?P:Y.key)||null,I(N,x,Y,fe);case Z:return x=x.get(Y.key===null?P:Y.key)||null,U(N,x,Y,fe);case b:return Y=Ps(Y),H(x,N,P,Y,fe)}if($e(Y)||k(Y))return x=x.get(P)||null,G(N,x,Y,fe,null);if(typeof Y.then=="function")return H(x,N,P,Qu(Y),fe);if(Y.$$typeof===se)return H(x,N,P,Gu(N,Y),fe);Xu(N,Y)}return null}function ue(x,N,P,Y){for(var fe=null,Be=null,ce=N,Ie=N=0,Oe=null;ce!==null&&Ie<P.length;Ie++){ce.index>Ie?(Oe=ce,ce=null):Oe=ce.sibling;var je=z(x,ce,P[Ie],Y);if(je===null){ce===null&&(ce=Oe);break}t&&ce&&je.alternate===null&&i(x,ce),N=d(je,N,Ie),Be===null?fe=je:Be.sibling=je,Be=je,ce=Oe}if(Ie===P.length)return a(x,ce),Ve&&Fi(x,Ie),fe;if(ce===null){for(;Ie<P.length;Ie++)ce=$(x,P[Ie],Y),ce!==null&&(N=d(ce,N,Ie),Be===null?fe=ce:Be.sibling=ce,Be=ce);return Ve&&Fi(x,Ie),fe}for(ce=l(ce);Ie<P.length;Ie++)Oe=H(ce,x,Ie,P[Ie],Y),Oe!==null&&(t&&Oe.alternate!==null&&ce.delete(Oe.key===null?Ie:Oe.key),N=d(Oe,N,Ie),Be===null?fe=Oe:Be.sibling=Oe,Be=Oe);return t&&ce.forEach(function(qr){return i(x,qr)}),Ve&&Fi(x,Ie),fe}function ye(x,N,P,Y){if(P==null)throw Error(s(151));for(var fe=null,Be=null,ce=N,Ie=N=0,Oe=null,je=P.next();ce!==null&&!je.done;Ie++,je=P.next()){ce.index>Ie?(Oe=ce,ce=null):Oe=ce.sibling;var qr=z(x,ce,je.value,Y);if(qr===null){ce===null&&(ce=Oe);break}t&&ce&&qr.alternate===null&&i(x,ce),N=d(qr,N,Ie),Be===null?fe=qr:Be.sibling=qr,Be=qr,ce=Oe}if(je.done)return a(x,ce),Ve&&Fi(x,Ie),fe;if(ce===null){for(;!je.done;Ie++,je=P.next())je=$(x,je.value,Y),je!==null&&(N=d(je,N,Ie),Be===null?fe=je:Be.sibling=je,Be=je);return Ve&&Fi(x,Ie),fe}for(ce=l(ce);!je.done;Ie++,je=P.next())je=H(ce,x,Ie,je.value,Y),je!==null&&(t&&je.alternate!==null&&ce.delete(je.key===null?Ie:je.key),N=d(je,N,Ie),Be===null?fe=je:Be.sibling=je,Be=je);return t&&ce.forEach(function(ew){return i(x,ew)}),Ve&&Fi(x,Ie),fe}function Je(x,N,P,Y){if(typeof P=="object"&&P!==null&&P.type===X&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case B:e:{for(var fe=P.key;N!==null;){if(N.key===fe){if(fe=P.type,fe===X){if(N.tag===7){a(x,N.sibling),Y=h(N,P.props.children),Y.return=x,x=Y;break e}}else if(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&Ps(fe)===N.type){a(x,N.sibling),Y=h(N,P.props),el(Y,P),Y.return=x,x=Y;break e}a(x,N);break}else i(x,N);N=N.sibling}P.type===X?(Y=Ms(P.props.children,x.mode,Y,P.key),Y.return=x,x=Y):(Y=Hu(P.type,P.key,P.props,null,x.mode,Y),el(Y,P),Y.return=x,x=Y)}return _(x);case Z:e:{for(fe=P.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===P.containerInfo&&N.stateNode.implementation===P.implementation){a(x,N.sibling),Y=h(N,P.children||[]),Y.return=x,x=Y;break e}else{a(x,N);break}else i(x,N);N=N.sibling}Y=mf(P,x.mode,Y),Y.return=x,x=Y}return _(x);case b:return P=Ps(P),Je(x,N,P,Y)}if($e(P))return ue(x,N,P,Y);if(k(P)){if(fe=k(P),typeof fe!="function")throw Error(s(150));return P=fe.call(P),ye(x,N,P,Y)}if(typeof P.then=="function")return Je(x,N,Qu(P),Y);if(P.$$typeof===se)return Je(x,N,Gu(x,P),Y);Xu(x,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,N!==null&&N.tag===6?(a(x,N.sibling),Y=h(N,P),Y.return=x,x=Y):(a(x,N),Y=df(P,x.mode,Y),Y.return=x,x=Y),_(x)):a(x,N)}return function(x,N,P,Y){try{Wo=0;var fe=Je(x,N,P,Y);return Va=null,fe}catch(ce){if(ce===Ma||ce===Yu)throw ce;var Be=yn(29,ce,null,x.mode);return Be.lanes=Y,Be.return=x,Be}finally{}}}var zs=Dg(!0),Ng=Dg(!1),Rr=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ir(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=ju(t),dg(t,null,a),i}return Bu(t,l,i,a),ju(t)}function tl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Co(t,a)}}function Cf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Df=!1;function nl(){if(Df){var t=Oa;if(t!==null)throw t}}function il(t,i,a,l){Df=!1;var h=t.updateQueue;Rr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,U=I.next;I.next=null,_===null?d=U:_.next=U,_=I;var G=t.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==_&&(T===null?G.firstBaseUpdate=U:T.next=U,G.lastBaseUpdate=I))}if(d!==null){var $=h.baseState;_=0,G=U=I=null,T=d;do{var z=T.lane&-536870913,H=z!==T.lane;if(H?(Ne&z)===z:(l&z)===z){z!==0&&z===Na&&(Df=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ue=t,ye=T;z=i;var Je=a;switch(ye.tag){case 1:if(ue=ye.payload,typeof ue=="function"){$=ue.call(Je,$,z);break e}$=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ye.payload,z=typeof ue=="function"?ue.call(Je,$,z):ue,z==null)break e;$=S({},$,z);break e;case 2:Rr=!0}}z=T.callback,z!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[z]:H.push(z))}else H={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(U=G=H,I=$):G=G.next=H,_|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);G===null&&(I=$),h.baseState=I,h.firstBaseUpdate=U,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Vr|=_,t.lanes=_,t.memoizedState=$}}function Og(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Mg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Og(a[t],i)}var xa=M(null),Zu=M(0);function Vg(t,i){t=tr,re(Zu,t),re(xa,i),tr=t|i.baseLanes}function Nf(){re(Zu,tr),re(xa,xa.current)}function Of(){tr=Zu.current,Q(xa),Q(Zu)}var _n=M(null),Ln=null;function Dr(t){var i=t.alternate;re(dt,dt.current&1),re(_n,t),Ln===null&&(i===null||xa.current!==null||i.memoizedState!==null)&&(Ln=t)}function Mf(t){re(dt,dt.current),re(_n,t),Ln===null&&(Ln=t)}function xg(t){t.tag===22?(re(dt,dt.current),re(_n,t),Ln===null&&(Ln=t)):Nr()}function Nr(){re(dt,dt.current),re(_n,_n.current)}function vn(t){Q(_n),Ln===t&&(Ln=null),Q(dt)}var dt=M(0);function Ju(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ud(a)||zd(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,we=null,Xe=null,At=null,Wu=!1,ka=!1,Bs=!1,ec=0,rl=0,La=null,FA=0;function ut(){throw Error(s(321))}function Vf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!gn(t[a],i[a]))return!1;return!0}function xf(t,i,a,l,h,d){return Yi=d,we=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=t===null||t.memoizedState===null?yy:Qf,Bs=!1,d=a(l,h),Bs=!1,ka&&(d=Lg(i,a,l,h)),kg(t),d}function kg(t){K.H=ol;var i=Xe!==null&&Xe.next!==null;if(Yi=0,At=Xe=we=null,Wu=!1,rl=0,La=null,i)throw Error(s(300));t===null||bt||(t=t.dependencies,t!==null&&Fu(t)&&(bt=!0))}function Lg(t,i,a,l){we=t;var h=0;do{if(ka&&(La=null),rl=0,ka=!1,25<=h)throw Error(s(301));if(h+=1,At=Xe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=_y,d=i(a,l)}while(ka);return d}function GA(){var t=K.H,i=t.useState()[0];return i=typeof i.then=="function"?sl(i):i,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(we.flags|=1024),i}function kf(){var t=ec!==0;return ec=0,t}function Lf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Pf(t){if(Wu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Wu=!1}Yi=0,At=Xe=we=null,ka=!1,rl=ec=0,La=null}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?we.memoizedState=At=t:At=At.next=t,At}function mt(){if(Xe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var i=At===null?we.memoizedState:At.next;if(i!==null)At=i,Xe=t;else{if(t===null)throw we.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},At===null?we.memoizedState=At=t:At=At.next=t}return At}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(t){var i=rl;return rl+=1,La===null&&(La=[]),t=Rg(La,t,i),i=we,(At===null?i.memoizedState:At.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?yy:Qf),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sl(t);if(t.$$typeof===se)return Ht(t)}throw Error(s(438,String(t)))}function Uf(t){var i=null,a=we.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=tc(),we.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=V;return i.index++,a}function $i(t,i){return typeof i=="function"?i(t):i}function ic(t){var i=mt();return zf(i,Xe,t)}function zf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=_=null,I=null,U=i,G=!1;do{var $=U.lane&-536870913;if($!==U.lane?(Ne&$)===$:(Yi&$)===$){var z=U.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),$===Na&&(G=!0);else if((Yi&z)===z){U=U.next,z===Na&&(G=!0);continue}else $={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(T=I=$,_=d):I=I.next=$,we.lanes|=z,Vr|=z;$=U.action,Bs&&a(d,$),d=U.hasEagerState?U.eagerState:a(d,$)}else z={lane:$,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(T=I=z,_=d):I=I.next=z,we.lanes|=$,Vr|=$;U=U.next}while(U!==null&&U!==i);if(I===null?_=d:I.next=T,!gn(d,t.memoizedState)&&(bt=!0,G&&(a=Oa,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Bf(t){var i=mt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);gn(d,i.memoizedState)||(bt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Pg(t,i,a){var l=we,h=mt(),d=Ve;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!gn((Xe||h).memoizedState,a);if(_&&(h.memoizedState=a,bt=!0),h=h.queue,qf(Bg.bind(null,l,h,t),[t]),h.getSnapshot!==i||_||At!==null&&At.memoizedState.tag&1){if(l.flags|=2048,Pa(9,{destroy:void 0},zg.bind(null,l,h,a,i),null),et===null)throw Error(s(349));d||(Yi&127)!==0||Ug(l,i,a)}return a}function Ug(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=we.updateQueue,i===null?(i=tc(),we.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function zg(t,i,a,l){i.value=a,i.getSnapshot=l,jg(i)&&Hg(t)}function Bg(t,i,a){return a(function(){jg(i)&&Hg(t)})}function jg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!gn(t,a)}catch{return!0}}function Hg(t){var i=Os(t,2);i!==null&&fn(i,t,2)}function jf(t){var i=nn();if(typeof t=="function"){var a=t;if(t=a(),Bs){Rn(!0);try{a()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},i}function qg(t,i,a,l){return t.baseState=a,zf(t,Xe,typeof l=="function"?l:$i)}function KA(t,i,a,l,h){if(ac(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Fg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Fg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=K.T,_={};K.T=_;try{var T=a(h,l),I=K.S;I!==null&&I(_,T),Gg(t,i,T)}catch(U){Hf(t,i,U)}finally{d!==null&&_.types!==null&&(d.types=_.types),K.T=d}}else try{d=a(h,l),Gg(t,i,d)}catch(U){Hf(t,i,U)}}function Gg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Kg(t,i,l)},function(l){return Hf(t,i,l)}):Kg(t,i,a)}function Kg(t,i,a){i.status="fulfilled",i.value=a,Yg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Fg(t,a)))}function Hf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Yg(i),i=i.next;while(i!==l)}t.action=null}function Yg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function $g(t,i){return i}function Qg(t,i){if(Ve){var a=et.formState;if(a!==null){e:{var l=we;if(Ve){if(tt){t:{for(var h=tt,d=kn;h.nodeType!==8;){if(!d){h=null;break t}if(h=Pn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){tt=Pn(h.nextSibling),l=h.data==="F!";break e}}br(l)}l=!1}l&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$g,lastRenderedState:i},a.queue=l,a=my.bind(null,we,l),l.dispatch=a,l=jf(!1),d=$f.bind(null,we,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=KA.bind(null,we,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Xg(t){var i=mt();return Zg(i,Xe,t)}function Zg(t,i,a){if(i=zf(t,i,$g)[0],t=ic($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=sl(i)}catch(_){throw _===Ma?Yu:_}else l=i;i=mt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(we.flags|=2048,Pa(9,{destroy:void 0},YA.bind(null,h,a),null)),[l,d,t]}function YA(t,i){t.action=i}function Jg(t){var i=mt(),a=Xe;if(a!==null)return Zg(i,a,t);mt(),i=i.memoizedState,a=mt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Pa(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=we.updateQueue,i===null&&(i=tc(),we.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Wg(){return mt().memoizedState}function rc(t,i,a,l){var h=nn();we.flags|=t,h.memoizedState=Pa(1|i,{destroy:void 0},a,l===void 0?null:l)}function sc(t,i,a,l){var h=mt();l=l===void 0?null:l;var d=h.memoizedState.inst;Xe!==null&&l!==null&&Vf(l,Xe.memoizedState.deps)?h.memoizedState=Pa(i,d,a,l):(we.flags|=t,h.memoizedState=Pa(1|i,d,a,l))}function ey(t,i){rc(8390656,8,t,i)}function qf(t,i){sc(2048,8,t,i)}function $A(t){we.flags|=4;var i=we.updateQueue;if(i===null)i=tc(),we.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function ty(t){var i=mt().memoizedState;return $A({ref:i,nextImpl:t}),function(){if((qe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function ny(t,i){return sc(4,2,t,i)}function iy(t,i){return sc(4,4,t,i)}function ry(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function sy(t,i,a){a=a!=null?a.concat([t]):null,sc(4,4,ry.bind(null,i,t),a)}function Ff(){}function ay(t,i){var a=mt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Vf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function oy(t,i){var a=mt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Vf(i,l[1]))return l[0];if(l=t(),Bs){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[l,i],l}function Gf(t,i,a){return a===void 0||(Yi&1073741824)!==0&&(Ne&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=l_(),we.lanes|=t,Vr|=t,a)}function ly(t,i,a,l){return gn(a,i)?a:xa.current!==null?(t=Gf(t,a,l),gn(t,i)||(bt=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&(Ne&261930)===0?(bt=!0,t.memoizedState=a):(t=l_(),we.lanes|=t,Vr|=t,i)}function uy(t,i,a,l,h){var d=ie.p;ie.p=d!==0&&8>d?d:8;var _=K.T,T={};K.T=T,$f(t,!1,i,a);try{var I=h(),U=K.S;if(U!==null&&U(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var G=qA(I,l);al(t,i,G,Sn(t))}else al(t,i,l,Sn(t))}catch($){al(t,i,{then:function(){},status:"rejected",reason:$},Sn())}finally{ie.p=d,_!==null&&T.types!==null&&(_.types=T.types),K.T=_}}function QA(){}function Kf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=cy(t).queue;uy(t,h,i,me,a===null?QA:function(){return hy(t),a(l)})}function cy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function hy(t){var i=cy(t);i.next===null&&(i=t.alternate.memoizedState),al(t,i.next.queue,{},Sn())}function Yf(){return Ht(Al)}function fy(){return mt().memoizedState}function dy(){return mt().memoizedState}function XA(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();t=Ir(a);var l=Cr(i,t,a);l!==null&&(fn(l,i,a),tl(l,i,a)),i={cache:Sf()},t.payload=i;return}i=i.return}}function ZA(t,i,a){var l=Sn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ac(t)?py(i,a):(a=hf(t,i,a,l),a!==null&&(fn(a,t,l),gy(a,i,l)))}function my(t,i,a){var l=Sn();al(t,i,a,l)}function al(t,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ac(t))py(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,a);if(h.hasEagerState=!0,h.eagerState=T,gn(T,_))return Bu(t,i,h,0),et===null&&zu(),!1}catch{}finally{}if(a=hf(t,i,h,l),a!==null)return fn(a,t,l),gy(a,i,l),!0}return!1}function $f(t,i,a,l){if(l={lane:2,revertLane:Rd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ac(t)){if(i)throw Error(s(479))}else i=hf(t,a,l,2),i!==null&&fn(i,t,2)}function ac(t){var i=t.alternate;return t===we||i!==null&&i===we}function py(t,i){ka=Wu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function gy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Co(t,a)}}var ol={readContext:Ht,use:nc,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};ol.useEffectEvent=ut;var yy={readContext:Ht,use:nc,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:Ht,useEffect:ey,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,rc(4194308,4,ry.bind(null,i,t),a)},useLayoutEffect:function(t,i){return rc(4194308,4,t,i)},useInsertionEffect:function(t,i){rc(4,2,t,i)},useMemo:function(t,i){var a=nn();i=i===void 0?null:i;var l=t();if(Bs){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=nn();if(a!==void 0){var h=a(i);if(Bs){Rn(!0);try{a(i)}finally{Rn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=ZA.bind(null,we,t),[l.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:function(t){t=jf(t);var i=t.queue,a=my.bind(null,we,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(t,i){var a=nn();return Gf(a,t,i)},useTransition:function(){var t=jf(!1);return t=uy.bind(null,we,t.queue,!0,!1),nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=we,h=nn();if(Ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),et===null)throw Error(s(349));(Ne&127)!==0||Ug(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ey(Bg.bind(null,l,d,t),[t]),l.flags|=2048,Pa(9,{destroy:void 0},zg.bind(null,l,d,a,i),null),a},useId:function(){var t=nn(),i=et.identifierPrefix;if(Ve){var a=bi,l=Ai;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=ec++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=FA++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Yf,useFormState:Qg,useActionState:Qg,useOptimistic:function(t){var i=nn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=$f.bind(null,we,!0,a),a.dispatch=i,[t,i]},useMemoCache:Uf,useCacheRefresh:function(){return nn().memoizedState=XA.bind(null,we)},useEffectEvent:function(t){var i=nn(),a={impl:t};return i.memoizedState=a,function(){if((qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qf={readContext:Ht,use:nc,useCallback:ay,useContext:Ht,useEffect:qf,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:iy,useMemo:oy,useReducer:ic,useRef:Wg,useState:function(){return ic($i)},useDebugValue:Ff,useDeferredValue:function(t,i){var a=mt();return ly(a,Xe.memoizedState,t,i)},useTransition:function(){var t=ic($i)[0],i=mt().memoizedState;return[typeof t=="boolean"?t:sl(t),i]},useSyncExternalStore:Pg,useId:fy,useHostTransitionStatus:Yf,useFormState:Xg,useActionState:Xg,useOptimistic:function(t,i){var a=mt();return qg(a,Xe,t,i)},useMemoCache:Uf,useCacheRefresh:dy};Qf.useEffectEvent=ty;var _y={readContext:Ht,use:nc,useCallback:ay,useContext:Ht,useEffect:qf,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:iy,useMemo:oy,useReducer:Bf,useRef:Wg,useState:function(){return Bf($i)},useDebugValue:Ff,useDeferredValue:function(t,i){var a=mt();return Xe===null?Gf(a,t,i):ly(a,Xe.memoizedState,t,i)},useTransition:function(){var t=Bf($i)[0],i=mt().memoizedState;return[typeof t=="boolean"?t:sl(t),i]},useSyncExternalStore:Pg,useId:fy,useHostTransitionStatus:Yf,useFormState:Jg,useActionState:Jg,useOptimistic:function(t,i){var a=mt();return Xe!==null?qg(a,Xe,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:dy};_y.useEffectEvent=ty;function Xf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:S({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=Ir(l);h.payload=i,a!=null&&(h.callback=a),i=Cr(t,h,l),i!==null&&(fn(i,t,l),tl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=Ir(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Cr(t,h,l),i!==null&&(fn(i,t,l),tl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Sn(),l=Ir(a);l.tag=2,i!=null&&(l.callback=i),i=Cr(t,l,a),i!==null&&(fn(i,t,a),tl(i,t,a))}};function vy(t,i,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!Yo(a,l)||!Yo(h,d):!0}function Ey(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Zf.enqueueReplaceState(i,i.state,null)}function js(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=S({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function Ty(t){Uu(t)}function Sy(t){console.error(t)}function Ay(t){Uu(t)}function oc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function by(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Jf(t,i,a){return a=Ir(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(t,i)},a}function wy(t){return t=Ir(t),t.tag=3,t}function Ry(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){by(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){by(i,a,l),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function JA(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Da(i,a,h,!0),a=_n.current,a!==null){switch(a.tag){case 31:case 13:return Ln===null?vc():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$u?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Ad(t,l,h)),!1;case 22:return a.flags|=65536,l===$u?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Ad(t,l,h)),!1}throw Error(s(435,a.tag))}return Ad(t,l,h),vc(),!1}if(Ve)return i=_n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==yf&&(t=Error(s(422),{cause:l}),Xo(Mn(t,a)))):(l!==yf&&(i=Error(s(423),{cause:l}),Xo(Mn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Mn(l,a),h=Jf(t.stateNode,l,h),Cf(t,h),ct!==4&&(ct=2)),!1;var d=Error(s(520),{cause:l});if(d=Mn(d,a),pl===null?pl=[d]:pl.push(d),ct!==4&&(ct=2),i===null)return!0;l=Mn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Jf(a.stateNode,l,t),Cf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=wy(h),Ry(h,t,a,l),Cf(a,h),!1}a=a.return}while(a!==null);return!1}var Wf=Error(s(461)),bt=!1;function qt(t,i,a,l){i.child=t===null?Ng(i,null,a,l):zs(i,t.child,a,l)}function Iy(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return ks(i),l=xf(t,i,a,_,d,h),T=kf(),t!==null&&!bt?(Lf(t,i,h),Qi(t,i,h)):(Ve&&T&&pf(i),i.flags|=1,qt(t,i,l,h),i.child)}function Cy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!ff(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Dy(t,i,d,l,h)):(t=Hu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!od(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(_,l)&&t.ref===i.ref)return Qi(t,i,h)}return i.flags|=1,t=qi(d,l),t.ref=i.ref,t.return=i,i.child=t}function Dy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Yo(d,l)&&t.ref===i.ref)if(bt=!1,i.pendingProps=l=d,od(t,h))(t.flags&131072)!==0&&(bt=!0);else return i.lanes=t.lanes,Qi(t,i,h)}return ed(t,i,a,l,h)}function Ny(t,i,a,l){var h=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(l=i.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return Oy(t,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ku(i,d!==null?d.cachePool:null),d!==null?Vg(i,d):Nf(),xg(i);else return l=i.lanes=536870912,Oy(t,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(Ku(i,d.cachePool),Vg(i,d),Nr(),i.memoizedState=null):(t!==null&&Ku(i,null),Nf(),Nr());return qt(t,i,h,a),i.child}function ll(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Oy(t,i,a,l,h){var d=bf();return d=d===null?null:{parent:St._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ku(i,null),Nf(),xg(i),t!==null&&Da(t,i,l,!0),i.childLanes=h,null}function lc(t,i){return i=cc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function My(t,i,a){return zs(i,t.child,null,a),t=lc(i,i.pendingProps),t.flags|=2,vn(i),i.memoizedState=null,t}function WA(t,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ve){if(l.mode==="hidden")return t=lc(i,l),i.lanes=536870912,ll(null,t);if(Mf(i),(t=tt)?(t=F_(t,kn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Sr!==null?{id:Ai,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=pg(t),a.return=i,i.child=a,jt=i,tt=null)):t=null,t===null)throw br(i);return i.lanes=536870912,null}return lc(i,l)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(Mf(i),h)if(i.flags&256)i.flags&=-257,i=My(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(bt||Da(t,i,a,!1),h=(a&t.childLanes)!==0,bt||h){if(l=et,l!==null&&(_=Do(l,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Os(t,_),fn(l,t,_),Wf;vc(),i=My(t,i,a)}else t=d.treeContext,tt=Pn(_.nextSibling),jt=i,Ve=!0,Ar=null,kn=!1,t!==null&&_g(i,t),i=lc(i,l),i.flags|=4096;return i}return t=qi(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function uc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function ed(t,i,a,l,h){return ks(i),a=xf(t,i,a,l,void 0,h),l=kf(),t!==null&&!bt?(Lf(t,i,h),Qi(t,i,h)):(Ve&&l&&pf(i),i.flags|=1,qt(t,i,a,h),i.child)}function Vy(t,i,a,l,h,d){return ks(i),i.updateQueue=null,a=Lg(i,l,a,h),kg(t),l=kf(),t!==null&&!bt?(Lf(t,i,d),Qi(t,i,d)):(Ve&&l&&pf(i),i.flags|=1,qt(t,i,a,d),i.child)}function xy(t,i,a,l,h){if(ks(i),i.stateNode===null){var d=wa,_=a.contextType;typeof _=="object"&&_!==null&&(d=Ht(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Zf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Rf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?Ht(_):wa,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Xf(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Zf.enqueueReplaceState(d,d.state,null),il(i,l,d,h),nl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,I=js(a,T);d.props=I;var U=d.context,G=a.contextType;_=wa,typeof G=="object"&&G!==null&&(_=Ht(G));var $=a.getDerivedStateFromProps;G=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||U!==_)&&Ey(i,d,l,_),Rr=!1;var z=i.memoizedState;d.state=z,il(i,l,d,h),nl(),U=i.memoizedState,T||z!==U||Rr?(typeof $=="function"&&(Xf(i,a,$,l),U=i.memoizedState),(I=Rr||vy(i,a,I,l,z,U,_))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=U),d.props=l,d.state=U,d.context=_,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,If(t,i),_=i.memoizedProps,G=js(a,_),d.props=G,$=i.pendingProps,z=d.context,U=a.contextType,I=wa,typeof U=="object"&&U!==null&&(I=Ht(U)),T=a.getDerivedStateFromProps,(U=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==$||z!==I)&&Ey(i,d,l,I),Rr=!1,z=i.memoizedState,d.state=z,il(i,l,d,h),nl();var H=i.memoizedState;_!==$||z!==H||Rr||t!==null&&t.dependencies!==null&&Fu(t.dependencies)?(typeof T=="function"&&(Xf(i,a,T,l),H=i.memoizedState),(G=Rr||vy(i,a,G,l,z,H,I)||t!==null&&t.dependencies!==null&&Fu(t.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=I,l=G):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,uc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=zs(i,t.child,null,h),i.child=zs(i,null,a,h)):qt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Qi(t,i,h),t}function ky(t,i,a,l){return Vs(),i.flags|=256,qt(t,i,a,l),i.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nd(t){return{baseLanes:t,cachePool:bg()}}function id(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Tn),t}function Ly(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(dt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ve){if(h?Dr(i):Nr(),(t=tt)?(t=F_(t,kn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Sr!==null?{id:Ai,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=pg(t),a.return=i,i.child=a,jt=i,tt=null)):t=null,t===null)throw br(i);return zd(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,h?(Nr(),h=i.mode,T=cc({mode:"hidden",children:T},h),l=Ms(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=nd(a),l.childLanes=id(t,_,a),i.memoizedState=td,ll(null,l)):(Dr(i),rd(i,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(d)i.flags&256?(Dr(i),i.flags&=-257,i=sd(t,i,a)):i.memoizedState!==null?(Nr(),i.child=t.child,i.flags|=128,i=null):(Nr(),T=l.fallback,h=i.mode,l=cc({mode:"visible",children:l.children},h),T=Ms(T,h,a,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,zs(i,t.child,null,a),l=i.child,l.memoizedState=nd(a),l.childLanes=id(t,_,a),i.memoizedState=td,i=ll(null,l));else if(Dr(i),zd(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var U=_.dgst;_=U,l=Error(s(419)),l.stack="",l.digest=_,Xo({value:l,source:null,stack:null}),i=sd(t,i,a)}else if(bt||Da(t,i,a,!1),_=(a&t.childLanes)!==0,bt||_){if(_=et,_!==null&&(l=Do(_,a),l!==0&&l!==I.retryLane))throw I.retryLane=l,Os(t,l),fn(_,t,l),Wf;Ud(T)||vc(),i=sd(t,i,a)}else Ud(T)?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,tt=Pn(T.nextSibling),jt=i,Ve=!0,Ar=null,kn=!1,t!==null&&_g(i,t),i=rd(i,l.children),i.flags|=4096);return i}return h?(Nr(),T=l.fallback,h=i.mode,I=t.child,U=I.sibling,l=qi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,U!==null?T=qi(U,T):(T=Ms(T,h,a,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,ll(null,l),l=i.child,T=t.child.memoizedState,T===null?T=nd(a):(h=T.cachePool,h!==null?(I=St._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=bg(),T={baseLanes:T.baseLanes|a,cachePool:h}),l.memoizedState=T,l.childLanes=id(t,_,a),i.memoizedState=td,ll(t.child,l)):(Dr(i),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function rd(t,i){return i=cc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function cc(t,i){return t=yn(22,t,null,i),t.lanes=0,t}function sd(t,i,a){return zs(i,t.child,null,a),t=rd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Py(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ef(t.return,i,a)}function ad(t,i,a,l,h,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function Uy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var _=dt.current,T=(_&2)!==0;if(T?(_=_&1|2,i.flags|=128):_&=1,re(dt,_),qt(t,i,l,a),l=Ve?Qo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Py(t,a,i);else if(t.tag===19)Py(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Ju(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ad(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Ju(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}ad(i,!0,a,null,d,l);break;case"together":ad(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Qi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Da(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=qi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function od(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Fu(t)))}function eb(t,i,a){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),wr(i,St,t.memoizedState.cache),Vs();break;case 27:case 5:ds(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:wr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Mf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ly(t,i,a):(Dr(i),t=Qi(t,i,a),t!==null?t.sibling:null);Dr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Da(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Uy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(dt,dt.current),l)break;return null;case 22:return i.lanes=0,Ny(t,i,a,i.pendingProps);case 24:wr(i,St,t.memoizedState.cache)}return Qi(t,i,a)}function zy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)bt=!0;else{if(!od(t,a)&&(i.flags&128)===0)return bt=!1,eb(t,i,a);bt=(t.flags&131072)!==0}else bt=!1,Ve&&(i.flags&1048576)!==0&&yg(i,Qo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ps(i.elementType),i.type=t,typeof t=="function")ff(t)?(l=js(t,l),i.tag=1,i=xy(null,i,t,l,a)):(i.tag=0,i=ed(null,i,t,l,a));else{if(t!=null){var h=t.$$typeof;if(h===de){i.tag=11,i=Iy(null,i,t,l,a);break e}else if(h===R){i.tag=14,i=Cy(null,i,t,l,a);break e}}throw i=We(t)||t,Error(s(306,i,""))}}return i;case 0:return ed(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=js(l,i.pendingProps),xy(t,i,l,h,a);case 3:e:{if(Dt(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,If(t,i),il(i,l,null,a);var _=i.memoizedState;if(l=_.cache,wr(i,St,l),l!==d.cache&&Tf(i,[St],a,!0),nl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=ky(t,i,l,a);break e}else if(l!==h){h=Mn(Error(s(424)),i),Xo(h),i=ky(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tt=Pn(t.firstChild),jt=i,Ve=!0,Ar=null,kn=!0,a=Ng(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),l===h){i=Qi(t,i,a);break e}qt(t,i,l,a)}i=i.child}return i;case 26:return uc(t,i),t===null?(a=X_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ve||(a=i.type,t=i.pendingProps,l=Rc(Re.current).createElement(a),l[vt]=i,l[xt]=t,Ft(l,a,t),Et(l),i.stateNode=l):i.memoizedState=X_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ds(i),t===null&&Ve&&(l=i.stateNode=Y_(i.type,i.pendingProps,Re.current),jt=i,kn=!0,h=tt,Ur(i.type)?(Bd=h,tt=Pn(l.firstChild)):tt=h),qt(t,i,i.pendingProps.children,a),uc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ve&&((h=l=tt)&&(l=Nb(l,i.type,i.pendingProps,kn),l!==null?(i.stateNode=l,jt=i,tt=Pn(l.firstChild),kn=!1,h=!0):h=!1),h||br(i)),ds(i),h=i.type,d=i.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,kd(h,d)?l=null:_!==null&&kd(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=xf(t,i,GA,null,null,a),Al._currentValue=h),uc(t,i),qt(t,i,l,a),i.child;case 6:return t===null&&Ve&&((t=a=tt)&&(a=Ob(a,i.pendingProps,kn),a!==null?(i.stateNode=a,jt=i,tt=null,t=!0):t=!1),t||br(i)),null;case 13:return Ly(t,i,a);case 4:return Dt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=zs(i,null,l,a):qt(t,i,l,a),i.child;case 11:return Iy(t,i,i.type,i.pendingProps,a);case 7:return qt(t,i,i.pendingProps,a),i.child;case 8:return qt(t,i,i.pendingProps.children,a),i.child;case 12:return qt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,wr(i,i.type,l.value),qt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ks(i),h=Ht(h),l=l(h),i.flags|=1,qt(t,i,l,a),i.child;case 14:return Cy(t,i,i.type,i.pendingProps,a);case 15:return Dy(t,i,i.type,i.pendingProps,a);case 19:return Uy(t,i,a);case 31:return WA(t,i,a);case 22:return Ny(t,i,a,i.pendingProps);case 24:return ks(i),l=Ht(St),t===null?(h=bf(),h===null&&(h=et,d=Sf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Rf(i),wr(i,St,h)):((t.lanes&a)!==0&&(If(t,i),il(i,null,null,a),nl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),wr(i,St,l)):(l=d.cache,wr(i,St,l),l!==h.cache&&Tf(i,[St],a,!0))),qt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Xi(t){t.flags|=4}function ld(t,i,a,l,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(f_())t.flags|=8192;else throw Us=$u,wf}else t.flags&=-16777217}function By(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tv(i))if(f_())t.flags|=8192;else throw Us=$u,wf}function hc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?yu():536870912,t.lanes|=i,ja|=i)}function ul(t,i){if(!Ve)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function tb(t,i,a){var l=i.pendingProps;switch(gf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(St),rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ca(i)?Xi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_f())),nt(i),null;case 26:var h=i.type,d=i.memoizedState;return t===null?(Xi(i),d!==null?(nt(i),By(i,d)):(nt(i),ld(i,h,null,l,a))):d?d!==t.memoizedState?(Xi(i),nt(i),By(i,d)):(nt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Xi(i),nt(i),ld(i,h,t,l,a)),null;case 27:if(aa(i),a=Re.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}t=oe.current,Ca(i)?vg(i):(t=Y_(h,l,a),i.stateNode=t,Xi(i))}return nt(i),null;case 5:if(aa(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}if(d=oe.current,Ca(i))vg(i);else{var _=Rc(Re.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}d[vt]=i,d[xt]=l;e:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break e;for(;_.sibling===null;){if(_.return===null||_.return===i)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;e:switch(Ft(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xi(i)}}return nt(i),ld(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Xi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Re.current,Ca(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=jt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[vt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||L_(t.nodeValue,a)),t||br(i,!0)}else t=Rc(t).createTextNode(l),t[vt]=i,i.stateNode=t}return nt(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ca(i),a!==null){if(t===null){if(!l)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[vt]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),t=!1}else a=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(vn(i),i):(vn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return nt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ca(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[vt]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else h=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(vn(i),i):(vn(i),null)}return vn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),hc(i,i.updateQueue),nt(i),null);case 4:return rt(),t===null&&Nd(i.stateNode.containerInfo),nt(i),null;case 10:return Ki(i.type),nt(i),null;case 19:if(Q(dt),l=i.memoizedState,l===null)return nt(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)ul(l,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Ju(t),d!==null){for(i.flags|=128,ul(l,!1),t=d.updateQueue,i.updateQueue=t,hc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)mg(a,t),a=a.sibling;return re(dt,dt.current&1|2),Ve&&Fi(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&en()>gc&&(i.flags|=128,h=!0,ul(l,!1),i.lanes=4194304)}else{if(!h)if(t=Ju(d),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,hc(i,t),ul(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ve)return nt(i),null}else 2*en()-l.renderingStartTime>gc&&a!==536870912&&(i.flags|=128,h=!0,ul(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=en(),t.sibling=null,a=dt.current,re(dt,h?a&1|2:a&1),Ve&&Fi(i,l.treeForkCount),t):(nt(i),null);case 22:case 23:return vn(i),Of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),a=i.updateQueue,a!==null&&hc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&Q(Ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(St),nt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function nb(t,i){switch(gf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(St),rt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return aa(i),null;case 31:if(i.memoizedState!==null){if(vn(i),i.alternate===null)throw Error(s(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(vn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(dt),null;case 4:return rt(),null;case 10:return Ki(i.type),null;case 22:case 23:return vn(i),Of(),t!==null&&Q(Ls),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(St),null;case 25:return null;default:return null}}function jy(t,i){switch(gf(i),i.tag){case 3:Ki(St),rt();break;case 26:case 27:case 5:aa(i);break;case 4:rt();break;case 31:i.memoizedState!==null&&vn(i);break;case 13:vn(i);break;case 19:Q(dt);break;case 10:Ki(i.type);break;case 22:case 23:vn(i),Of(),t!==null&&Q(Ls);break;case 24:Ki(St)}}function cl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(T){Ye(i,i.return,T)}}function Or(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=i;var I=a,U=T;try{U()}catch(G){Ye(h,I,G)}}}l=l.next}while(l!==d)}}catch(G){Ye(i,i.return,G)}}function Hy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Mg(i,a)}catch(l){Ye(t,t.return,l)}}}function qy(t,i,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,i,l)}}function hl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ye(t,i,h)}}function wi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,i,h)}else a.current=null}function Fy(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function ud(t,i,a){try{var l=t.stateNode;bb(l,t.type,a,i),l[xt]=i}catch(h){Ye(t,t.return,h)}}function Gy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ur(t.type)||t.tag===4}function cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Kn));else if(l!==4&&(l===27&&Ur(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(hd(t,i,a),t=t.sibling;t!==null;)hd(t,i,a),t=t.sibling}function fc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Ur(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(fc(t,i,a),t=t.sibling;t!==null;)fc(t,i,a),t=t.sibling}function Ky(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,l,a),i[vt]=t,i[xt]=a}catch(d){Ye(t,t.return,d)}}var Zi=!1,wt=!1,fd=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function ib(t,i){if(t=t.containerInfo,Vd=Vc,t=sg(t),sf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,T=-1,I=-1,U=0,G=0,$=t,z=null;t:for(;;){for(var H;$!==a||h!==0&&$.nodeType!==3||(T=_+h),$!==d||l!==0&&$.nodeType!==3||(I=_+l),$.nodeType===3&&(_+=$.nodeValue.length),(H=$.firstChild)!==null;)z=$,$=H;for(;;){if($===t)break t;if(z===a&&++U===h&&(T=_),z===d&&++G===l&&(I=_),(H=$.nextSibling)!==null)break;$=z,z=$.parentNode}$=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(xd={focusedElem:t,selectionRange:a},Vc=!1,Lt=i;Lt!==null;)if(i=Lt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Lt=t;else for(;Lt!==null;){switch(i=Lt,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ue=js(a.type,h);t=l.getSnapshotBeforeUpdate(ue,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ye){Ye(a,a.return,ye)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Lt=t;break}Lt=i.return}}function $y(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),l&4&&cl(5,a);break;case 1:if(Wi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){Ye(a,a.return,_)}else{var h=js(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ye(a,a.return,_)}}l&64&&Hy(a),l&512&&hl(a,a.return);break;case 3:if(Wi(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Mg(t,i)}catch(_){Ye(a,a.return,_)}}break;case 27:i===null&&l&4&&Ky(a);case 26:case 5:Wi(t,a),i===null&&l&4&&Fy(a),l&512&&hl(a,a.return);break;case 12:Wi(t,a);break;case 31:Wi(t,a),l&4&&Zy(t,a);break;case 13:Wi(t,a),l&4&&Jy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fb.bind(null,a),Mb(t,a))));break;case 22:if(l=a.memoizedState!==null||Zi,!l){i=i!==null&&i.memoizedState!==null||wt,h=Zi;var d=wt;Zi=l,(wt=i)&&!d?er(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Zi=h,wt=d}break;case 30:break;default:Wi(t,a)}}function Qy(t){var i=t.alternate;i!==null&&(t.alternate=null,Qy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ha(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var at=null,ln=!1;function Ji(t,i,a){for(a=a.child;a!==null;)Xy(t,i,a),a=a.sibling}function Xy(t,i,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Hn,a)}catch{}switch(a.tag){case 26:wt||wi(a,i),Ji(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:wt||wi(a,i);var l=at,h=ln;Ur(a.type)&&(at=a.stateNode,ln=!1),Ji(t,i,a),El(a.stateNode),at=l,ln=h;break;case 5:wt||wi(a,i);case 6:if(l=at,h=ln,at=null,Ji(t,i,a),at=l,ln=h,at!==null)if(ln)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(a.stateNode)}catch(d){Ye(a,i,d)}else try{at.removeChild(a.stateNode)}catch(d){Ye(a,i,d)}break;case 18:at!==null&&(ln?(t=at,H_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Qa(t)):H_(at,a.stateNode));break;case 4:l=at,h=ln,at=a.stateNode.containerInfo,ln=!0,Ji(t,i,a),at=l,ln=h;break;case 0:case 11:case 14:case 15:Or(2,a,i),wt||Or(4,a,i),Ji(t,i,a);break;case 1:wt||(wi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&qy(a,i,l)),Ji(t,i,a);break;case 21:Ji(t,i,a);break;case 22:wt=(l=wt)||a.memoizedState!==null,Ji(t,i,a),wt=l;break;default:Ji(t,i,a)}}function Zy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qa(t)}catch(a){Ye(i,i.return,a)}}}function Jy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qa(t)}catch(a){Ye(i,i.return,a)}}function rb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Yy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Yy),i;default:throw Error(s(435,t.tag))}}function dc(t,i){var a=rb(t);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=db.bind(null,t,l);l.then(h,h)}})}function un(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Ur(T.type)){at=T.stateNode,ln=!1;break e}break;case 5:at=T.stateNode,ln=!1;break e;case 3:case 4:at=T.stateNode.containerInfo,ln=!0;break e}T=T.return}if(at===null)throw Error(s(160));Xy(d,_,h),at=null,ln=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Wy(i,t),i=i.sibling}var Jn=null;function Wy(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:un(i,t),cn(t),l&4&&(Or(3,t,t.return),cl(3,t),Or(5,t,t.return));break;case 1:un(i,t),cn(t),l&512&&(wt||a===null||wi(a,a.return)),l&64&&Zi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Jn;if(un(i,t),cn(t),l&512&&(wt||a===null||wi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hi]||d[vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ft(d,l,a),d[vt]=t,Et(d),l=d;break e;case"link":var _=W_("link","href",h).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;case"meta":if(_=W_("meta","content",h).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[vt]=t,Et(d),l=d}t.stateNode=l}else ev(h,t.type,t.stateNode);else t.stateNode=J_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?ev(h,t.type,t.stateNode):J_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ud(t,t.memoizedProps,a.memoizedProps)}break;case 27:un(i,t),cn(t),l&512&&(wt||a===null||wi(a,a.return)),a!==null&&l&4&&ud(t,t.memoizedProps,a.memoizedProps);break;case 5:if(un(i,t),cn(t),l&512&&(wt||a===null||wi(a,a.return)),t.flags&32){h=t.stateNode;try{on(h,"")}catch(ue){Ye(t,t.return,ue)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,ud(t,h,a!==null?a.memoizedProps:h)),l&1024&&(fd=!0);break;case 6:if(un(i,t),cn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ue){Ye(t,t.return,ue)}}break;case 3:if(Dc=null,h=Jn,Jn=Ic(i.containerInfo),un(i,t),Jn=h,cn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qa(i.containerInfo)}catch(ue){Ye(t,t.return,ue)}fd&&(fd=!1,e_(t));break;case 4:l=Jn,Jn=Ic(t.stateNode.containerInfo),un(i,t),cn(t),Jn=l;break;case 12:un(i,t),cn(t);break;case 31:un(i,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dc(t,l)));break;case 13:un(i,t),cn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pc=en()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dc(t,l)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,U=Zi,G=wt;if(Zi=U||h,wt=G||I,un(i,t),wt=G,Zi=U,cn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||Zi||wt||Hs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var $=I.memoizedProps.style,z=$!=null&&$.hasOwnProperty("display")?$.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ue){Ye(I,I.return,ue)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(ue){Ye(I,I.return,ue)}}}else if(i.tag===18){if(a===null){I=i;try{var H=I.stateNode;h?q_(H,!0):q_(I.stateNode,!1)}catch(ue){Ye(I,I.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,dc(t,a))));break;case 19:un(i,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dc(t,l)));break;case 30:break;case 21:break;default:un(i,t),cn(t)}}function cn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(Gy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=cd(t);fc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(on(_,""),a.flags&=-33);var T=cd(t);fc(t,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,U=cd(t);hd(t,U,I);break;default:throw Error(s(161))}}catch(G){Ye(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function e_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;e_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Wi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$y(t,i.alternate,i),i=i.sibling}function Hs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Or(4,i,i.return),Hs(i);break;case 1:wi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&qy(i,i.return,a),Hs(i);break;case 27:El(i.stateNode);case 26:case 5:wi(i,i.return),Hs(i);break;case 22:i.memoizedState===null&&Hs(i);break;case 30:Hs(i);break;default:Hs(i)}t=t.sibling}}function er(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:er(h,d,a),cl(4,d);break;case 1:if(er(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Ye(l,l.return,U)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Og(I[h],T)}catch(U){Ye(l,l.return,U)}}a&&_&64&&Hy(d),hl(d,d.return);break;case 27:Ky(d);case 26:case 5:er(h,d,a),a&&l===null&&_&4&&Fy(d),hl(d,d.return);break;case 12:er(h,d,a);break;case 31:er(h,d,a),a&&_&4&&Zy(h,d);break;case 13:er(h,d,a),a&&_&4&&Jy(h,d);break;case 22:d.memoizedState===null&&er(h,d,a),hl(d,d.return);break;case 30:break;default:er(h,d,a)}i=i.sibling}}function dd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zo(a))}function md(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Zo(t))}function Wn(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)t_(t,i,a,l),i=i.sibling}function t_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Wn(t,i,a,l),h&2048&&cl(9,i);break;case 1:Wn(t,i,a,l);break;case 3:Wn(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Zo(t)));break;case 12:if(h&2048){Wn(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ye(i,i.return,I)}}else Wn(t,i,a,l);break;case 31:Wn(t,i,a,l);break;case 13:Wn(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?Wn(t,i,a,l):fl(t,i):d._visibility&2?Wn(t,i,a,l):(d._visibility|=2,Ua(t,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&dd(_,i);break;case 24:Wn(t,i,a,l),h&2048&&md(i.alternate,i);break;default:Wn(t,i,a,l)}}function Ua(t,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,_=i,T=a,I=l,U=_.flags;switch(_.tag){case 0:case 11:case 15:Ua(d,_,T,I,h),cl(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?Ua(d,_,T,I,h):fl(d,_):(G._visibility|=2,Ua(d,_,T,I,h)),h&&U&2048&&dd(_.alternate,_);break;case 24:Ua(d,_,T,I,h),h&&U&2048&&md(_.alternate,_);break;default:Ua(d,_,T,I,h)}i=i.sibling}}function fl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:fl(a,l),h&2048&&dd(l.alternate,l);break;case 24:fl(a,l),h&2048&&md(l.alternate,l);break;default:fl(a,l)}i=i.sibling}}var dl=8192;function za(t,i,a){if(t.subtreeFlags&dl)for(t=t.child;t!==null;)n_(t,i,a),t=t.sibling}function n_(t,i,a){switch(t.tag){case 26:za(t,i,a),t.flags&dl&&t.memoizedState!==null&&Fb(a,Jn,t.memoizedState,t.memoizedProps);break;case 5:za(t,i,a);break;case 3:case 4:var l=Jn;Jn=Ic(t.stateNode.containerInfo),za(t,i,a),Jn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=dl,dl=16777216,za(t,i,a),dl=l):za(t,i,a));break;default:za(t,i,a)}}function i_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ml(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,s_(l,t)}i_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r_(t),t=t.sibling}function r_(t){switch(t.tag){case 0:case 11:case 15:ml(t),t.flags&2048&&Or(9,t,t.return);break;case 3:ml(t);break;case 12:ml(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,mc(t)):ml(t);break;default:ml(t)}}function mc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,s_(l,t)}i_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Or(8,i,i.return),mc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,mc(i));break;default:mc(i)}t=t.sibling}}function s_(t,i){for(;Lt!==null;){var a=Lt;switch(a.tag){case 0:case 11:case 15:Or(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Lt=l;else e:for(a=t;Lt!==null;){l=Lt;var h=l.sibling,d=l.return;if(Qy(l),l===a){Lt=null;break e}if(h!==null){h.return=d,Lt=h;break e}Lt=d}}}var sb={getCacheForType:function(t){var i=Ht(St),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return Ht(St).controller.signal}},ab=typeof WeakMap=="function"?WeakMap:Map,qe=0,et=null,Ce=null,Ne=0,Ke=0,En=null,Mr=!1,Ba=!1,pd=!1,tr=0,ct=0,Vr=0,qs=0,gd=0,Tn=0,ja=0,pl=null,hn=null,yd=!1,pc=0,a_=0,gc=1/0,yc=null,xr=null,Ot=0,kr=null,Ha=null,nr=0,_d=0,vd=null,o_=null,gl=0,Ed=null;function Sn(){return(qe&2)!==0&&Ne!==0?Ne&-Ne:K.T!==null?Rd():_u()}function l_(){if(Tn===0)if((Ne&536870912)===0||Ve){var t=gs;gs<<=1,(gs&3932160)===0&&(gs=262144),Tn=t}else Tn=536870912;return t=_n.current,t!==null&&(t.flags|=32),Tn}function fn(t,i,a){(t===et&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)&&(qa(t,0),Lr(t,Ne,Tn,!1)),ys(t,a),((qe&2)===0||t!==et)&&(t===et&&((qe&2)===0&&(qs|=a),ct===4&&Lr(t,Ne,Tn,!1)),Ri(t))}function u_(t,i,a){if((qe&6)!==0)throw Error(s(327));var l=!a&&(i&127)===0&&(i&t.expiredLanes)===0||qn(t,i),h=l?ub(t,i):Sd(t,i,!0),d=l;do{if(h===0){Ba&&!l&&Lr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!ob(a)){h=Sd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var T=t;h=pl;var I=T.current.memoizedState.isDehydrated;if(I&&(qa(T,_).flags|=256),_=Sd(T,_,!1),_!==2){if(pd&&!I){T.errorRecoveryDisabledLanes|=d,qs|=d,h=4;break e}d=hn,hn=h,d!==null&&(hn===null?hn=d:hn.push.apply(hn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){qa(t,0),Lr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Lr(l,i,Tn,!Mr);break e;case 2:hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=pc+300-en(),10<h)){if(Lr(l,i,Tn,!Mr),li(l,0,!0)!==0)break e;nr=i,l.timeoutHandle=B_(c_.bind(null,l,a,hn,yc,yd,i,Tn,qs,ja,Mr,d,"Throttled",-0,0),h);break e}c_(l,a,hn,yc,yd,i,Tn,qs,ja,Mr,d,null,-0,0)}}break}while(!0);Ri(t)}function c_(t,i,a,l,h,d,_,T,I,U,G,$,z,H){if(t.timeoutHandle=-1,$=i.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},n_(i,d,$);var ue=(d&62914560)===d?pc-en():(d&4194048)===d?a_-en():0;if(ue=Gb($,ue),ue!==null){nr=d,t.cancelPendingCommit=ue(__.bind(null,t,i,d,a,l,h,_,T,I,G,$,null,z,H)),Lr(t,d,_,!U);return}}__(t,i,d,a,l,h,_,T,I)}function ob(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!gn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(t,i,a,l){i&=~gd,i&=~qs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-ht(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&_s(t,a,i)}function _c(){return(qe&6)===0?(yl(0),!1):!0}function Td(){if(Ce!==null){if(Ke===0)var t=Ce.return;else t=Ce,Gi=xs=null,Pf(t),Va=null,Wo=0,t=Ce;for(;t!==null;)jy(t.alternate,t),t=t.return;Ce=null}}function qa(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ib(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nr=0,Td(),et=t,Ce=a=qi(t.current,null),Ne=i,Ke=0,En=null,Mr=!1,Ba=qn(t,i),pd=!1,ja=Tn=gd=qs=Vr=ct=0,hn=pl=null,yd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-ht(l),d=1<<h;i|=t[h],l&=~d}return tr=i,zu(),a}function h_(t,i){we=null,K.H=ol,i===Ma||i===Yu?(i=Ig(),Ke=3):i===wf?(i=Ig(),Ke=4):Ke=i===Wf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,En=i,Ce===null&&(ct=1,oc(t,Mn(i,t.current)))}function f_(){var t=_n.current;return t===null?!0:(Ne&4194048)===Ne?Ln===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?t===Ln:!1}function d_(){var t=K.H;return K.H=ol,t===null?ol:t}function m_(){var t=K.A;return K.A=sb,t}function vc(){ct=4,Mr||(Ne&4194048)!==Ne&&_n.current!==null||(Ba=!0),(Vr&134217727)===0&&(qs&134217727)===0||et===null||Lr(et,Ne,Tn,!1)}function Sd(t,i,a){var l=qe;qe|=2;var h=d_(),d=m_();(et!==t||Ne!==i)&&(yc=null,qa(t,i)),i=!1;var _=ct;e:do try{if(Ke!==0&&Ce!==null){var T=Ce,I=En;switch(Ke){case 8:Td(),_=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(i=!0);var U=Ke;if(Ke=0,En=null,Fa(t,T,I,U),a&&Ba){_=0;break e}break;default:U=Ke,Ke=0,En=null,Fa(t,T,I,U)}}lb(),_=ct;break}catch(G){h_(t,G)}while(!0);return i&&t.shellSuspendCounter++,Gi=xs=null,qe=l,K.H=h,K.A=d,Ce===null&&(et=null,Ne=0,zu()),_}function lb(){for(;Ce!==null;)p_(Ce)}function ub(t,i){var a=qe;qe|=2;var l=d_(),h=m_();et!==t||Ne!==i?(yc=null,gc=en()+500,qa(t,i)):Ba=qn(t,i);e:do try{if(Ke!==0&&Ce!==null){i=Ce;var d=En;t:switch(Ke){case 1:Ke=0,En=null,Fa(t,i,d,1);break;case 2:case 9:if(wg(d)){Ke=0,En=null,g_(i);break}i=function(){Ke!==2&&Ke!==9||et!==t||(Ke=7),Ri(t)},d.then(i,i);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:wg(d)?(Ke=0,En=null,g_(i)):(Ke=0,En=null,Fa(t,i,d,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var T=Ce;if(_?tv(_):T.stateNode.complete){Ke=0,En=null;var I=T.sibling;if(I!==null)Ce=I;else{var U=T.return;U!==null?(Ce=U,Ec(U)):Ce=null}break t}}Ke=0,En=null,Fa(t,i,d,5);break;case 6:Ke=0,En=null,Fa(t,i,d,6);break;case 8:Td(),ct=6;break e;default:throw Error(s(462))}}cb();break}catch(G){h_(t,G)}while(!0);return Gi=xs=null,K.H=l,K.A=h,qe=a,Ce!==null?0:(et=null,Ne=0,zu(),ct)}function cb(){for(;Ce!==null&&!Zh();)p_(Ce)}function p_(t){var i=zy(t.alternate,t,tr);t.memoizedProps=t.pendingProps,i===null?Ec(t):Ce=i}function g_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Vy(a,i,i.pendingProps,i.type,void 0,Ne);break;case 11:i=Vy(a,i,i.pendingProps,i.type.render,i.ref,Ne);break;case 5:Pf(i);default:jy(a,i),i=Ce=mg(i,tr),i=zy(a,i,tr)}t.memoizedProps=t.pendingProps,i===null?Ec(t):Ce=i}function Fa(t,i,a,l){Gi=xs=null,Pf(i),Va=null,Wo=0;var h=i.return;try{if(JA(t,h,i,a,Ne)){ct=1,oc(t,Mn(a,t.current)),Ce=null;return}}catch(d){if(h!==null)throw Ce=h,d;ct=1,oc(t,Mn(a,t.current)),Ce=null;return}i.flags&32768?(Ve||l===1?t=!0:Ba||(Ne&536870912)!==0?t=!1:(Mr=t=!0,(l===2||l===9||l===3||l===6)&&(l=_n.current,l!==null&&l.tag===13&&(l.flags|=16384))),y_(i,t)):Ec(i)}function Ec(t){var i=t;do{if((i.flags&32768)!==0){y_(i,Mr);return}t=i.return;var a=tb(i.alternate,i,tr);if(a!==null){Ce=a;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=t}while(i!==null);ct===0&&(ct=5)}function y_(t,i){do{var a=nb(t.alternate,t);if(a!==null){a.flags&=32767,Ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ce=t;return}Ce=t=a}while(t!==null);ct=6,Ce=null}function __(t,i,a,l,h,d,_,T,I){t.cancelPendingCommit=null;do Tc();while(Ot!==0);if((qe&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=cf,ef(t,a,d,_,T,I),t===et&&(Ce=et=null,Ne=0),Ha=i,kr=t,nr=a,_d=d,vd=h,o_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mb(fr,function(){return A_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,h=ie.p,ie.p=2,_=qe,qe|=4;try{ib(t,i,a)}finally{qe=_,ie.p=h,K.T=l}}Ot=1,v_(),E_(),T_()}}function v_(){if(Ot===1){Ot=0;var t=kr,i=Ha,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=ie.p;ie.p=2;var h=qe;qe|=4;try{Wy(i,t);var d=xd,_=sg(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&rg(T.ownerDocument.documentElement,T)){if(I!==null&&sf(T)){var U=I.start,G=I.end;if(G===void 0&&(G=U),"selectionStart"in T)T.selectionStart=U,T.selectionEnd=Math.min(G,T.value.length);else{var $=T.ownerDocument||document,z=$&&$.defaultView||window;if(z.getSelection){var H=z.getSelection(),ue=T.textContent.length,ye=Math.min(I.start,ue),Je=I.end===void 0?ye:Math.min(I.end,ue);!H.extend&&ye>Je&&(_=Je,Je=ye,ye=_);var x=ig(T,ye),N=ig(T,Je);if(x&&N&&(H.rangeCount!==1||H.anchorNode!==x.node||H.anchorOffset!==x.offset||H.focusNode!==N.node||H.focusOffset!==N.offset)){var P=$.createRange();P.setStart(x.node,x.offset),H.removeAllRanges(),ye>Je?(H.addRange(P),H.extend(N.node,N.offset)):(P.setEnd(N.node,N.offset),H.addRange(P))}}}}for($=[],H=T;H=H.parentNode;)H.nodeType===1&&$.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<$.length;T++){var Y=$[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Vc=!!Vd,xd=Vd=null}finally{qe=h,ie.p=l,K.T=a}}t.current=i,Ot=2}}function E_(){if(Ot===2){Ot=0;var t=kr,i=Ha,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=ie.p;ie.p=2;var h=qe;qe|=4;try{$y(t,i.alternate,i)}finally{qe=h,ie.p=l,K.T=a}}Ot=3}}function T_(){if(Ot===4||Ot===3){Ot=0,hu();var t=kr,i=Ha,a=nr,l=o_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ot=5:(Ot=0,Ha=kr=null,S_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(xr=null),zi(a),i=i.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Hn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,h=ie.p,ie.p=2,K.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{K.T=i,ie.p=h}}(nr&3)!==0&&Tc(),Ri(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===Ed?gl++:(gl=0,Ed=t):gl=0,yl(0)}}function S_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Zo(i)))}function Tc(){return v_(),E_(),T_(),A_()}function A_(){if(Ot!==5)return!1;var t=kr,i=_d;_d=0;var a=zi(nr),l=K.T,h=ie.p;try{ie.p=32>a?32:a,K.T=null,a=vd,vd=null;var d=kr,_=nr;if(Ot=0,Ha=kr=null,nr=0,(qe&6)!==0)throw Error(s(331));var T=qe;if(qe|=4,r_(d.current),t_(d,d.current,_,a),qe=T,yl(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Hn,d)}catch{}return!0}finally{ie.p=h,K.T=l,S_(t,i)}}function b_(t,i,a){i=Mn(a,i),i=Jf(t.stateNode,i,2),t=Cr(t,i,2),t!==null&&(ys(t,2),Ri(t))}function Ye(t,i,a){if(t.tag===3)b_(t,t,a);else for(;i!==null;){if(i.tag===3){b_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){t=Mn(a,t),a=wy(2),l=Cr(i,a,2),l!==null&&(Ry(a,l,i,t),ys(l,2),Ri(l));break}}i=i.return}}function Ad(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new ab;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(pd=!0,h.add(a),t=hb.bind(null,t,i,a),i.then(t,t))}function hb(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,et===t&&(Ne&a)===a&&(ct===4||ct===3&&(Ne&62914560)===Ne&&300>en()-pc?(qe&2)===0&&qa(t,0):gd|=a,ja===Ne&&(ja=0)),Ri(t)}function w_(t,i){i===0&&(i=yu()),t=Os(t,i),t!==null&&(ys(t,i),Ri(t))}function fb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),w_(t,a)}function db(t,i){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),w_(t,a)}function mb(t,i){return Nt(t,i)}var Sc=null,Ga=null,bd=!1,Ac=!1,wd=!1,Pr=0;function Ri(t){t!==Ga&&t.next===null&&(Ga===null?Sc=Ga=t:Ga=Ga.next=t),Ac=!0,bd||(bd=!0,gb())}function yl(t,i){if(!wd&&Ac){wd=!0;do for(var a=!1,l=Sc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-ht(42|t)+1)-1,d&=h&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,D_(l,d))}else d=Ne,d=li(l,l===et?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||qn(l,d)||(a=!0,D_(l,d));l=l.next}while(a);wd=!1}}function pb(){R_()}function R_(){Ac=bd=!1;var t=0;Pr!==0&&Rb()&&(t=Pr);for(var i=en(),a=null,l=Sc;l!==null;){var h=l.next,d=I_(l,i);d===0?(l.next=null,a===null?Sc=h:a.next=h,h===null&&(Ga=a)):(a=l,(t!==0||(d&3)!==0)&&(Ac=!0)),l=h}Ot!==0&&Ot!==5||yl(t),Pr!==0&&(Pr=0)}function I_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-ht(d),T=1<<_,I=h[_];I===-1?((T&a)===0||(T&l)!==0)&&(h[_]=Wh(T,i)):I<=i&&(t.expiredLanes|=T),d&=~T}if(i=et,a=Ne,a=li(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&hr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||qn(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&hr(l),zi(a)){case 2:case 8:a=Io;break;case 32:a=fr;break;case 268435456:a=fu;break;default:a=fr}return l=C_.bind(null,t),a=Nt(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&hr(l),t.callbackPriority=2,t.callbackNode=null,2}function C_(t,i){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Tc()&&t.callbackNode!==a)return null;var l=Ne;return l=li(t,t===et?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(u_(t,l,i),I_(t,en()),t.callbackNode!=null&&t.callbackNode===a?C_.bind(null,t):null)}function D_(t,i){if(Tc())return null;u_(t,i,!0)}function gb(){Cb(function(){(qe&6)!==0?Nt(Ro,pb):R_()})}function Rd(){if(Pr===0){var t=Na;t===0&&(t=ai,ai<<=1,(ai&261888)===0&&(ai=256)),Pr=t}return Pr}function N_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pa(""+t)}function O_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function yb(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=N_((h[xt]||null).action),_=l.submitter;_&&(i=(i=_[xt]||null)?N_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new vi("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pr!==0){var I=_?O_(h,_):new FormData(h);Kf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=_?O_(h,_):new FormData(h),Kf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Id=0;Id<uf.length;Id++){var Cd=uf[Id],_b=Cd.toLowerCase(),vb=Cd[0].toUpperCase()+Cd.slice(1);Zn(_b,"on"+vb)}Zn(lg,"onAnimationEnd"),Zn(ug,"onAnimationIteration"),Zn(cg,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(kA,"onTransitionRun"),Zn(LA,"onTransitionStart"),Zn(PA,"onTransitionCancel"),Zn(hg,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function M_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],I=T.instance,U=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=U;try{d(h)}catch(G){Uu(G)}h.currentTarget=null,d=I}else for(_=0;_<l.length;_++){if(T=l[_],I=T.instance,U=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=U;try{d(h)}catch(G){Uu(G)}h.currentTarget=null,d=I}}}}function De(t,i){var a=i[ca];a===void 0&&(a=i[ca]=new Set);var l=t+"__bubble";a.has(l)||(V_(i,t,2,!1),a.add(l))}function Dd(t,i,a){var l=0;i&&(l|=4),V_(a,t,l,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Nd(t){if(!t[bc]){t[bc]=!0,No.forEach(function(a){a!=="selectionchange"&&(Eb.has(a)||Dd(a,!1,t),Dd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bc]||(i[bc]=!0,Dd("selectionchange",!1,i))}}function V_(t,i,a,l){switch(lv(i)){case 2:var h=$b;break;case 8:h=Qb;break;default:h=Gd}a=h.bind(null,i,a,t),h=void 0,!As||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Od(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h)break;if(_===4)for(_=l.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;T!==null;){if(_=fi(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){l=d=_;continue e}T=T.parentNode}}l=l.return}_r(function(){var U=d,G=Cn(a),$=[];e:{var z=fg.get(t);if(z!==void 0){var H=vi,ue=t;switch(t){case"keypress":if(ws(a)===0)break e;case"keydown":case"keyup":H=ku;break;case"focusin":ue="focus",H=Is;break;case"focusout":ue="blur",H=Is;break;case"beforeblur":case"afterblur":H=Is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=g;break;case lg:case ug:case cg:H=Cu;break;case hg:H=A;break;case"scroll":case"scrollend":H=Ho;break;case"wheel":H=j;break;case"copy":case"cut":case"paste":H=Du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Hi;break;case"toggle":case"beforetoggle":H=be}var ye=(i&4)!==0,Je=!ye&&(t==="scroll"||t==="scrollend"),x=ye?z!==null?z+"Capture":null:z;ye=[];for(var N=U,P;N!==null;){var Y=N;if(P=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||P===null||x===null||(Y=Yn(N,x),Y!=null&&ye.push(vl(N,Y,P))),Je)break;N=N.return}0<ye.length&&(z=new H(z,ue,null,a,G),$.push({event:z,listeners:ye}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",z&&a!==zo&&(ue=a.relatedTarget||a.fromElement)&&(fi(ue)||ue[ci]))break e;if((H||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,H?(ue=a.relatedTarget||a.toElement,H=U,ue=ue?fi(ue):null,ue!==null&&(Je=u(ue),ye=ue.tag,ue!==Je||ye!==5&&ye!==27&&ye!==6)&&(ue=null)):(H=null,ue=U),H!==ue)){if(ye=qo,Y="onMouseLeave",x="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Hi,Y="onPointerLeave",x="onPointerEnter",N="pointer"),Je=H==null?z:mn(H),P=ue==null?z:mn(ue),z=new ye(Y,N+"leave",H,a,G),z.target=Je,z.relatedTarget=P,Y=null,fi(G)===U&&(ye=new ye(x,N+"enter",ue,a,G),ye.target=P,ye.relatedTarget=Je,Y=ye),Je=Y,H&&ue)t:{for(ye=Tb,x=H,N=ue,P=0,Y=x;Y;Y=ye(Y))P++;Y=0;for(var fe=N;fe;fe=ye(fe))Y++;for(;0<P-Y;)x=ye(x),P--;for(;0<Y-P;)N=ye(N),Y--;for(;P--;){if(x===N||N!==null&&x===N.alternate){ye=x;break t}x=ye(x),N=ye(N)}ye=null}else ye=null;H!==null&&x_($,z,H,ye,!1),ue!==null&&Je!==null&&x_($,Je,ue,ye,!0)}}e:{if(z=U?mn(U):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var Be=Zp;else if(Qp(z))if(Jp)Be=MA;else{Be=NA;var ce=DA}else H=z.nodeName,!H||H.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?U&&ma(U.elementType)&&(Be=Zp):Be=OA;if(Be&&(Be=Be(t,U))){Xp($,Be,a,G);break e}ce&&ce(t,z,U),t==="focusout"&&U&&z.type==="number"&&U.memoizedProps.value!=null&&Lo(z,"number",z.value)}switch(ce=U?mn(U):window,t){case"focusin":(Qp(ce)||ce.contentEditable==="true")&&(Sa=ce,af=U,$o=null);break;case"focusout":$o=af=Sa=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,ag($,a,G);break;case"selectionchange":if(xA)break;case"keydown":case"keyup":ag($,a,G)}var Ie;if(He)e:{switch(t){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Ta?Cs(t,a)&&(Oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(Si&&a.locale!=="ko"&&(Ta||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Ta&&(Ie=jo()):(_i=G,Bo="value"in _i?_i.value:_i.textContent,Ta=!0)),ce=wc(U,Oe),0<ce.length&&(Oe=new Ti(Oe,t,null,a,G),$.push({event:Oe,listeners:ce}),Ie?Oe.data=Ie:(Ie=Ea(a),Ie!==null&&(Oe.data=Ie)))),(Ie=Nn?wA(t,a):RA(t,a))&&(Oe=wc(U,"onBeforeInput"),0<Oe.length&&(ce=new Ti("onBeforeInput","beforeinput",null,a,G),$.push({event:ce,listeners:Oe}),ce.data=Ie)),yb($,t,U,a,G)}M_($,i)})}function vl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function wc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Yn(t,a),h!=null&&l.unshift(vl(t,h,d)),h=Yn(t,i),h!=null&&l.push(vl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Tb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x_(t,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var T=a,I=T.alternate,U=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||U===null||(I=U,h?(U=Yn(a,d),U!=null&&_.unshift(vl(a,U,I))):h||(U=Yn(a,d),U!=null&&_.push(vl(a,U,I)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var Sb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function k_(t){return(typeof t=="string"?t:""+t).replace(Sb,`
`).replace(Ab,"")}function L_(t,i){return i=k_(i),k_(t)===i}function Ze(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||on(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&on(t,""+l);break;case"className":pn(t,"class",l);break;case"tabIndex":pn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pn(t,a,l);break;case"style":Uo(t,l,d);break;case"data":if(i!=="object"){pn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=pa(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Ze(t,i,"name",h.name,h,null),Ze(t,i,"formEncType",h.formEncType,h,null),Ze(t,i,"formMethod",h.formMethod,h,null),Ze(t,i,"formTarget",h.formTarget,h,null)):(Ze(t,i,"encType",h.encType,h,null),Ze(t,i,"method",h.method,h,null),Ze(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=pa(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Kn);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=pa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),fa(t,"popover",l);break;case"xlinkActuate":Tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fa(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wu.get(a)||a,fa(t,a,l))}}function Md(t,i,a,l,h,d){switch(a){case"style":Uo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?on(t,l):(typeof l=="number"||typeof l=="bigint")&&on(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[xt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):fa(t,a,l)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ze(t,i,d,_,a,null)}}h&&Ze(t,i,"srcSet",a.srcSet,a,null),l&&Ze(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=d=_=h=null,I=null,U=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":I=G;break;case"defaultChecked":U=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Ze(t,i,l,G,a,null)}}Su(t,d,T,I,U,_,h,!1);return;case"select":De("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Ze(t,i,h,T,a,null)}i=d,a=_,t.multiple=!!l,i!=null?mr(t,!!l,i,!1):a!=null&&mr(t,!!l,a,!0);return;case"textarea":De("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ze(t,i,_,T,a,null)}pr(t,l,h,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(t,i,I,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<_l.length;l++)De(_l[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(l=a[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ze(t,i,U,l,a,null)}return;default:if(ma(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Md(t,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Ze(t,i,T,l,a,null))}function bb(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,I=null,U=null,G=null;for(H in a){var $=a[H];if(a.hasOwnProperty(H)&&$!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=$;default:l.hasOwnProperty(H)||Ze(t,i,H,null,l,$)}}for(var z in l){var H=l[z];if($=a[z],l.hasOwnProperty(z)&&(H!=null||$!=null))switch(z){case"type":d=H;break;case"name":h=H;break;case"checked":U=H;break;case"defaultChecked":G=H;break;case"value":_=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==$&&Ze(t,i,z,H,l,$)}}da(t,_,T,I,U,G,d,h);return;case"select":H=_=T=z=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:l.hasOwnProperty(d)||Ze(t,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==I&&Ze(t,i,h,d,l,I)}i=T,a=_,l=H,z!=null?mr(t,!!a,z,!1):!!l!=!!a&&(i!=null?mr(t,!!a,i,!0):mr(t,!!a,a?[]:"",!1));return;case"textarea":H=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ze(t,i,T,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":z=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Ze(t,i,_,h,l,d)}Au(t,z,H);return;case"option":for(var ue in a)if(z=a[ue],a.hasOwnProperty(ue)&&z!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Ze(t,i,ue,null,l,z)}for(I in l)if(z=l[I],H=a[I],l.hasOwnProperty(I)&&z!==H&&(z!=null||H!=null))switch(I){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ze(t,i,I,z,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)z=a[ye],a.hasOwnProperty(ye)&&z!=null&&!l.hasOwnProperty(ye)&&Ze(t,i,ye,null,l,z);for(U in l)if(z=l[U],H=a[U],l.hasOwnProperty(U)&&z!==H&&(z!=null||H!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Ze(t,i,U,z,l,H)}return;default:if(ma(i)){for(var Je in a)z=a[Je],a.hasOwnProperty(Je)&&z!==void 0&&!l.hasOwnProperty(Je)&&Md(t,i,Je,void 0,l,z);for(G in l)z=l[G],H=a[G],!l.hasOwnProperty(G)||z===H||z===void 0&&H===void 0||Md(t,i,G,z,l,H);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Ze(t,i,x,null,l,z);for($ in l)z=l[$],H=a[$],!l.hasOwnProperty($)||z===H||z==null&&H==null||Ze(t,i,$,z,l,H)}function P_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,_=h.initiatorType,T=h.duration;if(d&&T&&P_(_)){for(_=0,T=h.responseEnd,l+=1;l<a.length;l++){var I=a[l],U=I.startTime;if(U>T)break;var G=I.transferSize,$=I.initiatorType;G&&P_($)&&(I=I.responseEnd,_+=G*(I<T?1:(T-U)/(I-U)))}if(--l,i+=8*(d+_)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vd=null,xd=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function U_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function kd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ld=null;function Rb(){var t=window.event;return t&&t.type==="popstate"?t===Ld?!1:(Ld=t,!0):(Ld=null,!1)}var B_=typeof setTimeout=="function"?setTimeout:void 0,Ib=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,Cb=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(Db)}:B_;function Db(t){setTimeout(function(){throw t})}function Ur(t){return t==="head"}function H_(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(h),Qa(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,El(a);for(var d=a.firstChild;d;){var _=d.nextSibling,T=d.nodeName;d[hi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&El(t.ownerDocument.body);a=h}while(a);Qa(i)}function q_(t,i){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Pd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pd(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nb(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[hi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Pn(t.nextSibling),t===null)break}return null}function Ob(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pn(t.nextSibling),t===null))return null;return t}function F_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Pn(t.nextSibling),t===null))return null;return t}function Ud(t){return t.data==="$?"||t.data==="$~"}function zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Mb(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Pn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Bd=null;function G_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return Pn(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function K_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function Y_(t,i,a){switch(i=Rc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function El(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ha(t)}var Un=new Map,$_=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=ie.d;ie.d={f:Vb,r:xb,D:kb,C:Lb,L:Pb,m:Ub,X:Bb,S:zb,M:jb};function Vb(){var t=ir.f(),i=_c();return t||i}function xb(t){var i=In(t);i!==null&&i.tag===5&&i.type==="form"?hy(i):ir.r(t)}var Ka=typeof document>"u"?null:document;function Q_(t,i,a){var l=Ka;if(l&&typeof i=="string"&&i){var h=an(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),$_.has(h)||($_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ft(i,"link",t),Et(i),l.head.appendChild(i)))}}function kb(t){ir.D(t),Q_("dns-prefetch",t,null)}function Lb(t,i){ir.C(t,i),Q_("preconnect",t,i)}function Pb(t,i,a){ir.L(t,i,a);var l=Ka;if(l&&t&&i){var h='link[rel="preload"][as="'+an(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+an(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+an(a.imageSizes)+'"]')):h+='[href="'+an(t)+'"]';var d=h;switch(i){case"style":d=Ya(t);break;case"script":d=$a(t)}Un.has(d)||(t=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Un.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Tl(d))||i==="script"&&l.querySelector(Sl(d))||(i=l.createElement("link"),Ft(i,"link",t),Et(i),l.head.appendChild(i)))}}function Ub(t,i){ir.m(t,i);var a=Ka;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+an(l)+'"][href="'+an(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$a(t)}if(!Un.has(d)&&(t=S({rel:"modulepreload",href:t},i),Un.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(d)))return}l=a.createElement("link"),Ft(l,"link",t),Et(l),a.head.appendChild(l)}}}function zb(t,i,a){ir.S(t,i,a);var l=Ka;if(l&&t){var h=di(l).hoistableStyles,d=Ya(t);i=i||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(Tl(d)))T.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Un.get(d))&&jd(t,a);var I=_=l.createElement("link");Et(I),Ft(I,"link",t),I._p=new Promise(function(U,G){I.onload=U,I.onerror=G}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Cc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function Bb(t,i){ir.X(t,i);var a=Ka;if(a&&t){var l=di(a).hoistableScripts,h=$a(t),d=l.get(h);d||(d=a.querySelector(Sl(h)),d||(t=S({src:t,async:!0},i),(i=Un.get(h))&&Hd(t,i),d=a.createElement("script"),Et(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function jb(t,i){ir.M(t,i);var a=Ka;if(a&&t){var l=di(a).hoistableScripts,h=$a(t),d=l.get(h);d||(d=a.querySelector(Sl(h)),d||(t=S({src:t,async:!0,type:"module"},i),(i=Un.get(h))&&Hd(t,i),d=a.createElement("script"),Et(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function X_(t,i,a,l){var h=(h=Re.current)?Ic(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ya(a.href),a=di(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ya(a.href);var d=di(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(Tl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Un.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(t,a),d||Hb(h,t,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$a(a),a=di(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ya(t){return'href="'+an(t)+'"'}function Tl(t){return'link[rel="stylesheet"]['+t+"]"}function Z_(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function Hb(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),Et(i),t.head.appendChild(i))}function $a(t){return'[src="'+an(t)+'"]'}function Sl(t){return"script[async]"+t}function J_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+an(a.href)+'"]');if(l)return i.instance=l,Et(l),l;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Et(l),Ft(l,"style",h),Cc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Ya(a.href);var d=t.querySelector(Tl(h));if(d)return i.state.loading|=4,i.instance=d,Et(d),d;l=Z_(a),(h=Un.get(h))&&jd(l,h),d=(t.ownerDocument||t).createElement("link"),Et(d);var _=d;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Ft(d,"link",l),i.state.loading|=4,Cc(d,a.precedence,t),i.instance=d;case"script":return d=$a(a.src),(h=t.querySelector(Sl(d)))?(i.instance=h,Et(h),h):(l=a,(h=Un.get(d))&&(l=S({},a),Hd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Et(h),Ft(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Cc(l,a.precedence,t));return i.instance}function Cc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function jd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Hd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Dc=null;function W_(t,i,a){if(Dc===null){var l=new Map,h=Dc=new Map;h.set(a,l)}else h=Dc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[hi]||d[vt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=t+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function ev(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function qb(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function tv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Fb(t,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ya(l.href),d=i.querySelector(Tl(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Nc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=d,Et(d);return}d=i.ownerDocument||i,l=Z_(l),(h=Un.get(h))&&jd(l,h),d=d.createElement("link"),Et(d);var _=d;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Ft(d,"link",l),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Nc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var qd=0;function Gb(t,i){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&qd===0&&(qd=62500*wb());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>qd?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oc=null;function Mc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,i.forEach(Kb,t),Oc=null,Nc.call(t))}function Kb(t,i){if(!(i.state.loading&4)){var a=Oc.get(t);if(a)var l=a.get(null);else{a=new Map,Oc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Nc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Al={$$typeof:se,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Yb(t,i,a,l,h,d,_,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.hiddenUpdates=ui(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function nv(t,i,a,l,h,d,_,T,I,U,G,$){return t=new Yb(t,i,a,_,I,U,G,$,T),i=1,d===!0&&(i|=24),d=yn(3,null,null,i),t.current=d,d.stateNode=t,i=Sf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Rf(d),t}function iv(t){return t?(t=wa,t):wa}function rv(t,i,a,l,h,d){h=iv(h),l.context===null?l.context=h:l.pendingContext=h,l=Ir(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Cr(t,l,i),a!==null&&(fn(a,t,i),tl(a,t,i))}function sv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Fd(t,i){sv(t,i),(t=t.alternate)&&sv(t,i)}function av(t){if(t.tag===13||t.tag===31){var i=Os(t,67108864);i!==null&&fn(i,t,67108864),Fd(t,67108864)}}function ov(t){if(t.tag===13||t.tag===31){var i=Sn();i=vs(i);var a=Os(t,i);a!==null&&fn(a,t,i),Fd(t,i)}}var Vc=!0;function $b(t,i,a,l){var h=K.T;K.T=null;var d=ie.p;try{ie.p=2,Gd(t,i,a,l)}finally{ie.p=d,K.T=h}}function Qb(t,i,a,l){var h=K.T;K.T=null;var d=ie.p;try{ie.p=8,Gd(t,i,a,l)}finally{ie.p=d,K.T=h}}function Gd(t,i,a,l){if(Vc){var h=Kd(l);if(h===null)Od(t,i,l,xc,a),uv(t,l);else if(Zb(h,t,i,a,l))l.stopPropagation();else if(uv(t,l),i&4&&-1<Xb.indexOf(t)){for(;h!==null;){var d=In(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=oi(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-ht(_);T.entanglements[1]|=I,_&=~I}Ri(d),(qe&6)===0&&(gc=en()+500,yl(0))}}break;case 31:case 13:T=Os(d,2),T!==null&&fn(T,d,2),_c(),Fd(d,2)}if(d=Kd(l),d===null&&Od(t,i,l,xc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Od(t,i,l,null,a)}}function Kd(t){return t=Cn(t),Yd(t)}var xc=null;function Yd(t){if(xc=null,t=fi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===31){if(t=m(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return xc=t,null}function lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ps()){case Ro:return 2;case Io:return 8;case fr:case Jh:return 32;case fu:return 268435456;default:return 32}default:return 32}}var $d=!1,zr=null,Br=null,jr=null,bl=new Map,wl=new Map,Hr=[],Xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,i){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(i.pointerId)}}function Rl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=In(i),i!==null&&av(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Zb(t,i,a,l,h){switch(i){case"focusin":return zr=Rl(zr,t,i,a,l,h),!0;case"dragenter":return Br=Rl(Br,t,i,a,l,h),!0;case"mouseover":return jr=Rl(jr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return bl.set(d,Rl(bl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,wl.set(d,Rl(wl.get(d)||null,t,i,a,l,h)),!0}return!1}function cv(t){var i=fi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Fn(t.priority,function(){ov(a)});return}}else if(i===31){if(i=m(a),i!==null){t.blockedOn=i,Fn(t.priority,function(){ov(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Kd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);zo=l,a.target.dispatchEvent(l),zo=null}else return i=In(a),i!==null&&av(i),t.blockedOn=a,!1;i.shift()}return!0}function hv(t,i,a){kc(t)&&a.delete(i)}function Jb(){$d=!1,zr!==null&&kc(zr)&&(zr=null),Br!==null&&kc(Br)&&(Br=null),jr!==null&&kc(jr)&&(jr=null),bl.forEach(hv),wl.forEach(hv)}function Lc(t,i){t.blockedOn===i&&(t.blockedOn=null,$d||($d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jb)))}var Pc=null;function fv(t){Pc!==t&&(Pc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pc===t&&(Pc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Yd(l||a)===null)continue;break}var d=In(a);d!==null&&(t.splice(i,3),i-=3,Kf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Qa(t){function i(I){return Lc(I,t)}zr!==null&&Lc(zr,t),Br!==null&&Lc(Br,t),jr!==null&&Lc(jr,t),bl.forEach(i),wl.forEach(i);for(var a=0;a<Hr.length;a++){var l=Hr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Hr.length&&(a=Hr[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&Hr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[xt]||null;if(typeof d=="function")_||fv(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[xt]||null)T=_.formAction;else if(Yd(h)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),fv(a)}}}function dv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Qd(t){this._internalRoot=t}Uc.prototype.render=Qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Sn();rv(a,l,t,i,null,null)},Uc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;rv(t.current,2,null,t,null,null),_c(),i[ci]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var i=_u();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Hr.length&&i!==0&&i<Hr[a].priority;a++);Hr.splice(a,0,t),a===0&&cv(t)}};var mv=e.version;if(mv!=="19.2.5")throw Error(s(527,mv,"19.2.5"));ie.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(i),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var Wb={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{Hn=zc.inject(Wb),zt=zc}catch{}}return Cl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Ty,d=Sy,_=Ay;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=nv(t,1,!1,null,null,a,l,null,h,d,_,dv),t[ci]=i.current,Nd(t),new Qd(i)},Cl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Ty,_=Sy,T=Ay,I=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=nv(t,1,!0,i,a??null,l,h,I,d,_,T,dv),i.context=iv(null),a=i.current,l=Sn(),l=vs(l),h=Ir(l),h.callback=null,Cr(a,h,l),a=l,i.current.lanes=a,ys(i,a),Ri(i),t[ci]=i.current,Nd(t),new Uc(i)},Cl.version="19.2.5",Cl}var bv;function uw(){if(bv)return Jd.exports;bv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Jd.exports=lw(),Jd.exports}var cw=uw();/**
 * react-router v7.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wv="popstate";function Rv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function hw(r={}){function e(o,u){let{pathname:f="/",search:m="",hash:p=""}=ea(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Am("",{pathname:f,search:m,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(o,u){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");m=y===-1?p:p.slice(0,y)}return m+"#"+(typeof u=="string"?u:Hl(u))}function s(o,u){ii(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return dw(e,n,s,r)}function ot(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ii(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fw(){return Math.random().toString(36).substring(2,10)}function Iv(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Am(r,e,n=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ea(e):e,state:n,key:e&&e.key||s||fw(),mask:o}}function Hl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function ea(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function dw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function S(){m="POP";let F=E(),W=F==null?null:F-y;y=F,p&&p({action:m,location:X.location,delta:W})}function D(F,W){m="PUSH";let ae=Rv(F)?F:Am(X.location,F,W);n&&n(ae,F),y=E()+1;let se=Iv(ae,y),de=X.createHref(ae.mask||ae);try{f.pushState(se,"",de)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;o.location.assign(de)}u&&p&&p({action:m,location:X.location,delta:1})}function B(F,W){m="REPLACE";let ae=Rv(F)?F:Am(X.location,F,W);n&&n(ae,F),y=E();let se=Iv(ae,y),de=X.createHref(ae.mask||ae);f.replaceState(se,"",de),u&&p&&p({action:m,location:X.location,delta:0})}function Z(F){return mw(F)}let X={get action(){return m},get location(){return r(o,f)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(wv,S),p=F,()=>{o.removeEventListener(wv,S),p=null}},createHref(F){return e(o,F)},createURL:Z,encodeLocation(F){let W=Z(F);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:D,replace:B,go(F){return f.go(F)}};return X}function mw(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ot(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Hl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function TE(r,e,n="/"){return pw(r,e,n,!1)}function pw(r,e,n,s,o){let u=typeof e=="string"?ea(e):e,f=ar(u.pathname||"/",n);if(f==null)return null;let m=gw(r),p=null,y=Cw(f);for(let E=0;p==null&&E<m.length;++E)p=Rw(m[E],y,s);return p}function gw(r){let e=SE(r);return yw(e),e}function SE(r,e=[],n=[],s="",o=!1){let u=(f,m,p=o,y)=>{let E={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(s)&&p)return;ot(E.relativePath.startsWith(s),`Absolute route path "${E.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(s.length)}let S=ni([s,E.relativePath]),D=n.concat(E);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),SE(f.children,e,D,S,p)),!(f.path==null&&!f.index)&&e.push({path:S,score:bw(S,f.index),routesMeta:D})};return r.forEach((f,m)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,m);else for(let y of AE(f.path))u(f,m,!0,y)}),e}function AE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=AE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function yw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:ww(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var _w=/^:[\w-]+$/,vw=3,Ew=2,Tw=1,Sw=10,Aw=-2,Cv=r=>r==="*";function bw(r,e){let n=r.split("/"),s=n.length;return n.some(Cv)&&(s+=Aw),e&&(s+=Ew),n.filter(o=>!Cv(o)).reduce((o,u)=>o+(_w.test(u)?vw:u===""?Tw:Sw),s)}function ww(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Rw(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=sh({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),D=p.route;if(!S&&y&&n&&!s[s.length-1].route.index&&(S=sh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:ni([u,S.pathname]),pathnameBase:Mw(ni([u,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(u=ni([u,S.pathnameBase]))}return f}function sh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Iw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:S},D)=>{if(E==="*"){let Z=m[D]||"";f=u.slice(0,u.length-Z.length).replace(/(.)\/+$/,"$1")}const B=m[D];return S&&!B?y[E]=void 0:y[E]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function Iw(r,e=!1,n=!0){ii(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p,y,E)=>{if(s.push({paramName:m,isOptional:p!=null}),p){let S=E.charAt(y+f.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Cw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ii(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ar(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}var Dw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Nw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?ea(r):r,u;return n?(n=wE(n),n.startsWith("/")?u=Dv(n.substring(1),"/"):u=Dv(n,e)):u=e,{pathname:u,search:Vw(s),hash:xw(o)}}function Dv(r,e){let n=ah(e).split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function nm(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ow(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bE(r){let e=Ow(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function np(r,e,n,s=!1){let o;typeof r=="string"?o=ea(r):(o={...r},ot(!o.pathname||!o.pathname.includes("?"),nm("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),nm("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),nm("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let S=e.length-1;if(!s&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),S-=1;o.pathname=D.join("/")}m=S>=0?e[S]:"/"}let p=Nw(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var wE=r=>r.replace(/\/\/+/g,"/"),ni=r=>wE(r.join("/")),ah=r=>r.replace(/\/+$/,""),Mw=r=>ah(r).replace(/^\/*/,"/"),Vw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,xw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,kw=class{constructor(r,e,n,s=!1){this.status=r,this.statusText=e||"",this.internal=s,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Lw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Pw(r){let e=r.map(n=>n.route.path).filter(Boolean);return ni(e)||"/"}var RE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function IE(r,e){let n=r;if(typeof n!="string"||!Dw.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let s=n,o=!1;if(RE)try{let u=new URL(window.location.href),f=n.startsWith("//")?new URL(u.protocol+n):new URL(n),m=ar(f.pathname,e);f.origin===u.origin&&m!=null?n=m+f.search+f.hash:o=!0}catch{ii(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var CE=["POST","PUT","PATCH","DELETE"];new Set(CE);var Uw=["GET",...CE];new Set(Uw);var yo=q.createContext(null);yo.displayName="DataRouter";var Rh=q.createContext(null);Rh.displayName="DataRouterState";var DE=q.createContext(!1);function zw(){return q.useContext(DE)}var NE=q.createContext({isTransitioning:!1});NE.displayName="ViewTransition";var Bw=q.createContext(new Map);Bw.displayName="Fetchers";var jw=q.createContext(null);jw.displayName="Await";var Bn=q.createContext(null);Bn.displayName="Navigation";var Zl=q.createContext(null);Zl.displayName="Location";var Li=q.createContext({outlet:null,matches:[],isDataRoute:!1});Li.displayName="Route";var ip=q.createContext(null);ip.displayName="RouteError";var OE="REACT_ROUTER_ERROR",Hw="REDIRECT",qw="ROUTE_ERROR_RESPONSE";function Fw(r){if(r.startsWith(`${OE}:${Hw}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Gw(r){if(r.startsWith(`${OE}:${qw}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new kw(e.status,e.statusText,e.data)}catch{}}function Kw(r,{relative:e}={}){ot(Jl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=q.useContext(Bn),{hash:o,pathname:u,search:f}=Wl(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:ni([n,u])),s.createHref({pathname:m,search:f,hash:o})}function Jl(){return q.useContext(Zl)!=null}function Pi(){return ot(Jl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Zl).location}var ME="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function VE(r){q.useContext(Bn).static||q.useLayoutEffect(r)}function Ih(){let{isDataRoute:r}=q.useContext(Li);return r?aR():Yw()}function Yw(){ot(Jl(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(yo),{basename:e,navigator:n}=q.useContext(Bn),{matches:s}=q.useContext(Li),{pathname:o}=Pi(),u=JSON.stringify(bE(s)),f=q.useRef(!1);return VE(()=>{f.current=!0}),q.useCallback((p,y={})=>{if(ii(f.current,ME),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=np(p,JSON.parse(u),o,y.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:ni([e,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[e,n,u,o,r])}q.createContext(null);function $w(){let{matches:r}=q.useContext(Li),e=r[r.length-1];return(e==null?void 0:e.params)??{}}function Wl(r,{relative:e}={}){let{matches:n}=q.useContext(Li),{pathname:s}=Pi(),o=JSON.stringify(bE(n));return q.useMemo(()=>np(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Qw(r,e){return xE(r,e)}function xE(r,e,n){var F;ot(Jl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=q.useContext(Bn),{matches:o}=q.useContext(Li),u=o[o.length-1],f=u?u.params:{},m=u?u.pathname:"/",p=u?u.pathnameBase:"/",y=u&&u.route;{let W=y&&y.path||"";LE(m,!y||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let E=Pi(),S;if(e){let W=typeof e=="string"?ea(e):e;ot(p==="/"||((F=W.pathname)==null?void 0:F.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=E;let D=S.pathname||"/",B=D;if(p!=="/"){let W=p.replace(/^\//,"").split("/");B="/"+D.replace(/^\//,"").split("/").slice(W.length).join("/")}let Z=n&&n.state.matches.length?n.state.matches.map(W=>Object.assign(W,{route:n.manifest[W.route.id]||W.route})):TE(r,{pathname:B});ii(y||Z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ii(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=eR(Z&&Z.map(W=>Object.assign({},W,{params:Object.assign({},f,W.params),pathname:ni([p,s.encodeLocation?s.encodeLocation(W.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?p:ni([p,s.encodeLocation?s.encodeLocation(W.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:W.pathnameBase])})),o,n);return e&&X?q.createElement(Zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...S},navigationType:"POP"}},X):X}function Xw(){let r=sR(),e=Lw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:u},"ErrorBoundary")," or"," ",q.createElement("code",{style:u},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:o},n):null,f)}var Zw=q.createElement(Xw,null),kE=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=Gw(r.digest);n&&(r=n)}let e=r!==void 0?q.createElement(Li.Provider,{value:this.props.routeContext},q.createElement(ip.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?q.createElement(Jw,{error:r},e):e}};kE.contextType=DE;var im=new WeakMap;function Jw({children:r,error:e}){let{basename:n}=q.useContext(Bn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Fw(e.digest);if(s){let o=im.get(e);if(o)throw o;let u=IE(s.location,n);if(RE&&!im.get(e))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw im.set(e,f),f}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return r}function Ww({routeContext:r,match:e,children:n}){let s=q.useContext(yo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(Li.Provider,{value:r},n)}function eR(r,e=[],n){let s=n==null?void 0:n.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,u=s==null?void 0:s.errors;if(u!=null){let E=o.findIndex(S=>S.route.id&&(u==null?void 0:u[S.route.id])!==void 0);ot(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,E+1))}let f=!1,m=-1;if(n&&s){f=s.renderFallback;for(let E=0;E<o.length;E++){let S=o[E];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(m=E),S.route.id){let{loaderData:D,errors:B}=s,Z=S.route.loader&&!D.hasOwnProperty(S.route.id)&&(!B||B[S.route.id]===void 0);if(S.route.lazy||Z){n.isStatic&&(f=!0),m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}}let p=n==null?void 0:n.onError,y=s&&p?(E,S)=>{var D,B;p(E,{location:s.location,params:((B=(D=s.matches)==null?void 0:D[0])==null?void 0:B.params)??{},pattern:Pw(s.matches),errorInfo:S})}:void 0;return o.reduceRight((E,S,D)=>{let B,Z=!1,X=null,F=null;s&&(B=u&&S.route.id?u[S.route.id]:void 0,X=S.route.errorElement||Zw,f&&(m<0&&D===0?(LE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Z=!0,F=null):m===D&&(Z=!0,F=S.route.hydrateFallbackElement||null)));let W=e.concat(o.slice(0,D+1)),ae=()=>{let se;return B?se=X:Z?se=F:S.route.Component?se=q.createElement(S.route.Component,null):S.route.element?se=S.route.element:se=E,q.createElement(Ww,{match:S,routeContext:{outlet:E,matches:W,isDataRoute:s!=null},children:se})};return s&&(S.route.ErrorBoundary||S.route.errorElement||D===0)?q.createElement(kE,{location:s.location,revalidation:s.revalidation,component:X,error:B,children:ae(),routeContext:{outlet:null,matches:W,isDataRoute:!0},onError:y}):ae()},null)}function rp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tR(r){let e=q.useContext(yo);return ot(e,rp(r)),e}function nR(r){let e=q.useContext(Rh);return ot(e,rp(r)),e}function iR(r){let e=q.useContext(Li);return ot(e,rp(r)),e}function sp(r){let e=iR(r),n=e.matches[e.matches.length-1];return ot(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function rR(){return sp("useRouteId")}function sR(){var s;let r=q.useContext(ip),e=nR("useRouteError"),n=sp("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function aR(){let{router:r}=tR("useNavigate"),e=sp("useNavigate"),n=q.useRef(!1);return VE(()=>{n.current=!0}),q.useCallback(async(o,u={})=>{ii(n.current,ME),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var Nv={};function LE(r,e,n){!e&&!Nv[r]&&(Nv[r]=!0,ii(!1,n))}q.memo(oR);function oR({routes:r,manifest:e,future:n,state:s,isStatic:o,onError:u}){return xE(r,void 0,{manifest:e,state:s,isStatic:o,onError:u})}function bm(r){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lR({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1,useTransitions:f}){ot(!Jl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),p=q.useMemo(()=>({basename:m,navigator:o,static:u,useTransitions:f,future:{}}),[m,o,u,f]);typeof n=="string"&&(n=ea(n));let{pathname:y="/",search:E="",hash:S="",state:D=null,key:B="default",mask:Z}=n,X=q.useMemo(()=>{let F=ar(y,m);return F==null?null:{location:{pathname:F,search:E,hash:S,state:D,key:B,mask:Z},navigationType:s}},[m,y,E,S,D,B,s,Z]);return ii(X!=null,`<Router basename="${m}"> is not able to match the URL "${y}${E}${S}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:q.createElement(Bn.Provider,{value:p},q.createElement(Zl.Provider,{children:e,value:X}))}function uR({children:r,location:e}){return Qw(wm(r),e)}function wm(r,e=[]){let n=[];return q.Children.forEach(r,(s,o)=>{if(!q.isValidElement(s))return;let u=[...e,o];if(s.type===q.Fragment){n.push.apply(n,wm(s.props.children,u));return}ot(s.type===bm,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=wm(s.props.children,u)),n.push(f)}),n}var $c="get",Qc="application/x-www-form-urlencoded";function Ch(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function cR(r){return Ch(r)&&r.tagName.toLowerCase()==="button"}function hR(r){return Ch(r)&&r.tagName.toLowerCase()==="form"}function fR(r){return Ch(r)&&r.tagName.toLowerCase()==="input"}function dR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function mR(r,e){return r.button===0&&(!e||e==="_self")&&!dR(r)}var Bc=null;function pR(){if(Bc===null)try{new FormData(document.createElement("form"),0),Bc=!1}catch{Bc=!0}return Bc}var gR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rm(r){return r!=null&&!gR.has(r)?(ii(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):r}function yR(r,e){let n,s,o,u,f;if(hR(r)){let m=r.getAttribute("action");s=m?ar(m,e):null,n=r.getAttribute("method")||$c,o=rm(r.getAttribute("enctype"))||Qc,u=new FormData(r)}else if(cR(r)||fR(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?ar(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||$c,o=rm(r.getAttribute("formenctype"))||rm(m.getAttribute("enctype"))||Qc,u=new FormData(m,r),!pR()){let{name:y,type:E,value:S}=r;if(E==="image"){let D=y?`${y}.`:"";u.append(`${D}x`,"0"),u.append(`${D}y`,"0")}else y&&u.append(y,S)}}else{if(Ch(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$c,s=null,o=Qc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ap(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function PE(r,e,n,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&ar(o.pathname,e)==="/"?o.pathname=`${ah(e)}/_root.${s}`:o.pathname=`${ah(o.pathname)}.${s}`,o}async function _R(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function ER(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await _R(u,n);return f.links?f.links():[]}return[]}));return bR(s.flat(1).filter(vR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ov(r,e,n,s,o,u){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,y)=>f(p,y)||m(p,y)):u==="data"?e.filter((p,y)=>{var S;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let D=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=n[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function TR(r,e,{includeHydrateFallback:n}={}){return SR(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function SR(r){return[...new Set(r)]}function AR(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function bR(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(AR(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function op(){let r=q.useContext(yo);return ap(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function wR(){let r=q.useContext(Rh);return ap(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var lp=q.createContext(void 0);lp.displayName="FrameworkContext";function up(){let r=q.useContext(lp);return ap(r,"You must render this element inside a <HydratedRouter> element"),r}function RR(r,e){let n=q.useContext(lp),[s,o]=q.useState(!1),[u,f]=q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:S}=e,D=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let X=W=>{W.forEach(ae=>{f(ae.isIntersecting)})},F=new IntersectionObserver(X,{threshold:.5});return D.current&&F.observe(D.current),()=>{F.disconnect()}}},[r]),q.useEffect(()=>{if(s){let X=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(X)}}},[s]);let B=()=>{o(!0)},Z=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,D,{}]:[u,D,{onFocus:Dl(m,B),onBlur:Dl(p,Z),onMouseEnter:Dl(y,B),onMouseLeave:Dl(E,Z),onTouchStart:Dl(S,B)}]:[!1,D,{}]}function Dl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function IR({page:r,...e}){let n=zw(),{router:s}=op(),o=q.useMemo(()=>TE(s.routes,r,s.basename),[s.routes,r,s.basename]);return o?n?q.createElement(DR,{page:r,matches:o,...e}):q.createElement(NR,{page:r,matches:o,...e}):null}function CR(r){let{manifest:e,routeModules:n}=up(),[s,o]=q.useState([]);return q.useEffect(()=>{let u=!1;return ER(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function DR({page:r,matches:e,...n}){let s=Pi(),{future:o}=up(),{basename:u}=op(),f=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let m=PE(r,u,o.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,y=[];for(let E of e)typeof E.route.shouldRevalidate=="function"?p=!0:y.push(E.route.id);return p&&y.length>0&&m.searchParams.set("_routes",y.join(",")),[m.pathname+m.search]},[u,o.unstable_trailingSlashAwareDataRequests,r,s,e]);return q.createElement(q.Fragment,null,f.map(m=>q.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})))}function NR({page:r,matches:e,...n}){let s=Pi(),{future:o,manifest:u,routeModules:f}=up(),{basename:m}=op(),{loaderData:p,matches:y}=wR(),E=q.useMemo(()=>Ov(r,e,y,u,s,"data"),[r,e,y,u,s]),S=q.useMemo(()=>Ov(r,e,y,u,s,"assets"),[r,e,y,u,s]),D=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let X=new Set,F=!1;if(e.forEach(ae=>{var de;let se=u.routes[ae.route.id];!se||!se.hasLoader||(!E.some(ge=>ge.route.id===ae.route.id)&&ae.route.id in p&&((de=f[ae.route.id])!=null&&de.shouldRevalidate)||se.hasClientLoader?F=!0:X.add(ae.route.id))}),X.size===0)return[];let W=PE(r,m,o.unstable_trailingSlashAwareDataRequests,"data");return F&&X.size>0&&W.searchParams.set("_routes",e.filter(ae=>X.has(ae.route.id)).map(ae=>ae.route.id).join(",")),[W.pathname+W.search]},[m,o.unstable_trailingSlashAwareDataRequests,p,s,u,E,e,r,f]),B=q.useMemo(()=>TR(S,u),[S,u]),Z=CR(S);return q.createElement(q.Fragment,null,D.map(X=>q.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...n})),B.map(X=>q.createElement("link",{key:X,rel:"modulepreload",href:X,...n})),Z.map(({key:X,link:F})=>q.createElement("link",{key:X,nonce:n.nonce,...F,crossOrigin:F.crossOrigin??n.crossOrigin})))}function OR(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var MR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{MR&&(window.__reactRouterVersion="7.15.0")}catch{}function VR({basename:r,children:e,useTransitions:n,window:s}){let o=q.useRef();o.current==null&&(o.current=hw({window:s,v5Compat:!0}));let u=o.current,[f,m]=q.useState({action:u.action,location:u.location}),p=q.useCallback(y=>{n===!1?m(y):q.startTransition(()=>m(y))},[n]);return q.useLayoutEffect(()=>u.listen(p),[u,p]),q.createElement(lR,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:u,useTransitions:n})}var UE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zE=q.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,mask:m,state:p,target:y,to:E,preventScrollReset:S,viewTransition:D,defaultShouldRevalidate:B,...Z},X){let{basename:F,navigator:W,useTransitions:ae}=q.useContext(Bn),se=typeof E=="string"&&UE.test(E),de=IE(E,F);E=de.to;let ge=Kw(E,{relative:o}),ve=Pi(),R=null;if(m){let $e=np(m,[],ve.mask?ve.mask.pathname:"/",!0);F!=="/"&&($e.pathname=$e.pathname==="/"?F:ni([F,$e.pathname])),R=W.createHref($e)}let[b,C,V]=RR(s,Z),O=PR(E,{replace:f,mask:m,state:p,target:y,preventScrollReset:S,relative:o,viewTransition:D,defaultShouldRevalidate:B,useTransitions:ae});function k($e){e&&e($e),$e.defaultPrevented||O($e)}let w=!(de.isExternal||u),We=q.createElement("a",{...Z,...V,href:(w?R:void 0)||de.absoluteURL||ge,onClick:w?k:e,ref:OR(X,C),target:y,"data-discover":!se&&n==="render"?"true":void 0});return b&&!se?q.createElement(q.Fragment,null,We,q.createElement(IR,{page:ge})):We});zE.displayName="Link";var xR=q.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...y},E){let S=Wl(f,{relative:y.relative}),D=Pi(),B=q.useContext(Rh),{navigator:Z,basename:X}=q.useContext(Bn),F=B!=null&&HR(S)&&m===!0,W=Z.encodeLocation?Z.encodeLocation(S).pathname:S.pathname,ae=D.pathname,se=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;n||(ae=ae.toLowerCase(),se=se?se.toLowerCase():null,W=W.toLowerCase()),se&&X&&(se=ar(se,X)||se);const de=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let ge=ae===W||!o&&ae.startsWith(W)&&ae.charAt(de)==="/",ve=se!=null&&(se===W||!o&&se.startsWith(W)&&se.charAt(W.length)==="/"),R={isActive:ge,isPending:ve,isTransitioning:F},b=ge?e:void 0,C;typeof s=="function"?C=s(R):C=[s,ge?"active":null,ve?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let V=typeof u=="function"?u(R):u;return q.createElement(zE,{...y,"aria-current":b,className:C,ref:E,style:V,to:f,viewTransition:m},typeof p=="function"?p(R):p)});xR.displayName="NavLink";var kR=q.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=$c,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:D,...B},Z)=>{let{useTransitions:X}=q.useContext(Bn),F=BR(),W=jR(m,{relative:y}),ae=f.toLowerCase()==="get"?"get":"post",se=typeof m=="string"&&UE.test(m),de=ge=>{if(p&&p(ge),ge.defaultPrevented)return;ge.preventDefault();let ve=ge.nativeEvent.submitter,R=(ve==null?void 0:ve.getAttribute("formmethod"))||f,b=()=>F(ve||ge.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:D});X&&n!==!1?q.startTransition(()=>b()):b()};return q.createElement("form",{ref:Z,method:ae,action:W,onSubmit:s?p:de,...B,"data-discover":!se&&r==="render"?"true":void 0})});kR.displayName="Form";function LR(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BE(r){let e=q.useContext(yo);return ot(e,LR(r)),e}function PR(r,{target:e,replace:n,mask:s,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p,useTransitions:y}={}){let E=Ih(),S=Pi(),D=Wl(r,{relative:f});return q.useCallback(B=>{if(mR(B,e)){B.preventDefault();let Z=n!==void 0?n:Hl(S)===Hl(D),X=()=>E(r,{replace:Z,mask:s,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p});y?q.startTransition(()=>X()):X()}},[S,E,D,n,s,o,e,r,u,f,m,p,y])}var UR=0,zR=()=>`__${String(++UR)}__`;function BR(){let{router:r}=BE("useSubmit"),{basename:e}=q.useContext(Bn),n=rR(),s=r.fetch,o=r.navigate;return q.useCallback(async(u,f={})=>{let{action:m,method:p,encType:y,formData:E,body:S}=yR(u,e);if(f.navigate===!1){let D=f.fetcherKey||zR();await s(D,n,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:S,formMethod:f.method||p,formEncType:f.encType||y,flushSync:f.flushSync})}else await o(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:S,formMethod:f.method||p,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:n,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,o,e,n])}function jR(r,{relative:e}={}){let{basename:n}=q.useContext(Bn),s=q.useContext(Li);ot(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Wl(r||".",{relative:e})},f=Pi();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(S=>S).forEach(S=>m.append("index",S));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ni([n,u.pathname])),Hl(u)}function HR(r,{relative:e}={}){let n=q.useContext(NE);ot(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=BE("useViewTransitionState"),o=Wl(r,{relative:e});if(!n.isTransitioning)return!1;let u=ar(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=ar(n.nextLocation.pathname,s)||n.nextLocation.pathname;return sh(o.pathname,f)!=null||sh(o.pathname,u)!=null}const qR=()=>{};var Mv={};/**
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
 */const jE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},FR=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},HE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(D=64)),s.push(n[E],n[S],n[D],n[B])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(jE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):FR(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new GR;const D=u<<2|m>>4;if(s.push(D),y!==64){const B=m<<4&240|y>>2;if(s.push(B),S!==64){const Z=y<<6&192|S;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class GR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KR=function(r){const e=jE(r);return HE.encodeByteArray(e,!0)},oh=function(r){return KR(r).replace(/\./g,"")},qE=function(r){try{return HE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $R=()=>YR().__FIREBASE_DEFAULTS__,QR=()=>{if(typeof process>"u"||typeof Mv>"u")return;const r=Mv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},XR=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&qE(r[1]);return e&&JSON.parse(e)},Dh=()=>{try{return qR()||$R()||QR()||XR()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},FE=r=>{var e,n;return(n=(e=Dh())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},cp=r=>{const e=FE(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},GE=()=>{var r;return(r=Dh())==null?void 0:r.config},KE=r=>{var e;return(e=Dh())==null?void 0:e[`_${r}`]};/**
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
 */class ZR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function YE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[oh(JSON.stringify(n)),oh(JSON.stringify(f)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function WR(){var e;const r=(e=Dh())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $E(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n1(){const r=Wt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function i1(){return!WR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QE(){try{return typeof indexedDB=="object"}catch{return!1}}function XE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function r1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const s1="FirebaseError";class jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=s1,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?a1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new jn(o,m,s)}}function a1(r,e){return r.replace(o1,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const o1=/\{\$([^}]+)}/g;function l1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ss(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(Vv(u)&&Vv(f)){if(!ss(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Vv(r){return r!==null&&typeof r=="object"}/**
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
 */function eu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ol(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ml(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function u1(r,e){const n=new c1(r,e);return n.subscribe.bind(n)}class c1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");h1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=sm),o.error===void 0&&(o.error=sm),o.complete===void 0&&(o.complete=sm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h1(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function sm(){}/**
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
 */const f1=1e3,d1=2,m1=14400*1e3,p1=.5;function xv(r,e=f1,n=d1){const s=e*Math.pow(n,r),o=Math.round(p1*s*(Math.random()-.5)*2);return Math.min(m1,s+o)}/**
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
 */function Ut(r){return r&&r._delegate?r._delegate:r}/**
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
 */function na(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nh(r){return(await fetch(r,{credentials:"include"})).ok}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class g1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ZR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_1(e))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fs){return this.instances.has(e)}getOptions(e=Fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:y1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fs){return this.component?this.component.multipleInstances?e:Fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y1(r){return r===Fs?void 0:r}function _1(r){return r.instantiationMode==="EAGER"}/**
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
 */class v1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const E1={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},T1=Me.INFO,S1={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},A1=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=S1[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oh{constructor(e){this.name=e,this._logLevel=T1,this._logHandler=A1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const b1=(r,e)=>e.some(n=>r instanceof n);let kv,Lv;function w1(){return kv||(kv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R1(){return Lv||(Lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZE=new WeakMap,Rm=new WeakMap,JE=new WeakMap,am=new WeakMap,hp=new WeakMap;function I1(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Zr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&ZE.set(n,r)}).catch(()=>{}),hp.set(e,r),e}function C1(r){if(Rm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Rm.set(r,e)}let Im={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Rm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||JE.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function D1(r){Im=r(Im)}function N1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(om(this),e,...n);return JE.set(s,e.sort?e.sort():[e]),Zr(s)}:R1().includes(r)?function(...e){return r.apply(om(this),e),Zr(ZE.get(this))}:function(...e){return Zr(r.apply(om(this),e))}}function O1(r){return typeof r=="function"?N1(r):(r instanceof IDBTransaction&&C1(r),b1(r,w1())?new Proxy(r,Im):r)}function Zr(r){if(r instanceof IDBRequest)return I1(r);if(am.has(r))return am.get(r);const e=O1(r);return e!==r&&(am.set(r,e),hp.set(e,r)),e}const om=r=>hp.get(r);function WE(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Zr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Zr(f.result),p.oldVersion,p.newVersion,Zr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const M1=["get","getKey","getAll","getAllKeys","count"],V1=["put","add","delete","clear"],lm=new Map;function Pv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(lm.get(e))return lm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=V1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||M1.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return lm.set(e,u),u}D1(r=>({...r,get:(e,n,s)=>Pv(e,n)||r.get(e,n,s),has:(e,n)=>!!Pv(e,n)||r.has(e,n)}));/**
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
 */class x1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(k1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function k1(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cm="@firebase/app",Uv="0.14.11";/**
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
 */const or=new Oh("@firebase/app"),L1="@firebase/app-compat",P1="@firebase/analytics-compat",U1="@firebase/analytics",z1="@firebase/app-check-compat",B1="@firebase/app-check",j1="@firebase/auth",H1="@firebase/auth-compat",q1="@firebase/database",F1="@firebase/data-connect",G1="@firebase/database-compat",K1="@firebase/functions",Y1="@firebase/functions-compat",$1="@firebase/installations",Q1="@firebase/installations-compat",X1="@firebase/messaging",Z1="@firebase/messaging-compat",J1="@firebase/performance",W1="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",iI="@firebase/storage-compat",rI="@firebase/firestore",sI="@firebase/ai",aI="@firebase/firestore-compat",oI="firebase",lI="12.12.0";/**
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
 */const Dm="[DEFAULT]",uI={[Cm]:"fire-core",[L1]:"fire-core-compat",[U1]:"fire-analytics",[P1]:"fire-analytics-compat",[B1]:"fire-app-check",[z1]:"fire-app-check-compat",[j1]:"fire-auth",[H1]:"fire-auth-compat",[q1]:"fire-rtdb",[F1]:"fire-data-connect",[G1]:"fire-rtdb-compat",[K1]:"fire-fn",[Y1]:"fire-fn-compat",[$1]:"fire-iid",[Q1]:"fire-iid-compat",[X1]:"fire-fcm",[Z1]:"fire-fcm-compat",[J1]:"fire-perf",[W1]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[iI]:"fire-gcs-compat",[rI]:"fire-fst",[aI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const lh=new Map,cI=new Map,Nm=new Map;function zv(r,e){try{r.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function zn(r){const e=r.name;if(Nm.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Nm.set(e,r);for(const n of lh.values())zv(n,r);for(const n of cI.values())zv(n,r);return!0}function cr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function An(r){return r==null?!1:r.settings!==void 0}/**
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
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new ta("app","Firebase",hI);/**
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
 */class fI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const ia=lI;function eT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Dm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Jr.create("bad-app-name",{appName:String(o)});if(n||(n=GE()),!n)throw Jr.create("no-options");const u=lh.get(o);if(u){if(ss(n,u.options)&&ss(s,u.config))return u;throw Jr.create("duplicate-app",{appName:o})}const f=new v1(o);for(const p of Nm.values())f.addComponent(p);const m=new fI(n,s,f);return lh.set(o,m),m}function tu(r=Dm){const e=lh.get(r);if(!e&&r===Dm&&GE())return eT();if(!e)throw Jr.create("no-app",{appName:r});return e}function Jt(r,e,n){let s=uI[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(f.join(" "));return}zn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dI="firebase-heartbeat-database",mI=1,ql="firebase-heartbeat-store";let um=null;function tT(){return um||(um=WE(dI,mI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jr.create("idb-open",{originalErrorMessage:r.message})})),um}async function pI(r){try{const n=(await tT()).transaction(ql),s=await n.objectStore(ql).get(nT(r));return await n.done,s}catch(e){if(e instanceof jn)or.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Bv(r,e){try{const s=(await tT()).transaction(ql,"readwrite");await s.objectStore(ql).put(e,nT(r)),await s.done}catch(n){if(n instanceof jn)or.warn(n.message);else{const s=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(s.message)}}}function nT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const gI=1024,yI=30;class _I{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=jv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>yI){const f=TI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){or.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jv(),{heartbeatsToSend:s,unsentEntries:o}=vI(this._heartbeatsCache.heartbeats),u=oh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return or.warn(n),""}}}function jv(){return new Date().toISOString().substring(0,10)}function vI(r,e=gI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Hv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Hv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QE()?XE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hv(r){return oh(JSON.stringify({version:2,heartbeats:r})).length}function TI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function SI(r){zn(new wn("platform-logger",e=>new x1(e),"PRIVATE")),zn(new wn("heartbeat",e=>new _I(e),"PRIVATE")),Jt(Cm,Uv,r),Jt(Cm,Uv,"esm2020"),Jt("fire-js","")}SI("");function iT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AI=iT,rT=new ta("auth","Firebase",iT());/**
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
 */const uh=new Oh("@firebase/auth");function bI(r,...e){uh.logLevel<=Me.WARN&&uh.warn(`Auth (${ia}): ${r}`,...e)}function Xc(r,...e){uh.logLevel<=Me.ERROR&&uh.error(`Auth (${ia}): ${r}`,...e)}/**
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
 */function ri(r,...e){throw fp(r,...e)}function Ni(r,...e){return fp(r,...e)}function sT(r,e,n){const s={...AI(),[e]:n};return new ta("auth","Firebase",s).create(e,{appName:r.name})}function Wr(r){return sT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return rT.create(r,...e)}function _e(r,e,...n){if(!r)throw fp(e,...n)}function rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Xc(e),new Error(e)}function lr(r,e){r||rr(e)}/**
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
 */function Om(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function wI(){return qv()==="http:"||qv()==="https:"}function qv(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function RI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wI()||$E()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class nu{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=JR()||t1()}get(){return RI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dp(r,e){lr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NI=new nu(3e4,6e4);function ra(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function fs(r,e,n,s,o={}){return oT(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=eu({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:p,...u};return e1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&na(r.emulatorConfig.host)&&(y.credentials="include"),aT.fetch()(await lT(r,r.config.apiHost,n,m),y)})}async function oT(r,e,n){r._canInitEmulator=!1;const s={...CI,...e};try{const o=new MI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw jc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw jc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw jc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw sT(r,E,y);ri(r,E)}}catch(o){if(o instanceof jn)throw o;ri(r,"network-request-failed",{message:String(o)})}}async function Mh(r,e,n,s,o={}){const u=await fs(r,e,n,s,o);return"mfaPendingCredential"in u&&ri(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function lT(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?dp(r.config,o):`${r.config.apiScheme}://${o}`;return DI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function OI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ni(this.auth,"network-request-failed")),NI.get())})}}function jc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ni(r,e,s);return o.customData._tokenResponse=n,o}function Fv(r){return r!==void 0&&r.enterprise!==void 0}class VI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return OI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xI(r,e){return fs(r,"GET","/v2/recaptchaConfig",ra(r,e))}/**
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
 */async function kI(r,e){return fs(r,"POST","/v1/accounts:delete",e)}async function ch(r,e){return fs(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LI(r,e=!1){const n=Ut(r),s=await n.getIdToken(e),o=mp(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Pl(cm(o.auth_time)),issuedAtTime:Pl(cm(o.iat)),expirationTime:Pl(cm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function cm(r){return Number(r)*1e3}function mp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const o=qE(n);return o?JSON.parse(o):(Xc("Failed to decode base64 JWT payload"),null)}catch(o){return Xc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gv(r){const e=mp(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof jn&&PI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function PI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class UI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pl(this.lastLoginAt),this.creationTime=Pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hh(r){var S;const e=r.auth,n=await r.getIdToken(),s=await Fl(r,ch(e,{idToken:n}));_e(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?uT(o.providerUserInfo):[],f=BI(r.providerData,u),m=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Mm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function zI(r){const e=Ut(r);await hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function uT(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jI(r,e){const n=await oT(r,{},async()=>{const s=eu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await lT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&na(r.emulatorConfig.host)&&(p.credentials="include"),aT.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HI(r,e){return fs(r,"POST","/v2/accounts:revokeToken",ra(r,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Gv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await jI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new to;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
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
 */function Fr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ei{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new UI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Mm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LI(this,e)}reload(){return zI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await hh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await Fl(this,kI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:D,isAnonymous:B,providerData:Z,stsTokenManager:X}=n;_e(S&&X,e,"internal-error");const F=to.fromJSON(this.name,X);_e(typeof S=="string",e,"internal-error"),Fr(s,e.name),Fr(o,e.name),_e(typeof D=="boolean",e,"internal-error"),_e(typeof B=="boolean",e,"internal-error"),Fr(u,e.name),Fr(f,e.name),Fr(m,e.name),Fr(p,e.name),Fr(y,e.name),Fr(E,e.name);const W=new ei({uid:S,auth:e,email:o,emailVerified:D,displayName:s,isAnonymous:B,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:F,createdAt:y,lastLoginAt:E});return Z&&Array.isArray(Z)&&(W.providerData=Z.map(ae=>({...ae}))),p&&(W._redirectEventId=p),W}static async _fromIdTokenResponse(e,n,s=!1){const o=new to;o.updateFromServerResponse(n);const u=new ei({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await hh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?uT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new to;m.updateFromIdToken(s);const p=new ei({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Mm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const Kv=new Map;function sr(r){lr(r instanceof Function,"Expected a class definition");let e=Kv.get(r);return e?(lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Kv.set(r,e),e)}/**
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
 */class cT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cT.type="NONE";const Yv=cT;/**
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
 */function Zc(r,e,n){return`firebase:${r}:${e}:${n}`}class no{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Zc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Zc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ch(this.auth,{idToken:e}).catch(()=>{});return n?ei._fromGetAccountInfoResponse(this.auth,n,e):null}return ei._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new no(sr(Yv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||sr(Yv);const f=Zc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let S;if(typeof E=="string"){const D=await ch(e,{idToken:E}).catch(()=>{});if(!D)break;S=await ei._fromGetAccountInfoResponse(e,D,E)}else S=ei._fromJSON(e,E);y!==u&&(m=S),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new no(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new no(u,e,s))}}/**
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
 */function $v(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gT(e))return"Blackberry";if(yT(e))return"Webos";if(fT(e))return"Safari";if((e.includes("chrome/")||dT(e))&&!e.includes("edge/"))return"Chrome";if(pT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hT(r=Wt()){return/firefox\//i.test(r)}function fT(r=Wt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dT(r=Wt()){return/crios\//i.test(r)}function mT(r=Wt()){return/iemobile/i.test(r)}function pT(r=Wt()){return/android/i.test(r)}function gT(r=Wt()){return/blackberry/i.test(r)}function yT(r=Wt()){return/webos/i.test(r)}function pp(r=Wt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function qI(r=Wt()){var e;return pp(r)&&!!((e=window.navigator)!=null&&e.standalone)}function FI(){return n1()&&document.documentMode===10}function _T(r=Wt()){return pp(r)||pT(r)||yT(r)||gT(r)||/windows phone/i.test(r)||mT(r)}/**
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
 */function vT(r,e=[]){let n;switch(r){case"Browser":n=$v(Wt());break;case"Worker":n=`${$v(Wt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ia}/${s}`}/**
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
 */class GI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function KI(r,e={}){return fs(r,"GET","/v2/passwordPolicy",ra(r,e))}/**
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
 */const YI=6;class $I{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??YI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class QI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new GI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ch(this,{idToken:e}),s=await ei._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(An(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Wr(this));const n=e?Ut(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KI(this),n=new $I(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await HI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _o(r){return Ut(r)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=u1(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XI(r){Vh=r}function ET(r){return Vh.loadJS(r)}function ZI(){return Vh.recaptchaEnterpriseScript}function JI(){return Vh.gapiScript}function WI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class eC{constructor(){this.enterprise=new tC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nC="recaptcha-enterprise",TT="NO_RECAPTCHA";class iC{constructor(e){this.type=nC,this.auth=_o(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{xI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new VI(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Fv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(TT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Fv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=ZI();p.length!==0&&(p+=m),ET(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Xv(r,e,n,s=!1,o=!1){const u=new iC(r);let f;if(o)f=TT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Zv(r,e,n,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Xv(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Xv(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function rC(r,e){const n=cr(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ss(u,e??{}))return o;ri(o,"already-initialized")}return n.initialize({options:e})}function sC(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function aC(r,e,n){const s=_o(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=ST(e),{host:f,port:m}=oC(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(ss(y,s.config.emulator)&&ss(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,na(f)?Nh(`${u}//${f}${p}`):lC()}function ST(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function oC(r){const e=ST(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Jv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Jv(f)}}}function Jv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function lC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,n){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}async function uC(r,e){return fs(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cC(r,e){return Mh(r,"POST","/v1/accounts:signInWithPassword",ra(r,e))}/**
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
 */async function hC(r,e){return Mh(r,"POST","/v1/accounts:signInWithEmailLink",ra(r,e))}async function fC(r,e){return Mh(r,"POST","/v1/accounts:signInWithEmailLink",ra(r,e))}/**
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
 */class Gl extends gp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Gl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zv(e,n,"signInWithPassword",cC);case"emailLink":return hC(e,{email:this._email,oobCode:this._password});default:ri(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zv(e,s,"signUpPassword",uC);case"emailLink":return fC(e,{idToken:n,email:this._email,oobCode:this._password});default:ri(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function io(r,e){return Mh(r,"POST","/v1/accounts:signInWithIdp",ra(r,e))}/**
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
 */const dC="http://localhost";class Qs extends gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ri("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Qs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,io(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:dC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eu(n)}return e}}/**
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
 */function mC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pC(r){const e=Ol(Ml(r)).link,n=e?Ol(Ml(e)).deep_link_id:null,s=Ol(Ml(r)).deep_link_id;return(s?Ol(Ml(s)).link:null)||s||n||e||r}class yp{constructor(e){const n=Ol(Ml(e)),s=n.apiKey??null,o=n.oobCode??null,u=mC(n.mode??null);_e(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=pC(e);try{return new yp(n)}catch{return null}}}/**
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
 */class vo{constructor(){this.providerId=vo.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=yp.parseLink(n);return _e(s,"argument-error"),Gl._fromEmailAndCode(e,s.code,s.tenantId)}}vo.PROVIDER_ID="password";vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class AT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class iu extends AT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends iu{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends iu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kr.credential(n,s)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Yr extends iu{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class $r extends iu{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $r.credential(n,s)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ei._fromIdTokenResponse(e,s,o),f=Wv(s);return new uo({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Wv(s);return new uo({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Wv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class fh extends jn{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,fh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new fh(e,n,s,o)}}function bT(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?fh._fromErrorAndOperation(r,u,e,s):u})}async function gC(r,e,n=!1){const s=await Fl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return uo._forOperation(r,"link",s)}/**
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
 */async function yC(r,e,n=!1){const{auth:s}=r;if(An(s.app))return Promise.reject(Wr(s));const o="reauthenticate";try{const u=await Fl(r,bT(s,o,e,r),n);_e(u.idToken,s,"internal-error");const f=mp(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(r.uid===m,s,"user-mismatch"),uo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ri(s,"user-mismatch"),u}}/**
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
 */async function wT(r,e,n=!1){if(An(r.app))return Promise.reject(Wr(r));const s="signIn",o=await bT(r,s,e),u=await uo._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function _C(r,e){return wT(_o(r),e)}/**
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
 */async function vC(r){const e=_o(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function EC(r,e,n){return An(r.app)?Promise.reject(Wr(r)):_C(Ut(r),vo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&vC(r),s})}function TC(r,e,n,s){return Ut(r).onIdTokenChanged(e,n,s)}function SC(r,e,n){return Ut(r).beforeAuthStateChanged(e,n)}function AC(r,e,n,s){return Ut(r).onAuthStateChanged(e,n,s)}function bC(r){return Ut(r).signOut()}const dh="__sak";/**
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
 */class RT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dh,"1"),this.storage.removeItem(dh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wC=1e3,RC=10;class IT extends RT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_T(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);FI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,RC):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IT.type="LOCAL";const IC=IT;/**
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
 */class CT extends RT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CT.type="SESSION";const DT=CT;/**
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
 */function CC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new xh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await CC(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xh.receivers=[];/**
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
 */function _p(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class DC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=_p("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const D=S;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Oi(){return window}function NC(r){Oi().location.href=r}/**
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
 */function NT(){return typeof Oi().WorkerGlobalScope<"u"&&typeof Oi().importScripts=="function"}async function OC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function VC(){return NT()?self:null}/**
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
 */const OT="firebaseLocalStorageDb",xC=1,mh="firebaseLocalStorage",MT="fbase_key";class ru{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kh(r,e){return r.transaction([mh],e?"readwrite":"readonly").objectStore(mh)}function kC(){const r=indexedDB.deleteDatabase(OT);return new ru(r).toPromise()}function Vm(){const r=indexedDB.open(OT,xC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(mh,{keyPath:MT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(mh)?e(s):(s.close(),await kC(),e(await Vm()))})})}async function e0(r,e,n){const s=kh(r,!0).put({[MT]:e,value:n});return new ru(s).toPromise()}async function LC(r,e){const n=kh(r,!1).get(e),s=await new ru(n).toPromise();return s===void 0?null:s.value}function t0(r,e){const n=kh(r,!0).delete(e);return new ru(n).toPromise()}const PC=800,UC=3;class VT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>UC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return NT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xh._getInstance(VC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await OC(),!this.activeServiceWorker)return;this.sender=new DC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await e0(e,dh,"1"),await t0(e,dh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>e0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>LC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>t0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=kh(o,!1).getAll();return new ru(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VT.type="LOCAL";const zC=VT;new nu(3e4,6e4);/**
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
 */function BC(r,e){return e?sr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class vp extends gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jC(r){return wT(r.auth,new vp(r),r.bypassAuthState)}function HC(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),yC(n,new vp(r),r.bypassAuthState)}async function qC(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),gC(n,new vp(r),r.bypassAuthState)}/**
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
 */class xT{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jC;case"linkViaPopup":case"linkViaRedirect":return qC;case"reauthViaPopup":case"reauthViaRedirect":return HC;default:ri(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FC=new nu(2e3,1e4);class eo extends xT{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FC.get())};e()}}eo.currentPopupAction=null;/**
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
 */const GC="pendingRedirect",Jc=new Map;class KC extends xT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Jc.get(this.auth._key());if(!e){try{const s=await YC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Jc.set(this.auth._key(),e)}return this.bypassAuthState||Jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YC(r,e){const n=XC(e),s=QC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function $C(r,e){Jc.set(r._key(),e)}function QC(r){return sr(r._redirectPersistence)}function XC(r){return Zc(GC,r.config.apiKey,r.name)}async function ZC(r,e,n=!1){if(An(r.app))return Promise.reject(Wr(r));const s=_o(r),o=BC(s,e),f=await new KC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const JC=600*1e3;class WC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!kT(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ni(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(n0(e))}saveEventToCache(e){this.cachedEventUids.add(n0(e)),this.lastProcessedEventTime=Date.now()}}function n0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function kT({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kT(r);default:return!1}}/**
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
 */async function t2(r,e={}){return fs(r,"GET","/v1/projects",e)}/**
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
 */const n2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i2=/^https?/;async function r2(r){if(r.config.emulator)return;const{authorizedDomains:e}=await t2(r);for(const n of e)try{if(s2(n))return}catch{}ri(r,"unauthorized-domain")}function s2(r){const e=Om(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!i2.test(n))return!1;if(n2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const a2=new nu(3e4,6e4);function i0(){const r=Oi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function o2(r){return new Promise((e,n)=>{var o,u,f;function s(){i0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i0(),n(Ni(r,"network-request-failed"))},timeout:a2.get()})}if((u=(o=Oi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Oi().gapi)!=null&&f.load)s();else{const m=WI("iframefcb");return Oi()[m]=()=>{gapi.load?s():n(Ni(r,"network-request-failed"))},ET(`${JI()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw Wc=null,e})}let Wc=null;function l2(r){return Wc=Wc||o2(r),Wc}/**
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
 */const u2=new nu(5e3,15e3),c2="__/auth/iframe",h2="emulator/auth/iframe",f2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m2(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?dp(e,h2):`https://${r.config.authDomain}/${c2}`,s={apiKey:e.apiKey,appName:r.name,v:ia},o=d2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${eu(s).slice(1)}`}async function p2(r){const e=await l2(r),n=Oi().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:m2(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ni(r,"network-request-failed"),m=Oi().setTimeout(()=>{u(f)},u2.get());function p(){Oi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const g2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y2=500,_2=600,v2="_blank",E2="http://localhost";class r0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T2(r,e,n,s=y2,o=_2){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...g2,width:s.toString(),height:o.toString(),top:u,left:f},y=Wt().toLowerCase();n&&(m=dT(y)?v2:n),hT(y)&&(e=e||E2,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[B,Z])=>`${D}${B}=${Z},`,"");if(qI(y)&&m!=="_self")return S2(e||"",m),new r0(null);const S=window.open(e||"",m,E);_e(S,r,"popup-blocked");try{S.focus()}catch{}return new r0(S)}function S2(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const A2="__/auth/handler",b2="emulator/auth/handler",w2=encodeURIComponent("fac");async function s0(r,e,n,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ia,eventId:o};if(e instanceof AT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",l1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(e instanceof iu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${w2}=${encodeURIComponent(p)}`:"";return`${R2(r)}?${eu(m).slice(1)}${y}`}function R2({config:r}){return r.emulator?dp(r,b2):`https://${r.authDomain}/${A2}`}/**
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
 */const hm="webStorageSupport";class I2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DT,this._completeRedirectFn=ZC,this._overrideRedirectResult=$C}async _openPopup(e,n,s,o){var f;lr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await s0(e,n,s,Om(),o);return T2(e,u,_p())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await s0(e,n,s,Om(),o);return NC(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(lr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await p2(e),s=new WC(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hm,{type:hm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[hm];u!==void 0&&n(!!u),ri(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _T()||fT()||pp()}}const C2=I2;var a0="@firebase/auth",o0="1.13.0";/**
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
 */class D2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function N2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O2(r){zn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vT(r)},y=new QI(s,o,u,p);return sC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zn(new wn("auth-internal",e=>{const n=_o(e.getProvider("auth").getImmediate());return(s=>new D2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(a0,o0,N2(r)),Jt(a0,o0,"esm2020")}/**
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
 */const M2=300,V2=KE("authIdTokenMaxAge")||M2;let l0=null;const x2=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>V2)return;const o=n==null?void 0:n.token;l0!==o&&(l0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function k2(r=tu()){const e=cr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=rC(r,{popupRedirectResolver:C2,persistence:[zC,IC,DT]}),s=KE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=x2(u.toString());SC(n,f,()=>f(n.currentUser)),TC(n,m=>f(m))}}const o=FE("auth");return o&&aC(n,`http://${o}`),n}function L2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}XI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Ni("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",L2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O2("Browser");var P2="firebase",U2="12.12.1";/**
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
 */Jt(P2,U2,"app");const LT="@firebase/installations",Ep="0.6.21";/**
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
 */const PT=1e4,UT=`w:${Ep}`,zT="FIS_v2",z2="https://firebaseinstallations.googleapis.com/v1",B2=3600*1e3,j2="installations",H2="Installations";/**
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
 */const q2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xs=new ta(j2,H2,q2);function BT(r){return r instanceof jn&&r.code.includes("request-failed")}/**
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
 */function jT({projectId:r}){return`${z2}/projects/${r}/installations`}function HT(r){return{token:r.token,requestStatus:2,expiresIn:G2(r.expiresIn),creationTime:Date.now()}}async function qT(r,e){const s=(await e.json()).error;return Xs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function FT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function F2(r,{refreshToken:e}){const n=FT(r);return n.append("Authorization",K2(e)),n}async function GT(r){const e=await r();return e.status>=500&&e.status<600?r():e}function G2(r){return Number(r.replace("s","000"))}function K2(r){return`${zT} ${r}`}/**
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
 */async function Y2({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=jT(r),o=FT(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:zT,appId:r.appId,sdkVersion:UT},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await GT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:HT(y.authToken)}}else throw await qT("Create Installation",p)}/**
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
 */function KT(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function $2(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Q2=/^[cdef][\w-]{21}$/,xm="";function X2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=Z2(r);return Q2.test(n)?n:xm}catch{return xm}}function Z2(r){return $2(r).substr(0,22)}/**
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
 */const YT=new Map;function $T(r,e){const n=Lh(r);QT(n,e),J2(n,e)}function QT(r,e){const n=YT.get(r);if(n)for(const s of n)s(e)}function J2(r,e){const n=W2();n&&n.postMessage({key:r,fid:e}),eD()}let Gs=null;function W2(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=r=>{QT(r.data.key,r.data.fid)}),Gs}function eD(){YT.size===0&&Gs&&(Gs.close(),Gs=null)}/**
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
 */const tD="firebase-installations-database",nD=1,Zs="firebase-installations-store";let fm=null;function Tp(){return fm||(fm=WE(tD,nD,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Zs)}}})),fm}async function ph(r,e){const n=Lh(r),o=(await Tp()).transaction(Zs,"readwrite"),u=o.objectStore(Zs),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&$T(r,e.fid),e}async function XT(r){const e=Lh(r),s=(await Tp()).transaction(Zs,"readwrite");await s.objectStore(Zs).delete(e),await s.done}async function Ph(r,e){const n=Lh(r),o=(await Tp()).transaction(Zs,"readwrite"),u=o.objectStore(Zs),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&$T(r,m.fid),m}/**
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
 */async function Sp(r){let e;const n=await Ph(r.appConfig,s=>{const o=iD(s),u=rD(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===xm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iD(r){const e=r||{fid:X2(),registrationStatus:0};return ZT(e)}function rD(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Xs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sD(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aD(r)}:{installationEntry:e}}async function sD(r,e){try{const n=await Y2(r,e);return ph(r.appConfig,n)}catch(n){throw BT(n)&&n.customData.serverCode===409?await XT(r.appConfig):await ph(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aD(r){let e=await u0(r.appConfig);for(;e.registrationStatus===1;)await KT(100),e=await u0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Sp(r);return s||n}return e}function u0(r){return Ph(r,e=>{if(!e)throw Xs.create("installation-not-found");return ZT(e)})}function ZT(r){return oD(r)?{fid:r.fid,registrationStatus:0}:r}function oD(r){return r.registrationStatus===1&&r.registrationTime+PT<Date.now()}/**
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
 */async function lD({appConfig:r,heartbeatServiceProvider:e},n){const s=uD(r,n),o=F2(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:UT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await GT(()=>fetch(s,m));if(p.ok){const y=await p.json();return HT(y)}else throw await qT("Generate Auth Token",p)}function uD(r,{fid:e}){return`${jT(r)}/${e}/authTokens:generate`}/**
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
 */async function Ap(r,e=!1){let n;const s=await Ph(r.appConfig,u=>{if(!JT(u))throw Xs.create("not-registered");const f=u.authToken;if(!e&&fD(f))return u;if(f.requestStatus===1)return n=cD(r,e),u;{if(!navigator.onLine)throw Xs.create("app-offline");const m=mD(u);return n=hD(r,m),m}});return n?await n:s.authToken}async function cD(r,e){let n=await c0(r.appConfig);for(;n.authToken.requestStatus===1;)await KT(100),n=await c0(r.appConfig);const s=n.authToken;return s.requestStatus===0?Ap(r,e):s}function c0(r){return Ph(r,e=>{if(!JT(e))throw Xs.create("not-registered");const n=e.authToken;return pD(n)?{...e,authToken:{requestStatus:0}}:e})}async function hD(r,e){try{const n=await lD(r,e),s={...e,authToken:n};return await ph(r.appConfig,s),n}catch(n){if(BT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await XT(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ph(r.appConfig,s)}throw n}}function JT(r){return r!==void 0&&r.registrationStatus===2}function fD(r){return r.requestStatus===2&&!dD(r)}function dD(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+B2}function mD(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function pD(r){return r.requestStatus===1&&r.requestTime+PT<Date.now()}/**
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
 */async function gD(r){const e=r,{installationEntry:n,registrationPromise:s}=await Sp(e);return s?s.catch(console.error):Ap(e).catch(console.error),n.fid}/**
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
 */async function yD(r,e=!1){const n=r;return await _D(n),(await Ap(n,e)).token}async function _D(r){const{registrationPromise:e}=await Sp(r);e&&await e}/**
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
 */function vD(r){if(!r||!r.options)throw dm("App Configuration");if(!r.name)throw dm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw dm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function dm(r){return Xs.create("missing-app-config-values",{valueName:r})}/**
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
 */const WT="installations",ED="installations-internal",TD=r=>{const e=r.getProvider("app").getImmediate(),n=vD(e),s=cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},SD=r=>{const e=r.getProvider("app").getImmediate(),n=cr(e,WT).getImmediate();return{getId:()=>gD(n),getToken:o=>yD(n,o)}};function AD(){zn(new wn(WT,TD,"PUBLIC")),zn(new wn(ED,SD,"PRIVATE"))}AD();Jt(LT,Ep);Jt(LT,Ep,"esm2020");/**
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
 */const gh="analytics",bD="firebase_id",wD="origin",RD=60*1e3,ID="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bp="https://www.googletagmanager.com/gtag/js";/**
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
 */const CD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new ta("analytics","Analytics",CD);/**
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
 */function DD(r){if(!r.startsWith(bp)){const e=bn.create("invalid-gtag-resource",{gtagURL:r});return sn.warn(e.message),""}return r}function eS(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function ND(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function OD(r,e){const n=ND("firebase-js-sdk-policy",{createScriptURL:DD}),s=document.createElement("script"),o=`${bp}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function MD(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function VD(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await eS(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){sn.error(m)}r("config",o,u)}async function xD(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await eS(n);for(const p of f){const y=m.find(S=>S.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){sn.error(u)}}function kD(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await xD(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await VD(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){sn.error(m)}}return o}function LD(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=kD(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function PD(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bp)&&n.src.includes(r))return n;return null}/**
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
 */const UD=30,zD=1e3;class BD{constructor(e={},n=zD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tS=new BD;function jD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function HD(r){var f;const{appId:e,apiKey:n}=r,s={method:"GET",headers:jD(n)},o=ID.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let m="";try{const p=await u.json();(f=p.error)!=null&&f.message&&(m=p.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:m})}return u.json()}async function qD(r,e=tS,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw bn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw bn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new KD;return setTimeout(async()=>{m.abort()},RD),nS({appId:s,apiKey:o,measurementId:u},f,m,e)}async function nS(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=tS){var m;const{appId:u,measurementId:f}=r;try{await FD(s,e)}catch(p){if(f)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw p}try{const p=await HD(r);return o.deleteThrottleMetadata(u),p}catch(p){const y=p;if(!GD(y)){if(o.deleteThrottleMetadata(u),f)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:f};throw p}const E=Number((m=y==null?void 0:y.customData)==null?void 0:m.httpStatus)===503?xv(n,o.intervalMillis,UD):xv(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(u,S),sn.debug(`Calling attemptFetch again in ${E} millis`),nS(r,S,s,o)}}function FD(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(bn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GD(r){if(!(r instanceof jn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class KD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function YD(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f={...s,send_to:u};r("event",n,f)}}async function $D(r,e,n,s){if(s&&s.global){const o={};for(const u of Object.keys(n))o[`user_properties.${u}`]=n[u];return r("set",o),Promise.resolve()}else{const o=await e;r("config",o,{update:!0,user_properties:n})}}/**
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
 */async function QD(){if(QE())try{await XE()}catch(r){return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XD(r,e,n,s,o,u,f){const m=qD(r);m.then(D=>{n[D.measurementId]=D.appId,r.options.measurementId&&D.measurementId!==r.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>sn.error(D)),e.push(m);const p=QD().then(D=>{if(D)return s.getId()}),[y,E]=await Promise.all([m,p]);PD(u)||OD(u,y.measurementId),o("js",new Date);const S=(f==null?void 0:f.config)??{};return S[wD]="firebase",S.update=!0,E!=null&&(S[bD]=E),o("config",y.measurementId,S),y.measurementId}/**
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
 */class ZD{constructor(e){this.app=e}_delete(){return delete ro[this.app.options.appId],Promise.resolve()}}let ro={},h0=[];const f0={};let mm="dataLayer",JD="gtag",d0,wp,m0=!1;function WD(){const r=[];if($E()&&r.push("This is a browser extension environment."),r1()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:e});sn.warn(n.message)}}function eN(r,e,n){WD();const s=r.options.appId;if(!s)throw bn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(ro[s]!=null)throw bn.create("already-exists",{id:s});if(!m0){MD(mm);const{wrappedGtag:u,gtagCore:f}=LD(ro,h0,f0,mm,JD);wp=u,d0=f,m0=!0}return ro[s]=XD(r,h0,f0,e,d0,mm,n),new ZD(r)}function tN(r=tu()){r=Ut(r);const e=cr(r,gh);return e.isInitialized()?e.getImmediate():nN(r)}function nN(r,e={}){const n=cr(r,gh);if(n.isInitialized()){const o=n.getImmediate();if(ss(e,n.getOptions()))return o;throw bn.create("already-initialized")}return n.initialize({options:e})}function iN(r,e,n){r=Ut(r),$D(wp,ro[r.app.options.appId],e,n).catch(s=>sn.error(s))}function rN(r,e,n,s){r=Ut(r),YD(wp,ro[r.app.options.appId],e,n,s).catch(o=>sn.error(o))}const p0="@firebase/analytics",g0="0.10.21";function sN(){zn(new wn(gh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return eN(s,o,n)},"PUBLIC")),zn(new wn("analytics-internal",r,"PRIVATE")),Jt(p0,g0),Jt(p0,g0,"esm2020");function r(e){try{const n=e.getProvider(gh).getImmediate();return{logEvent:(s,o,u)=>rN(n,s,o,u),setUserProperties:(s,o)=>iN(n,s,o)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}sN();/**
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
 */const iS="functions";/**
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
 */class aN{constructor(e,n,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,An(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o==null||o.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:n,messagingToken:s,appCheckToken:o}}}/**
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
 */const km="us-central1";class oN{constructor(e,n,s,o,u=km,f=(...m)=>fetch(...m)){this.app=e,this.fetchImpl=f,this.emulatorOrigin=null,this.contextProvider=new aN(e,n,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=km}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function lN(r,e,n){const s=na(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${n}`,s&&Nh(r.emulatorOrigin+"/backends")}const y0="@firebase/functions",_0="0.13.3";/**
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
 */const uN="auth-internal",cN="app-check-internal",hN="messaging-internal";function fN(r){const e=(n,{instanceIdentifier:s})=>{const o=n.getProvider("app").getImmediate(),u=n.getProvider(uN),f=n.getProvider(hN),m=n.getProvider(cN);return new oN(o,u,f,m,s)};zn(new wn(iS,e,"PUBLIC").setMultipleInstances(!0)),Jt(y0,_0,r),Jt(y0,_0,"esm2020")}/**
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
 */function dN(r=tu(),e=km){const s=cr(Ut(r),iS).getImmediate({identifier:e}),o=cp("functions");return o&&mN(s,...o),s}function mN(r,e,n){lN(Ut(r),e,n)}fN();var v0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,rS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,b){function C(){}C.prototype=b.prototype,R.F=b.prototype,R.prototype=new C,R.prototype.constructor=R,R.D=function(V,O,k){for(var w=Array(arguments.length-2),We=2;We<arguments.length;We++)w[We-2]=arguments[We];return b.prototype[O].apply(V,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,b,C){C||(C=0);const V=Array(16);if(typeof b=="string")for(var O=0;O<16;++O)V[O]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(O=0;O<16;++O)V[O]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=R.g[0],C=R.g[1],O=R.g[2];let k=R.g[3],w;w=b+(k^C&(O^k))+V[0]+3614090360&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[1]+3905402710&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[2]+606105819&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[3]+3250441966&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+V[4]+4118548399&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[5]+1200080426&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[6]+2821735955&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[7]+4249261313&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+V[8]+1770035416&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[9]+2336552879&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[10]+4294925233&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[11]+2304563134&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+V[12]+1804603682&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+V[13]+4254626195&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+V[14]+2792965006&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+V[15]+1236535329&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(O^k&(C^O))+V[1]+4129170786&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[6]+3225465664&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[11]+643717713&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[0]+3921069994&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+V[5]+3593408605&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[10]+38016083&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[15]+3634488961&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[4]+3889429448&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+V[9]+568446438&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[14]+3275163606&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[3]+4107603335&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[8]+1163531501&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+V[13]+2850285829&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+V[2]+4243563512&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+V[7]+1735328473&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+V[12]+2368359562&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(C^O^k)+V[5]+4294588738&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[8]+2272392833&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[11]+1839030562&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[14]+4259657740&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+V[1]+2763975236&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[4]+1272893353&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[7]+4139469664&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[10]+3200236656&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+V[13]+681279174&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[0]+3936430074&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[3]+3572445317&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[6]+76029189&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+V[9]+3654602809&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+V[12]+3873151461&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+V[15]+530742520&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+V[2]+3299628645&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(O^(C|~k))+V[0]+4096336452&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[7]+1126891415&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[14]+2878612391&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[5]+4237533241&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+V[12]+1700485571&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[3]+2399980690&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[10]+4293915773&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[1]+2240044497&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+V[8]+1873313359&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[15]+4264355552&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[6]+2734768916&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[13]+1309151649&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+V[4]+4149444226&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+V[11]+3174756917&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+V[2]+718787259&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+V[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(O+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+k&4294967295}s.prototype.v=function(R,b){b===void 0&&(b=R.length);const C=b-this.blockSize,V=this.C;let O=this.h,k=0;for(;k<b;){if(O==0)for(;k<=C;)o(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<b;)if(V[O++]=R.charCodeAt(k++),O==this.blockSize){o(this,V),O=0;break}}else for(;k<b;)if(V[O++]=R[k++],O==this.blockSize){o(this,V),O=0;break}}this.h=O,this.o+=b},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;b=this.o*8;for(var C=R.length-8;C<R.length;++C)R[C]=b&255,b/=256;for(this.v(R),R=Array(16),b=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)R[b++]=this.g[C]>>>V&255;return R};function u(R,b){var C=m;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=b(R)}function f(R,b){this.h=b;const C=[];let V=!0;for(let O=R.length-1;O>=0;O--){const k=R[O]|0;V&&k==b||(C[O]=k,V=!1)}this.g=C}var m={};function p(R){return-128<=R&&R<128?u(R,function(b){return new f([b|0],b<0?-1:0)}):new f([R|0],R<0?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return S;if(R<0)return F(y(-R));const b=[];let C=1;for(let V=0;R>=C;V++)b[V]=R/C|0,C*=4294967296;return new f(b,0)}function E(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return F(E(R.substring(1),b));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(b,8));let V=S;for(let k=0;k<R.length;k+=8){var O=Math.min(8,R.length-k);const w=parseInt(R.substring(k,k+O),b);O<8?(O=y(Math.pow(b,O)),V=V.j(O).add(y(w))):(V=V.j(C),V=V.add(y(w)))}return V}var S=p(0),D=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(X(this))return-F(this).m();let R=0,b=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);R+=(V>=0?V:4294967296+V)*b,b*=4294967296}return R},r.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(Z(this))return"0";if(X(this))return"-"+F(this).toString(R);const b=y(Math.pow(R,6));var C=this;let V="";for(;;){const O=de(C,b).g;C=W(C,O.j(b));let k=((C.g.length>0?C.g[0]:C.h)>>>0).toString(R);if(C=O,Z(C))return k+V;for(;k.length<6;)k="0"+k;V=k+V}},r.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function Z(R){if(R.h!=0)return!1;for(let b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function X(R){return R.h==-1}r.l=function(R){return R=W(this,R),X(R)?-1:Z(R)?0:1};function F(R){const b=R.g.length,C=[];for(let V=0;V<b;V++)C[V]=~R.g[V];return new f(C,~R.h).add(D)}r.abs=function(){return X(this)?F(this):this},r.add=function(R){const b=Math.max(this.g.length,R.g.length),C=[];let V=0;for(let O=0;O<=b;O++){let k=V+(this.i(O)&65535)+(R.i(O)&65535),w=(k>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);V=w>>>16,k&=65535,w&=65535,C[O]=w<<16|k}return new f(C,C[C.length-1]&-2147483648?-1:0)};function W(R,b){return R.add(F(b))}r.j=function(R){if(Z(this)||Z(R))return S;if(X(this))return X(R)?F(this).j(F(R)):F(F(this).j(R));if(X(R))return F(this.j(F(R)));if(this.l(B)<0&&R.l(B)<0)return y(this.m()*R.m());const b=this.g.length+R.g.length,C=[];for(var V=0;V<2*b;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let O=0;O<R.g.length;O++){const k=this.i(V)>>>16,w=this.i(V)&65535,We=R.i(O)>>>16,$e=R.i(O)&65535;C[2*V+2*O]+=w*$e,ae(C,2*V+2*O),C[2*V+2*O+1]+=k*$e,ae(C,2*V+2*O+1),C[2*V+2*O+1]+=w*We,ae(C,2*V+2*O+1),C[2*V+2*O+2]+=k*We,ae(C,2*V+2*O+2)}for(R=0;R<b;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=b;R<2*b;R++)C[R]=0;return new f(C,0)};function ae(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function se(R,b){this.g=R,this.h=b}function de(R,b){if(Z(b))throw Error("division by zero");if(Z(R))return new se(S,S);if(X(R))return b=de(F(R),b),new se(F(b.g),F(b.h));if(X(b))return b=de(R,F(b)),new se(F(b.g),b.h);if(R.g.length>30){if(X(R)||X(b))throw Error("slowDivide_ only works with positive integers.");for(var C=D,V=b;V.l(R)<=0;)C=ge(C),V=ge(V);var O=ve(C,1),k=ve(V,1);for(V=ve(V,2),C=ve(C,2);!Z(V);){var w=k.add(V);w.l(R)<=0&&(O=O.add(C),k=w),V=ve(V,1),C=ve(C,1)}return b=W(R,O.j(b)),new se(O,b)}for(O=S;R.l(b)>=0;){for(C=Math.max(1,Math.floor(R.m()/b.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),k=y(C),w=k.j(b);X(w)||w.l(R)>0;)C-=V,k=y(C),w=k.j(b);Z(k)&&(k=D),O=O.add(k),R=W(R,w)}return new se(O,R)}r.B=function(R){return de(this,R).h},r.and=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)&R.i(V);return new f(C,this.h&R.h)},r.or=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)|R.i(V);return new f(C,this.h|R.h)},r.xor=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)^R.i(V);return new f(C,this.h^R.h)};function ge(R){const b=R.g.length+1,C=[];for(let V=0;V<b;V++)C[V]=R.i(V)<<1|R.i(V-1)>>>31;return new f(C,R.h)}function ve(R,b){const C=b>>5;b%=32;const V=R.g.length-C,O=[];for(let k=0;k<V;k++)O[k]=b>0?R.i(k+C)>>>b|R.i(k+C+1)<<32-b:R.i(k+C);return new f(O,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,rS=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,es=f}).apply(typeof v0<"u"?v0:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sS,Vl,aS,eh,Lm,oS,lS,uS;(function(){var r,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in v))break e;v=v[L]}c=c[c.length-1],A=v[c],g=g(A),g!=A&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var v=[],A;for(A in g)Object.prototype.hasOwnProperty.call(g,A)&&v.push([A,g[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,v){return c.call.apply(c.bind,arguments)}function y(c,g,v){return y=p,y.apply(null,arguments)}function E(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,g){function v(){}v.prototype=g.prototype,c.Z=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,L,j){for(var ne=Array(arguments.length-2),be=2;be<arguments.length;be++)ne[be-2]=arguments[be];return g.prototype[L].apply(A,ne)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function B(c){const g=c.length;if(g>0){const v=Array(g);for(let A=0;A<g;A++)v[A]=c[A];return v}return[]}function Z(c,g){for(let A=1;A<arguments.length;A++){const L=arguments[A];var v=typeof L;if(v=v!="object"?v:L?Array.isArray(L)?"array":v:"null",v=="array"||v=="object"&&typeof L.length=="number"){v=c.length||0;const j=L.length||0;c.length=v+j;for(let ne=0;ne<j;ne++)c[v+ne]=L[ne]}else c.push(L)}}class X{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function F(c){f.setTimeout(()=>{throw c},0)}function W(){var c=R;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ae{constructor(){this.h=this.g=null}add(g,v){const A=se.get();A.set(g,v),this.h?this.h.next=A:this.g=A,this.h=A}}var se=new X(()=>new de,c=>c.reset());class de{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,ve=!1,R=new ae,b=()=>{const c=Promise.resolve(void 0);ge=()=>{c.then(C)}};function C(){for(var c;c=W();){try{c.h.call(c.g)}catch(v){F(v)}var g=se;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}ve=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,g),f.removeEventListener("test",v,g)}catch{}return c})();function w(c){return/^[\s\xa0]*$/.test(c)}function We(c,g){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}S(We,O),We.prototype.init=function(c,g){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),K=0;function ie(c,g,v,A,L){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!A,this.ha=L,this.key=++K,this.da=this.fa=!1}function me(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ue(c,g,v){for(const A in c)g.call(v,c[A],A,c)}function Fe(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function M(c){const g={};for(const v in c)g[v]=c[v];return g}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(c,g){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)c[v]=A[v];for(let j=0;j<Q.length;j++)v=Q[j],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function oe(c){this.src=c,this.g={},this.h=0}oe.prototype.add=function(c,g,v,A,L){const j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);const ne=Re(c,g,A,L);return ne>-1?(g=c[ne],v||(g.fa=!1)):(g=new ie(g,this.src,j,!!A,L),g.fa=v,c.push(g)),g};function Ee(c,g){const v=g.type;if(v in c.g){var A=c.g[v],L=Array.prototype.indexOf.call(A,g,void 0),j;(j=L>=0)&&Array.prototype.splice.call(A,L,1),j&&(me(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Re(c,g,v,A){for(let L=0;L<c.length;++L){const j=c[L];if(!j.da&&j.listener==g&&j.capture==!!v&&j.ha==A)return L}return-1}var ke="closure_lm_"+(Math.random()*1e6|0),Dt={};function rt(c,g,v,A,L){if(Array.isArray(g)){for(let j=0;j<g.length;j++)rt(c,g[j],v,A,L);return null}return v=wo(v),c&&c[$e]?c.J(g,v,m(A)?!!A.capture:!1,L):ds(c,g,v,!1,A,L)}function ds(c,g,v,A,L,j){if(!g)throw Error("Invalid event type");const ne=m(L)?!!L.capture:!!L;let be=ms(c);if(be||(c[ke]=be=new oe(c)),v=be.add(g,v,A,ne,j),v.proxy)return v;if(A=aa(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)k||(L=ne),L===void 0&&(L=!1),c.addEventListener(g.toString(),A,L);else if(c.attachEvent)c.attachEvent(si(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function aa(){function c(v){return g.call(c.src,c.listener,v)}const g=Ao;return c}function oa(c,g,v,A,L){if(Array.isArray(g))for(var j=0;j<g.length;j++)oa(c,g[j],v,A,L);else A=m(A)?!!A.capture:!!A,v=wo(v),c&&c[$e]?(c=c.i,j=String(g).toString(),j in c.g&&(g=c.g[j],v=Re(g,v,A,L),v>-1&&(me(g[v]),Array.prototype.splice.call(g,v,1),g.length==0&&(delete c.g[j],c.h--)))):c&&(c=ms(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,v,A,L)),(v=c>-1?g[c]:null)&&la(v))}function la(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[$e])Ee(g.i,c);else{var v=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(v,A,c.capture):g.detachEvent?g.detachEvent(si(v),A):g.addListener&&g.removeListener&&g.removeListener(A),(v=ms(g))?(Ee(v,c),v.h==0&&(v.src=null,g[ke]=null)):me(c)}}}function si(c){return c in Dt?Dt[c]:Dt[c]="on"+c}function Ao(c,g){if(c.da)c=!0;else{g=new We(g,this);const v=c.listener,A=c.ha||c.src;c.fa&&la(c),c=v.call(A,g)}return c}function ms(c){return c=c[ke],c instanceof oe?c:null}var bo="__closure_events_fn_"+(Math.random()*1e9>>>0);function wo(c){return typeof c=="function"?c:(c[bo]||(c[bo]=function(g){return c.handleEvent(g)}),c[bo])}function yt(){V.call(this),this.i=new oe(this),this.M=this,this.G=null}S(yt,V),yt.prototype[$e]=!0,yt.prototype.removeEventListener=function(c,g,v,A){oa(this,c,g,v,A)};function Nt(c,g){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new O(g,c);else if(g instanceof O)g.target=g.target||c;else{var L=g;g=new O(A,c),re(g,L)}L=!0;let j,ne;if(v)for(ne=v.length-1;ne>=0;ne--)j=g.g=v[ne],L=hr(j,A,!0,g)&&L;if(j=g.g=c,L=hr(j,A,!0,g)&&L,L=hr(j,A,!1,g)&&L,v)for(ne=0;ne<v.length;ne++)j=g.g=v[ne],L=hr(j,A,!1,g)&&L}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const v=c.g[g];for(let A=0;A<v.length;A++)me(v[A]);delete c.g[g],c.h--}}this.G=null},yt.prototype.J=function(c,g,v,A){return this.i.add(String(c),g,!1,v,A)},yt.prototype.K=function(c,g,v,A){return this.i.add(String(c),g,!0,v,A)};function hr(c,g,v,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let L=!0;for(let j=0;j<g.length;++j){const ne=g[j];if(ne&&!ne.da&&ne.capture==v){const be=ne.listener,ft=ne.ha||ne.src;ne.fa&&Ee(c.i,ne),L=be.call(ft,A)!==!1&&L}}return L&&!A.defaultPrevented}function Zh(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:f.setTimeout(c,g||0)}function hu(c){c.g=Zh(()=>{c.g=null,c.i&&(c.i=!1,hu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class en extends V{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:hu(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(c){V.call(this),this.h=c,this.g={}}S(ps,V);var Ro=[];function Io(c){Ue(c.g,function(g,v){this.g.hasOwnProperty(v)&&la(g)},c),c.g={}}ps.prototype.N=function(){ps.Z.N.call(this),Io(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=f.JSON.stringify,Jh=f.JSON.parse,fu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function du(){}function mu(){}var Hn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zt(){O.call(this,"d")}S(zt,O);function Rn(){O.call(this,"c")}S(Rn,O);var ht={},pu=null;function ua(){return pu=pu||new yt}ht.Ia="serverreachability";function gu(c){O.call(this,ht.Ia,c)}S(gu,O);function ai(c){const g=ua();Nt(g,new gu(g))}ht.STAT_EVENT="statevent";function gs(c,g){O.call(this,ht.STAT_EVENT,c),this.stat=g}S(gs,O);function _t(c){const g=ua();Nt(g,new gs(g,c))}ht.Ja="timingevent";function oi(c,g){O.call(this,ht.Ja,c),this.size=g}S(oi,O);function li(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},g)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function Wh(c,g,v,A,L,j){c.info(function(){if(c.g)if(j){var ne="",be=j.split("&");for(let He=0;He<be.length;He++){var ft=be[He].split("=");if(ft.length>1){const st=ft[0];ft=ft[1];const Nn=st.split("_");ne=Nn.length>=2&&Nn[1]=="type"?ne+(st+"="+ft+"&"):ne+(st+"=redacted&")}}}else ne=null;else ne=j;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+g+`
`+v+`
`+ne})}function yu(c,g,v,A,L,j,ne){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+g+`
`+v+`
`+j+" "+ne})}function ui(c,g,v,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ef(c,v)+(A?" "+A:"")})}function ys(c,g){c.info(function(){return"TIMEOUT: "+g})}qn.prototype.info=function(){};function ef(c,g){if(!c.g)return g;if(!g)return null;try{const j=JSON.parse(g);if(j){for(c=0;c<j.length;c++)if(Array.isArray(j[c])){var v=j[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var L=A[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ne=1;ne<A.length;ne++)A[ne]=""}}}}return fr(j)}catch{return g}}var _s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Co={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function vs(){}S(vs,du),vs.prototype.g=function(){return new XMLHttpRequest},Do=new vs;function zi(c){return encodeURIComponent(String(c))}function _u(c){var g=1;c=c.split(":");const v=[];for(;g>0&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function Fn(c,g,v,A){this.j=c,this.i=g,this.l=v,this.S=A||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gn}function Gn(){this.i=null,this.g="",this.h=!1}var vt={},xt={};function ci(c,g,v){c.M=1,c.A=Es(Tt(g)),c.u=v,c.R=!0,ca(c,null)}function ca(c,g){c.F=Date.now(),hi(c),c.B=Tt(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ma(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Gn,c.g=Vu(c.j,v?g:null,!c.u),c.P>0&&(c.O=new en(y(c.Y,c,c.g),c.P)),g=c.V,v=c.g,A=c.ba;var L="readystatechange";Array.isArray(L)||(L&&(Ro[0]=L.toString()),L=Ro);for(let j=0;j<L.length;j++){const ne=rt(v,L[j],A||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),ai(),Wh(c.i,c.v,c.B,c.l,c.S,c.u)}Fn.prototype.ba=function(c){c=c.target;const g=this.O;g&&$n(c)==3?g.j():this.Y(c)},Fn.prototype.Y=function(c){try{if(c==this.g)e:{const be=$n(this.g),ft=this.g.ya(),He=this.g.ca();if(!(be<3)&&(be!=3||this.g&&(this.h.h||this.g.la()||Bt(this.g)))){this.K||be!=4||ft==7||(ft==8||He<=0?ai(3):ai(2)),fi(this);var g=this.g.ca();this.X=g;var v=tf(this);if(this.o=g==200,yu(this.i,this.v,this.B,this.l,this.S,be,g),this.o){if(this.U&&!this.L){t:{if(this.g){var A,L=this.g;if((A=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(A)){var j=A;break t}}j=null}if(c=j)ui(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,di(this,c);else{this.o=!1,this.m=3,_t(12),mn(this),In(this);break e}}if(this.R){c=!0;let st;for(;!this.K&&this.C<v.length;)if(st=Eu(this,v),st==xt){be==4&&(this.m=4,_t(14),c=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(st==vt){this.m=4,_t(15),ui(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else ui(this.i,this.l,st,null),di(this,st);if(vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||v.length!=0||this.h.h||(this.m=1,_t(16),c=!1),this.o=this.o&&c,!c)ui(this.i,this.l,v,"[Invalid Chunked Response]"),mn(this),In(this);else if(v.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Fo(ne),ne.P=!0,_t(11))}}else ui(this.i,this.l,v,null),di(this,v);be==4&&mn(this),this.o&&!this.K&&(be==4?Du(this.j,this):(this.o=!1,hi(this)))}else ji(this.g),g==400&&v.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),mn(this),In(this)}}}catch{}finally{}};function tf(c){if(!vu(c))return c.g.la();const g=Bt(c.g);if(g==="")return"";let v="";const A=g.length,L=$n(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return mn(c),In(c),"";c.h.i=new f.TextDecoder}for(let j=0;j<A;j++)c.h.h=!0,v+=c.h.i.decode(g[j],{stream:!(L&&j==A-1)});return g.length=0,c.h.g+=v,c.C=0,c.h.g}function vu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Eu(c,g){var v=c.C,A=g.indexOf(`
`,v);return A==-1?xt:(v=Number(g.substring(v,A)),isNaN(v)?vt:(A+=1,A+v>g.length?xt:(g=g.slice(A,A+v),c.C=A+v,g)))}Fn.prototype.cancel=function(){this.K=!0,mn(this)};function hi(c){c.T=Date.now()+c.H,ha(c,c.H)}function ha(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=li(y(c.aa,c),g)}function fi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Fn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ys(this.i,this.B),this.M!=2&&(ai(),_t(17)),mn(this),this.m=2,In(this)):ha(this,this.T-c)};function In(c){c.j.I==0||c.K||Du(c.j,c)}function mn(c){fi(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,Io(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function di(c,g){try{var v=c.j;if(v.I!=0&&(v.g==c||pi(v.h,c))){if(!c.L&&pi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)va(v),Er(v);else break e;Is(v),_t(18)}}else v.xa=L[1],0<v.xa-v.K&&L[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=li(y(v.Va,v),6e3));mi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ti(v,11)}else if((c.L||v.g==c)&&va(v),!w(g))for(L=v.Ba.g.parse(g),g=0;g<L.length;g++){let He=L[g];const st=He[0];if(!(st<=v.K))if(v.K=st,He=He[1],v.I==2)if(He[0]=="c"){v.M=He[1],v.ba=He[2];const Nn=He[3];Nn!=null&&(v.ka=Nn,v.j.info("VER="+v.ka));const Si=He[4];Si!=null&&(v.za=Si,v.j.info("SVER="+v.za));const Qn=He[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(A=1.5*Qn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Xn=c.g;if(Xn){const Cs=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cs){var j=A.h;j.g||Cs.indexOf("spdy")==-1&&Cs.indexOf("quic")==-1&&Cs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Mo(j,j.h),j.h=null))}if(A.G){const Ea=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(A.wa=Ea,Ge(A.J,A.G,Ea))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var ne=c;if(A.na=Mu(A,A.L?A.ba:null,A.W),ne.L){Vo(A.h,ne);var be=ne,ft=A.O;ft&&(be.H=ft),be.D&&(fi(be),hi(be)),A.g=ne}else Iu(A);v.i.length>0&&Ei(v)}else He[0]!="stop"&&He[0]!="close"||Ti(v,7);else v.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Ti(v,7):Ho(v):He[0]!="noop"&&v.l&&v.l.qa(He),v.A=0)}}ai(4)}catch{}}var Et=class{constructor(c,g){this.g=c,this.map=g}};function No(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function mi(c){return c.h?1:c.g?c.g.size:0}function pi(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Mo(c,g){c.g?c.g.add(g):c.h=g}function Vo(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}No.prototype.cancel=function(){if(this.i=xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function xo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.G);return g}return B(c.i)}var Tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(c,g){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let L,j=null;A>=0?(L=c[v].substring(0,A),j=c[v].substring(A+1)):L=c[v],g(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function pn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof pn?(this.l=c.l,kt(this,c.j),this.o=c.o,this.g=c.g,dr(this,c.u),this.h=c.h,ko(this,wu(c.i)),this.m=c.m):c&&(g=String(c).match(Tu))?(this.l=!1,kt(this,g[1]||"",!0),this.o=gi(g[2]||""),this.g=gi(g[3]||"",!0),dr(this,g[4]),this.h=gi(g[5]||"",!0),ko(this,g[6]||"",!0),this.m=gi(g[7]||"")):(this.l=!1,this.i=new pr(null,this.l))}pn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Ts(g,da,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ts(g,da,!0),"@"),c.push(zi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ts(v,v.charAt(0)=="/"?Lo:Su,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ts(v,Au)),c.join("")},pn.prototype.resolve=function(c){const g=Tt(this);let v=!!c.j;v?kt(g,c.j):v=!!c.o,v?g.o=c.o:v=!!c.g,v?g.g=c.g:v=c.u!=null;var A=c.h;if(v)dr(g,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var L=g.h.lastIndexOf("/");L!=-1&&(A=g.h.slice(0,L+1)+A)}if(L=A,L==".."||L==".")A="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){A=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let ne=0;ne<L.length;){const be=L[ne++];be=="."?A&&ne==L.length&&j.push(""):be==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),A&&ne==L.length&&j.push("")):(j.push(be),A=!0)}A=j.join("/")}else A=L}return v?g.h=A:v=c.i.toString()!=="",v?ko(g,wu(c.i)):v=!!c.m,v&&(g.m=c.m),g};function Tt(c){return new pn(c)}function kt(c,g,v){c.j=v?gi(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function dr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function ko(c,g,v){g instanceof pr?(c.i=g,pa(c.i,c.l)):(v||(g=Ts(g,mr)),c.i=new pr(g,c.l))}function Ge(c,g,v){c.i.set(g,v)}function Es(c){return Ge(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function gi(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ts(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,an),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function an(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var da=/[#\/\?@]/g,Su=/[#\?:]/g,Lo=/[#\?]/g,mr=/[#\?@]/g,Au=/#/g;function pr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function on(c){c.g||(c.g=new Map,c.h=0,c.i&&fa(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=pr.prototype,r.add=function(c,g){on(this),this.i=null,c=gr(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function bu(c,g){on(c),g=gr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Po(c,g){return on(c),g=gr(c,g),c.g.has(g)}r.forEach=function(c,g){on(this),this.g.forEach(function(v,A){v.forEach(function(L){c.call(g,L,A,this)},this)},this)};function Uo(c,g){on(c);let v=[];if(typeof g=="string")Po(c,g)&&(v=v.concat(c.g.get(gr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)v=v.concat(c[g]);return v}r.set=function(c,g){return on(this),this.i=null,c=gr(this,c),Po(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=Uo(this,c),c.length>0?String(c[0]):g):g};function ma(c,g,v){bu(c,g),v.length>0&&(c.i=null,c.g.set(gr(c,g),B(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let A=0;A<g.length;A++){var v=g[A];const L=zi(v);v=Uo(this,v);for(let j=0;j<v.length;j++){let ne=L;v[j]!==""&&(ne+="="+zi(v[j])),c.push(ne)}}return this.i=c.join("&")};function wu(c){const g=new pr;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function gr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function pa(c,g){g&&!c.j&&(on(c),c.i=null,c.g.forEach(function(v,A){const L=A.toLowerCase();A!=L&&(bu(this,A),ma(this,L,v))},c)),c.j=g}function Kn(c,g){const v=new qn;if(f.Image){const A=new Image;A.onload=E(Cn,v,"TestLoadImage: loaded",!0,g,A),A.onerror=E(Cn,v,"TestLoadImage: error",!1,g,A),A.onabort=E(Cn,v,"TestLoadImage: abort",!1,g,A),A.ontimeout=E(Cn,v,"TestLoadImage: timeout",!1,g,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function zo(c,g){const v=new qn,A=new AbortController,L=setTimeout(()=>{A.abort(),Cn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(L),j.ok?Cn(v,"TestPingServer: ok",!0,g):Cn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Cn(v,"TestPingServer: error",!1,g)})}function Cn(c,g,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function yr(){this.g=new fu}function yi(c){this.i=c.Sb||null,this.h=c.ab||!1}S(yi,du),yi.prototype.g=function(){return new Ss(this.i,this.h)};function Ss(c,g){yt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ss,yt),r=Ss.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,Yn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||f).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ga(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function ga(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?_r(this):Yn(this),this.readyState==3&&ga(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,_r(this))},r.Na=function(c){this.g&&(this.response=c,_r(this))},r.ga=function(){this.g&&_r(this)};function _r(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Yn(c)}r.setRequestHeader=function(c,g){this.A.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function Yn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dn(c){let g="";return Ue(c,function(v,A){g+=A,g+=":",g+=v,g+=`\r
`}),g}function As(c,g,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Dn(v),typeof c=="string"?v!=null&&zi(v):Ge(c,g,v))}function Qe(c){yt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Qe,yt);var _i=/^https?$/i,Bo=["POST","PUT"];r=Qe.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,g,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=D(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){bs(this,j);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())v.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(j=>j.toLowerCase()=="content-type"),L=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Bo,g,void 0)>=0)||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ne]of v)this.g.setRequestHeader(j,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(j){bs(this,j)}};function bs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,jo(c),Bi(c)}function jo(c){c.A||(c.A=!0,Nt(c,"complete"),Nt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Nt(this,"complete"),Nt(this,"abort"),Bi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),Qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ws(this):this.Xa())},r.Xa=function(){ws(this)};function ws(c){if(c.h&&typeof u<"u"){if(c.v&&$n(c)==4)setTimeout(c.Ca.bind(c),0);else if(Nt(c,"readystatechange"),$n(c)==4){c.h=!1;try{const j=c.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var A;if(A=j===0){let ne=String(c.D).match(Tu)[1]||null;!ne&&f.self&&f.self.location&&(ne=f.self.location.protocol.slice(0,-1)),A=!_i.test(ne?ne.toLowerCase():"")}v=A}if(v)Nt(c,"complete"),Nt(c,"success");else{c.o=6;try{var L=$n(c)>2?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.ca()+"]",jo(c)}}finally{Bi(c)}}}}function Bi(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,g||Nt(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(c){return c.g?c.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Jh(g)}};function Bt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ji(c){const g={};c=(c.g&&$n(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(w(c[A]))continue;var v=_u(c[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const j=g[L]||[];g[L]=j,j.push(v)}Fe(g,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function vr(c){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vi("baseRetryDelayMs",5e3,c),this.Za=vi("retryDelaySeedMs",1e4,c),this.Ta=vi("forwardChannelMaxRetries",2,c),this.va=vi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new No(c&&c.concurrentRequestLimit),this.Ba=new yr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=vr.prototype,r.ka=8,r.I=1,r.connect=function(c,g,v,A){_t(0),this.W=c,this.H=g||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=Mu(this,null,this.W),Ei(this)};function Ho(c){if(ya(c),c.I==3){var g=c.V++,v=Tt(c.J);if(Ge(v,"SID",c.M),Ge(v,"RID",g),Ge(v,"TYPE","terminate"),Rs(c,v),g=new Fn(c,c.j,g),g.M=2,g.A=Es(Tt(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(g.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=g.A,v=!0),v||(g.g=Vu(g.j,null),g.g.ea(g.A)),g.F=Date.now(),hi(g)}Ou(c)}function Er(c){c.g&&(Fo(c),c.g.cancel(),c.g=null)}function ya(c){Er(c),c.v&&(f.clearTimeout(c.v),c.v=null),va(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ei(c){if(!Oo(c.h)&&!c.m){c.m=!0;var g=c.Ea;ge||b(),ve||(ge(),ve=!0),R.add(g,c),c.D=0}}function _a(c,g){return mi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=li(y(c.Ea,c,g),Nu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const L=new Fn(this,this.j,c);let j=this.o;if(this.U&&(j?(j=M(j),re(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,g>4096){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Ru(this,L,g),v=Tt(this.J),Ge(v,"RID",c),Ge(v,"CVER",22),this.G&&Ge(v,"X-HTTP-Session-Id",this.G),Rs(this,v),j&&(this.R?g="headers="+zi(Dn(j))+"&"+g:this.u&&As(v,this.u,j)),Mo(this.h,L),this.Ra&&Ge(v,"TYPE","init"),this.S?(Ge(v,"$req",g),Ge(v,"SID","null"),L.U=!0,ci(L,v,null)):ci(L,v,g),this.I=2}}else this.I==3&&(c?qo(this,c):this.i.length==0||Oo(this.h)||qo(this))};function qo(c,g){var v;g?v=g.l:v=c.V++;const A=Tt(c.J);Ge(A,"SID",c.M),Ge(A,"RID",v),Ge(A,"AID",c.K),Rs(c,A),c.u&&c.o&&As(A,c.u,c.o),v=new Fn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Ru(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Mo(c.h,v),ci(v,A,g)}function Rs(c,g){c.H&&Ue(c.H,function(v,A){Ge(g,A,v)}),c.l&&Ue({},function(v,A){Ge(g,A,v)})}function Ru(c,g,v){v=Math.min(c.i.length,v);const A=c.l?y(c.l.Ka,c.l,c):null;e:{var L=c.i;let be=-1;for(;;){const ft=["count="+v];be==-1?v>0?(be=L[0].g,ft.push("ofs="+be)):be=0:ft.push("ofs="+be);let He=!0;for(let st=0;st<v;st++){var j=L[st].g;const Nn=L[st].map;if(j-=be,j<0)be=Math.max(0,L[st].g-100),He=!1;else try{j="req"+j+"_"||"";try{var ne=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Si,Qn]of ne){let Xn=Qn;m(Qn)&&(Xn=fr(Qn)),ft.push(j+Si+"="+encodeURIComponent(Xn))}}catch(Si){throw ft.push(j+"type="+encodeURIComponent("_badmap")),Si}}catch{A&&A(Nn)}}if(He){ne=ft.join("&");break e}}ne=void 0}return c=c.i.splice(0,v),g.G=c,ne}function Iu(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;ge||b(),ve||(ge(),ve=!0),R.add(g,c),c.A=0}}function Is(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=li(y(c.Da,c),Nu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=li(y(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Er(this),Cu(this))};function Fo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Cu(c){c.g=new Fn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=Tt(c.na);Ge(g,"RID","rpc"),Ge(g,"SID",c.M),Ge(g,"AID",c.K),Ge(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ge(g,"TO",c.ia),Ge(g,"TYPE","xmlhttp"),Rs(c,g),c.u&&c.o&&As(g,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Es(Tt(g)),v.u=null,v.R=!0,ca(v,c)}r.Va=function(){this.C!=null&&(this.C=null,Er(this),Is(this),_t(19))};function va(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Du(c,g){var v=null;if(c.g==g){va(c),Fo(c),c.g=null;var A=2}else if(pi(c.h,g))v=g.G,Vo(c.h,g),A=1;else return;if(c.I!=0){if(g.o)if(A==1){v=g.u?g.u.length:0,g=Date.now()-g.F;var L=c.D;A=ua(),Nt(A,new oi(A,v)),Ei(c)}else Iu(c);else if(L=g.m,L==3||L==0&&g.X>0||!(A==1&&_a(c,g)||A==2&&Is(c)))switch(v&&v.length>0&&(g=c.h,g.i=g.i.concat(v)),L){case 1:Ti(c,5);break;case 4:Ti(c,10);break;case 3:Ti(c,6);break;default:Ti(c,2)}}}function Nu(c,g){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*g}function Ti(c,g){if(c.j.info("Error code "+g),g==2){var v=y(c.bb,c),A=c.Ua;const L=!A;A=new pn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||kt(A,"https"),Es(A),L?Kn(A.toString(),v):zo(A.toString(),v)}else _t(2);c.I=0,c.l&&c.l.pa(g),Ou(c),ya(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ou(c){if(c.I=0,c.ja=[],c.l){const g=xo(c.h);(g.length!=0||c.i.length!=0)&&(Z(c.ja,g),Z(c.ja,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.oa()}}function Mu(c,g,v){var A=v instanceof pn?Tt(v):new pn(v);if(A.g!="")g&&(A.g=g+"."+A.g),dr(A,A.u);else{var L=f.location;A=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;const j=new pn(null);A&&kt(j,A),g&&(j.g=g),L&&dr(j,L),v&&(j.h=v),A=j}return v=c.G,g=c.wa,v&&g&&Ge(A,v,g),Ge(A,"VER",c.ka),Rs(c,A),A}function Vu(c,g,v){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new Qe(new yi({ab:v})):new Qe(c.ma),g.Fa(c.L),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}r=xu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Tr(){}Tr.prototype.g=function(c,g){return new tn(c,g)};function tn(c,g){yt.call(this),this.g=new vr(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!w(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!w(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Hi(this)}S(tn,yt),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Ho(this.g)},tn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=fr(c),c=v);g.i.push(new Et(g.Ya++,c)),g.I==3&&Ei(g)},tn.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,tn.Z.N.call(this)};function ku(c){zt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}S(ku,zt);function Lu(){Rn.call(this),this.status=1}S(Lu,Rn);function Hi(c){this.g=c}S(Hi,xu),Hi.prototype.ra=function(){Nt(this.g,"a")},Hi.prototype.qa=function(c){Nt(this.g,new ku(c))},Hi.prototype.pa=function(c){Nt(this.g,new Lu)},Hi.prototype.oa=function(){Nt(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,uS=function(){return new Tr},lS=function(){return ua()},oS=ht,Lm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,eh=_s,Co.COMPLETE="complete",aS=Co,mu.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",yt.prototype.listen=yt.prototype.J,Vl=mu,Qe.prototype.listenOnce=Qe.prototype.K,Qe.prototype.getLastError=Qe.prototype.Ha,Qe.prototype.getLastErrorCode=Qe.prototype.ya,Qe.prototype.getStatus=Qe.prototype.ca,Qe.prototype.getResponseJson=Qe.prototype.La,Qe.prototype.getResponseText=Qe.prototype.la,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Fa,sS=Qe}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
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
 */let Eo="12.12.0";function pN(r){Eo=r}/**
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
 */const Js=new Oh("@firebase/firestore");function Xa(){return Js.logLevel}function le(r,...e){if(Js.logLevel<=Me.DEBUG){const n=e.map(Rp);Js.debug(`Firestore (${Eo}): ${r}`,...n)}}function ur(r,...e){if(Js.logLevel<=Me.ERROR){const n=e.map(Rp);Js.error(`Firestore (${Eo}): ${r}`,...n)}}function Ws(r,...e){if(Js.logLevel<=Me.WARN){const n=e.map(Rp);Js.warn(`Firestore (${Eo}): ${r}`,...n)}}function Rp(r){if(typeof r=="string")return r;try{return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function Ae(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,cS(r,s,n)}function cS(r,e,n){let s=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ur(s),new Error(s)}function lt(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||cS(e,o,s)}function Pe(r,e){return r}/**
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
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ts{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class hS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Qt.UNAUTHENTICATED)))}shutdown(){}}class yN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _N{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ts,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ts)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(lt(typeof s.accessToken=="string",31837,{l:s}),new hS(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Qt(e)}}class vN{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class EN{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new vN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class E0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const s=u=>{u.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,le("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new E0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new E0(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=SN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function Pm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return pm(o)===pm(u)?xe(o,u):pm(o)?1:-1}return xe(r.length,e.length)}const AN=55296,bN=57343;function pm(r){const e=r.charCodeAt(0);return e>=AN&&e<=bN}function co(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const T0="__name__";class Ii{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ae(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ae(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Ii.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return xe(e.length,n.length)}static compareSegments(e,n){const s=Ii.isNumericId(e),o=Ii.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ii.extractNumericId(e).compare(Ii.extractNumericId(n)):Pm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class it extends Ii{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new it(n)}static emptyPath(){return new it([])}}const wN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Ii{construct(e,n,s){return new rn(e,n,s)}static isValidIdentifier(e){return wN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===T0}static keyField(){return new rn([T0])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new he(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(n)}static emptyPath(){return new rn([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(it.fromString(e))}static fromName(e){return new pe(it.fromString(e).popFirst(5))}static empty(){return new pe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new it(e.slice()))}}/**
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
 */function fS(r,e,n){if(!n)throw new he(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function RN(r,e,n,s){if(e===!0&&s===!0)throw new he(te.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function S0(r){if(!pe.isDocumentKey(r))throw new he(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function A0(r){if(pe.isDocumentKey(r))throw new he(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function IN(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function CN(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae(12329,{type:typeof r})}function Kl(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=CN(r);throw new he(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function Ct(r,e){const n={typeString:r};return e&&(n.value=e),n}function su(r,e){if(!IN(r))throw new he(te.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new he(te.INVALID_ARGUMENT,n);return!0}/**
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
 */const b0=-62135596800,w0=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*w0);return new It(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<b0)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/w0}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:It._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(su(e,It._jsonSchema))return new It(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-b0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}It._jsonSchemaVersion="firestore/timestamp/1.0",It._jsonSchema={type:Ct("string",It._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
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
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new It(0,0))}static max(){return new Se(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yl=-1;function DN(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new It(n+1,0):new It(n,s));return new as(o,pe.empty(),e)}function NN(r){return new as(r.readTime,r.key,Yl)}class as{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new as(Se.min(),pe.empty(),Yl)}static max(){return new as(Se.max(),pe.empty(),Yl)}}function ON(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(r.documentKey,e.documentKey),n!==0?n:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const MN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Uh(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==MN)throw r;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):J.reject(n)}static resolve(e){return new J(((n,s)=>{n(e)}))}static reject(e){return new J(((n,s)=>{s(e)}))}static waitFor(e){return new J(((n,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(p=>s(p)))})),f=!0,u===o&&n()}))}static or(e){let n=J.resolve(!1);for(const s of e)n=n.next((o=>o?J.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new J(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next((E=>{f[y]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(e,n){return new J(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function xN(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class zh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zh.ce=-1;/**
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
 */const kN=-1;function Bh(r){return r==null}function Um(r){return r===0&&1/r==-1/0}/**
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
 */const dS="";function LN(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=R0(e)),e=PN(r.get(n),e);return R0(e)}function PN(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case dS:n+="";break;default:n+=u}}return n}function R0(r){return r+dS+""}/**
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
 */function I0(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function au(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function UN(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Gt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qc(this.root,e,this.comparator,!1)}getReverseIterator(){return new qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qc(this.root,e,this.comparator,!0)}}class qc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Gt.RED,this.left=o??Gt.EMPTY,this.right=u??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Gt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Gt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new C0(this.data.getIterator())}getIteratorFrom(e){return new C0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Vt(this.comparator);return n.data=e,n}}class C0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qr{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Qr([])}unionWith(e){let n=new Vt(rn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Qr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class mS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new mS("Invalid base64 string: "+u):u}})(e);return new Kt(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(r){if(lt(!!r,39018),typeof r=="string"){let e=0;const n=zN.exec(r);if(lt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pt(r.seconds),nanos:pt(r.nanos)}}function pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ls(r){return typeof r=="string"?Kt.fromBase64String(r):Kt.fromUint8Array(r)}/**
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
 */const pS="server_timestamp",gS="__type__",yS="__previous_value__",_S="__local_write_time__";function Cp(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[gS])==null?void 0:s.stringValue)===pS}function jh(r){const e=r.mapValue.fields[yS];return Cp(e)?jh(e):e}function $l(r){const e=os(r.mapValue.fields[_S].timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class BN{constructor(e,n,s,o,u,f,m,p,y,E,S){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E,this.apiKey=S}}const yh="(default)";class Ql{constructor(e,n){this.projectId=e,this.database=n||yh}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database===yh}isEqual(e){return e instanceof Ql&&e.projectId===this.projectId&&e.database===this.database}}function jN(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new he(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(r.options.projectId,e)}/**
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
 */const HN="__type__",qN="__max__",Fc={mapValue:{}},FN="__vector__",zm="value";function us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Cp(r)?4:KN(r)?9007199254740991:GN(r)?10:11:Ae(28295,{value:r})}function Vi(r,e){if(r===e)return!0;const n=us(r);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return $l(r).isEqual($l(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=os(o.timestampValue),m=os(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return ls(o.bytesValue).isEqual(ls(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return pt(o.geoPointValue.latitude)===pt(u.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pt(o.integerValue)===pt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pt(o.doubleValue),m=pt(u.doubleValue);return f===m?Um(f)===Um(m):isNaN(f)&&isNaN(m)}return!1})(r,e);case 9:return co(r.arrayValue.values||[],e.arrayValue.values||[],Vi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(I0(f)!==I0(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Vi(f[p],m[p])))return!1;return!0})(r,e);default:return Ae(52216,{left:r})}}function Xl(r,e){return(r.values||[]).find((n=>Vi(n,e)))!==void 0}function ho(r,e){if(r===e)return 0;const n=us(r),s=us(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=pt(u.integerValue||u.doubleValue),p=pt(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(r,e);case 3:return D0(r.timestampValue,e.timestampValue);case 4:return D0($l(r),$l(e));case 5:return Pm(r.stringValue,e.stringValue);case 6:return(function(u,f){const m=ls(u),p=ls(f);return m.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=xe(m[y],p[y]);if(E!==0)return E}return xe(m.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=xe(pt(u.latitude),pt(f.latitude));return m!==0?m:xe(pt(u.longitude),pt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return N0(r.arrayValue,e.arrayValue);case 10:return(function(u,f){var D,B,Z,X;const m=u.fields||{},p=f.fields||{},y=(D=m[zm])==null?void 0:D.arrayValue,E=(B=p[zm])==null?void 0:B.arrayValue,S=xe(((Z=y==null?void 0:y.values)==null?void 0:Z.length)||0,((X=E==null?void 0:E.values)==null?void 0:X.length)||0);return S!==0?S:N0(y,E)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===Fc.mapValue&&f===Fc.mapValue)return 0;if(u===Fc.mapValue)return 1;if(f===Fc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const D=Pm(p[S],E[S]);if(D!==0)return D;const B=ho(m[p[S]],y[E[S]]);if(B!==0)return B}return xe(p.length,E.length)})(r.mapValue,e.mapValue);default:throw Ae(23264,{he:n})}}function D0(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const n=os(r),s=os(e),o=xe(n.seconds,s.seconds);return o!==0?o:xe(n.nanos,s.nanos)}function N0(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ho(n[o],s[o]);if(u)return u}return xe(n.length,s.length)}function fo(r){return Bm(r)}function Bm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=os(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return ls(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return pe.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Bm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Bm(n.fields[f])}`;return o+"}"})(r.mapValue):Ae(61005,{value:r})}function th(r){switch(us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jh(r);return e?16+th(e):16;case 5:return 2*r.stringValue.length;case 6:return ls(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+th(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return au(s.fields,((u,f)=>{o+=u.length+th(f)})),o})(r.mapValue);default:throw Ae(13486,{value:r})}}function jm(r){return!!r&&"integerValue"in r}function Dp(r){return!!r&&"arrayValue"in r}function O0(r){return!!r&&"nullValue"in r}function M0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function gm(r){return!!r&&"mapValue"in r}function GN(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[HN])==null?void 0:s.stringValue)===FN}function Ul(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return au(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Ul(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ul(r.arrayValue.values[n]);return e}return{...r}}function KN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qN}/**
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
 */class Ci{constructor(e){this.value=e}static empty(){return new Ci({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gm(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ul(n)}setAll(e){let n=rn.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ul(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());gm(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];gm(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){au(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Ci(Ul(this.value))}}/**
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
 */class Xt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Xt(e,0,Se.min(),Se.min(),Se.min(),Ci.empty(),0)}static newFoundDocument(e,n,s,o){return new Xt(e,1,n,Se.min(),s,o,0)}static newNoDocument(e,n){return new Xt(e,2,n,Se.min(),Se.min(),Ci.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,Se.min(),Se.min(),Ci.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ci.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _h{constructor(e,n){this.position=e,this.inclusive=n}}function V0(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(f.referenceValue),n.key):s=ho(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function x0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Vi(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class vh{constructor(e,n="asc"){this.field=e,this.dir=n}}function YN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class vS{}class Mt extends vS{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QN(e,n,s):n==="array-contains"?new JN(e,s):n==="in"?new WN(e,s):n==="not-in"?new eO(e,s):n==="array-contains-any"?new tO(e,s):new Mt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new XN(e,s):new ZN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xi extends vS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new xi(e,n)}matches(e){return ES(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ES(r){return r.op==="and"}function TS(r){return $N(r)&&ES(r)}function $N(r){for(const e of r.filters)if(e instanceof xi)return!1;return!0}function Hm(r){if(r instanceof Mt)return r.field.canonicalString()+r.op.toString()+fo(r.value);if(TS(r))return r.filters.map((e=>Hm(e))).join(",");{const e=r.filters.map((n=>Hm(n))).join(",");return`${r.op}(${e})`}}function SS(r,e){return r instanceof Mt?(function(s,o){return o instanceof Mt&&s.op===o.op&&s.field.isEqual(o.field)&&Vi(s.value,o.value)})(r,e):r instanceof xi?(function(s,o){return o instanceof xi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&SS(f,o.filters[m])),!0):!1})(r,e):void Ae(19439)}function AS(r){return r instanceof Mt?(function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`})(r):r instanceof xi?(function(n){return n.op.toString()+" {"+n.getFilters().map(AS).join(" ,")+"}"})(r):"Filter"}class QN extends Mt{constructor(e,n,s){super(e,n,s),this.key=pe.fromName(s.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class XN extends Mt{constructor(e,n){super(e,"in",n),this.keys=bS("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class ZN extends Mt{constructor(e,n){super(e,"not-in",n),this.keys=bS("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function bS(r,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class JN extends Mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dp(n)&&Xl(n.arrayValue,this.value)}}class WN extends Mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class eO extends Mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xl(this.value.arrayValue,n)}}class tO extends Mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Xl(this.value.arrayValue,s)))}}/**
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
 */class nO{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function k0(r,e=null,n=[],s=[],o=null,u=null,f=null){return new nO(r,e,n,s,o,u,f)}function Np(r){const e=Pe(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Hm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Bh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>fo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>fo(s))).join(",")),e.Te=n}return e.Te}function Op(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!YN(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!SS(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!x0(r.startAt,e.startAt)&&x0(r.endAt,e.endAt)}function qm(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Hh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function iO(r,e,n,s,o,u,f,m){return new Hh(r,e,n,s,o,u,f,m)}function Mp(r){return new Hh(r)}function L0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function rO(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function sO(r){return r.collectionGroup!==null}function zl(r){const e=Pe(r);if(e.Ee===null){e.Ee=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Vt(rn.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new vh(u,s))})),n.has(rn.keyField().canonicalString())||e.Ee.push(new vh(rn.keyField(),s))}return e.Ee}function Mi(r){const e=Pe(r);return e.Ie||(e.Ie=aO(e,zl(r))),e.Ie}function aO(r,e){if(r.limitType==="F")return k0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new vh(o.field,u)}));const n=r.endAt?new _h(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new _h(r.startAt.position,r.startAt.inclusive):null;return k0(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Fm(r,e,n){return new Hh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function qh(r,e){return Op(Mi(r),Mi(e))&&r.limitType===e.limitType}function wS(r){return`${Np(Mi(r))}|lt:${r.limitType}`}function Za(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>AS(o))).join(", ")}]`),Bh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>fo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>fo(o))).join(",")),`Target(${s})`})(Mi(r))}; limitType=${r.limitType})`}function Fh(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of zl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=V0(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,zl(s),o)||s.endAt&&!(function(f,m,p){const y=V0(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,zl(s),o))})(r,e)}function oO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function RS(r){return(e,n)=>{let s=!1;for(const o of zl(r)){const u=lO(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function lO(r,e,n){const s=r.field.isKeyField()?pe.comparator(e.key,n.key):(function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?ho(p,y):Ae(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:r.dir})}}/**
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
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){au(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return UN(this.inner)}size(){return this.innerSize}}/**
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
 */const uO=new gt(pe.comparator);function cs(){return uO}const IS=new gt(pe.comparator);function xl(...r){let e=IS;for(const n of r)e=e.insert(n.key,n);return e}function cO(r){let e=IS;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ks(){return Bl()}function CS(){return Bl()}function Bl(){return new sa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const hO=new Vt(pe.comparator);function ze(...r){let e=hO;for(const n of r)e=e.add(n);return e}const fO=new Vt(xe);function dO(){return fO}/**
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
 */function mO(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Um(e)?"-0":e}}function pO(r){return{integerValue:""+r}}/**
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
 */class Gh{constructor(){this._=void 0}}function gO(r,e,n){return r instanceof Gm?(function(o,u){const f={fields:{[gS]:{stringValue:pS},[_S]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Cp(u)&&(u=jh(u)),u&&(f.fields[yS]=u),{mapValue:f}})(n,e):r instanceof Eh?DS(r,e):r instanceof Th?NS(r,e):(function(o,u){const f=_O(o,u),m=P0(f)+P0(o.Ae);return jm(f)&&jm(o.Ae)?pO(m):mO(o.serializer,m)})(r,e)}function yO(r,e,n){return r instanceof Eh?DS(r,e):r instanceof Th?NS(r,e):n}function _O(r,e){return r instanceof Km?(function(s){return jm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Gm extends Gh{}class Eh extends Gh{constructor(e){super(),this.elements=e}}function DS(r,e){const n=OS(e);for(const s of r.elements)n.some((o=>Vi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Th extends Gh{constructor(e){super(),this.elements=e}}function NS(r,e){let n=OS(e);for(const s of r.elements)n=n.filter((o=>!Vi(o,s)));return{arrayValue:{values:n}}}class Km extends Gh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function P0(r){return pt(r.integerValue||r.doubleValue)}function OS(r){return Dp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function vO(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Eh&&o instanceof Eh||s instanceof Th&&o instanceof Th?co(s.elements,o.elements,Vi):s instanceof Km&&o instanceof Km?Vi(s.Ae,o.Ae):s instanceof Gm&&o instanceof Gm})(r.transform,e.transform)}class Ys{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ys}static exists(e){return new Ys(void 0,e)}static updateTime(e){return new Ys(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Vp{}function MS(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new TO(r.key,Ys.none()):new xp(r.key,r.data,Ys.none());{const n=r.data,s=Ci.empty();let o=new Vt(rn.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Kh(r.key,s,new Qr(o.toArray()),Ys.none())}}function EO(r,e,n){r instanceof xp?(function(o,u,f){const m=o.value.clone(),p=z0(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):r instanceof Kh?(function(o,u,f){if(!nh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=z0(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(VS(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function jl(r,e,n,s){return r instanceof xp?(function(u,f,m,p){if(!nh(u.precondition,f))return m;const y=u.value.clone(),E=B0(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof Kh?(function(u,f,m,p){if(!nh(u.precondition,f))return m;const y=B0(u.fieldTransforms,p,f),E=f.data;return E.setAll(VS(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,e,n,s):(function(u,f,m){return nh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,e,n)}function U0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,((u,f)=>vO(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class xp extends Vp{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Kh extends Vp{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function VS(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function z0(r,e,n){const s=new Map;lt(r.length===n.length,32656,{Ve:n.length,de:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,yO(f,m,n[o]))}return s}function B0(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,gO(u,f,e))}return s}class TO extends Vp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SO{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&EO(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=jl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=jl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=CS();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=MS(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ze())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,((n,s)=>U0(n,s)))&&co(this.baseMutations,e.baseMutations,((n,s)=>U0(n,s)))}}/**
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
 */class AO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Rt,Le;function xS(r){if(r===void 0)return ur("GRPC error has no .code"),te.UNKNOWN;switch(r){case Rt.OK:return te.OK;case Rt.CANCELLED:return te.CANCELLED;case Rt.UNKNOWN:return te.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return te.INTERNAL;case Rt.UNAVAILABLE:return te.UNAVAILABLE;case Rt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case Rt.NOT_FOUND:return te.NOT_FOUND;case Rt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case Rt.ABORTED:return te.ABORTED;case Rt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case Rt.DATA_LOSS:return te.DATA_LOSS;default:return Ae(39323,{code:r})}}(Le=Rt||(Rt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wO(){return new TextEncoder}/**
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
 */const RO=new es([4294967295,4294967295],0);function j0(r){const e=wO().encode(r),n=new rS;return n.update(e),new Uint8Array(n.digest())}function H0(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new es([n,s],0),new es([o,u],0)]}class kp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new kl(`Invalid padding: ${n}`);if(s<0)throw new kl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new kl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new kl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=es.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(es.fromNumber(s)));return o.compare(RO)===1&&(o=new es([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=j0(e),[s,o]=H0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new kp(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const n=j0(e),[s,o]=H0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class kl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,ou.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Yh(Se.min(),o,new gt(xe),cs(),ze())}}class ou{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ou(s,n,ze(),ze(),ze())}}/**
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
 */class ih{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class kS{constructor(e,n){this.targetId=e,this.Ce=n}}class LS{constructor(e,n,s=Kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class q0{constructor(){this.ve=0,this.Fe=F0(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ze(),n=ze(),s=ze();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ae(38017,{changeType:u})}})),new ou(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=F0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class IO{constructor(e){this.Ge=e,this.ze=new Map,this.je=cs(),this.Je=Gc(),this.He=Gc(),this.Ze=new gt(xe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(qm(u))if(s===0){const f=new pe(u.path);this.et(n,f,Xt.newNoDocument(f,Se.min()))}else lt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ls(s).toUint8Array()}catch(p){if(p instanceof mS)return Ws("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new kp(f,o,u)}catch(p){return Ws(p instanceof kl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&qm(m.target)){const p=new pe(m.target.path);this.Et(p).has(f)||this.It(f,p)||this.et(f,p,Xt.newNoDocument(p,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=ze();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new Yh(e,n,this.Ze,this.je,s);return this.je=cs(),this.Je=Gc(),this.He=Gc(),this.Ze=new gt(xe),o}Ye(e,n){if(!this.rt(e))return;const s=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,n)?o.Ke(n,1):o.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new q0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Vt(xe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Vt(xe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new q0),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Gc(){return new gt(pe.comparator)}function F0(){return new gt(pe.comparator)}const CO={asc:"ASCENDING",desc:"DESCENDING"},DO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NO={and:"AND",or:"OR"};class OO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ym(r,e){return r.useProto3Json||Bh(e)?e:{value:e}}function MO(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VO(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function so(r){return lt(!!r,49232),Se.fromTimestamp((function(n){const s=os(n);return new It(s.seconds,s.nanos)})(r))}function xO(r,e){return $m(r,e).canonicalString()}function $m(r,e){const n=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function PS(r){const e=it.fromString(r);return lt(HS(e),10190,{key:e.toString()}),e}function ym(r,e){const n=PS(e);if(n.get(1)!==r.databaseId.projectId)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pe(zS(n))}function US(r,e){return xO(r.databaseId,e)}function kO(r){const e=PS(r);return e.length===4?it.emptyPath():zS(e)}function G0(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zS(r){return lt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function LO(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ae(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(lt(E===void 0||typeof E=="string",58123),Kt.fromBase64String(E||"")):(lt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Kt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(y){const E=y.code===void 0?te.UNKNOWN:xS(y.code);return new he(E,y.message||"")})(f);n=new LS(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ym(r,s.document.name),u=so(s.document.updateTime),f=s.document.createTime?so(s.document.createTime):Se.min(),m=new Ci({mapValue:{fields:s.document.fields}}),p=Xt.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new ih(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ym(r,s.document),u=s.readTime?so(s.readTime):Se.min(),f=Xt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new ih([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ym(r,s.document),u=s.removedTargetIds||[];n=new ih([],u,o,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new bO(o,u),m=s.targetId;n=new kS(m,f)}}return n}function PO(r,e){return{documents:[US(r,e.path)]}}function UO(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=US(r,o);const u=(function(y){if(y.length!==0)return jS(xi.create(y,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((E=>(function(D){return{field:Ja(D.field),direction:jO(D.dir)}})(E)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Ym(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function zO(r){let e=kO(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){lt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=(function(S){const D=BS(S);return D instanceof xi&&TS(D)?D.getFilters():[D]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((D=>(function(Z){return new vh(Wa(Z.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(D)))})(n.orderBy));let m=null;n.limit&&(m=(function(S){let D;return D=typeof S=="object"?S.value:S,Bh(D)?null:D})(n.limit));let p=null;n.startAt&&(p=(function(S){const D=!!S.before,B=S.values||[];return new _h(B,D)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const D=!S.before,B=S.values||[];return new _h(B,D)})(n.endAt)),iO(e,o,f,u,m,"F",p,y)}function BO(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BS(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Wa(n.unaryFilter.field);return Mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Wa(n.unaryFilter.field);return Mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Wa(n.unaryFilter.field);return Mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Wa(n.unaryFilter.field);return Mt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Mt.create(Wa(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return xi.create(n.compositeFilter.filters.map((s=>BS(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(n.compositeFilter.op))})(r):Ae(30097,{filter:r})}function jO(r){return CO[r]}function HO(r){return DO[r]}function qO(r){return NO[r]}function Ja(r){return{fieldPath:r.canonicalString()}}function Wa(r){return rn.fromServerFormat(r.fieldPath)}function jS(r){return r instanceof Mt?(function(n){if(n.op==="=="){if(M0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NAN"}};if(O0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(M0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NAN"}};if(O0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ja(n.field),op:HO(n.op),value:n.value}}})(r):r instanceof xi?(function(n){const s=n.getFilters().map((o=>jS(o)));return s.length===1?s[0]:{compositeFilter:{op:qO(n.op),filters:s}}})(r):Ae(54877,{filter:r})}function HS(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Xr{constructor(e,n,s,o,u=Se.min(),f=Se.min(),m=Kt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FO{constructor(e){this.yt=e}}function GO(r){const e=zO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fm(e,e.limit,"L"):e}/**
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
 */class KO{constructor(){this.bn=new YO}addToCollectionParentIndex(e,n){return this.bn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(as.min())}updateCollectionGroup(e,n,s){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class YO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Vt(it.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Vt(it.comparator)).toArray()}}/**
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
 */const K0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qS=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(qS,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class mo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new mo(0)}static ar(){return new mo(-1)}}/**
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
 */const Y0="LruGarbageCollector",$O=1048576;function $0([r,e],[n,s]){const o=xe(r,n);return o===0?xe(e,s):o}class QO{constructor(e){this.Pr=e,this.buffer=new Vt($0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();$0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){le(Y0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){To(n)?le(Y0,"Ignoring IndexedDB error during garbage collection: ",n):await Uh(n)}await this.Ar(3e5)}))}}class ZO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return J.resolve(zh.ce);const s=new QO(n);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(K0)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),K0):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(e,s,n)))).next((S=>(u=S,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(y=Date.now(),Xa()<=Me.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function JO(r,e){return new ZO(r,e)}/**
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
 */class WO{constructor(){this.changes=new sa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class e5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class t5{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&jl(s.mutation,o,Qr.empty(),It.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,ze()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=ze()){const o=Ks();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=xl();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Ks();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,ze())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let u=cs();const f=Bl(),m=(function(){return Bl()})();return n.forEach(((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Kh)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),jl(E.mutation,y,E.mutation.getFieldMask(),It.now())):f.set(y.key,Qr.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,E)=>f.set(y,E))),n.forEach(((y,E)=>m.set(y,new e5(E,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=Bl();let o=new gt(((f,m)=>f-m)),u=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Qr.empty();E=m.applyToLocalView(y,E),s.set(p,E);const S=(o.get(m.batchId)||ze()).add(p);o=o.insert(m.batchId,S)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,S=CS();E.forEach((D=>{if(!u.has(D)){const B=MS(n.get(D),s.get(D));B!==null&&S.set(D,B),u=u.add(D)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,S))}return J.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return rO(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):J.resolve(Ks());let m=Yl,p=u;return f.next((y=>J.forEach(y,((E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?J.resolve():this.remoteDocumentCache.getEntry(e,E).next((D=>{p=p.insert(E,D)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,ze()))).next((E=>({batchId:m,changes:cO(E)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next((s=>{let o=xl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=xl();return this.indexManager.getCollectionParents(e,u).next((m=>J.forEach(m,(p=>{const y=(function(S,D){return new Hh(D,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((S,D)=>{f=f.insert(S,D)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Xt.newInvalidDocument(E)))}));let m=xl();return f.forEach(((p,y)=>{const E=u.get(p);E!==void 0&&jl(E.mutation,y,Qr.empty(),It.now()),Fh(n,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class n5{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return J.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:so(o.createTime)}})(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(o){return{name:o.name,query:GO(o.bundledQuery),readTime:so(o.readTime)}})(n)),J.resolve()}}/**
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
 */class i5{constructor(){this.overlays=new gt(pe.comparator),this.Lr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ks();return J.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.St(e,n,u)})),J.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),J.resolve()}getOverlaysForCollection(e,n,s){const o=Ks(),u=n.length+1,f=new pe(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return J.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new gt(((y,E)=>y-E));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Ks(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Ks(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,E)=>m.set(y,E))),!(m.size()>=o)););return J.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new AO(n,s));let u=this.Lr.get(n);u===void 0&&(u=ze(),this.Lr.set(n,u)),this.Lr.set(n,u.add(s.key))}}/**
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
 */class r5{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
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
 */class Lp{constructor(){this.kr=new Vt(Pt.qr),this.Kr=new Vt(Pt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new Pt(e,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new Pt(e,n))}Qr(e,n){e.forEach((s=>this.removeReference(s,n)))}Gr(e){const n=new pe(new it([])),s=new Pt(n,e),o=new Pt(n,e+1),u=[];return this.Kr.forEachInRange([s,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new pe(new it([])),s=new Pt(n,e),o=new Pt(n,e+1);let u=ze();return this.Kr.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new Pt(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return pe.comparator(e.key,n.key)||xe(e.Jr,n.Jr)}static Ur(e,n){return xe(e.Jr,n.Jr)||pe.comparator(e.key,n.key)}}/**
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
 */class s5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Vt(Pt.qr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new SO(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Hr=this.Hr.add(new Pt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return J.resolve(f)}lookupMutationBatch(e,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?kN:this.Yn-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pt(n,0),o=new Pt(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(f=>{const m=this.Zr(f.Jr);u.push(m)})),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Vt(xe);return n.forEach((o=>{const u=new Pt(o,0),f=new Pt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,f],(m=>{s=s.add(m.Jr)}))})),J.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const f=new Pt(new pe(u),0);let m=new Vt(xe);return this.Hr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Jr)),!0)}),f),J.resolve(this.Yr(m))}Yr(e){const n=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){lt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return J.forEach(n.mutations,(o=>{const u=new Pt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,n){const s=new Pt(n,0),o=this.Hr.firstAfterOrEqual(s);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class a5{constructor(e){this.ti=e,this.docs=(function(){return new gt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let s=cs();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xt.newInvalidDocument(o))})),J.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=cs();const f=n.path,m=new pe(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||ON(NN(E),s)<=0||(o.has(E.key)||Fh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ae(9500)}ni(e,n){return J.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new o5(this)}getSize(e){return J.resolve(this.size)}}class o5 extends WO{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),J.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class l5{constructor(e){this.persistence=e,this.ri=new sa((n=>Np(n)),Op),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.ii=0,this.si=new Lp,this.targetCount=0,this.oi=mo._r()}forEachTarget(e,n){return this.ri.forEach(((s,o)=>n(o))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),J.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.lr(n),J.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.ri.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),J.waitFor(u).next((()=>o))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return J.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),J.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),J.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return J.resolve(s)}containsKey(e,n){return J.resolve(this.si.containsKey(n))}}/**
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
 */class FS{constructor(e,n){this._i={},this.overlays={},this.ai=new zh(0),this.ui=!1,this.ui=!0,this.ci=new r5,this.referenceDelegate=e(this),this.li=new l5(this),this.indexManager=new KO,this.remoteDocumentCache=(function(o){return new a5(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new FO(n),this.Pi=new n5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new s5(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){le("MemoryPersistence","Starting transaction:",e);const o=new u5(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,n){return J.or(Object.values(this._i).map((s=>()=>s.containsKey(e,n))))}}class u5 extends VN{constructor(e){super(),this.currentSequenceNumber=e}}class Pp{constructor(e){this.persistence=e,this.Ri=new Lp,this.Ai=null}static Vi(e){return new Pp(e)}get di(){if(this.Ai)return this.Ai;throw Ae(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),J.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,(s=>{const o=pe.fromPath(s);return this.mi(e,o).next((u=>{u||n.removeEntry(o,Se.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Sh{constructor(e,n){this.persistence=e,this.fi=new sa((s=>LN(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=JO(this,n)}static Vi(e,n){return new Sh(e,n)}Ti(){}Ei(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}pr(e){let n=0;return this.mr(e,(s=>{n++})).next((()=>n))}mr(e,n){return J.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?J.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(f=>this.wr(e,f,n).next((m=>{m||(s++,u.removeEntry(f,Se.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),J.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=th(e.data.value)),n}wr(e,n,s){return J.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.fi.get(n);return J.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Up{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Ts=s,this.Es=o}static Is(e,n){let s=ze(),o=ze();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Up(e,n.fromCache,s,o)}}/**
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
 */class c5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class h5{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return i1()?8:xN(Wt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.gs(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new c5;return this.ys(e,n,f).next((m=>{if(u.result=m,this.As)return this.ws(e,n,f,m.size)}))})).next((()=>u.result))}ws(e,n,s,o){return s.documentReadCount<this.Vs?(Xa()<=Me.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(Xa()<=Me.DEBUG&&le("QueryEngine","Query:",Za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Xa()<=Me.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mi(n))):J.resolve())}gs(e,n){if(L0(n))return J.resolve(null);let s=Mi(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Fm(n,null,"F"),s=Mi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=ze(...u);return this.fs.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.Ss(n,m);return this.bs(n,y,f,p.readTime)?this.gs(e,Fm(n,null,"F")):this.Ds(e,y,n,p)}))))})))))}ps(e,n,s,o){return L0(n)||o.isEqual(Se.min())?J.resolve(null):this.fs.getDocuments(e,s).next((u=>{const f=this.Ss(n,u);return this.bs(n,f,s,o)?J.resolve(null):(Xa()<=Me.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Za(n)),this.Ds(e,f,n,DN(o,Yl)).next((m=>m)))}))}Ss(e,n){let s=new Vt(RS(e));return n.forEach(((o,u)=>{Fh(e,u)&&(s=s.add(u))})),s}bs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,n,s){return Xa()<=Me.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Za(n)),this.fs.getDocumentsMatchingQuery(e,n,as.min(),s)}Ds(e,n,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const zp="LocalStore",f5=3e8;class d5{constructor(e,n,s,o){this.persistence=e,this.Cs=n,this.serializer=o,this.vs=new gt(xe),this.Fs=new sa((u=>Np(u)),Op),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t5(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function m5(r,e,n,s){return new d5(r,e,n,s)}async function GS(r,e){const n=Pe(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Os(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=ze();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ns:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function KS(r){const e=Pe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function p5(r,e){const n=Pe(r),s=e.snapshotVersion;let o=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});o=n.vs;const m=[];e.targetChanges.forEach(((E,S)=>{const D=o.get(S);if(!D)return;m.push(n.li.removeMatchingKeys(u,E.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,E.addedDocuments,S))));let B=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?B=B.withResumeToken(Kt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(S,B),(function(X,F,W){return X.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=f5?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(D,B,E)&&m.push(n.li.updateTargetData(u,B))}));let p=cs(),y=ze();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(g5(u,f,e.documentUpdates).next((E=>{p=E.Bs,y=E.Ls}))),!s.isEqual(Se.min())){const E=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return J.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(n.vs=o,u)))}function g5(r,e,n){let s=ze(),o=ze();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=cs();return n.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):le(zp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{Bs:f,Ls:o}}))}function y5(r,e){const n=Pe(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.li.getTargetData(s,e).next((u=>u?(o=u,J.resolve(o)):n.li.allocateTargetId(s).next((f=>(o=new Xr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(e,s.targetId)),s}))}async function Qm(r,e,n){const s=Pe(r),o=s.vs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!To(f))throw f;le(zp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Q0(r,e,n){const s=Pe(r);let o=Se.min(),u=ze();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,E){const S=Pe(p),D=S.Fs.get(E);return D!==void 0?J.resolve(S.vs.get(D)):S.li.getTargetData(y,E)})(s,f,Mi(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,e,n?o:Se.min(),n?u:ze()))).next((m=>(_5(s,oO(e),m),{documents:m,ks:u})))))}function _5(r,e,n){let s=r.Ms.get(e)||Se.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class X0{constructor(){this.activeTargetIds=dO()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v5{constructor(){this.vo=new X0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new X0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E5{Mo(e){}shutdown(){}}/**
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
 */const Z0="ConnectivityMonitor";class J0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){le(Z0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){le(Z0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function Xm(){return Kc===null?Kc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Kc++,"0x"+Kc.toString(16)}/**
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
 */const _m="RestConnection",T5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class S5{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===yh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,n,s,o,u){const f=Xm(),m=this.Qo(e,n.toUriEncodedString());le(_m,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,u);const{host:y}=new URL(m),E=na(y);return this.zo(e,m,p,s,E).then((S=>(le(_m,`Received RPC '${e}' ${f}: `,S),S)),(S=>{throw Ws(_m,`RPC '${e}' ${f} failed with error: `,S,"url: ",m,"request:",s),S}))}jo(e,n,s,o,u,f){return this.Wo(e,n,s,o,u)}Go(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Eo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,n){const s=T5[e];let o=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class A5{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const $t="WebChannelConnection",Nl=(r,e,n)=>{r.listen(e,(s=>{try{n(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class ao extends S5{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=lS();Nl(e,oS.STAT_EVENT,(n=>{n.stat===Lm.PROXY?le($t,"STAT_EVENT: detected buffering proxy"):n.stat===Lm.NOPROXY&&le($t,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(e,n,s,o,u){const f=Xm();return new Promise(((m,p)=>{const y=new sS;y.setWithCredentials(!0),y.listenOnce(aS.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case eh.NO_ERROR:const S=y.getResponseJson();le($t,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),m(S);break;case eh.TIMEOUT:le($t,`RPC '${e}' ${f} timed out`),p(new he(te.DEADLINE_EXCEEDED,"Request time out"));break;case eh.HTTP_ERROR:const D=y.getStatus();if(le($t,`RPC '${e}' ${f} failed with status:`,D,"response text:",y.getResponseText()),D>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const Z=B==null?void 0:B.error;if(Z&&Z.status&&Z.message){const X=(function(W){const ae=W.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(ae)>=0?ae:te.UNKNOWN})(Z.status);p(new he(X,Z.message))}else p(new he(te.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new he(te.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{le($t,`RPC '${e}' ${f} completed.`)}}));const E=JSON.stringify(o);le($t,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)}))}T_(e,n,s){const o=Xm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,n,s),m.encodeInitMessageHeaders=!0;const y=u.join("");le($t,`Creating RPC '${e}' stream ${o}: ${y}`,m);const E=f.createWebChannel(y,m);this.E_(E);let S=!1,D=!1;const B=new A5({Jo:Z=>{D?le($t,`Not sending because RPC '${e}' stream ${o} is closed:`,Z):(S||(le($t,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),le($t,`RPC '${e}' stream ${o} sending:`,Z),E.send(Z))},Ho:()=>E.close()});return Nl(E,Vl.EventType.OPEN,(()=>{D||(le($t,`RPC '${e}' stream ${o} transport opened.`),B.i_())})),Nl(E,Vl.EventType.CLOSE,(()=>{D||(D=!0,le($t,`RPC '${e}' stream ${o} transport closed`),B.o_(),this.I_(E))})),Nl(E,Vl.EventType.ERROR,(Z=>{D||(D=!0,Ws($t,`RPC '${e}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),B.o_(new he(te.UNAVAILABLE,"The operation could not be completed")))})),Nl(E,Vl.EventType.MESSAGE,(Z=>{var X;if(!D){const F=Z.data[0];lt(!!F,16349);const W=F,ae=(W==null?void 0:W.error)||((X=W[0])==null?void 0:X.error);if(ae){le($t,`RPC '${e}' stream ${o} received error:`,ae);const se=ae.status;let de=(function(R){const b=Rt[R];if(b!==void 0)return xS(b)})(se),ge=ae.message;se==="NOT_FOUND"&&ge.includes("database")&&ge.includes("does not exist")&&ge.includes(this.databaseId.database)&&Ws(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),de===void 0&&(de=te.INTERNAL,ge="Unknown error status: "+se+" with message "+ae.message),D=!0,B.o_(new he(de,ge)),E.close()}else le($t,`RPC '${e}' stream ${o} received:`,F),B.__(F)}})),ao.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return uS()}}/**
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
 */function b5(r){return new ao(r)}function vm(){return typeof document<"u"?document:null}/**
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
 */function YS(r){return new OO(r,!0)}/**
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
 */ao.c_=!1;class $S{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const W0="PersistentStream";class w5{constructor(e,n,s,o,u,f,m,p){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $S(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new he(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(W0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(le(W0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class R5 extends w5{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=LO(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Se.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Se.min():f.readTime?so(f.readTime):Se.min()})(e);return this.listener.H_(n,s)}Z_(e){const n={};n.database=G0(this.serializer),n.addTarget=(function(u,f){let m;const p=f.target;if(m=qm(p)?{documents:PO(u,p)}:{query:UO(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=VO(u,f.resumeToken);const y=Ym(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Se.min())>0){m.readTime=MO(u,f.snapshotVersion.toTimestamp());const y=Ym(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=BO(this.serializer,e);s&&(n.labels=s),this.q_(n)}X_(e){const n={};n.database=G0(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class I5{}class C5 extends I5{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,$m(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(te.UNKNOWN,u.toString())}))}jo(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.jo(e,$m(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new he(te.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function D5(r,e,n,s){return new C5(r,e,n,s)}class N5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):le("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const po="RemoteStore";class O5{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{uu(this)&&(le(po,"Restarting streams for network reachability change."),await(async function(p){const y=Pe(p);y.Ia.add(4),await lu(y),y.Va.set("Unknown"),y.Ia.delete(4),await $h(y)})(this))}))})),this.Va=new N5(s,o)}}async function $h(r){if(uu(r))for(const e of r.Ra)await e(!0)}async function lu(r){for(const e of r.Ra)await e(!1)}function QS(r,e){const n=Pe(r);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),qp(n)?Hp(n):So(n).O_()&&jp(n,e))}function Bp(r,e){const n=Pe(r),s=So(n);n.Ea.delete(e),s.O_()&&XS(n,e),n.Ea.size===0&&(s.O_()?s.L_():uu(n)&&n.Va.set("Unknown"))}function jp(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(r).Z_(e)}function XS(r,e){r.da.$e(e),So(r).X_(e)}function Hp(r){r.da=new IO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),So(r).start(),r.Va.ua()}function qp(r){return uu(r)&&!So(r).x_()&&r.Ea.size>0}function uu(r){return Pe(r).Ia.size===0}function ZS(r){r.da=void 0}async function M5(r){r.Va.set("Online")}async function V5(r){r.Ea.forEach(((e,n)=>{jp(r,e)}))}async function x5(r,e){ZS(r),qp(r)?(r.Va.ha(e),Hp(r)):r.Va.set("Unknown")}async function k5(r,e,n){if(r.Va.set("Online"),e instanceof LS&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ea.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){le(po,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await eE(r,s)}else if(e instanceof ih?r.da.Xe(e):e instanceof kS?r.da.st(e):r.da.tt(e),!n.isEqual(Se.min()))try{const s=await KS(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.da.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ea.get(y);E&&u.Ea.set(y,E.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const E=u.Ea.get(p);if(!E)return;u.Ea.set(p,E.withResumeToken(Kt.EMPTY_BYTE_STRING,E.snapshotVersion)),XS(u,p);const S=new Xr(E.target,p,y,E.sequenceNumber);jp(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){le(po,"Failed to raise snapshot:",s),await eE(r,s)}}async function eE(r,e,n){if(!To(e))throw e;r.Ia.add(1),await lu(r),r.Va.set("Offline"),n||(n=()=>KS(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{le(po,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await $h(r)}))}async function tE(r,e){const n=Pe(r);n.asyncQueue.verifyOperationInProgress(),le(po,"RemoteStore received new credentials");const s=uu(n);n.Ia.add(3),await lu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await $h(n)}async function L5(r,e){const n=Pe(r);e?(n.Ia.delete(2),await $h(n)):e||(n.Ia.add(2),await lu(n),n.Va.set("Unknown"))}function So(r){return r.ma||(r.ma=(function(n,s,o){const u=Pe(n);return u.sa(),new R5(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:M5.bind(null,r),Yo:V5.bind(null,r),t_:x5.bind(null,r),H_:k5.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),qp(r)?Hp(r):r.Va.set("Unknown")):(await r.ma.stop(),ZS(r))}))),r.ma}/**
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
 */class Fp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Fp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function JS(r,e){if(ur("AsyncQueue",`${e}: ${r}`),To(r))return new he(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||pe.comparator(n.key,s.key):(n,s)=>pe.comparator(n.key,s.key),this.keyedMap=xl(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class nE{constructor(){this.ga=new gt(pe.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ae(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class go{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new go(e,n,oo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class P5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class U5{constructor(){this.queries=iE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Pe(n),u=o.queries;o.queries=iE(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new he(te.ABORTED,"Firestore shutting down"))}}function iE(){return new sa((r=>wS(r)),qh)}async function WS(r,e){const n=Pe(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new P5,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=JS(f,`Initialization of query '${Za(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&Gp(n)}async function eA(r,e){const n=Pe(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function z5(r,e){const n=Pe(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Gp(n)}function B5(r,e,n){const s=Pe(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function Gp(r){r.Ca.forEach((e=>{e.next()}))}var Zm,rE;(rE=Zm||(Zm={})).Ma="default",rE.Cache="cache";class tA{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zm.Cache}}/**
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
 */class nA{constructor(e){this.key=e}}class iA{constructor(e){this.key=e}}class j5{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ze(),this.mutatedKeys=ze(),this.eu=RS(e),this.tu=new oo(this.eu)}get nu(){return this.Za}ru(e,n){const s=n?n.iu:new nE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,S)=>{const D=o.get(E),B=Fh(this.query,S)?S:null,Z=!!D&&this.mutatedKeys.has(D.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let F=!1;D&&B?D.data.isEqual(B.data)?Z!==X&&(s.track({type:3,doc:B}),F=!0):this.su(D,B)||(s.track({type:2,doc:B}),F=!0,(p&&this.eu(B,p)>0||y&&this.eu(B,y)<0)&&(m=!0)):!D&&B?(s.track({type:0,doc:B}),F=!0):D&&!B&&(s.track({type:1,doc:D}),F=!0,(p||y)&&(m=!0)),F&&(B?(f=f.add(B),u=X?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,bs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((E,S)=>(function(B,Z){const X=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:F})}};return X(B)-X(Z)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,f.length!==0||y?{snapshot:new go(this.query,e.tu,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ze(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const n=[];return e.forEach((s=>{this.Ya.has(s)||n.push(new iA(s))})),this.Ya.forEach((s=>{e.has(s)||n.push(new nA(s))})),n}cu(e){this.Za=e.ks,this.Ya=ze();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Kp="SyncEngine";class H5{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class q5{constructor(e){this.key=e,this.hu=!1}}class F5{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new sa((m=>wS(m)),qh),this.Eu=new Map,this.Iu=new Set,this.Ru=new gt(pe.comparator),this.Au=new Map,this.Vu=new Lp,this.du={},this.mu=new Map,this.fu=mo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function G5(r,e,n=!0){const s=lA(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await rA(s,e,n,!0),o}async function K5(r,e){const n=lA(r);await rA(n,e,!0,!1)}async function rA(r,e,n,s){const o=await y5(r.localStore,Mi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await Y5(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&QS(r.remoteStore,o),m}async function Y5(r,e,n,s,o){r.pu=(S,D,B)=>(async function(X,F,W,ae){let se=F.view.ru(W);se.bs&&(se=await Q0(X.localStore,F.query,!1).then((({documents:R})=>F.view.ru(R,se))));const de=ae&&ae.targetChanges.get(F.targetId),ge=ae&&ae.targetMismatches.get(F.targetId)!=null,ve=F.view.applyChanges(se,X.isPrimaryClient,de,ge);return aE(X,F.targetId,ve.au),ve.snapshot})(r,S,D,B);const u=await Q0(r.localStore,e,!0),f=new j5(e,u.ks),m=f.ru(u.documents),p=ou.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);aE(r,n,y.au);const E=new H5(e,n,f);return r.Tu.set(e,E),r.Eu.has(n)?r.Eu.get(n).push(e):r.Eu.set(n,[e]),y.snapshot}async function $5(r,e,n){const s=Pe(r),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((f=>!qh(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Qm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Bp(s.remoteStore,o.targetId),Jm(s,o.targetId)})).catch(Uh)):(Jm(s,o.targetId),await Qm(s.localStore,o.targetId,!0))}async function Q5(r,e){const n=Pe(r),s=n.Tu.get(e),o=n.Eu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Bp(n.remoteStore,s.targetId))}async function sA(r,e){const n=Pe(r);try{const s=await p5(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(lt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?lt(f.hu,14607):o.removedDocuments.size>0&&(lt(f.hu,42227),f.hu=!1))})),await oA(n,s,e)}catch(s){await Uh(s)}}function sE(r,e,n){const s=Pe(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Pe(f);p.onlineState=m;let y=!1;p.queries.forEach(((E,S)=>{for(const D of S.Sa)D.va(m)&&(y=!0)})),y&&Gp(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function X5(r,e,n){const s=Pe(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new gt(pe.comparator);f=f.insert(u,Xt.newNoDocument(u,Se.min()));const m=ze().add(u),p=new Yh(Se.min(),new Map,new gt(xe),f,m);await sA(s,p),s.Ru=s.Ru.remove(u),s.Au.delete(e),Yp(s)}else await Qm(s.localStore,e,!1).then((()=>Jm(s,e,n))).catch(Uh)}function Jm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Eu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||aA(r,s)}))}function aA(r,e){r.Iu.delete(e.path.canonicalString());const n=r.Ru.get(e);n!==null&&(Bp(r.remoteStore,n),r.Ru=r.Ru.remove(e),r.Au.delete(n),Yp(r))}function aE(r,e,n){for(const s of n)s instanceof nA?(r.Vu.addReference(s.key,e),Z5(r,s)):s instanceof iA?(le(Kp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||aA(r,s.key)):Ae(19791,{wu:s})}function Z5(r,e){const n=e.key,s=n.path.canonicalString();r.Ru.get(n)||r.Iu.has(s)||(le(Kp,"New document in limbo: "+n),r.Iu.add(s),Yp(r))}function Yp(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const n=new pe(it.fromString(e)),s=r.fu.next();r.Au.set(s,new q5(n)),r.Ru=r.Ru.insert(n,s),QS(r.remoteStore,new Xr(Mi(Mp(n.path)),s,"TargetPurposeLimboResolution",zh.ce))}}async function oA(r,e,n){const s=Pe(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,n).then((y=>{var E;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(y){o.push(y);const S=Up.Is(p.targetId,y);u.push(S)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,y){const E=Pe(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>J.forEach(y,(D=>J.forEach(D.Ts,(B=>E.persistence.referenceDelegate.addReference(S,D.targetId,B))).next((()=>J.forEach(D.Es,(B=>E.persistence.referenceDelegate.removeReference(S,D.targetId,B)))))))))}catch(S){if(!To(S))throw S;le(zp,"Failed to update sequence numbers: "+S)}for(const S of y){const D=S.targetId;if(!S.fromCache){const B=E.vs.get(D),Z=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(Z);E.vs=E.vs.insert(D,X)}}})(s.localStore,u))}async function J5(r,e){const n=Pe(r);if(!n.currentUser.isEqual(e)){le(Kp,"User change. New user:",e.toKey());const s=await GS(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new he(te.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oA(n,s.Ns)}}function W5(r,e){const n=Pe(r),s=n.Au.get(e);if(s&&s.hu)return ze().add(s.key);{let o=ze();const u=n.Eu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function lA(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=sA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=W5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X5.bind(null,e),e.Pu.H_=z5.bind(null,e.eventManager),e.Pu.yu=B5.bind(null,e.eventManager),e}class Ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=YS(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return m5(this.persistence,new h5,e.initialUser,this.serializer)}Cu(e){return new FS(Pp.Vi,this.serializer)}Du(e){return new v5}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ah.provider={build:()=>new Ah};class eM extends Ah{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof Sh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new XO(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new FS((s=>Sh.Vi(s,n)),this.serializer)}}class Wm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=J5.bind(null,this.syncEngine),await L5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new U5})()}createDatastore(e){const n=YS(e.databaseInfo.databaseId),s=b5(e.databaseInfo);return D5(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,m){return new O5(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>sE(this.syncEngine,n,0)),(function(){return J0.v()?new J0:new E5})())}createSyncEngine(e,n){return(function(o,u,f,m,p,y,E){const S=new F5(o,u,f,m,p,y);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(o){const u=Pe(o);le(po,"RemoteStore shutting down."),u.Ia.add(5),await lu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Wm.provider={build:()=>new Wm};/**
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
 */class uA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const hs="FirestoreClient";class tM{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=o,this.user=Qt.UNAUTHENTICATED,this.clientId=Ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{le(hs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(le(hs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=JS(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Em(r,e){r.asyncQueue.verifyOperationInProgress(),le(hs,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await GS(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function oE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await nM(r);le(hs,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>tE(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>tE(e.remoteStore,o))),r._onlineComponents=e}async function nM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){le(hs,"Using user provided OfflineComponentProvider");try{await Em(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Em(r,new Ah)}}else le(hs,"Using default OfflineComponentProvider"),await Em(r,new eM(void 0));return r._offlineComponents}async function iM(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(le(hs,"Using user provided OnlineComponentProvider"),await oE(r,r._uninitializedComponentsProvider._online)):(le(hs,"Using default OnlineComponentProvider"),await oE(r,new Wm))),r._onlineComponents}async function cA(r){const e=await iM(r),n=e.eventManager;return n.onListen=G5.bind(null,e.syncEngine),n.onUnlisten=$5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=K5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Q5.bind(null,e.syncEngine),n}function rM(r,e,n={}){const s=new ts;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new uA({next:D=>{E.Nu(),f.enqueueAndForget((()=>eA(u,S)));const B=D.docs.has(m);!B&&D.fromCache?y.reject(new he(te.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&D.fromCache&&p&&p.source==="server"?y.reject(new he(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(D)},error:D=>y.reject(D)}),S=new tA(Mp(m.path),E,{includeMetadataChanges:!0,qa:!0});return WS(u,S)})(await cA(r),r.asyncQueue,e,n,s))),s.promise}function sM(r,e,n={}){const s=new ts;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new uA({next:D=>{E.Nu(),f.enqueueAndForget((()=>eA(u,S))),D.fromCache&&p.source==="server"?y.reject(new he(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(D)},error:D=>y.reject(D)}),S=new tA(m,E,{includeMetadataChanges:!0,qa:!0});return WS(u,S)})(await cA(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function hA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const aM="ComponentProvider",lE=new Map;function oM(r,e,n,s,o){return new BN(r,e,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,hA(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const fA="firestore.googleapis.com",uE=!0;class cE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fA,this.ssl=uE}else this.host=e.host,this.ssl=e.ssl??uE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$O)throw new he(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new gN;switch(s.type){case"firstParty":return new EN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=lE.get(n);s&&(le(aM,"Removing Datastore"),lE.delete(n),s.terminate())})(this),Promise.resolve()}}function lM(r,e,n,s={}){var y;r=Kl(r,Qh);const o=na(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&Nh(`https://${m}`),u.host!==fA&&u.host!==m&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!ss(p,f)&&(r._setSettings(p),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Qt.MOCK_USER;else{E=YE(s.mockUserToken,(y=r._app)==null?void 0:y.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new he(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Qt(D)}r._authCredentials=new yN(new hS(E,S))}}/**
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
 */class Xh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xh(this.firestore,e,this._query)}}class Zt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}toJSON(){return{type:Zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(su(n,Zt._jsonSchema))return new Zt(e,s||null,new pe(it.fromString(n.referencePath)))}}Zt._jsonSchemaVersion="firestore/documentReference/1.0",Zt._jsonSchema={type:Ct("string",Zt._jsonSchemaVersion),referencePath:Ct("string")};class ns extends Xh{constructor(e,n,s){super(e,n,Mp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new pe(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function uM(r,e,...n){if(r=Ut(r),fS("collection","path",e),r instanceof Qh){const s=it.fromString(e,...n);return A0(s),new ns(r,null,s)}{if(!(r instanceof Zt||r instanceof ns))throw new he(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return A0(s),new ns(r.firestore,null,s)}}function cM(r,e,...n){if(r=Ut(r),arguments.length===1&&(e=Ip.newId()),fS("doc","path",e),r instanceof Qh){const s=it.fromString(e,...n);return S0(s),new Zt(r,null,new pe(s))}{if(!(r instanceof Zt||r instanceof ns))throw new he(te.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return S0(s),new Zt(r.firestore,r instanceof ns?r.converter:null,new pe(s))}}/**
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
 */const hE="AsyncQueue";class fE{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $S(this,"async_queue_retry"),this._c=()=>{const s=vm();s&&le(hE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=vm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=vm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ts;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!To(e))throw e;le(hE,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",dE(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Fp.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ae(47125,{Pc:dE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function dE(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class $p extends Qh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new fE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fE(e),this._firestoreClient=void 0,await e}}}function hM(r,e){const n=typeof r=="object"?r:tu(),s=typeof r=="string"?r:yh,o=cr(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=cp("firestore");u&&lM(o,...u)}return o}function dA(r){if(r._terminated)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fM(r),r._firestoreClient}function fM(r){var s,o,u,f;const e=r._freezeSettings(),n=oM(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new tM(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(r._componentsProvider))}/**
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
 */class Di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Di(Kt.fromBase64String(e))}catch(n){throw new he(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Di(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Di._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(su(e,Di._jsonSchema))return Di.fromBase64String(e.bytes)}}Di._jsonSchemaVersion="firestore/bytes/1.0",Di._jsonSchema={type:Ct("string",Di._jsonSchemaVersion),bytes:Ct("string")};/**
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
 */class mA{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class is{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:is._jsonSchemaVersion}}static fromJSON(e){if(su(e,is._jsonSchema))return new is(e.latitude,e.longitude)}}is._jsonSchemaVersion="firestore/geoPoint/1.0",is._jsonSchema={type:Ct("string",is._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class rs{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(su(e,rs._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new rs(e.vectorValues);throw new he(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rs._jsonSchemaVersion="firestore/vectorValue/1.0",rs._jsonSchema={type:Ct("string",rs._jsonSchemaVersion),vectorValues:Ct("object")};function pA(r,e,n){if((e=Ut(e))instanceof mA)return e._internalPath;if(typeof e=="string")return mM(r,e);throw ep("Field path arguments must be of type string or ",r)}const dM=new RegExp("[~\\*/\\[\\]]");function mM(r,e,n){if(e.search(dM)>=0)throw ep(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new mA(...e.split("."))._internalPath}catch{throw ep(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function ep(r,e,n,s,o){let u=`Function ${e}() called with invalid data`;u+=". ";let f="";return new he(te.INVALID_ARGUMENT,u+r+f)}/**
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
 */class pM{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return au(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[zm].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>pt(f.doubleValue)));return new rs(n)}convertGeoPoint(e){return new is(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=jh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const n=os(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);lt(HS(s),9688,{name:e});const o=new Ql(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(n)||ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class gA extends pM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}const mE="@firebase/firestore",pE="4.14.0";/**
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
 */class yA{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(pA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gM extends yA{data(){return super.data()}}/**
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
 */function yM(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ll{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $s extends yA{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pA("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$s._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$s._jsonSchemaVersion="firestore/documentSnapshot/1.0",$s._jsonSchema={type:Ct("string",$s._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class rh extends $s{data(e={}){return super.data(e)}}class lo{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ll(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new rh(this._firestore,this._userDataWriter,s.key,s,new Ll(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new rh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ll(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new rh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ll(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:_M(m.type),doc:p,oldIndex:y,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _M(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:r})}}/**
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
 */lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:Ct("string",lo._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};/**
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
 */function vM(r){r=Kl(r,Zt);const e=Kl(r.firestore,$p),n=dA(e);return rM(n,r._key).then((s=>TM(e,r,s)))}function EM(r){r=Kl(r,Xh);const e=Kl(r.firestore,$p),n=dA(e),s=new gA(e);return yM(r._query),sM(n,r._query).then((o=>new lo(e,s,r,o)))}function TM(r,e,n){const s=n.docs.get(e._key),o=new gA(r);return new $s(r,o,e._key,s,new Ll(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){pN(ia),zn(new wn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new $p(new _N(s.getProvider("auth-internal")),new TN(f,s.getProvider("app-check-internal")),jN(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Jt(mE,pE,e),Jt(mE,pE,"esm2020")})();/**
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
 */const _A="firebasestorage.googleapis.com",SM="storageBucket",AM=120*1e3,bM=600*1e3;/**
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
 */class Ui extends jn{constructor(e,n,s=0){super(Tm(e),`Firebase Storage: ${n} (${Tm(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ui.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ki;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ki||(ki={}));function Tm(r){return"storage/"+r}function wM(){const r="An unknown error occurred, please check the error payload for server response.";return new Ui(ki.UNKNOWN,r)}function RM(){return new Ui(ki.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IM(){return new Ui(ki.CANCELED,"User canceled the upload/download.")}function CM(r){return new Ui(ki.INVALID_URL,"Invalid URL '"+r+"'.")}function DM(r){return new Ui(ki.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function gE(r){return new Ui(ki.INVALID_ARGUMENT,r)}function vA(){return new Ui(ki.APP_DELETED,"The Firebase app was deleted.")}function NM(r){return new Ui(ki.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ti{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ti.makeFromUrl(e,n)}catch{return new ti(e,"")}if(s.path==="")return s;throw DM(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(de){de.path.charAt(de.path.length-1)==="/"&&(de.path_=de.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function y(de){de.path_=decodeURIComponent(de.path)}const E="v[A-Za-z0-9_]+",S=n.replace(/[.]/g,"\\."),D="(/([^?#]*).*)?$",B=new RegExp(`^https?://${S}/${E}/b/${o}/o${D}`,"i"),Z={bucket:1,path:3},X=n===_A?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",W=new RegExp(`^https?://${X}/${o}/${F}`,"i"),se=[{regex:m,indices:p,postModify:u},{regex:B,indices:Z,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let de=0;de<se.length;de++){const ge=se[de],ve=ge.regex.exec(e);if(ve){const R=ve[ge.indices.bucket];let b=ve[ge.indices.path];b||(b=""),s=new ti(R,b),ge.postModify(s);break}}if(s==null)throw CM(e);return s}}class OM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function MM(r,e,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let y=!1;function E(...F){y||(y=!0,e.apply(null,F))}function S(F){o=setTimeout(()=>{o=null,r(B,p())},F)}function D(){u&&clearTimeout(u)}function B(F,...W){if(y){D();return}if(F){D(),E.call(null,F,...W);return}if(p()||f){D(),E.call(null,F,...W);return}s<64&&(s*=2);let se;m===1?(m=2,se=0):se=(s+Math.random())*1e3,S(se)}let Z=!1;function X(F){Z||(Z=!0,D(),!y&&(o!==null?(F||(m=2),clearTimeout(o),S(0)):F||(m=1)))}return S(0),u=setTimeout(()=>{f=!0,X(!0)},n),X}function VM(r){r(!1)}/**
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
 */function xM(r){return r!==void 0}function yE(r,e,n,s){if(s<e)throw gE(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw gE(`Invalid value for '${r}'. Expected ${n} or less.`)}function kM(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var bh;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(bh||(bh={}));/**
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
 */function LM(r,e){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return n||o||u}/**
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
 */class PM{constructor(e,n,s,o,u,f,m,p,y,E,S,D=!0,B=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=S,this.retry=D,this.isUsingEmulator=B,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Z,X)=>{this.resolve_=Z,this.reject_=X,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Yc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===bh.NO_ERROR,p=u.getStatus();if(!m||LM(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===bh.ABORT;s(!1,new Yc(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Yc(y,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());xM(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=wM();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?vA():IM();f(p)}else{const p=RM();f(p)}};this.canceled_?n(!1,new Yc(!1,null,!0)):this.backoffId_=MM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function UM(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function zM(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BM(r,e){e&&(r["X-Firebase-GMPID"]=e)}function jM(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function HM(r,e,n,s,o,u,f=!0,m=!1){const p=kM(r.urlParams),y=r.url+p,E=Object.assign({},r.headers);return BM(E,e),UM(E,n),zM(E,u),jM(E,s),new PM(y,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f,m)}/**
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
 */function qM(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function FM(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class wh{constructor(e,n){this._service=e,n instanceof ti?this._location=n:this._location=ti.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wh(e,n)}get root(){const e=new ti(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FM(this._location.path)}get storage(){return this._service}get parent(){const e=qM(this._location.path);if(e===null)return null;const n=new ti(this._location.bucket,e);return new wh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NM(e)}}function _E(r,e){const n=e==null?void 0:e[SM];return n==null?null:ti.makeFromBucketSpec(n,r)}function GM(r,e,n,s={}){r.host=`${e}:${n}`;const o=na(e);o&&Nh(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:YE(u,r.app.options.projectId))}class KM{constructor(e,n,s,o,u,f=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=_A,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AM,this._maxUploadRetryTime=bM,this._requests=new Set,o!=null?this._bucket=ti.makeFromBucketSpec(o,this._host):this._bucket=_E(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ti.makeFromBucketSpec(this._url,e):this._bucket=_E(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wh(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new OM(vA());{const f=HM(e,this._appId,s,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const vE="@firebase/storage",EE="0.14.2";/**
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
 */const EA="storage";function YM(r=tu(),e){r=Ut(r);const s=cr(r,EA).getImmediate({identifier:e}),o=cp("storage");return o&&$M(s,...o),s}function $M(r,e,n,s={}){GM(r,e,n,s)}function QM(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new KM(n,s,o,e,ia)}function XM(){zn(new wn(EA,QM,"PUBLIC").setMultipleInstances(!0)),Jt(vE,EE,""),Jt(vE,EE,"esm2020")}XM();const ZM={apiKey:"AIzaSyAZ7JwOAcf5fGou0ZbuB58zofnVhfyfeMQ",authDomain:"pos-dashboard-zion.firebaseapp.com",databaseURL:"https://pos-dashboard-zion-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"pos-dashboard-zion",storageBucket:"pos-dashboard-zion.firebasestorage.app",messagingSenderId:"950406773706",appId:"1:950406773706:web:22a6da027804b518412d33",measurementId:"G-L9KH9QXNQK"},cu=eT(ZM);typeof window<"u"&&tN(cu);const Sm=k2(cu),TA=hM(cu);dN(cu);YM(cu);const SA=q.createContext(void 0),JM=({children:r})=>{const[e,n]=q.useState(null),[s,o]=q.useState(!0);q.useEffect(()=>AC(Sm,p=>{n(p),o(!1)}),[]);const u=async(m,p)=>{await EC(Sm,m,p)},f=async()=>{await bC(Sm)};return ee.jsx(SA.Provider,{value:{user:e,loading:s,signIn:u,logout:f},children:!s&&r})},AA=()=>{const r=q.useContext(SA);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r};function WM({item:r,storeItemOnClick:e}){return ee.jsx(ee.Fragment,{children:ee.jsxs("div",{className:"card bg-base-100 shadow-sm cursor-pointer",onClick:e,children:[ee.jsx("figure",{children:ee.jsx("img",{src:r.imageURL})}),ee.jsxs("div",{className:"card-body",children:[ee.jsx("h2",{className:"card-title",children:r.name}),ee.jsx("p",{children:r.description})]})]})})}function eV({adminLoginOnClick:r}){const[e,n]=q.useState(""),[s,o]=q.useState(""),{signIn:u}=AA(),f=async()=>{try{await u(e,s),r()}catch(m){console.error("Login failed:",m),alert("Invalid credentials")}};return ee.jsx("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50",children:ee.jsxs("fieldset",{className:"fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4",children:[ee.jsxs("div",{className:"flex flex-row justify-between",children:[ee.jsx("h1",{className:"text-xl font-bold",children:"Login"}),ee.jsx("button",{className:"btn btn-square",onClick:r,children:"X"})]}),ee.jsx("p",{children:"For admins only"}),ee.jsx("label",{className:"label",children:"Email"}),ee.jsx("input",{type:"email",className:"input",placeholder:"Email",value:e,onChange:m=>n(m.target.value)}),ee.jsx("label",{className:"label",children:"Password"}),ee.jsx("input",{type:"password",className:"input",placeholder:"Password",value:s,onChange:m=>o(m.target.value)}),ee.jsx("button",{className:"btn btn-neutral mt-4",onClick:f,children:"Login"})]})})}const bA=({children:r})=>{const{user:e,logout:n}=AA(),s=Ih(),[o,u]=q.useState(!1),[f,m]=q.useState(!1),p=()=>{u(!o)},y=()=>{m(!f)},E=async()=>{try{await n(),m(!1)}catch(D){console.error("Logout failed:",D)}},S=[{name:"Store",path:"/",icon:ee.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:ee.jsx("path",{d:"M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"})})},{name:"Finance",path:"/finance",icon:ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[ee.jsx("path",{fillRule:"evenodd",d:"M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z",clipRule:"evenodd"}),ee.jsx("path",{d:"M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"})]})},{name:"Inventory",path:"/inventory",icon:ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[ee.jsx("path",{d:"M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z"}),ee.jsx("path",{d:"M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z"}),ee.jsx("path",{d:"M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z"}),ee.jsx("path",{d:"M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z"})]})},{name:"POS",path:"/pos",icon:ee.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:ee.jsx("path",{fillRule:"evenodd",d:"M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z",clipRule:"evenodd"})})},{name:"Admin",path:"/admin",icon:ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[ee.jsx("path",{fillRule:"evenodd",d:"M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",clipRule:"evenodd"}),ee.jsx("path",{d:"m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z"}),ee.jsx("path",{fillRule:"evenodd",d:"m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})]})}];return ee.jsxs("div",{className:"drawer lg:drawer-open",children:[ee.jsx("input",{id:"my-drawer",type:"checkbox",className:"drawer-toggle"}),ee.jsxs("div",{className:"drawer-content flex flex-col",children:[ee.jsxs("nav",{className:"navbar bg-base-100 w-full justify-between flex flex-col gap-2 sm:flex-row",children:[ee.jsx("div",{className:"flex-none",children:e!==null&&ee.jsx("label",{htmlFor:"my-drawer","aria-label":"open sidebar",className:"btn btn-square btn-ghost",children:ee.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block h-6 w-6 stroke-current",children:ee.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),ee.jsx("div",{className:"btn btn-ghost text-xl",onClick:()=>s("/"),children:"🚀 Detonate Fundraising 🚀"}),ee.jsx("div",{className:"flex-none",children:e==null?ee.jsx("button",{className:"btn",onClick:p,children:"Admin"}):ee.jsxs("button",{className:"btn",onClick:y,children:["Admin: ",e.displayName||e.email]})})]}),ee.jsx("main",{className:"flex-1 p-4",children:r})]}),e!==null&&ee.jsxs("div",{className:"drawer-side z-50 is-drawer-close:overflow-visible",children:[ee.jsx("label",{htmlFor:"my-drawer","aria-label":"close sidebar",className:"drawer-overlay"}),ee.jsx("div",{className:"flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64",children:ee.jsx("ul",{className:"menu w-full grow gap-1",children:S.map(D=>ee.jsx("li",{className:"w-full",children:ee.jsxs("button",{onClick:()=>{s(D.path);const B=document.getElementById("my-drawer");B&&(B.checked=!1)},className:"w-full flex items-center gap-4 p-3 rounded-lg hover:bg-base-300 is-drawer-close:tooltip is-drawer-close:tooltip-right","data-tip":D.name,children:[D.icon,ee.jsx("span",{className:"is-drawer-close:hidden",children:D.name})]})},D.name))})})]}),o&&ee.jsx(eV,{adminLoginOnClick:p}),f&&ee.jsx("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50",children:ee.jsxs("div",{className:"card bg-base-100 p-7 flex flex-col gap-5 border border-base-300 shadow-xl",children:[ee.jsx("h1",{className:"text-center",children:"Confirm Logout?"}),ee.jsxs("div",{className:"flex flex-row gap-4",children:[ee.jsx("button",{className:"btn btn-error",onClick:E,children:"Logout"}),ee.jsx("button",{className:"btn btn-outline",onClick:y,children:"Cancel"})]})]})})]})};function tV(){const[r,e]=q.useState([]),[n,s]=q.useState(!0),o=Ih(),u=f=>{o(`/${f.id}`,{state:{product:f}})};return q.useEffect(()=>{(async()=>{try{const p=(await EM(uM(TA,"products"))).docs.map(y=>({id:y.id,...y.data()}));e(p)}catch(m){console.error("Error fetching products: ",m)}finally{s(!1)}})()},[]),ee.jsx(bA,{children:ee.jsx("div",{className:"flex flex-col relative",children:n?ee.jsx("div",{className:"p-10 text-center",children:"Loading products..."}):ee.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4",children:r.map(f=>ee.jsx(WM,{item:f,storeItemOnClick:()=>u(f)},f.id))})})})}function nV(){var m;const{productId:r}=$w(),e=Pi(),n=Ih(),[s,o]=q.useState(((m=e.state)==null?void 0:m.product)||null),[u,f]=q.useState(!s);return q.useEffect(()=>{(async()=>{if(!s&&r)try{const y=cM(TA,"products",r),E=await vM(y);E.exists()?o({id:E.id,...E.data()}):console.error("No such product!")}catch(y){console.error("Error fetching product: ",y)}finally{f(!1)}})()},[r,s]),ee.jsx(bA,{children:ee.jsx("div",{className:"flex flex-col relative",children:ee.jsxs("div",{className:"m-4",children:[ee.jsx("button",{className:"btn btn-outline mb-4",onClick:()=>n("/"),children:"← Back to Store"}),u?ee.jsx("div",{className:"p-10 text-center",children:"Loading product..."}):s?ee.jsx("div",{className:"max-w-2xl mx-auto",children:ee.jsxs("div",{className:"card bg-base-100 shadow-sm",children:[ee.jsx("figure",{children:ee.jsx("img",{src:s.imageURL})}),ee.jsxs("div",{className:"card-body",children:[ee.jsx("h2",{className:"card-title",children:s.name}),ee.jsx("p",{children:s.description})]})]})}):ee.jsx("div",{className:"p-10 text-center text-error",children:"Product not found."})]})})})}function iV(){return ee.jsx(JM,{children:ee.jsx("div",{className:"text-sm sm:text-base md:text-lg",children:ee.jsx(VR,{children:ee.jsxs(uR,{children:[ee.jsx(bm,{path:"/",element:ee.jsx(tV,{})}),ee.jsx(bm,{path:"/:productId",element:ee.jsx(nV,{})})]})})})})}cw.createRoot(document.getElementById("root")).render(ee.jsx(q.StrictMode,{children:ee.jsx(iV,{})}));
