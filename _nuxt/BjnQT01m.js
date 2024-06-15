import{d as L,s as w,t as k,v as y,K as I,L as q,_ as E,M as W,N as K,y as O,z as J,x as Q,O as R,a as X,P as C,r as $,Q as G,R as Y,S as Z,T as tt,F as et,U as T,V as st,J as nt,W as rt,i as at,X as S,Y as ot,Z as it,m as ct,$ as lt}from"./Db6PFlDs.js";const U=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ut(s,r){r?r={...U,...r}:r=U;const n=A(r);return n.dispatch(s),n.toString()}const dt=Object.freeze(["prototype","__proto__","constructor"]);function A(s){let r="",n=new Map;const e=t=>{r+=t};return{toString(){return r},getContext(){return n},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const f=a.length;f<10?o="unknown:["+a+"]":o=a.slice(8,f-1),o=o.toLowerCase();let c=null;if((c=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):s.ignoreUnknown||this.unkown(t,o);else{let d=Object.keys(t);s.unorderedObjects&&(d=d.sort());let i=[];s.respectType!==!1&&!j(t)&&(i=dt),s.excludeKeys&&(d=d.filter(l=>!s.excludeKeys(l)),i=i.filter(l=>!s.excludeKeys(l))),e("object:"+(d.length+i.length)+":");const m=l=>{this.dispatch(l),e(":"),s.excludeValues||this.dispatch(t[l]),e(",")};for(const l of d)m(l);for(const l of i)m(l)}},array(t,a){if(a=a===void 0?s.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,f=t.map(c=>{const d=A(s);d.dispatch(c);for(const[i,m]of d.getContext())o.set(i,m);return d.toString()});return n=o,f.sort(),this.array(f,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),j(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const V="[native code] }",ft=V.length;function j(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-ft)===V}class b{constructor(r,n){r=this.words=r||[],this.sigBytes=n===void 0?r.length*4:n}toString(r){return(r||ht).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const e=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const ht={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const e=s.words[n>>>2]>>>24-n%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},pt={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,a=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,f=t<<16|a<<8|o;for(let c=0;c<4&&e*8+c*6<s.sigBytes*8;c++)n.push(r.charAt(f>>>6*(3-c)&63))}return n.join("")}},yt={parse(s){const r=s.length,n=[];for(let e=0;e<r;e++)n[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new b(n,r)}},mt={parse(s){return yt.parse(unescape(encodeURIComponent(s)))}};class gt{constructor(){this._data=new b,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new b,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=mt.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);n=this._data.words.splice(0,t),this._data.sigBytes-=a}return new b(n,a)}}class _t extends gt{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const N=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],xt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class wt extends _t{constructor(){super(...arguments),this._hash=new b([...N])}reset(){super.reset(),this._hash=new b([...N])}_doProcessBlock(r,n){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],f=e[3],c=e[4],d=e[5],i=e[6],m=e[7];for(let l=0;l<64;l++){if(l<16)B[l]=r[n+l]|0;else{const _=B[l-15],P=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,p=B[l-2],F=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;B[l]=P+B[l-7]+F+B[l-16]}const v=c&d^~c&i,D=t&a^t&o^a&o,h=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),x=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),g=m+x+v+xt[l]+B[l],u=h+D;m=i,i=d,d=c,c=f+g|0,f=o,o=a,a=t,t=g+u|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+f|0,e[4]=e[4]+c|0,e[5]=e[5]+d|0,e[6]=e[6]+i|0,e[7]=e[7]+m|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function bt(s){return new wt().finalize(s).toString(pt)}function vt(s,r={}){const n=typeof s=="string"?s:ut(s,r);return bt(n).slice(0,10)}const Bt={class:"w-full flex justify-between"},St=y("p",{class:"font-bold text-xl text-white"},"PORTFOLIO.",-1),Dt={class:"flex items-center"},Ct=y("a",{href:"#contact",class:"text-secondary font-bold mr-8"},"Contact Me",-1),kt={class:"flex items-center gap-3"},Ot=["href"],Pt=["src"],zt=L({__name:"Navbar",props:{content:{type:Object,required:!0}},setup(s){return(r,n)=>(w(),k("div",Bt,[St,y("div",Dt,[Ct,y("div",kt,[(w(!0),k(I,null,q(s.content.allSocialLinks,e=>(w(),k("a",{href:e.link,key:e.link,target:"_blank",class:"block rounded-full bg-secondary p-1"},[y("img",{src:e.icon.url,class:"w-4"},null,8,Pt)],8,Ot))),128))])])]))}}),$t={},Lt={class:"mx-auto max-w-[1536px] relative"};function Rt(s,r){return w(),k("div",Lt,[W(s.$slots,"default")])}const Ft=E($t,[["render",Rt]]),Ht={},Mt={class:"dotted-box h-[150px] w-[270px]"};function Tt(s,r){return w(),k("div",Mt)}const Ut=E(Ht,[["render",Tt]]);function jt(s,r){return w(),K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[O("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})])}const Nt={class:"w-full hero-gradient relative overflow-hidden"},Et=y("div",{class:"absolute right-0 top-0 h-full bg-primary lg:w-[350px] xl:w-[450px]"},null,-1),Kt={class:"absolute top-1/2 -translate-y-1/2 ml-28"},At=y("p",{class:"text-primary font-medium mb-4 lg:text-sm xl:text-xl"}," Hello Everyone. ",-1),Vt=y("h1",{class:"lg:text-5xl xl:text-6xl font-bold text-white flex flex-col gap-3"},[y("span",null,"I'M FARHAN"),y("span",null,"ABBAS")],-1),It={class:"bg-primary p-1 flex items-stretch max-w-max lg:mt-8 xl:mt-14"},qt={class:"flex items-center font-bold text-white bg-secondary lg:px-2 xl:px-4 py-2 lg:text-xs xl:text-base"},Wt={class:"lg:p-2 xl:p-3 flex items-center"},Jt=["src"],Qt=L({__name:"Hero",props:{content:{type:Object,required:!0}},setup(s){return(r,n)=>{const e=zt,t=Ft,a=Ut;return w(),k("div",Nt,[O(t,{class:"bg-secondary p-14 min-h-[100vh] xl:min-h-[700px]"},{default:J(()=>[Et,O(e,{content:s.content,class:"absolute top-0 z-10 w-full left-0 p-14"},null,8,["content"]),y("div",Kt,[At,Vt,y("div",It,[y("p",qt,Q(s.content.mainSection.designation),1),y("div",Wt,[O(R(jt),{class:"text-secondary lg:w-5 xl:w-6"})])])]),y("img",{src:s.content.mainSection.heroImage.url,class:"absolute lg:right-[220px] xl:right-[280px] bottom-0 lg:w-[300px] xl:w-[400px]"},null,8,Jt)]),_:1}),O(a,{class:"absolute bottom-0 left-0 -ml-3 -mb-3"})])}}}),Xt=s=>s==="defer"||s===!1;function Gt(...s){var D;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[n,e,t={}]=s;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=X(),o=e,f=()=>C.value,c=()=>a.isHydrating?a.payload.data[n]:a.static.data[n];t.server=t.server??!0,t.default=t.default??f,t.getCachedData=t.getCachedData??c,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??C.deep,t.dedupe=t.dedupe??"cancel";const d=()=>t.getCachedData(n,a)!=null;if(!a._asyncData[n]||!t.immediate){(D=a.payload._errors)[n]??(D[n]=C.errorValue);const h=t.deep?$:G;a._asyncData[n]={data:h(t.getCachedData(n,a)??t.default()),pending:$(!d()),error:Y(a.payload._errors,n),status:$("idle"),_default:t.default}}const i={...a._asyncData[n]};delete i._default,i.refresh=i.execute=(h={})=>{if(a._asyncDataPromises[n]){if(Xt(h.dedupe??t.dedupe))return a._asyncDataPromises[n];a._asyncDataPromises[n].cancelled=!0}if((h._initial||a.isHydrating&&h._initial!==!1)&&d())return Promise.resolve(t.getCachedData(n,a));i.pending.value=!0,i.status.value="pending";const x=new Promise((g,u)=>{try{g(o(a))}catch(_){u(_)}}).then(async g=>{if(x.cancelled)return a._asyncDataPromises[n];let u=g;t.transform&&(u=await t.transform(g)),t.pick&&(u=Zt(u,t.pick)),a.payload.data[n]=u,i.data.value=u,i.error.value=C.errorValue,i.status.value="success"}).catch(g=>{if(x.cancelled)return a._asyncDataPromises[n];i.error.value=st(g),i.data.value=R(t.default()),i.status.value="error"}).finally(()=>{x.cancelled||(i.pending.value=!1,delete a._asyncDataPromises[n])});return a._asyncDataPromises[n]=x,a._asyncDataPromises[n]},i.clear=()=>Yt(a,n);const m=()=>i.refresh({_initial:!0}),l=t.server!==!1&&a.payload.serverRendered;{const h=nt();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const u=h._nuxtOnBeforeMountCbs;Z(()=>{u.forEach(_=>{_()}),u.splice(0,u.length)}),tt(()=>u.splice(0,u.length))}l&&a.isHydrating&&(i.error.value||d())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):h&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(m):t.immediate&&m();const x=rt();if(t.watch){const u=et(t.watch,()=>i.refresh());x&&T(u)}const g=a.hook("app:data:refresh",async u=>{(!u||u.includes(n))&&await i.refresh()});x&&T(g)}const v=Promise.resolve(a._asyncDataPromises[n]).then(()=>i);return Object.assign(v,i),v}function Yt(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=C.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=C.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r].cancelled=!0,s._asyncDataPromises[r]=void 0)}function Zt(s,r){const n={};for(const e of r)n[e]=s[e];return n}function te(s,r,n){const[e={},t]=typeof r=="string"?[{},r]:[r,n],a=at(()=>S(s)),o=e.key||vt([t,typeof a.value=="string"?a.value:"",...ee(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);const f=o===t?"$f"+o:o;if(!e.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:d,default:i,transform:m,pick:l,watch:v,immediate:D,getCachedData:h,deep:x,dedupe:g,...u}=e,_=ot({...it,...u,cache:typeof e.cache=="boolean"?void 0:e.cache}),P={server:c,lazy:d,default:i,transform:m,pick:l,immediate:D,getCachedData:h,deep:x,dedupe:g,watch:v===!1?[]:[_,a,...v||[]]};let p;return Gt(f,()=>{var M;(M=p==null?void 0:p.abort)==null||M.call(p),p=typeof AbortController<"u"?new AbortController:{};const H=S(e.timeout);let z;return H&&(z=setTimeout(()=>p.abort(),H),p.signal.onabort=()=>clearTimeout(z)),(e.$fetch||globalThis.$fetch)(a.value,{signal:p.signal,..._}).finally(()=>{clearTimeout(z)})},P)}function ee(s){var n;const r=[((n=S(s.method))==null?void 0:n.toUpperCase())||"GET",S(s.baseURL)];for(const e of[s.params||s.query]){const t=S(e);if(!t)continue;const a={};for(const[o,f]of Object.entries(t))a[S(o)]=S(f);r.push(a)}return r}const se=s=>{const{query:r,variables:n={}}=s,e=ct();return te("https://graphql.datocms.com",{key:"content",method:"POST",headers:{Authorization:`Bearer ${e.public.datoCmsToken}`,"X-Environment":e.public.datoCmsEnv},body:{query:r,variables:n},transform:({data:t,errors:a})=>{if(a)throw a();return t}},"$Un1AVPDX4C")},ne=async()=>{const s=`
    {
      mainSection {
        about
        heroImage {
          url
        }
        designation
      }
      skillsSection {
        image {
          url
        }
        description
        skill {
          name
          precentage
        }
      }
      allSocialLinks {
        hide
        link
        icon {
          url
        }
      }
      team {
        name
        image {
          url
        }
        designation
      }
      footer {
        description
        buttonText
        buttonLink
        title
        image {
          url
        }
      }
      academicsSection {
        image {
          url
        }
        academicInstituions {
          name
          hide
          description
          order
        }
      }
      client {
        id
        name
        image {
          url
        }
        hide
      }
      happyClient {
        message
        client {
          id
        }
      }
      brand {
        name
        hide
        logo {
          url
        }
      }
      contactSection {
        image {
          url
        }
        contactInformation {
          title
          value
          id
        }
      }
      directionSection {
        imageLeft {
          url
        }
        imageRight {
          url
        }
        description
      }
      howDoWeShootSection {
        imageLeft {
          url
        }
        imageRight {
          url
        }
        equipment {
          name
          description
        }
      }
      howDoWeEditSection {
        image {
          url
        }
        editingSoftware {
          name
        }
      }
    }
  `,{data:r,error:n}=await se({query:s});if(n.value)throw n.value.message;return r},oe=L({__name:"index",async setup(s){let r,n;const e=([r,n]=lt(()=>ne()),r=await r,n(),r);return(t,a)=>{const o=Qt;return w(),K(o,{content:R(e),class:"section-border"},null,8,["content"])}}});export{oe as default};
