import{a as r,b as c,c as i,d as m,e as s,f as p,j as d,k as f,l,m as a,n as u,o as h,p as C,r as g}from"./chunk-RT6C7Y6T.js";var w=[{path:"about",component:u},{path:"contact",component:C},{path:"countries",loadChildren:()=>import("./chunk-X7AXGDAZ.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(w),a]});let o=t;return o})();var y=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,N){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[h,l]});let o=t;return o})();var v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[y]}),t.\u0275inj=r({imports:[f,g,b]});let o=t;return o})();d().bootstrapModule(v).catch(o=>console.error(o));
