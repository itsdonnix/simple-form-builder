var jt=Object.defineProperty,Ct=Object.defineProperties;var St=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var tt=(t,e,n)=>e in t?jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,X=(t,e)=>{for(var n in e||(e={}))At.call(e,n)&&tt(t,n,e[n]);if(Z)for(var n of Z(e))Ot.call(e,n)&&tt(t,n,e[n]);return t},et=(t,e)=>Ct(t,St(e));var A=(t,e,n)=>new Promise((r,i)=>{var u=o=>{try{s(n.next(o))}catch(c){i(c)}},l=o=>{try{s(n.throw(o))}catch(c){i(c)}},s=o=>o.done?r(o.value):Promise.resolve(o.value).then(u,l);s((n=n.apply(t,e)).next())});function w(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function rt(){return Object.create(null)}function $(t){t.forEach(nt)}function z(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Lt(t){return Object.keys(t).length===0}function st(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(st(e,n))}function Jt(t,e,n,r){if(t){const i=it(t,e,n,r);return t[0](i)}}function it(t,e,n,r){return t[1]&&r?Y(n.ctx.slice(),t[1](r(e))):n.ctx}function Kt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const u=[],l=Math.max(e.dirty.length,i.length);for(let s=0;s<l;s+=1)u[s]=e.dirty[s]|i[s];return u}return e.dirty|i}return e.dirty}function Qt(t,e,n,r,i,u){if(i){const l=it(e,n,r,u);t.p(l,i)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Zt(t){return t&&z(t.destroy)?t.destroy:w}function te(t,e){t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ne(t){return document.createElement(t)}function re(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ct(t){return document.createTextNode(t)}function oe(){return ct(" ")}function H(){return ct("")}function se(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ie(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ce(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t,e,n){const r=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Pt(t){return Array.from(t.childNodes)}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e){t.value=e==null?"":e}function fe(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function de(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let q;function R(t){q=t}function j(){if(!q)throw new Error("Function called outside component initialization");return q}function he(t){j().$$.on_mount.push(t)}function Nt(t){j().$$.after_update.push(t)}function qt(t){j().$$.on_destroy.push(t)}function Rt(){const t=j();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Dt(e,n);r.slice().forEach(u=>{u.call(t,i)})}}}function _e(t,e){j().$$.context.set(t,e)}function pe(t){return j().$$.context.get(t)}function ut(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const O=[],lt=[],I=[],U=[],at=Promise.resolve();let B=!1;function ft(){B||(B=!0,at.then(ht))}function dt(){return ft(),at}function W(t){I.push(t)}function me(t){U.push(t)}let G=!1;const J=new Set;function ht(){if(!G){G=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];R(e),It(e.$$)}for(R(null),O.length=0;lt.length;)lt.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];J.has(e)||(J.add(e),e())}I.length=0}while(O.length);for(;U.length;)U.pop()();B=!1,G=!1,J.clear()}}function It(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const T=new Set;let E;function K(){E={r:0,c:[],p:E}}function Q(){E.r||$(E.c),E=E.p}function v(t,e){t&&t.i&&(T.delete(t),t.i(e))}function C(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),E.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function _t(t,e){const n={},r={},i={$$scope:1};let u=t.length;for(;u--;){const l=t[u],s=e[u];if(s){for(const o in l)o in s||(r[o]=1);for(const o in s)i[o]||(n[o]=s[o],i[o]=1);t[u]=s}else for(const o in l)i[o]=1}for(const l in r)l in n||(n[l]=void 0);return n}function pt(t){return typeof t=="object"&&t!==null?t:{}}function ge(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function M(t){t&&t.c()}function L(t,e,n,r){const{fragment:i,on_mount:u,on_destroy:l,after_update:s}=t.$$;i&&i.m(e,n),r||W(()=>{const o=u.map(nt).filter(z);l?l.push(...o):$(o),t.$$.on_mount=[]}),s.forEach(W)}function P(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(O.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Mt(t,e,n,r,i,u,l,s=[-1]){const o=q;R(t);const c=t.$$={fragment:null,ctx:null,props:u,update:w,not_equal:i,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:rt(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};l&&l(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(m,b,..._)=>{const g=_.length?_[0]:b;return c.ctx&&i(c.ctx[m],c.ctx[m]=g)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](g),h&&Tt(t,m)),b}):[],c.update(),h=!0,$(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const m=Pt(e.target);c.fragment&&c.fragment.l(m),m.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&v(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),ht()}R(o)}class Xt{$destroy(){P(this,1),this.$destroy=w}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ye(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),typeof t.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||typeof t.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const S=[];function mt(t,e){return{subscribe:gt(t,e).subscribe}}function gt(t,e=w){let n;const r=new Set;function i(s){if(ot(t,s)&&(t=s,n)){const o=!S.length;for(const c of r)c[1](),S.push(c,t);if(o){for(let c=0;c<S.length;c+=2)S[c][0](S[c+1]);S.length=0}}}function u(s){i(s(t))}function l(s,o=w){const c=[s,o];return r.add(c),r.size===1&&(n=e(i)||w),s(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:i,update:u,subscribe:l}}function yt(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,u=e.length<2;return mt(n,l=>{let s=!1;const o=[];let c=0,h=w;const m=()=>{if(c)return;h();const _=e(r?o[0]:o,l);u?l(_):h=z(_)?_:w},b=i.map((_,g)=>st(_,D=>{o[g]=D,c&=~(1<<g),s&&m()},()=>{c|=1<<g}));return s=!0,m(),function(){$(b),h()}})}function Yt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,u,l=[],s="",o=t.split("/");for(o[0]||o.shift();i=o.shift();)n=i[0],n==="*"?(l.push("wild"),s+="/(.*)"):n===":"?(r=i.indexOf("?",1),u=i.indexOf(".",1),l.push(i.substring(1,~r?r:~u?u:i.length)),s+=!!~r&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(s+=(~r?"?":"")+"\\"+i.substring(u))):s+="/"+i;return{keys:l,pattern:new RegExp("^"+s+(e?"(?=$|/)":"/?$"),"i")}}function zt(t){let e,n,r;const i=[t[2]];var u=t[0];function l(s){let o={};for(let c=0;c<i.length;c+=1)o=Y(o,i[c]);return{props:o}}return u&&(e=new u(l()),e.$on("routeEvent",t[7])),{c(){e&&M(e.$$.fragment),n=H()},m(s,o){e&&L(e,s,o),F(s,n,o),r=!0},p(s,o){const c=o&4?_t(i,[pt(s[2])]):{};if(u!==(u=s[0])){if(e){K();const h=e;C(h.$$.fragment,1,0,()=>{P(h,1)}),Q()}u?(e=new u(l()),e.$on("routeEvent",s[7]),M(e.$$.fragment),v(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else u&&e.$set(c)},i(s){r||(e&&v(e.$$.fragment,s),r=!0)},o(s){e&&C(e.$$.fragment,s),r=!1},d(s){s&&N(n),e&&P(e,s)}}}function Ft(t){let e,n,r;const i=[{params:t[1]},t[2]];var u=t[0];function l(s){let o={};for(let c=0;c<i.length;c+=1)o=Y(o,i[c]);return{props:o}}return u&&(e=new u(l()),e.$on("routeEvent",t[6])),{c(){e&&M(e.$$.fragment),n=H()},m(s,o){e&&L(e,s,o),F(s,n,o),r=!0},p(s,o){const c=o&6?_t(i,[o&2&&{params:s[1]},o&4&&pt(s[2])]):{};if(u!==(u=s[0])){if(e){K();const h=e;C(h.$$.fragment,1,0,()=>{P(h,1)}),Q()}u?(e=new u(l()),e.$on("routeEvent",s[6]),M(e.$$.fragment),v(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else u&&e.$set(c)},i(s){r||(e&&v(e.$$.fragment,s),r=!0)},o(s){e&&C(e.$$.fragment,s),r=!1},d(s){s&&N(n),e&&P(e,s)}}}function Ht(t){let e,n,r,i;const u=[Ft,zt],l=[];function s(o,c){return o[1]?0:1}return e=s(t),n=l[e]=u[e](t),{c(){n.c(),r=H()},m(o,c){l[e].m(o,c),F(o,r,c),i=!0},p(o,[c]){let h=e;e=s(o),e===h?l[e].p(o,c):(K(),C(l[h],1,1,()=>{l[h]=null}),Q(),n=l[e],n?n.p(o,c):(n=l[e]=u[e](o),n.c()),v(n,1),n.m(r.parentNode,r))},i(o){i||(v(n),i=!0)},o(o){C(n),i=!1},d(o){l[e].d(o),o&&N(r)}}}function bt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const V=mt(null,function(e){e(bt());const n=()=>{e(bt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),be=yt(V,t=>t.location);yt(V,t=>t.querystring);const wt=gt(void 0);function we(t){return A(this,null,function*(){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");yield dt();const e=(t.charAt(0)=="#"?"":"#")+t;try{const n=X({},history.state);delete n.__svelte_spa_router_scrollX,delete n.__svelte_spa_router_scrollY,window.history.replaceState(n,void 0,e)}catch(n){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))})}function ke(t,e){if(e=Et(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return kt(t,e),{update(n){n=Et(n),kt(t,n)}}}function kt(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||Ut(r.currentTarget.getAttribute("href"))})}function Et(t){return t&&typeof t=="string"?{href:t}:t||{}}function Ut(t){history.replaceState(et(X({},history.state),{__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY}),void 0,void 0),window.location.hash=t}function Bt(t,e,n){let{routes:r={}}=e,{prefix:i=""}=e,{restoreScrollState:u=!1}=e;class l{constructor(a,f){if(!f||typeof f!="function"&&(typeof f!="object"||f._sveltesparouter!==!0))throw Error("Invalid component object");if(!a||typeof a=="string"&&(a.length<1||a.charAt(0)!="/"&&a.charAt(0)!="*")||typeof a=="object"&&!(a instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:y,keys:p}=Yt(a);this.path=a,typeof f=="object"&&f._sveltesparouter===!0?(this.component=f.component,this.conditions=f.conditions||[],this.userData=f.userData,this.props=f.props||{}):(this.component=()=>Promise.resolve(f),this.conditions=[],this.props={}),this._pattern=y,this._keys=p}match(a){if(i){if(typeof i=="string")if(a.startsWith(i))a=a.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const k=a.match(i);if(k&&k[0])a=a.substr(k[0].length)||"/";else return null}}const f=this._pattern.exec(a);if(f===null)return null;if(this._keys===!1)return f;const y={};let p=0;for(;p<this._keys.length;){try{y[this._keys[p]]=decodeURIComponent(f[p+1]||"")||null}catch(k){y[this._keys[p]]=null}p++}return y}checkConditions(a){return A(this,null,function*(){for(let f=0;f<this.conditions.length;f++)if(!(yield this.conditions[f](a)))return!1;return!0})}}const s=[];r instanceof Map?r.forEach((d,a)=>{s.push(new l(a,d))}):Object.keys(r).forEach(d=>{s.push(new l(d,r[d]))});let o=null,c=null,h={};const m=Rt();function b(d,a){return A(this,null,function*(){yield dt(),m(d,a)})}let _=null,g=null;u&&(g=d=>{d.state&&d.state.__svelte_spa_router_scrollY?_=d.state:_=null},window.addEventListener("popstate",g),Nt(()=>{_?window.scrollTo(_.__svelte_spa_router_scrollX,_.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let D=null,x=null;const vt=V.subscribe(d=>A(this,null,function*(){D=d;let a=0;for(;a<s.length;){const f=s[a].match(d.location);if(!f){a++;continue}const y={route:s[a].path,location:d.location,querystring:d.querystring,userData:s[a].userData,params:f&&typeof f=="object"&&Object.keys(f).length?f:null};if(!(yield s[a].checkConditions(y))){n(0,o=null),x=null,b("conditionsFailed",y);return}b("routeLoading",Object.assign({},y));const p=s[a].component;if(x!=p){p.loading?(n(0,o=p.loading),x=p,n(1,c=p.loadingParams),n(2,h={}),b("routeLoaded",Object.assign({},y,{component:o,name:o.name,params:c}))):(n(0,o=null),x=null);const k=yield p();if(d!=D)return;n(0,o=k&&k.default||k),x=p}f&&typeof f=="object"&&Object.keys(f).length?n(1,c=f):n(1,c=null),n(2,h=s[a].props),b("routeLoaded",Object.assign({},y,{component:o,name:o.name,params:c})).then(()=>{wt.set(c)});return}n(0,o=null),x=null,wt.set(void 0)}));qt(()=>{vt(),g&&window.removeEventListener("popstate",g)});function xt(d){ut.call(this,t,d)}function $t(d){ut.call(this,t,d)}return t.$$set=d=>{"routes"in d&&n(3,r=d.routes),"prefix"in d&&n(4,i=d.prefix),"restoreScrollState"in d&&n(5,u=d.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=u?"manual":"auto")},[o,c,h,r,i,u,xt,$t]}class Ee extends Xt{constructor(e){super();Mt(this,e,Bt,Ht,ot,{routes:3,prefix:4,restoreScrollState:5})}}export{Q as A,he as B,K as C,fe as D,ae as E,se as F,ie as G,$ as H,lt as I,ge as J,me as K,ue as L,Rt as M,de as N,Jt as O,Qt as P,Vt as Q,Ee as R,Xt as S,Kt as T,_e as U,qt as V,pe as W,dt as X,oe as a,F as b,M as c,ce as d,ne as e,te as f,Zt as g,N as h,Mt as i,C as j,P as k,ke as l,L as m,Gt as n,be as o,ct as p,le as q,we as r,ot as s,v as t,ee as u,re as v,ye as w,w as x,gt as y,H as z};