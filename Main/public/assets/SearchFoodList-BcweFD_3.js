import{r as c,j as e,S as l}from"./app-p3FobzL5.js";import{C as p}from"./CustomerLayout-B-isIdbx.js";import{u as h}from"./use_table_data-mkdPdtFX.js";import{P as d}from"./Pagination-CMtLnuaE.js";import{P as N}from"./ProductItem-CJuIzKxs.js";import{u as f}from"./useTranslation-jbS6ivqO.js";import{H as b}from"./platform_roles-D3HjcMuK.js";import{a as x}from"./input-cx0LjzCS.js";import{L as D}from"./link-BsbvcYVC.js";import{A as S}from"./ArrowLeft-zVhk0ivW.js";import{A as g,a as v}from"./ArrowRight2-OjDQz_0a.js";/* empty css            */import"./CustomerHeader-C04vMqIV.js";import"./validate_required_variants-D2yQpkaP.js";import"./Minus-CX-dPmlg.js";import"./_rollupPluginBabelHelpers-3bc641ae-btRFf1Fy.js";import"./currency_formatter-Bz1CGAdC.js";import"./use-radio-BmR54MTD.js";import"./visually-hidden.style-Bfr07Aua.js";import"./TickCircle-BeldSHqy.js";import"./index-CuMLbxmh.js";import"./Edit2-BUbnZjhm.js";import"./ArrowDown2-DM1rERZ4.js";import"./tr-EefZORq7.js";import"./radio-Bmoumz0n.js";import"./checkbox-r7APxjHP.js";import"./use-checkbox-fX-NceDq.js";import"./popover-trigger-D9abZrFQ.js";import"./divider-CHTuOarn.js";import"./Trash-CzXP6s3A.js";import"./textarea-pmQ9KYwB.js";import"./popover-anchor-B8g7wOff.js";import"./input-group-3FZosNBb.js";import"./input-element-DW2n0nal.js";import"./SearchNormal-CydsvnL-.js";import"./popover-body-Cnhf1gCL.js";const P=20;function j({search:o}){const{t}=f(),[a,n]=c.useState(1),{items:r,isLoading:u,meta:m}=h("/api/user/menu-items/global",{page:a,limit:P,search:o});return u?e.jsxDEV("div",{className:"py-10 container",children:e.jsxDEV(b,{className:"justify-center",children:e.jsxDEV(l,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:28,columnNumber:11},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:27,columnNumber:9},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:26,columnNumber:7},this):e.jsxDEV("div",{className:"py-10",children:e.jsxDEV("div",{className:"container",children:[e.jsxDEV("div",{className:"flex items-center gap-4 py-9",children:[e.jsxDEV(x,{as:D,href:"/","aria-label":"left arrow",className:"rounded-full min-w-12 min-h-12 bg-transparent border border-secondary-200",children:e.jsxDEV(S,{},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:44,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:38,columnNumber:11},this),e.jsxDEV("h2",{className:"text-2xl",children:`${t("Showing results for")} ${o}`},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:46,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:37,columnNumber:9},this),e.jsxDEV("div",{className:"@container w-full px-6",children:[e.jsxDEV("div",{className:"grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 gap-4",children:r!=null&&r.length?r==null?void 0:r.map(s=>e.jsxDEV(N,{...s},s.id,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:52,columnNumber:50},this)):e.jsxDEV("div",{className:"col-span-12 flex flex-col justify-center items-center gap-4 w-full h-auto py-6",children:[e.jsxDEV("img",{src:"/DataEmpty.svg",alt:"Data Empty",className:"w-24"},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:55,columnNumber:17},this),t("No search results found")]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:54,columnNumber:15},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:50,columnNumber:11},this),e.jsxDEV("div",{className:"flex justify-end flex-row items-center gap-2",children:e.jsxDEV(d,{showTotal:(s,i)=>t("Showing {{start}}-{{end}} of {{total}}",{start:i[0],end:i[1],total:s}),current:m.currentPage,total:m.total,pageSize:m.perPage,hideOnSinglePage:!0,onChange:s=>n(s),className:"flex justify-between flex-row items-center gap-2",prevIcon:e.jsxDEV(g,{size:"18"},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:76,columnNumber:25},this),nextIcon:e.jsxDEV(v,{size:"18"},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:77,columnNumber:25},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:62,columnNumber:13},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:61,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:49,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:36,columnNumber:7},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/components/Customer/Home/SearchProducts.tsx",lineNumber:35,columnNumber:5},this)}function ae({...o}){return e.jsxDEV(p,{children:e.jsxDEV(j,{search:o.queries.q},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/SearchFoodList.tsx",lineNumber:7,columnNumber:7},this)},void 0,!1,{fileName:"/Users/omerbatuhantuncer/Desktop/resto/source/inertia/pages/Customer/SearchFoodList.tsx",lineNumber:6,columnNumber:5},this)}export{ae as default};
