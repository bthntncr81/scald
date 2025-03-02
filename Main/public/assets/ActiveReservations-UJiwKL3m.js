import{r as c,l as j,j as s,t as N,b as x}from"./app-DV9Enp-g.js";import{B as P}from"./BulkDeleteButton-BS9Zhni5.js";import{r as D}from"./reservation_status-xTaWxlBJ.js";import{u as y}from"./useTranslation-B_tqir3M.js";import{H as W}from"./platform_roles-C6HFwJ_S.js";import{M as V,a as B,A as S,b as k,c as C}from"./ArrowDown2-BYk1CnSd.js";import{B as M}from"./_rollupPluginBabelHelpers-3bc641ae-fORsOdMW.js";import{F,V as O,E as $,D as z}from"./ViewReservation-D5zktvRk.js";import{T as Q}from"./ToolBar-CxhXniPl.js";import{D as q}from"./DataTable-CNld8Vzj.js";import{L as w}from"./Layout-4Yl3SVGs.js";import{u as G}from"./use_table_data-Dqvu1vx3.js";import{u as J}from"./useDebounce-BZ39Q-Ut.js";import{f as v}from"./format-DNgEHVKA.js";import"./popover-trigger-bCcTHQgY.js";import"./Trash-D0bDSe0A.js";import"./popover-header-BFLhNdCb.js";import"./popover-arrow-CcvyMVbB.js";import"./popover-body-Dv7tL-tk.js";import"./popover-footer-DDOtcm9S.js";import"./FieldRenderer-CQ2ywok4.js";import"./formik.esm-57hcKfmx.js";import"./input-BY0aN3Wh.js";import"./index-CuMLbxmh.js";import"./NewCustomerSchema-C2AlfYyz.js";import"./index.esm-DH7tFHsH.js";import"./Minus-hQCtIxHU.js";import"./use-boolean-S__THBuA.js";import"./index-sP33oPgb.js";import"./Calendar-DOPv7dkO.js";import"./ArrowRight2-Cm1MJeQW.js";import"./Clock-DOUKTfsE.js";import"./string_formatter-C0BoQtKC.js";import"./form-label-BRtD5jpz.js";import"./input-group-B3tcnjIp.js";import"./input-addon-BXuOB8U6.js";import"./textarea-7dmbfoGY.js";import"./FilterSearch-1uMYI-Ol.js";import"./menu-option-group-DB7xgu7N.js";import"./Edit2-BR-gFx13.js";import"./parse-B5ZfNmo9.js";import"./Eye-14Q_bsoa.js";import"./input-element-D56J_yd_.js";import"./SearchNormal-wibGUap8.js";import"./Export-C4Sp0XrA.js";import"./Pagination-BLwLKiba.js";import"./tr-DmrvMSh4.js";import"./tab-panels-vLnb1L73.js";import"./ProfileCircle-kDGWjsR6.js";import"./accordion-panel-Bmo1-bWf.js";function X({rows:t}){const[a,b]=c.useState(),{t:r}=y(),{mutate:d}=j(),g=async n=>{b(n),N.promise(x.patch("/api/reservations/bulk/update",{ids:t.map(l=>l.id),status:n.value}),{loading:r("Status updating..."),success:()=>(d(l=>l.startsWith("/api/reservations")),r("Reservation updated successfully")),error:()=>r("Reservation update failed")})},f=n=>{N.promise(x.delete("/api/reservations/bulk/delete",{data:{ids:n.map(l=>l.id)}}),{loading:r("Deleting..."),success:()=>(d(l=>l.startsWith("/api/reservations")),r("Reservation deleted successfully")),error:()=>r("Reservation deletion failed")})};return s.jsxDEV("div",{className:"w-full flex items-center justify-end",children:s.jsxDEV("div",{className:"flex items-center gap-4",children:[s.jsxDEV(W,{className:"ml-auto",children:s.jsxDEV(V,{children:[s.jsxDEV(B,{as:M,variant:"outline",colorScheme:a==null?void 0:a.scheme,color:a==null?void 0:a.fgColor,borderColor:a==null?void 0:a.fgColor,rightIcon:s.jsxDEV(S,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:74,columnNumber:26},this),children:(a==null?void 0:a.label)||r("Bulk status")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:68,columnNumber:13},this),s.jsxDEV(k,{className:"p-1",children:D.map(n=>s.jsxDEV(C,{color:n.fgColor,bgColor:n.bgColor,onClick:()=>g(n),children:r(n.label)},n.value,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:80,columnNumber:17},this))},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:78,columnNumber:13},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:67,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:66,columnNumber:9},this),s.jsxDEV(P,{onDelete:f},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:93,columnNumber:9},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:65,columnNumber:7},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/ActiveReservations/BulkUpdateReservation.tsx",lineNumber:64,columnNumber:5},this)}function we(){const{t}=y(),[a,b]=c.useState(1),[r,d]=c.useState(10),[g,f]=c.useState(""),[n,l]=c.useState([]),[A,h]=c.useState([]),[m,T]=c.useState({}),{mutate:U}=j(),E=J(g,300),{items:K,meta:R,isLoading:I,refresh:u,isValidating:L}=G("/api/reservations",{search:E,page:a,limit:r,status:m.status,listType:"active",reservationDate:m!=null&&m.reservationDate?v(m==null?void 0:m.reservationDate,"yyyy-MM-dd"):void 0});c.useEffect(()=>{h([])},[E,a,r,L]);const H=async(e,o)=>{try{const{data:i}=await x.patch(`/api/reservations/${e}`,{status:o});i!=null&&i.success&&(N.success(t(i==null?void 0:i.message)||t("Reservation updated successfully")),U(p=>p.startsWith("/api/reservations")),u())}catch(i){N.error(t(i.response.data.message)||t("Something went wrong"))}};return s.jsxDEV(w,{title:t("Active reservations"),children:s.jsxDEV("div",{className:"p-6",children:[s.jsxDEV(Q,{bulkAction:{isBulkAction:!!A.length,BulkUpdateBar:()=>s.jsxDEV(X,{rows:A,reset:()=>h([])},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:85,columnNumber:15},this)},filter:s.jsxDEV(F,{filter:m,setFilter:T},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:88,columnNumber:19},this),exportUrl:"/api/reservations/export/all?listType=active",setSearchQuery:f},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:81,columnNumber:9},this),s.jsxDEV(q,{data:K,isLoading:I,sorting:n,setSorting:l,pagination:{total:R==null?void 0:R.total,page:a,limit:r,setPage:b,setLimit:d},onRowSelection:h,getRowId:e=>e==null?void 0:e.id,enableMultiRowSelection:!0,structure:[{accessorKey:"checkbox",id:"checkbox",enableSorting:!1,header:({table:e})=>s.jsxDEV("input",{type:"checkbox",checked:e==null?void 0:e.getIsAllRowsSelected(),onChange:e==null?void 0:e.getToggleAllRowsSelectedHandler(),className:"accent-primary-500 cursor-pointer scale-110"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:114,columnNumber:17},this),cell:({row:e})=>s.jsxDEV("input",{type:"checkbox",checked:e==null?void 0:e.getIsSelected(),onChange:e==null?void 0:e.getToggleSelectedHandler(),className:"accent-primary-500 cursor-pointer scale-110"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:122,columnNumber:17},this)},{accessorKey:"id",header:()=>t("SL"),cell:e=>e.row.index+1},{accessorKey:"createdAt",header:()=>t("Created On"),cell:({row:e})=>{var o,i;return s.jsxDEV("div",{className:"space-y-1",children:[s.jsxDEV("p",{className:"font-bold",children:v(new Date((o=e.original)==null?void 0:o.createdAt),"dd MMM yyyy")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:140,columnNumber:19},this),s.jsxDEV("p",{children:v(new Date((i=e.original)==null?void 0:i.createdAt),"hh:mm a")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:143,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:139,columnNumber:17},this)}},{accessorKey:"user.fullName",header:()=>t("Customer name")},{accessorKey:"user.phoneNumber",header:()=>t("Contact number")},{accessorKey:"reservationDate",header:()=>t("Time & Date"),cell:({row:e})=>{var o,i,p;return s.jsxDEV("div",{className:"space-y-1",children:[s.jsxDEV("p",{className:"font-bold",children:v((o=e.original)==null?void 0:o.reservationDate,"dd MMM yyyy")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:160,columnNumber:19},this),s.jsxDEV("p",{children:`${(i=e.original)==null?void 0:i.startTime} to ${(p=e.original)==null?void 0:p.endTime}`},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:164,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:159,columnNumber:17},this)}},{accessorKey:"numberOfPeople",header:()=>t("People"),cell:({row:e})=>{var o;return s.jsxDEV("span",{className:"font-bold",children:(o=e.original)==null?void 0:o.numberOfPeople},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:171,columnNumber:34},this)}},{accessorKey:"tableNumber",header:()=>t("Table No"),cell:({row:e})=>{var o;return s.jsxDEV("span",{className:"font-bold",children:(o=e.original)==null?void 0:o.tableNumber},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:176,columnNumber:34},this)}},{accessorKey:"status",header:()=>t("Status"),cell:({row:e})=>{var o;return s.jsxDEV(V,{children:[s.jsxDEV(B,{as:M,size:"sm",variant:"outline",colorScheme:"purple",className:"border-purple-500 text-purple-500 capitalize",rightIcon:s.jsxDEV(S,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:189,columnNumber:32},this),children:t((o=e.original)==null?void 0:o.status)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:183,columnNumber:19},this),s.jsxDEV(k,{className:"p-1",children:D.map(i=>s.jsxDEV(C,{color:i.fgColor,onClick:()=>H(e.original.id,i.value),children:t(i.label)},i.value,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:195,columnNumber:23},this))},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:193,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:182,columnNumber:17},this)}},{accessorKey:"actions",header:()=>t("Actions"),cell:({row:e})=>s.jsxDEV("div",{className:"flex gap-2",children:[s.jsxDEV(O,{reservation:e.original,refresh:u,isActive:!0},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:212,columnNumber:19},this),s.jsxDEV($,{reservation:e.original,refresh:u,isIconButton:!0},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:213,columnNumber:19},this),s.jsxDEV(z,{id:e.original.id,refresh:u,isIconButton:!0},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:214,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:211,columnNumber:17},this)}]},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:93,columnNumber:9},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:80,columnNumber:7},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reservations/ActiveReservations.tsx",lineNumber:79,columnNumber:5},this)}export{we as default};
