"use strict";(self.webpackChunkgamealive_client=self.webpackChunkgamealive_client||[]).push([[979],{8634:(e,t,n)=>{n.d(t,{N:()=>Y,V:()=>q});var r,a,l,c=n(3123),i=n(5466),d=n(2429),o=n(6387),m=n(8041),u=n(520),g=n.n(u),s=n(5158),f=n(3349),p=n(3931),E=n(6452),v=n(4722),y=n(6843),h=n(2531),w=n(8893),Z=function(e,t,n){var r={page:t};return"keyword"===e&&(r.keyword=n.keyword),"date"===e&&(r.startdate=n.startdate,r.enddate=n.enddate),g().stringify(r)},C=p.ZP.div(r||(r=(0,f.Z)(["\n  display: grid;\n  place-content: space-between center;\n\n  ","\n\n  ","\n"])),(function(e){return e.keyword&&(0,p.iv)(a||(a=(0,f.Z)(["\n      grid-template-columns: 8fr 1fr;\n    "])))}),(function(e){return e.date&&(0,p.iv)(l||(l=(0,f.Z)(["\n      grid-template-columns: 6fr 6fr 1fr;\n      grid-gap: 0rem;\n      gap: 0.25rem;\n    "])))})),k=function(e){var t=e.form,n=e.onChange;return i.createElement(w.Z,{search:!0},i.createElement(C,{keyword:!0},i.createElement(v.ZP,{style:{gridColumn:"1 / span 1"},placeholder:"검색",inputProps:{"aria-label":"naked"},value:"undefined"===t.keyword?"":t.keyword,type:"keyword",name:"keyword",onChange:n}),i.createElement(E.Z,{"aria-label":"button-search",style:{gridColumn:"2 / span 1"},href:"?".concat(Z("keyword",1,{keyword:t.keyword}))},i.createElement(h.vU7,null))))},b=function(e){var t=e.form,n=e.onChange;return i.createElement(C,{date:!0},i.createElement(y.Z,{style:{gridColumn:"1 / span 1"},id:"date-start",label:"시작일",type:"date",value:t.startdate,name:"startdate",variant:"standard",size:"small",onChange:n}),i.createElement(y.Z,{style:{gridColumn:"2 / span 1"},id:"date-end",label:"종료일",type:"date",name:"enddate",variant:"standard",size:"small",value:t.enddate,onChange:n}),i.createElement(E.Z,{style:{gridColumn:"3 / span 1",paddingRight:0},href:"?".concat(Z("date",1,{startdate:t.startdate,enddate:t.enddate}))},i.createElement(h.vU7,null)))},j=n(1608),R=n(34),x=n(1773),F=n(2562),I=n(1655),P=n(7100),z={all:n.p+"7dd8c054639b61502d94dcda185524e4.gif",y12:n.p+"91473ddbcbfe32555374e2cb19d4c19e.gif",y15:n.p+"b5b4fac0202a38f630e135d9a19bda1d.gif",y18:n.p+"191a0e97d1cf87192e0660de6f08d18c.gif",reject:n.p+"5e9879d629ebed7bcb9be1f031fd8223.gif",cancel1:n.p+"23eafd28df9eb7790b8c1013ecc17162.gif",cancel2:n.p+"ff08483ceb7482238fc45ea808ef806d.gif"};const L=function(e){return i.createElement(F.Z,null,i.createElement(I.Z,null,e.title),i.createElement(I.Z,null,i.createElement("img",{src:z[e.rating],alt:e.rating,width:"25",height:"30"})))};var _,T,W,D=function(e){var t=e.review,n=t.rating,r=t.title,a=t.applicant;return i.createElement(L,{title:r,applicant:a,rating:n})},U=function(e){var t=e.review,n=e.loading;return i.createElement(i.Fragment,null,i.createElement(j.Z,{size:"small"},i.createElement(R.Z,null,i.createElement(F.Z,null,i.createElement(I.Z,{align:"center"},"게임물명"),i.createElement(I.Z,{align:"center"},"등급"))),i.createElement(x.Z,null,!n&&t&&i.createElement(i.Fragment,null,t.map((function(e,t){return i.createElement(D,{review:e,key:t})}))))))},V=function(){var e=window.innerWidth,t=.6*window.innerWidth,n=function(){return i.createElement(F.Z,null,i.createElement(I.Z,null,i.createElement(P.Z,{width:e<384?t:384*.6})),i.createElement(I.Z,null,i.createElement(P.Z,{width:25,height:35})))};return i.createElement(j.Z,{size:"small"},i.createElement(R.Z,null,i.createElement(F.Z,null,i.createElement(I.Z,{align:"center"},"게임물명"),i.createElement(I.Z,{align:"center"},"등급"))),i.createElement(x.Z,null,[0,1,2,3,4,5,6,7,8,9].map((function(e){return i.createElement(n,null)}))))},A=p.ZP.div(_||(_=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: small;\n"]))),N=(0,p.ZP)(w.Z)(T||(T=(0,f.Z)(["\n  padding: 1.25rem;\n"]))),Q=p.ZP.div(W||(W=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 0.8rem;\n"])));const S=function(e){var t,n=e.type,r=e.review,a=e.loading,l=e.error,c=e.form,d=e.onChange;return t=l?i.createElement("div",{style:{padding:"2rem"}},"오류가 발생했습니다. 잠시 후 다시 시도해 주세요."):a?i.createElement(i.Fragment,null,i.createElement(V,null)):i.createElement(i.Fragment,null,Array.isArray(r)&&0===r.length?i.createElement("div",{style:{padding:"2rem"}},"찾는 내용이 없습니다."):i.createElement(U,{review:r,loading:a})),i.createElement(N,{big:!0},i.createElement(A,null,"date"===n?i.createElement(i.Fragment,null,i.createElement(b,{form:c,onChange:d}),i.createElement(Q,null,i.createElement("span",{style:{paddingRight:"0.125rem",paddingLeft:"0.125rem"}},"키워드로 찾고 싶으신가요?"),i.createElement("a",{href:"/search/keyword",style:{paddingRight:"0.125rem",paddingLeft:"0.125rem"}},"키워드로 검색하기"))):i.createElement(i.Fragment,null),"keyword"===n?i.createElement(i.Fragment,null,i.createElement(k,{form:c,onChange:d}),i.createElement(Q,null,i.createElement("span",{style:{paddingRight:"0.125rem",paddingLeft:"0.125rem"}},"날짜로 찾고 싶으신가요?"),i.createElement("a",{href:"/search/date",style:{paddingRight:"0.125rem",paddingLeft:"0.125rem"}},"날짜로 검색하기"))):i.createElement(i.Fragment,null),t))};var K=n(6994),O=n(7729),Y=(0,o.EN)((function(e){var t=e.location,n=(0,m.v9)((function(e){return{form:e.review}})).form,r=(0,m.v9)((function(e){return e.option})),a=(0,m.I0)(),l=(0,m.v9)((function(e){var t=e.review,n=e.loading;return{review:t.review,error:t.error,loading:n["review/LIST_REVIEW_DATE"]}})),o=l.review,u=l.error,f=l.loading;return(0,i.useEffect)((function(){var e=g().parse(t.search,{ignoreQueryPrefix:!0}),n=e.startdate,l=e.enddate,c=e.page,i={cancel:r.searchCancel,reject:r.searchReject},d=i.cancel,o=i.reject;a((0,s.fT)({startdate:n,enddate:l,page:c,cancel:d,reject:o}))}),[a,t.search,r.searchCancel,r.searchReject]),i.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.createElement(S,{type:"date",form:n,onChange:function(e){var t=e.target,n=t.value,r=t.name;a((0,s.uC)({key:r,value:n}))},review:o,loading:f,error:u}),0!==n.lastpage?i.createElement(K.Z,{page:n.currentpage,count:n.lastpage,siblingCount:0,renderItem:function(e){return i.createElement(O.Z,(0,c.Z)({component:d.rU,to:"?".concat((t=n.startdate,a=n.enddate,l=e.page,o=r.searchCancel,m=r.searchReject,g().stringify({startdate:t,enddate:a,page:l,cancel:o,reject:m})))},e));var t,a,l,o,m}}):i.createElement(i.Fragment,null))})),q=(0,o.EN)((function(e){var t=e.location,n=(0,m.v9)((function(e){return{form:e.review}})).form,r=(0,m.v9)((function(e){return e.option})),a=(0,m.I0)(),l=(0,m.v9)((function(e){var t=e.review,n=e.loading;return{review:t.review,error:t.error,loading:n["review/LIST_REVIEW_KEYWORD"]}})),o=l.review,u=l.error,f=l.loading;return(0,i.useEffect)((function(){var e=g().parse(t.search,{ignoreQueryPrefix:!0}),n=e.keyword,l=e.page,c={cancel:r.searchCancel,reject:r.searchReject},i=c.cancel,d=c.reject;a((0,s.m2)({keyword:n,page:l,cancel:i,reject:d}))}),[a,t.search,r.searchCancel,r.searchReject]),i.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.createElement(S,{type:"keyword",form:n,onChange:function(e){var t=e.target,n=t.value,r=t.name;a((0,s.uC)({key:r,value:n}))},review:o,loading:f,error:u}),0!==n.lastpage?i.createElement(K.Z,{page:n.currentpage,count:n.lastpage,siblingCount:0,renderItem:function(e){return i.createElement(O.Z,(0,c.Z)({component:d.rU,to:"?".concat((t=n.keyword,a=e.page,l=r.searchCancel,o=r.searchReject,m="undefined"===t?"":t,g().stringify({word:m,page:a,cancel:l,reject:o})))},e));var t,a,l,o,m}}):i.createElement(i.Fragment,null))}))},9979:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(5466),a=n(8634),l=n(1641),c=n(7284),i=n(929);const d=function(e){var t=e.history,n=r.createElement(a.V,null);return r.createElement(l.T3,null,r.createElement(c.Z,{history:t,content:n}),r.createElement(i.Z,{history:t,content:n}))}}}]);