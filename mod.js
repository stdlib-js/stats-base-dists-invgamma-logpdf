// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&a&&a.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function p(r){return r===y||r===v}function s(r){return Math.abs(r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var w=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _,h="function"==typeof Symbol?Symbol.toStringTag:"";_=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return w.call(r);t=r[h],u=h,n=null!=(o=r)&&A.call(o,u);try{r[h]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[h]=t:delete r[h],e}:function(r){return w.call(r)};var N=_,d="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var U,j="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(d&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g=U,I="function"==typeof Float64Array;var O="function"==typeof Float64Array?Float64Array:null;var S,E="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint8Array;var T="function"==typeof Uint8Array?Uint8Array:null;var G,P="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var k=G,x="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var M,V="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,Y={uint16:M,uint8:k};(W=new Y.uint16(1))[0]=4660;var C=52===new Y.uint8(W.buffer)[0],q=!0===C?1:0,z=new F(1),B=new g(z.buffer);function D(r){return z[0]=r,B[q]}var J=!0===C?1:0,K=new F(1),Q=new g(K.buffer);var R=.6931471803691238,X=1.9082149292705877e-10;function Z(r){var n,t,e,o,u,a,i,f,c,y,p,s;return 0===r?v:l(r)||r<0?NaN:(u=0,(t=D(r))<1048576&&(u-=54,t=D(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=function(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===i?0===u?0:u*R+u*X:(a=i*i*(.5-.3333333333333333*i),0===u?i-a:u*R-(a-u*X-i)):(f=t-398458|0,c=440401-t|0,o=(p=(s=(y=i/(2+i))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+o,(f|=c)>0?(n=.5*i*i,0===u?i-(n-y*(n+a)):u*R-(n-(y*(n+a)+u*X)-i)):0===u?i-y*(i-a):u*R-(y*(i-a)-u*X-i))))}var $=Math.floor,rr=Math.ceil;function nr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var tr=-.16666666666666632;function er(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(tr+o*t):r-(o*(.5*n-e*t)-n-e*tr)}var or,ur,ar=!0===C?0:1,ir=new F(1),fr=new g(ir.buffer);!0===C?(or=1,ur=0):(or=0,ur=1);var cr={HIGH:or,LOW:ur},lr=new F(1),yr=new g(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function sr(r,n){return yr[vr]=r,yr[pr]=n,lr[0]}var br,wr;!0===C?(br=1,wr=0):(br=0,wr=1);var Ar={HIGH:br,LOW:wr},_r=new F(1),hr=new g(_r.buffer),Nr=Ar.HIGH,dr=Ar.LOW;function mr(r,n){return _r[0]=n,r[0]=hr[Nr],r[1]=hr[dr],r}function Ur(r,n){return 1===arguments.length?mr([0,0],r):mr(r,n)}var jr=[0,0];function gr(r,n){var t,e;return Ur(jr,r),t=jr[0],t&=2147483647,e=D(n),sr(t|=e&=2147483648,jr[1])}function Ir(r,n){return l(n)||p(n)?(r[0]=n,r[1]=0,r):0!==n&&s(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Or=[0,0],Sr=[0,0];function Er(r,n){var t,e;return 0===n||0===r||l(r)||p(r)?r:(function(r,n){1===arguments.length?Ir([0,0],r):Ir(r,n)}(Or,r),n+=Or[1],n+=function(r){var n=D(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Or[0]),n<-1074?gr(0,r):n>1023?r<0?v:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ur(Sr,r),t=Sr[0],t&=2148532223,e*sr(t|=n+1023<<20,Sr[1])))}function Fr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Gr=5.960464477539063e-8,Pr=Fr(20),kr=Fr(20),xr=Fr(20),Lr=Fr(20);function Mr(r,n,t,e,o,u,a,i,f){var c,l,y,v,p,s,b,w,A;for(v=u,A=e[t],w=t,p=0;w>0;p++)l=Gr*A|0,Lr[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=Er(A,o),A-=8*$(.125*A),A-=b=0|A,y=0,o>0?(b+=p=Lr[t-1]>>24-o,Lr[t-1]-=p<<24-o,y=Lr[t-1]>>23-o):0===o?y=Lr[t-1]>>23:A>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=Lr[p],0===c?0!==w&&(c=1,Lr[p]=16777216-w):Lr[p]=16777215-w;if(o>0)switch(o){case 1:Lr[t-1]&=8388607;break;case 2:Lr[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Er(1,o)))}if(0===A){for(w=0,p=t-1;p>=u;p--)w|=Lr[p];if(0===w){for(s=1;0===Lr[u-s];s++);for(p=t+1;p<=t+s;p++){for(f[i+p]=Hr[a+p],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(p-w)];e[p]=l}return Mr(r,n,t+=s,e,o,u,a,i,f)}}if(0===A)for(t-=1,o-=24;0===Lr[t];)t-=1,o-=24;else(A=Er(A,-o))>=16777216?(l=Gr*A|0,Lr[t]=A-16777216*l|0,o+=24,Lr[t+=1]=l):Lr[t]=0|A;for(l=Er(1,o),p=t;p>=0;p--)e[p]=l*Lr[p],l*=Gr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=Tr[s]*e[p+s];xr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=xr[p];for(n[0]=0===y?l:-l,l=xr[0]-l,p=1;p<=t;p++)l+=xr[p];return n[1]=0===y?l:-l,7&b}function Vr(r,n,t,e){var o,u,a,i,f,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(a=e-1),l=a+4,f=0;f<=l;f++)Pr[f]=c<0?0:Hr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Pr[a+(f-c)];kr[f]=o}return 4,Mr(r,n,4,kr,i,4,u,a,Pr)}var Wr=Math.round;function Yr(r,n,t){var e,o,u,a,i;return u=r-1.5707963267341256*(e=Wr(.6366197723675814*r)),a=6077100506506192e-26*e,i=n>>20|0,t[0]=u-a,i-(D(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,i-(D(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e}var Cr=1.5707963267341256,qr=6077100506506192e-26,zr=2*qr,Br=4*qr,Dr=[0,0,0],Jr=[0,0];function Kr(r,n){var t,e,o,u,a,i,f;if((o=2147483647&D(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Yr(r,o,n):o<=1073928572?r>0?(f=r-Cr,n[0]=f-qr,n[1]=f-n[0]-qr,1):(f=r+Cr,n[0]=f+qr,n[1]=f-n[0]+qr,-1):r>0?(f=r-2*Cr,n[0]=f-zr,n[1]=f-n[0]-zr,2):(f=r+2*Cr,n[0]=f+zr,n[1]=f-n[0]+zr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Yr(r,o,n):r>0?(f=r-3*Cr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Cr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Yr(r,o,n):r>0?(f=r-4*Cr,n[0]=f-Br,n[1]=f-n[0]-Br,4):(f=r+4*Cr,n[0]=f+Br,n[1]=f-n[0]+Br,-4);if(o<1094263291)return Yr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ir[0]=r,fr[ar]}(r),f=sr(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Dr[a]=0|f,f=16777216*(f-Dr[a]);for(Dr[2]=f,u=3;0===Dr[u-1];)u-=1;return i=Vr(Dr,Jr,e,u),r<0?(n[0]=-Jr[0],n[1]=-Jr[1],-i):(n[0]=Jr[0],n[1]=Jr[1],i)}var Qr=[0,0];function Rr(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1044381696?1:nr(r,0);if(n>=2146435072)return NaN;switch(3&Kr(r,Qr)){case 0:return nr(Qr[0],Qr[1]);case 1:return-er(Qr[0],Qr[1]);case 2:return-nr(Qr[0],Qr[1]);default:return er(Qr[0],Qr[1])}}var Xr=[0,0];function Zr(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1045430272?r:er(r,0);if(n>=2146435072)return NaN;switch(3&Kr(r,Xr)){case 0:return er(Xr[0],Xr[1]);case 1:return nr(Xr[0],Xr[1]);case 2:return-er(Xr[0],Xr[1]);default:return-nr(Xr[0],Xr[1])}}var $r=3.141592653589793;var rn=1.4616321449683622,nn=1.4616321449683622;function tn(r){var n,t,e,o,u,a,i,f,c,v,b,w,A;if(l(r)||p(r))return r;if(0===r)return y;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Z(r);if(n){if(r>=4503599627370496)return y;if(c=function(r){var n,t;return l(r)||p(r)?NaN:0===(n=s(t=r%2))||1===n?gr(0,t):n<.25?Zr($r*t):n<.75?gr(Rr($r*(n=.5-n)),t):n<1.25?(t=gr(1,t)-t,Zr($r*t)):n<1.75?-gr(Rr($r*(n-=1.5)),t):(t-=gr(2,t),Zr($r*t))}(r),0===c)return y;t=Z($r/s(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(A=-Z(r),r>=rn-1+.27?(b=1-r,e=0):r>=rn-1-.27?(b=r-(nn-1),e=1):(b=r,e=2)):(A=0,r>=rn+.27?(b=2-r,e=0):r>=rn-.27?(b=r-nn,e=1):(b=r-1,e=2)),e){case 0:a=.07721566490153287+(w=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(w),u=w*(.3224670334241136+w*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(w)),A+=(i=b*a+u)-.5*b;break;case 1:a=.48383612272381005+(v=(w=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),u=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,o=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),A+=-.12148629053584961+(i=w*a-(-3638676997039505e-33-v*(u+b*o)));break;case 2:a=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),u=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),A+=-.5*b+a/u}else if(r<8)switch(e=function(r){return r<0?rr(r):$(r)}(r),i=(b=r-e)*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),f=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),A=.5*b+i/f,w=1,e){case 7:w*=b+6;case 6:w*=b+5;case 5:w*=b+4;case 4:w*=b+3;case 3:A+=Z(w*=b+2)}else r<0x400000000000000?(c=Z(r),v=.4189385332046727+(w=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=w*w),A=(r-.5)*(c-1)+v):A=r*(Z(r)-1);return n&&(A=t-A),A}function en(r,n,t){var e;return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<=0?v:(e=n*Z(t)-tn(n),e-=(n+1)*Z(r),e-=t/r)}function on(r,n){var t,e;return l(r)||l(n)||r<=0||n<=0?(e=NaN,function(){return e}):(t=r*Z(n)-tn(r),function(e){if(l(e))return NaN;if(e<=0)return v;return t-(r+1)*Z(e)-n/e})}c(en,"factory",{configurable:!1,enumerable:!1,writable:!1,value:on});export{en as default,on as factory};
//# sourceMappingURL=mod.js.map
