"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var c=v(function(k,q){
var s=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),y=require('@stdlib/math-base-special-exp/dist');function g(e,r,t){var i,n;return s(e)||s(r)||s(t)||r<=0||t<=0||e>t/(2*r*r)?NaN:(n=t/r,i=2*r*r/t,y(n*(1-p(1-i*e))))}q.exports=g
});var o=v(function(w,f){
var L=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),M=require('@stdlib/math-base-special-sqrt/dist'),F=require('@stdlib/math-base-special-exp/dist');function O(e,r){var t,i,n;if(u(e)||u(r)||e<=0||r<=0)return L(NaN);return i=r/e,t=2*e*e/r,n=r/(2*e*e),N;function N(a){return u(a)||a>n?NaN:F(i*(1-M(1-t*a)))}}f.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=c(),h=o();R(x,"factory",h);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
