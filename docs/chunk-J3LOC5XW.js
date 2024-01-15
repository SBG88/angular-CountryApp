import{A as D,B as q,C as R,D as j,E as H,F as G,J,L as K,M as Q,N as $,R as x,S as W,a as E,b as k,c as S,d as O,e as A,f as B,g as L,h as d,i as _,j as T,k as c,l as f,m as p,n as I,o,p as i,q as l,r as g,s as P,t as w,u as a,v as u,w as V,x as z,y as F,z as M}from"./chunk-BPFL3MQE.js";var h=(()=>{let e=class e{constructor(n){this.http=n,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphaCode(n){return this.http.get(`${this.apiUrl}/alpha/${n}`).pipe(k(r=>r.length>0?r[0]:null),S(r=>E(null)))}searchCapital(n){return this.http.get(`${this.apiUrl}/capital/${n}`).pipe(S(r=>E([])))}searchCountry(n){return this.http.get(`${this.apiUrl}/name/${n}`).pipe(S(r=>E([])))}searchRegion(n){return this.http.get(`${this.apiUrl}/region/${n}`).pipe(S(r=>E([])))}};e.\u0275fac=function(r){return new(r||e)(L(G))},e.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function oe(t,e){t&1&&(o(0,"div",2),a(1,` No hay paises que mostrar
`),i())}var ae=t=>["/countries/by",t];function ce(t,e){if(t&1&&(o(0,"tr")(1,"td"),a(2),i(),o(3,"td"),l(4,"img",5),i(),o(5,"td"),a(6),i(),o(7,"td"),a(8),i(),o(9,"td"),a(10),F(11,"number"),i(),o(12,"td")(13,"a",6),a(14,"Info"),i()()()),t&2){let m=e.$implicit,n=e.index;c(2),u(n+1),c(2),p("src",m.flags.svg,T)("alt",m.flags.alt),c(2),u(m.name.common),c(2),u(m.capital),c(2),u(M(11,7,m.population)),c(3),p("routerLink",z(9,ae,m.cca3))}}function se(t,e){if(t&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),i(),o(5,"th"),a(6,"Bandera"),i(),o(7,"th"),a(8,"Nombre"),i(),o(9,"th"),a(10,"Capital"),i(),o(11,"th"),a(12,"Poblaci\xF3n"),i(),l(13,"th"),i()(),o(14,"tbody"),I(15,ce,15,11,"tr",4),i()()),t&2){let m=P();c(15),p("ngForOf",m.countries)}}var C=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"mw-5",3,"src","alt"],[3,"routerLink"]],template:function(r,s){if(r&1&&I(0,oe,2,0,"div",0)(1,se,16,1,"ng-template",null,1,D),r&2){let v=w(2);p("ngIf",s.countries.length===0)("ngIfElse",v)}},dependencies:[q,R,Q,j],styles:["[_nghost-%COMP%]{display:block}img[_ngcontent-%COMP%]{width:35px}"]});let t=e;return t})();var Y=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[]}searchByCapital(n){this.countriesServices.searchCapital(n).subscribe(s=>{this.countries=s})}};e.\u0275fac=function(r){return new(r||e)(f(h))},e.\u0275cmp=d({type:e,selectors:[["countries-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital...",3,"onValue"],[3,"countries"]],template:function(r,s){r&1&&(o(0,"h2"),a(1,"Por Capital"),i(),l(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(b){return s.searchByCapital(b)}),i()()(),o(6,"div",0)(7,"div",1),l(8,"hr")(9,"countries-table",3),i()()),r&2&&(c(9),p("countries",s.countries))},dependencies:[x,C]});let t=e;return t})();var Z=(()=>{let e=class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCountry(n){this.countriesService.searchCountry(n).subscribe(s=>this.countries=s)}};e.\u0275fac=function(r){return new(r||e)(f(h))},e.\u0275cmp=d({type:e,selectors:[["countries-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs...",3,"onValue"],[3,"countries"]],template:function(r,s){r&1&&(o(0,"h2"),a(1,"Por Pa\xEDs"),i(),l(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(b){return s.searchByCountry(b)}),i()()(),o(6,"div",0)(7,"div",1),l(8,"hr")(9,"countries-table",3),i()()),r&2&&(c(9),p("countries",s.countries))},dependencies:[x,C]});let t=e;return t})();var ee=(()=>{let e=class e{constructor(n){this.countriesService=n,this.countries=[]}searchByRegion(n){this.countriesService.searchRegion(n).subscribe(s=>this.countries=s)}};e.\u0275fac=function(r){return new(r||e)(f(h))},e.\u0275cmp=d({type:e,selectors:[["countries-by-region"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por regi\xF3n...",3,"onValue"],[3,"countries"]],template:function(r,s){r&1&&(o(0,"h2"),a(1,"Por Regi\xF3n"),i(),l(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(b){return s.searchByRegion(b)}),i()()(),o(6,"div",0)(7,"div",1),l(8,"hr")(9,"countries-table",3),i()()),r&2&&(c(9),p("countries",s.countries))},dependencies:[x,C]});let t=e;return t})();function me(t,e){t&1&&(o(0,"div",2),a(1," Espere por favor "),i())}function le(t,e){if(t&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs : "),o(5,"strong"),a(6),i()()(),l(7,"hr"),i(),o(8,"div",3)(9,"div",5)(10,"h4"),a(11,"Bandera"),i(),l(12,"img",6),i(),o(13,"div",7)(14,"h4"),a(15,"Informaci\xF3n"),i(),o(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n: "),i(),a(20),F(21,"number"),i(),o(22,"li",9)(23,"strong"),a(24,"C\xF3digo: "),i(),a(25),i()()()(),o(26,"div",10)(27,"div",7)(28,"h4"),a(29,"Traducciones"),i(),o(30,"div",11)(31,"span",12),a(32),i(),o(33,"span",12),a(34),i(),o(35,"span",12),a(36),i(),o(37,"span",12),a(38),i(),o(39,"span",12),a(40),i()()()()()),t&2){let m=P();c(6),u(m.country.name.common),c(6),p("src",m.country.flags.svg,T)("alt",m.country.flags.alt),c(8),V("",M(21,10,m.country.population)," "),c(5),V("",m.country.cca3," "),c(7),u(m.country.translations.ara.common),c(2),u(m.country.translations.spa.common),c(2),u(m.country.translations.jpn.common),c(2),u(m.country.translations.kor.common),c(2),u(m.country.translations.deu.common)}}var te=(()=>{let e=class e{constructor(n,r,s){this.activatedRoute=n,this.countriesService=r,this.router=s}ngOnInit(){this.activatedRoute.params.pipe(O(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(f(J),f(h),f(K))},e.\u0275cmp=d({type:e,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,s){if(r&1&&I(0,me,2,0,"ng-template",null,0,D)(2,le,41,12,"div",1),r&2){let v=w(1);c(2),p("ngIf",s.country)("ngIfElse",v)}},dependencies:[R,j]});let t=e;return t})();var pe=[{path:"by-capital",component:Y},{path:"by-country",component:Z},{path:"by-region",component:ee},{path:"by/:id",component:te},{path:"**",redirectTo:"by-capital"}],ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=B({imports:[$.forChild(pe),$]});let t=e;return t})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=B({imports:[H,ie,W]});let t=e;return t})();export{Ue as CountriesModule};
