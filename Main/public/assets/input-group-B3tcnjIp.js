import{q as I,g as h,s as x,v,B as E,p as S,r as u,d,o as G}from"./app-DV9Enp-g.js";import{g as R}from"./_rollupPluginBabelHelpers-3bc641ae-fORsOdMW.js";const[C,w]=I({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),_=h(function(s,l){const r=x("Input",s),{children:c,className:m,...g}=v(s),f=E("chakra-input__group",m),n={},o=R(c),e=r.field;o.forEach(t=>{r&&(e&&t.type.id==="InputLeftElement"&&(n.paddingStart=e.height??e.h),e&&t.type.id==="InputRightElement"&&(n.paddingEnd=e.height??e.h),t.type.id==="InputRightAddon"&&(n.borderEndRadius=0),t.type.id==="InputLeftAddon"&&(n.borderStartRadius=0))});const y=o.map(t=>{var i,p;const a=S({size:((i=t.props)==null?void 0:i.size)||s.size,variant:((p=t.props)==null?void 0:p.variant)||s.variant});return t.type.id!=="Input"?u.cloneElement(t,a):u.cloneElement(t,Object.assign(a,n,t.props))});return d.jsx(G.div,{className:f,ref:l,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...r.group},"data-group":!0,...g,children:d.jsx(C,{value:r,children:y})})});_.displayName="InputGroup";export{_ as I,w as u};
