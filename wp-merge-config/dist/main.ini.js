(()=>{"use strict";var e,t,n,r={},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+".chunk.js",a.miniCssF=e=>e+".chunk_css.css",a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},a.l=(t,n,r,o)=>{if(e[t])e[t].push(n);else{var i,s;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==t){i=u;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=t),e[t]=[n];var h=(n,r)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),n)return n(r)},c=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/orange/",t=e=>new Promise(((t,n)=>{var r=a.miniCssF(e),o=a.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}})(r,o))return t();((e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,o.parentNode.removeChild(o),r(d)}},o.href=t,document.head.appendChild(o)})(e,o,t,n)})),n={main:0},a.f.miniCss=(e,r)=>{n[e]?r.push(n[e]):0!==n[e]&&{click_js:1}[e]&&r.push(n[e]=t(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={main:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var i=a.p+a.u(t),s=new Error;a.l(i,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[i,s,d]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);d&&d(a)}for(t&&t(n);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),document.getElementById("img").src="/apple/IMG/ff24a034650237a6d8c1.London.png",document.getElementById("p").innerText='London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones. Since the 19th century, "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire, which largely comprises Greater London, governed by the Greater London Authority. The City of Westminster, to the west of the City of London, has for centuries held the national government and parliament.',document.getElementById("click").onclick=()=>{a.e("click_js").then(a.bind(a,62)).then((({default:e})=>{e()}))}})();