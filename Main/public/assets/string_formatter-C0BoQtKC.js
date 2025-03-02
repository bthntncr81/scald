function a(e=""){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").toLowerCase().replace(/\b\w/g,r=>r.toUpperCase()).trim()}export{a as s};
