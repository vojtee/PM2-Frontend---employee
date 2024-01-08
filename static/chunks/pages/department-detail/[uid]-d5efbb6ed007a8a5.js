(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{4855:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var n=r(a(4938)),s=a(5893),l=(0,n.default)((0,s.jsx)("path",{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}),"Equalizer");t.Z=l},2023:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(3366),n=a(7462),s=a(7294),l=a(6010),i=a(4780),o=a(948),d=a(1657),c=a(1588),u=a(4867);function h(e){return(0,u.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);var p=a(5893);let m=["disableSpacing","className"],x=e=>{let{classes:t,disableSpacing:a}=e;return(0,i.Z)({root:["root",!a&&"spacing"]},h,t)},f=(0,o.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,n.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),y=s.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:s=!1,className:i}=a,o=(0,r.Z)(a,m),c=(0,n.Z)({},a,{disableSpacing:s}),u=x(c);return(0,p.jsx)(f,(0,n.Z)({className:(0,l.Z)(u.root,i),ownerState:c,ref:t},o))});var g=y},6828:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/department-detail/[uid]",function(){return a(6476)}])},7645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=s.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=r({},n,e)),n=r({},n,t);let i=n.loader,o=()=>null!=i?i().then(l):Promise.resolve(l(()=>null));return n.loadableGenerated&&delete(n=r({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr||(delete n.webpack,delete n.modules),a(r({},n,{loader:o}))};var r=a(6495).Z,n=a(2648).Z;n(a(7294));var s=n(a(4588));function l(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,a(2648).Z)(a(7294));let n=r.default.createContext(null);t.LoadableContext=n},4588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(932).Z,n=a(6495).Z,s=(0,a(2648).Z)(a(7294)),l=a(4564),i=a(3644);let o=[],d=[],c=!1;function u(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t),n=null;function o(){if(!n){let t=new h(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(a.lazy=s.default.lazy(r(function*(){if(a.ssr&&n){let e=n.getCurrentValue(),t=yield e.loaded;if(t)return t}return yield a.loader()})),!c){let e=a.webpack?a.webpack():a.modules;e&&d.push(t=>{for(let a of e)if(-1!==t.indexOf(a))return o()})}function u(e){!function(){o();let e=s.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let t=a.loading,r=s.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),n=a.ssr?s.default.Fragment:l.NoSSR,d=a.lazy;return s.default.createElement(s.default.Suspense,{fallback:r},s.default.createElement(n,null,s.default.createElement(d,Object.assign({},e))))}return u.preload=()=>o(),u.displayName="LoadableComponent",u}(u,e)}function m(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return m(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{m(o).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(c=!0,t());m(d,e).then(a,a)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},7309:function(e,t,a){"use strict";a.d(t,{k:function(){return d}});var r=a(7297),n=a(5152),s=a.n(n),l=a(948);function i(){let e=(0,r.Z)([""]);return i=function(){return e},e}let o=s()(()=>Promise.all([a.e(279),a.e(229)]).then(a.bind(a,7229)),{loadableGenerated:{webpack:()=>[7229]},ssr:!1,loading:()=>null}),d=(0,l.ZP)(o)(i())},6476:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var r=a(5893),n=a(7294),s=a(6886),l=a(6242),i=a(4267),o=a(5861),d=a(7357),c=a(5582),u=a(8334),h=a(5697),p=a.n(h),m=a(2743),x=a(8445),f=a(9661),y=a(3219),g=a(7906),Z=a(3184),j=a(3816),w=a(8102),v=a(295),b=a(9305),_=a(7720),S=a(2023),P=a(3321),M=a(2377),C=a(1590);let k=e=>{let{employees:t=[],sx:a}=e,[s,i]=(0,n.useState)(0),o=(e,t)=>{i(t)},c=t.slice(5*s,5*s+5);return(0,r.jsxs)(l.Z,{sx:{sx:a},children:[(0,r.jsx)(x.Z,{avatar:(0,r.jsx)(f.Z,{sx:{backgroundColor:"warning.main",height:56,width:56,paddingBottom:0},children:(0,r.jsx)(y.Z,{children:(0,r.jsx)(C.Z,{})})}),title:"Department employees"}),(0,r.jsx)(M.L,{sx:{flexGrow:1},children:(0,r.jsx)(d.Z,{sx:{minWidth:400,paddingTop:0},children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(Z.Z,{children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(w.Z,{style:{width:"35%",maxWidth:"150px"},children:"Name"}),(0,r.jsx)(w.Z,{style:{width:"30%",maxWidth:"150px"},children:"Email"}),(0,r.jsx)(w.Z,{style:{width:"35%",maxWidth:"150px"},children:"Phone"})]})}),(0,r.jsx)(v.Z,{children:c.map(e=>(0,r.jsxs)(j.Z,{hover:!0,children:[(0,r.jsxs)(w.Z,{width:"25%",children:[" ",e.firstName+" "+e.lastName," "]}),(0,r.jsxs)(w.Z,{width:"35%",children:[" ",e.email," "]}),(0,r.jsxs)(w.Z,{width:"40%",children:[" ",e.phoneNumber," "]})]},e.id))})]})})}),(0,r.jsx)(b.Z,{component:"div",count:t.length,rowsPerPage:5,page:s,onPageChange:o,rowsPerPageOptions:[]}),(0,r.jsx)(_.Z,{}),(0,r.jsx)(S.Z,{sx:{justifyContent:"flex-end"},children:(0,r.jsx)(P.Z,{color:"inherit",endIcon:(0,r.jsx)(y.Z,{fontSize:"small",children:(0,r.jsx)(m.Z,{})}),size:"small",variant:"text",children:"View all"})})]})};k.propTypes={employees:p().array,sx:p().object};let E=n.forwardRef(function({title:e,titleId:t,...a},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z",clipRule:"evenodd"}))});var O=a(2734),D=a(1796),N=a(7309),z=a(4855);let T=()=>{let e=(0,O.Z)();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.main,(0,D.Fq)(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:e=>e>0?"".concat(e,"K"):"".concat(e),offsetX:-10,style:{colors:e.palette.text.secondary}}}}},R=e=>{let{chartSeries:t,sx:a}=e,n=T();return(0,r.jsxs)(l.Z,{sx:a,children:[(0,r.jsx)(x.Z,{avatar:(0,r.jsx)(f.Z,{sx:{backgroundColor:"info.main",height:56,width:56,paddingBottom:0},children:(0,r.jsx)(y.Z,{children:(0,r.jsx)(z.Z,{})})}),action:(0,r.jsx)(P.Z,{color:"inherit",size:"small",startIcon:(0,r.jsx)(y.Z,{fontSize:"small",children:(0,r.jsx)(E,{})}),children:"Sync"}),title:"Solved issues per month"}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(N.k,{height:350,options:n,series:t,type:"bar",width:"100%"})}),(0,r.jsx)(_.Z,{})]})};R.protoTypes={chartSeries:p().array.isRequired,sx:p().object};var A=a(7344),L=a(9008),V=a.n(L),I=a(6822),G=a(2912),W=a(3703),Y=a(7844),F=a(1163);let B=()=>{let e=(0,F.useRouter)(),{uid:t}=e.query,a=(0,I.Z)(),[u,h]=(0,n.useState)(null),[p,m]=(0,n.useState)([]),[x,f]=(0,n.useState)([]),[y,g]=(0,n.useState)({solved:0,solving:0}),[Z,j]=(0,n.useState)({thisYear:[],lastYear:[]}),w=async()=>{try{console.log(t);let e=await a.get("/api/v1/departments/".concat(t));h(e.data)}catch(e){console.log(e)}},v=async()=>{try{let e=await a.get("api/v1/departments/".concat(u.uid,"/employees"));console.log(e);let t=e.data.map(e=>({uid:e.uid,email:e.email,firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,departmentUid:e.departmentUid,creationDate:e.creationDate}));m(t)}catch(e){return console.log(e),null}},b=async()=>{try{let e=await a.get("/api/v1/issues/department/".concat(u.uid)),t=e.data.issues,r=t.map(e=>({id:e.id,name:e.title,description:e.description,longitude:e.coordinates.longitude,latitude:e.coordinates.latitude,dateOfCreation:e.creationDate,status:e.status}));f(r)}catch(e){console.log(e)}},_=async()=>{try{let e=(0,G.Z)((0,W.Z)(new Date),"yyyy-MM-dd"),t=await a.get("/api/v1/issues/department/".concat(u.uid,"/count?from=").concat(e,"&statuses=SOLVED")),r=await a.get("/api/v1/issues/department/".concat(u.uid,"/count?from=").concat(e,"&statuses=SOLVING")),n=t.data.count,s=r.data.count;g({solved:n,solving:s})}catch(e){console.log(e)}},S=async()=>{try{let e=new Date().getFullYear(),t=e-1,r=Array.from({length:12},(e,t)=>t),n=r.map(async t=>{let r=(0,G.Z)(new Date(e,t,1),"yyyy-MM-dd"),n=(0,G.Z)((0,Y.Z)(new Date(e,t)),"yyyy-MM-dd"),s=await a.get("/api/v1/solutions/department/".concat(u.uid,"/count?from=").concat(r,"&to=").concat(n));return s.data.count}),s=r.map(async e=>{let r=(0,G.Z)(new Date(t,e,1),"yyyy-MM-dd"),n=(0,G.Z)((0,Y.Z)(new Date(t,e)),"yyyy-MM-dd"),s=await a.get("/api/v1/solutions/department/".concat(u.uid,"/count?from=").concat(r,"&to=").concat(n));return s.data.count}),[l,i]=await Promise.all([Promise.all(n),Promise.all(s)]);j({thisYear:l,lastYear:i})}catch(e){console.log(e)}};return(0,n.useEffect)(()=>{let e=async()=>{await w()};e()},[]),(0,n.useEffect)(()=>{u&&(v(),b(),_(),S())},[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V(),{children:(0,r.jsx)("title",{children:"Department detail"})}),(0,r.jsx)(s.ZP,{container:!0,spacing:3,children:(0,r.jsx)(s.ZP,{item:!0,xs:12,sx:{paddingTop:0},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(o.Z,{variant:"h5",children:[u?u.name:null," - detail"]})})})})}),(0,r.jsx)(d.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsx)(c.Z,{maxWidth:"xl",children:(0,r.jsxs)(s.ZP,{spacing:3,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,sm:6,lg:4,children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{variant:"h5",children:"Information"}),(0,r.jsx)("div",{children:(0,r.jsxs)(o.Z,{variant:"body",children:["Tel: ",u?u.phoneNumber:null," "]})}),(0,r.jsx)("div",{children:(0,r.jsxs)(o.Z,{variant:"body",children:["Address: ",u?u.address:null," "]})}),(0,r.jsx)("div",{children:(0,r.jsxs)(o.Z,{variant:"body",children:[" Description: ",u?u.description:null," "]})})]})})}),(0,r.jsx)(s.ZP,{xs:12,md:12,lg:8,children:(0,r.jsx)(A.n,{issues:x,sx:{height:"100%"}})}),(0,r.jsx)(s.ZP,{xs:12,md:12,lg:8,children:(0,r.jsx)(k,{employees:p,sx:{height:"100%"}})}),(0,r.jsx)(s.ZP,{xs:12,sm:6,lg:4,children:(0,r.jsx)(R,{chartSeries:[{name:"This year",data:Z.thisYear},{name:"Last year",data:Z.lastYear}],sx:{height:"100%"}})})]})})})]})};B.getLayout=e=>(0,r.jsx)(u.A,{children:e});var H=B},7344:function(e,t,a){"use strict";a.d(t,{n:function(){return E}});var r=a(5893),n=a(7294),s=a(5697),l=a.n(s),i=a(2743),o=a(6242),d=a(8445),c=a(9661),u=a(3219),h=a(7357),p=a(7906),m=a(3184),x=a(3816),f=a(8102),y=a(295),g=a(9305),Z=a(7720),j=a(2023),w=a(3321),v=a(2377),b=a(948);let _=(0,b.ZP)("span")(e=>{let{theme:t,ownerState:a}=e,r=t.palette[a.color].alpha12,n="dark"===t.palette.mode?t.palette[a.color].main:t.palette[a.color].dark;return{alignItems:"center",backgroundColor:r,borderRadius:12,color:n,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:t.spacing(1),paddingRight:t.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}),S=e=>{let{color:t="primary",children:a,...n}=e;return(0,r.jsx)(_,{ownerState:{color:t},...n,children:a})};S.propTypes={children:l().node,color:l().oneOf(["primary","secondary","error","info","warning","success"])};var P=a(1590),M=a(5337),C=a(2912);let k={SOLVING:"warning",SOLVED:"success"},E=e=>{let{issues:t=[],sx:a}=e,[s,l]=(0,n.useState)(0),b=(e,t)=>{l(t)},_=t.slice(5*s,5*s+5),E=e=>{let t=(0,M.Z)(e,"yyyy-MM-dd'T'HH:mm:ss.SSSSSS",new Date);return t};return(0,r.jsxs)(o.Z,{sx:a,children:[(0,r.jsx)(d.Z,{avatar:(0,r.jsx)(c.Z,{sx:{backgroundColor:"warning.main",height:56,width:56,paddingBottom:0},children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(P.Z,{})})}),title:"Your latest Issues"}),(0,r.jsx)(v.L,{sx:{flexGrow:1},children:(0,r.jsx)(h.Z,{sx:{minWidth:800,paddingTop:0},children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(m.Z,{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(f.Z,{children:" Issue Nr. "}),(0,r.jsx)(f.Z,{children:" What happened "}),(0,r.jsx)(f.Z,{children:" Location "}),(0,r.jsx)(f.Z,{sortDirection:"desc",children:" Date "}),(0,r.jsx)(f.Z,{children:" Status "})]})}),(0,r.jsx)(y.Z,{children:_.map(e=>{let t=(0,C.Z)(E(e.dateOfCreation),"dd/MM/yyyy");return(0,r.jsxs)(x.Z,{hover:!0,children:[(0,r.jsxs)(f.Z,{children:[" ",e.id," "]}),(0,r.jsxs)(f.Z,{children:[" ",e.name," "]}),(0,r.jsxs)(f.Z,{children:[" ",e.latitude,", ",e.longitude," "]}),(0,r.jsxs)(f.Z,{children:[" ",t," "]}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(S,{color:k[e.status],children:e.status})})]},e.id)})})]})})}),(0,r.jsx)(g.Z,{component:"div",count:t.length,rowsPerPage:5,page:s,onPageChange:b,rowsPerPageOptions:[]}),(0,r.jsx)(Z.Z,{}),(0,r.jsx)(j.Z,{sx:{justifyContent:"flex-end"},children:(0,r.jsx)(w.Z,{color:"inherit",endIcon:(0,r.jsx)(u.Z,{fontSize:"small",children:(0,r.jsx)(i.Z,{})}),size:"small",variant:"text",children:"View all"})})]})};E.propTypes={issues:l().array,sx:l().object}},6822:function(e,t,a){"use strict";var r=a(5121);let n=()=>{let e=r.Z.create({baseURL:"https://bettercity.mikita.dev",timeout:8e3,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("token")}});return e};t.Z=n},5152:function(e,t,a){e.exports=a(7645)},2743:function(e,t,a){"use strict";var r=a(7294);let n=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",clipRule:"evenodd"}))});t.Z=n},1590:function(e,t,a){"use strict";var r=a(7294);let n=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});t.Z=n}},function(e){e.O(0,[823,549,837,703,258,879,723,334,774,888,179],function(){return e(e.s=6828)}),_N_E=e.O()}]);