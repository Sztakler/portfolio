(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="165",Rd=0,ul=1,Cd=2,Pu=1,Pd=2,yn=3,$n=0,Lt=1,Tn=2,wn=0,Wi=1,fl=2,dl=3,hl=4,Ld=5,gi=100,Dd=101,Ud=102,Id=103,Nd=104,Fd=200,Od=201,zd=202,Bd=203,oa=204,aa=205,Hd=206,Vd=207,Gd=208,kd=209,Wd=210,Xd=211,qd=212,Kd=213,Yd=214,$d=0,jd=1,Zd=2,Us=3,Jd=4,Qd=5,eh=6,th=7,Lu=0,nh=1,ih=2,qn=0,Du=1,Uu=2,Iu=3,Nu=4,rh=5,Fu=6,Ou=7,zu=300,ji=301,Zi=302,la=303,ca=304,Xs=306,ua=1e3,Si=1001,fa=1002,Pt=1003,sh=1004,Yr=1005,$t=1006,go=1007,Mi=1008,jn=1009,oh=1010,ah=1011,Is=1012,Bu=1013,Ji=1014,bn=1015,Br=1016,Hu=1017,Vu=1018,Qi=1020,lh=35902,ch=1021,uh=1022,dn=1023,fh=1024,dh=1025,Xi=1026,er=1027,Gu=1028,ku=1029,hh=1030,Wu=1031,Xu=1033,_o=33776,vo=33777,xo=33778,So=33779,pl=35840,ml=35841,gl=35842,_l=35843,vl=36196,xl=37492,Sl=37496,Ml=37808,yl=37809,El=37810,Tl=37811,bl=37812,Al=37813,wl=37814,Rl=37815,Cl=37816,Pl=37817,Ll=37818,Dl=37819,Ul=37820,Il=37821,Mo=36492,Nl=36494,Fl=36495,ph=36283,Ol=36284,zl=36285,Bl=36286,mh=3200,gh=3201,_h=0,vh=1,Xn="",on="srgb",Qn="srgb-linear",La="display-p3",qs="display-p3-linear",Ns="linear",tt="srgb",Fs="rec709",Os="p3",Ti=7680,Hl=519,xh=512,Sh=513,Mh=514,qu=515,yh=516,Eh=517,Th=518,bh=519,Vl=35044,Gl="300 es",An=2e3,zs=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Sr=Math.PI/180,Pr=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Da(n,e){return(n%e+e)%e}function Ah(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function wh(n,e,t){return n!==e?(t-n)/(e-n):0}function Mr(n,e,t){return(1-t)*n+t*e}function Rh(n,e,t,i){return Mr(n,e,1-Math.exp(-t*i))}function Ch(n,e=1){return e-Math.abs(Da(n,e*2)-e)}function Ph(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Uh(n,e){return n+Math.random()*(e-n)}function Ih(n){return n*(.5-Math.random())}function Nh(n){n!==void 0&&(kl=n);let e=kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fh(n){return n*Sr}function Oh(n){return n*Pr}function zh(n){return(n&n-1)===0&&n!==0}function Bh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vh(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ht={DEG2RAD:Sr,RAD2DEG:Pr,generateUUID:or,clamp:wt,euclideanModulo:Da,mapLinear:Ah,inverseLerp:wh,lerp:Mr,damp:Rh,pingpong:Ch,smoothstep:Ph,smootherstep:Lh,randInt:Dh,randFloat:Uh,randFloatSpread:Ih,seededRandom:Nh,degToRad:Fh,radToDeg:Oh,isPowerOfTwo:zh,ceilPowerOfTwo:Bh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Vh,normalize:Tt,denormalize:Vi};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],v=r[0],m=r[3],p=r[6],b=r[1],M=r[4],A=r[7],V=r[2],C=r[5],L=r[8];return s[0]=o*v+a*b+l*V,s[3]=o*m+a*M+l*C,s[6]=o*p+a*A+l*L,s[1]=c*v+u*b+f*V,s[4]=c*m+u*M+f*C,s[7]=c*p+u*A+f*L,s[2]=d*v+h*b+_*V,s[5]=d*m+h*M+_*C,s[8]=d*p+h*A+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new Ve;function Ku(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gh(){const n=Bs("canvas");return n.style.display="block",n}const Wl={};function Yu(n){n in Wl||(Wl[n]=!0,console.warn(n))}function kh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Xl=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[Qn]:{transfer:Ns,primaries:Fs,toReference:n=>n,fromReference:n=>n},[on]:{transfer:tt,primaries:Fs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qs]:{transfer:Ns,primaries:Os,toReference:n=>n.applyMatrix3(ql),fromReference:n=>n.applyMatrix3(Xl)},[La]:{transfer:tt,primaries:Os,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ql),fromReference:n=>n.applyMatrix3(Xl).convertLinearToSRGB()}},Wh=new Set([Qn,qs]),je={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$r[e].toReference,r=$r[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $r[n].primaries},getTransfer:function(n){return n===Xn?Ns:$r[n].transfer}};function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bi;class Xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Bs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qh=0;class $u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(To(r[o].image)):s.push(To(r[o]))}else s=To(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function To(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;class Rt extends sr{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=Si,r=Si,s=$t,o=Mi,a=dn,l=jn,c=Rt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=or(),this.name="",this.source=new $u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=zu;Rt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,A=(h+1)/2,V=(p+1)/2,C=(u+d)/4,L=(f+v)/4,H=(_+m)/4;return M>A&&M>V?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=L/i):A>V?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=H/r):V<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),i=L/s,r=H/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yh extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Yh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ju extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||c!==h||u!==_){let m=1-a;const p=l*d+c*h+u*_+f*v,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const V=Math.sqrt(M),C=Math.atan2(V,p*b);m=Math.sin(m*C)/V,a=Math.sin(a*C)/V}const A=a*b;if(l=l*m+d*A,c=c*m+h*A,u=u*m+_*A,f=f*m+v*A,m===1-a){const V=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=V,c*=V,u*=V,f*=V}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-a*h,e[t+2]=c*_+u*h+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new $,Kl=new Hr;class Vr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(s,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Zr.subVectors(this.max,fr),Ai.subVectors(e.a,fr),wi.subVectors(e.b,fr),Ri.subVectors(e.c,fr),In.subVectors(wi,Ai),Nn.subVectors(Ri,wi),si.subVectors(Ai,Ri);let t=[0,-In.z,In.y,0,-Nn.z,Nn.y,0,-si.z,si.y,In.z,0,-In.x,Nn.z,0,-Nn.x,si.z,0,-si.x,-In.y,In.x,0,-Nn.y,Nn.x,0,-si.y,si.x,0];return!Ao(t,Ai,wi,Ri,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Ai,wi,Ri,Zr))?!1:(Jr.crossVectors(In,Nn),t=[Jr.x,Jr.y,Jr.z],Ao(t,Ai,wi,Ri,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new $,new $,new $,new $,new $,new $,new $,new $],Wt=new $,jr=new Vr,Ai=new $,wi=new $,Ri=new $,In=new $,Nn=new $,si=new $,fr=new $,Zr=new $,Jr=new $,oi=new $;function Ao(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){oi.fromArray(n,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jh=new Vr,dr=new $,wo=new $;class Ua{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(wo)),this.expandByPoint(dr.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new $,Ro=new $,Qr=new $,Fn=new $,Co=new $,es=new $,Po=new $;class Zh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ro.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Ro);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qr),a=Fn.dot(this.direction),l=-Fn.dot(Qr),c=Fn.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ro).addScaledVector(Qr,d),h}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,s){Co.subVectors(t,e),es.subVectors(i,e),Po.crossVectors(Co,es);let o=this.direction.dot(Po),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(es.crossVectors(Fn,es));if(l<0)return null;const c=a*this.direction.dot(Co.cross(Fn));if(c<0||l+c>o)return null;const u=-a*Fn.dot(Po);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,_,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,v=c*f;t[0]=d+v*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=_*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jh,e,Qh)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),On.crossVectors(i,Nt),On.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),On.crossVectors(i,Nt)),On.normalize(),ts.crossVectors(Nt,On),r[0]=On.x,r[4]=ts.x,r[8]=Nt.x,r[1]=On.y,r[5]=ts.y,r[9]=Nt.y,r[2]=On.z,r[6]=ts.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],b=i[3],M=i[7],A=i[11],V=i[15],C=r[0],L=r[4],H=r[8],T=r[12],y=r[1],U=r[5],Q=r[9],Y=r[13],se=r[2],ie=r[6],j=r[10],Z=r[14],G=r[3],xe=r[7],Me=r[11],ye=r[15];return s[0]=o*C+a*y+l*se+c*G,s[4]=o*L+a*U+l*ie+c*xe,s[8]=o*H+a*Q+l*j+c*Me,s[12]=o*T+a*Y+l*Z+c*ye,s[1]=u*C+f*y+d*se+h*G,s[5]=u*L+f*U+d*ie+h*xe,s[9]=u*H+f*Q+d*j+h*Me,s[13]=u*T+f*Y+d*Z+h*ye,s[2]=_*C+v*y+m*se+p*G,s[6]=_*L+v*U+m*ie+p*xe,s[10]=_*H+v*Q+m*j+p*Me,s[14]=_*T+v*Y+m*Z+p*ye,s[3]=b*C+M*y+A*se+V*G,s[7]=b*L+M*U+A*ie+V*xe,s[11]=b*H+M*Q+A*j+V*Me,s[15]=b*T+M*Y+A*Z+V*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],b=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,M=_*d*c-u*m*c-_*l*h+o*m*h+u*l*p-o*d*p,A=u*v*c-_*f*c+_*a*h-o*v*h-u*a*p+o*f*p,V=_*f*l-u*v*l-_*a*d+o*v*d+u*a*m-o*f*m,C=t*b+i*M+r*A+s*V;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=b*L,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*L,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*L,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*L,e[4]=M*L,e[5]=(u*m*s-_*d*s+_*r*h-t*m*h-u*r*p+t*d*p)*L,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*L,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*L,e[8]=A*L,e[9]=(_*f*s-u*v*s-_*i*h+t*v*h+u*i*p-t*f*p)*L,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*p+t*a*p)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*L,e[12]=V*L,e[13]=(u*v*r-_*f*r+_*i*d-t*v*d-u*i*m+t*f*m)*L,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,_=s*f,v=o*u,m=o*f,p=a*f,b=l*c,M=l*u,A=l*f,V=i.x,C=i.y,L=i.z;return r[0]=(1-(v+p))*V,r[1]=(h+A)*V,r[2]=(_-M)*V,r[3]=0,r[4]=(h-A)*C,r[5]=(1-(d+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+M)*L,r[9]=(m-b)*L,r[10]=(1-(d+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const o=Ci.set(r[4],r[5],r[6]).length(),a=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/o,f=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=An){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,_;if(a===An)h=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===zs)h=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=An){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,h=(i+r)*u;let _,v;if(a===An)_=(o+s)*f,v=-2*f;else if(a===zs)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new $,Xt=new ct,Jh=new $(0,0,0),Qh=new $(1,1,1),On=new $,ts=new $,Nt=new $,Yl=new ct,$l=new Hr;class Ln{constructor(e=0,t=0,i=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const jl=new $,Pi=new Hr,vn=new ct,ns=new $,hr=new $,tp=new $,np=new Hr,Zl=new $(1,0,0),Jl=new $(0,1,0),Ql=new $(0,0,1),ec={type:"added"},ip={type:"removed"},Li={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Ot extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new $,t=new Ln,i=new Hr,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ve}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ns.copy(e):ns.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(hr,ns,this.up):vn.lookAt(ns,hr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(vn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new $(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new $,xn=new $,Do=new $,Sn=new $,Di=new $,Ui=new $,tc=new $,Uo=new $,Io=new $,No=new $;class un{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),xn.subVectors(i,t),Do.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(xn),l=qt.dot(Do),c=xn.dot(xn),u=xn.dot(Do),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),xn.subVectors(e,t),qt.cross(xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Di.subVectors(r,i),Ui.subVectors(s,i),Uo.subVectors(e,i);const l=Di.dot(Uo),c=Ui.dot(Uo);if(l<=0&&c<=0)return t.copy(i);Io.subVectors(e,r);const u=Di.dot(Io),f=Ui.dot(Io);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Di,o);No.subVectors(e,s);const h=Di.dot(No),_=Ui.dot(No);if(_>=0&&h<=_)return t.copy(s);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ui,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return tc.subVectors(s,r),a=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(tc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},is={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Da(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fo(o,s,e+1/3),this.g=Fo(o,s,e),this.b=Fo(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Ju[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return je.fromWorkingColorSpace(xt.copy(this),e),Math.round(wt(xt.r*255,0,255))*65536+Math.round(wt(xt.g*255,0,255))*256+Math.round(wt(xt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=on){je.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(is);const i=Mr(zn.h,is.h,t),r=Mr(zn.s,is.s,t),s=Mr(zn.l,is.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Ye;Ye.NAMES=Ju;let rp=0;class Ks extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Wi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oa&&(i.blendSrc=this.blendSrc),this.blendDst!==aa&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qu extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new $,rs=new qe;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}}class ef extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tf extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sp=0;const Vt=new ct,Oo=new Ot,Ii=new $,Ft=new Vr,pr=new Vr,pt=new $;class ei extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?tf:ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Ft.min,pr.min),Ft.expandByPoint(pt),pt.addVectors(Ft.max,pr.max),Ft.expandByPoint(pt)):(Ft.expandByPoint(pr.min),Ft.expandByPoint(pr.max))}Ft.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(e,c),pt.add(Ii)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new $,l[H]=new $;const c=new $,u=new $,f=new $,d=new qe,h=new qe,_=new qe,v=new $,m=new $;function p(H,T,y){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,H),h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const U=1/(h.x*_.y-_.x*h.y);isFinite(U)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(U),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(U),a[H].add(v),a[T].add(v),a[y].add(v),l[H].add(m),l[T].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let H=0,T=b.length;H<T;++H){const y=b[H],U=y.start,Q=y.count;for(let Y=U,se=U+Q;Y<se;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new $,A=new $,V=new $,C=new $;function L(H){V.fromBufferAttribute(r,H),C.copy(V);const T=a[H];M.copy(T),M.sub(V.multiplyScalar(V.dot(T))).normalize(),A.crossVectors(C,T);const U=A.dot(l[H])<0?-1:1;o.setXYZW(H,M.x,M.y,M.z,U)}for(let H=0,T=b.length;H<T;++H){const y=b[H],U=y.start,Q=y.count;for(let Y=U,se=U+Q;Y<se;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new hn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new ct,ai=new Zh,ss=new Ua,ic=new $,Ni=new $,Fi=new $,Oi=new $,zo=new $,os=new $,as=new qe,ls=new qe,cs=new qe,rc=new $,sc=new $,oc=new $,us=new $,fs=new $;class Zt extends Ot{constructor(e=new ei,t=new Qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(zo.fromBufferAttribute(f,e),o?os.addScaledVector(zo,u):os.addScaledVector(zo.sub(t),u))}t.add(os)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(ss.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ss,ic)===null||ai.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(s).invert(),ai.copy(e.ray).applyMatrix4(nc),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let A=b,V=M;A<V;A+=3){const C=a.getX(A),L=a.getX(A+1),H=a.getX(A+2);r=ds(this,p,e,i,c,u,f,C,L,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),A=a.getX(m+2);r=ds(this,o,e,i,c,u,f,b,M,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let A=b,V=M;A<V;A+=3){const C=A,L=A+1,H=A+2;r=ds(this,p,e,i,c,u,f,C,L,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const b=m,M=m+1,A=m+2;r=ds(this,o,e,i,c,u,f,b,M,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function op(n,e,t,i,r,s,o,a){let l;if(e.side===Lt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$n,a),l===null)return null;fs.copy(a),fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:n}}function ds(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ni),n.getVertexPosition(l,Fi),n.getVertexPosition(c,Oi);const u=op(n,e,t,i,Ni,Fi,Oi,us);if(u){r&&(as.fromBufferAttribute(r,a),ls.fromBufferAttribute(r,l),cs.fromBufferAttribute(r,c),u.uv=un.getInterpolation(us,Ni,Fi,Oi,as,ls,cs,new qe)),s&&(as.fromBufferAttribute(s,a),ls.fromBufferAttribute(s,l),cs.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(us,Ni,Fi,Oi,as,ls,cs,new qe)),o&&(rc.fromBufferAttribute(o,a),sc.fromBufferAttribute(o,l),oc.fromBufferAttribute(o,c),u.normal=un.getInterpolation(us,Ni,Fi,Oi,rc,sc,oc,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};un.getNormal(Ni,Fi,Oi,f.normal),u.face=f}return u}class ar extends ei{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(f,2));function _(v,m,p,b,M,A,V,C,L,H,T){const y=A/L,U=V/H,Q=A/2,Y=V/2,se=C/2,ie=L+1,j=H+1;let Z=0,G=0;const xe=new $;for(let Me=0;Me<j;Me++){const ye=Me*U-Y;for(let Le=0;Le<ie;Le++){const ke=Le*y-Q;xe[v]=ke*b,xe[m]=ye*M,xe[p]=se,c.push(xe.x,xe.y,xe.z),xe[v]=0,xe[m]=0,xe[p]=C>0?1:-1,u.push(xe.x,xe.y,xe.z),f.push(Le/L),f.push(1-Me/H),Z+=1}}for(let Me=0;Me<H;Me++)for(let ye=0;ye<L;ye++){const Le=d+ye+ie*Me,ke=d+ye+ie*(Me+1),ee=d+(ye+1)+ie*(Me+1),he=d+(ye+1)+ie*Me;l.push(Le,ke,he),l.push(ke,ee,he),G+=6}a.addGroup(h,G,T),h+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function ap(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Ys={clone:tr,merge:At};var lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new $,ac=new qe,lc=new qe;class Gt extends rf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,ac,lc),t.subVectors(lc,ac)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Bi=1;class up extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(zi,Bi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(zi,Bi,e,t);s.layers=this.layers,this.add(s);const o=new Gt(zi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(zi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new Gt(zi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(zi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sf extends Rt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fp extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:wn});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=$t),new up(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Bo=new $,dp=new $,hp=new Ve;class hi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bo.subVectors(i,t).cross(dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hp.getNormalMatrix(e),r=this.coplanarPoint(Bo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ua,hs=new $;class of{constructor(e=new hi,t=new hi,i=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],_=r[9],v=r[10],m=r[11],p=r[12],b=r[13],M=r[14],A=r[15];if(i[0].setComponents(l-s,d-c,m-h,A-p).normalize(),i[1].setComponents(l+s,d+c,m+h,A+p).normalize(),i[2].setComponents(l+o,d+u,m+_,A+b).normalize(),i[3].setComponents(l-o,d-u,m-_,A-b).normalize(),i[4].setComponents(l-a,d-f,m-v,A-M).normalize(),t===An)i[5].setComponents(l+a,d+f,m+v,A+M).normalize();else if(t===zs)i[5].setComponents(a,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pp(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let h=0,_=d.length;h<_;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class $s extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let M=0;M<c;M++){const A=M*f-s;_.push(A,-b,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,A=b+c*(p+1),V=b+1+c*(p+1),C=b+1+c*p;h.push(M,A,C),h.push(A,V,C)}this.setIndex(h),this.setAttribute("position",new Rn(_,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:_p,alphamap_pars_fragment:vp,alphatest_fragment:xp,alphatest_pars_fragment:Sp,aomap_fragment:Mp,aomap_pars_fragment:yp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:bp,beginnormal_vertex:Ap,bsdfs:wp,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:Ip,color_pars_fragment:Np,color_pars_vertex:Fp,color_vertex:Op,common:zp,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:kp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Kp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:$p,envmap_pars_vertex:jp,envmap_physical_pars_fragment:am,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Qp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:rm,lights_lambert_pars_fragment:sm,lights_pars_begin:om,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:hm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:Sm,map_fragment:Mm,map_pars_fragment:ym,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Am,morphinstance_vertex:wm,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Um,normal_pars_fragment:Im,normal_pars_vertex:Nm,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:km,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Km,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Zm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Qm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:rg,specularmap_pars_fragment:sg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:ug,uv_pars_vertex:fg,uv_vertex:dg,worldpos_vertex:hg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:vg,cube_frag:xg,depth_vert:Sg,depth_frag:Mg,distanceRGBA_vert:yg,distanceRGBA_frag:Eg,equirect_vert:Tg,equirect_frag:bg,linedashed_vert:Ag,linedashed_frag:wg,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ug,meshnormal_vert:Ig,meshnormal_frag:Ng,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:zg,meshphysical_frag:Bg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Gg,points_frag:kg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Kg},ve={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},an={basic:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:At([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:At([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:At([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:At([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:At([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:At([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:At([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:At([ve.lights,ve.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};an.physical={uniforms:At([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ps={r:0,b:0,g:0},ci=new Ln,Yg=new ct;function $g(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const A=_(b);A===null?p(a,l):A&&A.isColor&&(p(A,1),M=!0);const V=n.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const A=_(M);A&&(A.isCubeTexture||A.mapping===Xs)?(u===void 0&&(u=new Zt(new ar(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:tr(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ci.copy(M.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(ci)),u.material.toneMapped=je.getTransfer(A.colorSpace)!==tt,(f!==A||d!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Zt(new $s(2,2),new zt({name:"BackgroundMaterial",uniforms:tr(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=je.getTransfer(A.colorSpace)!==tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(ps,nf(n)),i.buffers.color.setClear(ps.r,ps.g,ps.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m}}function jg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,U,Q,Y,se){let ie=!1;const j=f(Y,Q,U);s!==j&&(s=j,c(s.object)),ie=h(y,Y,Q,se),ie&&_(y,Y,Q,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,A(y,U,Q,Y),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,U,Q){const Y=Q.wireframe===!0;let se=i[y.id];se===void 0&&(se={},i[y.id]=se);let ie=se[U.id];ie===void 0&&(ie={},se[U.id]=ie);let j=ie[Y];return j===void 0&&(j=d(l()),ie[Y]=j),j}function d(y){const U=[],Q=[],Y=[];for(let se=0;se<t;se++)U[se]=0,Q[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Q,attributeDivisors:Y,object:y,attributes:{},index:null}}function h(y,U,Q,Y){const se=s.attributes,ie=U.attributes;let j=0;const Z=Q.getAttributes();for(const G in Z)if(Z[G].location>=0){const Me=se[G];let ye=ie[G];if(ye===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),Me===void 0||Me.attribute!==ye||ye&&Me.data!==ye.data)return!0;j++}return s.attributesNum!==j||s.index!==Y}function _(y,U,Q,Y){const se={},ie=U.attributes;let j=0;const Z=Q.getAttributes();for(const G in Z)if(Z[G].location>=0){let Me=ie[G];Me===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const ye={};ye.attribute=Me,Me&&Me.data&&(ye.data=Me.data),se[G]=ye,j++}s.attributes=se,s.attributesNum=j,s.index=Y}function v(){const y=s.newAttributes;for(let U=0,Q=y.length;U<Q;U++)y[U]=0}function m(y){p(y,0)}function p(y,U){const Q=s.newAttributes,Y=s.enabledAttributes,se=s.attributeDivisors;Q[y]=1,Y[y]===0&&(n.enableVertexAttribArray(y),Y[y]=1),se[y]!==U&&(n.vertexAttribDivisor(y,U),se[y]=U)}function b(){const y=s.newAttributes,U=s.enabledAttributes;for(let Q=0,Y=U.length;Q<Y;Q++)U[Q]!==y[Q]&&(n.disableVertexAttribArray(Q),U[Q]=0)}function M(y,U,Q,Y,se,ie,j){j===!0?n.vertexAttribIPointer(y,U,Q,se,ie):n.vertexAttribPointer(y,U,Q,Y,se,ie)}function A(y,U,Q,Y){v();const se=Y.attributes,ie=Q.getAttributes(),j=U.defaultAttributeValues;for(const Z in ie){const G=ie[Z];if(G.location>=0){let xe=se[Z];if(xe===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),xe!==void 0){const Me=xe.normalized,ye=xe.itemSize,Le=e.get(xe);if(Le===void 0)continue;const ke=Le.buffer,ee=Le.type,he=Le.bytesPerElement,ge=ee===n.INT||ee===n.UNSIGNED_INT||xe.gpuType===Bu;if(xe.isInterleavedBufferAttribute){const N=xe.data,ae=N.stride,ne=xe.offset;if(N.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)p(G.location+de,N.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let de=0;de<G.locationSize;de++)M(G.location+de,ye/G.locationSize,ee,Me,ae*he,(ne+ye/G.locationSize*de)*he,ge)}else{if(xe.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)p(G.location+N,xe.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let N=0;N<G.locationSize;N++)m(G.location+N);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let N=0;N<G.locationSize;N++)M(G.location+N,ye/G.locationSize,ee,Me,ye*he,ye/G.locationSize*N*he,ge)}}else if(j!==void 0){const Me=j[Z];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(G.location,Me);break;case 3:n.vertexAttrib3fv(G.location,Me);break;case 4:n.vertexAttrib4fv(G.location,Me);break;default:n.vertexAttrib1fv(G.location,Me)}}}}b()}function V(){H();for(const y in i){const U=i[y];for(const Q in U){const Y=U[Q];for(const se in Y)u(Y[se].object),delete Y[se];delete U[Q]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const Q in U){const Y=U[Q];for(const se in Y)u(Y[se].object),delete Y[se];delete U[Q]}delete i[y.id]}function L(y){for(const U in i){const Q=i[U];if(Q[y.id]===void 0)continue;const Y=Q[y.id];for(const se in Y)u(Y[se].object),delete Y[se];delete Q[y.id]}}function H(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:H,resetDefaultState:T,dispose:V,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Zg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];t.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];for(let v=0;v<d.length;v++)t.update(_,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=h>0,V=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:A,maxSamples:V}}function Qg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,M=b*4;let A=p.clippingState||null;l.value=A,A=u(_,d,M,h);for(let V=0;V!==M;++V)A[V]=t[V];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,A=h;M!==v;++M,A+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function e_(n){let e=new WeakMap;function t(o,a){return a===la?o.mapping=ji:a===ca&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lf extends rf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ki=4,cc=[.125,.215,.35,.446,.526,.582],_i=20,Ho=new lf,uc=new Ye;let Vo=null,Go=0,ko=0,Wo=!1;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,fc=[new $(-pi,Hi,0),new $(pi,Hi,0),new $(-Hi,0,pi),new $(Hi,0,pi),new $(0,pi,-Hi),new $(0,pi,Hi),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Go,ko),this._renderer.xr.enabled=Wo,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Br,format:dn,colorSpace:Qn,depthBuffer:!1},r=hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(s)),this._blurMaterial=n_(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,r){const a=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(uc),u.toneMapping=qn,u.autoClear=!1;const h=new Qu({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),_=new Zt(new ar,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(uc),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;ms(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fc[(r-s-1)%fc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zt(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*_i-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let b=0;for(let L=0;L<_i;++L){const H=L/v,T=Math.exp(-H*H/2);p.push(T),L===0?b+=T:L<m&&(b+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const A=this._sizeLods[r],V=3*A*(r>M-ki?r-M+ki:0),C=4*(this._cubeSize-A);ms(t,V,C,3*A,2*A),l.setRenderTarget(t),l.render(f,Ho)}}function t_(n){const e=[],t=[],i=[];let r=n;const s=n-ki+1+cc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ki?l=cc[o-n+ki-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,v=3,m=2,p=1,b=new Float32Array(v*_*h),M=new Float32Array(m*_*h),A=new Float32Array(p*_*h);for(let C=0;C<h;C++){const L=C%3*2/3-1,H=C>2?0:-1,T=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];b.set(T,v*_*C),M.set(d,m*_*C);const y=[C,C,C,C,C,C];A.set(y,p*_*C)}const V=new ei;V.setAttribute("position",new hn(b,v)),V.setAttribute("uv",new hn(M,m)),V.setAttribute("faceIndex",new hn(A,p)),e.push(V),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hc(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function n_(n,e,t){const i=new Float32Array(_i),r=new $(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function pc(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function mc(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===ca,u=l===ji||l===Zi;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new dc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new dc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function r_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Yu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function s_(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const v=h[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,_=f.attributes.position;let v=0;if(h!==null){const b=h.array;v=h.version;for(let M=0,A=b.length;M<A;M+=3){const V=b[M+0],C=b[M+1],L=b[M+2];d.push(V,C,C,L,L,V)}}else if(_!==void 0){const b=_.array;v=_.version;for(let M=0,A=b.length/3-1;M<A;M+=3){const V=M+0,C=M+1,L=M+2;d.push(V,C,C,L,L,V)}}else return;const m=new(Ku(d)?tf:ef)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function o_(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,_){_!==0&&(n.drawElementsInstanced(i,h,s,d*o,_),t.update(h,i,_))}function u(d,h,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<_;m++)this.render(d[m]/o,h[m]);else{v.multiDrawElementsWEBGL(i,h,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,i,1)}}function f(d,h,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=h[b];for(let b=0;b<v.length;b++)t.update(p,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function a_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function l_(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let A=0;_===!0&&(A=1),v===!0&&(A=2),m===!0&&(A=3);let V=a.attributes.position.count*A,C=1;V>e.maxTextureSize&&(C=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const L=new Float32Array(V*C*4*f),H=new ju(L,V,C,f);H.type=bn,H.needsUpdate=!0;const T=A*4;for(let U=0;U<f;U++){const Q=p[U],Y=b[U],se=M[U],ie=V*C*4*U;for(let j=0;j<Q.count;j++){const Z=j*T;_===!0&&(r.fromBufferAttribute(Q,j),L[ie+Z+0]=r.x,L[ie+Z+1]=r.y,L[ie+Z+2]=r.z,L[ie+Z+3]=0),v===!0&&(r.fromBufferAttribute(Y,j),L[ie+Z+4]=r.x,L[ie+Z+5]=r.y,L[ie+Z+6]=r.z,L[ie+Z+7]=0),m===!0&&(r.fromBufferAttribute(se,j),L[ie+Z+8]=r.x,L[ie+Z+9]=r.y,L[ie+Z+10]=r.z,L[ie+Z+11]=se.itemSize===4?r.w:1)}}d={count:f,texture:H,size:new qe(V,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function c_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class cf extends Rt{constructor(e,t,i,r,s,o,a,l,c,u=Xi){if(u!==Xi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xi&&(i=Ji),i===void 0&&u===er&&(i=Qi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uf=new Rt,ff=new cf(1,1);ff.compareFunction=qu;const df=new ju,hf=new $h,pf=new sf,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),Sc=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function js(n,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),ft(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;xc.set(i),n.uniformMatrix3fv(this.addr,!1,xc),ft(t,i)}}function g_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;vc.set(i),n.uniformMatrix4fv(this.addr,!1,vc),ft(t,i)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function M_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function b_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?ff:uf;t.setTexture2D(e||s,r)}function A_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hf,r)}function w_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pf,r)}function R_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||df,r)}function C_(n){switch(n){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return h_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return x_;case 35669:case 35673:return S_;case 5125:return M_;case 36294:return y_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function D_(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function U_(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function I_(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N_(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F_(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function H_(n,e){n.uniform4iv(this.addr,e)}function V_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function k_(n,e){n.uniform3uiv(this.addr,e)}function W_(n,e){n.uniform4uiv(this.addr,e)}function X_(n,e,t){const i=this.cache,r=e.length,s=js(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||uf,s[o])}function q_(n,e,t){const i=this.cache,r=e.length,s=js(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hf,s[o])}function K_(n,e,t){const i=this.cache,r=e.length,s=js(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||pf,s[o])}function Y_(n,e,t){const i=this.cache,r=e.length,s=js(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||df,s[o])}function $_(n){switch(n){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return U_;case 35674:return I_;case 35675:return N_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return k_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Y_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class Z_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Mc(n,e){n.seq.push(e),n.map[e.id]=e}function Q_(n,e,t){const i=n.name,r=i.length;for(Xo.lastIndex=0;;){const s=Xo.exec(i),o=Xo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Mc(t,c===void 0?new j_(a,n,e):new Z_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new J_(a),Mc(t,f)),t=f}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Q_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ev=37297;let tv=0;function nv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iv(n){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n);let i;switch(e===t?i="":e===Os&&t===Fs?i="LinearDisplayP3ToLinearSRGB":e===Fs&&t===Os&&(i="LinearSRGBToLinearDisplayP3"),n){case Qn:case qs:return[i,"LinearTransferOETF"];case on:case La:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ec(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nv(n.getShaderSource(e),o)}else return r}function rv(n,e){const t=iv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sv(n,e){let t;switch(e){case Du:t="Linear";break;case Uu:t="Reinhard";break;case Iu:t="OptimizedCineon";break;case Nu:t="ACESFilmic";break;case Fu:t="AgX";break;case Ou:t="Neutral";break;case rh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function av(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _r(n){return n!==""}function Tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(n){return n.replace(cv,fv)}const uv=new Map;function fv(n,e){let t=He[e];if(t===void 0){const i=uv.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return da(t)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(dv,hv)}function hv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Zi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function _v(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lu:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function vv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pv(t),c=mv(t),u=gv(t),f=_v(t),d=vv(t),h=ov(t),_=av(s),v=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(m=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?He.tonemapping_pars_fragment:"",t.toneMapping!==qn?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=da(o),o=Tc(o,t),o=bc(o,t),a=da(a),a=Tc(a,t),a=bc(a,t),o=Ac(o),a=Ac(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,A=b+p+a,V=yc(r,r.VERTEX_SHADER,M),C=yc(r,r.FRAGMENT_SHADER,A);r.attachShader(v,V),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(U){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),Y=r.getShaderInfoLog(V).trim(),se=r.getShaderInfoLog(C).trim();let ie=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,V,C);else{const Z=Ec(r,V,"vertex"),G=Ec(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+Z+`
`+G)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||se==="")&&(j=!1);j&&(U.diagnostics={runnable:ie,programLog:Q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:se,prefix:p}})}r.deleteShader(V),r.deleteShader(C),H=new Es(r,v),T=lv(r,v)}let H;this.getUniforms=function(){return H===void 0&&L(this),H};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,ev)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=V,this.fragmentShader=C,this}let Sv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yv(e),t.set(e,i)),i}}class yv{constructor(e){this.id=Sv++,this.code=e,this.usedTimes=0}}function Ev(n,e,t,i,r,s,o){const a=new Zu,l=new Mv,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,U,Q,Y){const se=Q.fog,ie=Y.geometry,j=T.isMeshStandardMaterial?Q.environment:null,Z=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),G=Z&&Z.mapping===Xs?Z.image.height:null,xe=_[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const Me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ye=Me!==void 0?Me.length:0;let Le=0;ie.morphAttributes.position!==void 0&&(Le=1),ie.morphAttributes.normal!==void 0&&(Le=2),ie.morphAttributes.color!==void 0&&(Le=3);let ke,ee,he,ge;if(xe){const Qe=an[xe];ke=Qe.vertexShader,ee=Qe.fragmentShader}else ke=T.vertexShader,ee=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const N=n.getRenderTarget(),ae=Y.isInstancedMesh===!0,ne=Y.isBatchedMesh===!0,de=!!T.map,P=!!T.matcap,we=!!Z,E=!!T.aoMap,w=!!T.lightMap,I=!!T.bumpMap,K=!!T.normalMap,B=!!T.displacementMap,J=!!T.emissiveMap,fe=!!T.metalnessMap,x=!!T.roughnessMap,g=T.anisotropy>0,R=T.clearcoat>0,O=T.dispersion>0,X=T.iridescence>0,k=T.sheen>0,ue=T.transmission>0,re=g&&!!T.anisotropyMap,ce=R&&!!T.clearcoatMap,Se=R&&!!T.clearcoatNormalMap,le=R&&!!T.clearcoatRoughnessMap,Ee=X&&!!T.iridescenceMap,Oe=X&&!!T.iridescenceThicknessMap,Ue=k&&!!T.sheenColorMap,_e=k&&!!T.sheenRoughnessMap,ze=!!T.specularMap,De=!!T.specularColorMap,Xe=!!T.specularIntensityMap,D=ue&&!!T.transmissionMap,Te=ue&&!!T.thicknessMap,te=!!T.gradientMap,oe=!!T.alphaMap,me=T.alphaTest>0,Fe=!!T.alphaHash,Ke=!!T.extensions;let ot=qn;T.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ot=n.toneMapping);const dt={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:ke,fragmentShader:ee,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:ne,batchingColor:ne&&Y._colorsTexture!==null,instancing:ae,instancingColor:ae&&Y.instanceColor!==null,instancingMorph:ae&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qn,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:P,envMap:we,envMapMode:we&&Z.mapping,envMapCubeUVHeight:G,aoMap:E,lightMap:w,bumpMap:I,normalMap:K,displacementMap:d&&B,emissiveMap:J,normalMapObjectSpace:K&&T.normalMapType===vh,normalMapTangentSpace:K&&T.normalMapType===_h,metalnessMap:fe,roughnessMap:x,anisotropy:g,anisotropyMap:re,clearcoat:R,clearcoatMap:ce,clearcoatNormalMap:Se,clearcoatRoughnessMap:le,dispersion:O,iridescence:X,iridescenceMap:Ee,iridescenceThicknessMap:Oe,sheen:k,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:ze,specularColorMap:De,specularIntensityMap:Xe,transmission:ue,transmissionMap:D,thicknessMap:Te,gradientMap:te,opaque:T.transparent===!1&&T.blending===Wi&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:me,alphaHash:Fe,combine:T.combine,mapUv:de&&v(T.map.channel),aoMapUv:E&&v(T.aoMap.channel),lightMapUv:w&&v(T.lightMap.channel),bumpMapUv:I&&v(T.bumpMap.channel),normalMapUv:K&&v(T.normalMap.channel),displacementMapUv:B&&v(T.displacementMap.channel),emissiveMapUv:J&&v(T.emissiveMap.channel),metalnessMapUv:fe&&v(T.metalnessMap.channel),roughnessMapUv:x&&v(T.roughnessMap.channel),anisotropyMapUv:re&&v(T.anisotropyMap.channel),clearcoatMapUv:ce&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(T.sheenRoughnessMap.channel),specularMapUv:ze&&v(T.specularMap.channel),specularColorMapUv:De&&v(T.specularColorMap.channel),specularIntensityMapUv:Xe&&v(T.specularIntensityMap.channel),transmissionMapUv:D&&v(T.transmissionMap.channel),thicknessMapUv:Te&&v(T.thicknessMap.channel),alphaMapUv:oe&&v(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(K||g),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(de||oe),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Tn,flipSided:T.side===Lt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)y.push(U),y.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(b(y,T),M(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function b(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function M(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),T.push(a.mask)}function A(T){const y=_[T.type];let U;if(y){const Q=an[y];U=Ys.clone(Q.uniforms)}else U=T.uniforms;return U}function V(T,y){let U;for(let Q=0,Y=u.length;Q<Y;Q++){const se=u[Q];if(se.cacheKey===y){U=se,++U.usedTimes;break}}return U===void 0&&(U=new xv(n,y,T,s),u.push(U)),U}function C(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function L(T){l.remove(T)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:V,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:H}}function Tv(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,_,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,_,v,m){const p=o(f,d,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,_,v,m){const p=o(f,d,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||bv),i.length>1&&i.sort(d||Rc),r.length>1&&r.sort(d||Rc)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Av(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cc,n.set(i,[o])):r>=s.length?(o=new Cc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Ye};break;case"SpotLight":t={position:new $,direction:new $,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function Rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cv=0;function Pv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lv(n){const e=new wv,t=Rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new ct,o=new ct;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,b=0,M=0,A=0,V=0,C=0,L=0;c.sort(Pv);for(let T=0,y=c.length;T<y;T++){const U=c[T],Q=U.color,Y=U.intensity,se=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=Q.r*Y,f+=Q.g*Y,d+=Q.b*Y;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],Y);L++}else if(U.isDirectionalLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Z=U.shadow,G=t.get(U);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=ie,i.directionalShadowMatrix[h]=U.shadow.matrix,b++}i.directional[h]=j,h++}else if(U.isSpotLight){const j=e.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(Q).multiplyScalar(Y),j.distance=se,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[v]=j;const Z=U.shadow;if(U.map&&(i.spotLightMap[V]=U.map,V++,Z.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[v]=Z.matrix,U.castShadow){const G=t.get(U);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ie,A++}v++}else if(U.isRectAreaLight){const j=e.get(U);j.color.copy(Q).multiplyScalar(Y),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=j,m++}else if(U.isPointLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const Z=U.shadow,G=t.get(U);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=U.shadow.matrix,M++}i.point[_]=j,_++}else if(U.isHemisphereLight){const j=e.get(U);j.skyColor.copy(U.color).multiplyScalar(Y),j.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const H=i.hash;(H.directionalLength!==h||H.pointLength!==_||H.spotLength!==v||H.rectAreaLength!==m||H.hemiLength!==p||H.numDirectionalShadows!==b||H.numPointShadows!==M||H.numSpotShadows!==A||H.numSpotMaps!==V||H.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+V-C,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,H.directionalLength=h,H.pointLength=_,H.spotLength=v,H.rectAreaLength=m,H.hemiLength=p,H.numDirectionalShadows=b,H.numPointShadows=M,H.numSpotShadows=A,H.numSpotMaps=V,H.numLightProbes=L,i.version=Cv++)}function l(c,u){let f=0,d=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),f++}else if(M.isSpotLight){const A=i.spot[h];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Pc(n){const e=new Lv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Dv(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pc(n),e.set(r,[a])):s>=o.length?(a=new Pc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Uv extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ov(n,e,t){let i=new of;const r=new qe,s=new qe,o=new gt,a=new Uv({depthPacking:gh}),l=new Iv,c={},u=t.maxTextureSize,f={[$n]:Lt,[Lt]:$n,[Tn]:Tn},d=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Nv,fragmentShader:Fv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let p=this.type;this.render=function(C,L,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(wn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=p!==yn&&this.type===yn,se=p===yn&&this.type!==yn;for(let ie=0,j=C.length;ie<j;ie++){const Z=C[ie],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const xe=G.getFrameExtents();if(r.multiply(xe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/xe.x),r.x=s.x*xe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/xe.y),r.y=s.y*xe.y,G.mapSize.y=s.y)),G.map===null||Y===!0||se===!0){const ye=this.type!==yn?{minFilter:Pt,magFilter:Pt}:{};G.map!==null&&G.map.dispose(),G.map=new Zn(r.x,r.y,ye),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Me=G.getViewportCount();for(let ye=0;ye<Me;ye++){const Le=G.getViewport(ye);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),Q.viewport(o),G.updateMatrices(Z,ye),i=G.getFrustum(),A(L,H,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===yn&&b(G,H),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,y,U)};function b(C,L){const H=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,H,d,v,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,H,h,v,null)}function M(C,L,H,T){let y=null;const U=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)y=U;else if(y=H.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Q=y.uuid,Y=L.uuid;let se=c[Q];se===void 0&&(se={},c[Q]=se);let ie=se[Y];ie===void 0&&(ie=y.clone(),se[Y]=ie,L.addEventListener("dispose",V)),y=ie}if(y.visible=L.visible,y.wireframe=L.wireframe,T===yn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,H.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Q=n.properties.get(y);Q.light=H}return y}function A(C,L,H,T,y){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===yn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);const Y=e.update(C),se=C.material;if(Array.isArray(se)){const ie=Y.groups;for(let j=0,Z=ie.length;j<Z;j++){const G=ie[j],xe=se[G.materialIndex];if(xe&&xe.visible){const Me=M(C,xe,T,y);C.onBeforeShadow(n,C,L,H,Y,Me,G),n.renderBufferDirect(H,null,Y,Me,C,G),C.onAfterShadow(n,C,L,H,Y,Me,G)}}}else if(se.visible){const ie=M(C,se,T,y);C.onBeforeShadow(n,C,L,H,Y,ie,null),n.renderBufferDirect(H,null,Y,ie,C,null),C.onAfterShadow(n,C,L,H,Y,ie,null)}}const Q=C.children;for(let Y=0,se=Q.length;Y<se;Y++)A(Q[Y],L,H,T,y)}function V(C){C.target.removeEventListener("dispose",V);for(const H in c){const T=c[H],y=C.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function zv(n){function e(){let D=!1;const Te=new gt;let te=null;const oe=new gt(0,0,0,0);return{setMask:function(me){te!==me&&!D&&(n.colorMask(me,me,me,me),te=me)},setLocked:function(me){D=me},setClear:function(me,Fe,Ke,ot,dt){dt===!0&&(me*=ot,Fe*=ot,Ke*=ot),Te.set(me,Fe,Ke,ot),oe.equals(Te)===!1&&(n.clearColor(me,Fe,Ke,ot),oe.copy(Te))},reset:function(){D=!1,te=null,oe.set(-1,0,0,0)}}}function t(){let D=!1,Te=null,te=null,oe=null;return{setTest:function(me){me?ge(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(me){Te!==me&&!D&&(n.depthMask(me),Te=me)},setFunc:function(me){if(te!==me){switch(me){case $d:n.depthFunc(n.NEVER);break;case jd:n.depthFunc(n.ALWAYS);break;case Zd:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case Jd:n.depthFunc(n.EQUAL);break;case Qd:n.depthFunc(n.GEQUAL);break;case eh:n.depthFunc(n.GREATER);break;case th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=me}},setLocked:function(me){D=me},setClear:function(me){oe!==me&&(n.clearDepth(me),oe=me)},reset:function(){D=!1,Te=null,te=null,oe=null}}}function i(){let D=!1,Te=null,te=null,oe=null,me=null,Fe=null,Ke=null,ot=null,dt=null;return{setTest:function(Qe){D||(Qe?ge(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(Qe){Te!==Qe&&!D&&(n.stencilMask(Qe),Te=Qe)},setFunc:function(Qe,nn,rn){(te!==Qe||oe!==nn||me!==rn)&&(n.stencilFunc(Qe,nn,rn),te=Qe,oe=nn,me=rn)},setOp:function(Qe,nn,rn){(Fe!==Qe||Ke!==nn||ot!==rn)&&(n.stencilOp(Qe,nn,rn),Fe=Qe,Ke=nn,ot=rn)},setLocked:function(Qe){D=Qe},setClear:function(Qe){dt!==Qe&&(n.clearStencil(Qe),dt=Qe)},reset:function(){D=!1,Te=null,te=null,oe=null,me=null,Fe=null,Ke=null,ot=null,dt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,_=!1,v=null,m=null,p=null,b=null,M=null,A=null,V=null,C=new Ye(0,0,0),L=0,H=!1,T=null,y=null,U=null,Q=null,Y=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,j=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ie=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ie=j>=2);let G=null,xe={};const Me=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Le=new gt().fromArray(Me),ke=new gt().fromArray(ye);function ee(D,Te,te,oe){const me=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(D,Fe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<te;Ke++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Fe}const he={};he[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Us),I(!1),K(ul),ge(n.CULL_FACE),E(wn);function ge(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function N(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function ae(D,Te){return u[D]!==Te?(n.bindFramebuffer(D,Te),u[D]=Te,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function ne(D,Te){let te=d,oe=!1;if(D){te=f.get(Te),te===void 0&&(te=[],f.set(Te,te));const me=D.textures;if(te.length!==me.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,Ke=me.length;Fe<Ke;Fe++)te[Fe]=n.COLOR_ATTACHMENT0+Fe;te.length=me.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function de(D){return h!==D?(n.useProgram(D),h=D,!0):!1}const P={[gi]:n.FUNC_ADD,[Dd]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};P[Id]=n.MIN,P[Nd]=n.MAX;const we={[Fd]:n.ZERO,[Od]:n.ONE,[zd]:n.SRC_COLOR,[oa]:n.SRC_ALPHA,[Wd]:n.SRC_ALPHA_SATURATE,[Gd]:n.DST_COLOR,[Hd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[aa]:n.ONE_MINUS_SRC_ALPHA,[kd]:n.ONE_MINUS_DST_COLOR,[Vd]:n.ONE_MINUS_DST_ALPHA,[Xd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[Kd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function E(D,Te,te,oe,me,Fe,Ke,ot,dt,Qe){if(D===wn){_===!0&&(N(n.BLEND),_=!1);return}if(_===!1&&(ge(n.BLEND),_=!0),D!==Ld){if(D!==v||Qe!==H){if((m!==gi||M!==gi)&&(n.blendEquation(n.FUNC_ADD),m=gi,M=gi),Qe)switch(D){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.ONE,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,b=null,A=null,V=null,C.set(0,0,0),L=0,v=D,H=Qe}return}me=me||Te,Fe=Fe||te,Ke=Ke||oe,(Te!==m||me!==M)&&(n.blendEquationSeparate(P[Te],P[me]),m=Te,M=me),(te!==p||oe!==b||Fe!==A||Ke!==V)&&(n.blendFuncSeparate(we[te],we[oe],we[Fe],we[Ke]),p=te,b=oe,A=Fe,V=Ke),(ot.equals(C)===!1||dt!==L)&&(n.blendColor(ot.r,ot.g,ot.b,dt),C.copy(ot),L=dt),v=D,H=!1}function w(D,Te){D.side===Tn?N(n.CULL_FACE):ge(n.CULL_FACE);let te=D.side===Lt;Te&&(te=!te),I(te),D.blending===Wi&&D.transparent===!1?E(wn):E(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const oe=D.stencilWrite;o.setTest(oe),oe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),J(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(D){T!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),T=D)}function K(D){D!==Rd?(ge(n.CULL_FACE),D!==y&&(D===ul?n.cullFace(n.BACK):D===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),y=D}function B(D){D!==U&&(ie&&n.lineWidth(D),U=D)}function J(D,Te,te){D?(ge(n.POLYGON_OFFSET_FILL),(Q!==Te||Y!==te)&&(n.polygonOffset(Te,te),Q=Te,Y=te)):N(n.POLYGON_OFFSET_FILL)}function fe(D){D?ge(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function x(D){D===void 0&&(D=n.TEXTURE0+se-1),G!==D&&(n.activeTexture(D),G=D)}function g(D,Te,te){te===void 0&&(G===null?te=n.TEXTURE0+se-1:te=G);let oe=xe[te];oe===void 0&&(oe={type:void 0,texture:void 0},xe[te]=oe),(oe.type!==D||oe.texture!==Te)&&(G!==te&&(n.activeTexture(te),G=te),n.bindTexture(D,Te||he[D]),oe.type=D,oe.texture=Te)}function R(){const D=xe[G];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){Le.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Le.copy(D))}function _e(D){ke.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function ze(D,Te){let te=l.get(Te);te===void 0&&(te=new WeakMap,l.set(Te,te));let oe=te.get(D);oe===void 0&&(oe=n.getUniformBlockIndex(Te,D.name),te.set(D,oe))}function De(D,Te){const oe=l.get(Te).get(D);a.get(Te)!==oe&&(n.uniformBlockBinding(Te,oe,D.__bindingPointIndex),a.set(Te,oe))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,xe={},u={},f=new WeakMap,d=[],h=null,_=!1,v=null,m=null,p=null,b=null,M=null,A=null,V=null,C=new Ye(0,0,0),L=0,H=!1,T=null,y=null,U=null,Q=null,Y=null,Le.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:N,bindFramebuffer:ae,drawBuffers:ne,useProgram:de,setBlending:E,setMaterial:w,setFlipSided:I,setCullFace:K,setLineWidth:B,setPolygonOffset:J,setScissorTest:fe,activeTexture:x,bindTexture:g,unbindTexture:R,compressedTexImage2D:O,compressedTexImage3D:X,texImage2D:Ee,texImage3D:Oe,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:Se,texStorage3D:le,texSubImage2D:k,texSubImage3D:ue,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:Ue,viewport:_e,reset:Xe}}function Bv(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return h?new OffscreenCanvas(x,g):Bs("canvas")}function v(x,g,R){let O=1;const X=fe(x);if((X.width>R||X.height>R)&&(O=R/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const k=Math.floor(O*X.width),ue=Math.floor(O*X.height);f===void 0&&(f=_(k,ue));const re=g?_(k,ue):f;return re.width=k,re.height=ue,re.getContext("2d").drawImage(x,0,0,k,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+k+"x"+ue+")."),re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),x;return x}function m(x){return x.generateMipmaps&&x.minFilter!==Pt&&x.minFilter!==$t}function p(x){n.generateMipmap(x)}function b(x,g,R,O,X=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let k=g;if(g===n.RED&&(R===n.FLOAT&&(k=n.R32F),R===n.HALF_FLOAT&&(k=n.R16F),R===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.R8UI),R===n.UNSIGNED_SHORT&&(k=n.R16UI),R===n.UNSIGNED_INT&&(k=n.R32UI),R===n.BYTE&&(k=n.R8I),R===n.SHORT&&(k=n.R16I),R===n.INT&&(k=n.R32I)),g===n.RG&&(R===n.FLOAT&&(k=n.RG32F),R===n.HALF_FLOAT&&(k=n.RG16F),R===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RG8UI),R===n.UNSIGNED_SHORT&&(k=n.RG16UI),R===n.UNSIGNED_INT&&(k=n.RG32UI),R===n.BYTE&&(k=n.RG8I),R===n.SHORT&&(k=n.RG16I),R===n.INT&&(k=n.RG32I)),g===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),g===n.RGBA){const ue=X?Ns:je.getTransfer(O);R===n.FLOAT&&(k=n.RGBA32F),R===n.HALF_FLOAT&&(k=n.RGBA16F),R===n.UNSIGNED_BYTE&&(k=ue===tt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(x,g){let R;return x?g===null||g===Ji||g===Qi?R=n.DEPTH24_STENCIL8:g===bn?R=n.DEPTH32F_STENCIL8:g===Is&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ji||g===Qi?R=n.DEPTH_COMPONENT24:g===bn?R=n.DEPTH_COMPONENT32F:g===Is&&(R=n.DEPTH_COMPONENT16),R}function A(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Pt&&x.minFilter!==$t?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function V(x){const g=x.target;g.removeEventListener("dispose",V),L(g),g.isVideoTexture&&u.delete(g)}function C(x){const g=x.target;g.removeEventListener("dispose",C),T(g)}function L(x){const g=i.get(x);if(g.__webglInit===void 0)return;const R=x.source,O=d.get(R);if(O){const X=O[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&H(x),Object.keys(O).length===0&&d.delete(R)}i.remove(x)}function H(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const R=x.source,O=d.get(R);delete O[g.__cacheKey],o.memory.textures--}function T(x){const g=i.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let X=0;X<g.__webglFramebuffer[O].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[O][X]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const R=x.textures;for(let O=0,X=R.length;O<X;O++){const k=i.get(R[O]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(R[O])}i.remove(x)}let y=0;function U(){y=0}function Q(){const x=y;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),y+=1,x}function Y(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function se(x,g){const R=i.get(x);if(x.isVideoTexture&&B(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const O=x.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(R,x,g);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+g)}function ie(x,g){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ke(R,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+g)}function j(x,g){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ke(R,x,g);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+g)}function Z(x,g){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ee(R,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+g)}const G={[ua]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},xe={[Pt]:n.NEAREST,[sh]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Me={[xh]:n.NEVER,[bh]:n.ALWAYS,[Sh]:n.LESS,[qu]:n.LEQUAL,[Mh]:n.EQUAL,[Th]:n.GEQUAL,[yh]:n.GREATER,[Eh]:n.NOTEQUAL};function ye(x,g){if(g.type===bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===$t||g.magFilter===go||g.magFilter===Yr||g.magFilter===Mi||g.minFilter===$t||g.minFilter===go||g.minFilter===Yr||g.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,G[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,G[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,G[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==Yr&&g.minFilter!==Mi||g.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Le(x,g){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",V));const O=g.source;let X=d.get(O);X===void 0&&(X={},d.set(O,X));const k=Y(g);if(k!==x.__cacheKey){X[k]===void 0&&(X[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),X[k].usedTimes++;const ue=X[x.__cacheKey];ue!==void 0&&(X[x.__cacheKey].usedTimes--,ue.usedTimes===0&&H(g)),x.__cacheKey=k,x.__webglTexture=X[k].texture}return R}function ke(x,g,R){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);const X=Le(x,g),k=g.source;t.bindTexture(O,x.__webglTexture,n.TEXTURE0+R);const ue=i.get(k);if(k.version!==ue.__version||X===!0){t.activeTexture(n.TEXTURE0+R);const re=je.getPrimaries(je.workingColorSpace),ce=g.colorSpace===Xn?null:je.getPrimaries(g.colorSpace),Se=g.colorSpace===Xn||re===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let le=v(g.image,!1,r.maxTextureSize);le=J(g,le);const Ee=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let Ue=b(g.internalFormat,Ee,Oe,g.colorSpace,g.isVideoTexture);ye(O,g);let _e;const ze=g.mipmaps,De=g.isVideoTexture!==!0,Xe=ue.__version===void 0||X===!0,D=k.dataReady,Te=A(g,le);if(g.isDepthTexture)Ue=M(g.format===er,g.type),Xe&&(De?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Ee,Oe,null));else if(g.isDataTexture)if(ze.length>0){De&&Xe&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,ze[0].width,ze[0].height);for(let te=0,oe=ze.length;te<oe;te++)_e=ze[te],De?D&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,Ee,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,te,Ue,_e.width,_e.height,0,Ee,Oe,_e.data);g.generateMipmaps=!1}else De?(Xe&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,le.width,le.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ee,Oe,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Ee,Oe,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){De&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,ze[0].width,ze[0].height,le.depth);for(let te=0,oe=ze.length;te<oe;te++)if(_e=ze[te],g.format!==dn)if(Ee!==null)if(De){if(D)if(g.layerUpdates.size>0){for(const me of g.layerUpdates){const Fe=_e.width*_e.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,me,_e.width,_e.height,1,Ee,_e.data.slice(Fe*me,Fe*(me+1)),0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,le.depth,Ee,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ue,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,le.depth,Ee,Oe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ue,_e.width,_e.height,le.depth,0,Ee,Oe,_e.data)}else{De&&Xe&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,ze[0].width,ze[0].height);for(let te=0,oe=ze.length;te<oe;te++)_e=ze[te],g.format!==dn?Ee!==null?De?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,Ee,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,te,Ue,_e.width,_e.height,0,Ee,Oe,_e.data)}else if(g.isDataArrayTexture)if(De){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,le.width,le.height,le.depth),D)if(g.layerUpdates.size>0){let te;switch(Oe){case n.UNSIGNED_BYTE:switch(Ee){case n.ALPHA:te=1;break;case n.LUMINANCE:te=1;break;case n.LUMINANCE_ALPHA:te=2;break;case n.RGB:te=3;break;case n.RGBA:te=4;break;default:throw new Error(`Unknown texel size for format ${Ee}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:te=1;break;default:throw new Error(`Unknown texel size for type ${Oe}.`)}const oe=le.width*le.height*te;for(const me of g.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,le.width,le.height,1,Ee,Oe,le.data.slice(oe*me,oe*(me+1)));g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ee,Oe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Ee,Oe,le.data);else if(g.isData3DTexture)De?(Xe&&t.texStorage3D(n.TEXTURE_3D,Te,Ue,le.width,le.height,le.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ee,Oe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Ee,Oe,le.data);else if(g.isFramebufferTexture){if(Xe)if(De)t.texStorage2D(n.TEXTURE_2D,Te,Ue,le.width,le.height);else{let te=le.width,oe=le.height;for(let me=0;me<Te;me++)t.texImage2D(n.TEXTURE_2D,me,Ue,te,oe,0,Ee,Oe,null),te>>=1,oe>>=1}}else if(ze.length>0){if(De&&Xe){const te=fe(ze[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ue,te.width,te.height)}for(let te=0,oe=ze.length;te<oe;te++)_e=ze[te],De?D&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ee,Oe,_e):t.texImage2D(n.TEXTURE_2D,te,Ue,Ee,Oe,_e);g.generateMipmaps=!1}else if(De){if(Xe){const te=fe(le);t.texStorage2D(n.TEXTURE_2D,Te,Ue,te.width,te.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Oe,le)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Ee,Oe,le);m(g)&&p(O),ue.__version=k.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ee(x,g,R){if(g.image.length!==6)return;const O=Le(x,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+R);const k=i.get(X);if(X.version!==k.__version||O===!0){t.activeTexture(n.TEXTURE0+R);const ue=je.getPrimaries(je.workingColorSpace),re=g.colorSpace===Xn?null:je.getPrimaries(g.colorSpace),ce=g.colorSpace===Xn||ue===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Se=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,Ee=[];for(let oe=0;oe<6;oe++)!Se&&!le?Ee[oe]=v(g.image[oe],!0,r.maxCubemapSize):Ee[oe]=le?g.image[oe].image:g.image[oe],Ee[oe]=J(g,Ee[oe]);const Oe=Ee[0],Ue=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),ze=b(g.internalFormat,Ue,_e,g.colorSpace),De=g.isVideoTexture!==!0,Xe=k.__version===void 0||O===!0,D=X.dataReady;let Te=A(g,Oe);ye(n.TEXTURE_CUBE_MAP,g);let te;if(Se){De&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ze,Oe.width,Oe.height);for(let oe=0;oe<6;oe++){te=Ee[oe].mipmaps;for(let me=0;me<te.length;me++){const Fe=te[me];g.format!==dn?Ue!==null?De?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,Fe.width,Fe.height,Ue,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,Fe.width,Fe.height,Ue,_e,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,ze,Fe.width,Fe.height,0,Ue,_e,Fe.data)}}}else{if(te=g.mipmaps,De&&Xe){te.length>0&&Te++;const oe=fe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ee[oe].width,Ee[oe].height,Ue,_e,Ee[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,Ee[oe].width,Ee[oe].height,0,Ue,_e,Ee[oe].data);for(let me=0;me<te.length;me++){const Ke=te[me].image[oe].image;De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,Ke.width,Ke.height,Ue,_e,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,ze,Ke.width,Ke.height,0,Ue,_e,Ke.data)}}else{De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,_e,Ee[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,Ue,_e,Ee[oe]);for(let me=0;me<te.length;me++){const Fe=te[me];De?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,Ue,_e,Fe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,ze,Ue,_e,Fe.image[oe])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),k.__version=X.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function he(x,g,R,O,X,k){const ue=s.convert(R.format,R.colorSpace),re=s.convert(R.type),ce=b(R.internalFormat,ue,re,R.colorSpace);if(!i.get(g).__hasExternalTextures){const le=Math.max(1,g.width>>k),Ee=Math.max(1,g.height>>k);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,k,ce,le,Ee,g.depth,0,ue,re,null):t.texImage2D(X,k,ce,le,Ee,0,ue,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),K(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,X,i.get(R).__webglTexture,0,I(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,X,i.get(R).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(x,g,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const O=g.depthTexture,X=O&&O.isDepthTexture?O.type:null,k=M(g.stencilBuffer,X),ue=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=I(g);K(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,k,g.width,g.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,x)}else{const O=g.textures;for(let X=0;X<O.length;X++){const k=O[X],ue=s.convert(k.format,k.colorSpace),re=s.convert(k.type),ce=b(k.internalFormat,ue,re,k.colorSpace),Se=I(g);R&&K(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ce,g.width,g.height):K(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);const O=i.get(g.depthTexture).__webglTexture,X=I(g);if(g.depthTexture.format===Xi)K(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(g.depthTexture.format===er)K(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function ae(x){const g=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");N(g.__webglFramebuffer,x)}else if(R){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]=n.createRenderbuffer(),ge(g.__webglDepthbuffer[O],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),ge(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(x,g,R){const O=i.get(x);g!==void 0&&he(O.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&ae(x)}function de(x){const g=x.texture,R=i.get(x),O=i.get(g);x.addEventListener("dispose",C);const X=x.textures,k=x.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[re]=[];for(let ce=0;ce<g.mipmaps.length;ce++)R.__webglFramebuffer[re][ce]=n.createFramebuffer()}else R.__webglFramebuffer[re]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)R.__webglFramebuffer[re]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(ue)for(let re=0,ce=X.length;re<ce;re++){const Se=i.get(X[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&K(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let re=0;re<X.length;re++){const ce=X[re];R.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[re]);const Se=s.convert(ce.format,ce.colorSpace),le=s.convert(ce.type),Ee=b(ce.internalFormat,Se,le,ce.colorSpace,x.isXRRenderTarget===!0),Oe=I(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ee,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,R.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),ye(n.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)he(R.__webglFramebuffer[re][ce],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else he(R.__webglFramebuffer[re],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let re=0,ce=X.length;re<ce;re++){const Se=X[re],le=i.get(Se);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ye(n.TEXTURE_2D,Se),he(R.__webglFramebuffer,x,Se,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Se)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(re=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,O.__webglTexture),ye(re,g),g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)he(R.__webglFramebuffer[ce],x,g,n.COLOR_ATTACHMENT0,re,ce);else he(R.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,re,0);m(g)&&p(re),t.unbindTexture()}x.depthBuffer&&ae(x)}function P(x){const g=x.textures;for(let R=0,O=g.length;R<O;R++){const X=g[R];if(m(X)){const k=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(X).__webglTexture;t.bindTexture(k,ue),p(k),t.unbindTexture()}}}const we=[],E=[];function w(x){if(x.samples>0){if(K(x)===!1){const g=x.textures,R=x.width,O=x.height;let X=n.COLOR_BUFFER_BIT;const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(x),re=g.length>1;if(re)for(let ce=0;ce<g.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Se=i.get(g[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,R,O,0,0,R,O,X,n.NEAREST),l===!0&&(we.length=0,E.length=0,we.push(n.COLOR_ATTACHMENT0+ce),x.depthBuffer&&x.resolveDepthBuffer===!1&&(we.push(k),E.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<g.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Se=i.get(g[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function I(x){return Math.min(r.maxSamples,x.samples)}function K(x){const g=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function B(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function J(x,g){const R=x.colorSpace,O=x.format,X=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==Qn&&R!==Xn&&(je.getTransfer(R)===tt?(O!==dn||X!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),g}function fe(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=U,this.setTexture2D=se,this.setTexture2DArray=ie,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=ne,this.setupRenderTarget=de,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=he,this.useMultisampledRTT=K}function Hv(n,e){function t(i,r=Xn){let s;const o=je.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===Hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===Is)return n.UNSIGNED_SHORT;if(i===Bu)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===ch)return n.ALPHA;if(i===uh)return n.RGB;if(i===dn)return n.RGBA;if(i===fh)return n.LUMINANCE;if(i===dh)return n.LUMINANCE_ALPHA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Gu)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===hh)return n.RG;if(i===Wu)return n.RG_INTEGER;if(i===Xu)return n.RGBA_INTEGER;if(i===_o||i===vo||i===xo||i===So)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===gl||i===_l)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===xl||i===Sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===xl)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===yl||i===El||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Ul||i===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ml)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===Nl||i===Fl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mo)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ph||i===Ol||i===zl||i===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Vv extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:kv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class qv extends sr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const v=new Xv,m=t.getContextAttributes();let p=null,b=null;const M=[],A=[],V=new qe;let C=null;const L=new Gt;L.layers.enable(1),L.viewport=new gt;const H=new Gt;H.layers.enable(2),H.viewport=new gt;const T=[L,H],y=new Vv;y.layers.enable(1),y.layers.enable(2);let U=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=M[ee];return he===void 0&&(he=new qo,M[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=M[ee];return he===void 0&&(he=new qo,M[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=M[ee];return he===void 0&&(he=new qo,M[ee]=he),he.getHandSpace()};function Y(ee){const he=A.indexOf(ee.inputSource);if(he===-1)return;const ge=M[he];ge!==void 0&&(ge.update(ee.inputSource,ee.frame,c||o),ge.dispatchEvent({type:ee.type,data:ee.inputSource}))}function se(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ie);for(let ee=0;ee<M.length;ee++){const he=A[ee];he!==null&&(A[ee]=null,M[ee].disconnect(he))}U=null,Q=null,v.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,b=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(V),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Zn(h.framebufferWidth,h.framebufferHeight,{format:dn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ge=null,N=null;m.depth&&(N=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?er:Xi,ge=m.stencil?Qi:Ji);const ae={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Zn(d.textureWidth,d.textureHeight,{format:dn,type:jn,depthTexture:new cf(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ie(ee){for(let he=0;he<ee.removed.length;he++){const ge=ee.removed[he],N=A.indexOf(ge);N>=0&&(A[N]=null,M[N].disconnect(ge))}for(let he=0;he<ee.added.length;he++){const ge=ee.added[he];let N=A.indexOf(ge);if(N===-1){for(let ne=0;ne<M.length;ne++)if(ne>=A.length){A.push(ge),N=ne;break}else if(A[ne]===null){A[ne]=ge,N=ne;break}if(N===-1)break}const ae=M[N];ae&&ae.connect(ge)}}const j=new $,Z=new $;function G(ee,he,ge){j.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const N=j.distanceTo(Z),ae=he.projectionMatrix.elements,ne=ge.projectionMatrix.elements,de=ae[14]/(ae[10]-1),P=ae[14]/(ae[10]+1),we=(ae[9]+1)/ae[5],E=(ae[9]-1)/ae[5],w=(ae[8]-1)/ae[0],I=(ne[8]+1)/ne[0],K=de*w,B=de*I,J=N/(-w+I),fe=J*-w;he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(fe),ee.translateZ(J),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const x=de+J,g=P+J,R=K-fe,O=B+(N-fe),X=we*P/g*x,k=E*P/g*x;ee.projectionMatrix.makePerspective(R,O,X,k,x,g),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function xe(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;v.texture!==null&&(ee.near=v.depthNear,ee.far=v.depthFar),y.near=H.near=L.near=ee.near,y.far=H.far=L.far=ee.far,(U!==y.near||Q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,Q=y.far,L.near=U,L.far=Q,H.near=U,H.far=Q,L.updateProjectionMatrix(),H.updateProjectionMatrix(),ee.updateProjectionMatrix());const he=ee.parent,ge=y.cameras;xe(y,he);for(let N=0;N<ge.length;N++)xe(ge[N],he);ge.length===2?G(y,L,H):y.projectionMatrix.copy(L.projectionMatrix),Me(ee,y,he)};function Me(ee,he,ge){ge===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(ge.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Pr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ye=null;function Le(ee,he){if(u=he.getViewerPose(c||o),_=he,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let N=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let ne=0;ne<ge.length;ne++){const de=ge[ne];let P=null;if(h!==null)P=h.getViewport(de);else{const E=f.getViewSubImage(d,de);P=E.viewport,ne===0&&(e.setRenderTargetTextures(b,E.colorTexture,d.ignoreDepthValues?void 0:E.depthStencilTexture),e.setRenderTarget(b))}let we=T[ne];we===void 0&&(we=new Gt,we.layers.enable(ne),we.viewport=new gt,T[ne]=we),we.matrix.fromArray(de.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(de.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(P.x,P.y,P.width,P.height),ne===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(we)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ne=f.getDepthInformation(ge[0]);ne&&ne.isValid&&ne.texture&&v.init(e,ne,r.renderState)}}for(let ge=0;ge<M.length;ge++){const N=A[ge],ae=M[ge];N!==null&&ae!==void 0&&ae.update(N,he,c||o)}ye&&ye(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const ke=new af;ke.setAnimationLoop(Le),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const ui=new Ln,Kv=new ct;function Yv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,A)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Lt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Lt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,A=b.envMapRotation;M&&(m.envMap.value=M,ui.copy(A),ui.x*=-1,ui.y*=-1,ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(ui)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $v(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const A=M.program;i.uniformBlockBinding(b,A)}function c(b,M){let A=r[b.id];A===void 0&&(_(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",m));const V=M.program;i.updateUBOMapping(b,V);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const M=f();b.__bindingPointIndex=M;const A=n.createBuffer(),V=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,V,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],A=b.uniforms,V=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,L=A.length;C<L;C++){const H=Array.isArray(A[C])?A[C]:[A[C]];for(let T=0,y=H.length;T<y;T++){const U=H[T];if(h(U,C,T,V)===!0){const Q=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let ie=0;ie<Y.length;ie++){const j=Y[ie],Z=v(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,Q+se,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,se),se+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,M,A,V){const C=b.value,L=M+"_"+A;if(V[L]===void 0)return typeof C=="number"||typeof C=="boolean"?V[L]=C:V[L]=C.clone(),!0;{const H=V[L];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return V[L]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function _(b){const M=b.uniforms;let A=0;const V=16;for(let L=0,H=M.length;L<H;L++){const T=Array.isArray(M[L])?M[L]:[M[L]];for(let y=0,U=T.length;y<U;y++){const Q=T[y],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let se=0,ie=Y.length;se<ie;se++){const j=Y[se],Z=v(j),G=A%V;G!==0&&V-G<Z.boundary&&(A+=V-G),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=Z.storage}}}const C=A%V;return C>0&&(A+=V-C),b.__size=A,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const A=o.indexOf(M.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class jv{constructor(e={}){const{canvas:t=Gh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=qn,this.toneMappingExposure=1;const M=this;let A=!1,V=0,C=0,L=null,H=-1,T=null;const y=new gt,U=new gt;let Q=null;const Y=new Ye(0);let se=0,ie=t.width,j=t.height,Z=1,G=null,xe=null;const Me=new gt(0,0,ie,j),ye=new gt(0,0,ie,j);let Le=!1;const ke=new of;let ee=!1,he=!1;const ge=new ct,N=new $,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function de(){return L===null?Z:1}let P=i;function we(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){const F="webgl2";if(P=we(F,S),P===null)throw we(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let E,w,I,K,B,J,fe,x,g,R,O,X,k,ue,re,ce,Se,le,Ee,Oe,Ue,_e,ze,De;function Xe(){E=new r_(P),E.init(),_e=new Hv(P,E),w=new Jg(P,E,e,_e),I=new zv(P),K=new a_(P),B=new Tv,J=new Bv(P,E,I,B,w,_e,K),fe=new e_(M),x=new i_(M),g=new pp(P),ze=new jg(P,g),R=new s_(P,g,K,ze),O=new c_(P,R,g,K),Ee=new l_(P,w,J),ce=new Qg(B),X=new Ev(M,fe,x,E,w,ze,ce),k=new Yv(M,B),ue=new Av,re=new Dv(E),le=new $g(M,fe,x,I,O,d,l),Se=new Ov(M,O,w),De=new $v(P,K,w,I),Oe=new Zg(P,E,K),Ue=new o_(P,E,K),K.programs=X.programs,M.capabilities=w,M.extensions=E,M.properties=B,M.renderLists=ue,M.shadowMap=Se,M.state=I,M.info=K}Xe();const D=new qv(M,P);this.xr=D,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=E.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=E.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(ie,j,!1))},this.getSize=function(S){return S.set(ie,j)},this.setSize=function(S,F,W=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=S,j=F,t.width=Math.floor(S*Z),t.height=Math.floor(F*Z),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ie*Z,j*Z).floor()},this.setDrawingBufferSize=function(S,F,W){ie=S,j=F,Z=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,F,W,q){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,F,W,q),I.viewport(y.copy(Me).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(ye)},this.setScissor=function(S,F,W,q){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,F,W,q),I.scissor(U.copy(ye).multiplyScalar(Z).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(S){I.setScissorTest(Le=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(S=!0,F=!0,W=!0){let q=0;if(S){let z=!1;if(L!==null){const pe=L.texture.format;z=pe===Xu||pe===Wu||pe===ku}if(z){const pe=L.texture.type,be=pe===jn||pe===Ji||pe===Is||pe===Qi||pe===Hu||pe===Vu,Ae=le.getClearColor(),Re=le.getClearAlpha(),Ie=Ae.r,Ne=Ae.g,Pe=Ae.b;be?(h[0]=Ie,h[1]=Ne,h[2]=Pe,h[3]=Re,P.clearBufferuiv(P.COLOR,0,h)):(_[0]=Ie,_[1]=Ne,_[2]=Pe,_[3]=Re,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}F&&(q|=P.DEPTH_BUFFER_BIT),W&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),re.dispose(),B.dispose(),fe.dispose(),x.dispose(),O.dispose(),ze.dispose(),De.dispose(),X.dispose(),D.dispose(),D.removeEventListener("sessionstart",nn),D.removeEventListener("sessionend",rn),ii.stop()};function Te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=K.autoReset,F=Se.enabled,W=Se.autoUpdate,q=Se.needsUpdate,z=Se.type;Xe(),K.autoReset=S,Se.enabled=F,Se.autoUpdate=W,Se.needsUpdate=q,Se.type=z}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function me(S){const F=S.target;F.removeEventListener("dispose",me),Fe(F)}function Fe(S){Ke(S),B.remove(S)}function Ke(S){const F=B.get(S).programs;F!==void 0&&(F.forEach(function(W){X.releaseProgram(W)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,q,z,pe){F===null&&(F=ae);const be=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Td(S,F,W,q,z);I.setMaterial(q,be);let Re=W.index,Ie=1;if(q.wireframe===!0){if(Re=R.getWireframeAttribute(W),Re===void 0)return;Ie=2}const Ne=W.drawRange,Pe=W.attributes.position;let $e=Ne.start*Ie,rt=(Ne.start+Ne.count)*Ie;pe!==null&&($e=Math.max($e,pe.start*Ie),rt=Math.min(rt,(pe.start+pe.count)*Ie)),Re!==null?($e=Math.max($e,0),rt=Math.min(rt,Re.count)):Pe!=null&&($e=Math.max($e,0),rt=Math.min(rt,Pe.count));const st=rt-$e;if(st<0||st===1/0)return;ze.setup(z,q,Ae,W,Re);let It,Je=Oe;if(Re!==null&&(It=g.get(Re),Je=Ue,Je.setIndex(It)),z.isMesh)q.wireframe===!0?(I.setLineWidth(q.wireframeLinewidth*de()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(z.isLine){let Ce=q.linewidth;Ce===void 0&&(Ce=1),I.setLineWidth(Ce*de()),z.isLineSegments?Je.setMode(P.LINES):z.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else z.isPoints?Je.setMode(P.POINTS):z.isSprite&&Je.setMode(P.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?Je.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):Je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Je.renderInstances($e,st,z.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Ce);Je.renderInstances($e,st,Et)}else Je.render($e,st)};function ot(S,F,W){S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,qr(S,F,W),S.side=$n,S.needsUpdate=!0,qr(S,F,W),S.side=Tn):qr(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),m=re.get(W),m.init(F),b.push(m),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const q=new Set;return S.traverse(function(z){const pe=z.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const Ae=pe[be];ot(Ae,W,z),q.add(Ae)}else ot(pe,W,z),q.add(pe)}),b.pop(),m=null,q},this.compileAsync=function(S,F,W=null){const q=this.compile(S,F,W);return new Promise(z=>{function pe(){if(q.forEach(function(be){B.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){z(S);return}setTimeout(pe,10)}E.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let dt=null;function Qe(S){dt&&dt(S)}function nn(){ii.stop()}function rn(){ii.start()}const ii=new af;ii.setAnimationLoop(Qe),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(S){dt=S,D.setAnimationLoop(S),S===null?ii.stop():ii.start()},D.addEventListener("sessionstart",nn),D.addEventListener("sessionend",rn),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(F),F=D.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,F,L),m=re.get(S,b.length),m.init(F),b.push(m),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ke.setFromProjectionMatrix(ge),he=this.localClippingEnabled,ee=ce.init(this.clippingPlanes,he),v=ue.get(S,p.length),v.init(),p.push(v),D.enabled===!0&&D.isPresenting===!0){const pe=M.xr.getDepthSensingMesh();pe!==null&&fo(pe,F,-1/0,M.sortObjects)}fo(S,F,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,xe),ne=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,ne&&le.addToRenderList(v,S),this.info.render.frame++,ee===!0&&ce.beginShadows();const W=m.state.shadowsArray;Se.render(W,S,F),ee===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,z=v.transmissive;if(m.setupLights(),F.isArrayCamera){const pe=F.cameras;if(z.length>0)for(let be=0,Ae=pe.length;be<Ae;be++){const Re=pe[be];sl(q,z,S,Re)}ne&&le.render(S);for(let be=0,Ae=pe.length;be<Ae;be++){const Re=pe[be];rl(v,S,Re,Re.viewport)}}else z.length>0&&sl(q,z,S,F),ne&&le.render(S),rl(v,S,F);L!==null&&(J.updateMultisampleRenderTarget(L),J.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(M,S,F),ze.resetDefaultState(),H=-1,T=null,b.pop(),b.length>0?(m=b[b.length-1],ee===!0&&ce.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function fo(S,F,W,q){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ke.intersectsSprite(S)){q&&N.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);const be=O.update(S),Ae=S.material;Ae.visible&&v.push(S,be,Ae,W,N.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ke.intersectsObject(S))){const be=O.update(S),Ae=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),N.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),N.copy(be.boundingSphere.center)),N.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(Ae)){const Re=be.groups;for(let Ie=0,Ne=Re.length;Ie<Ne;Ie++){const Pe=Re[Ie],$e=Ae[Pe.materialIndex];$e&&$e.visible&&v.push(S,be,$e,W,N.z,Pe)}}else Ae.visible&&v.push(S,be,Ae,W,N.z,null)}}const pe=S.children;for(let be=0,Ae=pe.length;be<Ae;be++)fo(pe[be],F,W,q)}function rl(S,F,W,q){const z=S.opaque,pe=S.transmissive,be=S.transparent;m.setupLightsView(W),ee===!0&&ce.setGlobalState(M.clippingPlanes,W),q&&I.viewport(y.copy(q)),z.length>0&&Xr(z,F,W),pe.length>0&&Xr(pe,F,W),be.length>0&&Xr(be,F,W),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function sl(S,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Zn(1,1,{generateMipmaps:!0,type:E.has("EXT_color_buffer_half_float")||E.has("EXT_color_buffer_float")?Br:jn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const pe=m.state.transmissionRenderTarget[q.id],be=q.viewport||y;pe.setSize(be.z,be.w);const Ae=M.getRenderTarget();M.setRenderTarget(pe),M.getClearColor(Y),se=M.getClearAlpha(),se<1&&M.setClearColor(16777215,.5),ne?le.render(W):M.clear();const Re=M.toneMapping;M.toneMapping=qn;const Ie=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),ee===!0&&ce.setGlobalState(M.clippingPlanes,q),Xr(S,W,q),J.updateMultisampleRenderTarget(pe),J.updateRenderTargetMipmap(pe),E.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Pe=0,$e=F.length;Pe<$e;Pe++){const rt=F[Pe],st=rt.object,It=rt.geometry,Je=rt.material,Ce=rt.group;if(Je.side===Tn&&st.layers.test(q.layers)){const Et=Je.side;Je.side=Lt,Je.needsUpdate=!0,ol(st,W,q,It,Je,Ce),Je.side=Et,Je.needsUpdate=!0,Ne=!0}}Ne===!0&&(J.updateMultisampleRenderTarget(pe),J.updateRenderTargetMipmap(pe))}M.setRenderTarget(Ae),M.setClearColor(Y,se),Ie!==void 0&&(q.viewport=Ie),M.toneMapping=Re}function Xr(S,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let z=0,pe=S.length;z<pe;z++){const be=S[z],Ae=be.object,Re=be.geometry,Ie=q===null?be.material:q,Ne=be.group;Ae.layers.test(W.layers)&&ol(Ae,F,W,Re,Ie,Ne)}}function ol(S,F,W,q,z,pe){S.onBeforeRender(M,F,W,q,z,pe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(M,F,W,q,S,pe),z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1?(z.side=Lt,z.needsUpdate=!0,M.renderBufferDirect(W,F,q,z,S,pe),z.side=$n,z.needsUpdate=!0,M.renderBufferDirect(W,F,q,z,S,pe),z.side=Tn):M.renderBufferDirect(W,F,q,z,S,pe),S.onAfterRender(M,F,W,q,z,pe)}function qr(S,F,W){F.isScene!==!0&&(F=ae);const q=B.get(S),z=m.state.lights,pe=m.state.shadowsArray,be=z.state.version,Ae=X.getParameters(S,z.state,pe,F,W),Re=X.getProgramCacheKey(Ae);let Ie=q.programs;q.environment=S.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(S.isMeshStandardMaterial?x:fe).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",me),Ie=new Map,q.programs=Ie);let Ne=Ie.get(Re);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===be)return ll(S,Ae),Ne}else Ae.uniforms=X.getUniforms(S),S.onBuild(W,Ae,M),S.onBeforeCompile(Ae,M),Ne=X.acquireProgram(Ae,Re),Ie.set(Re,Ne),q.uniforms=Ae.uniforms;const Pe=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),ll(S,Ae),q.needsLights=Ad(S),q.lightsStateVersion=be,q.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function al(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Es.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function ll(S,F){const W=B.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Td(S,F,W,q,z){F.isScene!==!0&&(F=ae),J.resetTextureUnits();const pe=F.fog,be=q.isMeshStandardMaterial?F.environment:null,Ae=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qn,Re=(q.isMeshStandardMaterial?x:fe).get(q.envMap||be),Ie=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let st=qn;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(st=M.toneMapping);const It=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Je=It!==void 0?It.length:0,Ce=B.get(q),Et=m.state.lights;if(ee===!0&&(he===!0||S!==T)){const Bt=S===T&&q.id===H;ce.setState(q,S,Bt)}let et=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Et.state.version||Ce.outputColorSpace!==Ae||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Re||q.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ce.numPlanes||Ce.numIntersection!==ce.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Ne||Ce.morphTargets!==Pe||Ce.morphNormals!==$e||Ce.morphColors!==rt||Ce.toneMapping!==st||Ce.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ce.__version=q.version);let mn=Ce.currentProgram;et===!0&&(mn=qr(q,F,z));let Kr=!1,ri=!1,ho=!1;const ht=mn.getUniforms(),Un=Ce.uniforms;if(I.useProgram(mn.program)&&(Kr=!0,ri=!0,ho=!0),q.id!==H&&(H=q.id,ri=!0),Kr||T!==S){ht.setValue(P,"projectionMatrix",S.projectionMatrix),ht.setValue(P,"viewMatrix",S.matrixWorldInverse);const Bt=ht.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,N.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,ri=!0,ho=!0)}if(z.isSkinnedMesh){ht.setOptional(P,z,"bindMatrix"),ht.setOptional(P,z,"bindMatrixInverse");const Bt=z.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ht.setValue(P,"boneTexture",Bt.boneTexture,J))}z.isBatchedMesh&&(ht.setOptional(P,z,"batchingTexture"),ht.setValue(P,"batchingTexture",z._matricesTexture,J),ht.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",z._colorsTexture,J));const po=W.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0)&&Ee.update(z,W,mn),(ri||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,ht.setValue(P,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Un.envMap.value=Re,Un.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(Un.envMapIntensity.value=F.environmentIntensity),ri&&(ht.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&bd(Un,ho),pe&&q.fog===!0&&k.refreshFogUniforms(Un,pe),k.refreshMaterialUniforms(Un,q,Z,j,m.state.transmissionRenderTarget[S.id]),Es.upload(P,al(Ce),Un,J)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Es.upload(P,al(Ce),Un,J),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(P,"center",z.center),ht.setValue(P,"modelViewMatrix",z.modelViewMatrix),ht.setValue(P,"normalMatrix",z.normalMatrix),ht.setValue(P,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Bt=q.uniformsGroups;for(let mo=0,wd=Bt.length;mo<wd;mo++){const cl=Bt[mo];De.update(cl,mn),De.bind(cl,mn)}}return mn}function bd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Ad(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,F,W){B.get(S.texture).__webglTexture=F,B.get(S.depthTexture).__webglTexture=W;const q=B.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||E.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const W=B.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,W=0){L=S,V=F,C=W;let q=!0,z=null,pe=!1,be=!1;if(S){const Re=B.get(S);Re.__useDefaultFramebuffer!==void 0?(I.bindFramebuffer(P.FRAMEBUFFER,null),q=!1):Re.__webglFramebuffer===void 0?J.setupRenderTarget(S):Re.__hasExternalTextures&&J.rebindTextures(S,B.get(S.texture).__webglTexture,B.get(S.depthTexture).__webglTexture);const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const Ne=B.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?z=Ne[F][W]:z=Ne[F],pe=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?z=B.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[W]:z=Ne,y.copy(S.viewport),U.copy(S.scissor),Q=S.scissorTest}else y.copy(Me).multiplyScalar(Z).floor(),U.copy(ye).multiplyScalar(Z).floor(),Q=Le;if(I.bindFramebuffer(P.FRAMEBUFFER,z)&&q&&I.drawBuffers(S,z),I.viewport(y),I.scissor(U),I.setScissorTest(Q),pe){const Re=B.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,W)}else if(be){const Re=B.get(S.texture),Ie=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,Ie)}H=-1},this.readRenderTargetPixels=function(S,F,W,q,z,pe,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){I.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Re=S.texture,Ie=Re.format,Ne=Re.type;if(!w.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-q&&W>=0&&W<=S.height-z&&P.readPixels(F,W,q,z,_e.convert(Ie),_e.convert(Ne),pe)}finally{const Re=L!==null?B.get(L).__webglFramebuffer:null;I.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,F,W,q,z,pe,be){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){I.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Re=S.texture,Ie=Re.format,Ne=Re.type;if(!w.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-q&&W>=0&&W<=S.height-z){const Pe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.bufferData(P.PIXEL_PACK_BUFFER,pe.byteLength,P.STREAM_READ),P.readPixels(F,W,q,z,_e.convert(Ie),_e.convert(Ne),0),P.flush();const $e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await kh(P,$e,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pe)}finally{P.deleteBuffer(Pe),P.deleteSync($e)}return pe}}finally{const Re=L!==null?B.get(L).__webglFramebuffer:null;I.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,F=null,W=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const q=Math.pow(2,-W),z=Math.floor(S.image.width*q),pe=Math.floor(S.image.height*q),be=F!==null?F.x:0,Ae=F!==null?F.y:0;J.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,be,Ae,z,pe),I.unbindTexture()},this.copyTextureToTexture=function(S,F,W=null,q=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],F=arguments[2],z=arguments[3]||0,W=null);let pe,be,Ae,Re,Ie,Ne;W!==null?(pe=W.max.x-W.min.x,be=W.max.y-W.min.y,Ae=W.min.x,Re=W.min.y):(pe=S.image.width,be=S.image.height,Ae=0,Re=0),q!==null?(Ie=q.x,Ne=q.y):(Ie=0,Ne=0);const Pe=_e.convert(F.format),$e=_e.convert(F.type);J.setTexture2D(F,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),st=P.getParameter(P.UNPACK_IMAGE_HEIGHT),It=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),Ce=P.getParameter(P.UNPACK_SKIP_IMAGES),Et=S.isCompressedTexture?S.mipmaps[z]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,Ie,Ne,pe,be,Pe,$e,Et.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,Ie,Ne,Et.width,Et.height,Pe,Et.data):P.texSubImage2D(P.TEXTURE_2D,z,Ie,Ne,Pe,$e,Et),P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce),z===0&&F.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(S,F,W=null,q=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,S=arguments[2],F=arguments[3],z=arguments[4]||0);let pe,be,Ae,Re,Ie,Ne,Pe,$e,rt;const st=S.isCompressedTexture?S.mipmaps[z]:S.image;W!==null?(pe=W.max.x-W.min.x,be=W.max.y-W.min.y,Ae=W.max.z-W.min.z,Re=W.min.x,Ie=W.min.y,Ne=W.min.z):(pe=st.width,be=st.height,Ae=st.depth,Re=0,Ie=0,Ne=0),q!==null?(Pe=q.x,$e=q.y,rt=q.z):(Pe=0,$e=0,rt=0);const It=_e.convert(F.format),Je=_e.convert(F.type);let Ce;if(F.isData3DTexture)J.setTexture3D(F,0),Ce=P.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)J.setTexture2DArray(F,0),Ce=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Et=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Kr=P.getParameter(P.UNPACK_SKIP_ROWS),ri=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,st.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ce,z,Pe,$e,rt,pe,be,Ae,It,Je,st.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ce,z,Pe,$e,rt,pe,be,Ae,It,st.data):P.texSubImage3D(Ce,z,Pe,$e,rt,pe,be,Ae,It,Je,st),P.pixelStorei(P.UNPACK_ROW_LENGTH,Et),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ri),z===0&&F.generateMipmaps&&P.generateMipmap(Ce),I.unbindTexture()},this.initRenderTarget=function(S){B.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),I.unbindTexture()},this.resetState=function(){V=0,C=0,L=null,I.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===La?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===qs?"display-p3":"srgb"}}class Zv extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jv extends Rt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Pt,u=Pt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qv extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class e0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Lc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Lc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);class t0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=Ko(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=n0.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=Ko()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:Ko())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Ko(){return(typeof performance>"u"?Date:performance).now()}function n0(){document.hidden===!1&&this.reset()}const i0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const r0=new lf(-1,1,1,-1,0,1);class s0 extends ei{constructor(){super(),this.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rn([0,2,0,0,2,0],2))}}const o0=new s0;class Na{constructor(e){this._mesh=new Zt(o0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,r0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class a0 extends cr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ys.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Na(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dc extends cr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class l0 extends cr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class c0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new qe);this._width=i.width,this._height=i.height,t=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Br}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new a0(i0),this.copyPass.material.blending=wn,this.clock=new e0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dc!==void 0&&(o instanceof Dc?i=!0:o instanceof l0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class u0 extends cr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const f0={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`};class d0 extends cr{constructor(e=64){super();const t=f0;this.uniforms=Ys.clone(t.uniforms),this.heightMap=this.generateHeightmap(e),this.uniforms.tDisp.value=this.heightMap,this.material=new zt({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Na(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=Ht.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=Ht.randFloat(-1,1),this.uniforms.seed_y.value=Ht.randFloat(-1,1),this.uniforms.distortion_x.value=Ht.randFloat(0,1),this.uniforms.distortion_y.value=Ht.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=Ht.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=Ht.randFloat(0,1),this.uniforms.distortion_y.value=Ht.randFloat(0,1),this.uniforms.seed_x.value=Ht.randFloat(-.3,.3),this.uniforms.seed_y.value=Ht.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=Ht.randInt(120,240)}generateHeightmap(e){const t=new Float32Array(e*e),i=e*e;for(let s=0;s<i;s++){const o=Ht.randFloat(0,1);t[s]=o}const r=new Jv(t,e,e,Gu,bn);return r.needsUpdate=!0,r}dispose(){this.material.dispose(),this.heightMap.dispose(),this.fsQuad.dispose()}}const h0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class p0 extends cr{constructor(){super();const e=h0;this.uniforms=Ys.clone(e.uniforms),this.material=new Qv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Na(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Du?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ou&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fa(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const it={},Ki=[],kt=()=>{},m0=()=>!1,Zs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oa=n=>n.startsWith("onUpdate:"),mt=Object.assign,za=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},g0=Object.prototype.hasOwnProperty,We=(n,e)=>g0.call(n,e),Be=Array.isArray,yr=n=>Js(n)==="[object Map]",_0=n=>Js(n)==="[object Set]",Ge=n=>typeof n=="function",_t=n=>typeof n=="string",Gr=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",mf=n=>(at(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),v0=Object.prototype.toString,Js=n=>v0.call(n),x0=n=>Js(n).slice(8,-1),S0=n=>Js(n)==="[object Object]",Ba=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Er=Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},M0=/-(\w)/g,pn=Qs(n=>n.replace(M0,(e,t)=>t?t.toUpperCase():"")),y0=/\B([A-Z])/g,ur=Qs(n=>n.replace(y0,"-$1").toLowerCase()),eo=Qs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yo=Qs(n=>n?`on${eo(n)}`:""),Jn=(n,e)=>!Object.is(n,e),$o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},gf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},E0=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Uc;const _f=()=>Uc||(Uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ha(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?w0(i):Ha(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||at(n))return n}const T0=/;(?![^(]*\))/g,b0=/:([^]+)/,A0=/\/\*[^]*?\*\//g;function w0(n){const e={};return n.replace(A0,"").split(T0).forEach(t=>{if(t){const i=t.split(b0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Va(n){let e="";if(_t(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Va(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const R0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",C0=Fa(R0);function vf(n){return!!n||n===""}/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class P0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function L0(n,e=Kt){e&&e.active&&e.effects.push(n)}function D0(){return Kt}let yi;class Ga{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,L0(this,r)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,ti();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed){if(t.computed.effect._dirtyLevel===2)return!0;if(U0(t.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),ni()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Kn,t=yi;try{return Kn=!0,yi=this,this._runnings++,Ic(this),this.fn()}finally{Nc(this),this._runnings--,yi=t,Kn=e}}stop(){this.active&&(Ic(this),Nc(this),this.onStop&&this.onStop(),this.active=!1)}}function U0(n){return n.value}function Ic(n){n._trackId++,n._depsLength=0}function Nc(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)xf(n.deps[e],n);n.deps.length=n._depsLength}}function xf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Kn=!0,ha=0;const Sf=[];function ti(){Sf.push(Kn),Kn=!1}function ni(){const n=Sf.pop();Kn=n===void 0?!0:n}function ka(){ha++}function Wa(){for(ha--;!ha&&pa.length;)pa.shift()()}function Mf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&xf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const pa=[];function yf(n,e,t){ka();for(const i of n.keys()){if(!n.computed&&i.computed&&n.get(i)===i._trackId&&i._runnings>0){i._dirtyLevel=2;continue}let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i.computed&&i._dirtyLevel===2&&(i._shouldSchedule=!0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==3&&(i._shouldSchedule=!1,i.scheduler&&pa.push(i.scheduler)))}Wa()}const Ef=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},ma=new WeakMap,Ei=Symbol(""),ga=Symbol("");function Dt(n,e,t){if(Kn&&yi){let i=ma.get(n);i||ma.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Ef(()=>i.delete(t))),Mf(yi,r)}}function Cn(n,e,t,i,r,s){const o=ma.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Gr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?Ba(t)&&a.push(o.get("length")):(a.push(o.get(Ei)),yr(n)&&a.push(o.get(ga)));break;case"delete":Be(n)||(a.push(o.get(Ei)),yr(n)&&a.push(o.get(ga)));break;case"set":yr(n)&&a.push(o.get(Ei));break}ka();for(const l of a)l&&yf(l,5);Wa()}const I0=Fa("__proto__,__v_isRef,__isVue"),Tf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gr)),Fc=N0();function N0(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let s=0,o=this.length;s<o;s++)Dt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ti(),ka();const i=Ze(this)[e].apply(this,t);return Wa(),ni(),i}}),n}function F0(n){Gr(n)||(n=String(n));const e=Ze(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class bf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?$0:Cf:s?Rf:wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){if(o&&We(Fc,t))return Reflect.get(Fc,t,i);if(t==="hasOwnProperty")return F0}const a=Reflect.get(e,t,i);return(Gr(t)?Tf.has(t):I0(t))||(r||Dt(e,"get",t),s)?a:Ut(a)?o&&Ba(t)?a:a.value:at(a)?r?Lf(a):no(a):a}}class Af extends bf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Lr(s);if(!Hs(i)&&!Lr(i)&&(s=Ze(s),i=Ze(i)),!Be(e)&&Ut(s)&&!Ut(i))return l?!1:(s.value=i,!0)}const o=Be(e)&&Ba(t)?Number(t)<e.length:We(e,t),a=Reflect.set(e,t,i,r);return e===Ze(r)&&(o?Jn(i,s)&&Cn(e,"set",t,i):Cn(e,"add",t,i)),a}deleteProperty(e,t){const i=We(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Cn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Gr(t)||!Tf.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",Be(e)?"length":Ei),Reflect.ownKeys(e)}}class O0 extends bf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const z0=new Af,B0=new O0,H0=new Af(!0);const Xa=n=>n,to=n=>Reflect.getPrototypeOf(n);function _s(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ze(n),s=Ze(e);t||(Jn(e,s)&&Dt(r,"get",e),Dt(r,"get",s));const{has:o}=to(r),a=i?Xa:t?Ya:Dr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function vs(n,e=!1){const t=this.__v_raw,i=Ze(t),r=Ze(n);return e||(Jn(n,r)&&Dt(i,"has",n),Dt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function xs(n,e=!1){return n=n.__v_raw,!e&&Dt(Ze(n),"iterate",Ei),Reflect.get(n,"size",n)}function Oc(n){n=Ze(n);const e=Ze(this);return to(e).has.call(e,n)||(e.add(n),Cn(e,"add",n,n)),this}function zc(n,e){e=Ze(e);const t=Ze(this),{has:i,get:r}=to(t);let s=i.call(t,n);s||(n=Ze(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Jn(e,o)&&Cn(t,"set",n,e):Cn(t,"add",n,e),this}function Bc(n){const e=Ze(this),{has:t,get:i}=to(e);let r=t.call(e,n);r||(n=Ze(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Cn(e,"delete",n,void 0),s}function Hc(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&Cn(n,"clear",void 0,void 0),t}function Ss(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ze(o),l=e?Xa:n?Ya:Dr;return!n&&Dt(a,"iterate",Ei),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ms(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=yr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Xa:e?Ya:Dr;return!e&&Dt(s,"iterate",l?ga:Ei),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Hn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function V0(){const n={get(s){return _s(this,s)},get size(){return xs(this)},has:vs,add:Oc,set:zc,delete:Bc,clear:Hc,forEach:Ss(!1,!1)},e={get(s){return _s(this,s,!1,!0)},get size(){return xs(this)},has:vs,add:Oc,set:zc,delete:Bc,clear:Hc,forEach:Ss(!1,!0)},t={get(s){return _s(this,s,!0)},get size(){return xs(this,!0)},has(s){return vs.call(this,s,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:Ss(!0,!1)},i={get(s){return _s(this,s,!0,!0)},get size(){return xs(this,!0)},has(s){return vs.call(this,s,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:Ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ms(s,!1,!1),t[s]=Ms(s,!0,!1),e[s]=Ms(s,!1,!0),i[s]=Ms(s,!0,!0)}),[n,t,e,i]}const[G0,k0,W0,X0]=V0();function qa(n,e){const t=e?n?X0:W0:n?k0:G0;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const q0={get:qa(!1,!1)},K0={get:qa(!1,!0)},Y0={get:qa(!0,!1)};const wf=new WeakMap,Rf=new WeakMap,Cf=new WeakMap,$0=new WeakMap;function j0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z0(n){return n.__v_skip||!Object.isExtensible(n)?0:j0(x0(n))}function no(n){return Lr(n)?n:Ka(n,!1,z0,q0,wf)}function Pf(n){return Ka(n,!1,H0,K0,Rf)}function Lf(n){return Ka(n,!0,B0,Y0,Cf)}function Ka(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Z0(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Tr(n){return Lr(n)?Tr(n.__v_raw):!!(n&&n.__v_isReactive)}function Lr(n){return!!(n&&n.__v_isReadonly)}function Hs(n){return!!(n&&n.__v_isShallow)}function Df(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function J0(n){return Object.isExtensible(n)&&gf(n,"__v_skip",!0),n}const Dr=n=>at(n)?no(n):n,Ya=n=>at(n)?Lf(n):n;class Uf{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ga(()=>e(this._value),()=>Ts(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return(!e._cacheable||e.effect.dirty)&&Jn(e._value,e._value=e.effect.run())&&Ts(e,5),If(e),e.effect._dirtyLevel>=2&&Ts(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Q0(n,e,t=!1){let i,r;const s=Ge(n);return s?(i=n,r=kt):(i=n.get,r=n.set),new Uf(i,r,s||!r,t)}function If(n){var e;Kn&&yi&&(n=Ze(n),Mf(yi,(e=n.dep)!=null?e:n.dep=Ef(()=>n.dep=void 0,n instanceof Uf?n:void 0)))}function Ts(n,e=5,t,i){n=Ze(n);const r=n.dep;r&&yf(r,e)}function Ut(n){return!!(n&&n.__v_isRef===!0)}function ex(n){return Nf(n,!1)}function tx(n){return Nf(n,!0)}function Nf(n,e){return Ut(n)?n:new nx(n,e)}class nx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:Dr(e)}get value(){return If(this),this._value}set value(e){const t=this.__v_isShallow||Hs(e)||Lr(e);e=t?e:Ze(e),Jn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:Dr(e),Ts(this,5))}}function Yi(n){return Ut(n)?n.value:n}const ix={get:(n,e,t)=>Yi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ff(n){return Tr(n)?n:new Proxy(n,ix)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yn(n,e,t,i){try{return i?n(...i):n()}catch(r){io(r,e,t)}}function en(n,e,t,i){if(Ge(n)){const r=Yn(n,e,t,i);return r&&mf(r)&&r.catch(s=>{io(s,e,t)}),r}if(Be(n)){const r=[];for(let s=0;s<n.length;s++)r.push(en(n[s],e,t,i));return r}}function io(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ti(),Yn(l,null,10,[n,o,a]),ni();return}}rx(n,t,r,i)}function rx(n,e,t,i=!0){console.error(n)}let Ur=!1,_a=!1;const St=[];let fn=0;const $i=[];let Gn=null,vi=0;const Of=Promise.resolve();let $a=null;function zf(n){const e=$a||Of;return n?e.then(this?n.bind(this):n):e}function sx(n){let e=fn+1,t=St.length;for(;e<t;){const i=e+t>>>1,r=St[i],s=Ir(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function ja(n){(!St.length||!St.includes(n,Ur&&n.allowRecurse?fn+1:fn))&&(n.id==null?St.push(n):St.splice(sx(n.id),0,n),Bf())}function Bf(){!Ur&&!_a&&(_a=!0,$a=Of.then(Vf))}function ox(n){const e=St.indexOf(n);e>fn&&St.splice(e,1)}function ax(n){Be(n)?$i.push(...n):(!Gn||!Gn.includes(n,n.allowRecurse?vi+1:vi))&&$i.push(n),Bf()}function Vc(n,e,t=Ur?fn+1:0){for(;t<St.length;t++){const i=St[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;St.splice(t,1),t--,i()}}}function Hf(n){if($i.length){const e=[...new Set($i)].sort((t,i)=>Ir(t)-Ir(i));if($i.length=0,Gn){Gn.push(...e);return}for(Gn=e,vi=0;vi<Gn.length;vi++){const t=Gn[vi];t.active!==!1&&t()}Gn=null,vi=0}}const Ir=n=>n.id==null?1/0:n.id,lx=(n,e)=>{const t=Ir(n)-Ir(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Vf(n){_a=!1,Ur=!0,St.sort(lx);try{for(fn=0;fn<St.length;fn++){const e=St[fn];e&&e.active!==!1&&Yn(e,null,14)}}finally{fn=0,St.length=0,Hf(),Ur=!1,$a=null,(St.length||$i.length)&&Vf()}}function cx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||it;d&&(r=t.map(h=>_t(h)?h.trim():h)),f&&(r=t.map(E0))}let a,l=i[a=Yo(e)]||i[a=Yo(pn(e))];!l&&s&&(l=i[a=Yo(ur(e))]),l&&en(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,en(c,n,6,r)}}function Gf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=Gf(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):mt(o,s),at(n)&&i.set(n,o),o)}function ro(n,e){return!n||!Zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,ur(e))||We(n,e))}let Jt=null,so=null;function Vs(n){const e=Jt;return Jt=n,so=n&&n.type.__scopeId||null,e}function ux(n){so=n}function fx(){so=null}function bs(n,e=Jt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&eu(-1);const s=Vs(e);let o;try{o=n(...r)}finally{Vs(s),i._d&&eu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:v}=n,m=Vs(n);let p,b;try{if(t.shapeFlag&4){const A=r||i,V=A;p=cn(c.call(V,A,u,f,h,d,_)),b=a}else{const A=e;p=cn(A.length>1?A(f,{attrs:a,slots:o,emit:l}):A(f,null)),b=e.props?a:dx(a)}}catch(A){wr.length=0,io(A,n,1),p=yt(Nr)}let M=p;if(b&&v!==!1){const A=Object.keys(b),{shapeFlag:V}=M;A.length&&V&7&&(s&&A.some(Oa)&&(b=hx(b,s)),M=nr(M,b,!1,!0))}return t.dirs&&(M=nr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),p=M,Vs(m),p}const dx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zs(t))&&((e||(e={}))[t]=n[t]);return e},hx=(n,e)=>{const t={};for(const i in n)(!Oa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function px(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ro(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gc(i,o,c):!0:!!o;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ro(t,s))return!0}return!1}function mx({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const kf="components";function kc(n,e){return _x(kf,n,!0,e)||n}const gx=Symbol.for("v-ndc");function _x(n,e,t=!0,i=!1){const r=Jt||Mt;if(r){const s=r.type;if(n===kf){const a=fS(s,!1);if(a&&(a===e||a===pn(e)||a===eo(pn(e))))return s}const o=Wc(r[n]||s[n],e)||Wc(r.appContext[n],e);return!o&&i?s:o}}function Wc(n,e){return n&&(n[e]||n[pn(e)]||n[eo(pn(e))])}const vx=n=>n.__isSuspense;function xx(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):ax(n)}function oo(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ti();const a=kr(t),l=en(e,t,n,o);return a(),ni(),l});return i?r.unshift(s):r.push(s),s}}const Dn=n=>(e,t=Mt)=>{(!uo||n==="sp")&&oo(n,(...i)=>e(...i),t)},Sx=Dn("bm"),Mx=Dn("m"),yx=Dn("bu"),Ex=Dn("u"),Tx=Dn("bum"),Wf=Dn("um"),bx=Dn("sp"),Ax=Dn("rtg"),wx=Dn("rtc");function Rx(n,e=Mt){oo("ec",n,e)}function fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ti(),en(l,t,8,[n.el,a,n,e]),ni())}}/*! #__NO_SIDE_EFFECTS__ */function Xf(n,e){return Ge(n)?mt({name:n.name},e,{setup:n}):n}const As=n=>!!n.type.__asyncLoader,va=n=>n?ud(n)?tl(n):va(n.parent):null,br=mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>va(n.parent),$root:n=>va(n.root),$emit:n=>n.emit,$options:n=>Za(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,ja(n.update)}),$nextTick:n=>n.n||(n.n=zf.bind(n.proxy)),$watch:n=>Yx.bind(n)}),Zo=(n,e)=>n!==it&&!n.__isScriptSetup&&We(n,e),Cx={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zo(i,e))return o[e]=1,i[e];if(r!==it&&We(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return o[e]=3,s[e];if(t!==it&&We(t,e))return o[e]=4,t[e];xa&&(o[e]=0)}}const u=br[e];let f,d;if(u)return e==="$attrs"&&Dt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==it&&We(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,We(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Zo(r,e)?(r[e]=t,!0):i!==it&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==it&&We(n,o)||Zo(e,o)||(a=s[0])&&We(a,o)||We(i,o)||We(br,o)||We(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Xc(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let xa=!0;function Px(n){const e=Za(n),t=n.proxy,i=n.ctx;xa=!1,e.beforeCreate&&qc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:A,render:V,renderTracked:C,renderTriggered:L,errorCaptured:H,serverPrefetch:T,expose:y,inheritAttrs:U,components:Q,directives:Y,filters:se}=e;if(c&&Lx(c,i,null),o)for(const Z in o){const G=o[Z];Ge(G)&&(i[Z]=G.bind(t))}if(r){const Z=r.call(t,t);at(Z)&&(n.data=no(Z))}if(xa=!0,s)for(const Z in s){const G=s[Z],xe=Ge(G)?G.bind(t,t):Ge(G.get)?G.get.bind(t,t):kt,Me=!Ge(G)&&Ge(G.set)?G.set.bind(t):kt,ye=jt({get:xe,set:Me});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Le=>ye.value=Le})}if(a)for(const Z in a)qf(a[Z],i,t,Z);if(l){const Z=Ge(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(G=>{ws(G,Z[G])})}u&&qc(u,n,"c");function j(Z,G){Be(G)?G.forEach(xe=>Z(xe.bind(t))):G&&Z(G.bind(t))}if(j(Sx,f),j(Mx,d),j(yx,h),j(Ex,_),j($x,v),j(jx,m),j(Rx,H),j(wx,C),j(Ax,L),j(Tx,b),j(Wf,A),j(bx,T),Be(y))if(y.length){const Z=n.exposed||(n.exposed={});y.forEach(G=>{Object.defineProperty(Z,G,{get:()=>t[G],set:xe=>t[G]=xe})})}else n.exposed||(n.exposed={});V&&n.render===kt&&(n.render=V),U!=null&&(n.inheritAttrs=U),Q&&(n.components=Q),Y&&(n.directives=Y)}function Lx(n,e,t=kt){Be(n)&&(n=Sa(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=Pn(r.from||i,r.default,!0):s=Pn(r.from||i):s=Pn(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function qc(n,e,t){en(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qf(n,e,t,i){const r=i.includes(".")?sd(t,i):()=>t[i];if(_t(n)){const s=e[n];Ge(s)&&Rs(r,s)}else if(Ge(n))Rs(r,n.bind(t));else if(at(n))if(Be(n))n.forEach(s=>qf(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Rs(r,s,n)}}function Za(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Gs(l,c,o,!0)),Gs(l,e,o)),at(e)&&s.set(e,l),l}function Gs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Gs(n,s,t,!0),r&&r.forEach(o=>Gs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dx[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Dx={data:Kc,props:Yc,emits:Yc,methods:vr,computed:vr,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:vr,directives:vr,watch:Ix,provide:Kc,inject:Ux};function Kc(n,e){return e?n?function(){return mt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Ux(n,e){return vr(Sa(n),Sa(e))}function Sa(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function vr(n,e){return n?mt(Object.create(null),n,e):e}function Yc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:mt(Object.create(null),Xc(n),Xc(e??{})):e}function Ix(n,e){if(!n)return e;if(!e)return n;const t=mt(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Kf(){return{app:null,config:{isNativeTag:m0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nx=0;function Fx(n,e){return function(i,r=null){Ge(i)||(i=mt({},i)),r!=null&&!at(r)&&(r=null);const s=Kf(),o=new WeakSet;let a=!1;const l=s.app={_uid:Nx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hS,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ge(c.install)?(o.add(c),c.install(l,...u)):Ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=yt(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,tl(d.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Ar;Ar=l;try{return c()}finally{Ar=u}}};return l}}let Ar=null;function ws(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function Pn(n,e,t=!1){const i=Mt||Jt;if(i||Ar){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ar._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Yf={},$f=()=>Object.create(Yf),jf=n=>Object.getPrototypeOf(n)===Yf;function Ox(n,e,t,i=!1){const r={},s=$f();n.propsDefaults=Object.create(null),Zf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Pf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function zx(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ro(n.emitsOptions,d))continue;const h=e[d];if(l)if(We(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const _=pn(d);r[_]=Ma(l,a,_,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Zf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!We(e,f)&&((u=ur(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ma(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!We(e,f))&&(delete s[f],c=!0)}c&&Cn(n.attrs,"set","")}function Zf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;r&&We(r,u=pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ro(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ma(r,l,f,c[f],n,!We(c,f))}}return o}function Ma(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=We(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=kr(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ur(t))&&(i=!0))}return i}function Jf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[d,h]=Jf(f,e,!0);mt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,Ki),Ki;if(Be(s))for(let u=0;u<s.length;u++){const f=pn(s[u]);$c(f)&&(o[f]=it)}else if(s)for(const u in s){const f=pn(u);if($c(f)){const d=s[u],h=o[f]=Be(d)||Ge(d)?{type:d}:mt({},d);if(h){const _=Jc(Boolean,h.type),v=Jc(String,h.type);h[0]=_>-1,h[1]=v<0||_<v,(_>-1||We(h,"default"))&&a.push(f)}}}const c=[o,a];return at(n)&&i.set(n,c),c}function $c(n){return n[0]!=="$"&&!Er(n)}function jc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Zc(n,e){return jc(n)===jc(e)}function Jc(n,e){return Be(e)?e.findIndex(t=>Zc(t,n)):Ge(e)&&Zc(e,n)?0:-1}const Qf=n=>n[0]==="_"||n==="$stable",Ja=n=>Be(n)?n.map(cn):[cn(n)],Bx=(n,e,t)=>{if(e._n)return e;const i=bs((...r)=>Ja(e(...r)),t);return i._c=!1,i},ed=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Qf(r))continue;const s=n[r];if(Ge(s))e[r]=Bx(r,s,i);else if(s!=null){const o=Ja(s);e[r]=()=>o}}},td=(n,e)=>{const t=Ja(e);n.slots.default=()=>t},Hx=(n,e)=>{const t=n.slots=$f();if(n.vnode.shapeFlag&32){const i=e._;i?(mt(t,e),gf(t,"_",i,!0)):ed(e,t)}else e&&td(n,e)},Vx=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(mt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,ed(e,r)),o=e}else e&&(td(n,e),o={default:1});if(s)for(const a in r)!Qf(a)&&o[a]==null&&delete r[a]};function ya(n,e,t,i,r=!1){if(Be(n)){n.forEach((d,h)=>ya(d,e&&(Be(e)?e[h]:e),t,i,r));return}if(As(i)&&!r)return;const s=i.shapeFlag&4?tl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,We(f,c)&&(f[c]=null)):Ut(c)&&(c.value=null)),Ge(l))Yn(l,a,12,[o,u]);else{const d=_t(l),h=Ut(l);if(d||h){const _=()=>{if(n.f){const v=d?We(f,l)?f[l]:u[l]:l.value;r?Be(v)&&za(v,s):Be(v)?v.includes(s)||v.push(s):d?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,We(f,l)&&(f[l]=o)):h&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Ct(_,t)):_()}}}const Ct=xx;function Gx(n){return kx(n)}function kx(n,e){const t=_f();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=kt,insertStaticContent:_}=n,v=(E,w,I,K=null,B=null,J=null,fe=void 0,x=null,g=!!w.dynamicChildren)=>{if(E===w)return;E&&!mr(E,w)&&(K=N(E),Le(E,B,J,!0),E=null),w.patchFlag===-2&&(g=!1,w.dynamicChildren=null);const{type:R,ref:O,shapeFlag:X}=w;switch(R){case ao:m(E,w,I,K);break;case Nr:p(E,w,I,K);break;case Cs:E==null&&b(w,I,K,fe);break;case ln:Q(E,w,I,K,B,J,fe,x,g);break;default:X&1?V(E,w,I,K,B,J,fe,x,g):X&6?Y(E,w,I,K,B,J,fe,x,g):(X&64||X&128)&&R.process(E,w,I,K,B,J,fe,x,g,de)}O!=null&&B&&ya(O,E&&E.ref,J,w||E,!w)},m=(E,w,I,K)=>{if(E==null)i(w.el=a(w.children),I,K);else{const B=w.el=E.el;w.children!==E.children&&c(B,w.children)}},p=(E,w,I,K)=>{E==null?i(w.el=l(w.children||""),I,K):w.el=E.el},b=(E,w,I,K)=>{[E.el,E.anchor]=_(E.children,w,I,K,E.el,E.anchor)},M=({el:E,anchor:w},I,K)=>{let B;for(;E&&E!==w;)B=d(E),i(E,I,K),E=B;i(w,I,K)},A=({el:E,anchor:w})=>{let I;for(;E&&E!==w;)I=d(E),r(E),E=I;r(w)},V=(E,w,I,K,B,J,fe,x,g)=>{w.type==="svg"?fe="svg":w.type==="math"&&(fe="mathml"),E==null?C(w,I,K,B,J,fe,x,g):T(E,w,B,J,fe,x,g)},C=(E,w,I,K,B,J,fe,x)=>{let g,R;const{props:O,shapeFlag:X,transition:k,dirs:ue}=E;if(g=E.el=o(E.type,J,O&&O.is,O),X&8?u(g,E.children):X&16&&H(E.children,g,null,K,B,Jo(E,J),fe,x),ue&&fi(E,null,K,"created"),L(g,E,E.scopeId,fe,K),O){for(const ce in O)ce!=="value"&&!Er(ce)&&s(g,ce,null,O[ce],J,E.children,K,B,ge);"value"in O&&s(g,"value",null,O.value,J),(R=O.onVnodeBeforeMount)&&sn(R,K,E)}ue&&fi(E,null,K,"beforeMount");const re=Wx(B,k);re&&k.beforeEnter(g),i(g,w,I),((R=O&&O.onVnodeMounted)||re||ue)&&Ct(()=>{R&&sn(R,K,E),re&&k.enter(g),ue&&fi(E,null,K,"mounted")},B)},L=(E,w,I,K,B)=>{if(I&&h(E,I),K)for(let J=0;J<K.length;J++)h(E,K[J]);if(B){let J=B.subTree;if(w===J){const fe=B.vnode;L(E,fe,fe.scopeId,fe.slotScopeIds,B.parent)}}},H=(E,w,I,K,B,J,fe,x,g=0)=>{for(let R=g;R<E.length;R++){const O=E[R]=x?kn(E[R]):cn(E[R]);v(null,O,w,I,K,B,J,fe,x)}},T=(E,w,I,K,B,J,fe)=>{const x=w.el=E.el;let{patchFlag:g,dynamicChildren:R,dirs:O}=w;g|=E.patchFlag&16;const X=E.props||it,k=w.props||it;let ue;if(I&&di(I,!1),(ue=k.onVnodeBeforeUpdate)&&sn(ue,I,w,E),O&&fi(w,E,I,"beforeUpdate"),I&&di(I,!0),R?y(E.dynamicChildren,R,x,I,K,Jo(w,B),J):fe||G(E,w,x,null,I,K,Jo(w,B),J,!1),g>0){if(g&16)U(x,w,X,k,I,K,B);else if(g&2&&X.class!==k.class&&s(x,"class",null,k.class,B),g&4&&s(x,"style",X.style,k.style,B),g&8){const re=w.dynamicProps;for(let ce=0;ce<re.length;ce++){const Se=re[ce],le=X[Se],Ee=k[Se];(Ee!==le||Se==="value")&&s(x,Se,le,Ee,B,E.children,I,K,ge)}}g&1&&E.children!==w.children&&u(x,w.children)}else!fe&&R==null&&U(x,w,X,k,I,K,B);((ue=k.onVnodeUpdated)||O)&&Ct(()=>{ue&&sn(ue,I,w,E),O&&fi(w,E,I,"updated")},K)},y=(E,w,I,K,B,J,fe)=>{for(let x=0;x<w.length;x++){const g=E[x],R=w[x],O=g.el&&(g.type===ln||!mr(g,R)||g.shapeFlag&70)?f(g.el):I;v(g,R,O,null,K,B,J,fe,!0)}},U=(E,w,I,K,B,J,fe)=>{if(I!==K){if(I!==it)for(const x in I)!Er(x)&&!(x in K)&&s(E,x,I[x],null,fe,w.children,B,J,ge);for(const x in K){if(Er(x))continue;const g=K[x],R=I[x];g!==R&&x!=="value"&&s(E,x,R,g,fe,w.children,B,J,ge)}"value"in K&&s(E,"value",I.value,K.value,fe)}},Q=(E,w,I,K,B,J,fe,x,g)=>{const R=w.el=E?E.el:a(""),O=w.anchor=E?E.anchor:a("");let{patchFlag:X,dynamicChildren:k,slotScopeIds:ue}=w;ue&&(x=x?x.concat(ue):ue),E==null?(i(R,I,K),i(O,I,K),H(w.children||[],I,O,B,J,fe,x,g)):X>0&&X&64&&k&&E.dynamicChildren?(y(E.dynamicChildren,k,I,B,J,fe,x),(w.key!=null||B&&w===B.subTree)&&nd(E,w,!0)):G(E,w,I,O,B,J,fe,x,g)},Y=(E,w,I,K,B,J,fe,x,g)=>{w.slotScopeIds=x,E==null?w.shapeFlag&512?B.ctx.activate(w,I,K,fe,g):se(w,I,K,B,J,fe,g):ie(E,w,g)},se=(E,w,I,K,B,J,fe)=>{const x=E.component=oS(E,K,B);if(od(E)&&(x.ctx.renderer=de),aS(x),x.asyncDep){if(B&&B.registerDep(x,j,fe),!E.el){const g=x.subTree=yt(Nr);p(null,g,w,I)}}else j(x,E,w,I,B,J,fe)},ie=(E,w,I)=>{const K=w.component=E.component;if(px(E,w,I))if(K.asyncDep&&!K.asyncResolved){Z(K,w,I);return}else K.next=w,ox(K.update),K.effect.dirty=!0,K.update();else w.el=E.el,K.vnode=w},j=(E,w,I,K,B,J,fe)=>{const x=()=>{if(E.isMounted){let{next:O,bu:X,u:k,parent:ue,vnode:re}=E;{const Oe=id(E);if(Oe){O&&(O.el=re.el,Z(E,O,fe)),Oe.asyncDep.then(()=>{E.isUnmounted||x()});return}}let ce=O,Se;di(E,!1),O?(O.el=re.el,Z(E,O,fe)):O=re,X&&$o(X),(Se=O.props&&O.props.onVnodeBeforeUpdate)&&sn(Se,ue,O,re),di(E,!0);const le=jo(E),Ee=E.subTree;E.subTree=le,v(Ee,le,f(Ee.el),N(Ee),E,B,J),O.el=le.el,ce===null&&mx(E,le.el),k&&Ct(k,B),(Se=O.props&&O.props.onVnodeUpdated)&&Ct(()=>sn(Se,ue,O,re),B)}else{let O;const{el:X,props:k}=w,{bm:ue,m:re,parent:ce}=E,Se=As(w);if(di(E,!1),ue&&$o(ue),!Se&&(O=k&&k.onVnodeBeforeMount)&&sn(O,ce,w),di(E,!0),X&&we){const le=()=>{E.subTree=jo(E),we(X,E.subTree,E,B,null)};Se?w.type.__asyncLoader().then(()=>!E.isUnmounted&&le()):le()}else{const le=E.subTree=jo(E);v(null,le,I,K,E,B,J),w.el=le.el}if(re&&Ct(re,B),!Se&&(O=k&&k.onVnodeMounted)){const le=w;Ct(()=>sn(O,ce,le),B)}(w.shapeFlag&256||ce&&As(ce.vnode)&&ce.vnode.shapeFlag&256)&&E.a&&Ct(E.a,B),E.isMounted=!0,w=I=K=null}},g=E.effect=new Ga(x,kt,()=>ja(R),E.scope),R=E.update=()=>{g.dirty&&g.run()};R.id=E.uid,di(E,!0),R()},Z=(E,w,I)=>{w.component=E;const K=E.vnode.props;E.vnode=w,E.next=null,zx(E,w.props,K,I),Vx(E,w.children,I),ti(),Vc(E),ni()},G=(E,w,I,K,B,J,fe,x,g=!1)=>{const R=E&&E.children,O=E?E.shapeFlag:0,X=w.children,{patchFlag:k,shapeFlag:ue}=w;if(k>0){if(k&128){Me(R,X,I,K,B,J,fe,x,g);return}else if(k&256){xe(R,X,I,K,B,J,fe,x,g);return}}ue&8?(O&16&&ge(R,B,J),X!==R&&u(I,X)):O&16?ue&16?Me(R,X,I,K,B,J,fe,x,g):ge(R,B,J,!0):(O&8&&u(I,""),ue&16&&H(X,I,K,B,J,fe,x,g))},xe=(E,w,I,K,B,J,fe,x,g)=>{E=E||Ki,w=w||Ki;const R=E.length,O=w.length,X=Math.min(R,O);let k;for(k=0;k<X;k++){const ue=w[k]=g?kn(w[k]):cn(w[k]);v(E[k],ue,I,null,B,J,fe,x,g)}R>O?ge(E,B,J,!0,!1,X):H(w,I,K,B,J,fe,x,g,X)},Me=(E,w,I,K,B,J,fe,x,g)=>{let R=0;const O=w.length;let X=E.length-1,k=O-1;for(;R<=X&&R<=k;){const ue=E[R],re=w[R]=g?kn(w[R]):cn(w[R]);if(mr(ue,re))v(ue,re,I,null,B,J,fe,x,g);else break;R++}for(;R<=X&&R<=k;){const ue=E[X],re=w[k]=g?kn(w[k]):cn(w[k]);if(mr(ue,re))v(ue,re,I,null,B,J,fe,x,g);else break;X--,k--}if(R>X){if(R<=k){const ue=k+1,re=ue<O?w[ue].el:K;for(;R<=k;)v(null,w[R]=g?kn(w[R]):cn(w[R]),I,re,B,J,fe,x,g),R++}}else if(R>k)for(;R<=X;)Le(E[R],B,J,!0),R++;else{const ue=R,re=R,ce=new Map;for(R=re;R<=k;R++){const De=w[R]=g?kn(w[R]):cn(w[R]);De.key!=null&&ce.set(De.key,R)}let Se,le=0;const Ee=k-re+1;let Oe=!1,Ue=0;const _e=new Array(Ee);for(R=0;R<Ee;R++)_e[R]=0;for(R=ue;R<=X;R++){const De=E[R];if(le>=Ee){Le(De,B,J,!0);continue}let Xe;if(De.key!=null)Xe=ce.get(De.key);else for(Se=re;Se<=k;Se++)if(_e[Se-re]===0&&mr(De,w[Se])){Xe=Se;break}Xe===void 0?Le(De,B,J,!0):(_e[Xe-re]=R+1,Xe>=Ue?Ue=Xe:Oe=!0,v(De,w[Xe],I,null,B,J,fe,x,g),le++)}const ze=Oe?Xx(_e):Ki;for(Se=ze.length-1,R=Ee-1;R>=0;R--){const De=re+R,Xe=w[De],D=De+1<O?w[De+1].el:K;_e[R]===0?v(null,Xe,I,D,B,J,fe,x,g):Oe&&(Se<0||R!==ze[Se]?ye(Xe,I,D,2):Se--)}}},ye=(E,w,I,K,B=null)=>{const{el:J,type:fe,transition:x,children:g,shapeFlag:R}=E;if(R&6){ye(E.component.subTree,w,I,K);return}if(R&128){E.suspense.move(w,I,K);return}if(R&64){fe.move(E,w,I,de);return}if(fe===ln){i(J,w,I);for(let X=0;X<g.length;X++)ye(g[X],w,I,K);i(E.anchor,w,I);return}if(fe===Cs){M(E,w,I);return}if(K!==2&&R&1&&x)if(K===0)x.beforeEnter(J),i(J,w,I),Ct(()=>x.enter(J),B);else{const{leave:X,delayLeave:k,afterLeave:ue}=x,re=()=>i(J,w,I),ce=()=>{X(J,()=>{re(),ue&&ue()})};k?k(J,re,ce):ce()}else i(J,w,I)},Le=(E,w,I,K=!1,B=!1)=>{const{type:J,props:fe,ref:x,children:g,dynamicChildren:R,shapeFlag:O,patchFlag:X,dirs:k,memoIndex:ue}=E;if(x!=null&&ya(x,null,I,E,!0),ue!=null&&(w.renderCache[ue]=void 0),O&256){w.ctx.deactivate(E);return}const re=O&1&&k,ce=!As(E);let Se;if(ce&&(Se=fe&&fe.onVnodeBeforeUnmount)&&sn(Se,w,E),O&6)he(E.component,I,K);else{if(O&128){E.suspense.unmount(I,K);return}re&&fi(E,null,w,"beforeUnmount"),O&64?E.type.remove(E,w,I,B,de,K):R&&(J!==ln||X>0&&X&64)?ge(R,w,I,!1,!0):(J===ln&&X&384||!B&&O&16)&&ge(g,w,I),K&&ke(E)}(ce&&(Se=fe&&fe.onVnodeUnmounted)||re)&&Ct(()=>{Se&&sn(Se,w,E),re&&fi(E,null,w,"unmounted")},I)},ke=E=>{const{type:w,el:I,anchor:K,transition:B}=E;if(w===ln){ee(I,K);return}if(w===Cs){A(E);return}const J=()=>{r(I),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:fe,delayLeave:x}=B,g=()=>fe(I,J);x?x(E.el,J,g):g()}else J()},ee=(E,w)=>{let I;for(;E!==w;)I=d(E),r(E),E=I;r(w)},he=(E,w,I)=>{const{bum:K,scope:B,update:J,subTree:fe,um:x,m:g,a:R}=E;Qc(g),Qc(R),K&&$o(K),B.stop(),J&&(J.active=!1,Le(fe,E,w,I)),x&&Ct(x,w),Ct(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},ge=(E,w,I,K=!1,B=!1,J=0)=>{for(let fe=J;fe<E.length;fe++)Le(E[fe],w,I,K,B)},N=E=>E.shapeFlag&6?N(E.component.subTree):E.shapeFlag&128?E.suspense.next():d(E.anchor||E.el);let ae=!1;const ne=(E,w,I)=>{E==null?w._vnode&&Le(w._vnode,null,null,!0):v(w._vnode||null,E,w,null,null,null,I),ae||(ae=!0,Vc(),Hf(),ae=!1),w._vnode=E},de={p:v,um:Le,m:ye,r:ke,mt:se,mc:H,pc:G,pbc:y,n:N,o:n};let P,we;return{render:ne,hydrate:P,createApp:Fx(ne,P)}}function Jo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Wx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function nd(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=kn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&nd(o,a)),a.type===ao&&(a.el=o.el)}}function Xx(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function id(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:id(e)}function Qc(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const qx=Symbol.for("v-scx"),Kx=()=>Pn(qx),ys={};function Rs(n,e,t){return rd(n,e,t)}function rd(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=it){if(e&&s){const C=e;e=(...L)=>{C(...L),V()}}const l=Mt,c=C=>i===!0?C:xi(C,i===!1?1:void 0);let u,f=!1,d=!1;if(Ut(n)?(u=()=>n.value,f=Hs(n)):Tr(n)?(u=()=>c(n),f=!0):Be(n)?(d=!0,f=n.some(C=>Tr(C)||Hs(C)),u=()=>n.map(C=>{if(Ut(C))return C.value;if(Tr(C))return c(C);if(Ge(C))return Yn(C,l,2)})):Ge(n)?e?u=()=>Yn(n,l,2):u=()=>(h&&h(),en(n,l,3,[_])):u=kt,e&&i){const C=u;u=()=>xi(C())}let h,_=C=>{h=M.onStop=()=>{Yn(C,l,4),h=M.onStop=void 0}},v;if(uo)if(_=kt,e?t&&en(e,l,3,[u(),d?[]:void 0,_]):u(),r==="sync"){const C=Kx();v=C.__watcherHandles||(C.__watcherHandles=[])}else return kt;let m=d?new Array(n.length).fill(ys):ys;const p=()=>{if(!(!M.active||!M.dirty))if(e){const C=M.run();(i||f||(d?C.some((L,H)=>Jn(L,m[H])):Jn(C,m)))&&(h&&h(),en(e,l,3,[C,m===ys?void 0:d&&m[0]===ys?[]:m,_]),m=C)}else M.run()};p.allowRecurse=!!e;let b;r==="sync"?b=p:r==="post"?b=()=>Ct(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),b=()=>ja(p));const M=new Ga(u,kt,b),A=D0(),V=()=>{M.stop(),A&&za(A.effects,M)};return e?t?p():m=M.run():r==="post"?Ct(M.run.bind(M),l&&l.suspense):M.run(),v&&v.push(V),V}function Yx(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?sd(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=kr(this),a=rd(r,s.bind(i),t);return o(),a}function sd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function xi(n,e=1/0,t){if(e<=0||!at(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ut(n))xi(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)xi(n[i],e,t);else if(_0(n)||yr(n))n.forEach(i=>{xi(i,e,t)});else if(S0(n)){for(const i in n)xi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&xi(n[i],e,t)}return n}const od=n=>n.type.__isKeepAlive;function $x(n,e){ad(n,"a",e)}function jx(n,e){ad(n,"da",e)}function ad(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(oo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)od(r.parent.vnode)&&Zx(i,e,t,r),r=r.parent}}function Zx(n,e,t,i){const r=oo(e,n,i,!0);Wf(()=>{za(i[e],r)},t)}function ld(n,e){n.shapeFlag&6&&n.component?ld(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}const Jx=n=>n.__isTeleport,ln=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),Nr=Symbol.for("v-cmt"),Cs=Symbol.for("v-stc"),wr=[];let Qt=null;function lo(n=!1){wr.push(Qt=n?null:[])}function Qx(){wr.pop(),Qt=wr[wr.length-1]||null}let Fr=1;function eu(n){Fr+=n}function eS(n){return n.dynamicChildren=Fr>0?Qt||Ki:null,Qx(),Fr>0&&Qt&&Qt.push(n),n}function co(n,e,t,i,r,s){return eS(Yt(n,e,t,i,r,s,!0))}function Ea(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const cd=({key:n})=>n??null,Ps=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ut(n)||Ge(n)?{i:Jt,r:n,k:e,f:!!t}:n:null);function Yt(n,e=null,t=null,i=0,r=null,s=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&cd(e),ref:e&&Ps(e),scopeId:so,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return a?(el(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),Fr>0&&!o&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const yt=tS;function tS(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gx)&&(n=Nr),Ea(n)){const a=nr(n,e,!0);return t&&el(a,t),Fr>0&&!s&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(n)]=a:Qt.push(a)),a.patchFlag=-2,a}if(dS(n)&&(n=n.__vccOpts),e){e=nS(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Va(a)),at(l)&&(Df(l)&&!Be(l)&&(l=mt({},l)),e.style=Ha(l))}const o=_t(n)?1:vx(n)?128:Jx(n)?64:at(n)?4:Ge(n)?2:0;return Yt(n,e,t,i,r,o,s,!0)}function nS(n){return n?Df(n)||jf(n)?mt({},n):n:null}function nr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?iS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&cd(c),ref:e&&e.ref?t&&s?Be(s)?s.concat(Ps(e)):[s,Ps(e)]:Ps(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ld(u,l.clone(u)),u}function Ls(n=" ",e=0){return yt(ao,null,n,e)}function Qa(n,e){const t=yt(Cs,null,n);return t.staticCount=e,t}function cn(n){return n==null||typeof n=="boolean"?yt(Nr):Be(n)?yt(ln,null,n.slice()):typeof n=="object"?kn(n):yt(ao,null,String(n))}function kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function el(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),el(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!jf(e)?e._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Jt},t=32):(e=String(e),i&64?(t=16,e=[Ls(e)]):t=8);n.children=e,n.shapeFlag|=t}function iS(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Va([e.class,i.class]));else if(r==="style")e.style=Ha([e.style,i.style]);else if(Zs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function sn(n,e,t,i=null){en(n,e,7,[t,i])}const rS=Kf();let sS=0;function oS(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||rS,s={uid:sS++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new P0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jf(i,r),emitsOptions:Gf(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cx.bind(null,s),n.ce&&n.ce(s),s}let Mt=null,ks,Ta;{const n=_f(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ks=e("__VUE_INSTANCE_SETTERS__",t=>Mt=t),Ta=e("__VUE_SSR_SETTERS__",t=>uo=t)}const kr=n=>{const e=Mt;return ks(n),n.scope.on(),()=>{n.scope.off(),ks(e)}},tu=()=>{Mt&&Mt.scope.off(),ks(null)};function ud(n){return n.vnode.shapeFlag&4}let uo=!1;function aS(n,e=!1){e&&Ta(e);const{props:t,children:i}=n.vnode,r=ud(n);Ox(n,t,r,e),Hx(n,i);const s=r?lS(n,e):void 0;return e&&Ta(!1),s}function lS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Cx);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?uS(n):null,s=kr(n);ti();const o=Yn(i,n,0,[n.props,r]);if(ni(),s(),mf(o)){if(o.then(tu,tu),e)return o.then(a=>{nu(n,a,e)}).catch(a=>{io(a,n,0)});n.asyncDep=o}else nu(n,o,e)}else fd(n,e)}function nu(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=Ff(e)),fd(n,t)}let iu;function fd(n,e,t){const i=n.type;if(!n.render){if(!e&&iu&&!i.render){const r=i.template||Za(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=mt(mt({isCustomElement:s,delimiters:a},o),l);i.render=iu(r,c)}}n.render=i.render||kt}{const r=kr(n);ti();try{Px(n)}finally{ni(),r()}}}const cS={get(n,e){return Dt(n,"get",""),n[e]}};function uS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cS),slots:n.slots,emit:n.emit,expose:e}}function tl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(J0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in br)return br[t](n)},has(e,t){return t in e||t in br}})):n.proxy}function fS(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function dS(n){return Ge(n)&&"__vccOpts"in n}const jt=(n,e)=>Q0(n,e,uo);function dd(n,e,t){const i=arguments.length;return i===2?at(e)&&!Be(e)?Ea(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ea(t)&&(t=[t]),yt(n,e,t))}const hS="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pS="http://www.w3.org/2000/svg",mS="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,ru=En&&En.createElement("template"),gS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?En.createElementNS(pS,n):e==="mathml"?En.createElementNS(mS,n):t?En.createElement(n,{is:t}):En.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>En.createTextNode(n),createComment:n=>En.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>En.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ru.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=ru.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_S=Symbol("_vtc");function vS(n,e,t){const i=n[_S];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const su=Symbol("_vod"),xS=Symbol("_vsh"),SS=Symbol(""),MS=/(^|;)\s*display\s*:/;function yS(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ds(i,a,"")}else for(const o in e)t[o]==null&&Ds(i,o,"");for(const o in t)o==="display"&&(s=!0),Ds(i,o,t[o])}else if(r){if(e!==t){const o=i[SS];o&&(t+=";"+o),i.cssText=t,s=MS.test(t)}}else e&&n.removeAttribute("style");su in n&&(n[su]=s?i.display:"",n[xS]&&(i.display="none"))}const ou=/\s*!important$/;function Ds(n,e,t){if(Be(t))t.forEach(i=>Ds(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ES(n,e);ou.test(t)?n.setProperty(ur(i),t.replace(ou,""),"important"):n[i]=t}}const au=["Webkit","Moz","ms"],Qo={};function ES(n,e){const t=Qo[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=eo(i);for(let r=0;r<au.length;r++){const s=au[r]+i;if(s in n)return Qo[e]=s}return e}const lu="http://www.w3.org/1999/xlink";function cu(n,e,t,i,r,s=C0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(lu,e.slice(6,e.length)):n.setAttributeNS(lu,e,t):t==null||s&&!vf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":String(t))}function TS(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=vf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function bS(n,e,t,i){n.addEventListener(e,t,i)}function AS(n,e,t,i){n.removeEventListener(e,t,i)}const uu=Symbol("_vei");function wS(n,e,t,i,r=null){const s=n[uu]||(n[uu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=RS(e);if(i){const c=s[e]=LS(i,r);bS(n,a,c,l)}else o&&(AS(n,a,o,l),s[e]=void 0)}}const fu=/(?:Once|Passive|Capture)$/;function RS(n){let e;if(fu.test(n)){e={};let i;for(;i=n.match(fu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ur(n.slice(2)),e]}let ea=0;const CS=Promise.resolve(),PS=()=>ea||(CS.then(()=>ea=0),ea=Date.now());function LS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;en(DS(i,t.value),e,5,[i])};return t.value=n,t.attached=PS(),t}function DS(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const du=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,US=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?vS(n,i,c):e==="style"?yS(n,t,i):Zs(e)?Oa(e)||wS(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IS(n,e,i,c))?(TS(n,e,i,s,o,a,l),(e==="value"||e==="checked"||e==="selected")&&cu(n,e,i,c,o,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),cu(n,e,i,c))};function IS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&du(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return du(e)&&_t(t)?!1:e in n}const NS=mt({patchProp:US},gS);let hu;function FS(){return hu||(hu=Gx(NS))}const OS=(...n)=>{const e=FS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=BS(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,zS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function zS(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function BS(n){return _t(n)?document.querySelector(n):n}const Wr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},HS={},VS=n=>(ux("data-v-4e45829b"),n=n(),fx(),n),GS={class:"red-hat-display-semibold"},kS=VS(()=>Yt("header",null,null,-1)),WS={id:"router-view-section"};function XS(n,e){const t=kc("RouterLink"),i=kc("RouterView");return lo(),co(ln,null,[Yt("header",null,[Yt("nav",GS,[Yt("ul",null,[Yt("li",null,[yt(t,{to:"/about-me"},{default:bs(()=>[Ls("About_me_")]),_:1})]),Yt("li",null,[yt(t,{to:"/projects"},{default:bs(()=>[Ls("Projects_")]),_:1})]),Yt("li",null,[yt(t,{to:"/contact"},{default:bs(()=>[Ls("Contact_")]),_:1})])])])]),Yt("main",null,[kS,Yt("section",WS,[yt(i)])])],64)}const qS=Wr(HS,[["render",XS],["__scopeId","data-v-4e45829b"]]);/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Gi=typeof document<"u";function KS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const nt=Object.assign;function ta(n,e){const t={};for(const i in e){const r=e[i];t[i]=tn(r)?r.map(n):n(r)}return t}const Rr=()=>{},tn=Array.isArray,hd=/#/g,YS=/&/g,$S=/\//g,jS=/=/g,ZS=/\?/g,pd=/\+/g,JS=/%5B/g,QS=/%5D/g,md=/%5E/g,eM=/%60/g,gd=/%7B/g,tM=/%7C/g,_d=/%7D/g,nM=/%20/g;function nl(n){return encodeURI(""+n).replace(tM,"|").replace(JS,"[").replace(QS,"]")}function iM(n){return nl(n).replace(gd,"{").replace(_d,"}").replace(md,"^")}function ba(n){return nl(n).replace(pd,"%2B").replace(nM,"+").replace(hd,"%23").replace(YS,"%26").replace(eM,"`").replace(gd,"{").replace(_d,"}").replace(md,"^")}function rM(n){return ba(n).replace(jS,"%3D")}function sM(n){return nl(n).replace(hd,"%23").replace(ZS,"%3F")}function oM(n){return n==null?"":sM(n).replace($S,"%2F")}function Or(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const aM=/\/$/,lM=n=>n.replace(aM,"");function na(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=dM(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Or(o)}}function cM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function uM(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ir(e.matched[i],t.matched[r])&&vd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ir(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function vd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!fM(n[t],e[t]))return!1;return!0}function fM(n,e){return tn(n)?pu(n,e):tn(e)?pu(e,n):n===e}function pu(n,e){return tn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function dM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zr;(function(n){n.pop="pop",n.push="push"})(zr||(zr={}));var Ws;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ws||(Ws={}));const ia="";function hM(n){if(!n)if(Gi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),lM(n)}const pM=/^[^#]+#/;function mM(n,e){return n.replace(pM,"#")+e}function gM(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const _M=()=>({left:window.scrollX,top:window.scrollY});function vM(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=gM(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mu(n,e){return(history.state?history.state.position-e:-1)+n}const Aa=new Map;function xM(n,e){Aa.set(n,e)}function SM(n){const e=Aa.get(n);return Aa.delete(n),e}function MM(n=""){let e=[],t=[ia],i=0;n=hM(n);function r(a){i++,i!==t.length&&t.splice(i),t.push(a)}function s(a,l,{direction:c,delta:u}){const f={direction:c,delta:u,type:zr.pop};for(const d of e)d(a,l,f)}const o={location:ia,state:{},base:n,createHref:mM.bind(null,n),replace(a){t.splice(i--,1),r(a)},push(a,l){r(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],t=[ia],i=0},go(a,l=!0){const c=this.location,u=a<0?Ws.back:Ws.forward;i=Math.max(0,Math.min(i+a,t.length-1)),l&&s(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t[i]}),o}function yM(n){return typeof n=="string"||n&&typeof n=="object"}function xd(n){return typeof n=="string"||typeof n=="symbol"}const Sd=Symbol("");var gu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(gu||(gu={}));function rr(n,e){return nt(new Error,{type:n,[Sd]:!0},e)}function Mn(n,e){return n instanceof Error&&Sd in n&&(e==null||!!(n.type&e))}const _u="[^/]+?",EM={sensitive:!1,strict:!1,start:!0,end:!0},TM=/[.+*?^${}()[\]/\\]/g;function bM(n,e){const t=nt({},EM,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(TM,"\\$&"),h+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:p}=d;s.push({name:_,repeatable:v,optional:m});const b=p||_u;if(b!==_u){h+=10;try{new RegExp(`(${b})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+A.message)}}let M=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,h+=20,m&&(h+=-8),v&&(h+=-20),b===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",_=s[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:_,repeatable:v,optional:m}=h,p=_ in c?c[_]:"";if(tn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=tn(p)?p.join("/"):p;if(!b)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function AM(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Md(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=AM(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(vu(i))return 1;if(vu(r))return-1}return r.length-i.length}function vu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const wM={type:0,value:""},RM=/[a-zA-Z0-9_]/;function CM(n){if(!n)return[[]];if(n==="/")return[[wM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:RM.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function PM(n,e,t){const i=bM(CM(n.path),t),r=nt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function LM(n,e){const t=[],i=new Map;e=Mu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const _=!h,v=DM(f);v.aliasOf=h&&h.record;const m=Mu(e,f),p=[v];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of A)p.push(nt({},v,{components:h?h.record.components:v.components,path:V,aliasOf:h?h.record:v}))}let b,M;for(const A of p){const{path:V}=A;if(d&&V[0]!=="/"){const C=d.record.path,L=C[C.length-1]==="/"?"":"/";A.path=d.record.path+(V&&L+V)}if(b=PM(A,d,m),h?h.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),_&&f.name&&!Su(b)&&o(f.name)),yd(b)&&l(b),v.children){const C=v.children;for(let L=0;L<C.length;L++)s(C[L],b,h&&h.children[L])}h=h||b}return M?()=>{o(M)}:Rr}function o(f){if(xd(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=NM(f,t);t.splice(d,0,f),f.record.name&&!Su(f)&&i.set(f.record.name,f)}function c(f,d){let h,_={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw rr(1,{location:f});m=h.record.name,_=nt(xu(d.params,h.keys.filter(M=>!M.optional).concat(h.parent?h.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&xu(f.params,h.keys.map(M=>M.name))),v=h.stringify(_)}else if(f.path!=null)v=f.path,h=t.find(M=>M.re.test(v)),h&&(_=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(M=>M.re.test(d.path)),!h)throw rr(1,{location:f,currentLocation:d});m=h.record.name,_=nt({},d.params,f.params),v=h.stringify(_)}const p=[];let b=h;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:v,params:_,matched:p,meta:IM(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function xu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function DM(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:UM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function UM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Su(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function IM(n){return n.reduce((e,t)=>nt(e,t.meta),{})}function Mu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function NM(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Md(n,e[s])<0?i=s:t=s+1}const r=FM(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function FM(n){let e=n;for(;e=e.parent;)if(yd(e)&&Md(n,e)===0)return e}function yd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function OM(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(pd," "),o=s.indexOf("="),a=Or(o<0?s:s.slice(0,o)),l=o<0?null:Or(s.slice(o+1));if(a in e){let c=e[a];tn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yu(n){let e="";for(let t in n){const i=n[t];if(t=rM(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(tn(i)?i.map(s=>s&&ba(s)):[i&&ba(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function zM(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=tn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const BM=Symbol(""),Eu=Symbol(""),il=Symbol(""),Ed=Symbol(""),wa=Symbol("");function gr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Wn(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(rr(4,{from:t,to:e})):d instanceof Error?l(d):yM(d)?l(rr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ra(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(HM(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Wn(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=KS(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Wn(h,t,i,o,a,r)()}))}}return s}function HM(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Tu(n){const e=Pn(il),t=Pn(Ed),i=jt(()=>{const l=Yi(n.to);return e.resolve(l)}),r=jt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(ir.bind(null,u));if(d>-1)return d;const h=bu(l[c-2]);return c>1&&bu(u)===h&&f[f.length-1].path!==h?f.findIndex(ir.bind(null,l[c-2])):d}),s=jt(()=>r.value>-1&&WM(t.params,i.value.params)),o=jt(()=>r.value>-1&&r.value===t.matched.length-1&&vd(t.params,i.value.params));function a(l={}){return kM(l)?e[Yi(n.replace)?"replace":"push"](Yi(n.to)).catch(Rr):Promise.resolve()}return{route:i,href:jt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const VM=Xf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tu,setup(n,{slots:e}){const t=no(Tu(n)),{options:i}=Pn(il),r=jt(()=>({[Au(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Au(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:dd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),GM=VM;function kM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function WM(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!tn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function bu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Au=(n,e,t)=>n??e??t,XM=Xf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Pn(wa),r=jt(()=>n.route||i.value),s=Pn(Eu,0),o=jt(()=>{let c=Yi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=jt(()=>r.value.matched[o.value]);ws(Eu,jt(()=>o.value+1)),ws(BM,a),ws(wa,r);const l=ex();return Rs(()=>[l.value,a.value,n.name],([c,u,f],[d,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!ir(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return wu(t.default,{Component:d,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=dd(d,nt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wu(t.default,{Component:m,route:c})||m}}});function wu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const qM=XM;function KM(n){const e=LM(n.routes,n),t=n.parseQuery||OM,i=n.stringifyQuery||yu,r=n.history,s=gr(),o=gr(),a=gr(),l=tx(Vn);let c=Vn;Gi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ta.bind(null,N=>""+N),f=ta.bind(null,oM),d=ta.bind(null,Or);function h(N,ae){let ne,de;return xd(N)?(ne=e.getRecordMatcher(N),de=ae):de=N,e.addRoute(de,ne)}function _(N){const ae=e.getRecordMatcher(N);ae&&e.removeRoute(ae)}function v(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,ae){if(ae=nt({},ae||l.value),typeof N=="string"){const w=na(t,N,ae.path),I=e.resolve({path:w.path},ae),K=r.createHref(w.fullPath);return nt(w,I,{params:d(I.params),hash:Or(w.hash),redirectedFrom:void 0,href:K})}let ne;if(N.path!=null)ne=nt({},N,{path:na(t,N.path,ae.path).path});else{const w=nt({},N.params);for(const I in w)w[I]==null&&delete w[I];ne=nt({},N,{params:f(w)}),ae.params=f(ae.params)}const de=e.resolve(ne,ae),P=N.hash||"";de.params=u(d(de.params));const we=cM(i,nt({},N,{hash:iM(P),path:de.path})),E=r.createHref(we);return nt({fullPath:we,hash:P,query:i===yu?zM(N.query):N.query||{}},de,{redirectedFrom:void 0,href:E})}function b(N){return typeof N=="string"?na(t,N,l.value.path):nt({},N)}function M(N,ae){if(c!==N)return rr(8,{from:ae,to:N})}function A(N){return L(N)}function V(N){return A(nt(b(N),{replace:!0}))}function C(N){const ae=N.matched[N.matched.length-1];if(ae&&ae.redirect){const{redirect:ne}=ae;let de=typeof ne=="function"?ne(N):ne;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=b(de):{path:de},de.params={}),nt({query:N.query,hash:N.hash,params:de.path!=null?{}:N.params},de)}}function L(N,ae){const ne=c=p(N),de=l.value,P=N.state,we=N.force,E=N.replace===!0,w=C(ne);if(w)return L(nt(b(w),{state:typeof w=="object"?nt({},P,w.state):P,force:we,replace:E}),ae||ne);const I=ne;I.redirectedFrom=ae;let K;return!we&&uM(i,de,ne)&&(K=rr(16,{to:I,from:de}),ye(de,de,!0,!1)),(K?Promise.resolve(K):y(I,de)).catch(B=>Mn(B)?Mn(B,2)?B:Me(B):G(B,I,de)).then(B=>{if(B){if(Mn(B,2))return L(nt({replace:E},b(B.to),{state:typeof B.to=="object"?nt({},P,B.to.state):P,force:we}),ae||I)}else B=Q(I,de,!0,E,P);return U(I,de,B),B})}function H(N,ae){const ne=M(N,ae);return ne?Promise.reject(ne):Promise.resolve()}function T(N){const ae=ee.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(N):N()}function y(N,ae){let ne;const[de,P,we]=YM(N,ae);ne=ra(de.reverse(),"beforeRouteLeave",N,ae);for(const w of de)w.leaveGuards.forEach(I=>{ne.push(Wn(I,N,ae))});const E=H.bind(null,N,ae);return ne.push(E),ge(ne).then(()=>{ne=[];for(const w of s.list())ne.push(Wn(w,N,ae));return ne.push(E),ge(ne)}).then(()=>{ne=ra(P,"beforeRouteUpdate",N,ae);for(const w of P)w.updateGuards.forEach(I=>{ne.push(Wn(I,N,ae))});return ne.push(E),ge(ne)}).then(()=>{ne=[];for(const w of we)if(w.beforeEnter)if(tn(w.beforeEnter))for(const I of w.beforeEnter)ne.push(Wn(I,N,ae));else ne.push(Wn(w.beforeEnter,N,ae));return ne.push(E),ge(ne)}).then(()=>(N.matched.forEach(w=>w.enterCallbacks={}),ne=ra(we,"beforeRouteEnter",N,ae,T),ne.push(E),ge(ne))).then(()=>{ne=[];for(const w of o.list())ne.push(Wn(w,N,ae));return ne.push(E),ge(ne)}).catch(w=>Mn(w,8)?w:Promise.reject(w))}function U(N,ae,ne){a.list().forEach(de=>T(()=>de(N,ae,ne)))}function Q(N,ae,ne,de,P){const we=M(N,ae);if(we)return we;const E=ae===Vn,w=Gi?history.state:{};ne&&(de||E?r.replace(N.fullPath,nt({scroll:E&&w&&w.scroll},P)):r.push(N.fullPath,P)),l.value=N,ye(N,ae,ne,E),Me()}let Y;function se(){Y||(Y=r.listen((N,ae,ne)=>{if(!he.listening)return;const de=p(N),P=C(de);if(P){L(nt(P,{replace:!0}),de).catch(Rr);return}c=de;const we=l.value;Gi&&xM(mu(we.fullPath,ne.delta),_M()),y(de,we).catch(E=>Mn(E,12)?E:Mn(E,2)?(L(E.to,de).then(w=>{Mn(w,20)&&!ne.delta&&ne.type===zr.pop&&r.go(-1,!1)}).catch(Rr),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),G(E,de,we))).then(E=>{E=E||Q(de,we,!1),E&&(ne.delta&&!Mn(E,8)?r.go(-ne.delta,!1):ne.type===zr.pop&&Mn(E,20)&&r.go(-1,!1)),U(de,we,E)}).catch(Rr)}))}let ie=gr(),j=gr(),Z;function G(N,ae,ne){Me(N);const de=j.list();return de.length?de.forEach(P=>P(N,ae,ne)):console.error(N),Promise.reject(N)}function xe(){return Z&&l.value!==Vn?Promise.resolve():new Promise((N,ae)=>{ie.add([N,ae])})}function Me(N){return Z||(Z=!N,se(),ie.list().forEach(([ae,ne])=>N?ne(N):ae()),ie.reset()),N}function ye(N,ae,ne,de){const{scrollBehavior:P}=n;if(!Gi||!P)return Promise.resolve();const we=!ne&&SM(mu(N.fullPath,0))||(de||!ne)&&history.state&&history.state.scroll||null;return zf().then(()=>P(N,ae,we)).then(E=>E&&vM(E)).catch(E=>G(E,N,ae))}const Le=N=>r.go(N);let ke;const ee=new Set,he={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:A,replace:V,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:xe,install(N){const ae=this;N.component("RouterLink",GM),N.component("RouterView",qM),N.config.globalProperties.$router=ae,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Yi(l)}),Gi&&!ke&&l.value===Vn&&(ke=!0,A(r.location).catch(P=>{}));const ne={};for(const P in Vn)Object.defineProperty(ne,P,{get:()=>l.value[P],enumerable:!0});N.provide(il,ae),N.provide(Ed,Pf(ne)),N.provide(wa,l);const de=N.unmount;ee.add(N),N.unmount=function(){ee.delete(N),ee.size<1&&(c=Vn,Y&&Y(),Y=null,l.value=Vn,ke=!1,Z=!1),de()}}};function ge(N){return N.reduce((ae,ne)=>ae.then(()=>T(ne)),Promise.resolve())}return he}function YM(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ir(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ir(c,l))||r.push(l))}return[t,i,r]}const $M="/portfolio/assets/cv-morda-CKzvgHz1.png",jM={},ZM=Qa('<header data-v-3bd1e6b1><img src="'+$M+'" data-v-3bd1e6b1><h2 data-v-3bd1e6b1>Hi, Krystian here ;)</h2></header><section data-v-3bd1e6b1><p data-v-3bd1e6b1>I profoundly believe that beautiful design and good design are the same thing. As a designer and developer I strive to create the most visually pleasing and ergonomic interfaces possible.</p><p data-v-3bd1e6b1>For web development my preferred tools are <a href="https://vuejs.org/" data-v-3bd1e6b1>Vue.js</a> and <a href="https://sass-lang.com/" data-v-3bd1e6b1>Sass</a>. Most of my recent projects have been built using these technologies. I&#39;m also experienced with <a href="https://react.dev/" data-v-3bd1e6b1>React</a> and <a href="https://tailwindcss.com/" data-v-3bd1e6b1>TailwindCSS</a>. </p><p data-v-3bd1e6b1>I&#39;m the founder and developer of a small indie game studio called Kiki/Bouba. Our common belief is that games can be a form of art, and we aim to create experiences that are both emotionally engaging and provide satisfying gameplay. We also design and develop various web applications in the spirit of the FOSS philosophy. However, recognizing the shortcomings of many FOSS projects, such as uninteresting visuals and inferior interfaces, we strive to elevate user experience through engaging, aesthetic designs and a strong focus on ergonomics and functionality. </p><p data-v-3bd1e6b1>In addition to developing and designing, I&#39;m an aspiring writer currently working on a fantasy novel. Recently, I have picked up an interest in analog photography and returned to songwriting and playing instruments.</p><p data-v-3bd1e6b1>Growing up in the rural areas of Upper Silesia, I developed a fondness for nature, especially mountains. Activities like hiking, climbing, running, and biking in green scenery make my heart race with joy.</p></section>',2),JM=[ZM];function QM(n,e,t,i,r,s){return lo(),co("article",null,JM)}const ey=Wr(jM,[["render",QM],["__scopeId","data-v-3bd1e6b1"]]),ty={},ny=Qa('<header data-v-2f22cdb5><h2 data-v-2f22cdb5>If you want to have a talk with me or take a look at my projects, feel free to reach out on these platforms:</h2></header><address data-v-2f22cdb5><div class="socials" data-v-2f22cdb5><a href="mailto:krystian.jasionek@protonmail.com" data-v-2f22cdb5><p data-v-2f22cdb5><i class="fa-regular fa-envelope" data-v-2f22cdb5></i> krystian.jasionek@protonmail.com </p></a><a href="https://github.com/Sztakler" target="_blank" data-v-2f22cdb5><p data-v-2f22cdb5><i class="fab fa-github" data-v-2f22cdb5></i> Metarth</p></a></div><footer data-v-2f22cdb5><h2 data-v-2f22cdb5>I currently live in:</h2><a href="https://www.openstreetmap.org/#map=12/51.1264/16.9488" target="_blank" data-v-2f22cdb5><p data-v-2f22cdb5><i class="fa-regular fa-map" data-v-2f22cdb5></i> Wrocław, Poland</p></a></footer></address>',2),iy=[ny];function ry(n,e,t,i,r,s){return lo(),co("article",null,iy)}const sy=Wr(ty,[["render",ry],["__scopeId","data-v-2f22cdb5"]]),oy={},ay=Qa('<section data-v-94682af9><div class="project" data-v-94682af9><span class="project-year" data-v-94682af9>2024</span><span class="project-title" data-v-94682af9>Vagabondoro Timer</span><span class="project-category" data-v-94682af9>Wed Design &amp; Development</span></div><div class="project" data-v-94682af9><span class="project-year" data-v-94682af9>2023</span><span class="project-title" data-v-94682af9>Ale Jazda!</span><span class="project-category" data-v-94682af9>Web Development</span></div><div class="project" data-v-94682af9><span class="project-year" data-v-94682af9>2021</span><span class="project-title" data-v-94682af9>Uga buga</span><span class="project-category" data-v-94682af9>Uga buga ratatata</span></div></section>',1),ly=[ay];function cy(n,e,t,i,r,s){return lo(),co("article",null,ly)}const uy=Wr(oy,[["render",cy],["__scopeId","data-v-94682af9"]]),fy={};function dy(n,e,t,i,r,s){return null}const hy=Wr(fy,[["render",dy]]);let Cr,sa,mi,xr,Ru,Ra,Cu;const Ca=new t0;function py(){return`
        varying vec3 vUv;

        void main() {
          vUv = position;
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
        }
      `}function my(){return`
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform float time;
        varying vec3 vUv;

        // Cellular noise ("Worley noise") in 3D in GLSL.
// Copyright (c) Stefan Gustavson 2011-04-19. All rights reserved.
// This code is released under the conditions of the MIT license.
// See LICENSE file for details.
// https://github.com/stegu/webgl-noise

// Modulo 289 without a division (only multiplications)
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

// Modulo 7 without a division
vec3 mod7(vec3 x) {
  return x - floor(x * (1.0 / 7.0)) * 7.0;
}

// Permutation polynomial: (34x^2 + 6x) mod 289
vec3 permute(vec3 x) {
  return mod289((34.0 * x + 10.0) * x);
}

// Cellular noise, returning F1 and F2 in a vec2.
// 3x3x3 search region for good F2 everywhere, but a lot
// slower than the 2x2x2 version.
// The code below is a bit scary even to its author,
// but it has at least half decent performance on a
// modern GPU. In any case, it beats any software
// implementation of Worley noise hands down.

vec2 cellular(vec3 P) {
#define K 0.142857142857 // 1/7
#define Ko 0.428571428571 // 1/2-K/2
#define K2 0.020408163265306 // 1/(7*7)
#define Kz 0.166666666667 // 1/6
#define Kzo 0.416666666667 // 1/2-1/6*2
#define jitter 1.0 // smaller jitter gives more regular pattern

	vec3 Pi = mod289(floor(P));
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = permute(p + Pi.y - 1.0);
	vec3 p2 = permute(p + Pi.y);
	vec3 p3 = permute(p + Pi.y + 1.0);

	vec3 p11 = permute(p1 + Pi.z - 1.0);
	vec3 p12 = permute(p1 + Pi.z);
	vec3 p13 = permute(p1 + Pi.z + 1.0);

	vec3 p21 = permute(p2 + Pi.z - 1.0);
	vec3 p22 = permute(p2 + Pi.z);
	vec3 p23 = permute(p2 + Pi.z + 1.0);

	vec3 p31 = permute(p3 + Pi.z - 1.0);
	vec3 p32 = permute(p3 + Pi.z);
	vec3 p33 = permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod7(floor(p11*K))*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod7(floor(p12*K))*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod7(floor(p13*K))*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod7(floor(p21*K))*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod7(floor(p22*K))*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod7(floor(p23*K))*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod7(floor(p31*K))*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod7(floor(p32*K))*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod7(floor(p33*K))*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = dx11 * dx11 + dy11 * dy11 + dz11 * dz11;
	vec3 d12 = dx12 * dx12 + dy12 * dy12 + dz12 * dz12;
	vec3 d13 = dx13 * dx13 + dy13 * dy13 + dz13 * dz13;
	vec3 d21 = dx21 * dx21 + dy21 * dy21 + dz21 * dz21;
	vec3 d22 = dx22 * dx22 + dy22 * dy22 + dz22 * dz22;
	vec3 d23 = dx23 * dx23 + dy23 * dy23 + dz23 * dz23;
	vec3 d31 = dx31 * dx31 + dy31 * dy31 + dz31 * dz31;
	vec3 d32 = dx32 * dx32 + dy32 * dy32 + dz32 * dz32;
	vec3 d33 = dx33 * dx33 + dy33 * dy33 + dz33 * dz33;

	// Sort out the two smallest distances (F1, F2)
#if 0
	// Cheat and sort out only F1
	vec3 d1 = min(min(d11,d12), d13);
	vec3 d2 = min(min(d21,d22), d23);
	vec3 d3 = min(min(d31,d32), d33);
	vec3 d = min(min(d1,d2), d3);
	d.x = min(min(d.x,d.y),d.z);
	return vec2(sqrt(d.x)); // F1 duplicated, no F2 computed
#else
	// Do it right and sort out both F1 and F2
	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)
	return sqrt(d11.xy); // F1, F2
#endif
}

 float random(vec2 uv) {
    float s = sin(dot(uv.xy, vec2(12.9898, 78.233)) + time);
    return fract(s * 43758.5453);
            }

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }

  float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

        void main() {
          vec2 cel = cellular(vUv.xyz + time * 0.13);
          vec2 cel2 = cellular(vUv.zyx + time * 0.04);
          cel = cel * cel2 * 1.8;
          vec4 baseColor = vec4(0.3019, 0.0588, 0.1843, 1.0);
          // vec4 invColor = vec4(0.70, 0.94, 0.82, 1.0);
          // vec4 invColor = vec4(0.86, 0.94, 1.0, 1.0);
          vec4 invColor = vec4(0.839, 0.239, 0.145, 1.0);
          vec4 color = vec4(0.46, 0.07, 0.09, 1.0);

          float pn = pnoise(vUv + time * 0.1, vec3(10.));

          gl_FragColor = invColor * vec4(cel, 0.75 + (sin(time) + 1.0) / 8.0, 1.0);
          gl_FragColor += vec4(pn, pn, pn, 1.0);
          gl_FragColor *= vec4(random(vUv.yz), random(vUv.xy), random(vUv.xy), 1.0) + 0.2;



          
        }
      
      `}gy();function gy(){Cr=new Gt(70,window.innerWidth/window.innerHeight,.1,100),Cr.position.z=2,sa=new Zv;let n={colorB:{type:"vec3",value:new Ye(11319013)},colorA:{type:"vec3",value:new Ye(7662549)},time:{type:"f",value:Ca.getDelta()}};Cu=new ar(10,10,1),Ra=new zt({uniforms:n,fragmentShader:my(),vertexShader:py()}),Ru=new Zt(Cu,Ra),sa.add(Ru),mi=new jv({antialias:!0}),mi.setPixelRatio(window.devicePixelRatio),mi.setSize(window.innerWidth,window.innerHeight),mi.setAnimationLoop(vy),document.body.appendChild(mi.domElement),console.log("appended child"),xr=new c0(mi);const e=new u0(sa,Cr);xr.addPass(e);const t=new d0;xr.addPass(t);const i=new p0;xr.addPass(i),window.addEventListener("resize",_y)}function _y(){Cr.aspect=window.innerWidth/window.innerHeight,Cr.updateProjectionMatrix(),mi.setSize(window.innerWidth,window.innerHeight)}function vy(){Ca.update(),Ra.uniforms.time.value=Ca.getElapsed(),xr.render()}const xy=[{path:"/",component:hy},{path:"/about-me",component:ey},{path:"/projects",component:uy},{path:"/contact",component:sy}],Sy=KM({history:MM(),routes:xy});OS(qS).use(Sy).mount("#app");