import{j as e,S as E,r as D,u as O,f as y}from"./app-DV9Enp-g.js";import{L as A}from"./Layout-4Yl3SVGs.js";import{O as V}from"./OrderReportChart-B0uV127T.js";import{s as w}from"./string_formatter-C0BoQtKC.js";import{C as j}from"./react-apexcharts.min-FMrpO9HG.js";import{c as g}from"./currency_formatter-Bz1CGAdC.js";import{u as v}from"./useTranslation-B_tqir3M.js";import{T as b}from"./ArrowDown2-BYk1CnSd.js";import{O as C}from"./order_status-CM2aeLIm.js";import{D as N}from"./divider-ChBlpOfM.js";import{B as _}from"./platform_roles-C6HFwJ_S.js";import"./_rollupPluginBabelHelpers-3bc641ae-fORsOdMW.js";import"./input-BY0aN3Wh.js";import"./formik.esm-57hcKfmx.js";import"./tab-panels-vLnb1L73.js";import"./form-label-BRtD5jpz.js";import"./format-DNgEHVKA.js";import"./Clock-DOUKTfsE.js";import"./ProfileCircle-kDGWjsR6.js";import"./accordion-panel-Bmo1-bWf.js";function S({data:s,isLoading:a,onMonthSelect:c}){var d,u,m,p;const n=[{name:"Completed",data:(d=s==null?void 0:s.reports)==null?void 0:d.map(i=>i.counts.completed)},{name:"Canceled",data:(u=s==null?void 0:s.reports)==null?void 0:u.map(i=>i.counts.canceled)},{name:"Failed",data:(m=s==null?void 0:s.reports)==null?void 0:m.map(i=>i.counts.failed)}],t={chart:{id:"earning-report",stacked:!1,offsetY:0,toolbar:{show:!1},events:{dataPointSelection:function(i,o,r){const l=s==null?void 0:s.reports[r.dataPointIndex].period;l&&c(l)}}},dataLabels:{enabled:!1},legend:{show:!0,horizontalAlign:"left",markers:{size:10,customHTML:()=>'<span class="w-32 border-4 rounded-[2px] mr-1" />'}},markers:{size:4},colors:["var(--color-green-500)","var(--color-purple-500)","var(--color-red-500)","var(--color-primary-500)"],xaxis:{categories:(p=s==null?void 0:s.reports)==null?void 0:p.map(i=>{var o;return(o=i.period)==null?void 0:o.substring(0,3)}),axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{cssClass:"fill-secondary-600"}}},yaxis:{axisTicks:{show:!1},axisBorder:{show:!1},tickAmount:6},plotOptions:{line:{isSlopeChart:!1}},stroke:{show:!0,width:2},grid:{borderColor:"#E2E8F0",padding:{bottom:0}}};return e.jsxDEV("div",{className:"w-full aspect-[3/2] max-h-64",children:a?e.jsxDEV("div",{className:"w-full flex items-center justify-center py-20",children:e.jsxDEV(E,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderStatusReportChart.tsx",lineNumber:113,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderStatusReportChart.tsx",lineNumber:112,columnNumber:9},this):e.jsxDEV(j,{series:n,options:t,type:"line",height:256},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderStatusReportChart.tsx",lineNumber:116,columnNumber:9},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderStatusReportChart.tsx",lineNumber:110,columnNumber:5},this)}function P({data:s,isLoading:a,month:c}){var m,p,i,o;const n=new Date().toLocaleString("default",{month:"short"}),t=(i=(p=(m=s==null?void 0:s.reports)==null?void 0:m.find(r=>r.period===c))==null?void 0:p.deliveryManOrderCounts)==null?void 0:i.filter(r=>{var l;return!!((l=r==null?void 0:r.deliveryMan)!=null&&l.id)}),d=[{data:t==null?void 0:t.map(r=>r.count)}],u={chart:{id:"order-delivery-person-report-chart",stacked:!1,offsetY:0,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},xaxis:{categories:t==null?void 0:t.map(r=>r.deliveryMan.fullName),axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{cssClass:"fill-secondary-600"}}},yaxis:{axisTicks:{show:!1},axisBorder:{show:!1},tickAmount:6},plotOptions:{bar:{columnWidth:"30%",borderRadius:3,colors:{ranges:(o=s==null?void 0:s.reports)==null?void 0:o.map(r=>{var l;return{from:r.totalEarnings,to:r.totalEarnings,color:((l=r.period)==null?void 0:l.substring(0,3))===n?"var(--color-green-500)":"var(--color-secondary-500)"}})}}},grid:{borderColor:"#E2E8F0",padding:{bottom:0}}};return e.jsxDEV("div",{className:"w-full aspect-[3/2] max-h-64",children:a?e.jsxDEV("div",{className:"w-full flex items-center justify-center py-20",children:e.jsxDEV(E,{},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderByDeliveryReportChart.tsx",lineNumber:88,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderByDeliveryReportChart.tsx",lineNumber:87,columnNumber:9},this):e.jsxDEV(j,{series:d,options:u,type:"bar",height:256},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderByDeliveryReportChart.tsx",lineNumber:91,columnNumber:9},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/OrderByDeliveryReportChart.tsx",lineNumber:85,columnNumber:5},this)}function h({product:s,timePeriod:a}){var t,d,u,m,p,i,o,r,l;const{t:c}=v(),n=(x,f,R)=>R==="amount"?x-f:x-x*f*.01;return!s||s.menuItem===null?null:e.jsxDEV("div",{className:"p-4 rounded-lg bg-white border-none border-t border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)]",children:e.jsxDEV("div",{className:"relative flex flex-col gap-1",children:[e.jsxDEV("h4",{className:"text-lg font-semibold text-secondary-900",children:c("Most ordered product")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:32,columnNumber:9},this),a&&e.jsxDEV("p",{className:"text-base text-secondary-500 mb-3.5",children:[" ",a," "]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:33,columnNumber:24},this),e.jsxDEV("div",{className:"mb-3.5",children:e.jsxDEV("div",{className:"relative rounded w-full aspect-[3/2] overflow-hidden",children:e.jsxDEV("img",{src:(d=(t=s==null?void 0:s.menuItem)==null?void 0:t.image)==null?void 0:d.url,alt:(u=s==null?void 0:s.menuItem)==null?void 0:u.name,width:300,height:300,className:"rounded absolute top-0 left-0 inset-0 w-full h-full object-cover",onError:x=>x.currentTarget.src="/default_fallback.png"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:37,columnNumber:13},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:36,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:35,columnNumber:9},this),e.jsxDEV("h3",{className:"text-secondary-900 text-xl font-semibold",children:c((m=s==null?void 0:s.menuItem)==null?void 0:m.name)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:48,columnNumber:9},this),e.jsxDEV(b,{as:"p",className:"text-secondary-400 text-sm",children:c((p=s==null?void 0:s.menuItem)==null?void 0:p.description)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:50,columnNumber:9},this),e.jsxDEV("div",{className:"flex gap-3",children:[e.jsxDEV(b,{as:"del",className:"text-xl font-normal text-secondary-600",children:g((i=s==null?void 0:s.menuItem)==null?void 0:i.price)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:55,columnNumber:11},this),e.jsxDEV(b,{as:"h2",className:"text-2xl font-bold text-primary-500",children:g(n((o=s==null?void 0:s.menuItem)==null?void 0:o.price,(r=s==null?void 0:s.menuItem)==null?void 0:r.discount,(l=s==null?void 0:s.menuItem)==null?void 0:l.discountType))},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:58,columnNumber:11},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:54,columnNumber:9},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:31,columnNumber:7},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/components/Admin/Reports/ProductCard.tsx",lineNumber:30,columnNumber:5},this)}const T=new C;function se(){var m,p;const{t:s}=v(),[a,c]=D.useState(new Date().toLocaleString("default",{month:"long"})),{data:n,isLoading:t}=O("/api/reports/order-chart",y),d=(i,o)=>{var r;return(r=i==null?void 0:i.reports)==null?void 0:r.find(l=>{var x;return((x=l.period)==null?void 0:x.toLowerCase())===(o==null?void 0:o.toLowerCase())})},u=(i,o)=>{var r;return(r=d(i,o))==null?void 0:r.mostOrderedMenuItem};return e.jsxDEV(A,{title:s("Order report"),children:e.jsxDEV("div",{className:"p-6 flex flex-col gap-4",children:e.jsxDEV("div",{className:"report-layout",children:e.jsxDEV("div",{className:"report-layout__grid",children:[e.jsxDEV("div",{className:"report-layout__col-left flex flex-col gap-y-4 order-2 @3xl:order-1",children:[e.jsxDEV("div",{className:"py-4 @lg:py-8 px-4 @lg:px-16 border border-secondary-200 flex flex-col items-stretch gap-8 rounded-lg bg-white",children:[e.jsxDEV("div",{className:"flex items-center gap-8 w-full",children:[e.jsxDEV("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsxDEV("h3",{className:"text-lg font-normal leading-[22px] text-secondary-400",children:s("Total Orders")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:47,columnNumber:21},this),e.jsxDEV("h1",{className:"text-secondary-900 text-2xl font-bold",children:t?0:(m=d(n,a))==null?void 0:m.totalOrders},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:50,columnNumber:21},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:46,columnNumber:19},this),e.jsxDEV("div",{className:"flex-1 flex items-end flex-col gap-2",children:[e.jsxDEV("h3",{className:"text-lg font-normal leading-[22px] text-secondary-400",children:s("Showing result for")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:55,columnNumber:21},this),e.jsxDEV("h1",{className:"text-secondary-900 text-2xl font-bold",children:s(a)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:58,columnNumber:21},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:54,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:45,columnNumber:17},this),e.jsxDEV("div",{children:[e.jsxDEV(N,{className:"border-secondary-300 mb-6"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:65,columnNumber:19},this),e.jsxDEV(V,{periodType:"month",data:n,isLoading:t,onPeriodSelect:c},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:67,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:64,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:44,columnNumber:15},this),e.jsxDEV("div",{className:"py-4 @lg:py-8 px-4 @lg:px-16 border border-secondary-200 flex flex-col items-stretch gap-8 rounded-lg bg-white",children:[e.jsxDEV("div",{className:"flex items-center gap-8 w-full",children:e.jsxDEV("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsxDEV("h1",{className:"text-secondary-900 text-2xl font-bold",children:s("Orders")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:80,columnNumber:21},this),e.jsxDEV("h3",{className:"text-lg font-normal leading-[22px] text-secondary-400",children:s("by status")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:81,columnNumber:21},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:79,columnNumber:19},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:78,columnNumber:17},this),e.jsxDEV("div",{children:[e.jsxDEV(N,{className:"border-secondary-300 mb-6"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:88,columnNumber:19},this),e.jsxDEV(S,{data:n,isLoading:t,onMonthSelect:c},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:90,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:87,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:77,columnNumber:15},this),e.jsxDEV("div",{className:"py-4 @lg:py-8 px-4 @lg:px-16 border border-secondary-200 flex flex-col items-stretch gap-8 rounded-lg bg-white",children:[e.jsxDEV("div",{className:"flex items-center gap-8 w-full",children:e.jsxDEV("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsxDEV("h1",{className:"text-secondary-900 text-2xl font-bold",children:s("Orders")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:102,columnNumber:21},this),e.jsxDEV("h3",{className:"text-lg font-normal leading-[22px] text-secondary-400",children:s("by delivery person")},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:103,columnNumber:21},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:101,columnNumber:19},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:100,columnNumber:17},this),e.jsxDEV("div",{children:[e.jsxDEV(N,{className:"border-secondary-300 mb-6"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:110,columnNumber:19},this),e.jsxDEV(P,{data:n,isLoading:t,month:a},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:112,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:109,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:99,columnNumber:15},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:42,columnNumber:13},this),e.jsxDEV("div",{className:"report-layout__col-right order-1 @3xl:order-2 @container flex-col",children:[e.jsxDEV("div",{className:"grid grid-cols-1 @md:grid-cols-2 gap-4",children:Object.entries(((p=d(n,a))==null?void 0:p.counts)||{completed:0,canceled:0,returned:0}).map(([i,o])=>{var r;return e.jsxDEV("div",{className:"p-8 rounded-lg bg-white border-none border-t border-gray-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)]",children:e.jsxDEV("div",{className:"relative flex flex-col gap-1",children:[e.jsxDEV(_,{variant:"solid",bg:(r=T.getStatusDetails(i))==null?void 0:r.fgColor,color:"white",className:"text-xs w-fit",children:s(w(i))},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:137,columnNumber:23},this),e.jsxDEV("h1",{className:"text-secondary-900 text-2xl font-bold",children:o},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:145,columnNumber:23},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:136,columnNumber:21},this)},i,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:132,columnNumber:19},this)})},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:123,columnNumber:15},this),!t&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV(h,{product:u(n,a)||null,timePeriod:a},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:154,columnNumber:19},this),e.jsxDEV(h,{product:n.mostOrderedMenuItemAllTime,timePeriod:"All Time"},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:158,columnNumber:19},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:153,columnNumber:17},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:122,columnNumber:13},this)]},void 0,!0,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:41,columnNumber:11},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:40,columnNumber:9},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:38,columnNumber:7},this)},void 0,!1,{fileName:"E:/abid/getpasto-adonisjs6/inertia/pages/Admin/Reports/OrderReports.tsx",lineNumber:37,columnNumber:5},this)}export{se as default};
