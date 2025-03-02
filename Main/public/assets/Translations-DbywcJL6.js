import{j as e,b as x,t as p,r as g,M as T,a as A}from"./app-DV9Enp-g.js";import{M as L,L as V}from"./Layout-4Yl3SVGs.js";import{D as y}from"./DataTable-CNld8Vzj.js";import{u as M}from"./useDebounce-BZ39Q-Ut.js";import{u as w}from"./use_table_data-Dqvu1vx3.js";import{u as E}from"./useTranslation-B_tqir3M.js";import{P as S,a as C,b as P}from"./popover-trigger-bCcTHQgY.js";import{a as v,I}from"./input-BY0aN3Wh.js";import{T as k}from"./Trash-D0bDSe0A.js";import{B as u,u as F}from"./_rollupPluginBabelHelpers-3bc641ae-fORsOdMW.js";import{P as B}from"./popover-header-BFLhNdCb.js";import{P as K,B as z}from"./popover-arrow-CcvyMVbB.js";import{P as R}from"./popover-body-Dv7tL-tk.js";import{P as O}from"./popover-footer-DDOtcm9S.js";import{F as G,a as H}from"./formik.esm-57hcKfmx.js";import{F as Q}from"./FieldRenderer-Ds4nkS0Z.js";import{E as W}from"./Edit2-BR-gFx13.js";import{A as $,D as q,a as J,M as U}from"./platform_roles-C6HFwJ_S.js";import{I as X}from"./input-group-B3tcnjIp.js";import{I as Y}from"./input-element-D56J_yd_.js";import{S as Z}from"./SearchNormal-wibGUap8.js";import"./ArrowDown2-BYk1CnSd.js";import"./tab-panels-vLnb1L73.js";import"./form-label-BRtD5jpz.js";import"./format-DNgEHVKA.js";import"./Clock-DOUKTfsE.js";import"./ProfileCircle-kDGWjsR6.js";import"./accordion-panel-Bmo1-bWf.js";import"./Pagination-BLwLKiba.js";import"./tr-DmrvMSh4.js";import"./ArrowRight2-Cm1MJeQW.js";import"./index-CuMLbxmh.js";import"./use-boolean-S__THBuA.js";import"./tag-DOREaL30.js";import"./ImageUpload-D5P185gr.js";import"./index-DOaWT0nF.js";import"./switch-B97T3cky.js";import"./use-checkbox-CXyjvu9v.js";import"./visually-hidden.style-Bfr07Aua.js";import"./use-radio-6sqGZ21b.js";import"./radio-BkVBa4kL.js";function _({isIconButton:o=!1,id:n,refresh:r}){const{t:a}=E(),c=async()=>{try{const{data:i}=await x.delete(`/admin/languages/translations/${n}`);i!=null&&i.message&&(p.success(a("Translation deleted successfully")),r())}catch(i){p.error(i.response.data.message||a("Something went wrong"))}};return e.jsxDEV(S,{children:({onClose:i})=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(C,{children:o?e.jsxDEV(v,{"aria-label":a("Delete"),icon:e.jsxDEV(k,{size:"18"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:49,columnNumber:23},this),colorScheme:"red",className:"hover:bg-red-100",variant:"outline"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:47,columnNumber:15},this):e.jsxDEV(u,{variant:"outline",w:"full",colorScheme:"red",mr:3,children:a("Delete")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:55,columnNumber:15},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:45,columnNumber:11},this),e.jsxDEV(P,{children:[e.jsxDEV(B,{pt:4,fontWeight:"bold",border:"0",children:a("Delete translation")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:61,columnNumber:13},this),e.jsxDEV(K,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:64,columnNumber:13},this),e.jsxDEV(R,{className:"whitespace-normal",children:a("Are you sure you want to delete this translation?")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:65,columnNumber:13},this),e.jsxDEV(O,{border:"0",display:"flex",alignItems:"center",justifyContent:"flex-end",pb:4,children:e.jsxDEV(z,{size:"sm",children:[e.jsxDEV(u,{colorScheme:"secondary",className:"bg-secondary-200 text-secondary-800 hover:bg-secondary-300",onClick:i,children:a("Cancel")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:76,columnNumber:17},this),e.jsxDEV(u,{colorScheme:"red",className:"bg-red-400 hover:bg-red-500",onClick:c,children:a("Delete")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:83,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:75,columnNumber:15},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:68,columnNumber:13},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:60,columnNumber:11},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:44,columnNumber:9},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/DeleteTranslation.tsx",lineNumber:42,columnNumber:5},this)}function j({isEditing:o,items:n,refresh:r}){const{t:a}=E(),{isOpen:c,onOpen:i,onClose:l}=F(),N=window.location.pathname.split("/")[3],f=g.useRef(null),s=[{name:"key",label:"Key",type:"text",placeholder:"Key"},{name:"value",label:"Value",type:"text",placeholder:"Value"}];return e.jsxDEV(e.Fragment,{children:[o?e.jsxDEV(v,{"aria-label":"Edit",icon:e.jsxDEV(W,{size:"18"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:44,columnNumber:17},this),colorScheme:"blue",className:"hover:bg-blue-100",variant:"outline",onClick:i},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:42,columnNumber:9},this):e.jsxDEV(u,{onClick:i,leftIcon:e.jsxDEV($,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:53,columnNumber:21},this),variant:"solid",colorScheme:"primary",className:"bg-primary-400 hover:bg-primary-500",children:a("Create translation")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:51,columnNumber:9},this),e.jsxDEV(q,{isOpen:c,placement:"right",size:"md",onClose:l,finalFocusRef:f,children:[e.jsxDEV(T,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:62,columnNumber:9},this),e.jsxDEV(J,{children:[e.jsxDEV(L,{className:"border-b border-black/5",children:[a(o?"Edit":"Add")," ",a("translation")]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:64,columnNumber:11},this),e.jsxDEV(G,{initialValues:{code:N,key:(n==null?void 0:n.key)||"",value:(n==null?void 0:n.value)||""},onSubmit:async(m,{setSubmitting:d})=>{try{if(d(!0),!(n!=null&&n.id)){await x.post("/admin/languages/translations",m),p.success(a("Translation added successfully")),l(),r();return}await x.put("/admin/languages/translations/"+(n==null?void 0:n.id),m),p.success(a("Translation updated successfully")),l(),r()}catch(t){p.error(t.response.data.message||a("Something went wrong"),{position:"bottom-right"})}finally{d(!1)}},children:({isSubmitting:m,setFieldValue:d})=>e.jsxDEV(H,{children:[e.jsxDEV(A,{className:"space-y-4",children:e.jsxDEV("div",{className:"flex flex-col gap-5",children:s.map(t=>e.jsxDEV(Q,{item:t,setFieldValue:d},t.name,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:102,columnNumber:23},this))},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:100,columnNumber:19},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:99,columnNumber:17},this),e.jsxDEV(U,{borderTopWidth:"1px",borderColor:"secondary.200",className:"absolute bg-white w-full bottom-0",children:[e.jsxDEV(u,{variant:"outline",w:"full",mr:3,onClick:l,children:"Cancel"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:111,columnNumber:19},this),e.jsxDEV(u,{variant:"solid",colorScheme:"primary",w:"full",type:"submit",isLoading:m,className:"bg-primary-400 hover:bg-primary-500",children:"Save"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:114,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:106,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:98,columnNumber:15},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:68,columnNumber:11},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:63,columnNumber:9},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:61,columnNumber:7},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Languages/ManageTranslation.tsx",lineNumber:40,columnNumber:5},this)}const Oe=({code:o})=>{const[n,r]=g.useState(1),[a,c]=g.useState(10),[i,l]=g.useState(""),[N,f]=g.useState([]),{t:s}=E(),m=M(i,300),{items:d,refresh:t,meta:h,isLoading:D}=w("/admin/languages/api/"+o,{page:n,limit:a,search:m});return e.jsxDEV(V,{title:s("Editing")+` - ${o}`,children:e.jsxDEV("div",{className:"p-6",children:[e.jsxDEV("div",{className:"flex justify-between mb-5",children:[e.jsxDEV("div",{children:e.jsxDEV(X,{children:[e.jsxDEV(Y,{pointerEvents:"none",children:e.jsxDEV(Z,{size:18},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:35,columnNumber:17},void 0)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:34,columnNumber:15},void 0),e.jsxDEV(I,{type:"search",placeholder:s("Search"),onChange:b=>l(b.target.value),className:"bg-white"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:37,columnNumber:15},void 0)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:33,columnNumber:13},void 0)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:32,columnNumber:11},void 0),e.jsxDEV(j,{isEditing:!1,items:{},refresh:t},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:45,columnNumber:11},void 0)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:31,columnNumber:9},void 0),e.jsxDEV(y,{data:d,isLoading:D,sorting:N,setSorting:f,pagination:{total:h==null?void 0:h.total,page:n,setPage:r,limit:a,setLimit:c},structure:[{accessorKey:"id",header:()=>s("Id")},{accessorKey:"key",header:()=>s("Key")},{accessorKey:"value",header:()=>s("Value")},{accessorKey:"actions",enableSorting:!1,header:()=>s("Actions"),cell:({row:b})=>e.jsxDEV("div",{className:"flex gap-2",children:[e.jsxDEV(_,{isIconButton:!0,id:b.original.id,refresh:t},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:78,columnNumber:19},void 0),e.jsxDEV(j,{isEditing:!0,items:b.original,refresh:t},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:79,columnNumber:19},void 0)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:77,columnNumber:17},void 0)}]},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:47,columnNumber:9},void 0)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:30,columnNumber:7},void 0)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Languages/Translations.tsx",lineNumber:29,columnNumber:5},void 0)};export{Oe as default};
