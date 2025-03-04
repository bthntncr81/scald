import{X as g,u as E,f as j,r as V,a2 as x,j as e,S as U,b as k,t as F,x as C}from"./app-p3FobzL5.js";import{C as D}from"./CustomerLayout-B-isIdbx.js";import{c as S}from"./currency_formatter-Bz1CGAdC.js";import{F as w,a as q,b as d,c as b}from"./formik.esm-C9K4NhZh.js";import{c as I,a as l}from"./index.esm-vozbR36e.js";import{u as A}from"./validate_required_variants-D2yQpkaP.js";import{u as P}from"./useTranslation-jbS6ivqO.js";import{a as T,F as N,I as y}from"./input-cx0LjzCS.js";import{A as M}from"./ArrowLeft-zVhk0ivW.js";import{F as B}from"./platform_roles-D3HjcMuK.js";import{B as c}from"./_rollupPluginBabelHelpers-3bc641ae-btRFf1Fy.js";/* empty css            */import"./CustomerHeader-C04vMqIV.js";import"./use-radio-BmR54MTD.js";import"./visually-hidden.style-Bfr07Aua.js";import"./TickCircle-BeldSHqy.js";import"./index-CuMLbxmh.js";import"./Edit2-BUbnZjhm.js";import"./ArrowDown2-DM1rERZ4.js";import"./tr-EefZORq7.js";import"./radio-Bmoumz0n.js";import"./checkbox-r7APxjHP.js";import"./use-checkbox-fX-NceDq.js";import"./popover-trigger-D9abZrFQ.js";import"./divider-CHTuOarn.js";import"./Trash-CzXP6s3A.js";import"./textarea-pmQ9KYwB.js";import"./popover-anchor-B8g7wOff.js";import"./input-group-3FZosNBb.js";import"./input-element-DW2n0nal.js";import"./SearchNormal-CydsvnL-.js";import"./popover-body-Cnhf1gCL.js";import"./Minus-CX-dPmlg.js";const L=I({firstName:l().required("First name is required"),lastName:l().required("Last name is required"),email:l().email("Invalid email address").required("Full name is required"),phoneNumber:l().required("Phone number is required"),address:l().required("Address is required"),paymentMethod:l().required("Payment method is required")});function ke(){const{t:a}=P(),{props:{auth:u}}=g(),{data:h}=E("/api/user/payment-methods",j),m=A(),v=[{type:"group",items:[{label:"First name",name:"firstName",type:"text",placeholder:"Enter your first name"},{label:"First name",name:"lastName",type:"text",placeholder:"Enter your last name"}]},{label:"Email",name:"email",type:"email",placeholder:"Enter your email address",disabled:!0},{label:"Phone",name:"phoneNumber",type:"tel",placeholder:"Enter your phone number"},{label:"Address",name:"address",type:"text",placeholder:"Enter your address"}];V.useEffect(()=>{u||x.visit("/login")},[]);const f=()=>{m.resetPOS()};return u?e.jsxDEV(D,{children:e.jsxDEV(w,{initialValues:{firstName:u.firstName||"",lastName:u.lastName||"",email:u.email||"initialEmail",phoneNumber:u.phoneNumber||"",address:u.address||"",paymentMethod:""},validationSchema:L,onSubmit:async(n,i)=>{const o={userId:u==null?void 0:u.id,discount:m.discount,type:m==null?void 0:m.type,paymentType:n==null?void 0:n.paymentMethod,customerNote:m.note,paymentStatus:!1,deliveryDate:new Date().toISOString().split("T")[0],orderItems:m.POSItems.map(t=>({...t,menuItemId:t.id,variants:Array.from(t.variants.values()).map(s=>({...s,options:Array.from(s.option.values())||[],optionIds:Array.from(s.option.keys())||[]}))||[],addons:Array.from(t.addons.values()).map(s=>({...s}))||[]}))||[]};try{const{data:t,status:s}=await k.put("/api/users/profile/update",n);if(t!=null&&t.success&&s===200||s===201){const{data:r}=await k.post("/api/user/orders",o);r!=null&&r.success&&(o==null?void 0:o.paymentType)==="cash"&&(f(),x.visit("/confirm")),r!=null&&r.success&&(o==null?void 0:o.paymentType)!=="cash"&&(f(),window.location.href=r==null?void 0:r.redirectUrl)}}catch(t){F.error(a(t.response.data.message||"Failed to checkout"))}finally{i.setSubmitting(!1)}},children:({isSubmitting:n})=>e.jsxDEV("main",{className:"bg-white",children:e.jsxDEV(q,{children:e.jsxDEV("section",{className:"container",children:[e.jsxDEV("div",{className:"flex items-center gap-4 py-9",children:[e.jsxDEV(T,{as:C,href:"/","aria-label":"left arrow",className:"rounded-full min-w-14 min-h-14 bg-transparent border border-secondary-200",children:e.jsxDEV(M,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:185,columnNumber:21},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:179,columnNumber:19},this),e.jsxDEV("h2",{className:"text-3xl",children:a("Checkout")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:187,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:178,columnNumber:17},this),e.jsxDEV("div",{className:"mb-10",children:[e.jsxDEV("h4",{className:"mb-2",children:a("Delivery address")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:190,columnNumber:19},this),e.jsxDEV("div",{className:"max-w-[460px] mb-10",children:e.jsxDEV(e.Fragment,{children:v.map((i,o)=>{var t;return i.type==="group"?e.jsxDEV("div",{className:"grid grid-cols-2 gap-4 mb-4",children:(t=i.items)==null?void 0:t.map(s=>e.jsxDEV(d,{name:s.name,children:({field:r,meta:p})=>e.jsxDEV(N,{isInvalid:!!(p.touched&&p.error),children:[e.jsxDEV(y,{rounded:"full",type:s.type,placeholder:a(s.placeholder),className:"h-12 bg-white",...r},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:200,columnNumber:37},this),e.jsxDEV(b,{children:a(p.error||"")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:208,columnNumber:37},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:199,columnNumber:35},this)},s.name,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:197,columnNumber:31},this))},o,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:195,columnNumber:27},this):e.jsxDEV(d,{name:i.name,children:({field:s,meta:r})=>e.jsxDEV(N,{isInvalid:!!(r.touched&&r.error),children:[e.jsxDEV(y,{...i,rounded:"full",type:i.type,placeholder:a(i.placeholder||""),className:"h-12 bg-white mb-4",...s},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:218,columnNumber:33},this),e.jsxDEV(b,{children:a(r.error||"")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:227,columnNumber:33},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:217,columnNumber:31},this)},o,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:215,columnNumber:27},this)})},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:192,columnNumber:21},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:191,columnNumber:19},this),e.jsxDEV("h4",{className:"mb-2",children:a("Payment method")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:235,columnNumber:19},this),e.jsxDEV("div",{className:"flex items-center gap-2",children:e.jsxDEV(d,{name:"paymentMethod",children:({field:i,meta:o,form:t})=>{var s;return e.jsxDEV(N,{isInvalid:!!(o.touched&&o.error),children:[e.jsxDEV(B,{className:"gap-2",children:[e.jsxDEV(c,{variant:"outline",colorScheme:"outline","data-selected":i.value==="cash",className:"h-12 uppercase border rounded-full px-8 data-[selected=true]:border-primary-400 data-[selected=true]:text-primary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-400",onClick:()=>{t.setFieldValue("paymentMethod","cash"),m.changePaymentType("cash")},children:"Cash"},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:241,columnNumber:29},this),(s=h==null?void 0:h.content)==null?void 0:s.map(r=>e.jsxDEV(c,{variant:"outline",colorScheme:"outline","data-selected":i.value===r.key,className:"h-12 uppercase border rounded-full px-8 data-[selected=true]:border-primary-400 data-[selected=true]:text-primary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-400",onClick:()=>{t.setFieldValue("paymentMethod",r.key),m.changePaymentType(r.key)},children:r.name},r.id,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:255,columnNumber:31},this))]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:240,columnNumber:27},this),e.jsxDEV(b,{children:a(o.error||"")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:271,columnNumber:27},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:239,columnNumber:25},this)}},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:237,columnNumber:21},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:236,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:189,columnNumber:17},this),e.jsxDEV("div",{className:"max-w-[675px] py-10 border-t border-t-black/10",children:[e.jsxDEV("div",{className:"flex justify-between items-center py-2 border-b border-black/5 px-4",children:[e.jsxDEV("p",{className:"text-lg",children:a("Total")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:279,columnNumber:21},this),e.jsxDEV("p",{className:"text-xl font-bold",children:S(m.total)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:280,columnNumber:21},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:278,columnNumber:19},this),e.jsxDEV("div",{className:"flex gap-4 items-center justify-between pt-3",children:[e.jsxDEV(c,{as:C,href:"/",variant:"outline",colorScheme:"secondary",className:"button-outline",children:a("Back")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:283,columnNumber:21},this),e.jsxDEV(c,{type:"submit",variant:"solid",colorScheme:"primary",className:"button-primary",disabled:n,isLoading:n,children:a("Confirm order")},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:292,columnNumber:21},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:282,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:277,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:177,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:176,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:175,columnNumber:11},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:106,columnNumber:7},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:105,columnNumber:5},this):e.jsxDEV(D,{children:e.jsxDEV("div",{className:"flex flex-col items-center justify-center h-screen",children:e.jsxDEV(U,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:98,columnNumber:11},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:97,columnNumber:9},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/Checkout.tsx",lineNumber:96,columnNumber:7},this)}export{ke as default};
