function e(e){"@swc/helpers - typeof";return e&&typeof Symbol!=="undefined"&&e.constructor===Symbol?"symbol":typeof e}var tofukit=function(){var r=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var o=Object.prototype.hasOwnProperty;var u=function(e,n){for(var t in n)r(e,t,{get:n[t],enumerable:!0})},a=function(u,a,f,i){var c=true,l=false,v=undefined;if(a&&(typeof a==="undefined"?"undefined":e(a))=="object"||typeof a=="function")try{var y=function(){var e=p.value;!o.call(u,e)&&e!==f&&r(u,e,{get:function(){return a[e]},enumerable:!(i=n(a,e))||i.enumerable})};for(var d=t(a)[Symbol.iterator](),p;!(c=(p=d.next()).done);c=true)y()}catch(e){l=true;v=e}finally{try{if(!c&&d.return!=null){d.return()}}finally{if(l){throw v}}}return u};var f=function(e){return a(r({},"__esModule",{value:!0}),e)};var i={};u(i,{cij:function(){return l},hij:function(){return v}});var c=function(e,r){return e.reduce(function(e,n,t){var o;return e+n+((o=r[t])!==null&&o!==void 0?o:r[t]="")},"")},l=function(e){var r=e.raw;for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++){t[o-1]=arguments[o]}var u;var a=c(r,t),f=document.createElement("style");f.textContent=a,(u=document.querySelector("head"))===null||u===void 0?void 0:u.appendChild(f)},v=function(e){var r=e.raw;for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++){t[o-1]=arguments[o]}return{mount:function(e){document.querySelector(e).innerHTML=c(r,t)}}};return f(i)}();