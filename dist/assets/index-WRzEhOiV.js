(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Jd={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function ew(){if(yv)return Nl;yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Nl.Fragment=e,Nl.jsx=n,Nl.jsxs=n,Nl}var _v;function tw(){return _v||(_v=1,Jd.exports=ew()),Jd.exports}var F=tw(),Wd={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function nw(){if(vv)return Te;vv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),N=Symbol.iterator;function z(M){return M===null||typeof M!="object"?null:(M=N&&M[N]||M["@@iterator"],typeof M=="function"?M:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,K={};function ee(M,Z,re){this.props=M,this.context=Z,this.refs=K,this.updater=re||X}ee.prototype.isReactComponent={},ee.prototype.setState=function(M,Z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Z,"setState")},ee.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ae(){}ae.prototype=ee.prototype;function se(M,Z,re){this.props=M,this.context=Z,this.refs=K,this.updater=re||X}var de=se.prototype=new ae;de.constructor=se,J(de,ee.prototype),de.isPureReactComponent=!0;var ge=Array.isArray;function ve(){}var R={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(M,Z,re){var oe=re.ref;return{$$typeof:r,type:M,key:Z,ref:oe!==void 0?oe:null,props:re}}function x(M,Z){return C(M.type,Z,M.props)}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function k(M){var Z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return Z[re]})}var w=/\/+/g;function We(M,Z){return typeof M=="object"&&M!==null&&M.key!=null?k(""+M.key):Z.toString(36)}function $e(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(ve,ve):(M.status="pending",M.then(function(Z){M.status==="pending"&&(M.status="fulfilled",M.value=Z)},function(Z){M.status==="pending"&&(M.status="rejected",M.reason=Z)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Y(M,Z,re,oe,Ee){var Re=typeof M;(Re==="undefined"||Re==="boolean")&&(M=null);var ke=!1;if(M===null)ke=!0;else switch(Re){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(M.$$typeof){case r:case e:ke=!0;break;case E:return ke=M._init,Y(ke(M._payload),Z,re,oe,Ee)}}if(ke)return Ee=Ee(M),ke=oe===""?"."+We(M,0):oe,ge(Ee)?(re="",ke!=null&&(re=ke.replace(w,"$&/")+"/"),Y(Ee,Z,re,"",function(ms){return ms})):Ee!=null&&(O(Ee)&&(Ee=x(Ee,re+(Ee.key==null||M&&M.key===Ee.key?"":(""+Ee.key).replace(w,"$&/")+"/")+ke)),Z.push(Ee)),1;ke=0;var Nt=oe===""?".":oe+":";if(ge(M))for(var rt=0;rt<M.length;rt++)oe=M[rt],Re=Nt+We(oe,rt),ke+=Y(oe,Z,re,Re,Ee);else if(rt=z(M),typeof rt=="function")for(M=rt.call(M),rt=0;!(oe=M.next()).done;)oe=oe.value,Re=Nt+We(oe,rt++),ke+=Y(oe,Z,re,Re,Ee);else if(Re==="object"){if(typeof M.then=="function")return Y($e(M),Z,re,oe,Ee);throw Z=String(M),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ke}function ie(M,Z,re){if(M==null)return M;var oe=[],Ee=0;return Y(M,oe,"","",function(Re){return Z.call(re,Re,Ee++)}),oe}function me(M){if(M._status===-1){var Z=M._result;Z=Z(),Z.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=Z)}if(M._status===1)return M._result.default;throw M._result}var Ue=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Fe={map:ie,forEach:function(M,Z,re){ie(M,function(){Z.apply(this,arguments)},re)},count:function(M){var Z=0;return ie(M,function(){Z++}),Z},toArray:function(M){return ie(M,function(Z){return Z})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Te.Activity=T,Te.Children=Fe,Te.Component=ee,Te.Fragment=n,Te.Profiler=o,Te.PureComponent=se,Te.StrictMode=s,Te.Suspense=p,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Te.__COMPILER_RUNTIME={__proto__:null,c:function(M){return R.H.useMemoCache(M)}},Te.cache=function(M){return function(){return M.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(M,Z,re){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=J({},M.props),Ee=M.key;if(Z!=null)for(Re in Z.key!==void 0&&(Ee=""+Z.key),Z)!b.call(Z,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&Z.ref===void 0||(oe[Re]=Z[Re]);var Re=arguments.length-2;if(Re===1)oe.children=re;else if(1<Re){for(var ke=Array(Re),Nt=0;Nt<Re;Nt++)ke[Nt]=arguments[Nt+2];oe.children=ke}return C(M.type,Ee,oe)},Te.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Te.createElement=function(M,Z,re){var oe,Ee={},Re=null;if(Z!=null)for(oe in Z.key!==void 0&&(Re=""+Z.key),Z)b.call(Z,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(Ee[oe]=Z[oe]);var ke=arguments.length-2;if(ke===1)Ee.children=re;else if(1<ke){for(var Nt=Array(ke),rt=0;rt<ke;rt++)Nt[rt]=arguments[rt+2];Ee.children=Nt}if(M&&M.defaultProps)for(oe in ke=M.defaultProps,ke)Ee[oe]===void 0&&(Ee[oe]=ke[oe]);return C(M,Re,Ee)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(M){return{$$typeof:m,render:M}},Te.isValidElement=O,Te.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:me}},Te.memo=function(M,Z){return{$$typeof:y,type:M,compare:Z===void 0?null:Z}},Te.startTransition=function(M){var Z=R.T,re={};R.T=re;try{var oe=M(),Ee=R.S;Ee!==null&&Ee(re,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(ve,Ue)}catch(Re){Ue(Re)}finally{Z!==null&&re.types!==null&&(Z.types=re.types),R.T=Z}},Te.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Te.use=function(M){return R.H.use(M)},Te.useActionState=function(M,Z,re){return R.H.useActionState(M,Z,re)},Te.useCallback=function(M,Z){return R.H.useCallback(M,Z)},Te.useContext=function(M){return R.H.useContext(M)},Te.useDebugValue=function(){},Te.useDeferredValue=function(M,Z){return R.H.useDeferredValue(M,Z)},Te.useEffect=function(M,Z){return R.H.useEffect(M,Z)},Te.useEffectEvent=function(M){return R.H.useEffectEvent(M)},Te.useId=function(){return R.H.useId()},Te.useImperativeHandle=function(M,Z,re){return R.H.useImperativeHandle(M,Z,re)},Te.useInsertionEffect=function(M,Z){return R.H.useInsertionEffect(M,Z)},Te.useLayoutEffect=function(M,Z){return R.H.useLayoutEffect(M,Z)},Te.useMemo=function(M,Z){return R.H.useMemo(M,Z)},Te.useOptimistic=function(M,Z){return R.H.useOptimistic(M,Z)},Te.useReducer=function(M,Z,re){return R.H.useReducer(M,Z,re)},Te.useRef=function(M){return R.H.useRef(M)},Te.useState=function(M){return R.H.useState(M)},Te.useSyncExternalStore=function(M,Z,re){return R.H.useSyncExternalStore(M,Z,re)},Te.useTransition=function(){return R.H.useTransition()},Te.version="19.2.5",Te}var Ev;function np(){return Ev||(Ev=1,Wd.exports=nw()),Wd.exports}var B=np(),em={exports:{}},Dl={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function iw(){return Tv||(Tv=1,(function(r){function e(Y,ie){var me=Y.length;Y.push(ie);e:for(;0<me;){var Ue=me-1>>>1,Fe=Y[Ue];if(0<o(Fe,ie))Y[Ue]=ie,Y[me]=Fe,me=Ue;else break e}}function n(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ie=Y[0],me=Y.pop();if(me!==ie){Y[0]=me;e:for(var Ue=0,Fe=Y.length,M=Fe>>>1;Ue<M;){var Z=2*(Ue+1)-1,re=Y[Z],oe=Z+1,Ee=Y[oe];if(0>o(re,me))oe<Fe&&0>o(Ee,re)?(Y[Ue]=Ee,Y[oe]=me,Ue=oe):(Y[Ue]=re,Y[Z]=me,Ue=Z);else if(oe<Fe&&0>o(Ee,me))Y[Ue]=Ee,Y[oe]=me,Ue=oe;else break e}}return ie}function o(Y,ie){var me=Y.sortIndex-ie.sortIndex;return me!==0?me:Y.id-ie.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,T=null,N=3,z=!1,X=!1,J=!1,K=!1,ee=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;function de(Y){for(var ie=n(y);ie!==null;){if(ie.callback===null)s(y);else if(ie.startTime<=Y)s(y),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=n(y)}}function ge(Y){if(J=!1,de(Y),!X)if(n(p)!==null)X=!0,ve||(ve=!0,k());else{var ie=n(y);ie!==null&&$e(ge,ie.startTime-Y)}}var ve=!1,R=-1,b=5,C=-1;function x(){return K?!0:!(r.unstable_now()-C<b)}function O(){if(K=!1,ve){var Y=r.unstable_now();C=Y;var ie=!0;try{e:{X=!1,J&&(J=!1,ae(R),R=-1),z=!0;var me=N;try{t:{for(de(Y),T=n(p);T!==null&&!(T.expirationTime>Y&&x());){var Ue=T.callback;if(typeof Ue=="function"){T.callback=null,N=T.priorityLevel;var Fe=Ue(T.expirationTime<=Y);if(Y=r.unstable_now(),typeof Fe=="function"){T.callback=Fe,de(Y),ie=!0;break t}T===n(p)&&s(p),de(Y)}else s(p);T=n(p)}if(T!==null)ie=!0;else{var M=n(y);M!==null&&$e(ge,M.startTime-Y),ie=!1}}break e}finally{T=null,N=me,z=!1}ie=void 0}}finally{ie?k():ve=!1}}}var k;if(typeof se=="function")k=function(){se(O)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,We=w.port2;w.port1.onmessage=O,k=function(){We.postMessage(null)}}else k=function(){ee(O,0)};function $e(Y,ie){R=ee(function(){Y(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(Y){switch(N){case 1:case 2:case 3:var ie=3;break;default:ie=N}var me=N;N=ie;try{return Y()}finally{N=me}},r.unstable_requestPaint=function(){K=!0},r.unstable_runWithPriority=function(Y,ie){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var me=N;N=Y;try{return ie()}finally{N=me}},r.unstable_scheduleCallback=function(Y,ie,me){var Ue=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ue+me:Ue):me=Ue,Y){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=me+Fe,Y={id:E++,callback:ie,priorityLevel:Y,startTime:me,expirationTime:Fe,sortIndex:-1},me>Ue?(Y.sortIndex=me,e(y,Y),n(p)===null&&Y===n(y)&&(J?(ae(R),R=-1):J=!0,$e(ge,me-Ue))):(Y.sortIndex=Fe,e(p,Y),X||z||(X=!0,ve||(ve=!0,k()))),Y},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(Y){var ie=N;return function(){var me=N;N=ie;try{return Y.apply(this,arguments)}finally{N=me}}}})(nm)),nm}var Sv;function rw(){return Sv||(Sv=1,tm.exports=iw()),tm.exports}var im={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function sw(){if(Av)return Yt;Av=1;var r=np();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Yt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Yt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Yt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,T=m(E,y.crossOrigin),N=typeof y.integrity=="string"?y.integrity:void 0,z=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:T,integrity:N,fetchPriority:z}):E==="script"&&s.d.X(p,{crossOrigin:T,integrity:N,fetchPriority:z,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Yt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Yt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,T=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Yt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Yt.requestFormReset=function(p){s.d.r(p)},Yt.unstable_batchedUpdates=function(p,y){return p(y)},Yt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Yt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Yt.version="19.2.5",Yt}var bv;function aw(){if(bv)return im.exports;bv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),im.exports=sw(),im.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function ow(){if(wv)return Dl;wv=1;var r=rw(),e=np(),n=aw();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function y(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),t;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,S=h.child;S;){if(S===a){_=!0,a=h,l=d;break}if(S===l){_=!0,l=h,a=d;break}S=S.sibling}if(!_){for(S=d.child;S;){if(S===a){_=!0,a=d,l=h;break}if(S===l){_=!0,l=d,a=h;break}S=S.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function E(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=E(t),i!==null)return i;t=t.sibling}return null}var T=Object.assign,N=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ae=Symbol.for("react.consumer"),se=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var w=Symbol.for("react.client.reference");function We(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===w?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case ee:return"Profiler";case K:return"StrictMode";case ge:return"Suspense";case ve:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case X:return"Portal";case se:return t.displayName||"Context";case ae:return(t._context.displayName||"Context")+".Consumer";case de:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return i=t.displayName||null,i!==null?i:We(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return We(t(i))}catch{}}return null}var $e=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ue=[],Fe=-1;function M(t){return{current:t}}function Z(t){0>Fe||(t.current=Ue[Fe],Ue[Fe]=null,Fe--)}function re(t,i){Fe++,Ue[Fe]=t.current,t.current=i}var oe=M(null),Ee=M(null),Re=M(null),ke=M(null);function Nt(t,i){switch(re(Re,i),re(Ee,t),re(oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?j_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=j_(i),t=B_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(oe),re(oe,t)}function rt(){Z(oe),Z(Ee),Z(Re)}function ms(t){t.memoizedState!==null&&re(ke,t);var i=oe.current,a=B_(i,t.type);i!==a&&(re(Ee,t),re(oe,a))}function aa(t){Ee.current===t&&(Z(oe),Z(Ee)),ke.current===t&&(Z(ke),wl._currentValue=me)}var oa,la;function oi(t){if(oa===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);oa=i&&i[1]||"",la=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+t+la}var wo=!1;function ps(t,i){if(!t||wo)return"";wo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(q){var j=q}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(q){j=q}t.call(Q.prototype)}}else{try{throw Error()}catch(q){j=q}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],S=d[1];if(_&&S){var I=_.split(`
`),U=S.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===U.length)for(l=I.length-1,h=U.length-1;1<=l&&0<=h&&I[l]!==U[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==U[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==U[h]){var G=`
`+I[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=h);break}}}finally{wo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?oi(a):""}function Ro(t,i){switch(t.tag){case 26:case 27:case 5:return oi(t.type);case 16:return oi("Lazy");case 13:return t.child!==i&&i!==null?oi("Suspense Fallback"):oi("Suspense");case 19:return oi("SuspenseList");case 0:case 15:return ps(t.type,!1);case 11:return ps(t.type.render,!1);case 1:return ps(t.type,!0);case 31:return oi("Activity");default:return""}}function Io(t){try{var i="",a=null;do i+=Ro(t,a),a=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yt=Object.prototype.hasOwnProperty,Dt=r.unstable_scheduleCallback,hr=r.unstable_cancelCallback,Wh=r.unstable_shouldYield,du=r.unstable_requestPaint,en=r.unstable_now,gs=r.unstable_getCurrentPriorityLevel,Co=r.unstable_ImmediatePriority,No=r.unstable_UserBlockingPriority,fr=r.unstable_NormalPriority,ef=r.unstable_LowPriority,mu=r.unstable_IdlePriority,pu=r.log,gu=r.unstable_setDisableYieldValue,qn=null,zt=null;function In(t){if(typeof pu=="function"&&gu(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(qn,t)}catch{}}var ht=Math.clz32?Math.clz32:_u,yu=Math.log,ua=Math.LN2;function _u(t){return t>>>=0,t===0?32:31-(yu(t)/ua|0)|0}var li=256,ys=262144,_t=4194304;function ui(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ci(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?h=ui(l):(_&=S,_!==0?h=ui(_):a||(a=S&~t,a!==0&&(h=ui(a))))):(S=l&~d,S!==0?h=ui(S):_!==0?h=ui(_):a||(a=l&~t,a!==0&&(h=ui(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Fn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function tf(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function hi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function _s(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nf(t,i,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var S=t.entanglements,I=t.expirationTimes,U=t.hiddenUpdates;for(a=_&~a;0<a;){var G=31-ht(a),Q=1<<G;S[G]=0,I[G]=-1;var j=U[G];if(j!==null)for(U[G]=null,G=0;G<j.length;G++){var q=j[G];q!==null&&(q.lane&=-536870913)}a&=~Q}l!==0&&vs(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~i))}function vs(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ht(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Do(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-ht(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function Oo(t,i){var a=i&-i;return a=(a&42)!==0?1:Es(a),(a&(t.suspendedLanes|i))!==0?0:a}function Es(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Eu(){var t=ie.p;return t!==0?t:(t=window.event,t===void 0?32:cv(t.type))}function Gn(t,i){var a=ie.p;try{return ie.p=t,i()}finally{ie.p=a}}var Kn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Kn,Vt="__reactProps$"+Kn,fi="__reactContainer$"+Kn,ca="__reactEvents$"+Kn,rf="__reactListeners$"+Kn,Tu="__reactHandles$"+Kn,Su="__reactResources$"+Kn,di="__reactMarker$"+Kn;function ha(t){delete t[vt],delete t[Vt],delete t[ca],delete t[rf],delete t[Tu]}function mi(t){var i=t[vt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[fi]||a[vt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=$_(t);t!==null;){if(a=t[vt])return a;t=$_(t)}return i}t=a,a=t.parentNode}return null}function Cn(t){if(t=t[vt]||t[fi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function mn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function pi(t){var i=t[Su];return i||(i=t[Su]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Et(t){t[di]=!0}var Mo=new Set,xo={};function gi(t,i){yi(t,i),yi(t+"Capture",i)}function yi(t,i){for(xo[t]=i,t=0;t<i.length;t++)Mo.add(i[t])}var Vo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ko={},Lo={};function Au(t){return yt.call(Lo,t)?!0:yt.call(ko,t)?!1:Vo.test(t)?Lo[t]=!0:(ko[t]=!0,!1)}function fa(t,i,a){if(Au(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function pn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Tt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dr(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Po(t,i,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ge(t){if(!t._valueTracker){var i=dr(t)?"checked":"value";t._valueTracker=Po(t,i,""+t[i])}}function Ts(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=dr(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function _i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ss=/[\n"\\]/g;function an(t){return t.replace(Ss,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function da(t,i,a,l,h,d,_,S){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+kt(i)):t.value!==""+kt(i)&&(t.value=""+kt(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?Uo(t,_,kt(i)):a!=null?Uo(t,_,kt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+kt(S):t.removeAttribute("name")}function bu(t,i,a,l,h,d,_,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ge(t);return}a=a!=null?""+kt(a):"",i=i!=null?""+kt(i):a,S||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ge(t)}function Uo(t,i,a){i==="number"&&_i(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mr(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function wu(t,i,a){if(i!=null&&(i=""+kt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+kt(a):""}function pr(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if($e(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=kt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Ge(t)}function on(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ru=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zo(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Ru.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function jo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&zo(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&zo(t,d,i[d])}function ma(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(t){return gr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yn(){}var Bo=null;function Nn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,vi=null;function As(t){var i=Cn(t);if(i&&(t=i.stateNode)){var a=t[Vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(da(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+an(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Vt]||null;if(!h)throw Error(s(90));da(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Ts(l)}break e;case"textarea":wu(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&mr(t,!!a.multiple,i,!1)}}}var ga=!1;function _r(t,i,a){if(ga)return t(i,a);ga=!0;try{var l=t(i);return l}finally{if(ga=!1,(yr!==null||vi!==null)&&(Ec(),yr&&(i=yr,t=vi,vi=yr=null,As(i),t)))for(i=0;i<t.length;i++)As(t[i])}}function $n(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=!1;if(Dn)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch{bs=!1}var Ei=null,Ho=null,ws=null;function qo(){if(ws)return ws;var t,i=Ho,a=i.length,l,h="value"in Ei?Ei.value:Ei.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return ws=h.slice(t,1<l?1-l:void 0)}function Rs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ji(){return!0}function Qn(){return!1}function jt(t){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(a=t[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ji:Qn,this.isPropagationStopped=Qn,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),i}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=jt(Bi),vr=T({},Bi,{view:0,detail:0}),Fo=jt(vr),Er,ya,Si,_a=T({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(Er=t.screenX-Si.screenX,ya=t.screenY-Si.screenY):ya=Er=0,Si=t),Er)},movementY:function(t){return"movementY"in t?t.movementY:ya}}),Go=jt(_a),Is=T({},_a,{dataTransfer:0}),Cu=jt(Is),Nu=T({},vr,{relatedTarget:0}),Cs=jt(Nu),Ko=T({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Du=jt(Ko),va=T({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ou=jt(va),Mu=T({},Bi,{data:0}),Ai=jt(Mu),xu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lu(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ku[t])?!!i[t]:!1}function Tr(){return Lu}var tn=T({},vr,{key:function(t){if(t.key){var i=xu[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(t){return t.type==="keypress"?Rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pu=jt(tn),Uu=T({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hi=jt(Uu),c=T({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),g=jt(c),v=T({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=jt(v),L=T({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H=jt(L),ne=T({},Bi,{newState:0,oldState:0}),be=jt(ne),ft=[9,13,27,32],He=Dn&&"CompositionEvent"in window,st=null;Dn&&"documentMode"in document&&(st=document.documentMode);var On=Dn&&"TextEvent"in window&&!st,bi=Dn&&(!He||st&&8<st&&11>=st),Xn=" ",Zn=!1;function Ns(t,i){switch(t){case"keyup":return ft.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ea(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function bA(t,i){switch(t){case"compositionend":return Ea(i);case"keypress":return i.which!==32?null:(Zn=!0,Xn);case"textInput":return t=i.data,t===Xn&&Zn?null:t;default:return null}}function wA(t,i){if(Ta)return t==="compositionend"||!He&&Ns(t,i)?(t=qo(),ws=Ho=Ei=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bi&&i.locale!=="ko"?null:i.data;default:return null}}var RA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!RA[t.type]:i==="textarea"}function Jp(t,i,a,l){yr?vi?vi.push(l):vi=[l]:yr=l,i=Ic(i,"onChange"),0<i.length&&(a=new Ti("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Yo=null,$o=null;function IA(t){V_(t,0)}function zu(t){var i=mn(t);if(Ts(i))return t}function Wp(t,i){if(t==="change")return i}var eg=!1;if(Dn){var sf;if(Dn){var af="oninput"in document;if(!af){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),af=typeof tg.oninput=="function"}sf=af}else sf=!1;eg=sf&&(!document.documentMode||9<document.documentMode)}function ng(){Yo&&(Yo.detachEvent("onpropertychange",ig),$o=Yo=null)}function ig(t){if(t.propertyName==="value"&&zu($o)){var i=[];Jp(i,$o,t,Nn(t)),_r(IA,i)}}function CA(t,i,a){t==="focusin"?(ng(),Yo=i,$o=a,Yo.attachEvent("onpropertychange",ig)):t==="focusout"&&ng()}function NA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu($o)}function DA(t,i){if(t==="click")return zu(i)}function OA(t,i){if(t==="input"||t==="change")return zu(i)}function MA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var gn=typeof Object.is=="function"?Object.is:MA;function Qo(t,i){if(gn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!yt.call(i,h)||!gn(t[h],i[h]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,i){var a=rg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rg(a)}}function ag(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ag(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function og(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_i(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=_i(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var xA=Dn&&"documentMode"in document&&11>=document.documentMode,Sa=null,lf=null,Xo=null,uf=!1;function lg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uf||Sa==null||Sa!==_i(l)||(l=Sa,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&Qo(Xo,l)||(Xo=l,l=Ic(lf,"onSelect"),0<l.length&&(i=new Ti("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Sa)))}function Ds(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Aa={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},cf={},ug={};Dn&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Os(t){if(cf[t])return cf[t];if(!Aa[t])return t;var i=Aa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in ug)return cf[t]=i[a];return t}var cg=Os("animationend"),hg=Os("animationiteration"),fg=Os("animationstart"),VA=Os("transitionrun"),kA=Os("transitionstart"),LA=Os("transitioncancel"),dg=Os("transitionend"),mg=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Jn(t,i){mg.set(t,i),gi(i,[t])}var ju=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mn=[],ba=0,ff=0;function Bu(){for(var t=ba,i=ff=ba=0;i<t;){var a=Mn[i];Mn[i++]=null;var l=Mn[i];Mn[i++]=null;var h=Mn[i];Mn[i++]=null;var d=Mn[i];if(Mn[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&pg(a,h,d)}}function Hu(t,i,a,l){Mn[ba++]=t,Mn[ba++]=i,Mn[ba++]=a,Mn[ba++]=l,ff|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function df(t,i,a,l){return Hu(t,i,a,l),qu(t)}function Ms(t,i){return Hu(t,null,null,i),qu(t)}function pg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-ht(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function qu(t){if(50<_l)throw _l=0,Sd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var wa={};function PA(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,i,a,l){return new PA(t,i,a,l)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,i){var a=t.alternate;return a===null?(a=yn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Fu(t,i,a,l,h,d){var _=0;if(l=t,typeof t=="function")mf(t)&&(_=1);else if(typeof t=="string")_=Hb(t,a,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=yn(31,a,i,h),t.elementType=C,t.lanes=d,t;case J:return xs(a.children,h,d,i);case K:_=8,h|=24;break;case ee:return t=yn(12,a,i,h|2),t.elementType=ee,t.lanes=d,t;case ge:return t=yn(13,a,i,h),t.elementType=ge,t.lanes=d,t;case ve:return t=yn(19,a,i,h),t.elementType=ve,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case se:_=10;break e;case ae:_=9;break e;case de:_=11;break e;case R:_=14;break e;case b:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=yn(_,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function xs(t,i,a,l){return t=yn(7,t,l,i),t.lanes=a,t}function pf(t,i,a){return t=yn(6,t,null,i),t.lanes=a,t}function yg(t){var i=yn(18,null,null,0);return i.stateNode=t,i}function gf(t,i,a){return i=yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var _g=new WeakMap;function xn(t,i){if(typeof t=="object"&&t!==null){var a=_g.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Io(i)},_g.set(t,i),i)}return{value:t,source:i,stack:Io(i)}}var Ra=[],Ia=0,Gu=null,Zo=0,Vn=[],kn=0,Sr=null,wi=1,Ri="";function Fi(t,i){Ra[Ia++]=Zo,Ra[Ia++]=Gu,Gu=t,Zo=i}function vg(t,i,a){Vn[kn++]=wi,Vn[kn++]=Ri,Vn[kn++]=Sr,Sr=t;var l=wi;t=Ri;var h=32-ht(l)-1;l&=~(1<<h),a+=1;var d=32-ht(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,wi=1<<32-ht(i)+h|a<<h|l,Ri=d+t}else wi=1<<d|a<<h|l,Ri=t}function yf(t){t.return!==null&&(Fi(t,1),vg(t,1,0))}function _f(t){for(;t===Gu;)Gu=Ra[--Ia],Ra[Ia]=null,Zo=Ra[--Ia],Ra[Ia]=null;for(;t===Sr;)Sr=Vn[--kn],Vn[kn]=null,Ri=Vn[--kn],Vn[kn]=null,wi=Vn[--kn],Vn[kn]=null}function Eg(t,i){Vn[kn++]=wi,Vn[kn++]=Ri,Vn[kn++]=Sr,wi=i.id,Ri=i.overflow,Sr=t}var Bt=null,tt=null,xe=!1,Ar=null,Ln=!1,vf=Error(s(519));function br(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(xn(i,t)),vf}function Tg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[vt]=t,i[Vt]=l,a){case"dialog":Ne("cancel",i),Ne("close",i);break;case"iframe":case"object":case"embed":Ne("load",i);break;case"video":case"audio":for(a=0;a<El.length;a++)Ne(El[a],i);break;case"source":Ne("error",i);break;case"img":case"image":case"link":Ne("error",i),Ne("load",i);break;case"details":Ne("toggle",i);break;case"input":Ne("invalid",i),bu(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ne("invalid",i);break;case"textarea":Ne("invalid",i),pr(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||U_(i.textContent,a)?(l.popover!=null&&(Ne("beforetoggle",i),Ne("toggle",i)),l.onScroll!=null&&Ne("scroll",i),l.onScrollEnd!=null&&Ne("scrollend",i),l.onClick!=null&&(i.onclick=Yn),i=!0):i=!1,i||br(t,!0)}function Sg(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:Ln=!1;return;case 27:case 3:Ln=!0;return;default:Bt=Bt.return}}function Ca(t){if(t!==Bt)return!1;if(!xe)return Sg(t),xe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pd(t.type,t.memoizedProps)),a=!a),a&&tt&&br(t),Sg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=Y_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=Y_(t)}else i===27?(i=tt,Ur(t.type)?(t=Hd,Hd=null,tt=t):tt=i):tt=Bt?Un(t.stateNode.nextSibling):null;return!0}function Vs(){tt=Bt=null,xe=!1}function Ef(){var t=Ar;return t!==null&&(hn===null?hn=t:hn.push.apply(hn,t),Ar=null),t}function Jo(t){Ar===null?Ar=[t]:Ar.push(t)}var Tf=M(null),ks=null,Gi=null;function wr(t,i,a){re(Tf,i._currentValue),i._currentValue=a}function Ki(t){t._currentValue=Tf.current,Z(Tf)}function Sf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Af(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=h;for(var I=0;I<i.length;I++)if(S.context===i[I]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),Sf(d.return,a,t),l||(_=null);break e}d=S.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Sf(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Na(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var S=h.type;gn(h.pendingProps.value,_.value)||(t!==null?t.push(S):t=[S])}}else if(h===ke.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(wl):t=[wl])}h=h.return}t!==null&&Af(i,t,a,l),i.flags|=262144}function Ku(t){for(t=t.firstContext;t!==null;){if(!gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){ks=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Ag(ks,t)}function Yu(t,i){return ks===null&&Ls(t),Ag(t,i)}function Ag(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Gi=Gi.next=i;return a}var UA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},zA=r.unstable_scheduleCallback,jA=r.unstable_NormalPriority,St={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new UA,data:new Map,refCount:0}}function Wo(t){t.refCount--,t.refCount===0&&zA(jA,function(){t.controller.abort()})}var el=null,wf=0,Da=0,Oa=null;function BA(t,i){if(el===null){var a=el=[];wf=0,Da=Cd(),Oa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return wf++,i.then(bg,bg),i}function bg(){if(--wf===0&&el!==null){Oa!==null&&(Oa.status="fulfilled");var t=el;el=null,Da=0,Oa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function HA(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var wg=Y.S;Y.S=function(t,i){l_=en(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&BA(t,i),wg!==null&&wg(t,i)};var Ps=M(null);function Rf(){var t=Ps.current;return t!==null?t:et.pooledCache}function $u(t,i){i===null?re(Ps,Ps.current):re(Ps,i.pool)}function Rg(){var t=Rf();return t===null?null:{parent:St._currentValue,pool:t}}var Ma=Error(s(460)),If=Error(s(474)),Qu=Error(s(542)),Xu={then:function(){}};function Ig(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Yn,Yn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Dg(t),t;default:if(typeof i.status=="string")i.then(Yn,Yn);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Dg(t),t}throw zs=i,Ma}}function Us(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,Ma):a}}var zs=null;function Ng(){if(zs===null)throw Error(s(459));var t=zs;return zs=null,t}function Dg(t){if(t===Ma||t===Qu)throw Error(s(483))}var xa=null,tl=0;function Zu(t){var i=tl;return tl+=1,xa===null&&(xa=[]),Cg(xa,t,i)}function nl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Ju(t,i){throw i.$$typeof===N?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Og(t){function i(V,D){if(t){var P=V.deletions;P===null?(V.deletions=[D],V.flags|=16):P.push(D)}}function a(V,D){if(!t)return null;for(;D!==null;)i(V,D),D=D.sibling;return null}function l(V){for(var D=new Map;V!==null;)V.key!==null?D.set(V.key,V):D.set(V.index,V),V=V.sibling;return D}function h(V,D){return V=qi(V,D),V.index=0,V.sibling=null,V}function d(V,D,P){return V.index=P,t?(P=V.alternate,P!==null?(P=P.index,P<D?(V.flags|=67108866,D):P):(V.flags|=67108866,D)):(V.flags|=1048576,D)}function _(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function S(V,D,P,$){return D===null||D.tag!==6?(D=pf(P,V.mode,$),D.return=V,D):(D=h(D,P),D.return=V,D)}function I(V,D,P,$){var fe=P.type;return fe===J?G(V,D,P.props.children,$,P.key):D!==null&&(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&Us(fe)===D.type)?(D=h(D,P.props),nl(D,P),D.return=V,D):(D=Fu(P.type,P.key,P.props,null,V.mode,$),nl(D,P),D.return=V,D)}function U(V,D,P,$){return D===null||D.tag!==4||D.stateNode.containerInfo!==P.containerInfo||D.stateNode.implementation!==P.implementation?(D=gf(P,V.mode,$),D.return=V,D):(D=h(D,P.children||[]),D.return=V,D)}function G(V,D,P,$,fe){return D===null||D.tag!==7?(D=xs(P,V.mode,$,fe),D.return=V,D):(D=h(D,P),D.return=V,D)}function Q(V,D,P){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=pf(""+D,V.mode,P),D.return=V,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case z:return P=Fu(D.type,D.key,D.props,null,V.mode,P),nl(P,D),P.return=V,P;case X:return D=gf(D,V.mode,P),D.return=V,D;case b:return D=Us(D),Q(V,D,P)}if($e(D)||k(D))return D=xs(D,V.mode,P,null),D.return=V,D;if(typeof D.then=="function")return Q(V,Zu(D),P);if(D.$$typeof===se)return Q(V,Yu(V,D),P);Ju(V,D)}return null}function j(V,D,P,$){var fe=D!==null?D.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return fe!==null?null:S(V,D,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case z:return P.key===fe?I(V,D,P,$):null;case X:return P.key===fe?U(V,D,P,$):null;case b:return P=Us(P),j(V,D,P,$)}if($e(P)||k(P))return fe!==null?null:G(V,D,P,$,null);if(typeof P.then=="function")return j(V,D,Zu(P),$);if(P.$$typeof===se)return j(V,D,Yu(V,P),$);Ju(V,P)}return null}function q(V,D,P,$,fe){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return V=V.get(P)||null,S(D,V,""+$,fe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return V=V.get($.key===null?P:$.key)||null,I(D,V,$,fe);case X:return V=V.get($.key===null?P:$.key)||null,U(D,V,$,fe);case b:return $=Us($),q(V,D,P,$,fe)}if($e($)||k($))return V=V.get(P)||null,G(D,V,$,fe,null);if(typeof $.then=="function")return q(V,D,P,Zu($),fe);if($.$$typeof===se)return q(V,D,P,Yu(D,$),fe);Ju(D,$)}return null}function ue(V,D,P,$){for(var fe=null,je=null,ce=D,Ie=D=0,Oe=null;ce!==null&&Ie<P.length;Ie++){ce.index>Ie?(Oe=ce,ce=null):Oe=ce.sibling;var Be=j(V,ce,P[Ie],$);if(Be===null){ce===null&&(ce=Oe);break}t&&ce&&Be.alternate===null&&i(V,ce),D=d(Be,D,Ie),je===null?fe=Be:je.sibling=Be,je=Be,ce=Oe}if(Ie===P.length)return a(V,ce),xe&&Fi(V,Ie),fe;if(ce===null){for(;Ie<P.length;Ie++)ce=Q(V,P[Ie],$),ce!==null&&(D=d(ce,D,Ie),je===null?fe=ce:je.sibling=ce,je=ce);return xe&&Fi(V,Ie),fe}for(ce=l(ce);Ie<P.length;Ie++)Oe=q(ce,V,Ie,P[Ie],$),Oe!==null&&(t&&Oe.alternate!==null&&ce.delete(Oe.key===null?Ie:Oe.key),D=d(Oe,D,Ie),je===null?fe=Oe:je.sibling=Oe,je=Oe);return t&&ce.forEach(function(qr){return i(V,qr)}),xe&&Fi(V,Ie),fe}function ye(V,D,P,$){if(P==null)throw Error(s(151));for(var fe=null,je=null,ce=D,Ie=D=0,Oe=null,Be=P.next();ce!==null&&!Be.done;Ie++,Be=P.next()){ce.index>Ie?(Oe=ce,ce=null):Oe=ce.sibling;var qr=j(V,ce,Be.value,$);if(qr===null){ce===null&&(ce=Oe);break}t&&ce&&qr.alternate===null&&i(V,ce),D=d(qr,D,Ie),je===null?fe=qr:je.sibling=qr,je=qr,ce=Oe}if(Be.done)return a(V,ce),xe&&Fi(V,Ie),fe;if(ce===null){for(;!Be.done;Ie++,Be=P.next())Be=Q(V,Be.value,$),Be!==null&&(D=d(Be,D,Ie),je===null?fe=Be:je.sibling=Be,je=Be);return xe&&Fi(V,Ie),fe}for(ce=l(ce);!Be.done;Ie++,Be=P.next())Be=q(ce,V,Ie,Be.value,$),Be!==null&&(t&&Be.alternate!==null&&ce.delete(Be.key===null?Ie:Be.key),D=d(Be,D,Ie),je===null?fe=Be:je.sibling=Be,je=Be);return t&&ce.forEach(function(Wb){return i(V,Wb)}),xe&&Fi(V,Ie),fe}function Je(V,D,P,$){if(typeof P=="object"&&P!==null&&P.type===J&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case z:e:{for(var fe=P.key;D!==null;){if(D.key===fe){if(fe=P.type,fe===J){if(D.tag===7){a(V,D.sibling),$=h(D,P.props.children),$.return=V,V=$;break e}}else if(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&Us(fe)===D.type){a(V,D.sibling),$=h(D,P.props),nl($,P),$.return=V,V=$;break e}a(V,D);break}else i(V,D);D=D.sibling}P.type===J?($=xs(P.props.children,V.mode,$,P.key),$.return=V,V=$):($=Fu(P.type,P.key,P.props,null,V.mode,$),nl($,P),$.return=V,V=$)}return _(V);case X:e:{for(fe=P.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===P.containerInfo&&D.stateNode.implementation===P.implementation){a(V,D.sibling),$=h(D,P.children||[]),$.return=V,V=$;break e}else{a(V,D);break}else i(V,D);D=D.sibling}$=gf(P,V.mode,$),$.return=V,V=$}return _(V);case b:return P=Us(P),Je(V,D,P,$)}if($e(P))return ue(V,D,P,$);if(k(P)){if(fe=k(P),typeof fe!="function")throw Error(s(150));return P=fe.call(P),ye(V,D,P,$)}if(typeof P.then=="function")return Je(V,D,Zu(P),$);if(P.$$typeof===se)return Je(V,D,Yu(V,P),$);Ju(V,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,D!==null&&D.tag===6?(a(V,D.sibling),$=h(D,P),$.return=V,V=$):(a(V,D),$=pf(P,V.mode,$),$.return=V,V=$),_(V)):a(V,D)}return function(V,D,P,$){try{tl=0;var fe=Je(V,D,P,$);return xa=null,fe}catch(ce){if(ce===Ma||ce===Qu)throw ce;var je=yn(29,ce,null,V.mode);return je.lanes=$,je.return=V,je}finally{}}}var js=Og(!0),Mg=Og(!1),Rr=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ir(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=qu(t),pg(t,null,a),i}return Hu(t,l,i,a),qu(t)}function il(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Do(t,a)}}function Df(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Of=!1;function rl(){if(Of){var t=Oa;if(t!==null)throw t}}function sl(t,i,a,l){Of=!1;var h=t.updateQueue;Rr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var I=S,U=I.next;I.next=null,_===null?d=U:_.next=U,_=I;var G=t.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==_&&(S===null?G.firstBaseUpdate=U:S.next=U,G.lastBaseUpdate=I))}if(d!==null){var Q=h.baseState;_=0,G=U=I=null,S=d;do{var j=S.lane&-536870913,q=j!==S.lane;if(q?(De&j)===j:(l&j)===j){j!==0&&j===Da&&(Of=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ue=t,ye=S;j=i;var Je=a;switch(ye.tag){case 1:if(ue=ye.payload,typeof ue=="function"){Q=ue.call(Je,Q,j);break e}Q=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ye.payload,j=typeof ue=="function"?ue.call(Je,Q,j):ue,j==null)break e;Q=T({},Q,j);break e;case 2:Rr=!0}}j=S.callback,j!==null&&(t.flags|=64,q&&(t.flags|=8192),q=h.callbacks,q===null?h.callbacks=[j]:q.push(j))}else q={lane:j,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(U=G=q,I=Q):G=G.next=q,_|=j;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;q=S,S=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);G===null&&(I=Q),h.baseState=I,h.firstBaseUpdate=U,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),xr|=_,t.lanes=_,t.memoizedState=Q}}function xg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Vg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xg(a[t],i)}var Va=M(null),Wu=M(0);function kg(t,i){t=tr,re(Wu,t),re(Va,i),tr=t|i.baseLanes}function Mf(){re(Wu,tr),re(Va,Va.current)}function xf(){tr=Wu.current,Z(Va),Z(Wu)}var _n=M(null),Pn=null;function Nr(t){var i=t.alternate;re(dt,dt.current&1),re(_n,t),Pn===null&&(i===null||Va.current!==null||i.memoizedState!==null)&&(Pn=t)}function Vf(t){re(dt,dt.current),re(_n,t),Pn===null&&(Pn=t)}function Lg(t){t.tag===22?(re(dt,dt.current),re(_n,t),Pn===null&&(Pn=t)):Dr()}function Dr(){re(dt,dt.current),re(_n,_n.current)}function vn(t){Z(_n),Pn===t&&(Pn=null),Z(dt)}var dt=M(0);function ec(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jd(a)||Bd(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,we=null,Xe=null,At=null,tc=!1,ka=!1,Bs=!1,nc=0,al=0,La=null,qA=0;function ut(){throw Error(s(321))}function kf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!gn(t[a],i[a]))return!1;return!0}function Lf(t,i,a,l,h,d){return Yi=d,we=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=t===null||t.memoizedState===null?vy:Zf,Bs=!1,d=a(l,h),Bs=!1,ka&&(d=Ug(i,a,l,h)),Pg(t),d}function Pg(t){Y.H=ul;var i=Xe!==null&&Xe.next!==null;if(Yi=0,At=Xe=we=null,tc=!1,al=0,La=null,i)throw Error(s(300));t===null||bt||(t=t.dependencies,t!==null&&Ku(t)&&(bt=!0))}function Ug(t,i,a,l){we=t;var h=0;do{if(ka&&(La=null),al=0,ka=!1,25<=h)throw Error(s(301));if(h+=1,At=Xe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=Ey,d=i(a,l)}while(ka);return d}function FA(){var t=Y.H,i=t.useState()[0];return i=typeof i.then=="function"?ol(i):i,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(we.flags|=1024),i}function Pf(){var t=nc!==0;return nc=0,t}function Uf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function zf(t){if(tc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}tc=!1}Yi=0,At=Xe=we=null,ka=!1,al=nc=0,La=null}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?we.memoizedState=At=t:At=At.next=t,At}function mt(){if(Xe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var i=At===null?we.memoizedState:At.next;if(i!==null)At=i,Xe=t;else{if(t===null)throw we.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},At===null?we.memoizedState=At=t:At=At.next=t}return At}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(t){var i=al;return al+=1,La===null&&(La=[]),t=Cg(La,t,i),i=we,(At===null?i.memoizedState:At.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?vy:Zf),t}function rc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ol(t);if(t.$$typeof===se)return Ht(t)}throw Error(s(438,String(t)))}function jf(t){var i=null,a=we.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ic(),we.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=x;return i.index++,a}function $i(t,i){return typeof i=="function"?i(t):i}function sc(t){var i=mt();return Bf(i,Xe,t)}function Bf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var S=_=null,I=null,U=i,G=!1;do{var Q=U.lane&-536870913;if(Q!==U.lane?(De&Q)===Q:(Yi&Q)===Q){var j=U.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),Q===Da&&(G=!0);else if((Yi&j)===j){U=U.next,j===Da&&(G=!0);continue}else Q={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(S=I=Q,_=d):I=I.next=Q,we.lanes|=j,xr|=j;Q=U.action,Bs&&a(d,Q),d=U.hasEagerState?U.eagerState:a(d,Q)}else j={lane:Q,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(S=I=j,_=d):I=I.next=j,we.lanes|=Q,xr|=Q;U=U.next}while(U!==null&&U!==i);if(I===null?_=d:I.next=S,!gn(d,t.memoizedState)&&(bt=!0,G&&(a=Oa,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Hf(t){var i=mt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);gn(d,i.memoizedState)||(bt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function zg(t,i,a){var l=we,h=mt(),d=xe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!gn((Xe||h).memoizedState,a);if(_&&(h.memoizedState=a,bt=!0),h=h.queue,Gf(Hg.bind(null,l,h,t),[t]),h.getSnapshot!==i||_||At!==null&&At.memoizedState.tag&1){if(l.flags|=2048,Pa(9,{destroy:void 0},Bg.bind(null,l,h,a,i),null),et===null)throw Error(s(349));d||(Yi&127)!==0||jg(l,i,a)}return a}function jg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=we.updateQueue,i===null?(i=ic(),we.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Bg(t,i,a,l){i.value=a,i.getSnapshot=l,qg(i)&&Fg(t)}function Hg(t,i,a){return a(function(){qg(i)&&Fg(t)})}function qg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!gn(t,a)}catch{return!0}}function Fg(t){var i=Ms(t,2);i!==null&&fn(i,t,2)}function qf(t){var i=nn();if(typeof t=="function"){var a=t;if(t=a(),Bs){In(!0);try{a()}finally{In(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},i}function Gg(t,i,a,l){return t.baseState=a,Bf(t,Xe,typeof l=="function"?l:$i)}function GA(t,i,a,l,h){if(lc(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};Y.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Kg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Kg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=Y.T,_={};Y.T=_;try{var S=a(h,l),I=Y.S;I!==null&&I(_,S),Yg(t,i,S)}catch(U){Ff(t,i,U)}finally{d!==null&&_.types!==null&&(d.types=_.types),Y.T=d}}else try{d=a(h,l),Yg(t,i,d)}catch(U){Ff(t,i,U)}}function Yg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){$g(t,i,l)},function(l){return Ff(t,i,l)}):$g(t,i,a)}function $g(t,i,a){i.status="fulfilled",i.value=a,Qg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Kg(t,a)))}function Ff(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Qg(i),i=i.next;while(i!==l)}t.action=null}function Qg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Xg(t,i){return i}function Zg(t,i){if(xe){var a=et.formState;if(a!==null){e:{var l=we;if(xe){if(tt){t:{for(var h=tt,d=Ln;h.nodeType!==8;){if(!d){h=null;break t}if(h=Un(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){tt=Un(h.nextSibling),l=h.data==="F!";break e}}br(l)}l=!1}l&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xg,lastRenderedState:i},a.queue=l,a=gy.bind(null,we,l),l.dispatch=a,l=qf(!1),d=Xf.bind(null,we,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=GA.bind(null,we,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Jg(t){var i=mt();return Wg(i,Xe,t)}function Wg(t,i,a){if(i=Bf(t,i,Xg)[0],t=sc($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ol(i)}catch(_){throw _===Ma?Qu:_}else l=i;i=mt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(we.flags|=2048,Pa(9,{destroy:void 0},KA.bind(null,h,a),null)),[l,d,t]}function KA(t,i){t.action=i}function ey(t){var i=mt(),a=Xe;if(a!==null)return Wg(i,a,t);mt(),i=i.memoizedState,a=mt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Pa(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=we.updateQueue,i===null&&(i=ic(),we.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function ty(){return mt().memoizedState}function ac(t,i,a,l){var h=nn();we.flags|=t,h.memoizedState=Pa(1|i,{destroy:void 0},a,l===void 0?null:l)}function oc(t,i,a,l){var h=mt();l=l===void 0?null:l;var d=h.memoizedState.inst;Xe!==null&&l!==null&&kf(l,Xe.memoizedState.deps)?h.memoizedState=Pa(i,d,a,l):(we.flags|=t,h.memoizedState=Pa(1|i,d,a,l))}function ny(t,i){ac(8390656,8,t,i)}function Gf(t,i){oc(2048,8,t,i)}function YA(t){we.flags|=4;var i=we.updateQueue;if(i===null)i=ic(),we.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function iy(t){var i=mt().memoizedState;return YA({ref:i,nextImpl:t}),function(){if((qe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function ry(t,i){return oc(4,2,t,i)}function sy(t,i){return oc(4,4,t,i)}function ay(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function oy(t,i,a){a=a!=null?a.concat([t]):null,oc(4,4,ay.bind(null,i,t),a)}function Kf(){}function ly(t,i){var a=mt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&kf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function uy(t,i){var a=mt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&kf(i,l[1]))return l[0];if(l=t(),Bs){In(!0);try{t()}finally{In(!1)}}return a.memoizedState=[l,i],l}function Yf(t,i,a){return a===void 0||(Yi&1073741824)!==0&&(De&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=c_(),we.lanes|=t,xr|=t,a)}function cy(t,i,a,l){return gn(a,i)?a:Va.current!==null?(t=Yf(t,a,l),gn(t,i)||(bt=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&(De&261930)===0?(bt=!0,t.memoizedState=a):(t=c_(),we.lanes|=t,xr|=t,i)}function hy(t,i,a,l,h){var d=ie.p;ie.p=d!==0&&8>d?d:8;var _=Y.T,S={};Y.T=S,Xf(t,!1,i,a);try{var I=h(),U=Y.S;if(U!==null&&U(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var G=HA(I,l);ll(t,i,G,Sn(t))}else ll(t,i,l,Sn(t))}catch(Q){ll(t,i,{then:function(){},status:"rejected",reason:Q},Sn())}finally{ie.p=d,_!==null&&S.types!==null&&(_.types=S.types),Y.T=_}}function $A(){}function $f(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=fy(t).queue;hy(t,h,i,me,a===null?$A:function(){return dy(t),a(l)})}function fy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function dy(t){var i=fy(t);i.next===null&&(i=t.alternate.memoizedState),ll(t,i.next.queue,{},Sn())}function Qf(){return Ht(wl)}function my(){return mt().memoizedState}function py(){return mt().memoizedState}function QA(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();t=Ir(a);var l=Cr(i,t,a);l!==null&&(fn(l,i,a),il(l,i,a)),i={cache:bf()},t.payload=i;return}i=i.return}}function XA(t,i,a){var l=Sn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(t)?yy(i,a):(a=df(t,i,a,l),a!==null&&(fn(a,t,l),_y(a,i,l)))}function gy(t,i,a){var l=Sn();ll(t,i,a,l)}function ll(t,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(t))yy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,S=d(_,a);if(h.hasEagerState=!0,h.eagerState=S,gn(S,_))return Hu(t,i,h,0),et===null&&Bu(),!1}catch{}finally{}if(a=df(t,i,h,l),a!==null)return fn(a,t,l),_y(a,i,l),!0}return!1}function Xf(t,i,a,l){if(l={lane:2,revertLane:Cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},lc(t)){if(i)throw Error(s(479))}else i=df(t,a,l,2),i!==null&&fn(i,t,2)}function lc(t){var i=t.alternate;return t===we||i!==null&&i===we}function yy(t,i){ka=tc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function _y(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Do(t,a)}}var ul={readContext:Ht,use:rc,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};ul.useEffectEvent=ut;var vy={readContext:Ht,use:rc,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:Ht,useEffect:ny,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,ac(4194308,4,ay.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ac(4194308,4,t,i)},useInsertionEffect:function(t,i){ac(4,2,t,i)},useMemo:function(t,i){var a=nn();i=i===void 0?null:i;var l=t();if(Bs){In(!0);try{t()}finally{In(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=nn();if(a!==void 0){var h=a(i);if(Bs){In(!0);try{a(i)}finally{In(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=XA.bind(null,we,t),[l.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:function(t){t=qf(t);var i=t.queue,a=gy.bind(null,we,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(t,i){var a=nn();return Yf(a,t,i)},useTransition:function(){var t=qf(!1);return t=hy.bind(null,we,t.queue,!0,!1),nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=we,h=nn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),et===null)throw Error(s(349));(De&127)!==0||jg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ny(Hg.bind(null,l,d,t),[t]),l.flags|=2048,Pa(9,{destroy:void 0},Bg.bind(null,l,d,a,i),null),a},useId:function(){var t=nn(),i=et.identifierPrefix;if(xe){var a=Ri,l=wi;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=nc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=qA++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Qf,useFormState:Zg,useActionState:Zg,useOptimistic:function(t){var i=nn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Xf.bind(null,we,!0,a),a.dispatch=i,[t,i]},useMemoCache:jf,useCacheRefresh:function(){return nn().memoizedState=QA.bind(null,we)},useEffectEvent:function(t){var i=nn(),a={impl:t};return i.memoizedState=a,function(){if((qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zf={readContext:Ht,use:rc,useCallback:ly,useContext:Ht,useEffect:Gf,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:sy,useMemo:uy,useReducer:sc,useRef:ty,useState:function(){return sc($i)},useDebugValue:Kf,useDeferredValue:function(t,i){var a=mt();return cy(a,Xe.memoizedState,t,i)},useTransition:function(){var t=sc($i)[0],i=mt().memoizedState;return[typeof t=="boolean"?t:ol(t),i]},useSyncExternalStore:zg,useId:my,useHostTransitionStatus:Qf,useFormState:Jg,useActionState:Jg,useOptimistic:function(t,i){var a=mt();return Gg(a,Xe,t,i)},useMemoCache:jf,useCacheRefresh:py};Zf.useEffectEvent=iy;var Ey={readContext:Ht,use:rc,useCallback:ly,useContext:Ht,useEffect:Gf,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:sy,useMemo:uy,useReducer:Hf,useRef:ty,useState:function(){return Hf($i)},useDebugValue:Kf,useDeferredValue:function(t,i){var a=mt();return Xe===null?Yf(a,t,i):cy(a,Xe.memoizedState,t,i)},useTransition:function(){var t=Hf($i)[0],i=mt().memoizedState;return[typeof t=="boolean"?t:ol(t),i]},useSyncExternalStore:zg,useId:my,useHostTransitionStatus:Qf,useFormState:ey,useActionState:ey,useOptimistic:function(t,i){var a=mt();return Xe!==null?Gg(a,Xe,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jf,useCacheRefresh:py};Ey.useEffectEvent=iy;function Jf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=Ir(l);h.payload=i,a!=null&&(h.callback=a),i=Cr(t,h,l),i!==null&&(fn(i,t,l),il(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=Ir(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Cr(t,h,l),i!==null&&(fn(i,t,l),il(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Sn(),l=Ir(a);l.tag=2,i!=null&&(l.callback=i),i=Cr(t,l,a),i!==null&&(fn(i,t,a),il(i,t,a))}};function Ty(t,i,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!Qo(a,l)||!Qo(h,d):!0}function Sy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Wf.enqueueReplaceState(i,i.state,null)}function Hs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function Ay(t){ju(t)}function by(t){console.error(t)}function wy(t){ju(t)}function uc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ry(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ed(t,i,a){return a=Ir(a),a.tag=3,a.payload={element:null},a.callback=function(){uc(t,i)},a}function Iy(t){return t=Ir(t),t.tag=3,t}function Cy(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Ry(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ry(i,a,l),typeof h!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function ZA(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Na(i,a,h,!0),a=_n.current,a!==null){switch(a.tag){case 31:case 13:return Pn===null?Tc():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Xu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),wd(t,l,h)),!1;case 22:return a.flags|=65536,l===Xu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),wd(t,l,h)),!1}throw Error(s(435,a.tag))}return wd(t,l,h),Tc(),!1}if(xe)return i=_n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==vf&&(t=Error(s(422),{cause:l}),Jo(xn(t,a)))):(l!==vf&&(i=Error(s(423),{cause:l}),Jo(xn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=xn(l,a),h=ed(t.stateNode,l,h),Df(t,h),ct!==4&&(ct=2)),!1;var d=Error(s(520),{cause:l});if(d=xn(d,a),yl===null?yl=[d]:yl.push(d),ct!==4&&(ct=2),i===null)return!0;l=xn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=ed(a.stateNode,l,t),Df(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Vr===null||!Vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Iy(h),Cy(h,t,a,l),Df(a,h),!1}a=a.return}while(a!==null);return!1}var td=Error(s(461)),bt=!1;function qt(t,i,a,l){i.child=t===null?Mg(i,null,a,l):js(i,t.child,a,l)}function Ny(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var S in l)S!=="ref"&&(_[S]=l[S])}else _=l;return Ls(i),l=Lf(t,i,a,_,d,h),S=Pf(),t!==null&&!bt?(Uf(t,i,h),Qi(t,i,h)):(xe&&S&&yf(i),i.flags|=1,qt(t,i,l,h),i.child)}function Dy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!mf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Oy(t,i,d,l,h)):(t=Fu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!ud(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(_,l)&&t.ref===i.ref)return Qi(t,i,h)}return i.flags|=1,t=qi(d,l),t.ref=i.ref,t.return=i,i.child=t}function Oy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Qo(d,l)&&t.ref===i.ref)if(bt=!1,i.pendingProps=l=d,ud(t,h))(t.flags&131072)!==0&&(bt=!0);else return i.lanes=t.lanes,Qi(t,i,h)}return nd(t,i,a,l,h)}function My(t,i,a,l){var h=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(l=i.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return xy(t,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&$u(i,d!==null?d.cachePool:null),d!==null?kg(i,d):Mf(),Lg(i);else return l=i.lanes=536870912,xy(t,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?($u(i,d.cachePool),kg(i,d),Dr(),i.memoizedState=null):(t!==null&&$u(i,null),Mf(),Dr());return qt(t,i,h,a),i.child}function cl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function xy(t,i,a,l,h){var d=Rf();return d=d===null?null:{parent:St._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},t!==null&&$u(i,null),Mf(),Lg(i),t!==null&&Na(t,i,l,!0),i.childLanes=h,null}function cc(t,i){return i=fc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Vy(t,i,a){return js(i,t.child,null,a),t=cc(i,i.pendingProps),t.flags|=2,vn(i),i.memoizedState=null,t}function JA(t,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(xe){if(l.mode==="hidden")return t=cc(i,l),i.lanes=536870912,cl(null,t);if(Vf(i),(t=tt)?(t=K_(t,Ln),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Sr!==null?{id:wi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=yg(t),a.return=i,i.child=a,Bt=i,tt=null)):t=null,t===null)throw br(i);return i.lanes=536870912,null}return cc(i,l)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(Vf(i),h)if(i.flags&256)i.flags&=-257,i=Vy(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(bt||Na(t,i,a,!1),h=(a&t.childLanes)!==0,bt||h){if(l=et,l!==null&&(_=Oo(l,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Ms(t,_),fn(l,t,_),td;Tc(),i=Vy(t,i,a)}else t=d.treeContext,tt=Un(_.nextSibling),Bt=i,xe=!0,Ar=null,Ln=!1,t!==null&&Eg(i,t),i=cc(i,l),i.flags|=4096;return i}return t=qi(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function hc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function nd(t,i,a,l,h){return Ls(i),a=Lf(t,i,a,l,void 0,h),l=Pf(),t!==null&&!bt?(Uf(t,i,h),Qi(t,i,h)):(xe&&l&&yf(i),i.flags|=1,qt(t,i,a,h),i.child)}function ky(t,i,a,l,h,d){return Ls(i),i.updateQueue=null,a=Ug(i,l,a,h),Pg(t),l=Pf(),t!==null&&!bt?(Uf(t,i,d),Qi(t,i,d)):(xe&&l&&yf(i),i.flags|=1,qt(t,i,a,d),i.child)}function Ly(t,i,a,l,h){if(Ls(i),i.stateNode===null){var d=wa,_=a.contextType;typeof _=="object"&&_!==null&&(d=Ht(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Wf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Cf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?Ht(_):wa,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Jf(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Wf.enqueueReplaceState(d,d.state,null),sl(i,l,d,h),rl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var S=i.memoizedProps,I=Hs(a,S);d.props=I;var U=d.context,G=a.contextType;_=wa,typeof G=="object"&&G!==null&&(_=Ht(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=i.pendingProps!==S,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||U!==_)&&Sy(i,d,l,_),Rr=!1;var j=i.memoizedState;d.state=j,sl(i,l,d,h),rl(),U=i.memoizedState,S||j!==U||Rr?(typeof Q=="function"&&(Jf(i,a,Q,l),U=i.memoizedState),(I=Rr||Ty(i,a,I,l,j,U,_))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=U),d.props=l,d.state=U,d.context=_,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Nf(t,i),_=i.memoizedProps,G=Hs(a,_),d.props=G,Q=i.pendingProps,j=d.context,U=a.contextType,I=wa,typeof U=="object"&&U!==null&&(I=Ht(U)),S=a.getDerivedStateFromProps,(U=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||j!==I)&&Sy(i,d,l,I),Rr=!1,j=i.memoizedState,d.state=j,sl(i,l,d,h),rl();var q=i.memoizedState;_!==Q||j!==q||Rr||t!==null&&t.dependencies!==null&&Ku(t.dependencies)?(typeof S=="function"&&(Jf(i,a,S,l),q=i.memoizedState),(G=Rr||Ty(i,a,G,l,j,q,I)||t!==null&&t.dependencies!==null&&Ku(t.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=I,l=G):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,hc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=js(i,t.child,null,h),i.child=js(i,null,a,h)):qt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Qi(t,i,h),t}function Py(t,i,a,l){return Vs(),i.flags|=256,qt(t,i,a,l),i.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(t){return{baseLanes:t,cachePool:Rg()}}function sd(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Tn),t}function Uy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(dt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(xe){if(h?Nr(i):Dr(),(t=tt)?(t=K_(t,Ln),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Sr!==null?{id:wi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=yg(t),a.return=i,i.child=a,Bt=i,tt=null)):t=null,t===null)throw br(i);return Bd(t)?i.lanes=32:i.lanes=536870912,null}var S=l.children;return l=l.fallback,h?(Dr(),h=i.mode,S=fc({mode:"hidden",children:S},h),l=xs(l,h,a,null),S.return=i,l.return=i,S.sibling=l,i.child=S,l=i.child,l.memoizedState=rd(a),l.childLanes=sd(t,_,a),i.memoizedState=id,cl(null,l)):(Nr(i),ad(i,S))}var I=t.memoizedState;if(I!==null&&(S=I.dehydrated,S!==null)){if(d)i.flags&256?(Nr(i),i.flags&=-257,i=od(t,i,a)):i.memoizedState!==null?(Dr(),i.child=t.child,i.flags|=128,i=null):(Dr(),S=l.fallback,h=i.mode,l=fc({mode:"visible",children:l.children},h),S=xs(S,h,a,null),S.flags|=2,l.return=i,S.return=i,l.sibling=S,i.child=l,js(i,t.child,null,a),l=i.child,l.memoizedState=rd(a),l.childLanes=sd(t,_,a),i.memoizedState=id,i=cl(null,l));else if(Nr(i),Bd(S)){if(_=S.nextSibling&&S.nextSibling.dataset,_)var U=_.dgst;_=U,l=Error(s(419)),l.stack="",l.digest=_,Jo({value:l,source:null,stack:null}),i=od(t,i,a)}else if(bt||Na(t,i,a,!1),_=(a&t.childLanes)!==0,bt||_){if(_=et,_!==null&&(l=Oo(_,a),l!==0&&l!==I.retryLane))throw I.retryLane=l,Ms(t,l),fn(_,t,l),td;jd(S)||Tc(),i=od(t,i,a)}else jd(S)?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,tt=Un(S.nextSibling),Bt=i,xe=!0,Ar=null,Ln=!1,t!==null&&Eg(i,t),i=ad(i,l.children),i.flags|=4096);return i}return h?(Dr(),S=l.fallback,h=i.mode,I=t.child,U=I.sibling,l=qi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,U!==null?S=qi(U,S):(S=xs(S,h,a,null),S.flags|=2),S.return=i,l.return=i,l.sibling=S,i.child=l,cl(null,l),l=i.child,S=t.child.memoizedState,S===null?S=rd(a):(h=S.cachePool,h!==null?(I=St._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=Rg(),S={baseLanes:S.baseLanes|a,cachePool:h}),l.memoizedState=S,l.childLanes=sd(t,_,a),i.memoizedState=id,cl(t.child,l)):(Nr(i),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function ad(t,i){return i=fc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function fc(t,i){return t=yn(22,t,null,i),t.lanes=0,t}function od(t,i,a){return js(i,t.child,null,a),t=ad(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function zy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sf(t.return,i,a)}function ld(t,i,a,l,h,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function jy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var _=dt.current,S=(_&2)!==0;if(S?(_=_&1|2,i.flags|=128):_&=1,re(dt,_),qt(t,i,l,a),l=xe?Zo:0,!S&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zy(t,a,i);else if(t.tag===19)zy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&ec(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ld(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&ec(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}ld(i,!0,a,null,d,l);break;case"together":ld(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Qi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),xr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Na(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=qi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function ud(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ku(t)))}function WA(t,i,a){switch(i.tag){case 3:Nt(i,i.stateNode.containerInfo),wr(i,St,t.memoizedState.cache),Vs();break;case 27:case 5:ms(i);break;case 4:Nt(i,i.stateNode.containerInfo);break;case 10:wr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Vf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Nr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Uy(t,i,a):(Nr(i),t=Qi(t,i,a),t!==null?t.sibling:null);Nr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Na(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return jy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(dt,dt.current),l)break;return null;case 22:return i.lanes=0,My(t,i,a,i.pendingProps);case 24:wr(i,St,t.memoizedState.cache)}return Qi(t,i,a)}function By(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)bt=!0;else{if(!ud(t,a)&&(i.flags&128)===0)return bt=!1,WA(t,i,a);bt=(t.flags&131072)!==0}else bt=!1,xe&&(i.flags&1048576)!==0&&vg(i,Zo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Us(i.elementType),i.type=t,typeof t=="function")mf(t)?(l=Hs(t,l),i.tag=1,i=Ly(null,i,t,l,a)):(i.tag=0,i=nd(null,i,t,l,a));else{if(t!=null){var h=t.$$typeof;if(h===de){i.tag=11,i=Ny(null,i,t,l,a);break e}else if(h===R){i.tag=14,i=Dy(null,i,t,l,a);break e}}throw i=We(t)||t,Error(s(306,i,""))}}return i;case 0:return nd(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Hs(l,i.pendingProps),Ly(t,i,l,h,a);case 3:e:{if(Nt(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Nf(t,i),sl(i,l,null,a);var _=i.memoizedState;if(l=_.cache,wr(i,St,l),l!==d.cache&&Af(i,[St],a,!0),rl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Py(t,i,l,a);break e}else if(l!==h){h=xn(Error(s(424)),i),Jo(h),i=Py(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tt=Un(t.firstChild),Bt=i,xe=!0,Ar=null,Ln=!0,a=Mg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),l===h){i=Qi(t,i,a);break e}qt(t,i,l,a)}i=i.child}return i;case 26:return hc(t,i),t===null?(a=J_(i.type,null,i.pendingProps,null))?i.memoizedState=a:xe||(a=i.type,t=i.pendingProps,l=Cc(Re.current).createElement(a),l[vt]=i,l[Vt]=t,Ft(l,a,t),Et(l),i.stateNode=l):i.memoizedState=J_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ms(i),t===null&&xe&&(l=i.stateNode=Q_(i.type,i.pendingProps,Re.current),Bt=i,Ln=!0,h=tt,Ur(i.type)?(Hd=h,tt=Un(l.firstChild)):tt=h),qt(t,i,i.pendingProps.children,a),hc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&xe&&((h=l=tt)&&(l=Nb(l,i.type,i.pendingProps,Ln),l!==null?(i.stateNode=l,Bt=i,tt=Un(l.firstChild),Ln=!1,h=!0):h=!1),h||br(i)),ms(i),h=i.type,d=i.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,Pd(h,d)?l=null:_!==null&&Pd(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Lf(t,i,FA,null,null,a),wl._currentValue=h),hc(t,i),qt(t,i,l,a),i.child;case 6:return t===null&&xe&&((t=a=tt)&&(a=Db(a,i.pendingProps,Ln),a!==null?(i.stateNode=a,Bt=i,tt=null,t=!0):t=!1),t||br(i)),null;case 13:return Uy(t,i,a);case 4:return Nt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=js(i,null,l,a):qt(t,i,l,a),i.child;case 11:return Ny(t,i,i.type,i.pendingProps,a);case 7:return qt(t,i,i.pendingProps,a),i.child;case 8:return qt(t,i,i.pendingProps.children,a),i.child;case 12:return qt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,wr(i,i.type,l.value),qt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ls(i),h=Ht(h),l=l(h),i.flags|=1,qt(t,i,l,a),i.child;case 14:return Dy(t,i,i.type,i.pendingProps,a);case 15:return Oy(t,i,i.type,i.pendingProps,a);case 19:return jy(t,i,a);case 31:return JA(t,i,a);case 22:return My(t,i,a,i.pendingProps);case 24:return Ls(i),l=Ht(St),t===null?(h=Rf(),h===null&&(h=et,d=bf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Cf(i),wr(i,St,h)):((t.lanes&a)!==0&&(Nf(t,i),sl(i,null,null,a),rl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),wr(i,St,l)):(l=d.cache,wr(i,St,l),l!==h.cache&&Af(i,[St],a,!0))),qt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Xi(t){t.flags|=4}function cd(t,i,a,l,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(m_())t.flags|=8192;else throw zs=Xu,If}else t.flags&=-16777217}function Hy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!iv(i))if(m_())t.flags|=8192;else throw zs=Xu,If}function dc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?vu():536870912,t.lanes|=i,Ba|=i)}function hl(t,i){if(!xe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function eb(t,i,a){var l=i.pendingProps;switch(_f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(St),rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ca(i)?Xi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ef())),nt(i),null;case 26:var h=i.type,d=i.memoizedState;return t===null?(Xi(i),d!==null?(nt(i),Hy(i,d)):(nt(i),cd(i,h,null,l,a))):d?d!==t.memoizedState?(Xi(i),nt(i),Hy(i,d)):(nt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Xi(i),nt(i),cd(i,h,t,l,a)),null;case 27:if(aa(i),a=Re.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}t=oe.current,Ca(i)?Tg(i):(t=Q_(h,l,a),i.stateNode=t,Xi(i))}return nt(i),null;case 5:if(aa(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}if(d=oe.current,Ca(i))Tg(i);else{var _=Cc(Re.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}d[vt]=i,d[Vt]=l;e:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break e;for(;_.sibling===null;){if(_.return===null||_.return===i)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;e:switch(Ft(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xi(i)}}return nt(i),cd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Xi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Re.current,Ca(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=Bt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[vt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||U_(t.nodeValue,a)),t||br(i,!0)}else t=Cc(t).createTextNode(l),t[vt]=i,i.stateNode=t}return nt(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ca(i),a!==null){if(t===null){if(!l)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[vt]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),t=!1}else a=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(vn(i),i):(vn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return nt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ca(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[vt]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else h=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(vn(i),i):(vn(i),null)}return vn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),dc(i,i.updateQueue),nt(i),null);case 4:return rt(),t===null&&Md(i.stateNode.containerInfo),nt(i),null;case 10:return Ki(i.type),nt(i),null;case 19:if(Z(dt),l=i.memoizedState,l===null)return nt(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)hl(l,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=ec(t),d!==null){for(i.flags|=128,hl(l,!1),t=d.updateQueue,i.updateQueue=t,dc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)gg(a,t),a=a.sibling;return re(dt,dt.current&1|2),xe&&Fi(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&en()>_c&&(i.flags|=128,h=!0,hl(l,!1),i.lanes=4194304)}else{if(!h)if(t=ec(d),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,dc(i,t),hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!xe)return nt(i),null}else 2*en()-l.renderingStartTime>_c&&a!==536870912&&(i.flags|=128,h=!0,hl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=en(),t.sibling=null,a=dt.current,re(dt,h?a&1|2:a&1),xe&&Fi(i,l.treeForkCount),t):(nt(i),null);case 22:case 23:return vn(i),xf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),a=i.updateQueue,a!==null&&dc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&Z(Ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(St),nt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function tb(t,i){switch(_f(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(St),rt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return aa(i),null;case 31:if(i.memoizedState!==null){if(vn(i),i.alternate===null)throw Error(s(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(vn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Z(dt),null;case 4:return rt(),null;case 10:return Ki(i.type),null;case 22:case 23:return vn(i),xf(),t!==null&&Z(Ps),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(St),null;case 25:return null;default:return null}}function qy(t,i){switch(_f(i),i.tag){case 3:Ki(St),rt();break;case 26:case 27:case 5:aa(i);break;case 4:rt();break;case 31:i.memoizedState!==null&&vn(i);break;case 13:vn(i);break;case 19:Z(dt);break;case 10:Ki(i.type);break;case 22:case 23:vn(i),xf(),t!==null&&Z(Ps);break;case 24:Ki(St)}}function fl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(S){Ye(i,i.return,S)}}function Or(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,S=_.destroy;if(S!==void 0){_.destroy=void 0,h=i;var I=a,U=S;try{U()}catch(G){Ye(h,I,G)}}}l=l.next}while(l!==d)}}catch(G){Ye(i,i.return,G)}}function Fy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Vg(i,a)}catch(l){Ye(t,t.return,l)}}}function Gy(t,i,a){a.props=Hs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,i,l)}}function dl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ye(t,i,h)}}function Ii(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,i,h)}else a.current=null}function Ky(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function hd(t,i,a){try{var l=t.stateNode;Ab(l,t.type,a,i),l[Vt]=i}catch(h){Ye(t,t.return,h)}}function Yy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ur(t.type)||t.tag===4}function fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Yn));else if(l!==4&&(l===27&&Ur(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(dd(t,i,a),t=t.sibling;t!==null;)dd(t,i,a),t=t.sibling}function mc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Ur(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(mc(t,i,a),t=t.sibling;t!==null;)mc(t,i,a),t=t.sibling}function $y(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,l,a),i[vt]=t,i[Vt]=a}catch(d){Ye(t,t.return,d)}}var Zi=!1,wt=!1,md=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function nb(t,i){if(t=t.containerInfo,kd=kc,t=og(t),of(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,S=-1,I=-1,U=0,G=0,Q=t,j=null;t:for(;;){for(var q;Q!==a||h!==0&&Q.nodeType!==3||(S=_+h),Q!==d||l!==0&&Q.nodeType!==3||(I=_+l),Q.nodeType===3&&(_+=Q.nodeValue.length),(q=Q.firstChild)!==null;)j=Q,Q=q;for(;;){if(Q===t)break t;if(j===a&&++U===h&&(S=_),j===d&&++G===l&&(I=_),(q=Q.nextSibling)!==null)break;Q=j,j=Q.parentNode}Q=q}a=S===-1||I===-1?null:{start:S,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ld={focusedElem:t,selectionRange:a},kc=!1,Lt=i;Lt!==null;)if(i=Lt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Lt=t;else for(;Lt!==null;){switch(i=Lt,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ue=Hs(a.type,h);t=l.getSnapshotBeforeUpdate(ue,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ye){Ye(a,a.return,ye)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)zd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Lt=t;break}Lt=i.return}}function Xy(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),l&4&&fl(5,a);break;case 1:if(Wi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){Ye(a,a.return,_)}else{var h=Hs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ye(a,a.return,_)}}l&64&&Fy(a),l&512&&dl(a,a.return);break;case 3:if(Wi(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Vg(t,i)}catch(_){Ye(a,a.return,_)}}break;case 27:i===null&&l&4&&$y(a);case 26:case 5:Wi(t,a),i===null&&l&4&&Ky(a),l&512&&dl(a,a.return);break;case 12:Wi(t,a);break;case 31:Wi(t,a),l&4&&Wy(t,a);break;case 13:Wi(t,a),l&4&&e_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=hb.bind(null,a),Ob(t,a))));break;case 22:if(l=a.memoizedState!==null||Zi,!l){i=i!==null&&i.memoizedState!==null||wt,h=Zi;var d=wt;Zi=l,(wt=i)&&!d?er(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Zi=h,wt=d}break;case 30:break;default:Wi(t,a)}}function Zy(t){var i=t.alternate;i!==null&&(t.alternate=null,Zy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ha(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var at=null,ln=!1;function Ji(t,i,a){for(a=a.child;a!==null;)Jy(t,i,a),a=a.sibling}function Jy(t,i,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(qn,a)}catch{}switch(a.tag){case 26:wt||Ii(a,i),Ji(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:wt||Ii(a,i);var l=at,h=ln;Ur(a.type)&&(at=a.stateNode,ln=!1),Ji(t,i,a),Sl(a.stateNode),at=l,ln=h;break;case 5:wt||Ii(a,i);case 6:if(l=at,h=ln,at=null,Ji(t,i,a),at=l,ln=h,at!==null)if(ln)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(a.stateNode)}catch(d){Ye(a,i,d)}else try{at.removeChild(a.stateNode)}catch(d){Ye(a,i,d)}break;case 18:at!==null&&(ln?(t=at,F_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Qa(t)):F_(at,a.stateNode));break;case 4:l=at,h=ln,at=a.stateNode.containerInfo,ln=!0,Ji(t,i,a),at=l,ln=h;break;case 0:case 11:case 14:case 15:Or(2,a,i),wt||Or(4,a,i),Ji(t,i,a);break;case 1:wt||(Ii(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Gy(a,i,l)),Ji(t,i,a);break;case 21:Ji(t,i,a);break;case 22:wt=(l=wt)||a.memoizedState!==null,Ji(t,i,a),wt=l;break;default:Ji(t,i,a)}}function Wy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qa(t)}catch(a){Ye(i,i.return,a)}}}function e_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qa(t)}catch(a){Ye(i,i.return,a)}}function ib(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Qy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Qy),i;default:throw Error(s(435,t.tag))}}function pc(t,i){var a=ib(t);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=fb.bind(null,t,l);l.then(h,h)}})}function un(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=i,S=_;e:for(;S!==null;){switch(S.tag){case 27:if(Ur(S.type)){at=S.stateNode,ln=!1;break e}break;case 5:at=S.stateNode,ln=!1;break e;case 3:case 4:at=S.stateNode.containerInfo,ln=!0;break e}S=S.return}if(at===null)throw Error(s(160));Jy(d,_,h),at=null,ln=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)t_(i,t),i=i.sibling}var Wn=null;function t_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:un(i,t),cn(t),l&4&&(Or(3,t,t.return),fl(3,t),Or(5,t,t.return));break;case 1:un(i,t),cn(t),l&512&&(wt||a===null||Ii(a,a.return)),l&64&&Zi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Wn;if(un(i,t),cn(t),l&512&&(wt||a===null||Ii(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[di]||d[vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ft(d,l,a),d[vt]=t,Et(d),l=d;break e;case"link":var _=tv("link","href",h).get(l+(a.href||""));if(_){for(var S=0;S<_.length;S++)if(d=_[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(S,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;case"meta":if(_=tv("meta","content",h).get(l+(a.content||""))){for(S=0;S<_.length;S++)if(d=_[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(S,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[vt]=t,Et(d),l=d}t.stateNode=l}else nv(h,t.type,t.stateNode);else t.stateNode=ev(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?nv(h,t.type,t.stateNode):ev(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&hd(t,t.memoizedProps,a.memoizedProps)}break;case 27:un(i,t),cn(t),l&512&&(wt||a===null||Ii(a,a.return)),a!==null&&l&4&&hd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(un(i,t),cn(t),l&512&&(wt||a===null||Ii(a,a.return)),t.flags&32){h=t.stateNode;try{on(h,"")}catch(ue){Ye(t,t.return,ue)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,hd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(md=!0);break;case 6:if(un(i,t),cn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ue){Ye(t,t.return,ue)}}break;case 3:if(Oc=null,h=Wn,Wn=Nc(i.containerInfo),un(i,t),Wn=h,cn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qa(i.containerInfo)}catch(ue){Ye(t,t.return,ue)}md&&(md=!1,n_(t));break;case 4:l=Wn,Wn=Nc(t.stateNode.containerInfo),un(i,t),cn(t),Wn=l;break;case 12:un(i,t),cn(t);break;case 31:un(i,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pc(t,l)));break;case 13:un(i,t),cn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=en()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pc(t,l)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,U=Zi,G=wt;if(Zi=U||h,wt=G||I,un(i,t),wt=G,Zi=U,cn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||Zi||wt||qs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{S=I.stateNode;var Q=I.memoizedProps.style,j=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;S.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ue){Ye(I,I.return,ue)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(ue){Ye(I,I.return,ue)}}}else if(i.tag===18){if(a===null){I=i;try{var q=I.stateNode;h?G_(q,!0):G_(I.stateNode,!1)}catch(ue){Ye(I,I.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pc(t,a))));break;case 19:un(i,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pc(t,l)));break;case 30:break;case 21:break;default:un(i,t),cn(t)}}function cn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(Yy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=fd(t);mc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(on(_,""),a.flags&=-33);var S=fd(t);mc(t,S,_);break;case 3:case 4:var I=a.stateNode.containerInfo,U=fd(t);dd(t,U,I);break;default:throw Error(s(161))}}catch(G){Ye(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function n_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;n_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Wi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Xy(t,i.alternate,i),i=i.sibling}function qs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Or(4,i,i.return),qs(i);break;case 1:Ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Gy(i,i.return,a),qs(i);break;case 27:Sl(i.stateNode);case 26:case 5:Ii(i,i.return),qs(i);break;case 22:i.memoizedState===null&&qs(i);break;case 30:qs(i);break;default:qs(i)}t=t.sibling}}function er(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:er(h,d,a),fl(4,d);break;case 1:if(er(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Ye(l,l.return,U)}if(l=d,h=l.updateQueue,h!==null){var S=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)xg(I[h],S)}catch(U){Ye(l,l.return,U)}}a&&_&64&&Fy(d),dl(d,d.return);break;case 27:$y(d);case 26:case 5:er(h,d,a),a&&l===null&&_&4&&Ky(d),dl(d,d.return);break;case 12:er(h,d,a);break;case 31:er(h,d,a),a&&_&4&&Wy(h,d);break;case 13:er(h,d,a),a&&_&4&&e_(h,d);break;case 22:d.memoizedState===null&&er(h,d,a),dl(d,d.return);break;case 30:break;default:er(h,d,a)}i=i.sibling}}function pd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wo(a))}function gd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t))}function ei(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)i_(t,i,a,l),i=i.sibling}function i_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ei(t,i,a,l),h&2048&&fl(9,i);break;case 1:ei(t,i,a,l);break;case 3:ei(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t)));break;case 12:if(h&2048){ei(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,_=d.id,S=d.onPostCommit;typeof S=="function"&&S(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ye(i,i.return,I)}}else ei(t,i,a,l);break;case 31:ei(t,i,a,l);break;case 13:ei(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?ei(t,i,a,l):ml(t,i):d._visibility&2?ei(t,i,a,l):(d._visibility|=2,Ua(t,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&pd(_,i);break;case 24:ei(t,i,a,l),h&2048&&gd(i.alternate,i);break;default:ei(t,i,a,l)}}function Ua(t,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,_=i,S=a,I=l,U=_.flags;switch(_.tag){case 0:case 11:case 15:Ua(d,_,S,I,h),fl(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?Ua(d,_,S,I,h):ml(d,_):(G._visibility|=2,Ua(d,_,S,I,h)),h&&U&2048&&pd(_.alternate,_);break;case 24:Ua(d,_,S,I,h),h&&U&2048&&gd(_.alternate,_);break;default:Ua(d,_,S,I,h)}i=i.sibling}}function ml(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:ml(a,l),h&2048&&pd(l.alternate,l);break;case 24:ml(a,l),h&2048&&gd(l.alternate,l);break;default:ml(a,l)}i=i.sibling}}var pl=8192;function za(t,i,a){if(t.subtreeFlags&pl)for(t=t.child;t!==null;)r_(t,i,a),t=t.sibling}function r_(t,i,a){switch(t.tag){case 26:za(t,i,a),t.flags&pl&&t.memoizedState!==null&&qb(a,Wn,t.memoizedState,t.memoizedProps);break;case 5:za(t,i,a);break;case 3:case 4:var l=Wn;Wn=Nc(t.stateNode.containerInfo),za(t,i,a),Wn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=pl,pl=16777216,za(t,i,a),pl=l):za(t,i,a));break;default:za(t,i,a)}}function s_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function gl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,o_(l,t)}s_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 0:case 11:case 15:gl(t),t.flags&2048&&Or(9,t,t.return);break;case 3:gl(t);break;case 12:gl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,gc(t)):gl(t);break;default:gl(t)}}function gc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Lt=l,o_(l,t)}s_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Or(8,i,i.return),gc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,gc(i));break;default:gc(i)}t=t.sibling}}function o_(t,i){for(;Lt!==null;){var a=Lt;switch(a.tag){case 0:case 11:case 15:Or(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Lt=l;else e:for(a=t;Lt!==null;){l=Lt;var h=l.sibling,d=l.return;if(Zy(l),l===a){Lt=null;break e}if(h!==null){h.return=d,Lt=h;break e}Lt=d}}}var rb={getCacheForType:function(t){var i=Ht(St),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return Ht(St).controller.signal}},sb=typeof WeakMap=="function"?WeakMap:Map,qe=0,et=null,Ce=null,De=0,Ke=0,En=null,Mr=!1,ja=!1,yd=!1,tr=0,ct=0,xr=0,Fs=0,_d=0,Tn=0,Ba=0,yl=null,hn=null,vd=!1,yc=0,l_=0,_c=1/0,vc=null,Vr=null,Ot=0,kr=null,Ha=null,nr=0,Ed=0,Td=null,u_=null,_l=0,Sd=null;function Sn(){return(qe&2)!==0&&De!==0?De&-De:Y.T!==null?Cd():Eu()}function c_(){if(Tn===0)if((De&536870912)===0||xe){var t=ys;ys<<=1,(ys&3932160)===0&&(ys=262144),Tn=t}else Tn=536870912;return t=_n.current,t!==null&&(t.flags|=32),Tn}function fn(t,i,a){(t===et&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)&&(qa(t,0),Lr(t,De,Tn,!1)),_s(t,a),((qe&2)===0||t!==et)&&(t===et&&((qe&2)===0&&(Fs|=a),ct===4&&Lr(t,De,Tn,!1)),Ci(t))}function h_(t,i,a){if((qe&6)!==0)throw Error(s(327));var l=!a&&(i&127)===0&&(i&t.expiredLanes)===0||Fn(t,i),h=l?lb(t,i):bd(t,i,!0),d=l;do{if(h===0){ja&&!l&&Lr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!ab(a)){h=bd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var S=t;h=yl;var I=S.current.memoizedState.isDehydrated;if(I&&(qa(S,_).flags|=256),_=bd(S,_,!1),_!==2){if(yd&&!I){S.errorRecoveryDisabledLanes|=d,Fs|=d,h=4;break e}d=hn,hn=h,d!==null&&(hn===null?hn=d:hn.push.apply(hn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){qa(t,0),Lr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Lr(l,i,Tn,!Mr);break e;case 2:hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=yc+300-en(),10<h)){if(Lr(l,i,Tn,!Mr),ci(l,0,!0)!==0)break e;nr=i,l.timeoutHandle=H_(f_.bind(null,l,a,hn,vc,vd,i,Tn,Fs,Ba,Mr,d,"Throttled",-0,0),h);break e}f_(l,a,hn,vc,vd,i,Tn,Fs,Ba,Mr,d,null,-0,0)}}break}while(!0);Ci(t)}function f_(t,i,a,l,h,d,_,S,I,U,G,Q,j,q){if(t.timeoutHandle=-1,Q=i.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yn},r_(i,d,Q);var ue=(d&62914560)===d?yc-en():(d&4194048)===d?l_-en():0;if(ue=Fb(Q,ue),ue!==null){nr=d,t.cancelPendingCommit=ue(E_.bind(null,t,i,d,a,l,h,_,S,I,G,Q,null,j,q)),Lr(t,d,_,!U);return}}E_(t,i,d,a,l,h,_,S,I)}function ab(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!gn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(t,i,a,l){i&=~_d,i&=~Fs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-ht(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&vs(t,a,i)}function Ec(){return(qe&6)===0?(vl(0),!1):!0}function Ad(){if(Ce!==null){if(Ke===0)var t=Ce.return;else t=Ce,Gi=ks=null,zf(t),xa=null,tl=0,t=Ce;for(;t!==null;)qy(t.alternate,t),t=t.return;Ce=null}}function qa(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Rb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nr=0,Ad(),et=t,Ce=a=qi(t.current,null),De=i,Ke=0,En=null,Mr=!1,ja=Fn(t,i),yd=!1,Ba=Tn=_d=Fs=xr=ct=0,hn=yl=null,vd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-ht(l),d=1<<h;i|=t[h],l&=~d}return tr=i,Bu(),a}function d_(t,i){we=null,Y.H=ul,i===Ma||i===Qu?(i=Ng(),Ke=3):i===If?(i=Ng(),Ke=4):Ke=i===td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,En=i,Ce===null&&(ct=1,uc(t,xn(i,t.current)))}function m_(){var t=_n.current;return t===null?!0:(De&4194048)===De?Pn===null:(De&62914560)===De||(De&536870912)!==0?t===Pn:!1}function p_(){var t=Y.H;return Y.H=ul,t===null?ul:t}function g_(){var t=Y.A;return Y.A=rb,t}function Tc(){ct=4,Mr||(De&4194048)!==De&&_n.current!==null||(ja=!0),(xr&134217727)===0&&(Fs&134217727)===0||et===null||Lr(et,De,Tn,!1)}function bd(t,i,a){var l=qe;qe|=2;var h=p_(),d=g_();(et!==t||De!==i)&&(vc=null,qa(t,i)),i=!1;var _=ct;e:do try{if(Ke!==0&&Ce!==null){var S=Ce,I=En;switch(Ke){case 8:Ad(),_=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(i=!0);var U=Ke;if(Ke=0,En=null,Fa(t,S,I,U),a&&ja){_=0;break e}break;default:U=Ke,Ke=0,En=null,Fa(t,S,I,U)}}ob(),_=ct;break}catch(G){d_(t,G)}while(!0);return i&&t.shellSuspendCounter++,Gi=ks=null,qe=l,Y.H=h,Y.A=d,Ce===null&&(et=null,De=0,Bu()),_}function ob(){for(;Ce!==null;)y_(Ce)}function lb(t,i){var a=qe;qe|=2;var l=p_(),h=g_();et!==t||De!==i?(vc=null,_c=en()+500,qa(t,i)):ja=Fn(t,i);e:do try{if(Ke!==0&&Ce!==null){i=Ce;var d=En;t:switch(Ke){case 1:Ke=0,En=null,Fa(t,i,d,1);break;case 2:case 9:if(Ig(d)){Ke=0,En=null,__(i);break}i=function(){Ke!==2&&Ke!==9||et!==t||(Ke=7),Ci(t)},d.then(i,i);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:Ig(d)?(Ke=0,En=null,__(i)):(Ke=0,En=null,Fa(t,i,d,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var S=Ce;if(_?iv(_):S.stateNode.complete){Ke=0,En=null;var I=S.sibling;if(I!==null)Ce=I;else{var U=S.return;U!==null?(Ce=U,Sc(U)):Ce=null}break t}}Ke=0,En=null,Fa(t,i,d,5);break;case 6:Ke=0,En=null,Fa(t,i,d,6);break;case 8:Ad(),ct=6;break e;default:throw Error(s(462))}}ub();break}catch(G){d_(t,G)}while(!0);return Gi=ks=null,Y.H=l,Y.A=h,qe=a,Ce!==null?0:(et=null,De=0,Bu(),ct)}function ub(){for(;Ce!==null&&!Wh();)y_(Ce)}function y_(t){var i=By(t.alternate,t,tr);t.memoizedProps=t.pendingProps,i===null?Sc(t):Ce=i}function __(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=ky(a,i,i.pendingProps,i.type,void 0,De);break;case 11:i=ky(a,i,i.pendingProps,i.type.render,i.ref,De);break;case 5:zf(i);default:qy(a,i),i=Ce=gg(i,tr),i=By(a,i,tr)}t.memoizedProps=t.pendingProps,i===null?Sc(t):Ce=i}function Fa(t,i,a,l){Gi=ks=null,zf(i),xa=null,tl=0;var h=i.return;try{if(ZA(t,h,i,a,De)){ct=1,uc(t,xn(a,t.current)),Ce=null;return}}catch(d){if(h!==null)throw Ce=h,d;ct=1,uc(t,xn(a,t.current)),Ce=null;return}i.flags&32768?(xe||l===1?t=!0:ja||(De&536870912)!==0?t=!1:(Mr=t=!0,(l===2||l===9||l===3||l===6)&&(l=_n.current,l!==null&&l.tag===13&&(l.flags|=16384))),v_(i,t)):Sc(i)}function Sc(t){var i=t;do{if((i.flags&32768)!==0){v_(i,Mr);return}t=i.return;var a=eb(i.alternate,i,tr);if(a!==null){Ce=a;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=t}while(i!==null);ct===0&&(ct=5)}function v_(t,i){do{var a=tb(t.alternate,t);if(a!==null){a.flags&=32767,Ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ce=t;return}Ce=t=a}while(t!==null);ct=6,Ce=null}function E_(t,i,a,l,h,d,_,S,I){t.cancelPendingCommit=null;do Ac();while(Ot!==0);if((qe&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=ff,nf(t,a,d,_,S,I),t===et&&(Ce=et=null,De=0),Ha=i,kr=t,nr=a,Ed=d,Td=h,u_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,db(fr,function(){return w_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,h=ie.p,ie.p=2,_=qe,qe|=4;try{nb(t,i,a)}finally{qe=_,ie.p=h,Y.T=l}}Ot=1,T_(),S_(),A_()}}function T_(){if(Ot===1){Ot=0;var t=kr,i=Ha,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=ie.p;ie.p=2;var h=qe;qe|=4;try{t_(i,t);var d=Ld,_=og(t.containerInfo),S=d.focusedElem,I=d.selectionRange;if(_!==S&&S&&S.ownerDocument&&ag(S.ownerDocument.documentElement,S)){if(I!==null&&of(S)){var U=I.start,G=I.end;if(G===void 0&&(G=U),"selectionStart"in S)S.selectionStart=U,S.selectionEnd=Math.min(G,S.value.length);else{var Q=S.ownerDocument||document,j=Q&&Q.defaultView||window;if(j.getSelection){var q=j.getSelection(),ue=S.textContent.length,ye=Math.min(I.start,ue),Je=I.end===void 0?ye:Math.min(I.end,ue);!q.extend&&ye>Je&&(_=Je,Je=ye,ye=_);var V=sg(S,ye),D=sg(S,Je);if(V&&D&&(q.rangeCount!==1||q.anchorNode!==V.node||q.anchorOffset!==V.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var P=Q.createRange();P.setStart(V.node,V.offset),q.removeAllRanges(),ye>Je?(q.addRange(P),q.extend(D.node,D.offset)):(P.setEnd(D.node,D.offset),q.addRange(P))}}}}for(Q=[],q=S;q=q.parentNode;)q.nodeType===1&&Q.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Q.length;S++){var $=Q[S];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}kc=!!kd,Ld=kd=null}finally{qe=h,ie.p=l,Y.T=a}}t.current=i,Ot=2}}function S_(){if(Ot===2){Ot=0;var t=kr,i=Ha,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=ie.p;ie.p=2;var h=qe;qe|=4;try{Xy(t,i.alternate,i)}finally{qe=h,ie.p=l,Y.T=a}}Ot=3}}function A_(){if(Ot===4||Ot===3){Ot=0,du();var t=kr,i=Ha,a=nr,l=u_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ot=5:(Ot=0,Ha=kr=null,b_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Vr=null),zi(a),i=i.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(qn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,h=ie.p,ie.p=2,Y.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var S=l[_];d(S.value,{componentStack:S.stack})}}finally{Y.T=i,ie.p=h}}(nr&3)!==0&&Ac(),Ci(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===Sd?_l++:(_l=0,Sd=t):_l=0,vl(0)}}function b_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Wo(i)))}function Ac(){return T_(),S_(),A_(),w_()}function w_(){if(Ot!==5)return!1;var t=kr,i=Ed;Ed=0;var a=zi(nr),l=Y.T,h=ie.p;try{ie.p=32>a?32:a,Y.T=null,a=Td,Td=null;var d=kr,_=nr;if(Ot=0,Ha=kr=null,nr=0,(qe&6)!==0)throw Error(s(331));var S=qe;if(qe|=4,a_(d.current),i_(d,d.current,_,a),qe=S,vl(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(qn,d)}catch{}return!0}finally{ie.p=h,Y.T=l,b_(t,i)}}function R_(t,i,a){i=xn(a,i),i=ed(t.stateNode,i,2),t=Cr(t,i,2),t!==null&&(_s(t,2),Ci(t))}function Ye(t,i,a){if(t.tag===3)R_(t,t,a);else for(;i!==null;){if(i.tag===3){R_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vr===null||!Vr.has(l))){t=xn(a,t),a=Iy(2),l=Cr(i,a,2),l!==null&&(Cy(a,l,i,t),_s(l,2),Ci(l));break}}i=i.return}}function wd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new sb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(yd=!0,h.add(a),t=cb.bind(null,t,i,a),i.then(t,t))}function cb(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,et===t&&(De&a)===a&&(ct===4||ct===3&&(De&62914560)===De&&300>en()-yc?(qe&2)===0&&qa(t,0):_d|=a,Ba===De&&(Ba=0)),Ci(t)}function I_(t,i){i===0&&(i=vu()),t=Ms(t,i),t!==null&&(_s(t,i),Ci(t))}function hb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),I_(t,a)}function fb(t,i){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),I_(t,a)}function db(t,i){return Dt(t,i)}var bc=null,Ga=null,Rd=!1,wc=!1,Id=!1,Pr=0;function Ci(t){t!==Ga&&t.next===null&&(Ga===null?bc=Ga=t:Ga=Ga.next=t),wc=!0,Rd||(Rd=!0,pb())}function vl(t,i){if(!Id&&wc){Id=!0;do for(var a=!1,l=bc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-ht(42|t)+1)-1,d&=h&~(_&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,O_(l,d))}else d=De,d=ci(l,l===et?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Fn(l,d)||(a=!0,O_(l,d));l=l.next}while(a);Id=!1}}function mb(){C_()}function C_(){wc=Rd=!1;var t=0;Pr!==0&&wb()&&(t=Pr);for(var i=en(),a=null,l=bc;l!==null;){var h=l.next,d=N_(l,i);d===0?(l.next=null,a===null?bc=h:a.next=h,h===null&&(Ga=a)):(a=l,(t!==0||(d&3)!==0)&&(wc=!0)),l=h}Ot!==0&&Ot!==5||vl(t),Pr!==0&&(Pr=0)}function N_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-ht(d),S=1<<_,I=h[_];I===-1?((S&a)===0||(S&l)!==0)&&(h[_]=tf(S,i)):I<=i&&(t.expiredLanes|=S),d&=~S}if(i=et,a=De,a=ci(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&hr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fn(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&hr(l),zi(a)){case 2:case 8:a=No;break;case 32:a=fr;break;case 268435456:a=mu;break;default:a=fr}return l=D_.bind(null,t),a=Dt(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&hr(l),t.callbackPriority=2,t.callbackNode=null,2}function D_(t,i){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ac()&&t.callbackNode!==a)return null;var l=De;return l=ci(t,t===et?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(h_(t,l,i),N_(t,en()),t.callbackNode!=null&&t.callbackNode===a?D_.bind(null,t):null)}function O_(t,i){if(Ac())return null;h_(t,i,!0)}function pb(){Ib(function(){(qe&6)!==0?Dt(Co,mb):C_()})}function Cd(){if(Pr===0){var t=Da;t===0&&(t=li,li<<=1,(li&261888)===0&&(li=256)),Pr=t}return Pr}function M_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pa(""+t)}function x_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function gb(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=M_((h[Vt]||null).action),_=l.submitter;_&&(i=(i=_[Vt]||null)?M_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var S=new Ti("action","action",null,l,h);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pr!==0){var I=_?x_(h,_):new FormData(h);$f(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(S.preventDefault(),I=_?x_(h,_):new FormData(h),$f(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Nd=0;Nd<hf.length;Nd++){var Dd=hf[Nd],yb=Dd.toLowerCase(),_b=Dd[0].toUpperCase()+Dd.slice(1);Jn(yb,"on"+_b)}Jn(cg,"onAnimationEnd"),Jn(hg,"onAnimationIteration"),Jn(fg,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(VA,"onTransitionRun"),Jn(kA,"onTransitionStart"),Jn(LA,"onTransitionCancel"),Jn(dg,"onTransitionEnd"),yi("onMouseEnter",["mouseout","mouseover"]),yi("onMouseLeave",["mouseout","mouseover"]),yi("onPointerEnter",["pointerout","pointerover"]),yi("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function V_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var S=l[_],I=S.instance,U=S.currentTarget;if(S=S.listener,I!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=U;try{d(h)}catch(G){ju(G)}h.currentTarget=null,d=I}else for(_=0;_<l.length;_++){if(S=l[_],I=S.instance,U=S.currentTarget,S=S.listener,I!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=U;try{d(h)}catch(G){ju(G)}h.currentTarget=null,d=I}}}}function Ne(t,i){var a=i[ca];a===void 0&&(a=i[ca]=new Set);var l=t+"__bubble";a.has(l)||(k_(i,t,2,!1),a.add(l))}function Od(t,i,a){var l=0;i&&(l|=4),k_(a,t,l,i)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Md(t){if(!t[Rc]){t[Rc]=!0,Mo.forEach(function(a){a!=="selectionchange"&&(vb.has(a)||Od(a,!1,t),Od(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Rc]||(i[Rc]=!0,Od("selectionchange",!1,i))}}function k_(t,i,a,l){switch(cv(i)){case 2:var h=Yb;break;case 8:h=$b;break;default:h=Yd}a=h.bind(null,i,a,t),h=void 0,!bs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function xd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var S=l.stateNode.containerInfo;if(S===h)break;if(_===4)for(_=l.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;S!==null;){if(_=mi(S),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){l=d=_;continue e}S=S.parentNode}}l=l.return}_r(function(){var U=d,G=Nn(a),Q=[];e:{var j=mg.get(t);if(j!==void 0){var q=Ti,ue=t;switch(t){case"keypress":if(Rs(a)===0)break e;case"keydown":case"keyup":q=Pu;break;case"focusin":ue="focus",q=Cs;break;case"focusout":ue="blur",q=Cs;break;case"beforeblur":case"afterblur":q=Cs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=g;break;case cg:case hg:case fg:q=Du;break;case dg:q=A;break;case"scroll":case"scrollend":q=Fo;break;case"wheel":q=H;break;case"copy":case"cut":case"paste":q=Ou;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Hi;break;case"toggle":case"beforetoggle":q=be}var ye=(i&4)!==0,Je=!ye&&(t==="scroll"||t==="scrollend"),V=ye?j!==null?j+"Capture":null:j;ye=[];for(var D=U,P;D!==null;){var $=D;if(P=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||P===null||V===null||($=$n(D,V),$!=null&&ye.push(Tl(D,$,P))),Je)break;D=D.return}0<ye.length&&(j=new q(j,ue,null,a,G),Q.push({event:j,listeners:ye}))}}if((i&7)===0){e:{if(j=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",j&&a!==Bo&&(ue=a.relatedTarget||a.fromElement)&&(mi(ue)||ue[fi]))break e;if((q||j)&&(j=G.window===G?G:(j=G.ownerDocument)?j.defaultView||j.parentWindow:window,q?(ue=a.relatedTarget||a.toElement,q=U,ue=ue?mi(ue):null,ue!==null&&(Je=u(ue),ye=ue.tag,ue!==Je||ye!==5&&ye!==27&&ye!==6)&&(ue=null)):(q=null,ue=U),q!==ue)){if(ye=Go,$="onMouseLeave",V="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Hi,$="onPointerLeave",V="onPointerEnter",D="pointer"),Je=q==null?j:mn(q),P=ue==null?j:mn(ue),j=new ye($,D+"leave",q,a,G),j.target=Je,j.relatedTarget=P,$=null,mi(G)===U&&(ye=new ye(V,D+"enter",ue,a,G),ye.target=P,ye.relatedTarget=Je,$=ye),Je=$,q&&ue)t:{for(ye=Eb,V=q,D=ue,P=0,$=V;$;$=ye($))P++;$=0;for(var fe=D;fe;fe=ye(fe))$++;for(;0<P-$;)V=ye(V),P--;for(;0<$-P;)D=ye(D),$--;for(;P--;){if(V===D||D!==null&&V===D.alternate){ye=V;break t}V=ye(V),D=ye(D)}ye=null}else ye=null;q!==null&&L_(Q,j,q,ye,!1),ue!==null&&Je!==null&&L_(Q,Je,ue,ye,!0)}}e:{if(j=U?mn(U):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var je=Wp;else if(Zp(j))if(eg)je=OA;else{je=NA;var ce=CA}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?U&&ma(U.elementType)&&(je=Wp):je=DA;if(je&&(je=je(t,U))){Jp(Q,je,a,G);break e}ce&&ce(t,j,U),t==="focusout"&&U&&j.type==="number"&&U.memoizedProps.value!=null&&Uo(j,"number",j.value)}switch(ce=U?mn(U):window,t){case"focusin":(Zp(ce)||ce.contentEditable==="true")&&(Sa=ce,lf=U,Xo=null);break;case"focusout":Xo=lf=Sa=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,lg(Q,a,G);break;case"selectionchange":if(xA)break;case"keydown":case"keyup":lg(Q,a,G)}var Ie;if(He)e:{switch(t){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Ta?Ns(t,a)&&(Oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(bi&&a.locale!=="ko"&&(Ta||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Ta&&(Ie=qo()):(Ei=G,Ho="value"in Ei?Ei.value:Ei.textContent,Ta=!0)),ce=Ic(U,Oe),0<ce.length&&(Oe=new Ai(Oe,t,null,a,G),Q.push({event:Oe,listeners:ce}),Ie?Oe.data=Ie:(Ie=Ea(a),Ie!==null&&(Oe.data=Ie)))),(Ie=On?bA(t,a):wA(t,a))&&(Oe=Ic(U,"onBeforeInput"),0<Oe.length&&(ce=new Ai("onBeforeInput","beforeinput",null,a,G),Q.push({event:ce,listeners:Oe}),ce.data=Ie)),gb(Q,t,U,a,G)}V_(Q,i)})}function Tl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Ic(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=$n(t,a),h!=null&&l.unshift(Tl(t,h,d)),h=$n(t,i),h!=null&&l.push(Tl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Eb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function L_(t,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var S=a,I=S.alternate,U=S.stateNode;if(S=S.tag,I!==null&&I===l)break;S!==5&&S!==26&&S!==27||U===null||(I=U,h?(U=$n(a,d),U!=null&&_.unshift(Tl(a,U,I))):h||(U=$n(a,d),U!=null&&_.push(Tl(a,U,I)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var Tb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function P_(t){return(typeof t=="string"?t:""+t).replace(Tb,`
`).replace(Sb,"")}function U_(t,i){return i=P_(i),P_(t)===i}function Ze(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||on(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&on(t,""+l);break;case"className":pn(t,"class",l);break;case"tabIndex":pn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pn(t,a,l);break;case"style":jo(t,l,d);break;case"data":if(i!=="object"){pn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=pa(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Ze(t,i,"name",h.name,h,null),Ze(t,i,"formEncType",h.formEncType,h,null),Ze(t,i,"formMethod",h.formMethod,h,null),Ze(t,i,"formTarget",h.formTarget,h,null)):(Ze(t,i,"encType",h.encType,h,null),Ze(t,i,"method",h.method,h,null),Ze(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=pa(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Yn);break;case"onScroll":l!=null&&Ne("scroll",t);break;case"onScrollEnd":l!=null&&Ne("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=pa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),fa(t,"popover",l);break;case"xlinkActuate":Tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fa(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iu.get(a)||a,fa(t,a,l))}}function Vd(t,i,a,l,h,d){switch(a){case"style":jo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?on(t,l):(typeof l=="number"||typeof l=="bigint")&&on(t,""+l);break;case"onScroll":l!=null&&Ne("scroll",t);break;case"onScrollEnd":l!=null&&Ne("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Vt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):fa(t,a,l)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ze(t,i,d,_,a,null)}}h&&Ze(t,i,"srcSet",a.srcSet,a,null),l&&Ze(t,i,"src",a.src,a,null);return;case"input":Ne("invalid",t);var S=d=_=h=null,I=null,U=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":I=G;break;case"defaultChecked":U=G;break;case"value":d=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Ze(t,i,l,G,a,null)}}bu(t,d,S,I,U,_,h,!1);return;case"select":Ne("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(S=a[h],S!=null))switch(h){case"value":d=S;break;case"defaultValue":_=S;break;case"multiple":l=S;default:Ze(t,i,h,S,a,null)}i=d,a=_,t.multiple=!!l,i!=null?mr(t,!!l,i,!1):a!=null&&mr(t,!!l,a,!0);return;case"textarea":Ne("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(S=a[_],S!=null))switch(_){case"value":l=S;break;case"defaultValue":h=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:Ze(t,i,_,S,a,null)}pr(t,l,h,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(t,i,I,l,a,null)}return;case"dialog":Ne("beforetoggle",t),Ne("toggle",t),Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(l=0;l<El.length;l++)Ne(El[l],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(l=a[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ze(t,i,U,l,a,null)}return;default:if(ma(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Vd(t,i,G,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&Ze(t,i,S,l,a,null))}function Ab(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,S=null,I=null,U=null,G=null;for(q in a){var Q=a[q];if(a.hasOwnProperty(q)&&Q!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=Q;default:l.hasOwnProperty(q)||Ze(t,i,q,null,l,Q)}}for(var j in l){var q=l[j];if(Q=a[j],l.hasOwnProperty(j)&&(q!=null||Q!=null))switch(j){case"type":d=q;break;case"name":h=q;break;case"checked":U=q;break;case"defaultChecked":G=q;break;case"value":_=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==Q&&Ze(t,i,j,q,l,Q)}}da(t,_,S,I,U,G,d,h);return;case"select":q=_=S=j=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":q=I;default:l.hasOwnProperty(d)||Ze(t,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":j=d;break;case"defaultValue":S=d;break;case"multiple":_=d;default:d!==I&&Ze(t,i,h,d,l,I)}i=S,a=_,l=q,j!=null?mr(t,!!a,j,!1):!!l!=!!a&&(i!=null?mr(t,!!a,i,!0):mr(t,!!a,a?[]:"",!1));return;case"textarea":q=j=null;for(S in a)if(h=a[S],a.hasOwnProperty(S)&&h!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ze(t,i,S,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":j=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Ze(t,i,_,h,l,d)}wu(t,j,q);return;case"option":for(var ue in a)if(j=a[ue],a.hasOwnProperty(ue)&&j!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Ze(t,i,ue,null,l,j)}for(I in l)if(j=l[I],q=a[I],l.hasOwnProperty(I)&&j!==q&&(j!=null||q!=null))switch(I){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Ze(t,i,I,j,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)j=a[ye],a.hasOwnProperty(ye)&&j!=null&&!l.hasOwnProperty(ye)&&Ze(t,i,ye,null,l,j);for(U in l)if(j=l[U],q=a[U],l.hasOwnProperty(U)&&j!==q&&(j!=null||q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Ze(t,i,U,j,l,q)}return;default:if(ma(i)){for(var Je in a)j=a[Je],a.hasOwnProperty(Je)&&j!==void 0&&!l.hasOwnProperty(Je)&&Vd(t,i,Je,void 0,l,j);for(G in l)j=l[G],q=a[G],!l.hasOwnProperty(G)||j===q||j===void 0&&q===void 0||Vd(t,i,G,j,l,q);return}}for(var V in a)j=a[V],a.hasOwnProperty(V)&&j!=null&&!l.hasOwnProperty(V)&&Ze(t,i,V,null,l,j);for(Q in l)j=l[Q],q=a[Q],!l.hasOwnProperty(Q)||j===q||j==null&&q==null||Ze(t,i,Q,j,l,q)}function z_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,_=h.initiatorType,S=h.duration;if(d&&S&&z_(_)){for(_=0,S=h.responseEnd,l+=1;l<a.length;l++){var I=a[l],U=I.startTime;if(U>S)break;var G=I.transferSize,Q=I.initiatorType;G&&z_(Q)&&(I=I.responseEnd,_+=G*(I<S?1:(S-U)/(I-U)))}if(--l,i+=8*(d+_)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kd=null,Ld=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function j_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Pd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ud=null;function wb(){var t=window.event;return t&&t.type==="popstate"?t===Ud?!1:(Ud=t,!0):(Ud=null,!1)}var H_=typeof setTimeout=="function"?setTimeout:void 0,Rb=typeof clearTimeout=="function"?clearTimeout:void 0,q_=typeof Promise=="function"?Promise:void 0,Ib=typeof queueMicrotask=="function"?queueMicrotask:typeof q_<"u"?function(t){return q_.resolve(null).then(t).catch(Cb)}:H_;function Cb(t){setTimeout(function(){throw t})}function Ur(t){return t==="head"}function F_(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(h),Qa(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Sl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Sl(a);for(var d=a.firstChild;d;){var _=d.nextSibling,S=d.nodeName;d[di]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&Sl(t.ownerDocument.body);a=h}while(a);Qa(i)}function G_(t,i){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function zd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zd(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nb(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[di])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Un(t.nextSibling),t===null)break}return null}function Db(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Un(t.nextSibling),t===null))return null;return t}function K_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Un(t.nextSibling),t===null))return null;return t}function jd(t){return t.data==="$?"||t.data==="$~"}function Bd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ob(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Un(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Hd=null;function Y_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return Un(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function $_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function Q_(t,i,a){switch(i=Cc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Sl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ha(t)}var zn=new Map,X_=new Set;function Nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=ie.d;ie.d={f:Mb,r:xb,D:Vb,C:kb,L:Lb,m:Pb,X:zb,S:Ub,M:jb};function Mb(){var t=ir.f(),i=Ec();return t||i}function xb(t){var i=Cn(t);i!==null&&i.tag===5&&i.type==="form"?dy(i):ir.r(t)}var Ka=typeof document>"u"?null:document;function Z_(t,i,a){var l=Ka;if(l&&typeof i=="string"&&i){var h=an(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),X_.has(h)||(X_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ft(i,"link",t),Et(i),l.head.appendChild(i)))}}function Vb(t){ir.D(t),Z_("dns-prefetch",t,null)}function kb(t,i){ir.C(t,i),Z_("preconnect",t,i)}function Lb(t,i,a){ir.L(t,i,a);var l=Ka;if(l&&t&&i){var h='link[rel="preload"][as="'+an(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+an(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+an(a.imageSizes)+'"]')):h+='[href="'+an(t)+'"]';var d=h;switch(i){case"style":d=Ya(t);break;case"script":d=$a(t)}zn.has(d)||(t=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),zn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Al(d))||i==="script"&&l.querySelector(bl(d))||(i=l.createElement("link"),Ft(i,"link",t),Et(i),l.head.appendChild(i)))}}function Pb(t,i){ir.m(t,i);var a=Ka;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+an(l)+'"][href="'+an(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$a(t)}if(!zn.has(d)&&(t=T({rel:"modulepreload",href:t},i),zn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bl(d)))return}l=a.createElement("link"),Ft(l,"link",t),Et(l),a.head.appendChild(l)}}}function Ub(t,i,a){ir.S(t,i,a);var l=Ka;if(l&&t){var h=pi(l).hoistableStyles,d=Ya(t);i=i||"default";var _=h.get(d);if(!_){var S={loading:0,preload:null};if(_=l.querySelector(Al(d)))S.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":i},a),(a=zn.get(d))&&qd(t,a);var I=_=l.createElement("link");Et(I),Ft(I,"link",t),I._p=new Promise(function(U,G){I.onload=U,I.onerror=G}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Dc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:S},h.set(d,_)}}}function zb(t,i){ir.X(t,i);var a=Ka;if(a&&t){var l=pi(a).hoistableScripts,h=$a(t),d=l.get(h);d||(d=a.querySelector(bl(h)),d||(t=T({src:t,async:!0},i),(i=zn.get(h))&&Fd(t,i),d=a.createElement("script"),Et(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function jb(t,i){ir.M(t,i);var a=Ka;if(a&&t){var l=pi(a).hoistableScripts,h=$a(t),d=l.get(h);d||(d=a.querySelector(bl(h)),d||(t=T({src:t,async:!0,type:"module"},i),(i=zn.get(h))&&Fd(t,i),d=a.createElement("script"),Et(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function J_(t,i,a,l){var h=(h=Re.current)?Nc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ya(a.href),a=pi(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ya(a.href);var d=pi(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(Al(t)))&&!d._p&&(_.instance=d,_.state.loading=5),zn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zn.set(t,a),d||Bb(h,t,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$a(a),a=pi(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ya(t){return'href="'+an(t)+'"'}function Al(t){return'link[rel="stylesheet"]['+t+"]"}function W_(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function Bb(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),Et(i),t.head.appendChild(i))}function $a(t){return'[src="'+an(t)+'"]'}function bl(t){return"script[async]"+t}function ev(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+an(a.href)+'"]');if(l)return i.instance=l,Et(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Et(l),Ft(l,"style",h),Dc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Ya(a.href);var d=t.querySelector(Al(h));if(d)return i.state.loading|=4,i.instance=d,Et(d),d;l=W_(a),(h=zn.get(h))&&qd(l,h),d=(t.ownerDocument||t).createElement("link"),Et(d);var _=d;return _._p=new Promise(function(S,I){_.onload=S,_.onerror=I}),Ft(d,"link",l),i.state.loading|=4,Dc(d,a.precedence,t),i.instance=d;case"script":return d=$a(a.src),(h=t.querySelector(bl(d)))?(i.instance=h,Et(h),h):(l=a,(h=zn.get(d))&&(l=T({},a),Fd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Et(h),Ft(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Dc(l,a.precedence,t));return i.instance}function Dc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var S=l[_];if(S.dataset.precedence===i)d=S;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function qd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Fd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Oc=null;function tv(t,i,a){if(Oc===null){var l=new Map,h=Oc=new Map;h.set(a,l)}else h=Oc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[di]||d[vt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=t+_;var S=l.get(_);S?S.push(d):l.set(_,[d])}}return l}function nv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Hb(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function iv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qb(t,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ya(l.href),d=i.querySelector(Al(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Mc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=d,Et(d);return}d=i.ownerDocument||i,l=W_(l),(h=zn.get(h))&&qd(l,h),d=d.createElement("link"),Et(d);var _=d;_._p=new Promise(function(S,I){_.onload=S,_.onerror=I}),Ft(d,"link",l),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Mc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var Gd=0;function Fb(t,i){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Gd===0&&(Gd=62500*bb());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Gd?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function Vc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,i.forEach(Gb,t),xc=null,Mc.call(t))}function Gb(t,i){if(!(i.state.loading&4)){var a=xc.get(t);if(a)var l=a.get(null);else{a=new Map,xc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Mc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var wl={$$typeof:se,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Kb(t,i,a,l,h,d,_,S,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.hiddenUpdates=hi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function rv(t,i,a,l,h,d,_,S,I,U,G,Q){return t=new Kb(t,i,a,_,I,U,G,Q,S),i=1,d===!0&&(i|=24),d=yn(3,null,null,i),t.current=d,d.stateNode=t,i=bf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Cf(d),t}function sv(t){return t?(t=wa,t):wa}function av(t,i,a,l,h,d){h=sv(h),l.context===null?l.context=h:l.pendingContext=h,l=Ir(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Cr(t,l,i),a!==null&&(fn(a,t,i),il(a,t,i))}function ov(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Kd(t,i){ov(t,i),(t=t.alternate)&&ov(t,i)}function lv(t){if(t.tag===13||t.tag===31){var i=Ms(t,67108864);i!==null&&fn(i,t,67108864),Kd(t,67108864)}}function uv(t){if(t.tag===13||t.tag===31){var i=Sn();i=Es(i);var a=Ms(t,i);a!==null&&fn(a,t,i),Kd(t,i)}}var kc=!0;function Yb(t,i,a,l){var h=Y.T;Y.T=null;var d=ie.p;try{ie.p=2,Yd(t,i,a,l)}finally{ie.p=d,Y.T=h}}function $b(t,i,a,l){var h=Y.T;Y.T=null;var d=ie.p;try{ie.p=8,Yd(t,i,a,l)}finally{ie.p=d,Y.T=h}}function Yd(t,i,a,l){if(kc){var h=$d(l);if(h===null)xd(t,i,l,Lc,a),hv(t,l);else if(Xb(h,t,i,a,l))l.stopPropagation();else if(hv(t,l),i&4&&-1<Qb.indexOf(t)){for(;h!==null;){var d=Cn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=ui(d.pendingLanes);if(_!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;_;){var I=1<<31-ht(_);S.entanglements[1]|=I,_&=~I}Ci(d),(qe&6)===0&&(_c=en()+500,vl(0))}}break;case 31:case 13:S=Ms(d,2),S!==null&&fn(S,d,2),Ec(),Kd(d,2)}if(d=$d(l),d===null&&xd(t,i,l,Lc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else xd(t,i,l,null,a)}}function $d(t){return t=Nn(t),Qd(t)}var Lc=null;function Qd(t){if(Lc=null,t=mi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===31){if(t=m(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Lc=t,null}function cv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gs()){case Co:return 2;case No:return 8;case fr:case ef:return 32;case mu:return 268435456;default:return 32}default:return 32}}var Xd=!1,zr=null,jr=null,Br=null,Rl=new Map,Il=new Map,Hr=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(t,i){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Cl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Cn(i),i!==null&&lv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Xb(t,i,a,l,h){switch(i){case"focusin":return zr=Cl(zr,t,i,a,l,h),!0;case"dragenter":return jr=Cl(jr,t,i,a,l,h),!0;case"mouseover":return Br=Cl(Br,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Rl.set(d,Cl(Rl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Il.set(d,Cl(Il.get(d)||null,t,i,a,l,h)),!0}return!1}function fv(t){var i=mi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Gn(t.priority,function(){uv(a)});return}}else if(i===31){if(i=m(a),i!==null){t.blockedOn=i,Gn(t.priority,function(){uv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=$d(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Bo=l,a.target.dispatchEvent(l),Bo=null}else return i=Cn(a),i!==null&&lv(i),t.blockedOn=a,!1;i.shift()}return!0}function dv(t,i,a){Pc(t)&&a.delete(i)}function Zb(){Xd=!1,zr!==null&&Pc(zr)&&(zr=null),jr!==null&&Pc(jr)&&(jr=null),Br!==null&&Pc(Br)&&(Br=null),Rl.forEach(dv),Il.forEach(dv)}function Uc(t,i){t.blockedOn===i&&(t.blockedOn=null,Xd||(Xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Zb)))}var zc=null;function mv(t){zc!==t&&(zc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Qd(l||a)===null)continue;break}var d=Cn(a);d!==null&&(t.splice(i,3),i-=3,$f(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Qa(t){function i(I){return Uc(I,t)}zr!==null&&Uc(zr,t),jr!==null&&Uc(jr,t),Br!==null&&Uc(Br,t),Rl.forEach(i),Il.forEach(i);for(var a=0;a<Hr.length;a++){var l=Hr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Hr.length&&(a=Hr[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&Hr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Vt]||null;if(typeof d=="function")_||mv(a);else if(_){var S=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Vt]||null)S=_.formAction;else if(Qd(h)!==null)continue}else S=_.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),mv(a)}}}function pv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Zd(t){this._internalRoot=t}jc.prototype.render=Zd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Sn();av(a,l,t,i,null,null)},jc.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;av(t.current,2,null,t,null,null),Ec(),i[fi]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Eu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Hr.length&&i!==0&&i<Hr[a].priority;a++);Hr.splice(a,0,t),a===0&&fv(t)}};var gv=e.version;if(gv!=="19.2.5")throw Error(s(527,gv,"19.2.5"));ie.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(i),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var Jb={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{qn=Bc.inject(Jb),zt=Bc}catch{}}return Dl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Ay,d=by,_=wy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=rv(t,1,!1,null,null,a,l,null,h,d,_,pv),t[fi]=i.current,Md(t),new Zd(i)},Dl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Ay,_=by,S=wy,I=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=rv(t,1,!0,i,a??null,l,h,I,d,_,S,pv),i.context=sv(null),a=i.current,l=Sn(),l=Es(l),h=Ir(l),h.callback=null,Cr(a,h,l),a=l,i.current.lanes=a,_s(i,a),Ci(i),t[fi]=i.current,Md(t),new jc(i)},Dl.version="19.2.5",Dl}var Rv;function lw(){if(Rv)return em.exports;Rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),em.exports=ow(),em.exports}var uw=lw();/**
 * react-router v7.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Iv="popstate";function Cv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function cw(r={}){function e(s,o){var y;let u=(y=o.state)==null?void 0:y.masked,{pathname:f,search:m,hash:p}=u||s.location;return wm("",{pathname:f,search:m,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",u?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function n(s,o){return typeof o=="string"?o:Fl(o)}return fw(e,n,null,r)}function ot(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ri(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hw(){return Math.random().toString(36).substring(2,10)}function Nv(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function wm(r,e,n=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?yo(e):e,state:n,key:e&&e.key||s||hw(),mask:o}}function Fl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function yo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function fw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function T(){m="POP";let K=E(),ee=K==null?null:K-y;y=K,p&&p({action:m,location:J.location,delta:ee})}function N(K,ee){m="PUSH";let ae=Cv(K)?K:wm(J.location,K,ee);y=E()+1;let se=Nv(ae,y),de=J.createHref(ae.mask||ae);try{f.pushState(se,"",de)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;o.location.assign(de)}u&&p&&p({action:m,location:J.location,delta:1})}function z(K,ee){m="REPLACE";let ae=Cv(K)?K:wm(J.location,K,ee);y=E();let se=Nv(ae,y),de=J.createHref(ae.mask||ae);f.replaceState(se,"",de),u&&p&&p({action:m,location:J.location,delta:0})}function X(K){return dw(K)}let J={get action(){return m},get location(){return r(o,f)},listen(K){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Iv,T),p=K,()=>{o.removeEventListener(Iv,T),p=null}},createHref(K){return e(o,K)},createURL:X,encodeLocation(K){let ee=X(K);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:N,replace:z,go(K){return f.go(K)}};return J}function dw(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ot(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Fl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function AE(r,e,n="/"){return mw(r,e,n,!1)}function mw(r,e,n,s,o){let u=typeof e=="string"?yo(e):e,f=ar(u.pathname||"/",n);if(f==null)return null;let m=pw(r),p=null,y=Iw(f);for(let E=0;p==null&&E<m.length;++E)p=ww(m[E],y,s);return p}function pw(r){let e=bE(r);return gw(e),e}function bE(r,e=[],n=[],s="",o=!1){let u=(f,m,p=o,y)=>{let E={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(s)&&p)return;ot(E.relativePath.startsWith(s),`Absolute route path "${E.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(s.length)}let T=ii([s,E.relativePath]),N=n.concat(E);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),bE(f.children,e,N,T,p)),!(f.path==null&&!f.index)&&e.push({path:T,score:Aw(T,f.index),routesMeta:N})};return r.forEach((f,m)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,m);else for(let y of wE(f.path))u(f,m,!0,y)}),e}function wE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=wE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function gw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:bw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var yw=/^:[\w-]+$/,_w=3,vw=2,Ew=1,Tw=10,Sw=-2,Dv=r=>r==="*";function Aw(r,e){let n=r.split("/"),s=n.length;return n.some(Dv)&&(s+=Sw),e&&(s+=vw),n.filter(o=>!Dv(o)).reduce((o,u)=>o+(yw.test(u)?_w:u===""?Ew:Tw),s)}function bw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function ww(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",T=oh({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),N=p.route;if(!T&&y&&n&&!s[s.length-1].route.index&&(T=oh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),f.push({params:o,pathname:ii([u,T.pathname]),pathnameBase:Ow(ii([u,T.pathnameBase])),route:N}),T.pathnameBase!=="/"&&(u=ii([u,T.pathnameBase]))}return f}function oh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Rw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:T},N)=>{if(E==="*"){let X=m[N]||"";f=u.slice(0,u.length-X.length).replace(/(.)\/+$/,"$1")}const z=m[N];return T&&!z?y[E]=void 0:y[E]=(z||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function Rw(r,e=!1,n=!0){ri(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p,y,E)=>{if(s.push({paramName:m,isOptional:p!=null}),p){let T=E.charAt(y+f.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Iw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ri(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ar(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}var Cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Nw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?yo(r):r,u;return n?(n=RE(n),n.startsWith("/")?u=Ov(n.substring(1),"/"):u=Ov(n,e)):u=e,{pathname:u,search:Mw(s),hash:xw(o)}}function Ov(r,e){let n=lh(e).split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function rm(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ip(r){let e=Dw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function Ch(r,e,n,s=!1){let o;typeof r=="string"?o=yo(r):(o={...r},ot(!o.pathname||!o.pathname.includes("?"),rm("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),rm("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),rm("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let T=e.length-1;if(!s&&f.startsWith("..")){let N=f.split("/");for(;N[0]==="..";)N.shift(),T-=1;o.pathname=N.join("/")}m=T>=0?e[T]:"/"}let p=Nw(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var RE=r=>r.replace(/\/\/+/g,"/"),ii=r=>RE(r.join("/")),lh=r=>r.replace(/\/+$/,""),Ow=r=>lh(r).replace(/^\/*/,"/"),Mw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,xw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Vw=class{constructor(r,e,n,s=!1){this.status=r,this.statusText=e||"",this.internal=s,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function kw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Lw(r){let e=r.map(n=>n.route.path).filter(Boolean);return ii(e)||"/"}var IE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function CE(r,e){let n=r;if(typeof n!="string"||!Cw.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let s=n,o=!1;if(IE)try{let u=new URL(window.location.href),f=n.startsWith("//")?new URL(u.protocol+n):new URL(n),m=ar(f.pathname,e);f.origin===u.origin&&m!=null?n=m+f.search+f.hash:o=!0}catch{ri(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var NE=["POST","PUT","PATCH","DELETE"];new Set(NE);var Pw=["GET",...NE];new Set(Pw);var _o=B.createContext(null);_o.displayName="DataRouter";var Nh=B.createContext(null);Nh.displayName="DataRouterState";var DE=B.createContext(!1);function Uw(){return B.useContext(DE)}var OE=B.createContext({isTransitioning:!1});OE.displayName="ViewTransition";var zw=B.createContext(new Map);zw.displayName="Fetchers";var jw=B.createContext(null);jw.displayName="Await";var Rn=B.createContext(null);Rn.displayName="Navigation";var Wl=B.createContext(null);Wl.displayName="Location";var Bn=B.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var rp=B.createContext(null);rp.displayName="RouteError";var ME="REACT_ROUTER_ERROR",Bw="REDIRECT",Hw="ROUTE_ERROR_RESPONSE";function qw(r){if(r.startsWith(`${ME}:${Bw}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Fw(r){if(r.startsWith(`${ME}:${Hw}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Vw(e.status,e.statusText,e.data)}catch{}}function Gw(r,{relative:e}={}){ot(vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=B.useContext(Rn),{hash:o,pathname:u,search:f}=tu(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:ii([n,u])),s.createHref({pathname:m,search:f,hash:o})}function vo(){return B.useContext(Wl)!=null}function ai(){return ot(vo(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(Wl).location}var xE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function VE(r){B.useContext(Rn).static||B.useLayoutEffect(r)}function eu(){let{isDataRoute:r}=B.useContext(Bn);return r?o1():Kw()}function Kw(){ot(vo(),"useNavigate() may be used only in the context of a <Router> component.");let r=B.useContext(_o),{basename:e,navigator:n}=B.useContext(Rn),{matches:s}=B.useContext(Bn),{pathname:o}=ai(),u=JSON.stringify(ip(s)),f=B.useRef(!1);return VE(()=>{f.current=!0}),B.useCallback((p,y={})=>{if(ri(f.current,xE),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=Ch(p,JSON.parse(u),o,y.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:ii([e,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[e,n,u,o,r])}var Yw=B.createContext(null);function $w(r){let e=B.useContext(Bn).outlet;return B.useMemo(()=>e&&B.createElement(Yw.Provider,{value:r},e),[e,r])}function Qw(){let{matches:r}=B.useContext(Bn),e=r[r.length-1];return(e==null?void 0:e.params)??{}}function tu(r,{relative:e}={}){let{matches:n}=B.useContext(Bn),{pathname:s}=ai(),o=JSON.stringify(ip(n));return B.useMemo(()=>Ch(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Xw(r,e){return kE(r,e)}function kE(r,e,n){var K;ot(vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=B.useContext(Rn),{matches:o}=B.useContext(Bn),u=o[o.length-1],f=u?u.params:{},m=u?u.pathname:"/",p=u?u.pathnameBase:"/",y=u&&u.route;{let ee=y&&y.path||"";PE(m,!y||ee.endsWith("*")||ee.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${ee}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ee}"> to <Route path="${ee==="/"?"*":`${ee}/*`}">.`)}let E=ai(),T;if(e){let ee=typeof e=="string"?yo(e):e;ot(p==="/"||((K=ee.pathname)==null?void 0:K.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${ee.pathname}" was given in the \`location\` prop.`),T=ee}else T=E;let N=T.pathname||"/",z=N;if(p!=="/"){let ee=p.replace(/^\//,"").split("/");z="/"+N.replace(/^\//,"").split("/").slice(ee.length).join("/")}let X=n&&n.state.matches.length?n.state.matches.map(ee=>Object.assign(ee,{route:n.manifest[ee.route.id]||ee.route})):AE(r,{pathname:z});ri(y||X!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),ri(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=t1(X&&X.map(ee=>Object.assign({},ee,{params:Object.assign({},f,ee.params),pathname:ii([p,s.encodeLocation?s.encodeLocation(ee.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?p:ii([p,s.encodeLocation?s.encodeLocation(ee.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:ee.pathnameBase])})),o,n);return e&&J?B.createElement(Wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...T},navigationType:"POP"}},J):J}function Zw(){let r=a1(),e=kw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:u},"ErrorBoundary")," or"," ",B.createElement("code",{style:u},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:o},n):null,f)}var Jw=B.createElement(Zw,null),LE=class extends B.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=Fw(r.digest);n&&(r=n)}let e=r!==void 0?B.createElement(Bn.Provider,{value:this.props.routeContext},B.createElement(rp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?B.createElement(Ww,{error:r},e):e}};LE.contextType=DE;var sm=new WeakMap;function Ww({children:r,error:e}){let{basename:n}=B.useContext(Rn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=qw(e.digest);if(s){let o=sm.get(e);if(o)throw o;let u=CE(s.location,n);if(IE&&!sm.get(e))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw sm.set(e,f),f}return B.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return r}function e1({routeContext:r,match:e,children:n}){let s=B.useContext(_o);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Bn.Provider,{value:r},n)}function t1(r,e=[],n){let s=n==null?void 0:n.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,u=s==null?void 0:s.errors;if(u!=null){let E=o.findIndex(T=>T.route.id&&(u==null?void 0:u[T.route.id])!==void 0);ot(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,E+1))}let f=!1,m=-1;if(n&&s){f=s.renderFallback;for(let E=0;E<o.length;E++){let T=o[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(m=E),T.route.id){let{loaderData:N,errors:z}=s,X=T.route.loader&&!N.hasOwnProperty(T.route.id)&&(!z||z[T.route.id]===void 0);if(T.route.lazy||X){n.isStatic&&(f=!0),m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}}let p=n==null?void 0:n.onError,y=s&&p?(E,T)=>{var N,z;p(E,{location:s.location,params:((z=(N=s.matches)==null?void 0:N[0])==null?void 0:z.params)??{},pattern:Lw(s.matches),errorInfo:T})}:void 0;return o.reduceRight((E,T,N)=>{let z,X=!1,J=null,K=null;s&&(z=u&&T.route.id?u[T.route.id]:void 0,J=T.route.errorElement||Jw,f&&(m<0&&N===0?(PE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,K=null):m===N&&(X=!0,K=T.route.hydrateFallbackElement||null)));let ee=e.concat(o.slice(0,N+1)),ae=()=>{let se;return z?se=J:X?se=K:T.route.Component?se=B.createElement(T.route.Component,null):T.route.element?se=T.route.element:se=E,B.createElement(e1,{match:T,routeContext:{outlet:E,matches:ee,isDataRoute:s!=null},children:se})};return s&&(T.route.ErrorBoundary||T.route.errorElement||N===0)?B.createElement(LE,{location:s.location,revalidation:s.revalidation,component:J,error:z,children:ae(),routeContext:{outlet:null,matches:ee,isDataRoute:!0},onError:y}):ae()},null)}function sp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n1(r){let e=B.useContext(_o);return ot(e,sp(r)),e}function i1(r){let e=B.useContext(Nh);return ot(e,sp(r)),e}function r1(r){let e=B.useContext(Bn);return ot(e,sp(r)),e}function ap(r){let e=r1(r),n=e.matches[e.matches.length-1];return ot(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function s1(){return ap("useRouteId")}function a1(){var s;let r=B.useContext(rp),e=i1("useRouteError"),n=ap("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function o1(){let{router:r}=n1("useNavigate"),e=ap("useNavigate"),n=B.useRef(!1);return VE(()=>{n.current=!0}),B.useCallback(async(o,u={})=>{ri(n.current,xE),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var Mv={};function PE(r,e,n){!e&&!Mv[r]&&(Mv[r]=!0,ri(!1,n))}B.memo(l1);function l1({routes:r,manifest:e,future:n,state:s,isStatic:o,onError:u}){return kE(r,void 0,{manifest:e,state:s,isStatic:o,onError:u})}function u1({to:r,replace:e,state:n,relative:s}){ot(vo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=B.useContext(Rn);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=B.useContext(Bn),{pathname:f}=ai(),m=eu(),p=Ch(r,ip(u),f,s==="path"),y=JSON.stringify(p);return B.useEffect(()=>{m(JSON.parse(y),{replace:e,state:n,relative:s})},[m,y,s,e,n]),null}function c1(r){return $w(r.context)}function Gr(r){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function h1({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1,useTransitions:f}){ot(!vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),p=B.useMemo(()=>({basename:m,navigator:o,static:u,useTransitions:f,future:{}}),[m,o,u,f]);typeof n=="string"&&(n=yo(n));let{pathname:y="/",search:E="",hash:T="",state:N=null,key:z="default",mask:X}=n,J=B.useMemo(()=>{let K=ar(y,m);return K==null?null:{location:{pathname:K,search:E,hash:T,state:N,key:z,mask:X},navigationType:s}},[m,y,E,T,N,z,s,X]);return ri(J!=null,`<Router basename="${m}"> is not able to match the URL "${y}${E}${T}" because it does not start with the basename, so the <Router> won't render anything.`),J==null?null:B.createElement(Rn.Provider,{value:p},B.createElement(Wl.Provider,{children:e,value:J}))}function f1({children:r,location:e}){return Xw(Rm(r),e)}function Rm(r,e=[]){let n=[];return B.Children.forEach(r,(s,o)=>{if(!B.isValidElement(s))return;let u=[...e,o];if(s.type===B.Fragment){n.push.apply(n,Rm(s.props.children,u));return}ot(s.type===Gr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Rm(s.props.children,u)),n.push(f)}),n}var Xc="get",Zc="application/x-www-form-urlencoded";function Dh(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function d1(r){return Dh(r)&&r.tagName.toLowerCase()==="button"}function m1(r){return Dh(r)&&r.tagName.toLowerCase()==="form"}function p1(r){return Dh(r)&&r.tagName.toLowerCase()==="input"}function g1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function y1(r,e){return r.button===0&&(!e||e==="_self")&&!g1(r)}var Hc=null;function _1(){if(Hc===null)try{new FormData(document.createElement("form"),0),Hc=!1}catch{Hc=!0}return Hc}var v1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function am(r){return r!=null&&!v1.has(r)?(ri(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):r}function E1(r,e){let n,s,o,u,f;if(m1(r)){let m=r.getAttribute("action");s=m?ar(m,e):null,n=r.getAttribute("method")||Xc,o=am(r.getAttribute("enctype"))||Zc,u=new FormData(r)}else if(d1(r)||p1(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?ar(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||Xc,o=am(r.getAttribute("formenctype"))||am(m.getAttribute("enctype"))||Zc,u=new FormData(m,r),!_1()){let{name:y,type:E,value:T}=r;if(E==="image"){let N=y?`${y}.`:"";u.append(`${N}x`,"0"),u.append(`${N}y`,"0")}else y&&u.append(y,T)}}else{if(Dh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Xc,s=null,o=Zc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function UE(r,e,n,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&ar(o.pathname,e)==="/"?o.pathname=`${lh(e)}/_root.${s}`:o.pathname=`${lh(o.pathname)}.${s}`,o}async function T1(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function S1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function A1(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await T1(u,n);return f.links?f.links():[]}return[]}));return I1(s.flat(1).filter(S1).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function xv(r,e,n,s,o,u){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,y)=>f(p,y)||m(p,y)):u==="data"?e.filter((p,y)=>{var T;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let N=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=n[0])==null?void 0:T.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function b1(r,e,{includeHydrateFallback:n}={}){return w1(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function w1(r){return[...new Set(r)]}function R1(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function I1(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(R1(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function lp(){let r=B.useContext(_o);return op(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function C1(){let r=B.useContext(Nh);return op(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var up=B.createContext(void 0);up.displayName="FrameworkContext";function cp(){let r=B.useContext(up);return op(r,"You must render this element inside a <HydratedRouter> element"),r}function N1(r,e){let n=B.useContext(up),[s,o]=B.useState(!1),[u,f]=B.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,N=B.useRef(null);B.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let J=ee=>{ee.forEach(ae=>{f(ae.isIntersecting)})},K=new IntersectionObserver(J,{threshold:.5});return N.current&&K.observe(N.current),()=>{K.disconnect()}}},[r]),B.useEffect(()=>{if(s){let J=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(J)}}},[s]);let z=()=>{o(!0)},X=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,N,{}]:[u,N,{onFocus:Ol(m,z),onBlur:Ol(p,X),onMouseEnter:Ol(y,z),onMouseLeave:Ol(E,X),onTouchStart:Ol(T,z)}]:[!1,N,{}]}function Ol(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function D1({page:r,...e}){let n=Uw(),{router:s}=lp(),o=B.useMemo(()=>AE(s.routes,r,s.basename),[s.routes,r,s.basename]);return o?n?B.createElement(M1,{page:r,matches:o,...e}):B.createElement(x1,{page:r,matches:o,...e}):null}function O1(r){let{manifest:e,routeModules:n}=cp(),[s,o]=B.useState([]);return B.useEffect(()=>{let u=!1;return A1(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function M1({page:r,matches:e,...n}){let s=ai(),{future:o}=cp(),{basename:u}=lp(),f=B.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let m=UE(r,u,o.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,y=[];for(let E of e)typeof E.route.shouldRevalidate=="function"?p=!0:y.push(E.route.id);return p&&y.length>0&&m.searchParams.set("_routes",y.join(",")),[m.pathname+m.search]},[u,o.unstable_trailingSlashAwareDataRequests,r,s,e]);return B.createElement(B.Fragment,null,f.map(m=>B.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})))}function x1({page:r,matches:e,...n}){let s=ai(),{future:o,manifest:u,routeModules:f}=cp(),{basename:m}=lp(),{loaderData:p,matches:y}=C1(),E=B.useMemo(()=>xv(r,e,y,u,s,"data"),[r,e,y,u,s]),T=B.useMemo(()=>xv(r,e,y,u,s,"assets"),[r,e,y,u,s]),N=B.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let J=new Set,K=!1;if(e.forEach(ae=>{var de;let se=u.routes[ae.route.id];!se||!se.hasLoader||(!E.some(ge=>ge.route.id===ae.route.id)&&ae.route.id in p&&((de=f[ae.route.id])!=null&&de.shouldRevalidate)||se.hasClientLoader?K=!0:J.add(ae.route.id))}),J.size===0)return[];let ee=UE(r,m,o.unstable_trailingSlashAwareDataRequests,"data");return K&&J.size>0&&ee.searchParams.set("_routes",e.filter(ae=>J.has(ae.route.id)).map(ae=>ae.route.id).join(",")),[ee.pathname+ee.search]},[m,o.unstable_trailingSlashAwareDataRequests,p,s,u,E,e,r,f]),z=B.useMemo(()=>b1(T,u),[T,u]),X=O1(T);return B.createElement(B.Fragment,null,N.map(J=>B.createElement("link",{key:J,rel:"prefetch",as:"fetch",href:J,...n})),z.map(J=>B.createElement("link",{key:J,rel:"modulepreload",href:J,...n})),X.map(({key:J,link:K})=>B.createElement("link",{key:J,nonce:n.nonce,...K,crossOrigin:K.crossOrigin??n.crossOrigin})))}function V1(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var k1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{k1&&(window.__reactRouterVersion="7.15.0")}catch{}function L1({basename:r,children:e,useTransitions:n,window:s}){let o=B.useRef();o.current==null&&(o.current=cw({window:s,v5Compat:!0}));let u=o.current,[f,m]=B.useState({action:u.action,location:u.location}),p=B.useCallback(y=>{n===!1?m(y):B.startTransition(()=>m(y))},[n]);return B.useLayoutEffect(()=>u.listen(p),[u,p]),B.createElement(h1,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:u,useTransitions:n})}var zE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jE=B.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,mask:m,state:p,target:y,to:E,preventScrollReset:T,viewTransition:N,defaultShouldRevalidate:z,...X},J){let{basename:K,navigator:ee,useTransitions:ae}=B.useContext(Rn),se=typeof E=="string"&&zE.test(E),de=CE(E,K);E=de.to;let ge=Gw(E,{relative:o}),ve=ai(),R=null;if(m){let $e=Ch(m,[],ve.mask?ve.mask.pathname:"/",!0);K!=="/"&&($e.pathname=$e.pathname==="/"?K:ii([K,$e.pathname])),R=ee.createHref($e)}let[b,C,x]=N1(s,X),O=j1(E,{replace:f,mask:m,state:p,target:y,preventScrollReset:T,relative:o,viewTransition:N,defaultShouldRevalidate:z,useTransitions:ae});function k($e){e&&e($e),$e.defaultPrevented||O($e)}let w=!(de.isExternal||u),We=B.createElement("a",{...X,...x,href:(w?R:void 0)||de.absoluteURL||ge,onClick:w?k:e,ref:V1(J,C),target:y,"data-discover":!se&&n==="render"?"true":void 0});return b&&!se?B.createElement(B.Fragment,null,We,B.createElement(D1,{page:ge})):We});jE.displayName="Link";var P1=B.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...y},E){let T=tu(f,{relative:y.relative}),N=ai(),z=B.useContext(Nh),{navigator:X,basename:J}=B.useContext(Rn),K=z!=null&&G1(T)&&m===!0,ee=X.encodeLocation?X.encodeLocation(T).pathname:T.pathname,ae=N.pathname,se=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;n||(ae=ae.toLowerCase(),se=se?se.toLowerCase():null,ee=ee.toLowerCase()),se&&J&&(se=ar(se,J)||se);const de=ee!=="/"&&ee.endsWith("/")?ee.length-1:ee.length;let ge=ae===ee||!o&&ae.startsWith(ee)&&ae.charAt(de)==="/",ve=se!=null&&(se===ee||!o&&se.startsWith(ee)&&se.charAt(ee.length)==="/"),R={isActive:ge,isPending:ve,isTransitioning:K},b=ge?e:void 0,C;typeof s=="function"?C=s(R):C=[s,ge?"active":null,ve?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let x=typeof u=="function"?u(R):u;return B.createElement(jE,{...y,"aria-current":b,className:C,ref:E,style:x,to:f,viewTransition:m},typeof p=="function"?p(R):p)});P1.displayName="NavLink";var U1=B.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=Xc,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,defaultShouldRevalidate:N,...z},X)=>{let{useTransitions:J}=B.useContext(Rn),K=q1(),ee=F1(m,{relative:y}),ae=f.toLowerCase()==="get"?"get":"post",se=typeof m=="string"&&zE.test(m),de=ge=>{if(p&&p(ge),ge.defaultPrevented)return;ge.preventDefault();let ve=ge.nativeEvent.submitter,R=(ve==null?void 0:ve.getAttribute("formmethod"))||f,b=()=>K(ve||ge.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:T,defaultShouldRevalidate:N});J&&n!==!1?B.startTransition(()=>b()):b()};return B.createElement("form",{ref:X,method:ae,action:ee,onSubmit:s?p:de,...z,"data-discover":!se&&r==="render"?"true":void 0})});U1.displayName="Form";function z1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BE(r){let e=B.useContext(_o);return ot(e,z1(r)),e}function j1(r,{target:e,replace:n,mask:s,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p,useTransitions:y}={}){let E=eu(),T=ai(),N=tu(r,{relative:f});return B.useCallback(z=>{if(y1(z,e)){z.preventDefault();let X=n!==void 0?n:Fl(T)===Fl(N),J=()=>E(r,{replace:X,mask:s,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p});y?B.startTransition(()=>J()):J()}},[T,E,N,n,s,o,e,r,u,f,m,p,y])}var B1=0,H1=()=>`__${String(++B1)}__`;function q1(){let{router:r}=BE("useSubmit"),{basename:e}=B.useContext(Rn),n=s1(),s=r.fetch,o=r.navigate;return B.useCallback(async(u,f={})=>{let{action:m,method:p,encType:y,formData:E,body:T}=E1(u,e);if(f.navigate===!1){let N=f.fetcherKey||H1();await s(N,n,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:T,formMethod:f.method||p,formEncType:f.encType||y,flushSync:f.flushSync})}else await o(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:E,body:T,formMethod:f.method||p,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:n,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,o,e,n])}function F1(r,{relative:e}={}){let{basename:n}=B.useContext(Rn),s=B.useContext(Bn);ot(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...tu(r||".",{relative:e})},f=ai();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(T=>T).forEach(T=>m.append("index",T));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ii([n,u.pathname])),Fl(u)}function G1(r,{relative:e}={}){let n=B.useContext(OE);ot(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=BE("useViewTransitionState"),o=tu(r,{relative:e});if(!n.isTransitioning)return!1;let u=ar(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=ar(n.nextLocation.pathname,s)||n.nextLocation.pathname;return oh(o.pathname,f)!=null||oh(o.pathname,u)!=null}const K1=()=>{};var Vv={};/**
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
 */const HE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Y1=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},qE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,T=(u&3)<<4|m>>4;let N=(m&15)<<2|y>>6,z=y&63;p||(z=64,f||(N=64)),s.push(n[E],n[T],n[N],n[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(HE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Y1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const T=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||T==null)throw new $1;const N=u<<2|m>>4;if(s.push(N),y!==64){const z=m<<4&240|y>>2;if(s.push(z),T!==64){const X=y<<6&192|T;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q1=function(r){const e=HE(r);return qE.encodeByteArray(e,!0)},uh=function(r){return Q1(r).replace(/\./g,"")},FE=function(r){try{return qE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Z1=()=>X1().__FIREBASE_DEFAULTS__,J1=()=>{if(typeof process>"u"||typeof Vv>"u")return;const r=Vv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},W1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&FE(r[1]);return e&&JSON.parse(e)},Oh=()=>{try{return K1()||Z1()||J1()||W1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},GE=r=>{var e,n;return(n=(e=Oh())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},hp=r=>{const e=GE(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},KE=()=>{var r;return(r=Oh())==null?void 0:r.config},YE=r=>{var e;return(e=Oh())==null?void 0:e[`_${r}`]};/**
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
 */class eR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $E(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uh(JSON.stringify(n)),uh(JSON.stringify(f)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function nR(){var e;const r=(e=Oh())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function rR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sR(){const r=Wt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function aR(){return!nR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function oR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const lR="FirebaseError";class Hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lR,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?uR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Hn(o,m,s)}}function uR(r,e){return r.replace(cR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const cR=/\{\$([^}]+)}/g;function hR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function as(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(kv(u)&&kv(f)){if(!as(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function kv(r){return r!==null&&typeof r=="object"}/**
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
 */function nu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Vl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function fR(r,e){const n=new dR(r,e);return n.subscribe.bind(n)}class dR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=om),o.error===void 0&&(o.error=om),o.complete===void 0&&(o.complete=om);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mR(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function om(){}/**
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
 */const pR=1e3,gR=2,yR=14400*1e3,_R=.5;function Lv(r,e=pR,n=gR){const s=e*Math.pow(n,r),o=Math.round(_R*s*(Math.random()-.5)*2);return Math.min(yR,s+o)}/**
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
 */function na(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mh(r){return(await fetch(r,{credentials:"include"})).ok}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gs="[DEFAULT]";/**
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
 */class vR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TR(e))try{this.getOrInitializeService({instanceIdentifier:Gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gs){return this.instances.has(e)}getOptions(e=Gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ER(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gs){return this.component?this.component.multipleInstances?e:Gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ER(r){return r===Gs?void 0:r}function TR(r){return r.instantiationMode==="EAGER"}/**
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
 */class SR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const AR={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},bR=Me.INFO,wR={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},RR=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=wR[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=bR,this._logHandler=RR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const IR=(r,e)=>e.some(n=>r instanceof n);let Pv,Uv;function CR(){return Pv||(Pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NR(){return Uv||(Uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JE=new WeakMap,Im=new WeakMap,WE=new WeakMap,lm=new WeakMap,fp=new WeakMap;function DR(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Jr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&JE.set(n,r)}).catch(()=>{}),fp.set(e,r),e}function OR(r){if(Im.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Im.set(r,e)}let Cm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Im.get(r);if(e==="objectStoreNames")return r.objectStoreNames||WE.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function MR(r){Cm=r(Cm)}function xR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(um(this),e,...n);return WE.set(s,e.sort?e.sort():[e]),Jr(s)}:NR().includes(r)?function(...e){return r.apply(um(this),e),Jr(JE.get(this))}:function(...e){return Jr(r.apply(um(this),e))}}function VR(r){return typeof r=="function"?xR(r):(r instanceof IDBTransaction&&OR(r),IR(r,CR())?new Proxy(r,Cm):r)}function Jr(r){if(r instanceof IDBRequest)return DR(r);if(lm.has(r))return lm.get(r);const e=VR(r);return e!==r&&(lm.set(r,e),fp.set(e,r)),e}const um=r=>fp.get(r);function eT(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Jr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Jr(f.result),p.oldVersion,p.newVersion,Jr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const kR=["get","getKey","getAll","getAllKeys","count"],LR=["put","add","delete","clear"],cm=new Map;function zv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(cm.get(e))return cm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=LR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||kR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return cm.set(e,u),u}MR(r=>({...r,get:(e,n,s)=>zv(e,n)||r.get(e,n,s),has:(e,n)=>!!zv(e,n)||r.has(e,n)}));/**
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
 */class PR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function UR(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nm="@firebase/app",jv="0.14.11";/**
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
 */const or=new xh("@firebase/app"),zR="@firebase/app-compat",jR="@firebase/analytics-compat",BR="@firebase/analytics",HR="@firebase/app-check-compat",qR="@firebase/app-check",FR="@firebase/auth",GR="@firebase/auth-compat",KR="@firebase/database",YR="@firebase/data-connect",$R="@firebase/database-compat",QR="@firebase/functions",XR="@firebase/functions-compat",ZR="@firebase/installations",JR="@firebase/installations-compat",WR="@firebase/messaging",eI="@firebase/messaging-compat",tI="@firebase/performance",nI="@firebase/performance-compat",iI="@firebase/remote-config",rI="@firebase/remote-config-compat",sI="@firebase/storage",aI="@firebase/storage-compat",oI="@firebase/firestore",lI="@firebase/ai",uI="@firebase/firestore-compat",cI="firebase",hI="12.12.0";/**
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
 */const Dm="[DEFAULT]",fI={[Nm]:"fire-core",[zR]:"fire-core-compat",[BR]:"fire-analytics",[jR]:"fire-analytics-compat",[qR]:"fire-app-check",[HR]:"fire-app-check-compat",[FR]:"fire-auth",[GR]:"fire-auth-compat",[KR]:"fire-rtdb",[YR]:"fire-data-connect",[$R]:"fire-rtdb-compat",[QR]:"fire-fn",[XR]:"fire-fn-compat",[ZR]:"fire-iid",[JR]:"fire-iid-compat",[WR]:"fire-fcm",[eI]:"fire-fcm-compat",[tI]:"fire-perf",[nI]:"fire-perf-compat",[iI]:"fire-rc",[rI]:"fire-rc-compat",[sI]:"fire-gcs",[aI]:"fire-gcs-compat",[oI]:"fire-fst",[uI]:"fire-fst-compat",[lI]:"fire-vertex","fire-js":"fire-js",[cI]:"fire-js-all"};/**
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
 */const ch=new Map,dI=new Map,Om=new Map;function Bv(r,e){try{r.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function jn(r){const e=r.name;if(Om.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Om.set(e,r);for(const n of ch.values())Bv(n,r);for(const n of dI.values())Bv(n,r);return!0}function cr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function An(r){return r==null?!1:r.settings!==void 0}/**
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
 */const mI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new ta("app","Firebase",mI);/**
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
 */class pI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ia=hI;function tT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Dm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Wr.create("bad-app-name",{appName:String(o)});if(n||(n=KE()),!n)throw Wr.create("no-options");const u=ch.get(o);if(u){if(as(n,u.options)&&as(s,u.config))return u;throw Wr.create("duplicate-app",{appName:o})}const f=new SR(o);for(const p of Om.values())f.addComponent(p);const m=new pI(n,s,f);return ch.set(o,m),m}function iu(r=Dm){const e=ch.get(r);if(!e&&r===Dm&&KE())return tT();if(!e)throw Wr.create("no-app",{appName:r});return e}function Jt(r,e,n){let s=fI[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(f.join(" "));return}jn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gI="firebase-heartbeat-database",yI=1,Gl="firebase-heartbeat-store";let hm=null;function nT(){return hm||(hm=eT(gI,yI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Wr.create("idb-open",{originalErrorMessage:r.message})})),hm}async function _I(r){try{const n=(await nT()).transaction(Gl),s=await n.objectStore(Gl).get(iT(r));return await n.done,s}catch(e){if(e instanceof Hn)or.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Hv(r,e){try{const s=(await nT()).transaction(Gl,"readwrite");await s.objectStore(Gl).put(e,iT(r)),await s.done}catch(n){if(n instanceof Hn)or.warn(n.message);else{const s=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(s.message)}}}function iT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const vI=1024,EI=30;class TI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=qv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>EI){const f=bI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){or.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qv(),{heartbeatsToSend:s,unsentEntries:o}=SI(this._heartbeatsCache.heartbeats),u=uh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return or.warn(n),""}}}function qv(){return new Date().toISOString().substring(0,10)}function SI(r,e=vI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Fv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Fv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _I(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fv(r){return uh(JSON.stringify({version:2,heartbeats:r})).length}function bI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function wI(r){jn(new wn("platform-logger",e=>new PR(e),"PRIVATE")),jn(new wn("heartbeat",e=>new TI(e),"PRIVATE")),Jt(Nm,jv,r),Jt(Nm,jv,"esm2020"),Jt("fire-js","")}wI("");function rT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RI=rT,sT=new ta("auth","Firebase",rT());/**
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
 */const hh=new xh("@firebase/auth");function II(r,...e){hh.logLevel<=Me.WARN&&hh.warn(`Auth (${ia}): ${r}`,...e)}function Jc(r,...e){hh.logLevel<=Me.ERROR&&hh.error(`Auth (${ia}): ${r}`,...e)}/**
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
 */function si(r,...e){throw dp(r,...e)}function Mi(r,...e){return dp(r,...e)}function aT(r,e,n){const s={...RI(),[e]:n};return new ta("auth","Firebase",s).create(e,{appName:r.name})}function es(r){return aT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return sT.create(r,...e)}function _e(r,e,...n){if(!r)throw dp(e,...n)}function rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Jc(e),new Error(e)}function lr(r,e){r||rr(e)}/**
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
 */function Mm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function CI(){return Gv()==="http:"||Gv()==="https:"}function Gv(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function NI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CI()||QE()||"connection"in navigator)?navigator.onLine:!0}function DI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=tR()||rR()}get(){return NI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mp(r,e){lr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class oT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xI=new ru(3e4,6e4);function ra(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ds(r,e,n,s,o={}){return lT(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=nu({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:p,...u};return iR()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&na(r.emulatorConfig.host)&&(y.credentials="include"),oT.fetch()(await uT(r,r.config.apiHost,n,m),y)})}async function lT(r,e,n){r._canInitEmulator=!1;const s={...OI,...e};try{const o=new kI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw qc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw qc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw qc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw aT(r,E,y);si(r,E)}}catch(o){if(o instanceof Hn)throw o;si(r,"network-request-failed",{message:String(o)})}}async function Vh(r,e,n,s,o={}){const u=await ds(r,e,n,s,o);return"mfaPendingCredential"in u&&si(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function uT(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?mp(r.config,o):`${r.config.apiScheme}://${o}`;return MI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function VI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mi(this.auth,"network-request-failed")),xI.get())})}}function qc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Mi(r,e,s);return o.customData._tokenResponse=n,o}function Kv(r){return r!==void 0&&r.enterprise!==void 0}class LI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PI(r,e){return ds(r,"GET","/v2/recaptchaConfig",ra(r,e))}/**
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
 */async function UI(r,e){return ds(r,"POST","/v1/accounts:delete",e)}async function fh(r,e){return ds(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function zl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zI(r,e=!1){const n=Ut(r),s=await n.getIdToken(e),o=pp(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:zl(fm(o.auth_time)),issuedAtTime:zl(fm(o.iat)),expirationTime:zl(fm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function fm(r){return Number(r)*1e3}function pp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Jc("JWT malformed, contained fewer than 3 sections"),null;try{const o=FE(n);return o?JSON.parse(o):(Jc("Failed to decode base64 JWT payload"),null)}catch(o){return Jc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Yv(r){const e=pp(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Hn&&jI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function jI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zl(this.lastLoginAt),this.creationTime=zl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dh(r){var T;const e=r.auth,n=await r.getIdToken(),s=await Kl(r,fh(e,{idToken:n}));_e(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?cT(o.providerUserInfo):[],f=qI(r.providerData,u),m=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new xm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function HI(r){const e=Ut(r);await dh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function cT(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function FI(r,e){const n=await lT(r,{},async()=>{const s=nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await uT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&na(r.emulatorConfig.host)&&(p.credentials="include"),oT.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GI(r,e){return ds(r,"POST","/v2/accounts:revokeToken",ra(r,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Yv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await FI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new to;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
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
 */function Fr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ti{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Kl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zI(this,e)}reload(){return HI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await dh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await Kl(this,UI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:T,emailVerified:N,isAnonymous:z,providerData:X,stsTokenManager:J}=n;_e(T&&J,e,"internal-error");const K=to.fromJSON(this.name,J);_e(typeof T=="string",e,"internal-error"),Fr(s,e.name),Fr(o,e.name),_e(typeof N=="boolean",e,"internal-error"),_e(typeof z=="boolean",e,"internal-error"),Fr(u,e.name),Fr(f,e.name),Fr(m,e.name),Fr(p,e.name),Fr(y,e.name),Fr(E,e.name);const ee=new ti({uid:T,auth:e,email:o,emailVerified:N,displayName:s,isAnonymous:z,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:K,createdAt:y,lastLoginAt:E});return X&&Array.isArray(X)&&(ee.providerData=X.map(ae=>({...ae}))),p&&(ee._redirectEventId=p),ee}static async _fromIdTokenResponse(e,n,s=!1){const o=new to;o.updateFromServerResponse(n);const u=new ti({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await dh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?cT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new to;m.updateFromIdToken(s);const p=new ti({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new xm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const $v=new Map;function sr(r){lr(r instanceof Function,"Expected a class definition");let e=$v.get(r);return e?(lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,$v.set(r,e),e)}/**
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
 */class hT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hT.type="NONE";const Qv=hT;/**
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
 */function Wc(r,e,n){return`firebase:${r}:${e}:${n}`}class no{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Wc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Wc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await fh(this.auth,{idToken:e}).catch(()=>{});return n?ti._fromGetAccountInfoResponse(this.auth,n,e):null}return ti._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new no(sr(Qv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||sr(Qv);const f=Wc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let T;if(typeof E=="string"){const N=await fh(e,{idToken:E}).catch(()=>{});if(!N)break;T=await ti._fromGetAccountInfoResponse(e,N,E)}else T=ti._fromJSON(e,E);y!==u&&(m=T),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new no(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new no(u,e,s))}}/**
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
 */function Xv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yT(e))return"Blackberry";if(_T(e))return"Webos";if(dT(e))return"Safari";if((e.includes("chrome/")||mT(e))&&!e.includes("edge/"))return"Chrome";if(gT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fT(r=Wt()){return/firefox\//i.test(r)}function dT(r=Wt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mT(r=Wt()){return/crios\//i.test(r)}function pT(r=Wt()){return/iemobile/i.test(r)}function gT(r=Wt()){return/android/i.test(r)}function yT(r=Wt()){return/blackberry/i.test(r)}function _T(r=Wt()){return/webos/i.test(r)}function gp(r=Wt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function KI(r=Wt()){var e;return gp(r)&&!!((e=window.navigator)!=null&&e.standalone)}function YI(){return sR()&&document.documentMode===10}function vT(r=Wt()){return gp(r)||gT(r)||_T(r)||yT(r)||/windows phone/i.test(r)||pT(r)}/**
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
 */function ET(r,e=[]){let n;switch(r){case"Browser":n=Xv(Wt());break;case"Worker":n=`${Xv(Wt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ia}/${s}`}/**
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
 */class $I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function QI(r,e={}){return ds(r,"GET","/v2/passwordPolicy",ra(r,e))}/**
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
 */const XI=6;class ZI{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class JI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zv(this),this.idTokenSubscription=new Zv(this),this.beforeStateQueue=new $I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fh(this,{idToken:e}),s=await ti._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(An(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(es(this));const n=e?Ut(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QI(this),n=new ZI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await GI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ET(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&II(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Eo(r){return Ut(r)}class Zv{constructor(e){this.auth=e,this.observer=null,this.addObserver=fR(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WI(r){kh=r}function TT(r){return kh.loadJS(r)}function eC(){return kh.recaptchaEnterpriseScript}function tC(){return kh.gapiScript}function nC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class iC{constructor(){this.enterprise=new rC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sC="recaptcha-enterprise",ST="NO_RECAPTCHA";class aC{constructor(e){this.type=sC,this.auth=Eo(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{PI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new LI(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Kv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(ST)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Kv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=eC();p.length!==0&&(p+=m),TT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Jv(r,e,n,s=!1,o=!1){const u=new aC(r);let f;if(o)f=ST;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Wv(r,e,n,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Jv(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Jv(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function oC(r,e){const n=cr(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(as(u,e??{}))return o;si(o,"already-initialized")}return n.initialize({options:e})}function lC(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uC(r,e,n){const s=Eo(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=AT(e),{host:f,port:m}=cC(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(as(y,s.config.emulator)&&as(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,na(f)?Mh(`${u}//${f}${p}`):hC()}function AT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function cC(r){const e=AT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:e0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:e0(f)}}}function e0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function hC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,n){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}async function fC(r,e){return ds(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dC(r,e){return Vh(r,"POST","/v1/accounts:signInWithPassword",ra(r,e))}/**
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
 */async function mC(r,e){return Vh(r,"POST","/v1/accounts:signInWithEmailLink",ra(r,e))}async function pC(r,e){return Vh(r,"POST","/v1/accounts:signInWithEmailLink",ra(r,e))}/**
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
 */class Yl extends yp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Yl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Yl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wv(e,n,"signInWithPassword",dC);case"emailLink":return mC(e,{email:this._email,oobCode:this._password});default:si(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wv(e,s,"signUpPassword",fC);case"emailLink":return pC(e,{idToken:n,email:this._email,oobCode:this._password});default:si(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function io(r,e){return Vh(r,"POST","/v1/accounts:signInWithIdp",ra(r,e))}/**
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
 */const gC="http://localhost";class Xs extends yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):si("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Xs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,io(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nu(n)}return e}}/**
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
 */function yC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _C(r){const e=xl(Vl(r)).link,n=e?xl(Vl(e)).deep_link_id:null,s=xl(Vl(r)).deep_link_id;return(s?xl(Vl(s)).link:null)||s||n||e||r}class _p{constructor(e){const n=xl(Vl(e)),s=n.apiKey??null,o=n.oobCode??null,u=yC(n.mode??null);_e(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=_C(e);try{return new _p(n)}catch{return null}}}/**
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
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return Yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=_p.parseLink(n);return _e(s,"argument-error"),Yl._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class su extends bT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends su{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Yr extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yr.credential(n,s)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
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
 */class $r extends su{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Qr extends su{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
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
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ti._fromIdTokenResponse(e,s,o),f=t0(s);return new uo({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=t0(s);return new uo({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function t0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class mh extends Hn{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new mh(e,n,s,o)}}function wT(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?mh._fromErrorAndOperation(r,u,e,s):u})}async function vC(r,e,n=!1){const s=await Kl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return uo._forOperation(r,"link",s)}/**
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
 */async function EC(r,e,n=!1){const{auth:s}=r;if(An(s.app))return Promise.reject(es(s));const o="reauthenticate";try{const u=await Kl(r,wT(s,o,e,r),n);_e(u.idToken,s,"internal-error");const f=pp(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(r.uid===m,s,"user-mismatch"),uo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&si(s,"user-mismatch"),u}}/**
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
 */async function RT(r,e,n=!1){if(An(r.app))return Promise.reject(es(r));const s="signIn",o=await wT(r,s,e),u=await uo._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function TC(r,e){return RT(Eo(r),e)}/**
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
 */async function SC(r){const e=Eo(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function AC(r,e,n){return An(r.app)?Promise.reject(es(r)):TC(Ut(r),To.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&SC(r),s})}function bC(r,e,n,s){return Ut(r).onIdTokenChanged(e,n,s)}function wC(r,e,n){return Ut(r).beforeAuthStateChanged(e,n)}function RC(r,e,n,s){return Ut(r).onAuthStateChanged(e,n,s)}function IC(r){return Ut(r).signOut()}const ph="__sak";/**
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
 */class IT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ph,"1"),this.storage.removeItem(ph),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CC=1e3,NC=10;class CT extends IT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);YI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,NC):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CT.type="LOCAL";const DC=CT;/**
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
 */class NT extends IT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NT.type="SESSION";const DT=NT;/**
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
 */function OC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Lh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await OC(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */function vp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class MC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=vp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(T){const N=T;if(N.data.eventId===y)switch(N.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(N.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function xi(){return window}function xC(r){xi().location.href=r}/**
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
 */function OT(){return typeof xi().WorkerGlobalScope<"u"&&typeof xi().importScripts=="function"}async function VC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function LC(){return OT()?self:null}/**
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
 */const MT="firebaseLocalStorageDb",PC=1,gh="firebaseLocalStorage",xT="fbase_key";class au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ph(r,e){return r.transaction([gh],e?"readwrite":"readonly").objectStore(gh)}function UC(){const r=indexedDB.deleteDatabase(MT);return new au(r).toPromise()}function Vm(){const r=indexedDB.open(MT,PC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gh,{keyPath:xT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gh)?e(s):(s.close(),await UC(),e(await Vm()))})})}async function n0(r,e,n){const s=Ph(r,!0).put({[xT]:e,value:n});return new au(s).toPromise()}async function zC(r,e){const n=Ph(r,!1).get(e),s=await new au(n).toPromise();return s===void 0?null:s.value}function i0(r,e){const n=Ph(r,!0).delete(e);return new au(n).toPromise()}const jC=800,BC=3;class VT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>BC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return OT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(LC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await VC(),!this.activeServiceWorker)return;this.sender=new MC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await n0(e,ph,"1"),await i0(e,ph),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>n0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>zC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>i0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ph(o,!1).getAll();return new au(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VT.type="LOCAL";const HC=VT;new ru(3e4,6e4);/**
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
 */function qC(r,e){return e?sr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ep extends yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FC(r){return RT(r.auth,new Ep(r),r.bypassAuthState)}function GC(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),EC(n,new Ep(r),r.bypassAuthState)}async function KC(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),vC(n,new Ep(r),r.bypassAuthState)}/**
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
 */class kT{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return KC;case"reauthViaPopup":case"reauthViaRedirect":return GC;default:si(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YC=new ru(2e3,1e4);class eo extends kT{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}eo.currentPopupAction=null;/**
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
 */const $C="pendingRedirect",eh=new Map;class QC extends kT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=eh.get(this.auth._key());if(!e){try{const s=await XC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}eh.set(this.auth._key(),e)}return this.bypassAuthState||eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XC(r,e){const n=WC(e),s=JC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function ZC(r,e){eh.set(r._key(),e)}function JC(r){return sr(r._redirectPersistence)}function WC(r){return Wc($C,r.config.apiKey,r.name)}async function e2(r,e,n=!1){if(An(r.app))return Promise.reject(es(r));const s=Eo(r),o=qC(s,e),f=await new QC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const t2=600*1e3;class n2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!LT(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t2&&this.cachedEventUids.clear(),this.cachedEventUids.has(r0(e))}saveEventToCache(e){this.cachedEventUids.add(r0(e)),this.lastProcessedEventTime=Date.now()}}function r0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function LT({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(r);default:return!1}}/**
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
 */async function r2(r,e={}){return ds(r,"GET","/v1/projects",e)}/**
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
 */const s2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a2=/^https?/;async function o2(r){if(r.config.emulator)return;const{authorizedDomains:e}=await r2(r);for(const n of e)try{if(l2(n))return}catch{}si(r,"unauthorized-domain")}function l2(r){const e=Mm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!a2.test(n))return!1;if(s2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const u2=new ru(3e4,6e4);function s0(){const r=xi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function c2(r){return new Promise((e,n)=>{var o,u,f;function s(){s0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s0(),n(Mi(r,"network-request-failed"))},timeout:u2.get()})}if((u=(o=xi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=xi().gapi)!=null&&f.load)s();else{const m=nC("iframefcb");return xi()[m]=()=>{gapi.load?s():n(Mi(r,"network-request-failed"))},TT(`${tC()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw th=null,e})}let th=null;function h2(r){return th=th||c2(r),th}/**
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
 */const f2=new ru(5e3,15e3),d2="__/auth/iframe",m2="emulator/auth/iframe",p2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y2(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?mp(e,m2):`https://${r.config.authDomain}/${d2}`,s={apiKey:e.apiKey,appName:r.name,v:ia},o=g2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${nu(s).slice(1)}`}async function _2(r){const e=await h2(r),n=xi().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:y2(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Mi(r,"network-request-failed"),m=xi().setTimeout(()=>{u(f)},f2.get());function p(){xi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const v2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E2=500,T2=600,S2="_blank",A2="http://localhost";class a0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(r,e,n,s=E2,o=T2){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...v2,width:s.toString(),height:o.toString(),top:u,left:f},y=Wt().toLowerCase();n&&(m=mT(y)?S2:n),fT(y)&&(e=e||A2,p.scrollbars="yes");const E=Object.entries(p).reduce((N,[z,X])=>`${N}${z}=${X},`,"");if(KI(y)&&m!=="_self")return w2(e||"",m),new a0(null);const T=window.open(e||"",m,E);_e(T,r,"popup-blocked");try{T.focus()}catch{}return new a0(T)}function w2(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const R2="__/auth/handler",I2="emulator/auth/handler",C2=encodeURIComponent("fac");async function o0(r,e,n,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ia,eventId:o};if(e instanceof bT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",hR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))f[E]=T}if(e instanceof su){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${C2}=${encodeURIComponent(p)}`:"";return`${N2(r)}?${nu(m).slice(1)}${y}`}function N2({config:r}){return r.emulator?mp(r,I2):`https://${r.authDomain}/${R2}`}/**
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
 */const dm="webStorageSupport";class D2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DT,this._completeRedirectFn=e2,this._overrideRedirectResult=ZC}async _openPopup(e,n,s,o){var f;lr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await o0(e,n,s,Mm(),o);return b2(e,u,vp())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await o0(e,n,s,Mm(),o);return xC(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(lr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _2(e),s=new n2(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dm,{type:dm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[dm];u!==void 0&&n(!!u),si(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vT()||dT()||gp()}}const O2=D2;var l0="@firebase/auth",u0="1.13.0";/**
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
 */class M2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function x2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V2(r){jn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ET(r)},y=new JI(s,o,u,p);return lC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),jn(new wn("auth-internal",e=>{const n=Eo(e.getProvider("auth").getImmediate());return(s=>new M2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(l0,u0,x2(r)),Jt(l0,u0,"esm2020")}/**
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
 */const k2=300,L2=YE("authIdTokenMaxAge")||k2;let c0=null;const P2=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>L2)return;const o=n==null?void 0:n.token;c0!==o&&(c0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function U2(r=iu()){const e=cr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=oC(r,{popupRedirectResolver:O2,persistence:[HC,DC,DT]}),s=YE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=P2(u.toString());wC(n,f,()=>f(n.currentUser)),bC(n,m=>f(m))}}const o=GE("auth");return o&&uC(n,`http://${o}`),n}function z2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}WI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Mi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",z2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V2("Browser");var j2="firebase",B2="12.12.1";/**
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
 */Jt(j2,B2,"app");const PT="@firebase/installations",Tp="0.6.21";/**
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
 */const UT=1e4,zT=`w:${Tp}`,jT="FIS_v2",H2="https://firebaseinstallations.googleapis.com/v1",q2=3600*1e3,F2="installations",G2="Installations";/**
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
 */const K2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zs=new ta(F2,G2,K2);function BT(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
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
 */function HT({projectId:r}){return`${H2}/projects/${r}/installations`}function qT(r){return{token:r.token,requestStatus:2,expiresIn:$2(r.expiresIn),creationTime:Date.now()}}async function FT(r,e){const s=(await e.json()).error;return Zs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function GT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Y2(r,{refreshToken:e}){const n=GT(r);return n.append("Authorization",Q2(e)),n}async function KT(r){const e=await r();return e.status>=500&&e.status<600?r():e}function $2(r){return Number(r.replace("s","000"))}function Q2(r){return`${jT} ${r}`}/**
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
 */async function X2({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=HT(r),o=GT(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:jT,appId:r.appId,sdkVersion:zT},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await KT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:qT(y.authToken)}}else throw await FT("Create Installation",p)}/**
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
 */function YT(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function Z2(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const J2=/^[cdef][\w-]{21}$/,km="";function W2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=eN(r);return J2.test(n)?n:km}catch{return km}}function eN(r){return Z2(r).substr(0,22)}/**
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
 */function Uh(r){return`${r.appName}!${r.appId}`}/**
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
 */const $T=new Map;function QT(r,e){const n=Uh(r);XT(n,e),tN(n,e)}function XT(r,e){const n=$T.get(r);if(n)for(const s of n)s(e)}function tN(r,e){const n=nN();n&&n.postMessage({key:r,fid:e}),iN()}let Ks=null;function nN(){return!Ks&&"BroadcastChannel"in self&&(Ks=new BroadcastChannel("[Firebase] FID Change"),Ks.onmessage=r=>{XT(r.data.key,r.data.fid)}),Ks}function iN(){$T.size===0&&Ks&&(Ks.close(),Ks=null)}/**
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
 */const rN="firebase-installations-database",sN=1,Js="firebase-installations-store";let mm=null;function Sp(){return mm||(mm=eT(rN,sN,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Js)}}})),mm}async function yh(r,e){const n=Uh(r),o=(await Sp()).transaction(Js,"readwrite"),u=o.objectStore(Js),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&QT(r,e.fid),e}async function ZT(r){const e=Uh(r),s=(await Sp()).transaction(Js,"readwrite");await s.objectStore(Js).delete(e),await s.done}async function zh(r,e){const n=Uh(r),o=(await Sp()).transaction(Js,"readwrite"),u=o.objectStore(Js),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&QT(r,m.fid),m}/**
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
 */async function Ap(r){let e;const n=await zh(r.appConfig,s=>{const o=aN(s),u=oN(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===km?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aN(r){const e=r||{fid:W2(),registrationStatus:0};return JT(e)}function oN(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Zs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=lN(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uN(r)}:{installationEntry:e}}async function lN(r,e){try{const n=await X2(r,e);return yh(r.appConfig,n)}catch(n){throw BT(n)&&n.customData.serverCode===409?await ZT(r.appConfig):await yh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uN(r){let e=await h0(r.appConfig);for(;e.registrationStatus===1;)await YT(100),e=await h0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ap(r);return s||n}return e}function h0(r){return zh(r,e=>{if(!e)throw Zs.create("installation-not-found");return JT(e)})}function JT(r){return cN(r)?{fid:r.fid,registrationStatus:0}:r}function cN(r){return r.registrationStatus===1&&r.registrationTime+UT<Date.now()}/**
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
 */async function hN({appConfig:r,heartbeatServiceProvider:e},n){const s=fN(r,n),o=Y2(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:zT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await KT(()=>fetch(s,m));if(p.ok){const y=await p.json();return qT(y)}else throw await FT("Generate Auth Token",p)}function fN(r,{fid:e}){return`${HT(r)}/${e}/authTokens:generate`}/**
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
 */async function bp(r,e=!1){let n;const s=await zh(r.appConfig,u=>{if(!WT(u))throw Zs.create("not-registered");const f=u.authToken;if(!e&&pN(f))return u;if(f.requestStatus===1)return n=dN(r,e),u;{if(!navigator.onLine)throw Zs.create("app-offline");const m=yN(u);return n=mN(r,m),m}});return n?await n:s.authToken}async function dN(r,e){let n=await f0(r.appConfig);for(;n.authToken.requestStatus===1;)await YT(100),n=await f0(r.appConfig);const s=n.authToken;return s.requestStatus===0?bp(r,e):s}function f0(r){return zh(r,e=>{if(!WT(e))throw Zs.create("not-registered");const n=e.authToken;return _N(n)?{...e,authToken:{requestStatus:0}}:e})}async function mN(r,e){try{const n=await hN(r,e),s={...e,authToken:n};return await yh(r.appConfig,s),n}catch(n){if(BT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZT(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await yh(r.appConfig,s)}throw n}}function WT(r){return r!==void 0&&r.registrationStatus===2}function pN(r){return r.requestStatus===2&&!gN(r)}function gN(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+q2}function yN(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function _N(r){return r.requestStatus===1&&r.requestTime+UT<Date.now()}/**
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
 */async function vN(r){const e=r,{installationEntry:n,registrationPromise:s}=await Ap(e);return s?s.catch(console.error):bp(e).catch(console.error),n.fid}/**
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
 */async function EN(r,e=!1){const n=r;return await TN(n),(await bp(n,e)).token}async function TN(r){const{registrationPromise:e}=await Ap(r);e&&await e}/**
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
 */function SN(r){if(!r||!r.options)throw pm("App Configuration");if(!r.name)throw pm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw pm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function pm(r){return Zs.create("missing-app-config-values",{valueName:r})}/**
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
 */const eS="installations",AN="installations-internal",bN=r=>{const e=r.getProvider("app").getImmediate(),n=SN(e),s=cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wN=r=>{const e=r.getProvider("app").getImmediate(),n=cr(e,eS).getImmediate();return{getId:()=>vN(n),getToken:o=>EN(n,o)}};function RN(){jn(new wn(eS,bN,"PUBLIC")),jn(new wn(AN,wN,"PRIVATE"))}RN();Jt(PT,Tp);Jt(PT,Tp,"esm2020");/**
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
 */const _h="analytics",IN="firebase_id",CN="origin",NN=60*1e3,DN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
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
 */const sn=new xh("@firebase/analytics");/**
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
 */const ON={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new ta("analytics","Analytics",ON);/**
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
 */function MN(r){if(!r.startsWith(wp)){const e=bn.create("invalid-gtag-resource",{gtagURL:r});return sn.warn(e.message),""}return r}function tS(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function xN(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function VN(r,e){const n=xN("firebase-js-sdk-policy",{createScriptURL:MN}),s=document.createElement("script"),o=`${wp}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function kN(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function LN(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await tS(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){sn.error(m)}r("config",o,u)}async function PN(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await tS(n);for(const p of f){const y=m.find(T=>T.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){sn.error(u)}}function UN(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await PN(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await LN(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){sn.error(m)}}return o}function zN(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=UN(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function jN(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wp)&&n.src.includes(r))return n;return null}/**
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
 */const BN=30,HN=1e3;class qN{constructor(e={},n=HN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nS=new qN;function FN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function GN(r){var f;const{appId:e,apiKey:n}=r,s={method:"GET",headers:FN(n)},o=DN.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let m="";try{const p=await u.json();(f=p.error)!=null&&f.message&&(m=p.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:m})}return u.json()}async function KN(r,e=nS,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw bn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw bn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new QN;return setTimeout(async()=>{m.abort()},NN),iS({appId:s,apiKey:o,measurementId:u},f,m,e)}async function iS(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=nS){var m;const{appId:u,measurementId:f}=r;try{await YN(s,e)}catch(p){if(f)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw p}try{const p=await GN(r);return o.deleteThrottleMetadata(u),p}catch(p){const y=p;if(!$N(y)){if(o.deleteThrottleMetadata(u),f)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:f};throw p}const E=Number((m=y==null?void 0:y.customData)==null?void 0:m.httpStatus)===503?Lv(n,o.intervalMillis,BN):Lv(n,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(u,T),sn.debug(`Calling attemptFetch again in ${E} millis`),iS(r,T,s,o)}}function YN(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(bn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $N(r){if(!(r instanceof Hn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class QN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XN(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f={...s,send_to:u};r("event",n,f)}}async function ZN(r,e,n,s){if(s&&s.global){const o={};for(const u of Object.keys(n))o[`user_properties.${u}`]=n[u];return r("set",o),Promise.resolve()}else{const o=await e;r("config",o,{update:!0,user_properties:n})}}/**
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
 */async function JN(){if(XE())try{await ZE()}catch(r){return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WN(r,e,n,s,o,u,f){const m=KN(r);m.then(N=>{n[N.measurementId]=N.appId,r.options.measurementId&&N.measurementId!==r.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>sn.error(N)),e.push(m);const p=JN().then(N=>{if(N)return s.getId()}),[y,E]=await Promise.all([m,p]);jN(u)||VN(u,y.measurementId),o("js",new Date);const T=(f==null?void 0:f.config)??{};return T[CN]="firebase",T.update=!0,E!=null&&(T[IN]=E),o("config",y.measurementId,T),y.measurementId}/**
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
 */class eD{constructor(e){this.app=e}_delete(){return delete ro[this.app.options.appId],Promise.resolve()}}let ro={},d0=[];const m0={};let gm="dataLayer",tD="gtag",p0,Rp,g0=!1;function nD(){const r=[];if(QE()&&r.push("This is a browser extension environment."),oR()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:e});sn.warn(n.message)}}function iD(r,e,n){nD();const s=r.options.appId;if(!s)throw bn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(ro[s]!=null)throw bn.create("already-exists",{id:s});if(!g0){kN(gm);const{wrappedGtag:u,gtagCore:f}=zN(ro,d0,m0,gm,tD);Rp=u,p0=f,g0=!0}return ro[s]=WN(r,d0,m0,e,p0,gm,n),new eD(r)}function rD(r=iu()){r=Ut(r);const e=cr(r,_h);return e.isInitialized()?e.getImmediate():sD(r)}function sD(r,e={}){const n=cr(r,_h);if(n.isInitialized()){const o=n.getImmediate();if(as(e,n.getOptions()))return o;throw bn.create("already-initialized")}return n.initialize({options:e})}function aD(r,e,n){r=Ut(r),ZN(Rp,ro[r.app.options.appId],e,n).catch(s=>sn.error(s))}function oD(r,e,n,s){r=Ut(r),XN(Rp,ro[r.app.options.appId],e,n,s).catch(o=>sn.error(o))}const y0="@firebase/analytics",_0="0.10.21";function lD(){jn(new wn(_h,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return iD(s,o,n)},"PUBLIC")),jn(new wn("analytics-internal",r,"PRIVATE")),Jt(y0,_0),Jt(y0,_0,"esm2020");function r(e){try{const n=e.getProvider(_h).getImmediate();return{logEvent:(s,o,u)=>oD(n,s,o,u),setUserProperties:(s,o)=>aD(n,s,o)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}lD();/**
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
 */class uD{constructor(e,n,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,An(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o==null||o.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:n,messagingToken:s,appCheckToken:o}}}/**
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
 */const Lm="us-central1";class cD{constructor(e,n,s,o,u=Lm,f=(...m)=>fetch(...m)){this.app=e,this.fetchImpl=f,this.emulatorOrigin=null,this.contextProvider=new uD(e,n,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=Lm}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function hD(r,e,n){const s=na(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${n}`,s&&Mh(r.emulatorOrigin+"/backends")}const v0="@firebase/functions",E0="0.13.3";/**
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
 */const fD="auth-internal",dD="app-check-internal",mD="messaging-internal";function pD(r){const e=(n,{instanceIdentifier:s})=>{const o=n.getProvider("app").getImmediate(),u=n.getProvider(fD),f=n.getProvider(mD),m=n.getProvider(dD);return new cD(o,u,f,m,s)};jn(new wn(rS,e,"PUBLIC").setMultipleInstances(!0)),Jt(v0,E0,r),Jt(v0,E0,"esm2020")}/**
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
 */function gD(r=iu(),e=Lm){const s=cr(Ut(r),rS).getImmediate({identifier:e}),o=hp("functions");return o&&yD(s,...o),s}function yD(r,e,n){hD(Ut(r),e,n)}pD();var T0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,sS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,b){function C(){}C.prototype=b.prototype,R.F=b.prototype,R.prototype=new C,R.prototype.constructor=R,R.D=function(x,O,k){for(var w=Array(arguments.length-2),We=2;We<arguments.length;We++)w[We-2]=arguments[We];return b.prototype[O].apply(x,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,b,C){C||(C=0);const x=Array(16);if(typeof b=="string")for(var O=0;O<16;++O)x[O]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(O=0;O<16;++O)x[O]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=R.g[0],C=R.g[1],O=R.g[2];let k=R.g[3],w;w=b+(k^C&(O^k))+x[0]+3614090360&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+x[1]+3905402710&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+x[2]+606105819&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+x[3]+3250441966&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+x[4]+4118548399&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+x[5]+1200080426&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+x[6]+2821735955&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+x[7]+4249261313&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+x[8]+1770035416&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+x[9]+2336552879&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+x[10]+4294925233&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+x[11]+2304563134&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(k^C&(O^k))+x[12]+1804603682&4294967295,b=C+(w<<7&4294967295|w>>>25),w=k+(O^b&(C^O))+x[13]+4254626195&4294967295,k=b+(w<<12&4294967295|w>>>20),w=O+(C^k&(b^C))+x[14]+2792965006&4294967295,O=k+(w<<17&4294967295|w>>>15),w=C+(b^O&(k^b))+x[15]+1236535329&4294967295,C=O+(w<<22&4294967295|w>>>10),w=b+(O^k&(C^O))+x[1]+4129170786&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+x[6]+3225465664&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+x[11]+643717713&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+x[0]+3921069994&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+x[5]+3593408605&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+x[10]+38016083&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+x[15]+3634488961&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+x[4]+3889429448&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+x[9]+568446438&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+x[14]+3275163606&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+x[3]+4107603335&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+x[8]+1163531501&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(O^k&(C^O))+x[13]+2850285829&4294967295,b=C+(w<<5&4294967295|w>>>27),w=k+(C^O&(b^C))+x[2]+4243563512&4294967295,k=b+(w<<9&4294967295|w>>>23),w=O+(b^C&(k^b))+x[7]+1735328473&4294967295,O=k+(w<<14&4294967295|w>>>18),w=C+(k^b&(O^k))+x[12]+2368359562&4294967295,C=O+(w<<20&4294967295|w>>>12),w=b+(C^O^k)+x[5]+4294588738&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+x[8]+2272392833&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+x[11]+1839030562&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+x[14]+4259657740&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+x[1]+2763975236&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+x[4]+1272893353&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+x[7]+4139469664&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+x[10]+3200236656&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+x[13]+681279174&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+x[0]+3936430074&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+x[3]+3572445317&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+x[6]+76029189&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(C^O^k)+x[9]+3654602809&4294967295,b=C+(w<<4&4294967295|w>>>28),w=k+(b^C^O)+x[12]+3873151461&4294967295,k=b+(w<<11&4294967295|w>>>21),w=O+(k^b^C)+x[15]+530742520&4294967295,O=k+(w<<16&4294967295|w>>>16),w=C+(O^k^b)+x[2]+3299628645&4294967295,C=O+(w<<23&4294967295|w>>>9),w=b+(O^(C|~k))+x[0]+4096336452&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+x[7]+1126891415&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+x[14]+2878612391&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+x[5]+4237533241&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+x[12]+1700485571&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+x[3]+2399980690&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+x[10]+4293915773&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+x[1]+2240044497&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+x[8]+1873313359&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+x[15]+4264355552&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+x[6]+2734768916&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+x[13]+1309151649&4294967295,C=O+(w<<21&4294967295|w>>>11),w=b+(O^(C|~k))+x[4]+4149444226&4294967295,b=C+(w<<6&4294967295|w>>>26),w=k+(C^(b|~O))+x[11]+3174756917&4294967295,k=b+(w<<10&4294967295|w>>>22),w=O+(b^(k|~C))+x[2]+718787259&4294967295,O=k+(w<<15&4294967295|w>>>17),w=C+(k^(O|~b))+x[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(O+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+k&4294967295}s.prototype.v=function(R,b){b===void 0&&(b=R.length);const C=b-this.blockSize,x=this.C;let O=this.h,k=0;for(;k<b;){if(O==0)for(;k<=C;)o(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<b;)if(x[O++]=R.charCodeAt(k++),O==this.blockSize){o(this,x),O=0;break}}else for(;k<b;)if(x[O++]=R[k++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=b},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;b=this.o*8;for(var C=R.length-8;C<R.length;++C)R[C]=b&255,b/=256;for(this.v(R),R=Array(16),b=0,C=0;C<4;++C)for(let x=0;x<32;x+=8)R[b++]=this.g[C]>>>x&255;return R};function u(R,b){var C=m;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=b(R)}function f(R,b){this.h=b;const C=[];let x=!0;for(let O=R.length-1;O>=0;O--){const k=R[O]|0;x&&k==b||(C[O]=k,x=!1)}this.g=C}var m={};function p(R){return-128<=R&&R<128?u(R,function(b){return new f([b|0],b<0?-1:0)}):new f([R|0],R<0?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return T;if(R<0)return K(y(-R));const b=[];let C=1;for(let x=0;R>=C;x++)b[x]=R/C|0,C*=4294967296;return new f(b,0)}function E(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return K(E(R.substring(1),b));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(b,8));let x=T;for(let k=0;k<R.length;k+=8){var O=Math.min(8,R.length-k);const w=parseInt(R.substring(k,k+O),b);O<8?(O=y(Math.pow(b,O)),x=x.j(O).add(y(w))):(x=x.j(C),x=x.add(y(w)))}return x}var T=p(0),N=p(1),z=p(16777216);r=f.prototype,r.m=function(){if(J(this))return-K(this).m();let R=0,b=1;for(let C=0;C<this.g.length;C++){const x=this.i(C);R+=(x>=0?x:4294967296+x)*b,b*=4294967296}return R},r.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(X(this))return"0";if(J(this))return"-"+K(this).toString(R);const b=y(Math.pow(R,6));var C=this;let x="";for(;;){const O=de(C,b).g;C=ee(C,O.j(b));let k=((C.g.length>0?C.g[0]:C.h)>>>0).toString(R);if(C=O,X(C))return k+x;for(;k.length<6;)k="0"+k;x=k+x}},r.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function X(R){if(R.h!=0)return!1;for(let b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function J(R){return R.h==-1}r.l=function(R){return R=ee(this,R),J(R)?-1:X(R)?0:1};function K(R){const b=R.g.length,C=[];for(let x=0;x<b;x++)C[x]=~R.g[x];return new f(C,~R.h).add(N)}r.abs=function(){return J(this)?K(this):this},r.add=function(R){const b=Math.max(this.g.length,R.g.length),C=[];let x=0;for(let O=0;O<=b;O++){let k=x+(this.i(O)&65535)+(R.i(O)&65535),w=(k>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);x=w>>>16,k&=65535,w&=65535,C[O]=w<<16|k}return new f(C,C[C.length-1]&-2147483648?-1:0)};function ee(R,b){return R.add(K(b))}r.j=function(R){if(X(this)||X(R))return T;if(J(this))return J(R)?K(this).j(K(R)):K(K(this).j(R));if(J(R))return K(this.j(K(R)));if(this.l(z)<0&&R.l(z)<0)return y(this.m()*R.m());const b=this.g.length+R.g.length,C=[];for(var x=0;x<2*b;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(let O=0;O<R.g.length;O++){const k=this.i(x)>>>16,w=this.i(x)&65535,We=R.i(O)>>>16,$e=R.i(O)&65535;C[2*x+2*O]+=w*$e,ae(C,2*x+2*O),C[2*x+2*O+1]+=k*$e,ae(C,2*x+2*O+1),C[2*x+2*O+1]+=w*We,ae(C,2*x+2*O+1),C[2*x+2*O+2]+=k*We,ae(C,2*x+2*O+2)}for(R=0;R<b;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=b;R<2*b;R++)C[R]=0;return new f(C,0)};function ae(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function se(R,b){this.g=R,this.h=b}function de(R,b){if(X(b))throw Error("division by zero");if(X(R))return new se(T,T);if(J(R))return b=de(K(R),b),new se(K(b.g),K(b.h));if(J(b))return b=de(R,K(b)),new se(K(b.g),b.h);if(R.g.length>30){if(J(R)||J(b))throw Error("slowDivide_ only works with positive integers.");for(var C=N,x=b;x.l(R)<=0;)C=ge(C),x=ge(x);var O=ve(C,1),k=ve(x,1);for(x=ve(x,2),C=ve(C,2);!X(x);){var w=k.add(x);w.l(R)<=0&&(O=O.add(C),k=w),x=ve(x,1),C=ve(C,1)}return b=ee(R,O.j(b)),new se(O,b)}for(O=T;R.l(b)>=0;){for(C=Math.max(1,Math.floor(R.m()/b.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),k=y(C),w=k.j(b);J(w)||w.l(R)>0;)C-=x,k=y(C),w=k.j(b);X(k)&&(k=N),O=O.add(k),R=ee(R,w)}return new se(O,R)}r.B=function(R){return de(this,R).h},r.and=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let x=0;x<b;x++)C[x]=this.i(x)&R.i(x);return new f(C,this.h&R.h)},r.or=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let x=0;x<b;x++)C[x]=this.i(x)|R.i(x);return new f(C,this.h|R.h)},r.xor=function(R){const b=Math.max(this.g.length,R.g.length),C=[];for(let x=0;x<b;x++)C[x]=this.i(x)^R.i(x);return new f(C,this.h^R.h)};function ge(R){const b=R.g.length+1,C=[];for(let x=0;x<b;x++)C[x]=R.i(x)<<1|R.i(x-1)>>>31;return new f(C,R.h)}function ve(R,b){const C=b>>5;b%=32;const x=R.g.length-C,O=[];for(let k=0;k<x;k++)O[k]=b>0?R.i(k+C)>>>b|R.i(k+C+1)<<32-b:R.i(k+C);return new f(O,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,sS=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,ts=f}).apply(typeof T0<"u"?T0:typeof self<"u"?self:typeof window<"u"?window:{});var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aS,kl,oS,nh,Pm,lS,uS,cS;(function(){var r,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fc=="object"&&Fc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in v))break e;v=v[L]}c=c[c.length-1],A=v[c],g=g(A),g!=A&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var v=[],A;for(A in g)Object.prototype.hasOwnProperty.call(g,A)&&v.push([A,g[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,v){return c.call.apply(c.bind,arguments)}function y(c,g,v){return y=p,y.apply(null,arguments)}function E(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function T(c,g){function v(){}v.prototype=g.prototype,c.Z=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,L,H){for(var ne=Array(arguments.length-2),be=2;be<arguments.length;be++)ne[be-2]=arguments[be];return g.prototype[L].apply(A,ne)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function z(c){const g=c.length;if(g>0){const v=Array(g);for(let A=0;A<g;A++)v[A]=c[A];return v}return[]}function X(c,g){for(let A=1;A<arguments.length;A++){const L=arguments[A];var v=typeof L;if(v=v!="object"?v:L?Array.isArray(L)?"array":v:"null",v=="array"||v=="object"&&typeof L.length=="number"){v=c.length||0;const H=L.length||0;c.length=v+H;for(let ne=0;ne<H;ne++)c[v+ne]=L[ne]}else c.push(L)}}class J{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(c){f.setTimeout(()=>{throw c},0)}function ee(){var c=R;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ae{constructor(){this.h=this.g=null}add(g,v){const A=se.get();A.set(g,v),this.h?this.h.next=A:this.g=A,this.h=A}}var se=new J(()=>new de,c=>c.reset());class de{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,ve=!1,R=new ae,b=()=>{const c=Promise.resolve(void 0);ge=()=>{c.then(C)}};function C(){for(var c;c=ee();){try{c.h.call(c.g)}catch(v){K(v)}var g=se;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}ve=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,g),f.removeEventListener("test",v,g)}catch{}return c})();function w(c){return/^[\s\xa0]*$/.test(c)}function We(c,g){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}T(We,O),We.prototype.init=function(c,g){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),Y=0;function ie(c,g,v,A,L){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!A,this.ha=L,this.key=++Y,this.da=this.fa=!1}function me(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ue(c,g,v){for(const A in c)g.call(v,c[A],A,c)}function Fe(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function M(c){const g={};for(const v in c)g[v]=c[v];return g}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(c,g){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)c[v]=A[v];for(let H=0;H<Z.length;H++)v=Z[H],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function oe(c){this.src=c,this.g={},this.h=0}oe.prototype.add=function(c,g,v,A,L){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ne=Re(c,g,A,L);return ne>-1?(g=c[ne],v||(g.fa=!1)):(g=new ie(g,this.src,H,!!A,L),g.fa=v,c.push(g)),g};function Ee(c,g){const v=g.type;if(v in c.g){var A=c.g[v],L=Array.prototype.indexOf.call(A,g,void 0),H;(H=L>=0)&&Array.prototype.splice.call(A,L,1),H&&(me(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Re(c,g,v,A){for(let L=0;L<c.length;++L){const H=c[L];if(!H.da&&H.listener==g&&H.capture==!!v&&H.ha==A)return L}return-1}var ke="closure_lm_"+(Math.random()*1e6|0),Nt={};function rt(c,g,v,A,L){if(Array.isArray(g)){for(let H=0;H<g.length;H++)rt(c,g[H],v,A,L);return null}return v=Io(v),c&&c[$e]?c.J(g,v,m(A)?!!A.capture:!1,L):ms(c,g,v,!1,A,L)}function ms(c,g,v,A,L,H){if(!g)throw Error("Invalid event type");const ne=m(L)?!!L.capture:!!L;let be=ps(c);if(be||(c[ke]=be=new oe(c)),v=be.add(g,v,A,ne,H),v.proxy)return v;if(A=aa(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)k||(L=ne),L===void 0&&(L=!1),c.addEventListener(g.toString(),A,L);else if(c.attachEvent)c.attachEvent(oi(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function aa(){function c(v){return g.call(c.src,c.listener,v)}const g=wo;return c}function oa(c,g,v,A,L){if(Array.isArray(g))for(var H=0;H<g.length;H++)oa(c,g[H],v,A,L);else A=m(A)?!!A.capture:!!A,v=Io(v),c&&c[$e]?(c=c.i,H=String(g).toString(),H in c.g&&(g=c.g[H],v=Re(g,v,A,L),v>-1&&(me(g[v]),Array.prototype.splice.call(g,v,1),g.length==0&&(delete c.g[H],c.h--)))):c&&(c=ps(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,v,A,L)),(v=c>-1?g[c]:null)&&la(v))}function la(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[$e])Ee(g.i,c);else{var v=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(v,A,c.capture):g.detachEvent?g.detachEvent(oi(v),A):g.addListener&&g.removeListener&&g.removeListener(A),(v=ps(g))?(Ee(v,c),v.h==0&&(v.src=null,g[ke]=null)):me(c)}}}function oi(c){return c in Nt?Nt[c]:Nt[c]="on"+c}function wo(c,g){if(c.da)c=!0;else{g=new We(g,this);const v=c.listener,A=c.ha||c.src;c.fa&&la(c),c=v.call(A,g)}return c}function ps(c){return c=c[ke],c instanceof oe?c:null}var Ro="__closure_events_fn_"+(Math.random()*1e9>>>0);function Io(c){return typeof c=="function"?c:(c[Ro]||(c[Ro]=function(g){return c.handleEvent(g)}),c[Ro])}function yt(){x.call(this),this.i=new oe(this),this.M=this,this.G=null}T(yt,x),yt.prototype[$e]=!0,yt.prototype.removeEventListener=function(c,g,v,A){oa(this,c,g,v,A)};function Dt(c,g){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new O(g,c);else if(g instanceof O)g.target=g.target||c;else{var L=g;g=new O(A,c),re(g,L)}L=!0;let H,ne;if(v)for(ne=v.length-1;ne>=0;ne--)H=g.g=v[ne],L=hr(H,A,!0,g)&&L;if(H=g.g=c,L=hr(H,A,!0,g)&&L,L=hr(H,A,!1,g)&&L,v)for(ne=0;ne<v.length;ne++)H=g.g=v[ne],L=hr(H,A,!1,g)&&L}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const v=c.g[g];for(let A=0;A<v.length;A++)me(v[A]);delete c.g[g],c.h--}}this.G=null},yt.prototype.J=function(c,g,v,A){return this.i.add(String(c),g,!1,v,A)},yt.prototype.K=function(c,g,v,A){return this.i.add(String(c),g,!0,v,A)};function hr(c,g,v,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let L=!0;for(let H=0;H<g.length;++H){const ne=g[H];if(ne&&!ne.da&&ne.capture==v){const be=ne.listener,ft=ne.ha||ne.src;ne.fa&&Ee(c.i,ne),L=be.call(ft,A)!==!1&&L}}return L&&!A.defaultPrevented}function Wh(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:f.setTimeout(c,g||0)}function du(c){c.g=Wh(()=>{c.g=null,c.i&&(c.i=!1,du(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class en extends x{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:du(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(c){x.call(this),this.h=c,this.g={}}T(gs,x);var Co=[];function No(c){Ue(c.g,function(g,v){this.g.hasOwnProperty(v)&&la(g)},c),c.g={}}gs.prototype.N=function(){gs.Z.N.call(this),No(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=f.JSON.stringify,ef=f.JSON.parse,mu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function pu(){}function gu(){}var qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zt(){O.call(this,"d")}T(zt,O);function In(){O.call(this,"c")}T(In,O);var ht={},yu=null;function ua(){return yu=yu||new yt}ht.Ia="serverreachability";function _u(c){O.call(this,ht.Ia,c)}T(_u,O);function li(c){const g=ua();Dt(g,new _u(g))}ht.STAT_EVENT="statevent";function ys(c,g){O.call(this,ht.STAT_EVENT,c),this.stat=g}T(ys,O);function _t(c){const g=ua();Dt(g,new ys(g,c))}ht.Ja="timingevent";function ui(c,g){O.call(this,ht.Ja,c),this.size=g}T(ui,O);function ci(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},g)}function Fn(){this.g=!0}Fn.prototype.ua=function(){this.g=!1};function tf(c,g,v,A,L,H){c.info(function(){if(c.g)if(H){var ne="",be=H.split("&");for(let He=0;He<be.length;He++){var ft=be[He].split("=");if(ft.length>1){const st=ft[0];ft=ft[1];const On=st.split("_");ne=On.length>=2&&On[1]=="type"?ne+(st+"="+ft+"&"):ne+(st+"=redacted&")}}}else ne=null;else ne=H;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+g+`
`+v+`
`+ne})}function vu(c,g,v,A,L,H,ne){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+g+`
`+v+`
`+H+" "+ne})}function hi(c,g,v,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+nf(c,v)+(A?" "+A:"")})}function _s(c,g){c.info(function(){return"TIMEOUT: "+g})}Fn.prototype.info=function(){};function nf(c,g){if(!c.g)return g;if(!g)return null;try{const H=JSON.parse(g);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var v=H[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var L=A[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ne=1;ne<A.length;ne++)A[ne]=""}}}}return fr(H)}catch{return g}}var vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Do={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oo;function Es(){}T(Es,pu),Es.prototype.g=function(){return new XMLHttpRequest},Oo=new Es;function zi(c){return encodeURIComponent(String(c))}function Eu(c){var g=1;c=c.split(":");const v=[];for(;g>0&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function Gn(c,g,v,A){this.j=c,this.i=g,this.l=v,this.S=A||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Kn}function Kn(){this.i=null,this.g="",this.h=!1}var vt={},Vt={};function fi(c,g,v){c.M=1,c.A=Ts(Tt(g)),c.u=v,c.R=!0,ca(c,null)}function ca(c,g){c.F=Date.now(),di(c),c.B=Tt(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ma(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Kn,c.g=ku(c.j,v?g:null,!c.u),c.P>0&&(c.O=new en(y(c.Y,c,c.g),c.P)),g=c.V,v=c.g,A=c.ba;var L="readystatechange";Array.isArray(L)||(L&&(Co[0]=L.toString()),L=Co);for(let H=0;H<L.length;H++){const ne=rt(v,L[H],A||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),li(),tf(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const g=this.O;g&&Qn(c)==3?g.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)e:{const be=Qn(this.g),ft=this.g.ya(),He=this.g.ca();if(!(be<3)&&(be!=3||this.g&&(this.h.h||this.g.la()||jt(this.g)))){this.K||be!=4||ft==7||(ft==8||He<=0?li(3):li(2)),mi(this);var g=this.g.ca();this.X=g;var v=rf(this);if(this.o=g==200,vu(this.i,this.v,this.B,this.l,this.S,be,g),this.o){if(this.U&&!this.L){t:{if(this.g){var A,L=this.g;if((A=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(A)){var H=A;break t}}H=null}if(c=H)hi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pi(this,c);else{this.o=!1,this.m=3,_t(12),mn(this),Cn(this);break e}}if(this.R){c=!0;let st;for(;!this.K&&this.C<v.length;)if(st=Su(this,v),st==Vt){be==4&&(this.m=4,_t(14),c=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(st==vt){this.m=4,_t(15),hi(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else hi(this.i,this.l,st,null),pi(this,st);if(Tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||v.length!=0||this.h.h||(this.m=1,_t(16),c=!1),this.o=this.o&&c,!c)hi(this.i,this.l,v,"[Invalid Chunked Response]"),mn(this),Cn(this);else if(v.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Ko(ne),ne.P=!0,_t(11))}}else hi(this.i,this.l,v,null),pi(this,v);be==4&&mn(this),this.o&&!this.K&&(be==4?Ou(this.j,this):(this.o=!1,di(this)))}else Bi(this.g),g==400&&v.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),mn(this),Cn(this)}}}catch{}finally{}};function rf(c){if(!Tu(c))return c.g.la();const g=jt(c.g);if(g==="")return"";let v="";const A=g.length,L=Qn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return mn(c),Cn(c),"";c.h.i=new f.TextDecoder}for(let H=0;H<A;H++)c.h.h=!0,v+=c.h.i.decode(g[H],{stream:!(L&&H==A-1)});return g.length=0,c.h.g+=v,c.C=0,c.h.g}function Tu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Su(c,g){var v=c.C,A=g.indexOf(`
`,v);return A==-1?Vt:(v=Number(g.substring(v,A)),isNaN(v)?vt:(A+=1,A+v>g.length?Vt:(g=g.slice(A,A+v),c.C=A+v,g)))}Gn.prototype.cancel=function(){this.K=!0,mn(this)};function di(c){c.T=Date.now()+c.H,ha(c,c.H)}function ha(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ci(y(c.aa,c),g)}function mi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(_s(this.i,this.B),this.M!=2&&(li(),_t(17)),mn(this),this.m=2,Cn(this)):ha(this,this.T-c)};function Cn(c){c.j.I==0||c.K||Ou(c.j,c)}function mn(c){mi(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,No(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function pi(c,g){try{var v=c.j;if(v.I!=0&&(v.g==c||yi(v.h,c))){if(!c.L&&yi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)va(v),Er(v);else break e;Cs(v),_t(18)}}else v.xa=L[1],0<v.xa-v.K&&L[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=ci(y(v.Va,v),6e3));gi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ai(v,11)}else if((c.L||v.g==c)&&va(v),!w(g))for(L=v.Ba.g.parse(g),g=0;g<L.length;g++){let He=L[g];const st=He[0];if(!(st<=v.K))if(v.K=st,He=He[1],v.I==2)if(He[0]=="c"){v.M=He[1],v.ba=He[2];const On=He[3];On!=null&&(v.ka=On,v.j.info("VER="+v.ka));const bi=He[4];bi!=null&&(v.za=bi,v.j.info("SVER="+v.za));const Xn=He[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(A=1.5*Xn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Zn=c.g;if(Zn){const Ns=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var H=A.h;H.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Vo(H,H.h),H.h=null))}if(A.G){const Ea=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(A.wa=Ea,Ge(A.J,A.G,Ea))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var ne=c;if(A.na=Vu(A,A.L?A.ba:null,A.W),ne.L){ko(A.h,ne);var be=ne,ft=A.O;ft&&(be.H=ft),be.D&&(mi(be),di(be)),A.g=ne}else Nu(A);v.i.length>0&&Si(v)}else He[0]!="stop"&&He[0]!="close"||Ai(v,7);else v.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Ai(v,7):Fo(v):He[0]!="noop"&&v.l&&v.l.qa(He),v.A=0)}}li(4)}catch{}}var Et=class{constructor(c,g){this.g=c,this.map=g}};function Mo(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function gi(c){return c.h?1:c.g?c.g.size:0}function yi(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Vo(c,g){c.g?c.g.add(g):c.h=g}function ko(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Mo.prototype.cancel=function(){if(this.i=Lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Lo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.G);return g}return z(c.i)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(c,g){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let L,H=null;A>=0?(L=c[v].substring(0,A),H=c[v].substring(A+1)):L=c[v],g(L,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function pn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof pn?(this.l=c.l,kt(this,c.j),this.o=c.o,this.g=c.g,dr(this,c.u),this.h=c.h,Po(this,Iu(c.i)),this.m=c.m):c&&(g=String(c).match(Au))?(this.l=!1,kt(this,g[1]||"",!0),this.o=_i(g[2]||""),this.g=_i(g[3]||"",!0),dr(this,g[4]),this.h=_i(g[5]||"",!0),Po(this,g[6]||"",!0),this.m=_i(g[7]||"")):(this.l=!1,this.i=new pr(null,this.l))}pn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Ss(g,da,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ss(g,da,!0),"@"),c.push(zi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ss(v,v.charAt(0)=="/"?Uo:bu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ss(v,wu)),c.join("")},pn.prototype.resolve=function(c){const g=Tt(this);let v=!!c.j;v?kt(g,c.j):v=!!c.o,v?g.o=c.o:v=!!c.g,v?g.g=c.g:v=c.u!=null;var A=c.h;if(v)dr(g,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var L=g.h.lastIndexOf("/");L!=-1&&(A=g.h.slice(0,L+1)+A)}if(L=A,L==".."||L==".")A="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){A=L.lastIndexOf("/",0)==0,L=L.split("/");const H=[];for(let ne=0;ne<L.length;){const be=L[ne++];be=="."?A&&ne==L.length&&H.push(""):be==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),A&&ne==L.length&&H.push("")):(H.push(be),A=!0)}A=H.join("/")}else A=L}return v?g.h=A:v=c.i.toString()!=="",v?Po(g,Iu(c.i)):v=!!c.m,v&&(g.m=c.m),g};function Tt(c){return new pn(c)}function kt(c,g,v){c.j=v?_i(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function dr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function Po(c,g,v){g instanceof pr?(c.i=g,pa(c.i,c.l)):(v||(g=Ss(g,mr)),c.i=new pr(g,c.l))}function Ge(c,g,v){c.i.set(g,v)}function Ts(c){return Ge(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function _i(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ss(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,an),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function an(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var da=/[#\/\?@]/g,bu=/[#\?:]/g,Uo=/[#\?]/g,mr=/[#\?@]/g,wu=/#/g;function pr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function on(c){c.g||(c.g=new Map,c.h=0,c.i&&fa(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=pr.prototype,r.add=function(c,g){on(this),this.i=null,c=gr(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function Ru(c,g){on(c),g=gr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function zo(c,g){return on(c),g=gr(c,g),c.g.has(g)}r.forEach=function(c,g){on(this),this.g.forEach(function(v,A){v.forEach(function(L){c.call(g,L,A,this)},this)},this)};function jo(c,g){on(c);let v=[];if(typeof g=="string")zo(c,g)&&(v=v.concat(c.g.get(gr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)v=v.concat(c[g]);return v}r.set=function(c,g){return on(this),this.i=null,c=gr(this,c),zo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=jo(this,c),c.length>0?String(c[0]):g):g};function ma(c,g,v){Ru(c,g),v.length>0&&(c.i=null,c.g.set(gr(c,g),z(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let A=0;A<g.length;A++){var v=g[A];const L=zi(v);v=jo(this,v);for(let H=0;H<v.length;H++){let ne=L;v[H]!==""&&(ne+="="+zi(v[H])),c.push(ne)}}return this.i=c.join("&")};function Iu(c){const g=new pr;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function gr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function pa(c,g){g&&!c.j&&(on(c),c.i=null,c.g.forEach(function(v,A){const L=A.toLowerCase();A!=L&&(Ru(this,A),ma(this,L,v))},c)),c.j=g}function Yn(c,g){const v=new Fn;if(f.Image){const A=new Image;A.onload=E(Nn,v,"TestLoadImage: loaded",!0,g,A),A.onerror=E(Nn,v,"TestLoadImage: error",!1,g,A),A.onabort=E(Nn,v,"TestLoadImage: abort",!1,g,A),A.ontimeout=E(Nn,v,"TestLoadImage: timeout",!1,g,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Bo(c,g){const v=new Fn,A=new AbortController,L=setTimeout(()=>{A.abort(),Nn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(L),H.ok?Nn(v,"TestPingServer: ok",!0,g):Nn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Nn(v,"TestPingServer: error",!1,g)})}function Nn(c,g,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function yr(){this.g=new mu}function vi(c){this.i=c.Sb||null,this.h=c.ab||!1}T(vi,pu),vi.prototype.g=function(){return new As(this.i,this.h)};function As(c,g){yt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(As,yt),r=As.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,$n(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||f).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ga(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function ga(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?_r(this):$n(this),this.readyState==3&&ga(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,_r(this))},r.Na=function(c){this.g&&(this.response=c,_r(this))},r.ga=function(){this.g&&_r(this)};function _r(c){c.readyState=4,c.l=null,c.j=null,c.B=null,$n(c)}r.setRequestHeader=function(c,g){this.A.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function $n(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dn(c){let g="";return Ue(c,function(v,A){g+=A,g+=":",g+=v,g+=`\r
`}),g}function bs(c,g,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Dn(v),typeof c=="string"?v!=null&&zi(v):Ge(c,g,v))}function Qe(c){yt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(Qe,yt);var Ei=/^https?$/i,Ho=["POST","PUT"];r=Qe.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,g,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oo.g(),this.g.onreadystatechange=N(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){ws(this,H);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())v.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Ho,g,void 0)>=0)||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of v)this.g.setRequestHeader(H,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){ws(this,H)}};function ws(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,qo(c),ji(c)}function qo(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Dt(this,"complete"),Dt(this,"abort"),ji(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),Qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},r.Xa=function(){Rs(this)};function Rs(c){if(c.h&&typeof u<"u"){if(c.v&&Qn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Dt(c,"readystatechange"),Qn(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var A;if(A=H===0){let ne=String(c.D).match(Au)[1]||null;!ne&&f.self&&f.self.location&&(ne=f.self.location.protocol.slice(0,-1)),A=!Ei.test(ne?ne.toLowerCase():"")}v=A}if(v)Dt(c,"complete"),Dt(c,"success");else{c.o=6;try{var L=Qn(c)>2?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.ca()+"]",qo(c)}}finally{ji(c)}}}}function ji(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,g||Dt(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Qn(c){return c.g?c.g.readyState:0}r.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ef(g)}};function jt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Bi(c){const g={};c=(c.g&&Qn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(w(c[A]))continue;var v=Eu(c[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=g[L]||[];g[L]=H,H.push(v)}Fe(g,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function vr(c){this.za=0,this.i=[],this.j=new Fn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ti("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ti("baseRetryDelayMs",5e3,c),this.Za=Ti("retryDelaySeedMs",1e4,c),this.Ta=Ti("forwardChannelMaxRetries",2,c),this.va=Ti("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Mo(c&&c.concurrentRequestLimit),this.Ba=new yr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=vr.prototype,r.ka=8,r.I=1,r.connect=function(c,g,v,A){_t(0),this.W=c,this.H=g||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=Vu(this,null,this.W),Si(this)};function Fo(c){if(ya(c),c.I==3){var g=c.V++,v=Tt(c.J);if(Ge(v,"SID",c.M),Ge(v,"RID",g),Ge(v,"TYPE","terminate"),Is(c,v),g=new Gn(c,c.j,g),g.M=2,g.A=Ts(Tt(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(g.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=g.A,v=!0),v||(g.g=ku(g.j,null),g.g.ea(g.A)),g.F=Date.now(),di(g)}xu(c)}function Er(c){c.g&&(Ko(c),c.g.cancel(),c.g=null)}function ya(c){Er(c),c.v&&(f.clearTimeout(c.v),c.v=null),va(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Si(c){if(!xo(c.h)&&!c.m){c.m=!0;var g=c.Ea;ge||b(),ve||(ge(),ve=!0),R.add(g,c),c.D=0}}function _a(c,g){return gi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ci(y(c.Ea,c,g),Mu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const L=new Gn(this,this.j,c);let H=this.o;if(this.U&&(H?(H=M(H),re(H,this.U)):H=this.U),this.u!==null||this.R||(L.J=H,H=null),this.S)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,g>4096){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Cu(this,L,g),v=Tt(this.J),Ge(v,"RID",c),Ge(v,"CVER",22),this.G&&Ge(v,"X-HTTP-Session-Id",this.G),Is(this,v),H&&(this.R?g="headers="+zi(Dn(H))+"&"+g:this.u&&bs(v,this.u,H)),Vo(this.h,L),this.Ra&&Ge(v,"TYPE","init"),this.S?(Ge(v,"$req",g),Ge(v,"SID","null"),L.U=!0,fi(L,v,null)):fi(L,v,g),this.I=2}}else this.I==3&&(c?Go(this,c):this.i.length==0||xo(this.h)||Go(this))};function Go(c,g){var v;g?v=g.l:v=c.V++;const A=Tt(c.J);Ge(A,"SID",c.M),Ge(A,"RID",v),Ge(A,"AID",c.K),Is(c,A),c.u&&c.o&&bs(A,c.u,c.o),v=new Gn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Cu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Vo(c.h,v),fi(v,A,g)}function Is(c,g){c.H&&Ue(c.H,function(v,A){Ge(g,A,v)}),c.l&&Ue({},function(v,A){Ge(g,A,v)})}function Cu(c,g,v){v=Math.min(c.i.length,v);const A=c.l?y(c.l.Ka,c.l,c):null;e:{var L=c.i;let be=-1;for(;;){const ft=["count="+v];be==-1?v>0?(be=L[0].g,ft.push("ofs="+be)):be=0:ft.push("ofs="+be);let He=!0;for(let st=0;st<v;st++){var H=L[st].g;const On=L[st].map;if(H-=be,H<0)be=Math.max(0,L[st].g-100),He=!1;else try{H="req"+H+"_"||"";try{var ne=On instanceof Map?On:Object.entries(On);for(const[bi,Xn]of ne){let Zn=Xn;m(Xn)&&(Zn=fr(Xn)),ft.push(H+bi+"="+encodeURIComponent(Zn))}}catch(bi){throw ft.push(H+"type="+encodeURIComponent("_badmap")),bi}}catch{A&&A(On)}}if(He){ne=ft.join("&");break e}}ne=void 0}return c=c.i.splice(0,v),g.G=c,ne}function Nu(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;ge||b(),ve||(ge(),ve=!0),R.add(g,c),c.A=0}}function Cs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ci(y(c.Da,c),Mu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Du(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ci(y(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Er(this),Du(this))};function Ko(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Du(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=Tt(c.na);Ge(g,"RID","rpc"),Ge(g,"SID",c.M),Ge(g,"AID",c.K),Ge(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ge(g,"TO",c.ia),Ge(g,"TYPE","xmlhttp"),Is(c,g),c.u&&c.o&&bs(g,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Ts(Tt(g)),v.u=null,v.R=!0,ca(v,c)}r.Va=function(){this.C!=null&&(this.C=null,Er(this),Cs(this),_t(19))};function va(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Ou(c,g){var v=null;if(c.g==g){va(c),Ko(c),c.g=null;var A=2}else if(yi(c.h,g))v=g.G,ko(c.h,g),A=1;else return;if(c.I!=0){if(g.o)if(A==1){v=g.u?g.u.length:0,g=Date.now()-g.F;var L=c.D;A=ua(),Dt(A,new ui(A,v)),Si(c)}else Nu(c);else if(L=g.m,L==3||L==0&&g.X>0||!(A==1&&_a(c,g)||A==2&&Cs(c)))switch(v&&v.length>0&&(g=c.h,g.i=g.i.concat(v)),L){case 1:Ai(c,5);break;case 4:Ai(c,10);break;case 3:Ai(c,6);break;default:Ai(c,2)}}}function Mu(c,g){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*g}function Ai(c,g){if(c.j.info("Error code "+g),g==2){var v=y(c.bb,c),A=c.Ua;const L=!A;A=new pn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||kt(A,"https"),Ts(A),L?Yn(A.toString(),v):Bo(A.toString(),v)}else _t(2);c.I=0,c.l&&c.l.pa(g),xu(c),ya(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function xu(c){if(c.I=0,c.ja=[],c.l){const g=Lo(c.h);(g.length!=0||c.i.length!=0)&&(X(c.ja,g),X(c.ja,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.oa()}}function Vu(c,g,v){var A=v instanceof pn?Tt(v):new pn(v);if(A.g!="")g&&(A.g=g+"."+A.g),dr(A,A.u);else{var L=f.location;A=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;const H=new pn(null);A&&kt(H,A),g&&(H.g=g),L&&dr(H,L),v&&(H.h=v),A=H}return v=c.G,g=c.wa,v&&g&&Ge(A,v,g),Ge(A,"VER",c.ka),Is(c,A),A}function ku(c,g,v){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new Qe(new vi({ab:v})):new Qe(c.ma),g.Fa(c.L),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}r=Lu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Tr(){}Tr.prototype.g=function(c,g){return new tn(c,g)};function tn(c,g){yt.call(this),this.g=new vr(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!w(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!w(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Hi(this)}T(tn,yt),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Fo(this.g)},tn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=fr(c),c=v);g.i.push(new Et(g.Ya++,c)),g.I==3&&Si(g)},tn.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,tn.Z.N.call(this)};function Pu(c){zt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}T(Pu,zt);function Uu(){In.call(this),this.status=1}T(Uu,In);function Hi(c){this.g=c}T(Hi,Lu),Hi.prototype.ra=function(){Dt(this.g,"a")},Hi.prototype.qa=function(c){Dt(this.g,new Pu(c))},Hi.prototype.pa=function(c){Dt(this.g,new Uu)},Hi.prototype.oa=function(){Dt(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,cS=function(){return new Tr},uS=function(){return ua()},lS=ht,Pm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,nh=vs,Do.COMPLETE="complete",oS=Do,gu.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",yt.prototype.listen=yt.prototype.J,kl=gu,Qe.prototype.listenOnce=Qe.prototype.K,Qe.prototype.getLastError=Qe.prototype.Ha,Qe.prototype.getLastErrorCode=Qe.prototype.ya,Qe.prototype.getStatus=Qe.prototype.ca,Qe.prototype.getResponseJson=Qe.prototype.La,Qe.prototype.getResponseText=Qe.prototype.la,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Fa,aS=Qe}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let So="12.12.0";function _D(r){So=r}/**
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
 */const Ws=new xh("@firebase/firestore");function Xa(){return Ws.logLevel}function le(r,...e){if(Ws.logLevel<=Me.DEBUG){const n=e.map(Ip);Ws.debug(`Firestore (${So}): ${r}`,...n)}}function ur(r,...e){if(Ws.logLevel<=Me.ERROR){const n=e.map(Ip);Ws.error(`Firestore (${So}): ${r}`,...n)}}function ea(r,...e){if(Ws.logLevel<=Me.WARN){const n=e.map(Ip);Ws.warn(`Firestore (${So}): ${r}`,...n)}}function Ip(r){if(typeof r=="string")return r;try{return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function Ae(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,hS(r,s,n)}function hS(r,e,n){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ur(s),new Error(s)}function lt(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||hS(e,o,s)}function Pe(r,e){return r}/**
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
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ns{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class fS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Qt.UNAUTHENTICATED)))}shutdown(){}}class ED{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class TD{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ns,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ns)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(lt(typeof s.accessToken=="string",31837,{l:s}),new fS(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Qt(e)}}class SD{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class AD{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new SD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class S0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const s=u=>{u.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,le("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new S0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new S0(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wD(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Cp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=wD(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function Um(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return ym(o)===ym(u)?Ve(o,u):ym(o)?1:-1}return Ve(r.length,e.length)}const RD=55296,ID=57343;function ym(r){const e=r.charCodeAt(0);return e>=RD&&e<=ID}function co(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const A0="__name__";class Ni{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ae(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ae(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Ni.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Ve(e.length,n.length)}static compareSegments(e,n){const s=Ni.isNumericId(e),o=Ni.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ni.extractNumericId(e).compare(Ni.extractNumericId(n)):Um(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class it extends Ni{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new it(n)}static emptyPath(){return new it([])}}const CD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Ni{construct(e,n,s){return new rn(e,n,s)}static isValidIdentifier(e){return CD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===A0}static keyField(){return new rn([A0])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new he(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(n)}static emptyPath(){return new rn([])}}/**
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
 */function dS(r,e,n){if(!n)throw new he(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function ND(r,e,n,s){if(e===!0&&s===!0)throw new he(te.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function b0(r){if(!pe.isDocumentKey(r))throw new he(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function w0(r){if(pe.isDocumentKey(r))throw new he(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function DD(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function OD(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae(12329,{type:typeof r})}function $l(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=OD(r);throw new he(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function Ct(r,e){const n={typeString:r};return e&&(n.value=e),n}function ou(r,e){if(!DD(r))throw new he(te.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new he(te.INVALID_ARGUMENT,n);return!0}/**
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
 */const R0=-62135596800,I0=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*I0);return new It(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<R0)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/I0}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:It._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ou(e,It._jsonSchema))return new It(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-R0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}It._jsonSchemaVersion="firestore/timestamp/1.0",It._jsonSchema={type:Ct("string",It._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
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
 */const Ql=-1;function MD(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new It(n+1,0):new It(n,s));return new os(o,pe.empty(),e)}function xD(r){return new os(r.readTime,r.key,Ql)}class os{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new os(Se.min(),pe.empty(),Ql)}static max(){return new os(Se.max(),pe.empty(),Ql)}}function VD(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(r.documentKey,e.documentKey),n!==0?n:Ve(r.largestBatchId,e.largestBatchId))}/**
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
 */const kD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function jh(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==kD)throw r;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):W.reject(n)}static resolve(e){return new W(((n,s)=>{n(e)}))}static reject(e){return new W(((n,s)=>{s(e)}))}static waitFor(e){return new W(((n,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(p=>s(p)))})),f=!0,u===o&&n()}))}static or(e){let n=W.resolve(!1);for(const s of e)n=n.next((o=>o?W.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new W(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next((E=>{f[y]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(e,n){return new W(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function PD(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Bh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Bh.ce=-1;/**
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
 */const UD=-1;function Hh(r){return r==null}function zm(r){return r===0&&1/r==-1/0}/**
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
 */const mS="";function zD(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=C0(e)),e=jD(r.get(n),e);return C0(e)}function jD(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case mS:n+="";break;default:n+=u}}return n}function C0(r){return r+mS+""}/**
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
 */function N0(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function lu(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function BD(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Gt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gc(this.root,e,this.comparator,!0)}}class Gc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Gt.RED,this.left=o??Gt.EMPTY,this.right=u??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Gt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Gt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D0(this.data.getIterator())}getIteratorFrom(e){return new D0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class D0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xr{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Xr([])}unionWith(e){let n=new xt(rn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new pS("Invalid base64 string: "+u):u}})(e);return new Kt(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const HD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(r){if(lt(!!r,39018),typeof r=="string"){let e=0;const n=HD.exec(r);if(lt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pt(r.seconds),nanos:pt(r.nanos)}}function pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function us(r){return typeof r=="string"?Kt.fromBase64String(r):Kt.fromUint8Array(r)}/**
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
 */const gS="server_timestamp",yS="__type__",_S="__previous_value__",vS="__local_write_time__";function Np(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[yS])==null?void 0:s.stringValue)===gS}function qh(r){const e=r.mapValue.fields[_S];return Np(e)?qh(e):e}function Xl(r){const e=ls(r.mapValue.fields[vS].timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class qD{constructor(e,n,s,o,u,f,m,p,y,E,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E,this.apiKey=T}}const vh="(default)";class Zl{constructor(e,n){this.projectId=e,this.database=n||vh}static empty(){return new Zl("","")}get isDefaultDatabase(){return this.database===vh}isEqual(e){return e instanceof Zl&&e.projectId===this.projectId&&e.database===this.database}}function FD(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new he(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zl(r.options.projectId,e)}/**
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
 */const GD="__type__",KD="__max__",Kc={mapValue:{}},YD="__vector__",jm="value";function cs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Np(r)?4:QD(r)?9007199254740991:$D(r)?10:11:Ae(28295,{value:r})}function ki(r,e){if(r===e)return!0;const n=cs(r);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Xl(r).isEqual(Xl(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ls(o.timestampValue),m=ls(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return us(o.bytesValue).isEqual(us(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return pt(o.geoPointValue.latitude)===pt(u.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pt(o.integerValue)===pt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pt(o.doubleValue),m=pt(u.doubleValue);return f===m?zm(f)===zm(m):isNaN(f)&&isNaN(m)}return!1})(r,e);case 9:return co(r.arrayValue.values||[],e.arrayValue.values||[],ki);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(N0(f)!==N0(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!ki(f[p],m[p])))return!1;return!0})(r,e);default:return Ae(52216,{left:r})}}function Jl(r,e){return(r.values||[]).find((n=>ki(n,e)))!==void 0}function ho(r,e){if(r===e)return 0;const n=cs(r),s=cs(e);if(n!==s)return Ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=pt(u.integerValue||u.doubleValue),p=pt(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(r,e);case 3:return O0(r.timestampValue,e.timestampValue);case 4:return O0(Xl(r),Xl(e));case 5:return Um(r.stringValue,e.stringValue);case 6:return(function(u,f){const m=us(u),p=us(f);return m.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Ve(m[y],p[y]);if(E!==0)return E}return Ve(m.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=Ve(pt(u.latitude),pt(f.latitude));return m!==0?m:Ve(pt(u.longitude),pt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return M0(r.arrayValue,e.arrayValue);case 10:return(function(u,f){var N,z,X,J;const m=u.fields||{},p=f.fields||{},y=(N=m[jm])==null?void 0:N.arrayValue,E=(z=p[jm])==null?void 0:z.arrayValue,T=Ve(((X=y==null?void 0:y.values)==null?void 0:X.length)||0,((J=E==null?void 0:E.values)==null?void 0:J.length)||0);return T!==0?T:M0(y,E)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===Kc.mapValue&&f===Kc.mapValue)return 0;if(u===Kc.mapValue)return 1;if(f===Kc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const N=Um(p[T],E[T]);if(N!==0)return N;const z=ho(m[p[T]],y[E[T]]);if(z!==0)return z}return Ve(p.length,E.length)})(r.mapValue,e.mapValue);default:throw Ae(23264,{he:n})}}function O0(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const n=ls(r),s=ls(e),o=Ve(n.seconds,s.seconds);return o!==0?o:Ve(n.nanos,s.nanos)}function M0(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ho(n[o],s[o]);if(u)return u}return Ve(n.length,s.length)}function fo(r){return Bm(r)}function Bm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=ls(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return us(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return pe.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Bm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Bm(n.fields[f])}`;return o+"}"})(r.mapValue):Ae(61005,{value:r})}function ih(r){switch(cs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qh(r);return e?16+ih(e):16;case 5:return 2*r.stringValue.length;case 6:return us(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ih(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return lu(s.fields,((u,f)=>{o+=u.length+ih(f)})),o})(r.mapValue);default:throw Ae(13486,{value:r})}}function Hm(r){return!!r&&"integerValue"in r}function Dp(r){return!!r&&"arrayValue"in r}function x0(r){return!!r&&"nullValue"in r}function V0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function _m(r){return!!r&&"mapValue"in r}function $D(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[GD])==null?void 0:s.stringValue)===YD}function jl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return lu(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=jl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jl(r.arrayValue.values[n]);return e}return{...r}}function QD(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===KD}/**
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
 */class Di{constructor(e){this.value=e}static empty(){return new Di({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!_m(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jl(n)}setAll(e){let n=rn.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=jl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());_m(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ki(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];_m(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){lu(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Di(jl(this.value))}}/**
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
 */class Xt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Xt(e,0,Se.min(),Se.min(),Se.min(),Di.empty(),0)}static newFoundDocument(e,n,s,o){return new Xt(e,1,n,Se.min(),s,o,0)}static newNoDocument(e,n){return new Xt(e,2,n,Se.min(),Se.min(),Di.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,Se.min(),Se.min(),Di.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Di.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Di.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eh{constructor(e,n){this.position=e,this.inclusive=n}}function k0(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(f.referenceValue),n.key):s=ho(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function L0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!ki(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Th{constructor(e,n="asc"){this.field=e,this.dir=n}}function XD(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class ES{}class Mt extends ES{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new JD(e,n,s):n==="array-contains"?new tO(e,s):n==="in"?new nO(e,s):n==="not-in"?new iO(e,s):n==="array-contains-any"?new rO(e,s):new Mt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new WD(e,s):new eO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Li extends ES{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Li(e,n)}matches(e){return TS(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function TS(r){return r.op==="and"}function SS(r){return ZD(r)&&TS(r)}function ZD(r){for(const e of r.filters)if(e instanceof Li)return!1;return!0}function qm(r){if(r instanceof Mt)return r.field.canonicalString()+r.op.toString()+fo(r.value);if(SS(r))return r.filters.map((e=>qm(e))).join(",");{const e=r.filters.map((n=>qm(n))).join(",");return`${r.op}(${e})`}}function AS(r,e){return r instanceof Mt?(function(s,o){return o instanceof Mt&&s.op===o.op&&s.field.isEqual(o.field)&&ki(s.value,o.value)})(r,e):r instanceof Li?(function(s,o){return o instanceof Li&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&AS(f,o.filters[m])),!0):!1})(r,e):void Ae(19439)}function bS(r){return r instanceof Mt?(function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`})(r):r instanceof Li?(function(n){return n.op.toString()+" {"+n.getFilters().map(bS).join(" ,")+"}"})(r):"Filter"}class JD extends Mt{constructor(e,n,s){super(e,n,s),this.key=pe.fromName(s.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class WD extends Mt{constructor(e,n){super(e,"in",n),this.keys=wS("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class eO extends Mt{constructor(e,n){super(e,"not-in",n),this.keys=wS("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function wS(r,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class tO extends Mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dp(n)&&Jl(n.arrayValue,this.value)}}class nO extends Mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jl(this.value.arrayValue,n)}}class iO extends Mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Jl(this.value.arrayValue,n)}}class rO extends Mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Jl(this.value.arrayValue,s)))}}/**
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
 */class sO{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function P0(r,e=null,n=[],s=[],o=null,u=null,f=null){return new sO(r,e,n,s,o,u,f)}function Op(r){const e=Pe(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>qm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Hh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>fo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>fo(s))).join(",")),e.Te=n}return e.Te}function Mp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!XD(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!AS(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!L0(r.startAt,e.startAt)&&L0(r.endAt,e.endAt)}function Fm(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Fh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function aO(r,e,n,s,o,u,f,m){return new Fh(r,e,n,s,o,u,f,m)}function xp(r){return new Fh(r)}function U0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function oO(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function lO(r){return r.collectionGroup!==null}function Bl(r){const e=Pe(r);if(e.Ee===null){e.Ee=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new xt(rn.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Th(u,s))})),n.has(rn.keyField().canonicalString())||e.Ee.push(new Th(rn.keyField(),s))}return e.Ee}function Vi(r){const e=Pe(r);return e.Ie||(e.Ie=uO(e,Bl(r))),e.Ie}function uO(r,e){if(r.limitType==="F")return P0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Th(o.field,u)}));const n=r.endAt?new Eh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Eh(r.startAt.position,r.startAt.inclusive):null;return P0(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Gm(r,e,n){return new Fh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Gh(r,e){return Mp(Vi(r),Vi(e))&&r.limitType===e.limitType}function RS(r){return`${Op(Vi(r))}|lt:${r.limitType}`}function Za(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>bS(o))).join(", ")}]`),Hh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>fo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>fo(o))).join(",")),`Target(${s})`})(Vi(r))}; limitType=${r.limitType})`}function Kh(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Bl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=k0(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,Bl(s),o)||s.endAt&&!(function(f,m,p){const y=k0(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,Bl(s),o))})(r,e)}function cO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function IS(r){return(e,n)=>{let s=!1;for(const o of Bl(r)){const u=hO(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function hO(r,e,n){const s=r.field.isKeyField()?pe.comparator(e.key,n.key):(function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?ho(p,y):Ae(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:r.dir})}}/**
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
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){lu(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return BD(this.inner)}size(){return this.innerSize}}/**
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
 */const fO=new gt(pe.comparator);function hs(){return fO}const CS=new gt(pe.comparator);function Ll(...r){let e=CS;for(const n of r)e=e.insert(n.key,n);return e}function dO(r){let e=CS;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ys(){return Hl()}function NS(){return Hl()}function Hl(){return new sa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const mO=new xt(pe.comparator);function ze(...r){let e=mO;for(const n of r)e=e.add(n);return e}const pO=new xt(Ve);function gO(){return pO}/**
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
 */function yO(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zm(e)?"-0":e}}function _O(r){return{integerValue:""+r}}/**
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
 */class Yh{constructor(){this._=void 0}}function vO(r,e,n){return r instanceof Km?(function(o,u){const f={fields:{[yS]:{stringValue:gS},[vS]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Np(u)&&(u=qh(u)),u&&(f.fields[_S]=u),{mapValue:f}})(n,e):r instanceof Sh?DS(r,e):r instanceof Ah?OS(r,e):(function(o,u){const f=TO(o,u),m=z0(f)+z0(o.Ae);return Hm(f)&&Hm(o.Ae)?_O(m):yO(o.serializer,m)})(r,e)}function EO(r,e,n){return r instanceof Sh?DS(r,e):r instanceof Ah?OS(r,e):n}function TO(r,e){return r instanceof Ym?(function(s){return Hm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Km extends Yh{}class Sh extends Yh{constructor(e){super(),this.elements=e}}function DS(r,e){const n=MS(e);for(const s of r.elements)n.some((o=>ki(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Ah extends Yh{constructor(e){super(),this.elements=e}}function OS(r,e){let n=MS(e);for(const s of r.elements)n=n.filter((o=>!ki(o,s)));return{arrayValue:{values:n}}}class Ym extends Yh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function z0(r){return pt(r.integerValue||r.doubleValue)}function MS(r){return Dp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function SO(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Sh&&o instanceof Sh||s instanceof Ah&&o instanceof Ah?co(s.elements,o.elements,ki):s instanceof Ym&&o instanceof Ym?ki(s.Ae,o.Ae):s instanceof Km&&o instanceof Km})(r.transform,e.transform)}class $s{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $s}static exists(e){return new $s(void 0,e)}static updateTime(e){return new $s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Vp{}function xS(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new bO(r.key,$s.none()):new kp(r.key,r.data,$s.none());{const n=r.data,s=Di.empty();let o=new xt(rn.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new $h(r.key,s,new Xr(o.toArray()),$s.none())}}function AO(r,e,n){r instanceof kp?(function(o,u,f){const m=o.value.clone(),p=B0(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):r instanceof $h?(function(o,u,f){if(!rh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=B0(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(VS(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function ql(r,e,n,s){return r instanceof kp?(function(u,f,m,p){if(!rh(u.precondition,f))return m;const y=u.value.clone(),E=H0(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof $h?(function(u,f,m,p){if(!rh(u.precondition,f))return m;const y=H0(u.fieldTransforms,p,f),E=f.data;return E.setAll(VS(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(r,e,n,s):(function(u,f,m){return rh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,e,n)}function j0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,((u,f)=>SO(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class kp extends Vp{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $h extends Vp{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function VS(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function B0(r,e,n){const s=new Map;lt(r.length===n.length,32656,{Ve:n.length,de:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,EO(f,m,n[o]))}return s}function H0(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,vO(u,f,e))}return s}class bO extends Vp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wO{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&AO(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ql(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ql(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=NS();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=xS(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ze())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,((n,s)=>j0(n,s)))&&co(this.baseMutations,e.baseMutations,((n,s)=>j0(n,s)))}}/**
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
 */class RO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Rt,Le;function kS(r){if(r===void 0)return ur("GRPC error has no .code"),te.UNKNOWN;switch(r){case Rt.OK:return te.OK;case Rt.CANCELLED:return te.CANCELLED;case Rt.UNKNOWN:return te.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return te.INTERNAL;case Rt.UNAVAILABLE:return te.UNAVAILABLE;case Rt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case Rt.NOT_FOUND:return te.NOT_FOUND;case Rt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case Rt.ABORTED:return te.ABORTED;case Rt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case Rt.DATA_LOSS:return te.DATA_LOSS;default:return Ae(39323,{code:r})}}(Le=Rt||(Rt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CO(){return new TextEncoder}/**
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
 */const NO=new ts([4294967295,4294967295],0);function q0(r){const e=CO().encode(r),n=new sS;return n.update(e),new Uint8Array(n.digest())}function F0(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ts([n,s],0),new ts([o,u],0)]}class Lp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Pl(`Invalid padding: ${n}`);if(s<0)throw new Pl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Pl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ts.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(ts.fromNumber(s)));return o.compare(NO)===1&&(o=new ts([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=q0(e),[s,o]=F0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Lp(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const n=q0(e),[s,o]=F0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,uu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Qh(Se.min(),o,new gt(Ve),hs(),ze())}}class uu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new uu(s,n,ze(),ze(),ze())}}/**
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
 */class sh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class LS{constructor(e,n){this.targetId=e,this.Ce=n}}class PS{constructor(e,n,s=Kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class G0{constructor(){this.ve=0,this.Fe=K0(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ze(),n=ze(),s=ze();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ae(38017,{changeType:u})}})),new uu(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=K0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class DO{constructor(e){this.Ge=e,this.ze=new Map,this.je=hs(),this.Je=Yc(),this.He=Yc(),this.Ze=new gt(Ve)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Fm(u))if(s===0){const f=new pe(u.path);this.et(n,f,Xt.newNoDocument(f,Se.min()))}else lt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=us(s).toUint8Array()}catch(p){if(p instanceof pS)return ea("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Lp(f,o,u)}catch(p){return ea(p instanceof Pl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Fm(m.target)){const p=new pe(m.target.path);this.Et(p).has(f)||this.It(f,p)||this.et(f,p,Xt.newNoDocument(p,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=ze();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new Qh(e,n,this.Ze,this.je,s);return this.je=hs(),this.Je=Yc(),this.He=Yc(),this.Ze=new gt(Ve),o}Ye(e,n){if(!this.rt(e))return;const s=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,n)?o.Ke(n,1):o.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new G0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new xt(Ve),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new xt(Ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new G0),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Yc(){return new gt(pe.comparator)}function K0(){return new gt(pe.comparator)}const OO={asc:"ASCENDING",desc:"DESCENDING"},MO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xO={and:"AND",or:"OR"};class VO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $m(r,e){return r.useProto3Json||Hh(e)?e:{value:e}}function kO(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LO(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function so(r){return lt(!!r,49232),Se.fromTimestamp((function(n){const s=ls(n);return new It(s.seconds,s.nanos)})(r))}function PO(r,e){return Qm(r,e).canonicalString()}function Qm(r,e){const n=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function US(r){const e=it.fromString(r);return lt(qS(e),10190,{key:e.toString()}),e}function vm(r,e){const n=US(e);if(n.get(1)!==r.databaseId.projectId)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pe(jS(n))}function zS(r,e){return PO(r.databaseId,e)}function UO(r){const e=US(r);return e.length===4?it.emptyPath():jS(e)}function Y0(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function jS(r){return lt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function zO(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ae(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(lt(E===void 0||typeof E=="string",58123),Kt.fromBase64String(E||"")):(lt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Kt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(y){const E=y.code===void 0?te.UNKNOWN:kS(y.code);return new he(E,y.message||"")})(f);n=new PS(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=vm(r,s.document.name),u=so(s.document.updateTime),f=s.document.createTime?so(s.document.createTime):Se.min(),m=new Di({mapValue:{fields:s.document.fields}}),p=Xt.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new sh(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=vm(r,s.document),u=s.readTime?so(s.readTime):Se.min(),f=Xt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new sh([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=vm(r,s.document),u=s.removedTargetIds||[];n=new sh([],u,o,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new IO(o,u),m=s.targetId;n=new LS(m,f)}}return n}function jO(r,e){return{documents:[zS(r,e.path)]}}function BO(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=zS(r,o);const u=(function(y){if(y.length!==0)return HS(Li.create(y,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((E=>(function(N){return{field:Ja(N.field),direction:FO(N.dir)}})(E)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=$m(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function HO(r){let e=UO(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){lt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=(function(T){const N=BS(T);return N instanceof Li&&SS(N)?N.getFilters():[N]})(n.where));let f=[];n.orderBy&&(f=(function(T){return T.map((N=>(function(X){return new Th(Wa(X.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(X.direction))})(N)))})(n.orderBy));let m=null;n.limit&&(m=(function(T){let N;return N=typeof T=="object"?T.value:T,Hh(N)?null:N})(n.limit));let p=null;n.startAt&&(p=(function(T){const N=!!T.before,z=T.values||[];return new Eh(z,N)})(n.startAt));let y=null;return n.endAt&&(y=(function(T){const N=!T.before,z=T.values||[];return new Eh(z,N)})(n.endAt)),aO(e,o,f,u,m,"F",p,y)}function qO(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BS(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Wa(n.unaryFilter.field);return Mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Wa(n.unaryFilter.field);return Mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Wa(n.unaryFilter.field);return Mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Wa(n.unaryFilter.field);return Mt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Mt.create(Wa(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Li.create(n.compositeFilter.filters.map((s=>BS(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(n.compositeFilter.op))})(r):Ae(30097,{filter:r})}function FO(r){return OO[r]}function GO(r){return MO[r]}function KO(r){return xO[r]}function Ja(r){return{fieldPath:r.canonicalString()}}function Wa(r){return rn.fromServerFormat(r.fieldPath)}function HS(r){return r instanceof Mt?(function(n){if(n.op==="=="){if(V0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NAN"}};if(x0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(V0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NAN"}};if(x0(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ja(n.field),op:GO(n.op),value:n.value}}})(r):r instanceof Li?(function(n){const s=n.getFilters().map((o=>HS(o)));return s.length===1?s[0]:{compositeFilter:{op:KO(n.op),filters:s}}})(r):Ae(54877,{filter:r})}function qS(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,s,o,u=Se.min(),f=Se.min(),m=Kt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YO{constructor(e){this.yt=e}}function $O(r){const e=HO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Gm(e,e.limit,"L"):e}/**
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
 */class QO{constructor(){this.bn=new XO}addToCollectionParentIndex(e,n){return this.bn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(os.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(os.min())}updateCollectionGroup(e,n,s){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class XO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new xt(it.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new xt(it.comparator)).toArray()}}/**
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
 */const $0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},FS=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */const Q0="LruGarbageCollector",ZO=1048576;function X0([r,e],[n,s]){const o=Ve(r,n);return o===0?Ve(e,s):o}class JO{constructor(e){this.Pr=e,this.buffer=new xt(X0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();X0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class WO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){le(Q0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?le(Q0,"Ignoring IndexedDB error during garbage collection: ",n):await jh(n)}await this.Ar(3e5)}))}}class e5{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return W.resolve(Bh.ce);const s=new JO(n);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve($0)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$0):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,n)))).next((T=>(u=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(y=Date.now(),Xa()<=Me.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function t5(r,e){return new e5(r,e)}/**
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
 */class n5{constructor(){this.changes=new sa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class i5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class r5{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&ql(s.mutation,o,Xr.empty(),It.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,ze()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=ze()){const o=Ys();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=Ll();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,ze())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let u=hs();const f=Hl(),m=(function(){return Hl()})();return n.forEach(((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof $h)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),ql(E.mutation,y,E.mutation.getFieldMask(),It.now())):f.set(y.key,Xr.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,E)=>f.set(y,E))),n.forEach(((y,E)=>m.set(y,new i5(E,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=Hl();let o=new gt(((f,m)=>f-m)),u=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Xr.empty();E=m.applyToLocalView(y,E),s.set(p,E);const T=(o.get(m.batchId)||ze()).add(p);o=o.insert(m.batchId,T)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,T=NS();E.forEach((N=>{if(!u.has(N)){const z=xS(n.get(N),s.get(N));z!==null&&T.set(N,z),u=u.add(N)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return oO(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):W.resolve(Ys());let m=Ql,p=u;return f.next((y=>W.forEach(y,((E,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((N=>{p=p.insert(E,N)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,ze()))).next((E=>({batchId:m,changes:dO(E)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next((s=>{let o=Ll();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Ll();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(p=>{const y=(function(T,N){return new Fh(N,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((T,N)=>{f=f.insert(T,N)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Xt.newInvalidDocument(E)))}));let m=Ll();return f.forEach(((p,y)=>{const E=u.get(p);E!==void 0&&ql(E.mutation,y,Xr.empty(),It.now()),Kh(n,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class s5{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return W.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:so(o.createTime)}})(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(o){return{name:o.name,query:$O(o.bundledQuery),readTime:so(o.readTime)}})(n)),W.resolve()}}/**
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
 */class a5{constructor(){this.overlays=new gt(pe.comparator),this.Lr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return W.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.St(e,n,u)})),W.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),W.resolve()}getOverlaysForCollection(e,n,s){const o=Ys(),u=n.length+1,f=new pe(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new gt(((y,E)=>y-E));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Ys(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Ys(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,E)=>m.set(y,E))),!(m.size()>=o)););return W.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new RO(n,s));let u=this.Lr.get(n);u===void 0&&(u=ze(),this.Lr.set(n,u)),this.Lr.set(n,u.add(s.key))}}/**
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
 */class o5{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class Pp{constructor(){this.kr=new xt(Pt.qr),this.Kr=new xt(Pt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new Pt(e,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new Pt(e,n))}Qr(e,n){e.forEach((s=>this.removeReference(s,n)))}Gr(e){const n=new pe(new it([])),s=new Pt(n,e),o=new Pt(n,e+1),u=[];return this.Kr.forEachInRange([s,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new pe(new it([])),s=new Pt(n,e),o=new Pt(n,e+1);let u=ze();return this.Kr.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new Pt(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return pe.comparator(e.key,n.key)||Ve(e.Jr,n.Jr)}static Ur(e,n){return Ve(e.Jr,n.Jr)||pe.comparator(e.key,n.key)}}/**
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
 */class l5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new xt(Pt.qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new wO(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Hr=this.Hr.add(new Pt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,n){return W.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?UD:this.Yn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pt(n,0),o=new Pt(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(f=>{const m=this.Zr(f.Jr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xt(Ve);return n.forEach((o=>{const u=new Pt(o,0),f=new Pt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,f],(m=>{s=s.add(m.Jr)}))})),W.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const f=new Pt(new pe(u),0);let m=new xt(Ve);return this.Hr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Jr)),!0)}),f),W.resolve(this.Yr(m))}Yr(e){const n=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){lt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return W.forEach(n.mutations,(o=>{const u=new Pt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,n){const s=new Pt(n,0),o=this.Hr.firstAfterOrEqual(s);return W.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class u5{constructor(e){this.ti=e,this.docs=(function(){return new gt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let s=hs();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xt.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=hs();const f=n.path,m=new pe(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||VD(xD(E),s)<=0||(o.has(E.key)||Kh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ae(9500)}ni(e,n){return W.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new c5(this)}getSize(e){return W.resolve(this.size)}}class c5 extends n5{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),W.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class h5{constructor(e){this.persistence=e,this.ri=new sa((n=>Op(n)),Mp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.ii=0,this.si=new Pp,this.targetCount=0,this.oi=mo._r()}forEachTarget(e,n){return this.ri.forEach(((s,o)=>n(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),W.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.lr(n),W.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.ri.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return W.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),W.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return W.resolve(s)}containsKey(e,n){return W.resolve(this.si.containsKey(n))}}/**
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
 */class GS{constructor(e,n){this._i={},this.overlays={},this.ai=new Bh(0),this.ui=!1,this.ui=!0,this.ci=new o5,this.referenceDelegate=e(this),this.li=new h5(this),this.indexManager=new QO,this.remoteDocumentCache=(function(o){return new u5(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new YO(n),this.Pi=new s5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new a5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new l5(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){le("MemoryPersistence","Starting transaction:",e);const o=new f5(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,n){return W.or(Object.values(this._i).map((s=>()=>s.containsKey(e,n))))}}class f5 extends LD{constructor(e){super(),this.currentSequenceNumber=e}}class Up{constructor(e){this.persistence=e,this.Ri=new Pp,this.Ai=null}static Vi(e){return new Up(e)}get di(){if(this.Ai)return this.Ai;throw Ae(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),W.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,(s=>{const o=pe.fromPath(s);return this.mi(e,o).next((u=>{u||n.removeEntry(o,Se.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class bh{constructor(e,n){this.persistence=e,this.fi=new sa((s=>zD(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=t5(this,n)}static Vi(e,n){return new bh(e,n)}Ti(){}Ei(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}pr(e){let n=0;return this.mr(e,(s=>{n++})).next((()=>n))}mr(e,n){return W.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?W.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(f=>this.wr(e,f,n).next((m=>{m||(s++,u.removeEntry(f,Se.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),W.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ih(e.data.value)),n}wr(e,n,s){return W.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.fi.get(n);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Ts=s,this.Es=o}static Is(e,n){let s=ze(),o=ze();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new zp(e,n.fromCache,s,o)}}/**
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
 */class d5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class m5{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return aR()?8:PD(Wt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.gs(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new d5;return this.ys(e,n,f).next((m=>{if(u.result=m,this.As)return this.ws(e,n,f,m.size)}))})).next((()=>u.result))}ws(e,n,s,o){return s.documentReadCount<this.Vs?(Xa()<=Me.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(Xa()<=Me.DEBUG&&le("QueryEngine","Query:",Za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Xa()<=Me.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vi(n))):W.resolve())}gs(e,n){if(U0(n))return W.resolve(null);let s=Vi(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Gm(n,null,"F"),s=Vi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=ze(...u);return this.fs.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.Ss(n,m);return this.bs(n,y,f,p.readTime)?this.gs(e,Gm(n,null,"F")):this.Ds(e,y,n,p)}))))})))))}ps(e,n,s,o){return U0(n)||o.isEqual(Se.min())?W.resolve(null):this.fs.getDocuments(e,s).next((u=>{const f=this.Ss(n,u);return this.bs(n,f,s,o)?W.resolve(null):(Xa()<=Me.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Za(n)),this.Ds(e,f,n,MD(o,Ql)).next((m=>m)))}))}Ss(e,n){let s=new xt(IS(e));return n.forEach(((o,u)=>{Kh(e,u)&&(s=s.add(u))})),s}bs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,n,s){return Xa()<=Me.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Za(n)),this.fs.getDocumentsMatchingQuery(e,n,os.min(),s)}Ds(e,n,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const jp="LocalStore",p5=3e8;class g5{constructor(e,n,s,o){this.persistence=e,this.Cs=n,this.serializer=o,this.vs=new gt(Ve),this.Fs=new sa((u=>Op(u)),Mp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r5(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function y5(r,e,n,s){return new g5(r,e,n,s)}async function KS(r,e){const n=Pe(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Os(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=ze();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ns:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function YS(r){const e=Pe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function _5(r,e){const n=Pe(r),s=e.snapshotVersion;let o=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});o=n.vs;const m=[];e.targetChanges.forEach(((E,T)=>{const N=o.get(T);if(!N)return;m.push(n.li.removeMatchingKeys(u,E.removedDocuments,T).next((()=>n.li.addMatchingKeys(u,E.addedDocuments,T))));let z=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?z=z.withResumeToken(Kt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(T,z),(function(J,K,ee){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=p5?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(N,z,E)&&m.push(n.li.updateTargetData(u,z))}));let p=hs(),y=ze();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(v5(u,f,e.documentUpdates).next((E=>{p=E.Bs,y=E.Ls}))),!s.isEqual(Se.min())){const E=n.li.getLastRemoteSnapshotVersion(u).next((T=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return W.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(n.vs=o,u)))}function v5(r,e,n){let s=ze(),o=ze();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=hs();return n.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):le(jp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{Bs:f,Ls:o}}))}function E5(r,e){const n=Pe(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.li.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):n.li.allocateTargetId(s).next((f=>(o=new Zr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(e,s.targetId)),s}))}async function Xm(r,e,n){const s=Pe(r),o=s.vs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Ao(f))throw f;le(jp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Z0(r,e,n){const s=Pe(r);let o=Se.min(),u=ze();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,E){const T=Pe(p),N=T.Fs.get(E);return N!==void 0?W.resolve(T.vs.get(N)):T.li.getTargetData(y,E)})(s,f,Vi(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,e,n?o:Se.min(),n?u:ze()))).next((m=>(T5(s,cO(e),m),{documents:m,ks:u})))))}function T5(r,e,n){let s=r.Ms.get(e)||Se.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class J0{constructor(){this.activeTargetIds=gO()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S5{constructor(){this.vo=new J0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new J0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A5{Mo(e){}shutdown(){}}/**
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
 */const W0="ConnectivityMonitor";class eE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){le(W0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){le(W0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $c=null;function Zm(){return $c===null?$c=(function(){return 268435456+Math.round(2147483648*Math.random())})():$c++,"0x"+$c.toString(16)}/**
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
 */const Em="RestConnection",b5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class w5{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===vh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,n,s,o,u){const f=Zm(),m=this.Qo(e,n.toUriEncodedString());le(Em,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,u);const{host:y}=new URL(m),E=na(y);return this.zo(e,m,p,s,E).then((T=>(le(Em,`Received RPC '${e}' ${f}: `,T),T)),(T=>{throw ea(Em,`RPC '${e}' ${f} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,n,s,o,u,f){return this.Wo(e,n,s,o,u)}Go(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,n){const s=b5[e];let o=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class R5{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const $t="WebChannelConnection",Ml=(r,e,n)=>{r.listen(e,(s=>{try{n(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class ao extends w5{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=uS();Ml(e,lS.STAT_EVENT,(n=>{n.stat===Pm.PROXY?le($t,"STAT_EVENT: detected buffering proxy"):n.stat===Pm.NOPROXY&&le($t,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(e,n,s,o,u){const f=Zm();return new Promise(((m,p)=>{const y=new aS;y.setWithCredentials(!0),y.listenOnce(oS.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case nh.NO_ERROR:const T=y.getResponseJson();le($t,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(T)),m(T);break;case nh.TIMEOUT:le($t,`RPC '${e}' ${f} timed out`),p(new he(te.DEADLINE_EXCEEDED,"Request time out"));break;case nh.HTTP_ERROR:const N=y.getStatus();if(le($t,`RPC '${e}' ${f} failed with status:`,N,"response text:",y.getResponseText()),N>0){let z=y.getResponseJson();Array.isArray(z)&&(z=z[0]);const X=z==null?void 0:z.error;if(X&&X.status&&X.message){const J=(function(ee){const ae=ee.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(ae)>=0?ae:te.UNKNOWN})(X.status);p(new he(J,X.message))}else p(new he(te.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new he(te.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{le($t,`RPC '${e}' ${f} completed.`)}}));const E=JSON.stringify(o);le($t,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)}))}T_(e,n,s){const o=Zm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,n,s),m.encodeInitMessageHeaders=!0;const y=u.join("");le($t,`Creating RPC '${e}' stream ${o}: ${y}`,m);const E=f.createWebChannel(y,m);this.E_(E);let T=!1,N=!1;const z=new R5({Jo:X=>{N?le($t,`Not sending because RPC '${e}' stream ${o} is closed:`,X):(T||(le($t,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),le($t,`RPC '${e}' stream ${o} sending:`,X),E.send(X))},Ho:()=>E.close()});return Ml(E,kl.EventType.OPEN,(()=>{N||(le($t,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Ml(E,kl.EventType.CLOSE,(()=>{N||(N=!0,le($t,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(E))})),Ml(E,kl.EventType.ERROR,(X=>{N||(N=!0,ea($t,`RPC '${e}' stream ${o} transport errored. Name:`,X.name,"Message:",X.message),z.o_(new he(te.UNAVAILABLE,"The operation could not be completed")))})),Ml(E,kl.EventType.MESSAGE,(X=>{var J;if(!N){const K=X.data[0];lt(!!K,16349);const ee=K,ae=(ee==null?void 0:ee.error)||((J=ee[0])==null?void 0:J.error);if(ae){le($t,`RPC '${e}' stream ${o} received error:`,ae);const se=ae.status;let de=(function(R){const b=Rt[R];if(b!==void 0)return kS(b)})(se),ge=ae.message;se==="NOT_FOUND"&&ge.includes("database")&&ge.includes("does not exist")&&ge.includes(this.databaseId.database)&&ea(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),de===void 0&&(de=te.INTERNAL,ge="Unknown error status: "+se+" with message "+ae.message),N=!0,z.o_(new he(de,ge)),E.close()}else le($t,`RPC '${e}' stream ${o} received:`,K),z.__(K)}})),ao.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cS()}}/**
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
 */function I5(r){return new ao(r)}function Tm(){return typeof document<"u"?document:null}/**
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
 */ao.c_=!1;class QS{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const tE="PersistentStream";class C5{constructor(e,n,s,o,u,f,m,p){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new QS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new he(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(tE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(le(tE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class N5 extends C5{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zO(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Se.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Se.min():f.readTime?so(f.readTime):Se.min()})(e);return this.listener.H_(n,s)}Z_(e){const n={};n.database=Y0(this.serializer),n.addTarget=(function(u,f){let m;const p=f.target;if(m=Fm(p)?{documents:jO(u,p)}:{query:BO(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=LO(u,f.resumeToken);const y=$m(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Se.min())>0){m.readTime=kO(u,f.snapshotVersion.toTimestamp());const y=$m(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=qO(this.serializer,e);s&&(n.labels=s),this.q_(n)}X_(e){const n={};n.database=Y0(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class D5{}class O5 extends D5{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,Qm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(te.UNKNOWN,u.toString())}))}jo(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.jo(e,Qm(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new he(te.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function M5(r,e,n,s){return new O5(r,e,n,s)}class x5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const po="RemoteStore";class V5{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{hu(this)&&(le(po,"Restarting streams for network reachability change."),await(async function(p){const y=Pe(p);y.Ia.add(4),await cu(y),y.Va.set("Unknown"),y.Ia.delete(4),await Xh(y)})(this))}))})),this.Va=new x5(s,o)}}async function Xh(r){if(hu(r))for(const e of r.Ra)await e(!0)}async function cu(r){for(const e of r.Ra)await e(!1)}function XS(r,e){const n=Pe(r);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Fp(n)?qp(n):bo(n).O_()&&Hp(n,e))}function Bp(r,e){const n=Pe(r),s=bo(n);n.Ea.delete(e),s.O_()&&ZS(n,e),n.Ea.size===0&&(s.O_()?s.L_():hu(n)&&n.Va.set("Unknown"))}function Hp(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bo(r).Z_(e)}function ZS(r,e){r.da.$e(e),bo(r).X_(e)}function qp(r){r.da=new DO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),bo(r).start(),r.Va.ua()}function Fp(r){return hu(r)&&!bo(r).x_()&&r.Ea.size>0}function hu(r){return Pe(r).Ia.size===0}function JS(r){r.da=void 0}async function k5(r){r.Va.set("Online")}async function L5(r){r.Ea.forEach(((e,n)=>{Hp(r,e)}))}async function P5(r,e){JS(r),Fp(r)?(r.Va.ha(e),qp(r)):r.Va.set("Unknown")}async function U5(r,e,n){if(r.Va.set("Online"),e instanceof PS&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ea.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){le(po,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nE(r,s)}else if(e instanceof sh?r.da.Xe(e):e instanceof LS?r.da.st(e):r.da.tt(e),!n.isEqual(Se.min()))try{const s=await YS(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.da.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ea.get(y);E&&u.Ea.set(y,E.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const E=u.Ea.get(p);if(!E)return;u.Ea.set(p,E.withResumeToken(Kt.EMPTY_BYTE_STRING,E.snapshotVersion)),ZS(u,p);const T=new Zr(E.target,p,y,E.sequenceNumber);Hp(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){le(po,"Failed to raise snapshot:",s),await nE(r,s)}}async function nE(r,e,n){if(!Ao(e))throw e;r.Ia.add(1),await cu(r),r.Va.set("Offline"),n||(n=()=>YS(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{le(po,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await Xh(r)}))}async function iE(r,e){const n=Pe(r);n.asyncQueue.verifyOperationInProgress(),le(po,"RemoteStore received new credentials");const s=hu(n);n.Ia.add(3),await cu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Xh(n)}async function z5(r,e){const n=Pe(r);e?(n.Ia.delete(2),await Xh(n)):e||(n.Ia.add(2),await cu(n),n.Va.set("Unknown"))}function bo(r){return r.ma||(r.ma=(function(n,s,o){const u=Pe(n);return u.sa(),new N5(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:k5.bind(null,r),Yo:L5.bind(null,r),t_:P5.bind(null,r),H_:U5.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),Fp(r)?qp(r):r.Va.set("Unknown")):(await r.ma.stop(),JS(r))}))),r.ma}/**
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
 */class Gp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Gp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function WS(r,e){if(ur("AsyncQueue",`${e}: ${r}`),Ao(r))return new he(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||pe.comparator(n.key,s.key):(n,s)=>pe.comparator(n.key,s.key),this.keyedMap=Ll(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class rE{constructor(){this.ga=new gt(pe.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ae(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class go{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new go(e,n,oo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class j5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class B5{constructor(){this.queries=sE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Pe(n),u=o.queries;o.queries=sE(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new he(te.ABORTED,"Firestore shutting down"))}}function sE(){return new sa((r=>RS(r)),Gh)}async function eA(r,e){const n=Pe(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new j5,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=WS(f,`Initialization of query '${Za(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&Kp(n)}async function tA(r,e){const n=Pe(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function H5(r,e){const n=Pe(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Kp(n)}function q5(r,e,n){const s=Pe(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function Kp(r){r.Ca.forEach((e=>{e.next()}))}var Jm,aE;(aE=Jm||(Jm={})).Ma="default",aE.Cache="cache";class nA{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Jm.Cache}}/**
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
 */class iA{constructor(e){this.key=e}}class rA{constructor(e){this.key=e}}class F5{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ze(),this.mutatedKeys=ze(),this.eu=IS(e),this.tu=new oo(this.eu)}get nu(){return this.Za}ru(e,n){const s=n?n.iu:new rE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const N=o.get(E),z=Kh(this.query,T)?T:null,X=!!N&&this.mutatedKeys.has(N.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let K=!1;N&&z?N.data.isEqual(z.data)?X!==J&&(s.track({type:3,doc:z}),K=!0):this.su(N,z)||(s.track({type:2,doc:z}),K=!0,(p&&this.eu(z,p)>0||y&&this.eu(z,y)<0)&&(m=!0)):!N&&z?(s.track({type:0,doc:z}),K=!0):N&&!z&&(s.track({type:1,doc:N}),K=!0,(p||y)&&(m=!0)),K&&(z?(f=f.add(z),u=J?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,bs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((E,T)=>(function(z,X){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:K})}};return J(z)-J(X)})(E.type,T.type)||this.eu(E.doc,T.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,f.length!==0||y?{snapshot:new go(this.query,e.tu,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ze(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const n=[];return e.forEach((s=>{this.Ya.has(s)||n.push(new rA(s))})),this.Ya.forEach((s=>{e.has(s)||n.push(new iA(s))})),n}cu(e){this.Za=e.ks,this.Ya=ze();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yp="SyncEngine";class G5{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class K5{constructor(e){this.key=e,this.hu=!1}}class Y5{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new sa((m=>RS(m)),Gh),this.Eu=new Map,this.Iu=new Set,this.Ru=new gt(pe.comparator),this.Au=new Map,this.Vu=new Pp,this.du={},this.mu=new Map,this.fu=mo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $5(r,e,n=!0){const s=uA(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await sA(s,e,n,!0),o}async function Q5(r,e){const n=uA(r);await sA(n,e,!0,!1)}async function sA(r,e,n,s){const o=await E5(r.localStore,Vi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await X5(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&XS(r.remoteStore,o),m}async function X5(r,e,n,s,o){r.pu=(T,N,z)=>(async function(J,K,ee,ae){let se=K.view.ru(ee);se.bs&&(se=await Z0(J.localStore,K.query,!1).then((({documents:R})=>K.view.ru(R,se))));const de=ae&&ae.targetChanges.get(K.targetId),ge=ae&&ae.targetMismatches.get(K.targetId)!=null,ve=K.view.applyChanges(se,J.isPrimaryClient,de,ge);return lE(J,K.targetId,ve.au),ve.snapshot})(r,T,N,z);const u=await Z0(r.localStore,e,!0),f=new F5(e,u.ks),m=f.ru(u.documents),p=uu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);lE(r,n,y.au);const E=new G5(e,n,f);return r.Tu.set(e,E),r.Eu.has(n)?r.Eu.get(n).push(e):r.Eu.set(n,[e]),y.snapshot}async function Z5(r,e,n){const s=Pe(r),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((f=>!Gh(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Xm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Bp(s.remoteStore,o.targetId),Wm(s,o.targetId)})).catch(jh)):(Wm(s,o.targetId),await Xm(s.localStore,o.targetId,!0))}async function J5(r,e){const n=Pe(r),s=n.Tu.get(e),o=n.Eu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Bp(n.remoteStore,s.targetId))}async function aA(r,e){const n=Pe(r);try{const s=await _5(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(lt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?lt(f.hu,14607):o.removedDocuments.size>0&&(lt(f.hu,42227),f.hu=!1))})),await lA(n,s,e)}catch(s){await jh(s)}}function oE(r,e,n){const s=Pe(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Pe(f);p.onlineState=m;let y=!1;p.queries.forEach(((E,T)=>{for(const N of T.Sa)N.va(m)&&(y=!0)})),y&&Kp(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function W5(r,e,n){const s=Pe(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new gt(pe.comparator);f=f.insert(u,Xt.newNoDocument(u,Se.min()));const m=ze().add(u),p=new Qh(Se.min(),new Map,new gt(Ve),f,m);await aA(s,p),s.Ru=s.Ru.remove(u),s.Au.delete(e),$p(s)}else await Xm(s.localStore,e,!1).then((()=>Wm(s,e,n))).catch(jh)}function Wm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Eu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||oA(r,s)}))}function oA(r,e){r.Iu.delete(e.path.canonicalString());const n=r.Ru.get(e);n!==null&&(Bp(r.remoteStore,n),r.Ru=r.Ru.remove(e),r.Au.delete(n),$p(r))}function lE(r,e,n){for(const s of n)s instanceof iA?(r.Vu.addReference(s.key,e),eM(r,s)):s instanceof rA?(le(Yp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||oA(r,s.key)):Ae(19791,{wu:s})}function eM(r,e){const n=e.key,s=n.path.canonicalString();r.Ru.get(n)||r.Iu.has(s)||(le(Yp,"New document in limbo: "+n),r.Iu.add(s),$p(r))}function $p(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const n=new pe(it.fromString(e)),s=r.fu.next();r.Au.set(s,new K5(n)),r.Ru=r.Ru.insert(n,s),XS(r.remoteStore,new Zr(Vi(xp(n.path)),s,"TargetPurposeLimboResolution",Bh.ce))}}async function lA(r,e,n){const s=Pe(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,n).then((y=>{var E;if((y||n)&&s.isPrimaryClient){const T=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=zp.Is(p.targetId,y);u.push(T)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,y){const E=Pe(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(y,(N=>W.forEach(N.Ts,(z=>E.persistence.referenceDelegate.addReference(T,N.targetId,z))).next((()=>W.forEach(N.Es,(z=>E.persistence.referenceDelegate.removeReference(T,N.targetId,z)))))))))}catch(T){if(!Ao(T))throw T;le(jp,"Failed to update sequence numbers: "+T)}for(const T of y){const N=T.targetId;if(!T.fromCache){const z=E.vs.get(N),X=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(X);E.vs=E.vs.insert(N,J)}}})(s.localStore,u))}async function tM(r,e){const n=Pe(r);if(!n.currentUser.isEqual(e)){le(Yp,"User change. New user:",e.toKey());const s=await KS(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new he(te.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lA(n,s.Ns)}}function nM(r,e){const n=Pe(r),s=n.Au.get(e);if(s&&s.hu)return ze().add(s.key);{let o=ze();const u=n.Eu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function uA(r){const e=Pe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=aA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W5.bind(null,e),e.Pu.H_=H5.bind(null,e.eventManager),e.Pu.yu=q5.bind(null,e.eventManager),e}class wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$S(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return y5(this.persistence,new m5,e.initialUser,this.serializer)}Cu(e){return new GS(Up.Vi,this.serializer)}Du(e){return new S5}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wh.provider={build:()=>new wh};class iM extends wh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof bh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new WO(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new GS((s=>bh.Vi(s,n)),this.serializer)}}class ep{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>oE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tM.bind(null,this.syncEngine),await z5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new B5})()}createDatastore(e){const n=$S(e.databaseInfo.databaseId),s=I5(e.databaseInfo);return M5(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,m){return new V5(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>oE(this.syncEngine,n,0)),(function(){return eE.v()?new eE:new A5})())}createSyncEngine(e,n){return(function(o,u,f,m,p,y,E){const T=new Y5(o,u,f,m,p,y);return E&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(o){const u=Pe(o);le(po,"RemoteStore shutting down."),u.Ia.add(5),await cu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ep.provider={build:()=>new ep};/**
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
 */class cA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const fs="FirestoreClient";class rM{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=o,this.user=Qt.UNAUTHENTICATED,this.clientId=Cp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{le(fs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(le(fs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=WS(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Sm(r,e){r.asyncQueue.verifyOperationInProgress(),le(fs,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await KS(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function uE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await sM(r);le(fs,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>iE(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>iE(e.remoteStore,o))),r._onlineComponents=e}async function sM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){le(fs,"Using user provided OfflineComponentProvider");try{await Sm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;ea("Error using user provided cache. Falling back to memory cache: "+n),await Sm(r,new wh)}}else le(fs,"Using default OfflineComponentProvider"),await Sm(r,new iM(void 0));return r._offlineComponents}async function aM(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(le(fs,"Using user provided OnlineComponentProvider"),await uE(r,r._uninitializedComponentsProvider._online)):(le(fs,"Using default OnlineComponentProvider"),await uE(r,new ep))),r._onlineComponents}async function hA(r){const e=await aM(r),n=e.eventManager;return n.onListen=$5.bind(null,e.syncEngine),n.onUnlisten=Z5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Q5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=J5.bind(null,e.syncEngine),n}function oM(r,e,n={}){const s=new ns;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new cA({next:N=>{E.Nu(),f.enqueueAndForget((()=>tA(u,T)));const z=N.docs.has(m);!z&&N.fromCache?y.reject(new he(te.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&N.fromCache&&p&&p.source==="server"?y.reject(new he(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(N)},error:N=>y.reject(N)}),T=new nA(xp(m.path),E,{includeMetadataChanges:!0,qa:!0});return eA(u,T)})(await hA(r),r.asyncQueue,e,n,s))),s.promise}function lM(r,e,n={}){const s=new ns;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const E=new cA({next:N=>{E.Nu(),f.enqueueAndForget((()=>tA(u,T))),N.fromCache&&p.source==="server"?y.reject(new he(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(N)},error:N=>y.reject(N)}),T=new nA(m,E,{includeMetadataChanges:!0,qa:!0});return eA(u,T)})(await hA(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function fA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const uM="ComponentProvider",cE=new Map;function cM(r,e,n,s,o){return new qD(r,e,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,fA(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const dA="firestore.googleapis.com",hE=!0;class fE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dA,this.ssl=hE}else this.host=e.host,this.ssl=e.ssl??hE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=FS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZO)throw new he(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ND("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new vD;switch(s.type){case"firstParty":return new AD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=cE.get(n);s&&(le(uM,"Removing Datastore"),cE.delete(n),s.terminate())})(this),Promise.resolve()}}function hM(r,e,n,s={}){var y;r=$l(r,Zh);const o=na(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&Mh(`https://${m}`),u.host!==dA&&u.host!==m&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!as(p,f)&&(r._setSettings(p),s.mockUserToken)){let E,T;if(typeof s.mockUserToken=="string")E=s.mockUserToken,T=Qt.MOCK_USER;else{E=$E(s.mockUserToken,(y=r._app)==null?void 0:y.options.projectId);const N=s.mockUserToken.sub||s.mockUserToken.user_id;if(!N)throw new he(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Qt(N)}r._authCredentials=new ED(new fS(E,T))}}/**
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
 */class Jh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jh(this.firestore,e,this._query)}}class Zt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}toJSON(){return{type:Zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ou(n,Zt._jsonSchema))return new Zt(e,s||null,new pe(it.fromString(n.referencePath)))}}Zt._jsonSchemaVersion="firestore/documentReference/1.0",Zt._jsonSchema={type:Ct("string",Zt._jsonSchemaVersion),referencePath:Ct("string")};class is extends Jh{constructor(e,n,s){super(e,n,xp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new pe(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function fM(r,e,...n){if(r=Ut(r),dS("collection","path",e),r instanceof Zh){const s=it.fromString(e,...n);return w0(s),new is(r,null,s)}{if(!(r instanceof Zt||r instanceof is))throw new he(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return w0(s),new is(r.firestore,null,s)}}function dM(r,e,...n){if(r=Ut(r),arguments.length===1&&(e=Cp.newId()),dS("doc","path",e),r instanceof Zh){const s=it.fromString(e,...n);return b0(s),new Zt(r,null,new pe(s))}{if(!(r instanceof Zt||r instanceof is))throw new he(te.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return b0(s),new Zt(r.firestore,r instanceof is?r.converter:null,new pe(s))}}/**
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
 */const dE="AsyncQueue";class mE{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new QS(this,"async_queue_retry"),this._c=()=>{const s=Tm();s&&le(dE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Tm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Tm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ns;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;le(dE,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",pE(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Gp.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ae(47125,{Pc:pE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function pE(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Qp extends Zh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new mE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mE(e),this._firestoreClient=void 0,await e}}}function mM(r,e){const n=typeof r=="object"?r:iu(),s=typeof r=="string"?r:vh,o=cr(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=hp("firestore");u&&hM(o,...u)}return o}function mA(r){if(r._terminated)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pM(r),r._firestoreClient}function pM(r){var s,o,u,f;const e=r._freezeSettings(),n=cM(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new rM(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(r._componentsProvider))}/**
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
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(Kt.fromBase64String(e))}catch(n){throw new he(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Oi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ou(e,Oi._jsonSchema))return Oi.fromBase64String(e.bytes)}}Oi._jsonSchemaVersion="firestore/bytes/1.0",Oi._jsonSchema={type:Ct("string",Oi._jsonSchemaVersion),bytes:Ct("string")};/**
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
 */class pA{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rs._jsonSchemaVersion}}static fromJSON(e){if(ou(e,rs._jsonSchema))return new rs(e.latitude,e.longitude)}}rs._jsonSchemaVersion="firestore/geoPoint/1.0",rs._jsonSchema={type:Ct("string",rs._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class ss{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ss._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ou(e,ss._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new ss(e.vectorValues);throw new he(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ss._jsonSchemaVersion="firestore/vectorValue/1.0",ss._jsonSchema={type:Ct("string",ss._jsonSchemaVersion),vectorValues:Ct("object")};function gA(r,e,n){if((e=Ut(e))instanceof pA)return e._internalPath;if(typeof e=="string")return yM(r,e);throw tp("Field path arguments must be of type string or ",r)}const gM=new RegExp("[~\\*/\\[\\]]");function yM(r,e,n){if(e.search(gM)>=0)throw tp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new pA(...e.split("."))._internalPath}catch{throw tp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function tp(r,e,n,s,o){let u=`Function ${e}() called with invalid data`;u+=". ";let f="";return new he(te.INVALID_ARGUMENT,u+r+f)}/**
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
 */class _M{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return lu(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[jm].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>pt(f.doubleValue)));return new ss(n)}convertGeoPoint(e){return new rs(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=qh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xl(e));default:return null}}convertTimestamp(e){const n=ls(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);lt(qS(s),9688,{name:e});const o=new Zl(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(n)||ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class yA extends _M{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}const gE="@firebase/firestore",yE="4.14.0";/**
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
 */class _A{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(gA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vM extends _A{data(){return super.data()}}/**
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
 */function EM(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ul{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qs extends _A{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ah(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gA("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:Ct("string",Qs._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class ah extends Qs{data(e={}){return super.data(e)}}class lo{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ul(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ah(this._firestore,this._userDataWriter,s.key,s,new Ul(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new ah(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ul(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new ah(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ul(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:TM(m.type),doc:p,oldIndex:y,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:r})}}/**
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
 */function SM(r){r=$l(r,Zt);const e=$l(r.firestore,Qp),n=mA(e);return oM(n,r._key).then((s=>bM(e,r,s)))}function AM(r){r=$l(r,Jh);const e=$l(r.firestore,Qp),n=mA(e),s=new yA(e);return EM(r._query),lM(n,r._query).then((o=>new lo(e,s,r,o)))}function bM(r,e,n){const s=n.docs.get(e._key),o=new yA(r);return new Qs(r,o,e._key,s,new Ul(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){_D(ia),jn(new wn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Qp(new TD(s.getProvider("auth-internal")),new bD(f,s.getProvider("app-check-internal")),FD(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Jt(gE,yE,e),Jt(gE,yE,"esm2020")})();/**
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
 */const vA="firebasestorage.googleapis.com",wM="storageBucket",RM=120*1e3,IM=600*1e3;/**
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
 */class Ui extends Hn{constructor(e,n,s=0){super(Am(e),`Firebase Storage: ${n} (${Am(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ui.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Am(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pi;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pi||(Pi={}));function Am(r){return"storage/"+r}function CM(){const r="An unknown error occurred, please check the error payload for server response.";return new Ui(Pi.UNKNOWN,r)}function NM(){return new Ui(Pi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DM(){return new Ui(Pi.CANCELED,"User canceled the upload/download.")}function OM(r){return new Ui(Pi.INVALID_URL,"Invalid URL '"+r+"'.")}function MM(r){return new Ui(Pi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function _E(r){return new Ui(Pi.INVALID_ARGUMENT,r)}function EA(){return new Ui(Pi.APP_DELETED,"The Firebase app was deleted.")}function xM(r){return new Ui(Pi.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ni{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ni.makeFromUrl(e,n)}catch{return new ni(e,"")}if(s.path==="")return s;throw MM(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(de){de.path.charAt(de.path.length-1)==="/"&&(de.path_=de.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function y(de){de.path_=decodeURIComponent(de.path)}const E="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",z=new RegExp(`^https?://${T}/${E}/b/${o}/o${N}`,"i"),X={bucket:1,path:3},J=n===vA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,K="([^?#]*)",ee=new RegExp(`^https?://${J}/${o}/${K}`,"i"),se=[{regex:m,indices:p,postModify:u},{regex:z,indices:X,postModify:y},{regex:ee,indices:{bucket:1,path:2},postModify:y}];for(let de=0;de<se.length;de++){const ge=se[de],ve=ge.regex.exec(e);if(ve){const R=ve[ge.indices.bucket];let b=ve[ge.indices.path];b||(b=""),s=new ni(R,b),ge.postModify(s);break}}if(s==null)throw OM(e);return s}}class VM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kM(r,e,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let y=!1;function E(...K){y||(y=!0,e.apply(null,K))}function T(K){o=setTimeout(()=>{o=null,r(z,p())},K)}function N(){u&&clearTimeout(u)}function z(K,...ee){if(y){N();return}if(K){N(),E.call(null,K,...ee);return}if(p()||f){N(),E.call(null,K,...ee);return}s<64&&(s*=2);let se;m===1?(m=2,se=0):se=(s+Math.random())*1e3,T(se)}let X=!1;function J(K){X||(X=!0,N(),!y&&(o!==null?(K||(m=2),clearTimeout(o),T(0)):K||(m=1)))}return T(0),u=setTimeout(()=>{f=!0,J(!0)},n),J}function LM(r){r(!1)}/**
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
 */function PM(r){return r!==void 0}function vE(r,e,n,s){if(s<e)throw _E(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw _E(`Invalid value for '${r}'. Expected ${n} or less.`)}function UM(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Rh;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Rh||(Rh={}));/**
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
 */function zM(r,e){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return n||o||u}/**
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
 */class jM{constructor(e,n,s,o,u,f,m,p,y,E,T,N=!0,z=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=N,this.isUsingEmulator=z,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((X,J)=>{this.resolve_=X,this.reject_=J,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Qc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Rh.NO_ERROR,p=u.getStatus();if(!m||zM(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Rh.ABORT;s(!1,new Qc(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Qc(y,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());PM(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=CM();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?EA():DM();f(p)}else{const p=NM();f(p)}};this.canceled_?n(!1,new Qc(!1,null,!0)):this.backoffId_=kM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function BM(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function HM(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qM(r,e){e&&(r["X-Firebase-GMPID"]=e)}function FM(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function GM(r,e,n,s,o,u,f=!0,m=!1){const p=UM(r.urlParams),y=r.url+p,E=Object.assign({},r.headers);return qM(E,e),BM(E,n),HM(E,u),FM(E,s),new jM(y,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f,m)}/**
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
 */function KM(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function YM(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Ih{constructor(e,n){this._service=e,n instanceof ni?this._location=n:this._location=ni.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ih(e,n)}get root(){const e=new ni(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YM(this._location.path)}get storage(){return this._service}get parent(){const e=KM(this._location.path);if(e===null)return null;const n=new ni(this._location.bucket,e);return new Ih(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xM(e)}}function EE(r,e){const n=e==null?void 0:e[wM];return n==null?null:ni.makeFromBucketSpec(n,r)}function $M(r,e,n,s={}){r.host=`${e}:${n}`;const o=na(e);o&&Mh(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:$E(u,r.app.options.projectId))}class QM{constructor(e,n,s,o,u,f=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=vA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RM,this._maxUploadRetryTime=IM,this._requests=new Set,o!=null?this._bucket=ni.makeFromBucketSpec(o,this._host):this._bucket=EE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ni.makeFromBucketSpec(this._url,e):this._bucket=EE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ih(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new VM(EA());{const f=GM(e,this._appId,s,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const TE="@firebase/storage",SE="0.14.2";/**
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
 */const TA="storage";function XM(r=iu(),e){r=Ut(r);const s=cr(r,TA).getImmediate({identifier:e}),o=hp("storage");return o&&ZM(s,...o),s}function ZM(r,e,n,s={}){$M(r,e,n,s)}function JM(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new QM(n,s,o,e,ia)}function WM(){jn(new wn(TA,JM,"PUBLIC").setMultipleInstances(!0)),Jt(TE,SE,""),Jt(TE,SE,"esm2020")}WM();const ex={apiKey:"AIzaSyAZ7JwOAcf5fGou0ZbuB58zofnVhfyfeMQ",authDomain:"pos-dashboard-zion.firebaseapp.com",databaseURL:"https://pos-dashboard-zion-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"pos-dashboard-zion",storageBucket:"pos-dashboard-zion.firebasestorage.app",messagingSenderId:"950406773706",appId:"1:950406773706:web:22a6da027804b518412d33",measurementId:"G-L9KH9QXNQK"},fu=tT(ex);typeof window<"u"&&rD(fu);const bm=U2(fu),SA=mM(fu);gD(fu);XM(fu);const AA=B.createContext(void 0),tx=({children:r})=>{const[e,n]=B.useState(null),[s,o]=B.useState(!0);B.useEffect(()=>RC(bm,p=>{n(p),o(!1)}),[]);const u=async(m,p)=>{await AC(bm,m,p)},f=async()=>{await IC(bm)};return F.jsx(AA.Provider,{value:{user:e,loading:s,signIn:u,logout:f},children:!s&&r})},Xp=()=>{const r=B.useContext(AA);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r},nx=()=>{const{user:r,loading:e}=Xp();return e?F.jsx("div",{className:"flex h-screen w-screen items-center justify-center",children:F.jsx("span",{className:"loading loading-spinner loading-lg"})}):r?F.jsx(c1,{}):F.jsx(u1,{to:"/",replace:!0})};function ix({adminLoginOnClick:r}){const[e,n]=B.useState(""),[s,o]=B.useState(""),{signIn:u}=Xp(),f=async()=>{try{await u(e,s),r()}catch(m){console.error("Login failed:",m),alert("Invalid credentials")}};return F.jsx("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50",children:F.jsxs("fieldset",{className:"fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4",children:[F.jsxs("div",{className:"flex flex-row justify-between",children:[F.jsx("h1",{className:"text-xl font-bold",children:"Login"}),F.jsx("button",{className:"btn btn-square",onClick:r,children:"X"})]}),F.jsx("p",{children:"For admins only"}),F.jsx("label",{className:"label",children:"Email"}),F.jsx("input",{type:"email",className:"input",placeholder:"Email",value:e,onChange:m=>n(m.target.value)}),F.jsx("label",{className:"label",children:"Password"}),F.jsx("input",{type:"password",className:"input",placeholder:"Password",value:s,onChange:m=>o(m.target.value)}),F.jsx("button",{className:"btn btn-outline mt-4",onClick:f,children:"Login"})]})})}const rx=({children:r})=>{const{user:e,logout:n}=Xp(),s=eu(),[o,u]=B.useState(!1),[f,m]=B.useState(!1),p=()=>{u(!o)},y=()=>{m(!f)},E=async()=>{try{await n(),m(!1)}catch(z){console.error("Logout failed:",z)}},T=z=>{if(s(z),window.innerWidth<768){const X=document.getElementById("my-drawer");X&&(X.checked=!1)}},N=[{name:"Store",path:"/",icon:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"my-1.5 inline-block size-6",children:F.jsx("path",{d:"M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"})})},{name:"Finance",path:"/finance",icon:F.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"my-1.5 inline-block size-6",children:[F.jsx("path",{fillRule:"evenodd",d:"M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z",clipRule:"evenodd"}),F.jsx("path",{d:"M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"})]})},{name:"Inventory",path:"/inventory",icon:F.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"my-1.5 inline-block size-6",children:[F.jsx("path",{d:"M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z"}),F.jsx("path",{d:"M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z"}),F.jsx("path",{d:"M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z"}),F.jsx("path",{d:"M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z"})]})},{name:"POS",path:"/pos",icon:F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"my-1.5 inline-block size-6",children:F.jsx("path",{fillRule:"evenodd",d:"M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z",clipRule:"evenodd"})})},{name:"Admin",path:"/admin",icon:F.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"my-1.5 inline-block size-6",children:[F.jsx("path",{fillRule:"evenodd",d:"M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",clipRule:"evenodd"}),F.jsx("path",{d:"m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z"}),F.jsx("path",{fillRule:"evenodd",d:"m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})]})}];return F.jsxs("div",{className:"drawer md:drawer-open",children:[F.jsx("input",{id:"my-drawer",type:"checkbox",className:"drawer-toggle"}),F.jsxs("div",{className:"drawer-content flex flex-col",children:[F.jsxs("nav",{className:"navbar sticky top-0 z-50 p-2 bg-white/60 dark:bg-base-100/60 backdrop-blur-xl w-full h-fit justify-between flex flex-col sm:flex-row",children:[F.jsxs("div",{className:"flex h-fit w-full items-center flex-row justify-spaced",children:[F.jsx("div",{className:"flex-none",children:e!==null&&F.jsx("label",{htmlFor:"my-drawer","aria-label":"open sidebar",className:"btn btn-square btn-ghost",children:F.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor",className:"my-1.5 inline-block size-6",children:[F.jsx("path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}),F.jsx("path",{d:"M9 4v16"}),F.jsx("path",{d:"M14 10l2 2l-2 2"})]})})}),F.jsx("button",{className:"btn btn-ghost text-xl grow",onClick:()=>s("/"),children:"🚀 Detonate Fundraising 🚀"})]}),e==null?F.jsx("button",{className:"btn btn-ghost",onClick:p,children:"Admin"}):F.jsxs("button",{className:"btn btn-ghost",onClick:y,children:["Admin: ",e.displayName||e.email]})]}),F.jsx("main",{className:"flex-1",children:r})]}),e!==null&&F.jsxs("div",{className:"drawer-side is-drawer-close:overflow-visible z-50",children:[F.jsx("label",{htmlFor:"my-drawer","aria-label":"close sidebar",className:"drawer-overlay"}),F.jsx("div",{className:"flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-38",children:F.jsx("ul",{className:"menu w-full grow",children:N.map(z=>F.jsx("li",{children:F.jsxs("button",{onClick:()=>T(z.path),className:"is-drawer-close:tooltip is-drawer-close:tooltip-right","data-tip":z.name,children:[z.icon,F.jsx("span",{className:"is-drawer-close:hidden",children:z.name})]})},z.name))})})]}),o&&F.jsx(ix,{adminLoginOnClick:p}),f&&F.jsx("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50",children:F.jsxs("div",{className:"card bg-base-100 p-7 flex flex-col gap-5 border border-base-300 shadow-xl",children:[F.jsx("h1",{className:"text-center",children:"Confirm Logout?"}),F.jsxs("div",{className:"flex flex-row gap-4",children:[F.jsx("button",{className:"btn btn-error",onClick:E,children:"Logout"}),F.jsx("button",{className:"btn btn-outline",onClick:y,children:"Cancel"})]})]})})]})};function sx({item:r,storeItemOnClick:e}){return F.jsx(F.Fragment,{children:F.jsxs("div",{className:"card bg-base-100 shadow-sm cursor-pointer",onClick:e,children:[F.jsx("figure",{children:F.jsx("img",{src:r.imageURL,loading:"lazy",alt:r.name})}),F.jsxs("div",{className:"card-body",children:[F.jsx("h2",{className:"card-title",children:r.name}),F.jsx("p",{children:r.description})]})]})})}function ax(){const[r,e]=B.useState([]),[n,s]=B.useState(!0),o=eu(),u=f=>{o(`/${f.id}`,{state:{product:f}})};return B.useEffect(()=>{(async()=>{try{const p=(await AM(fM(SA,"products"))).docs.map(y=>({id:y.id,...y.data()}));e(p)}catch(m){console.error("Error fetching products: ",m)}finally{s(!1)}})()},[]),F.jsx("div",{className:"flex flex-col relative m-4",children:n?F.jsx("div",{className:"p-10 text-center",children:"Loading products..."}):F.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map(f=>F.jsx(sx,{item:f,storeItemOnClick:()=>u(f)},f.id))})})}function ox(){var y;const{productId:r}=Qw(),e=ai(),n=eu(),[s,o]=B.useState(((y=e.state)==null?void 0:y.product)||null),[u,f]=B.useState(!s),m=s?[s.imageURL,...s.additionalImages||[]]:[],p=E=>{const T=document.getElementById(`slide-${E}`);T&&T.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};return B.useEffect(()=>{(async()=>{if(!s&&r)try{const T=dM(SA,"products",r),N=await SM(T);N.exists()?o({id:N.id,...N.data()}):console.error("No such product!")}catch(T){console.error("Error fetching product: ",T)}finally{f(!1)}})()},[r,s]),F.jsx("div",{className:"flex flex-col relative",children:F.jsxs("div",{className:"m-4",children:[F.jsx("button",{className:"btn btn-outline mb-4",onClick:()=>n("/"),children:"← Back to Store"}),u?F.jsx("div",{className:"p-10 text-center",children:"Loading product..."}):s?F.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[F.jsxs("div",{className:"flex flex-col basis-1/2",children:[F.jsx("div",{className:"carousel w-full rounded-2xl",children:m.map((E,T)=>F.jsxs("div",{id:`slide-${T}`,className:"carousel-item relative w-full",children:[F.jsx("img",{src:E,alt:`${s.name} - view ${T+1}`,className:"w-full"}),m.length>1&&F.jsxs("div",{className:"absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between",children:[F.jsx("button",{onClick:()=>p(T===0?m.length-1:T-1),className:"btn btn-circle",children:"❮"}),F.jsx("button",{onClick:()=>p(T===m.length-1?0:T+1),className:"btn btn-circle",children:"❯"})]})]},T))}),m.length>1&&F.jsx("div",{className:"flex w-full justify-center gap-2 py-2",children:m.map((E,T)=>F.jsx("button",{onClick:()=>p(T),className:"btn btn-md rounded-xl",children:T+1},T))})]}),F.jsxs("div",{className:"flex flex-col basis-1/2",children:[F.jsx("h1",{className:"card-title",children:s.name}),F.jsx("p",{children:s.description})]})]}):F.jsx("div",{className:"p-10 text-center text-error",children:"Product not found."})]})})}const lx=()=>F.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center p-10",children:[F.jsx("h1",{className:"text-4xl font-bold",children:"Finance"}),F.jsx("p",{className:"mt-4 text-xl opacity-70",children:"This page is under construction."}),F.jsx("div",{className:"mt-8",children:F.jsx("span",{className:"loading loading-bars loading-lg"})})]}),ux=()=>F.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center p-10",children:[F.jsx("h1",{className:"text-4xl font-bold",children:"Inventory"}),F.jsx("p",{className:"mt-4 text-xl opacity-70",children:"This page is under construction."}),F.jsx("div",{className:"mt-8",children:F.jsx("span",{className:"loading loading-bars loading-lg"})})]}),cx=()=>F.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center p-10",children:[F.jsx("h1",{className:"text-4xl font-bold",children:"POS (Point of Sale)"}),F.jsx("p",{className:"mt-4 text-xl opacity-70",children:"This page is under construction."}),F.jsx("div",{className:"mt-8",children:F.jsx("span",{className:"loading loading-bars loading-lg"})})]}),hx=()=>F.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center p-10",children:[F.jsx("h1",{className:"text-4xl font-bold",children:"Admin Settings"}),F.jsx("p",{className:"mt-4 text-xl opacity-70",children:"This page is under construction."}),F.jsx("div",{className:"mt-8",children:F.jsx("span",{className:"loading loading-bars loading-lg"})})]});function fx(){return F.jsx(tx,{children:F.jsx("div",{className:"text-sm sm:text-base md:text-lg",children:F.jsx(L1,{children:F.jsx(rx,{children:F.jsxs(f1,{children:[F.jsx(Gr,{path:"/",element:F.jsx(ax,{})}),F.jsx(Gr,{path:"/:productId",element:F.jsx(ox,{})}),F.jsxs(Gr,{element:F.jsx(nx,{}),children:[F.jsx(Gr,{path:"/finance",element:F.jsx(lx,{})}),F.jsx(Gr,{path:"/inventory",element:F.jsx(ux,{})}),F.jsx(Gr,{path:"/pos",element:F.jsx(cx,{})}),F.jsx(Gr,{path:"/admin",element:F.jsx(hx,{})})]})]})})})})})}uw.createRoot(document.getElementById("root")).render(F.jsx(B.StrictMode,{children:F.jsx(fx,{})}));
