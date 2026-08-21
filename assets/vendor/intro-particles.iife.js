var KOSXIntroParticles=(()=>{var Ba=Object.defineProperty;var mu=Object.getOwnPropertyDescriptor;var fu=Object.getOwnPropertyNames;var gu=Object.prototype.hasOwnProperty;var _u=(r,e)=>{for(var t in e)Ba(r,t,{get:e[t],enumerable:!0})},vu=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of fu(e))!gu.call(r,n)&&n!==t&&Ba(r,n,{get:()=>e[n],enumerable:!(i=mu(e,n))||i.enumerable});return r};var xu=r=>vu(Ba({},"__esModule",{value:!0}),r);var Kp={};_u(Kp,{mountParticleSlogan:()=>Jp});var Gc=0,To=1,Vc=2;var Er=1,kc=2,Nn=3,Dn=0,Dt=1,di=2,pi=0,wr=1,Eo=2,wo=3,Ao=4,Hc=5;var Un=100,Wc=101,Xc=102,jc=103,qc=104,Yc=200,Zc=201,Jc=202,Kc=203,$c=204,Qc=205,eh=206,th=207,ih=208,nh=209,rh=210,sh=211,ah=212,oh=213,lh=214,Co=0,Ro=1,Po=2,oa=3,Io=4,Lo=5,No=6,Do=7,ch=0,hh=1,uh=2,ii=0,Uo=1,Fo=2,Oo=3,Bo=4,zo=5,Go=6,Vo=7;var ko=300,Fn=301,rn=302,la=303,ca=304,Ar=306,ds=1e3,Oi=1001,ps=1002,Xt=1003,dh=1004;var Cr=1005;var At=1006,ha=1007;var sn=1008;var qt=1009,Ho=1010,Wo=1011,On=1012,ua=1013,Ai=1014,ni=1015,mi=1016,da=1017,pa=1018,Bn=1020,Xo=35902,jo=35899,ph=1021,mh=1022,ri=1023,Wi=1026,an=1027,qo=1028,ma=1029,on=1030,Yo=1031;var Zo=1033,fa=33776,ga=33777,_a=33778,va=33779,Jo=35840,Ko=35841,$o=35842,Qo=35843,el=36196,tl=37492,il=37496,nl=37488,rl=37489,xa=37490,sl=37491,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,pl=37815,ml=37816,fl=37817,gl=37818,_l=37819,vl=37820,xl=37821,yl=36492,Ml=36494,Sl=36495,bl=36283,Tl=36284,ya=36285,El=36286;var Qn=2300,ms=2301,hs=2302,po=2303,mo=2400,fo=2401,go=2402;var wl=0,fh=1,ln="",Bt="srgb",er="srgb-linear",tr="linear",tt="srgb";var Ki=7680;var gh=512,_h=513,vh=514,Ma=515,xh=516,yh=517,Sa=518,Mh=519,_o=35044;var Al="300 es",Ei=2e3,ir=2001;function yu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sh(){let r=nr("canvas");return r.style.display="block",r}var uc={},wn=null;function Cl(...r){let e="THREE."+r.shift();wn?wn("log",e,...r):console.log(e,...r)}function bh(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ce(...r){let e="THREE."+(r=bh(r)).shift();if(wn)wn("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Pe(...r){let e="THREE."+(r=bh(r)).shift();if(wn)wn("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Qi(...r){let e=r.join(" ");e in uc||(uc[e]=!0,Ce(...r))}function Th(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Eh={[Co]:1,[Po]:6,[Io]:7,[oa]:5,[Ro]:0,[No]:2,[Do]:4,[Lo]:3},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var us=Math.PI/180,fs=180/Math.PI;function zn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Et[255&r]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]+"-"+Et[255&e]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[63&t|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[255&i]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function Mu(r,e){return(r%e+e)%e}function za(r,e,t){return(1-t)*r+t*e}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ne=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],p=i[n+3],d=s[a+0],u=s[a+1],g=s[a+2],m=s[a+3];if(p!==m||c!==d||l!==u||h!==g){let v=c*d+l*u+h*g+p*m;v<0&&(d=-d,u=-u,g=-g,m=-m,v=-v);let f=1-o;if(v<.9995){let _=Math.acos(v),x=Math.sin(_);f=Math.sin(f*_)/x,c=c*f+d*(o=Math.sin(o*_)/x),l=l*f+u*o,h=h*f+g*o,p=p*f+m*o}else{c=c*f+d*o,l=l*f+u*o,h=h*f+g*o,p=p*f+m*o;let _=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=_,l*=_,h*=_,p*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],p=s[a],d=s[a+1],u=s[a+2],g=s[a+3];return e[t]=o*g+h*p+c*u-l*d,e[t+1]=c*g+h*d+l*p-o*u,e[t+2]=l*g+h*u+o*d-c*p,e[t+3]=h*g-o*p-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),p=o(s/2),d=c(i/2),u=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*p+l*u*g,this._y=l*u*p-d*h*g,this._z=l*h*g+d*u*p,this._w=l*h*p-d*u*g;break;case"YXZ":this._x=d*h*p+l*u*g,this._y=l*u*p-d*h*g,this._z=l*h*g-d*u*p,this._w=l*h*p+d*u*g;break;case"ZXY":this._x=d*h*p-l*u*g,this._y=l*u*p+d*h*g,this._z=l*h*g+d*u*p,this._w=l*h*p-d*u*g;break;case"ZYX":this._x=d*h*p-l*u*g,this._y=l*u*p+d*h*g,this._z=l*h*g-d*u*p,this._w=l*h*p+d*u*g;break;case"YZX":this._x=d*h*p+l*u*g,this._y=l*u*p+d*h*g,this._z=l*h*g-d*u*p,this._w=l*h*p-d*u*g;break;case"XZY":this._x=d*h*p-l*u*g,this._y=l*u*p-d*h*g,this._z=l*h*g+d*u*p,this._w=l*h*p+d*u*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=i+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(a-n)*u}else if(i>o&&i>p){let u=2*Math.sqrt(1+i-o-p);this._w=(h-c)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(s+l)/u}else if(o>p){let u=2*Math.sqrt(1+o-i-p);this._w=(s-l)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-i-o);this._w=(a-n)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),p=2*(s*i-a*t);return this.x=t+c*l+a*p-o*h,this.y=i+c*h+o*l-s*p,this.z=n+c*p+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new C,dc=new jt,Be=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,i,n,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],p=i[7],d=i[2],u=i[5],g=i[8],m=n[0],v=n[3],f=n[6],_=n[1],x=n[4],b=n[7],T=n[2],M=n[5],P=n[8];return s[0]=a*m+o*_+c*T,s[3]=a*v+o*x+c*M,s[6]=a*f+o*b+c*P,s[1]=l*m+h*_+p*T,s[4]=l*v+h*x+p*M,s[7]=l*f+h*b+p*P,s[2]=d*m+u*_+g*T,s[5]=d*v+u*x+g*M,s[8]=d*f+u*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*s,u=l*s-a*c,g=t*p+i*d+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=p*m,e[1]=(n*l-h*i)*m,e[2]=(o*i-n*a)*m,e[3]=d*m,e[4]=(h*t-n*c)*m,e[5]=(n*s-o*t)*m,e[6]=u*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(e,t)),this}rotate(e){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Va=new Be,pc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){let r={enabled:!0,workingColorSpace:er,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===tt&&(n.r=Ti(n.r),n.g=Ti(n.g),n.b=Ti(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?tr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[er]:{primaries:e,whitePoint:i,transfer:tr,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),r}var je=Su();function Ti(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function En(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var mn,gs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mn===void 0&&(mn=nr("canvas")),mn.width=e.width,mn.height=e.height;let n=mn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=mn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Ti(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ti(t[i]/255)):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bu=0,An=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ka(n[a].image)):s.push(ka(n[a]))}else s=ka(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Tu=0,Ha=new C,Lt=class r extends ui{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=zn(),this.name="",this.source=new An(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:Ce(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=ko,Lt.DEFAULT_ANISOTROPY=1;var st=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],u=c[5],g=c[9],m=c[2],v=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-m)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+m)<.1&&Math.abs(g+v)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,b=(u+1)/2,T=(f+1)/2,M=(h+d)/4,P=(p+m)/4,O=(g+v)/4;return x>b&&x>T?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=M/i,s=P/i):b>T?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=M/n,s=O/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=P/s,n=O/s),this.set(i,n,s,t),this}let _=Math.sqrt((v-g)*(v-g)+(p-m)*(p-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(p-m)/_,this.z=(d-h)/_,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_s=class extends ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new Lt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new An(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends _s{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},rr=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vs=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,i,n,s,a,o,c,l,h,p,d,u,g,m,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,p,d,u,g,m,v)}set(e,t,i,n,s,a,o,c,l,h,p,d,u,g,m,v){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=g,f[11]=m,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/fn.setFromMatrixColumn(e,0).length(),s=1/fn.setFromMatrixColumn(e,1).length(),a=1/fn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=a*h,u=a*p,g=o*h,m=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=u+g*l,t[5]=d-m*l,t[9]=-o*c,t[2]=m-d*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,g=l*h,m=l*p;t[0]=d+m*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=m+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,g=l*h,m=l*p;t[0]=d-m*o,t[4]=-a*p,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,g=o*h,m=o*p;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+m,t[1]=c*p,t[5]=m*l+d,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-d*p,t[8]=g*p+u,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*p+g,t[10]=d-m*p}else if(e.order==="XZY"){let d=a*c,u=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+m,t[5]=a*h,t[9]=u*p-g,t[2]=g*p-u,t[6]=o*h,t[10]=m*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,wu)}lookAt(e,t,i){let n=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ri.crossVectors(i,Ft),Ri.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ri.crossVectors(i,Ft)),Ri.normalize(),Or.crossVectors(Ft,Ri),n[0]=Ri.x,n[4]=Or.x,n[8]=Ft.x,n[1]=Ri.y,n[5]=Or.y,n[9]=Ft.y,n[2]=Ri.z,n[6]=Or.z,n[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],p=i[5],d=i[9],u=i[13],g=i[2],m=i[6],v=i[10],f=i[14],_=i[3],x=i[7],b=i[11],T=i[15],M=n[0],P=n[4],O=n[8],I=n[12],N=n[1],G=n[5],F=n[9],Y=n[13],W=n[2],z=n[6],q=n[10],H=n[14],ee=n[3],de=n[7],we=n[11],ve=n[15];return s[0]=a*M+o*N+c*W+l*ee,s[4]=a*P+o*G+c*z+l*de,s[8]=a*O+o*F+c*q+l*we,s[12]=a*I+o*Y+c*H+l*ve,s[1]=h*M+p*N+d*W+u*ee,s[5]=h*P+p*G+d*z+u*de,s[9]=h*O+p*F+d*q+u*we,s[13]=h*I+p*Y+d*H+u*ve,s[2]=g*M+m*N+v*W+f*ee,s[6]=g*P+m*G+v*z+f*de,s[10]=g*O+m*F+v*q+f*we,s[14]=g*I+m*Y+v*H+f*ve,s[3]=_*M+x*N+b*W+T*ee,s[7]=_*P+x*G+b*z+T*de,s[11]=_*O+x*F+b*q+T*we,s[15]=_*I+x*Y+b*H+T*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],u=e[14],g=e[3],m=e[7],v=e[11],f=e[15],_=c*u-l*d,x=o*u-l*p,b=o*d-c*p,T=a*u-l*h,M=a*d-c*h,P=a*p-o*h;return t*(m*_-v*x+f*b)-i*(g*_-v*T+f*M)+n*(g*x-m*T+f*P)-s*(g*b-m*M+v*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(s*h-o*c)+n*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],u=e[11],g=e[12],m=e[13],v=e[14],f=e[15],_=t*o-i*a,x=t*c-n*a,b=t*l-s*a,T=i*c-n*o,M=i*l-s*o,P=n*l-s*c,O=h*m-p*g,I=h*v-d*g,N=h*f-u*g,G=p*v-d*m,F=p*f-u*m,Y=d*f-u*v,W=_*Y-x*F+b*G+T*N-M*I+P*O;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/W;return e[0]=(o*Y-c*F+l*G)*z,e[1]=(n*F-i*Y-s*G)*z,e[2]=(m*P-v*M+f*T)*z,e[3]=(d*M-p*P-u*T)*z,e[4]=(c*N-a*Y-l*I)*z,e[5]=(t*Y-n*N+s*I)*z,e[6]=(v*b-g*P-f*x)*z,e[7]=(h*P-d*b+u*x)*z,e[8]=(a*F-o*N+l*O)*z,e[9]=(i*N-t*F-s*O)*z,e[10]=(g*M-m*b+f*_)*z,e[11]=(p*b-h*M-u*_)*z,e[12]=(o*I-a*G-c*O)*z,e[13]=(t*G-i*I+n*O)*z,e[14]=(m*x-g*T-v*_)*z,e[15]=(h*T-p*x+d*_)*z,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,p=o+o,d=s*l,u=s*h,g=s*p,m=a*h,v=a*p,f=o*p,_=c*l,x=c*h,b=c*p,T=i.x,M=i.y,P=i.z;return n[0]=(1-(m+f))*T,n[1]=(u+b)*T,n[2]=(g-x)*T,n[3]=0,n[4]=(u-b)*M,n[5]=(1-(d+f))*M,n[6]=(v+_)*M,n[7]=0,n[8]=(g+x)*P,n[9]=(v-_)*P,n[10]=(1-(d+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=fn.set(n[0],n[1],n[2]).length(),o=fn.set(n[4],n[5],n[6]).length(),c=fn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Kt.copy(this);let l=1/a,h=1/o,p=1/c;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=p,Kt.elements[9]*=p,Kt.elements[10]*=p,t.setFromRotationMatrix(Kt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),p=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),g,m;if(c)g=s/(a-s),m=a*s/(a-s);else if(o===Ei)g=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==ir)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-s),m=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),p=2/(i-n),d=-(t+e)/(t-e),u=-(i+n)/(i-n),g,m;if(c)g=1/(a-s),m=a/(a-s);else if(o===Ei)g=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==ir)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-s),m=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},fn=new C,Kt=new Ve,Eu=new C(0,0,0),wu=new C(1,1,1),Ri=new C,Or=new C,Ft=new C,fc=new Ve,gc=new jt,Bi=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],p=n[2],d=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Au=0,_c=new C,gn=new jt,vi=new Ve,Br=new C,jn=new C,Cu=new C,Ru=new jt,vc=new C(1,0,0),xc=new C(0,1,0),yc=new C(0,0,1),Mc={type:"added"},Pu={type:"removed"},_n={type:"childadded",child:null},Wa={type:"childremoved",child:null},Gt=class r extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new Bi,i=new jt,n=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Be}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(jn,Br,this.up):vi.lookAt(Br,jn,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),gn.setFromRotationMatrix(vi),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),_n.child=e,this.dispatchEvent(_n),_n.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,e,Cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Gt.DEFAULT_UP=new C(0,1,0),Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iu={type:"move"},Cn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,i),f=this._getHandJoint(l,m);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Xa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=Mu(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Xa(a,s,e+1/3),this.g=Xa(a,s,e),this.b=Xa(a,s,e-1/3)}return je.colorSpaceToWorking(this,n),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return je.workingToColorSpace(wt.copy(this),e),65536*Math.round(We(255*wt.r,0,255))+256*Math.round(We(255*wt.g,0,255))+Math.round(We(255*wt.b,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(wt.copy(this),t);let i=wt.r,n=wt.g,s=wt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(n-s)/p+(n<s?6:0);break;case n:c=(s-i)/p+2;break;case s:c=(i-n)/p+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Bt){je.workingToColorSpace(wt.copy(this),e);let t=wt.r,i=wt.g,n=wt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(zr);let i=za(Pi.h,zr.h,t),n=za(Pi.s,zr.s,t),s=za(Pi.l,zr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new ke;ke.NAMES=wh;var ar=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$t=new C,xi=new C,ja=new C,yi=new C,vn=new C,xn=new C,Sc=new C,qa=new C,Ya=new C,Za=new C,Ja=new st,Ka=new st,$a=new st,bi=class r{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),$t.subVectors(e,t),n.cross($t);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){$t.subVectors(n,t),xi.subVectors(i,t),ja.subVectors(e,t);let a=$t.dot($t),o=$t.dot(xi),c=$t.dot(ja),l=xi.dot(xi),h=xi.dot(ja),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;let d=1/p,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,yi)!==null&&yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return Ja.setScalar(0),Ka.setScalar(0),$a.setScalar(0),Ja.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ja,s.x),a.addScaledVector(Ka,s.y),a.addScaledVector($a,s.z),a}static isFrontFacing(e,t,i,n){return $t.subVectors(i,t),xi.subVectors(e,t),$t.cross(xi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),.5*$t.cross(xi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;vn.subVectors(n,i),xn.subVectors(s,i),qa.subVectors(e,i);let c=vn.dot(qa),l=xn.dot(qa);if(c<=0&&l<=0)return t.copy(i);Ya.subVectors(e,n);let h=vn.dot(Ya),p=xn.dot(Ya);if(h>=0&&p<=h)return t.copy(n);let d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(vn,a);Za.subVectors(e,s);let u=vn.dot(Za),g=xn.dot(Za);if(g>=0&&u<=g)return t.copy(s);let m=u*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(xn,o);let v=h*g-u*p;if(v<=0&&p-h>=0&&u-g>=0)return Sc.subVectors(s,n),o=(p-h)/(p-h+(u-g)),t.copy(n).addScaledVector(Sc,o);let f=1/(v+m+d);return a=m*f,o=d*f,t.copy(i).addScaledVector(vn,a).addScaledVector(xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qn),Vr.subVectors(this.max,qn),yn.subVectors(e.a,qn),Mn.subVectors(e.b,qn),Sn.subVectors(e.c,qn),Ii.subVectors(Mn,yn),Li.subVectors(Sn,Mn),qi.subVectors(yn,Sn);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-qi.z,qi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,qi.z,0,-qi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-qi.y,qi.x,0];return!!Qa(t,yn,Mn,Sn,Vr)&&(t=[1,0,0,0,1,0,0,0,1],!!Qa(t,yn,Mn,Sn,Vr)&&(kr.crossVectors(Ii,Li),t=[kr.x,kr.y,kr.z],Qa(t,yn,Mn,Sn,Vr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Qt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new C,new C,new C,new C,new C,new C,new C,new C],Qt=new C,Gr=new ei,yn=new C,Mn=new C,Sn=new C,Ii=new C,Li=new C,qi=new C,qn=new C,Vr=new C,kr=new C,Yi=new C;function Qa(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Yi.fromArray(r,s);let o=n.x*Math.abs(Yi.x)+n.y*Math.abs(Yi.y)+n.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),h=i.dot(Yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Qp=Lu();function Lu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var gt=new C,Hr=new ne,Nu=0,bt=class extends ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_o,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lr=class extends bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Le=class extends bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Du=new ei,Yn=new C,eo=new C,ti=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Du.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yn.subVectors(e,this.center);let t=Yn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Yn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yn.copy(e.center).add(eo)),this.expandByPoint(Yn.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Uu=0,Wt=new Ve,to=new Gt,bn=new C,Ot=new ei,Zn=new ei,Mt=new C,at=class r extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?lr:or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Zn.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Zn.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Zn.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Zn.min),Ot.expandByPoint(Zn.max))}Ot.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Mt.fromBufferAttribute(o,l),c&&(bn.fromBufferAttribute(e,l),Mt.add(bn)),n=Math.max(n,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let O=0;O<i.count;O++)o[O]=new C,c[O]=new C;let l=new C,h=new C,p=new C,d=new ne,u=new ne,g=new ne,m=new C,v=new C;function f(O,I,N){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,I),p.fromBufferAttribute(i,N),d.fromBufferAttribute(s,O),u.fromBufferAttribute(s,I),g.fromBufferAttribute(s,N),h.sub(l),p.sub(l),u.sub(d),g.sub(d);let G=1/(u.x*g.y-g.x*u.y);isFinite(G)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(G),v.copy(p).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(G),o[O].add(m),o[I].add(m),o[N].add(m),c[O].add(v),c[I].add(v),c[N].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let O=0,I=_.length;O<I;++O){let N=_[O],G=N.start;for(let F=G,Y=G+N.count;F<Y;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let x=new C,b=new C,T=new C,M=new C;function P(O){T.fromBufferAttribute(n,O),M.copy(T);let I=o[O];x.copy(I),x.sub(T.multiplyScalar(T.dot(I))).normalize(),b.crossVectors(M,I);let N=b.dot(c[O])<0?-1:1;a.setXYZW(O,x.x,x.y,x.z,N)}for(let O=0,I=_.length;O<I;++O){let N=_[O],G=N.start;for(let F=G,Y=G+N.count;F<Y;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new bt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,p=new C;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),p.subVectors(n,s),h.cross(p),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(n,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let m=0,v=c.length;m<v;m++){u=o.isInterleavedBufferAttribute?c[m]*o.data.stride+o.offset:c[m]*h;for(let f=0;f<h;f++)d[g++]=l[u++]}return new bt(d,h,p)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,p=l.length;h<p;h++){let d=e(l[h],i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){let u=l[p];h.push(u.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],p=s[l];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var em=new C;var Fu=0,zi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:Ce(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var tm=new C,im=new C,nm=new C,rm=new ne,sm=new ne,am=new Ve,om=new C,lm=new C,cm=new C,hm=new ne,um=new ne,dm=new ne;var pm=new C,mm=new C;var Si=new C,io=new C,Wr=new C,Ni=new C,no=new C,Xr=new C,ro=new C,en=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){io.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(io);let s=.5*e.distanceTo(t),a=-this.direction.dot(Wr),o=Ni.dot(this.direction),c=-Ni.dot(Wr),l=Ni.lengthSq(),h=Math.abs(1-a*a),p,d,u,g;if(h>0)if(p=a*c-o,d=a*o-c,g=s*h,p>=0)if(d>=-g)if(d<=g){let m=1/h;p*=m,d*=m,u=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=s,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d=-s,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+l):d<=g?(p=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+l):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+l);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(io).addScaledVector(Wr,d),u}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),n=Si.dot(Si)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,n,s){no.subVectors(t,e),Xr.subVectors(i,e),ro.crossVectors(no,Xr);let a,o=this.direction.dot(ro);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ni.subVectors(this.origin,e);let c=a*this.direction.dot(Xr.crossVectors(Ni,Xr));if(c<0)return null;let l=a*this.direction.dot(no.cross(Ni));if(l<0||c+l>o)return null;let h=-a*Ni.dot(ro);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cr=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bc=new Ve,Zi=new en,jr=new ti,Tc=new C,qr=new C,Yr=new C,Zr=new C,so=new C,Jr=new C,Ec=new C,Kr=new C,Nt=class extends Gt{constructor(e=new at,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Jr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],p=s[c];h!==0&&(so.fromBufferAttribute(p,e),a?Jr.addScaledVector(so,h):Jr.addScaledVector(so.sub(t),h))}t.add(Jr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),jr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(jr,Tc)===null||Zi.origin.distanceToSquared(Tc)>(e.far-e.near)**2))return;bc.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(bc),i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Zi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){let v=d[g],f=a[v.materialIndex];for(let _=Math.max(v.start,u.start),x=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));_<x;_+=3)n=$r(this,f,e,i,l,h,p,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let g=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);g<m;g+=3)n=$r(this,a,e,i,l,h,p,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){let v=d[g],f=a[v.materialIndex];for(let _=Math.max(v.start,u.start),x=Math.min(c.count,Math.min(v.start+v.count,u.start+u.count));_<x;_+=3)n=$r(this,f,e,i,l,h,p,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let g=Math.max(0,u.start),m=Math.min(c.count,u.start+u.count);g<m;g+=3)n=$r(this,a,e,i,l,h,p,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function $r(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,qr),r.getVertexPosition(c,Yr),r.getVertexPosition(l,Zr);let h=(function(p,d,u,g,m,v,f,_){let x;if(x=d.side===1?g.intersectTriangle(f,v,m,!0,_):g.intersectTriangle(m,v,f,d.side===0,_),x===null)return null;Kr.copy(_),Kr.applyMatrix4(p.matrixWorld);let b=u.ray.origin.distanceTo(Kr);return b<u.near||b>u.far?null:{distance:b,point:Kr.clone(),object:p}})(r,e,t,i,qr,Yr,Zr,Ec);if(h){let p=new C;bi.getBarycoord(Ec,qr,Yr,Zr,p),n&&(h.uv=bi.getInterpolatedAttribute(n,o,c,l,p,new ne)),s&&(h.uv1=bi.getInterpolatedAttribute(s,o,c,l,p,new ne)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,c,l,p,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};bi.getNormal(qr,Yr,Zr,d.normal),h.face=d,h.barycoord=p}return h}var fm=new st,gm=new st,_m=new st,vm=new st,xm=new Ve,ym=new C,Mm=new ti,Sm=new Ve,bm=new en;var xs=class extends Lt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,p,d){super(null,a,o,c,l,h,n,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tm=new Ve,Em=new Ve;var wm=new Ve,Am=new Ve;var Cm=new ei,Rm=new Ve,Pm=new Nt,Im=new ti;var ao=new C,Ou=new C,Bu=new Be,ci=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ao.subVectors(i,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bu.getNormalMatrix(e),n=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new ti,zu=new ne(.5,.5),Qr=new C,Gi=class{constructor(e=new ci,t=new ci,i=new ci,n=new ci,s=new ci,a=new ci){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],p=s[5],d=s[6],u=s[7],g=s[8],m=s[9],v=s[10],f=s[11],_=s[12],x=s[13],b=s[14],T=s[15];if(n[0].setComponents(l-a,u-h,f-g,T-_).normalize(),n[1].setComponents(l+a,u+h,f+g,T+_).normalize(),n[2].setComponents(l+o,u+p,f+m,T+x).normalize(),n[3].setComponents(l-o,u-p,f-m,T-x).normalize(),i)n[4].setComponents(c,d,v,b).normalize(),n[5].setComponents(l-c,u-d,f-v,T-b).normalize();else if(n[4].setComponents(l-c,u-d,f-v,T-b).normalize(),t===Ei)n[5].setComponents(l+c,u+d,f+v,T+b).normalize();else{if(t!==ir)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,d,v,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=zu.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Qr.x=n.normal.x>0?e.max.x:e.min.x,Qr.y=n.normal.y>0?e.max.y:e.min.y,Qr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wc=new Ve,ys=class r{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];wc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Gi),i[n].setFromProjectionMatrix(wc,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Gi),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new r().copy(this)}};var vo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Lm=new Ve,Nm=new ke(1,1,1),Dm=new Gi,Um=new ys,Fm=new ei,Om=new ti,Bm=new C,zm=new C,Gm=new C,Vm=new vo,km=new Nt;var Hm=new C,Wm=new C,Xm=new Ve,jm=new en,qm=new ti,Ym=new C,Zm=new C;var Jm=new C,Km=new C;var Ms=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ac=new Ve,xo=new en,es=new ti,ts=new C,hr=class extends Gt{constructor(e=new at,t=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(n),es.radius+=s,e.ray.intersectsSphere(es)===!1)return;Ac.copy(n).invert(),xo.copy(e.ray).applyMatrix4(Ac);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null)for(let p=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);p<d;p++){let u=l.getX(p);ts.fromBufferAttribute(h,u),Cc(ts,u,c,n,e,t,this)}else for(let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);p<d;p++)ts.fromBufferAttribute(h,p),Cc(ts,p,c,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Cc(r,e,t,i,n,s,a){let o=xo.distanceSqToPoint(r);if(o<t){let c=new C;xo.closestPointToPoint(r,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ur=class extends Lt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var wi=class extends Lt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,p=1){if(h!==Wi&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:p},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new An(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ss=class extends wi{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dr=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class r extends at{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],p=[],d=0,u=0;function g(m,v,f,_,x,b,T,M,P,O,I){let N=b/P,G=T/O,F=b/2,Y=T/2,W=M/2,z=P+1,q=O+1,H=0,ee=0,de=new C;for(let we=0;we<q;we++){let ve=we*G-Y;for(let ye=0;ye<z;ye++){let te=ye*N-F;de[m]=te*_,de[v]=ve*x,de[f]=W,l.push(de.x,de.y,de.z),de[m]=0,de[v]=0,de[f]=M>0?1:-1,h.push(de.x,de.y,de.z),p.push(ye/P),p.push(1-we/O),H+=1}}for(let we=0;we<O;we++)for(let ve=0;ve<P;ve++){let ye=d+ve+z*we,te=d+ve+z*(we+1),he=d+(ve+1)+z*(we+1),le=d+(ve+1)+z*we;c.push(ye,te,le),c.push(te,he,le),ee+=6}o.addGroup(u,ee,I),u+=ee,d+=H}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bs=class r extends at{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,p=Math.PI/2*e,d=t,u=2*p+d,g=2*i+s,m=n+1,v=new C,f=new C;for(let _=0;_<=g;_++){let x=0,b=0,T=0,M=0;if(_<=i){let I=_/i,N=I*Math.PI/2;b=-h-e*Math.cos(N),T=e*Math.sin(N),M=-e*Math.cos(N),x=I*p}else if(_<=i+s){let I=(_-i)/s;b=I*t-h,T=e,M=0,x=p+I*d}else{let I=(_-i-s)/i,N=I*Math.PI/2;b=h+e*Math.sin(N),T=e*Math.cos(N),M=e*Math.sin(N),x=p+d+I*p}let P=Math.max(0,Math.min(1,x/u)),O=0;_===0?O=.5/n:_===g&&(O=-.5/n);for(let I=0;I<=n;I++){let N=I/n,G=N*Math.PI*2,F=Math.sin(G),Y=Math.cos(G);f.x=-T*Y,f.y=b,f.z=T*F,o.push(f.x,f.y,f.z),v.set(-T*Y,M,T*F),v.normalize(),c.push(v.x,v.y,v.z),l.push(N+O,P)}if(_>0){let I=(_-1)*m;for(let N=0;N<n;N++){let G=I+N,F=I+N+1,Y=_*m+N,W=_*m+N+1;a.push(G,F,Y),a.push(F,W,Y)}}}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ts=class r extends at{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new C,h=new ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let u=i+p/t*n;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pr=class r extends at{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],p=[],d=[],u=[],g=0,m=[],v=i/2,f=0;function _(x){let b=g,T=new ne,M=new C,P=0,O=x===!0?e:t,I=x===!0?1:-1;for(let G=1;G<=n;G++)p.push(0,v*I,0),d.push(0,I,0),u.push(.5,.5),g++;let N=g;for(let G=0;G<=n;G++){let F=G/n*c+o,Y=Math.cos(F),W=Math.sin(F);M.x=O*W,M.y=v*I,M.z=O*Y,p.push(M.x,M.y,M.z),d.push(0,I,0),T.x=.5*Y+.5,T.y=.5*W*I+.5,u.push(T.x,T.y),g++}for(let G=0;G<n;G++){let F=b+G,Y=N+G;x===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),P+=3}l.addGroup(f,P,x===!0?1:2),f+=P}(function(){let x=new C,b=new C,T=0,M=(t-e)/i;for(let P=0;P<=s;P++){let O=[],I=P/s,N=I*(t-e)+e;for(let G=0;G<=n;G++){let F=G/n,Y=F*c+o,W=Math.sin(Y),z=Math.cos(Y);b.x=N*W,b.y=-I*i+v,b.z=N*z,p.push(b.x,b.y,b.z),x.set(W,M,z).normalize(),d.push(x.x,x.y,x.z),u.push(F,1-I),O.push(g++)}m.push(O)}for(let P=0;P<n;P++)for(let O=0;O<s;O++){let I=m[O][P],N=m[O+1][P],G=m[O+1][P+1],F=m[O][P+1];(e>0||O!==0)&&(h.push(I,N,F),T+=3),(t>0||O!==s-1)&&(h.push(N,G,F),T+=3)}l.addGroup(f,T,0),f+=T})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Es=class r extends pr{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vi=class r extends at{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,g,m,v){let f=v+1,_=[];for(let x=0;x<=f;x++){_[x]=[];let b=u.clone().lerp(m,x/f),T=g.clone().lerp(m,x/f),M=f-x;for(let P=0;P<=M;P++)_[x][P]=P===0&&x===f?b:b.clone().lerp(T,P/M)}for(let x=0;x<f;x++)for(let b=0;b<2*(f-x)-1;b++){let T=Math.floor(b/2);b%2==0?(c(_[x][T+1]),c(_[x+1][T]),c(_[x][T])):(c(_[x][T+1]),c(_[x+1][T+1]),c(_[x+1][T]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,g){let m=3*u;g.x=e[m+0],g.y=e[m+1],g.z=e[m+2]}function h(u,g,m,v){v<0&&u.x===1&&(a[g]=u.x-1),m.x===0&&m.z===0&&(a[g]=v/2/Math.PI+.5)}function p(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let g=new C,m=new C,v=new C;for(let f=0;f<t.length;f+=3)l(t[f+0],g),l(t[f+1],m),l(t[f+2],v),o(g,m,v,u)})(n),(function(u){let g=new C;for(let m=0;m<s.length;m+=3)g.x=s[m+0],g.y=s[m+1],g.z=s[m+2],g.normalize().multiplyScalar(u),s[m+0]=g.x,s[m+1]=g.y,s[m+2]=g.z})(i),(function(){let u=new C;for(let g=0;g<s.length;g+=3){u.x=s[g+0],u.y=s[g+1],u.z=s[g+2];let m=p(u)/2/Math.PI+.5,v=d(u)/Math.PI+.5;a.push(m,1-v)}(function(){let g=new C,m=new C,v=new C,f=new C,_=new ne,x=new ne,b=new ne;for(let T=0,M=0;T<s.length;T+=9,M+=6){g.set(s[T+0],s[T+1],s[T+2]),m.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),_.set(a[M+0],a[M+1]),x.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),f.copy(g).add(m).add(v).divideScalar(3);let P=p(f);h(_,M+0,g,P),h(x,M+2,m,P),h(b,M+4,v,P)}})(),(function(){for(let g=0;g<a.length;g+=6){let m=a[g+0],v=a[g+2],f=a[g+4],_=Math.max(m,v,f),x=Math.min(m,v,f);_>.9&&x<.1&&(m<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},ws=class r extends Vi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},is=new C,ns=new C,oo=new C,rs=new bi,As=class extends at{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(us*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:m,b:v,c:f}=rs;if(m.fromBufferAttribute(o,l[0]),v.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),rs.getNormal(oo),p[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,p[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,p[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,p[0]!==p[1]&&p[1]!==p[2]&&p[2]!==p[0])for(let _=0;_<3;_++){let x=(_+1)%3,b=p[_],T=p[x],M=rs[h[_]],P=rs[h[x]],O=`${b}_${T}`,I=`${T}_${b}`;I in d&&d[I]?(oo.dot(d[I].normal)<=s&&(u.push(M.x,M.y,M.z),u.push(P.x,P.y,P.z)),d[I]=null):O in d||(d[O]={index0:l[_],index1:l[x],normal:oo.clone()})}}for(let g in d)if(d[g]){let{index0:m,index1:v}=d[g];is.fromBufferAttribute(o,m),ns.fromBufferAttribute(o,v),u.push(is.x,is.y,is.z),u.push(ns.x,ns.y,ns.z)}this.setAttribute("position",new Le(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new ne:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,n=[],s=[],a=[],o=new C,c=new Ve;for(let u=0;u<=e;u++){let g=u/e;n[u]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),p=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),p<=l&&(l=p,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(n[u-1].dot(n[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(n[u],s[u])}if(t===!0){let u=Math.acos(We(s[0].dot(s[e]),-1,1));u/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],u*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rn=class extends kt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*p+this.aX,l=d*p+u*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cs=class extends Rn{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rl(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,p){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+p)+(c-o)/p;d*=h,u*=h,n(a,o,d,u)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Rc=new C,Pc=new C,lo=new Rl,co=new Rl,ho=new Rl,Rs=class extends kt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(Pc.subVectors(n[0],n[1]).add(n[0]),o=Pc);let p=n[l%s],d=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(Rc.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Rc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);m<1e-4&&(m=1),g<1e-4&&(g=m),v<1e-4&&(v=m),lo.initNonuniformCatmullRom(o.x,p.x,d.x,c.x,g,m,v),co.initNonuniformCatmullRom(o.y,p.y,d.y,c.y,g,m,v),ho.initNonuniformCatmullRom(o.z,p.z,d.z,c.z,g,m,v)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(o.x,p.x,d.x,c.x,this.tension),co.initCatmullRom(o.y,p.y,d.y,c.y,this.tension),ho.initCatmullRom(o.z,p.z,d.z,c.z,this.tension));return i.set(lo.calc(h),co.calc(h),ho.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ic(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Kn(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function $n(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var mr=class extends kt{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set($n(e,n.x,s.x,a.x,o.x),$n(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends kt{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set($n(e,n.x,s.x,a.x,o.x),$n(e,n.y,s.y,a.y,o.y),$n(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fr=class extends kt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends kt{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gr=class extends kt{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Kn(e,n.x,s.x,a.x),Kn(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends kt{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Kn(e,n.x,s.x,a.x),Kn(e,n.y,s.y,a.y),Kn(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vr=class extends kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],p=n[a>n.length-3?n.length-1:a+2];return i.set(Ic(o,c.x,l.x,h.x,p.x),Ic(o,c.y,l.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},Ls=Object.freeze({__proto__:null,ArcCurve:Cs,CatmullRomCurve3:Rs,CubicBezierCurve:mr,CubicBezierCurve3:Ps,EllipseCurve:Rn,LineCurve:fr,LineCurve3:Is,QuadraticBezierCurve:gr,QuadraticBezierCurve3:_r,SplineCurve:vr}),Ns=class extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ls[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ls[n.type]().fromJSON(n))}return this}},xr=class extends Ns{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new fr(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new gr(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new mr(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new vr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Rn(e,t,i,n,s,a,o,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yr=class extends xr{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new xr().fromJSON(n))}return this}};function Gu(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Lc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,p,d,u){let g=[];for(let m=0,v=p.length;m<v;m++){let f=Lc(h,p[m]*u,m<v-1?p[m+1]*u:h.length,u,!1);f===f.next&&(f.steiner=!0),g.push(Yu(f))}g.sort(Xu);for(let m=0;m<g.length;m++)d=ju(g[m],d);return d})(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,p=c;for(let d=t;d<n;d+=t){let u=r[d],g=r[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>p&&(p=g)}l=Math.max(h-o,p-c),l=l!==0?32767/l:0}return Mr(s,a,t,o,c,l,0),a}function Lc(r,e,t,i,n){let s;if(n===(function(a,o,c,l){let h=0;for(let p=o,d=c-l;p<c;p+=l)h+=(a[d]-a[p])*(a[p+1]+a[d+1]),d=p;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Nc(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Nc(a/i|0,r[a],r[a+1],s);return s&&Pn(s,s.next)&&(br(s),s=s.next),s}function nn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Pn(i,i.next)&&pt(i.prev,i,i.next)!==0)i=i.next;else{if(br(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Mr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,l,h,p){let d=c;do d.z===0&&(d.z=yo(d.x,d.y,l,h,p)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(u){let g,m=1;do{let v,f=u;u=null;let _=null;for(g=0;f;){g++;let x=f,b=0;for(let M=0;M<m&&(b++,x=x.nextZ,x);M++);let T=m;for(;b>0||T>0&&x;)b!==0&&(T===0||!x||f.z<=x.z)?(v=f,f=f.nextZ,b--):(v=x,x=x.nextZ,T--),_?_.nextZ=v:u=v,v.prevZ=_,_=v;f=x}_.nextZ=null,m*=2}while(g>1)})(d)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?ku(r,i,n,s):Vu(r))e.push(c.i,r.i,l.i),br(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Mr(r=Hu(nn(r),e),e,t,i,n,s,2):a===2&&Wu(r,e,t,i,n,s):Mr(nn(r),e,t,i,n,s,1);break}}}function Vu(r){let e=r.prev,t=r,i=r.next;if(pt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),p=Math.min(o,c,l),d=Math.max(n,s,a),u=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=u&&Jn(n,o,s,c,a,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ku(r,e,t,i){let n=r.prev,s=r,a=r.next;if(pt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,p=s.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,p,d),m=Math.max(o,c,l),v=Math.max(h,p,d),f=yo(u,g,e,t,i),_=yo(m,v,e,t,i),x=r.prevZ,b=r.nextZ;for(;x&&x.z>=f&&b&&b.z<=_;){if(x.x>=u&&x.x<=m&&x.y>=g&&x.y<=v&&x!==n&&x!==a&&Jn(o,h,c,p,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=u&&b.x<=m&&b.y>=g&&b.y<=v&&b!==n&&b!==a&&Jn(o,h,c,p,l,d,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=f;){if(x.x>=u&&x.x<=m&&x.y>=g&&x.y<=v&&x!==n&&x!==a&&Jn(o,h,c,p,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=_;){if(b.x>=u&&b.x<=m&&b.y>=g&&b.y<=v&&b!==n&&b!==a&&Jn(o,h,c,p,l,d,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Hu(r,e){let t=r;do{let i=t.prev,n=t.next.next;!Pn(i,n)&&Ch(i,t,t.next,n)&&Sr(i,n)&&Sr(n,i)&&(e.push(i.i,t.i,n.i),br(t),br(t.next),t=r=n),t=t.next}while(t!==r);return nn(t)}function Wu(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zu(a,o)){let c=Rh(a,o);return a=nn(a,a.next),c=nn(c,c.next),Mr(a,e,t,i,n,s,0),void Mr(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Xu(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function ju(r,e){let t=(function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(Pn(n,a))return a;do{if(Pn(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,l=a.x<a.next.x?a:a.next,m===o))return l}a=a.next}while(a!==s);if(!l)return null;let p=l,d=l.x,u=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Ah(c<u?o:h,c,d,u,c<u?h:o,c,a.x,a.y)){let m=Math.abs(c-a.y)/(o-a.x);Sr(a,n)&&(m<g||m===g&&(a.x>l.x||a.x===l.x&&qu(l,a)))&&(l=a,g=m)}a=a.next}while(a!==p);return l})(r,e);if(!t)return e;let i=Rh(t,r);return nn(i,i.next),nn(t,t.next)}function qu(r,e){return pt(r.prev,r,e.prev)<0&&pt(e.next,r,r.next)<0}function yo(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Yu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ah(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Jn(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&Ah(r,e,t,i,n,s,a,o)}function Zu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Ch(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Sr(r,e)&&Sr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(pt(r.prev,r,e.prev)||pt(r,e.prev,e))||Pn(r,e)&&pt(r.prev,r,r.next)>0&&pt(e.prev,e,e.next)>0)}function pt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Pn(r,e){return r.x===e.x&&r.y===e.y}function Ch(r,e,t,i){let n=as(pt(r,e,t)),s=as(pt(r,e,i)),a=as(pt(t,i,r)),o=as(pt(t,i,e));return n!==s&&a!==o||!(n!==0||!ss(r,t,e))||!(s!==0||!ss(r,i,e))||!(a!==0||!ss(t,r,i))||!(o!==0||!ss(t,e,i))}function ss(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function as(r){return r>0?1:r<0?-1:0}function Sr(r,e){return pt(r.prev,r,r.next)<0?pt(r,e,r.next)>=0&&pt(r,r.prev,e)>=0:pt(r,e,r.prev)<0||pt(r,r.next,e)<0}function Rh(r,e){let t=Mo(r.i,r.x,r.y),i=Mo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nc(r,e,t,i){let n=Mo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function br(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Mo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var So=class{static triangulate(e,t,i=2){return Gu(e,t,i)}},hi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Dc(e),Uc(i,e);let a=e.length;t.forEach(Dc);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Uc(i,t[c]);let o=So.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Dc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Uc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ds=class r extends at{constructor(e=new yr([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ju,x,b,T,M,P,O=!1;if(f){x=f.getSpacedPoints(h),O=!0,d=!1;let w=!!f.isCatmullRomCurve3&&f.closed;b=f.computeFrenetFrames(h,w),T=new C,M=new C,P=new C}d||(v=0,u=0,g=0,m=0);let I=o.extractPoints(l),N=I.shape,G=I.holes;if(!hi.isClockWise(N)){N=N.reverse();for(let w=0,U=G.length;w<U;w++){let y=G[w];hi.isClockWise(y)&&(G[w]=y.reverse())}}function F(w){let U=10000000000000001e-36,y=w[0];for(let D=1;D<=w.length;D++){let L=D%w.length,A=w[L],V=A.x-y.x,X=A.y-y.y,Z=V*V+X*X,se=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(y.x),Math.abs(y.y));Z<=U*se*se?(w.splice(L,1),D--):y=A}}F(N),G.forEach(F);let Y=G.length,W=N;for(let w=0;w<Y;w++){let U=G[w];N=N.concat(U)}function z(w,U,y){return U||Pe("ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(U,y)}let q=N.length;function H(w,U,y){let D,L,A,V=w.x-U.x,X=w.y-U.y,Z=y.x-w.x,se=y.y-w.y,Me=V*V+X*X,Se=V*se-X*Z;if(Math.abs(Se)>Number.EPSILON){let pe=Math.sqrt(Me),Ae=Math.sqrt(Z*Z+se*se),Q=U.x-X/pe,oe=U.y+V/pe,re=((y.x-se/Ae-Q)*se-(y.y+Z/Ae-oe)*Z)/(V*se-X*Z);D=Q+V*re-w.x,L=oe+X*re-w.y;let me=D*D+L*L;if(me<=2)return new ne(D,L);A=Math.sqrt(me/2)}else{let pe=!1;V>Number.EPSILON?Z>Number.EPSILON&&(pe=!0):V<-Number.EPSILON?Z<-Number.EPSILON&&(pe=!0):Math.sign(X)===Math.sign(se)&&(pe=!0),pe?(D=-X,L=V,A=Math.sqrt(Me)):(D=V,L=X,A=Math.sqrt(Me/2))}return new ne(D/A,L/A)}let ee=[];for(let w=0,U=W.length,y=U-1,D=w+1;w<U;w++,y++,D++)y===U&&(y=0),D===U&&(D=0),ee[w]=H(W[w],W[y],W[D]);let de=[],we,ve,ye=ee.concat();for(let w=0,U=Y;w<U;w++){let y=G[w];we=[];for(let D=0,L=y.length,A=L-1,V=D+1;D<L;D++,A++,V++)A===L&&(A=0),V===L&&(V=0),we[D]=H(y[D],y[A],y[V]);de.push(we),ye=ye.concat(we)}if(v===0)ve=hi.triangulateShape(W,G);else{let w=[],U=[];for(let y=0;y<v;y++){let D=y/v,L=u*Math.cos(D*Math.PI/2),A=g*Math.sin(D*Math.PI/2)+m;for(let V=0,X=W.length;V<X;V++){let Z=z(W[V],ee[V],A);_e(Z.x,Z.y,-L),D===0&&w.push(Z)}for(let V=0,X=Y;V<X;V++){let Z=G[V];we=de[V];let se=[];for(let Me=0,Se=Z.length;Me<Se;Me++){let pe=z(Z[Me],we[Me],A);_e(pe.x,pe.y,-L),D===0&&se.push(pe)}D===0&&U.push(se)}}ve=hi.triangulateShape(w,U)}let te=ve.length,he=g+m;for(let w=0;w<q;w++){let U=d?z(N[w],ye[w],he):N[w];O?(M.copy(b.normals[0]).multiplyScalar(U.x),T.copy(b.binormals[0]).multiplyScalar(U.y),P.copy(x[0]).add(M).add(T),_e(P.x,P.y,P.z)):_e(U.x,U.y,0)}for(let w=1;w<=h;w++)for(let U=0;U<q;U++){let y=d?z(N[U],ye[U],he):N[U];O?(M.copy(b.normals[w]).multiplyScalar(y.x),T.copy(b.binormals[w]).multiplyScalar(y.y),P.copy(x[w]).add(M).add(T),_e(P.x,P.y,P.z)):_e(y.x,y.y,p/h*w)}for(let w=v-1;w>=0;w--){let U=w/v,y=u*Math.cos(U*Math.PI/2),D=g*Math.sin(U*Math.PI/2)+m;for(let L=0,A=W.length;L<A;L++){let V=z(W[L],ee[L],D);_e(V.x,V.y,p+y)}for(let L=0,A=G.length;L<A;L++){let V=G[L];we=de[L];for(let X=0,Z=V.length;X<Z;X++){let se=z(V[X],we[X],D);O?_e(se.x,se.y+x[h-1].y,x[h-1].x+y):_e(se.x,se.y,p+y)}}}function le(w,U){let y=w.length;for(;--y>=0;){let D=y,L=y-1;L<0&&(L=w.length-1);for(let A=0,V=h+2*v;A<V;A++){let X=q*A,Z=q*(A+1);$(U+D+X,U+L+X,U+L+Z,U+D+Z)}}}function _e(w,U,y){c.push(w),c.push(U),c.push(y)}function Ne(w,U,y){R(w),R(U),R(y);let D=n.length/3,L=_.generateTopUV(i,n,D-3,D-2,D-1);S(L[0]),S(L[1]),S(L[2])}function $(w,U,y,D){R(w),R(U),R(D),R(U),R(y),R(D);let L=n.length/3,A=_.generateSideWallUV(i,n,L-6,L-3,L-2,L-1);S(A[0]),S(A[1]),S(A[3]),S(A[1]),S(A[2]),S(A[3])}function R(w){n.push(c[3*w+0]),n.push(c[3*w+1]),n.push(c[3*w+2])}function S(w){s.push(w.x),s.push(w.y)}(function(){let w=n.length/3;if(d){let U=0,y=q*U;for(let D=0;D<te;D++){let L=ve[D];Ne(L[2]+y,L[1]+y,L[0]+y)}U=h+2*v,y=q*U;for(let D=0;D<te;D++){let L=ve[D];Ne(L[0]+y,L[1]+y,L[2]+y)}}else{for(let U=0;U<te;U++){let y=ve[U];Ne(y[2],y[1],y[0])}for(let U=0;U<te;U++){let y=ve[U];Ne(y[0]+q*h,y[1]+q*h,y[2]+q*h)}}i.addGroup(w,n.length/3-w,0)})(),(function(){let w=n.length/3,U=0;le(W,U),U+=W.length;for(let y=0,D=G.length;y<D;y++){let L=G[y];le(L,U),U+=L.length}i.addGroup(w,n.length/3-w,1)})()}this.setAttribute("position",new Le(n,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ls[n.type]().fromJSON(n)),new r(i,e.options)}},Ju={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new ne(s,a),new ne(o,c),new ne(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],p=e[3*i+2],d=e[3*n],u=e[3*n+1],g=e[3*n+2],m=e[3*s],v=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ne(a,1-c),new ne(l,1-p),new ne(d,1-g),new ne(m,1-f)]:[new ne(o,1-c),new ne(h,1-p),new ne(u,1-g),new ne(v,1-f)]}},Us=class r extends Vi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Fs=class r extends at{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=We(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,p=new C,d=new ne,u=new C,g=new C,m=new C,v=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,u.x=1*f,u.y=-v,u.z=0*f,m.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,u.x=1*f,u.y=-v,u.z=0*f,g.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),c.push(u.x,u.y,u.z),m.copy(g)}for(let _=0;_<=t;_++){let x=i+_*h*n,b=Math.sin(x),T=Math.cos(x);for(let M=0;M<=e.length-1;M++){p.x=e[M].x*b,p.y=e[M].y,p.z=e[M].x*T,a.push(p.x,p.y,p.z),d.x=_/t,d.y=M/(e.length-1),o.push(d.x,d.y);let P=c[3*M+0]*b,O=c[3*M+1],I=c[3*M+0]*T;l.push(P,O,I)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let b=x+_*e.length,T=b,M=b+e.length,P=b+e.length+1,O=b+1;s.push(T,M,O),s.push(P,O,M)}this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Os=class r extends Vi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},In=class r extends at{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,p=e/o,d=t/c,u=[],g=[],m=[],v=[];for(let f=0;f<h;f++){let _=f*d-a;for(let x=0;x<l;x++){let b=x*p-s;g.push(b,-_,0),m.push(0,0,1),v.push(x/o),v.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){let x=_+l*f,b=_+l*(f+1),T=_+1+l*(f+1),M=_+1+l*f;u.push(x,b,M),u.push(b,T,M)}this.setIndex(u),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(m,3)),this.setAttribute("uv",new Le(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Bs=class r extends at{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],p=e,d=(t-e)/(n=Math.max(1,n)),u=new C,g=new ne;for(let m=0;m<=n;m++){for(let v=0;v<=i;v++){let f=s+v/i*a;u.x=p*Math.cos(f),u.y=p*Math.sin(f),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}p+=d}for(let m=0;m<n;m++){let v=m*(i+1);for(let f=0;f<i;f++){let _=f+v,x=_,b=_+i+1,T=_+i+2,M=_+1;o.push(x,b,M),o.push(b,T,M)}}this.setIndex(o),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zs=class r extends at{constructor(e=new yr([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let p=n.length/3,d=h.extractPoints(t),u=d.shape,g=d.holes;hi.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,f=g.length;v<f;v++){let _=g[v];hi.isClockWise(_)===!0&&(g[v]=_.reverse())}let m=hi.triangulateShape(u,g);for(let v=0,f=g.length;v<f;v++){let _=g[v];u=u.concat(_)}for(let v=0,f=u.length;v<f;v++){let _=u[v];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,f=m.length;v<f;v++){let _=m[v],x=_[0]+p,b=_[1]+p,T=_[2]+p;i.push(x,b,T),c+=3}}this.setIndex(i),this.setAttribute("position",new Le(n,3)),this.setAttribute("normal",new Le(s,3)),this.setAttribute("uv",new Le(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Gs=class r extends at{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],p=new C,d=new C,u=[],g=[],m=[],v=[];for(let f=0;f<=i;f++){let _=[],x=f/i,b=a+x*o,T=e*Math.cos(b),M=Math.sqrt(e*e-T*T),P=0;f===0&&a===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let O=0;O<=t;O++){let I=O/t,N=n+I*s;p.x=-M*Math.cos(N),p.y=T,p.z=M*Math.sin(N),g.push(p.x,p.y,p.z),d.copy(p).normalize(),m.push(d.x,d.y,d.z),v.push(I+P,1-x),_.push(l++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let x=h[f][_+1],b=h[f][_],T=h[f+1][_],M=h[f+1][_+1];(f!==0||a>0)&&u.push(x,b,M),(f!==i-1||c<Math.PI)&&u.push(b,T,M)}this.setIndex(u),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(m,3)),this.setAttribute("uv",new Le(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Vs=class r extends Vi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ks=class r extends at{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],p=[],d=new C,u=new C,g=new C;for(let m=0;m<=i;m++){let v=a+m/i*o;for(let f=0;f<=n;f++){let _=f/n*s;u.x=(e+t*Math.cos(v))*Math.cos(_),u.y=(e+t*Math.cos(v))*Math.sin(_),u.z=t*Math.sin(v),l.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),p.push(f/n),p.push(m/i)}}for(let m=1;m<=i;m++)for(let v=1;v<=n;v++){let f=(n+1)*m+v-1,_=(n+1)*(m-1)+v-1,x=(n+1)*(m-1)+v,b=(n+1)*m+v;c.push(f,_,b),c.push(_,x,b)}this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Hs=class r extends at{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],p=new C,d=new C,u=new C,g=new C,m=new C,v=new C,f=new C;for(let x=0;x<=i;++x){let b=x/i*s*Math.PI*2;_(b,s,a,e,u),_(b+.01,s,a,e,g),v.subVectors(g,u),f.addVectors(g,u),m.crossVectors(v,f),f.crossVectors(m,v),m.normalize(),f.normalize();for(let T=0;T<=n;++T){let M=T/n*Math.PI*2,P=-t*Math.cos(M),O=t*Math.sin(M);p.x=u.x+(P*f.x+O*m.x),p.y=u.y+(P*f.y+O*m.y),p.z=u.z+(P*f.z+O*m.z),c.push(p.x,p.y,p.z),d.subVectors(p,u).normalize(),l.push(d.x,d.y,d.z),h.push(x/i),h.push(T/n)}}for(let x=1;x<=i;x++)for(let b=1;b<=n;b++){let T=(n+1)*(x-1)+(b-1),M=(n+1)*x+(b-1),P=(n+1)*x+b,O=(n+1)*(x-1)+b;o.push(T,M,O),o.push(M,P,O)}function _(x,b,T,M,P){let O=Math.cos(x),I=Math.sin(x),N=T/b*x,G=Math.cos(N);P.x=M*(2+G)*.5*O,P.y=M*(2+G)*I*.5,P.z=M*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ws=class r extends at{constructor(e=new _r(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new ne,h=new C,p=[],d=[],u=[],g=[];function m(v){h=e.getPointAt(v/t,h);let f=a.normals[v],_=a.binormals[v];for(let x=0;x<=n;x++){let b=x/n*Math.PI*2,T=Math.sin(b),M=-Math.cos(b);c.x=M*f.x+T*_.x,c.y=M*f.y+T*_.y,c.z=M*f.z+T*_.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,p.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let f=0;f<=n;f++)l.x=v/t,l.y=f/n,u.push(l.x,l.y)})(),(function(){for(let v=1;v<=t;v++)for(let f=1;f<=n;f++){let _=(n+1)*(v-1)+(f-1),x=(n+1)*v+(f-1),b=(n+1)*v+f,T=(n+1)*(v-1)+f;g.push(_,x,T),g.push(x,b,T)}})()})(),this.setIndex(g),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ls[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Xs=class extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let p=c[l],d=p.start;for(let u=d,g=d+p.count;u<g;u+=3)for(let m=0;m<3;m++){let v=o.getX(u+m),f=o.getX(u+(m+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,f),Fc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,p=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,p),Fc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var $m=Object.freeze({__proto__:null,BoxGeometry:tn,CapsuleGeometry:bs,CircleGeometry:Ts,ConeGeometry:Es,CylinderGeometry:pr,DodecahedronGeometry:ws,EdgesGeometry:As,ExtrudeGeometry:Ds,IcosahedronGeometry:Us,LatheGeometry:Fs,OctahedronGeometry:Os,PlaneGeometry:In,PolyhedronGeometry:Vi,RingGeometry:Bs,ShapeGeometry:zs,SphereGeometry:Gs,TetrahedronGeometry:Vs,TorusGeometry:ks,TorusKnotGeometry:Hs,TubeGeometry:Ws,WireframeGeometry:Xs});function cn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(Oc(n))n.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Oc(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ct(r){let e={};for(let t=0;t<r.length;t++){let i=cn(r[t]);for(let n in i)e[n]=i[n]}return e}function Oc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Pl(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Ph={clone:cn,merge:Ct},Rt=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(n.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new st().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},js=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qs=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ys=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var ki=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zs=class extends ki{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mo,endingEnd:mo}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fo:s=e,o=2*t-i;break;case go:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fo:a=e,c=2*i-t;break;case go:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(i-t)/(n-t),m=g*g,v=m*g,f=-d*v+2*d*m-d*g,_=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*g+1,x=(-1-u)*v+(1.5+u)*m+.5*g,b=u*v-u*m;for(let T=0;T!==o;++T)s[T]=f*a[h+T]+_*a[l+T]+x*a[c+T]+b*a[p+T];return s}},Js=class extends ki{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),p=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*p+a[c+d]*h;return s}},Ks=class extends ki{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},$s=class extends ki{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(i-t)/(n-t),m=1-g;for(let v=0;v!==o;++v)s[v]=a[l+v]*m+a[c+v]*g;return s}let d=2*o,u=e-1;for(let g=0;g!==o;++g){let m=a[l+g],v=a[c+g],f=u*d+2*g,_=p[f],x=p[f+1],b=e*d+2*g,T=h[b],M=h[b+1],P,O,I,N,G,F=(i-t)/(n-t);for(let Y=0;Y<8;Y++){P=F*F,O=P*F,I=1-F,N=I*I,G=N*I;let W=G*t+3*N*F*_+3*I*P*T+O*n-i;if(Math.abs(W)<1e-10)break;let z=3*N*(_-t)+6*I*F*(T-_)+3*P*(n-T);if(Math.abs(z)<1e-10)break;F-=W/z,F=Math.max(0,Math.min(1,F))}s[g]=G*m+3*N*F*x+3*I*P*M+O*v}return s}},zt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ks(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $s(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qn:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case hs:t=this.InterpolantFactoryMethodSmooth;break;case po:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Ce("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qn;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return hs;case this.InterpolantFactoryMethodBezier:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&yu(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===hs,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,p=h-i,d=h+i;for(let u=0;u!==i;++u){let g=t[h+u];if(g!==t[p+u]||g!==t[d+u]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,p=a*i;for(let d=0;d!==i;++d)t[p+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zt.prototype.ValueTypeName="",zt.prototype.TimeBufferType=Float32Array,zt.prototype.ValueBufferType=Float32Array,zt.prototype.DefaultInterpolation=ms;var Ui=class extends zt{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="bool",Ui.prototype.ValueBufferType=Array,Ui.prototype.DefaultInterpolation=Qn,Ui.prototype.InterpolantFactoryMethodLinear=void 0,Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Qs=class extends zt{constructor(e,t,i,n){super(e,t,i,n)}};Qs.prototype.ValueTypeName="color";var ea=class extends zt{constructor(e,t,i,n){super(e,t,i,n)}};ea.prototype.ValueTypeName="number";var ta=class extends ki{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)jt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Tr=class extends zt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion",Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends zt{constructor(e,t,i){super(e,t,i)}};Fi.prototype.ValueTypeName="string",Fi.prototype.ValueBufferType=Array,Fi.prototype.DefaultInterpolation=Qn,Fi.prototype.InterpolantFactoryMethodLinear=void 0,Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends zt{constructor(e,t,i,n){super(e,t,i,n)}};ia.prototype.ValueTypeName="vector";var na=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=l.length;p<d;p+=2){let u=l[p],g=l[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ih=new na,ra=class{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qm=new Ve,ef=new C,tf=new C;var ls=new C,cs=new jt,li=new C,Ln=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ls,cs,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ls,cs,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ls,cs,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ls,cs,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new C,Bc=new ne,zc=new ne,It=class extends Ln{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*fs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*us*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*fs*Math.atan(Math.tan(.5*us*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*us*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Hi=class extends Ln{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var nf=new Ve,rf=new Ve,sf=new Ve;var Tn=-90,sa=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new It(Tn,1,e,t);n.layers=this.layers,this.add(n);let s=new It(Tn,1,e,t);s.layers=this.layers,this.add(s);let a=new It(Tn,1,e,t);a.layers=this.layers,this.add(a);let o=new It(Tn,1,e,t);o.layers=this.layers,this.add(o);let c=new It(Tn,1,e,t);c.layers=this.layers,this.add(c);let l=new It(Tn,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==ir)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},aa=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var af=new C,of=new jt,lf=new C,cf=new C,hf=new C;var uf=new C,df=new jt,pf=new C,mf=new C;var Il="\\[\\]\\.:\\/",Ku=new RegExp("["+Il+"]","g"),uo="[^"+Il+"]",$u="[^"+Il.replace("\\.","")+"]",Qu=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",uo)+/(WCOD+)?/.source.replace("WCOD",$u)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo)+"$"),ed=["material","materials","bones","map"],ot=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ku,"")}static parseTrackName(e){let t=Qu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);ed.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ce("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void Pe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(r,e,t){let i=t||ot.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ff=new Float32Array(1);var gf=new Ve;var bo=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}},_f=new ne;var vf=new C,xf=new C,yf=new C,Mf=new C,Sf=new C,bf=new C,Tf=new C;var Ef=new C;var wf=new C,Af=new Ve,Cf=new Ve;var Rf=new C,Pf=new ke,If=new ke;var Lf=new C,Nf=new C,Df=new C;var Uf=new C,Ff=new Ln;var Of=new ei;var Bf=new C;function Ll(r,e,t,i){let n=(function(s){switch(s){case qt:case Ho:return{byteLength:1,components:1};case On:case Wo:case mi:return{byteLength:2,components:1};case da:case pa:return{byteLength:2,components:4};case Ai:case ua:case ni:return{byteLength:4,components:1};case Xo:case jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case qo:case ma:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case ri:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function eu(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function id(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),p;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)p=r.HALF_FLOAT;else if(o instanceof Uint16Array)p=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)p=r.SHORT;else if(o instanceof Uint32Array)p=r.UNSIGNED_INT;else if(o instanceof Int32Array)p=r.INT;else if(o instanceof Int8Array)p=r.BYTE;else if(o instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);p=r.UNSIGNED_BYTE}return{buffer:h,type:p,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((p,d)=>p.start-d.start);let h=0;for(let p=1;p<l.length;p++){let d=l[h],u=l[p];u.start<=d.start+d.count+1?d.count=Math.max(d.count,u.start+u.count-d.start):(++h,l[h]=u)}l.length=h+1;for(let p=0,d=l.length;p<d;p++){let u=l[p];r.bufferSubData(o,u.start*c.BYTES_PER_ELEMENT,c,u.start,u.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var He={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},gi={basic:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ct([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ct([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};gi.physical={uniforms:Ct([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var ba={r:0,b:0,g:0},nd=new Ve,tu=new Be;function rd(r,e,t,i,n,s){let a=new ke(0),o,c,l=n===!0?0:1,h=null,p=0,d=null;function u(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let f=m.backgroundBlurriness>0;v=e.get(v,f)}return v}function g(m,v){m.getRGB(ba,Pl(r)),t.buffers.color.setClear(ba.r,ba.g,ba.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:function(m){let v=!1,f=u(m);f===null?g(a,l):f&&f.isColor&&(g(f,1),v=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,v){let f=u(v);f&&(f.isCubeTexture||f.mapping===Ar)?(c===void 0&&(c=new Nt(new tn(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:cn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,x,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nd.makeRotationFromEuler(v.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tu),c.material.toneMapped=je.getTransfer(f.colorSpace)!==tt,h===f&&p===f.version&&d===r.toneMapping||(c.material.needsUpdate=!0,h=f,p=f.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Nt(new In(2,2),new Rt({name:"BackgroundMaterial",uniforms:cn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=je.getTransfer(f.colorSpace)!==tt,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&p===f.version&&d===r.toneMapping||(o.material.needsUpdate=!0,h=f,p=f.version,d=r.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function sd(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(f){return r.bindVertexArray(f)}function c(f){return r.deleteVertexArray(f)}function l(f){let _=[],x=[],b=[];for(let T=0;T<t;T++)_[T]=0,x[T]=0,b[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:x,attributeDivisors:b,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let _=0,x=f.length;_<x;_++)f[_]=0}function p(f){d(f,0)}function d(f,_){let x=s.newAttributes,b=s.enabledAttributes,T=s.attributeDivisors;x[f]=1,b[f]===0&&(r.enableVertexAttribArray(f),b[f]=1),T[f]!==_&&(r.vertexAttribDivisor(f,_),T[f]=_)}function u(){let f=s.newAttributes,_=s.enabledAttributes;for(let x=0,b=_.length;x<b;x++)_[x]!==f[x]&&(r.disableVertexAttribArray(x),_[x]=0)}function g(f,_,x,b,T,M,P){P===!0?r.vertexAttribIPointer(f,_,x,T,M):r.vertexAttribPointer(f,_,x,b,T,M)}function m(){v(),a=!0,s!==n&&(s=n,o(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,_,x,b,T){let M=!1,P=(function(O,I,N,G){let F=G.wireframe===!0,Y=i[I.id];Y===void 0&&(Y={},i[I.id]=Y);let W=O.isInstancedMesh===!0?O.id:0,z=Y[W];z===void 0&&(z={},Y[W]=z);let q=z[N.id];q===void 0&&(q={},z[N.id]=q);let H=q[F];return H===void 0&&(H=l(r.createVertexArray()),q[F]=H),H})(f,b,x,_);s!==P&&(s=P,o(s.object)),M=(function(O,I,N,G){let F=s.attributes,Y=I.attributes,W=0,z=N.getAttributes();for(let q in z)if(z[q].location>=0){let H=F[q],ee=Y[q];if(ee===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;W++}return s.attributesNum!==W||s.index!==G})(f,b,x,T),M&&(function(O,I,N,G){let F={},Y=I.attributes,W=0,z=N.getAttributes();for(let q in z)if(z[q].location>=0){let H=Y[q];H===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(H=O.instanceColor));let ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),F[q]=ee,W++}s.attributes=F,s.attributesNum=W,s.index=G})(f,b,x,T),T!==null&&e.update(T,r.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(O,I,N,G){h();let F=G.attributes,Y=N.getAttributes(),W=I.defaultAttributeValues;for(let z in Y){let q=Y[z];if(q.location>=0){let H=F[z];if(H===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(H=O.instanceColor)),H!==void 0){let ee=H.normalized,de=H.itemSize,we=e.get(H);if(we===void 0)continue;let ve=we.buffer,ye=we.type,te=we.bytesPerElement,he=ye===r.INT||ye===r.UNSIGNED_INT||H.gpuType===ua;if(H.isInterleavedBufferAttribute){let le=H.data,_e=le.stride,Ne=H.offset;if(le.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)d(q.location+$,le.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let $=0;$<q.locationSize;$++)p(q.location+$);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let $=0;$<q.locationSize;$++)g(q.location+$,de/q.locationSize,ye,ee,_e*te,(Ne+de/q.locationSize*$)*te,he)}else{if(H.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)d(q.location+le,H.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<q.locationSize;le++)p(q.location+le);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let le=0;le<q.locationSize;le++)g(q.location+le,de/q.locationSize,ye,ee,de*te,de/q.locationSize*le*te,he)}}else if(W!==void 0){let ee=W[z];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(q.location,ee);break;case 3:r.vertexAttrib3fv(q.location,ee);break;case 4:r.vertexAttrib4fv(q.location,ee);break;default:r.vertexAttrib1fv(q.location,ee)}}}}u()})(f,_,x,b),T!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:m,resetDefaultState:v,dispose:function(){m();for(let f in i){let _=i[f];for(let x in _){let b=_[x];for(let T in b){let M=b[T];for(let P in M)c(M[P].object),delete M[P];delete b[T]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let _=i[f.id];for(let x in _){let b=_[x];for(let T in b){let M=b[T];for(let P in M)c(M[P].object),delete M[P];delete b[T]}}delete i[f.id]},releaseStatesOfObject:function(f){for(let _ in i){let x=i[_],b=f.isInstancedMesh===!0?f.id:0,T=x[b];if(T!==void 0){for(let M in T){let P=T[M];for(let O in P)c(P[O].object),delete P[O];delete T[M]}delete x[b],Object.keys(x).length===0&&delete i[_]}}},releaseStatesOfProgram:function(f){for(let _ in i){let x=i[_];for(let b in x){let T=x[b];if(T[f.id]===void 0)continue;let M=T[f.id];for(let P in M)c(M[P].object),delete M[P];delete T[f.id]}}},initAttributes:h,enableAttribute:p,disableUnusedAttributes:u}}function ad(r,e,t){let i;this.setMode=function(n){i=n},this.render=function(n,s){r.drawArrays(i,n,s),t.update(s,i,1)},this.renderInstances=function(n,s,a){a!==0&&(r.drawArraysInstanced(i,n,s,a),t.update(s,i,a))},this.renderMultiDraw=function(n,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,n,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,i,1)}}function od(r,e,t,i){let n;function s(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Ce("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&l===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(h){return h===ri||i.convert(h)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let p=h===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==qt&&i.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==ni&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function ld(r){let e=this,t=null,i=0,n=!1,s=!1,a=new ci,o=new Be,c={value:null,needsUpdate:!1};function l(h,p,d,u){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,u!==!0||m===null){let v=d+4*g,f=p.matrixWorldInverse;o.getNormalMatrix(f),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,x=d;_!==g;++_,x+=4)a.copy(h[_]).applyMatrix4(f,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||i!==0||n;return n=p,i=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=l(h,p,0)},this.setState=function(h,p,d){let u=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,v=r.get(h);if(!n||u===null||u.length===0||s&&!m)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,_=4*f,x=v.clippingState||null;c.value=x,x=l(u,p,_,d);for(let b=0;b!==_;++b)x[b]=t[b];v.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}tu.set(-1,0,0,0,1,0,0,0,1);var Lh=[.125,.215,.35,.446,.526,.582],Rr=20,Pr=new Hi,Nh=new ke,Nl=null,Dl=0,Ul=0,Fl=!1,cd=new C,Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=cd}=s;Nl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Dl,Ul),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Gn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fn||e.mapping===rn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:mi,format:ri,colorSpace:er,depthBuffer:!1},n=Dh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,p=a-4+1+Lh.length;for(let d=0;d<p;d++){let u=Math.pow(2,h);o.push(u);let g=1/u;d>a-4?g=Lh[d-a+4-1]:d===0&&(g=0),c.push(g);let m=1/(u-2),v=-m,f=1+m,_=[v,v,f,v,f,f,v,v,f,f,v,f],x=6,b=6,T=3,M=2,P=1,O=new Float32Array(T*b*x),I=new Float32Array(M*b*x),N=new Float32Array(P*b*x);for(let F=0;F<x;F++){let Y=F%3*2/3-1,W=F>2?0:-1,z=[Y,W,0,Y+2/3,W,0,Y+2/3,W+1,0,Y,W,0,Y+2/3,W+1,0,Y,W+1,0];O.set(z,T*b*F),I.set(_,M*b*F);let q=[F,F,F,F,F,F];N.set(q,P*b*F)}let G=new at;G.setAttribute("position",new bt(O,T)),G.setAttribute("uv",new bt(I,M)),G.setAttribute("faceIndex",new bt(N,P)),l.push(new Nt(G,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Rr),h=new C(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:wa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new Rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Nt(new at,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,n,s){let a=new It(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,p=l.toneMapping;l.getClearColor(Nh),l.toneMapping=ii,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new tn,new cr({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,g=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,g=!0):(u.color.copy(Nh),g=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):f===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;Gn(n,f*_,v>2?_:0,_,_),l.setRenderTarget(n),g&&l.render(d,a),l.render(e,a)}l.toneMapping=p,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Fn||e.mapping===rn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Gn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Pr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:d}=this,u=this._sizeLods[i],g=3*u*(i>d-4?i-d+4:0),m=4*(this._cubeSize-u);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=d-t,Gn(s,g,m,3*u,2*u),n.setRenderTarget(s),n.render(o,Pr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-i,Gn(e,g,m,3*u,2*u),n.setRenderTarget(e),n.render(o,Pr)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let p=l.uniforms,d=this._sizeLods[i]-1,u=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/u,m=isFinite(s)?1+Math.floor(3*g):Rr;m>Rr&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],f=0;for(let b=0;b<Rr;++b){let T=b/g,M=Math.exp(-T*T/2);v.push(M),b===0?f+=M:b<m&&(f+=2*M)}for(let b=0;b<v.length;b++)v[b]=v[b]/f;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=v,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:_}=this;p.dTheta.value=u,p.mipInt.value=_-i;let x=this._sizeLods[n];Gn(t,3*x*(n>_-4?n-_+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,Pr)}};function Dh(r,e,t){let i=new Vt(r,e,t);return i.texture.mapping=Ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Uh(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Fh(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}var Aa=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ur(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new tn(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:cn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:pi});s.uniforms.tEquirect.value=t;let a=new Nt(n,s),o=t.minFilter;return t.minFilter===sn&&(t.minFilter=At),new sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function hd(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,c){return c===la?o.mapping=Fn:c===ca&&(o.mapping=rn),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?(function(l){if(l&&l.isTexture){let h=l.mapping,p=h===la||h===ca,d=h===Fn||h===rn;if(p||d){let u=t.get(l),g=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return i===null&&(i=new Ea(r)),u=p?i.fromEquirectangular(l,u):i.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{let m=l.image;return p&&m&&m.height>0||d&&m&&(function(v){let f=0,_=6;for(let x=0;x<_;x++)v[x]!==void 0&&f++;return f===_})(m)?(i===null&&(i=new Ea(r)),u=p?i.fromEquirectangular(l):i.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",a),u.texture):null}}}return l})(o):(function(l){if(l&&l.isTexture){let h=l.mapping;if(h===la||h===ca){if(e.has(l))return n(e.get(l).texture,l.mapping);{let p=l.image;if(p&&p.height>0){let d=new Aa(p.height);return d.fromEquirectangularTexture(r,l),e.set(l,d),l.addEventListener("dispose",s),n(d.texture,l.mapping)}return null}}}return l})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function ud(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Qi("WebGLRenderer: "+i+" extension not supported."),n}}}function dd(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let p in l.attributes)e.remove(l.attributes[p]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,p=c.attributes.position,d=0;if(p===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let v=0,f=m.length;v<f;v+=3){let _=m[v+0],x=m[v+1],b=m[v+2];l.push(_,x,x,b,b,_)}}else{let m=p.array;d=p.version;for(let v=0,f=m.length/3-1;v<f;v+=3){let _=v+0,x=v+1,b=v+2;l.push(_,x,x,b,b,_)}}let u=new(p.count>=65535?lr:or)(l,1);u.version=d;let g=s.get(c);g&&e.remove(g),s.set(c,u)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function pd(r,e,t){let i,n,s;this.setMode=function(a){i=a},this.setIndex=function(a){n=a.type,s=a.bytesPerElement},this.render=function(a,o){r.drawElements(i,o,n,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,c){c!==0&&(r.drawElementsInstanced(i,o,n,a*s,c),t.update(o,i,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,n,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,i,1)}}function md(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Pe("WebGLInfo: Unknown draw mode:",i)}}}}function fd(r,e,t){let i=new WeakMap,n=new st;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,p=i.get(a);if(p===void 0||p.count!==h){let O=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],_=0;d===!0&&(_=1),u===!0&&(_=2),g===!0&&(_=3);let x=a.attributes.position.count*_,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*b*4*h),M=new rr(T,x,b,h);M.type=ni,M.needsUpdate=!0;let P=4*_;for(let I=0;I<h;I++){let N=m[I],G=v[I],F=f[I],Y=x*b*4*I;for(let W=0;W<N.count;W++){let z=W*P;d===!0&&(n.fromBufferAttribute(N,W),T[Y+z+0]=n.x,T[Y+z+1]=n.y,T[Y+z+2]=n.z,T[Y+z+3]=0),u===!0&&(n.fromBufferAttribute(G,W),T[Y+z+4]=n.x,T[Y+z+5]=n.y,T[Y+z+6]=n.z,T[Y+z+7]=0),g===!0&&(n.fromBufferAttribute(F,W),T[Y+z+8]=n.x,T[Y+z+9]=n.y,T[Y+z+10]=n.z,T[Y+z+11]=F.itemSize===4?n.w:1)}}p={count:h,texture:M,size:new ne(x,b)},i.set(a,p),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let u=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",u),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}}}function gd(r,e,t,i,n){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=n.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let p=o.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h},dispose:function(){s=new WeakMap}}}var _d={[Uo]:"LINEAR_TONE_MAPPING",[Fo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[Bo]:"ACES_FILMIC_TONE_MAPPING",[Go]:"AGX_TONE_MAPPING",[Vo]:"NEUTRAL_TONE_MAPPING",[zo]:"CUSTOM_TONE_MAPPING"};function vd(r,e,t,i,n,s){let a=new Vt(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,depthTexture:n?new wi(e,t):void 0}),o=new Vt(e,t,{type:mi,depthBuffer:!1,stencilBuffer:!1}),c=new at;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let l=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Nt(c,l),p=new Hi(-1,1,1,-1,0,1),d,u=null,g=null,m=!1,v=null,f=[],_=!1;this.setSize=function(x,b){a.setSize(x,b),o.setSize(x,b);for(let T=0;T<f.length;T++){let M=f[T];M.setSize&&M.setSize(x,b)}},this.setEffects=function(x){f=x,_=f.length>0&&f[0].isRenderPass===!0;let b=a.width,T=a.height;for(let M=0;M<f.length;M++){let P=f[M];P.setSize&&P.setSize(b,T)}},this.begin=function(x,b){if(m||x.toneMapping===ii&&f.length===0)return!1;if(v=b,b!==null){let T=b.width,M=b.height;a.width===T&&a.height===M||this.setSize(T,M)}return _===!1&&x.setRenderTarget(a),d=x.toneMapping,x.toneMapping=ii,!0},this.hasRenderPass=function(){return _},this.end=function(x,b){x.toneMapping=d,m=!0;let T=a,M=o;for(let P=0;P<f.length;P++){let O=f[P];if(O.enabled!==!1&&(O.render(x,M,T,b),O.needsSwap!==!1)){let I=T;T=M,M=I}}if(u!==x.outputColorSpace||g!==x.toneMapping){u=x.outputColorSpace,g=x.toneMapping,l.defines={},je.getTransfer(u)===tt&&(l.defines.SRGB_TRANSFER="");let P=_d[g];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(v),x.render(h,p),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var iu=new Lt,zl=new wi(1,1),nu=new rr,ru=new vs,su=new ur,Oh=[],Bh=[],zh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);function kn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Oh[n];if(s===void 0&&(s=new Float32Array(n),Oh[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ra(r,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function xd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function Md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function Sd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function bd(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Vh.set(i),r.uniformMatrix2fv(this.addr,!1,Vh),yt(t,i)}}function Td(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Gh.set(i),r.uniformMatrix3fv(this.addr,!1,Gh),yt(t,i)}}function Ed(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;zh.set(i),r.uniformMatrix4fv(this.addr,!1,zh),yt(t,i)}}function wd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ad(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function Cd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function Rd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function Pd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Id(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function Ld(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function Nd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function Dd(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?Sa:Ma,s=zl):s=iu,t.setTexture2D(e||s,n)}function Ud(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||ru,n)}function Fd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||su,n)}function Od(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||nu,n)}function Bd(r,e){r.uniform1fv(this.addr,e)}function zd(r,e){let t=kn(e,this.size,2);r.uniform2fv(this.addr,t)}function Gd(r,e){let t=kn(e,this.size,3);r.uniform3fv(this.addr,t)}function Vd(r,e){let t=kn(e,this.size,4);r.uniform4fv(this.addr,t)}function kd(r,e){let t=kn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hd(r,e){let t=kn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Wd(r,e){let t=kn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xd(r,e){r.uniform1iv(this.addr,e)}function jd(r,e){r.uniform2iv(this.addr,e)}function qd(r,e){r.uniform3iv(this.addr,e)}function Yd(r,e){r.uniform4iv(this.addr,e)}function Zd(r,e){r.uniform1uiv(this.addr,e)}function Jd(r,e){r.uniform2uiv(this.addr,e)}function Kd(r,e){r.uniform3uiv(this.addr,e)}function $d(r,e){r.uniform4uiv(this.addr,e)}function Qd(r,e,t){let i=this.cache,n=e.length,s=Ra(t,n),a;xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?zl:iu;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function ep(r,e,t){let i=this.cache,n=e.length,s=Ra(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||ru,s[a])}function tp(r,e,t){let i=this.cache,n=e.length,s=Ra(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||su,s[a])}function ip(r,e,t){let i=this.cache,n=e.length,s=Ra(t,n);xt(i,s)||(r.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||nu,s[a])}var Gl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return xd;case 35664:return yd;case 35665:return Md;case 35666:return Sd;case 35674:return bd;case 35675:return Td;case 35676:return Ed;case 5124:case 35670:return wd;case 35667:case 35671:return Ad;case 35668:case 35672:return Cd;case 35669:case 35673:return Rd;case 5125:return Pd;case 36294:return Id;case 36295:return Ld;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Od}})(t.type)}},Vl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Bd;case 35664:return zd;case 35665:return Gd;case 35666:return Vd;case 35674:return kd;case 35675:return Hd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return jd;case 35668:case 35672:return qd;case 35669:case 35673:return Yd;case 5125:return Zd;case 36294:return Jd;case 36295:return Kd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return ip}})(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function kh(r,e){r.seq.push(e),r.map[e.id]=e}function np(r,e,t){let i=r.name,n=i.length;for(Ol.lastIndex=0;;){let s=Ol.exec(i),a=Ol.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){kh(t,l===void 0?new Gl(o,r,e):new Vl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new kl(o),kh(t,h)),t=h}}}var Vn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);np(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Hh(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var rp=0,Wh=new Be;function Xh(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,c){let l=o.split(`
`),h=[],p=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let u=p;u<d;u++){let g=u+1;h.push(`${g===c?">":" "} ${g}: ${l[u]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function sp(r,e){let t=(function(i){je._getMatrix(Wh,je.workingColorSpace,i);let n=`mat3( ${Wh.elements.map(s=>s.toFixed(4))} )`;switch(je.getTransfer(i)){case tr:return[n,"LinearTransferOETF"];case tt:return[n,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ap={[Uo]:"Linear",[Fo]:"Reinhard",[Oo]:"Cineon",[Bo]:"ACESFilmic",[Go]:"AgX",[Vo]:"Neutral",[zo]:"Custom"};function op(r,e){let t=ap[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ta=new C;function lp(){return je.getLuminanceCoefficients(Ta),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ta.x.toFixed(4)}, ${Ta.y.toFixed(4)}, ${Ta.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ir(r){return r!==""}function jh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(r){return r.replace(cp,up)}var hp=new Map;function up(r,e){let t=He[e];if(t===void 0){let i=hp.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=He[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Hl(t)}var dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(r){return r.replace(dp,pp)}function pp(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Zh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mp={[Er]:"SHADOWMAP_TYPE_PCF",[Nn]:"SHADOWMAP_TYPE_VSM"},fp={[Fn]:"ENVMAP_TYPE_CUBE",[rn]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"},gp={[rn]:"ENVMAP_MODE_REFRACTION"},_p={[ch]:"ENVMAP_BLENDING_MULTIPLY",[hh]:"ENVMAP_BLENDING_MIX",[uh]:"ENVMAP_BLENDING_ADD"};function vp(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(G){return mp[G.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),l=(function(G){return G.envMap===!1?"ENVMAP_TYPE_CUBE":fp[G.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(G){return G.envMap===!1?"ENVMAP_MODE_REFLECTION":gp[G.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),p=(function(G){return G.envMap===!1?"ENVMAP_BLENDING_NONE":_p[G.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(G){let F=G.envMapCubeUVHeight;if(F===null)return null;let Y=Math.log2(F)-2,W=1/F;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:W,maxMip:Y}})(t),u=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)})(t),g=(function(G){let F=[];for(let Y in G){let W=G[Y];W!==!1&&F.push("#define "+Y+" "+W)}return F.join(`
`)})(s),m=n.createProgram(),v,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(v=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?He.tonemapping_pars_fragment:"",t.toneMapping!==ii?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,sp("linearToOutputTexel",t.outputColorSpace),lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Hl(a),a=jh(a,t),a=qh(a,t),o=Hl(o),o=jh(o,t),o=qh(o,t),a=Yh(a),o=Yh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=_+v+a,b=_+f+o,T=Hh(n,n.VERTEX_SHADER,x),M=Hh(n,n.FRAGMENT_SHADER,b);function P(G){if(r.debug.checkShaderErrors){let F=n.getProgramInfoLog(m)||"",Y=n.getShaderInfoLog(T)||"",W=n.getShaderInfoLog(M)||"",z=F.trim(),q=Y.trim(),H=W.trim(),ee=!0,de=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,T,M);else{let we=Xh(n,T,"vertex"),ve=Xh(n,M,"fragment");Pe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+z+`
`+we+`
`+ve)}else z!==""?Ce("WebGLProgram: Program Info Log:",z):q!==""&&H!==""||(de=!1);de&&(G.diagnostics={runnable:ee,programLog:z,vertexShader:{log:q,prefix:v},fragmentShader:{log:H,prefix:f}})}n.deleteShader(T),n.deleteShader(M),O=new Vn(n,m),I=(function(F,Y){let W={},z=F.getProgramParameter(Y,F.ACTIVE_ATTRIBUTES);for(let q=0;q<z;q++){let H=F.getActiveAttrib(Y,q),ee=H.name,de=1;H.type===F.FLOAT_MAT2&&(de=2),H.type===F.FLOAT_MAT3&&(de=3),H.type===F.FLOAT_MAT4&&(de=4),W[ee]={type:H.type,location:F.getAttribLocation(Y,ee),locationSize:de}}return W})(n,m)}let O,I;n.attachShader(m,T),n.attachShader(m,M),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return O===void 0&&P(this),O},this.getAttributes=function(){return I===void 0&&P(this),I};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(m,37297)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}var xp=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xl(e),t.set(e,i)),i}},Xl=class{constructor(e){this.id=xp++,this.code=e,this.usedTimes=0}};function yp(r,e,t,i,n,s){let a=new sr,o=new Wl,c=new Set,l=[],h=new Map,p=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,f,_,x,b){let T=_.fog,M=x.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?_.environment:null,O=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,I=e.get(m.envMap||P,O),N=I&&I.mapping===Ar?I.image.height:null,G=u[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Ce("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let F=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Y=F!==void 0?F.length:0,W,z,q,H,ee=0;if(M.morphAttributes.position!==void 0&&(ee=1),M.morphAttributes.normal!==void 0&&(ee=2),M.morphAttributes.color!==void 0&&(ee=3),G){let lt=gi[G];W=lt.vertexShader,z=lt.fragmentShader}else{W=m.vertexShader,z=m.fragmentShader;let lt=o.getVertexShaderStage(m),Ye=o.getFragmentShaderStage(m);o.update(m,lt,Ye),q=lt.id,H=Ye.id}let de=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),ve=x.isInstancedMesh===!0,ye=x.isBatchedMesh===!0,te=!!m.map,he=!!m.matcap,le=!!I,_e=!!m.aoMap,Ne=!!m.lightMap,$=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,S=!!m.displacementMap,w=!!m.emissiveMap,U=!!m.metalnessMap,y=!!m.roughnessMap,D=m.anisotropy>0,L=m.clearcoat>0,A=m.dispersion>0,V=m.iridescence>0,X=m.sheen>0,Z=m.transmission>0,se=D&&!!m.anisotropyMap,Me=L&&!!m.clearcoatMap,Se=L&&!!m.clearcoatNormalMap,pe=L&&!!m.clearcoatRoughnessMap,Ae=V&&!!m.iridescenceMap,Q=V&&!!m.iridescenceThicknessMap,oe=X&&!!m.sheenColorMap,re=X&&!!m.sheenRoughnessMap,me=!!m.specularMap,it=!!m.specularColorMap,$e=!!m.specularIntensityMap,Te=Z&&!!m.transmissionMap,fe=Z&&!!m.thicknessMap,ie=!!m.gradientMap,xe=!!m.alphaMap,ae=m.alphaTest>0,qe=!!m.alphaHash,De=!!m.extensions,ze=ii;m.toneMapped&&(de!==null&&de.isXRRenderTarget!==!0||(ze=r.toneMapping));let Re={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:W,fragmentShader:z,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:H,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:ye,batchingColor:ye&&x._colorsTexture!==null,instancing:ve,instancingColor:ve&&x.instanceColor!==null,instancingMorph:ve&&x.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:te,matcap:he,envMap:le,envMapMode:le&&I.mapping,envMapCubeUVHeight:N,aoMap:_e,lightMap:Ne,bumpMap:$,normalMap:R,displacementMap:S,emissiveMap:w,normalMapObjectSpace:R&&m.normalMapType===fh,normalMapTangentSpace:R&&m.normalMapType===wl,packedNormalMap:R&&m.normalMapType===wl&&(Je=m.normalMap.format,Je===on||Je===xa||Je===ya),metalnessMap:U,roughnessMap:y,anisotropy:D,anisotropyMap:se,clearcoat:L,clearcoatMap:Me,clearcoatNormalMap:Se,clearcoatRoughnessMap:pe,dispersion:A,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:oe,sheenRoughnessMap:re,specularMap:me,specularColorMap:it,specularIntensityMap:$e,transmission:Z,transmissionMap:Te,thicknessMap:fe,gradientMap:ie,opaque:m.transparent===!1&&m.blending===wr&&m.alphaToCoverage===!1,alphaMap:xe,alphaTest:ae,alphaHash:qe,combine:m.combine,mapUv:te&&g(m.map.channel),aoMapUv:_e&&g(m.aoMap.channel),lightMapUv:Ne&&g(m.lightMap.channel),bumpMapUv:$&&g(m.bumpMap.channel),normalMapUv:R&&g(m.normalMap.channel),displacementMapUv:S&&g(m.displacementMap.channel),emissiveMapUv:w&&g(m.emissiveMap.channel),metalnessMapUv:U&&g(m.metalnessMap.channel),roughnessMapUv:y&&g(m.roughnessMap.channel),anisotropyMapUv:se&&g(m.anisotropyMap.channel),clearcoatMapUv:Me&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:re&&g(m.sheenRoughnessMap.channel),specularMapUv:me&&g(m.specularMap.channel),specularColorMapUv:it&&g(m.specularColorMap.channel),specularIntensityMapUv:$e&&g(m.specularIntensityMap.channel),transmissionMapUv:Te&&g(m.transmissionMap.channel),thicknessMapUv:fe&&g(m.thicknessMap.channel),alphaMapUv:xe&&g(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||D),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!M.attributes.uv&&(te||xe),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:we,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&f.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,decodeVideoTexture:te&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===tt,decodeVideoTextureEmissive:w&&m.emissiveMap.isVideoTexture===!0&&je.getTransfer(m.emissiveMap.colorSpace)===tt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===di,flipSided:m.side===Dt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:De&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&m.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var Je;return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let f in m.defines)v.push(f),v.push(m.defines[f]);return m.isRawShaderMaterial===!1&&((function(f,_){f.push(_.precision),f.push(_.outputColorSpace),f.push(_.envMapMode),f.push(_.envMapCubeUVHeight),f.push(_.mapUv),f.push(_.alphaMapUv),f.push(_.lightMapUv),f.push(_.aoMapUv),f.push(_.bumpMapUv),f.push(_.normalMapUv),f.push(_.displacementMapUv),f.push(_.emissiveMapUv),f.push(_.metalnessMapUv),f.push(_.roughnessMapUv),f.push(_.anisotropyMapUv),f.push(_.clearcoatMapUv),f.push(_.clearcoatNormalMapUv),f.push(_.clearcoatRoughnessMapUv),f.push(_.iridescenceMapUv),f.push(_.iridescenceThicknessMapUv),f.push(_.sheenColorMapUv),f.push(_.sheenRoughnessMapUv),f.push(_.specularMapUv),f.push(_.specularColorMapUv),f.push(_.specularIntensityMapUv),f.push(_.transmissionMapUv),f.push(_.thicknessMapUv),f.push(_.combine),f.push(_.fogExp2),f.push(_.sizeAttenuation),f.push(_.morphTargetsCount),f.push(_.morphAttributeCount),f.push(_.numDirLights),f.push(_.numPointLights),f.push(_.numSpotLights),f.push(_.numSpotLightMaps),f.push(_.numHemiLights),f.push(_.numRectAreaLights),f.push(_.numDirLightShadows),f.push(_.numPointLightShadows),f.push(_.numSpotLightShadows),f.push(_.numSpotLightShadowsWithMaps),f.push(_.numLightProbes),f.push(_.shadowMapType),f.push(_.toneMapping),f.push(_.numClippingPlanes),f.push(_.numClipIntersection),f.push(_.depthPacking)})(v,m),(function(f,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),f.push(a.mask)})(v,m),v.push(r.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=u[m.type],f;if(v){let _=gi[v];f=Ph.clone(_.uniforms)}else f=m.uniforms;return f},acquireProgram:function(m,v){let f=h.get(v);return f!==void 0?++f.usedTimes:(f=new vp(r,v,m,n),l.push(f),h.set(v,f)),f},releaseProgram:function(m){if(--m.usedTimes===0){let v=l.indexOf(m);l[v]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:l,dispose:function(){o.dispose()}}}function Mp(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Sp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Jh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kh(){let r=[],e=0,t=[],i=[],n=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,p,d){let u=r[e];return u===void 0?(u={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:p,group:d},r[e]=u):(u.id=o.id,u.object=o,u.geometry=c,u.material=l,u.materialVariant=s(o),u.groupOrder=h,u.renderOrder=o.renderOrder,u.z=p,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,c,l,h,p,d){let u=a(o,c,l,h,p,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(o,c,l,h,p,d){let u=a(o,c,l,h,p,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let o=e,c=r.length;o<c;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c,l){t.length>1&&t.sort(o||Sp),i.length>1&&i.sort(c||Jh),n.length>1&&n.sort(c||Jh),l&&(t.reverse(),i.reverse(),n.reverse())}}}function bp(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Kh,r.set(e,[n])):t>=i.length?(n=new Kh,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Tp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ke};break;case"SpotLight":t={position:new C,direction:new C,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}var Ep=0;function wp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ap(r){let e=new Tp,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let n=new C,s=new Ve,a=new Ve;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,d=0,u=0,g=0,m=0,v=0,f=0,_=0,x=0,b=0,T=0;o.sort(wp);for(let P=0,O=o.length;P<O;P++){let I=o[P],N=I.color,G=I.intensity,F=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(Y=I.shadow.map.texture.format===on?I.shadow.map.texture:I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=N.r*G,l+=N.g*G,h+=N.b*G;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],G);T++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(G),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[u]=W;let z=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,z.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[u]=z.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,i.spotShadow[u]=q,i.spotShadowMap[u]=Y,_++}u++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(N).multiplyScalar(G),W.halfWidth.set(.5*I.width,0,0),W.halfHeight.set(0,.5*I.height,0),i.rectArea[g]=W,g++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let z=I.shadow,q=t.get(I);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=I.shadow.matrix,f++}i.point[d]=W,d++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(G),W.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[m]=W,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let M=i.hash;M.directionalLength===p&&M.pointLength===d&&M.spotLength===u&&M.rectAreaLength===g&&M.hemiLength===m&&M.numDirectionalShadows===v&&M.numPointShadows===f&&M.numSpotShadows===_&&M.numSpotMaps===x&&M.numLightProbes===T||(i.directional.length=p,i.spot.length=u,i.rectArea.length=g,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=_+x-b,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,M.directionalLength=p,M.pointLength=d,M.spotLength=u,M.rectAreaLength=g,M.hemiLength=m,M.numDirectionalShadows=v,M.numPointShadows=f,M.numSpotShadows=_,M.numSpotMaps=x,M.numLightProbes=T,i.version=Ep++)},setupView:function(o,c){let l=0,h=0,p=0,d=0,u=0,g=c.matrixWorldInverse;for(let m=0,v=o.length;m<v;m++){let f=o[m];if(f.isDirectionalLight){let _=i.directional[l];_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),l++}else if(f.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),p++}else if(f.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(.5*f.width,0,0),_.halfHeight.set(0,.5*f.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let _=i.hemi[u];_.direction.setFromMatrixPosition(f.matrixWorld),_.direction.transformDirection(g),u++}}},state:i}}function $h(r){let e=new Ap(r),t=[],i=[],n=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){n.push(a)}}}function Cp(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new $h(r),e.set(t,[s])):i>=n.length?(s=new $h(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var Rp=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Pp=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Qh=new Ve,Lr=new C,Bl=new C;function Ip(r,e,t){let i=new Gi,n=new ne,s=new ne,a=new st,o=new qs,c=new Ys,l={},h=t.maxTextureSize,p={[Dn]:Dt,[Dt]:Dn,[di]:di},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new at;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Nt(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;function _(M,P){let O=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vt(n.x,n.y,{format:on,type:mi})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(P,null,O,d,m,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(P,null,O,u,m,null)}function x(M,P,O,I){let N=null,G=O.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(G!==void 0)N=G;else if(N=O.isPointLight===!0?c:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=N.uuid,Y=P.uuid,W=l[F];W===void 0&&(W={},l[F]=W);let z=W[Y];z===void 0&&(z=N.clone(),W[Y]=z,P.addEventListener("dispose",T)),N=z}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=I===Nn?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:p[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,O.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(r.properties.get(N).light=O),N}function b(M,P,O,I,N){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===Nn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld);let F=e.update(M),Y=M.material;if(Array.isArray(Y)){let W=F.groups;for(let z=0,q=W.length;z<q;z++){let H=W[z],ee=Y[H.materialIndex];if(ee&&ee.visible){let de=x(M,ee,I,N);M.onBeforeShadow(r,M,P,O,F,de,H),r.renderBufferDirect(O,null,F,de,M,H),M.onAfterShadow(r,M,P,O,F,de,H)}}}else if(Y.visible){let W=x(M,Y,I,N);M.onBeforeShadow(r,M,P,O,F,W,null),r.renderBufferDirect(O,null,F,W,M,null),M.onAfterShadow(r,M,P,O,F,W,null)}}let G=M.children;for(let F=0,Y=G.length;F<Y;F++)b(G[F],P,O,I,N)}function T(M){M.target.removeEventListener("dispose",T);for(let P in l){let O=l[P],I=M.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}this.render=function(M,P,O){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===kc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Er);let I=r.getRenderTarget(),N=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),F=r.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=f!==this.type;Y&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=M.length;W<z;W++){let q=M[W],H=q.shadow;if(H===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let ee=H.getFrameExtents();n.multiply(ee),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ee.x),n.x=s.x*ee.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ee.y),n.y=s.y*ee.y,H.mapSize.y=s.y));let de=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=de,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Nn){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vt(n.x,n.y,{format:on,type:mi,minFilter:At,magFilter:At,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new wi(n.x,n.y,ni),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Wi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt}else q.isPointLight?(H.map=new Aa(n.x),H.map.depthTexture=new Ss(n.x,Ai)):(H.map=new Vt(n.x,n.y),H.map.depthTexture=new wi(n.x,n.y,Ai)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Wi,this.type===Er?(H.map.depthTexture.compareFunction=de?Sa:Ma,H.map.depthTexture.minFilter=At,H.map.depthTexture.magFilter=At):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt);H.camera.updateProjectionMatrix()}let we=H.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<we;ve++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,ve),r.clear();else{ve===0&&(r.setRenderTarget(H.map),r.clear());let ye=H.getViewport(ve);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),F.viewport(a)}if(q.isPointLight){let ye=H.camera,te=H.matrix,he=q.distance||ye.far;he!==ye.far&&(ye.far=he,ye.updateProjectionMatrix()),Lr.setFromMatrixPosition(q.matrixWorld),ye.position.copy(Lr),Bl.copy(ye.position),Bl.add(Rp[ve]),ye.up.copy(Pp[ve]),ye.lookAt(Bl),ye.updateMatrixWorld(),te.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Qh.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Qh,ye.coordinateSystem,ye.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),b(P,O,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Nn&&_(H,O),H.needsUpdate=!1}f=this.type,v.needsUpdate=!1,r.setRenderTarget(I,N,G)}}function Lp(r,e){let t=new function(){let y=!1,D=new st,L=null,A=new st(0,0,0,0);return{setMask:function(V){L===V||y||(r.colorMask(V,V,V,V),L=V)},setLocked:function(V){y=V},setClear:function(V,X,Z,se,Me){Me===!0&&(V*=se,X*=se,Z*=se),D.set(V,X,Z,se),A.equals(D)===!1&&(r.clearColor(V,X,Z,se),A.copy(D))},reset:function(){y=!1,L=null,A.set(-1,0,0,0)}}},i=new function(){let y=!1,D=!1,L=null,A=null,V=null;return{setReversed:function(X){if(D!==X){let Z=e.get("EXT_clip_control");X?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),D=X;let se=V;V=null,this.setClear(se)}},getReversed:function(){return D},setTest:function(X){X?le(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(X){L===X||y||(r.depthMask(X),L=X)},setFunc:function(X){if(D&&(X=Eh[X]),A!==X){switch(X){case Co:r.depthFunc(r.NEVER);break;case Ro:r.depthFunc(r.ALWAYS);break;case Po:r.depthFunc(r.LESS);break;case oa:r.depthFunc(r.LEQUAL);break;case Io:r.depthFunc(r.EQUAL);break;case Lo:r.depthFunc(r.GEQUAL);break;case No:r.depthFunc(r.GREATER);break;case Do:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}A=X}},setLocked:function(X){y=X},setClear:function(X){V!==X&&(V=X,D&&(X=1-X),r.clearDepth(X))},reset:function(){y=!1,L=null,A=null,V=null,D=!1}}},n=new function(){let y=!1,D=null,L=null,A=null,V=null,X=null,Z=null,se=null,Me=null;return{setTest:function(Se){y||(Se?le(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Se){D===Se||y||(r.stencilMask(Se),D=Se)},setFunc:function(Se,pe,Ae){L===Se&&A===pe&&V===Ae||(r.stencilFunc(Se,pe,Ae),L=Se,A=pe,V=Ae)},setOp:function(Se,pe,Ae){X===Se&&Z===pe&&se===Ae||(r.stencilOp(Se,pe,Ae),X=Se,Z=pe,se=Ae)},setLocked:function(Se){y=Se},setClear:function(Se){Me!==Se&&(r.clearStencil(Se),Me=Se)},reset:function(){y=!1,D=null,L=null,A=null,V=null,X=null,Z=null,se=null,Me=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l={},h=new WeakMap,p=[],d=null,u=!1,g=null,m=null,v=null,f=null,_=null,x=null,b=null,T=new ke(0,0,0),M=0,P=!1,O=null,I=null,N=null,G=null,F=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,z=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=z>=2);let H=null,ee={},de=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),ve=new st().fromArray(de),ye=new st().fromArray(we);function te(y,D,L,A){let V=new Uint8Array(4),X=r.createTexture();r.bindTexture(y,X),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Z=0;Z<L;Z++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(D,0,r.RGBA,1,1,A,0,r.RGBA,r.UNSIGNED_BYTE,V):r.texImage2D(D+Z,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,V);return X}let he={};function le(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function _e(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}he[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),le(r.DEPTH_TEST),i.setFunc(oa),S(!1),w(To),le(r.CULL_FACE),R(pi);let Ne={[Un]:r.FUNC_ADD,[Wc]:r.FUNC_SUBTRACT,[Xc]:r.FUNC_REVERSE_SUBTRACT};Ne[jc]=r.MIN,Ne[qc]=r.MAX;let $={[Yc]:r.ZERO,[Zc]:r.ONE,[Jc]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[rh]:r.SRC_ALPHA_SATURATE,[ih]:r.DST_COLOR,[eh]:r.DST_ALPHA,[Kc]:r.ONE_MINUS_SRC_COLOR,[Qc]:r.ONE_MINUS_SRC_ALPHA,[nh]:r.ONE_MINUS_DST_COLOR,[th]:r.ONE_MINUS_DST_ALPHA,[sh]:r.CONSTANT_COLOR,[ah]:r.ONE_MINUS_CONSTANT_COLOR,[oh]:r.CONSTANT_ALPHA,[lh]:r.ONE_MINUS_CONSTANT_ALPHA};function R(y,D,L,A,V,X,Z,se,Me,Se){if(y!==pi){if(u===!1&&(le(r.BLEND),u=!0),y===Hc)V=V||D,X=X||L,Z=Z||A,D===m&&V===_||(r.blendEquationSeparate(Ne[D],Ne[V]),m=D,_=V),L===v&&A===f&&X===x&&Z===b||(r.blendFuncSeparate($[L],$[A],$[X],$[Z]),v=L,f=A,x=X,b=Z),se.equals(T)!==!1&&Me===M||(r.blendColor(se.r,se.g,se.b,Me),T.copy(se),M=Me),g=y,P=!1;else if(y!==g||Se!==P){if(m===Un&&_===Un||(r.blendEquation(r.FUNC_ADD),m=Un,_=Un),Se)switch(y){case wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Eo:r.blendFunc(r.ONE,r.ONE);break;case wo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ao:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pe("WebGLState: Invalid blending: ",y)}else switch(y){case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case wo:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ao:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",y)}v=null,f=null,x=null,b=null,T.set(0,0,0),M=0,g=y,P=Se}}else u===!0&&(_e(r.BLEND),u=!1)}function S(y){O!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),O=y)}function w(y){y!==Gc?(le(r.CULL_FACE),y!==I&&(y===To?r.cullFace(r.BACK):y===Vc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),I=y}function U(y,D,L){y?(le(r.POLYGON_OFFSET_FILL),G===D&&F===L||(G=D,F=L,i.getReversed()&&(D=-D),r.polygonOffset(D,L))):_e(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:le,disable:_e,bindFramebuffer:function(y,D){return l[y]!==D&&(r.bindFramebuffer(y,D),l[y]=D,y===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=D),y===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=D),!0)},drawBuffers:function(y,D){let L=p,A=!1;if(y){L=h.get(D),L===void 0&&(L=[],h.set(D,L));let V=y.textures;if(L.length!==V.length||L[0]!==r.COLOR_ATTACHMENT0){for(let X=0,Z=V.length;X<Z;X++)L[X]=r.COLOR_ATTACHMENT0+X;L.length=V.length,A=!0}}else L[0]!==r.BACK&&(L[0]=r.BACK,A=!0);A&&r.drawBuffers(L)},useProgram:function(y){return d!==y&&(r.useProgram(y),d=y,!0)},setBlending:R,setMaterial:function(y,D){y.side===di?_e(r.CULL_FACE):le(r.CULL_FACE);let L=y.side===Dt;D&&(L=!L),S(L),y.blending===wr&&y.transparent===!1?R(pi):R(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let A=y.stencilWrite;n.setTest(A),A&&(n.setMask(y.stencilWriteMask),n.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),n.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),U(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:w,setLineWidth:function(y){y!==N&&(W&&r.lineWidth(y),N=y)},setPolygonOffset:U,setScissorTest:function(y){y?le(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+Y-1),H!==y&&(r.activeTexture(y),H=y)},bindTexture:function(y,D,L){L===void 0&&(L=H===null?r.TEXTURE0+Y-1:H);let A=ee[L];A===void 0&&(A={type:void 0,texture:void 0},ee[L]=A),A.type===y&&A.texture===D||(H!==L&&(r.activeTexture(L),H=L),r.bindTexture(y,D||he[y]),A.type=y,A.texture=D)},unbindTexture:function(){let y=ee[H];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){Pe("WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){Pe("WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){Pe("WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){Pe("WebGLState:",y)}},pixelStorei:function(y,D){c[y]!==D&&(r.pixelStorei(y,D),c[y]=D)},getParameter:function(y){return c[y]!==void 0?c[y]:r.getParameter(y)},updateUBOMapping:function(y,D){let L=a.get(D);L===void 0&&(L=new WeakMap,a.set(D,L));let A=L.get(y);A===void 0&&(A=r.getUniformBlockIndex(D,y.name),L.set(y,A))},uniformBlockBinding:function(y,D){let L=a.get(D).get(y);s.get(D)!==L&&(r.uniformBlockBinding(D,L,y.__bindingPointIndex),s.set(D,L))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){Pe("WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){Pe("WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){Pe("WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){Pe("WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){Pe("WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){Pe("WebGLState:",y)}},scissor:function(y){ve.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),ve.copy(y))},viewport:function(y){ye.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),ye.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},c={},H=null,ee={},l={},h=new WeakMap,p=[],d=null,u=!1,g=null,m=null,v=null,f=null,_=null,x=null,b=null,T=new ke(0,0,0),M=0,P=!1,O=null,I=null,N=null,G=null,F=null,ve.set(0,0,r.canvas.width,r.canvas.height),ye.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Np(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap,p=new Set,d,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return g?new OffscreenCanvas(R,S):nr("canvas")}function v(R,S,w){let U=1,y=$(R);if((y.width>w||y.height>w)&&(U=w/Math.max(y.width,y.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let D=Math.floor(U*y.width),L=Math.floor(U*y.height);d===void 0&&(d=m(D,L));let A=S?m(D,L):d;return A.width=D,A.height=L,A.getContext("2d").drawImage(R,0,0,D,L),Ce("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+D+"x"+L+")."),A}return"data"in R&&Ce("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),R}return R}function f(R){return R.generateMipmaps}function _(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(R,S,w,U,y,D=!1){if(R!==null){if(r[R]!==void 0)return r[R];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let L;U&&(L=e.get("EXT_texture_norm16"),L||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=S;if(S===r.RED&&(w===r.FLOAT&&(A=r.R32F),w===r.HALF_FLOAT&&(A=r.R16F),w===r.UNSIGNED_BYTE&&(A=r.R8),w===r.UNSIGNED_SHORT&&L&&(A=L.R16_EXT),w===r.SHORT&&L&&(A=L.R16_SNORM_EXT)),S===r.RED_INTEGER&&(w===r.UNSIGNED_BYTE&&(A=r.R8UI),w===r.UNSIGNED_SHORT&&(A=r.R16UI),w===r.UNSIGNED_INT&&(A=r.R32UI),w===r.BYTE&&(A=r.R8I),w===r.SHORT&&(A=r.R16I),w===r.INT&&(A=r.R32I)),S===r.RG&&(w===r.FLOAT&&(A=r.RG32F),w===r.HALF_FLOAT&&(A=r.RG16F),w===r.UNSIGNED_BYTE&&(A=r.RG8),w===r.UNSIGNED_SHORT&&L&&(A=L.RG16_EXT),w===r.SHORT&&L&&(A=L.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(w===r.UNSIGNED_BYTE&&(A=r.RG8UI),w===r.UNSIGNED_SHORT&&(A=r.RG16UI),w===r.UNSIGNED_INT&&(A=r.RG32UI),w===r.BYTE&&(A=r.RG8I),w===r.SHORT&&(A=r.RG16I),w===r.INT&&(A=r.RG32I)),S===r.RGB_INTEGER&&(w===r.UNSIGNED_BYTE&&(A=r.RGB8UI),w===r.UNSIGNED_SHORT&&(A=r.RGB16UI),w===r.UNSIGNED_INT&&(A=r.RGB32UI),w===r.BYTE&&(A=r.RGB8I),w===r.SHORT&&(A=r.RGB16I),w===r.INT&&(A=r.RGB32I)),S===r.RGBA_INTEGER&&(w===r.UNSIGNED_BYTE&&(A=r.RGBA8UI),w===r.UNSIGNED_SHORT&&(A=r.RGBA16UI),w===r.UNSIGNED_INT&&(A=r.RGBA32UI),w===r.BYTE&&(A=r.RGBA8I),w===r.SHORT&&(A=r.RGBA16I),w===r.INT&&(A=r.RGBA32I)),S===r.RGB&&(w===r.UNSIGNED_SHORT&&L&&(A=L.RGB16_EXT),w===r.SHORT&&L&&(A=L.RGB16_SNORM_EXT),w===r.UNSIGNED_INT_5_9_9_9_REV&&(A=r.RGB9_E5),w===r.UNSIGNED_INT_10F_11F_11F_REV&&(A=r.R11F_G11F_B10F)),S===r.RGBA){let V=D?tr:je.getTransfer(y);w===r.FLOAT&&(A=r.RGBA32F),w===r.HALF_FLOAT&&(A=r.RGBA16F),w===r.UNSIGNED_BYTE&&(A=V===tt?r.SRGB8_ALPHA8:r.RGBA8),w===r.UNSIGNED_SHORT&&L&&(A=L.RGBA16_EXT),w===r.SHORT&&L&&(A=L.RGBA16_SNORM_EXT),w===r.UNSIGNED_SHORT_4_4_4_4&&(A=r.RGBA4),w===r.UNSIGNED_SHORT_5_5_5_1&&(A=r.RGB5_A1)}return A!==r.R16F&&A!==r.R32F&&A!==r.RG16F&&A!==r.RG32F&&A!==r.RGBA16F&&A!==r.RGBA32F||e.get("EXT_color_buffer_float"),A}function T(R,S){let w;return R?S===null||S===Ai||S===Bn?w=r.DEPTH24_STENCIL8:S===ni?w=r.DEPTH32F_STENCIL8:S===On&&(w=r.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===Bn?w=r.DEPTH_COMPONENT24:S===ni?w=r.DEPTH_COMPONENT32F:S===On&&(w=r.DEPTH_COMPONENT16),w}function M(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==At?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function P(R){let S=R.target;S.removeEventListener("dispose",P),(function(w){let U=i.get(w);if(U.__webglInit===void 0)return;let y=w.source,D=u.get(y);if(D){let L=D[U.__cacheKey];L.usedTimes--,L.usedTimes===0&&I(w),Object.keys(D).length===0&&u.delete(y)}i.remove(w)})(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function O(R){let S=R.target;S.removeEventListener("dispose",O),(function(w){let U=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(U.__webglFramebuffer[D]))for(let L=0;L<U.__webglFramebuffer[D].length;L++)r.deleteFramebuffer(U.__webglFramebuffer[D][L]);else r.deleteFramebuffer(U.__webglFramebuffer[D]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[D])}else{if(Array.isArray(U.__webglFramebuffer))for(let D=0;D<U.__webglFramebuffer.length;D++)r.deleteFramebuffer(U.__webglFramebuffer[D]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let D=0;D<U.__webglColorRenderbuffer.length;D++)U.__webglColorRenderbuffer[D]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[D]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let y=w.textures;for(let D=0,L=y.length;D<L;D++){let A=i.get(y[D]);A.__webglTexture&&(r.deleteTexture(A.__webglTexture),a.memory.textures--),i.remove(y[D])}i.remove(w)})(S)}function I(R){let S=i.get(R);r.deleteTexture(S.__webglTexture);let w=R.source;delete u.get(w)[S.__cacheKey],a.memory.textures--}let N=0;function G(R,S){let w=i.get(R);if(R.isVideoTexture&&(function(U){let y=a.render.frame;h.get(U)!==y&&(h.set(U,y),U.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&w.__version!==R.version){let U=R.image;if(U===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void ee(w,R,S);Ce("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(w.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,w.__webglTexture,r.TEXTURE0+S)}let F={[ds]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[ps]:r.MIRRORED_REPEAT},Y={[Xt]:r.NEAREST,[dh]:r.NEAREST_MIPMAP_NEAREST,[Cr]:r.NEAREST_MIPMAP_LINEAR,[At]:r.LINEAR,[ha]:r.LINEAR_MIPMAP_NEAREST,[sn]:r.LINEAR_MIPMAP_LINEAR},W={[gh]:r.NEVER,[Mh]:r.ALWAYS,[_h]:r.LESS,[Ma]:r.LEQUAL,[vh]:r.EQUAL,[Sa]:r.GEQUAL,[xh]:r.GREATER,[yh]:r.NOTEQUAL};function z(R,S){if(S.type!==ni||e.has("OES_texture_float_linear")!==!1||S.magFilter!==At&&S.magFilter!==ha&&S.magFilter!==Cr&&S.magFilter!==sn&&S.minFilter!==At&&S.minFilter!==ha&&S.minFilter!==Cr&&S.minFilter!==sn||Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,F[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,F[S.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,F[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Y[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,W[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Cr&&S.minFilter!==sn||S.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let w=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(R,S){let w=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));let U=S.source,y=u.get(U);y===void 0&&(y={},u.set(U,y));let D=(function(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()})(S);if(D!==R.__cacheKey){y[D]===void 0&&(y[D]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,w=!0),y[D].usedTimes++;let L=y[R.__cacheKey];L!==void 0&&(y[R.__cacheKey].usedTimes--,L.usedTimes===0&&I(S)),R.__cacheKey=D,R.__webglTexture=y[D].texture}return w}function H(R,S,w){return Math.floor(Math.floor(R/w)/S)}function ee(R,S,w){let U=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(U=r.TEXTURE_3D);let y=q(R,S),D=S.source;t.bindTexture(U,R.__webglTexture,r.TEXTURE0+w);let L=i.get(D);if(D.version!==L.__version||y===!0){if(t.activeTexture(r.TEXTURE0+w),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let oe=je.getPrimaries(je.workingColorSpace),re=S.colorSpace===ln?null:je.getPrimaries(S.colorSpace),me=S.colorSpace===ln||oe===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let A=v(S.image,!1,n.maxTextureSize);A=Ne(S,A);let V=s.convert(S.format,S.colorSpace),X=s.convert(S.type),Z,se=b(S.internalFormat,V,X,S.normalized,S.colorSpace,S.isVideoTexture);z(U,S);let Me=S.mipmaps,Se=S.isVideoTexture!==!0,pe=L.__version===void 0||y===!0,Ae=D.dataReady,Q=M(S,A);if(S.isDepthTexture)se=T(S.format===an,S.type),pe&&(Se?t.texStorage2D(r.TEXTURE_2D,1,se,A.width,A.height):t.texImage2D(r.TEXTURE_2D,0,se,A.width,A.height,0,V,X,null));else if(S.isDataTexture)if(Me.length>0){Se&&pe&&t.texStorage2D(r.TEXTURE_2D,Q,se,Me[0].width,Me[0].height);for(let oe=0,re=Me.length;oe<re;oe++)Z=Me[oe],Se?Ae&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Z.width,Z.height,V,X,Z.data):t.texImage2D(r.TEXTURE_2D,oe,se,Z.width,Z.height,0,V,X,Z.data);S.generateMipmaps=!1}else Se?(pe&&t.texStorage2D(r.TEXTURE_2D,Q,se,A.width,A.height),Ae&&(function(oe,re,me,it){let $e=oe.updateRanges;if($e.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,me,it,re.data);else{$e.sort((ae,qe)=>ae.start-qe.start);let Te=0;for(let ae=1;ae<$e.length;ae++){let qe=$e[Te],De=$e[ae],ze=qe.start+qe.count,Re=H(De.start,re.width,4),Je=H(qe.start,re.width,4);De.start<=ze+1&&Re===Je&&H(De.start+De.count-1,re.width,4)===Re?qe.count=Math.max(qe.count,De.start+De.count-qe.start):(++Te,$e[Te]=De)}$e.length=Te+1;let fe=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),xe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,re.width);for(let ae=0,qe=$e.length;ae<qe;ae++){let De=$e[ae],ze=Math.floor(De.start/4),Re=Math.ceil(De.count/4),Je=ze%re.width,lt=Math.floor(ze/re.width),Ye=Re;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(r.UNPACK_SKIP_ROWS,lt),t.texSubImage2D(r.TEXTURE_2D,0,Je,lt,Ye,1,me,it,re.data)}oe.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,fe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,xe)}})(S,A,V,X)):t.texImage2D(r.TEXTURE_2D,0,se,A.width,A.height,0,V,X,A.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,se,Me[0].width,Me[0].height,A.depth);for(let oe=0,re=Me.length;oe<re;oe++)if(Z=Me[oe],S.format!==ri)if(V!==null)if(Se){if(Ae)if(S.layerUpdates.size>0){let me=Ll(Z.width,Z.height,S.format,S.type);for(let it of S.layerUpdates){let $e=Z.data.subarray(it*me/Z.data.BYTES_PER_ELEMENT,(it+1)*me/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,it,Z.width,Z.height,1,V,$e)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,A.depth,V,Z.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,se,Z.width,Z.height,A.depth,0,Z.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?Ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,A.depth,V,X,Z.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,se,Z.width,Z.height,A.depth,0,V,X,Z.data)}else{Se&&pe&&t.texStorage2D(r.TEXTURE_2D,Q,se,Me[0].width,Me[0].height);for(let oe=0,re=Me.length;oe<re;oe++)Z=Me[oe],S.format!==ri?V!==null?Se?Ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Z.width,Z.height,V,Z.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,se,Z.width,Z.height,0,Z.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?Ae&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Z.width,Z.height,V,X,Z.data):t.texImage2D(r.TEXTURE_2D,oe,se,Z.width,Z.height,0,V,X,Z.data)}else if(S.isDataArrayTexture)if(Se){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,se,A.width,A.height,A.depth),Ae)if(S.layerUpdates.size>0){let oe=Ll(A.width,A.height,S.format,S.type);for(let re of S.layerUpdates){let me=A.data.subarray(re*oe/A.data.BYTES_PER_ELEMENT,(re+1)*oe/A.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,A.width,A.height,1,V,X,me)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,V,X,A.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,A.width,A.height,A.depth,0,V,X,A.data);else if(S.isData3DTexture)Se?(pe&&t.texStorage3D(r.TEXTURE_3D,Q,se,A.width,A.height,A.depth),Ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,V,X,A.data)):t.texImage3D(r.TEXTURE_3D,0,se,A.width,A.height,A.depth,0,V,X,A.data);else if(S.isFramebufferTexture){if(pe)if(Se)t.texStorage2D(r.TEXTURE_2D,Q,se,A.width,A.height);else{let oe=A.width,re=A.height;for(let me=0;me<Q;me++)t.texImage2D(r.TEXTURE_2D,me,se,oe,re,0,V,X,null),oe>>=1,re>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let oe=r.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),A.parentNode!==oe)return oe.appendChild(A),p.add(S),oe.onpaint=re=>{let me=re.changedElements;for(let it of p)me.includes(it.image)&&(it.needsUpdate=!0)},void oe.requestPaint();if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,A);else{let me=r.RGBA,it=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,me,it,$e,A)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Se&&pe){let oe=$(Me[0]);t.texStorage2D(r.TEXTURE_2D,Q,se,oe.width,oe.height)}for(let oe=0,re=Me.length;oe<re;oe++)Z=Me[oe],Se?Ae&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,V,X,Z):t.texImage2D(r.TEXTURE_2D,oe,se,V,X,Z);S.generateMipmaps=!1}else if(Se){if(pe){let oe=$(A);t.texStorage2D(r.TEXTURE_2D,Q,se,oe.width,oe.height)}Ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,X,A)}else t.texImage2D(r.TEXTURE_2D,0,se,V,X,A);f(S)&&_(U),L.__version=D.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function de(R,S,w,U,y,D){let L=s.convert(w.format,w.colorSpace),A=s.convert(w.type),V=b(w.internalFormat,L,A,w.normalized,w.colorSpace),X=i.get(S),Z=i.get(w);if(Z.__renderTarget=S,!X.__hasExternalTextures){let se=Math.max(1,S.width>>D),Me=Math.max(1,S.height>>D);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,D,V,se,Me,S.depth,0,L,A,null):t.texImage2D(y,D,V,se,Me,0,L,A,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,y,Z.__webglTexture,0,le(S)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,y,Z.__webglTexture,D),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,S,w){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let U=S.depthTexture,y=U&&U.isDepthTexture?U.type:null,D=T(S.stencilBuffer,y),L=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_e(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le(S),D,S.width,S.height):w?r.renderbufferStorageMultisample(r.RENDERBUFFER,le(S),D,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,D,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,R)}else{let U=S.textures;for(let y=0;y<U.length;y++){let D=U[y],L=s.convert(D.format,D.colorSpace),A=s.convert(D.type),V=b(D.internalFormat,L,A,D.normalized,D.colorSpace);_e(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le(S),V,S.width,S.height):w?r.renderbufferStorageMultisample(r.RENDERBUFFER,le(S),V,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,V,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(R,S,w){let U=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let y=i.get(S.depthTexture);if(y.__renderTarget=S,y.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U){if(y.__webglInit===void 0&&(y.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),y.__webglTexture===void 0){y.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture),z(r.TEXTURE_CUBE_MAP,S.depthTexture);let X=s.convert(S.depthTexture.format),Z=s.convert(S.depthTexture.type),se;S.depthTexture.format===Wi?se=r.DEPTH_COMPONENT24:S.depthTexture.format===an&&(se=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,se,S.width,S.height,0,X,Z,null)}}else G(S.depthTexture,0);let D=y.__webglTexture,L=le(S),A=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+w:r.TEXTURE_2D,V=S.depthTexture.format===an?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Wi)_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,A,D,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,V,A,D,0);else{if(S.depthTexture.format!==an)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");_e(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,A,D,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,V,A,D,0)}}function ye(R){let S=i.get(R),w=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),U){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,U.removeEventListener("dispose",y)};U.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=U}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(w)for(let U=0;U<6;U++)ve(S.__webglFramebuffer[U],R,U);else{let U=R.texture.mipmaps;U&&U.length>0?ve(S.__webglFramebuffer[0],R,0):ve(S.__webglFramebuffer,R,0)}else if(w){S.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[U]),S.__webglDepthbuffer[U]===void 0)S.__webglDepthbuffer[U]=r.createRenderbuffer(),we(S.__webglDepthbuffer[U],R,!1);else{let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=S.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,D),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,D)}}else{let U=R.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),we(S.__webglDepthbuffer,R,!1);else{let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,D),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,D)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let te=[],he=[];function le(R){return Math.min(n.maxSamples,R.samples)}function _e(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(R,S){let w=R.colorSpace,U=R.format,y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||w!==er&&w!==ln&&(je.getTransfer(w)===tt?U===ri&&y===qt||Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",w)),S}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=function(){let R=N;return R>=n.maxTextures&&Ce("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),N+=1,R},this.resetTextureUnits=function(){N=0},this.getTextureUnits=function(){return N},this.setTextureUnits=function(R){N=R},this.setTexture2D=G,this.setTexture2DArray=function(R,S){let w=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&w.__version!==R.version?ee(w,R,S):(R.isExternalTexture&&(w.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,w.__webglTexture,r.TEXTURE0+S))},this.setTexture3D=function(R,S){let w=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&w.__version!==R.version?ee(w,R,S):t.bindTexture(r.TEXTURE_3D,w.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(R,S){let w=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&w.__version!==R.version?(function(U,y,D){if(y.image.length!==6)return;let L=q(U,y),A=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+D);let V=i.get(A);if(A.version!==V.__version||L===!0){t.activeTexture(r.TEXTURE0+D);let X=je.getPrimaries(je.workingColorSpace),Z=y.colorSpace===ln?null:je.getPrimaries(y.colorSpace),se=y.colorSpace===ln||X===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Me=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)pe[ie]=Me||Se?Se?y.image[ie].image:y.image[ie]:v(y.image[ie],!0,n.maxCubemapSize),pe[ie]=Ne(y,pe[ie]);let Ae=pe[0],Q=s.convert(y.format,y.colorSpace),oe=s.convert(y.type),re=b(y.internalFormat,Q,oe,y.normalized,y.colorSpace),me=y.isVideoTexture!==!0,it=V.__version===void 0||L===!0,$e=A.dataReady,Te,fe=M(y,Ae);if(z(r.TEXTURE_CUBE_MAP,y),Me){me&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,re,Ae.width,Ae.height);for(let ie=0;ie<6;ie++){Te=pe[ie].mipmaps;for(let xe=0;xe<Te.length;xe++){let ae=Te[xe];y.format!==ri?Q!==null?me?$e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,ae.width,ae.height,Q,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,re,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,ae.width,ae.height,Q,oe,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,re,ae.width,ae.height,0,Q,oe,ae.data)}}}else{if(Te=y.mipmaps,me&&it){Te.length>0&&fe++;let ie=$(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,re,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Se){me?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Q,oe,pe[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,pe[ie].width,pe[ie].height,0,Q,oe,pe[ie].data);for(let xe=0;xe<Te.length;xe++){let ae=Te[xe].image[ie].image;me?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,ae.width,ae.height,Q,oe,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,re,ae.width,ae.height,0,Q,oe,ae.data)}}else{me?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q,oe,pe[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,Q,oe,pe[ie]);for(let xe=0;xe<Te.length;xe++){let ae=Te[xe];me?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,Q,oe,ae.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,re,Q,oe,ae.image[ie])}}}f(y)&&_(r.TEXTURE_CUBE_MAP),V.__version=A.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version})(w,R,S):t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(R,S,w){let U=i.get(R);S!==void 0&&de(U.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),w!==void 0&&ye(R)},this.setupRenderTarget=function(R){let S=R.texture,w=i.get(R),U=i.get(S);R.addEventListener("dispose",O);let y=R.textures,D=R.isWebGLCubeRenderTarget===!0,L=y.length>1;if(L||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=S.version,a.memory.textures++),D){w.__webglFramebuffer=[];for(let A=0;A<6;A++)if(S.mipmaps&&S.mipmaps.length>0){w.__webglFramebuffer[A]=[];for(let V=0;V<S.mipmaps.length;V++)w.__webglFramebuffer[A][V]=r.createFramebuffer()}else w.__webglFramebuffer[A]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){w.__webglFramebuffer=[];for(let A=0;A<S.mipmaps.length;A++)w.__webglFramebuffer[A]=r.createFramebuffer()}else w.__webglFramebuffer=r.createFramebuffer();if(L)for(let A=0,V=y.length;A<V;A++){let X=i.get(y[A]);X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){w.__webglMultisampledFramebuffer=r.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let A=0;A<y.length;A++){let V=y[A];w.__webglColorRenderbuffer[A]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,w.__webglColorRenderbuffer[A]);let X=s.convert(V.format,V.colorSpace),Z=s.convert(V.type),se=b(V.internalFormat,X,Z,V.normalized,V.colorSpace,R.isXRRenderTarget===!0),Me=le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,se,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.RENDERBUFFER,w.__webglColorRenderbuffer[A])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(w.__webglDepthRenderbuffer=r.createRenderbuffer(),we(w.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(D){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),z(r.TEXTURE_CUBE_MAP,S);for(let A=0;A<6;A++)if(S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)de(w.__webglFramebuffer[A][V],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+A,V);else de(w.__webglFramebuffer[A],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);f(S)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let A=0,V=y.length;A<V;A++){let X=y[A],Z=i.get(X),se=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),z(se,X),de(w.__webglFramebuffer,R,X,r.COLOR_ATTACHMENT0+A,se,0),f(X)&&_(se)}t.unbindTexture()}else{let A=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(A=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(A,U.__webglTexture),z(A,S),S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)de(w.__webglFramebuffer[V],R,S,r.COLOR_ATTACHMENT0,A,V);else de(w.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,A,0);f(S)&&_(A),t.unbindTexture()}R.depthBuffer&&ye(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let w=0,U=S.length;w<U;w++){let y=S[w];if(f(y)){let D=x(R),L=i.get(y).__webglTexture;t.bindTexture(D,L),_(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(_e(R)===!1){let S=R.textures,w=R.width,U=R.height,y=r.COLOR_BUFFER_BIT,D=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=i.get(R),A=S.length>1;if(A)for(let X=0;X<S.length;X++)t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);let V=R.texture.mipmaps;V&&V.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let X=0;X<S.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),A){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,L.__webglColorRenderbuffer[X]);let Z=i.get(S[X]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,w,U,0,0,w,U,y,r.NEAREST),c===!0&&(te.length=0,he.length=0,te.push(r.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(D),he.push(D),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),A)for(let X=0;X<S.length;X++){t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,L.__webglColorRenderbuffer[X]);let Z=i.get(S[X]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,Z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dp(r,e){return{convert:function(t,i=ln){let n,s=je.getTransfer(i);if(t===qt)return r.UNSIGNED_BYTE;if(t===da)return r.UNSIGNED_SHORT_4_4_4_4;if(t===pa)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Xo)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===jo)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===Ho)return r.BYTE;if(t===Wo)return r.SHORT;if(t===On)return r.UNSIGNED_SHORT;if(t===ua)return r.INT;if(t===Ai)return r.UNSIGNED_INT;if(t===ni)return r.FLOAT;if(t===mi)return r.HALF_FLOAT;if(t===ph)return r.ALPHA;if(t===mh)return r.RGB;if(t===ri)return r.RGBA;if(t===Wi)return r.DEPTH_COMPONENT;if(t===an)return r.DEPTH_STENCIL;if(t===qo)return r.RED;if(t===ma)return r.RED_INTEGER;if(t===on)return r.RG;if(t===Yo)return r.RG_INTEGER;if(t===Zo)return r.RGBA_INTEGER;if(t===fa||t===ga||t===_a||t===va)if(s===tt){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===fa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ga)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===_a)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===va)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===fa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ga)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===_a)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===va)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Jo||t===Ko||t===$o||t===Qo){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Jo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Ko)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===$o)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Qo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===el||t===tl||t===il||t===nl||t===rl||t===xa||t===sl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===el||t===tl)return s===tt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===il)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===nl)return n.COMPRESSED_R11_EAC;if(t===rl)return n.COMPRESSED_SIGNED_R11_EAC;if(t===xa)return n.COMPRESSED_RG11_EAC;if(t===sl)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===al||t===ol||t===ll||t===cl||t===hl||t===ul||t===dl||t===pl||t===ml||t===fl||t===gl||t===_l||t===vl||t===xl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===al)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===ol)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ll)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===cl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===hl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ul)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===dl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===pl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===ml)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===fl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===gl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===_l)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===vl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xl)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===yl||t===Ml||t===Sl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===yl)return s===tt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ml)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Sl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===bl||t===Tl||t===ya||t===El){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===bl)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Tl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ya)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===El)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Bn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new dr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends ui{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,u=null,g=null,m=typeof XRWebGLBinding<"u",v=new jl,f={},_=t.getContextAttributes(),x=null,b=null,T=[],M=[],P=new ne,O=null,I=new It;I.viewport=new st;let N=new It;N.viewport=new st;let G=[I,N],F=new aa,Y=null,W=null;function z(te){let he=M.indexOf(te.inputSource);if(he===-1)return;let le=T[he];le!==void 0&&(le.update(te.inputSource,te.frame,l||a),le.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",H);for(let te=0;te<T.length;te++){let he=M[te];he!==null&&(M[te]=null,T[te].disconnect(he))}Y=null,W=null,v.reset();for(let te in f)delete f[te];e.setRenderTarget(x),u=null,d=null,p=null,n=null,b=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function H(te){for(let he=0;he<te.removed.length;he++){let le=te.removed[he],_e=M.indexOf(le);_e>=0&&(M[_e]=null,T[_e].disconnect(le))}for(let he=0;he<te.added.length;he++){let le=te.added[he],_e=M.indexOf(le);if(_e===-1){for(let $=0;$<T.length;$++){if($>=M.length){M.push(le),_e=$;break}if(M[$]===null){M[$]=le,_e=$;break}}if(_e===-1)break}let Ne=T[_e];Ne&&Ne.connect(le)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=T[te];return he===void 0&&(he=new Cn,T[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=T[te];return he===void 0&&(he=new Cn,T[te]=he),he.getGripSpace()},this.getHand=function(te){let he=T[te];return he===void 0&&(he=new Cn,T[te]=he),he.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&m&&(p=new XRWebGLBinding(n,t)),p},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(te){if(n=te,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",q),n.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,le=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?an:Wi,le=_.stencil?Bn:Ai);let Ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ne),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Vt(d.textureWidth,d.textureHeight,{format:ri,type:qt,depthTexture:new wi(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,t,he),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Vt(u.framebufferWidth,u.framebufferHeight,{format:ri,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),ye.setContext(n),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let ee=new C,de=new C;function we(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(n===null)return;let he=te.near,le=te.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(le=v.depthFar)),F.near=N.near=I.near=he,F.far=N.far=I.far=le,Y===F.near&&W===F.far||(n.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,W=F.far),F.layers.mask=6|te.layers.mask,I.layers.mask=-5&F.layers.mask,N.layers.mask=-3&F.layers.mask;let _e=te.parent,Ne=F.cameras;we(F,_e);for(let $=0;$<Ne.length;$++)we(Ne[$],_e);Ne.length===2?(function($,R,S){ee.setFromMatrixPosition(R.matrixWorld),de.setFromMatrixPosition(S.matrixWorld);let w=ee.distanceTo(de),U=R.projectionMatrix.elements,y=S.projectionMatrix.elements,D=U[14]/(U[10]-1),L=U[14]/(U[10]+1),A=(U[9]+1)/U[5],V=(U[9]-1)/U[5],X=(U[8]-1)/U[0],Z=(y[8]+1)/y[0],se=D*X,Me=D*Z,Se=w/(-X+Z),pe=Se*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),U[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Ae=D+Se,Q=L+Se,oe=se-pe,re=Me+(w-pe),me=A*L/Q*Ae,it=V*L/Q*Ae;$.projectionMatrix.makePerspective(oe,re,me,it,Ae,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(F,I,N):F.projectionMatrix.copy(I.projectionMatrix),(function($,R,S){S===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(S.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*fs*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(te,F,_e)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||u!==null)return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(te){return f[te]};let ve=null,ye=new eu;ye.setAnimationLoop(function(te,he){if(h=he.getViewerPose(l||a),g=he,h!==null){let le=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let _e=!1;le.length!==F.cameras.length&&(F.cameras.length=0,_e=!0);for(let $=0;$<le.length;$++){let R=le[$],S=null;if(u!==null)S=u.getViewport(R);else{let U=p.getViewSubImage(d,R);S=U.viewport,$===0&&(e.setRenderTargetTextures(b,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(b))}let w=G[$];w===void 0&&(w=new It,w.layers.enable($),w.viewport=new st,G[$]=w),w.matrix.fromArray(R.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(R.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(S.x,S.y,S.width,S.height),$===0&&(F.matrix.copy(w.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),_e===!0&&F.cameras.push(w)}let Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&m){p=i.getBinding();let $=p.getDepthInformation(le[0]);$&&$.isValid&&$.texture&&v.init($,n.renderState)}if(Ne&&Ne.includes("camera-access")&&m){e.state.unbindTexture(),p=i.getBinding();for(let $=0;$<le.length;$++){let R=le[$].camera;if(R){let S=f[R];S||(S=new dr,f[R]=S);let w=p.getCameraImage(R);S.sourceTexture=w}}}}for(let le=0;le<T.length;le++){let _e=M[le],Ne=T[le];_e!==null&&Ne!==void 0&&Ne.update(_e,he,l||a)}ve&&ve(te,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}},Up=new Ve,au=new Be;function Fp(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===Dt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===Dt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,n.envMapRotation.value.setFromMatrix4(Up.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&n.envMapRotation.value.premultiply(au),n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Pl(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(l,h,p){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=p.texture,l.transmissionSamplerSize.value.set(p.width,p.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(l,h){let p=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(p.matrixWorld),l.nearDistance.value=p.shadow.camera.near,l.farDistance.value=p.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(l,h,p,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*p,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Op(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,g,m){if((function(v,f,_,x){let b=v.value,T=f+"_"+_;if(x[T]===void 0)return typeof b=="number"||typeof b=="boolean"?x[T]=b:ArrayBuffer.isView(b)?x[T]=b.slice():x[T]=b.clone(),!0;{let M=x[T];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return x[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1})(d,u,g,m)===!0){let v=d.__offset,f=d.value;if(Array.isArray(f)){let _=0;for(let x=0;x<f.length;x++){let b=f[x],T=h(b);l(b,d.__data,_),typeof b=="number"||typeof b=="boolean"||b.isMatrix3||ArrayBuffer.isView(b)||(_+=T.storage/Float32Array.BYTES_PER_ELEMENT)}}else l(f,d.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,d.__data)}}function l(d,u,g){typeof d=="number"||typeof d=="boolean"?u[0]=d:d.isMatrix3?(u[0]=d.elements[0],u[1]=d.elements[1],u[2]=d.elements[2],u[3]=0,u[4]=d.elements[3],u[5]=d.elements[4],u[6]=d.elements[5],u[7]=0,u[8]=d.elements[6],u[9]=d.elements[7],u[10]=d.elements[8],u[11]=0):ArrayBuffer.isView(d)?u.set(new d.constructor(d.buffer,d.byteOffset,u.length)):d.toArray(u,g)}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(u.boundary=16,u.storage=d.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",d),u}function p(d){let u=d.target;u.removeEventListener("dispose",p);let g=a.indexOf(u.__bindingPointIndex);a.splice(g,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let g=u.program;i.uniformBlockBinding(d,g)},update:function(d,u){let g=n[d.id];g===void 0&&((function(f){let _=f.uniforms,x=0,b=16;for(let M=0,P=_.length;M<P;M++){let O=Array.isArray(_[M])?_[M]:[_[M]];for(let I=0,N=O.length;I<N;I++){let G=O[I],F=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,W=F.length;Y<W;Y++){let z=h(F[Y]),q=x%b,H=q%z.boundary,ee=q+H;x+=H,ee!==0&&b-ee<z.storage&&(x+=b-ee),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=z.storage}}}let T=x%b;T>0&&(x+=b-T),f.__size=x,f.__cache={}})(d),g=(function(f){let _=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=_;let x=r.createBuffer(),b=f.__size,T=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x})(d),n[d.id]=g,d.addEventListener("dispose",p));let m=u.program;i.updateUBOMapping(d,m);let v=e.render.frame;s[d.id]!==v&&((function(f){let _=n[f.id],x=f.uniforms,b=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,M=x.length;T<M;T++){let P=x[T];if(Array.isArray(P))for(let O=0,I=P.length;O<I;O++)c(P[O],T,O,b);else c(P,T,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)})(d),s[d.id]=v)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}au.set(-1,0,0,0,1,0,0,0,1);var Bp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null,Ca=class{constructor(e={}){let{canvas:t=Sh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=qt}=e,g;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let m=u,v=new Set([Zo,Yo,ma]),f=new Set([qt,Ai,On,Bn,da,pa]),_=new Uint32Array(4),x=new Int32Array(4),b=new C,T=null,M=null,P=[],O=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,G=!1,F=null,Y=null,W=null,z=null;this._outputColorSpace=Bt;let q=0,H=0,ee=null,de=-1,we=null,ve=new st,ye=new st,te=null,he=new ke(0),le=0,_e=t.width,Ne=t.height,$=1,R=null,S=null,w=new st(0,0,_e,Ne),U=new st(0,0,_e,Ne),y=!1,D=new Gi,L=!1,A=!1,V=new Ve,X=new C,Z=new st,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Se(){return ee===null?$:1}let pe,Ae,Q,oe,re,me,it,$e,Te,fe,ie,xe,ae,qe,De,ze,Re,Je,lt,Ye,nt,et,ct,B=i;function _t(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Nr,!1),t.addEventListener("webglcontextrestored",Kl,!1),t.addEventListener("webglcontextcreationerror",$l,!1),B===null){let k="webgl2";if(B=_t(k,E),B===null)throw _t(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}function Tt(){pe=new ud(B),pe.init(),nt=new Dp(B,pe),Ae=new od(B,pe,e,nt),Q=new Lp(B,pe),Ae.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Y=B.createFramebuffer(),W=B.createFramebuffer(),z=B.createFramebuffer(),oe=new md(B),re=new Mp,me=new Np(B,pe,Q,re,Ae,nt,oe),it=new hd(N),$e=new id(B),et=new sd(B,$e),Te=new dd(B,$e,oe,et),fe=new gd(B,Te,$e,et,oe),Je=new fd(B,Ae,me),De=new ld(re),ie=new yp(N,it,pe,Ae,et,De),xe=new Fp(N,re),ae=new bp,qe=new Cp(pe),Re=new rd(N,it,Q,fe,g,c),ze=new Ip(N,fe,Ae),ct=new Op(B,oe,Ae,Q),lt=new ad(B,pe,oe),Ye=new pd(B,pe,oe),oe.programs=ie.programs,N.capabilities=Ae,N.extensions=pe,N.properties=re,N.renderLists=ae,N.shadowMap=ze,N.state=Q,N.info=oe}Tt(),m!==qt&&(I=new vd(m,t.width,t.height,o,n,s));let rt=new ql(N,B);function Nr(E){E.preventDefault(),Cl("WebGLRenderer: Context Lost."),G=!0}function Kl(){Cl("WebGLRenderer: Context Restored."),G=!1;let E=oe.autoReset,k=ze.enabled,j=ze.autoUpdate,K=ze.needsUpdate,J=ze.type;Tt(),oe.autoReset=E,ze.enabled=k,ze.autoUpdate=j,ze.needsUpdate=K,ze.type=J}function $l(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ql(E){let k=E.target;k.removeEventListener("dispose",Ql),(function(j){(function(K){let J=re.get(K).programs;J!==void 0&&(J.forEach(function(ce){ie.releaseProgram(ce)}),K.isShaderMaterial&&ie.releaseShaderCache(K))})(j),re.remove(j)})(k)}function ec(E,k,j){E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=Dt,E.needsUpdate=!0,Ur(E,k,j),E.side=Dn,E.needsUpdate=!0,Ur(E,k,j),E.side=di):Ur(E,k,j)}this.xr=rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(_e,Ne,!1))},this.getSize=function(E){return E.set(_e,Ne)},this.setSize=function(E,k,j=!0){rt.isPresenting?Ce("WebGLRenderer: Can't change size while VR device is presenting."):(_e=E,Ne=k,t.width=Math.floor(E*$),t.height=Math.floor(k*$),j===!0&&(t.style.width=E+"px",t.style.height=k+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,k))},this.getDrawingBufferSize=function(E){return E.set(_e*$,Ne*$).floor()},this.setDrawingBufferSize=function(E,k,j){_e=E,Ne=k,$=j,t.width=Math.floor(E*j),t.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(m!==qt){if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])}else Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(ve)},this.getViewport=function(E){return E.copy(w)},this.setViewport=function(E,k,j,K){E.isVector4?w.set(E.x,E.y,E.z,E.w):w.set(E,k,j,K),Q.viewport(ve.copy(w).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,k,j,K){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,k,j,K),Q.scissor(ye.copy(U).multiplyScalar($).round())},this.getScissorTest=function(){return y},this.setScissorTest=function(E){Q.setScissorTest(y=E)},this.setOpaqueSort=function(E){R=E},this.setTransparentSort=function(E){S=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,j=!0){let K=0;if(E){let J=!1;if(ee!==null){let ce=ee.texture.format;J=v.has(ce)}if(J){let ce=ee.texture.type,ge=f.has(ce),be=Re.getClearColor(),Ee=Re.getClearAlpha(),Ue=be.r,Ze=be.g,Ke=be.b;ge?(_[0]=Ue,_[1]=Ze,_[2]=Ke,_[3]=Ee,B.clearBufferuiv(B.COLOR,0,_)):(x[0]=Ue,x[1]=Ze,x[2]=Ke,x[3]=Ee,B.clearBufferiv(B.COLOR,0,x))}else K|=B.COLOR_BUFFER_BIT}k&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Nr,!1),t.removeEventListener("webglcontextrestored",Kl,!1),t.removeEventListener("webglcontextcreationerror",$l,!1),Re.dispose(),ae.dispose(),qe.dispose(),re.dispose(),it.dispose(),fe.dispose(),et.dispose(),ct.dispose(),ie.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",tc),rt.removeEventListener("sessionend",ic),Xi.stop()},this.renderBufferDirect=function(E,k,j,K,J,ce){k===null&&(k=se);let ge=J.isMesh&&J.matrixWorld.determinantAffine()<0,be=(function(Xe,ut,St,Fe,Ge){ut.isScene!==!0&&(ut=se),me.resetTextureUnits();let Yt=ut.fog,La=Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial||Fe.isMeshPhongMaterial?ut.environment:null,Fr=ee===null?N.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,Wn=Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial&&!Fe.envMap||Fe.isMeshPhongMaterial&&!Fe.envMap,si=it.get(Fe.envMap||La,Wn),hn=Fe.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,_i=!!St.attributes.tangent&&(!!Fe.normalMap||Fe.anisotropy>0),Na=!!St.morphAttributes.position,un=!!St.morphAttributes.normal,uu=!!St.morphAttributes.color,lc=ii;Fe.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(lc=N.toneMapping));let cc=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,du=cc!==void 0?cc.length:0,Oe=re.get(Fe),ji=M.state.lights;if(L===!0&&(A===!0||Xe!==we)){let ft=Xe===we&&Fe.id===de;De.setState(Fe,Xe,ft)}let Zt=!1;Fe.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==ji.state.version||Oe.outputColorSpace!==Fr||Ge.isBatchedMesh&&Oe.batching===!1?Zt=!0:Ge.isBatchedMesh||Oe.batching!==!0?Ge.isBatchedMesh&&Oe.batchingColor===!0&&Ge.colorTexture===null||Ge.isBatchedMesh&&Oe.batchingColor===!1&&Ge.colorTexture!==null||Ge.isInstancedMesh&&Oe.instancing===!1?Zt=!0:Ge.isInstancedMesh||Oe.instancing!==!0?Ge.isSkinnedMesh&&Oe.skinning===!1?Zt=!0:Ge.isSkinnedMesh||Oe.skinning!==!0?Ge.isInstancedMesh&&Oe.instancingColor===!0&&Ge.instanceColor===null||Ge.isInstancedMesh&&Oe.instancingColor===!1&&Ge.instanceColor!==null||Ge.isInstancedMesh&&Oe.instancingMorph===!0&&Ge.morphTexture===null||Ge.isInstancedMesh&&Oe.instancingMorph===!1&&Ge.morphTexture!==null||Oe.envMap!==si||Fe.fog===!0&&Oe.fog!==Yt?Zt=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===De.numPlanes&&Oe.numIntersection===De.numIntersection?(Oe.vertexAlphas!==hn||Oe.vertexTangents!==_i||Oe.morphTargets!==Na||Oe.morphNormals!==un||Oe.morphColors!==uu||Oe.toneMapping!==lc||Oe.morphTargetsCount!==du||!!Oe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Zt=!0):Zt=!0:Zt=!0:Zt=!0:Zt=!0:(Zt=!0,Oe.__version=Fe.version);let Ci=Oe.currentProgram;Zt===!0&&(Ci=Ur(Fe,ut,Ge),F&&Fe.isNodeMaterial&&F.onUpdateProgram(Fe,Ci,Oe));let hc=!1,dn=!1,Da=!1,dt=Ci.getUniforms(),Ht=Oe.uniforms;if(Q.useProgram(Ci.program)&&(hc=!0,dn=!0,Da=!0),Fe.id!==de&&(de=Fe.id,dn=!0),Oe.needsLights){let ft=(function(oi,Fa){if(oi.length===0)return null;if(oi.length===1)return oi[0].texture!==null?oi[0]:null;b.setFromMatrixPosition(Fa.matrixWorld);for(let pn=0,pu=oi.length;pn<pu;pn++){let Oa=oi[pn];if(Oa.texture!==null&&Oa.boundingBox.containsPoint(b))return Oa}return null})(M.state.lightProbeGridArray,Ge);Oe.lightProbeGrid!==ft&&(Oe.lightProbeGrid=ft,dn=!0)}if(hc||we!==Xe){Q.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),dt.setValue(B,"projectionMatrix",Xe.projectionMatrix),dt.setValue(B,"viewMatrix",Xe.matrixWorldInverse);let ft=dt.map.cameraPosition;ft!==void 0&&ft.setValue(B,X.setFromMatrixPosition(Xe.matrixWorld)),Ae.logarithmicDepthBuffer&&dt.setValue(B,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Fe.isMeshPhongMaterial||Fe.isMeshToonMaterial||Fe.isMeshLambertMaterial||Fe.isMeshBasicMaterial||Fe.isMeshStandardMaterial||Fe.isShaderMaterial)&&dt.setValue(B,"isOrthographic",Xe.isOrthographicCamera===!0),we!==Xe&&(we=Xe,dn=!0,Da=!0)}if(Oe.needsLights&&(ji.state.directionalShadowMap.length>0&&dt.setValue(B,"directionalShadowMap",ji.state.directionalShadowMap,me),ji.state.spotShadowMap.length>0&&dt.setValue(B,"spotShadowMap",ji.state.spotShadowMap,me),ji.state.pointShadowMap.length>0&&dt.setValue(B,"pointShadowMap",ji.state.pointShadowMap,me)),Ge.isSkinnedMesh){dt.setOptional(B,Ge,"bindMatrix"),dt.setOptional(B,Ge,"bindMatrixInverse");let ft=Ge.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),dt.setValue(B,"boneTexture",ft.boneTexture,me))}Ge.isBatchedMesh&&(dt.setOptional(B,Ge,"batchingTexture"),dt.setValue(B,"batchingTexture",Ge._matricesTexture,me),dt.setOptional(B,Ge,"batchingIdTexture"),dt.setValue(B,"batchingIdTexture",Ge._indirectTexture,me),dt.setOptional(B,Ge,"batchingColorTexture"),Ge._colorsTexture!==null&&dt.setValue(B,"batchingColorTexture",Ge._colorsTexture,me));let Ua=St.morphAttributes;if(Ua.position===void 0&&Ua.normal===void 0&&Ua.color===void 0||Je.update(Ge,St,Ci),(dn||Oe.receiveShadow!==Ge.receiveShadow)&&(Oe.receiveShadow=Ge.receiveShadow,dt.setValue(B,"receiveShadow",Ge.receiveShadow)),(Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial||Fe.isMeshPhongMaterial)&&Fe.envMap===null&&ut.environment!==null&&(Ht.envMapIntensity.value=ut.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=(fi===null&&(fi=new xs(Bp,16,16,on,mi),fi.name="DFG_LUT",fi.minFilter=At,fi.magFilter=At,fi.wrapS=Oi,fi.wrapT=Oi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi)),dn){if(dt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Oe.needsLights&&(Jt=Da,(ai=Ht).ambientLightColor.needsUpdate=Jt,ai.lightProbe.needsUpdate=Jt,ai.directionalLights.needsUpdate=Jt,ai.directionalLightShadows.needsUpdate=Jt,ai.pointLights.needsUpdate=Jt,ai.pointLightShadows.needsUpdate=Jt,ai.spotLights.needsUpdate=Jt,ai.spotLightShadows.needsUpdate=Jt,ai.rectAreaLights.needsUpdate=Jt,ai.hemisphereLights.needsUpdate=Jt),Yt&&Fe.fog===!0&&xe.refreshFogUniforms(Ht,Yt),xe.refreshMaterialUniforms(Ht,Fe,$,Ne,M.state.transmissionRenderTarget[Xe.id]),Oe.needsLights&&Oe.lightProbeGrid){let ft=Oe.lightProbeGrid;Ht.probesSH.value=ft.texture,Ht.probesMin.value.copy(ft.boundingBox.min),Ht.probesMax.value.copy(ft.boundingBox.max),Ht.probesResolution.value.copy(ft.resolution)}Vn.upload(B,ac(Oe),Ht,me)}var ai,Jt;if(Fe.isShaderMaterial&&Fe.uniformsNeedUpdate===!0&&(Vn.upload(B,ac(Oe),Ht,me),Fe.uniformsNeedUpdate=!1),Fe.isSpriteMaterial&&dt.setValue(B,"center",Ge.center),dt.setValue(B,"modelViewMatrix",Ge.modelViewMatrix),dt.setValue(B,"normalMatrix",Ge.normalMatrix),dt.setValue(B,"modelMatrix",Ge.matrixWorld),Fe.uniformsGroups!==void 0){let ft=Fe.uniformsGroups;for(let oi=0,Fa=ft.length;oi<Fa;oi++){let pn=ft[oi];ct.update(pn,Ci),ct.bind(pn,Ci)}}return Ci})(E,k,j,K,J);Q.setMaterial(K,ge);let Ee=j.index,Ue=1;if(K.wireframe===!0){if(Ee=Te.getWireframeAttribute(j),Ee===void 0)return;Ue=2}let Ze=j.drawRange,Ke=j.attributes.position,Ie=Ze.start*Ue,Qe=(Ze.start+Ze.count)*Ue;ce!==null&&(Ie=Math.max(Ie,ce.start*Ue),Qe=Math.min(Qe,(ce.start+ce.count)*Ue)),Ee!==null?(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Ee.count)):Ke!=null&&(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Ke.count));let vt=Qe-Ie;if(vt<0||vt===1/0)return;let mt;et.setup(J,K,be,j,Ee);let ht=lt;if(Ee!==null&&(mt=$e.get(Ee),ht=Ye,ht.setIndex(mt)),J.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*Se()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(J.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),Q.setLineWidth(Xe*Se()),J.isLineSegments?ht.setMode(B.LINES):J.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else J.isPoints?ht.setMode(B.POINTS):J.isSprite&&ht.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ht.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Xe=J._multiDrawStarts,ut=J._multiDrawCounts,St=J._multiDrawCount,Fe=Ee?$e.get(Ee).bytesPerElement:1,Ge=re.get(K).currentProgram.getUniforms();for(let Yt=0;Yt<St;Yt++)Ge.setValue(B,"_gl_DrawID",Yt),ht.render(Xe[Yt]/Fe,ut[Yt])}else if(J.isInstancedMesh)ht.renderInstances(Ie,vt,J.count);else if(j.isInstancedBufferGeometry){let Xe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ut=Math.min(j.instanceCount,Xe);ht.renderInstances(Ie,vt,ut)}else ht.render(Ie,vt)},this.compile=function(E,k,j=null){j===null&&(j=E),M=qe.get(j),M.init(k),O.push(M),j.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),E!==j&&E.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let K=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ce=J.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let be=ce[ge];ec(be,j,J),K.add(be)}else ec(ce,j,J),K.add(ce)}),M=O.pop(),K},this.compileAsync=function(E,k,j=null){let K=this.compile(E,k,j);return new Promise(J=>{function ce(){K.forEach(function(ge){re.get(ge).currentProgram.isReady()&&K.delete(ge)}),K.size!==0?setTimeout(ce,10):J(E)}pe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Pa=null;function tc(){Xi.stop()}function ic(){Xi.start()}let Xi=new eu;function Ia(E,k,j,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||D.intersectsSprite(E)){K&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);let ce=fe.update(E),ge=E.material;ge.visible&&T.push(E,ce,ge,j,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||D.intersectsObject(E))){let ce=fe.update(E),ge=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Z.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Z.copy(ce.boundingSphere.center)),Z.applyMatrix4(E.matrixWorld).applyMatrix4(V)),Array.isArray(ge)){let be=ce.groups;for(let Ee=0,Ue=be.length;Ee<Ue;Ee++){let Ze=be[Ee],Ke=ge[Ze.materialIndex];Ke&&Ke.visible&&T.push(E,ce,Ke,j,Z.z,Ze)}}else ge.visible&&T.push(E,ce,ge,j,Z.z,null)}}let J=E.children;for(let ce=0,ge=J.length;ce<ge;ce++)Ia(J[ce],k,j,K)}function nc(E,k,j,K){let{opaque:J,transmissive:ce,transparent:ge}=E;M.setupLightsView(j),L===!0&&De.setGlobalState(N.clippingPlanes,j),K&&Q.viewport(ve.copy(K)),J.length>0&&Dr(J,k,j),ce.length>0&&Dr(ce,k,j),ge.length>0&&Dr(ge,k,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function rc(E,k,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let Ke=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new Vt(1,1,{generateMipmaps:!0,type:Ke?mi:qt,minFilter:sn,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let J=M.state.transmissionRenderTarget[K.id],ce=K.viewport||ve;J.setSize(ce.z*N.transmissionResolutionScale,ce.w*N.transmissionResolutionScale);let ge=N.getRenderTarget(),be=N.getActiveCubeFace(),Ee=N.getActiveMipmapLevel();N.setRenderTarget(J),N.getClearColor(he),le=N.getClearAlpha(),le<1&&N.setClearColor(16777215,.5),N.clear(),Me&&Re.render(j);let Ue=N.toneMapping;N.toneMapping=ii;let Ze=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),L===!0&&De.setGlobalState(N.clippingPlanes,K),Dr(E,j,K),me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ie=0,Qe=k.length;Ie<Qe;Ie++){let vt=k[Ie],{object:mt,geometry:ht,material:Xe,group:ut}=vt;if(Xe.side===di&&mt.layers.test(K.layers)){let St=Xe.side;Xe.side=Dt,Xe.needsUpdate=!0,sc(mt,j,K,ht,Xe,ut),Xe.side=St,Xe.needsUpdate=!0,Ke=!0}}Ke===!0&&(me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J))}N.setRenderTarget(ge,be,Ee),N.setClearColor(he,le),Ze!==void 0&&(K.viewport=Ze),N.toneMapping=Ue}function Dr(E,k,j){let K=k.isScene===!0?k.overrideMaterial:null;for(let J=0,ce=E.length;J<ce;J++){let ge=E[J],{object:be,geometry:Ee,group:Ue}=ge,Ze=ge.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),be.layers.test(j.layers)&&sc(be,k,j,Ee,Ze,Ue)}}function sc(E,k,j,K,J,ce){E.onBeforeRender(N,k,j,K,J,ce),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(N,k,j,K,E,ce),J.transparent===!0&&J.side===di&&J.forceSinglePass===!1?(J.side=Dt,J.needsUpdate=!0,N.renderBufferDirect(j,k,K,J,E,ce),J.side=Dn,J.needsUpdate=!0,N.renderBufferDirect(j,k,K,J,E,ce),J.side=di):N.renderBufferDirect(j,k,K,J,E,ce),E.onAfterRender(N,k,j,K,J,ce)}function Ur(E,k,j){k.isScene!==!0&&(k=se);let K=re.get(E),J=M.state.lights,ce=M.state.shadowsArray,ge=J.state.version,be=ie.getParameters(E,J.state,ce,k,j,M.state.lightProbeGridArray),Ee=ie.getProgramCacheKey(be),Ue=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=it.get(E.envMap||K.environment,Ze),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Ql),Ue=new Map,K.programs=Ue);let Ke=Ue.get(Ee);if(Ke!==void 0){if(K.currentProgram===Ke&&K.lightsStateVersion===ge)return oc(E,be),Ke}else be.uniforms=ie.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,j,be),E.onBeforeCompile(be,N),Ke=ie.acquireProgram(be,Ee),Ue.set(Ee,Ke),K.uniforms=be.uniforms;let Ie=K.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ie.clippingPlanes=De.uniform),oc(E,be),K.needsLights=(function(Qe){return Qe.isMeshLambertMaterial||Qe.isMeshToonMaterial||Qe.isMeshPhongMaterial||Qe.isMeshStandardMaterial||Qe.isShadowMaterial||Qe.isShaderMaterial&&Qe.lights===!0})(E),K.lightsStateVersion=ge,K.needsLights&&(Ie.ambientLightColor.value=J.state.ambient,Ie.lightProbe.value=J.state.probe,Ie.directionalLights.value=J.state.directional,Ie.directionalLightShadows.value=J.state.directionalShadow,Ie.spotLights.value=J.state.spot,Ie.spotLightShadows.value=J.state.spotShadow,Ie.rectAreaLights.value=J.state.rectArea,Ie.ltc_1.value=J.state.rectAreaLTC1,Ie.ltc_2.value=J.state.rectAreaLTC2,Ie.pointLights.value=J.state.point,Ie.pointLightShadows.value=J.state.pointShadow,Ie.hemisphereLights.value=J.state.hemi,Ie.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ie.spotLightMatrix.value=J.state.spotLightMatrix,Ie.spotLightMap.value=J.state.spotLightMap,Ie.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=Ke,K.uniformsList=null,Ke}function ac(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Vn.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function oc(E,k){let j=re.get(E);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}Xi.setAnimationLoop(function(E){Pa&&Pa(E)}),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(E){Pa=E,rt.setAnimationLoop(E),E===null?Xi.stop():Xi.start()},rt.addEventListener("sessionstart",tc),rt.addEventListener("sessionend",ic),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0)return void Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;F!==null&&F.renderStart(E,k);let j=rt.enabled===!0&&rt.isPresenting===!0,K=I!==null&&(ee===null||j)&&I.begin(N,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled!==!0||rt.isPresenting!==!0||I!==null&&I.isCompositing()!==!1||(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,k,ee),M=qe.get(E,O.length),M.init(k),M.state.textureUnits=me.getTextureUnits(),O.push(M),V.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),D.setFromProjectionMatrix(V,Ei,k.reversedDepth),A=this.localClippingEnabled,L=De.init(this.clippingPlanes,A),T=ae.get(E,P.length),T.init(),P.push(T),rt.enabled===!0&&rt.isPresenting===!0){let ce=N.xr.getDepthSensingMesh();ce!==null&&Ia(ce,k,-1/0,N.sortObjects)}Ia(E,k,0,N.sortObjects),T.finish(),N.sortObjects===!0&&T.sort(R,S,k.reversedDepth),Me=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Me&&Re.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),L===!0&&De.beginShadows();let J=M.state.shadowsArray;if(ze.render(J,E,k),L===!0&&De.endShadows(),(K&&I.hasRenderPass())===!1){let ce=T.opaque,ge=T.transmissive;if(M.setupLights(),k.isArrayCamera){let be=k.cameras;if(ge.length>0)for(let Ee=0,Ue=be.length;Ee<Ue;Ee++)rc(ce,ge,E,be[Ee]);Me&&Re.render(E);for(let Ee=0,Ue=be.length;Ee<Ue;Ee++){let Ze=be[Ee];nc(T,E,Ze,Ze.viewport)}}else ge.length>0&&rc(ce,ge,E,k),Me&&Re.render(E),nc(T,E,k)}ee!==null&&H===0&&(me.updateMultisampleRenderTarget(ee),me.updateRenderTargetMipmap(ee)),K&&I.end(N),E.isScene===!0&&E.onAfterRender(N,E,k),et.resetDefaultState(),de=-1,we=null,O.pop(),O.length>0?(M=O[O.length-1],me.setTextureUnits(M.state.textureUnits),L===!0&&De.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,P.pop(),T=P.length>0?P[P.length-1]:null,F!==null&&F.renderEnd()},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,k,j){let K=re.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),re.get(E.texture).__webglTexture=k,re.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let j=re.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){ee=E,q=k,H=j;let K=null,J=!1,ce=!1;if(E){let ge=re.get(E);if(ge.__useDefaultFramebuffer!==void 0)return Q.bindFramebuffer(B.FRAMEBUFFER,ge.__webglFramebuffer),ve.copy(E.viewport),ye.copy(E.scissor),te=E.scissorTest,Q.viewport(ve),Q.scissor(ye),Q.setScissorTest(te),void(de=-1);if(ge.__webglFramebuffer===void 0)me.setupRenderTarget(E);else if(ge.__hasExternalTextures)me.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ue=E.depthTexture;if(ge.__boundDepthTexture!==Ue){if(Ue!==null&&re.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(E)}}let be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ce=!0);let Ee=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Array.isArray(Ee[k])?Ee[k][j]:Ee[k],J=!0):K=E.samples>0&&me.useMultisampledRTT(E)===!1?re.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?Ee[j]:Ee,ve.copy(E.viewport),ye.copy(E.scissor),te=E.scissorTest}else ve.copy(w).multiplyScalar($).floor(),ye.copy(U).multiplyScalar($).floor(),te=y;if(j!==0&&(K=Y),Q.bindFramebuffer(B.FRAMEBUFFER,K)&&Q.drawBuffers(E,K),Q.viewport(ve),Q.scissor(ye),Q.setScissorTest(te),J){let ge=re.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,j)}else if(ce){let ge=k;for(let be=0;be<E.textures.length;be++){let Ee=re.get(E.textures[be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+be,Ee.__webglTexture,j,ge)}}else if(E!==null&&j!==0){let ge=re.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,j)}de=-1},this.readRenderTargetPixels=function(E,k,j,K,J,ce,ge,be=0){if(!E||!E.isWebGLRenderTarget)return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Q.bindFramebuffer(B.FRAMEBUFFER,Ee);try{let Ue=E.textures[be],Ze=Ue.format,Ke=Ue.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be),!Ae.textureFormatReadable(Ze))return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ke))return void Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=E.width-K&&j>=0&&j<=E.height-J&&B.readPixels(k,j,K,J,nt.convert(Ze),nt.convert(Ke),ce)}finally{let Ue=ee!==null?re.get(ee).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,k,j,K,J,ce,ge,be=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){if(k>=0&&k<=E.width-K&&j>=0&&j<=E.height-J){Q.bindFramebuffer(B.FRAMEBUFFER,Ee);let Ue=E.textures[be],Ze=Ue.format,Ke=Ue.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be),!Ae.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ie),B.bufferData(B.PIXEL_PACK_BUFFER,ce.byteLength,B.STREAM_READ),B.readPixels(k,j,K,J,nt.convert(Ze),nt.convert(Ke),0);let Qe=ee!==null?re.get(ee).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Qe);let vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Th(B,vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ie),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ce),B.deleteBuffer(Ie),B.deleteSync(vt),ce}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,j=0){let K=Math.pow(2,-j),J=Math.floor(E.image.width*K),ce=Math.floor(E.image.height*K),ge=k!==null?k.x:0,be=k!==null?k.y:0;me.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ge,be,J,ce),Q.unbindTexture()},this.copyTextureToTexture=function(E,k,j=null,K=null,J=0,ce=0){let ge,be,Ee,Ue,Ze,Ke,Ie,Qe,vt,mt=E.isCompressedTexture?E.mipmaps[ce]:E.image;if(j!==null)ge=j.max.x-j.min.x,be=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,Ue=j.min.x,Ze=j.min.y,Ke=j.isBox3?j.min.z:0;else{let si=Math.pow(2,-J);ge=Math.floor(mt.width*si),be=Math.floor(mt.height*si),Ee=E.isDataArrayTexture?mt.depth:E.isData3DTexture?Math.floor(mt.depth*si):1,Ue=0,Ze=0,Ke=0}K!==null?(Ie=K.x,Qe=K.y,vt=K.z):(Ie=0,Qe=0,vt=0);let ht=nt.convert(k.format),Xe=nt.convert(k.type),ut;k.isData3DTexture?(me.setTexture3D(k,0),ut=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(me.setTexture2DArray(k,0),ut=B.TEXTURE_2D_ARRAY):(me.setTexture2D(k,0),ut=B.TEXTURE_2D),Q.activeTexture(B.TEXTURE0),Q.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let St=Q.getParameter(B.UNPACK_ROW_LENGTH),Fe=Q.getParameter(B.UNPACK_IMAGE_HEIGHT),Ge=Q.getParameter(B.UNPACK_SKIP_PIXELS),Yt=Q.getParameter(B.UNPACK_SKIP_ROWS),La=Q.getParameter(B.UNPACK_SKIP_IMAGES);Q.pixelStorei(B.UNPACK_ROW_LENGTH,mt.width),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt.height),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),Q.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Ke);let Fr=E.isDataArrayTexture||E.isData3DTexture,Wn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let si=re.get(E),hn=re.get(k),_i=re.get(si.__renderTarget),Na=re.get(hn.__renderTarget);Q.bindFramebuffer(B.READ_FRAMEBUFFER,_i.__webglFramebuffer),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let un=0;un<Ee;un++)Fr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,re.get(E).__webglTexture,J,Ke+un),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,re.get(k).__webglTexture,ce,vt+un)),B.blitFramebuffer(Ue,Ze,ge,be,Ie,Qe,ge,be,B.DEPTH_BUFFER_BIT,B.NEAREST);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||re.has(E)){let si=re.get(E),hn=re.get(k);Q.bindFramebuffer(B.READ_FRAMEBUFFER,W),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let _i=0;_i<Ee;_i++)Fr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,si.__webglTexture,J,Ke+_i):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,si.__webglTexture,J),Wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,ce,vt+_i):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,ce),J!==0?B.blitFramebuffer(Ue,Ze,ge,be,Ie,Qe,ge,be,B.COLOR_BUFFER_BIT,B.NEAREST):Wn?B.copyTexSubImage3D(ut,ce,Ie,Qe,vt+_i,Ue,Ze,ge,be):B.copyTexSubImage2D(ut,ce,Ie,Qe,Ue,Ze,ge,be);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Wn?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(ut,ce,Ie,Qe,vt,ge,be,Ee,ht,Xe,mt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(ut,ce,Ie,Qe,vt,ge,be,Ee,ht,mt.data):B.texSubImage3D(ut,ce,Ie,Qe,vt,ge,be,Ee,ht,Xe,mt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ce,Ie,Qe,ge,be,ht,Xe,mt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ce,Ie,Qe,mt.width,mt.height,ht,mt.data):B.texSubImage2D(B.TEXTURE_2D,ce,Ie,Qe,ge,be,ht,Xe,mt);Q.pixelStorei(B.UNPACK_ROW_LENGTH,St),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Fe),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),Q.pixelStorei(B.UNPACK_SKIP_ROWS,Yt),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,La),ce===0&&k.generateMipmaps&&B.generateMipmap(ut),Q.unbindTexture()},this.initRenderTarget=function(E){re.get(E).__webglFramebuffer===void 0&&me.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){q=0,H=0,ee=null,Q.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var ou=2,Ut=10,Hn=48,zp=6,lu=.06,Yl=.25,Zl=100,Jl=30,cu=.4,Gp=.5,Vp=.05,kp=50,hu=.15,Hp=1.6,Wp=1,Xp=.7,jp=14e4,qp=54e3,Yp=`
  attribute float aSize;
  attribute float aAlpha;
  varying float vAlpha;

  void main() {
    vAlpha = aAlpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
  }
`,Zp=`
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;function Jp(r,e={}){if(!r||r.dataset.particleInitialized==="true")return null;let t=r.querySelector("canvas.wordmark-canvas"),i=r.querySelector("[data-particle-source]");if(!t||!i||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return null;let n=t,s=i,a=e.color||"#f7f7f5",o=e.entranceSeconds||1.75,c=e.textScale||1,l=!!e.scatter,h=e.textRegionWidth||1,p=e.playEntrance!==!1;r.dataset.particleInitialized="true";let d;try{d=new Ca({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return null}d.setClearColor(0,0);let u=new ar,g=new Hi,m=null,v=null,f=null,_=1,x=1,b=0,T=new Float32Array(0),M=new Float32Array(0),P=new Float32Array(0),O=new Float64Array(0),I=1,N=1,G=new Float32Array(1),F=new Float32Array(1),Y=new Float32Array(1),W=new Float32Array(1),z=new Float32Array(1),q=document.createElement("canvas"),H=q.getContext("2d",{willReadFrequently:!0}),ee=-9999,de=-9999,we=-9999,ve=-9999,ye=!1,te=0,he=performance.now(),le=!1,_e=!0,Ne=0,$=!1,R=0,S=!1,w=(Te,fe)=>Math.min(N-1,Math.max(0,fe))*I+Math.min(I-1,Math.max(0,Te));function U(){I=Math.ceil(_/Ut),N=Math.ceil(x/Ut);let Te=I*N;G=new Float32Array(Te),F=new Float32Array(Te),Y=new Float32Array(Te),W=new Float32Array(Te),z=new Float32Array(Te)}function y(){if(!H)return new Float32Array(0);q.width=_,q.height=x,H.clearRect(0,0,_,x),H.fillStyle="#fff",H.textAlign="center",H.textBaseline="middle";let Te=getComputedStyle(s),fe=Te.fontFamily||getComputedStyle(document.body).fontFamily,ie=Te.fontWeight||"700",xe=Array.from(s.querySelectorAll("[data-particle-line]")).filter(Ye=>getComputedStyle(Ye).display!=="none").map(Ye=>Ye.textContent?.trim()||"").filter(Boolean);xe.length===0&&xe.push(s.textContent?.trim()||"KOSX");let ae=(xe.length-1)/2,qe=1.2;if(l){let Ye=_*h,nt=[{x:.16,y:.3,s:1.45,r:-8},{x:.56,y:.22,s:.92,r:6},{x:.4,y:.66,s:1.22,r:-4},{x:.8,y:.6,s:1.05,r:9},{x:.3,y:.42,s:1.1,r:5},{x:.68,y:.4,s:1.3,r:-6}],et=(xe.join("")||"KOSX").split(""),ct=Math.min(x*.44,Ye/3.2,300)*c;et.forEach((B,_t)=>{let Tt=nt[_t%nt.length];H.save(),H.translate(Ye*Tt.x,x*Tt.y),H.rotate(Tt.r*Math.PI/180),H.font=`${ie} ${ct*Tt.s}px ${fe}`,H.fillText(B,0,0),H.restore()})}else{let Ye=Math.min(x*(xe.length>1?.19:.3),_/4.5,132)*c;H.font=`${ie} ${Ye}px ${fe}`;let nt=xe.map((_t,Tt)=>H.measureText(_t).width+2*Math.abs(Tt-ae)*qe*Ye),et=Math.max(...nt);et>_*.94&&(Ye*=_*.94/et,H.font=`${ie} ${Ye}px ${fe}`);let ct=Ye*1.04,B=Ye*qe;xe.forEach((_t,Tt)=>{let rt=_/2+(Tt-ae)*B,Nr=x/2+(Tt-ae)*ct;H.fillText(_t,rt,Nr)})}let De=H.getImageData(0,0,_,x).data,ze=_<640,Re=ze?qp:jp,Je=ze?1.35:1,lt=[];for(let Ye=0;Ye<x;Ye+=Je){let nt=Math.floor(Ye);for(let et=0;et<_;et+=Je){let ct=Math.floor(et);if(De[(nt*_+ct)*4+3]<=52||lt.length/3>=Re)continue;let _t=ze?.78:Xp;(ct*17+nt*31)%100/100>=_t||lt.push(et-_/2+(Math.random()-.5)*Je*2.4,x/2-Ye+(Math.random()-.5)*Je*2.4,0)}}return new Float32Array(lt)}function D(){m&&u.remove(m),v?.dispose(),f?.dispose(),m=null,v=null,f=null}function L(Te){let fe=y();if(fe.length===0)return!1;b=fe.length/3,T=new Float32Array(fe.length),M=new Float32Array(fe),P=new Float32Array(fe.length),O=new Float64Array(b),O.fill(-1);let ie=new Float32Array(b),xe=new Float32Array(b);R=performance.now()/1e3;let ae=Math.min(window.devicePixelRatio||1,ou),qe=window.innerWidth<=1024?Wp:Hp;for(let ze=0;ze<b;ze++){let Re=ze*3;if(Te){let Je=_*(.34+Math.random()*.36);T[Re]=M[Re]+Je+(Math.random()-.5)*90,T[Re+1]=M[Re+1]+(Math.random()-.5)*x*.46}else T[Re]=M[Re],T[Re+1]=M[Re+1];T[Re+2]=0,ie[ze]=qe*ae,xe[ze]=1}D(),v=new at,v.setAttribute("position",new bt(T,3)),v.setAttribute("aSize",new bt(ie,1)),v.setAttribute("aAlpha",new bt(xe,1));let De;try{De=new ke(a)}catch{De=new ke("#f7f7f5")}return f=new Rt({uniforms:{uColor:{value:De}},vertexShader:Yp,fragmentShader:Zp,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}),m=new hr(v,f),m.frustumCulled=!1,u.add(m),!0}function A(Te,fe,ie,xe){let ae=Math.max(0,Math.floor((Te-Hn)/Ut)),qe=Math.min(I-1,Math.ceil((Te+Hn)/Ut)),De=Math.max(0,Math.floor((fe-Hn)/Ut)),ze=Math.min(N-1,Math.ceil((fe+Hn)/Ut));for(let Re=De;Re<=ze;Re++)for(let Je=ae;Je<=qe;Je++){let lt=Je*Ut,Ye=Re*Ut,nt=lt-Te,et=Ye-fe,ct=Math.hypot(nt,et);if(ct>=Hn)continue;ct=Math.max(4,ct);let B=Hn/ct,_t=Re*I+Je;G[_t]+=ie*B,F[_t]+=xe*B}}function V(Te,fe,ie,xe){let ae=ie-Te,qe=xe-fe,De=Math.max(1,Math.ceil(Math.hypot(ae,qe)/zp));for(let ze=0;ze<=De;ze++){let Re=ze/De;A(Te+ae*Re,fe+qe*Re,ae,qe)}}function X(Te){let fe=r.getBoundingClientRect(),ie=(Te.clientX-fe.left)/Math.max(1,fe.width)*_,xe=(Te.clientY-fe.top)/Math.max(1,fe.height)*x;ie<0||xe<0||ie>_||xe>x||(ee=ie,de=xe,ye||(we=ie,ve=xe),ye=!0)}function Z(){ye&&((ee!==we||de!==ve)&&V(we,ve,ee,de),we=ee,ve=de)}function se(){ye=!1,ee=de=we=ve=-9999}function Me(Te){for(let fe=0;fe<N;fe++)for(let ie=0;ie<I;ie++){let xe=fe*I+ie,ae=w(ie-1,fe-1),qe=w(ie-1,fe),De=w(ie-1,fe+1),ze=w(ie+1,fe-1),Re=w(ie+1,fe),Je=w(ie+1,fe+1),lt=w(ie,fe-1),Ye=w(ie,fe+1),nt=.5*G[ae]+G[qe]+.5*G[De]-.5*G[ze]-G[Re]-.5*G[Je],et=.5*F[ae]+F[lt]+.5*F[ze]-.5*F[De]-F[Ye]-.5*F[Je];z[xe]=(nt+et)*Yl}for(let fe=0;fe<N;fe++)for(let ie=0;ie<I;ie++){let xe=fe*I+ie,ae=w(ie-1,fe-1),qe=w(ie-1,fe),De=w(ie-1,fe+1),ze=w(ie+1,fe-1),Re=w(ie+1,fe),Je=w(ie+1,fe+1),lt=w(ie,fe-1),Ye=w(ie,fe+1),nt=G[xe]+(.5*z[ae]+z[qe]+.5*z[De]-.5*z[ze]-z[Re]-.5*z[Je])*Yl,et=F[xe]+(.5*z[ae]+z[lt]+.5*z[ze]-.5*z[De]-z[Ye]-.5*z[Je])*Yl,ct=Math.hypot(nt,et);ct>Zl&&(nt*=Zl/ct,et*=Zl/ct),Y[xe]=nt*.99,W[xe]=et*.99}[G,Y]=[Y,G],[F,W]=[W,F]}function Se(Te,fe){for(let xe=0;xe<b;xe++){let ae=xe*3,qe=Te-R;if(!$&&qe<o){let _t=Math.min(1,Math.max(0,qe/o)),rt=.018+(1-Math.pow(1-_t,3))*.075;T[ae]+=(M[ae]-T[ae])*rt,T[ae+1]+=(M[ae+1]-T[ae+1])*rt,P[ae]=0,P[ae+1]=0;continue}let De=Math.min(_-1,Math.max(0,T[ae]+_/2)),ze=Math.min(x-1,Math.max(0,x/2-T[ae+1])),Re=Math.min(I-1,Math.max(0,Math.floor(De/Ut))),Je=Math.min(N-1,Math.max(0,Math.floor(ze/Ut))),lt=w(Re,Je),Ye=w(Re+1,Je),nt=w(Re,Je+1),et=De%Ut/Ut,ct=ze%Ut/Ut,B=Math.hypot(P[ae],P[ae+1]);if(B>Gp?O[xe]=-1:O[xe]<0&&(O[xe]=Te),O[xe]>=0){let _t=Math.min(1,(Te-O[xe])/Vp),Tt=_t*_t*(3-2*_t),rt=kp*fe*(hu+(1-hu)*Tt);P[ae]+=(M[ae]-T[ae])*rt,P[ae+1]+=(M[ae+1]-T[ae+1])*rt}P[ae]+=((1-et)*G[lt]+et*G[Ye]+ct*G[nt])*lu,P[ae+1]-=((1-ct)*F[lt]+et*F[Ye]+ct*F[nt])*lu,B=Math.hypot(P[ae],P[ae+1]),B>Jl&&(P[ae]*=Jl/B,P[ae+1]*=Jl/B),T[ae]+=P[ae],T[ae+1]+=P[ae+1],P[ae]*=cu,P[ae+1]*=cu}let ie=v?.getAttribute("position");ie&&(ie.needsUpdate=!0)}function pe(Te){if(!le)return;let fe=Te/1e3,ie=Math.min(.05,Math.max(.001,(Te-he)/1e3));he=Te,Z(),Me(fe),Se(fe,ie),d.render(u,g),te=requestAnimationFrame(pe)}function Ae(){le||!_e||document.hidden||S||(le=!0,he=performance.now(),te=requestAnimationFrame(pe))}function Q(){le=!1,cancelAnimationFrame(te)}function oe(Te=!1){if(_=Math.max(1,Math.round(r.clientWidth)),x=Math.max(1,Math.round(r.clientHeight)),_<10||x<10)return;let fe=Math.min(window.devicePixelRatio||1,ou);d.setPixelRatio(fe),d.setSize(_,x,!1),g=new Hi(-_/2,_/2,x/2,-x/2,.1,10),g.position.z=1,U(),L(Te)&&(r.classList.add("is-live"),Te||(R=-1/0))}function re(){document.hidden?Q():Ae()}function me(Te){Te.preventDefault(),Q(),r.classList.remove("is-live")}r.addEventListener("pointerenter",X),r.addEventListener("pointermove",X),r.addEventListener("click",X),r.addEventListener("pointerleave",se);let it=new ResizeObserver(()=>{$&&(window.clearTimeout(Ne),Ne=window.setTimeout(()=>{Math.abs(Math.round(r.clientWidth)-_)<2&&Math.abs(Math.round(r.clientHeight)-x)<2||oe(!1)},180))});it.observe(r);let $e=new IntersectionObserver(Te=>{_e=Te[0]?.isIntersecting??!0,_e?Ae():Q()});return $e.observe(r),document.addEventListener("visibilitychange",re),n.addEventListener("webglcontextlost",me),oe(p),window.setTimeout(()=>{$=!0},o*1e3+50),Ae(),{dispose(){S||(S=!0,Q(),it.disconnect(),$e.disconnect(),document.removeEventListener("visibilitychange",re),n.removeEventListener("webglcontextlost",me),r.removeEventListener("pointerenter",X),r.removeEventListener("pointermove",X),r.removeEventListener("click",X),r.removeEventListener("pointerleave",se),D(),d.dispose(),r.classList.remove("is-live"))}}}return xu(Kp);})();
/*! Bundled license information:

three/build/three.core.min.js:
three/build/three.module.min.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
