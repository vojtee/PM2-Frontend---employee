(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{1088:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var s=n(a(4938)),l=a(5893),r=(0,s.default)((0,l.jsx)("path",{d:"M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"}),"DataUsage");t.Z=r},55:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var s=n(a(4938)),l=a(5893),r=(0,s.default)((0,l.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.Z=r},940:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var s=n(a(4938)),l=a(5893),r=(0,s.default)((0,l.jsx)("path",{d:"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.Z=r},2023:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(3366),s=a(7462),l=a(7294),r=a(6010),i=a(4780),o=a(948),d=a(1657),c=a(1588),u=a(4867);function h(e){return(0,u.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);var p=a(5893);let m=["disableSpacing","className"],f=e=>{let{classes:t,disableSpacing:a}=e;return(0,i.Z)({root:["root",!a&&"spacing"]},h,t)},y=(0,o.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,s.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),x=l.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:l=!1,className:i}=a,o=(0,n.Z)(a,m),c=(0,s.Z)({},a,{disableSpacing:l}),u=f(c);return(0,p.jsx)(y,(0,s.Z)({className:(0,r.Z)(u.root,i),ownerState:c,ref:t},o))});var g=x},4174:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/employee-detail/[uid]",function(){return a(6726)}])},7645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=l.default,s={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=n({},s,e)),s=n({},s,t);let i=s.loader,o=()=>null!=i?i().then(r):Promise.resolve(r(()=>null));return s.loadableGenerated&&delete(s=n({},s,s.loadableGenerated)).loadableGenerated,"boolean"!=typeof s.ssr||s.ssr||(delete s.webpack,delete s.modules),a(n({},s,{loader:o}))};var n=a(6495).Z,s=a(2648).Z;s(a(7294));var l=s(a(4588));function r(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,a(2648).Z)(a(7294));let s=n.default.createContext(null);t.LoadableContext=s},4588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(932).Z,s=a(6495).Z,l=(0,a(2648).Z)(a(7294)),r=a(4564),i=a(3644);let o=[],d=[],c=!1;function u(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t),s=null;function o(){if(!s){let t=new h(e,a);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()}if(a.lazy=l.default.lazy(n(function*(){if(a.ssr&&s){let e=s.getCurrentValue(),t=yield e.loaded;if(t)return t}return yield a.loader()})),!c){let e=a.webpack?a.webpack():a.modules;e&&d.push(t=>{for(let a of e)if(-1!==t.indexOf(a))return o()})}function u(e){!function(){o();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let t=a.loading,n=l.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),s=a.ssr?l.default.Fragment:r.NoSSR,d=a.lazy;return l.default.createElement(l.default.Suspense,{fallback:n},l.default.createElement(s,null,l.default.createElement(d,Object.assign({},e))))}return u.preload=()=>o(),u.displayName="LoadableComponent",u}(u,e)}function m(e,t){let a=[];for(;e.length;){let n=e.pop();a.push(n(t))}return Promise.all(a).then(()=>{if(e.length)return m(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{m(o).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(c=!0,t());m(d,e).then(a,a)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},7309:function(e,t,a){"use strict";a.d(t,{k:function(){return d}});var n=a(7297),s=a(5152),l=a.n(s),r=a(948);function i(){let e=(0,n.Z)([""]);return i=function(){return e},e}let o=l()(()=>Promise.all([a.e(279),a.e(229)]).then(a.bind(a,7229)),{loadableGenerated:{webpack:()=>[7229]},ssr:!1,loading:()=>null}),d=(0,r.ZP)(o)(i())},6726:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var n=a(5893),s=a(7294),l=a(6886),r=a(6242),i=a(4267),o=a(5861),d=a(7357),c=a(5582),u=a(8334),h=a(5697),p=a.n(h),m=a(2734),f=a(3219),y=a(8445),x=a(9661),g=a(6447),Z=a(7309),j=a(940),v=a(55),b=a(1088);let w=()=>{let e=(0,m.Z)();return{chart:{background:"transparent"},colors:[e.palette.success.main,e.palette.warning.main],dataLabels:{enabled:!1},labels:["Solved","Solving"],legend:{show:!1},plotOptions:{pie:{expandOnClick:!1}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:e.palette.mode},tooltip:{fillSeriesColor:!1}}},_={Solved:(0,n.jsx)(f.Z,{style:{color:"#10B981"},children:(0,n.jsx)(v.Z,{})}),Solving:(0,n.jsx)(f.Z,{style:{color:"#F79009"},children:(0,n.jsx)(j.Z,{})})},S=e=>{let{chartSeries:t,sx:a}=e,s=w();return(0,n.jsxs)(r.Z,{sx:a,children:[(0,n.jsx)(y.Z,{avatar:(0,n.jsx)(x.Z,{sx:{backgroundColor:"success.main",height:56,width:56,paddingBottom:0},children:(0,n.jsx)(f.Z,{children:(0,n.jsx)(b.Z,{})})}),title:"This month's issues & their statuses"}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(Z.k,{height:300,options:s,series:t,type:"donut",width:"100%"}),(0,n.jsx)(g.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:2,sx:{mt:2},children:t.map((e,t)=>{let a=s.labels[t];return(0,n.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[_[a],(0,n.jsx)(o.Z,{sx:{my:1},variant:"h6",children:a}),(0,n.jsx)(o.Z,{color:"text.secondary",variant:"subtitle2",children:e})]},a)})})]})]})};S.propTypes={chartSeries:p().array.isRequired,sx:p().object};var M=a(7344),C=a(9008),P=a.n(C),E=a(6822),k=a(2912),O=a(3703),N=a(7844),D=a(1163);let R=()=>{let e=(0,D.useRouter)(),{uid:t}=e.query,a=(0,E.Z)(),[u,h]=(0,s.useState)(null),[p,m]=(0,s.useState)([]),[f,y]=(0,s.useState)({solved:0,solving:0}),[x,g]=(0,s.useState)({thisYear:[],lastYear:[]}),Z=async()=>{try{let e=await a.get("/api/v1/employees/".concat(t)),n=await a.get("/api/v1/departments/".concat(e.data.departmentUid)),s=await a.get("/api/v1/issues/employee/".concat(e.data.uid,"/count?statuses=SOLVED"));h({departmentUid:e.data.departmentUid,email:e.data.email,firstName:e.data.firstName,lastName:e.data.lastName,phoneNumber:e.data.phoneNumber,uid:e.data.uid,departmentName:n.data.name,issuesCount:s.data.count})}catch(e){console.log(e)}},j=async()=>{try{let e=await a.get("/api/v1/issues/employee/".concat(u.uid)),t=e.data.issues,n=t.map(e=>({id:e.id,name:e.title,description:e.description,longitude:e.coordinates.longitude,latitude:e.coordinates.latitude,dateOfCreation:e.creationDate,status:e.status}));m(n)}catch(e){console.log(e)}},v=async()=>{try{let e=(0,k.Z)((0,O.Z)(new Date),"yyyy-MM-dd"),t=await a.get("/api/v1/issues/employee/".concat(u.uid,"/count?from=").concat(e,"&statuses=SOLVED")),n=await a.get("/api/v1/issues/employee/".concat(u.uid,"/count?from=").concat(e,"&statuses=SOLVING")),s=t.data.count,l=n.data.count;y({solved:s,solving:l})}catch(e){console.log(e)}},b=async()=>{try{let e=new Date().getFullYear(),t=e-1,n=Array.from({length:12},(e,t)=>t),s=n.map(async t=>{let n=(0,k.Z)(new Date(e,t,1),"yyyy-MM-dd"),s=(0,k.Z)((0,N.Z)(new Date(e,t)),"yyyy-MM-dd"),l=await a.get("/api/v1/solutions/employee/".concat(u.uid,"/count?from=").concat(n,"&to=").concat(s));return l.data.count}),l=n.map(async e=>{let n=(0,k.Z)(new Date(t,e,1),"yyyy-MM-dd"),s=(0,k.Z)((0,N.Z)(new Date(t,e)),"yyyy-MM-dd"),l=await a.get("/api/v1/solutions/employee/".concat(u.uid,"/count?from=").concat(n,"&to=").concat(s));return l.data.count}),[r,i]=await Promise.all([Promise.all(s),Promise.all(l)]);g({thisYear:r,lastYear:i})}catch(e){console.log(e)}};return(0,s.useEffect)(()=>{let e=async()=>{await Z()};e()},[]),(0,s.useEffect)(()=>{u&&(j(),v(),b())},[u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P(),{children:(0,n.jsx)("title",{children:"Employee detail"})}),(0,n.jsx)(l.ZP,{container:!0,spacing:3,children:(0,n.jsx)(l.ZP,{item:!0,xs:12,children:(0,n.jsx)(r.Z,{children:(0,n.jsx)(i.Z,{children:(0,n.jsxs)(o.Z,{variant:"h5",children:[" ",u?u.firstName+" "+u.lastName:null]})})})})}),(0,n.jsx)(d.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsx)(c.Z,{maxWidth:"xl",children:(0,n.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(l.ZP,{xs:12,sm:6,lg:4,children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(o.Z,{variant:"h5",children:"Basic information"}),(0,n.jsxs)(o.Z,{variant:"body1",children:["Email: ",u?u.email:null," "]}),(0,n.jsxs)(o.Z,{variant:"body1",children:["Phone: ",u?u.phoneNumber:null," "]}),(0,n.jsxs)(o.Z,{variant:"body1",children:["Department: ",u?u.departmentName:null," "]}),(0,n.jsxs)(o.Z,{variant:"body1",children:["Resolved Issues: ",u?u.issuesCount:null," "]})]})})}),(0,n.jsx)(l.ZP,{xs:12,md:12,lg:8,children:(0,n.jsx)(M.n,{issues:p,sx:{height:"100%"}})}),(0,n.jsx)(l.ZP,{xs:12,lg:8}),(0,n.jsx)(l.ZP,{xs:12,md:6,lg:4,children:(0,n.jsx)(S,{chartSeries:[f.solved,f.solving],labels:["Solved","Solving"],sx:{height:"100%"}})})]})})})]})};R.getLayout=e=>(0,n.jsx)(u.A,{children:e});var z=R},7344:function(e,t,a){"use strict";a.d(t,{n:function(){return k}});var n=a(5893),s=a(7294),l=a(5697),r=a.n(l),i=a(2743),o=a(6242),d=a(8445),c=a(9661),u=a(3219),h=a(7357),p=a(7906),m=a(3184),f=a(3816),y=a(8102),x=a(295),g=a(9305),Z=a(7720),j=a(2023),v=a(3321),b=a(2377),w=a(948);let _=(0,w.ZP)("span")(e=>{let{theme:t,ownerState:a}=e,n=t.palette[a.color].alpha12,s="dark"===t.palette.mode?t.palette[a.color].main:t.palette[a.color].dark;return{alignItems:"center",backgroundColor:n,borderRadius:12,color:s,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:t.spacing(1),paddingRight:t.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}),S=e=>{let{color:t="primary",children:a,...s}=e;return(0,n.jsx)(_,{ownerState:{color:t},...s,children:a})};S.propTypes={children:r().node,color:r().oneOf(["primary","secondary","error","info","warning","success"])};var M=a(1590),C=a(5337),P=a(2912);let E={SOLVING:"warning",SOLVED:"success"},k=e=>{let{issues:t=[],sx:a}=e,[l,r]=(0,s.useState)(0),w=(e,t)=>{r(t)},_=t.slice(5*l,5*l+5),k=e=>{let t=(0,C.Z)(e,"yyyy-MM-dd'T'HH:mm:ss.SSSSSS",new Date);return t};return(0,n.jsxs)(o.Z,{sx:a,children:[(0,n.jsx)(d.Z,{avatar:(0,n.jsx)(c.Z,{sx:{backgroundColor:"warning.main",height:56,width:56,paddingBottom:0},children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(M.Z,{})})}),title:"Your latest Issues"}),(0,n.jsx)(b.L,{sx:{flexGrow:1},children:(0,n.jsx)(h.Z,{sx:{minWidth:800,paddingTop:0},children:(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(m.Z,{children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(y.Z,{children:" Issue Nr. "}),(0,n.jsx)(y.Z,{children:" What happened "}),(0,n.jsx)(y.Z,{children:" Location "}),(0,n.jsx)(y.Z,{sortDirection:"desc",children:" Date "}),(0,n.jsx)(y.Z,{children:" Status "})]})}),(0,n.jsx)(x.Z,{children:_.map(e=>{let t=(0,P.Z)(k(e.dateOfCreation),"dd/MM/yyyy");return(0,n.jsxs)(f.Z,{hover:!0,children:[(0,n.jsxs)(y.Z,{children:[" ",e.id," "]}),(0,n.jsxs)(y.Z,{children:[" ",e.name," "]}),(0,n.jsxs)(y.Z,{children:[" ",e.latitude,", ",e.longitude," "]}),(0,n.jsxs)(y.Z,{children:[" ",t," "]}),(0,n.jsx)(y.Z,{children:(0,n.jsx)(S,{color:E[e.status],children:e.status})})]},e.id)})})]})})}),(0,n.jsx)(g.Z,{component:"div",count:t.length,rowsPerPage:5,page:l,onPageChange:w,rowsPerPageOptions:[]}),(0,n.jsx)(Z.Z,{}),(0,n.jsx)(j.Z,{sx:{justifyContent:"flex-end"},children:(0,n.jsx)(v.Z,{color:"inherit",endIcon:(0,n.jsx)(u.Z,{fontSize:"small",children:(0,n.jsx)(i.Z,{})}),size:"small",variant:"text",children:"View all"})})]})};k.propTypes={issues:r().array,sx:r().object}},6822:function(e,t,a){"use strict";var n=a(5121);let s=()=>{let e=n.Z.create({baseURL:"https://bettercity.mikita.dev",timeout:8e3,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("token")}});return e};t.Z=s},5152:function(e,t,a){e.exports=a(7645)},2743:function(e,t,a){"use strict";var n=a(7294);let s=n.forwardRef(function({title:e,titleId:t,...a},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",clipRule:"evenodd"}))});t.Z=s},1590:function(e,t,a){"use strict";var n=a(7294);let s=n.forwardRef(function({title:e,titleId:t,...a},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});t.Z=s}},function(e){e.O(0,[823,549,837,703,258,879,723,334,774,888,179],function(){return e(e.s=4174)}),_N_E=e.O()}]);