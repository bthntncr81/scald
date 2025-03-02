import{q as O,r as m,z,A as j,g as _,s as U,v as Y,d as x,o as S,B as I,I as q,N as G,a6 as L,a7 as V,a8 as E,a9 as D}from"./app-DV9Enp-g.js";import{g as J,h as Q}from"./ArrowDown2-BYk1CnSd.js";const C=e=>{const{condition:o,message:n}=e;o&&console.warn(n)},[X,M]=O({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Z,T]=O({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[ee,ge,oe,ne]=J();function te(e){const{onChange:o,defaultIndex:n,index:t,allowMultiple:a,allowToggle:l,...c}=e;ae(e),ie(e);const A=oe(),[p,d]=m.useState(-1);m.useEffect(()=>()=>{d(-1)},[]);const[s,f]=Q({value:t,defaultValue(){return a?n??[]:n??-1},onChange:o});return{index:s,setIndex:f,htmlProps:c,getAccordionItemProps:i=>{let y=!1;return i!==null&&(y=Array.isArray(s)?s.includes(i):s===i),{isOpen:y,onChange:r=>{if(i!==null)if(a&&Array.isArray(s)){const N=r?s.concat(i):s.filter(P=>P!==i);f(N)}else r?f(i):l&&f(-1)}}},focusedIndex:p,setFocusedIndex:d,descendants:A}}const[se,F]=O({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ce(e){const{isDisabled:o,isFocusable:n,id:t,...a}=e,{getAccordionItemProps:l,setFocusedIndex:c}=F(),A=m.useRef(null),p=m.useId(),d=t??p,s=`accordion-button-${d}`,f=`accordion-panel-${d}`;le(e);const{register:g,index:i,descendants:y}=ne({disabled:o&&!n}),{isOpen:h,onChange:r}=l(i===-1?null:i);re({isOpen:h,isDisabled:o});const N=()=>{r==null||r(!0)},P=()=>{r==null||r(!1)},k=m.useCallback(()=>{r==null||r(!h),c(i)},[i,c,h,r]),B=m.useCallback(v=>{const w={ArrowDown:()=>{const u=y.nextEnabled(i);u==null||u.node.focus()},ArrowUp:()=>{const u=y.prevEnabled(i);u==null||u.node.focus()},Home:()=>{const u=y.firstEnabled();u==null||u.node.focus()},End:()=>{const u=y.lastEnabled();u==null||u.node.focus()}}[v.key];w&&(v.preventDefault(),w(v))},[y,i]),R=m.useCallback(()=>{c(i)},[c,i]),W=m.useCallback(function(b={},w=null){return{...b,type:"button",ref:z(g,A,w),id:s,disabled:!!o,"aria-expanded":!!h,"aria-controls":f,onClick:j(b.onClick,k),onFocus:j(b.onFocus,R),onKeyDown:j(b.onKeyDown,B)}},[s,o,h,k,R,B,f,g]),$=m.useCallback(function(b={},w=null){return{...b,ref:w,role:"region",id:f,"aria-labelledby":s,hidden:!h}},[s,h,f]);return{isOpen:h,isDisabled:o,isFocusable:n,onOpen:N,onClose:P,getButtonProps:W,getPanelProps:$,htmlProps:a}}function ae(e){const o=e.index||e.defaultIndex,n=o!=null&&!Array.isArray(o)&&e.allowMultiple;C({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof o},`})}function ie(e){C({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function le(e){C({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function re(e){C({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}const de=_(function({children:o,reduceMotion:n,...t},a){const l=U("Accordion",t),c=Y(t),{htmlProps:A,descendants:p,...d}=te(c),s=m.useMemo(()=>({...d,reduceMotion:!!n}),[d,n]);return x.jsx(ee,{value:p,children:x.jsx(se,{value:s,children:x.jsx(X,{value:l,children:x.jsx(S.div,{ref:a,...A,className:I("chakra-accordion",t.className),__css:l.root,children:o})})})})});de.displayName="Accordion";const ue=_(function(o,n){const{getButtonProps:t}=T(),a=t(o,n),c={display:"flex",alignItems:"center",width:"100%",outline:0,...M().button};return x.jsx(S.button,{...a,className:I("chakra-accordion__button",o.className),__css:c})});ue.displayName="AccordionButton";function me(e){const{isOpen:o,isDisabled:n}=T(),{reduceMotion:t}=F(),a=I("chakra-accordion__icon",e.className),l=M(),c={opacity:n?.4:1,transform:o?"rotate(-180deg)":void 0,transition:t?void 0:"transform 0.2s",transformOrigin:"center",...l.icon};return x.jsx(q,{viewBox:"0 0 24 24","aria-hidden":!0,className:a,__css:c,...e,children:x.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}me.displayName="AccordionIcon";const fe=_(function(o,n){const{children:t,className:a}=o,{htmlProps:l,...c}=ce(o),A=M(),p=G({...A.container,overflowAnchor:"none"}),d=m.useMemo(()=>c,[c]);return x.jsx(Z,{value:d,children:x.jsx(S.div,{ref:n,...l,className:I("chakra-accordion__item",a),__css:p,children:typeof t=="function"?t({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):t})})});fe.displayName="AccordionItem";const xe=e=>e!=null&&parseInt(e.toString(),10)>0,H={exit:{height:{duration:.2,ease:D.ease},opacity:{duration:.3,ease:D.ease}},enter:{height:{duration:.3,ease:D.ease},opacity:{duration:.4,ease:D.ease}}},Ae={exit:({animateOpacity:e,startingHeight:o,transition:n,transitionEnd:t,delay:a})=>({...e&&{opacity:xe(o)?1:0},height:o,transitionEnd:t==null?void 0:t.exit,transition:(n==null?void 0:n.exit)??E.exit(H.exit,a)}),enter:({animateOpacity:e,endingHeight:o,transition:n,transitionEnd:t,delay:a})=>({...e&&{opacity:1},height:o,transitionEnd:t==null?void 0:t.enter,transition:(n==null?void 0:n.enter)??E.enter(H.enter,a)})},K=m.forwardRef((e,o)=>{const{in:n,unmountOnExit:t,animateOpacity:a=!0,startingHeight:l=0,endingHeight:c="auto",style:A,className:p,transition:d,transitionEnd:s,animatePresenceProps:f,...g}=e,[i,y]=m.useState(!1);m.useEffect(()=>{const k=setTimeout(()=>{y(!0)});return()=>clearTimeout(k)},[]),C({condition:Number(l)>0&&!!t,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const h=parseFloat(l.toString())>0,r={startingHeight:l,endingHeight:c,animateOpacity:a,transition:i?d:{enter:{duration:0}},transitionEnd:{enter:s==null?void 0:s.enter,exit:t?s==null?void 0:s.exit:{...s==null?void 0:s.exit,display:h?"block":"none"}}},N=t?n:!0,P=n||t?"enter":"exit";return x.jsx(L,{...f,initial:!1,custom:r,children:N&&x.jsx(V.div,{ref:o,...g,className:I("chakra-collapse",p),style:{overflow:"hidden",display:"block",...A},custom:r,variants:Ae,initial:t?"exit":!1,animate:P,exit:"exit"})})});K.displayName="Collapse";const pe=_(function(o,n){const{className:t,motionProps:a,...l}=o,{reduceMotion:c}=F(),{getPanelProps:A,isOpen:p}=T(),d=A(l,n),s=I("chakra-accordion__panel",t),f=M();c||delete d.hidden;const g=x.jsx(S.div,{...d,__css:f.panel,className:s});return c?g:x.jsx(K,{in:p,...a,children:g})});pe.displayName="AccordionPanel";export{de as A,fe as a,ue as b,me as c,pe as d};
