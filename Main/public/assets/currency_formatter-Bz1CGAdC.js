const f=(r,t={})=>{var y,l;if(Number.isNaN(r))throw new Error("Invalid amount: NaN");r||(r=0);const a=localStorage.getItem("currency");let s="left";if(a){const{code:o,symbolPosition:c}=JSON.parse(a);t.currency=t.currency||o,s=c}const m=t.locale||"en-US",e=new Intl.NumberFormat(m,{style:"currency",currency:t.currency||"USD",currencyDisplay:"narrowSymbol",currencySign:"standard",minimumFractionDigits:2,...t});if(t.symbolOnly)return((y=e.formatToParts(r).find(i=>i.type==="currency"))==null?void 0:y.value)??"";let n=e.format(r);if(s==="right"){const c=((l=e.formatToParts(r).find(u=>u.type==="currency"))==null?void 0:l.value)??"";n=`${n.substring(c.length).trim()}${c}`}return n};export{f as c};
