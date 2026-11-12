import{c as n,y as g,b as h,j as e,ah as v,f as s}from"./index-BVKO5O9W.js";import{D as y}from"./usarDatos-DWJA4F9-.js";/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c={name:"car",size:24,node:[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]};c.node;const O=n(c);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};r.node;const b=n(r);/**
 * @license lucide-react v1.71.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i={name:"truck",size:24,node:[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};i.node;const T=n(i),k={neutro:{caja:"bg-suave text-texto-2",punto:"bg-texto-3"},acento:{caja:"bg-acento-suave text-acento-texto",punto:"bg-acento"},listo:{caja:"bg-listo-suave text-listo-texto",punto:"bg-listo"},peligro:{caja:"bg-peligro-suave text-peligro-texto",punto:"bg-peligro"},alerta:{caja:"bg-alerta-suave text-alerta-texto",punto:"bg-alerta"},espera:{caja:"bg-estado-espera-suave text-estado-espera-texto",punto:"bg-estado-espera"},lavado:{caja:"bg-estado-lavado-suave text-estado-lavado-texto",punto:"bg-estado-lavado"},entregado:{caja:"bg-estado-entregado-suave text-estado-entregado-texto",punto:"bg-estado-entregado"}};function m({tono:a="neutro",icono:t,punto:l=!1,pulso:d=!1,className:p,children:u,...x}){const o=k[a];return e.jsxs("span",{className:s("inline-flex h-6 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-xs font-semibold",o.caja,p),...x,children:[t?e.jsx(t,{size:13,strokeWidth:2.25,"aria-hidden":"true"}):l&&e.jsxs("span",{className:"relative inline-flex h-2 w-2","aria-hidden":"true",children:[d&&e.jsx("span",{className:s("absolute inset-0 rounded-full motion-safe:animate-latido",o.punto)}),e.jsx("span",{className:s("relative h-2 w-2 rounded-full",o.punto)})]}),u]})}const j={en_espera:"espera",en_lavado:"lavado",listo:"listo",entregado:"entregado"},f={en_espera:b,en_lavado:y,listo:h,entregado:g};function D({estado:a,className:t}){return e.jsx(m,{tono:j[a],icono:f[a],className:t,children:v[a]})}export{b as C,m as I,T,O as a,D as b,f as c};
