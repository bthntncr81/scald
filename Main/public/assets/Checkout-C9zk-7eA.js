import{X as v,u as k,f as V,r as D,a2 as x,j as e,S as F,b as g,t as S,x as C}from"./app-DV9Enp-g.js";import{C as E}from"./CustomerLayout-Bc5Kc1H7.js";import{c as w}from"./currency_formatter-Bz1CGAdC.js";import{F as q,a as I,b as h,c as b}from"./formik.esm-57hcKfmx.js";import{c as A,a as u}from"./index.esm-DH7tFHsH.js";import{u as P}from"./validate_required_variants-CWNFFnRe.js";import{u as T}from"./useTranslation-B_tqir3M.js";import{a as M,F as N,I as j}from"./input-BY0aN3Wh.js";import{A as B}from"./ArrowLeft-Kwu2HS8-.js";import{F as L}from"./platform_roles-C6HFwJ_S.js";import{B as d}from"./_rollupPluginBabelHelpers-3bc641ae-fORsOdMW.js";import"./CustomerHeader-Yt-OgDBY.js";import"./use-radio-6sqGZ21b.js";import"./visually-hidden.style-Bfr07Aua.js";import"./TickCircle-C8Z4cRgD.js";import"./index-CuMLbxmh.js";import"./Edit2-BR-gFx13.js";import"./ArrowDown2-BYk1CnSd.js";import"./tr-DmrvMSh4.js";import"./radio-BkVBa4kL.js";import"./checkbox-0eFyDNwp.js";import"./use-checkbox-CXyjvu9v.js";import"./popover-trigger-bCcTHQgY.js";import"./divider-ChBlpOfM.js";import"./Trash-D0bDSe0A.js";import"./textarea-7dmbfoGY.js";import"./popover-anchor-BlKiDovh.js";import"./input-group-B3tcnjIp.js";import"./input-element-D56J_yd_.js";import"./SearchNormal-wibGUap8.js";import"./popover-body-Dv7tL-tk.js";import"./Minus-hQCtIxHU.js";const O=A({firstName:u().required("First name is required"),lastName:u().required("Last name is required"),email:u().email("Invalid email address").required("Full name is required"),phoneNumber:u().required("Phone number is required"),address:u().required("Address is required"),paymentMethod:u().required("Payment method is required")});function xe(){const{t:r}=T(),{props:{auth:m}}=v(),{data:c}=k("/api/user/payment-methods",V),n=P(),y=[{type:"group",items:[{label:"First name",name:"firstName",type:"text",placeholder:"Enter your first name"},{label:"First name",name:"lastName",type:"text",placeholder:"Enter your last name"}]},{label:"Email",name:"email",type:"email",placeholder:"Enter your email address",disabled:!0},{label:"Phone",name:"phoneNumber",type:"tel",placeholder:"Enter your phone number"},{label:"Address",name:"address",type:"text",placeholder:"Enter your address"}];D.useEffect(()=>{m||x.visit("/login")},[]);const f=()=>{n.resetPOS()};return m?e.jsxDEV(E,{children:e.jsxDEV(q,{initialValues:{firstName:m.firstName||"",lastName:m.lastName||"",email:m.email||"initialEmail",phoneNumber:m.phoneNumber||"",address:m.address||"",paymentMethod:""},validationSchema:O,onSubmit:async(l,o)=>{const i={userId:m==null?void 0:m.id,discount:n.discount,type:n==null?void 0:n.type,paymentType:l==null?void 0:l.paymentMethod,customerNote:n.note,paymentStatus:!1,deliveryDate:new Date().toISOString().split("T")[0],orderItems:n.POSItems.map(t=>({...t,menuItemId:t.id,variants:Array.from(t.variants.values()).map(a=>({...a,options:Array.from(a.option.values())||[],optionIds:Array.from(a.option.keys())||[]}))||[],addons:Array.from(t.addons.values()).map(a=>({...a}))||[]}))||[]};try{const{data:t,status:a}=await g.put("/api/users/profile/update",l);if(t!=null&&t.success&&a===200||a===201){const{data:s}=await g.post("/api/user/orders",i);s!=null&&s.success&&(i==null?void 0:i.paymentType)==="cash"&&(f(),x.visit("/confirm")),s!=null&&s.success&&(i==null?void 0:i.paymentType)!=="cash"&&(f(),window.location.href=s==null?void 0:s.redirectUrl)}}catch(t){S.error(r(t.response.data.message||"Failed to checkout"))}finally{o.setSubmitting(!1)}},children:({isSubmitting:l})=>e.jsxDEV("main",{className:"bg-white",children:e.jsxDEV(I,{children:e.jsxDEV("section",{className:"container",children:[e.jsxDEV("div",{className:"flex items-center gap-4 py-9",children:[e.jsxDEV(M,{as:C,href:"/","aria-label":"left arrow",className:"rounded-full min-w-14 min-h-14 bg-transparent border border-secondary-200",children:e.jsxDEV(B,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:185,columnNumber:21},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:179,columnNumber:19},this),e.jsxDEV("h2",{className:"text-3xl",children:r("Checkout")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:187,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:178,columnNumber:17},this),e.jsxDEV("div",{className:"mb-10",children:[e.jsxDEV("h4",{className:"mb-2",children:r("Delivery address")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:190,columnNumber:19},this),e.jsxDEV("div",{className:"max-w-[460px] mb-10",children:e.jsxDEV(e.Fragment,{children:y.map((o,i)=>{var t;return o.type==="group"?e.jsxDEV("div",{className:"grid grid-cols-2 gap-4 mb-4",children:(t=o.items)==null?void 0:t.map(a=>e.jsxDEV(h,{name:a.name,children:({field:s,meta:p})=>e.jsxDEV(N,{isInvalid:!!(p.touched&&p.error),children:[e.jsxDEV(j,{rounded:"full",type:a.type,placeholder:r(a.placeholder),className:"h-12 bg-white",...s},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:200,columnNumber:37},this),e.jsxDEV(b,{children:r(p.error||"")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:208,columnNumber:37},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:199,columnNumber:35},this)},a.name,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:197,columnNumber:31},this))},i,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:195,columnNumber:27},this):e.jsxDEV(h,{name:o.name,children:({field:a,meta:s})=>e.jsxDEV(N,{isInvalid:!!(s.touched&&s.error),children:[e.jsxDEV(j,{...o,rounded:"full",type:o.type,placeholder:r(o.placeholder||""),className:"h-12 bg-white mb-4",...a},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:218,columnNumber:33},this),e.jsxDEV(b,{children:r(s.error||"")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:227,columnNumber:33},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:217,columnNumber:31},this)},i,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:215,columnNumber:27},this)})},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:192,columnNumber:21},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:191,columnNumber:19},this),e.jsxDEV("h4",{className:"mb-2",children:r("Payment method")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:235,columnNumber:19},this),e.jsxDEV("div",{className:"flex items-center gap-2",children:e.jsxDEV(h,{name:"paymentMethod",children:({field:o,meta:i,form:t})=>{var a;return e.jsxDEV(N,{isInvalid:!!(i.touched&&i.error),children:[e.jsxDEV(L,{className:"gap-2",children:[e.jsxDEV(d,{variant:"outline",colorScheme:"outline","data-selected":o.value==="cash",className:"h-12 uppercase border rounded-full px-8 data-[selected=true]:border-primary-400 data-[selected=true]:text-primary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-400",onClick:()=>{t.setFieldValue("paymentMethod","cash"),n.changePaymentType("cash")},children:"Cash"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:241,columnNumber:29},this),(a=c==null?void 0:c.content)==null?void 0:a.map(s=>e.jsxDEV(d,{variant:"outline",colorScheme:"outline","data-selected":o.value===s.key,className:"h-12 uppercase border rounded-full px-8 data-[selected=true]:border-primary-400 data-[selected=true]:text-primary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-400",onClick:()=>{t.setFieldValue("paymentMethod",s.key),n.changePaymentType(s.key)},children:s.name},s.id,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:255,columnNumber:31},this))]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:240,columnNumber:27},this),e.jsxDEV(b,{children:r(i.error||"")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:271,columnNumber:27},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:239,columnNumber:25},this)}},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:237,columnNumber:21},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:236,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:189,columnNumber:17},this),e.jsxDEV("div",{className:"max-w-[675px] py-10 border-t border-t-black/10",children:[e.jsxDEV("div",{className:"flex justify-between items-center py-2 border-b border-black/5 px-4",children:[e.jsxDEV("p",{className:"text-lg",children:r("Total")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:279,columnNumber:21},this),e.jsxDEV("p",{className:"text-xl font-bold",children:w(n.total)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:280,columnNumber:21},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:278,columnNumber:19},this),e.jsxDEV("div",{className:"flex gap-4 items-center justify-between pt-3",children:[e.jsxDEV(d,{as:C,href:"/",variant:"outline",colorScheme:"secondary",className:"button-outline",children:r("Back")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:283,columnNumber:21},this),e.jsxDEV(d,{type:"submit",variant:"solid",colorScheme:"primary",className:"button-primary",disabled:l,isLoading:l,children:r("Confirm order")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:292,columnNumber:21},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:282,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:277,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:177,columnNumber:15},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:176,columnNumber:13},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:175,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:106,columnNumber:7},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:105,columnNumber:5},this):e.jsxDEV(E,{children:e.jsxDEV("div",{className:"flex flex-col items-center justify-center h-screen",children:e.jsxDEV(F,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:98,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:97,columnNumber:9},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Customer/Checkout.tsx",lineNumber:96,columnNumber:7},this)}export{xe as default};
