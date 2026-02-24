"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(z,q){
var y=require('@stdlib/math-base-special-gammaln/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ninf/dist');function F(e,r,u){var i;return t(e)||t(r)||t(u)||r<=0||u<=0?NaN:e<=0?d:(i=r*s(u)-y(r),i-=(r+1)*s(e),i-=u/e,i)}q.exports=F
});var m=f(function(A,a){
var I=require('@stdlib/utils-constant-function/dist'),O=require('@stdlib/math-base-special-gammaln/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-ln/dist'),R=require('@stdlib/constants-float64-ninf/dist');function T(e,r){var u;if(o(e)||o(r)||e<=0||r<=0)return I(NaN);return u=e*N(r)-O(e),i;function i(n){var v;return o(n)?NaN:n<=0?R:(v=u-(e+1)*N(n)-r/n,v)}}a.exports=T
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),k=m();j(g,"factory",k);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
