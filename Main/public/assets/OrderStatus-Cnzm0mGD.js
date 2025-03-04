const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["PendingTable-CS3FvE83.js","app-p3FobzL5.js","app-D9cDmbVs.css","DataTable-Dg7GowNh.js","Pagination-CMtLnuaE.js","useTranslation-jbS6ivqO.js","tr-EefZORq7.js","_rollupPluginBabelHelpers-3bc641ae-btRFf1Fy.js","ArrowDown2-DM1rERZ4.js","ArrowRight2-OjDQz_0a.js","use_table_data-mkdPdtFX.js","currency_formatter-Bz1CGAdC.js","DeleteOrder-CRJPmCIE.js","order_status-CM2aeLIm.js","string_formatter-C0BoQtKC.js","index-CuMLbxmh.js","PrintInvoice-D1BOIbqI.js","input-cx0LjzCS.js","popover-trigger-D9abZrFQ.js","divider-CHTuOarn.js","generate_invoice-BYY1s1ph.js","DiscountTypeSelect-BDVkpI5Y.js","use-radio-BmR54MTD.js","visually-hidden.style-Bfr07Aua.js","platform_roles-D3HjcMuK.js","Eye-BnFH3BGQ.js","switch-CU8nt3W3.js","use-checkbox-fX-NceDq.js","textarea-pmQ9KYwB.js","Trash-CzXP6s3A.js","popover-arrow-cOi1xr-l.js","popover-header-DBc-fTNW.js","popover-body-Cnhf1gCL.js","popover-footer-Bj-c8mCp.js","ReadyOrderTable-HELlc0Hm.js","PersonSelection-CzdxAugX.js","useDebounce-C3LzOcPg.js","User-B7pdFi89.js","ProcessingTable-BL4hdETr.js","OnDeliveryTable-NbMwblPy.js","CompletedTable-D0SPYjtj.js","CancelledTable-CBP6A5oO.js","FailedTable-DdUM9c0A.js"])))=>i.map(i=>d[i]);
import{R as O,j as e,C as n,S as B,t as S,b as I,m as L,r as i,x as d,_ as h}from"./app-p3FobzL5.js";import{u as z}from"./use_table_data-mkdPdtFX.js";import{u as M}from"./useDebounce-C3LzOcPg.js";import{O as F}from"./order_status-CM2aeLIm.js";import{s as H}from"./string_formatter-C0BoQtKC.js";import{H as U,F as W}from"./platform_roles-D3HjcMuK.js";import{T as k,M as A,a as V,A as j,b as y,c as G}from"./ArrowDown2-DM1rERZ4.js";import{S as $}from"./switch-CU8nt3W3.js";import{B as _}from"./_rollupPluginBabelHelpers-3bc641ae-btRFf1Fy.js";import{B as q,I as J}from"./input-cx0LjzCS.js";import{M as K,a as Q}from"./menu-option-group-DwzCappL.js";import{u as X}from"./useTranslation-jbS6ivqO.js";import{T as Y,a as Z,b as c,c as ee,d as p}from"./tab-panels-DHV8yGV0.js";const g=new F;function re({rows:o}){const[t,f]=O.useState(),[a,s]=O.useState(),[x,T]=O.useState(),[w,R]=O.useState(""),P=M(w,300),{items:N,isLoading:C}=z("/api/users",{search:P,page:1,limit:20,type:"delivery"}),D=!!(o!=null&&o.some(r=>r.type==="delivery")),v=async r=>{var m,E;if("status"in r&&D&&(r.status==="on_delivery"||r.status==="completed")&&o.some(l=>!l.deliveryManId)){S.error(n("Select delivery man first"));return}try{const{data:u}=await I.patch("/api/orders/bulk/update",{ids:o.map(l=>l.id),...r});u!=null&&u.success?(S.success(n("Order updated successfully")),await L(l=>l.startsWith("/api/orders"))):S.error(n("Failed to update order"))}catch(u){const l=((E=(m=u==null?void 0:u.response)==null?void 0:m.data)==null?void 0:E.message)||n("Something went wrong");S.error(l)}};return e.jsxDEV("div",{className:"flex-wrap lg:flex-nowrap items-center gap-4 ml-auto flex",children:[e.jsxDEV(U,{gap:3,children:[e.jsxDEV(k,{color:"secondary.400",className:"whitespace-nowrap",children:n("Payment status")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:86,columnNumber:9},this),e.jsxDEV($,{colorScheme:"green",size:"lg",isChecked:a,onChange:r=>{const m=r.target.checked;s(m),v({paymentStatus:m})}},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:89,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:85,columnNumber:7},this),D&&e.jsxDEV(A,{matchWidth:!0,children:[e.jsxDEV(V,{as:_,variant:"outline",rightIcon:e.jsxDEV(j,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:107,columnNumber:24},this),onClick:r=>r.stopPropagation(),color:x?"inherit":"",children:(x==null?void 0:x.fullName)||n("Select delivery man")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:104,columnNumber:11},this),e.jsxDEV(y,{className:"p-1",children:C?e.jsxDEV(U,{color:"secondary.400",children:[e.jsxDEV(B,{size:"sm"},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:116,columnNumber:17},this),e.jsxDEV(k,{fontSize:"sm",color:"secondary.400",py:2,px:3,children:n("Loading...")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:117,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:115,columnNumber:15},this):N.length?e.jsxDEV(e.Fragment,{children:[e.jsxDEV(q,{className:"pb-1 border-b border-black/5",children:e.jsxDEV(J,{type:"search",placeholder:"Search delivery man",onChange:r=>R(r.target.value)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:124,columnNumber:19},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:123,columnNumber:17},this),N==null?void 0:N.map(r=>e.jsxDEV(G,{onClick:()=>{T(N.find(m=>m.id===r.id)),v({deliveryManId:r.id})},children:r.fullName},r.id,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:133,columnNumber:21},this))]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:122,columnNumber:15},this):e.jsxDEV(k,{fontSize:"sm",color:"secondary.400",py:2,px:3,children:n("No delivery man available")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:148,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:113,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:103,columnNumber:9},this),e.jsxDEV(A,{children:[e.jsxDEV(V,{as:_,variant:"outline",rightIcon:e.jsxDEV(j,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:160,columnNumber:22},this),color:t?t==null?void 0:t.fgColor:"",borderColor:t==null?void 0:t.fgColor,children:t?n(H(t==null?void 0:t.label)):n("Status")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:157,columnNumber:9},this),e.jsxDEV(y,{className:"p-1 min-w-[250px]",children:e.jsxDEV(K,{value:(t==null?void 0:t.value)||"",onChange:r=>{f(g.getStatusDetails(r)),v({status:r})},children:g.all().map(r=>!D&&r.value==="on_delivery"?null:e.jsxDEV(Q,{value:r.value,color:r.fgColor,icon:null,children:n(r.label)},r.value,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:176,columnNumber:17},this))},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:167,columnNumber:11},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:166,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:156,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/BulkUpdateOrder.tsx",lineNumber:83,columnNumber:5},this)}const te=i.lazy(()=>h(()=>import("./PendingTable-CS3FvE83.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))),se=i.lazy(()=>h(()=>import("./ReadyOrderTable-HELlc0Hm.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37]))),ne=i.lazy(()=>h(()=>import("./ProcessingTable-BL4hdETr.js"),__vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37]))),oe=i.lazy(()=>h(()=>import("./OnDeliveryTable-NbMwblPy.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37]))),ae=i.lazy(()=>h(()=>import("./CompletedTable-D0SPYjtj.js"),__vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37]))),ie=i.lazy(()=>h(()=>import("./CancelledTable-CBP6A5oO.js"),__vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37]))),ue=i.lazy(()=>h(()=>import("./FailedTable-DdUM9c0A.js"),__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37]))),b=({children:o})=>e.jsxDEV(i.Suspense,{fallback:e.jsxDEV(U,{className:"flex items-center justify-center h-32 bg-white",children:e.jsxDEV(B,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:21,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:20,columnNumber:9},void 0),children:o},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:18,columnNumber:5},void 0);function ve({index:o}){const{t}=X(),[f,a]=i.useState([]);return e.jsxDEV("div",{className:"@container",children:e.jsxDEV(Y,{defaultIndex:o,isLazy:!0,children:[e.jsxDEV(W,{justify:"space-between",className:"h-12 flex-wrap gap-y-1.5 gap-x-4",children:f.length?e.jsxDEV(re,{rows:f},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:65,columnNumber:13},this):e.jsxDEV("div",{className:"w-full overflow-x-auto",children:e.jsxDEV(Z,{className:"flex whitespace-nowrap",children:[e.jsxDEV(c,{as:d,href:"/admin/order-status/pending",children:t("Pending")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:41,columnNumber:17},this),e.jsxDEV(c,{as:d,href:"/admin/order-status/processing",children:t("Processing")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:44,columnNumber:17},this),e.jsxDEV(c,{as:d,href:"/admin/order-status/ready",children:t("Ready")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:47,columnNumber:17},this),e.jsxDEV(c,{as:d,href:"/admin/order-status/on-delivery",children:t("On delivery")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:50,columnNumber:17},this),e.jsxDEV(c,{as:d,href:"/admin/order-status/completed",children:t("Completed")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:53,columnNumber:17},this),e.jsxDEV(c,{as:d,href:"/admin/order-status/failed",children:t("Failed")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:56,columnNumber:17},this),e.jsxDEV(c,{as:d,href:"/admin/order-status/cancelled",children:t("Cancelled")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:59,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:40,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:39,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:37,columnNumber:9},this),e.jsxDEV(ee,{children:[e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(te,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:72,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:71,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:70,columnNumber:11},this),e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(ne,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:77,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:76,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:75,columnNumber:11},this),e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(se,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:82,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:81,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:80,columnNumber:11},this),e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(oe,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:87,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:86,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:85,columnNumber:11},this),e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(ae,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:92,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:91,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:90,columnNumber:11},this),e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(ue,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:97,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:96,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:95,columnNumber:11},this),e.jsxDEV(p,{children:e.jsxDEV(b,{children:e.jsxDEV(ie,{setSelectedRow:s=>a(s)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:102,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:101,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:100,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:69,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:36,columnNumber:7},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Admin/OrderStatus/OrderStatus.tsx",lineNumber:35,columnNumber:5},this)}export{ve as O};
