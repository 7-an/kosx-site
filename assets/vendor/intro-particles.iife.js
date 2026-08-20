var KOSXIntroParticles=(()=>{var rn=Object.defineProperty;var iu=Object.getOwnPropertyDescriptor;var ru=Object.getOwnPropertyNames;var au=Object.prototype.hasOwnProperty;var nu=(e,t)=>{for(var i in t)rn(e,i,{get:t[i],enumerable:!0})},su=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ru(t))!au.call(e,a)&&a!==i&&rn(e,a,{get:()=>t[a],enumerable:!(r=iu(t,a))||r.enumerable});return e};var ou=e=>su(rn({},"__esModule",{value:!0}),e);var Cf={};nu(Cf,{mountParticleSlogan:()=>Af});var lu=0,Ds=1,hu=2,Pa=1,uu=2,Ir=3,Fr=0,Rt=1,ci=2,di=0,La=1,Os=2,Fs=3,Bs=4,cu=5,yr=100,du=101,pu=102,fu=103,mu=104,gu=200,vu=201,_u=202,xu=203,Mu=204,yu=205,Su=206,Eu=207,Tu=208,bu=209,wu=210,Au=211,Cu=212,Ru=213,Pu=214,Rl=0,Pl=1,Ll=2,Zn=3,Nl=4,Il=5,Ul=6,Dl=7,Lu=0,Nu=1,Iu=2,ti=0,Ol=1,Fl=2,Bl=3,zl=4,Vl=5,Gl=6,Hl=7,kl=300,Br=301,dr=302,an=303,nn=304,Wa=306,Kn=1e3,Oi=1001,Jn=1002,Ht=1003,Uu=1004,Qr=1005,Tt=1006,sn=1007,lr=1008,Gt=1009,Wl=1010,Xl=1011,zr=1012,ls=1013,Ei=1014,$t=1015,fi=1016,hs=1017,us=1018,Vr=1020,jl=35902,ql=35899,Du=1021,Ou=1022,Qt=1023,Fi=1026,hr=1027,Yl=1028,cs=1029,pr=1030,Zl=1031,Kl=1033,on=33776,ln=33777,hn=33778,un=33779,zs=35840,Vs=35841,Gs=35842,Hs=35843,ks=36196,Ws=37492,Xs=37496,js=37488,qs=37489,$n=37490,Ys=37491,Zs=37808,Ks=37809,Js=37810,$s=37811,Qs=37812,eo=37813,to=37814,io=37815,ro=37816,ao=37817,no=37818,so=37819,oo=37820,lo=37821,ho=36492,uo=36494,co=36495,po=36283,fo=36284,Qn=36285,mo=36286,Oa=2300,es=2301,cn=2302,go=2303,vo=2400,_o=2401,xo=2402,Mo=0,Fu=1,ar="",It="srgb",Fa="srgb-linear",Ba="linear",et="srgb",Wi=7680,Bu=512,zu=513,Vu=514,ds=515,Gu=516,Hu=517,ps=518,ku=519,yo=35044,So="300 es",Ti=2e3,za=2001;function Wu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Va(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Xu(){let e=Va("canvas");return e.style.display="block",e}var Eo={},fr=null;function To(...e){let t="THREE."+e.shift();fr?fr("log",t,...e):console.log(t,...e)}function Jl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Re(...e){let t="THREE."+(e=Jl(e)).shift();if(fr)fr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Le(...e){let t="THREE."+(e=Jl(e)).shift();if(fr)fr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function ur(...e){let t=e.join(" ");t in Eo||(Eo[t]=!0,Re(...e))}function ju(e,t,i){return new Promise(function(r,a){setTimeout(function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}},i)})}var qu={[Rl]:1,[Ll]:6,[Nl]:7,[Zn]:5,[Pl]:0,[Ul]:2,[Dl]:4,[Il]:3},zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,ts=180/Math.PI;function _r(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(yt[255&e]+yt[e>>8&255]+yt[e>>16&255]+yt[e>>24&255]+"-"+yt[255&t]+yt[t>>8&255]+"-"+yt[t>>16&15|64]+yt[t>>24&255]+"-"+yt[63&i|128]+yt[i>>8&255]+"-"+yt[i>>16&255]+yt[i>>24&255]+yt[255&r]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function Ge(e,t,i){return Math.max(t,Math.min(i,e))}function Yu(e,t){return(e%t+t)%t}function dn(e,t,i){return(1-i)*e+i*t}function Sr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(4294967295*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(2147483647*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ne=class $l{static{$l.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=a[n+0],c=a[n+1],p=a[n+2],g=a[n+3];if(u!==g||o!==f||l!==c||h!==p){let d=o*f+l*c+h*p+u*g;d<0&&(f=-f,c=-c,p=-p,g=-g,d=-d);let _=1-s;if(d<.9995){let m=Math.acos(d),v=Math.sin(m);_=Math.sin(_*m)/v,o=o*_+f*(s=Math.sin(s*m)/v),l=l*_+c*s,h=h*_+p*s,u=u*_+g*s}else{o=o*_+f*s,l=l*_+c*s,h=h*_+p*s,u=u*_+g*s;let m=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=m,l*=m,h*=m,u*=m}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],f=a[n+1],c=a[n+2],p=a[n+3];return e[t]=s*p+h*u+o*c-l*f,e[t+1]=o*p+h*f+l*u-s*c,e[t+2]=l*p+h*c+s*f-o*u,e[t+3]=h*p-s*u-o*f-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),f=o(i/2),c=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=f*h*u+l*c*p,this._y=l*c*u-f*h*p,this._z=l*h*p+f*c*u,this._w=l*h*u-f*c*p;break;case"YXZ":this._x=f*h*u+l*c*p,this._y=l*c*u-f*h*p,this._z=l*h*p-f*c*u,this._w=l*h*u+f*c*p;break;case"ZXY":this._x=f*h*u-l*c*p,this._y=l*c*u+f*h*p,this._z=l*h*p+f*c*u,this._w=l*h*u-f*c*p;break;case"ZYX":this._x=f*h*u-l*c*p,this._y=l*c*u+f*h*p,this._z=l*h*p-f*c*u,this._w=l*h*u+f*c*p;break;case"YZX":this._x=f*h*u+l*c*p,this._y=l*c*u+f*h*p,this._z=l*h*p-f*c*u,this._w=l*h*u-f*c*p;break;case"XZY":this._x=f*h*u-l*c*p,this._y=l*c*u-f*h*p,this._z=l*h*p+f*c*u,this._w=l*h*u+f*c*p;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],f=i+s+u;if(f>0){let c=.5/Math.sqrt(f+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(n-r)*c}else if(i>s&&i>u){let c=2*Math.sqrt(1+i-s-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+l)/c}else if(s>u){let c=2*Math.sqrt(1+s-i-u);this._w=(a-l)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-s);this._w=(n-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class Ql{static{Ql.prototype.isVector3=!0}constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),f=2*(n*r-s*i);return this.x=i+l*h+s*f-o*u,this.y=r+l*u+o*h-n*f,this.z=a+l*f+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this.z=Ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this.z=Ge(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return pn.copy(this).projectOnVector(t),this.sub(pn)}reflect(t){return this.sub(pn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,4*i)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,3*i)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=2*Math.random()-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pn=new A,bo=new mi,ze=class eh{static{eh.prototype.isMatrix3=!0}constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],f=r[7],c=r[2],p=r[5],g=r[8],d=a[0],_=a[3],m=a[6],v=a[1],x=a[4],y=a[7],b=a[2],E=a[5],L=a[8];return n[0]=s*d+o*v+l*b,n[3]=s*_+o*x+l*E,n[6]=s*m+o*y+l*L,n[1]=h*d+u*v+f*b,n[4]=h*_+u*x+f*E,n[7]=h*m+u*y+f*L,n[2]=c*d+p*v+g*b,n[5]=c*_+p*x+g*E,n[8]=c*m+p*y+g*L,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],f=u*s-o*h,c=o*l-u*n,p=h*n-s*l,g=i*f+r*c+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/g;return t[0]=f*d,t[1]=(a*h-u*r)*d,t[2]=(o*r-a*s)*d,t[3]=c*d,t[4]=(u*i-a*l)*d,t[5]=(a*n-o*i)*d,t[6]=p*d,t[7]=(r*l-h*i)*d,t[8]=(s*i-r*n)*d,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fn.makeScale(t,i)),this}rotate(t){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fn.makeRotation(-t)),this}translate(t,i){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fn=new ze,wo=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){let e={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(a,n,s){return this.enabled!==!1&&n!==s&&n&&s&&(this.spaces[n].transfer===et&&(a.r=pi(a.r),a.g=pi(a.g),a.b=pi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(a.r=cr(a.r),a.g=cr(a.g),a.b=cr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===""?Ba:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Fa]:{primaries:t,whitePoint:r,transfer:Ba,toXYZ:wo,fromXYZ:Ao,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:t,whitePoint:r,transfer:et,toXYZ:wo,fromXYZ:Ao,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),e}var Ye=Zu();function pi(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function cr(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}var Xi,Ku=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=Va("canvas")),Xi.width=e.width,Xi.height=e.height;let r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Va("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=255*pi(a[n]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*pi(t[i]/255)):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ju=0,fs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(mn(r[n].image)):a.push(mn(r[n]))}else a=mn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function mn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ku.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var $u=0,gn=new A,kt=class Ia extends zi{constructor(t=Ia.DEFAULT_IMAGE,i=Ia.DEFAULT_MAPPING,r=1001,a=1001,n=1006,s=1008,o=1023,l=1009,h=Ia.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=_r(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gn).x}get height(){return this.source.getSize(gn).y}get depth(){return this.source.getSize(gn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];a!==void 0?a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r:Re(`Texture.setValues(): property '${i}' does not exist.`)}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kn:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Jn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Kn:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Jn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=kl,kt.DEFAULT_ANISOTROPY=1;var at=class th{static{th.prototype.isVector4=!0}constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],f=s[5],c=s[9],p=s[2],g=s[6],d=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(c-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(c+g)<.1&&Math.abs(o+f+d-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,v=(f+1)/2,x=(d+1)/2,y=(l+u)/4,b=(h+p)/4,E=(c+g)/4;return m>v&&m>x?m<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(m),a=y/r,n=b/r):v>x?v<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(v),r=y/a,n=E/a):x<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),r=b/n,a=E/n),this.set(r,a,n,i),this}let _=Math.sqrt((g-c)*(g-c)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(_)<.001&&(_=1),this.x=(g-c)/_,this.y=(h-p)/_,this.z=(u-l)/_,this.w=Math.acos((o+f+d-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ge(this.x,t.x,i.x),this.y=Ge(this.y,t.y,i.y),this.z=Ge(this.z,t.z,i.z),this.w=Ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ge(this.x,t,i),this.y=Ge(this.y,t,i),this.z=Ge(this.z,t,i),this.w=Ge(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qu=class extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new kt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ih=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ec=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},He=class is{static{is.prototype.isMatrix4=!0}constructor(t,i,r,a,n,s,o,l,h,u,f,c,p,g,d,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,f,c,p,g,d,_)}set(t,i,r,a,n,s,o,l,h,u,f,c,p,g,d,_){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=a,m[1]=n,m[5]=s,m[9]=o,m[13]=l,m[2]=h,m[6]=u,m[10]=f,m[14]=c,m[3]=p,m[7]=g,m[11]=d,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new is().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/ji.setFromMatrixColumn(t,0).length(),n=1/ji.setFromMatrixColumn(t,1).length(),s=1/ji.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),f=Math.sin(n);if(t.order==="XYZ"){let c=s*u,p=s*f,g=o*u,d=o*f;i[0]=l*u,i[4]=-l*f,i[8]=h,i[1]=p+g*h,i[5]=c-d*h,i[9]=-o*l,i[2]=d-c*h,i[6]=g+p*h,i[10]=s*l}else if(t.order==="YXZ"){let c=l*u,p=l*f,g=h*u,d=h*f;i[0]=c+d*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*f,i[5]=s*u,i[9]=-o,i[2]=p*o-g,i[6]=d+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*u,p=l*f,g=h*u,d=h*f;i[0]=c-d*o,i[4]=-s*f,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*u,i[9]=d-c*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*u,p=s*f,g=o*u,d=o*f;i[0]=l*u,i[4]=g*h-p,i[8]=c*h+d,i[1]=l*f,i[5]=d*h+c,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,p=s*h,g=o*l,d=o*h;i[0]=l*u,i[4]=d-c*f,i[8]=g*f+p,i[1]=f,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=p*f+g,i[10]=c-d*f}else if(t.order==="XZY"){let c=s*l,p=s*h,g=o*l,d=o*h;i[0]=l*u,i[4]=-f,i[8]=h*u,i[1]=c*f+d,i[5]=s*u,i[9]=p*f-g,i[2]=g*f-p,i[6]=o*u,i[10]=d*f+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tc,t,ic)}lookAt(t,i,r){let a=this.elements;return At.subVectors(t,i),At.lengthSq()===0&&(At.z=1),At.normalize(),vi.crossVectors(r,At),vi.lengthSq()===0&&(Math.abs(r.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),vi.crossVectors(r,At)),vi.normalize(),ea.crossVectors(At,vi),a[0]=vi.x,a[4]=ea.x,a[8]=At.x,a[1]=vi.y,a[5]=ea.y,a[9]=At.y,a[2]=vi.z,a[6]=ea.z,a[10]=At.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],f=r[5],c=r[9],p=r[13],g=r[2],d=r[6],_=r[10],m=r[14],v=r[3],x=r[7],y=r[11],b=r[15],E=a[0],L=a[4],D=a[8],P=a[12],z=a[1],I=a[5],X=a[9],j=a[13],H=a[2],k=a[6],Y=a[10],B=a[14],oe=a[3],fe=a[7],Ee=a[11],Me=a[15];return n[0]=s*E+o*z+l*H+h*oe,n[4]=s*L+o*I+l*k+h*fe,n[8]=s*D+o*X+l*Y+h*Ee,n[12]=s*P+o*j+l*B+h*Me,n[1]=u*E+f*z+c*H+p*oe,n[5]=u*L+f*I+c*k+p*fe,n[9]=u*D+f*X+c*Y+p*Ee,n[13]=u*P+f*j+c*B+p*Me,n[2]=g*E+d*z+_*H+m*oe,n[6]=g*L+d*I+_*k+m*fe,n[10]=g*D+d*X+_*Y+m*Ee,n[14]=g*P+d*j+_*B+m*Me,n[3]=v*E+x*z+y*H+b*oe,n[7]=v*L+x*I+y*k+b*fe,n[11]=v*D+x*X+y*Y+b*Ee,n[15]=v*P+x*j+y*B+b*Me,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],f=t[6],c=t[10],p=t[14],g=t[3],d=t[7],_=t[11],m=t[15],v=l*p-h*c,x=o*p-h*f,y=o*c-l*f,b=s*p-h*u,E=s*c-l*u,L=s*f-o*u;return i*(d*v-_*x+m*y)-r*(g*v-_*b+m*E)+a*(g*x-d*b+m*L)-n*(g*y-d*E+_*L)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(s*u-o*h)-r*(n*u-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],f=t[9],c=t[10],p=t[11],g=t[12],d=t[13],_=t[14],m=t[15],v=i*o-r*s,x=i*l-a*s,y=i*h-n*s,b=r*l-a*o,E=r*h-n*o,L=a*h-n*l,D=u*d-f*g,P=u*_-c*g,z=u*m-p*g,I=f*_-c*d,X=f*m-p*d,j=c*m-p*_,H=v*j-x*X+y*I+b*z-E*P+L*D;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/H;return t[0]=(o*j-l*X+h*I)*k,t[1]=(a*X-r*j-n*I)*k,t[2]=(d*L-_*E+m*b)*k,t[3]=(c*E-f*L-p*b)*k,t[4]=(l*z-s*j-h*P)*k,t[5]=(i*j-a*z+n*P)*k,t[6]=(_*y-g*L-m*x)*k,t[7]=(u*L-c*y+p*x)*k,t[8]=(s*X-o*z+h*D)*k,t[9]=(r*z-i*X-n*D)*k,t[10]=(g*E-d*y+m*v)*k,t[11]=(f*y-u*E-p*v)*k,t[12]=(o*P-s*I-l*D)*k,t[13]=(i*I-r*P+a*D)*k,t[14]=(d*x-g*b-_*v)*k,t[15]=(u*b-f*x+c*v)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,f=o+o,c=n*h,p=n*u,g=n*f,d=s*u,_=s*f,m=o*f,v=l*h,x=l*u,y=l*f,b=r.x,E=r.y,L=r.z;return a[0]=(1-(d+m))*b,a[1]=(p+y)*b,a[2]=(g-x)*b,a[3]=0,a[4]=(p-y)*E,a[5]=(1-(c+m))*E,a[6]=(_+v)*E,a[7]=0,a[8]=(g+x)*L,a[9]=(_-v)*L,a[10]=(1-(c+d))*L,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=ji.set(a[0],a[1],a[2]).length(),o=ji.set(a[4],a[5],a[6]).length(),l=ji.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Ft.copy(this);let h=1/s,u=1/o,f=1/l;return Ft.elements[0]*=h,Ft.elements[1]*=h,Ft.elements[2]*=h,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,i.setFromRotationMatrix(Ft),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=2e3,l=!1){let h=this.elements,u=2*n/(i-t),f=2*n/(r-a),c=(i+t)/(i-t),p=(r+a)/(r-a),g,d;if(l)g=n/(s-n),d=s*n/(s-n);else if(o===Ti)g=-(s+n)/(s-n),d=-2*s*n/(s-n);else{if(o!==za)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-s/(s-n),d=-s*n/(s-n)}return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=f,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=d,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=2e3,l=!1){let h=this.elements,u=2/(i-t),f=2/(r-a),c=-(i+t)/(i-t),p=-(r+a)/(r-a),g,d;if(l)g=1/(s-n),d=s/(s-n);else if(o===Ti)g=-2/(s-n),d=-(s+n)/(s-n);else{if(o!==za)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(s-n),d=-n/(s-n)}return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=f,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=d,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},ji=new A,Ft=new He,tc=new A(0,0,0),ic=new A(1,1,1),vi=new A,ea=new A,At=new A,Co=new He,Ro=new mi,Gr=class rh{constructor(t=0,i=0,r=0,a=rh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],f=a[2],c=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Co.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Co,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gr.DEFAULT_ORDER="XYZ";var ah=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},rc=0,Po=new A,qi=new mi,si=new He,ta=new A,Er=new A,ac=new A,nc=new mi,Lo=new A(1,0,0),No=new A(0,1,0),Io=new A(0,0,1),Uo={type:"added"},sc={type:"removed"},Yi={type:"childadded",child:null},vn={type:"childremoved",child:null},ri=class Ua extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ua.DEFAULT_UP.clone();let t=new A,i=new Gr,r=new mi,a=new A(1,1,1);i._onChange(function(){r.setFromEuler(i,!1)}),r._onChange(function(){i.setFromQuaternion(r,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new He},normalMatrix:{value:new ze}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Ua.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ua.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return qi.setFromAxisAngle(t,i),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,i){return qi.setFromAxisAngle(t,i),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Lo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Io,t)}translateOnAxis(t,i){return Po.copy(t).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Lo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ta.copy(t):ta.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Er,ta,this.up):si.lookAt(ta,Er,this.up),this.quaternion.setFromRotationMatrix(si),a&&(si.extractRotation(a.matrixWorld),qi.setFromRotationMatrix(si),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uo),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sc),vn.child=t,this.dispatchEvent(vn),vn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uo),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let f=l[h];n(t.shapes,f)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),f=s(t.shapes),c=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};ri.DEFAULT_UP=new A(0,1,0),ri.DEFAULT_MATRIX_AUTO_UPDATE=!0,ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ia=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},oc={type:"move"},_n=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let d=t.getJointPose(g,i),_=this._getHandJoint(l,g);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=d.radius),_.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),c=.02,p=.005;l.inputState.pinching&&f>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(oc)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ra={h:0,s:0,l:0};function xn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+6*(t-e)*(2/3-i):e}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Yu(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=xn(n,a,e+1/3),this.g=xn(n,a,e),this.b=xn(n,a,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ye.workingToColorSpace(St.copy(this),e),65536*Math.round(Ge(255*St.r,0,255))+256*Math.round(Ge(255*St.g,0,255))+Math.round(Ge(255*St.b,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(St.copy(this),t);let i=St.r,r=St.g,a=St.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=It){Ye.workingToColorSpace(St.copy(this),e);let t=St.r,i=St.g,r=St.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(ra);let i=dn(_i.h,ra.h,t),r=dn(_i.s,ra.s,t),a=dn(_i.l,ra.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new je;je.NAMES=nh;var lc=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentIntensity=1,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bt=new A,oi=new A,Mn=new A,li=new A,Zi=new A,Ki=new A,Do=new A,yn=new A,Sn=new A,En=new A,Tn=new at,bn=new at,wn=new at,nr=class sr{constructor(t=new A,i=new A,r=new A){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Bt.subVectors(t,i),a.cross(Bt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Bt.subVectors(a,i),oi.subVectors(r,i),Mn.subVectors(t,i);let s=Bt.dot(Bt),o=Bt.dot(oi),l=Bt.dot(Mn),h=oi.dot(oi),u=oi.dot(Mn),f=s*h-o*o;if(f===0)return n.set(0,0,0),null;let c=1/f,p=(h*l-o*u)*c,g=(s*u-o*l)*c;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,li)!==null&&li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,li.x),l.addScaledVector(s,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Tn.setScalar(0),bn.setScalar(0),wn.setScalar(0),Tn.fromBufferAttribute(t,i),bn.fromBufferAttribute(t,r),wn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Tn,n.x),s.addScaledVector(bn,n.y),s.addScaledVector(wn,n.z),s}static isFrontFacing(t,i,r,a){return Bt.subVectors(r,i),oi.subVectors(t,i),Bt.cross(oi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bt.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),.5*Bt.cross(oi).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return sr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return sr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return sr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Zi.subVectors(a,r),Ki.subVectors(n,r),yn.subVectors(t,r);let l=Zi.dot(yn),h=Ki.dot(yn);if(l<=0&&h<=0)return i.copy(r);Sn.subVectors(t,a);let u=Zi.dot(Sn),f=Ki.dot(Sn);if(u>=0&&f<=u)return i.copy(a);let c=l*f-u*h;if(c<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(Zi,s);En.subVectors(t,n);let p=Zi.dot(En),g=Ki.dot(En);if(g>=0&&p<=g)return i.copy(n);let d=p*h-l*g;if(d<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Ki,o);let _=u*g-p*f;if(_<=0&&f-u>=0&&p-g>=0)return Do.subVectors(n,a),o=(f-u)/(f-u+(p-g)),i.copy(a).addScaledVector(Do,o);let m=1/(_+d+c);return s=d*m,o=c*m,i.copy(r).addScaledVector(Zi,s).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,zt):zt.fromBufferAttribute(a,n),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),na.subVectors(this.max,Tr),Ji.subVectors(e.a,Tr),$i.subVectors(e.b,Tr),Qi.subVectors(e.c,Tr),xi.subVectors($i,Ji),Mi.subVectors(Qi,$i),Pi.subVectors(Ji,Qi);let t=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-Pi.z,Pi.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,Pi.z,0,-Pi.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-Pi.y,Pi.x,0];return!!An(t,Ji,$i,Qi,na)&&(t=[1,0,0,0,1,0,0,0,1],!!An(t,Ji,$i,Qi,na)&&(sa.crossVectors(xi,Mi),t=[sa.x,sa.y,sa.z],An(t,Ji,$i,Qi,na)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(zt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new A,new A,new A,new A,new A,new A,new A,new A],zt=new A,aa=new bi,Ji=new A,$i=new A,Qi=new A,xi=new A,Mi=new A,Pi=new A,Tr=new A,na=new A,sa=new A,Li=new A;function An(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Li.fromArray(e,n);let o=a.x*Math.abs(Li.x)+a.y*Math.abs(Li.y)+a.z*Math.abs(Li.z),l=t.dot(Li),h=i.dot(Li),u=r.dot(Li);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var Pf=hc();function hc(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[256|l]=32768,a[l]=24,a[256|l]=24):h<-14?(r[l]=1024>>-h-14,r[256|l]=1024>>-h-14|32768,a[l]=-h-1,a[256|l]=-h-1):h<=15?(r[l]=h+15<<10,r[256|l]=h+15<<10|32768,a[l]=13,a[256|l]=13):h<128?(r[l]=31744,r[256|l]=64512,a[l]=24,a[256|l]=24):(r[l]=31744,r[256|l]=64512,a[l]=13,a[256|l]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(8388608&h);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,n[l]=h|u}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var ft=new A,oa=new ne,uc=0,Pt=class extends zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yo,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),a=bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},sh=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},oh=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},De=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},cc=new bi,br=new A,Cn=new A,wi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Cn)),this.expandByPoint(br.copy(e.center).sub(Cn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dc=0,Nt=new He,Rn=new ri,er=new A,Ct=new bi,wr=new bi,_t=new A,ht=class lh extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new((function(i){for(let r=i.length-1;r>=0;--r)if(i[r]>=65535)return!0;return!1})(t)?oh:sh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new ze().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nt.makeRotationFromQuaternion(t),this.applyMatrix4(Nt),this}rotateX(t){return Nt.makeRotationX(t),this.applyMatrix4(Nt),this}rotateY(t){return Nt.makeRotationY(t),this.applyMatrix4(Nt),this}rotateZ(t){return Nt.makeRotationZ(t),this.applyMatrix4(Nt),this}translate(t,i,r){return Nt.makeTranslation(t,i,r),this.applyMatrix4(Nt),this}scale(t,i,r){return Nt.makeScale(t,i,r),this.applyMatrix4(Nt),this}lookAt(t){return Rn.lookAt(t),Rn.updateMatrix(),this.applyMatrix4(Rn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new De(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ct.setFromBufferAttribute(n),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(t){let r=this.boundingSphere.center;if(Ct.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ct.min,wr.min),Ct.expandByPoint(_t),_t.addVectors(Ct.max,wr.max),Ct.expandByPoint(_t)):(Ct.expandByPoint(wr.min),Ct.expandByPoint(wr.max))}Ct.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)_t.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(_t));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)_t.fromBufferAttribute(o,h),l&&(er.fromBufferAttribute(t,h),_t.add(er)),a=Math.max(a,r.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0)return void Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");s!==void 0&&s.count===r.count||(s=new Pt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let D=0;D<r.count;D++)o[D]=new A,l[D]=new A;let h=new A,u=new A,f=new A,c=new ne,p=new ne,g=new ne,d=new A,_=new A;function m(D,P,z){h.fromBufferAttribute(r,D),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,z),c.fromBufferAttribute(n,D),p.fromBufferAttribute(n,P),g.fromBufferAttribute(n,z),u.sub(h),f.sub(h),p.sub(c),g.sub(c);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(d.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[D].add(d),o[P].add(d),o[z].add(d),l[D].add(_),l[P].add(_),l[z].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,P=v.length;D<P;++D){let z=v[D],I=z.start;for(let X=I,j=I+z.count;X<j;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let x=new A,y=new A,b=new A,E=new A;function L(D){b.fromBufferAttribute(a,D),E.copy(b);let P=o[D];x.copy(P),x.sub(b.multiplyScalar(b.dot(P))).normalize(),y.crossVectors(E,P);let z=y.dot(l[D])<0?-1:1;s.setXYZW(D,x.x,x.y,x.z,z)}for(let D=0,P=v.length;D<P;++D){let z=v[D],I=z.start;for(let X=I,j=I+z.count;X<j;X+=3)L(t.getX(X+0)),L(t.getX(X+1)),L(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Pt(new Float32Array(3*i.count),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);let a=new A,n=new A,s=new A,o=new A,l=new A,h=new A,u=new A,f=new A;if(t)for(let c=0,p=t.count;c<p;c+=3){let g=t.getX(c+0),d=t.getX(c+1),_=t.getX(c+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,d),s.fromBufferAttribute(i,_),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,d),h.fromBufferAttribute(r,_),o.add(u),l.add(u),h.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(d,l.x,l.y,l.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let c=0,p=i.count;c<p;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_t.fromBufferAttribute(t,i),_t.normalize(),t.setXYZ(i,_t.x,_t.y,_t.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,f=o.normalized,c=new h.constructor(l.length*u),p=0,g=0;for(let d=0,_=l.length;d<_;d++){p=o.isInterleavedBufferAttribute?l[d]*o.data.stride+o.offset:l[d]*u;for(let m=0;m<u;m++)c[g++]=h[p++]}return new Pt(c,u,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new lh,r=this.index.array,a=this.attributes;for(let o in a){let l=t(a[o],r);i.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,f=h.length;u<f;u++){let c=t(h[u],r);l.push(c)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let f=0,c=h.length;f<c;f++){let p=h[f];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],f=n[h];for(let c=0,p=f.length;c<p;c++)u.push(f[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let f=s[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lf=new A,pc=0,jr=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Re(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nf=new A,If=new A,Uf=new A,Df=new ne,Of=new ne,Ff=new He,Bf=new A,zf=new A,Vf=new A,Gf=new ne,Hf=new ne,kf=new ne,Wf=new A,Xf=new A,ui=new A,Pn=new A,la=new A,yi=new A,Ln=new A,ha=new A,Nn=new A,Xa=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pn.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Pn);let a=.5*e.distanceTo(t),n=-this.direction.dot(la),s=yi.dot(this.direction),o=-yi.dot(la),l=yi.lengthSq(),h=Math.abs(1-n*n),u,f,c,p;if(h>0)if(u=n*o-s,f=n*s-o,p=a*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,c=u*(u+n*f+2*s)+f*(n*u+f+2*o)+l}else f=a,u=Math.max(0,-(n*f+s)),c=-u*u+f*(f+2*o)+l;else f=-a,u=Math.max(0,-(n*f+s)),c=-u*u+f*(f+2*o)+l;else f<=-p?(u=Math.max(0,-(-n*a+s)),f=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+f*(f+2*o)+l):f<=p?(u=0,f=Math.min(Math.max(-a,-o),a),c=f*(f+2*o)+l):(u=Math.max(0,-(n*a+s)),f=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+f*(f+2*o)+l);else f=n>0?-a:a,u=Math.max(0,-(n*f+s)),c=-u*u+f*(f+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pn).addScaledVector(la,f),c}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let i=ui.dot(this.direction),r=ui.dot(ui)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,n=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,n=(e.min.y-f.y)*h),i>n||a>r?null:((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-f.z)*u,o=(e.max.z-f.z)*u):(s=(e.max.z-f.z)*u,o=(e.min.z-f.z)*u),i>o||s>r?null:((s>i||i!=i)&&(i=s),(o<r||r!=r)&&(r=o),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,r,a){Ln.subVectors(t,e),ha.subVectors(i,e),Nn.crossVectors(Ln,ha);let n,s=this.direction.dot(Nn);if(s>0){if(r)return null;n=1}else{if(!(s<0))return null;n=-1,s=-s}yi.subVectors(this.origin,e);let o=n*this.direction.dot(ha.crossVectors(yi,ha));if(o<0)return null;let l=n*this.direction.dot(Ln.cross(yi));if(l<0||o+l>s)return null;let h=-n*yi.dot(Nn);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hh=class extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oo=new He,Ni=new Xa,ua=new wi,Fo=new A,ca=new A,da=new A,pa=new A,In=new A,fa=new A,Bo=new A,ma=new A,Wt=class extends ri{constructor(e=new ht,t=new hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){fa.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(In.fromBufferAttribute(u,e),n?fa.addScaledVector(In,h):fa.addScaledVector(In.sub(t),h))}t.add(fa)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(a),Ni.copy(e.ray).recast(e.near),ua.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ua,Fo)===null||Ni.origin.distanceToSquared(Fo)>(e.far-e.near)**2))return;Oo.copy(a).invert(),Ni.copy(e.ray).applyMatrix4(Oo),i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Ni)}}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=f.length;p<g;p++){let d=f[p],_=n[d.materialIndex];for(let m=Math.max(d.start,c.start),v=Math.min(s.count,Math.min(d.start+d.count,c.start+c.count));m<v;m+=3)r=ga(this,_,e,i,l,h,u,s.getX(m),s.getX(m+1),s.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),r.face.materialIndex=d.materialIndex,t.push(r))}else for(let p=Math.max(0,c.start),g=Math.min(s.count,c.start+c.count);p<g;p+=3)r=ga(this,n,e,i,l,h,u,s.getX(p),s.getX(p+1),s.getX(p+2)),r&&(r.faceIndex=Math.floor(p/3),t.push(r));else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=f.length;p<g;p++){let d=f[p],_=n[d.materialIndex];for(let m=Math.max(d.start,c.start),v=Math.min(o.count,Math.min(d.start+d.count,c.start+c.count));m<v;m+=3)r=ga(this,_,e,i,l,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),r.face.materialIndex=d.materialIndex,t.push(r))}else for(let p=Math.max(0,c.start),g=Math.min(o.count,c.start+c.count);p<g;p+=3)r=ga(this,n,e,i,l,h,u,p,p+1,p+2),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}};function ga(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,ca),e.getVertexPosition(l,da),e.getVertexPosition(h,pa);let u=(function(f,c,p,g,d,_,m,v){let x;if(x=c.side===1?g.intersectTriangle(m,_,d,!0,v):g.intersectTriangle(d,_,m,c.side===0,v),x===null)return null;ma.copy(v),ma.applyMatrix4(f.matrixWorld);let y=p.ray.origin.distanceTo(ma);return y<p.near||y>p.far?null:{distance:y,point:ma.clone(),object:f}})(e,t,i,r,ca,da,pa,Bo);if(u){let f=new A;nr.getBarycoord(Bo,ca,da,pa,f),a&&(u.uv=nr.getInterpolatedAttribute(a,o,l,h,f,new ne)),n&&(u.uv1=nr.getInterpolatedAttribute(n,o,l,h,f,new ne)),s&&(u.normal=nr.getInterpolatedAttribute(s,o,l,h,f,new A),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new A,materialIndex:0};nr.getNormal(ca,da,pa,c.normal),u.face=c,u.barycoord=f}return u}var jf=new at,qf=new at,Yf=new at,Zf=new at,Kf=new He,Jf=new A,$f=new wi,Qf=new He,em=new Xa,fc=class extends kt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=1003,h=1003,u,f){super(null,n,s,o,l,h,r,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tm=new He,im=new He,rm=new He,am=new He,nm=new bi,sm=new He,om=new Wt,lm=new wi,Un=new A,mc=new A,gc=new ze,Ui=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Un.subVectors(i,t).cross(mc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Un),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gc.getNormalMatrix(e),r=this.coplanarPoint(Un).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new wi,vc=new ne(.5,.5),va=new A,Hr=class{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,a=new Ui,n=new Ui){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],u=a[5],f=a[6],c=a[7],p=a[8],g=a[9],d=a[10],_=a[11],m=a[12],v=a[13],x=a[14],y=a[15];if(r[0].setComponents(l-n,c-h,_-p,y-m).normalize(),r[1].setComponents(l+n,c+h,_+p,y+m).normalize(),r[2].setComponents(l+s,c+u,_+g,y+v).normalize(),r[3].setComponents(l-s,c-u,_-g,y-v).normalize(),i)r[4].setComponents(o,f,d,x).normalize(),r[5].setComponents(l-o,c-f,_-d,y-x).normalize();else if(r[4].setComponents(l-o,c-f,_-d,y-x).normalize(),t===Ti)r[5].setComponents(l+o,c+f,_+d,y+x).normalize();else{if(t!==za)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(o,f,d,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);let t=vc.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zo=new He,_c=class uh{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];zo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Hr),r[a].setFromProjectionMatrix(zo,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Hr),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new uh().copy(this)}},xc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},hm=new He,um=new je(1,1,1),cm=new Hr,dm=new _c,pm=new bi,fm=new wi,mm=new A,gm=new A,vm=new A,_m=new xc,xm=new Wt,Mm=new A,ym=new A,Sm=new He,Em=new Xa,Tm=new wi,bm=new A,wm=new A,Am=new A,Cm=new A,Mc=class extends jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vo=new He,rs=new Xa,_a=new wi,xa=new A,yc=class extends ri{constructor(e=new ht,t=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=a,e.ray.intersectsSphere(_a)===!1)return;Vo.copy(r).invert(),rs.copy(e.ray).applyMatrix4(Vo);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null)for(let u=Math.max(0,n.start),f=Math.min(l.count,n.start+n.count);u<f;u++){let c=l.getX(u);xa.fromBufferAttribute(h,c),Go(xa,c,o,r,e,t,this)}else for(let u=Math.max(0,n.start),f=Math.min(h.count,n.start+n.count);u<f;u++)xa.fromBufferAttribute(h,u),Go(xa,u,o,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Go(e,t,i,r,a,n,s){let o=rs.distanceSqToPoint(e);if(o<i){let l=new A;rs.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ch=class extends kt{constructor(e=[],t=301,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mr=class extends kt{constructor(e,t,i=1014,r,a,n,s=1003,o=1003,l,h=1026,u=1){if(h!==Fi&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sc=class extends mr{constructor(e,t=1014,i=301,r,a,n=1003,s=1003,o,l=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dh=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ja=class ph extends ht{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],f=[],c=0,p=0;function g(d,_,m,v,x,y,b,E,L,D,P){let z=y/L,I=b/D,X=y/2,j=b/2,H=E/2,k=L+1,Y=D+1,B=0,oe=0,fe=new A;for(let Ee=0;Ee<Y;Ee++){let Me=Ee*I-j;for(let $=0;$<k;$++){let se=$*z-X;fe[d]=se*v,fe[_]=Me*x,fe[m]=H,h.push(fe.x,fe.y,fe.z),fe[d]=0,fe[_]=0,fe[m]=E>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push($/L),f.push(1-Ee/D),B+=1}}for(let Ee=0;Ee<D;Ee++)for(let Me=0;Me<L;Me++){let $=c+Me+k*Ee,se=c+Me+k*(Ee+1),Te=c+(Me+1)+k*(Ee+1),le=c+(Me+1)+k*Ee;l.push($,se,le),l.push(se,Te,le),oe+=6}o.addGroup(p,oe,P),p+=oe,c+=B}g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ec=class fh extends ht{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],u=i/2,f=Math.PI/2*t,c=i,p=2*f+c,g=2*r+n,d=a+1,_=new A,m=new A;for(let v=0;v<=g;v++){let x=0,y=0,b=0,E=0;if(v<=r){let P=v/r,z=P*Math.PI/2;y=-u-t*Math.cos(z),b=t*Math.sin(z),E=-t*Math.cos(z),x=P*f}else if(v<=r+n){let P=(v-r)/n;y=P*i-u,b=t,E=0,x=f+P*c}else{let P=(v-r-n)/r,z=P*Math.PI/2;y=u+t*Math.sin(z),b=t*Math.cos(z),E=t*Math.sin(z),x=f+c+P*f}let L=Math.max(0,Math.min(1,x/p)),D=0;v===0?D=.5/a:v===g&&(D=-.5/a);for(let P=0;P<=a;P++){let z=P/a,I=z*Math.PI*2,X=Math.sin(I),j=Math.cos(I);m.x=-b*j,m.y=y,m.z=b*X,o.push(m.x,m.y,m.z),_.set(-b*j,E,b*X),_.normalize(),l.push(_.x,_.y,_.z),h.push(z+D,L)}if(v>0){let P=(v-1)*d;for(let z=0;z<a;z++){let I=P+z,X=P+z+1,j=v*d+z,H=v*d+z+1;s.push(I,X,j),s.push(X,H,j)}}}this.setIndex(s),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fh(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tc=class mh extends ht{constructor(t=1,i=32,r=0,a=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new A,u=new ne;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,c=3;f<=i;f++,c+=3){let p=r+f/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(s[c]/t+1)/2,u.y=(s[c+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=i;f++)n.push(f,f+1,0);this.setIndex(n),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gh=class vh extends ht{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let u=[],f=[],c=[],p=[],g=0,d=[],_=r/2,m=0;function v(x){let y=g,b=new ne,E=new A,L=0,D=x===!0?t:i,P=x===!0?1:-1;for(let I=1;I<=a;I++)f.push(0,_*P,0),c.push(0,P,0),p.push(.5,.5),g++;let z=g;for(let I=0;I<=a;I++){let X=I/a*l+o,j=Math.cos(X),H=Math.sin(X);E.x=D*H,E.y=_*P,E.z=D*j,f.push(E.x,E.y,E.z),c.push(0,P,0),b.x=.5*j+.5,b.y=.5*H*P+.5,p.push(b.x,b.y),g++}for(let I=0;I<a;I++){let X=y+I,j=z+I;x===!0?u.push(j,j+1,X):u.push(j+1,j,X),L+=3}h.addGroup(m,L,x===!0?1:2),m+=L}(function(){let x=new A,y=new A,b=0,E=(i-t)/r;for(let L=0;L<=n;L++){let D=[],P=L/n,z=P*(i-t)+t;for(let I=0;I<=a;I++){let X=I/a,j=X*l+o,H=Math.sin(j),k=Math.cos(j);y.x=z*H,y.y=-P*r+_,y.z=z*k,f.push(y.x,y.y,y.z),x.set(H,E,k).normalize(),c.push(x.x,x.y,x.z),p.push(X,1-P),D.push(g++)}d.push(D)}for(let L=0;L<a;L++)for(let D=0;D<n;D++){let P=d[D][L],z=d[D+1][L],I=d[D+1][L+1],X=d[D][L+1];(t>0||D!==0)&&(u.push(P,z,X),b+=3),(i>0||D!==n-1)&&(u.push(z,I,X),b+=3)}h.addGroup(m,b,0),m+=b})(),s===!1&&(t>0&&v(!0),i>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bc=class _h extends gh{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=2*Math.PI){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new _h(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qr=class xh extends ht{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];function o(p,g,d,_){let m=_+1,v=[];for(let x=0;x<=m;x++){v[x]=[];let y=p.clone().lerp(d,x/m),b=g.clone().lerp(d,x/m),E=m-x;for(let L=0;L<=E;L++)v[x][L]=L===0&&x===m?y:y.clone().lerp(b,L/E)}for(let x=0;x<m;x++)for(let y=0;y<2*(m-x)-1;y++){let b=Math.floor(y/2);y%2==0?(l(v[x][b+1]),l(v[x+1][b]),l(v[x][b])):(l(v[x][b+1]),l(v[x+1][b+1]),l(v[x+1][b]))}}function l(p){n.push(p.x,p.y,p.z)}function h(p,g){let d=3*p;g.x=t[d+0],g.y=t[d+1],g.z=t[d+2]}function u(p,g,d,_){_<0&&p.x===1&&(s[g]=p.x-1),d.x===0&&d.z===0&&(s[g]=_/2/Math.PI+.5)}function f(p){return Math.atan2(p.z,-p.x)}function c(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let g=new A,d=new A,_=new A;for(let m=0;m<i.length;m+=3)h(i[m+0],g),h(i[m+1],d),h(i[m+2],_),o(g,d,_,p)})(a),(function(p){let g=new A;for(let d=0;d<n.length;d+=3)g.x=n[d+0],g.y=n[d+1],g.z=n[d+2],g.normalize().multiplyScalar(p),n[d+0]=g.x,n[d+1]=g.y,n[d+2]=g.z})(r),(function(){let p=new A;for(let g=0;g<n.length;g+=3){p.x=n[g+0],p.y=n[g+1],p.z=n[g+2];let d=f(p)/2/Math.PI+.5,_=c(p)/Math.PI+.5;s.push(d,1-_)}(function(){let g=new A,d=new A,_=new A,m=new A,v=new ne,x=new ne,y=new ne;for(let b=0,E=0;b<n.length;b+=9,E+=6){g.set(n[b+0],n[b+1],n[b+2]),d.set(n[b+3],n[b+4],n[b+5]),_.set(n[b+6],n[b+7],n[b+8]),v.set(s[E+0],s[E+1]),x.set(s[E+2],s[E+3]),y.set(s[E+4],s[E+5]),m.copy(g).add(d).add(_).divideScalar(3);let L=f(m);u(v,E+0,g,L),u(x,E+2,d,L),u(y,E+4,_,L)}})(),(function(){for(let g=0;g<s.length;g+=6){let d=s[g+0],_=s[g+2],m=s[g+4],v=Math.max(d,_,m),x=Math.min(d,_,m);v>.9&&x<.1&&(d<.2&&(s[g+0]+=1),_<.2&&(s[g+2]+=1),m<.2&&(s[g+4]+=1))}})()})(),this.setAttribute("position",new De(n,3)),this.setAttribute("normal",new De(n.slice(),3)),this.setAttribute("uv",new De(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xh(t.vertices,t.indices,t.radius,t.detail)}},wc=class Mh extends qr{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Mh(t.radius,t.detail)}},Ma=new A,ya=new A,Dn=new A,Sa=new nr,Ac=class extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Na*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},f=[];for(let c=0;c<s;c+=3){a?(o[0]=a.getX(c),o[1]=a.getX(c+1),o[2]=a.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:p,b:g,c:d}=Sa;if(p.fromBufferAttribute(n,o[0]),g.fromBufferAttribute(n,o[1]),d.fromBufferAttribute(n,o[2]),Sa.getNormal(Dn),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let _=0;_<3;_++){let m=(_+1)%3,v=h[_],x=h[m],y=Sa[l[_]],b=Sa[l[m]],E=`${v}_${x}`,L=`${x}_${v}`;L in u&&u[L]?(Dn.dot(u[L].normal)<=r&&(f.push(y.x,y.y,y.z),f.push(b.x,b.y,b.z)),u[L]=null):E in u||(u[E]={index0:o[_],index1:o[m],normal:Dn.clone()})}}for(let c in u)if(u[c]){let{index0:p,index1:g}=u[c];Ma.fromBufferAttribute(n,p),ya.fromBufferAttribute(n,g),f.push(Ma.x,Ma.y,Ma.z),f.push(ya.x,ya.y,ya.z)}this.setAttribute("position",new De(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;n=t||e*i[a-1];let s,o=0,l=a-1;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),s=i[r]-n,s<0)o=r+1;else{if(!(s>0)){l=r;break}l=r-1}if(r=l,i[r]===n)return r/(a-1);let h=i[r];return(r+(n-h)/(i[r+1]-h))/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new ne:new A);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,r=[],a=[],n=[],s=new A,o=new He;for(let c=0;c<=e;c++){let p=c/e;r[c]=this.getTangentAt(p,new A)}a[0]=new A,n[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),n[c]=n[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(Ge(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(s,p))}n[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos(Ge(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(c=-c);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],c*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ms=class extends ai{constructor(e=0,t=0,i=1,r=1,a=0,n=2*Math.PI,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ne){let i=t,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=n?0:r),this.aClockwise!==!0||n||(a===r?a=-r:a-=r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=o-this.aX,c=l-this.aY;o=f*h-c*u+this.aX,l=f*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cc=class extends ms{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function gs(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,f){let c=(s-n)/h-(o-n)/(h+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+f)+(l-o)/f;c*=u,p*=u,a(s,o,c,p)},calc:function(n){let s=n*n;return e+t*n+i*s+r*(s*n)}}}var Ho=new A,ko=new A,On=new gs,Fn=new gs,Bn=new gs,Rc=class extends ai{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s,o,l=Math.floor(n),h=n-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:h===0&&l===a-1&&(l=a-2,h=1),this.closed||l>0?s=r[(l-1)%a]:(ko.subVectors(r[0],r[1]).add(r[0]),s=ko);let u=r[l%a],f=r[(l+1)%a];if(this.closed||l+2<a?o=r[(l+2)%a]:(Ho.subVectors(r[a-1],r[a-2]).add(r[a-1]),o=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(s.distanceToSquared(u),c),g=Math.pow(u.distanceToSquared(f),c),d=Math.pow(f.distanceToSquared(o),c);g<1e-4&&(g=1),p<1e-4&&(p=g),d<1e-4&&(d=g),On.initNonuniformCatmullRom(s.x,u.x,f.x,o.x,p,g,d),Fn.initNonuniformCatmullRom(s.y,u.y,f.y,o.y,p,g,d),Bn.initNonuniformCatmullRom(s.z,u.z,f.z,o.z,p,g,d)}else this.curveType==="catmullrom"&&(On.initCatmullRom(s.x,u.x,f.x,o.x,this.tension),Fn.initCatmullRom(s.y,u.y,f.y,o.y,this.tension),Bn.initCatmullRom(s.z,u.z,f.z,o.z,this.tension));return i.set(On.calc(h),Fn.calc(h),Bn.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wo(e,t,i,r,a){let n=.5*(r-t),s=.5*(a-i),o=e*e;return(2*i-2*r+n+s)*(e*o)+(-3*i+3*r-2*n-s)*o+n*e+i}function Dr(e,t,i,r){return(function(a,n){let s=1-a;return s*s*n})(e,t)+(function(a,n){return 2*(1-a)*a*n})(e,i)+(function(a,n){return a*a*n})(e,r)}function Or(e,t,i,r,a){return(function(n,s){let o=1-n;return o*o*o*s})(e,t)+(function(n,s){let o=1-n;return 3*o*o*n*s})(e,i)+(function(n,s){return 3*(1-n)*n*n*s})(e,r)+(function(n,s){return n*n*n*s})(e,a)}var yh=class extends ai{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Or(e,r.x,a.x,n.x,s.x),Or(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends ai{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Or(e,r.x,a.x,n.x,s.x),Or(e,r.y,a.y,n.y,s.y),Or(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sh=class extends ai{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends ai{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eh=class extends ai{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Dr(e,r.x,a.x,n.x),Dr(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Th=class extends ai{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Dr(e,r.x,a.x,n.x),Dr(e,r.y,a.y,n.y),Dr(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(Wo(s,o.x,l.x,h.x,u.x),Wo(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ne().fromArray(r))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:Cc,CatmullRomCurve3:Rc,CubicBezierCurve:yh,CubicBezierCurve3:Pc,EllipseCurve:ms,LineCurve:Sh,LineCurve3:Lc,QuadraticBezierCurve:Eh,QuadraticBezierCurve3:Th,SplineCurve:bh}),Nc=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?2*e:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ga[r.type]().fromJSON(r))}return this}},Xo=class extends Nc{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Sh(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Eh(this.currentPoint.clone(),new ne(e,t),new ne(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new yh(this.currentPoint.clone(),new ne(e,t),new ne(i,r),new ne(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new bh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new ms(e,t,i,r,a,n,s,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wh=class extends Xo{constructor(e){super(e),this.uuid=_r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Xo().fromJSON(r))}return this}};function Ic(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=jo(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=(function(u,f,c,p){let g=[];for(let d=0,_=f.length;d<_;d++){let m=jo(u,f[d]*p,d<_-1?f[d+1]*p:u.length,p,!1);m===m.next&&(m.steiner=!0),g.push(Gc(m))}g.sort(Bc);for(let d=0;d<g.length;d++)c=zc(g[d],c);return c})(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let u=o,f=l;for(let c=i;c<a;c+=i){let p=e[c],g=e[c+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>f&&(f=g)}h=Math.max(u-o,f-l),h=h!==0?32767/h:0}return kr(n,s,i,o,l,h,0),s}function jo(e,t,i,r,a){let n;if(a===(function(s,o,l,h){let u=0;for(let f=o,c=l-h;f<l;f+=h)u+=(s[c]-s[f])*(s[f+1]+s[c+1]),c=f;return u})(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=qo(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=qo(s/r|0,e[s],e[s+1],n);return n&&gr(n,n.next)&&(Xr(n),n=n.next),n}function Bi(e,t){if(!e)return e;t||(t=e);let i,r=e;do if(i=!1,r.steiner||!gr(r,r.next)&&lt(r.prev,r,r.next)!==0)r=r.next;else{if(Xr(r),r=t=r.prev,r===r.next)break;i=!0}while(i||r!==t);return t}function kr(e,t,i,r,a,n,s){if(!e)return;!s&&n&&(function(l,h,u,f){let c=l;do c.z===0&&(c.z=as(c.x,c.y,h,u,f)),c.prevZ=c.prev,c.nextZ=c.next,c=c.next;while(c!==l);c.prevZ.nextZ=null,c.prevZ=null,(function(p){let g,d=1;do{let _,m=p;p=null;let v=null;for(g=0;m;){g++;let x=m,y=0;for(let E=0;E<d&&(y++,x=x.nextZ,x);E++);let b=d;for(;y>0||b>0&&x;)y!==0&&(b===0||!x||m.z<=x.z)?(_=m,m=m.nextZ,y--):(_=x,x=x.nextZ,b--),v?v.nextZ=_:p=_,_.prevZ=v,v=_;m=x}v.nextZ=null,d*=2}while(g>1)})(c)})(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?Dc(e,r,a,n):Uc(e))t.push(l.i,e.i,h.i),Xr(e),e=h.next,o=h.next;else if((e=h)===o){s?s===1?kr(e=Oc(Bi(e),t),t,i,r,a,n,2):s===2&&Fc(e,t,i,r,a,n):kr(Bi(e),t,i,r,a,n,1);break}}}function Uc(e){let t=e.prev,i=e,r=e.next;if(lt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,u=Math.min(a,n,s),f=Math.min(o,l,h),c=Math.max(a,n,s),p=Math.max(o,l,h),g=r.next;for(;g!==t;){if(g.x>=u&&g.x<=c&&g.y>=f&&g.y<=p&&Ur(a,o,n,l,s,h,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dc(e,t,i,r){let a=e.prev,n=e,s=e.next;if(lt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,u=a.y,f=n.y,c=s.y,p=Math.min(o,l,h),g=Math.min(u,f,c),d=Math.max(o,l,h),_=Math.max(u,f,c),m=as(p,g,t,i,r),v=as(d,_,t,i,r),x=e.prevZ,y=e.nextZ;for(;x&&x.z>=m&&y&&y.z<=v;){if(x.x>=p&&x.x<=d&&x.y>=g&&x.y<=_&&x!==a&&x!==s&&Ur(o,u,l,f,h,c,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=d&&y.y>=g&&y.y<=_&&y!==a&&y!==s&&Ur(o,u,l,f,h,c,y.x,y.y)&&lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=d&&x.y>=g&&x.y<=_&&x!==a&&x!==s&&Ur(o,u,l,f,h,c,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=d&&y.y>=g&&y.y<=_&&y!==a&&y!==s&&Ur(o,u,l,f,h,c,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Oc(e,t){let i=e;do{let r=i.prev,a=i.next.next;!gr(r,a)&&Ch(r,i,i.next,a)&&Wr(r,a)&&Wr(a,r)&&(t.push(r.i,i.i,a.i),Xr(i),Xr(i.next),i=e=a),i=i.next}while(i!==e);return Bi(i)}function Fc(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Hc(s,o)){let l=Rh(s,o);return s=Bi(s,s.next),l=Bi(l,l.next),kr(s,t,i,r,a,n,0),void kr(l,t,i,r,a,n,0)}o=o.next}s=s.next}while(s!==e)}function Bc(e,t){let i=e.x-t.x;return i===0&&(i=e.y-t.y,i===0)&&(i=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x)),i}function zc(e,t){let i=(function(a,n){let s=n,o=a.x,l=a.y,h,u=-1/0;if(gr(a,s))return s;do{if(gr(a,s.next))return s.next;if(l<=s.y&&l>=s.next.y&&s.next.y!==s.y){let d=s.x+(l-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(d<=o&&d>u&&(u=d,h=s.x<s.next.x?s:s.next,d===o))return h}s=s.next}while(s!==n);if(!h)return null;let f=h,c=h.x,p=h.y,g=1/0;s=h;do{if(o>=s.x&&s.x>=c&&o!==s.x&&Ah(l<p?o:u,l,c,p,l<p?u:o,l,s.x,s.y)){let d=Math.abs(l-s.y)/(o-s.x);Wr(s,a)&&(d<g||d===g&&(s.x>h.x||s.x===h.x&&Vc(h,s)))&&(h=s,g=d)}s=s.next}while(s!==f);return h})(e,t);if(!i)return t;let r=Rh(i,e);return Bi(r,r.next),Bi(i,i.next)}function Vc(e,t){return lt(e.prev,e,t.prev)<0&&lt(t.next,e,e.next)<0}function as(e,t,i,r,a){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*a|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*a|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function Gc(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Ah(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Ur(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&Ah(e,t,i,r,a,n,s,o)}function Hc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!(function(i,r){let a=i;do{if(a.i!==i.i&&a.next.i!==i.i&&a.i!==r.i&&a.next.i!==r.i&&Ch(a,a.next,i,r))return!0;a=a.next}while(a!==i);return!1})(e,t)&&(Wr(e,t)&&Wr(t,e)&&(function(i,r){let a=i,n=!1,s=(i.x+r.x)/2,o=(i.y+r.y)/2;do a.y>o!=a.next.y>o&&a.next.y!==a.y&&s<(a.next.x-a.x)*(o-a.y)/(a.next.y-a.y)+a.x&&(n=!n),a=a.next;while(a!==i);return n})(e,t)&&(lt(e.prev,e,t.prev)||lt(e,t.prev,t))||gr(e,t)&&lt(e.prev,e,e.next)>0&&lt(t.prev,t,t.next)>0)}function lt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function gr(e,t){return e.x===t.x&&e.y===t.y}function Ch(e,t,i,r){let a=Ta(lt(e,t,i)),n=Ta(lt(e,t,r)),s=Ta(lt(i,r,e)),o=Ta(lt(i,r,t));return a!==n&&s!==o||!(a!==0||!Ea(e,i,t))||!(n!==0||!Ea(e,r,t))||!(s!==0||!Ea(i,e,r))||!(o!==0||!Ea(i,t,r))}function Ea(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Ta(e){return e>0?1:e<0?-1:0}function Wr(e,t){return lt(e.prev,e,e.next)<0?lt(e,t,e.next)>=0&&lt(e,e.prev,t)>=0:lt(e,t,e.prev)<0||lt(e,e.next,t)<0}function Rh(e,t){let i=ns(e.i,e.x,e.y),r=ns(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function qo(e,t,i,r){let a=ns(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Xr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ns(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var kc=class{static triangulate(e,t,i=2){return Ic(e,t,i)}},Di=class Ph{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return .5*r}static isClockWise(t){return Ph.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Yo(t),Zo(r,t);let s=t.length;i.forEach(Yo);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Zo(r,i[l]);let o=kc.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Yo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Zo(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Wc=class Lh extends ht{constructor(t=new wh([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++)s(t[o]);function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,f=i.depth!==void 0?i.depth:1,c=i.bevelEnabled===void 0||i.bevelEnabled,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,d=i.bevelOffset!==void 0?i.bevelOffset:0,_=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,v=i.UVGenerator!==void 0?i.UVGenerator:Xc,x,y,b,E,L,D=!1;if(m){x=m.getSpacedPoints(u),D=!0,c=!1;let C=!!m.isCatmullRomCurve3&&m.closed;y=m.computeFrenetFrames(u,C),b=new A,E=new A,L=new A}c||(_=0,p=0,g=0,d=0);let P=o.extractPoints(h),z=P.shape,I=P.holes;if(!Di.isClockWise(z)){z=z.reverse();for(let C=0,O=I.length;C<O;C++){let M=I[C];Di.isClockWise(M)&&(I[C]=M.reverse())}}function X(C){let O=10000000000000001e-36,M=C[0];for(let N=1;N<=C.length;N++){let U=N%C.length,w=C[U],G=w.x-M.x,W=w.y-M.y,Z=G*G+W*W,ae=Math.max(Math.abs(w.x),Math.abs(w.y),Math.abs(M.x),Math.abs(M.y));Z<=O*ae*ae?(C.splice(U,1),N--):M=w}}X(z),I.forEach(X);let j=I.length,H=z;for(let C=0;C<j;C++){let O=I[C];z=z.concat(O)}function k(C,O,M){return O||Le("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(O,M)}let Y=z.length;function B(C,O,M){let N,U,w,G=C.x-O.x,W=C.y-O.y,Z=M.x-C.x,ae=M.y-C.y,xe=G*G+W*W,ue=G*ae-W*Z;if(Math.abs(ue)>Number.EPSILON){let me=Math.sqrt(xe),ie=Math.sqrt(Z*Z+ae*ae),Ne=O.x-W/me,Q=O.y+G/me,K=((M.x-ae/ie-Ne)*ae-(M.y+Z/ie-Q)*Z)/(G*ae-W*Z);N=Ne+G*K-C.x,U=Q+W*K-C.y;let re=N*N+U*U;if(re<=2)return new ne(N,U);w=Math.sqrt(re/2)}else{let me=!1;G>Number.EPSILON?Z>Number.EPSILON&&(me=!0):G<-Number.EPSILON?Z<-Number.EPSILON&&(me=!0):Math.sign(W)===Math.sign(ae)&&(me=!0),me?(N=-W,U=G,w=Math.sqrt(xe)):(N=G,U=W,w=Math.sqrt(xe/2))}return new ne(N/w,U/w)}let oe=[];for(let C=0,O=H.length,M=O-1,N=C+1;C<O;C++,M++,N++)M===O&&(M=0),N===O&&(N=0),oe[C]=B(H[C],H[M],H[N]);let fe=[],Ee,Me,$=oe.concat();for(let C=0,O=j;C<O;C++){let M=I[C];Ee=[];for(let N=0,U=M.length,w=U-1,G=N+1;N<U;N++,w++,G++)w===U&&(w=0),G===U&&(G=0),Ee[N]=B(M[N],M[w],M[G]);fe.push(Ee),$=$.concat(Ee)}if(_===0)Me=Di.triangulateShape(H,I);else{let C=[],O=[];for(let M=0;M<_;M++){let N=M/_,U=p*Math.cos(N*Math.PI/2),w=g*Math.sin(N*Math.PI/2)+d;for(let G=0,W=H.length;G<W;G++){let Z=k(H[G],oe[G],w);ye(Z.x,Z.y,-U),N===0&&C.push(Z)}for(let G=0,W=j;G<W;G++){let Z=I[G];Ee=fe[G];let ae=[];for(let xe=0,ue=Z.length;xe<ue;xe++){let me=k(Z[xe],Ee[xe],w);ye(me.x,me.y,-U),N===0&&ae.push(me)}N===0&&O.push(ae)}}Me=Di.triangulateShape(C,O)}let se=Me.length,Te=g+d;for(let C=0;C<Y;C++){let O=c?k(z[C],$[C],Te):z[C];D?(E.copy(y.normals[0]).multiplyScalar(O.x),b.copy(y.binormals[0]).multiplyScalar(O.y),L.copy(x[0]).add(E).add(b),ye(L.x,L.y,L.z)):ye(O.x,O.y,0)}for(let C=1;C<=u;C++)for(let O=0;O<Y;O++){let M=c?k(z[O],$[O],Te):z[O];D?(E.copy(y.normals[C]).multiplyScalar(M.x),b.copy(y.binormals[C]).multiplyScalar(M.y),L.copy(x[C]).add(E).add(b),ye(L.x,L.y,L.z)):ye(M.x,M.y,f/u*C)}for(let C=_-1;C>=0;C--){let O=C/_,M=p*Math.cos(O*Math.PI/2),N=g*Math.sin(O*Math.PI/2)+d;for(let U=0,w=H.length;U<w;U++){let G=k(H[U],oe[U],N);ye(G.x,G.y,f+M)}for(let U=0,w=I.length;U<w;U++){let G=I[U];Ee=fe[U];for(let W=0,Z=G.length;W<Z;W++){let ae=k(G[W],Ee[W],N);D?ye(ae.x,ae.y+x[u-1].y,x[u-1].x+M):ye(ae.x,ae.y,f+M)}}}function le(C,O){let M=C.length;for(;--M>=0;){let N=M,U=M-1;U<0&&(U=C.length-1);for(let w=0,G=u+2*_;w<G;w++){let W=Y*w,Z=Y*(w+1);Ae(O+N+W,O+U+W,O+U+Z,O+N+Z)}}}function ye(C,O,M){l.push(C),l.push(O),l.push(M)}function ee(C,O,M){R(C),R(O),R(M);let N=a.length/3,U=v.generateTopUV(r,a,N-3,N-2,N-1);S(U[0]),S(U[1]),S(U[2])}function Ae(C,O,M,N){R(C),R(O),R(N),R(O),R(M),R(N);let U=a.length/3,w=v.generateSideWallUV(r,a,U-6,U-3,U-2,U-1);S(w[0]),S(w[1]),S(w[3]),S(w[1]),S(w[2]),S(w[3])}function R(C){a.push(l[3*C+0]),a.push(l[3*C+1]),a.push(l[3*C+2])}function S(C){n.push(C.x),n.push(C.y)}(function(){let C=a.length/3;if(c){let O=0,M=Y*O;for(let N=0;N<se;N++){let U=Me[N];ee(U[2]+M,U[1]+M,U[0]+M)}O=u+2*_,M=Y*O;for(let N=0;N<se;N++){let U=Me[N];ee(U[0]+M,U[1]+M,U[2]+M)}}else{for(let O=0;O<se;O++){let M=Me[O];ee(M[2],M[1],M[0])}for(let O=0;O<se;O++){let M=Me[O];ee(M[0]+Y*u,M[1]+Y*u,M[2]+Y*u)}}r.addGroup(C,a.length/3-C,0)})(),(function(){let C=a.length/3,O=0;le(H,O),O+=H.length;for(let M=0,N=I.length;M<N;M++){let U=I[M];le(U,O),O+=U.length}r.addGroup(C,a.length/3-C,1)})()}this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(n,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return(function(i,r,a){if(a.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let o=i[n];a.shapes.push(o.uuid)}else a.shapes.push(i.uuid);return a.options=Object.assign({},r),r.extrudePath!==void 0&&(a.options.extrudePath=r.extrudePath.toJSON()),a})(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Ga[a.type]().fromJSON(a)),new Lh(r,t.options)}},Xc={generateTopUV:function(e,t,i,r,a){let n=t[3*i],s=t[3*i+1],o=t[3*r],l=t[3*r+1],h=t[3*a],u=t[3*a+1];return[new ne(n,s),new ne(o,l),new ne(h,u)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[3*i],o=t[3*i+1],l=t[3*i+2],h=t[3*r],u=t[3*r+1],f=t[3*r+2],c=t[3*a],p=t[3*a+1],g=t[3*a+2],d=t[3*n],_=t[3*n+1],m=t[3*n+2];return Math.abs(o-u)<Math.abs(s-h)?[new ne(s,1-l),new ne(h,1-f),new ne(c,1-g),new ne(d,1-m)]:[new ne(o,1-l),new ne(u,1-f),new ne(p,1-g),new ne(_,1-m)]}},jc=class Nh extends qr{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2;super([-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Nh(t.radius,t.detail)}},qc=class Ih extends ht{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],i=12,r=0,a=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Ge(a,0,2*Math.PI);let n=[],s=[],o=[],l=[],h=[],u=1/i,f=new A,c=new ne,p=new A,g=new A,d=new A,_=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:_=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=1*m,p.y=-_,p.z=0*m,d.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(d.x,d.y,d.z);break;default:_=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=1*m,p.y=-_,p.z=0*m,g.copy(p),p.x+=d.x,p.y+=d.y,p.z+=d.z,p.normalize(),l.push(p.x,p.y,p.z),d.copy(g)}for(let v=0;v<=i;v++){let x=r+v*u*a,y=Math.sin(x),b=Math.cos(x);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*y,f.y=t[E].y,f.z=t[E].x*b,s.push(f.x,f.y,f.z),c.x=v/i,c.y=E/(t.length-1),o.push(c.x,c.y);let L=l[3*E+0]*y,D=l[3*E+1],P=l[3*E+0]*b;h.push(L,D,P)}}for(let v=0;v<i;v++)for(let x=0;x<t.length-1;x++){let y=x+v*t.length,b=y,E=y+t.length,L=y+t.length+1,D=y+1;n.push(b,E,D),n.push(L,D,E)}this.setIndex(n),this.setAttribute("position",new De(s,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.points,t.segments,t.phiStart,t.phiLength)}},Yc=class Uh extends qr{constructor(t=1,i=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Uh(t.radius,t.detail)}},vs=class Dh extends ht{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,f=t/o,c=i/l,p=[],g=[],d=[],_=[];for(let m=0;m<u;m++){let v=m*c-s;for(let x=0;x<h;x++){let y=x*f-n;g.push(y,-v,0),d.push(0,0,1),_.push(x/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let x=v+h*m,y=v+h*(m+1),b=v+1+h*(m+1),E=v+1+h*m;p.push(x,y,E),p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dh(t.width,t.height,t.widthSegments,t.heightSegments)}},Zc=class Oh extends ht{constructor(t=.5,i=1,r=32,a=1,n=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r);let o=[],l=[],h=[],u=[],f=t,c=(i-t)/(a=Math.max(1,a)),p=new A,g=new ne;for(let d=0;d<=a;d++){for(let _=0;_<=r;_++){let m=n+_/r*s;p.x=f*Math.cos(m),p.y=f*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,u.push(g.x,g.y)}f+=c}for(let d=0;d<a;d++){let _=d*(r+1);for(let m=0;m<r;m++){let v=m+_,x=v,y=v+r+1,b=v+r+2,E=v+1;o.push(x,y,E),o.push(y,b,E)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Kc=class Fh extends ht{constructor(t=new wh([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;function h(u){let f=a.length/3,c=u.extractPoints(i),p=c.shape,g=c.holes;Di.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,m=g.length;_<m;_++){let v=g[_];Di.isClockWise(v)===!0&&(g[_]=v.reverse())}let d=Di.triangulateShape(p,g);for(let _=0,m=g.length;_<m;_++){let v=g[_];p=p.concat(v)}for(let _=0,m=p.length;_<m;_++){let v=p[_];a.push(v.x,v.y,0),n.push(0,0,1),s.push(v.x,v.y)}for(let _=0,m=d.length;_<m;_++){let v=d[_],x=v[0]+f,y=v[1]+f,b=v[2]+f;r.push(x,y,b),l+=3}}this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(n,3)),this.setAttribute("uv",new De(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return(function(i,r){if(r.shapes=[],Array.isArray(i))for(let a=0,n=i.length;a<n;a++){let s=i[a];r.shapes.push(s.uuid)}else r.shapes.push(i.uuid);return r})(this.parameters.shapes,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Fh(r,t.curveSegments)}},Jc=class Bh extends ht{constructor(t=1,i=32,r=16,a=0,n=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],f=new A,c=new A,p=[],g=[],d=[],_=[];for(let m=0;m<=r;m++){let v=[],x=m/r,y=s+x*o,b=t*Math.cos(y),E=Math.sqrt(t*t-b*b),L=0;m===0&&s===0?L=.5/i:m===r&&l===Math.PI&&(L=-.5/i);for(let D=0;D<=i;D++){let P=D/i,z=a+P*n;f.x=-E*Math.cos(z),f.y=b,f.z=E*Math.sin(z),g.push(f.x,f.y,f.z),c.copy(f).normalize(),d.push(c.x,c.y,c.z),_.push(P+L,1-x),v.push(h++)}u.push(v)}for(let m=0;m<r;m++)for(let v=0;v<i;v++){let x=u[m][v+1],y=u[m][v],b=u[m+1][v],E=u[m+1][v+1];(m!==0||s>0)&&p.push(x,y,E),(m!==r-1||l<Math.PI)&&p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},$c=class zh extends qr{constructor(t=1,i=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new zh(t.radius,t.detail)}},Qc=class Vh extends ht{constructor(t=1,i=.4,r=12,a=48,n=2*Math.PI,s=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],f=[],c=new A,p=new A,g=new A;for(let d=0;d<=r;d++){let _=s+d/r*o;for(let m=0;m<=a;m++){let v=m/a*n;p.x=(t+i*Math.cos(_))*Math.cos(v),p.y=(t+i*Math.cos(_))*Math.sin(v),p.z=i*Math.sin(_),h.push(p.x,p.y,p.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),g.subVectors(p,c).normalize(),u.push(g.x,g.y,g.z),f.push(m/a),f.push(d/r)}}for(let d=1;d<=r;d++)for(let _=1;_<=a;_++){let m=(a+1)*d+_-1,v=(a+1)*(d-1)+_-1,x=(a+1)*(d-1)+_,y=(a+1)*d+_;l.push(m,v,y),l.push(v,x,y)}this.setIndex(l),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ed=class Gh extends ht{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],f=new A,c=new A,p=new A,g=new A,d=new A,_=new A,m=new A;for(let x=0;x<=r;++x){let y=x/r*n*Math.PI*2;v(y,n,s,t,p),v(y+.01,n,s,t,g),_.subVectors(g,p),m.addVectors(g,p),d.crossVectors(_,m),m.crossVectors(d,_),d.normalize(),m.normalize();for(let b=0;b<=a;++b){let E=b/a*Math.PI*2,L=-i*Math.cos(E),D=i*Math.sin(E);f.x=p.x+(L*m.x+D*d.x),f.y=p.y+(L*m.y+D*d.y),f.z=p.z+(L*m.z+D*d.z),l.push(f.x,f.y,f.z),c.subVectors(f,p).normalize(),h.push(c.x,c.y,c.z),u.push(x/r),u.push(b/a)}}for(let x=1;x<=r;x++)for(let y=1;y<=a;y++){let b=(a+1)*(x-1)+(y-1),E=(a+1)*x+(y-1),L=(a+1)*x+y,D=(a+1)*(x-1)+y;o.push(b,E,D),o.push(E,L,D)}function v(x,y,b,E,L){let D=Math.cos(x),P=Math.sin(x),z=b/y*x,I=Math.cos(z);L.x=E*(2+I)*.5*D,L.y=E*(2+I)*P*.5,L.z=E*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},td=class Hh extends ht{constructor(t=new Th(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new A,l=new A,h=new ne,u=new A,f=[],c=[],p=[],g=[];function d(_){u=t.getPointAt(_/i,u);let m=s.normals[_],v=s.binormals[_];for(let x=0;x<=a;x++){let y=x/a*Math.PI*2,b=Math.sin(y),E=-Math.cos(y);l.x=E*m.x+b*v.x,l.y=E*m.y+b*v.y,l.z=E*m.z+b*v.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,f.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<i;_++)d(_);d(n===!1?i:0),(function(){for(let _=0;_<=i;_++)for(let m=0;m<=a;m++)h.x=_/i,h.y=m/a,p.push(h.x,h.y)})(),(function(){for(let _=1;_<=i;_++)for(let m=1;m<=a;m++){let v=(a+1)*(_-1)+(m-1),x=(a+1)*_+(m-1),y=(a+1)*_+m,b=(a+1)*(_-1)+m;g.push(v,x,b),g.push(x,y,b)}})()})(),this.setIndex(g),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Hh(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},id=class extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new A,a=new A;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],f=u.start;for(let c=f,p=f+u.count;c<p;c+=3)for(let g=0;g<3;g++){let d=s.getX(c+g),_=s.getX(c+(g+1)%3);r.fromBufferAttribute(n,d),a.fromBufferAttribute(n,_),Ko(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,u=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,u),Ko(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ko(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)!==!0&&i.has(a)!==!0&&(i.add(r),i.add(a),!0)}var Rm=Object.freeze({__proto__:null,BoxGeometry:ja,CapsuleGeometry:Ec,CircleGeometry:Tc,ConeGeometry:bc,CylinderGeometry:gh,DodecahedronGeometry:wc,EdgesGeometry:Ac,ExtrudeGeometry:Wc,IcosahedronGeometry:jc,LatheGeometry:qc,OctahedronGeometry:Yc,PlaneGeometry:vs,PolyhedronGeometry:qr,RingGeometry:Zc,ShapeGeometry:Kc,SphereGeometry:Jc,TetrahedronGeometry:$c,TorusGeometry:Qc,TorusKnotGeometry:ed,TubeGeometry:td,WireframeGeometry:id});function vr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Jo(a))a.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Jo(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Et(e){let t={};for(let i=0;i<e.length;i++){let r=vr(e[i]);for(let a in r)t[a]=r[a]}return t}function Jo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function kh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}var rd={clone:vr,merge:Et},Xt=class extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new at().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new He().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ad=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nd=class extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sd=class extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(e,t){return e&&e.constructor!==t?typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e):e}var Yr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},od=class extends Yr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vo,endingEnd:vo}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case _o:a=e,s=2*t-i;break;case xo:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case _o:n=e,o=2*i-t;break;case xo:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,c=this._weightNext,p=(i-t)/(r-t),g=p*p,d=g*p,_=-f*d+2*f*g-f*p,m=(1+f)*d+(-1.5-2*f)*g+(-.5+f)*p+1,v=(-1-c)*d+(1.5+c)*g+.5*p,x=c*d-c*g;for(let y=0;y!==s;++y)a[y]=_*n[h+y]+m*n[l+y]+v*n[o+y]+x*n[u+y];return a}},ld=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==s;++f)a[f]=n[l+f]*u+n[o+f]*h;return a}},hd=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ud=class extends Yr{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(r-t),g=1-p;for(let d=0;d!==s;++d)a[d]=n[l+d]*g+n[o+d]*p;return a}let f=2*s,c=e-1;for(let p=0;p!==s;++p){let g=n[l+p],d=n[o+p],_=c*f+2*p,m=u[_],v=u[_+1],x=e*f+2*p,y=h[x],b=h[x+1],E,L,D,P,z,I=(i-t)/(r-t);for(let X=0;X<8;X++){E=I*I,L=E*I,D=1-I,P=D*D,z=P*D;let j=z*t+3*P*I*m+3*D*E*y+L*r-i;if(Math.abs(j)<1e-10)break;let H=3*P*(m-t)+6*D*I*(y-m)+3*E*(r-y);if(Math.abs(H)<1e-10)break;I-=j/H,I=Math.max(0,Math.min(1,I))}a[p]=z*g+3*P*I*v+3*D*E*b+L*d}return a}},ei=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ud(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case cn:t=this.InterpolantFactoryMethodSmooth;break;case go:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return cn;case this.InterpolantFactoryMethodBezier:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Le("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Wu(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===cn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s];if(l!==e[s+1]&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,u=h-i,f=h+i;for(let c=0;c!==i;++c){let p=t[h+c];if(p!==t[u+c]||p!==t[f+c]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,u=n*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.ValueTypeName="",ei.prototype.TimeBufferType=Float32Array,ei.prototype.ValueBufferType=Float32Array,ei.prototype.DefaultInterpolation=es;var Ar=class extends ei{constructor(e,t,i){super(e,t,i)}};Ar.prototype.ValueTypeName="bool",Ar.prototype.ValueBufferType=Array,Ar.prototype.DefaultInterpolation=Oa,Ar.prototype.InterpolantFactoryMethodLinear=void 0,Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var cd=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}};cd.prototype.ValueTypeName="color";var dd=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}};dd.prototype.ValueTypeName="number";var pd=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)mi.slerpFlat(a,0,n,l-s,n,l,o);return a}},$o=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new pd(this.times,this.values,this.getValueSize(),e)}};$o.prototype.ValueTypeName="quaternion",$o.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends ei{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="string",Cr.prototype.ValueBufferType=Array,Cr.prototype.DefaultInterpolation=Oa,Cr.prototype.InterpolantFactoryMethodLinear=void 0,Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var fd=class extends ei{constructor(e,t,i,r){super(e,t,i,r)}};fd.prototype.ValueTypeName="vector";var md=class{constructor(e,t,i){let r=this,a,n=!1,s=0,o=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,o),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let c=l[u],p=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gd=new md,vd=class{constructor(e){this.manager=e!==void 0?e:gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pm=new He,Lm=new A,Nm=new A,wa=new A,Aa=new mi,Zt=new A,_s=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Aa,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wa,Aa,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new A,Qo=new ne,el=new ne,Vt=class extends _s{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ts*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Na*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ts*Math.atan(Math.tan(.5*Na*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Qo,el),t.subVectors(el,Qo)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Na*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ha=class extends _s{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Im=new He,Um=new He,Dm=new He,tr=-90,_d=class extends ri{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(tr,1,e,t);r.layers=this.layers,this.add(r);let a=new Vt(tr,1,e,t);a.layers=this.layers,this.add(a);let n=new Vt(tr,1,e,t);n.layers=this.layers,this.add(n);let s=new Vt(tr,1,e,t);s.layers=this.layers,this.add(s);let o=new Vt(tr,1,e,t);o.layers=this.layers,this.add(o);let l=new Vt(tr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(e!==za)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;d=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},xd=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Om=new A,Fm=new mi,Bm=new A,zm=new A,Vm=new A,Gm=new A,Hm=new mi,km=new A,Wm=new A,xs="\\[\\]\\.:\\/",Md=new RegExp("["+xs+"]","g"),zn="[^"+xs+"]",yd="[^"+xs.replace("\\.","")+"]",Sd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",zn)+/(WCOD+)?/.source.replace("WCOD",yd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zn)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zn)+"$"),Ed=["material","materials","bones","map"],ut=class or{constructor(t,i,r){this.path=i,this.parsedPath=r||or.parseTrackName(i),this.node=or.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new or.Composite(t,i,r):new or(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Md,"")}static parseTrackName(t){let i=Sd.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Ed.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=or.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void Re("PropertyBinding: No target node found for track: "+this.path+".");if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material)return void Le("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void Le("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[r]===void 0)return void Le("PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[r]}if(h!==void 0){if(t[h]===void 0)return void Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[h]}}let s=t[a];if(s===void 0)return void Le("PropertyBinding: Trying to update property for track: "+i.nodeName+"."+a+" but it wasn't found.",t);let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry)return void Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=class{constructor(e,t,i){let r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xm=new Float32Array(1),jm=new He,qm=class Wh{static{Wh.prototype.isMatrix2=!0}constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Ym=new ne,Zm=new A,Km=new A,Jm=new A,$m=new A,Qm=new A,eg=new A,tg=new A,ig=new A,rg=new A,ag=new He,ng=new He,sg=new A,og=new je,lg=new je,hg=new A,ug=new A,cg=new A,dg=new A,pg=new _s,fg=new bi,mg=new A;function tl(e,t,i,r){let a=(function(n){switch(n){case Gt:case Wl:return{byteLength:1,components:1};case zr:case Xl:case fi:return{byteLength:2,components:1};case hs:case us:return{byteLength:2,components:4};case Ei:case ls:case $t:return{byteLength:4,components:1};case jl:case ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)})(r);switch(i){case 1021:return e*t;case Yl:case cs:return e*t/a.components*a.byteLength;case 1030:case 1031:return e*t*2/a.components*a.byteLength;case 1022:return e*t*3/a.components*a.byteLength;case Qt:case 1033:return e*t*4/a.components*a.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Xh(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Td(e){let t=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),t.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let r=t.get(i);r&&(e.deleteBuffer(r.buffer),t.delete(i))},update:function(i,r){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){let n=t.get(i);return void((!n||n.version<i.version)&&t.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}let a=t.get(i);if(a===void 0)t.set(i,(function(n,s){let o=n.array,l=n.usage,h=o.byteLength,u=e.createBuffer(),f;if(e.bindBuffer(s,u),e.bufferData(s,o,l),n.onUploadCallback(),o instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=e.HALF_FLOAT;else if(o instanceof Uint16Array)f=n.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=e.SHORT;else if(o instanceof Uint32Array)f=e.UNSIGNED_INT;else if(o instanceof Int32Array)f=e.INT;else if(o instanceof Int8Array)f=e.BYTE;else if(o instanceof Uint8Array)f=e.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);f=e.UNSIGNED_BYTE}return{buffer:u,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:n.version,size:h}})(i,r));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(n,s,o){let l=s.array,h=s.updateRanges;if(e.bindBuffer(o,n),h.length===0)e.bufferSubData(o,0,l);else{h.sort((f,c)=>f.start-c.start);let u=0;for(let f=1;f<h.length;f++){let c=h[u],p=h[f];p.start<=c.start+c.count+1?c.count=Math.max(c.count,p.start+p.count-c.start):(++u,h[u]=p)}h.length=u+1;for(let f=0,c=h.length;f<c;f++){let p=h[f];e.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(a.buffer,i,r),a.version=i.version}}}}var Ve={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Jt={basic:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Et([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Et([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Et([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Et([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Et([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Et([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Et([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Et([ce.lights,ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Jt.physical={uniforms:Et([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ca={r:0,b:0,g:0},bd=new He,jh=new ze;function wd(e,t,i,r,a,n){let s=new je(0),o,l,h=a===!0?0:1,u=null,f=0,c=null;function p(d){let _=d.isScene===!0?d.background:null;if(_&&_.isTexture){let m=d.backgroundBlurriness>0;_=t.get(_,m)}return _}function g(d,_){d.getRGB(Ca,kh(e)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,_,n)}return{getClearColor:function(){return s},setClearColor:function(d,_=1){s.set(d),h=_,g(s,h)},getClearAlpha:function(){return h},setClearAlpha:function(d){h=d,g(s,h)},render:function(d){let _=!1,m=p(d);m===null?g(s,h):m&&m.isColor&&(g(m,1),_=!0);let v=e.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,n):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))},addToRenderList:function(d,_){let m=p(_);m&&(m.isCubeTexture||m.mapping===Wa)?(l===void 0&&(l=new Wt(new ja(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:vr(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,x,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bd.makeRotationFromEuler(_.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jh),l.material.toneMapped=Ye.getTransfer(m.colorSpace)!==et,u===m&&f===m.version&&c===e.toneMapping||(l.material.needsUpdate=!0,u=m,f=m.version,c=e.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(o===void 0&&(o=new Wt(new vs(2,2),new Xt({name:"BackgroundMaterial",uniforms:vr(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=m,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=Ye.getTransfer(m.colorSpace)!==et,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),u===m&&f===m.version&&c===e.toneMapping||(o.material.needsUpdate=!0,u=m,f=m.version,c=e.toneMapping),o.layers.enableAll(),d.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Ad(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=h(null),n=a,s=!1;function o(m){return e.bindVertexArray(m)}function l(m){return e.deleteVertexArray(m)}function h(m){let v=[],x=[],y=[];for(let b=0;b<i;b++)v[b]=0,x[b]=0,y[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:y,object:m,attributes:{},index:null}}function u(){let m=n.newAttributes;for(let v=0,x=m.length;v<x;v++)m[v]=0}function f(m){c(m,0)}function c(m,v){let x=n.newAttributes,y=n.enabledAttributes,b=n.attributeDivisors;x[m]=1,y[m]===0&&(e.enableVertexAttribArray(m),y[m]=1),b[m]!==v&&(e.vertexAttribDivisor(m,v),b[m]=v)}function p(){let m=n.newAttributes,v=n.enabledAttributes;for(let x=0,y=v.length;x<y;x++)v[x]!==m[x]&&(e.disableVertexAttribArray(x),v[x]=0)}function g(m,v,x,y,b,E,L){L===!0?e.vertexAttribIPointer(m,v,x,b,E):e.vertexAttribPointer(m,v,x,y,b,E)}function d(){_(),s=!0,n!==a&&(n=a,o(n.object))}function _(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:function(m,v,x,y,b){let E=!1,L=(function(D,P,z,I){let X=I.wireframe===!0,j=r[P.id];j===void 0&&(j={},r[P.id]=j);let H=D.isInstancedMesh===!0?D.id:0,k=j[H];k===void 0&&(k={},j[H]=k);let Y=k[z.id];Y===void 0&&(Y={},k[z.id]=Y);let B=Y[X];return B===void 0&&(B=h(e.createVertexArray()),Y[X]=B),B})(m,y,x,v);n!==L&&(n=L,o(n.object)),E=(function(D,P,z,I){let X=n.attributes,j=P.attributes,H=0,k=z.getAttributes();for(let Y in k)if(k[Y].location>=0){let B=X[Y],oe=j[Y];if(oe===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),B===void 0||B.attribute!==oe||oe&&B.data!==oe.data)return!0;H++}return n.attributesNum!==H||n.index!==I})(m,y,x,b),E&&(function(D,P,z,I){let X={},j=P.attributes,H=0,k=z.getAttributes();for(let Y in k)if(k[Y].location>=0){let B=j[Y];B===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));let oe={};oe.attribute=B,B&&B.data&&(oe.data=B.data),X[Y]=oe,H++}n.attributes=X,n.attributesNum=H,n.index=I})(m,y,x,b),b!==null&&t.update(b,e.ELEMENT_ARRAY_BUFFER),(E||s)&&(s=!1,(function(D,P,z,I){u();let X=I.attributes,j=z.getAttributes(),H=P.defaultAttributeValues;for(let k in j){let Y=j[k];if(Y.location>=0){let B=X[k];if(B===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),B!==void 0){let oe=B.normalized,fe=B.itemSize,Ee=t.get(B);if(Ee===void 0)continue;let Me=Ee.buffer,$=Ee.type,se=Ee.bytesPerElement,Te=$===e.INT||$===e.UNSIGNED_INT||B.gpuType===ls;if(B.isInterleavedBufferAttribute){let le=B.data,ye=le.stride,ee=B.offset;if(le.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Y.locationSize;Ae++)c(Y.location+Ae,le.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)f(Y.location+Ae);e.bindBuffer(e.ARRAY_BUFFER,Me);for(let Ae=0;Ae<Y.locationSize;Ae++)g(Y.location+Ae,fe/Y.locationSize,$,oe,ye*se,(ee+fe/Y.locationSize*Ae)*se,Te)}else{if(B.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)c(Y.location+le,B.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let le=0;le<Y.locationSize;le++)f(Y.location+le);e.bindBuffer(e.ARRAY_BUFFER,Me);for(let le=0;le<Y.locationSize;le++)g(Y.location+le,fe/Y.locationSize,$,oe,fe*se,fe/Y.locationSize*le*se,Te)}}else if(H!==void 0){let oe=H[k];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(Y.location,oe);break;case 3:e.vertexAttrib3fv(Y.location,oe);break;case 4:e.vertexAttrib4fv(Y.location,oe);break;default:e.vertexAttrib1fv(Y.location,oe)}}}}p()})(m,v,x,y),b!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(b).buffer))},reset:d,resetDefaultState:_,dispose:function(){d();for(let m in r){let v=r[m];for(let x in v){let y=v[x];for(let b in y){let E=y[b];for(let L in E)l(E[L].object),delete E[L];delete y[b]}}delete r[m]}},releaseStatesOfGeometry:function(m){if(r[m.id]===void 0)return;let v=r[m.id];for(let x in v){let y=v[x];for(let b in y){let E=y[b];for(let L in E)l(E[L].object),delete E[L];delete y[b]}}delete r[m.id]},releaseStatesOfObject:function(m){for(let v in r){let x=r[v],y=m.isInstancedMesh===!0?m.id:0,b=x[y];if(b!==void 0){for(let E in b){let L=b[E];for(let D in L)l(L[D].object),delete L[D];delete b[E]}delete x[y],Object.keys(x).length===0&&delete r[v]}}},releaseStatesOfProgram:function(m){for(let v in r){let x=r[v];for(let y in x){let b=x[y];if(b[m.id]===void 0)continue;let E=b[m.id];for(let L in E)l(E[L].object),delete E[L];delete b[m.id]}}},initAttributes:u,enableAttribute:f,disableUnusedAttributes:p}}function Cd(e,t,i){let r;this.setMode=function(a){r=a},this.render=function(a,n){e.drawArrays(r,a,n),i.update(n,r,1)},this.renderInstances=function(a,n,s){s!==0&&(e.drawArraysInstanced(r,a,n,s),i.update(n,r,s))},this.renderMultiDraw=function(a,n,s){if(s===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,a,0,n,0,s);let o=0;for(let l=0;l<s;l++)o+=n[l];i.update(o,r,1)}}function Rd(e,t,i,r){let a;function n(u){if(u==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=i.precision!==void 0?i.precision:"highp",o=n(s);o!==s&&(Re("WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");return i.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let u=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a},getMaxPrecision:n,textureFormatReadable:function(u){return u===Qt||r.convert(u)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let f=u===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(u!==Gt&&r.convert(u)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==$t&&!f)},precision:s,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),maxCubemapSize:e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:e.getParameter(e.MAX_VERTEX_ATTRIBS),maxVertexUniforms:e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:e.getParameter(e.MAX_VARYING_VECTORS),maxFragmentUniforms:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:e.getParameter(e.MAX_SAMPLES),samples:e.getParameter(e.SAMPLES)}}function Pd(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Ui,o=new ze,l={value:null,needsUpdate:!1};function h(u,f,c,p){let g=u!==null?u.length:0,d=null;if(g!==0){if(d=l.value,p!==!0||d===null){let _=c+4*g,m=f.matrixWorldInverse;o.getNormalMatrix(m),(d===null||d.length<_)&&(d=new Float32Array(_));for(let v=0,x=c;v!==g;++v,x+=4)s.copy(u[v]).applyMatrix4(m,o),s.normal.toArray(d,x),d[x+3]=s.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let c=u.length!==0||f||r!==0||a;return a=f,r=u.length,c},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,f){i=h(u,f,0)},this.setState=function(u,f,c){let p=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,_=e.get(u);if(!a||p===null||p.length===0||n&&!d)n?h(null):(function(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0})();else{let m=n?0:r,v=4*m,x=_.clippingState||null;l.value=x,x=h(p,f,v,c);for(let y=0;y!==v;++y)x[y]=i[y];_.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}}}jh.set(-1,0,0,0,1,0,0,0,1);var il=[.125,.215,.35,.446,.526,.582],Rr=20,Pr=new Ha,rl=new je,Vn=null,Gn=0,Hn=0,kn=!1,Ld=new A,al=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Ld}=a;Vn=this._renderer.getRenderTarget(),Gn=this._renderer.getActiveCubeFace(),Hn=this._renderer.getActiveMipmapLevel(),kn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vn,Gn,Hn),this._renderer.xr.enabled=kn,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vn=this._renderer.getRenderTarget(),Gn=this._renderer.getActiveCubeFace(),Hn=this._renderer.getActiveMipmapLevel(),kn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:fi,format:Qt,colorSpace:Fa,depthBuffer:!1},r=nl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(n){let s=[],o=[],l=[],h=n,u=n-4+1+il.length;for(let f=0;f<u;f++){let c=Math.pow(2,h);s.push(c);let p=1/c;f>n-4?p=il[f-n+4-1]:f===0&&(p=0),o.push(p);let g=1/(c-2),d=-g,_=1+g,m=[d,d,_,d,_,_,d,d,_,_,d,_],v=6,x=6,y=3,b=2,E=1,L=new Float32Array(y*x*v),D=new Float32Array(b*x*v),P=new Float32Array(E*x*v);for(let I=0;I<v;I++){let X=I%3*2/3-1,j=I>2?0:-1,H=[X,j,0,X+2/3,j,0,X+2/3,j+1,0,X,j,0,X+2/3,j+1,0,X,j+1,0];L.set(H,y*x*I),D.set(m,b*x*I);let k=[I,I,I,I,I,I];P.set(k,E*x*I)}let z=new ht;z.setAttribute("position",new Pt(L,y)),z.setAttribute("uv",new Pt(D,b)),z.setAttribute("faceIndex",new Pt(P,E)),l.push(new Wt(z,null)),h>4&&h--}return{lodMeshes:l,sizeLods:s,sigmas:o}})(a)),this._blurMaterial=(function(n,s,o){let l=new Float32Array(Rr),h=new A(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/s,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ka(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})})(a,e,t),this._ggxMaterial=(function(n,s,o){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/s,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ka(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})})(a,e,t)}return r}_compileMaterial(e){let t=new Wt(new ht,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,r,a){let n=new Vt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(rl),l.toneMapping=ti,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new ja,new hh({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,c=f.material,p=!1,g=e.background;g?g.isColor&&(c.color.copy(g),e.background=null,p=!0):(c.color.copy(rl),p=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(n.up.set(0,s[d],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[d],a.y,a.z)):_===1?(n.up.set(0,0,s[d]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[d],a.z)):(n.up.set(0,s[d],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[d]));let m=this._cubeSize;ir(r,_*m,d>2?m:0,m,m),l.setRenderTarget(r),p&&l.render(f,n),l.render(e,n)}l.toneMapping=u,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Br||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a,a.uniforms.envMap.value=e;let s=this._cubeSize;ir(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(n,Pr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:f}=this,c=this._sizeLods[i],p=3*c*(i>f-4?i-f+4:0),g=4*(this._cubeSize-c);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=f-t,ir(a,p,g,3*c,2*c),r.setRenderTarget(a),r.render(s,Pr),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,ir(e,p,g,3*c,2*c),r.setRenderTarget(e),r.render(s,Pr)}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let u=l.uniforms,f=this._sizeLods[i]-1,c=isFinite(a)?Math.PI/(2*f):2*Math.PI/39,p=a/c,g=isFinite(a)?1+Math.floor(3*p):Rr;g>Rr&&Re(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let d=[],_=0;for(let x=0;x<Rr;++x){let y=x/p,b=Math.exp(-y*y/2);d.push(b),x===0?_+=b:x<g&&(_+=2*b)}for(let x=0;x<d.length;x++)d[x]=d[x]/_;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:m}=this;u.dTheta.value=c,u.mipInt.value=m-i;let v=this._sizeLods[r];ir(t,3*v*(r>m-4?r-m+4:0),4*(this._cubeSize-v),3*v,2*v),o.setRenderTarget(t),o.render(h,Pr)}};function nl(e,t,i){let r=new ii(e,t,i);return r.texture.mapping=Wa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ir(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function sl(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ol(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}var qh=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ch(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ja(5,5,5),a=new Xt({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:di});a.uniforms.tEquirect.value=t;let n=new Wt(r,a),s=t.minFilter;return t.minFilter===lr&&(t.minFilter=Tt),new _d(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function Nd(e){let t=new WeakMap,i=new WeakMap,r=null;function a(o,l){return l===an?o.mapping=Br:l===nn&&(o.mapping=dr),o}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(o){let l=o.target;l.removeEventListener("dispose",s);let h=i.get(l);h!==void 0&&(i.delete(l),h.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(h){if(h&&h.isTexture){let u=h.mapping,f=u===an||u===nn,c=u===Br||u===dr;if(f||c){let p=i.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return r===null&&(r=new al(e)),p=f?r.fromEquirectangular(h,p):r.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),p.texture;if(p!==void 0)return p.texture;{let d=h.image;return f&&d&&d.height>0||c&&d&&(function(_){let m=0,v=6;for(let x=0;x<v;x++)_[x]!==void 0&&m++;return m===v})(d)?(r===null&&(r=new al(e)),p=f?r.fromEquirectangular(h):r.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,i.set(h,p),h.addEventListener("dispose",s),p.texture):null}}}return h})(o):(function(h){if(h&&h.isTexture){let u=h.mapping;if(u===an||u===nn){if(t.has(h))return a(t.get(h).texture,h.mapping);{let f=h.image;if(f&&f.height>0){let c=new qh(f.height);return c.fromEquirectangularTexture(e,h),t.set(h,c),h.addEventListener("dispose",n),a(c.texture,h.mapping)}return null}}}return h})(o)},dispose:function(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}}}function Id(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&ur("WebGLRenderer: "+r+" extension not supported."),a}}}function Ud(e,t,i,r){let a={},n=new WeakMap;function s(l){let h=l.target;h.index!==null&&t.remove(h.index);for(let f in h.attributes)t.remove(h.attributes[f]);h.removeEventListener("dispose",s),delete a[h.id];let u=n.get(h);u&&(t.remove(u),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(l){let h=[],u=l.index,f=l.attributes.position,c=0;if(f===void 0)return;if(u!==null){let d=u.array;c=u.version;for(let _=0,m=d.length;_<m;_+=3){let v=d[_+0],x=d[_+1],y=d[_+2];h.push(v,x,x,y,y,v)}}else{let d=f.array;c=f.version;for(let _=0,m=d.length/3-1;_<m;_+=3){let v=_+0,x=_+1,y=_+2;h.push(v,x,x,y,y,v)}}let p=new(f.count>=65535?oh:sh)(h,1);p.version=c;let g=n.get(l);g&&t.remove(g),n.set(l,p)}return{get:function(l,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,i.memory.geometries++),h},update:function(l){let h=l.attributes;for(let u in h)t.update(h[u],e.ARRAY_BUFFER)},getWireframeAttribute:function(l){let h=n.get(l);if(h){let u=l.index;u!==null&&h.version<u.version&&o(l)}else o(l);return n.get(l)}}}function Dd(e,t,i){let r,a,n;this.setMode=function(s){r=s},this.setIndex=function(s){a=s.type,n=s.bytesPerElement},this.render=function(s,o){e.drawElements(r,o,a,s*n),i.update(o,r,1)},this.renderInstances=function(s,o,l){l!==0&&(e.drawElementsInstanced(r,o,a,s*n,l),i.update(o,r,l))},this.renderMultiDraw=function(s,o,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,o,0,a,s,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];i.update(h,r,1)}}function Od(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(i,r,a){switch(t.calls++,r){case e.TRIANGLES:t.triangles+=a*(i/3);break;case e.LINES:t.lines+=a*(i/2);break;case e.LINE_STRIP:t.lines+=a*(i-1);break;case e.LINE_LOOP:t.lines+=a*i;break;case e.POINTS:t.points+=a*i;break;default:Le("WebGLInfo: Unknown draw mode:",r)}}}}function Fd(e,t,i){let r=new WeakMap,a=new at;return{update:function(n,s,o){let l=n.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=h!==void 0?h.length:0,f=r.get(s);if(f===void 0||f.count!==u){let c=function(){L.dispose(),r.delete(s),s.removeEventListener("dispose",c)};f!==void 0&&f.texture.dispose();let p=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,d=s.morphAttributes.color!==void 0,_=s.morphAttributes.position||[],m=s.morphAttributes.normal||[],v=s.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),d===!0&&(x=3);let y=s.attributes.position.count*x,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*b*4*u),L=new ih(E,y,b,u);L.type=$t,L.needsUpdate=!0;let D=4*x;for(let P=0;P<u;P++){let z=_[P],I=m[P],X=v[P],j=y*b*4*P;for(let H=0;H<z.count;H++){let k=H*D;p===!0&&(a.fromBufferAttribute(z,H),E[j+k+0]=a.x,E[j+k+1]=a.y,E[j+k+2]=a.z,E[j+k+3]=0),g===!0&&(a.fromBufferAttribute(I,H),E[j+k+4]=a.x,E[j+k+5]=a.y,E[j+k+6]=a.z,E[j+k+7]=0),d===!0&&(a.fromBufferAttribute(X,H),E[j+k+8]=a.x,E[j+k+9]=a.y,E[j+k+10]=a.z,E[j+k+11]=X.itemSize===4?a.w:1)}}f={count:u,texture:L,size:new ne(y,b)},r.set(s,f),s.addEventListener("dispose",c)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)o.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let c=0;for(let g=0;g<l.length;g++)c+=l[g];let p=s.morphTargetsRelative?1:1-c;o.getUniforms().setValue(e,"morphTargetBaseInfluence",p),o.getUniforms().setValue(e,"morphTargetInfluences",l)}o.getUniforms().setValue(e,"morphTargetsTexture",f.texture,i),o.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}}}function Bd(e,t,i,r,a){let n=new WeakMap;function s(o){let l=o.target;l.removeEventListener("dispose",s),r.releaseStatesOfObject(l),i.remove(l.instanceMatrix),l.instanceColor!==null&&i.remove(l.instanceColor)}return{update:function(o){let l=a.render.frame,h=o.geometry,u=t.get(o,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),n.get(o)!==l&&(i.update(o.instanceMatrix,e.ARRAY_BUFFER),o.instanceColor!==null&&i.update(o.instanceColor,e.ARRAY_BUFFER),n.set(o,l))),o.isSkinnedMesh){let f=o.skeleton;n.get(f)!==l&&(f.update(),n.set(f,l))}return u},dispose:function(){n=new WeakMap}}}var zd={[Ol]:"LINEAR_TONE_MAPPING",[Fl]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[zl]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function Vd(e,t,i,r,a,n){let s=new ii(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,depthTexture:a?new mr(t,i):void 0}),o=new ii(t,i,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new ht;l.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new De([0,2,0,0,2,0],2));let h=new ad({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Wt(l,h),f=new Ha(-1,1,1,-1,0,1),c,p=null,g=null,d=!1,_=null,m=[],v=!1;this.setSize=function(x,y){s.setSize(x,y),o.setSize(x,y);for(let b=0;b<m.length;b++){let E=m[b];E.setSize&&E.setSize(x,y)}},this.setEffects=function(x){m=x,v=m.length>0&&m[0].isRenderPass===!0;let y=s.width,b=s.height;for(let E=0;E<m.length;E++){let L=m[E];L.setSize&&L.setSize(y,b)}},this.begin=function(x,y){if(d||x.toneMapping===ti&&m.length===0)return!1;if(_=y,y!==null){let b=y.width,E=y.height;s.width===b&&s.height===E||this.setSize(b,E)}return v===!1&&x.setRenderTarget(s),c=x.toneMapping,x.toneMapping=ti,!0},this.hasRenderPass=function(){return v},this.end=function(x,y){x.toneMapping=c,d=!0;let b=s,E=o;for(let L=0;L<m.length;L++){let D=m[L];if(D.enabled!==!1&&(D.render(x,E,b,y),D.needsSwap!==!1)){let P=b;b=E,E=P}}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,h.defines={},Ye.getTransfer(p)===et&&(h.defines.SRGB_TRANSFER="");let L=zd[g];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(_),x.render(u,f),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),h.dispose()}}var Yh=new kt,ss=new mr(1,1),Zh=new ih,Kh=new ec,Jh=new ch,ll=[],hl=[],ul=new Float32Array(16),cl=new Float32Array(9),dl=new Float32Array(4);function xr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=ll[a];if(n===void 0&&(n=new Float32Array(a),ll[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function gt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function vt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function qa(e,t){let i=hl[t];i===void 0&&(i=new Int32Array(t),hl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Gd(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Hd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y||(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gt(i,t))return;e.uniform2fv(this.addr,t),vt(i,t)}}function kd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y&&i[2]===t.z||(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)i[0]===t.r&&i[1]===t.g&&i[2]===t.b||(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gt(i,t))return;e.uniform3fv(this.addr,t),vt(i,t)}}function Wd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y&&i[2]===t.z&&i[3]===t.w||(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gt(i,t))return;e.uniform4fv(this.addr,t),vt(i,t)}}function Xd(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(gt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),vt(i,t)}else{if(gt(i,r))return;dl.set(r),e.uniformMatrix2fv(this.addr,!1,dl),vt(i,r)}}function jd(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(gt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),vt(i,t)}else{if(gt(i,r))return;cl.set(r),e.uniformMatrix3fv(this.addr,!1,cl),vt(i,r)}}function qd(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(gt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),vt(i,t)}else{if(gt(i,r))return;ul.set(r),e.uniformMatrix4fv(this.addr,!1,ul),vt(i,r)}}function Yd(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Zd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y||(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gt(i,t))return;e.uniform2iv(this.addr,t),vt(i,t)}}function Kd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y&&i[2]===t.z||(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gt(i,t))return;e.uniform3iv(this.addr,t),vt(i,t)}}function Jd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y&&i[2]===t.z&&i[3]===t.w||(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gt(i,t))return;e.uniform4iv(this.addr,t),vt(i,t)}}function $d(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Qd(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y||(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gt(i,t))return;e.uniform2uiv(this.addr,t),vt(i,t)}}function ep(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y&&i[2]===t.z||(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gt(i,t))return;e.uniform3uiv(this.addr,t),vt(i,t)}}function tp(e,t){let i=this.cache;if(t.x!==void 0)i[0]===t.x&&i[1]===t.y&&i[2]===t.z&&i[3]===t.w||(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gt(i,t))return;e.uniform4uiv(this.addr,t),vt(i,t)}}function ip(e,t,i){let r=this.cache,a=i.allocateTextureUnit(),n;r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),this.type===e.SAMPLER_2D_SHADOW?(ss.compareFunction=i.isReversedDepthBuffer()?ps:ds,n=ss):n=Yh,i.setTexture2D(t||n,a)}function rp(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Kh,a)}function ap(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Jh,a)}function np(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Zh,a)}function sp(e,t){e.uniform1fv(this.addr,t)}function op(e,t){let i=xr(t,this.size,2);e.uniform2fv(this.addr,i)}function lp(e,t){let i=xr(t,this.size,3);e.uniform3fv(this.addr,i)}function hp(e,t){let i=xr(t,this.size,4);e.uniform4fv(this.addr,i)}function up(e,t){let i=xr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function cp(e,t){let i=xr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function dp(e,t){let i=xr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function pp(e,t){e.uniform1iv(this.addr,t)}function fp(e,t){e.uniform2iv(this.addr,t)}function mp(e,t){e.uniform3iv(this.addr,t)}function gp(e,t){e.uniform4iv(this.addr,t)}function vp(e,t){e.uniform1uiv(this.addr,t)}function _p(e,t){e.uniform2uiv(this.addr,t)}function xp(e,t){e.uniform3uiv(this.addr,t)}function Mp(e,t){e.uniform4uiv(this.addr,t)}function yp(e,t,i){let r=this.cache,a=t.length,n=qa(i,a),s;gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n)),s=this.type===e.SAMPLER_2D_SHADOW?ss:Yh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Sp(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Kh,n[s])}function Ep(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Jh,n[s])}function Tp(e,t,i){let r=this.cache,a=t.length,n=qa(i,a);gt(r,n)||(e.uniform1iv(this.addr,n),vt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Zh,n[s])}var bp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Gd;case 35664:return Hd;case 35665:return kd;case 35666:return Wd;case 35674:return Xd;case 35675:return jd;case 35676:return qd;case 5124:case 35670:return Yd;case 35667:case 35671:return Zd;case 35668:case 35672:return Kd;case 35669:case 35673:return Jd;case 5125:return $d;case 36294:return Qd;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return np}})(t.type)}},wp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return sp;case 35664:return op;case 35665:return lp;case 35666:return hp;case 35674:return up;case 35675:return cp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return fp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return vp;case 36294:return _p;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}})(t.type)}},Ap=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Wn=/(\w+)(\])?(\[|\.)?/g;function pl(e,t){e.seq.push(t),e.map[t.id]=t}function Cp(e,t,i){let r=e.name,a=r.length;for(Wn.lastIndex=0;;){let n=Wn.exec(r),s=Wn.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o|=0),h===void 0||h==="["&&s+2===a){pl(i,h===void 0?new bp(o,e,t):new wp(o,e,t));break}{let u=i.map[o];u===void 0&&(u=new Ap(o),pl(i,u)),i=u}}}var Da=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Cp(s,e.getUniformLocation(t,s.name),this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function fl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Rp=0,ml=new ze;function gl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+(function(o,l){let h=o.split(`
`),u=[],f=Math.max(l-6,0),c=Math.min(l+6,h.length);for(let p=f;p<c;p++){let g=p+1;u.push(`${g===l?">":" "} ${g}: ${h[p]}`)}return u.join(`
`)})(e.getShaderSource(t),s)}return a}function Pp(e,t){let i=(function(r){Ye._getMatrix(ml,Ye.workingColorSpace,r);let a=`mat3( ${ml.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(r)){case Ba:return[a,"LinearTransferOETF"];case et:return[a,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",r),[a,"LinearTransferOETF"]}})(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Lp={[Ol]:"Linear",[Fl]:"Reinhard",[Bl]:"Cineon",[zl]:"ACESFilmic",[Gl]:"AgX",[Hl]:"Neutral",[Vl]:"Custom"};function Np(e,t){let i=Lp[t];return i===void 0?(Re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ra=new A;function Ip(){return Ye.getLuminanceCoefficients(Ra),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ra.x.toFixed(4)}, ${Ra.y.toFixed(4)}, ${Ra.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lr(e){return e!==""}function vl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(e){return e.replace(Up,Op)}var Dp=new Map;function Op(e,t){let i=Ve[t];if(i===void 0){let r=Dp.get(t);if(r===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");i=Ve[r],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r)}return os(i)}var Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(e){return e.replace(Fp,Bp)}function Bp(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Ml(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var zp={[Pa]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"},Vp={[Br]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"},Gp={[dr]:"ENVMAP_MODE_REFRACTION"},Hp={[Lu]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function kp(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=(function(I){return zp[I.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(i),h=(function(I){return I.envMap===!1?"ENVMAP_TYPE_CUBE":Vp[I.envMapMode]||"ENVMAP_TYPE_CUBE"})(i),u=(function(I){return I.envMap===!1?"ENVMAP_MODE_REFLECTION":Gp[I.envMapMode]||"ENVMAP_MODE_REFLECTION"})(i),f=(function(I){return I.envMap===!1?"ENVMAP_BLENDING_NONE":Hp[I.combine]||"ENVMAP_BLENDING_NONE"})(i),c=(function(I){let X=I.envMapCubeUVHeight;if(X===null)return null;let j=Math.log2(X)-2,H=1/X;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:H,maxMip:j}})(i),p=(function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",I.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)})(i),g=(function(I){let X=[];for(let j in I){let H=I[j];H!==!1&&X.push("#define "+j+" "+H)}return X.join(`
`)})(n),d=a.createProgram(),_,m,v=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Lr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`)):(_=[Ml(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),m=[Ml(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ti?"#define TONE_MAPPING":"",i.toneMapping!==ti?Ve.tonemapping_pars_fragment:"",i.toneMapping!==ti?Np("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Pp("linearToOutputTexel",i.outputColorSpace),Ip(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lr).join(`
`)),s=os(s),s=vl(s,i),s=_l(s,i),o=os(o),o=vl(o,i),o=_l(o,i),s=xl(s),o=xl(o),i.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",i.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=v+_+s,y=v+m+o,b=fl(a,a.VERTEX_SHADER,x),E=fl(a,a.FRAGMENT_SHADER,y);function L(I){if(e.debug.checkShaderErrors){let X=a.getProgramInfoLog(d)||"",j=a.getShaderInfoLog(b)||"",H=a.getShaderInfoLog(E)||"",k=X.trim(),Y=j.trim(),B=H.trim(),oe=!0,fe=!0;if(a.getProgramParameter(d,a.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,d,b,E);else{let Ee=gl(a,b,"vertex"),Me=gl(a,E,"fragment");Le("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(d,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+Ee+`
`+Me)}else k!==""?Re("WebGLProgram: Program Info Log:",k):Y!==""&&B!==""||(fe=!1);fe&&(I.diagnostics={runnable:oe,programLog:k,vertexShader:{log:Y,prefix:_},fragmentShader:{log:B,prefix:m}})}a.deleteShader(b),a.deleteShader(E),D=new Da(a,d),P=(function(X,j){let H={},k=X.getProgramParameter(j,X.ACTIVE_ATTRIBUTES);for(let Y=0;Y<k;Y++){let B=X.getActiveAttrib(j,Y),oe=B.name,fe=1;B.type===X.FLOAT_MAT2&&(fe=2),B.type===X.FLOAT_MAT3&&(fe=3),B.type===X.FLOAT_MAT4&&(fe=4),H[oe]={type:B.type,location:X.getAttribLocation(j,oe),locationSize:fe}}return H})(a,d)}let D,P;a.attachShader(d,b),a.attachShader(d,E),i.index0AttributeName!==void 0?a.bindAttribLocation(d,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(d,0,"position"),a.linkProgram(d),this.getUniforms=function(){return D===void 0&&L(this),D},this.getAttributes=function(){return P===void 0&&L(this),P};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(d,37297)),z},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(d),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Rp++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=E,this}var Wp=0,Xp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jp(e),t.set(e,i)),i}},jp=class{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}};function qp(e,t,i,r,a,n){let s=new ah,o=new Xp,l=new Set,h=[],u=new Map,f=r.logarithmicDepthBuffer,c=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(d){return l.add(d),d===0?"uv":`uv${d}`}return{getParameters:function(d,_,m,v,x,y){let b=v.fog,E=x.geometry,L=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?v.environment:null,D=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,P=t.get(d.envMap||L,D),z=P&&P.mapping===Wa?P.image.height:null,I=p[d.type];d.precision!==null&&(c=r.getMaxPrecision(d.precision),c!==d.precision&&Re("WebGLProgram.getParameters:",d.precision,"not supported, using",c,"instead."));let X=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,j=X!==void 0?X.length:0,H,k,Y,B,oe=0;if(E.morphAttributes.position!==void 0&&(oe=1),E.morphAttributes.normal!==void 0&&(oe=2),E.morphAttributes.color!==void 0&&(oe=3),I){let Qe=Jt[I];H=Qe.vertexShader,k=Qe.fragmentShader}else{H=d.vertexShader,k=d.fragmentShader;let Qe=o.getVertexShaderStage(d),it=o.getFragmentShaderStage(d);o.update(d,Qe,it),Y=Qe.id,B=it.id}let fe=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),Me=x.isInstancedMesh===!0,$=x.isBatchedMesh===!0,se=!!d.map,Te=!!d.matcap,le=!!P,ye=!!d.aoMap,ee=!!d.lightMap,Ae=!!d.bumpMap&&d.wireframe===!1,R=!!d.normalMap,S=!!d.displacementMap,C=!!d.emissiveMap,O=!!d.metalnessMap,M=!!d.roughnessMap,N=d.anisotropy>0,U=d.clearcoat>0,w=d.dispersion>0,G=d.iridescence>0,W=d.sheen>0,Z=d.transmission>0,ae=N&&!!d.anisotropyMap,xe=U&&!!d.clearcoatMap,ue=U&&!!d.clearcoatNormalMap,me=U&&!!d.clearcoatRoughnessMap,ie=G&&!!d.iridescenceMap,Ne=G&&!!d.iridescenceThicknessMap,Q=W&&!!d.sheenColorMap,K=W&&!!d.sheenRoughnessMap,re=!!d.specularMap,ve=!!d.specularColorMap,be=!!d.specularIntensityMap,pe=Z&&!!d.transmissionMap,ke=Z&&!!d.thicknessMap,de=!!d.gradientMap,Ce=!!d.alphaMap,_e=d.alphaTest>0,Fe=!!d.alphaHash,We=!!d.extensions,Je=ti;d.toneMapped&&(fe!==null&&fe.isXRRenderTarget!==!0||(Je=e.toneMapping));let tt={shaderID:I,shaderType:d.type,shaderName:d.name,vertexShader:H,fragmentShader:k,defines:d.defines,customVertexShaderID:Y,customFragmentShaderID:B,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:c,batching:$,batchingColor:$&&x._colorsTexture!==null,instancing:Me,instancingColor:Me&&x.instanceColor!==null,instancingMorph:Me&&x.morphTexture!==null,outputColorSpace:fe===null?e.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:se,matcap:Te,envMap:le,envMapMode:le&&P.mapping,envMapCubeUVHeight:z,aoMap:ye,lightMap:ee,bumpMap:Ae,normalMap:R,displacementMap:S,emissiveMap:C,normalMapObjectSpace:R&&d.normalMapType===Fu,normalMapTangentSpace:R&&d.normalMapType===Mo,packedNormalMap:R&&d.normalMapType===Mo&&(rt=d.normalMap.format,rt===pr||rt===$n||rt===Qn),metalnessMap:O,roughnessMap:M,anisotropy:N,anisotropyMap:ae,clearcoat:U,clearcoatMap:xe,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,dispersion:w,iridescence:G,iridescenceMap:ie,iridescenceThicknessMap:Ne,sheen:W,sheenColorMap:Q,sheenRoughnessMap:K,specularMap:re,specularColorMap:ve,specularIntensityMap:be,transmission:Z,transmissionMap:pe,thicknessMap:ke,gradientMap:de,opaque:d.transparent===!1&&d.blending===La&&d.alphaToCoverage===!1,alphaMap:Ce,alphaTest:_e,alphaHash:Fe,combine:d.combine,mapUv:se&&g(d.map.channel),aoMapUv:ye&&g(d.aoMap.channel),lightMapUv:ee&&g(d.lightMap.channel),bumpMapUv:Ae&&g(d.bumpMap.channel),normalMapUv:R&&g(d.normalMap.channel),displacementMapUv:S&&g(d.displacementMap.channel),emissiveMapUv:C&&g(d.emissiveMap.channel),metalnessMapUv:O&&g(d.metalnessMap.channel),roughnessMapUv:M&&g(d.roughnessMap.channel),anisotropyMapUv:ae&&g(d.anisotropyMap.channel),clearcoatMapUv:xe&&g(d.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(d.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(d.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(d.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&g(d.sheenColorMap.channel),sheenRoughnessMapUv:K&&g(d.sheenRoughnessMap.channel),specularMapUv:re&&g(d.specularMap.channel),specularColorMapUv:ve&&g(d.specularColorMap.channel),specularIntensityMapUv:be&&g(d.specularIntensityMap.channel),transmissionMapUv:pe&&g(d.transmissionMap.channel),thicknessMapUv:ke&&g(d.thicknessMap.channel),alphaMapUv:Ce&&g(d.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(R||N),vertexNormals:!!E.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!E.attributes.uv&&(se||Ce),fog:!!b,useFog:d.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||E.attributes.normal===void 0&&R===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:y.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:d.dithering,shadowMapEnabled:e.shadowMap.enabled&&m.length>0,shadowMapType:e.shadowMap.type,toneMapping:Je,decodeVideoTexture:se&&d.map.isVideoTexture===!0&&Ye.getTransfer(d.map.colorSpace)===et,decodeVideoTextureEmissive:C&&d.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(d.emissiveMap.colorSpace)===et,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===ci,flipSided:d.side===Rt,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:We&&d.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&d.extensions.multiDraw===!0||$)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};var rt;return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt},getProgramCacheKey:function(d){let _=[];if(d.shaderID?_.push(d.shaderID):(_.push(d.customVertexShaderID),_.push(d.customFragmentShaderID)),d.defines!==void 0)for(let m in d.defines)_.push(m),_.push(d.defines[m]);return d.isRawShaderMaterial===!1&&((function(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapCubeUVHeight),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.morphAttributeCount),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)})(_,d),(function(m,v){s.disableAll(),v.instancing&&s.enable(0),v.instancingColor&&s.enable(1),v.instancingMorph&&s.enable(2),v.matcap&&s.enable(3),v.envMap&&s.enable(4),v.normalMapObjectSpace&&s.enable(5),v.normalMapTangentSpace&&s.enable(6),v.clearcoat&&s.enable(7),v.iridescence&&s.enable(8),v.alphaTest&&s.enable(9),v.vertexColors&&s.enable(10),v.vertexAlphas&&s.enable(11),v.vertexUv1s&&s.enable(12),v.vertexUv2s&&s.enable(13),v.vertexUv3s&&s.enable(14),v.vertexTangents&&s.enable(15),v.anisotropy&&s.enable(16),v.alphaHash&&s.enable(17),v.batching&&s.enable(18),v.dispersion&&s.enable(19),v.batchingColor&&s.enable(20),v.gradientMap&&s.enable(21),v.packedNormalMap&&s.enable(22),v.vertexNormals&&s.enable(23),m.push(s.mask),s.disableAll(),v.fog&&s.enable(0),v.useFog&&s.enable(1),v.flatShading&&s.enable(2),v.logarithmicDepthBuffer&&s.enable(3),v.reversedDepthBuffer&&s.enable(4),v.skinning&&s.enable(5),v.morphTargets&&s.enable(6),v.morphNormals&&s.enable(7),v.morphColors&&s.enable(8),v.premultipliedAlpha&&s.enable(9),v.shadowMapEnabled&&s.enable(10),v.doubleSided&&s.enable(11),v.flipSided&&s.enable(12),v.useDepthPacking&&s.enable(13),v.dithering&&s.enable(14),v.transmission&&s.enable(15),v.sheen&&s.enable(16),v.opaque&&s.enable(17),v.pointsUvs&&s.enable(18),v.decodeVideoTexture&&s.enable(19),v.decodeVideoTextureEmissive&&s.enable(20),v.alphaToCoverage&&s.enable(21),v.numLightProbeGrids>0&&s.enable(22),v.hasPositionAttribute&&s.enable(23),m.push(s.mask)})(_,d),_.push(e.outputColorSpace)),_.push(d.customProgramCacheKey),_.join()},getUniforms:function(d){let _=p[d.type],m;if(_){let v=Jt[_];m=rd.clone(v.uniforms)}else m=d.uniforms;return m},acquireProgram:function(d,_){let m=u.get(_);return m!==void 0?++m.usedTimes:(m=new kp(e,_,d,a),h.push(m),u.set(_,m)),m},releaseProgram:function(d){if(--d.usedTimes===0){let _=h.indexOf(d);h[_]=h[h.length-1],h.pop(),u.delete(d.cacheKey),d.destroy()}},releaseShaderCache:function(d){o.remove(d)},programs:h,dispose:function(){o.dispose()}}}function Yp(){let e=new WeakMap;return{has:function(t){return e.has(t)},get:function(t){let i=e.get(t);return i===void 0&&(i={},e.set(t,i)),i},remove:function(t){e.delete(t)},update:function(t,i,r){e.get(t)[i]=r},dispose:function(){e=new WeakMap}}}function Zp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function yl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Sl(){let e=[],t=0,i=[],r=[],a=[];function n(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function s(o,l,h,u,f,c){let p=e[t];return p===void 0?(p={id:o.id,object:o,geometry:l,material:h,materialVariant:n(o),groupOrder:u,renderOrder:o.renderOrder,z:f,group:c},e[t]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=h,p.materialVariant=n(o),p.groupOrder=u,p.renderOrder=o.renderOrder,p.z=f,p.group=c),t++,p}return{opaque:i,transmissive:r,transparent:a,init:function(){t=0,i.length=0,r.length=0,a.length=0},push:function(o,l,h,u,f,c){let p=s(o,l,h,u,f,c);h.transmission>0?r.push(p):h.transparent===!0?a.push(p):i.push(p)},unshift:function(o,l,h,u,f,c){let p=s(o,l,h,u,f,c);h.transmission>0?r.unshift(p):h.transparent===!0?a.unshift(p):i.unshift(p)},finish:function(){for(let o=t,l=e.length;o<l;o++){let h=e[o];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}},sort:function(o,l,h){i.length>1&&i.sort(o||Zp),r.length>1&&r.sort(l||yl),a.length>1&&a.sort(l||yl),h&&(i.reverse(),r.reverse(),a.reverse())}}}function Kp(){let e=new WeakMap;return{get:function(t,i){let r=e.get(t),a;return r===void 0?(a=new Sl,e.set(t,[a])):i>=r.length?(a=new Sl,r.push(a)):a=r[i],a},dispose:function(){e=new WeakMap}}}function Jp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new A,color:new je};break;case"SpotLight":i={position:new A,direction:new A,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new je,groundColor:new je};break;case"RectAreaLight":i={color:new je,position:new A,halfWidth:new A,halfHeight:new A}}return e[t.id]=i,i}}}var $p=0;function Qp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ef(e){let t=new Jp,i=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=h,h}}})(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)r.probe.push(new A);let a=new A,n=new He,s=new He;return{setup:function(o){let l=0,h=0,u=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let f=0,c=0,p=0,g=0,d=0,_=0,m=0,v=0,x=0,y=0,b=0;o.sort(Qp);for(let L=0,D=o.length;L<D;L++){let P=o[L],z=P.color,I=P.intensity,X=P.distance,j=null;if(P.shadow&&P.shadow.map&&(j=P.shadow.map.texture.format===pr?P.shadow.map.texture:P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=z.r*I,h+=z.g*I,u+=z.b*I;else if(P.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(P.sh.coefficients[H],I);b++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,Y=i.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,r.directionalShadow[f]=Y,r.directionalShadowMap[f]=j,r.directionalShadowMatrix[f]=P.shadow.matrix,_++}r.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(I),H.distance=X,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,r.spot[p]=H;let k=P.shadow;if(P.map&&(r.spotLightMap[x]=P.map,x++,k.updateMatrices(P),P.castShadow&&y++),r.spotLightMatrix[p]=k.matrix,P.castShadow){let Y=i.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,r.spotShadow[p]=Y,r.spotShadowMap[p]=j,v++}p++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(z).multiplyScalar(I),H.halfWidth.set(.5*P.width,0,0),H.halfHeight.set(0,.5*P.height,0),r.rectArea[g]=H,g++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let k=P.shadow,Y=i.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,r.pointShadow[c]=Y,r.pointShadowMap[c]=j,r.pointShadowMatrix[c]=P.shadow.matrix,m++}r.point[c]=H,c++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(I),H.groundColor.copy(P.groundColor).multiplyScalar(I),r.hemi[d]=H,d++}}g>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=l,r.ambient[1]=h,r.ambient[2]=u;let E=r.hash;E.directionalLength===f&&E.pointLength===c&&E.spotLength===p&&E.rectAreaLength===g&&E.hemiLength===d&&E.numDirectionalShadows===_&&E.numPointShadows===m&&E.numSpotShadows===v&&E.numSpotMaps===x&&E.numLightProbes===b||(r.directional.length=f,r.spot.length=p,r.rectArea.length=g,r.point.length=c,r.hemi.length=d,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=v+x-y,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=b,E.directionalLength=f,E.pointLength=c,E.spotLength=p,E.rectAreaLength=g,E.hemiLength=d,E.numDirectionalShadows=_,E.numPointShadows=m,E.numSpotShadows=v,E.numSpotMaps=x,E.numLightProbes=b,r.version=$p++)},setupView:function(o,l){let h=0,u=0,f=0,c=0,p=0,g=l.matrixWorldInverse;for(let d=0,_=o.length;d<_;d++){let m=o[d];if(m.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(g),h++}else if(m.isSpotLight){let v=r.spot[f];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(g),f++}else if(m.isRectAreaLight){let v=r.rectArea[c];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),s.identity(),n.copy(m.matrixWorld),n.premultiply(g),s.extractRotation(n),v.halfWidth.set(.5*m.width,0,0),v.halfHeight.set(0,.5*m.height,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),c++}else if(m.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),u++}else if(m.isHemisphereLight){let v=r.hemi[p];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(g),p++}}},state:r}}function El(e){let t=new ef(e),i=[],r=[],a=[],n={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:function(s){n.camera=s,i.length=0,r.length=0,a.length=0},state:n,setupLights:function(){t.setup(i)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)},pushLightProbeGrid:function(s){a.push(s)}}}function tf(e){let t=new WeakMap;return{get:function(i,r=0){let a=t.get(i),n;return a===void 0?(n=new El(e),t.set(i,[n])):r>=a.length?(n=new El(e),a.push(n)):n=a[r],n},dispose:function(){t=new WeakMap}}}var rf=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],af=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Tl=new He,Nr=new A,Xn=new A;function nf(e,t,i){let r=new Hr,a=new ne,n=new ne,s=new at,o=new nd,l=new sd,h={},u=i.maxTextureSize,f={[Fr]:Rt,[Rt]:Fr,[ci]:ci},c=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let g=new ht;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new Wt(g,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let m=this.type;function v(E,L){let D=t.update(d);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(a.x,a.y,{format:pr,type:fi})),c.uniforms.shadow_pass.value=E.map.depthTexture,c.uniforms.resolution.value=E.mapSize,c.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(L,null,D,c,d,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(L,null,D,p,d,null)}function x(E,L,D,P){let z=null,I=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)z=I;else if(z=D.isPointLight===!0?l:o,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let X=z.uuid,j=L.uuid,H=h[X];H===void 0&&(H={},h[X]=H);let k=H[j];k===void 0&&(k=z.clone(),H[j]=k,L.addEventListener("dispose",b)),z=k}return z.visible=L.visible,z.wireframe=L.wireframe,z.side=P===Ir?L.shadowSide!==null?L.shadowSide:L.side:L.shadowSide!==null?L.shadowSide:f[L.side],z.alphaMap=L.alphaMap,z.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,z.map=L.map,z.clipShadows=L.clipShadows,z.clippingPlanes=L.clippingPlanes,z.clipIntersection=L.clipIntersection,z.displacementMap=L.displacementMap,z.displacementScale=L.displacementScale,z.displacementBias=L.displacementBias,z.wireframeLinewidth=L.wireframeLinewidth,z.linewidth=L.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(e.properties.get(z).light=D),z}function y(E,L,D,P,z){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&z===Ir)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let X=t.update(E),j=E.material;if(Array.isArray(j)){let H=X.groups;for(let k=0,Y=H.length;k<Y;k++){let B=H[k],oe=j[B.materialIndex];if(oe&&oe.visible){let fe=x(E,oe,P,z);E.onBeforeShadow(e,E,L,D,X,fe,B),e.renderBufferDirect(D,null,X,fe,E,B),E.onAfterShadow(e,E,L,D,X,fe,B)}}}else if(j.visible){let H=x(E,j,P,z);E.onBeforeShadow(e,E,L,D,X,H,null),e.renderBufferDirect(D,null,X,H,E,null),E.onAfterShadow(e,E,L,D,X,H,null)}}let I=E.children;for(let X=0,j=I.length;X<j;X++)y(I[X],L,D,P,z)}function b(E){E.target.removeEventListener("dispose",b);for(let L in h){let D=h[L],P=E.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}this.render=function(E,L,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===uu&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pa);let P=e.getRenderTarget(),z=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),X=e.state;X.setBlending(di),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let j=m!==this.type;j&&L.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,k=E.length;H<k;H++){let Y=E[H],B=Y.shadow;if(B===void 0){Re("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);let oe=B.getFrameExtents();a.multiply(oe),n.copy(B.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/oe.x),a.x=n.x*oe.x,B.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/oe.y),a.y=n.y*oe.y,B.mapSize.y=n.y));let fe=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=fe,B.map===null||j===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ir){if(Y.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ii(a.x,a.y,{format:pr,type:fi,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new mr(a.x,a.y,$t),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=Fi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht}else Y.isPointLight?(B.map=new qh(a.x),B.map.depthTexture=new Sc(a.x,Ei)):(B.map=new ii(a.x,a.y),B.map.depthTexture=new mr(a.x,a.y,Ei)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=Fi,this.type===Pa?(B.map.depthTexture.compareFunction=fe?ps:ds,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht);B.camera.updateProjectionMatrix()}let Ee=B.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Ee;Me++){if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,Me),e.clear();else{Me===0&&(e.setRenderTarget(B.map),e.clear());let $=B.getViewport(Me);s.set(n.x*$.x,n.y*$.y,n.x*$.z,n.y*$.w),X.viewport(s)}if(Y.isPointLight){let $=B.camera,se=B.matrix,Te=Y.distance||$.far;Te!==$.far&&($.far=Te,$.updateProjectionMatrix()),Nr.setFromMatrixPosition(Y.matrixWorld),$.position.copy(Nr),Xn.copy($.position),Xn.add(rf[Me]),$.up.copy(af[Me]),$.lookAt(Xn),$.updateMatrixWorld(),se.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Tl.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Tl,$.coordinateSystem,$.reversedDepth)}else B.updateMatrices(Y);r=B.getFrustum(),y(L,D,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Ir&&v(B,D),B.needsUpdate=!1}m=this.type,_.needsUpdate=!1,e.setRenderTarget(P,z,I)}}function sf(e,t){let i=new function(){let M=!1,N=new at,U=null,w=new at(0,0,0,0);return{setMask:function(G){U===G||M||(e.colorMask(G,G,G,G),U=G)},setLocked:function(G){M=G},setClear:function(G,W,Z,ae,xe){xe===!0&&(G*=ae,W*=ae,Z*=ae),N.set(G,W,Z,ae),w.equals(N)===!1&&(e.clearColor(G,W,Z,ae),w.copy(N))},reset:function(){M=!1,U=null,w.set(-1,0,0,0)}}},r=new function(){let M=!1,N=!1,U=null,w=null,G=null;return{setReversed:function(W){if(N!==W){let Z=t.get("EXT_clip_control");W?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),N=W;let ae=G;G=null,this.setClear(ae)}},getReversed:function(){return N},setTest:function(W){W?le(e.DEPTH_TEST):ye(e.DEPTH_TEST)},setMask:function(W){U===W||M||(e.depthMask(W),U=W)},setFunc:function(W){if(N&&(W=qu[W]),w!==W){switch(W){case Rl:e.depthFunc(e.NEVER);break;case Pl:e.depthFunc(e.ALWAYS);break;case Ll:e.depthFunc(e.LESS);break;case Zn:e.depthFunc(e.LEQUAL);break;case Nl:e.depthFunc(e.EQUAL);break;case Il:e.depthFunc(e.GEQUAL);break;case Ul:e.depthFunc(e.GREATER);break;case Dl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}w=W}},setLocked:function(W){M=W},setClear:function(W){G!==W&&(G=W,N&&(W=1-W),e.clearDepth(W))},reset:function(){M=!1,U=null,w=null,G=null,N=!1}}},a=new function(){let M=!1,N=null,U=null,w=null,G=null,W=null,Z=null,ae=null,xe=null;return{setTest:function(ue){M||(ue?le(e.STENCIL_TEST):ye(e.STENCIL_TEST))},setMask:function(ue){N===ue||M||(e.stencilMask(ue),N=ue)},setFunc:function(ue,me,ie){U===ue&&w===me&&G===ie||(e.stencilFunc(ue,me,ie),U=ue,w=me,G=ie)},setOp:function(ue,me,ie){W===ue&&Z===me&&ae===ie||(e.stencilOp(ue,me,ie),W=ue,Z=me,ae=ie)},setLocked:function(ue){M=ue},setClear:function(ue){xe!==ue&&(e.clearStencil(ue),xe=ue)},reset:function(){M=!1,N=null,U=null,w=null,G=null,W=null,Z=null,ae=null,xe=null}}},n=new WeakMap,s=new WeakMap,o={},l={},h={},u=new WeakMap,f=[],c=null,p=!1,g=null,d=null,_=null,m=null,v=null,x=null,y=null,b=new je(0,0,0),E=0,L=!1,D=null,P=null,z=null,I=null,X=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,k=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=k>=2);let B=null,oe={},fe=e.getParameter(e.SCISSOR_BOX),Ee=e.getParameter(e.VIEWPORT),Me=new at().fromArray(fe),$=new at().fromArray(Ee);function se(M,N,U,w){let G=new Uint8Array(4),W=e.createTexture();e.bindTexture(M,W),e.texParameteri(M,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(M,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Z=0;Z<U;Z++)M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?e.texImage3D(N,0,e.RGBA,1,1,w,0,e.RGBA,e.UNSIGNED_BYTE,G):e.texImage2D(N+Z,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,G);return W}let Te={};function le(M){o[M]!==!0&&(e.enable(M),o[M]=!0)}function ye(M){o[M]!==!1&&(e.disable(M),o[M]=!1)}Te[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),Te[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Te[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),le(e.DEPTH_TEST),r.setFunc(Zn),S(!1),C(Ds),le(e.CULL_FACE),R(di);let ee={[yr]:e.FUNC_ADD,[du]:e.FUNC_SUBTRACT,[pu]:e.FUNC_REVERSE_SUBTRACT};ee[fu]=e.MIN,ee[mu]=e.MAX;let Ae={[gu]:e.ZERO,[vu]:e.ONE,[_u]:e.SRC_COLOR,[Mu]:e.SRC_ALPHA,[wu]:e.SRC_ALPHA_SATURATE,[Tu]:e.DST_COLOR,[Su]:e.DST_ALPHA,[xu]:e.ONE_MINUS_SRC_COLOR,[yu]:e.ONE_MINUS_SRC_ALPHA,[bu]:e.ONE_MINUS_DST_COLOR,[Eu]:e.ONE_MINUS_DST_ALPHA,[Au]:e.CONSTANT_COLOR,[Cu]:e.ONE_MINUS_CONSTANT_COLOR,[Ru]:e.CONSTANT_ALPHA,[Pu]:e.ONE_MINUS_CONSTANT_ALPHA};function R(M,N,U,w,G,W,Z,ae,xe,ue){if(M!==di){if(p===!1&&(le(e.BLEND),p=!0),M===cu)G=G||N,W=W||U,Z=Z||w,N===d&&G===v||(e.blendEquationSeparate(ee[N],ee[G]),d=N,v=G),U===_&&w===m&&W===x&&Z===y||(e.blendFuncSeparate(Ae[U],Ae[w],Ae[W],Ae[Z]),_=U,m=w,x=W,y=Z),ae.equals(b)!==!1&&xe===E||(e.blendColor(ae.r,ae.g,ae.b,xe),b.copy(ae),E=xe),g=M,L=!1;else if(M!==g||ue!==L){if(d===yr&&v===yr||(e.blendEquation(e.FUNC_ADD),d=yr,v=yr),ue)switch(M){case La:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Os:e.blendFunc(e.ONE,e.ONE);break;case Fs:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Bs:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Le("WebGLState: Invalid blending: ",M)}else switch(M){case La:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Os:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fs:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bs:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",M)}_=null,m=null,x=null,y=null,b.set(0,0,0),E=0,g=M,L=ue}}else p===!0&&(ye(e.BLEND),p=!1)}function S(M){D!==M&&(M?e.frontFace(e.CW):e.frontFace(e.CCW),D=M)}function C(M){M!==lu?(le(e.CULL_FACE),M!==P&&(M===Ds?e.cullFace(e.BACK):M===hu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ye(e.CULL_FACE),P=M}function O(M,N,U){M?(le(e.POLYGON_OFFSET_FILL),I===N&&X===U||(I=N,X=U,r.getReversed()&&(N=-N),e.polygonOffset(N,U))):ye(e.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:r,stencil:a},enable:le,disable:ye,bindFramebuffer:function(M,N){return h[M]!==N&&(e.bindFramebuffer(M,N),h[M]=N,M===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=N),M===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=N),!0)},drawBuffers:function(M,N){let U=f,w=!1;if(M){U=u.get(N),U===void 0&&(U=[],u.set(N,U));let G=M.textures;if(U.length!==G.length||U[0]!==e.COLOR_ATTACHMENT0){for(let W=0,Z=G.length;W<Z;W++)U[W]=e.COLOR_ATTACHMENT0+W;U.length=G.length,w=!0}}else U[0]!==e.BACK&&(U[0]=e.BACK,w=!0);w&&e.drawBuffers(U)},useProgram:function(M){return c!==M&&(e.useProgram(M),c=M,!0)},setBlending:R,setMaterial:function(M,N){M.side===ci?ye(e.CULL_FACE):le(e.CULL_FACE);let U=M.side===Rt;N&&(U=!U),S(U),M.blending===La&&M.transparent===!1?R(di):R(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),i.setMask(M.colorWrite);let w=M.stencilWrite;a.setTest(w),w&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),O(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ye(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:C,setLineWidth:function(M){M!==z&&(H&&e.lineWidth(M),z=M)},setPolygonOffset:O,setScissorTest:function(M){M?le(e.SCISSOR_TEST):ye(e.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=e.TEXTURE0+j-1),B!==M&&(e.activeTexture(M),B=M)},bindTexture:function(M,N,U){U===void 0&&(U=B===null?e.TEXTURE0+j-1:B);let w=oe[U];w===void 0&&(w={type:void 0,texture:void 0},oe[U]=w),w.type===M&&w.texture===N||(B!==U&&(e.activeTexture(U),B=U),e.bindTexture(M,N||Te[M]),w.type=M,w.texture=N)},unbindTexture:function(){let M=oe[B];M!==void 0&&M.type!==void 0&&(e.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D(...arguments)}catch(M){Le("WebGLState:",M)}},compressedTexImage3D:function(){try{e.compressedTexImage3D(...arguments)}catch(M){Le("WebGLState:",M)}},texImage2D:function(){try{e.texImage2D(...arguments)}catch(M){Le("WebGLState:",M)}},texImage3D:function(){try{e.texImage3D(...arguments)}catch(M){Le("WebGLState:",M)}},pixelStorei:function(M,N){l[M]!==N&&(e.pixelStorei(M,N),l[M]=N)},getParameter:function(M){return l[M]!==void 0?l[M]:e.getParameter(M)},updateUBOMapping:function(M,N){let U=s.get(N);U===void 0&&(U=new WeakMap,s.set(N,U));let w=U.get(M);w===void 0&&(w=e.getUniformBlockIndex(N,M.name),U.set(M,w))},uniformBlockBinding:function(M,N){let U=s.get(N).get(M);n.get(N)!==U&&(e.uniformBlockBinding(N,U,M.__bindingPointIndex),n.set(N,U))},texStorage2D:function(){try{e.texStorage2D(...arguments)}catch(M){Le("WebGLState:",M)}},texStorage3D:function(){try{e.texStorage3D(...arguments)}catch(M){Le("WebGLState:",M)}},texSubImage2D:function(){try{e.texSubImage2D(...arguments)}catch(M){Le("WebGLState:",M)}},texSubImage3D:function(){try{e.texSubImage3D(...arguments)}catch(M){Le("WebGLState:",M)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D(...arguments)}catch(M){Le("WebGLState:",M)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D(...arguments)}catch(M){Le("WebGLState:",M)}},scissor:function(M){Me.equals(M)===!1&&(e.scissor(M.x,M.y,M.z,M.w),Me.copy(M))},viewport:function(M){$.equals(M)===!1&&(e.viewport(M.x,M.y,M.z,M.w),$.copy(M))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),o={},l={},B=null,oe={},h={},u=new WeakMap,f=[],c=null,p=!1,g=null,d=null,_=null,m=null,v=null,x=null,y=null,b=new je(0,0,0),E=0,L=!1,D=null,P=null,z=null,I=null,X=null,Me.set(0,0,e.canvas.width,e.canvas.height),$.set(0,0,e.canvas.width,e.canvas.height),i.reset(),r.reset(),a.reset()}}}function of(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new ne,u=new WeakMap,f=new Set,c,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,S){return g?new OffscreenCanvas(R,S):Va("canvas")}function _(R,S,C){let O=1,M=Ae(R);if((M.width>C||M.height>C)&&(O=C/Math.max(M.width,M.height)),O<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let N=Math.floor(O*M.width),U=Math.floor(O*M.height);c===void 0&&(c=d(N,U));let w=S?d(N,U):c;return w.width=N,w.height=U,w.getContext("2d").drawImage(R,0,0,N,U),Re("WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+N+"x"+U+")."),w}return"data"in R&&Re("WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),R}return R}function m(R){return R.generateMipmaps}function v(R){e.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(R,S,C,O,M,N=!1){if(R!==null){if(e[R]!==void 0)return e[R];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let U;O&&(U=t.get("EXT_texture_norm16"),U||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=S;if(S===e.RED&&(C===e.FLOAT&&(w=e.R32F),C===e.HALF_FLOAT&&(w=e.R16F),C===e.UNSIGNED_BYTE&&(w=e.R8),C===e.UNSIGNED_SHORT&&U&&(w=U.R16_EXT),C===e.SHORT&&U&&(w=U.R16_SNORM_EXT)),S===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(w=e.R8UI),C===e.UNSIGNED_SHORT&&(w=e.R16UI),C===e.UNSIGNED_INT&&(w=e.R32UI),C===e.BYTE&&(w=e.R8I),C===e.SHORT&&(w=e.R16I),C===e.INT&&(w=e.R32I)),S===e.RG&&(C===e.FLOAT&&(w=e.RG32F),C===e.HALF_FLOAT&&(w=e.RG16F),C===e.UNSIGNED_BYTE&&(w=e.RG8),C===e.UNSIGNED_SHORT&&U&&(w=U.RG16_EXT),C===e.SHORT&&U&&(w=U.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(w=e.RG8UI),C===e.UNSIGNED_SHORT&&(w=e.RG16UI),C===e.UNSIGNED_INT&&(w=e.RG32UI),C===e.BYTE&&(w=e.RG8I),C===e.SHORT&&(w=e.RG16I),C===e.INT&&(w=e.RG32I)),S===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(w=e.RGB8UI),C===e.UNSIGNED_SHORT&&(w=e.RGB16UI),C===e.UNSIGNED_INT&&(w=e.RGB32UI),C===e.BYTE&&(w=e.RGB8I),C===e.SHORT&&(w=e.RGB16I),C===e.INT&&(w=e.RGB32I)),S===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(w=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(w=e.RGBA16UI),C===e.UNSIGNED_INT&&(w=e.RGBA32UI),C===e.BYTE&&(w=e.RGBA8I),C===e.SHORT&&(w=e.RGBA16I),C===e.INT&&(w=e.RGBA32I)),S===e.RGB&&(C===e.UNSIGNED_SHORT&&U&&(w=U.RGB16_EXT),C===e.SHORT&&U&&(w=U.RGB16_SNORM_EXT),C===e.UNSIGNED_INT_5_9_9_9_REV&&(w=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(w=e.R11F_G11F_B10F)),S===e.RGBA){let G=N?Ba:Ye.getTransfer(M);C===e.FLOAT&&(w=e.RGBA32F),C===e.HALF_FLOAT&&(w=e.RGBA16F),C===e.UNSIGNED_BYTE&&(w=G===et?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT&&U&&(w=U.RGBA16_EXT),C===e.SHORT&&U&&(w=U.RGBA16_SNORM_EXT),C===e.UNSIGNED_SHORT_4_4_4_4&&(w=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(w=e.RGB5_A1)}return w!==e.R16F&&w!==e.R32F&&w!==e.RG16F&&w!==e.RG32F&&w!==e.RGBA16F&&w!==e.RGBA32F||t.get("EXT_color_buffer_float"),w}function b(R,S){let C;return R?S===null||S===Ei||S===Vr?C=e.DEPTH24_STENCIL8:S===$t?C=e.DEPTH32F_STENCIL8:S===zr&&(C=e.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===Vr?C=e.DEPTH_COMPONENT24:S===$t?C=e.DEPTH_COMPONENT32F:S===zr&&(C=e.DEPTH_COMPONENT16),C}function E(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){let S=R.target;S.removeEventListener("dispose",L),(function(C){let O=r.get(C);if(O.__webglInit===void 0)return;let M=C.source,N=p.get(M);if(N){let U=N[O.__cacheKey];U.usedTimes--,U.usedTimes===0&&P(C),Object.keys(N).length===0&&p.delete(M)}r.remove(C)})(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function D(R){let S=R.target;S.removeEventListener("dispose",D),(function(C){let O=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(O.__webglFramebuffer[N]))for(let U=0;U<O.__webglFramebuffer[N].length;U++)e.deleteFramebuffer(O.__webglFramebuffer[N][U]);else e.deleteFramebuffer(O.__webglFramebuffer[N]);O.__webglDepthbuffer&&e.deleteRenderbuffer(O.__webglDepthbuffer[N])}else{if(Array.isArray(O.__webglFramebuffer))for(let N=0;N<O.__webglFramebuffer.length;N++)e.deleteFramebuffer(O.__webglFramebuffer[N]);else e.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&e.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&e.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let N=0;N<O.__webglColorRenderbuffer.length;N++)O.__webglColorRenderbuffer[N]&&e.deleteRenderbuffer(O.__webglColorRenderbuffer[N]);O.__webglDepthRenderbuffer&&e.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let M=C.textures;for(let N=0,U=M.length;N<U;N++){let w=r.get(M[N]);w.__webglTexture&&(e.deleteTexture(w.__webglTexture),s.memory.textures--),r.remove(M[N])}r.remove(C)})(S)}function P(R){let S=r.get(R);e.deleteTexture(S.__webglTexture);let C=R.source;delete p.get(C)[S.__cacheKey],s.memory.textures--}let z=0;function I(R,S){let C=r.get(R);if(R.isVideoTexture&&(function(O){let M=s.render.frame;u.get(O)!==M&&(u.set(O,M),O.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let O=R.image;if(O===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void oe(C,R,S);Re("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+S)}let X={[Kn]:e.REPEAT,[Oi]:e.CLAMP_TO_EDGE,[Jn]:e.MIRRORED_REPEAT},j={[Ht]:e.NEAREST,[Uu]:e.NEAREST_MIPMAP_NEAREST,[Qr]:e.NEAREST_MIPMAP_LINEAR,[Tt]:e.LINEAR,[sn]:e.LINEAR_MIPMAP_NEAREST,[lr]:e.LINEAR_MIPMAP_LINEAR},H={[Bu]:e.NEVER,[ku]:e.ALWAYS,[zu]:e.LESS,[ds]:e.LEQUAL,[Vu]:e.EQUAL,[ps]:e.GEQUAL,[Gu]:e.GREATER,[Hu]:e.NOTEQUAL};function k(R,S){if(S.type!==$t||t.has("OES_texture_float_linear")!==!1||S.magFilter!==Tt&&S.magFilter!==sn&&S.magFilter!==Qr&&S.magFilter!==lr&&S.minFilter!==Tt&&S.minFilter!==sn&&S.minFilter!==Qr&&S.minFilter!==lr||Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,X[S.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,X[S.wrapT]),R!==e.TEXTURE_3D&&R!==e.TEXTURE_2D_ARRAY||e.texParameteri(R,e.TEXTURE_WRAP_R,X[S.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,j[S.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==Qr&&S.minFilter!==lr||S.type===$t&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Y(R,S){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));let O=S.source,M=p.get(O);M===void 0&&(M={},p.set(O,M));let N=(function(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()})(S);if(N!==R.__cacheKey){M[N]===void 0&&(M[N]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,C=!0),M[N].usedTimes++;let U=M[R.__cacheKey];U!==void 0&&(M[R.__cacheKey].usedTimes--,U.usedTimes===0&&P(S)),R.__cacheKey=N,R.__webglTexture=M[N].texture}return C}function B(R,S,C){return Math.floor(Math.floor(R/C)/S)}function oe(R,S,C){let O=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(O=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(O=e.TEXTURE_3D);let M=Y(R,S),N=S.source;i.bindTexture(O,R.__webglTexture,e.TEXTURE0+C);let U=r.get(N);if(N.version!==U.__version||M===!0){if(i.activeTexture(e.TEXTURE0+C),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let Q=Ye.getPrimaries(Ye.workingColorSpace),K=S.colorSpace===ar?null:Ye.getPrimaries(S.colorSpace),re=S.colorSpace===ar||Q===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let w=_(S.image,!1,a.maxTextureSize);w=ee(S,w);let G=n.convert(S.format,S.colorSpace),W=n.convert(S.type),Z,ae=y(S.internalFormat,G,W,S.normalized,S.colorSpace,S.isVideoTexture);k(O,S);let xe=S.mipmaps,ue=S.isVideoTexture!==!0,me=U.__version===void 0||M===!0,ie=N.dataReady,Ne=E(S,w);if(S.isDepthTexture)ae=b(S.format===hr,S.type),me&&(ue?i.texStorage2D(e.TEXTURE_2D,1,ae,w.width,w.height):i.texImage2D(e.TEXTURE_2D,0,ae,w.width,w.height,0,G,W,null));else if(S.isDataTexture)if(xe.length>0){ue&&me&&i.texStorage2D(e.TEXTURE_2D,Ne,ae,xe[0].width,xe[0].height);for(let Q=0,K=xe.length;Q<K;Q++)Z=xe[Q],ue?ie&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,Z.width,Z.height,G,W,Z.data):i.texImage2D(e.TEXTURE_2D,Q,ae,Z.width,Z.height,0,G,W,Z.data);S.generateMipmaps=!1}else ue?(me&&i.texStorage2D(e.TEXTURE_2D,Ne,ae,w.width,w.height),ie&&(function(Q,K,re,ve){let be=Q.updateRanges;if(be.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,K.width,K.height,re,ve,K.data);else{be.sort((_e,Fe)=>_e.start-Fe.start);let pe=0;for(let _e=1;_e<be.length;_e++){let Fe=be[pe],We=be[_e],Je=Fe.start+Fe.count,tt=B(We.start,K.width,4),rt=B(Fe.start,K.width,4);We.start<=Je+1&&tt===rt&&B(We.start+We.count-1,K.width,4)===tt?Fe.count=Math.max(Fe.count,We.start+We.count-Fe.start):(++pe,be[pe]=We)}be.length=pe+1;let ke=i.getParameter(e.UNPACK_ROW_LENGTH),de=i.getParameter(e.UNPACK_SKIP_PIXELS),Ce=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,K.width);for(let _e=0,Fe=be.length;_e<Fe;_e++){let We=be[_e],Je=Math.floor(We.start/4),tt=Math.ceil(We.count/4),rt=Je%K.width,Qe=Math.floor(Je/K.width),it=tt;i.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(e.UNPACK_SKIP_ROWS,Qe),i.texSubImage2D(e.TEXTURE_2D,0,rt,Qe,it,1,re,ve,K.data)}Q.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ke),i.pixelStorei(e.UNPACK_SKIP_PIXELS,de),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ce)}})(S,w,G,W)):i.texImage2D(e.TEXTURE_2D,0,ae,w.width,w.height,0,G,W,w.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ue&&me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ne,ae,xe[0].width,xe[0].height,w.depth);for(let Q=0,K=xe.length;Q<K;Q++)if(Z=xe[Q],S.format!==Qt)if(G!==null)if(ue){if(ie)if(S.layerUpdates.size>0){let re=tl(Z.width,Z.height,S.format,S.type);for(let ve of S.layerUpdates){let be=Z.data.subarray(ve*re/Z.data.BYTES_PER_ELEMENT,(ve+1)*re/Z.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,ve,Z.width,Z.height,1,G,be)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,Z.width,Z.height,w.depth,G,Z.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,ae,Z.width,Z.height,w.depth,0,Z.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ie&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,Z.width,Z.height,w.depth,G,W,Z.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Q,ae,Z.width,Z.height,w.depth,0,G,W,Z.data)}else{ue&&me&&i.texStorage2D(e.TEXTURE_2D,Ne,ae,xe[0].width,xe[0].height);for(let Q=0,K=xe.length;Q<K;Q++)Z=xe[Q],S.format!==Qt?G!==null?ue?ie&&i.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,Z.width,Z.height,G,Z.data):i.compressedTexImage2D(e.TEXTURE_2D,Q,ae,Z.width,Z.height,0,Z.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ie&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,Z.width,Z.height,G,W,Z.data):i.texImage2D(e.TEXTURE_2D,Q,ae,Z.width,Z.height,0,G,W,Z.data)}else if(S.isDataArrayTexture)if(ue){if(me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ne,ae,w.width,w.height,w.depth),ie)if(S.layerUpdates.size>0){let Q=tl(w.width,w.height,S.format,S.type);for(let K of S.layerUpdates){let re=w.data.subarray(K*Q/w.data.BYTES_PER_ELEMENT,(K+1)*Q/w.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,w.width,w.height,1,G,W,re)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,G,W,w.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ae,w.width,w.height,w.depth,0,G,W,w.data);else if(S.isData3DTexture)ue?(me&&i.texStorage3D(e.TEXTURE_3D,Ne,ae,w.width,w.height,w.depth),ie&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,G,W,w.data)):i.texImage3D(e.TEXTURE_3D,0,ae,w.width,w.height,w.depth,0,G,W,w.data);else if(S.isFramebufferTexture){if(me)if(ue)i.texStorage2D(e.TEXTURE_2D,Ne,ae,w.width,w.height);else{let Q=w.width,K=w.height;for(let re=0;re<Ne;re++)i.texImage2D(e.TEXTURE_2D,re,ae,Q,K,0,G,W,null),Q>>=1,K>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),w.parentNode!==Q)return Q.appendChild(w),f.add(S),Q.onpaint=K=>{let re=K.changedElements;for(let ve of f)re.includes(ve.image)&&(ve.needsUpdate=!0)},void Q.requestPaint();if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,w);else{let K=e.RGBA,re=e.RGBA,ve=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,K,re,ve,w)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(xe.length>0){if(ue&&me){let Q=Ae(xe[0]);i.texStorage2D(e.TEXTURE_2D,Ne,ae,Q.width,Q.height)}for(let Q=0,K=xe.length;Q<K;Q++)Z=xe[Q],ue?ie&&i.texSubImage2D(e.TEXTURE_2D,Q,0,0,G,W,Z):i.texImage2D(e.TEXTURE_2D,Q,ae,G,W,Z);S.generateMipmaps=!1}else if(ue){if(me){let Q=Ae(w);i.texStorage2D(e.TEXTURE_2D,Ne,ae,Q.width,Q.height)}ie&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,G,W,w)}else i.texImage2D(e.TEXTURE_2D,0,ae,G,W,w);m(S)&&v(O),U.__version=N.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function fe(R,S,C,O,M,N){let U=n.convert(C.format,C.colorSpace),w=n.convert(C.type),G=y(C.internalFormat,U,w,C.normalized,C.colorSpace),W=r.get(S),Z=r.get(C);if(Z.__renderTarget=S,!W.__hasExternalTextures){let ae=Math.max(1,S.width>>N),xe=Math.max(1,S.height>>N);M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?i.texImage3D(M,N,G,ae,xe,S.depth,0,U,w,null):i.texImage2D(M,N,G,ae,xe,0,U,w,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),ye(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,O,M,Z.__webglTexture,0,le(S)):(M===e.TEXTURE_2D||M>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,O,M,Z.__webglTexture,N),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(R,S,C){if(e.bindRenderbuffer(e.RENDERBUFFER,R),S.depthBuffer){let O=S.depthTexture,M=O&&O.isDepthTexture?O.type:null,N=b(S.stencilBuffer,M),U=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ye(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le(S),N,S.width,S.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,le(S),N,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,N,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,U,e.RENDERBUFFER,R)}else{let O=S.textures;for(let M=0;M<O.length;M++){let N=O[M],U=n.convert(N.format,N.colorSpace),w=n.convert(N.type),G=y(N.internalFormat,U,w,N.normalized,N.colorSpace);ye(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le(S),G,S.width,S.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,le(S),G,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,G,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(R,S,C){let O=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let M=r.get(S.depthTexture);if(M.__renderTarget=S,M.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O){if(M.__webglInit===void 0&&(M.__webglInit=!0,S.depthTexture.addEventListener("dispose",L)),M.__webglTexture===void 0){M.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture),k(e.TEXTURE_CUBE_MAP,S.depthTexture);let W=n.convert(S.depthTexture.format),Z=n.convert(S.depthTexture.type),ae;S.depthTexture.format===Fi?ae=e.DEPTH_COMPONENT24:S.depthTexture.format===hr&&(ae=e.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,S.width,S.height,0,W,Z,null)}}else I(S.depthTexture,0);let N=M.__webglTexture,U=le(S),w=O?e.TEXTURE_CUBE_MAP_POSITIVE_X+C:e.TEXTURE_2D,G=S.depthTexture.format===hr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Fi)ye(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,w,N,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,G,w,N,0);else{if(S.depthTexture.format!==hr)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");ye(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,w,N,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,G,w,N,0)}}function $(R){let S=r.get(R),C=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),O){let M=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,O.removeEventListener("dispose",M)};O.addEventListener("dispose",M),S.__depthDisposeCallback=M}S.__boundDepthTexture=O}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(C)for(let O=0;O<6;O++)Me(S.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?Me(S.__webglFramebuffer[0],R,0):Me(S.__webglFramebuffer,R,0)}else if(C){S.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[O]),S.__webglDepthbuffer[O]===void 0)S.__webglDepthbuffer[O]=e.createRenderbuffer(),Ee(S.__webglDepthbuffer[O],R,!1);else{let M=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,N=S.__webglDepthbuffer[O];e.bindRenderbuffer(e.RENDERBUFFER,N),e.framebufferRenderbuffer(e.FRAMEBUFFER,M,e.RENDERBUFFER,N)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ee(S.__webglDepthbuffer,R,!1);else{let M=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,N=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,N),e.framebufferRenderbuffer(e.FRAMEBUFFER,M,e.RENDERBUFFER,N)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}let se=[],Te=[];function le(R){return Math.min(a.maxSamples,R.samples)}function ye(R){let S=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(R,S){let C=R.colorSpace,O=R.format,M=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==Fa&&C!==ar&&(Ye.getTransfer(C)===et?O===Qt&&M===Gt||Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",C)),S}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=function(){let R=z;return R>=a.maxTextures&&Re("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),z+=1,R},this.resetTextureUnits=function(){z=0},this.getTextureUnits=function(){return z},this.setTextureUnits=function(R){z=R},this.setTexture2D=I,this.setTexture2DArray=function(R,S){let C=r.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?oe(C,R,S):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),i.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+S))},this.setTexture3D=function(R,S){let C=r.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?oe(C,R,S):i.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+S)},this.setTextureCube=function(R,S){let C=r.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(O,M,N){if(M.image.length!==6)return;let U=Y(O,M),w=M.source;i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+N);let G=r.get(w);if(w.version!==G.__version||U===!0){i.activeTexture(e.TEXTURE0+N);let W=Ye.getPrimaries(Ye.workingColorSpace),Z=M.colorSpace===ar?null:Ye.getPrimaries(M.colorSpace),ae=M.colorSpace===ar||W===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,me=[];for(let de=0;de<6;de++)me[de]=xe||ue?ue?M.image[de].image:M.image[de]:_(M.image[de],!0,a.maxCubemapSize),me[de]=ee(M,me[de]);let ie=me[0],Ne=n.convert(M.format,M.colorSpace),Q=n.convert(M.type),K=y(M.internalFormat,Ne,Q,M.normalized,M.colorSpace),re=M.isVideoTexture!==!0,ve=G.__version===void 0||U===!0,be=w.dataReady,pe,ke=E(M,ie);if(k(e.TEXTURE_CUBE_MAP,M),xe){re&&ve&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ke,K,ie.width,ie.height);for(let de=0;de<6;de++){pe=me[de].mipmaps;for(let Ce=0;Ce<pe.length;Ce++){let _e=pe[Ce];M.format!==Qt?Ne!==null?re?be&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,_e.width,_e.height,Ne,_e.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,K,_e.width,_e.height,0,_e.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?be&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,_e.width,_e.height,Ne,Q,_e.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,K,_e.width,_e.height,0,Ne,Q,_e.data)}}}else{if(pe=M.mipmaps,re&&ve){pe.length>0&&ke++;let de=Ae(me[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ke,K,de.width,de.height)}for(let de=0;de<6;de++)if(ue){re?be&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,me[de].width,me[de].height,Ne,Q,me[de].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,K,me[de].width,me[de].height,0,Ne,Q,me[de].data);for(let Ce=0;Ce<pe.length;Ce++){let _e=pe[Ce].image[de].image;re?be&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,_e.width,_e.height,Ne,Q,_e.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,K,_e.width,_e.height,0,Ne,Q,_e.data)}}else{re?be&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Q,me[de]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,K,Ne,Q,me[de]);for(let Ce=0;Ce<pe.length;Ce++){let _e=pe[Ce];re?be&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Ne,Q,_e.image[de]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,K,Ne,Q,_e.image[de])}}}m(M)&&v(e.TEXTURE_CUBE_MAP),G.__version=w.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version})(C,R,S):i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+S)},this.rebindTextures=function(R,S,C){let O=r.get(R);S!==void 0&&fe(O.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&$(R)},this.setupRenderTarget=function(R){let S=R.texture,C=r.get(R),O=r.get(S);R.addEventListener("dispose",D);let M=R.textures,N=R.isWebGLCubeRenderTarget===!0,U=M.length>1;if(U||(O.__webglTexture===void 0&&(O.__webglTexture=e.createTexture()),O.__version=S.version,s.memory.textures++),N){C.__webglFramebuffer=[];for(let w=0;w<6;w++)if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer[w]=[];for(let G=0;G<S.mipmaps.length;G++)C.__webglFramebuffer[w][G]=e.createFramebuffer()}else C.__webglFramebuffer[w]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer=[];for(let w=0;w<S.mipmaps.length;w++)C.__webglFramebuffer[w]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(U)for(let w=0,G=M.length;w<G;w++){let W=r.get(M[w]);W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&ye(R)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let w=0;w<M.length;w++){let G=M[w];C.__webglColorRenderbuffer[w]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[w]);let W=n.convert(G.format,G.colorSpace),Z=n.convert(G.type),ae=y(G.internalFormat,W,Z,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),xe=le(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,ae,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+w,e.RENDERBUFFER,C.__webglColorRenderbuffer[w])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(C.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(N){i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture),k(e.TEXTURE_CUBE_MAP,S);for(let w=0;w<6;w++)if(S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)fe(C.__webglFramebuffer[w][G],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+w,G);else fe(C.__webglFramebuffer[w],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);m(S)&&v(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(U){for(let w=0,G=M.length;w<G;w++){let W=M[w],Z=r.get(W),ae=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ae,Z.__webglTexture),k(ae,W),fe(C.__webglFramebuffer,R,W,e.COLOR_ATTACHMENT0+w,ae,0),m(W)&&v(ae)}i.unbindTexture()}else{let w=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(w=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(w,O.__webglTexture),k(w,S),S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)fe(C.__webglFramebuffer[G],R,S,e.COLOR_ATTACHMENT0,w,G);else fe(C.__webglFramebuffer,R,S,e.COLOR_ATTACHMENT0,w,0);m(S)&&v(w),i.unbindTexture()}R.depthBuffer&&$(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let C=0,O=S.length;C<O;C++){let M=S[C];if(m(M)){let N=x(R),U=r.get(M).__webglTexture;i.bindTexture(N,U),v(N),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(ye(R)===!1){let S=R.textures,C=R.width,O=R.height,M=e.COLOR_BUFFER_BIT,N=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,U=r.get(R),w=S.length>1;if(w)for(let W=0;W<S.length;W++)i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,U.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let W=0;W<S.length;W++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(M|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(M|=e.STENCIL_BUFFER_BIT)),w){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,U.__webglColorRenderbuffer[W]);let Z=r.get(S[W]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Z,0)}e.blitFramebuffer(0,0,C,O,0,0,C,O,M,e.NEAREST),l===!0&&(se.length=0,Te.length=0,se.push(e.COLOR_ATTACHMENT0+W),R.depthBuffer&&R.resolveDepthBuffer===!1&&(se.push(N),Te.push(N),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),w)for(let W=0;W<S.length;W++){i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,U.__webglColorRenderbuffer[W]);let Z=r.get(S[W]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,U.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.TEXTURE_2D,Z,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function lf(e,t){return{convert:function(i,r=ar){let a,n=Ye.getTransfer(r);if(i===Gt)return e.UNSIGNED_BYTE;if(i===hs)return e.UNSIGNED_SHORT_4_4_4_4;if(i===us)return e.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return e.BYTE;if(i===Xl)return e.SHORT;if(i===zr)return e.UNSIGNED_SHORT;if(i===ls)return e.INT;if(i===Ei)return e.UNSIGNED_INT;if(i===$t)return e.FLOAT;if(i===fi)return e.HALF_FLOAT;if(i===Du)return e.ALPHA;if(i===Ou)return e.RGB;if(i===Qt)return e.RGBA;if(i===Fi)return e.DEPTH_COMPONENT;if(i===hr)return e.DEPTH_STENCIL;if(i===Yl)return e.RED;if(i===cs)return e.RED_INTEGER;if(i===pr)return e.RG;if(i===Zl)return e.RG_INTEGER;if(i===Kl)return e.RGBA_INTEGER;if(i===on||i===ln||i===hn||i===un)if(n===et){if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===on)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ln)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===un)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=t.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===on)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ln)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===un)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===zs||i===Vs||i===Gs||i===Hs){if(a=t.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===zs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===ks||i===Ws||i===Xs||i===js||i===qs||i===$n||i===Ys){if(a=t.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===ks||i===Ws)return n===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Xs)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===js)return a.COMPRESSED_R11_EAC;if(i===qs)return a.COMPRESSED_SIGNED_R11_EAC;if(i===$n)return a.COMPRESSED_RG11_EAC;if(i===Ys)return a.COMPRESSED_SIGNED_RG11_EAC}if(i===Zs||i===Ks||i===Js||i===$s||i===Qs||i===eo||i===to||i===io||i===ro||i===ao||i===no||i===so||i===oo||i===lo){if(a=t.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Zs)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ks)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Js)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$s)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qs)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eo)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===to)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===io)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ro)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ao)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return n===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===ho||i===uo||i===co){if(a=t.get("EXT_texture_compression_bptc"),a===null)return null;if(i===ho)return n===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===co)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===po||i===fo||i===Qn||i===mo){if(a=t.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===po)return a.COMPRESSED_RED_RGTC1_EXT;if(i===fo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Vr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}}}var hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new dh(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Xt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uf=class extends zi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,f=null,c=null,p=null,g=typeof XRWebGLBinding<"u",d=new hf,_={},m=t.getContextAttributes(),v=null,x=null,y=[],b=[],E=new ne,L=null,D=new Vt;D.viewport=new at;let P=new Vt;P.viewport=new at;let z=[D,P],I=new xd,X=null,j=null;function H($){let se=b.indexOf($.inputSource);if(se===-1)return;let Te=y[se];Te!==void 0&&(Te.update($.inputSource,$.frame,l||n),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<y.length;$++){let se=b[$];se!==null&&(b[$]=null,y[$].disconnect(se))}X=null,j=null,d.reset();for(let $ in _)delete _[$];e.setRenderTarget(v),c=null,f=null,u=null,r=null,x=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}function Y($){for(let se=0;se<$.removed.length;se++){let Te=$.removed[se],le=b.indexOf(Te);le>=0&&(b[le]=null,y[le].disconnect(Te))}for(let se=0;se<$.added.length;se++){let Te=$.added[se],le=b.indexOf(Te);if(le===-1){for(let ee=0;ee<y.length;ee++){if(ee>=b.length){b.push(Te),le=ee;break}if(b[ee]===null){b[ee]=Te,le=ee;break}}if(le===-1)break}let ye=y[le];ye&&ye.connect(Te)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new _n,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new _n,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new _n,y[$]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:c},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Te=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?hr:Fi,Te=m.stencil?Vr:Ei);let ye={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ii(f.textureWidth,f.textureHeight,{format:Qt,type:Gt,depthTexture:new mr(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),x=new ii(c.framebufferWidth,c.framebufferHeight,{format:Qt,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};let B=new A,oe=new A;function fe($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,Te=$.far;d.texture!==null&&(d.depthNear>0&&(se=d.depthNear),d.depthFar>0&&(Te=d.depthFar)),I.near=P.near=D.near=se,I.far=P.far=D.far=Te,X===I.near&&j===I.far||(r.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,j=I.far),I.layers.mask=6|$.layers.mask,D.layers.mask=-5&I.layers.mask,P.layers.mask=-3&I.layers.mask;let le=$.parent,ye=I.cameras;fe(I,le);for(let ee=0;ee<ye.length;ee++)fe(ye[ee],le);ye.length===2?(function(ee,Ae,R){B.setFromMatrixPosition(Ae.matrixWorld),oe.setFromMatrixPosition(R.matrixWorld);let S=B.distanceTo(oe),C=Ae.projectionMatrix.elements,O=R.projectionMatrix.elements,M=C[14]/(C[10]-1),N=C[14]/(C[10]+1),U=(C[9]+1)/C[5],w=(C[9]-1)/C[5],G=(C[8]-1)/C[0],W=(O[8]+1)/O[0],Z=M*G,ae=M*W,xe=S/(-G+W),ue=xe*-G;if(Ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ue),ee.translateZ(xe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),C[10]===-1)ee.projectionMatrix.copy(Ae.projectionMatrix),ee.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{let me=M+xe,ie=N+xe,Ne=Z-ue,Q=ae+(S-ue),K=U*N/ie*me,re=w*N/ie*me;ee.projectionMatrix.makePerspective(Ne,Q,K,re,me,ie),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}})(I,D,P):I.projectionMatrix.copy(D.projectionMatrix),(function(ee,Ae,R){R===null?ee.matrix.copy(Ae.matrixWorld):(ee.matrix.copy(R.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Ae.projectionMatrix),ee.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=2*ts*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)})($,I,le)},this.getCamera=function(){return I},this.getFoveation=function(){if(f!==null||c!==null)return o},this.setFoveation=function($){o=$,f!==null&&(f.fixedFoveation=$),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=$)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(I)},this.getCameraTexture=function($){return _[$]};let Ee=null,Me=new Xh;Me.setAnimationLoop(function($,se){if(h=se.getViewerPose(l||n),p=se,h!==null){let Te=h.views;c!==null&&(e.setRenderTargetFramebuffer(x,c.framebuffer),e.setRenderTarget(x));let le=!1;Te.length!==I.cameras.length&&(I.cameras.length=0,le=!0);for(let ee=0;ee<Te.length;ee++){let Ae=Te[ee],R=null;if(c!==null)R=c.getViewport(Ae);else{let C=u.getViewSubImage(f,Ae);R=C.viewport,ee===0&&(e.setRenderTargetTextures(x,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(x))}let S=z[ee];S===void 0&&(S=new Vt,S.layers.enable(ee),S.viewport=new at,z[ee]=S),S.matrix.fromArray(Ae.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(Ae.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(R.x,R.y,R.width,R.height),ee===0&&(I.matrix.copy(S.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),le===!0&&I.cameras.push(S)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let ee=u.getDepthInformation(Te[0]);ee&&ee.isValid&&ee.texture&&d.init(ee,r.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let ee=0;ee<Te.length;ee++){let Ae=Te[ee].camera;if(Ae){let R=_[Ae];R||(R=new dh,_[Ae]=R);let S=u.getCameraImage(Ae);R.sourceTexture=S}}}}for(let Te=0;Te<y.length;Te++){let le=b[Te],ye=y[Te];le!==null&&ye!==void 0&&ye.update(le,se,l||n)}Ee&&Ee($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}),this.setAnimationLoop=function($){Ee=$},this.dispose=function(){}}},cf=new He,$h=new ze;function df(e,t){function i(a,n){a.matrixAutoUpdate===!0&&a.updateMatrix(),n.value.copy(a.matrix)}function r(a,n){a.opacity.value=n.opacity,n.color&&a.diffuse.value.copy(n.color),n.emissive&&a.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(a.map.value=n.map,i(n.map,a.mapTransform)),n.alphaMap&&(a.alphaMap.value=n.alphaMap,i(n.alphaMap,a.alphaMapTransform)),n.bumpMap&&(a.bumpMap.value=n.bumpMap,i(n.bumpMap,a.bumpMapTransform),a.bumpScale.value=n.bumpScale,n.side===Rt&&(a.bumpScale.value*=-1)),n.normalMap&&(a.normalMap.value=n.normalMap,i(n.normalMap,a.normalMapTransform),a.normalScale.value.copy(n.normalScale),n.side===Rt&&a.normalScale.value.negate()),n.displacementMap&&(a.displacementMap.value=n.displacementMap,i(n.displacementMap,a.displacementMapTransform),a.displacementScale.value=n.displacementScale,a.displacementBias.value=n.displacementBias),n.emissiveMap&&(a.emissiveMap.value=n.emissiveMap,i(n.emissiveMap,a.emissiveMapTransform)),n.specularMap&&(a.specularMap.value=n.specularMap,i(n.specularMap,a.specularMapTransform)),n.alphaTest>0&&(a.alphaTest.value=n.alphaTest);let s=t.get(n),o=s.envMap,l=s.envMapRotation;o&&(a.envMap.value=o,a.envMapRotation.value.setFromMatrix4(cf.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&a.envMapRotation.value.premultiply($h),a.reflectivity.value=n.reflectivity,a.ior.value=n.ior,a.refractionRatio.value=n.refractionRatio),n.lightMap&&(a.lightMap.value=n.lightMap,a.lightMapIntensity.value=n.lightMapIntensity,i(n.lightMap,a.lightMapTransform)),n.aoMap&&(a.aoMap.value=n.aoMap,a.aoMapIntensity.value=n.aoMapIntensity,i(n.aoMap,a.aoMapTransform))}return{refreshFogUniforms:function(a,n){n.color.getRGB(a.fogColor.value,kh(e)),n.isFog?(a.fogNear.value=n.near,a.fogFar.value=n.far):n.isFogExp2&&(a.fogDensity.value=n.density)},refreshMaterialUniforms:function(a,n,s,o,l){n.isNodeMaterial?n.uniformsNeedUpdate=!1:n.isMeshBasicMaterial?r(a,n):n.isMeshLambertMaterial?(r(a,n),n.envMap&&(a.envMapIntensity.value=n.envMapIntensity)):n.isMeshToonMaterial?(r(a,n),(function(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)})(a,n)):n.isMeshPhongMaterial?(r(a,n),(function(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)})(a,n),n.envMap&&(a.envMapIntensity.value=n.envMapIntensity)):n.isMeshStandardMaterial?(r(a,n),(function(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,i(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,i(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)})(a,n),n.isMeshPhysicalMaterial&&(function(h,u,f){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,i(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,i(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,i(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,i(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,i(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rt&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,i(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,i(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=f.texture,h.transmissionSamplerSize.value.set(f.width,f.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,i(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,i(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,i(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,i(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,i(u.specularIntensityMap,h.specularIntensityMapTransform))})(a,n,l)):n.isMeshMatcapMaterial?(r(a,n),(function(h,u){u.matcap&&(h.matcap.value=u.matcap)})(a,n)):n.isMeshDepthMaterial?r(a,n):n.isMeshDistanceMaterial?(r(a,n),(function(h,u){let f=t.get(u).light;h.referencePosition.value.setFromMatrixPosition(f.matrixWorld),h.nearDistance.value=f.shadow.camera.near,h.farDistance.value=f.shadow.camera.far})(a,n)):n.isMeshNormalMaterial?r(a,n):n.isLineBasicMaterial?((function(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,i(u.map,h.mapTransform))})(a,n),n.isLineDashedMaterial&&(function(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale})(a,n)):n.isPointsMaterial?(function(h,u,f,c){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*f,h.scale.value=.5*c,u.map&&(h.map.value=u.map,i(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)})(a,n,s,o):n.isSpriteMaterial?(function(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,i(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)})(a,n):n.isShadowMaterial?(a.color.value.copy(n.color),a.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}}}function pf(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(c,p,g,d){if((function(_,m,v,x){let y=_.value,b=m+"_"+v;if(x[b]===void 0)return typeof y=="number"||typeof y=="boolean"?x[b]=y:ArrayBuffer.isView(y)?x[b]=y.slice():x[b]=y.clone(),!0;{let E=x[b];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return x[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1})(c,p,g,d)===!0){let _=c.__offset,m=c.value;if(Array.isArray(m)){let v=0;for(let x=0;x<m.length;x++){let y=m[x],b=u(y);h(y,c.__data,v),typeof y=="number"||typeof y=="boolean"||y.isMatrix3||ArrayBuffer.isView(y)||(v+=b.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(m,c.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,c.__data)}}function h(c,p,g){typeof c=="number"||typeof c=="boolean"?p[0]=c:c.isMatrix3?(p[0]=c.elements[0],p[1]=c.elements[1],p[2]=c.elements[2],p[3]=0,p[4]=c.elements[3],p[5]=c.elements[4],p[6]=c.elements[5],p[7]=0,p[8]=c.elements[6],p[9]=c.elements[7],p[10]=c.elements[8],p[11]=0):ArrayBuffer.isView(c)?p.set(new c.constructor(c.buffer,c.byteOffset,p.length)):c.toArray(p,g)}function u(c){let p={boundary:0,storage:0};return typeof c=="number"||typeof c=="boolean"?(p.boundary=4,p.storage=4):c.isVector2?(p.boundary=8,p.storage=8):c.isVector3||c.isColor?(p.boundary=16,p.storage=12):c.isVector4?(p.boundary=16,p.storage=16):c.isMatrix3?(p.boundary=48,p.storage=48):c.isMatrix4?(p.boundary=64,p.storage=64):c.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(c)?(p.boundary=16,p.storage=c.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",c),p}function f(c){let p=c.target;p.removeEventListener("dispose",f);let g=s.indexOf(p.__bindingPointIndex);s.splice(g,1),e.deleteBuffer(a[p.id]),delete a[p.id],delete n[p.id]}return{bind:function(c,p){let g=p.program;r.uniformBlockBinding(c,g)},update:function(c,p){let g=a[c.id];g===void 0&&((function(m){let v=m.uniforms,x=0,y=16;for(let E=0,L=v.length;E<L;E++){let D=Array.isArray(v[E])?v[E]:[v[E]];for(let P=0,z=D.length;P<z;P++){let I=D[P],X=Array.isArray(I.value)?I.value:[I.value];for(let j=0,H=X.length;j<H;j++){let k=u(X[j]),Y=x%y,B=Y%k.boundary,oe=Y+B;x+=B,oe!==0&&y-oe<k.storage&&(x+=y-oe),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=k.storage}}}let b=x%y;b>0&&(x+=y-b),m.__size=x,m.__cache={}})(c),g=(function(m){let v=(function(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=v;let x=e.createBuffer(),y=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,x),x})(c),a[c.id]=g,c.addEventListener("dispose",f));let d=p.program;r.updateUBOMapping(c,d);let _=t.render.frame;n[c.id]!==_&&((function(m){let v=a[m.id],x=m.uniforms,y=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let b=0,E=x.length;b<E;b++){let L=x[b];if(Array.isArray(L))for(let D=0,P=L.length;D<P;D++)l(L[D],b,D,y);else l(L,b,0,y)}e.bindBuffer(e.UNIFORM_BUFFER,null)})(c),n[c.id]=_)},dispose:function(){for(let c in a)e.deleteBuffer(a[c]);s=[],a={},n={}}}}$h.set(-1,0,0,0,1,0,0,0,1);var ff=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kt=null,mf=class{constructor(e={}){let{canvas:t=Xu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:c=Gt}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let g=c,d=new Set([Kl,Zl,cs]),_=new Set([Gt,Ei,zr,Vr,hs,us]),m=new Uint32Array(4),v=new Int32Array(4),x=new A,y=null,b=null,E=[],L=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,z=!1,I=null,X=null,j=null,H=null;this._outputColorSpace=It;let k=0,Y=0,B=null,oe=-1,fe=null,Ee=new at,Me=new at,$=null,se=new je(0),Te=0,le=t.width,ye=t.height,ee=1,Ae=null,R=null,S=new at(0,0,le,ye),C=new at(0,0,le,ye),O=!1,M=new Hr,N=!1,U=!1,w=new He,G=new A,W=new at,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function xe(){return B===null?ee:1}let ue,me,ie,Ne,Q,K,re,ve,be,pe,ke,de,Ce,_e,Fe,We,Je,tt,rt,Qe,it,$e,xt,F=i;function Ai(T,V){return t.getContext(T,V)}try{let T={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",Ms,!1),t.addEventListener("webglcontextrestored",ys,!1),t.addEventListener("webglcontextcreationerror",Ss,!1),F===null){let V="webgl2";if(F=Ai(V,T),F===null)throw Ai(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Le("WebGLRenderer: "+T.message),T}function Zr(){ue=new Id(F),ue.init(),it=new lf(F,ue),me=new Rd(F,ue,e,it),ie=new sf(F,ue),me.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),X=F.createFramebuffer(),j=F.createFramebuffer(),H=F.createFramebuffer(),Ne=new Od(F),Q=new Yp,K=new of(F,ue,ie,Q,me,it,Ne),re=new Nd(P),ve=new Td(F),$e=new Ad(F,ve),be=new Ud(F,ve,Ne,$e),pe=new Bd(F,be,ve,$e,Ne),tt=new Fd(F,me,K),Fe=new Pd(Q),ke=new qp(P,re,ue,me,$e,Fe),de=new df(P,Q),Ce=new Kp,_e=new tf(ue),Je=new wd(P,re,ie,pe,p,o),We=new nf(P,pe,me),xt=new pf(F,Ne,me,ie),rt=new Cd(F,ue,Ne),Qe=new Dd(F,ue,Ne),Ne.programs=ke.programs,P.capabilities=me,P.extensions=ue,P.properties=Q,P.renderLists=Ce,P.shadowMap=We,P.state=ie,P.info=Ne}Zr(),g!==Gt&&(D=new Vd(g,t.width,t.height,s,r,a));let ct=new uf(P,F);function Ms(T){T.preventDefault(),To("WebGLRenderer: Context Lost."),z=!0}function ys(){To("WebGLRenderer: Context Restored."),z=!1;let T=Ne.autoReset,V=We.enabled,q=We.autoUpdate,te=We.needsUpdate,J=We.type;Zr(),Ne.autoReset=T,We.enabled=V,We.autoUpdate=q,We.needsUpdate=te,We.type=J}function Ss(T){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Es(T){let V=T.target;V.removeEventListener("dispose",Es),(function(q){(function(te){let J=Q.get(te).programs;J!==void 0&&(J.forEach(function(he){ke.releaseProgram(he)}),te.isShaderMaterial&&ke.releaseShaderCache(te))})(q),Q.remove(q)})(V)}function Ts(T,V,q){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=Rt,T.needsUpdate=!0,Jr(T,V,q),T.side=Fr,T.needsUpdate=!0,Jr(T,V,q),T.side=ci):Jr(T,V,q)}this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(le,ye,!1))},this.getSize=function(T){return T.set(le,ye)},this.setSize=function(T,V,q=!0){ct.isPresenting?Re("WebGLRenderer: Can't change size while VR device is presenting."):(le=T,ye=V,t.width=Math.floor(T*ee),t.height=Math.floor(V*ee),q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,V))},this.getDrawingBufferSize=function(T){return T.set(le*ee,ye*ee).floor()},this.setDrawingBufferSize=function(T,V,q){le=T,ye=V,ee=q,t.width=Math.floor(T*q),t.height=Math.floor(V*q),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(g!==Gt){if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])}else Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(Ee)},this.getViewport=function(T){return T.copy(S)},this.setViewport=function(T,V,q,te){T.isVector4?S.set(T.x,T.y,T.z,T.w):S.set(T,V,q,te),ie.viewport(Ee.copy(S).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(C)},this.setScissor=function(T,V,q,te){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,V,q,te),ie.scissor(Me.copy(C).multiplyScalar(ee).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(T){ie.setScissorTest(O=T)},this.setOpaqueSort=function(T){Ae=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,q=!0){let te=0;if(T){let J=!1;if(B!==null){let he=B.texture.format;J=d.has(he)}if(J){let he=B.texture.type,ge=_.has(he),Se=Je.getClearColor(),we=Je.getClearAlpha(),Ie=Se.r,qe=Se.g,Ze=Se.b;ge?(m[0]=Ie,m[1]=qe,m[2]=Ze,m[3]=we,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=Ie,v[1]=qe,v[2]=Ze,v[3]=we,F.clearBufferiv(F.COLOR,0,v))}else te|=F.COLOR_BUFFER_BIT}V&&(te|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ms,!1),t.removeEventListener("webglcontextrestored",ys,!1),t.removeEventListener("webglcontextcreationerror",Ss,!1),Je.dispose(),Ce.dispose(),_e.dispose(),Q.dispose(),re.dispose(),pe.dispose(),$e.dispose(),xt.dispose(),ke.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",bs),ct.removeEventListener("sessionend",ws),Ci.stop()},this.renderBufferDirect=function(T,V,q,te,J,he){V===null&&(V=Z);let ge=J.isMesh&&J.matrixWorld.determinantAffine()<0,Se=(function(Xe,st,Mt,Ue,Be){st.isScene!==!0&&(st=Z),K.resetTextureUnits();let Ut=st.fog,Ka=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial?st.environment:null,$r=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ye.workingColorSpace,Mr=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial&&!Ue.envMap||Ue.isMeshPhongMaterial&&!Ue.envMap,jt=re.get(Ue.envMap||Ka,Mr),Vi=Ue.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,ni=!!Mt.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),Ja=!!Mt.morphAttributes.position,Gi=!!Mt.morphAttributes.normal,Qh=!!Mt.morphAttributes.color,Ns=ti;Ue.toneMapped&&(B!==null&&B.isXRRenderTarget!==!0||(Ns=P.toneMapping));let Is=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,eu=Is!==void 0?Is.length:0,Oe=Q.get(Ue),Ri=b.state.lights;if(N===!0&&(U===!0||Xe!==fe)){let pt=Xe===fe&&Ue.id===oe;Fe.setState(Ue,Xe,pt)}let Dt=!1;Ue.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Ri.state.version||Oe.outputColorSpace!==$r||Be.isBatchedMesh&&Oe.batching===!1?Dt=!0:Be.isBatchedMesh||Oe.batching!==!0?Be.isBatchedMesh&&Oe.batchingColor===!0&&Be.colorTexture===null||Be.isBatchedMesh&&Oe.batchingColor===!1&&Be.colorTexture!==null||Be.isInstancedMesh&&Oe.instancing===!1?Dt=!0:Be.isInstancedMesh||Oe.instancing!==!0?Be.isSkinnedMesh&&Oe.skinning===!1?Dt=!0:Be.isSkinnedMesh||Oe.skinning!==!0?Be.isInstancedMesh&&Oe.instancingColor===!0&&Be.instanceColor===null||Be.isInstancedMesh&&Oe.instancingColor===!1&&Be.instanceColor!==null||Be.isInstancedMesh&&Oe.instancingMorph===!0&&Be.morphTexture===null||Be.isInstancedMesh&&Oe.instancingMorph===!1&&Be.morphTexture!==null||Oe.envMap!==jt||Ue.fog===!0&&Oe.fog!==Ut?Dt=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===Fe.numPlanes&&Oe.numIntersection===Fe.numIntersection?(Oe.vertexAlphas!==Vi||Oe.vertexTangents!==ni||Oe.morphTargets!==Ja||Oe.morphNormals!==Gi||Oe.morphColors!==Qh||Oe.toneMapping!==Ns||Oe.morphTargetsCount!==eu||!!Oe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Dt=!0):Dt=!0:Dt=!0:Dt=!0:Dt=!0:(Dt=!0,Oe.__version=Ue.version);let gi=Oe.currentProgram;Dt===!0&&(gi=Jr(Ue,st,Be),I&&Ue.isNodeMaterial&&I.onUpdateProgram(Ue,gi,Oe));let Us=!1,Hi=!1,$a=!1,ot=gi.getUniforms(),Lt=Oe.uniforms;if(ie.useProgram(gi.program)&&(Us=!0,Hi=!0,$a=!0),Ue.id!==oe&&(oe=Ue.id,Hi=!0),Oe.needsLights){let pt=(function(Yt,en){if(Yt.length===0)return null;if(Yt.length===1)return Yt[0].texture!==null?Yt[0]:null;x.setFromMatrixPosition(en.matrixWorld);for(let ki=0,tu=Yt.length;ki<tu;ki++){let tn=Yt[ki];if(tn.texture!==null&&tn.boundingBox.containsPoint(x))return tn}return null})(b.state.lightProbeGridArray,Be);Oe.lightProbeGrid!==pt&&(Oe.lightProbeGrid=pt,Hi=!0)}if(Us||fe!==Xe){ie.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),ot.setValue(F,"projectionMatrix",Xe.projectionMatrix),ot.setValue(F,"viewMatrix",Xe.matrixWorldInverse);let pt=ot.map.cameraPosition;pt!==void 0&&pt.setValue(F,G.setFromMatrixPosition(Xe.matrixWorld)),me.logarithmicDepthBuffer&&ot.setValue(F,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&ot.setValue(F,"isOrthographic",Xe.isOrthographicCamera===!0),fe!==Xe&&(fe=Xe,Hi=!0,$a=!0)}if(Oe.needsLights&&(Ri.state.directionalShadowMap.length>0&&ot.setValue(F,"directionalShadowMap",Ri.state.directionalShadowMap,K),Ri.state.spotShadowMap.length>0&&ot.setValue(F,"spotShadowMap",Ri.state.spotShadowMap,K),Ri.state.pointShadowMap.length>0&&ot.setValue(F,"pointShadowMap",Ri.state.pointShadowMap,K)),Be.isSkinnedMesh){ot.setOptional(F,Be,"bindMatrix"),ot.setOptional(F,Be,"bindMatrixInverse");let pt=Be.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ot.setValue(F,"boneTexture",pt.boneTexture,K))}Be.isBatchedMesh&&(ot.setOptional(F,Be,"batchingTexture"),ot.setValue(F,"batchingTexture",Be._matricesTexture,K),ot.setOptional(F,Be,"batchingIdTexture"),ot.setValue(F,"batchingIdTexture",Be._indirectTexture,K),ot.setOptional(F,Be,"batchingColorTexture"),Be._colorsTexture!==null&&ot.setValue(F,"batchingColorTexture",Be._colorsTexture,K));let Qa=Mt.morphAttributes;if(Qa.position===void 0&&Qa.normal===void 0&&Qa.color===void 0||tt.update(Be,Mt,gi),(Hi||Oe.receiveShadow!==Be.receiveShadow)&&(Oe.receiveShadow=Be.receiveShadow,ot.setValue(F,"receiveShadow",Be.receiveShadow)),(Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial)&&Ue.envMap===null&&st.environment!==null&&(Lt.envMapIntensity.value=st.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=(Kt===null&&(Kt=new fc(ff,16,16,pr,fi),Kt.name="DFG_LUT",Kt.minFilter=Tt,Kt.magFilter=Tt,Kt.wrapS=Oi,Kt.wrapT=Oi,Kt.generateMipmaps=!1,Kt.needsUpdate=!0),Kt)),Hi){if(ot.setValue(F,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&(Ot=$a,(qt=Lt).ambientLightColor.needsUpdate=Ot,qt.lightProbe.needsUpdate=Ot,qt.directionalLights.needsUpdate=Ot,qt.directionalLightShadows.needsUpdate=Ot,qt.pointLights.needsUpdate=Ot,qt.pointLightShadows.needsUpdate=Ot,qt.spotLights.needsUpdate=Ot,qt.spotLightShadows.needsUpdate=Ot,qt.rectAreaLights.needsUpdate=Ot,qt.hemisphereLights.needsUpdate=Ot),Ut&&Ue.fog===!0&&de.refreshFogUniforms(Lt,Ut),de.refreshMaterialUniforms(Lt,Ue,ee,ye,b.state.transmissionRenderTarget[Xe.id]),Oe.needsLights&&Oe.lightProbeGrid){let pt=Oe.lightProbeGrid;Lt.probesSH.value=pt.texture,Lt.probesMin.value.copy(pt.boundingBox.min),Lt.probesMax.value.copy(pt.boundingBox.max),Lt.probesResolution.value.copy(pt.resolution)}Da.upload(F,Ps(Oe),Lt,K)}var qt,Ot;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(Da.upload(F,Ps(Oe),Lt,K),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&ot.setValue(F,"center",Be.center),ot.setValue(F,"modelViewMatrix",Be.modelViewMatrix),ot.setValue(F,"normalMatrix",Be.normalMatrix),ot.setValue(F,"modelMatrix",Be.matrixWorld),Ue.uniformsGroups!==void 0){let pt=Ue.uniformsGroups;for(let Yt=0,en=pt.length;Yt<en;Yt++){let ki=pt[Yt];xt.update(ki,gi),xt.bind(ki,gi)}}return gi})(T,V,q,te,J);ie.setMaterial(te,ge);let we=q.index,Ie=1;if(te.wireframe===!0){if(we=be.getWireframeAttribute(q),we===void 0)return;Ie=2}let qe=q.drawRange,Ze=q.attributes.position,Pe=qe.start*Ie,Ke=(qe.start+qe.count)*Ie;he!==null&&(Pe=Math.max(Pe,he.start*Ie),Ke=Math.min(Ke,(he.start+he.count)*Ie)),we!==null?(Pe=Math.max(Pe,0),Ke=Math.min(Ke,we.count)):Ze!=null&&(Pe=Math.max(Pe,0),Ke=Math.min(Ke,Ze.count));let mt=Ke-Pe;if(mt<0||mt===1/0)return;let dt;$e.setup(J,te,Se,q,we);let nt=rt;if(we!==null&&(dt=ve.get(we),nt=Qe,nt.setIndex(dt)),J.isMesh)te.wireframe===!0?(ie.setLineWidth(te.wireframeLinewidth*xe()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(J.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),ie.setLineWidth(Xe*xe()),J.isLineSegments?nt.setMode(F.LINES):J.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else J.isPoints?nt.setMode(F.POINTS):J.isSprite&&nt.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Xe=J._multiDrawStarts,st=J._multiDrawCounts,Mt=J._multiDrawCount,Ue=we?ve.get(we).bytesPerElement:1,Be=Q.get(te).currentProgram.getUniforms();for(let Ut=0;Ut<Mt;Ut++)Be.setValue(F,"_gl_DrawID",Ut),nt.render(Xe[Ut]/Ue,st[Ut])}else if(J.isInstancedMesh)nt.renderInstances(Pe,mt,J.count);else if(q.isInstancedBufferGeometry){let Xe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,st=Math.min(q.instanceCount,Xe);nt.renderInstances(Pe,mt,st)}else nt.render(Pe,mt)},this.compile=function(T,V,q=null){q===null&&(q=T),b=_e.get(q),b.init(V),L.push(b),q.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),T!==q&&T.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights();let te=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let he=J.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){let Se=he[ge];Ts(Se,q,J),te.add(Se)}else Ts(he,q,J),te.add(he)}),b=L.pop(),te},this.compileAsync=function(T,V,q=null){let te=this.compile(T,V,q);return new Promise(J=>{function he(){te.forEach(function(ge){Q.get(ge).currentProgram.isReady()&&te.delete(ge)}),te.size!==0?setTimeout(he,10):J(T)}ue.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ya=null;function bs(){Ci.stop()}function ws(){Ci.start()}let Ci=new Xh;function Za(T,V,q,te){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||M.intersectsSprite(T)){te&&W.setFromMatrixPosition(T.matrixWorld).applyMatrix4(w);let he=pe.update(T),ge=T.material;ge.visible&&y.push(T,he,ge,q,W.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||M.intersectsObject(T))){let he=pe.update(T),ge=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),W.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),W.copy(he.boundingSphere.center)),W.applyMatrix4(T.matrixWorld).applyMatrix4(w)),Array.isArray(ge)){let Se=he.groups;for(let we=0,Ie=Se.length;we<Ie;we++){let qe=Se[we],Ze=ge[qe.materialIndex];Ze&&Ze.visible&&y.push(T,he,Ze,q,W.z,qe)}}else ge.visible&&y.push(T,he,ge,q,W.z,null)}}let J=T.children;for(let he=0,ge=J.length;he<ge;he++)Za(J[he],V,q,te)}function As(T,V,q,te){let{opaque:J,transmissive:he,transparent:ge}=T;b.setupLightsView(q),N===!0&&Fe.setGlobalState(P.clippingPlanes,q),te&&ie.viewport(Ee.copy(te)),J.length>0&&Kr(J,V,q),he.length>0&&Kr(he,V,q),ge.length>0&&Kr(ge,V,q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Cs(T,V,q,te){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[te.id]===void 0){let Ze=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[te.id]=new ii(1,1,{generateMipmaps:!0,type:Ze?fi:Gt,minFilter:lr,samples:Math.max(4,me.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let J=b.state.transmissionRenderTarget[te.id],he=te.viewport||Ee;J.setSize(he.z*P.transmissionResolutionScale,he.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),Se=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(J),P.getClearColor(se),Te=P.getClearAlpha(),Te<1&&P.setClearColor(16777215,.5),P.clear(),ae&&Je.render(q);let Ie=P.toneMapping;P.toneMapping=ti;let qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),b.setupLightsView(te),N===!0&&Fe.setGlobalState(P.clippingPlanes,te),Kr(T,q,te),K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Pe=0,Ke=V.length;Pe<Ke;Pe++){let mt=V[Pe],{object:dt,geometry:nt,material:Xe,group:st}=mt;if(Xe.side===ci&&dt.layers.test(te.layers)){let Mt=Xe.side;Xe.side=Rt,Xe.needsUpdate=!0,Rs(dt,q,te,nt,Xe,st),Xe.side=Mt,Xe.needsUpdate=!0,Ze=!0}}Ze===!0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J))}P.setRenderTarget(ge,Se,we),P.setClearColor(se,Te),qe!==void 0&&(te.viewport=qe),P.toneMapping=Ie}function Kr(T,V,q){let te=V.isScene===!0?V.overrideMaterial:null;for(let J=0,he=T.length;J<he;J++){let ge=T[J],{object:Se,geometry:we,group:Ie}=ge,qe=ge.material;qe.allowOverride===!0&&te!==null&&(qe=te),Se.layers.test(q.layers)&&Rs(Se,V,q,we,qe,Ie)}}function Rs(T,V,q,te,J,he){T.onBeforeRender(P,V,q,te,J,he),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(P,V,q,te,T,he),J.transparent===!0&&J.side===ci&&J.forceSinglePass===!1?(J.side=Rt,J.needsUpdate=!0,P.renderBufferDirect(q,V,te,J,T,he),J.side=Fr,J.needsUpdate=!0,P.renderBufferDirect(q,V,te,J,T,he),J.side=ci):P.renderBufferDirect(q,V,te,J,T,he),T.onAfterRender(P,V,q,te,J,he)}function Jr(T,V,q){V.isScene!==!0&&(V=Z);let te=Q.get(T),J=b.state.lights,he=b.state.shadowsArray,ge=J.state.version,Se=ke.getParameters(T,J.state,he,V,q,b.state.lightProbeGridArray),we=ke.getProgramCacheKey(Se),Ie=te.programs;te.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,te.fog=V.fog;let qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;te.envMap=re.get(T.envMap||te.environment,qe),te.envMapRotation=te.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Es),Ie=new Map,te.programs=Ie);let Ze=Ie.get(we);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===ge)return Ls(T,Se),Ze}else Se.uniforms=ke.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,q,Se),T.onBeforeCompile(Se,P),Ze=ke.acquireProgram(Se,we),Ie.set(we,Ze),te.uniforms=Se.uniforms;let Pe=te.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Pe.clippingPlanes=Fe.uniform),Ls(T,Se),te.needsLights=(function(Ke){return Ke.isMeshLambertMaterial||Ke.isMeshToonMaterial||Ke.isMeshPhongMaterial||Ke.isMeshStandardMaterial||Ke.isShadowMaterial||Ke.isShaderMaterial&&Ke.lights===!0})(T),te.lightsStateVersion=ge,te.needsLights&&(Pe.ambientLightColor.value=J.state.ambient,Pe.lightProbe.value=J.state.probe,Pe.directionalLights.value=J.state.directional,Pe.directionalLightShadows.value=J.state.directionalShadow,Pe.spotLights.value=J.state.spot,Pe.spotLightShadows.value=J.state.spotShadow,Pe.rectAreaLights.value=J.state.rectArea,Pe.ltc_1.value=J.state.rectAreaLTC1,Pe.ltc_2.value=J.state.rectAreaLTC2,Pe.pointLights.value=J.state.point,Pe.pointLightShadows.value=J.state.pointShadow,Pe.hemisphereLights.value=J.state.hemi,Pe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Pe.spotLightMatrix.value=J.state.spotLightMatrix,Pe.spotLightMap.value=J.state.spotLightMap,Pe.pointShadowMatrix.value=J.state.pointShadowMatrix),te.lightProbeGrid=b.state.lightProbeGridArray.length>0,te.currentProgram=Ze,te.uniformsList=null,Ze}function Ps(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Da.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ls(T,V){let q=Q.get(T);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}Ci.setAnimationLoop(function(T){Ya&&Ya(T)}),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){Ya=T,ct.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},ct.addEventListener("sessionstart",bs),ct.addEventListener("sessionend",ws),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0)return void Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(z===!0)return;I!==null&&I.renderStart(T,V);let q=ct.enabled===!0&&ct.isPresenting===!0,te=D!==null&&(B===null||q)&&D.begin(P,B);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ct.enabled!==!0||ct.isPresenting!==!0||D!==null&&D.isCompositing()!==!1||(ct.cameraAutoUpdate===!0&&ct.updateCamera(V),V=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,V,B),b=_e.get(T,L.length),b.init(V),b.state.textureUnits=K.getTextureUnits(),L.push(b),w.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),M.setFromProjectionMatrix(w,Ti,V.reversedDepth),U=this.localClippingEnabled,N=Fe.init(this.clippingPlanes,U),y=Ce.get(T,E.length),y.init(),E.push(y),ct.enabled===!0&&ct.isPresenting===!0){let he=P.xr.getDepthSensingMesh();he!==null&&Za(he,V,-1/0,P.sortObjects)}Za(T,V,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(Ae,R,V.reversedDepth),ae=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ae&&Je.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),N===!0&&Fe.beginShadows();let J=b.state.shadowsArray;if(We.render(J,T,V),N===!0&&Fe.endShadows(),(te&&D.hasRenderPass())===!1){let he=y.opaque,ge=y.transmissive;if(b.setupLights(),V.isArrayCamera){let Se=V.cameras;if(ge.length>0)for(let we=0,Ie=Se.length;we<Ie;we++)Cs(he,ge,T,Se[we]);ae&&Je.render(T);for(let we=0,Ie=Se.length;we<Ie;we++){let qe=Se[we];As(y,T,qe,qe.viewport)}}else ge.length>0&&Cs(he,ge,T,V),ae&&Je.render(T),As(y,T,V)}B!==null&&Y===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),te&&D.end(P),T.isScene===!0&&T.onAfterRender(P,T,V),$e.resetDefaultState(),oe=-1,fe=null,L.pop(),L.length>0?(b=L[L.length-1],K.setTextureUnits(b.state.textureUnits),N===!0&&Fe.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,E.pop(),y=E.length>0?E[E.length-1]:null,I!==null&&I.renderEnd()},this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,V,q){let te=Q.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Q.get(T.texture).__webglTexture=V,Q.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let q=Q.get(T);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,q=0){B=T,k=V,Y=q;let te=null,J=!1,he=!1;if(T){let ge=Q.get(T);if(ge.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(F.FRAMEBUFFER,ge.__webglFramebuffer),Ee.copy(T.viewport),Me.copy(T.scissor),$=T.scissorTest,ie.viewport(Ee),ie.scissor(Me),ie.setScissorTest($),void(oe=-1);if(ge.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(ge.__hasExternalTextures)K.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ie=T.depthTexture;if(ge.__boundDepthTexture!==Ie){if(Ie!==null&&Q.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(he=!0);let we=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(te=Array.isArray(we[V])?we[V][q]:we[V],J=!0):te=T.samples>0&&K.useMultisampledRTT(T)===!1?Q.get(T).__webglMultisampledFramebuffer:Array.isArray(we)?we[q]:we,Ee.copy(T.viewport),Me.copy(T.scissor),$=T.scissorTest}else Ee.copy(S).multiplyScalar(ee).floor(),Me.copy(C).multiplyScalar(ee).floor(),$=O;if(q!==0&&(te=X),ie.bindFramebuffer(F.FRAMEBUFFER,te)&&ie.drawBuffers(T,te),ie.viewport(Ee),ie.scissor(Me),ie.setScissorTest($),J){let ge=Q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,ge.__webglTexture,q)}else if(he){let ge=V;for(let Se=0;Se<T.textures.length;Se++){let we=Q.get(T.textures[Se]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Se,we.__webglTexture,q,ge)}}else if(T!==null&&q!==0){let ge=Q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,q)}oe=-1},this.readRenderTargetPixels=function(T,V,q,te,J,he,ge,Se=0){if(!T||!T.isWebGLRenderTarget)return void Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){ie.bindFramebuffer(F.FRAMEBUFFER,we);try{let Ie=T.textures[Se],qe=Ie.format,Ze=Ie.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),!me.textureFormatReadable(qe))return void Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Ze))return void Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=T.width-te&&q>=0&&q<=T.height-J&&F.readPixels(V,q,te,J,it.convert(qe),it.convert(Ze),he)}finally{let Ie=B!==null?Q.get(B).__webglFramebuffer:null;ie.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,V,q,te,J,he,ge,Se=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){if(V>=0&&V<=T.width-te&&q>=0&&q<=T.height-J){ie.bindFramebuffer(F.FRAMEBUFFER,we);let Ie=T.textures[Se],qe=Ie.format,Ze=Ie.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),!me.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.bufferData(F.PIXEL_PACK_BUFFER,he.byteLength,F.STREAM_READ),F.readPixels(V,q,te,J,it.convert(qe),it.convert(Ze),0);let Ke=B!==null?Q.get(B).__webglFramebuffer:null;ie.bindFramebuffer(F.FRAMEBUFFER,Ke);let mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ju(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,he),F.deleteBuffer(Pe),F.deleteSync(mt),he}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,q=0){let te=Math.pow(2,-q),J=Math.floor(T.image.width*te),he=Math.floor(T.image.height*te),ge=V!==null?V.x:0,Se=V!==null?V.y:0;K.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ge,Se,J,he),ie.unbindTexture()},this.copyTextureToTexture=function(T,V,q=null,te=null,J=0,he=0){let ge,Se,we,Ie,qe,Ze,Pe,Ke,mt,dt=T.isCompressedTexture?T.mipmaps[he]:T.image;if(q!==null)ge=q.max.x-q.min.x,Se=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,qe=q.min.y,Ze=q.isBox3?q.min.z:0;else{let jt=Math.pow(2,-J);ge=Math.floor(dt.width*jt),Se=Math.floor(dt.height*jt),we=T.isDataArrayTexture?dt.depth:T.isData3DTexture?Math.floor(dt.depth*jt):1,Ie=0,qe=0,Ze=0}te!==null?(Pe=te.x,Ke=te.y,mt=te.z):(Pe=0,Ke=0,mt=0);let nt=it.convert(V.format),Xe=it.convert(V.type),st;V.isData3DTexture?(K.setTexture3D(V,0),st=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),st=F.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),st=F.TEXTURE_2D),ie.activeTexture(F.TEXTURE0),ie.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),ie.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ie.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);let Mt=ie.getParameter(F.UNPACK_ROW_LENGTH),Ue=ie.getParameter(F.UNPACK_IMAGE_HEIGHT),Be=ie.getParameter(F.UNPACK_SKIP_PIXELS),Ut=ie.getParameter(F.UNPACK_SKIP_ROWS),Ka=ie.getParameter(F.UNPACK_SKIP_IMAGES);ie.pixelStorei(F.UNPACK_ROW_LENGTH,dt.width),ie.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt.height),ie.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),ie.pixelStorei(F.UNPACK_SKIP_ROWS,qe),ie.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);let $r=T.isDataArrayTexture||T.isData3DTexture,Mr=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let jt=Q.get(T),Vi=Q.get(V),ni=Q.get(jt.__renderTarget),Ja=Q.get(Vi.__renderTarget);ie.bindFramebuffer(F.READ_FRAMEBUFFER,ni.__webglFramebuffer),ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let Gi=0;Gi<we;Gi++)$r&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(T).__webglTexture,J,Ze+Gi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(V).__webglTexture,he,mt+Gi)),F.blitFramebuffer(Ie,qe,ge,Se,Pe,Ke,ge,Se,F.DEPTH_BUFFER_BIT,F.NEAREST);ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||Q.has(T)){let jt=Q.get(T),Vi=Q.get(V);ie.bindFramebuffer(F.READ_FRAMEBUFFER,j),ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let ni=0;ni<we;ni++)$r?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,J,Ze+ni):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,J),Mr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vi.__webglTexture,he,mt+ni):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vi.__webglTexture,he),J!==0?F.blitFramebuffer(Ie,qe,ge,Se,Pe,Ke,ge,Se,F.COLOR_BUFFER_BIT,F.NEAREST):Mr?F.copyTexSubImage3D(st,he,Pe,Ke,mt+ni,Ie,qe,ge,Se):F.copyTexSubImage2D(st,he,Pe,Ke,Ie,qe,ge,Se);ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mr?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(st,he,Pe,Ke,mt,ge,Se,we,nt,Xe,dt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(st,he,Pe,Ke,mt,ge,Se,we,nt,dt.data):F.texSubImage3D(st,he,Pe,Ke,mt,ge,Se,we,nt,Xe,dt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,he,Pe,Ke,ge,Se,nt,Xe,dt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,he,Pe,Ke,dt.width,dt.height,nt,dt.data):F.texSubImage2D(F.TEXTURE_2D,he,Pe,Ke,ge,Se,nt,Xe,dt);ie.pixelStorei(F.UNPACK_ROW_LENGTH,Mt),ie.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue),ie.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),ie.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),ie.pixelStorei(F.UNPACK_SKIP_IMAGES,Ka),he===0&&V.generateMipmaps&&F.generateMipmap(st),ie.unbindTexture()},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),ie.unbindTexture()},this.resetState=function(){k=0,Y=0,B=null,ie.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}},bl=2,wt=10,rr=48,gf=6,wl=.06,jn=.25,qn=100,Yn=30,Al=.4,vf=.5,_f=.05,xf=50,Cl=.15,Mf=1.6,yf=1,Sf=.7,Ef=14e4,Tf=54e3,bf=`
  attribute float aSize;
  attribute float aAlpha;
  varying float vAlpha;

  void main() {
    vAlpha = aAlpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
  }
`,wf=`
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;function Af(e,t={}){if(!e||e.dataset.particleInitialized==="true")return null;let i=e.querySelector("canvas.wordmark-canvas"),r=e.querySelector("[data-particle-source]");if(!i||!r||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return null;let a=i,n=r,s=t.color||"#f7f7f5",o=t.entranceSeconds||1.75;e.dataset.particleInitialized="true";let l;try{l=new mf({canvas:a,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return null}l.setClearColor(0,0);let h=new lc,u=new Ha,f=null,c=null,p=null,g=1,d=1,_=0,m=new Float32Array(0),v=new Float32Array(0),x=new Float32Array(0),y=new Float64Array(0),b=1,E=1,L=new Float32Array(1),D=new Float32Array(1),P=new Float32Array(1),z=new Float32Array(1),I=new Float32Array(1),X=document.createElement("canvas"),j=X.getContext("2d",{willReadFrequently:!0}),H=-9999,k=-9999,Y=-9999,B=-9999,oe=!1,fe=0,Ee=performance.now(),Me=!1,$=!0,se=0,Te=!1,le=0,ye=!1,ee=(K,re)=>Math.min(E-1,Math.max(0,re))*b+Math.min(b-1,Math.max(0,K));function Ae(){b=Math.ceil(g/wt),E=Math.ceil(d/wt);let K=b*E;L=new Float32Array(K),D=new Float32Array(K),P=new Float32Array(K),z=new Float32Array(K),I=new Float32Array(K)}function R(){if(!j)return new Float32Array(0);X.width=g,X.height=d,j.clearRect(0,0,g,d),j.fillStyle="#fff",j.textAlign="center",j.textBaseline="middle";let K=getComputedStyle(n),re=K.fontFamily||getComputedStyle(document.body).fontFamily,ve=K.fontWeight||"700",be=Array.from(n.querySelectorAll("[data-particle-line]")).filter($e=>getComputedStyle($e).display!=="none").map($e=>$e.textContent?.trim()||"").filter(Boolean);be.length===0&&be.push(n.textContent?.trim()||"KOSX");let pe=(be.length-1)/2,ke=1.2,de=Math.min(d*(be.length>1?.19:.3),g/4.5,132);j.font=`${ve} ${de}px ${re}`;let Ce=be.map(($e,xt)=>j.measureText($e).width+2*Math.abs(xt-pe)*ke*de),_e=Math.max(...Ce);_e>g*.94&&(de*=g*.94/_e,j.font=`${ve} ${de}px ${re}`);let Fe=de*1.04,We=de*ke;be.forEach(($e,xt)=>{let F=g/2+(xt-pe)*We,Ai=d/2+(xt-pe)*Fe;j.fillText($e,F,Ai)});let Je=j.getImageData(0,0,g,d).data,tt=g<640,rt=tt?Tf:Ef,Qe=tt?1.35:1,it=[];for(let $e=0;$e<d;$e+=Qe){let xt=Math.floor($e);for(let F=0;F<g;F+=Qe){let Ai=Math.floor(F);if(Je[(xt*g+Ai)*4+3]<=52||it.length/3>=rt)continue;let Zr=tt?.78:Sf;(Ai*17+xt*31)%100/100>=Zr||it.push(F-g/2+(Math.random()-.5)*Qe*2.4,d/2-$e+(Math.random()-.5)*Qe*2.4,0)}}return new Float32Array(it)}function S(){f&&h.remove(f),c?.dispose(),p?.dispose(),f=null,c=null,p=null}function C(K){let re=R();if(re.length===0)return!1;_=re.length/3,m=new Float32Array(re.length),v=new Float32Array(re),x=new Float32Array(re.length),y=new Float64Array(_),y.fill(-1);let ve=new Float32Array(_),be=new Float32Array(_);le=performance.now()/1e3;let pe=Math.min(window.devicePixelRatio||1,bl),ke=window.innerWidth<=1024?yf:Mf;for(let Ce=0;Ce<_;Ce++){let _e=Ce*3;if(K){let Fe=g*(.34+Math.random()*.36);m[_e]=v[_e]+Fe+(Math.random()-.5)*90,m[_e+1]=v[_e+1]+(Math.random()-.5)*d*.46}else m[_e]=v[_e],m[_e+1]=v[_e+1];m[_e+2]=0,ve[Ce]=ke*pe,be[Ce]=1}S(),c=new ht,c.setAttribute("position",new Pt(m,3)),c.setAttribute("aSize",new Pt(ve,1)),c.setAttribute("aAlpha",new Pt(be,1));let de;try{de=new je(s)}catch{de=new je("#f7f7f5")}return p=new Xt({uniforms:{uColor:{value:de}},vertexShader:bf,fragmentShader:wf,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}),f=new yc(c,p),f.frustumCulled=!1,h.add(f),!0}function O(K,re,ve,be){let pe=Math.max(0,Math.floor((K-rr)/wt)),ke=Math.min(b-1,Math.ceil((K+rr)/wt)),de=Math.max(0,Math.floor((re-rr)/wt)),Ce=Math.min(E-1,Math.ceil((re+rr)/wt));for(let _e=de;_e<=Ce;_e++)for(let Fe=pe;Fe<=ke;Fe++){let We=Fe*wt,Je=_e*wt,tt=We-K,rt=Je-re,Qe=Math.hypot(tt,rt);if(Qe>=rr)continue;Qe=Math.max(4,Qe);let it=rr/Qe,$e=_e*b+Fe;L[$e]+=ve*it,D[$e]+=be*it}}function M(K,re,ve,be){let pe=ve-K,ke=be-re,de=Math.max(1,Math.ceil(Math.hypot(pe,ke)/gf));for(let Ce=0;Ce<=de;Ce++){let _e=Ce/de;O(K+pe*_e,re+ke*_e,pe,ke)}}function N(K){let re=e.getBoundingClientRect(),ve=(K.clientX-re.left)/Math.max(1,re.width)*g,be=(K.clientY-re.top)/Math.max(1,re.height)*d;ve<0||be<0||ve>g||be>d||(H=ve,k=be,oe||(Y=ve,B=be),oe=!0)}function U(){oe&&((H!==Y||k!==B)&&M(Y,B,H,k),Y=H,B=k)}function w(){oe=!1,H=k=Y=B=-9999}function G(K){for(let re=0;re<E;re++)for(let ve=0;ve<b;ve++){let be=re*b+ve,pe=ee(ve-1,re-1),ke=ee(ve-1,re),de=ee(ve-1,re+1),Ce=ee(ve+1,re-1),_e=ee(ve+1,re),Fe=ee(ve+1,re+1),We=ee(ve,re-1),Je=ee(ve,re+1),tt=.5*L[pe]+L[ke]+.5*L[de]-.5*L[Ce]-L[_e]-.5*L[Fe],rt=.5*D[pe]+D[We]+.5*D[Ce]-.5*D[de]-D[Je]-.5*D[Fe];I[be]=(tt+rt)*jn}for(let re=0;re<E;re++)for(let ve=0;ve<b;ve++){let be=re*b+ve,pe=ee(ve-1,re-1),ke=ee(ve-1,re),de=ee(ve-1,re+1),Ce=ee(ve+1,re-1),_e=ee(ve+1,re),Fe=ee(ve+1,re+1),We=ee(ve,re-1),Je=ee(ve,re+1),tt=L[be]+(.5*I[pe]+I[ke]+.5*I[de]-.5*I[Ce]-I[_e]-.5*I[Fe])*jn,rt=D[be]+(.5*I[pe]+I[We]+.5*I[Ce]-.5*I[de]-I[Je]-.5*I[Fe])*jn,Qe=Math.hypot(tt,rt);Qe>qn&&(tt*=qn/Qe,rt*=qn/Qe),P[be]=tt*.99,z[be]=rt*.99}[L,P]=[P,L],[D,z]=[z,D]}function W(K,re){for(let be=0;be<_;be++){let pe=be*3,ke=K-le;if(!Te&&ke<o){let $e=Math.min(1,Math.max(0,ke/o)),xt=.018+(1-Math.pow(1-$e,3))*.075;m[pe]+=(v[pe]-m[pe])*xt,m[pe+1]+=(v[pe+1]-m[pe+1])*xt,x[pe]=0,x[pe+1]=0;continue}let de=Math.min(g-1,Math.max(0,m[pe]+g/2)),Ce=Math.min(d-1,Math.max(0,d/2-m[pe+1])),_e=Math.min(b-1,Math.max(0,Math.floor(de/wt))),Fe=Math.min(E-1,Math.max(0,Math.floor(Ce/wt))),We=ee(_e,Fe),Je=ee(_e+1,Fe),tt=ee(_e,Fe+1),rt=de%wt/wt,Qe=Ce%wt/wt,it=Math.hypot(x[pe],x[pe+1]);if(it>vf?y[be]=-1:y[be]<0&&(y[be]=K),y[be]>=0){let $e=Math.min(1,(K-y[be])/_f),xt=$e*$e*(3-2*$e),F=xf*re*(Cl+(1-Cl)*xt);x[pe]+=(v[pe]-m[pe])*F,x[pe+1]+=(v[pe+1]-m[pe+1])*F}x[pe]+=((1-rt)*L[We]+rt*L[Je]+Qe*L[tt])*wl,x[pe+1]-=((1-Qe)*D[We]+rt*D[Je]+Qe*D[tt])*wl,it=Math.hypot(x[pe],x[pe+1]),it>Yn&&(x[pe]*=Yn/it,x[pe+1]*=Yn/it),m[pe]+=x[pe],m[pe+1]+=x[pe+1],x[pe]*=Al,x[pe+1]*=Al}let ve=c?.getAttribute("position");ve&&(ve.needsUpdate=!0)}function Z(K){if(!Me)return;let re=K/1e3,ve=Math.min(.05,Math.max(.001,(K-Ee)/1e3));Ee=K,U(),G(re),W(re,ve),l.render(h,u),fe=requestAnimationFrame(Z)}function ae(){Me||!$||document.hidden||ye||(Me=!0,Ee=performance.now(),fe=requestAnimationFrame(Z))}function xe(){Me=!1,cancelAnimationFrame(fe)}function ue(K=!1){if(g=Math.max(1,Math.round(e.clientWidth)),d=Math.max(1,Math.round(e.clientHeight)),g<10||d<10)return;let re=Math.min(window.devicePixelRatio||1,bl);l.setPixelRatio(re),l.setSize(g,d,!1),u=new Ha(-g/2,g/2,d/2,-d/2,.1,10),u.position.z=1,Ae(),C(K)&&(e.classList.add("is-live"),K||(le=-1/0))}function me(){document.hidden?xe():ae()}function ie(K){K.preventDefault(),xe(),e.classList.remove("is-live")}e.addEventListener("pointerenter",N),e.addEventListener("pointermove",N),e.addEventListener("click",N),e.addEventListener("pointerleave",w);let Ne=new ResizeObserver(()=>{Te&&(window.clearTimeout(se),se=window.setTimeout(()=>{Math.abs(Math.round(e.clientWidth)-g)<2&&Math.abs(Math.round(e.clientHeight)-d)<2||ue(!1)},180))});Ne.observe(e);let Q=new IntersectionObserver(K=>{$=K[0]?.isIntersecting??!0,$?ae():xe()});return Q.observe(e),document.addEventListener("visibilitychange",me),a.addEventListener("webglcontextlost",ie),ue(!0),window.setTimeout(()=>{Te=!0},o*1e3+50),ae(),{dispose(){ye||(ye=!0,xe(),Ne.disconnect(),Q.disconnect(),document.removeEventListener("visibilitychange",me),a.removeEventListener("webglcontextlost",ie),e.removeEventListener("pointerenter",N),e.removeEventListener("pointermove",N),e.removeEventListener("click",N),e.removeEventListener("pointerleave",w),S(),l.dispose(),e.classList.remove("is-live"))}}}return ou(Cf);})();
/*! Bundled license information:

three/build/three.core.min.js:
three/build/three.module.min.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
