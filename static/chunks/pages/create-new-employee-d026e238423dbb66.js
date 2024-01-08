(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{3881:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-new-employee",function(){return a(9276)}])},8354:function(e,r,a){"use strict";a.d(r,{A:function(){return d}});var n=a(5893),l=a(5697),s=a.n(l);a(1664);var t=a(7357),u=a(1426);a(2540);let d=e=>{let{children:r}=e;return(0,n.jsx)(t.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto"},children:(0,n.jsx)(u.Z,{container:!0,sx:{flex:"1 1 auto"},children:r})})};d.prototypes={children:s().node}},9276:function(e,r,a){"use strict";a.r(r);var n=a(5893),l=a(9008),s=a.n(l),t=a(1163),u=a(8482),d=a(6310),i=a(7357),o=a(6447),m=a(5861),h=a(135),p=a(3321),c=a(2662),x=a(8334);a(8354);var b=a(4054),j=a(3340),Z=a(6703),v=a(431),f=a(6815);let g=()=>{let e=(0,t.useRouter)();(0,c.a)();let r=(0,u.TA)({initialValues:{name:"",surname:"",password:"",phoneNumber:"",email:"",department:"",submit:null},validationSchema:d.Ry({name:d.Z_().max(255).required("Name is required"),surname:d.Z_().max(255).required("Surname is required"),password:d.Z_().max(255).required("Password is required"),phoneNumber:d.Z_().max(20).required("Phone Number is required"),email:d.Z_().email("Must be a valid email").max(255).required("Email is required"),department:d.Z_().max(255).required("Department is required")}),onSubmit:async(r,a)=>{try{e.push("/employee-list")}catch(e){a.setStatus({success:!1}),a.setErrors({submit:e.message}),a.setSubmitting(!1)}}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:"Create Employee"})}),(0,n.jsx)(i.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,n.jsx)(i.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{spacing:1,sx:{mb:3},children:(0,n.jsx)(m.Z,{variant:"h4",children:"Create Employee"})}),(0,n.jsxs)("form",{noValidate:!0,onSubmit:r.handleSubmit,children:[(0,n.jsxs)(o.Z,{spacing:3,children:[(0,n.jsx)(h.Z,{error:!!(r.touched.name&&r.errors.name),fullWidth:!0,helperText:r.touched.name&&r.errors.name,label:"Name",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name}),(0,n.jsx)(h.Z,{error:!!(r.touched.surname&&r.errors.surname),fullWidth:!0,helperText:r.touched.surname&&r.errors.surname,label:"Surname",name:"surname",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.surname}),(0,n.jsx)(h.Z,{error:!!(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password}),(0,n.jsx)(h.Z,{error:!!(r.touched.phoneNumber&&r.errors.phoneNumber),fullWidth:!0,helperText:r.touched.phoneNumber&&r.errors.phoneNumber,label:"Phone Number",name:"phoneNumber",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.phoneNumber}),(0,n.jsx)(h.Z,{error:!!(r.touched.email&&r.errors.email),fullWidth:!0,helperText:r.touched.email&&r.errors.email,label:"Email Address",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,type:"email",value:r.values.email}),(0,n.jsxs)(b.Z,{fullWidth:!0,children:[(0,n.jsx)(j.Z,{id:"department-label",children:"Department"}),(0,n.jsxs)(Z.Z,{labelId:"department-label",id:"department",name:"department",value:r.values.department,onChange:r.handleChange,onBlur:r.handleBlur,error:!!(r.touched.department&&r.errors.department),label:"Department",children:[(0,n.jsx)(v.Z,{value:"",disabled:!0,children:"Select a Department"}),(0,n.jsx)(v.Z,{value:"odpad",children:"odpad"}),(0,n.jsx)(v.Z,{value:"kanalizace",children:"kanalizace"}),(0,n.jsx)(v.Z,{value:"pepe",children:"pepe"})]}),r.touched.department&&r.errors.department&&(0,n.jsx)(f.Z,{error:!0,children:r.errors.department})]})]}),r.errors.submit&&(0,n.jsx)(m.Z,{color:"error",sx:{mt:3},variant:"body2",children:r.errors.submit}),(0,n.jsx)(p.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Create Employee"})]})]})})})]})};g.getLayout=e=>(0,n.jsx)(x.A,{children:e}),r.default=g}},function(e){e.O(0,[823,549,837,703,28,741,783,334,774,888,179],function(){return e(e.s=3881)}),_N_E=e.O()}]);