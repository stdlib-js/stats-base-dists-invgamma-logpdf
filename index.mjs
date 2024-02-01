// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function m(t,r,m){var d;return n(t)||n(r)||n(m)||r<=0||m<=0?NaN:t<=0?i:(d=r*e(m)-s(r),d-=(r+1)*e(t),d-=m/t)}function d(t,m){var d;return n(t)||n(m)||t<=0||m<=0?r(NaN):(d=t*e(m)-s(t),function(s){if(n(s))return NaN;if(s<=0)return i;return d-(t+1)*e(s)-m/s})}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
