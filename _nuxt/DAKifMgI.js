import{d as R,s as S,t as k,v as y,K as V,L as I,_ as q,M as E,y as O,x as W,N as F,a as J,O as C,r as L,P as Q,Q as X,R as G,S as Y,F as Z,T as U,U as tt,J as et,V as st,i as rt,W as B,X as nt,Y as at,m as it,Z as ot}from"./Df9-Uwu6.js";const $=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ct(s,n){n?n={...$,...n}:n=$;const r=K(n);return r.dispatch(s),r.toString()}const lt=Object.freeze(["prototype","__proto__","constructor"]);function K(s){let n="",r=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let i="";const f=a.length;f<10?i="unknown:["+a+"]":i=a.slice(8,f-1),i=i.toLowerCase();let c=null;if((c=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):s.ignoreUnknown||this.unkown(t,i);else{let d=Object.keys(t);s.unorderedObjects&&(d=d.sort());let o=[];s.respectType!==!1&&!j(t)&&(o=lt),s.excludeKeys&&(d=d.filter(l=>!s.excludeKeys(l)),o=o.filter(l=>!s.excludeKeys(l))),e("object:"+(d.length+o.length)+":");const m=l=>{this.dispatch(l),e(":"),s.excludeValues||this.dispatch(t[l]),e(",")};for(const l of d)m(l);for(const l of o)m(l)}},array(t,a){if(a=a===void 0?s.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const c of t)this.dispatch(c);return}const i=new Map,f=t.map(c=>{const d=K(s);d.dispatch(c);for(const[o,m]of d.getContext())i.set(o,m);return d.toString()});return r=i,f.sort(),this.array(f,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),j(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const A="[native code] }",ut=A.length;function j(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-ut)===A}class b{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||dt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const dt={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},ft={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,a=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,f=t<<16|a<<8|i;for(let c=0;c<4&&e*8+c*6<s.sigBytes*8;c++)r.push(n.charAt(f>>>6*(3-c)&63))}return r.join("")}},ht={parse(s){const n=s.length,r=[];for(let e=0;e<n;e++)r[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new b(r,n)}},pt={parse(s){return ht.parse(unescape(encodeURIComponent(s)))}};class yt{constructor(){this._data=new b,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new b,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=pt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,t),this._data.sigBytes-=a}return new b(r,a)}}class mt extends yt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const N=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],gt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class _t extends mt{constructor(){super(...arguments),this._hash=new b([...N])}reset(){super.reset(),this._hash=new b([...N])}_doProcessBlock(n,r){const e=this._hash.words;let t=e[0],a=e[1],i=e[2],f=e[3],c=e[4],d=e[5],o=e[6],m=e[7];for(let l=0;l<64;l++){if(l<16)x[l]=n[r+l]|0;else{const _=x[l-15],P=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,p=x[l-2],H=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;x[l]=P+x[l-7]+H+x[l-16]}const v=c&d^~c&o,D=t&a^t&i^a&i,h=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),w=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),g=m+w+v+gt[l]+x[l],u=h+D;m=o,o=d,d=c,c=f+g|0,f=i,i=a,a=t,t=g+u|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+f|0,e[4]=e[4]+c|0,e[5]=e[5]+d|0,e[6]=e[6]+o|0,e[7]=e[7]+m|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function wt(s){return new _t().finalize(s).toString(ft)}function bt(s,n={}){const r=typeof s=="string"?s:ct(s,n);return wt(r).slice(0,10)}const vt={class:"w-full flex justify-between"},xt=y("p",{class:"font-bold text-xl text-white"},"PORTFOLIO.",-1),Bt={class:"flex items-center"},St=y("a",{href:"#contact",class:"text-secondary font-bold mr-8"},"Contact Me",-1),Dt={class:"flex items-center gap-3"},Ct=["href"],kt=["src"],Ot=R({__name:"Navbar",props:{content:{type:Object,required:!0}},setup(s){return(n,r)=>(S(),k("div",vt,[xt,y("div",Bt,[St,y("div",Dt,[(S(!0),k(V,null,I(s.content.allSocialLinks,e=>(S(),k("a",{href:e.link,key:e.link,target:"_blank",class:"block rounded-full bg-secondary p-1"},[y("img",{src:e.icon.url,class:"w-4"},null,8,kt)],8,Ct))),128))])])]))}}),Pt={},zt={class:"dotted-box h-[150px] w-[270px]"};function Lt(s,n){return S(),k("div",zt)}const Rt=q(Pt,[["render",Lt]]);function Ft(s,n){return S(),E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[O("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})])}const Ht={class:"w-full hero-gradient-center relative overflow-hidden"},Mt={class:"hero-gradient container relative mx-auto p-14 min-h-[800px]"},Tt={class:"text-xl absolute top-1/2 -translate-y-1/2 ml-28"},Ut=y("p",{class:"text-primary font-medium mb-4"},"Hello Everyone.",-1),$t=y("h1",{class:"text-7xl font-bold text-white flex flex-col gap-3"},[y("span",null,"I'M FARHAN"),y("span",null,"ABBAS")],-1),jt={class:"bg-primary p-1 flex items-stretch max-w-max mt-14"},Nt={class:"font-bold text-white bg-secondary px-8 py-2 max-w-[300px]"},Et={class:"p-5"},Kt=["src"],At=R({__name:"Hero",props:{content:{type:Object,required:!0}},setup(s){return(n,r)=>{const e=Ot,t=Rt;return S(),k("div",Ht,[y("div",Mt,[O(e,{content:s.content},null,8,["content"]),y("div",Tt,[Ut,$t,y("div",jt,[y("p",Nt,W(s.content.mainSection.designation),1),y("div",Et,[O(F(Ft),{class:"textsecondary w-8"})])])]),y("img",{src:s.content.mainSection.heroImage.url,class:"absolute right-[19%] bottom-0 w-[400px]"},null,8,Kt)]),O(t,{class:"absolute bottom-0 left-0"})])}}}),Vt=s=>s==="defer"||s===!1;function It(...s){var D;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,e,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=J(),i=e,f=()=>C.value,c=()=>a.isHydrating?a.payload.data[r]:a.static.data[r];t.server=t.server??!0,t.default=t.default??f,t.getCachedData=t.getCachedData??c,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??C.deep,t.dedupe=t.dedupe??"cancel";const d=()=>t.getCachedData(r,a)!=null;if(!a._asyncData[r]||!t.immediate){(D=a.payload._errors)[r]??(D[r]=C.errorValue);const h=t.deep?L:Q;a._asyncData[r]={data:h(t.getCachedData(r,a)??t.default()),pending:L(!d()),error:X(a.payload._errors,r),status:L("idle"),_default:t.default}}const o={...a._asyncData[r]};delete o._default,o.refresh=o.execute=(h={})=>{if(a._asyncDataPromises[r]){if(Vt(h.dedupe??t.dedupe))return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if((h._initial||a.isHydrating&&h._initial!==!1)&&d())return Promise.resolve(t.getCachedData(r,a));o.pending.value=!0,o.status.value="pending";const w=new Promise((g,u)=>{try{g(i(a))}catch(_){u(_)}}).then(async g=>{if(w.cancelled)return a._asyncDataPromises[r];let u=g;t.transform&&(u=await t.transform(g)),t.pick&&(u=Wt(u,t.pick)),a.payload.data[r]=u,o.data.value=u,o.error.value=C.errorValue,o.status.value="success"}).catch(g=>{if(w.cancelled)return a._asyncDataPromises[r];o.error.value=tt(g),o.data.value=F(t.default()),o.status.value="error"}).finally(()=>{w.cancelled||(o.pending.value=!1,delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=w,a._asyncDataPromises[r]},o.clear=()=>qt(a,r);const m=()=>o.refresh({_initial:!0}),l=t.server!==!1&&a.payload.serverRendered;{const h=et();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const u=h._nuxtOnBeforeMountCbs;G(()=>{u.forEach(_=>{_()}),u.splice(0,u.length)}),Y(()=>u.splice(0,u.length))}l&&a.isHydrating&&(o.error.value||d())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):h&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(m):t.immediate&&m();const w=st();if(t.watch){const u=Z(t.watch,()=>o.refresh());w&&U(u)}const g=a.hook("app:data:refresh",async u=>{(!u||u.includes(r))&&await o.refresh()});w&&U(g)}const v=Promise.resolve(a._asyncDataPromises[r]).then(()=>o);return Object.assign(v,o),v}function qt(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=C.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=C.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function Wt(s,n){const r={};for(const e of n)r[e]=s[e];return r}function Jt(s,n,r){const[e={},t]=typeof n=="string"?[{},n]:[n,r],a=rt(()=>B(s)),i=e.key||bt([t,typeof a.value=="string"?a.value:"",...Qt(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);const f=i===t?"$f"+i:i;if(!e.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:d,default:o,transform:m,pick:l,watch:v,immediate:D,getCachedData:h,deep:w,dedupe:g,...u}=e,_=nt({...at,...u,cache:typeof e.cache=="boolean"?void 0:e.cache}),P={server:c,lazy:d,default:o,transform:m,pick:l,immediate:D,getCachedData:h,deep:w,dedupe:g,watch:v===!1?[]:[_,a,...v||[]]};let p;return It(f,()=>{var T;(T=p==null?void 0:p.abort)==null||T.call(p),p=typeof AbortController<"u"?new AbortController:{};const M=B(e.timeout);let z;return M&&(z=setTimeout(()=>p.abort(),M),p.signal.onabort=()=>clearTimeout(z)),(e.$fetch||globalThis.$fetch)(a.value,{signal:p.signal,..._}).finally(()=>{clearTimeout(z)})},P)}function Qt(s){var r;const n=[((r=B(s.method))==null?void 0:r.toUpperCase())||"GET",B(s.baseURL)];for(const e of[s.params||s.query]){const t=B(e);if(!t)continue;const a={};for(const[i,f]of Object.entries(t))a[B(i)]=B(f);n.push(a)}return n}const Xt=s=>{const{query:n,variables:r={}}=s,e=it();return Jt("https://graphql.datocms.com",{key:"content",method:"POST",headers:{Authorization:`Bearer ${e.public.datoCmsToken}`,"X-Environment":e.public.datoCmsEnv},body:{query:n,variables:r},transform:({data:t,errors:a})=>{if(a)throw a();return t}},"$Un1AVPDX4C")},Gt=async()=>{const s=`
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
  `,{data:n,error:r}=await Xt({query:s});if(r.value)throw r.value.message;return n},te=R({__name:"index",async setup(s){let n,r;const e=([n,r]=ot(()=>Gt()),n=await n,r(),n);return(t,a)=>{const i=At;return S(),E(i,{content:F(e),class:"section-border"},null,8,["content"])}}});export{te as default};
