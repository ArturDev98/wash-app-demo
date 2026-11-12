import{c as i,h as m,aP as h,o as b,l as g,g as p,Z as C,Y as y,aQ as D,aR as M,aI as O,aS as S,aT as j,aU as k}from"./index-BVKO5O9W.js";import{r as o}from"./gsap-DUJTMnmH.js";/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};v.node;const z=i(v);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};l.node;const _=i(l),L=(s,a)=>s.length===a.length&&s.every((n,t)=>Object.is(n,a[t]));function e(s,a=[]){const n=o.useRef(null),t=o.useRef(s);t.current=s;const c=o.useCallback(()=>{const u=S(),r=n.current;if(r&&r.version===u&&L(r.deps,a))return r.valor;const d=t.current();return n.current={version:u,deps:a,valor:d},d},a);return o.useSyncExternalStore(h,c,c)}const x=()=>e(()=>O()),A=s=>e(()=>m(s),[s==null?void 0:s.estado]),T=s=>e(()=>s?b(s):void 0,[s]),w=s=>e(()=>C(s),[s]);function E(s={}){const a=Array.isArray(s.estado)?s.estado.join(","):s.estado,n=s.desde===void 0?void 0:new Date(s.desde).getTime(),t=s.hasta===void 0?void 0:new Date(s.hasta).getTime();return e(()=>g(s),[s.lavaderoId,s.clienteId,a,n,t])}const Q=s=>e(()=>s?j(s):void 0,[s]),U=s=>e(()=>s?M(s):void 0,[s]),V=s=>e(()=>s?k(s):void 0,[s]),Y=s=>e(()=>D(s),[s]),Z=s=>e(()=>p(s),[s]),$=s=>e(()=>y(s),[s]);export{z as D,_ as M,$ as a,A as b,T as c,Y as d,E as e,w as f,Z as g,Q as h,V as i,U as j,x as k,e as u};
