import{r as f,a4 as P,a5 as U}from"./app-DV9Enp-g.js";const $=(...e)=>{console!=null&&console.warn&&(g(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},k={},T=(...e)=>{g(e[0])&&k[e[0]]||(g(e[0])&&(k[e[0]]=new Date),$(...e))},M=(e,n)=>()=>{if(e.isInitialized)n();else{const s=()=>{setTimeout(()=>{e.off("initialized",s)},0),n()};e.on("initialized",s)}},C=(e,n,s)=>{e.loadNamespaces(n,M(e,s))},F=(e,n,s,o)=>{if(g(s)&&(s=[s]),e.options.preload&&e.options.preload.indexOf(n)>-1)return C(e,s,o);s.forEach(m=>{e.options.ns.indexOf(m)<0&&e.options.ns.push(m)}),e.loadLanguages(n,M(e,o))},A=(e,n,s={})=>!n.languages||!n.languages.length?(T("i18n.languages were undefined or empty",n.languages),!0):n.hasLoadedNamespace(e,{lng:s.lng,precheck:(o,m)=>{var t;if(((t=s.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!m(o.isLanguageChangingTo,e))return!1}}),g=e=>typeof e=="string",G=e=>typeof e=="object"&&e!==null,J=f.createContext();class W{constructor(){this.usedNamespaces={}}addUsedNamespaces(n){n.forEach(s=>{this.usedNamespaces[s]||(this.usedNamespaces[s]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Y=(e,n)=>{const s=f.useRef();return f.useEffect(()=>{s.current=e},[e,n]),s.current},O=(e,n,s,o)=>e.getFixedT(n,s,o),q=(e,n,s,o)=>f.useCallback(O(e,n,s,o),[e,n,s,o]),H=(e,n={})=>{var R,L,I,j;const{i18n:s}=n,{i18n:o,defaultNS:m}=f.useContext(J)||{},t=s||o||U();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new W),!t){T("You will need to pass in an i18next instance by using initReactI18next");const i=(c,u)=>g(u)?u:G(u)&&g(u.defaultValue)?u.defaultValue:Array.isArray(c)?c[c.length-1]:c,r=[i,{},!1];return r.t=i,r.i18n={},r.ready=!1,r}(R=t.options.react)!=null&&R.wait&&T("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const N={...P(),...t.options.react,...n},{useSuspense:S,keyPrefix:x}=N;let a=m||((L=t.options)==null?void 0:L.defaultNS);a=g(a)?[a]:a||["translation"],(j=(I=t.reportNamespaces).addUsedNamespaces)==null||j.call(I,a);const l=(t.isInitialized||t.initializedStoreOnce)&&a.every(i=>A(i,t,N)),v=q(t,n.lng||null,N.nsMode==="fallback"?a:a[0],x),b=()=>v,w=()=>O(t,n.lng||null,N.nsMode==="fallback"?a:a[0],x),[E,p]=f.useState(b);let h=a.join();n.lng&&(h=`${n.lng}${h}`);const z=Y(h),d=f.useRef(!0);f.useEffect(()=>{const{bindI18n:i,bindI18nStore:r}=N;d.current=!0,!l&&!S&&(n.lng?F(t,n.lng,a,()=>{d.current&&p(w)}):C(t,a,()=>{d.current&&p(w)})),l&&z&&z!==h&&d.current&&p(w);const c=()=>{d.current&&p(w)};return i&&(t==null||t.on(i,c)),r&&(t==null||t.store.on(r,c)),()=>{d.current=!1,t&&(i==null||i.split(" ").forEach(u=>t.off(u,c))),r&&t&&r.split(" ").forEach(u=>t.store.off(u,c))}},[t,h]),f.useEffect(()=>{d.current&&l&&p(b)},[t,x,l]);const y=[E,t,l];if(y.t=E,y.i18n=t,y.ready=l,l||!l&&!S)return y;throw new Promise(i=>{n.lng?F(t,n.lng,a,()=>i()):C(t,a,()=>i())})};export{H as u};
