(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{3795:function(e,r,n){"use strict";n.d(r,{Z:function(){return S}});var t=n(3366),o=n(7462),a=n(7294),i=n(6010),s=n(4780),l=n(8216),u=n(948),d=n(1657),c=n(8791),m=n(1705),h=n(5861),p=n(1588),x=n(4867);function f(e){return(0,x.Z)("MuiLink",e)}let b=(0,p.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var v=n(4844),y=n(1796);let Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},g=e=>Z[e]||e,w=({theme:e,ownerState:r})=>{let n=g(r.color),t=(0,v.DW)(e,`palette.${n}`,!1)||r.color,o=(0,v.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,y.Fq)(t,.4)};var j=n(5893);let C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],_=e=>{let{classes:r,component:n,focusVisible:t,underline:o}=e,a={root:["root",`underline${(0,l.Z)(o)}`,"button"===n&&"button",t&&"focusVisible"]};return(0,s.Z)(a,f,r)},k=(0,u.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,r[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&r.button]}})(({theme:e,ownerState:r})=>(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:w({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})),A=a.forwardRef(function(e,r){let n=(0,d.Z)({props:e,name:"MuiLink"}),{className:s,color:l="primary",component:u="a",onBlur:h,onFocus:p,TypographyClasses:x,underline:f="always",variant:b="inherit",sx:v}=n,y=(0,t.Z)(n,C),{isFocusVisibleRef:g,onBlur:w,onFocus:A,ref:S}=(0,c.Z)(),[N,B]=a.useState(!1),D=(0,m.Z)(r,S),W=e=>{w(e),!1===g.current&&B(!1),h&&h(e)},E=e=>{A(e),!0===g.current&&B(!0),p&&p(e)},R=(0,o.Z)({},n,{color:l,component:u,focusVisible:N,underline:f,variant:b}),T=_(R);return(0,j.jsx)(k,(0,o.Z)({color:l,className:(0,i.Z)(T.root,s),classes:x,component:u,onBlur:W,onFocus:E,ref:D,ownerState:R,variant:b,sx:[...Object.keys(Z).includes(l)?[]:[{color:l}],...Array.isArray(v)?v:[v]]},y))});var S=A},3829:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return n(9369)}])},2540:function(e,r,n){"use strict";n(5893)},2662:function(e,r,n){"use strict";n.d(r,{a:function(){return a}});var t=n(7294),o=n(1643);let a=()=>(0,t.useContext)(o.Vo)},8354:function(e,r,n){"use strict";n.d(r,{A:function(){return l}});var t=n(5893),o=n(5697),a=n.n(o);n(1664);var i=n(7357),s=n(1426);n(2540);let l=e=>{let{children:r}=e;return(0,t.jsx)(i.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto"},children:(0,t.jsx)(s.Z,{container:!0,sx:{flex:"1 1 auto"},children:r})})};l.prototypes={children:a().node}},9369:function(e,r,n){"use strict";n.r(r);var t=n(5893),o=n(9008),a=n.n(o),i=n(1664),s=n.n(i),l=n(9332),u=n(8482),d=n(6310),c=n(7357),m=n(6447),h=n(5861),p=n(3795),x=n(135),f=n(3321),b=n(2662),v=n(8354);let y=()=>{let e=(0,l.useRouter)(),r=(0,b.a)(),n=(0,u.TA)({initialValues:{email:"",name:"",password:"",submit:null},validationSchema:d.Ry({email:d.Z_().email("Must be a valid email").max(255).required("Email is required"),name:d.Z_().max(255).required("Name is required"),password:d.Z_().max(255).required("Password is required")}),onSubmit:async(n,t)=>{try{await r.signUp(n.email,n.name,n.password),e.push("/")}catch(e){t.setStatus({success:!1}),t.setErrors({submit:e.message}),t.setSubmitting(!1)}}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"Register | Devias Kit"})}),(0,t.jsx)(c.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,t.jsx)(c.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(m.Z,{spacing:1,sx:{mb:3},children:[(0,t.jsx)(h.Z,{variant:"h4",children:"Register"}),(0,t.jsxs)(h.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,t.jsx)(p.Z,{component:s(),href:"/auth/login",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),(0,t.jsxs)("form",{noValidate:!0,onSubmit:n.handleSubmit,children:[(0,t.jsxs)(m.Z,{spacing:3,children:[(0,t.jsx)(x.Z,{error:!!(n.touched.name&&n.errors.name),fullWidth:!0,helperText:n.touched.name&&n.errors.name,label:"Name",name:"name",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.name}),(0,t.jsx)(x.Z,{error:!!(n.touched.email&&n.errors.email),fullWidth:!0,helperText:n.touched.email&&n.errors.email,label:"Email Address",name:"email",onBlur:n.handleBlur,onChange:n.handleChange,type:"email",value:n.values.email}),(0,t.jsx)(x.Z,{error:!!(n.touched.password&&n.errors.password),fullWidth:!0,helperText:n.touched.password&&n.errors.password,label:"Password",name:"password",onBlur:n.handleBlur,onChange:n.handleChange,type:"password",value:n.values.password})]}),n.errors.submit&&(0,t.jsx)(h.Z,{color:"error",sx:{mt:3},variant:"body2",children:n.errors.submit}),(0,t.jsx)(f.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Continue"})]})]})})})]})};y.getLayout=e=>(0,t.jsx)(v.A,{children:e}),r.default=y}},function(e){e.O(0,[823,549,703,28,741,783,774,888,179],function(){return e(e.s=3829)}),_N_E=e.O()}]);